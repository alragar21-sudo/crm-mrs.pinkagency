import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function CrmPage() {
  const user = await getSessionUser();
  if (!user) redirect("/login");

  // Carga en orden garantizado: seed -> adaptador de datos -> app del prototipo.
  const bootstrap = `
(function(){
  function load(src){return new Promise(function(res,rej){var s=document.createElement('script');s.src=src;s.onload=res;s.onerror=rej;document.body.appendChild(s);});}
  (async function(){
    try{
      await load('/crm/seed.js');
      await load('/crm/crm-db-adapter.js');
      await load('/crm/app.js');
    }catch(e){ console.error('No se pudo cargar el CRM', e); }
  })();
})();
`;

  return (
    <>
      {/* Fuentes y estilos del prototipo, sin cambios */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
      />
      <link rel="stylesheet" href="/crm/app.css" />

      {/* Estructura original del body del prototipo */}
      <div className="app">
        <aside className="side" id="side"></aside>
        <main className="main">
          <div className="wrap" id="main"></div>
        </main>
      </div>
      <div id="drawer"></div>
      <div id="toast" className="toast" hidden></div>

      {/* Botón de salir (añadido; no estaba en el prototipo) */}
      <form action="/api/auth/logout" method="post" className="mp-logout">
        <button type="submit" title="Cerrar sesión" aria-label="Cerrar sesión">
          Salir
        </button>
      </form>
      <style>{`.mp-logout{position:fixed;left:14px;bottom:12px;z-index:50}
.mp-logout button{font:inherit;cursor:pointer;background:rgba(246,245,236,.14);color:var(--side-fg,#F6F5EC);border:1px solid rgba(246,245,236,.22);border-radius:10px;padding:6px 12px;font-size:12px}
.mp-logout button:hover{background:rgba(246,245,236,.24)}`}</style>

      <script dangerouslySetInnerHTML={{ __html: bootstrap }} />
    </>
  );
}
