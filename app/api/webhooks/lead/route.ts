import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { setDoc } from "@/lib/records";
import { DEFAULT_ACCOUNT_ID, uid } from "@/lib/account";

export const dynamic = "force-dynamic";

/* Webhook público para captar leads de formularios/landings externas.
   Seguridad: requiere ?token=... que coincida con WEBHOOK_SECRET.
   Crea un contacto en la subcuenta indicada (campo "sub").
   Ejemplo:
   POST /api/webhooks/lead?token=XXXX
   { "sub": "s-mrspink", "nombre": "Ana", "email": "ana@x.com", "tel": "600...",
     "empresa": "ACME", "etiquetas": ["landing"], "notas": "..." } */
export async function POST(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token") || req.headers.get("x-webhook-token") || "";
  const secret = process.env.WEBHOOK_SECRET;

  if (!secret) {
    return NextResponse.json({ error: "Webhook no configurado (falta WEBHOOK_SECRET)." }, { status: 503 });
  }
  if (token !== secret) {
    return NextResponse.json({ error: "Token no válido." }, { status: 401 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON no válido." }, { status: 400 });
  }

  const sub = String(payload.sub || "").trim();
  const nombre = String(payload.nombre || payload.name || "").trim();
  if (!sub) return NextResponse.json({ error: 'Falta "sub" (subcuenta destino).' }, { status: 400 });
  if (!nombre) return NextResponse.json({ error: 'Falta "nombre".' }, { status: 400 });

  const accountId = DEFAULT_ACCOUNT_ID;
  const id = uid("c");
  const contacto = {
    id,
    sub,
    nombre,
    email: String(payload.email || ""),
    tel: String(payload.tel || payload.telefono || payload.phone || ""),
    empresa: String(payload.empresa || payload.company || ""),
    etiquetas: Array.isArray(payload.etiquetas) ? payload.etiquetas : [],
    fuente: String(payload.fuente || "Formulario web"),
    notas: String(payload.notas || ""),
    creado: new Date().toISOString(),
  };

  // Auditoría del evento entrante.
  await sql`
    INSERT INTO crm_inbound_events (id, account_id, source, payload)
    VALUES (${uid("ev")}, ${accountId}, ${"form"}, ${JSON.stringify(payload)}::jsonb)
  `;

  await setDoc(accountId, "contactos", id, contacto);

  return NextResponse.json({ ok: true, id });
}
