import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { listAll } from "@/lib/records";

export const dynamic = "force-dynamic";

// Bootstrap: devuelve las 12 colecciones del account del usuario.
export async function GET() {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "No autenticado." }, { status: 401 });

  const data = await listAll(user.account_id);
  return NextResponse.json(data);
}
