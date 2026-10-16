import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { sql } from "./db";

export const SESSION_COOKIE = "mp_session";
const SESSION_DAYS = 30;

export type AuthUser = {
  id: string;
  account_id: string;
  email: string;
  role: string;
  crm_user_id: string | null;
};

export async function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, 11);
}

export async function verifyPassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}

function newToken(): string {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function createSession(userId: string): Promise<string> {
  const token = newToken();
  const expires = new Date(Date.now() + SESSION_DAYS * 86400_000);
  await sql`
    INSERT INTO crm_sessions (token, user_id, expires_at)
    VALUES (${token}, ${userId}, ${expires.toISOString()})
  `;
  return token;
}

export async function deleteSession(token: string): Promise<void> {
  await sql`DELETE FROM crm_sessions WHERE token = ${token}`;
}

/** Devuelve el usuario autenticado a partir de la cookie, o null. */
export async function getSessionUser(): Promise<AuthUser | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const rows = (await sql`
    SELECT u.id, u.account_id, u.email, u.role, u.crm_user_id
    FROM crm_sessions s
    JOIN crm_auth_users u ON u.id = s.user_id
    WHERE s.token = ${token} AND s.expires_at > now()
    LIMIT 1
  `) as AuthUser[];

  return rows[0] ?? null;
}

export function sessionCookieOptions() {
  return {
    name: SESSION_COOKIE,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_DAYS * 86400,
  };
}
