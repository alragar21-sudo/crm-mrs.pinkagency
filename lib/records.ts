import { sql } from "./db";

// Las 12 colecciones del CRM (deben coincidir con COLS en public/crm/app.js).
export const COLS = [
  "subcuentas",
  "contactos",
  "oportunidades",
  "conversaciones",
  "campanas",
  "integraciones",
  "anuncios",
  "campanasAds",
  "briefs",
  "usuarios",
  "flujos",
  "embudos",
] as const;

export type Col = (typeof COLS)[number];

export function isCol(x: string): x is Col {
  return (COLS as readonly string[]).includes(x);
}

export type Snapshot = Record<Col, Array<Record<string, unknown>>>;

/** Devuelve todas las colecciones del account como { col: [docs...] }. */
export async function listAll(accountId: string): Promise<Snapshot> {
  const rows = (await sql`
    SELECT collection, data
    FROM crm_records
    WHERE account_id = ${accountId}
    ORDER BY updated_at ASC
  `) as Array<{ collection: string; data: Record<string, unknown> }>;

  const out = Object.fromEntries(COLS.map((c) => [c, [] as Array<Record<string, unknown>>])) as Snapshot;
  for (const r of rows) {
    if (isCol(r.collection)) out[r.collection].push(r.data);
  }
  return out;
}

/** Upsert de un documento (equivale a collection(col).doc(id).set(body)). */
export async function setDoc(
  accountId: string,
  col: Col,
  id: string,
  body: Record<string, unknown>,
): Promise<void> {
  // Garantizamos que el id del body coincide con el id de la ruta.
  const data = { ...body, id };
  await sql`
    INSERT INTO crm_records (account_id, collection, id, data, updated_at)
    VALUES (${accountId}, ${col}, ${id}, ${JSON.stringify(data)}::jsonb, now())
    ON CONFLICT (account_id, collection, id)
    DO UPDATE SET data = EXCLUDED.data, updated_at = now()
  `;
}

/** Borra un documento (equivale a collection(col).doc(id).delete()). */
export async function delDoc(accountId: string, col: Col, id: string): Promise<void> {
  await sql`
    DELETE FROM crm_records
    WHERE account_id = ${accountId} AND collection = ${col} AND id = ${id}
  `;
}
