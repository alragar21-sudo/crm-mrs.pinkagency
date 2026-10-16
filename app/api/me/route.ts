import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "No autenticado." }, { status: 401 });

  return NextResponse.json({
    id: user.id,
    email: user.email,
    role: user.role,
    crmUserId: user.crm_user_id,
    // En v1 cualquier usuario del equipo puede escribir; el RBAC fino lo aplica el CRM.
    canWrite: true,
  });
}
