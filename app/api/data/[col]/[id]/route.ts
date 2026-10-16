import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { delDoc, isCol, setDoc } from "@/lib/records";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ col: string; id: string }> };

// PUT: upsert de un documento (collection(col).doc(id).set(body)).
export async function PUT(req: Request, { params }: Params) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "No autenticado." }, { status: 401 });

  const { col, id } = await params;
  if (!isCol(col)) return NextResponse.json({ error: "Colección no válida." }, { status: 400 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON no válido." }, { status: 400 });
  }
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Cuerpo no válido." }, { status: 400 });
  }

  await setDoc(user.account_id, col, id, body);
  return NextResponse.json({ ok: true });
}

// DELETE: borra un documento (collection(col).doc(id).delete()).
export async function DELETE(_req: Request, { params }: Params) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "No autenticado." }, { status: 401 });

  const { col, id } = await params;
  if (!isCol(col)) return NextResponse.json({ error: "Colección no válida." }, { status: 400 });

  await delDoc(user.account_id, col, id);
  return NextResponse.json({ ok: true });
}
