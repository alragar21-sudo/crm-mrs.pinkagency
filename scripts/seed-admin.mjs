import { neon } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("Falta DATABASE_URL.");
  process.exit(1);
}
const sql = neon(url);

// Uso: node --env-file=.env.local scripts/seed-admin.mjs <email> <password> [nombre]
const [, , emailArg, passArg, nombreArg] = process.argv;
const email = (emailArg || process.env.ADMIN_EMAIL || "").trim().toLowerCase();
const password = passArg || process.env.ADMIN_PASSWORD || "";
const nombre = nombreArg || "Alba";
const accountId = process.env.ACCOUNT_ID || "mrs-pink";

if (!email || !password) {
  console.error("Uso: node --env-file=.env.local scripts/seed-admin.mjs <email> <password> [nombre]");
  process.exit(1);
}

function uid(p) {
  return `${p}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}

async function main() {
  const hash = await bcrypt.hash(password, 11);
  const crmUserId = uid("u");
  const authId = uid("au");
  const now = new Date().toISOString();

  // 1) Usuario de autenticación (quién puede entrar).
  await sql`
    INSERT INTO crm_auth_users (id, account_id, email, password_hash, role, crm_user_id)
    VALUES (${authId}, ${accountId}, ${email}, ${hash}, ${"admin"}, ${crmUserId})
    ON CONFLICT (email) DO UPDATE
      SET password_hash = EXCLUDED.password_hash, role = 'admin'
  `;

  // 2) Documento de usuario dentro del CRM (RBAC in-app). Solo si no existe ya uno con ese email.
  const existing = await sql`
    SELECT id FROM crm_records
    WHERE account_id = ${accountId} AND collection = 'usuarios' AND data->>'email' = ${email}
    LIMIT 1
  `;
  if (existing.length === 0) {
    const doc = {
      id: crmUserId,
      nombre,
      email,
      rol: "admin",
      estado: "activo",
      subcuentas: [],
      permisos: {},
      invitadoEn: now,
      ultimoAcceso: now,
      actualizado: now,
    };
    await sql`
      INSERT INTO crm_records (account_id, collection, id, data)
      VALUES (${accountId}, 'usuarios', ${crmUserId}, ${JSON.stringify(doc)}::jsonb)
    `;
  }

  console.log(`✅ Admin lista: ${email} (cuenta: ${accountId}). Ya puedes entrar en /login.`);
}

main().catch((e) => {
  console.error("❌ Error al crear la admin:", e);
  process.exit(1);
});
