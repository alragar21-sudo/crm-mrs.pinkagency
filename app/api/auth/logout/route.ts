import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SESSION_COOKIE, deleteSession } from "@/lib/auth";

async function doLogout() {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (token) await deleteSession(token);
  store.delete(SESSION_COOKIE);
}

// Usado por el <form method="post"> del CRM: cierra sesión y vuelve al login.
export async function POST(req: Request) {
  await doLogout();
  return NextResponse.redirect(new URL("/login", req.url), { status: 303 });
}

export async function GET(req: Request) {
  await doLogout();
  return NextResponse.redirect(new URL("/login", req.url), { status: 303 });
}
