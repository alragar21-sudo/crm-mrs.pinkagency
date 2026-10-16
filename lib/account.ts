// En v1 hay una sola agencia (tenant). Se puede sobreescribir por entorno.
export const DEFAULT_ACCOUNT_ID = process.env.ACCOUNT_ID || "mrs-pink";

// Generador de IDs equivalente al uid() del prototipo: prefijo + base36(tiempo) + aleatorio.
export function uid(prefix: string): string {
  const rand = Math.random().toString(36).slice(2, 7);
  return `${prefix}-${Date.now().toString(36)}${rand}`;
}
