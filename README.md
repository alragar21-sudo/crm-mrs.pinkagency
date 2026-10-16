# Mrs. Pink CRM

CRM de Mrs. Pink Agency. La interfaz es el prototipo original (vanilla JS en
`public/crm/`), envuelto en Next.js con datos reales en Neon Postgres y login del equipo.

## Arranque local

1. Copia `.env.local.example` a `.env.local` y rellena `DATABASE_URL` (Neon).
2. Instala dependencias: `npm install`
3. Crea las tablas: `npm run db:migrate`
4. Crea tu usuario admin:
   `node --env-file=.env.local scripts/seed-admin.mjs tu@email.com "TuContraseña" "Alba"`
5. Arranca: `npm run dev` → http://localhost:3000 → entra en `/login`.

## Arquitectura

- **UI:** `public/crm/app.css` + `public/crm/app.js` (prototipo, sin cambios salvo `connect()`).
- **Datos:** `public/crm/crm-db-adapter.js` replica la interfaz Firestore del prototipo
  (`collection(col).doc(id).set/delete`, `onSnapshot`) contra `/api/data` sobre Neon.
- **Persistencia:** tabla `records (account_id, collection, id, data jsonb)` — document store
  que mapea 1:1 con las 12 colecciones del CRM.
- **Auth:** `auth_users` + `sessions`, cookie httpOnly. El RBAC in-app del prototipo
  (colección `usuarios`) sigue funcionando igual.

## Integraciones

- **Email (activo):** `POST /api/send/email` vía Resend. Requiere `RESEND_API_KEY` + `EMAIL_FROM`
  (verifica un dominio de envío en Resend).
- **Captación de leads (activo):** `POST /api/webhooks/lead?token=WEBHOOK_SECRET` crea un contacto.
- **WhatsApp y Meta Ads (scaffold):** rutas listas, se activan en fase 2 con sus credenciales.
