import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

let _sql: NeonQueryFunction<false, false> | null = null;

function getSql(): NeonQueryFunction<false, false> {
  if (_sql) return _sql;
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("Falta DATABASE_URL (configura .env.local o las env vars de Vercel).");
  }
  _sql = neon(url);
  return _sql;
}

// Proxy tagged-template: resuelve el cliente de forma perezosa (no rompe el build sin env).
export const sql: NeonQueryFunction<false, false> = ((
  strings: TemplateStringsArray,
  ...values: unknown[]
) => getSql()(strings, ...values)) as NeonQueryFunction<false, false>;
