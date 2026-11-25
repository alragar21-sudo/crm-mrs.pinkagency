import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

// Prueba del agente de IA (setter de WhatsApp) desde el CRM.
// Recibe un prompt que pide responder solo con JSON y devuelve ese JSON.
export async function POST(req: Request) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ code: "session_expired" }, { status: 401 });
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ code: "not_configured" }, { status: 503 });
  }

  const body = (await req.json().catch(() => null)) as { prompt?: unknown } | null;
  const prompt = typeof body?.prompt === "string" ? body.prompt : "";
  if (!prompt.trim() || prompt.length > 60000) {
    return NextResponse.json({ code: "bad_request" }, { status: 400 });
  }

  const client = new Anthropic();
  try {
    const response = await client.beta.messages.create({
      model: "claude-opus-5-5",
      max_tokens: 16000,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      output_config: { effort: "low" },
      system: "Responde únicamente con un objeto JSON válido, sin texto antes ni después.",
      messages: [{ role: "user", content: prompt }],
    });
    if (response.stop_reason === "refusal") {
      return NextResponse.json({ code: "refused" }, { status: 422 });
    }
    const text = response.content
      .map((b) => (b.type === "text" ? b.text : ""))
      .join("")
      .trim();
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");
    try {
      return NextResponse.json(JSON.parse(text.slice(start, end + 1)));
    } catch {
      return NextResponse.json({ code: "invalid_json" }, { status: 502 });
    }
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return NextResponse.json({ code: "rate_limited" }, { status: 429 });
    }
    console.error("Error en /api/ai/json", error);
    return NextResponse.json({ code: "error" }, { status: 502 });
  }
}
