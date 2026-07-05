import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  await connectDB();

  const post = await BlogPost.findOneAndUpdate(
    { slug: params.slug, status: "published" },
    { $inc: { viewCount: 1 } },
    { new: true }
  );

  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ post });
}
