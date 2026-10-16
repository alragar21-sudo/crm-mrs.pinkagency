import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

/* SCAFFOLD — Meta Ads (lectura de inversión/leads para Informes).
   Inactivo hasta tener: app de Meta, OAuth y permisos revisados (ads_read).
   Variables previstas: META_APP_ID, META_APP_SECRET, META_REDIRECT_URI.
   Plan fase 2: OAuth -> guardar token por subcuenta -> import periódico a "anuncios". */

export async function GET() {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "No autenticado." }, { status: 401 });

  const configured = Boolean(process.env.META_APP_ID && process.env.META_APP_SECRET);
  return NextResponse.json({
    integration: "meta-ads",
    configured,
    status: configured ? "listo-para-oauth" : "pendiente-de-credenciales",
    note: "Activación en fase 2. La UI de conexión del CRM ya existe.",
  });
}
