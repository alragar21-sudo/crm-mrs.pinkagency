import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSessionUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

// Envío real de email vía Resend. Lo usan las campañas de Marketing (tipo Email)
// y el paso "a_email" de los flujos.
export async function POST(req: Request) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "No autenticado." }, { status: 401 });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!apiKey || !from) {
    return NextResponse.json(
      { error: "Email no configurado. Falta RESEND_API_KEY o EMAIL_FROM.", configured: false },
      { status: 503 },
    );
  }

  let to: string | string[];
  let subject: string;
  let html: string | undefined;
  let text: string | undefined;
  try {
    const body = await req.json();
    to = body.to;
    subject = String(body.subject || "");
    html = body.html ? String(body.html) : undefined;
    text = body.text ? String(body.text) : undefined;
  } catch {
    return NextResponse.json({ error: "JSON no válido." }, { status: 400 });
  }

  if (!to || (Array.isArray(to) && to.length === 0) || !subject || (!html && !text)) {
    return NextResponse.json({ error: "Faltan campos: to, subject y (html o text)." }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from,
    to,
    subject,
    html: html ?? `<p>${text}</p>`,
    text: text ?? undefined,
  });

  if (error) {
    return NextResponse.json({ error: error.message || "Fallo al enviar." }, { status: 502 });
  }
  return NextResponse.json({ ok: true, id: data?.id });
}
