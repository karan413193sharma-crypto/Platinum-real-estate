import dns from "node:dns";
import mongoose from "mongoose";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI in environment variables");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

function lookupSrv(service: string): Promise<dns.SrvRecord[]> {
  return new Promise((resolve, reject) => {
    dns.setServers(["8.8.8.8", "1.1.1.1"]);
    dns.resolveSrv(service, (error, addresses) => {
      if (error) reject(error);
      else resolve(addresses);
    });
  });
}

async function resolveMongoUri(uri: string) {
  if (!uri.startsWith("mongodb+srv://")) return uri;

  const withoutProtocol = uri.slice("mongodb+srv://".length);
  const atIndex = withoutProtocol.lastIndexOf("@");
  const credentials = atIndex >= 0 ? withoutProtocol.slice(0, atIndex + 1) : "";
  const remainder = atIndex >= 0 ? withoutProtocol.slice(atIndex + 1) : withoutProtocol;

  const queryIndex = remainder.indexOf("?");
  const host = queryIndex >= 0 ? remainder.slice(0, queryIndex).split("/")[0] : remainder.split("/")[0];
  const path = remainder.includes("/") ? remainder.slice(remainder.indexOf("/"), queryIndex >= 0 ? queryIndex : undefined) : "";
  const query = queryIndex >= 0 ? remainder.slice(queryIndex) : "?retryWrites=true&w=majority";

  const records = await lookupSrv(`_mongodb._tcp.${host}`);
  const seeds = records.map((record) => `${record.name}:${record.port}`).join(",");
  const tlsQuery = query.includes("tls=true") || query.includes("ssl=true") ? query : `${query}&tls=true`;

  return `mongodb://${credentials}${seeds}${path}${tlsQuery}`;
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const connectionUri = await resolveMongoUri(MONGODB_URI);
    cached.promise = mongoose.connect(connectionUri, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
