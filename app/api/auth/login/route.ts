import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sql } from "@/lib/db";
import { createSession, sessionCookieOptions, verifyPassword } from "@/lib/auth";

type Row = { id: string; password_hash: string };

export async function POST(req: Request) {
  let email = "";
  let password = "";
  try {
    const body = await req.json();
    email = String(body.email || "").trim().toLowerCase();
    password = String(body.password || "");
  } catch {
    return NextResponse.json({ error: "Petición no válida." }, { status: 400 });
  }

  if (!email || !password) {
    return NextResponse.json({ error: "Email y contraseña son obligatorios." }, { status: 400 });
  }

  const rows = (await sql`
    SELECT id, password_hash FROM crm_auth_users WHERE email = ${email} LIMIT 1
  `) as Row[];

  const user = rows[0];
  // Verificamos siempre (aunque no exista) para no filtrar qué emails están dados de alta.
  const ok = user
    ? await verifyPassword(password, user.password_hash)
    : await verifyPassword(password, "$2a$11$0000000000000000000000000000000000000000000000000000");

  if (!user || !ok) {
    return NextResponse.json({ error: "Email o contraseña incorrectos." }, { status: 401 });
  }

  const token = await createSession(user.id);
  const store = await cookies();
  store.set({ ...sessionCookieOptions(), value: token });

  return NextResponse.json({ ok: true });
}
