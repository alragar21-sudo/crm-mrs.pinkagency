import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/* SCAFFOLD — WhatsApp Business API (Meta).
   Inactivo hasta tener: WABA aprobada, número verificado, plantillas y tokens.
   Variables previstas: WHATSAPP_VERIFY_TOKEN, WHATSAPP_TOKEN, WHATSAPP_PHONE_ID.

   GET  = verificación del webhook (handshake de Meta).
   POST = recepción de mensajes entrantes (se mapeará a conversaciones/contactos). */

export async function GET(req: Request) {
  const url = new URL(req.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");

  const verify = process.env.WHATSAPP_VERIFY_TOKEN;
  if (verify && mode === "subscribe" && token === verify && challenge) {
    return new NextResponse(challenge, { status: 200 });
  }
  return NextResponse.json({ error: "No configurado o verificación fallida." }, { status: 403 });
}

export async function POST() {
  // TODO (fase 2): validar firma, parsear mensajes y crear/actualizar conversaciones.
  return NextResponse.json({ ok: true, note: "WhatsApp aún no activado." });
}
