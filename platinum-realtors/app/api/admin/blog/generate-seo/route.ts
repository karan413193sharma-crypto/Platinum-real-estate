import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { title, content, city } = await req.json();

  if (!title || !content) {
    return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
  }

  const plainContent = content.replace(/<[^>]+>/g, " ").slice(0, 4000);

  const prompt = `You are an SEO assistant for a real estate agency blog based in ${city || "Mohali/Chandigarh"}, India.

Given this blog post, generate:
1. An SEO meta title (max 60 characters, includes the location where natural)
2. An SEO meta description (max 155 characters, compelling, includes a local keyword)
3. Three local keyword variants a buyer/renter in this city might actually search for

Post title: ${title}
Post content: ${plainContent}

Respond ONLY with valid JSON in this exact shape, no markdown fences, no preamble:
{"metaTitle": "...", "metaDescription": "...", "localKeywords": ["...", "...", "..."]}`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY as string,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-5",
      max_tokens: 500,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    return NextResponse.json({ error: "AI generation failed", detail: errText }, { status: 502 });
  }

  const data = await response.json();
  const textBlock = data.content.find((c: { type: string }) => c.type === "text");
  const raw = (textBlock?.text || "").replace(/```json|```/g, "").trim();

  try {
    const parsed = JSON.parse(raw);
    return NextResponse.json(parsed);
  } catch {
    return NextResponse.json({ error: "Could not parse AI response", raw }, { status: 502 });
  }
}
