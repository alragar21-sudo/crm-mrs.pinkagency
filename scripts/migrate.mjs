import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("Falta DATABASE_URL. Ejecuta: npm run db:migrate (con .env.local configurado).");
  process.exit(1);
}
const sql = neon(url);

async function main() {
  // Tablas prefijadas con crm_ para aislar el CRM de otros proyectos que
  // comparten esta misma base de datos Neon.
  await sql`
    CREATE TABLE IF NOT EXISTS crm_records (
      account_id  text NOT NULL,
      collection  text NOT NULL,
      id          text NOT NULL,
      data        jsonb NOT NULL,
      updated_at  timestamptz NOT NULL DEFAULT now(),
      PRIMARY KEY (account_id, collection, id)
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS crm_records_account_collection_idx ON crm_records (account_id, collection)`;

  await sql`
    CREATE TABLE IF NOT EXISTS crm_auth_users (
      id            text PRIMARY KEY,
      account_id    text NOT NULL,
      email         text UNIQUE NOT NULL,
      password_hash text NOT NULL,
      role          text NOT NULL DEFAULT 'equipo',
      crm_user_id   text,
      created_at    timestamptz NOT NULL DEFAULT now()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS crm_sessions (
      token      text PRIMARY KEY,
      user_id    text NOT NULL REFERENCES crm_auth_users(id) ON DELETE CASCADE,
      expires_at timestamptz NOT NULL
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS crm_sessions_user_idx ON crm_sessions (user_id)`;

  await sql`
    CREATE TABLE IF NOT EXISTS crm_inbound_events (
      id         text PRIMARY KEY,
      account_id text NOT NULL,
      source     text NOT NULL,
      payload    jsonb NOT NULL,
      created_at timestamptz NOT NULL DEFAULT now()
    )
  `;

  console.log("✅ Migración completada: crm_records, crm_auth_users, crm_sessions, crm_inbound_events.");
}

main().catch((e) => {
  console.error("❌ Error en la migración:", e);
  process.exit(1);
});
