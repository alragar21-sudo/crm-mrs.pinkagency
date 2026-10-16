(function(){
"use strict";

/* ---------- Iconos ---------- */
const I = {
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 14.8c1.6.8 2.7 2.5 3 5.2"/></svg>',
  pipe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="5" height="16" rx="1.5"/><rect x="10" y="4" width="5" height="11" rx="1.5"/><rect x="17" y="4" width="4" height="7" rx="1.5"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4z"/></svg>',
  mega:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4h4l8 5V5L7 10z"/><path d="M18.5 9a4 4 0 0 1 0 6"/></svg>',
  grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4-4"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  chev:'<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 10 5-5 5 5M7 14l5 5 5-5"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M21 20H3"/></svg>',
  plug:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4"/></svg>',
  target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>',
  cog:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/></svg>',
  key:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M17 6l3 3M14.5 8.5l2 2"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
};

/* ---------- Constantes ---------- */
const ETAPAS_CLIENTE = ["Nuevo","Contactado","Propuesta","Negociación","Ganado","Perdido"];
const ETAPAS_AGENCIA = ["Lead","El Desayuno reservado","Propuesta enviada","Negociación","Cliente","Perdido"];
const CANALES = ["Email","WhatsApp","SMS","Instagram"];
const TIPOS_CAMP = ["Email","SMS","WhatsApp"];
const ESTADOS_CAMP = ["Borrador","Programada","Enviada"];
const COLS = ["subcuentas","contactos","oportunidades","conversaciones","campanas","integraciones","anuncios","campanasAds","briefs","usuarios","flujos","embudos"];
const eur = new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR",maximumFractionDigits:0});
const nf = new Intl.NumberFormat("es-ES");

/* ---------- Estado ---------- */
const S = {
  data:{subcuentas:[],contactos:[],oportunidades:[],conversaciones:[],campanas:[],integraciones:[],anuncios:[],campanasAds:[],briefs:[],usuarios:[],flujos:[],embudos:[]},
  loaded:{}, mode:"cargando", readOnly:false,
  view:"agencia", subId:null, tab:"contactos", atab:"subcuentas", periodo:12, verComo:null, autoTab:"flujos", flow:null, fun:null, flowIns:null, camp:null, brief:null, subDraft:null, adsFiltro:"",
  q:"", tag:"", convSel:null, draft:"", draftCanal:"WhatsApp", menu:false
};
try{ const saved = JSON.parse(localStorage.getItem("mp-crm-nav")||"null"); if(saved){ S.view=saved.view||"agencia"; S.subId=saved.subId||null; S.tab=saved.tab||"contactos"; S.atab=saved.atab||"subcuentas"; S.periodo=saved.periodo||12; } }catch(e){}
function rememberNav(){ try{ localStorage.setItem("mp-crm-nav",JSON.stringify({view:S.view,subId:S.subId,tab:S.tab,atab:S.atab,periodo:S.periodo})); }catch(e){} }

let db = null;

/* ---------- Utilidades ---------- */
const $ = s => document.querySelector(s);
const esc = v => String(v==null?"":v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const uid = p => p+"-"+Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const ini = n => String(n||"?").trim().split(/\s+/).slice(0,2).map(w=>w[0]||"").join("").toUpperCase();
const nowISO = () => new Date().toISOString();
function rel(iso){
  if(!iso) return "";
  const d=new Date(iso), s=(Date.now()-d)/1000;
  if(s<60) return "ahora";
  if(s<3600) return "hace "+Math.floor(s/60)+" min";
  if(s<86400) return "hace "+Math.floor(s/3600)+" h";
  if(s<86400*7) return "hace "+Math.floor(s/86400)+" d";
  return d.toLocaleDateString("es-ES",{day:"numeric",month:"short"});
}
function fecha(iso){ if(!iso) return "—"; return new Date(iso).toLocaleDateString("es-ES",{day:"numeric",month:"short",year:"numeric"}); }
function toast(t){ const el=$("#toast"); el.textContent=t; el.hidden=false; clearTimeout(toast._t); toast._t=setTimeout(()=>el.hidden=true,2400); }
const sub = () => S.data.subcuentas.find(s=>s.id===S.subId);
const of = (col,sid) => S.data[col].filter(x=>x.sub===sid);
const contacto = id => S.data.contactos.find(c=>c.id===id);
const etapasDe = s => (s && Array.isArray(s.etapas) && s.etapas.length) ? s.etapas : ETAPAS_CLIENTE;
const etapaGanada = s => etapasDe(s)[etapasDe(s).length-2];
const etapaPerdida = s => etapasDe(s)[etapasDe(s).length-1];
const sinResponder = sid => of("conversaciones",sid).filter(c=>c.noLeido).length;

/* ---------- Persistencia ---------- */
async function save(col,id,body){
  body = Object.assign({},body,{id});
  if(db){
    try{ await db.collection(col).doc(id).set(body); }
    catch(e){ handleWriteError(e); throw e; }
  } else {
    const arr=S.data[col]; const i=arr.findIndex(x=>x.id===id);
    if(i>=0) arr[i]=body; else arr.push(body);
    localSave(); render();
  }
}
async function remove(col,id){
  if(db){ try{ await db.collection(col).doc(id).delete(); }catch(e){ handleWriteError(e); throw e; } }
  else { S.data[col]=S.data[col].filter(x=>x.id!==id); localSave(); render(); }
}
function handleWriteError(e){
  const code=e&&e.code;
  if(code==="invalid_argument"){ S.readOnly=true; toast("No tienes permiso para editar este CRM."); render(); }
  else if(code==="quota_exceeded"){ toast("El CRM está lleno: borra registros antiguos para seguir."); }
  else toast("No se ha podido guardar. Prueba otra vez en unos segundos.");
}

const LS_KEY="mp-crm-datos-v1";
function localLoad(){ let d=null; try{ d=JSON.parse(localStorage.getItem(LS_KEY)||"null"); }catch(e){} return d||JSON.parse(JSON.stringify(window.MP_SEED||{})); }
function localSave(){ try{ localStorage.setItem(LS_KEY,JSON.stringify(S.data)); }catch(e){ toast("No se ha podido guardar en este navegador."); } }
async function connect(){
  // Mrs. Pink CRM: capa de datos respaldada por Neon vía API (window.MPDB).
  // Si no hay adaptador o el servidor no responde, cae a localStorage (igual que antes).
  let d=null;
  try{ d = window.MPDB ? await window.MPDB.connect() : null; }catch(e){ d=null; }
  if(!d){ S.mode="local"; const L=localLoad(); COLS.forEach(c=>S.data[c]=Array.isArray(L[c])?L[c]:[]); render(); return; }
  db=d; S.mode="vivo";
  try{
    const me = window.MPDB.me ? await window.MPDB.me() : null;
    if(me && me.canWrite===false) S.readOnly=true;
  }catch(e){}
  COLS.forEach(col=>{
    db.collection(col).onSnapshot(snap=>{
      S.data[col]=snap.docs.map(x=>Object.assign({id:x.id},x.data()));
      S.loaded[col]=true; render();
    }, err=>{ S.loaded[col]=true; render(); });
  });
}
// Si en 11 s seguimos cargando (sin adaptador ni datos), pasamos a modo demo.
setTimeout(()=>{ if(S.mode==="cargando"){ S.mode="demo"; render(); } },11000);

/* ---------- Render principal ---------- */
function render(){
  applyVerComo();
  if(S.view==="sub" && !sub() && (S.mode!=="vivo" || S.loaded.subcuentas)){ S.view="agencia"; S.subId=null; }
  renderSide();
  if(editingForm()){ if(S.camp) setInd(); if(S.brief) setBInd(); return; }
  renderMain();
}

function renderSide(){
  const s=sub();
  const vu=VC(), allow=subsDe(vu), adminView=!vu||vu.rol==="admin";
  const subs=[...S.data.subcuentas].filter(x=>!vu||allow.includes(x.id)).sort((a,b)=>(b.interna?1:0)-(a.interna?1:0)||String(a.nombre).localeCompare(b.nombre,"es"));
  const current = S.view==="agencia"
    ? `<span class="avatar" style="background:var(--seda);color:var(--granate)">mp</span><span class="grow"><small>Cuenta</small><b>Vista de agencia</b></span>`
    : `<span class="avatar">${esc(ini(s&&s.nombre))}</span><span class="grow"><small>Subcuenta</small><b>${esc(s&&s.nombre)}</b></span>`;
  const menu = S.menu ? `<div class="switch-menu" role="menu">
      ${adminView?`<button data-go-agencia aria-current="${S.view==="agencia"}"><span class="avatar" style="background:var(--granate);color:var(--seda)">mp</span>Vista de agencia</button>
      <hr>`:""}
      ${subs.map(x=>`<button data-go-sub="${esc(x.id)}" aria-current="${S.view==="sub"&&S.subId===x.id}"><span class="avatar">${esc(ini(x.nombre))}</span><span style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(x.nombre)}</span></button>`).join("") || `<div style="padding:8px 10px;font-size:13px;color:var(--muted)">Aún no hay subcuentas.</div>`}
    </div>` : "";
  let nav;
  if(S.view==="agencia"){
    const items=[["subcuentas","Subcuentas",I.grid],["informes","Informes",I.chart],["integraciones","Integraciones",I.plug],["equipo","Equipo",I.key]];
    nav=`<div class="nav-label">Agencia</div>`+items.map(([k,l,ic])=>`<button data-atab="${k}" ${S.atab===k?'aria-current="page"':""}>${ic}${l}</button>`).join("");
  } else {
    const un=sinResponder(S.subId);
    const items=[["contactos","Contactos",I.users],["oportunidades","Oportunidades",I.pipe],["conversaciones","Conversaciones",I.chat,un],["marketing","Marketing",I.mega],["campanas","Campañas",I.target],["automatizaciones","Automatizaciones",ICO.bolt],["informes","Informes",I.chart],["integraciones","Integraciones",I.plug],["configuracion","Configuración",I.cog]].filter(([k])=>permDe(vu,k)!=="no");
    nav=`<div class="nav-label">${esc(s&&s.nombre)}</div>`+items.map(([k,l,ic,b])=>`<button data-tab="${k}" ${S.tab===k?'aria-current="page"':""}>${ic}${l}${b?`<span class="badge num">${b}</span>`:""}</button>`).join("");
  }
  $("#side").innerHTML=`
    <div class="wordmark">mrs. pink agency</div>
    <div class="switch">
      <button class="switch-btn" id="switch-btn" aria-haspopup="menu" aria-expanded="${S.menu}">${current}${I.chev}</button>
      ${menu}
    </div>
    <nav class="nav">${nav}</nav>
    <div class="side-foot"><div class="mano">Mrs. Pink</div>Cabeza fría. Marcas que arden.</div>`;
}

function headHTML(eyebrow,title,lead,actions){
  return `<div class="head"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1>${lead?`<p class="lead">${lead}</p>`:""}</div><div class="actions">${actions||""}</div></div>`;
}
function bannerHTML(){
  if(S.mode==="local") return `<div class="banner" style="display:flex;gap:10px;align-items:center;justify-content:space-between;flex-wrap:wrap"><span><b>Versión local.</b> Los datos se guardan en este navegador. Exporta una copia de vez en cuando.</span><span class="actions"><button class="btn sec" data-exportar style="padding:6px 12px">Exportar datos</button><button class="btn sec" data-importar-datos style="padding:6px 12px">Importar</button><button class="btn ghost" id="reset-datos" style="padding:6px 12px">Volver a los datos de ejemplo</button></span><input type="file" id="imp-datos" accept="application/json,.json" hidden></div>`;
  if(S.mode==="demo") return `<div class="banner"><b>Modo prueba.</b> Este navegador no puede guardar datos del CRM: lo que hagas aquí se pierde al recargar.</div>`;
  if(S.readOnly) return `<div class="banner"><b>Solo lectura.</b> Puedes consultar el CRM, pero no cambiar datos.</div>`;
  return "";
}
const canEdit = () => !S.readOnly && (!S.verComo || !VC() || S.view==="agencia" || permDe(VC(),S.tab)==="editar");
const addBtn = (label,attr) => canEdit()?`<button class="btn" ${attr}>${I.plus}${label}</button>`:"";

function renderMain(){
  const el=$("#main");
  const act=document.activeElement, aid=act&&act.id, sel=act&&act.selectionStart;
  if(S.mode==="cargando"){ el.innerHTML=headHTML("Cargando","Abriendo tu <span class=\"m\">CRM.</span>","Un segundo, estamos trayendo tus cuentas."); return; }
  applyVerComo();
  let html="";
  const vu=VC();
  if(vu && vu.rol!=="admin" && !subsDe(vu).length) html=headHTML(esc(vu.nombre),"Sin <span class=\"m\">acceso.</span>","Esta persona aún no tiene ninguna subcuenta asignada, así que al entrar no vería nada. Asígnale una desde Equipo.","");
  else if(S.view==="agencia") html = ({subcuentas:viewAgencia,informes:()=>viewInformes(null),integraciones:viewIntegAgencia,equipo:viewEquipo}[S.atab]||viewAgencia)();
  else if(S.view==="sub") html = ({contactos:viewContactos,oportunidades:viewOpps,conversaciones:viewConvs,marketing:viewMarketing,informes:()=>viewInformes(S.subId),integraciones:viewIntegSub,campanas:viewCampanas,automatizaciones:viewAutomatizaciones,configuracion:viewConfig}[S.tab]||viewContactos)();
  el.innerHTML = vcBanner()+bannerHTML()+html;
  if(aid){ const n=document.getElementById(aid); if(n){ n.focus(); try{ if(sel!=null) n.setSelectionRange(sel,sel); }catch(e){} } }
  if(S.view==="sub" && S.tab==="conversaciones"){ const m=$("#msgs"); if(m) m.scrollTop=m.scrollHeight; }
  if(S.view==="sub" && S.tab==="oportunidades") wireBoard();
  wireCharts();
}

/* ---------- Vista de agencia ---------- */
function viewAgencia(){
  const subs=[...S.data.subcuentas].sort((a,b)=>(b.interna?1:0)-(a.interna?1:0)||String(a.nombre).localeCompare(b.nombre,"es"));
  let contactos=0, abierto=0, ganado=0, pend=0;
  const rows=subs.map(s=>{
    const c=of("contactos",s.id).length, ops=of("oportunidades",s.id);
    const g=etapaGanada(s), p=etapaPerdida(s);
    const ab=ops.filter(o=>o.etapa!==g&&o.etapa!==p).reduce((t,o)=>t+(+o.valor||0),0);
    const gw=ops.filter(o=>o.etapa===g).reduce((t,o)=>t+(+o.valor||0),0);
    const un=sinResponder(s.id);
    contactos+=c; abierto+=ab; ganado+=gw; pend+=un;
    return `<tr data-go-sub="${esc(s.id)}">
      <td><div class="who"><span class="avatar">${esc(ini(s.nombre))}</span><div style="min-width:0"><b>${esc(s.nombre)}</b><small>${esc(s.sector||"Sin sector")}</small></div></div></td>
      <td>${s.interna?'<span class="pill rosa">Tu agencia</span>':s.ejemplo?'<span class="pill ej">Ejemplo</span>':'<span class="pill ok">Cliente</span>'}</td>
      <td class="r num">${nf.format(c)}</td>
      <td class="r num">${eur.format(ab)}</td>
      <td class="r num">${eur.format(gw)}</td>
      <td class="r num">${un?`<span class="pill warn">${un}</span>`:'<span style="color:var(--muted)">0</span>'}</td>
      <td class="r num">${(()=>{ const b=briefDoc(s.id), p=briefPct(b&&b.campos); return `<span class="pill ${p>=80?"ok":p>=35?"":"warn"}">${p}%</span>`; })()}</td>
      <td class="r"><span class="btn sec" style="padding:6px 12px">Entrar ${I.arrow}</span></td>
    </tr>`;
  }).join("");
  const loading = S.mode==="vivo" && !S.loaded.subcuentas;
  const body = loading ? `<p class="lead">Cargando subcuentas…</p>` : subs.length ? `
    <div class="kpis">
      <div class="kpi"><small>Subcuentas</small><b class="num">${subs.length}</b><span>${subs.filter(s=>!s.interna).length} de clientes</span></div>
      <div class="kpi"><small>Contactos</small><b class="num">${nf.format(contactos)}</b><span>en todas las cuentas</span></div>
      <div class="kpi"><small>Pipeline abierto</small><b class="num">${eur.format(abierto)}</b><span>${eur.format(ganado)} ya ganado</span></div>
      <div class="kpi"><small>Sin responder</small><b class="num">${pend}</b><span>conversaciones</span></div>
    </div>
    <div class="table-wrap"><table>
      <thead><tr><th>Subcuenta</th><th>Tipo</th><th class="r">Contactos</th><th class="r">Pipeline abierto</th><th class="r">Ganado</th><th class="r">Sin responder</th><th class="r">Brief</th><th></th></tr></thead>
      <tbody>${rows}</tbody></table></div>` : `
    <div class="empty"><h2>Aún no hay subcuentas.</h2><p>Cada cliente tiene su propia subcuenta con contactos, oportunidades, conversaciones y marketing. Empieza por la tuya o por tu primer cliente.</p>${addBtn("Crear subcuenta","data-new-sub")}</div>`;
  return headHTML("Vista de agencia","Tus <span class=\"m\">cuentas.</span>","Todas tus subcuentas de un vistazo. Entra en una para trabajar sus contactos, su pipeline y sus campañas.", subs.length?addBtn("Nueva subcuenta","data-new-sub"):"")+body;
}

/* ---------- Contactos ---------- */
function viewContactos(){
  const s=sub(), all=of("contactos",s.id);
  const tags=[...new Set(all.flatMap(c=>c.etiquetas||[]))].sort((a,b)=>a.localeCompare(b,"es"));
  const q=S.q.trim().toLowerCase();
  const list=all.filter(c=>(!S.tag||(c.etiquetas||[]).includes(S.tag)) && (!q || [c.nombre,c.email,c.tel,c.empresa].join(" ").toLowerCase().includes(q)))
    .sort((a,b)=>String(b.creado||"").localeCompare(String(a.creado||"")));
  const rows=list.map(c=>`<tr data-contact="${esc(c.id)}">
    <td><div class="who"><span class="circ">${esc(ini(c.nombre))}</span><div style="min-width:0"><b>${esc(c.nombre)}</b><small>${esc(c.empresa||"")}</small></div></div></td>
    <td>${esc(c.email||"—")}<br><small style="color:var(--muted)">${esc(c.tel||"")}</small></td>
    <td><div class="tags">${(c.etiquetas||[]).map(t=>`<span class="pill rosa">${esc(t)}</span>`).join("")}</div></td>
    <td>${esc(c.fuente||"—")}</td>
    <td class="r" style="color:var(--muted);white-space:nowrap">${rel(c.creado)}</td></tr>`).join("");
  const body = all.length ? `
    <div class="toolbar">
      <div class="search">${I.search}<input id="q" type="search" placeholder="Busca por nombre, email, teléfono o empresa" value="${esc(S.q)}" aria-label="Buscar contactos"></div>
      ${tags.length?`<div class="chips"><button class="chip" data-tag="" aria-pressed="${!S.tag}">Todos</button>${tags.map(t=>`<button class="chip" data-tag="${esc(t)}" aria-pressed="${S.tag===t}">${esc(t)}</button>`).join("")}</div>`:""}
    </div>
    ${list.length?`<div class="table-wrap"><table><thead><tr><th>Nombre</th><th>Contacto</th><th>Etiquetas</th><th>Fuente</th><th class="r">Alta</th></tr></thead><tbody>${rows}</tbody></table></div>`
      :`<div class="empty"><h2>Nada por aquí.</h2><p>Ningún contacto coincide con la búsqueda.</p></div>`}`
    : `<div class="empty"><h2>Sin contactos todavía.</h2><p>Añade el primero a mano. Cuando conectes formularios o anuncios, entrarán aquí solos.</p>${addBtn("Crear contacto","data-new-contact")}</div>`;
  return headHTML(`${esc(s.nombre)} <span class="pill num">${all.length} contactos</span>`,"Tus <span class=\"m\">contactos.</span>","",all.length?addBtn("Nuevo contacto","data-new-contact"):"")+body;
}

/* ---------- Oportunidades ---------- */
function viewOpps(){
  const s=sub(), ops=of("oportunidades",s.id), et=etapasDe(s), lost=etapaPerdida(s), won=etapaGanada(s);
  const abierto=ops.filter(o=>o.etapa!==won&&o.etapa!==lost).reduce((t,o)=>t+(+o.valor||0),0);
  const cols=et.map(e=>{
    const items=ops.filter(o=>o.etapa===e).sort((a,b)=>String(b.actualizado||"").localeCompare(String(a.actualizado||"")));
    const tot=items.reduce((t,o)=>t+(+o.valor||0),0);
    return `<section class="col ${e===lost?"lost":""}" data-stage="${esc(e)}" aria-label="${esc(e)}">
      <div class="col-head"><b>${esc(e)}</b><span class="num">${items.length} · ${eur.format(tot)}</span></div>
      ${items.map(o=>{ const c=contacto(o.contactoId); return `<button class="card" draggable="${canEdit()}" data-opp="${esc(o.id)}">
        <b>${esc(o.titulo)}</b>
        <span class="meta"><span>${esc(c?c.nombre:"Sin contacto")}</span><span class="val num">${eur.format(+o.valor||0)}</span></span>
        <span class="meta"><span>${rel(o.actualizado)}</span></span></button>`; }).join("") || `<div class="col-empty">Arrastra aquí</div>`}
    </section>`;
  }).join("");
  return headHTML(`${esc(s.nombre)} <span class="pill num">${eur.format(abierto)} abierto</span>`,"Tu <span class=\"m\">pipeline.</span>","Arrastra cada tarjeta a su etapa. Toca una para editarla.",addBtn("Nueva oportunidad","data-new-opp"))
    + (ops.length||true ? `<div class="board-wrap"><div class="board">${cols}</div></div>` : "");
}
function wireBoard(){
  if(!canEdit()) return;
  document.querySelectorAll(".card[data-opp]").forEach(c=>{
    c.addEventListener("dragstart",e=>{ e.dataTransfer.setData("text/plain",c.dataset.opp); e.dataTransfer.effectAllowed="move"; c.classList.add("drag"); });
    c.addEventListener("dragend",()=>c.classList.remove("drag"));
  });
  document.querySelectorAll(".col[data-stage]").forEach(col=>{
    col.addEventListener("dragover",e=>{ e.preventDefault(); col.classList.add("over"); });
    col.addEventListener("dragleave",()=>col.classList.remove("over"));
    col.addEventListener("drop",async e=>{
      e.preventDefault(); col.classList.remove("over");
      const id=e.dataTransfer.getData("text/plain"), o=S.data.oportunidades.find(x=>x.id===id);
      if(!o || o.etapa===col.dataset.stage) return;
      await save("oportunidades",o.id,Object.assign({},o,{etapa:col.dataset.stage,actualizado:nowISO()}));
      toast("Movida a "+col.dataset.stage);
    });
  });
}

/* ---------- Conversaciones ---------- */
function viewConvs(){
  const s=sub(), cs=of("conversaciones",s.id).sort((a,b)=>String(b.actualizado||"").localeCompare(String(a.actualizado||"")));
  if(!cs.length) return headHTML(esc(s.nombre),"Tus <span class=\"m\">conversaciones.</span>","Email, WhatsApp, SMS e Instagram en una sola bandeja.","")
    + `<div class="empty"><h2>Bandeja vacía.</h2><p>Empieza una conversación con cualquiera de tus contactos.</p>${addBtn("Nueva conversación","data-new-conv")}</div>`;
  if(!S.convSel || !cs.find(c=>c.id===S.convSel)) S.convSel=cs[0].id;
  const cur=cs.find(c=>c.id===S.convSel), cc=contacto(cur.contactoId);
  const threads=cs.map(c=>{ const k=contacto(c.contactoId), last=(c.mensajes||[]).slice(-1)[0];
    return `<button class="thread" data-conv="${esc(c.id)}" aria-current="${c.id===S.convSel}">
      <span class="circ">${esc(ini(k&&k.nombre))}</span>
      <span style="min-width:0"><b>${esc(k?k.nombre:"Contacto borrado")}</b><p>${last?(last.de==="out"?"Tú: ":"")+esc(last.texto):"Sin mensajes"}</p></span>
      <span><time>${rel(c.actualizado)}</time>${c.noLeido?'<span class="dot" aria-label="Sin leer"></span>':""}</span></button>`; }).join("");
  const msgs=(cur.mensajes||[]).map(m=>`<div class="msg ${m.de==="out"?"out":""}">${esc(m.texto)}<time>${esc(m.canal||cur.canal)} · ${rel(m.t)}</time></div>`).join("");
  return headHTML(esc(s.nombre),"Tus <span class=\"m\">conversaciones.</span>","",addBtn("Nueva conversación","data-new-conv"))+`
    <div class="inbox">
      <div class="threads">${threads}</div>
      <div class="chat">
        <div class="chat-head"><div class="who"><span class="circ">${esc(ini(cc&&cc.nombre))}</span><div><b>${esc(cc?cc.nombre:"Contacto borrado")}</b><small>${esc(cc?(cc.email||cc.tel||""):"")}</small></div></div>
          <div class="actions">${cur.noLeido&&canEdit()?`<button class="btn sec" data-read="${esc(cur.id)}">Marcar como leída</button>`:""}${cc?`<button class="btn ghost" data-contact="${esc(cc.id)}">Ver ficha</button>`:""}</div></div>
        <div class="msgs" id="msgs">${msgs||'<div class="chat-empty">Sin mensajes todavía.</div>'}</div>
        ${canEdit()?`<form class="composer" id="composer">
          <select id="canal" aria-label="Canal">${CANALES.map(c=>`<option ${c===(S.draftCanal||cur.canal)?"selected":""}>${c}</option>`).join("")}</select>
          <textarea id="draft" placeholder="Escribe tu respuesta…" aria-label="Respuesta">${esc(S.draft)}</textarea>
          <button class="btn" type="submit">Registrar mensaje</button>
        </form><div class="hint">El mensaje queda en el historial. El envío real llegará cuando conectes cada canal.</div>`:""}
      </div>
    </div>`;
}

/* ---------- Marketing ---------- */
function viewMarketing(){
  const s=sub(), cs=of("campanas",s.id).sort((a,b)=>String(b.fecha||"").localeCompare(String(a.fecha||"")));
  const pct=(a,b)=>b?Math.round(a/b*100):0;
  const pillE=e=>e==="Enviada"?"ok":e==="Programada"?"warn":"";
  const list=cs.map(c=>{ const ap=pct(c.aperturas||0,c.enviados||0), cl=pct(c.clics||0,c.enviados||0);
    return `<div class="camp" data-camp="${esc(c.id)}" role="button" tabindex="0">
      <div><h3>${esc(c.nombre)}</h3><div class="sub"><span class="pill ${pillE(c.estado)}">${esc(c.estado)}</span><span>${esc(c.tipo)}</span><span>·</span><span>${c.audiencia?("Etiqueta: "+esc(c.audiencia)):"Todos los contactos"}</span><span>·</span><span>${fecha(c.fecha)}</span></div></div>
      <div class="stat"><small>Enviados</small><b class="num">${nf.format(c.enviados||0)}</b></div>
      <div class="stat"><small>Aperturas</small><b class="num">${ap}%</b><div class="bar"><i style="width:${ap}%"></i></div></div>
      <div class="stat"><small>Clics</small><b class="num">${cl}%</b><div class="bar"><i style="width:${cl}%"></i></div></div>
      <div>${I.arrow.replace('<svg','<svg width="18" height="18" style="color:var(--muted)"')}</div>
    </div>`; }).join("");
  const sent=cs.filter(c=>c.estado==="Enviada"), env=sent.reduce((t,c)=>t+(c.enviados||0),0), ap=sent.reduce((t,c)=>t+(c.aperturas||0),0), cl=sent.reduce((t,c)=>t+(c.clics||0),0);
  return headHTML(esc(s.nombre),"Tus <span class=\"m\">envíos.</span>","Email, SMS y WhatsApp a tus contactos, filtrados por etiqueta.",cs.length?addBtn("Nueva campaña","data-new-camp"):"")
    + (cs.length?`<div class="kpis">
        <div class="kpi"><small>Campañas</small><b class="num">${cs.length}</b><span>${sent.length} enviadas</span></div>
        <div class="kpi"><small>Mensajes enviados</small><b class="num">${nf.format(env)}</b><span>en total</span></div>
        <div class="kpi"><small>Apertura media</small><b class="num">${pct(ap,env)}%</b><span>de lo enviado</span></div>
        <div class="kpi"><small>Clic medio</small><b class="num">${pct(cl,env)}%</b><span>de lo enviado</span></div>
      </div><div class="camps">${list}</div>`
      :`<div class="empty"><h2>Sin campañas todavía.</h2><p>Prepara un envío para una etiqueta concreta o para todos tus contactos.</p>${addBtn("Crear campaña","data-new-camp")}</div>`);
}

/* ---------- Informes: cálculos ---------- */
const PLAT = {
  meta:{nombre:"Meta Ads",ab:"M",desc:"Facebook e Instagram Ads: inversión, impresiones, clics y leads de cada campaña.",idHelp:"El ID de la cuenta publicitaria, por ejemplo act_1234567890."},
  google:{nombre:"Google Ads",ab:"G",desc:"Búsqueda, Performance Max y YouTube: inversión, clics y conversiones.",idHelp:"El ID de cliente, por ejemplo 123-456-7890."}
};
const SERIES = [{k:"meta",label:"Meta Ads"},{k:"otros",label:"Otros orígenes"},{k:"google",label:"Google Ads"}];
const eur2 = new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR",minimumFractionDigits:2,maximumFractionDigits:2});
const subById = id => S.data.subcuentas.find(s=>s.id===id);
const integ = id => S.data.integraciones.find(x=>x.id===id) || {};
function monday(d){ const x=new Date(d); const day=(x.getDay()+6)%7; x.setHours(0,0,0,0); x.setDate(x.getDate()-day); return x; }
const ymd = d => { const x=new Date(d); return x.getFullYear()+"-"+String(x.getMonth()+1).padStart(2,"0")+"-"+String(x.getDate()).padStart(2,"0"); };
const wkLabel = w => new Date(w+"T12:00:00").toLocaleDateString("es-ES",{day:"numeric",month:"short"});
function weeks(n){ const m=monday(new Date()), out=[]; for(let i=n-1;i>=0;i--){ const d=new Date(m); d.setDate(d.getDate()-7*i); out.push(ymd(d)); } return out; }
const grupo = f => f==="Meta Ads"?"meta":f==="Google Ads"?"google":"otros";
const platKey = p => p==="Google Ads"?"google":"meta";

function metrics(sid,n){
  const W=weeks(n), start=new Date(W[0]+"T00:00:00"), inS=x=>sid==null||x.sub===sid;
  const byW={}; W.forEach(w=>byW[w]={meta:0,otros:0,google:0,invMeta:0,invGoogle:0});
  const orig={}; ["meta","google","otros"].forEach(k=>orig[k]={inv:0,imp:0,cl:0,leads:0,gan:0,val:0});
  const contactos=S.data.contactos.filter(c=>inS(c)&&c.creado&&new Date(c.creado)>=start);
  contactos.forEach(c=>{ const w=ymd(monday(c.creado)); if(byW[w]) byW[w][grupo(c.fuente)]++; orig[grupo(c.fuente)].leads++; });
  const camps=[];
  S.data.anuncios.filter(inS).forEach(a=>{
    const k=platKey(a.plataforma); let inv=0,imp=0,cl=0,ld=0;
    (a.semanas||[]).forEach(r=>{ const w=ymd(monday(r.inicio+"T12:00:00")); if(!byW[w]) return;
      inv+=+r.inversion||0; imp+=+r.impresiones||0; cl+=+r.clics||0; ld+=+r.leads||0;
      byW[w][k==="google"?"invGoogle":"invMeta"]+=+r.inversion||0; });
    orig[k].inv+=inv; orig[k].imp+=imp; orig[k].cl+=cl;
    camps.push({a,k,inv,imp,cl,ld});
  });
  const ganadas=S.data.oportunidades.filter(o=>inS(o)&&o.actualizado&&new Date(o.actualizado)>=start&&o.etapa===etapaGanada(subById(o.sub)));
  ganadas.forEach(o=>{ const c=contacto(o.contactoId), g=grupo(c&&c.fuente); orig[g].gan++; orig[g].val+=+o.valor||0; });
  const inv=orig.meta.inv+orig.google.inv, valor=ganadas.reduce((t,o)=>t+(+o.valor||0),0), leadsAds=orig.meta.leads+orig.google.leads;
  return {W,byW,contactos,camps,orig,ganadas,inv,valor,leadsAds};
}

function seguimiento(sid){
  const inS=x=>sid==null||x.sub===sid, out=[], now=Date.now(), day=86400000;
  S.data.conversaciones.filter(c=>inS(c)&&c.noLeido).forEach(c=>{ const k=contacto(c.contactoId);
    out.push({sev:"bad",rank:0,t:"Sin responder: "+(k?k.nombre:"contacto borrado"),d:c.canal+" · "+rel(c.actualizado),ref:"conv:"+c.id+":"+c.sub}); });
  S.data.contactos.filter(c=>inS(c)&&c.creado&&now-new Date(c.creado)<30*day).forEach(c=>{
    const conv=S.data.conversaciones.some(v=>v.contactoId===c.id), opp=S.data.oportunidades.some(o=>o.contactoId===c.id);
    if(!conv&&!opp) out.push({sev:"warn",rank:1,t:"Lead sin contactar: "+c.nombre,d:(c.fuente||"Sin origen")+" · entró "+rel(c.creado),ref:"contact:"+c.id+":"+c.sub});
  });
  S.data.oportunidades.filter(inS).forEach(o=>{ const s=subById(o.sub); if(!s||o.etapa===etapaGanada(s)||o.etapa===etapaPerdida(s)) return;
    const dias=Math.floor((now-new Date(o.actualizado||o.creado||now))/day);
    if(dias>=7) out.push({sev:dias>=14?"warn":"mid",rank:2,t:"Oportunidad parada: "+o.titulo,d:o.etapa+" · "+dias+" días sin moverse · "+eur.format(+o.valor||0),ref:"opp:"+o.id+":"+o.sub}); });
  return out.sort((a,b)=>a.rank-b.rank);
}

/* ---------- Informes: gráficos ---------- */
const CH = {};
function niceMax(v){ if(!(v>0)) return 4; const p=Math.pow(10,Math.floor(Math.log10(v))), f=v/p; return (f<=1?1:f<=2?2:f<=2.5?2.5:f<=5?5:10)*p; }
function axis(W,max,fmt,w,h,pl,pr,pt,pb){
  const ih=h-pt-pb, bw=(w-pl-pr)/W.length, step=Math.ceil(W.length/7); let g="";
  for(let i=0;i<=4;i++){ const v=max*i/4, y=pt+ih-ih*i/4;
    g+=`<line class="${i?"gl":"base"}" x1="${pl}" x2="${w-pr}" y1="${y}" y2="${y}"/><text x="${pl-8}" y="${y+4}" text-anchor="end">${esc(fmt(v))}</text>`; }
  W.forEach((wk,i)=>{ if(i%step===0||i===W.length-1&&W.length<=8) g+=`<text x="${pl+i*bw+bw/2}" y="${h-6}" text-anchor="middle">${esc(wkLabel(wk))}</text>`; });
  return g;
}
const short = v => v>=1000? (Math.round(v/100)/10).toString().replace(".",",")+" k" : nf.format(Math.round(v));
function chartStack(id,W,data){
  const w=640,h=230,pl=44,pr=8,pt=12,pb=28, ih=h-pt-pb, bw=(w-pl-pr)/W.length, bar=Math.max(5,Math.min(30,bw*.6));
  const tot=W.map(x=>SERIES.reduce((t,s)=>t+data[x][s.k],0)), max=niceMax(Math.max(...tot));
  let g=axis(W,max,v=>nf.format(v),w,h,pl,pr,pt,pb);
  W.forEach((wk,i)=>{ let y0=pt+ih; const x=pl+i*bw+(bw-bar)/2;
    SERIES.forEach(s=>{ const v=data[wk][s.k]; if(!v) return; const hh=v/max*ih;
      g+=`<rect x="${x}" y="${y0-hh}" width="${bar}" height="${Math.max(hh-2,1)}" rx="3" fill="var(--s-${s.k})"/>`; y0-=hh; }); });
  W.forEach((wk,i)=>g+=`<rect class="hit" data-i="${i}" x="${pl+i*bw}" y="${pt}" width="${bw}" height="${ih}"/>`);
  CH[id]={W,rows:W.map(wk=>SERIES.map(s=>({k:s.k,label:s.label,v:nf.format(data[wk][s.k])}))),tot:tot.map(t=>nf.format(t)+" leads")};
  return `<div class="chart" data-chart="${id}"><svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Leads por semana y origen">${g}</svg><div class="tip" hidden></div></div>`;
}
function chartLines(id,W,data){
  const w=640,h=230,pl=52,pr=12,pt=12,pb=28, ih=h-pt-pb, bw=(w-pl-pr)/W.length;
  const ser=[{k:"meta",label:"Meta Ads",f:"invMeta"},{k:"google",label:"Google Ads",f:"invGoogle"}];
  const max=niceMax(Math.max(...W.flatMap(wk=>ser.map(s=>data[wk][s.f]))));
  let g=axis(W,max,v=>short(v)+" €",w,h,pl,pr,pt,pb);
  g+=`<line class="cross" id="${id}-x" x1="0" x2="0" y1="${pt}" y2="${pt+ih}" visibility="hidden"/>`;
  ser.forEach(s=>{ const pts=W.map((wk,i)=>[pl+i*bw+bw/2, pt+ih-data[wk][s.f]/max*ih]);
    g+=`<polyline fill="none" stroke="var(--s-${s.k})" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" points="${pts.map(p=>p.map(n=>n.toFixed(1)).join(",")).join(" ")}"/>`;
    const e=pts[pts.length-1]; g+=`<circle cx="${e[0]}" cy="${e[1]}" r="4" fill="var(--s-${s.k})" stroke="var(--surface)" stroke-width="2"/>`; });
  W.forEach((wk,i)=>g+=`<rect class="hit" data-i="${i}" x="${pl+i*bw}" y="${pt}" width="${bw}" height="${ih}"/>`);
  CH[id]={W,cross:id+"-x",cx:W.map((_,i)=>pl+i*bw+bw/2),rows:W.map(wk=>ser.map(s=>({k:s.k,label:s.label,v:eur.format(data[wk][s.f])}))),tot:W.map(wk=>eur.format(data[wk].invMeta+data[wk].invGoogle)+" en total")};
  return `<div class="chart" data-chart="${id}"><svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Inversión semanal por plataforma">${g}</svg><div class="tip" hidden></div></div>`;
}
function wireCharts(){
  document.querySelectorAll(".chart[data-chart]").forEach(box=>{
    const c=CH[box.dataset.chart]; if(!c) return; const tip=box.querySelector(".tip"), svg=box.querySelector("svg");
    const cross=c.cross?svg.querySelector("#"+CSS.escape(c.cross)):null;
    box.querySelectorAll(".hit").forEach(r=>{
      r.addEventListener("mouseenter",()=>{ const i=+r.dataset.i;
        tip.innerHTML=`<b>Semana del ${esc(wkLabel(c.W[i]))}</b><br>`+c.rows[i].map(x=>`<i style="background:var(--s-${x.k})"></i>${esc(x.label)}: <b>${esc(x.v)}</b>`).join("<br>")+`<br><span style="opacity:.7">${esc(c.tot[i])}</span>`;
        tip.hidden=false;
        const br=box.getBoundingClientRect(), rr=r.getBoundingClientRect();
        let left=rr.left-br.left+rr.width/2+12; if(left+tip.offsetWidth>br.width) left=rr.left-br.left+rr.width/2-tip.offsetWidth-12;
        tip.style.left=Math.max(0,left)+"px"; tip.style.top="8px";
        if(cross){ cross.setAttribute("x1",c.cx[i]); cross.setAttribute("x2",c.cx[i]); cross.setAttribute("visibility","visible"); } });
      r.addEventListener("mouseleave",()=>{ tip.hidden=true; if(cross) cross.setAttribute("visibility","hidden"); });
    });
  });
}
const legend = keys => `<div class="legend">${SERIES.filter(s=>keys.includes(s.k)).map(s=>`<span><i style="background:var(--s-${s.k})"></i>${s.label}</span>`).join("")}</div>`;

/* ---------- Informes: vista ---------- */
function viewInformes(sid){
  const n=S.periodo, M=metrics(sid,n), s=sid?subById(sid):null;
  const cpl=M.leadsAds?M.inv/M.leadsAds:0, roas=M.inv?M.valor/M.inv:0;
  const chips=`<div class="chips" role="group" aria-label="Periodo">${[4,12,26].map(k=>`<button class="chip" data-periodo="${k}" aria-pressed="${n===k}">${k} semanas</button>`).join("")}</div>`;
  const kpis=`<div class="kpis">
    <div class="kpi"><small>Inversión en anuncios</small><b class="num">${eur.format(M.inv)}</b><span class="num">Meta ${eur.format(M.orig.meta.inv)} · Google ${eur.format(M.orig.google.inv)}</span></div>
    <div class="kpi"><small>Leads nuevos</small><b class="num">${nf.format(M.contactos.length)}</b><span class="num">${M.leadsAds} de anuncios</span></div>
    <div class="kpi"><small>Coste por lead</small><b class="num">${M.leadsAds?eur2.format(cpl):"—"}</b><span>inversión ÷ leads de anuncios</span></div>
    <div class="kpi"><small>Ganado</small><b class="num">${eur.format(M.valor)}</b><span class="num">${M.ganadas.length} cierres · retorno ${M.inv?roas.toFixed(1).replace(".",",")+"×":"—"}</span></div>
  </div>`;
  const hasLeads=M.contactos.length>0, hasInv=M.inv>0;
  const charts=`<div class="grid2">
    <section class="panel"><div class="ph"><h2>Leads por semana</h2><span>según el origen del contacto</span></div>${legend(["meta","otros","google"])}
      ${hasLeads?chartStack("ch-leads"+(sid||""),M.W,M.byW):`<p class="muted" style="margin:0">Sin leads nuevos en este periodo.</p>`}</section>
    <section class="panel"><div class="ph"><h2>Inversión por semana</h2><span>datos de las integraciones</span></div>${legend(["meta","google"])}
      ${hasInv?chartLines("ch-inv"+(sid||""),M.W,M.byW):`<p class="muted" style="margin:0">Aún no hay datos de anuncios. ${sid?`<button class="btn sec" data-go-integ="${esc(sid)}" style="margin-top:8px">Conectar anuncios</button>`:""}</p>`}</section>
  </div>`;
  const oRows=[["meta","Meta Ads"],["google","Google Ads"],["otros","Otros orígenes"]].map(([k,l])=>{ const o=M.orig[k], c=o.leads&&o.inv?o.inv/o.leads:0;
    return `<tr><td><span class="dotlab" style="color:var(--s-${k})"></span> ${l}</td><td class="r num">${k==="otros"?"—":eur.format(o.inv)}</td><td class="r num">${k==="otros"?"—":nf.format(o.cl)}</td><td class="r num">${nf.format(o.leads)}</td><td class="r num">${c?eur2.format(c):"—"}</td><td class="r num">${o.gan}</td><td class="r num">${eur.format(o.val)}</td></tr>`; }).join("");
  const origTable=`<section class="panel"><div class="ph"><h2>Por origen</h2><span>de lead a cliente</span></div><div class="table-wrap" style="border:0;border-radius:0;background:none"><table>
    <thead><tr><th>Origen</th><th class="r">Inversión</th><th class="r">Clics</th><th class="r">Leads</th><th class="r">Coste por lead</th><th class="r">Cierres</th><th class="r">Valor ganado</th></tr></thead><tbody>${oRows}</tbody></table></div></section>`;
  const seg=seguimiento(sid), segHTML=`<section class="panel"><div class="ph"><h2>Seguimiento</h2><span>${seg.length?seg.length+" pendientes":"todo al día"}</span></div>
    ${seg.length?`<div class="follow">${seg.slice(0,8).map(x=>`<button data-follow="${esc(x.ref)}"><span class="sev ${x.sev}"></span><span style="min-width:0"><b>${esc(x.t)}</b><small>${esc(x.d)}${sid?"":" · "+esc((subById(x.ref.split(":")[2])||{}).nombre||"")}</small></span>${I.arrow.replace('<svg','<svg width="16" height="16" style="color:var(--muted)"')}</button>`).join("")}</div>${seg.length>8?`<p class="muted" style="margin:0;font-size:13px">Y ${seg.length-8} más.</p>`:""}`:`<p class="muted" style="margin:0">Nadie esperando respuesta. Cabeza fría.</p>`}</section>`;
  let extra="";
  if(sid){
    const et=etapasDe(s), lost=etapaPerdida(s), ops=of("oportunidades",sid), totalC=of("contactos",sid).length;
    const idx=o=>et.indexOf(o.etapa);
    const rows=[["Contactos",totalC]].concat(et.filter(e=>e!==lost).map((e,i)=>[e,ops.filter(o=>o.etapa!==lost&&idx(o)>=i).length]));
    const top=Math.max(1,rows[0][1]);
    const funnel=`<section class="panel"><div class="ph"><h2>Embudo</h2><span>hasta dónde ha llegado cada contacto</span></div><div class="funnel">${rows.map(([l,v])=>`<div class="fun-row"><span>${esc(l)}</span><div class="track"><i style="width:${Math.max(v?2:0,v/top*100)}%"></i></div><span class="n num"><b>${v}</b> · ${Math.round(v/top*100)}%</span></div>`).join("")}</div></section>`;
    const cRows=M.camps.filter(x=>x.inv||x.cl).sort((a,b)=>b.inv-a.inv).map(x=>`<tr><td><span class="pill" style="color:var(--s-${x.k})"><span class="dotlab"></span><span style="color:var(--fg)">${esc(x.a.plataforma)}</span></span></td><td>${esc(x.a.campana)}</td><td class="r num">${eur.format(x.inv)}</td><td class="r num">${nf.format(x.imp)}</td><td class="r num">${nf.format(x.cl)}</td><td class="r num">${x.imp?(x.cl/x.imp*100).toFixed(1).replace(".",","):"0"}%</td><td class="r num">${nf.format(x.ld)}</td><td class="r num">${x.ld?eur2.format(x.inv/x.ld):"—"}</td></tr>`).join("");
    extra=`<div class="grid2">${funnel}${segHTML}</div>${cRows?`<section class="panel"><div class="ph"><h2>Campañas de anuncios</h2><span>leads según cada plataforma</span></div><div class="table-wrap" style="border:0;border-radius:0;background:none"><table><thead><tr><th>Plataforma</th><th>Campaña</th><th class="r">Inversión</th><th class="r">Impresiones</th><th class="r">Clics</th><th class="r">CTR</th><th class="r">Leads</th><th class="r">Coste por lead</th></tr></thead><tbody>${cRows}</tbody></table></div></section>`:""}`;
  } else {
    const subs=[...S.data.subcuentas].sort((a,b)=>(b.interna?1:0)-(a.interna?1:0)||String(a.nombre).localeCompare(b.nombre,"es"));
    const rows=subs.map(x=>{ const m=metrics(x.id,n), c=m.leadsAds?m.inv/m.leadsAds:0, pend=seguimiento(x.id).length;
      return `<tr data-go-sub="${esc(x.id)}" data-go-tab="informes"><td><div class="who"><span class="avatar">${esc(ini(x.nombre))}</span><div style="min-width:0"><b>${esc(x.nombre)}</b><small>${esc(x.sector||"")}</small></div></div></td>
        <td class="r num">${eur.format(m.inv)}</td><td class="r num">${m.contactos.length}</td><td class="r num">${c?eur2.format(c):"—"}</td><td class="r num">${eur.format(m.valor)}</td><td class="r num">${m.inv?(m.valor/m.inv).toFixed(1).replace(".",",")+"×":"—"}</td><td class="r">${pend?`<span class="pill warn num">${pend}</span>`:'<span class="muted">0</span>'}</td></tr>`; }).join("");
    extra=`<div class="table-wrap"><table><thead><tr><th>Subcuenta</th><th class="r">Inversión</th><th class="r">Leads</th><th class="r">Coste por lead</th><th class="r">Ganado</th><th class="r">Retorno</th><th class="r">Seguimiento</th></tr></thead><tbody>${rows}</tbody></table></div>${segHTML}`;
  }
  const ttl = sid ? "Tus <span class=\"m\">números.</span>" : "Los números de <span class=\"m\">todas.</span>";
  return headHTML(sid?esc(s.nombre):"Vista de agencia", ttl, "Anuncios, leads y cierres del periodo. Primero los datos, después las opiniones.", chips)+kpis+charts+(sid?origTable+extra:extra+origTable);
}

/* ---------- Integraciones ---------- */
function estadoPill(x){
  const st=(x&&x.estado)||"desconectada";
  if(st==="conectada") return `<span class="pill ok">Conectada</span>`;
  if(st==="error") return `<span class="pill bad">Revisar conexión</span>`;
  return `<span class="pill">Sin conectar</span>`;
}
function viewIntegSub(){
  const s=sub(), ig=integ(s.id);
  const rows=Object.entries(PLAT).map(([k,p])=>{ const x=ig[k]||{}, st=x.estado||"desconectada", nC=of("anuncios",s.id).filter(a=>platKey(a.plataforma)===k).length;
    const acts = st==="desconectada"
      ? addBtn("Conectar "+p.nombre,`data-connect="${k}"`)
      : (canEdit()?`${st==="error"?`<button class="btn" data-connect="${k}">Reconectar</button>`:""}<button class="btn sec" data-importar="${k}">Importar CSV</button><button class="btn ghost" data-disconnect="${k}">Desconectar</button>`:"");
    return `<div class="integ-row"><span class="logo" style="color:var(--s-${k})">${p.ab}</span>
      <div><h3>${p.nombre} ${estadoPill(x)}</h3><p>${st==="error"&&x.error?esc(x.error):p.desc}</p></div>
      <div class="integ-meta">${st==="desconectada"?`<span>Ninguna cuenta vinculada</span>`:`<b>${esc(x.cuentaNombre||"Cuenta sin nombre")}</b><span class="num">${esc(x.cuentaId||"")}</span>${x.metodo?`<span>${esc(metodoTxt(k,x.metodo))}</span>`:""}<span>${x.ultimaSync?"Datos al día "+rel(x.ultimaSync):"Sin datos todavía"} · ${nC} ${nC===1?"campaña":"campañas"}</span>`}</div>
      <div class="actions">${acts}</div></div>`; }).join("");
  return headHTML(esc(s.nombre),"Tus <span class=\"m\">integraciones.</span>","Vincula las cuentas de anuncios de este cliente para ver inversión, clics y coste por lead en Informes.","")
    + `<div class="integ">${rows}</div>
    <p class="muted" style="margin:0;font-size:14px;max-width:70ch">La conexión automática llegará con tu sistema de integración. Mientras tanto, vincula la cuenta y sube el informe semanal en CSV desde el administrador de anuncios.</p>`;
}
function viewIntegAgencia(){
  const subs=[...S.data.subcuentas].sort((a,b)=>(b.interna?1:0)-(a.interna?1:0)||String(a.nombre).localeCompare(b.nombre,"es"));
  const last=ig=>{ const t=["meta","google"].map(k=>ig[k]&&ig[k].ultimaSync).filter(Boolean).sort().pop(); return t?rel(t):"—"; };
  const conn=subs.reduce((t,s)=>{ const ig=integ(s.id); return t+["meta","google"].filter(k=>ig[k]&&ig[k].estado==="conectada").length; },0);
  const errs=subs.reduce((t,s)=>{ const ig=integ(s.id); return t+["meta","google"].filter(k=>ig[k]&&ig[k].estado==="error").length; },0);
  const rows=subs.map(s=>{ const ig=integ(s.id); return `<tr data-go-integ="${esc(s.id)}"><td><div class="who"><span class="avatar">${esc(ini(s.nombre))}</span><div style="min-width:0"><b>${esc(s.nombre)}</b><small>${esc(s.sector||"")}</small></div></div></td>
    <td>${estadoPill(ig.meta)}</td><td>${estadoPill(ig.google)}</td><td class="muted">${last(ig)}</td><td class="r"><span class="btn sec" style="padding:6px 12px">Gestionar ${I.arrow}</span></td></tr>`; }).join("");
  return headHTML("Vista de agencia","Tus <span class=\"m\">conexiones.</span>",`${conn} cuentas de anuncios conectadas${errs?` y ${errs} por revisar`:""}. Cada subcuenta vincula sus propias cuentas de Meta y Google.`,"")
    + (subs.length?`<div class="table-wrap"><table><thead><tr><th>Subcuenta</th><th>Meta Ads</th><th>Google Ads</th><th>Últimos datos</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>`:`<div class="empty"><h2>Sin subcuentas.</h2><p>Crea una subcuenta para vincular sus cuentas de anuncios.</p></div>`)
    + `<section class="panel"><div class="ph"><h2>Para tu sistema de integración</h2><span>dónde escribir los datos</span></div>
      <p class="muted" style="margin:0;max-width:70ch">Cuando montes la conexión con las APIs de Meta y Google, tu sistema lee las campañas enviadas a publicar y escribe los resultados en estas colecciones.</p>
      <div class="code">integraciones/{idSubcuenta}
  meta | google: { estado: "conectada" | "error" | "desconectada",
                   cuentaId, cuentaNombre, ultimaSync, error }

anuncios/{idCampaña}
  sub, plataforma: "Meta Ads" | "Google Ads", campana,
  semanas: [{ inicio: "2026-10-05", inversion, impresiones, clics, leads }]

contactos/{id}.fuente = "Meta Ads" | "Google Ads" para atribuir cada lead

campanasAds/{id}   (campañas preparadas en el CRM)
  estado "cola" → tu sistema la crea en Meta o Google y escribe
  estado: "activa" | "error", externalId, error</div></section>`;
}

function drawerDisconnect(k){
  const s=sub(), p=PLAT[k];
  openDrawer(`Desconectar <span class="m">${p.nombre.split(" ")[0]}.</span>`,
    `<p class="lead" style="margin:0">Dejarás de recibir datos nuevos de ${p.nombre} en ${esc(s.nombre)}. Los datos que ya tienes se quedan en Informes.</p>`,
    `<button type="button" class="btn ghost" data-close>Cancelar</button><button class="btn danger armed" type="submit">Desconectar</button>`,
    async()=>{ const cur=integ(s.id); const body=Object.assign({},cur,{sub:s.id}); delete body.id; body[k]=Object.assign({},cur[k]||{},{estado:"desconectada"}); await save("integraciones",s.id,body); toast(p.nombre+" desconectada"); });
}

function parseCSV(text){
  const lines=String(text||"").split(/\r?\n/).map(l=>l.trim()).filter(Boolean); if(!lines.length) return {rows:[],errores:0};
  const sep=[";","\t",","].map(c=>[c,lines[0].split(c).length]).sort((a,b)=>b[1]-a[1])[0][0];
  const num=v=>{ v=String(v||"").replace(/[€\s"]/g,""); if(sep===";"||/,\d{1,2}$/.test(v)) v=v.replace(/\./g,"").replace(",","."); return +v||0; };
  const date=v=>{ v=String(v||"").replace(/"/g,"").trim(); let m=v.match(/^(\d{4})-(\d{2})-(\d{2})/); if(m) return new Date(+m[1],m[2]-1,+m[3]);
    m=v.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/); if(m) return new Date(+m[3],m[2]-1,+m[1]); return null; };
  const rows=[]; let errores=0;
  lines.forEach((l,i)=>{ const c=l.split(sep); const d=date(c[0]); if(!d){ if(i>0) errores++; return; }
    rows.push({inicio:ymd(monday(d)),campana:String(c[1]||"Sin nombre").replace(/"/g,"").trim(),inversion:num(c[2]),impresiones:num(c[3]),clics:num(c[4]),leads:num(c[5])}); });
  return {rows,errores};
}
function drawerImport(k){
  const s=sub(), p=PLAT[k];
  openDrawer(`Importar <span class="m">datos.</span>`,
    `<p class="lead" style="margin:0">Sube el informe de ${p.nombre} de ${esc(s.nombre)}. Si una semana ya existe, se sustituye.</p>`+
    fld("i-file","Archivo CSV",`<input id="i-file" type="file" accept=".csv,text/csv,text/plain">`)+
    fld("i-csv","O pega aquí las filas",`<textarea id="i-csv" name="csv" style="min-height:150px;font-family:ui-monospace,Menlo,monospace;font-size:12.5px" placeholder="fecha;campaña;inversión;impresiones;clics;leads&#10;2026-09-28;Implantes – leads;412,50;38200;910;19"></textarea>`,"Columnas en este orden: fecha, campaña, inversión, impresiones, clics y leads. Vale separado por comas o por punto y coma.")+
    `<p class="muted" id="i-prev" style="margin:0;font-size:13.5px">Sin filas todavía.</p>`,
    `<button type="button" class="btn ghost" data-close>Cancelar</button><button class="btn" type="submit">Importar filas</button>`,
    async fd=>{ const {rows}=parseCSV(fd.csv); if(!rows.length){ toast("No hay filas válidas que importar."); throw new Error("vacio"); }
      const byC={}; rows.forEach(r=>{ (byC[r.campana]=byC[r.campana]||{}); const w=byC[r.campana][r.inicio]||(byC[r.campana][r.inicio]={inicio:r.inicio,inversion:0,impresiones:0,clics:0,leads:0});
        w.inversion+=r.inversion; w.impresiones+=r.impresiones; w.clics+=r.clics; w.leads+=r.leads; });
      for(const [camp,ws] of Object.entries(byC)){
        const ex=S.data.anuncios.find(a=>a.sub===s.id&&a.plataforma===p.nombre&&a.campana===camp);
        const sem=(ex&&ex.semanas?ex.semanas.filter(x=>!ws[x.inicio]):[]).concat(Object.values(ws).map(w=>Object.assign(w,{inversion:Math.round(w.inversion*100)/100})))
          .sort((a,b)=>a.inicio.localeCompare(b.inicio)).slice(-156);
        await save("anuncios",ex?ex.id:uid("a"),{sub:s.id,plataforma:p.nombre,campana:camp,semanas:sem});
      }
      const cur=integ(s.id), body=Object.assign({},cur,{sub:s.id}); delete body.id;
      body[k]=Object.assign({estado:"conectada",cuentaId:"",cuentaNombre:s.nombre},cur[k]||{},{ultimaSync:nowISO()}); await save("integraciones",s.id,body);
      toast(rows.length+" filas importadas en "+Object.keys(byC).length+(Object.keys(byC).length===1?" campaña":" campañas")); });
  const ta=$("#i-csv"), prev=$("#i-prev");
  const upd=()=>{ const r=parseCSV(ta.value); prev.textContent=r.rows.length?`${r.rows.length} filas listas para importar${r.errores?` · ${r.errores} sin fecha válida, se ignoran`:""}.`:"Sin filas todavía."; };
  ta.addEventListener("input",upd);
  $("#i-file").addEventListener("change",e=>{ const f=e.target.files&&e.target.files[0]; if(!f) return; const rd=new FileReader(); rd.onload=()=>{ ta.value=rd.result; upd(); }; rd.readAsText(f); });
}

/* ---------- Utilidades de formularios ---------- */
const clone = o => JSON.parse(JSON.stringify(o==null?{}:o));
const getPath = (o,p) => p.split(".").reduce((a,k)=>a==null?undefined:a[k],o);
function setPath(o,p,v){ const ks=p.split("."); let a=o; ks.slice(0,-1).forEach((k,i)=>{ if(a[k]==null||typeof a[k]!=="object") a[k]=/^\d+$/.test(ks[i+1])?[]:{}; a=a[k]; }); a[ks[ks.length-1]]=v; }
const ro = () => canEdit()?"":"disabled";
const fechaCorta = x => x ? new Date(String(x).slice(0,10)+"T12:00:00").toLocaleDateString("es-ES",{day:"numeric",month:"short"}) : "—";
function domainOf(u){ try{ return new URL(u).hostname.replace(/^www\./,""); }catch(e){ return ""; } }
const trunc = (t,n) => { t=String(t||"").trim(); return t.length>n?t.slice(0,n-1).trimEnd()+"…":t; };
const AS = {};
function autosave(key,fn,delay){ const a=AS[key]||(AS[key]={}); clearTimeout(a.t); a.t=setTimeout(()=>flush(key,fn),delay==null?1200:delay); }
async function flush(key,fn){ const a=AS[key]||(AS[key]={}); clearTimeout(a.t); if(a.busy){ a.again=fn; return; } a.busy=true; try{ await fn(); }catch(e){} a.busy=false; if(a.again){ const f=a.again; a.again=null; flush(key,f); } }
function editingForm(){ const a=document.activeElement; return !!(a && $("#main").contains(a) && a.matches("input,textarea,select") && (a.dataset.f||a.dataset.b||a.dataset.s||a.dataset.bchk||a.dataset.pf||a.dataset.fname)); }
function leaveEditors(){
  if(S.flow){ if(S.flow.dirty) flush("flow",saveFlow); S.flow=null; }
  if(S.fun){ if(S.fun.dirty) flush("fun",saveFun); S.fun=null; }
  if(S.camp){ if(S.camp.dirty) flush("camp",saveCamp); S.camp=null; }
  if(S.brief && S.brief.dirty) flush("brief",saveBrief);
  if(S.subDraft){ const D=S.subDraft; flush("sub",saveSubDraft).then(()=>{ if(S.subDraft===D) S.subDraft=null; }); }
}

/* ---------- Campañas de anuncios ---------- */
const OBJ = {
  meta:[["leads","Clientes potenciales","Formulario instantáneo dentro de Facebook o Instagram."],["trafico","Tráfico","Visitas a la web o a una landing."],["ventas","Ventas","Compras o conversiones en la web. Necesita píxel."],["interaccion","Interacción","Mensajes de WhatsApp, Instagram o Messenger."],["reconocimiento","Reconocimiento","Que te vea y te recuerde la gente adecuada."]],
  google:[["busqueda","Búsqueda","Anuncios de texto cuando alguien busca lo que vendes."],["pmax","Performance Max","Todos los canales de Google con un solo presupuesto."],["demandgen","Demand Gen","YouTube, Discover y Gmail con imagen y vídeo."],["display","Display","Banners en webs de la red de Display."]]
};
const PUJA = {meta:["Mayor volumen","Objetivo de coste por resultado","Límite de puja"],google:["Maximizar conversiones","CPA objetivo","Maximizar clics","ROAS objetivo"]};
const PUJA_VALOR = {"Objetivo de coste por resultado":"Coste por resultado objetivo (€)","Límite de puja":"Puja máxima (€)","CPA objetivo":"CPA objetivo (€)","ROAS objetivo":"ROAS objetivo (%)"};
const CTA_META = ["Más información","Solicitar presupuesto","Reservar","Contactar","Registrarte","Enviar mensaje de WhatsApp","Comprar"];
const CAT_ESP = ["Ninguna","Vivienda","Empleo","Servicios financieros","Temas sociales, elecciones o política"];
const EST_ADS = {borrador:["Borrador",""],lista:["Lista para publicar","rosa"],cola:["Enviada a publicar","warn"],activa:["Activa","ok"],pausada:["Pausada",""],error:["Con errores","bad"]};
const STEPS = ["Objetivo","Presupuesto","Audiencia","Anuncio","Revisión"];
const LIM = {"ad.texto":[125,"rec"],"ad.titulo":[40,"rec"],"ad.descripcion":[30,"rec"],"ad.ruta1":[15,"max"],"ad.ruta2":[15,"max"]};
function limOf(p){ if(/^ad\.headlines\.\d+$/.test(p)) return [30,"max"]; if(/^ad\.descs\.\d+$/.test(p)) return [90,"max"]; return LIM[p]; }
const cntTxt = (v,l) => `${String(v||"").length}/${l[0]}${l[1]==="rec"?" recomendado":""}`;

function newDraft(plat){
  return {sub:S.subId,plataforma:plat,objetivo:plat==="meta"?"leads":"busqueda",nombre:"",estado:"borrador",categoria:"Ninguna",
    presupuesto:{tipo:"diario",importe:20},inicio:ymd(new Date()),fin:"",puja:PUJA[plat][0],pujaValor:"",
    seg:{ubicaciones:"",radio:"",edadMin:25,edadMax:65,genero:"todos",idiomas:"Español",intereses:"",publicos:"",excluir:""},
    ubic:{auto:true,fb:true,ig:true,msg:false,an:false},kw:[{t:"",m:"frase"}],negativas:"",
    ad:{texto:"",titulo:"",descripcion:"",cta:"Más información",url:"",creatividad:"",formulario:"",privacidad:"",headlines:["","",""],descs:["",""],ruta1:"",ruta2:""},
    notas:"",creado:nowISO(),actualizado:nowISO()};
}
const conectada = (sid,plat) => { const x=integ(sid)[plat]; return !!(x&&x.estado==="conectada"); };
const estPill = e => { const [l,c]=EST_ADS[e]||EST_ADS.borrador; return `<span class="pill ${c}">${l}</span>`; };
const budgetTxt = d => d.presupuesto&&+d.presupuesto.importe ? eur.format(+d.presupuesto.importe)+(d.presupuesto.tipo==="diario"?"/día":" en total") : "Sin presupuesto";
const objLabel = d => ((OBJ[d.plataforma]||[]).find(o=>o[0]===d.objetivo)||[0,"—"])[1];
function mensual(d){ const imp=+(d.presupuesto&&d.presupuesto.importe)||0; if(d.presupuesto&&d.presupuesto.tipo==="total"){ if(d.inicio&&d.fin){ const dias=Math.max(1,(new Date(d.fin)-new Date(d.inicio))/86400000+1); return imp/dias*30.4; } return imp; } return imp*30.4; }
function campStats(c){
  const a=S.data.anuncios.find(x=>x.sub===c.sub&&platKey(x.plataforma)===c.plataforma&&x.campana===c.nombre); if(!a) return null;
  const W=new Set(weeks(4)); let inv=0,ld=0; (a.semanas||[]).forEach(r=>{ if(W.has(ymd(monday(r.inicio+"T12:00:00")))){ inv+=+r.inversion||0; ld+=+r.leads||0; } }); return {inv,ld};
}
function cplHist(sid,plat){ let inv=0,ld=0; const W=new Set(weeks(12)); S.data.anuncios.filter(a=>a.sub===sid&&platKey(a.plataforma)===plat).forEach(a=>(a.semanas||[]).forEach(r=>{ if(W.has(ymd(monday(r.inicio+"T12:00:00")))){ inv+=+r.inversion||0; ld+=+r.leads||0; } })); return ld?inv/ld:0; }
const filled = v => Array.isArray(v)?v.some(x=>String(x||"").trim()):String(v==null?"":v).trim()!=="";
const isUrl = u => /^https?:\/\/[^\s/]+\.[^\s]+/.test(u||"");

function checks(d){
  const out=[], add=(ok,txt,lvl)=>out.push({lvl:ok?"ok":(lvl||"bad"),txt}), ad=d.ad||{}, seg=d.seg||{}, meta=d.plataforma==="meta";
  add(filled(d.nombre),"La campaña tiene nombre");
  add(+(d.presupuesto&&d.presupuesto.importe)>0,"Presupuesto mayor que 0 €");
  add(!!d.inicio,"Fecha de inicio");
  if(d.fin) add(d.fin>=d.inicio,"La fecha de fin va después del inicio");
  add(filled(seg.ubicaciones),"Ubicaciones donde se mostrarán los anuncios");
  if(meta){
    add(filled(ad.texto),"Texto principal");
    add(filled(ad.titulo),"Título");
    if(d.objetivo==="leads"){ add(filled(ad.formulario),"Preguntas del formulario instantáneo"); add(isUrl(ad.privacidad),"Enlace a la política de privacidad (Meta lo exige en los formularios)"); }
    else add(isUrl(ad.url),"URL de destino con https://");
    add(filled(ad.creatividad),"Creatividad: imagen o vídeo","warn");
    if(String(ad.texto||"").length>125) out.push({lvl:"warn",txt:"El texto principal pasa de 125 caracteres y se cortará con «Ver más»"});
    if(!d.ubic||!d.ubic.auto){ add(["fb","ig","msg","an"].some(k=>d.ubic&&d.ubic[k]),"Al menos una ubicación de anuncio"); }
    if(d.categoria&&d.categoria!=="Ninguna"){
      add(+seg.edadMin<=18&&+seg.edadMax>=65&&seg.genero==="todos",`Categoría especial (${d.categoria}): todas las edades y todos los sexos`);
      add(!+seg.radio||+seg.radio>=24,"Categoría especial: radio de 24 km (15 millas) o más");
    }
  } else {
    const hs=(ad.headlines||[]).filter(h=>filled(h)).length, ds=(ad.descs||[]).filter(h=>filled(h)).length;
    if(d.objetivo==="busqueda") add((d.kw||[]).some(k=>filled(k.t)),"Al menos una palabra clave");
    add(hs>=3,`Al menos 3 títulos (tienes ${hs})`);
    add(ds>=2,`Al menos 2 descripciones (tienes ${ds})`);
    add(isUrl(ad.url),"URL final con https://");
    if(d.objetivo!=="busqueda") add(filled(ad.creatividad),"Imágenes, logo o vídeo para los recursos","warn");
  }
  if(PUJA_VALOR[d.puja]) add(+d.pujaValor>0,`Importe de la puja (${d.puja})`);
  add(conectada(d.sub,d.plataforma),`Cuenta de ${PLAT[d.plataforma].nombre} conectada en Integraciones`,"warn");
  return out;
}
const blocking = cs => cs.some(c=>c.lvl==="bad");
function stepDone(d,i){
  const ad=d.ad||{}, seg=d.seg||{};
  if(i===0) return filled(d.nombre)&&!!d.objetivo;
  if(i===1) return +(d.presupuesto&&d.presupuesto.importe)>0&&!!d.inicio&&(!PUJA_VALOR[d.puja]||+d.pujaValor>0);
  if(i===2) return filled(seg.ubicaciones)&&(d.plataforma!=="google"||d.objetivo!=="busqueda"||(d.kw||[]).some(k=>filled(k.t)));
  if(i===3) return d.plataforma==="meta" ? filled(ad.texto)&&filled(ad.titulo)&&(d.objetivo==="leads"?filled(ad.formulario):isUrl(ad.url))
    : (ad.headlines||[]).filter(filled).length>=3&&(ad.descs||[]).filter(filled).length>=2&&isUrl(ad.url);
  return !blocking(checks(d));
}

/* campos del editor */
const fv = p => getPath(S.camp.d,p);
const fid = p => "f-"+p.replace(/\./g,"-");
function fIn(p,label,o){ o=o||{}; const id=fid(p), v=fv(p), lim=limOf(p), max=lim&&lim[1]==="max"?` maxlength="${lim[0]}"`:"";
  const ph=o.ph?` placeholder="${esc(o.ph)}"`:"";
  const ctrl=o.area?`<textarea id="${id}" data-f="${p}"${ph}${max} ${ro()}>${esc(v)}</textarea>`
    :`<input id="${id}" data-f="${p}" type="${o.type||"text"}" value="${esc(v==null?"":v)}"${ph}${o.min!=null?` min="${o.min}"`:""}${o.step?` step="${o.step}"`:""}${max} ${ro()}>`;
  return `<div class="field"><label for="${id}">${label}</label>${ctrl}${lim?`<span class="cnt${String(v||"").length>lim[0]?" over":""}" data-cnt="${p}">${cntTxt(v,lim)}</span>`:""}${o.help?`<span class="help">${o.help}</span>`:""}</div>`; }
function fSel(p,label,opts,o){ o=o||{}; const id=fid(p); return `<div class="field"><label for="${id}">${label}</label><select id="${id}" data-f="${p}" ${o.struct?"data-struct":""} ${ro()}>${selOpts(opts,fv(p))}</select>${o.help?`<span class="help">${o.help}</span>`:""}</div>`; }

function estimHTML(d){
  const m=mensual(d), cpl=cplHist(d.sub,d.plataforma), b=briefDoc(d.sub), tope=b&&b.campos&&+b.campos.presupuestoAds;
  const otras=of("campanasAds",d.sub).filter(c=>c.id!==(S.camp&&S.camp.id)&&["activa","cola","lista"].includes(c.estado)).reduce((t,c)=>t+mensual(c),0);
  let h=`<div class="note"><b>Unos ${eur.format(m)} al mes.</b> `;
  h+= cpl ? `Con el coste por lead de las últimas 12 semanas en ${PLAT[d.plataforma].nombre} (${eur2.format(cpl)}), serían unos ${nf.format(Math.round(m/cpl))} leads al mes.` : `Cuando haya datos de esta cuenta, aquí verás cuántos leads puedes esperar.`;
  h+=`</div>`;
  if(tope && m+otras>tope) h+=`<div class="note" style="border-color:var(--warn)"><b>Ojo:</b> con las demás campañas activas o listas suman ${eur.format(m+otras)} al mes y el cliente indicó ${eur.format(tope)} en el brief.</div>`;
  return h;
}
function edObjetivo(d){
  return `<section class="form-block"><h2>Objetivo</h2><p class="sub">Qué quieres que pase cuando alguien vea el anuncio.</p>
    <div class="opts">${OBJ[d.plataforma].map(([k,l,h])=>`<button type="button" class="opt" data-set-f="objetivo" data-v="${k}" aria-pressed="${d.objetivo===k}" ${ro()}><b>${l}</b><span>${h}</span></button>`).join("")}</div>
    ${fIn("nombre","Nombre de la campaña",{ph:d.plataforma==="meta"?"Implantes · leads · octubre":"Ortodoncia invisible · búsqueda"})}
    ${d.plataforma==="meta"?fSel("categoria","Categoría especial de anuncio",CAT_ESP,{struct:true,help:"Obligatoria si anuncias vivienda, empleo, servicios financieros o temas sociales. Limita la segmentación por edad, sexo y zona."}):""}
  </section>`;
}
function edPresupuesto(d){
  return `<section class="form-block"><h2>Presupuesto y calendario</h2>
    <div class="row2">${fSel("presupuesto.tipo","Tipo de presupuesto",[["diario","Diario"],["total","Total de la campaña"]])}${fIn("presupuesto.importe","Importe (€)",{type:"number",min:1,step:"1"})}</div>
    <div class="row2">${fIn("inicio","Empieza",{type:"date"})}${fIn("fin","Termina",{type:"date",help:"Déjalo vacío para que siga activa."})}</div>
    <div class="row2">${fSel("puja","Estrategia de puja",PUJA[d.plataforma],{struct:true})}${PUJA_VALOR[d.puja]?fIn("pujaValor",PUJA_VALOR[d.puja],{type:"number",min:0,step:"0.01"}):"<span></span>"}</div>
    <div id="est-box" style="display:flex;flex-direction:column;gap:8px">${estimHTML(d)}</div>
  </section>`;
}
function edAudiencia(d){
  const ubic=fIn("seg.ubicaciones","Ubicaciones",{ph:"Valencia, Torrent, Paterna",help:"Ciudades, provincias o códigos postales, separados por comas."});
  if(d.plataforma==="meta"){
    const esp=d.categoria&&d.categoria!=="Ninguna";
    return `<section class="form-block"><h2>Audiencia</h2>
      ${esp?`<div class="note"><b>Categoría especial: ${esc(d.categoria)}.</b> Meta no deja segmentar por edad, sexo ni código postal, y pide un radio de al menos 24 km.</div>`:""}
      ${ubic}
      <div class="row3">${fIn("seg.radio","Radio (km)",{type:"number",min:0})}${fIn("seg.edadMin","Edad mínima",{type:"number",min:18})}${fIn("seg.edadMax","Edad máxima",{type:"number",min:18,help:"65 significa 65 o más."})}</div>
      ${fSel("seg.genero","Sexo",[["todos","Todos"],["mujeres","Mujeres"],["hombres","Hombres"]])}
      ${fIn("seg.intereses","Intereses y comportamientos",{area:true,ph:"Estética dental, bodas, salud y bienestar"})}
      <div class="row2">${fIn("seg.publicos","Públicos personalizados",{ph:"Visitantes de la web 180 días"})}${fIn("seg.excluir","Excluir",{ph:"Pacientes actuales"})}</div>
    </section>
    <section class="form-block"><h2>Ubicaciones de los anuncios</h2>
      <label class="check"><input type="checkbox" id="f-ubic-auto" data-f="ubic.auto" data-struct ${d.ubic&&d.ubic.auto?"checked":""} ${ro()}><span>Automáticas (recomendado). Meta reparte el presupuesto donde mejor funciona.</span></label>
      ${d.ubic&&d.ubic.auto?"":`<div class="checks">${[["fb","Facebook"],["ig","Instagram"],["msg","Messenger"],["an","Audience Network"]].map(([k,l])=>`<label><input type="checkbox" id="f-ubic-${k}" data-f="ubic.${k}" ${d.ubic&&d.ubic[k]?"checked":""} ${ro()}><span>${l}</span></label>`).join("")}</div>`}
    </section>`;
  }
  const kws=(d.kw||[]).map((k,i)=>`<div class="listrow"><input class="inp" id="f-kw-${i}-t" data-f="kw.${i}.t" value="${esc(k.t)}" placeholder="ortodoncia invisible valencia" aria-label="Palabra clave ${i+1}" ${ro()}><select class="inp" id="f-kw-${i}-m" data-f="kw.${i}.m" aria-label="Concordancia de la palabra clave ${i+1}" ${ro()}>${selOpts([["amplia","Amplia"],["frase","Frase"],["exacta","Exacta"]],k.m)}</select>${canEdit()&&d.kw.length>1?`<button type="button" class="x" data-del-row="kw.${i}" aria-label="Quitar palabra clave ${i+1}">${I.x}</button>`:"<span></span>"}</div>`).join("");
  return `<section class="form-block"><h2>Dónde y a quién</h2>${ubic}
      <div class="row2">${fIn("seg.radio","Radio (km)",{type:"number",min:0})}${fIn("seg.idiomas","Idiomas",{ph:"Español, valenciano"})}</div>
      ${d.objetivo!=="busqueda"?fIn("seg.intereses","Señales de audiencia",{area:true,ph:"Personas que buscan ortodoncia invisible, visitantes de la web, lista de clientes"}):""}
    </section>
    ${d.objetivo==="busqueda"?`<section class="form-block"><h2>Palabras clave</h2><p class="sub">Empieza con concordancia de frase o exacta para tener control. La amplia funciona mejor cuando las conversiones están bien medidas.</p>
      ${kws}${canEdit()?`<button type="button" class="btn sec" data-add-row="kw" style="align-self:flex-start">${I.plus}Añadir palabra clave</button>`:""}
      ${fIn("negativas","Palabras clave negativas",{area:true,ph:"gratis, curso, empleo, segunda mano",help:"Búsquedas por las que no quieres aparecer, separadas por comas."})}
    </section>`:""}`;
}
function rowsHL(d,key,max,lim,label,ph){
  const arr=(d.ad&&d.ad[key])||[];
  return arr.map((h,i)=>{ const p=`ad.${key}.${i}`; return `<div class="listrow"><input class="inp" id="${fid(p)}" data-f="${p}" value="${esc(h)}" maxlength="${lim}" placeholder="${esc(ph[i]||ph[ph.length-1])}" aria-label="${label} ${i+1}" ${ro()}><span class="cnt" data-cnt="${p}">${String(h||"").length}/${lim}</span>${canEdit()&&arr.length>(key==="headlines"?3:2)?`<button type="button" class="x" data-del-row="${p}" aria-label="Quitar ${label.toLowerCase()} ${i+1}">${I.x}</button>`:"<span></span>"}</div>`; }).join("")
    + (canEdit()&&arr.length<max?`<button type="button" class="btn sec" data-add-row="ad.${key}" style="align-self:flex-start">${I.plus}Añadir ${label.toLowerCase()}</button>`:"");
}
function edAnuncio(d){
  if(d.plataforma==="meta"){
    const leads=d.objetivo==="leads";
    return `<section class="form-block"><h2>Anuncio</h2>
      ${fIn("ad.texto","Texto principal",{area:true,ph:"¿Te falta una pieza? Implantes con estudio 3D y financiación sin intereses."})}
      <div class="row2">${fIn("ad.titulo","Título",{ph:"Primera visita gratis"})}${fIn("ad.descripcion","Descripción",{ph:"Plazas limitadas"})}</div>
      <div class="row2">${fSel("ad.cta","Botón",CTA_META)}${leads?"<span></span>":fIn("ad.url","URL de destino",{type:"url",ph:"https://"})}</div>
      ${fIn("ad.creatividad","Creatividad",{ph:"implantes-carrusel-01.jpg o enlace a la carpeta",help:"Nombre del archivo o enlace. Prepara 1080 × 1080 para el feed y 1080 × 1920 para stories y reels."})}
    </section>
    ${leads?`<section class="form-block"><h2>Formulario instantáneo</h2><p class="sub">Se abre dentro de Facebook o Instagram, sin salir a la web. Una pregunta por línea.</p>
      ${fIn("ad.formulario","Preguntas",{area:true,ph:"Nombre completo\nTeléfono\n¿Qué tratamiento te interesa?\n¿Cuándo prefieres que te llamemos?"})}
      ${fIn("ad.privacidad","Política de privacidad",{type:"url",ph:"https://"})}
      ${fIn("ad.url","Web al terminar el formulario (opcional)",{type:"url",ph:"https://"})}
    </section>`:""}`;
  }
  const busq=d.objetivo==="busqueda";
  return `<section class="form-block"><h2>${busq?"Anuncio de búsqueda adaptable":"Recursos del anuncio"}</h2><p class="sub">Google combina títulos y descripciones y aprende qué mezcla funciona. Hasta 15 títulos de 30 caracteres y 4 descripciones de 90.</p>
      ${fIn("ad.url","URL final",{type:"url",ph:"https://"})}
      <div class="row2">${fIn("ad.ruta1","Ruta 1",{ph:"ortodoncia"})}${fIn("ad.ruta2","Ruta 2",{ph:"invisible"})}</div>
      <p class="section-t">Títulos</p>${rowsHL(d,"headlines",15,30,"Título",["Ortodoncia invisible","Primera visita gratis","Financiación sin intereses","Clínica en Valencia"])}
      <p class="section-t">Descripciones</p>${rowsHL(d,"descs",4,90,"Descripción",["Estudio 3D y plan de tratamiento en la primera visita. Pide cita hoy.","Paga en cómodas cuotas sin intereses. Más de 15 años cuidando sonrisas."])}
      ${busq?"":fIn("ad.creatividad","Imágenes, logo y vídeo",{area:true,ph:"Carpeta con imágenes 1200 × 628 y 1200 × 1200, logo cuadrado y vídeo de YouTube"})}
    </section>`;
}
function checksHTML(cs){ return cs.map(c=>`<div class="ck ${c.lvl}"><span class="ic" aria-hidden="true">${c.lvl==="ok"?"✓":c.lvl==="warn"?"!":"×"}</span><span>${esc(c.txt)}</span></div>`).join(""); }
function estadoActions(d,cs){
  if(!canEdit()) return "";
  const bl=blocking(cs), con=conectada(d.sub,d.plataforma), pn=PLAT[d.plataforma].nombre;
  if(d.estado==="borrador") return `<div class="actions"><button class="btn" data-ads-estado="lista" ${bl?"disabled":""}>Marcar como lista</button></div>${bl?`<p class="help muted" style="margin:0;font-size:13px">Resuelve los puntos en rojo para marcarla como lista.</p>`:""}`;
  if(d.estado==="lista") return `<div class="actions"><button class="btn" data-ads-estado="cola" ${bl||!con?"disabled":""}>Enviar a publicar en ${pn}</button><button class="btn sec" data-ads-estado="borrador">Volver a borrador</button></div>${!con?`<p class="muted" style="margin:0;font-size:13px">Conecta la cuenta de ${pn} en Integraciones para poder enviarla.</p>`:""}`;
  if(d.estado==="cola") return `<p class="muted" style="margin:0;font-size:13.5px">Enviada ${rel(d.enviadaEn)}. Tu sistema de integración la creará en ${pn} y aquí verás si queda activa o si hay errores.</p><div class="actions"><button class="btn sec" data-ads-estado="lista">Cancelar el envío</button></div>`;
  return `<div class="actions"><button class="btn" data-ads-estado="cola" ${bl||!con?"disabled":""}>Enviar cambios a ${pn}</button></div>${d.externalId?`<p class="muted num" style="margin:0;font-size:13px">ID en ${pn}: ${esc(d.externalId)}</p>`:""}`;
}
function reviewLive(d){ const cs=checks(d); return `<div>${checksHTML(cs)}</div>${estadoActions(d,cs)}`; }
function edRevision(d){
  const seg=d.seg||{}, meta=d.plataforma==="meta";
  const rows=[["Plataforma",PLAT[d.plataforma].nombre],["Objetivo",objLabel(d)],["Presupuesto",budgetTxt(d)],["Calendario",(d.inicio?fechaCorta(d.inicio):"—")+(d.fin?" → "+fechaCorta(d.fin):" · sin fecha de fin")],["Puja",d.puja+(PUJA_VALOR[d.puja]&&d.pujaValor?" · "+d.pujaValor+(d.puja==="ROAS objetivo"?" %":" €"):"")],["Ubicaciones",(seg.ubicaciones||"—")+(seg.radio?` · ${seg.radio} km`:"")]]
    .concat(meta?[["Público",`${seg.edadMin||18}-${+seg.edadMax>=65?"65+":seg.edadMax} años · ${({todos:"todos los sexos",mujeres:"mujeres",hombres:"hombres"})[seg.genero]||"todos"}`],["Categoría especial",d.categoria||"Ninguna"]]
      :[["Palabras clave",d.objetivo==="busqueda"?String((d.kw||[]).filter(k=>filled(k.t)).length):"No aplica"]]);
  return `<section class="form-block"><h2>Resumen</h2><div class="mini">${rows.map(([a,b])=>`<div><span class="muted">${esc(a)}</span><b style="text-align:right">${esc(b)}</b></div>`).join("")}</div></section>
    <section class="form-block"><h2>Antes de publicar</h2>
      <div id="camp-review" style="display:flex;flex-direction:column;gap:14px">${reviewLive(d)}</div>
      ${fIn("notas","Notas internas",{area:true,ph:"Ideas para la siguiente versión, aprobaciones del cliente…"})}
    </section>`;
}
function previewHTML(d){
  const ad=d.ad||{}, s=subById(d.sub), name=s?s.nombre:"Tu marca";
  if(d.plataforma==="meta"){
    const t=String(ad.texto||""), txt=t?(t.length>125?esc(t.slice(0,125))+'… <span class="muted">Ver más</span>':esc(t)):'<span class="ph-empty">Aquí va el texto principal.</span>';
    const dom=d.objetivo==="leads"?"Formulario instantáneo":(domainOf(ad.url)||"tuweb.com");
    return `<div class="pv"><div class="pv-h"><span class="avatar">${esc(ini(name))}</span><div><b>${esc(name)}</b><small>Publicidad</small></div></div>
      <div class="pv-t">${txt}</div>
      <div class="pv-img">${filled(ad.creatividad)?`<span><b style="display:block;color:var(--fg)">Creatividad</b>${esc(ad.creatividad)}</span>`:'<span class="ph-empty">Tu imagen o vídeo</span>'}</div>
      <div class="pv-f"><div style="min-width:0"><small>${esc(dom)}</small><b>${esc(ad.titulo)||'<span class="ph-empty">Título</span>'}</b>${ad.descripcion?`<small>${esc(ad.descripcion)}</small>`:""}</div><span class="pv-cta">${esc(ad.cta||"Más información")}</span></div></div>`;
  }
  const hs=(ad.headlines||[]).filter(filled).slice(0,3), ds=(ad.descs||[]).filter(filled).slice(0,2), path=[ad.ruta1,ad.ruta2].filter(filled).join("/");
  return `<div class="pv pv-g"><div class="sp">Patrocinado</div><div class="dom">${esc(domainOf(ad.url)||"tuweb.com")}${path?" › "+esc(path):""}</div>
    <p class="hl">${hs.length?hs.map(esc).join(" | "):'<span class="ph-empty">Título 1 | Título 2 | Título 3</span>'}</p>
    <p>${ds.length?ds.map(esc).join(" "):'<span class="ph-empty">Tus descripciones aparecerán aquí.</span>'}</p></div>
    <p class="muted" style="font-size:12.5px;margin:0">Google combina títulos y descripciones. Esta es una de las combinaciones posibles.</p>`;
}
function sumHTML(d){ const cs=checks(d), bad=cs.filter(c=>c.lvl==="bad").length;
  return `<div class="mini"><div><span class="muted">Presupuesto</span><b class="num">${budgetTxt(d)}</b></div><div><span class="muted">Al mes, aprox.</span><b class="num">${eur.format(mensual(d))}</b></div><div><span class="muted">Pendiente</span><b>${bad?bad+(bad===1?" punto":" puntos"):"Nada"}</b></div></div>`; }
function briefCtx(sid){
  const b=briefDoc(sid), c=b&&b.campos; if(!c) return `<div class="ctx"><span class="muted">Rellena el brief en Configuración y aquí tendrás a mano la propuesta, el cliente ideal y las ofertas mientras escribes.</span></div>`;
  const items=[["Por qué les eligen",c.propuesta],["Cliente ideal",c.perfil],["Qué le frena",c.objeciones],["Ofertas y garantías",c.ofertas],["Tono",(c.tono||[]).join(", ")]].filter(([,v])=>filled(v));
  return `<div class="ctx">${items.length?items.slice(0,5).map(([k,v])=>`<div><b>${k}</b>${esc(trunc(v,150))}</div>`).join(""):'<span class="muted">El brief aún está vacío.</span>'}</div>`;
}

function viewCampanas(){
  if(S.camp && S.camp.sub===S.subId) return viewEditor();
  const s=sub(), all=of("campanasAds",s.id), f=S.adsFiltro||"";
  const list=all.filter(c=>!f||c.plataforma===f).sort((a,b)=>String(b.actualizado||"").localeCompare(String(a.actualizado||"")));
  const ig=integ(s.id);
  const conn=["meta","google"].map(k=>{ const st=ig[k]&&ig[k].estado; return `<span class="pill ${st==="conectada"?"ok":st==="error"?"bad":""}">${PLAT[k].nombre}: ${st==="conectada"?"conectada":st==="error"?"revisar conexión":"sin conectar"}</span>`; }).join("");
  const acts=canEdit()?`<button class="btn sec" data-new-ads="google">${I.plus}Google Ads</button><button class="btn" data-new-ads="meta">${I.plus}Meta Ads</button>`:"";
  const rows=list.map(c=>{ const st=campStats(c); return `<tr data-ads="${esc(c.id)}">
    <td><div class="who"><span class="logo" style="width:34px;height:34px;border-radius:10px;font-size:13px;color:var(--s-${c.plataforma})">${PLAT[c.plataforma].ab}</span><div style="min-width:0"><b>${esc(c.nombre||"Campaña sin nombre")}</b><small>${esc(objLabel(c))}</small></div></div></td>
    <td>${estPill(c.estado)}</td><td class="r num">${budgetTxt(c)}</td>
    <td class="muted" style="white-space:nowrap">${fechaCorta(c.inicio)}${c.fin?" → "+fechaCorta(c.fin):""}</td>
    <td class="r num">${st?eur.format(st.inv):"—"}</td><td class="r num">${st?nf.format(st.ld):"—"}</td><td class="r num">${st&&st.ld?eur2.format(st.inv/st.ld):"—"}</td></tr>`; }).join("");
  const filtros=`<div class="chips">${[["","Todas"],["meta","Meta Ads"],["google","Google Ads"]].map(([k,l])=>`<button class="chip" data-ads-filtro="${k}" aria-pressed="${f===k}">${l}</button>`).join("")}</div>`;
  const pend=all.filter(c=>c.estado==="lista").length;
  return headHTML(`${esc(s.nombre)} ${pend?`<span class="pill rosa num">${pend} lista${pend===1?"":"s"} para publicar</span>`:""}`,"Tus campañas de <span class=\"m\">anuncios.</span>","Prepara cada campaña aquí: objetivo, presupuesto, audiencia y anuncio. Cuando esté lista, la envías a publicar en Meta o Google.",acts)
    + `<div class="toolbar" style="justify-content:space-between">${filtros}<div class="chips">${conn}</div></div>`
    + (all.length?(list.length?`<div class="table-wrap"><table><thead><tr><th>Campaña</th><th>Estado</th><th class="r">Presupuesto</th><th>Fechas</th><th class="r">Inversión 4 sem.</th><th class="r">Leads 4 sem.</th><th class="r">Coste por lead</th></tr></thead><tbody>${rows}</tbody></table></div>`:`<div class="empty"><h2>Nada por aquí.</h2><p>No hay campañas de esta plataforma.</p></div>`)
      :`<div class="empty"><h2>Sin campañas todavía.</h2><p>Prepara la primera: eliges objetivo, presupuesto, audiencia y anuncio, y ves cómo quedará antes de publicarla.</p><div class="actions">${acts}</div></div>`);
}
function viewEditor(){
  const C=S.camp, d=C.d, step=C.step;
  if(!C.dirty && !C.saving && !C.nuevo){ const doc=S.data.campanasAds.find(x=>x.id===C.id); if(doc){ C.d=clone(doc); delete C.d.id; } }
  const D=C.d;
  const body=[edObjetivo,edPresupuesto,edAudiencia,edAnuncio,edRevision][step](D);
  const nav=STEPS.map((l,i)=>`<button type="button" data-step="${i}" ${i===step?'aria-current="step"':""} class="${stepDone(D,i)?"done":""}"><span class="sn">${i+1}</span>${l}</button>`).join("");
  const next=step<4?`<button class="btn" data-step="${step+1}">Siguiente: ${STEPS[step+1]} ${I.arrow}</button>`:"";
  return `<div class="head"><div><div class="eyebrow"><button class="btn ghost" data-ads-back style="padding:4px 8px 4px 0">← Campañas</button><span>${PLAT[D.plataforma].nombre}</span>${estPill(D.estado)}<span class="save-ind" id="save-ind">${saveTxt(C)}</span></div><h1 id="camp-title">${esc(D.nombre)||"Nueva campaña"}</h1></div>
      <div class="actions">${canEdit()&&!C.nuevo?`<button class="btn ghost" data-ads-dup>Duplicar</button><button class="btn danger" id="ads-del">Borrar</button>`:""}</div></div>
    ${D.estado==="error"&&D.error?`<div class="banner" style="border-color:var(--bad)"><b>${PLAT[D.plataforma].nombre} devolvió un error.</b> ${esc(D.error)}</div>`:""}
    <div class="ed"><div class="ed-main"><nav class="steps" aria-label="Pasos de la campaña">${nav}</nav>${body}
      <div class="actions" style="justify-content:space-between">${step>0?`<button class="btn sec" data-step="${step-1}">Anterior</button>`:"<span></span>"}${next}</div></div>
    <aside class="ed-side"><p class="side-t">Vista previa</p><div id="camp-preview" style="display:flex;flex-direction:column;gap:8px">${previewHTML(D)}</div><div id="camp-sum">${sumHTML(D)}</div>
      <p class="side-t">Del brief del cliente</p>${briefCtx(D.sub)}</aside></div>`;
}
const saveTxt = C => !canEdit()?"Solo lectura":C.saving?"Guardando…":C.dirty?"Cambios sin guardar":C.nuevo?"":"Guardado";
function setInd(){ const el=$("#save-ind"); if(el&&S.camp) el.textContent=saveTxt(S.camp); }
async function saveCamp(){
  const C=S.camp; if(!C||!canEdit()) return; const rev=C.rev;
  const body=Object.assign(clone(C.d),{actualizado:nowISO()}); delete body.id;
  C.saving=true; setInd();
  try{ await save("campanasAds",C.id,body); C.nuevo=false; if(C.rev===rev) C.dirty=false; }catch(e){}
  C.saving=false; setInd();
}
function campLive(){
  const C=S.camp; if(!C) return; const d=C.d;
  const set=(id,h)=>{ const el=document.getElementById(id); if(el) el.innerHTML=h; };
  set("camp-preview",previewHTML(d)); set("camp-sum",sumHTML(d)); set("camp-review",reviewLive(d)); set("est-box",estimHTML(d));
  const tt=$("#camp-title"); if(tt) tt.textContent=d.nombre||"Nueva campaña";
  document.querySelectorAll("[data-cnt]").forEach(el=>{ const p=el.dataset.cnt, l=limOf(p); if(!l) return; const v=getPath(d,p); el.textContent=el.closest(".listrow")?`${String(v||"").length}/${l[0]}`:cntTxt(v,l); el.classList.toggle("over",String(v||"").length>l[0]); });
  document.querySelectorAll(".steps [data-step]").forEach(b=>b.classList.toggle("done",stepDone(d,+b.dataset.step)));
}
function openCamp(id){ const doc=S.data.campanasAds.find(x=>x.id===id); if(!doc) return; const d=clone(doc); delete d.id;
  S.camp={id,sub:doc.sub,d,step:doc.estado==="borrador"?0:4,rev:0,dirty:false,nuevo:false}; renderMain(); window.scrollTo(0,0); }
function newCamp(plat){ S.camp={id:uid("ad"),sub:S.subId,d:newDraft(plat),step:0,rev:0,dirty:false,nuevo:true}; renderMain(); window.scrollTo(0,0); }
function campTouch(){ S.camp.dirty=true; S.camp.rev++; setInd(); autosave("camp",saveCamp); }

/* ---------- Configuración: brief del cliente ---------- */
const BRIEF = [
  {k:"negocio",t:"El negocio",d:"Lo básico para presentarles bien y no preguntar dos veces.",f:[
    {k:"nombreComercial",l:"Nombre comercial",h2:1},{k:"web",l:"Web",type:"url",ph:"https://",h2:1},
    {k:"razonSocial",l:"Razón social",h2:1},{k:"cif",l:"CIF",h2:1},
    {k:"contactoNombre",l:"Persona de contacto",h2:1},{k:"contactoCargo",l:"Cargo",h2:1},
    {k:"contactoEmail",l:"Email",type:"email",h2:1},{k:"contactoTel",l:"Teléfono",type:"tel",h2:1},
    {k:"ambito",l:"Ámbito",type:"select",o:["","Local","Provincial","Nacional","Internacional"],h2:1},{k:"zona",l:"Dónde venden o atienden",ph:"Valencia y área metropolitana",h2:1},
    {k:"antiguedad",l:"Años en marcha",h2:1},{k:"equipo",l:"Personas en el equipo",h2:1},
    {k:"queHace",l:"¿Qué hacéis, en una frase?",type:"area",ph:"Clínica dental especializada en implantes y ortodoncia invisible."}]},
  {k:"marca",t:"La marca",d:"Cómo quieren que les vean y cómo hablan.",f:[
    {k:"propuesta",l:"¿Por qué os eligen a vosotros y no a la competencia?",type:"area"},
    {k:"historia",l:"¿Cómo y por qué empezó el negocio?",type:"area"},
    {k:"tono",l:"Tono de voz",type:"chips",o:["Cercano","Profesional","Divertido","Premium","Técnico","Directo","Tranquilizador","Inspirador"]},
    {k:"siDecir",l:"Ideas o palabras que les representan",type:"area"},
    {k:"noDecir",l:"Lo que nunca dirían o harían",type:"area"},
    {k:"identidad",l:"Logo, colores y tipografías",ph:"Enlace al manual de marca o a la carpeta"},
    {k:"competidores",l:"Tres competidores y qué hacen bien",type:"area"},
    {k:"referentes",l:"Marcas que admiran, del sector o no",type:"area"}]},
  {k:"cliente",t:"Su cliente ideal",d:"A quién le hablamos y qué le preocupa.",f:[
    {k:"perfil",l:"¿Quién es? Edad, zona, situación, a qué se dedica",type:"area"},
    {k:"problema",l:"¿Qué problema le resolvéis?",type:"area"},
    {k:"deseo",l:"¿Qué quiere conseguir de verdad?",type:"area"},
    {k:"objeciones",l:"¿Qué le frena antes de comprar?",type:"area"},
    {k:"donde",l:"¿Dónde busca información?",ph:"Google, Instagram, recomendaciones de amigos…"},
    {k:"decision",l:"¿Cuánto tarda en decidir?",type:"select",o:["","El mismo día","Una semana","Un mes","Varios meses"],h2:1},{k:"ticket",l:"Ticket medio (€)",type:"number",h2:1},
    {k:"recompra",l:"¿Vuelve a comprar?",type:"select",o:["","Compra una vez","Repite alguna vez al año","Cliente recurrente"]}]},
  {k:"oferta",t:"Productos y servicios",d:"Qué venden y qué conviene empujar.",f:[
    {k:"servicios",l:"Servicios o productos principales, con precio",type:"area"},
    {k:"potenciar",l:"¿Cuál queréis vender más? ¿Por qué?",type:"area"},
    {k:"margen",l:"Margen aproximado de lo que queréis potenciar",ph:"Por ejemplo, 40 %"},
    {k:"estacionalidad",l:"Meses fuertes y meses flojos",type:"area"},
    {k:"ofertas",l:"Ofertas, garantías o regalos que podemos usar",type:"area"}]},
  {k:"objetivos",t:"Objetivos",d:"Qué tiene que pasar para que esto sea un éxito.",f:[
    {k:"objetivo",l:"Objetivo principal",type:"select",o:["","Más contactos o leads","Más ventas online","Más reservas o citas","Más visitas a la tienda","Dar a conocer la marca","Fidelizar a los clientes actuales"],h2:1},{k:"plazo",l:"Plazo",type:"select",o:["","3 meses","6 meses","12 meses"],h2:1},
    {k:"meta",l:"La meta en números",ph:"40 primeras visitas nuevas al mes"},
    {k:"kpi",l:"¿Cómo sabremos que funciona?",ph:"Coste por cita por debajo de 35 €"},
    {k:"valorCliente",l:"Valor de un cliente en todo su ciclo (€)",type:"number",h2:1},{k:"capacidad",l:"Contactos nuevos que pueden atender a la semana",h2:1},
    {k:"exito",l:"¿Qué tendría que pasar para que dentro de un año digan que fue un acierto?",type:"area"}]},
  {k:"marketing",t:"Marketing actual",d:"De dónde partimos.",f:[
    {k:"canales",l:"Canales que usan ahora",type:"chips",o:["Web","Google Ads","Meta Ads","TikTok Ads","Instagram","SEO","Email","WhatsApp","Ficha de Google","Eventos","Boca a boca"]},
    {k:"funciona",l:"Qué ha funcionado",type:"area"},
    {k:"noFunciona",l:"Qué no ha funcionado y por qué creen que fue",type:"area"},
    {k:"inversionActual",l:"Inversión actual en anuncios (€/mes)",type:"number",h2:1},{k:"presupuestoAds",l:"Presupuesto para anuncios (€/mes)",type:"number",h2:1,help:"Las campañas te avisan si lo superas."},
    {k:"herramientas",l:"Web, CRM y email que usan",ph:"WordPress, Doctoralia, Mailchimp"},
    {k:"medicion",l:"Qué miden ahora",type:"chips",o:["Píxel de Meta","API de conversiones","Google Analytics 4","Google Tag Manager","Conversiones de Google Ads","Nada instalado"]}]},
  {k:"accesos",t:"Accesos",d:"Lo que necesitas para empezar. Marca cada uno cuando lo tengas.",f:[
    {k:"accesos",l:"Accesos recibidos",type:"checks",o:[["metaBM","Meta Business Manager","Te añaden como socio"],["metaAds","Cuenta publicitaria de Meta","Con permiso para gestionar campañas"],["metaPaginas","Página de Facebook e Instagram",""],["googleAds","Google Ads","Vinculada a tu cuenta de administrador (MCC)"],["ga4","Google Analytics 4","Permiso de editor"],["gtm","Google Tag Manager","Permiso para publicar"],["gsc","Search Console",""],["gbp","Ficha de Google (Business Profile)",""],["web","Acceso a la web","Usuario propio, nunca el del cliente"],["crm","Herramienta de email o CRM",""]]},
    {k:"notasAccesos",l:"Notas de accesos",type:"area",ph:"Quién da cada acceso y cuándo",help:"No apuntes contraseñas aquí: cualquiera con acceso al CRM podría verlas."}]},
  {k:"servicio",t:"El servicio",d:"Qué contrata y cómo vais a trabajar.",f:[
    {k:"plan",l:"Servicios contratados",type:"chips",o:["El Plan · Estrategia","El Golpe · Publicidad","Los Diamantes · CRM y datos"]},
    {k:"inicio",l:"Fecha de inicio",type:"date",h2:1},{k:"duracion",l:"Duración",type:"select",o:["","3 meses","6 meses","12 meses","Sin permanencia"],h2:1},
    {k:"fee",l:"Cuota mensual (€)",type:"number",h2:1},{k:"gestionAds",l:"Gestión de anuncios",ph:"Incluida, 12 % de la inversión…",h2:1},
    {k:"reuniones",l:"Reuniones",type:"select",o:["","Semanal","Quincenal","Mensual"],h2:1},{k:"informes",l:"Informes",type:"select",o:["","Semanal","Quincenal","Mensual"],h2:1},
    {k:"canal",l:"Canal de comunicación",type:"select",o:["","WhatsApp","Email","Slack","Llamada"],h2:1},{k:"responsable",l:"Responsable en Mrs. Pink Agency",h2:1},
    {k:"entregables",l:"Entregables del primer mes",type:"area"},
    {k:"notasServicio",l:"Notas internas",type:"area"}]}
];
const briefDoc = sid => S.data.briefs.find(b=>b.id===sid);
function unitsOf(f,c){ const v=c[f.k]; if(f.type==="checks"){ const o=v||{}; return [f.o.filter(x=>o[x[0]]).length,f.o.length]; } return [filled(v)?1:0,1]; }
function secProg(sec,c){ let n=0,t=0; sec.f.forEach(f=>{ const [a,b]=unitsOf(f,c||{}); n+=a; t+=b; }); return {n,t}; }
function briefPct(c){ let n=0,t=0; BRIEF.forEach(s=>{ const p=secProg(s,c||{}); n+=p.n; t+=p.t; }); return t?Math.round(n/t*100):0; }
function ensureBrief(sid){
  if(S.brief && S.brief.sid===sid && (S.brief.dirty||S.brief.saving)) return S.brief;
  const doc=briefDoc(sid), s=subById(sid);
  const campos=doc&&doc.campos?clone(doc.campos):{nombreComercial:s?s.nombre:"",contactoEmail:s?(s.email||""):""};
  S.brief={sid,campos,sec:(S.brief&&S.brief.sid===sid&&S.brief.sec)||"negocio",dirty:false,saving:false,rev:0,ejemplo:!!(doc&&doc.ejemplo),actualizado:doc&&doc.actualizado};
  return S.brief;
}
const bSaveTxt = B => !canEdit()?"Solo lectura":B.saving?"Guardando…":B.dirty?"Cambios sin guardar":B.actualizado?"Guardado "+rel(B.actualizado):"";
function setBInd(){ const el=$("#bsave-ind"); if(el&&S.brief) el.textContent=bSaveTxt(S.brief); }
async function saveBrief(){
  const B=S.brief; if(!B||!canEdit()) return; const rev=B.rev; B.saving=true; setBInd();
  const now=nowISO();
  try{ await save("briefs",B.sid,{sub:B.sid,campos:clone(B.campos),ejemplo:B.ejemplo,actualizado:now}); if(B.rev===rev) B.dirty=false; B.actualizado=now; }catch(e){}
  B.saving=false; setBInd();
}
function bField(f,c){
  const id="b-"+f.k, v=c[f.k], help=f.help?`<span class="help">${f.help}</span>`:"", ph=f.ph?` placeholder="${esc(f.ph)}"`:"";
  if(f.type==="chips"){ const arr=Array.isArray(v)?v:[]; return `<div class="field"><span style="font-size:13px;font-weight:600" id="${id}-l">${f.l}</span><div class="chipset" role="group" aria-labelledby="${id}-l">${f.o.map(o=>`<button type="button" class="chip" data-chip-b="${f.k}" data-v="${esc(o)}" aria-pressed="${arr.includes(o)}" ${ro()}>${esc(o)}</button>`).join("")}</div>${help}</div>`; }
  if(f.type==="checks"){ const o=v||{}; return `<div class="checks">${f.o.map(([k,l,h])=>`<label><input type="checkbox" id="${id}-${k}" data-bchk="${f.k}" data-v="${k}" ${o[k]?"checked":""} ${ro()}><span>${esc(l)}${h?`<small>${esc(h)}</small>`:""}</span></label>`).join("")}</div>`; }
  let ctrl;
  if(f.type==="area") ctrl=`<textarea id="${id}" data-b="${f.k}"${ph} ${ro()}>${esc(v)}</textarea>`;
  else if(f.type==="select") ctrl=`<select id="${id}" data-b="${f.k}" ${ro()}>${f.o.map(o=>`<option value="${esc(o)}" ${o===(v||"")?"selected":""}>${o?esc(o):"Elige una opción"}</option>`).join("")}</select>`;
  else ctrl=`<input id="${id}" data-b="${f.k}" type="${f.type||"text"}" value="${esc(v==null?"":v)}"${ph} ${ro()}>`;
  return `<div class="field"><label for="${id}">${f.l}</label>${ctrl}${help}</div>`;
}
function briefSection(sec,c){
  let h="", i=0, fs=sec.f;
  while(i<fs.length){ const f=fs[i]; if(f.h2&&fs[i+1]&&fs[i+1].h2){ h+=`<div class="row2">${bField(f,c)}${bField(fs[i+1],c)}</div>`; i+=2; } else { h+=bField(f,c); i++; } }
  return h;
}
function secNavHTML(B){
  const secs=cfgSecs(), cur=(secs.find(x=>x.k===B.sec)||secs[0]).k;
  return secs.map(x=>{ const p=x.f?secProg(x,B.campos):null;
    return `<button type="button" data-bsec="${x.k}" aria-current="${cur===x.k}"><span>${esc(x.t)}</span>${p?`<small class="num">${p.n}/${p.t}</small><span class="bar"><i style="width:${p.t?p.n/p.t*100:0}%"></i></span>`:""}</button>`; }).join("");
}
function subForm(s){
  const d=S.subDraft&&S.subDraft.id===s.id?S.subDraft:s;
  const f=(k,l,t)=>`<div class="field"><label for="s-${k}">${l}</label><input id="s-${k}" data-s="${k}" type="${t||"text"}" value="${esc(d[k]||"")}" ${ro()}></div>`;
  return `${f("nombre","Nombre de la subcuenta")}<div class="row2">${f("sector","Sector")}${f("email","Email de contacto","email")}</div>
    <div class="field"><span style="font-size:13px;font-weight:600">Etapas del pipeline</span><div class="chipset">${etapasDe(s).map(e=>`<span class="pill">${esc(e)}</span>`).join("")}</div></div>`;
}
async function saveSubDraft(){ const D=S.subDraft; if(!D||!canEdit()) return; const s=subById(D.id); if(!s) return;
  const body=Object.assign({},s,{nombre:(D.nombre||"").trim()||s.nombre,sector:D.sector||"",email:D.email||""}); delete body.id;
  try{ await save("subcuentas",D.id,body); }catch(e){} renderSide(); }
function viewConfig(){
  const s=sub(), B=ensureBrief(s.id), pct=briefPct(B.campos);
  const secs=cfgSecs();
  const cur=secs.find(x=>x.k===B.sec)||secs[0], idx=secs.indexOf(cur), next=secs[idx+1];
  const body=cur.k==="subcuenta"?subForm(s):cur.k==="usuarios"?usuariosSub(s):briefSection(cur,B.campos);
  return headHTML(`${esc(s.nombre)} <span class="pill num" id="brief-pill">Brief al ${pct}%</span><span class="save-ind" id="bsave-ind">${bSaveTxt(B)}</span>`,"Conoce a tu <span class=\"m\">cliente.</span>","Todo lo que necesitas para prepararle la estrategia y el servicio. Rellénalo con el cliente en la reunión de arranque: se guarda solo.",`<button class="btn sec" data-brief-copy>Copiar brief</button>`)
    + (B.ejemplo?`<div class="banner"><b>Brief de ejemplo.</b> Está relleno para que veas cómo queda. Cámbialo por los datos reales del cliente.</div>`:"")
    + `<div class="cfg"><nav class="secnav" id="secnav" aria-label="Secciones del brief">${secNavHTML(B)}</nav>
      <div class="ed-main"><section class="form-block"><h2>${esc(cur.t)}</h2>${cur.d?`<p class="sub">${esc(cur.d)}</p>`:""}${body}</section>
      <div class="actions" style="justify-content:space-between">${idx>0?`<button class="btn sec" data-bsec="${secs[idx-1].k}">Anterior</button>`:"<span></span>"}${next?`<button class="btn" data-bsec="${next.k}">Siguiente: ${esc(next.t)} ${I.arrow}</button>`:""}</div></div></div>`;
}
function briefLive(){ const B=S.brief; if(!B) return; const n=$("#secnav"); if(n) n.innerHTML=secNavHTML(B); const p=$("#brief-pill"); if(p) p.textContent=`Brief al ${briefPct(B.campos)}%`; setBInd(); }
function briefTouch(){ S.brief.dirty=true; S.brief.rev++; briefLive(); autosave("brief",saveBrief); }
function briefText(sid){
  const s=subById(sid), B=ensureBrief(sid), c=B.campos; let out=`Brief de ${s?s.nombre:""}\n`;
  BRIEF.filter(x=>!(VC()&&VC().rol==="cliente"&&x.k==="servicio")).forEach(sec=>{ const lines=[];
    sec.f.forEach(f=>{ const v=c[f.k]; if(f.type==="checks"){ const o=v||{}; const ok=f.o.filter(x=>o[x[0]]).map(x=>x[1]), no=f.o.filter(x=>!o[x[0]]).map(x=>x[1]); if(ok.length) lines.push(`Recibidos: ${ok.join(", ")}`); if(no.length) lines.push(`Pendientes: ${no.join(", ")}`); return; }
      if(filled(v)) lines.push(`${f.l}: ${Array.isArray(v)?v.join(", "):v}`); });
    if(lines.length) out+=`\n## ${sec.t}\n`+lines.join("\n")+"\n"; });
  return out;
}
function drawerBriefCopy(){
  const txt=briefText(S.subId);
  openDrawer("Copiar <span class=\"m\">brief.</span>",
    `<p class="lead" style="margin:0">El brief en texto, listo para pegar en tu documento de estrategia o en una conversación con Claude.</p>
     <textarea id="brief-txt" readonly style="min-height:380px;font-size:13px;border:1px solid var(--line-strong);border-radius:14px;padding:12px;background:var(--surface);width:100%">${esc(txt)}</textarea>`,
    `<button type="button" class="btn ghost" data-close>Cerrar</button><button type="button" class="btn" id="brief-copy-btn">Copiar texto</button>`, async()=>{});
  $("#brief-copy-btn").addEventListener("click",async()=>{ const ta=$("#brief-txt");
    try{ await navigator.clipboard.writeText(ta.value); toast("Brief copiado"); }catch(e){ ta.focus(); ta.select(); toast("Selecciónalo y cópialo con Ctrl+C o Cmd+C"); } });
}

/* ---------- Conexión de cuentas ---------- */
const CONN_FIELDS = {
  meta:[["cuentaId","ID de la cuenta publicitaria","act_1234567890",true],["bmId","ID del Business Manager","1234567890",false],["paginaId","ID de la página de Facebook","",false],["pixelId","ID del píxel o conjunto de datos","",false]],
  google:[["cuentaId","ID de cliente de Google Ads","123-456-7890",true],["mccId","ID de tu cuenta de administrador (MCC)","123-456-7890",false],["conversionId","Acción de conversión principal","Formulario enviado",false]]
};
const METODOS = {meta:[["token","Token de usuario del sistema (API de marketing)"],["oauth","Inicio de sesión con Facebook (OAuth)"]],google:[["token","API de Google Ads (token de desarrollador)"],["oauth","Inicio de sesión con Google (OAuth)"]]};
const metodoTxt = (k,m) => ((METODOS[k]||[]).find(x=>x[0]===m)||[0,""])[1];
function drawerConnect(k){
  const s=sub(), p=PLAT[k], x=integ(s.id)[k]||{};
  openDrawer(`Conectar <span class="m">${p.nombre.split(" ")[0]}.</span>`,
    `<p class="lead" style="margin:0">Vincula la cuenta de ${p.nombre} de ${esc(s.nombre)} para preparar y publicar campañas desde el CRM.</p>`+
    fld("i-met","Cómo se conecta",`<select id="i-met" name="metodo">${selOpts(METODOS[k],x.metodo||"token")}</select>`)+
    CONN_FIELDS[k].map(([n,l,ph,req])=>fld("i-"+n,l,inp("i-"+n,n,x[n],"text",(req?"required ":"")+(ph?`placeholder="${esc(ph)}"`:""))) ).join("")+
    fld("i-n","Nombre para reconocerla",inp("i-n","cuentaNombre",x.cuentaNombre||s.nombre,"text"))+
    `<div class="note"><b>El token no se guarda en el CRM.</b> Cualquiera con acceso al CRM podría leerlo. Lo guarda tu sistema de integración en tu servidor, y aquí solo queda qué cuenta usar y cómo se conecta.</div>`,
    `<button type="button" class="btn ghost" data-close>Cancelar</button><button class="btn" type="submit">Vincular cuenta</button>`,
    async fd=>{ const cur=integ(s.id); const body=Object.assign({},cur,{sub:s.id}); delete body.id;
      const o={estado:"conectada",metodo:fd.metodo,cuentaNombre:(fd.cuentaNombre||"").trim(),conectadaEn:nowISO(),ultimaSync:(cur[k]&&cur[k].ultimaSync)||null,error:""};
      CONN_FIELDS[k].forEach(([n])=>o[n]=(fd[n]||"").trim());
      body[k]=o; await save("integraciones",s.id,body); toast(p.nombre+" vinculada"); });
}

/* ---------- Equipo y accesos ---------- */
const AREAS = [["contactos","Contactos"],["oportunidades","Oportunidades"],["conversaciones","Conversaciones"],["marketing","Marketing"],["campanas","Campañas"],["automatizaciones","Automatizaciones"],["informes","Informes"],["integraciones","Integraciones"],["configuracion","Configuración"]];
const NIVELES = [["editar","Editar"],["ver","Solo ver"],["no","Sin acceso"]];
const ROLES = {
  admin:{l:"Administradora de agencia",c:"rosa",d:"Ve y gestiona todo: subcuentas, equipo, integraciones y el servicio de cada cliente."},
  equipo:{l:"Equipo",c:"",d:"Solo entra en las subcuentas que le asignes, con el permiso que elijas en cada apartado."},
  cliente:{l:"Cliente",c:"ok",d:"Entra solo en su subcuenta. Nunca ve otras cuentas, el equipo ni las condiciones del servicio."}
};
const PRESET = {
  admin:Object.fromEntries(AREAS.map(a=>[a[0],"editar"])),
  equipo:{contactos:"editar",oportunidades:"editar",conversaciones:"editar",marketing:"editar",campanas:"editar",automatizaciones:"editar",informes:"ver",integraciones:"ver",configuracion:"ver"},
  cliente:{contactos:"ver",oportunidades:"ver",conversaciones:"editar",marketing:"no",campanas:"ver",automatizaciones:"no",informes:"ver",integraciones:"no",configuracion:"editar"}
};
const ESTADO_U = {invitado:["Invitación pendiente","warn"],activo:["Activo","ok"],desactivado:["Desactivado",""]};
const usuario = id => S.data.usuarios.find(u=>u.id===id);
const VC = () => S.verComo ? usuario(S.verComo) || null : null;
const rolOrder = (a,b) => (["admin","equipo","cliente"].indexOf(a.rol)-["admin","equipo","cliente"].indexOf(b.rol)) || String(a.nombre).localeCompare(b.nombre,"es");
function subsDe(u){ if(!u||u.rol==="admin") return S.data.subcuentas.map(s=>s.id); return (u.subcuentas||[]).filter(id=>subById(id)); }
function permDe(u,area){ if(!u||u.rol==="admin") return "editar"; return (u.permisos||{})[area]||"no"; }
function applyVerComo(){
  const u=VC(); if(!u){ S.verComo=null; return; }
  const subs=subsDe(u);
  if(u.rol!=="admin" && (S.view==="agencia" || !subs.includes(S.subId)) && subs.length){ S.view="sub"; S.subId=subs[0]; }
  if(S.view==="sub" && permDe(u,S.tab)==="no"){ const a=AREAS.find(x=>permDe(u,x[0])!=="no"); if(a) S.tab=a[0]; }
}
function vcBanner(){
  const u=VC(); if(!u) return "";
  const subs=u.rol==="admin"?"todas las subcuentas":subsDe(u).map(id=>subById(id).nombre).join(", ")||"ninguna subcuenta";
  return `<div class="banner vc"><span><b>Estás viendo el CRM como ${esc(u.nombre)}</b> · ${esc(ROLES[u.rol].l)} · ${esc(subs)}. Así lo verá cuando tenga inicio de sesión. Lo que cambies aquí se guarda de verdad.</span><button class="btn sec" data-salir-vc>Salir de la vista previa</button></div>`;
}
function resumenPermisos(u){
  if(u.rol==="admin") return "Acceso total";
  const e=AREAS.filter(a=>permDe(u,a[0])==="editar").length, v=AREAS.filter(a=>permDe(u,a[0])==="ver").length;
  return [e?`Edita ${e}`:"",v?`ve ${v}`:""].filter(Boolean).join(", ").replace(/^ve/,"Ve")+` de ${AREAS.length} apartados`;
}
const estadoU = u => { const [l,c]=ESTADO_U[u.estado]||ESTADO_U.invitado; return `<span class="pill ${c}">${l}</span>`; };
const rolPill = u => `<span class="pill ${ROLES[u.rol].c}">${ROLES[u.rol].l}</span>`;
function userRow(u,withSubs){
  const subs=u.rol==="admin"?"Todas":(subsDe(u).map(id=>subById(id).nombre).join(", ")||"Ninguna");
  return `<tr data-user="${esc(u.id)}">
    <td><div class="who"><span class="circ">${esc(ini(u.nombre))}</span><div style="min-width:0"><b>${esc(u.nombre)} ${u.ejemplo?'<span class="pill ej">Ejemplo</span>':""}</b><small>${esc(u.email)}</small></div></div></td>
    <td>${rolPill(u)}</td>${withSubs?`<td>${esc(subs)}</td>`:""}
    <td class="muted">${esc(resumenPermisos(u))}</td><td>${estadoU(u)}</td>
    <td class="muted" style="white-space:nowrap">${u.ultimoAcceso?rel(u.ultimoAcceso):"—"}</td>
    <td class="r"><button class="btn sec" data-ver-como="${esc(u.id)}" style="padding:6px 12px">Ver como</button></td></tr>`;
}
function viewEquipo(){
  const us=[...S.data.usuarios].sort(rolOrder);
  const roles=`<div class="roles">${Object.values(ROLES).map(r=>`<div><span class="pill ${r.c}">${r.l}</span><p>${r.d}</p></div>`).join("")}</div>`;
  const tabla=us.length?`<div class="table-wrap"><table><thead><tr><th>Persona</th><th>Rol</th><th>Subcuentas</th><th>Permisos</th><th>Estado</th><th>Último acceso</th><th></th></tr></thead><tbody>${us.map(u=>userRow(u,true)).join("")}</tbody></table></div>`
    :`<div class="empty"><h2>Aún no hay nadie.</h2><p>Invita a tu equipo y a tus clientes, y decide qué subcuentas y apartados ve cada uno.</p>${addBtn("Invitar persona","data-new-user")}</div>`;
  return headHTML("Vista de agencia","Tu <span class=\"m\">equipo.</span>","Quién entra en el CRM y qué ve cada persona. Usa «Ver como» para comprobarlo desde sus ojos.",us.length?addBtn("Invitar persona","data-new-user"):"")
    + roles + tabla
    + `<div class="note"><b>Cómo funciona hoy.</b> Estos usuarios y permisos son el diseño para tu versión con inicio de sesión: todavía no se envían invitaciones ni se bloquea nada. Mientras tanto, el CRM se comparte desde el menú Compartir y quien entra lo ve todo, así que no lo compartas con clientes.</div>`;
}
function usuariosSub(s){
  const us=S.data.usuarios.filter(u=>u.rol==="admin"||(u.subcuentas||[]).includes(s.id)).sort(rolOrder);
  return `${us.length?`<div class="table-wrap" style="border:0;border-radius:0;background:none"><table><thead><tr><th>Persona</th><th>Rol</th><th>Permisos</th><th>Estado</th><th>Último acceso</th><th></th></tr></thead><tbody>${us.map(u=>userRow(u,false)).join("")}</tbody></table></div>`:`<p class="muted" style="margin:0">Nadie más tiene acceso a esta subcuenta.</p>`}
    <div class="actions">${addBtn("Invitar a esta subcuenta",`data-new-user="${esc(s.id)}"`)}</div>`;
}
function userDyn(st,u){
  const subs=[...S.data.subcuentas].sort((a,b)=>String(a.nombre).localeCompare(b.nombre,"es"));
  let h=`<p class="muted" style="margin:0;font-size:13.5px">${esc(ROLES[st.rol].d)}</p>`;
  if(st.rol==="cliente") h+=fld("u-sub","Su subcuenta",`<select id="u-sub" name="subUnica" required>${selOpts(subs.filter(x=>!x.interna).map(x=>[x.id,x.nombre]),st.subcuentas[0])}</select>`);
  else if(st.rol==="equipo") h+=`<div class="field"><span style="font-size:13px;font-weight:600">Subcuentas a las que entra</span><div class="checks">${subs.map(x=>`<label><input type="checkbox" id="u-s-${esc(x.id)}" name="subs" value="${esc(x.id)}" ${st.subcuentas.includes(x.id)?"checked":""}><span>${esc(x.nombre)}</span></label>`).join("")}</div></div>`;
  if(st.rol!=="admin") h+=`<p class="section-t">Permisos por apartado</p><div class="perm">${AREAS.map(([k,l])=>`<label for="u-p-${k}">${l}</label><select id="u-p-${k}" name="p_${k}">${selOpts(NIVELES,st.permisos[k]||"no")}</select>`).join("")}</div>`;
  else h+=`<div class="note"><b>Acceso total.</b> Ve la vista de agencia, todas las subcuentas y el equipo.</div>`;
  return h;
}
function drawerUser(id,presetSub){
  const u=id?usuario(id):null, ro2=!canEdit();
  const st={rol:u?u.rol:(presetSub?"cliente":"equipo"),subcuentas:u?[...(u.subcuentas||[])]:(presetSub?[presetSub]:[]),permisos:clone(u?u.permisos:PRESET[presetSub?"cliente":"equipo"])};
  if(presetSub && !u && subById(presetSub) && subById(presetSub).interna){ st.rol="equipo"; st.permisos=clone(PRESET.equipo); }
  const d=u&&!ro2?delBtn(async()=>{ if(u.rol==="admin"&&S.data.usuarios.filter(x=>x.rol==="admin").length<2){ toast("Tiene que quedar al menos una administradora."); return; } await remove("usuarios",u.id); toast("Acceso eliminado"); }):null;
  openDrawer(u?esc(u.nombre):"Invitar <span class=\"m\">persona.</span>",
    `<div class="row2">${fld("u-n","Nombre",inp("u-n","nombre",u&&u.nombre,"text","required"))}${fld("u-e","Email",inp("u-e","email",u&&u.email,"email","required"))}</div>
     <div class="field"><span style="font-size:13px;font-weight:600">Rol</span><div class="opts" style="grid-template-columns:1fr">${Object.entries(ROLES).map(([k,r])=>`<label class="opt" style="cursor:pointer"><span style="display:flex;gap:8px;align-items:center;color:var(--fg)"><input type="radio" name="rol" value="${k}" ${st.rol===k?"checked":""} style="accent-color:var(--granate)"><b>${r.l}</b></span></label>`).join("")}</div></div>
     <div id="u-dyn" style="display:flex;flex-direction:column;gap:14px">${userDyn(st,u)}</div>
     ${u?fld("u-est","Estado",`<select id="u-est" name="estado">${selOpts([["invitado","Invitación pendiente"],["activo","Activo"],["desactivado","Desactivado"]],u.estado)}</select>`,"Desactivar corta el acceso sin borrar a la persona."):`<div class="note">La invitación quedará pendiente. Se enviará por email cuando tu versión con inicio de sesión esté lista.</div>`}`,
    ro2?`<button type="button" class="btn sec" data-close>Cerrar</button>`:`${d?d.html:'<button type="button" class="btn ghost" data-close>Cancelar</button>'}<button class="btn" type="submit">${u?"Guardar cambios":"Crear invitación"}</button>`,
    async(fd,f)=>{ if(ro2) return;
      const email=String(fd.email||"").trim().toLowerCase();
      if(S.data.usuarios.some(x=>x.id!==(u&&u.id)&&String(x.email).toLowerCase()===email)){ toast("Ya hay una persona con ese email."); throw new Error("dup"); }
      const rol=fd.rol;
      if(u&&u.rol==="admin"&&rol!=="admin"&&S.data.usuarios.filter(x=>x.rol==="admin").length<2){ toast("Tiene que quedar al menos una administradora."); throw new Error("admin"); }
      const subcuentas=rol==="admin"?[]:rol==="cliente"?[fd.subUnica].filter(Boolean):[...f.querySelectorAll('input[name="subs"]:checked')].map(x=>x.value);
      const permisos=rol==="admin"?clone(PRESET.admin):Object.fromEntries(AREAS.map(([k])=>[k,fd["p_"+k]||"no"]));
      const body={nombre:String(fd.nombre).trim(),email,rol,subcuentas,permisos,estado:u?fd.estado:"invitado",ejemplo:false,invitadoEn:u?u.invitadoEn:nowISO(),ultimoAcceso:u?u.ultimoAcceso||null:null,actualizado:nowISO()};
      await save("usuarios",u?u.id:uid("u"),body); toast(u?"Cambios guardados":"Invitación creada"); });
  if(d) d.wire();
  if(ro2) $("#dr-form").querySelectorAll("input,select").forEach(x=>x.disabled=true);
  $("#dr-form").addEventListener("change",e=>{
    if(e.target.name==="rol"){ st.rol=e.target.value; st.permisos=clone(PRESET[st.rol]); if(st.rol==="cliente") st.subcuentas=st.subcuentas.slice(0,1); $("#u-dyn").innerHTML=userDyn(st,u); }
    else if(e.target.name==="subs"){ st.subcuentas=[...$("#dr-form").querySelectorAll('input[name="subs"]:checked')].map(x=>x.value); }
    else if(e.target.name==="subUnica"){ st.subcuentas=[e.target.value]; }
    else if(/^p_/.test(e.target.name||"")){ st.permisos[e.target.name.slice(2)]=e.target.value; }
  });
}
function cfgSecs(){
  const u=VC(), cli=u&&u.rol==="cliente";
  const base=cli?[]:[{k:"subcuenta",t:"Subcuenta",d:"Cómo aparece este cliente en tu CRM."},{k:"usuarios",t:"Usuarios",d:"Quién puede entrar en esta subcuenta y qué puede hacer."}];
  return base.concat(BRIEF.filter(x=>!(cli&&x.k==="servicio")));
}

/* ---------- Automatizaciones: catálogo ---------- */
const FUENTES = ["Meta Ads","Google Ads","Formulario web","Instagram","Referido","El Desayuno","Manual"];
const GRUPOS = {t:["Disparadores","bolt"],msg:["Comunicación","chat"],crm:["Contactos y ventas","users"],time:["Tiempo","clock"],logic:["Lógica","branch"],ext:["Otras herramientas","plug"]};
// campo: [clave, etiqueta, tipo, opciones|placeholder, mostrar-si]
const CAT = {
  t_contacto:{g:"t",l:"Contacto creado",f:[["fuente","Solo si la fuente es","select",["Cualquiera"].concat(FUENTES)]]},
  t_etiqueta:{g:"t",l:"Etiqueta añadida",f:[["etiqueta","Etiqueta","text","reactivar"]],req:["etiqueta"]},
  t_formulario:{g:"t",l:"Formulario enviado",f:[["formulario","Formulario","form"]],req:["formulario"]},
  t_meta:{g:"t",l:"Lead de Meta Ads",f:[["formularioMeta","Formulario instantáneo","text","Cualquiera"]]},
  t_google:{g:"t",l:"Lead de Google Ads",f:[["campana","Campaña","text","Cualquiera"]]},
  t_cita:{g:"t",l:"Estado de una cita",f:[["estado","Cuando la cita","select",["Se reserva","Se confirma","Se cancela","No se presenta","Se completa"]],["calendario","Calendario","text","Primera visita"]]},
  t_etapa:{g:"t",l:"Oportunidad cambia de etapa",f:[["etapa","Pasa a la etapa","stage"]],req:["etapa"]},
  t_parada:{g:"t",l:"Oportunidad parada",f:[["dias","Días sin moverse","number"],["etapa","En la etapa","stage"]],req:["dias"]},
  t_mensaje:{g:"t",l:"Mensaje recibido",f:[["canal","Canal","select",["Cualquiera","WhatsApp","Email","SMS","Instagram"]],["contiene","Si contiene","text","precio, cita…"]]},
  t_email:{g:"t",l:"Evento de email",f:[["evento","Cuando el contacto","select",["Abre el email","Hace clic","Se da de baja","Rebota"]]]},
  t_enlace:{g:"t",l:"Clic en enlace de seguimiento",f:[["enlace","Enlace","text","Reserva tu cita"]],req:["enlace"]},
  t_fecha:{g:"t",l:"Fecha del contacto",f:[["campo","Fecha","select",["Cumpleaños","Fecha de alta","Fin del tratamiento","Renovación"]],["antes","Días antes (0 es el mismo día)","number"]]},
  t_pago:{g:"t",l:"Pago recibido",f:[["producto","Producto","text","Cualquiera"]]},
  t_webhook:{g:"t",l:"Webhook entrante",f:[["nombre","Nombre del webhook","text","alta-desde-web"]],req:["nombre"]},
  a_email:{g:"msg",l:"Enviar email",f:[["asunto","Asunto","text"],["cuerpo","Mensaje","msg"],["remitente","Remitente","text","Nombre <correo@dominio>"]],req:["asunto","cuerpo"]},
  a_sms:{g:"msg",l:"Enviar SMS",f:[["cuerpo","Mensaje","msg"]],req:["cuerpo"]},
  a_whatsapp:{g:"msg",l:"Enviar WhatsApp",f:[["plantilla","Plantilla aprobada","text","bienvenida_lead"],["cuerpo","Mensaje","msg"]],req:["plantilla","cuerpo"],h:"Fuera de la ventana de 24 horas desde el último mensaje del contacto, WhatsApp solo deja enviar plantillas aprobadas por Meta."},
  a_dm:{g:"msg",l:"Mensaje de Instagram o Facebook",f:[["cuerpo","Mensaje","msg"]],req:["cuerpo"],h:"Solo funciona si el contacto te ha escrito en las últimas 24 horas."},
  a_llamada:{g:"msg",l:"Llamada del equipo",f:[["usuario","Quién llama","user"],["guion","Guion","area"]]},
  a_aviso:{g:"msg",l:"Avisar al equipo",f:[["usuario","A quién","user"],["canal","Por","select",["Notificación en el CRM","Email","WhatsApp"]],["cuerpo","Mensaje","msg"]],req:["cuerpo"]},
  a_ia:{g:"msg",l:"Conversación con IA",f:[["objetivo","Qué tiene que conseguir","area","Que reserve la primera visita"],["limite","Mensajes como máximo","number"]],req:["objetivo"],h:"Responde al contacto usando el brief del cliente hasta que reserve o pida hablar con una persona. Entonces avisa al equipo."},
  a_tag:{g:"crm",l:"Añadir etiqueta",f:[["etiqueta","Etiqueta","text"]],req:["etiqueta"]},
  a_untag:{g:"crm",l:"Quitar etiqueta",f:[["etiqueta","Etiqueta","text"]],req:["etiqueta"]},
  a_campo:{g:"crm",l:"Actualizar contacto",f:[["campo","Campo","select",["Fuente","Empresa","Teléfono","Email","Notas"]],["valor","Nuevo valor","text"]],req:["valor"]},
  a_opp:{g:"crm",l:"Crear o mover oportunidad",f:[["titulo","Título","text","Primera visita"],["etapa","Etapa","stage"],["valor","Valor (€)","number"]],req:["etapa"]},
  a_asignar:{g:"crm",l:"Asignar a una persona",f:[["usuario","Asignar a","user"],["reparto","Reparto","select",["Siempre a esta persona","Por turnos entre el equipo"]]]},
  a_tarea:{g:"crm",l:"Crear tarea",f:[["titulo","Tarea","text","Llamar al contacto"],["usuario","Para","user"],["plazo","Plazo (horas)","number"]],req:["titulo"]},
  a_nota:{g:"crm",l:"Añadir nota",f:[["nota","Nota","area"]],req:["nota"]},
  a_flujo:{g:"crm",l:"Pasar a otro flujo",f:[["flujo","Flujo","flow"],["salir","Salir de este flujo","select",["Sí","No"]]],req:["flujo"]},
  w_espera:{g:"time",l:"Esperar",f:[["modo","Esperar","select",["Un tiempo","Hasta un momento","Hasta que pase algo"]],["cantidad","Cantidad","number",null,{modo:"Un tiempo"}],["unidad","Unidad","select",["minutos","horas","días"],{modo:"Un tiempo"}],["momento","Hasta","select",["24 h antes de la cita","2 h antes de la cita","El día siguiente a las 10:00","El próximo lunes a las 9:00"],{modo:"Hasta un momento"}],["evento","Hasta que","select",["Responda","Abra el email","Haga clic en un enlace","Reserve una cita"],{modo:"Hasta que pase algo"}],["maximo","Como máximo (días)","number",null,{modo:"Hasta que pase algo"}]]},
  l_si:{g:"logic",l:"Condición si / no",f:[["campo","Si el contacto","select",["Respondió","Tiene la etiqueta","Viene de la fuente","Está en la etapa","Abrió el último email","Hizo clic en un enlace","Tiene teléfono"]],["valor","Etiqueta","text",null,{campo:"Tiene la etiqueta"}],["fuente","Fuente","select",FUENTES,{campo:"Viene de la fuente"}],["etapa","Etapa","stage",null,{campo:"Está en la etapa"}]]},
  l_ab:{g:"logic",l:"Prueba A/B",f:[["reparto","Porcentaje que va a la versión A","number"]],h:"Reparte los contactos al azar entre dos caminos para ver cuál funciona mejor."},
  l_objetivo:{g:"logic",l:"Objetivo",f:[["evento","Se cumple cuando el contacto","select",["Reserva una cita","Responde","Gana la oportunidad","Paga","Hace clic en un enlace"]]],h:"Si se cumple en cualquier momento, el contacto salta aquí y sigue desde este punto."},
  x_webhook:{g:"ext",l:"Enviar webhook",f:[["url","URL","url","https://"],["metodo","Método","select",["POST","GET"]]],req:["url"]},
  x_sheets:{g:"ext",l:"Añadir fila en Google Sheets",f:[["hoja","Hoja","text","Leads 2026"]],req:["hoja"]},
  x_capi:{g:"ext",l:"Enviar conversión a Meta",f:[["evento","Evento","select",["Lead","Schedule","Purchase","CompleteRegistration"]],["valor","Valor (€)","number"]],h:"Usa la API de conversiones para que Meta optimice con resultados reales, no con clics."},
  x_gads:{g:"ext",l:"Conversión offline en Google Ads",f:[["accion","Acción de conversión","text","Cita realizada"],["valor","Valor (€)","number"]],req:["accion"]}
};
const DEF = {w_espera:{modo:"Un tiempo",cantidad:1,unidad:"días",maximo:3},l_si:{campo:"Respondió"},l_ab:{reparto:50},l_objetivo:{evento:"Reserva una cita"},a_whatsapp:{plantilla:""},a_aviso:{canal:"Notificación en el CRM"},a_asignar:{reparto:"Por turnos entre el equipo"},x_webhook:{metodo:"POST"},x_capi:{evento:"Lead"},t_contacto:{fuente:"Cualquiera"},t_cita:{estado:"Se reserva"},t_mensaje:{canal:"Cualquiera"},t_email:{evento:"Abre el email"},t_fecha:{campo:"Cumpleaños",antes:0},a_flujo:{salir:"Sí"},a_campo:{campo:"Fuente"},a_tarea:{plazo:24}};
const MERGE = ["{{contacto.nombre}}","{{contacto.telefono}}","{{contacto.email}}","{{negocio.nombre}}","{{cita.fecha}}","{{cita.hora}}","{{enlace.reserva}}","{{enlace.resena}}"];
const ICO = {
  bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M13 3 5 14h6l-1 7 8-11h-6z"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
  branch:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="9" r="2"/><path d="M6 7v10M18 11c0 4-6 3-11.5 6.5"/></svg>',
  flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4h11l-2 4 2 4H5"/></svg>'
};
const icoOf = tipo => tipo==="l_objetivo"?ICO.flag:(ICO[GRUPOS[CAT[tipo].g][1]]||I[GRUPOS[CAT[tipo].g][1]]);
const nodeN = (tipo,cfg,extra) => Object.assign({id:uid("n"),tipo,cfg:Object.assign({},DEF[tipo]||{},cfg||{})},extra||{});
function showField(f,cfg){ const w=f[4]; if(!w) return true; return Object.entries(w).every(([k,v])=>Array.isArray(v)?v.includes(cfg[k]):cfg[k]===v); }
function nodeOk(n){ const c=CAT[n.tipo]; if(!c) return false; const cfg=n.cfg||{};
  if(n.tipo==="w_espera") return cfg.modo==="Un tiempo"?+cfg.cantidad>0:cfg.modo==="Hasta un momento"?!!cfg.momento:!!cfg.evento;
  if(n.tipo==="l_si"){ const need={"Tiene la etiqueta":"valor","Viene de la fuente":"fuente","Está en la etapa":"etapa"}[cfg.campo]; return !!cfg.campo&&(!need||filled(cfg[need])); }
  return (c.req||[]).every(k=>filled(cfg[k])); }
const unitTxt=(n,u)=>{ n=+n||0; const sg={minutos:"minuto",horas:"hora","días":"día"}; return `${n} ${n===1?(sg[u]||u):u}`; };
function nodeSum(n){
  const c=n.cfg||{};
  switch(n.tipo){
    case "w_espera": return c.modo==="Un tiempo"?unitTxt(c.cantidad,c.unidad):c.modo==="Hasta un momento"?(c.momento||"Sin configurar"):`Hasta que ${String(c.evento||"…").toLowerCase()}${c.maximo?` · máx. ${c.maximo} d`:""}`;
    case "l_si": return `${c.campo||"…"}${c.campo==="Tiene la etiqueta"?" «"+(c.valor||"…")+"»":c.campo==="Viene de la fuente"?" "+(c.fuente||"…"):c.campo==="Está en la etapa"?" "+(c.etapa||"…"):""}`;
    case "l_ab": return `A ${c.reparto||50} % · B ${100-(+c.reparto||50)} %`;
    case "a_email": return c.asunto||"";
    case "a_sms": case "a_whatsapp": case "a_dm": case "a_aviso": return c.cuerpo||"";
    case "a_tarea": return c.titulo||"";
    case "a_ia": return c.objetivo||"";
    case "a_asignar": return userName(c.usuario)||c.reparto||"";
    case "a_llamada": return userName(c.usuario)||"Quien tenga asignado el contacto";
    case "t_formulario": return formLabel(c.formulario)||"";
    case "a_flujo": { const f=S.data.flujos.find(x=>x.id===c.flujo); return f?f.nombre:""; }
    case "a_opp": return [c.titulo,c.etapa].filter(Boolean).join(" → ");
    case "t_parada": return c.dias?`${c.dias} días${c.etapa?" en "+c.etapa:""}`:"";
  }
  const v=Object.values(c).find(x=>filled(x)&&x!=="Cualquiera"); return v==null?(n.tipo.startsWith("t_")?"Cualquiera":""):String(v);
}
function nodeCard(n,attr){
  const c=CAT[n.tipo]; if(!c) return "";
  const ok=nodeOk(n), sum=nodeSum(n);
  return `<button type="button" class="node ${ok?"":"bad"}" ${attr}><span class="ico g-${c.g}">${icoOf(n.tipo)}</span><span style="min-width:0"><small>${esc(GRUPOS[c.g][0])}</small><b>${esc(c.l)}</b><span class="sum">${ok?esc(trunc(sum,60)):'<span class="warnt">Falta configurar</span>'}</span></span></button>`;
}
function walkNodes(arr,fn){ (arr||[]).forEach(n=>{ fn(n); if(n.si) walkNodes(n.si,fn); if(n.no) walkNodes(n.no,fn); }); }
function flowIssues(d){ const out=[]; if(!(d.disparadores||[]).length) out.push("Añade al menos un disparador");
  if(!(d.pasos||[]).length) out.push("Añade al menos un paso");
  let bad=(d.disparadores||[]).filter(n=>!nodeOk(n)).length; walkNodes(d.pasos,n=>{ if(!nodeOk(n)) bad++; });
  if(bad) out.push(bad===1?"Hay 1 paso sin configurar":`Hay ${bad} pasos sin configurar`); return out; }
function countNodes(arr){ let n=0; walkNodes(arr,()=>n++); return n; }

/* formularios de embudos, para el disparador */
function formsDe(sid){ const out=[]; of("embudos",sid).forEach(e=>(e.pasos||[]).forEach(p=>{ if(pasoForm(p)) out.push([e.id+"/"+p.id,`${e.nombre} › ${p.nombre}`]); })); return out; }
function formLabel(v){ if(!v) return ""; const [eid,pid]=String(v).split("/"); const e=S.data.embudos.find(x=>x.id===eid); const p=e&&(e.pasos||[]).find(x=>x.id===pid); return e&&p?`${e.nombre} › ${p.nombre}`:"Formulario borrado"; }
function usuariosSubOpts(sid){ return [["","Quien tenga asignado el contacto"]].concat(S.data.usuarios.filter(u=>u.estado!=="desactivado"&&u.rol!=="cliente"&&(u.rol==="admin"||(u.subcuentas||[]).includes(sid))).map(u=>[u.id,u.nombre])); }
const userName = id => { const u=usuario(id); return u?u.nombre:""; };

/* ---------- Flujos: estado y guardado ---------- */
function flowStats(f){ const s=f.stats||{}; return {ins:+s.inscritos||0,act:+s.activos||0,comp:+s.completados||0,obj:+s.objetivo||0}; }
const EST_FLOW = {borrador:["Borrador",""],publicado:["Publicado","ok"],pausado:["Pausado","warn"]};
const flowPill = e => { const [l,c]=EST_FLOW[e]||EST_FLOW.borrador; return `<span class="pill ${c}">${l}</span>`; };
function newFlowDoc(nombre){ return {sub:S.subId,nombre:nombre||"Flujo sin nombre",estado:"borrador",disparadores:[],pasos:[],ajustes:{reentrada:"No",salirSiResponde:"Sí",horario:"Cualquier hora"},stats:{inscritos:0,activos:0,completados:0,objetivo:0},creado:nowISO(),actualizado:nowISO()}; }
function openFlow(id){ S.autoTab="flujos"; const doc=S.data.flujos.find(x=>x.id===id); if(!doc) return; const d=clone(doc); delete d.id; S.flow={id,sub:doc.sub,d,rev:0,dirty:false,nuevo:false}; renderMain(); window.scrollTo(0,0); }
function startFlow(d){ S.autoTab="flujos"; S.flow={id:uid("fl"),sub:S.subId,d,rev:0,dirty:true,nuevo:true}; flush("flow",saveFlow).then(()=>renderMain()); renderMain(); window.scrollTo(0,0); }
async function saveFlow(){ const F=S.flow; if(!F||!canEdit()) return; const rev=F.rev; const body=Object.assign(clone(F.d),{actualizado:nowISO()}); delete body.id;
  F.saving=true; setFInd(); try{ await save("flujos",F.id,body); F.nuevo=false; if(F.rev===rev) F.dirty=false; }catch(e){} F.saving=false; setFInd(); }
function setFInd(){ const el=$("#flow-ind"); if(el&&S.flow) el.textContent=saveTxt(S.flow); }
function flowChange(now){ S.flow.dirty=true; S.flow.rev++; setFInd(); if(now) flush("flow",saveFlow); else autosave("flow",saveFlow); }

/* ---------- Flujos: vistas ---------- */
function renderNodes(arr,path){
  const add=i=>canEdit()?`<div class="link"></div><button type="button" class="addn" data-fins="${path}:${i}" aria-label="Añadir un paso aquí">${I.plus}</button>`:"";
  let h=add(0), ended=false;
  arr.forEach((n,i)=>{ const p=path+"."+i;
    h+=`<div class="link"></div>`+nodeCard(n,`data-fnode="${p}"`);
    if(n.tipo==="l_si"||n.tipo==="l_ab"){
      const ab=n.tipo==="l_ab", r=+((n.cfg||{}).reparto)||50;
      const [la,lb]=ab?[`A · ${r} %`,`B · ${100-r} %`]:["Sí","No"];
      h+=`<div class="link"></div><div class="branch"><div class="lane"><span class="pill ${ab?"rosa":"ok"}">${la}</span>${renderNodes(n.si||[],p+".si")}</div><div class="lane"><span class="pill ${ab?"rosa":"bad"}">${lb}</span>${renderNodes(n.no||[],p+".no")}</div></div>`;
      ended=true; return; }
    h+=add(i+1);
  });
  if(!ended) h+=`<div class="link"></div><span class="endp">Fin</span>`;
  return h;
}
function viewFlow(){
  const F=S.flow;
  if(!F.dirty&&!F.saving&&!F.nuevo){ const doc=S.data.flujos.find(x=>x.id===F.id); if(doc){ F.d=clone(doc); delete F.d.id; } }
  const d=F.d, iss=flowIssues(d), st=flowStats(d);
  const trig=(d.disparadores||[]).map((n,i)=>nodeCard(n,`data-ftrig="${i}"`)).join("");
  const acts=canEdit()?`<button class="btn ghost" data-flow-ajustes>Ajustes</button><button class="btn sec" data-flow-test>Probar con un contacto</button>${d.estado==="publicado"?`<button class="btn sec" data-flow-estado="pausado">Pausar</button>`:`<button class="btn" data-flow-estado="publicado" ${iss.length?"disabled":""}>${d.estado==="pausado"?"Reanudar":"Publicar"}</button>`}`:`<button class="btn sec" data-flow-test>Probar con un contacto</button>`;
  const stats=(st.ins||d.estado!=="borrador")?`<div class="kpis">
      <div class="kpi"><small>Han entrado</small><b class="num">${nf.format(st.ins)}</b><span>contactos en total</span></div>
      <div class="kpi"><small>Dentro ahora</small><b class="num">${nf.format(st.act)}</b><span>esperando un paso</span></div>
      <div class="kpi"><small>Han terminado</small><b class="num">${nf.format(st.comp)}</b><span>${st.ins?Math.round(st.comp/st.ins*100):0} % de los que entraron</span></div>
      <div class="kpi"><small>Objetivo cumplido</small><b class="num">${st.ins?Math.round(st.obj/st.ins*100):0} %</b><span>${nf.format(st.obj)} contactos</span></div></div>`:"";
  return `<div class="head"><div style="min-width:0;flex:1"><div class="eyebrow"><button class="btn ghost" data-flow-back style="padding:4px 8px 4px 0">← Automatizaciones</button>${flowPill(d.estado)}<span class="save-ind" id="flow-ind">${saveTxt(F)}</span></div>
      <input class="fl-name" id="fl-name" data-fname="flow" value="${esc(d.nombre)}" aria-label="Nombre del flujo" ${ro()}></div>
      <div class="actions">${acts}${canEdit()&&!F.nuevo?`<button class="btn danger" id="flow-del">Borrar</button>`:""}</div></div>
    ${iss.length?`<div class="note"><b>Para publicarlo:</b> ${esc(iss.join(". "))}.</div>`:""}
    ${stats}
    <div class="flow-wrap"><div class="flow">
      <div class="trigbox"><small>Cuando…</small>${trig||'<span class="muted" style="font-size:13.5px;padding:0 4px">Elige qué hace entrar a un contacto en este flujo.</span>'}${canEdit()?`<button type="button" class="btn sec" data-add-trig style="align-self:flex-start">${I.plus}Añadir disparador</button>`:""}</div>
      ${renderNodes(d.pasos||[],"pasos")}
    </div></div>
    <p class="muted" style="margin:0;font-size:13.5px;max-width:75ch">Los flujos publicados los ejecutará tu sistema de automatización cuando lo montes en Claude Code. Aquí los diseñas, los pruebas con contactos reales y ves sus resultados.</p>`;
}
function viewAutomatizaciones(){
  if(S.flow && S.flow.sub===S.subId) return viewFlow();
  if(S.fun && S.fun.sub===S.subId) return viewFunnel();
  const s=sub(), t=S.autoTab||"flujos";
  const tabs=`<div class="chips" role="tablist">${[["flujos","Flujos"],["embudos","Embudos"],["plantillas","Plantillas"]].map(([k,l])=>`<button class="chip" role="tab" data-autotab="${k}" aria-pressed="${t===k}">${l}</button>`).join("")}</div>`;
  let body="", acts="";
  if(t==="flujos"){
    const fs=of("flujos",s.id).sort((a,b)=>String(b.actualizado||"").localeCompare(String(a.actualizado||"")));
    acts=addBtn("Nuevo flujo","data-new-flow");
    body=fs.length?`<div class="table-wrap"><table><thead><tr><th>Flujo</th><th>Cuando…</th><th>Estado</th><th class="r">Pasos</th><th class="r">Han entrado</th><th class="r">Objetivo</th><th>Actualizado</th></tr></thead><tbody>${fs.map(f=>{ const st=flowStats(f); const tg=(f.disparadores||[]).map(n=>CAT[n.tipo]?CAT[n.tipo].l:"").join(", ");
      return `<tr data-flow="${esc(f.id)}"><td><b>${esc(f.nombre)}</b>${f.ejemplo?' <span class="pill ej">Ejemplo</span>':""}</td><td class="muted">${esc(trunc(tg,48))||"Sin disparador"}</td><td>${flowPill(f.estado)}</td><td class="r num">${countNodes(f.pasos)}</td><td class="r num">${nf.format(st.ins)}</td><td class="r num">${st.ins?Math.round(st.obj/st.ins*100)+" %":"—"}</td><td class="muted" style="white-space:nowrap">${rel(f.actualizado)}</td></tr>`; }).join("")}</tbody></table></div>`
      :`<div class="empty"><h2>Sin flujos todavía.</h2><p>Un flujo hace solo lo que harías a mano: contestar a un lead en un minuto, recordar una cita o pedir una reseña. Empieza desde cero o con una plantilla.</p><div class="actions">${addBtn("Nuevo flujo","data-new-flow")}<button class="btn sec" data-autotab="plantillas">Ver plantillas</button></div></div>`;
  } else if(t==="embudos"){
    const es=of("embudos",s.id).sort((a,b)=>String(b.actualizado||"").localeCompare(String(a.actualizado||"")));
    acts=addBtn("Nuevo embudo","data-new-fun");
    body=es.length?`<div class="table-wrap"><table><thead><tr><th>Embudo</th><th>Pasos</th><th>Estado</th><th class="r">Visitas</th><th class="r">Llegan al final</th><th>Actualizado</th></tr></thead><tbody>${es.map(e=>{ const ps=e.pasos||[], v=ps[0]?+ps[0].visitas||0:0, fin=ps.length?+(ps[ps.length-1].conversiones||ps[ps.length-1].visitas)||0:0;
      return `<tr data-fun="${esc(e.id)}"><td><b>${esc(e.nombre)}</b>${e.ejemplo?' <span class="pill ej">Ejemplo</span>':""}<br><small class="muted">${esc(e.dominio||"Sin dominio")}</small></td><td class="muted">${esc(trunc(ps.map(p=>p.nombre).join(" → "),60))||"Sin pasos"}</td><td>${e.estado==="publicado"?'<span class="pill ok">Publicado</span>':'<span class="pill">Borrador</span>'}</td><td class="r num">${v?nf.format(v):"—"}</td><td class="r num">${v?(fin/v*100).toFixed(1).replace(".",",")+" %":"—"}</td><td class="muted" style="white-space:nowrap">${rel(e.actualizado)}</td></tr>`; }).join("")}</tbody></table></div>`
      :`<div class="empty"><h2>Sin embudos todavía.</h2><p>Un embudo es el camino que recorre un cliente: una página para dejar sus datos, otra de gracias, una para reservar. Cada formulario puede activar un flujo.</p><div class="actions">${addBtn("Nuevo embudo","data-new-fun")}</div></div>`;
  } else {
    body=`<div class="recetas">${RECETAS.map(r=>`<div class="receta"><div><h3>${esc(r.nombre)}</h3><p>${esc(r.desc)}</p><div class="steps-mini">${r.pasos.map(p=>`<span class="pill">${esc(p)}</span>`).join("")}</div></div>${canEdit()?`<button class="btn sec" data-receta="${r.k}">Usar plantilla</button>`:""}</div>`).join("")}</div>`;
  }
  return headHTML(esc(s.nombre),"Que trabaje <span class=\"m\">sola.</span>","Flujos que contestan, recuerdan y hacen seguimiento por ti, y embudos que convierten visitas en contactos.",acts)+tabs+body;
}

/* ---------- Flujos: cajones ---------- */
function catalogHTML(groups,attr){
  return `<div class="catalog">${groups.map(g=>`<div class="grp"><b>${GRUPOS[g][0]}</b>${Object.entries(CAT).filter(([,c])=>c.g===g).map(([k,c])=>`<button type="button" class="pick" ${attr}="${k}"><span class="ico g-${g}">${icoOf(k)}</span><span>${esc(c.l)}${c.h?`<small>${esc(trunc(c.h,90))}</small>`:""}</span></button>`).join("")}</div>`).join("")}</div>`;
}
function drawerPickNode(arrPath,idx){
  S.flowIns={arrPath,idx};
  openDrawer("Añadir <span class=\"m\">paso.</span>",catalogHTML(["msg","crm","time","logic","ext"],"data-pick"),`<button type="button" class="btn ghost" data-close>Cancelar</button>`,async()=>{});
}
function drawerPickTrig(){ openDrawer("Añadir <span class=\"m\">disparador.</span>",`<p class="muted" style="margin:0">El contacto entra en el flujo en cuanto pasa cualquiera de los disparadores.</p>`+catalogHTML(["t"],"data-pick-trig"),`<button type="button" class="btn ghost" data-close>Cancelar</button>`,async()=>{}); }
function fieldCtrl(f,cfg,sid){
  const [k,l,t,o]=f, id="nf-"+k, v=cfg[k];
  if(t==="select") return fld(id,l,`<select id="${id}" name="${k}" ${ro()}>${selOpts(o,v)}</select>`);
  if(t==="stage") return fld(id,l,`<select id="${id}" name="${k}" ${ro()}>${selOpts([["","Elige una etapa"]].concat(etapasDe(subById(sid)).map(e=>[e,e])),v||"")}</select>`);
  if(t==="user") return fld(id,l,`<select id="${id}" name="${k}" ${ro()}>${selOpts(usuariosSubOpts(sid),v||"")}</select>`);
  if(t==="form"){ const fs=formsDe(sid); return fld(id,l,`<select id="${id}" name="${k}" ${ro()}>${selOpts([["","Elige un formulario"]].concat(fs),v||"")}</select>`,fs.length?"":"Crea primero un embudo con un formulario."); }
  if(t==="flow"){ const fs=of("flujos",sid).filter(x=>!S.flow||x.id!==S.flow.id); return fld(id,l,`<select id="${id}" name="${k}" ${ro()}>${selOpts([["","Elige un flujo"]].concat(fs.map(x=>[x.id,x.nombre])),v||"")}</select>`); }
  if(t==="number") return fld(id,l,`<input id="${id}" name="${k}" type="number" min="0" value="${esc(v==null?"":v)}" ${ro()}>`);
  if(t==="area") return fld(id,l,`<textarea id="${id}" name="${k}" ${o?`placeholder="${esc(o)}"`:""} ${ro()}>${esc(v)}</textarea>`);
  if(t==="msg"){ const sms=S.flowNode&&S.flowNode.tipo==="a_sms";
    return `<div class="field"><label for="${id}">${l}</label><textarea id="${id}" name="${k}" style="min-height:140px" placeholder="Hola {{contacto.nombre}}, …" ${ro()}>${esc(v)}</textarea>
      ${canEdit()?`<div class="merge" aria-label="Insertar dato">${MERGE.map(m=>`<button type="button" data-merge="${m}" data-target="${id}">${m}</button>`).join("")}</div>`:""}${sms?`<span class="help" id="sms-cnt">${smsTxt(v)}</span>`:""}</div>`; }
  return fld(id,l,`<input id="${id}" name="${k}" type="${t==="url"?"url":"text"}" value="${esc(v==null?"":v)}" ${o?`placeholder="${esc(o)}"`:""} ${ro()}>`);
}
const smsTxt = v => { const n=String(v||"").length, gsm=!/[^\x00-\x7FáéíóúÁÉÍÓÚñÑüÜ¿¡€]/.test(v||""); const per=gsm?160:70; return `${n} caracteres · ${Math.max(1,Math.ceil(n/(n>per?per-7:per)))} SMS`; };
function nodeFormBody(n,sid){ const c=CAT[n.tipo]; return (c.h?`<div class="note">${esc(c.h)}</div>`:"")+c.f.filter(f=>showField(f,n.cfg||{})).map(f=>fieldCtrl(f,n.cfg||{},sid)).join(""); }
function readCfg(f,n){ const cfg=Object.assign({},n.cfg||{}); CAT[n.tipo].f.forEach(([k,,t])=>{ const el=f.elements[k]; if(el) cfg[k]=t==="number"?(el.value===""?"":+el.value):el.value; }); return cfg; }
function drawerNode(kind,ref){
  const F=S.flow, d=F.d; let n, arrPath, idx;
  if(kind==="trig"){ idx=+ref; n=d.disparadores[idx]; }
  else { const parts=ref.split("."); idx=+parts.pop(); arrPath=parts.join("."); n=getPath(d,arrPath)[idx]; }
  if(!n) return; S.flowNode={tipo:n.tipo}; const c=CAT[n.tipo], sid=F.sub, ctrl=c.f.filter(f=>c.f.some(g=>g[4]&&g[4][f[0]])).map(f=>f[0]);
  const branchN=(n.no||[]).length;
  const foot=canEdit()?`<button type="button" class="btn danger" id="node-del">${kind!=="trig"&&(n.tipo==="l_si"||n.tipo==="l_ab")&&branchN?`Borrar (y ${branchN} ${branchN===1?"paso":"pasos"} de la rama ${n.tipo==="l_ab"?"B":"No"})`:"Borrar"}</button>${kind!=="trig"?`<button type="button" class="btn ghost" id="node-up" ${idx===0?"disabled":""}>Subir</button>`:""}<button class="btn" type="submit">Guardar</button>`:`<button type="button" class="btn sec" data-close>Cerrar</button>`;
  openDrawer(esc(c.l),`<div id="nf-body" style="display:flex;flex-direction:column;gap:16px">${nodeFormBody(n,sid)}</div>`,foot,async(fd,f)=>{ if(!canEdit()) return; n.cfg=readCfg(f,n); flowChange(true); renderMain(); });
  const f=$("#dr-form");
  f.addEventListener("change",e=>{ if(ctrl.includes(e.target.name)){ const tmp={tipo:n.tipo,cfg:readCfg(f,n)}; $("#nf-body").innerHTML=nodeFormBody(tmp,sid); } });
  f.addEventListener("input",e=>{ const c2=$("#sms-cnt"); if(c2&&e.target.name==="cuerpo") c2.textContent=smsTxt(e.target.value); });
  const del=$("#node-del"); if(del) del.addEventListener("click",()=>{ if(!del.classList.contains("armed")){ del.classList.add("armed"); del.textContent="Toca otra vez para borrar"; return; }
    if(kind==="trig") d.disparadores.splice(idx,1);
    else { const arr=getPath(d,arrPath); const [rm]=arr.splice(idx,1); if((rm.tipo==="l_si"||rm.tipo==="l_ab")&&(rm.si||[]).length) arr.splice(idx,0,...rm.si); }
    flowChange(true); closeDrawer(); renderMain(); toast("Paso borrado"); });
  const up=$("#node-up"); if(up) up.addEventListener("click",()=>{ const arr=getPath(d,arrPath); if(idx<1) return; const prev=arr[idx-1]; if(prev.tipo==="l_si"||prev.tipo==="l_ab") return; [arr[idx-1],arr[idx]]=[arr[idx],arr[idx-1]]; flowChange(true); closeDrawer(); renderMain(); });
}
function insertNode(tipo){
  const F=S.flow, {arrPath,idx}=S.flowIns||{}; if(!F||arrPath==null) return;
  const arr=getPath(F.d,arrPath)||[]; const n=nodeN(tipo);
  if(tipo==="l_si"||tipo==="l_ab"){ n.si=arr.splice(idx); n.no=[]; arr.push(n); } else arr.splice(idx,0,n);
  setPath(F.d,arrPath,arr); S.flowIns=null; flowChange(true); renderMain();
  drawerNode("node",arrPath+"."+arr.indexOf(n));
}
function drawerFlowAjustes(){
  const a=S.flow.d.ajustes||{};
  openDrawer("Ajustes del <span class=\"m\">flujo.</span>",
    fld("fa-re","¿Puede entrar el mismo contacto más de una vez?",`<select id="fa-re" name="reentrada">${selOpts(["No","Sí"],a.reentrada||"No")}</select>`)+
    fld("fa-sr","Si el contacto responde",`<select id="fa-sr" name="salirSiResponde">${selOpts([["Sí","Sale del flujo y avisa al equipo"],["No","Sigue en el flujo"]],a.salirSiResponde||"Sí")}</select>`,"Evita que alguien que ya está hablando contigo reciba mensajes automáticos.")+
    fld("fa-h","Horario de envío",`<select id="fa-h" name="horario">${selOpts(["Cualquier hora","Lunes a viernes, de 9:00 a 20:00","Todos los días, de 9:00 a 21:00"],a.horario||"Cualquier hora")}</select>`,"Fuera de horario, los mensajes esperan al siguiente hueco."),
    `<button type="button" class="btn ghost" data-close>Cancelar</button><button class="btn" type="submit">Guardar</button>`,
    async fd=>{ S.flow.d.ajustes=Object.assign({},a,fd); flowChange(true); renderMain(); toast("Ajustes guardados"); });
}

/* ---------- Flujos: simulación con un contacto ---------- */
function simular(d,c){
  const out=[], opps=S.data.oportunidades.filter(o=>o.contactoId===c.id), conv=S.data.conversaciones.find(v=>v.contactoId===c.id);
  const ctx={tags:new Set(c.etiquetas||[]),fuente:c.fuente,etapa:opps.map(o=>o.etapa),respondio:!!(conv&&(conv.mensajes||[]).some(m=>m.de==="in")),tel:filled(c.tel)};
  let t=0, fin=false;
  const fmt=m=>m<=0?"Ahora":m<60?`+${m} min`:m<1440?`+${Math.round(m/60)} h`:`+${Math.floor(m/1440)} d${m%1440>=60?` ${Math.round((m%1440)/60)} h`:""}`;
  const push=(txt,cls)=>out.push({t:fmt(t),txt,cls});
  const walk=arr=>{ for(const n of arr||[]){ if(fin) return; const cfg=n.cfg||{}, l=CAT[n.tipo]?CAT[n.tipo].l:n.tipo;
    if(n.tipo==="w_espera"){
      if(cfg.modo==="Un tiempo"){ t+=(+cfg.cantidad||0)*({minutos:1,horas:60,"días":1440}[cfg.unidad]||1); push(`Espera ${unitTxt(cfg.cantidad,cfg.unidad)}`); }
      else if(cfg.modo==="Hasta un momento"){ t+=1440; push(`Espera hasta: ${String(cfg.momento||"").toLowerCase()}`); }
      else { const pasa=cfg.evento==="Responda"&&ctx.respondio; t+=pasa?60:(+cfg.maximo||1)*1440; push(pasa?`Espera hasta que ${cfg.evento.toLowerCase()}: ya ha respondido, sigue enseguida`:`Espera hasta que ${String(cfg.evento).toLowerCase()} (en la prueba no pasa: sigue al cabo de ${unitTxt(cfg.maximo||1,"días")})`); }
      continue; }
    if(n.tipo==="l_si"){ let ok=false; switch(cfg.campo){ case "Respondió": ok=ctx.respondio; break; case "Tiene la etiqueta": ok=ctx.tags.has(cfg.valor); break; case "Viene de la fuente": ok=ctx.fuente===cfg.fuente; break; case "Está en la etapa": ok=ctx.etapa.includes(cfg.etapa); break; case "Tiene teléfono": ok=ctx.tel; break; default: ok=false; }
      push(`${nodeSum(n)}: ${ok?"sí":"no"}${["Abrió el último email","Hizo clic en un enlace"].includes(cfg.campo)?" (en la prueba se da por hecho que no)":""}`); walk(ok?n.si:n.no); return; }
    if(n.tipo==="l_ab"){ push(`Prueba A/B: en la simulación va por la versión A`); walk(n.si); return; }
    if(n.tipo==="l_objetivo"){ const met=(cfg.evento==="Responde"&&ctx.respondio)||(cfg.evento==="Gana la oportunidad"&&ctx.etapa.some(e=>e===etapaGanada(subById(d.sub)))); push(met?`Objetivo «${String(cfg.evento).toLowerCase()}»: cumplido`:`Objetivo «${String(cfg.evento).toLowerCase()}»: aún no`,met?"ok":""); continue; }
    if(n.tipo==="a_tag") ctx.tags.add(cfg.etiqueta); if(n.tipo==="a_untag") ctx.tags.delete(cfg.etiqueta);
    if(n.tipo==="a_opp"&&cfg.etapa) ctx.etapa.push(cfg.etapa);
    const isMsg=["a_sms","a_whatsapp","a_dm","a_email"].includes(n.tipo);
    let txt=isMsg?l+(n.tipo==="a_email"&&cfg.asunto?`: «${cfg.asunto}»`:""):`${l}${nodeSum(n)?": "+trunc(nodeSum(n),70):""}`;
    if(isMsg){ const body=String(cfg.cuerpo||"").replace(/\{\{contacto\.nombre\}\}/g,(c.nombre||"").split(" ")[0]).replace(/\{\{negocio\.nombre\}\}/g,(subById(d.sub)||{}).nombre||""); if(body) txt+=n.tipo=="a_email"?"":`: «${trunc(body,90)}»`;
      if((n.tipo==="a_sms"||n.tipo==="a_whatsapp")&&!ctx.tel){ push(`${l}: no se envía, el contacto no tiene teléfono`); continue; }
      if(n.tipo==="a_email"&&!filled(c.email)){ push(`${l}: no se envía, el contacto no tiene email`); continue; } }
    push(txt);
    if(n.tipo==="a_flujo"&&cfg.salir==="Sí"){ push("Sale de este flujo"); fin=true; return; } } };
  push(`Entra en el flujo: ${c.nombre}`,"ok"); walk(d.pasos); if(!fin) push("Termina el flujo","ok"); return out;
}
function drawerTest(){
  const F=S.flow, cs=of("contactos",F.sub).sort((a,b)=>String(b.creado||"").localeCompare(String(a.creado||"")));
  openDrawer("Probar con un <span class=\"m\">contacto.</span>",
    cs.length?fld("sim-c","Contacto",`<select id="sim-c">${selOpts(cs.map(c=>[c.id,`${c.nombre} · ${c.fuente||"sin fuente"}`]))}</select>`,"Es una simulación con sus datos reales: no se envía nada.")+`<div id="sim-out"></div>`:`<p class="muted" style="margin:0">Esta subcuenta aún no tiene contactos con los que probar.</p>`,
    `<button type="button" class="btn ghost" data-close>Cerrar</button>${cs.length?`<button type="button" class="btn" id="sim-go">Simular</button>`:""}`,async()=>{});
  const go=$("#sim-go"); if(!go) return;
  const run=()=>{ const c=contacto($("#sim-c").value); if(!c) return; const r=simular(F.d,c); $("#sim-out").innerHTML=`<p class="section-t">Lo que pasaría</p><div class="sim">${r.map(x=>`<div class="${x.cls||""}"><time>${esc(x.t)}</time>${esc(x.txt)}</div>`).join("")}</div>`; };
  go.addEventListener("click",run); $("#sim-c").addEventListener("change",run); run();
}

/* ---------- Embudos ---------- */
const PASO_TIPOS = [["captacion","Captación","Formulario para conseguir el contacto"],["gracias","Gracias","Confirma y da el siguiente paso"],["reserva","Reserva de cita","Calendario para elegir día y hora"],["venta","Página de venta","Presenta la oferta"],["pedido","Pedido","Datos y pago"],["upsell","Oferta adicional","Un extra justo después de comprar"],["registro","Registro a evento","Webinar o evento presencial"],["encuesta","Encuesta","Preguntas para cualificar"]];
const CAMPOS_FORM = [["nombre","Nombre"],["email","Email"],["telefono","Teléfono"],["empresa","Empresa"],["mensaje","Mensaje"],["fecha","Fecha preferida"]];
const pasoTipo = k => PASO_TIPOS.find(x=>x[0]===k)||PASO_TIPOS[0];
const pasoForm = p => ["captacion","registro","encuesta","reserva","pedido"].includes(p.tipo);
function newPaso(tipo){ const [k,l]=pasoTipo(tipo);
  const base={id:uid("p"),tipo:k,nombre:l,ruta:"/"+l.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),titular:"",subtitulo:"",puntos:"",cta:"",imagen:"",campos:pasoForm({tipo:k})?["nombre","email","telefono"]:[],pregunta:"",boton:"",consentimiento:true,visitas:0,conversiones:0};
  if(k==="reserva") Object.assign(base,{duracion:30,disponibilidad:"Lunes a viernes, de 9:00 a 14:00 y de 16:00 a 20:00"});
  if(["venta","pedido","upsell"].includes(k)) Object.assign(base,{producto:"",precio:""});
  return base; }
function newFunDoc(){ return {sub:S.subId,nombre:"Embudo sin nombre",dominio:"",objetivo:"",estado:"borrador",pasos:[newPaso("captacion"),newPaso("gracias")],creado:nowISO(),actualizado:nowISO()}; }
function openFun(id){ S.autoTab="embudos"; const doc=S.data.embudos.find(x=>x.id===id); if(!doc) return; const d=clone(doc); delete d.id; S.fun={id,sub:doc.sub,d,sel:0,rev:0,dirty:false,nuevo:false}; renderMain(); window.scrollTo(0,0); }
async function saveFun(){ const F=S.fun; if(!F||!canEdit()) return; const rev=F.rev; const body=Object.assign(clone(F.d),{actualizado:nowISO()}); delete body.id;
  F.saving=true; setUInd(); try{ await save("embudos",F.id,body); F.nuevo=false; if(F.rev===rev) F.dirty=false; }catch(e){} F.saving=false; setUInd(); }
function setUInd(){ const el=$("#fun-ind"); if(el&&S.fun) el.textContent=saveTxt(S.fun); }
function funChange(now){ S.fun.dirty=true; S.fun.rev++; setUInd(); if(now) flush("fun",saveFun); else autosave("fun",saveFun); }
function pagePreview(e,p){
  const s=subById(e.sub)||{}, dom=(e.dominio||"tudominio.com").replace(/^https?:\/\//,"").replace(/\/$/,"");
  const ph=(v,t)=>filled(v)?esc(v):`<span class="ph-empty">${t}</span>`;
  const pts=String(p.puntos||"").split("\n").filter(filled);
  let h=`<div class="pg"><div class="pg-bar">${esc(dom)}${esc(p.ruta||"")}</div><div class="pg-body"><small>${esc(s.nombre||"")}</small><h3>${ph(p.titular,"Titular de la página")}</h3>${p.subtitulo?`<p>${esc(p.subtitulo)}</p>`:""}`;
  if(pts.length) h+=`<ul>${pts.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`;
  if(filled(p.imagen)) h+=`<div class="pg-img">${esc(p.imagen)}</div>`;
  if(p.tipo==="reserva") h+=`<p style="color:var(--fg);font-weight:600">${esc(p.duracion||30)} minutos</p><div class="pg-slots">${["Lun 9:30","Lun 10:00","Lun 12:30","Mar 16:00","Mar 17:30","Mié 9:00"].map(x=>`<span>${x}</span>`).join("")}</div>`;
  if(["venta","pedido","upsell"].includes(p.tipo)&&(filled(p.producto)||filled(p.precio))) h+=`<div class="pg-in" style="display:flex;justify-content:space-between;color:var(--fg)"><span>${esc(p.producto||"Producto")}</span><b>${p.precio?esc(p.precio)+" €":""}</b></div>`;
  if(pasoForm(p)){ (p.campos||[]).forEach(k=>{ const c=CAMPOS_FORM.find(x=>x[0]===k); if(c) h+=`<div class="pg-in">${c[1]}</div>`; }); if(filled(p.pregunta)) h+=`<div class="pg-in">${esc(p.pregunta)}</div>`;
    if(p.consentimiento) h+=`<div class="pg-legal"><span>☐</span><span>Acepto la política de privacidad y que me contactéis sobre mi solicitud.</span></div>`; }
  const btn=p.boton||p.cta; if(btn||pasoForm(p)||p.tipo!=="gracias") h+=`<div class="pg-btn">${ph(btn,"Texto del botón")}</div>`;
  return h+`</div></div>`;
}
function viewFunnel(){
  const F=S.fun;
  if(!F.dirty&&!F.saving&&!F.nuevo){ const doc=S.data.embudos.find(x=>x.id===F.id); if(doc){ F.d=clone(doc); delete F.d.id; } }
  const e=F.d, ps=e.pasos||[]; if(F.sel>=ps.length) F.sel=Math.max(0,ps.length-1); const p=ps[F.sel];
  const steps=ps.map((x,i)=>{ const prev=ps[i-1]; const conv=i>0&&+prev.visitas?`<div class="fconv">${Math.round((+x.visitas||0)/(+prev.visitas)*100)} % pasan aquí</div>`:i>0?`<div class="fconv">&nbsp;</div>`:"";
    return `${conv}<button type="button" class="fstep" data-fstep="${i}" aria-current="${i===F.sel}"><span class="sn">${i+1}</span><b>${esc(x.nombre)}</b><small>${esc(pasoTipo(x.tipo)[1])}${+x.visitas?` · ${nf.format(+x.visitas)} visitas`:""}</small></button>`; }).join("")
    +(canEdit()?`<button type="button" class="btn sec" data-add-step style="margin-top:12px;align-self:flex-start">${I.plus}Añadir paso</button>`:"");
  const pf=(k,l,o)=>{ o=o||{}; const id="pf-"+k, v=p[k]; const ctrl=o.area?`<textarea id="${id}" data-pf="${k}" ${o.ph?`placeholder="${esc(o.ph)}"`:""} ${ro()}>${esc(v)}</textarea>`:o.sel?`<select id="${id}" data-pf="${k}" ${ro()}>${selOpts(o.sel,v)}</select>`:`<input id="${id}" data-pf="${k}" type="${o.type||"text"}" value="${esc(v==null?"":v)}" ${o.ph?`placeholder="${esc(o.ph)}"`:""} ${ro()}>`; return fld(id,l,ctrl,o.help); };
  let ed="";
  if(p){
    const flows=of("flujos",e.sub).filter(f=>(f.disparadores||[]).some(t=>t.tipo==="t_formulario"&&t.cfg&&t.cfg.formulario===F.id+"/"+p.id));
    ed=`<section class="form-block"><h2>Paso ${F.sel+1}: ${esc(pasoTipo(p.tipo)[1])}</h2>
      <div class="row2">${pf("nombre","Nombre del paso")}${pf("ruta","Ruta",{ph:"/primera-visita"})}</div>
      ${pf("titular","Titular",{ph:"Tu primera visita, gratis y sin compromiso"})}
      ${pf("subtitulo","Subtítulo",{area:true})}
      ${pf("puntos","Puntos clave",{area:true,ph:"Estudio 3D incluido\nPresupuesto cerrado\nFinanciación sin intereses",help:"Uno por línea."})}
      ${pf("imagen","Imagen o vídeo",{ph:"Nombre del archivo o enlace"})}
      ${p.tipo==="reserva"?`<div class="row2">${pf("duracion","Duración de la cita (min)",{type:"number"})}${pf("disponibilidad","Disponibilidad")}</div>`:""}
      ${["venta","pedido","upsell"].includes(p.tipo)?`<div class="row2">${pf("producto","Producto")}${pf("precio","Precio (€)",{type:"number"})}</div>`:""}
      ${pf(pasoForm(p)?"boton":"cta",pasoForm(p)?"Texto del botón del formulario":"Botón principal",{ph:pasoForm(p)?"Quiero mi primera visita":"Reserva tu cita"})}
    </section>
    ${pasoForm(p)?`<section class="form-block"><h2>Formulario</h2>
      <div class="field"><span style="font-size:13px;font-weight:600">Campos</span><div class="chipset">${CAMPOS_FORM.map(([k,l])=>`<button type="button" class="chip" data-pcampo="${k}" aria-pressed="${(p.campos||[]).includes(k)}" ${ro()}>${l}</button>`).join("")}</div></div>
      ${pf("pregunta","Pregunta propia (opcional)",{ph:"¿Qué tratamiento te interesa?"})}
      <label class="check"><input type="checkbox" id="pf-consentimiento" data-pf="consentimiento" ${p.consentimiento?"checked":""} ${ro()}><span>Casilla de consentimiento y enlace a la política de privacidad. Necesaria para cumplir el RGPD.</span></label>
      <div class="note"><b>Flujos que activa este formulario:</b> ${flows.length?flows.map(f=>esc(f.nombre)).join(", "):"ninguno todavía."}</div>
      ${canEdit()?`<button type="button" class="btn sec" data-step-flow style="align-self:flex-start">${I.plus}Crear flujo para este formulario</button>`:""}
    </section>`:""}
    ${canEdit()?`<div class="actions"><button type="button" class="btn ghost" data-step-move="-1" ${F.sel===0?"disabled":""}>Subir paso</button><button type="button" class="btn ghost" data-step-move="1" ${F.sel>=ps.length-1?"disabled":""}>Bajar paso</button><button type="button" class="btn danger" id="step-del">Borrar paso</button></div>`:""}`;
  } else ed=`<div class="empty"><h2>Sin pasos.</h2><p>Añade la primera página del embudo.</p></div>`;
  const v0=ps[0]?+ps[0].visitas||0:0, last=ps[ps.length-1], fin=last?+(last.conversiones||last.visitas)||0:0;
  return `<div class="head"><div style="min-width:0;flex:1"><div class="eyebrow"><button class="btn ghost" data-flow-back style="padding:4px 8px 4px 0">← Automatizaciones</button>${e.estado==="publicado"?'<span class="pill ok">Publicado</span>':'<span class="pill">Borrador</span>'}<span class="save-ind" id="fun-ind">${saveTxt(F)}</span></div>
      <input class="fl-name" id="fun-name" data-fname="fun" value="${esc(e.nombre)}" aria-label="Nombre del embudo" ${ro()}></div>
      <div class="actions">${canEdit()?`<button class="btn ghost" data-fun-ajustes>Ajustes</button>${e.estado==="publicado"?`<button class="btn sec" data-fun-estado="borrador">Despublicar</button>`:`<button class="btn" data-fun-estado="publicado" ${ps.length&&filled(e.dominio)?"":"disabled"}>Publicar</button>`}${!F.nuevo?`<button class="btn danger" id="fun-del">Borrar</button>`:""}`:""}</div></div>
    ${!filled(e.dominio)&&canEdit()?`<div class="note"><b>Para publicarlo:</b> indica el dominio en Ajustes.</div>`:""}
    ${v0?`<div class="kpis"><div class="kpi"><small>Visitas</small><b class="num">${nf.format(v0)}</b><span>en el primer paso</span></div><div class="kpi"><small>Contactos</small><b class="num">${nf.format(+ps[0].conversiones||0)}</b><span>${v0?((+ps[0].conversiones||0)/v0*100).toFixed(1).replace(".",","):0} % de conversión</span></div><div class="kpi"><small>Llegan al final</small><b class="num">${nf.format(fin)}</b><span>${(fin/v0*100).toFixed(1).replace(".",",")} % de las visitas</span></div><div class="kpi"><small>Pasos</small><b class="num">${ps.length}</b><span>${esc(e.dominio||"")}</span></div></div>`:""}
    <div class="fed"><nav class="fsteps" aria-label="Pasos del embudo">${steps}</nav><div class="ed-main">${ed}</div><aside class="ed-side"><p class="side-t">Vista previa</p><div id="fun-preview">${p?pagePreview(e,p):""}</div></aside></div>
    <p class="muted" style="margin:0;font-size:13.5px;max-width:75ch">Las páginas las publicará tu sistema cuando lo montes en Claude Code, en el dominio que indiques. Los envíos de cada formulario crean el contacto en esta subcuenta y activan sus flujos.</p>`;
}
function drawerAddPaso(){ openDrawer("Añadir <span class=\"m\">paso.</span>",`<div class="catalog"><div class="grp">${PASO_TIPOS.map(([k,l,dd])=>`<button type="button" class="pick" data-pick-step="${k}"><span class="ico g-logic">${I.grid}</span><span>${l}<small>${dd}</small></span></button>`).join("")}</div></div>`,`<button type="button" class="btn ghost" data-close>Cancelar</button>`,async()=>{}); }
function drawerFunAjustes(){ const e=S.fun.d;
  openDrawer("Ajustes del <span class=\"m\">embudo.</span>",
    fld("fu-d","Dominio",inp("fu-d","dominio",e.dominio,"text",'placeholder="oferta.clinicasonrisa.es"'),"Un subdominio del cliente apuntado a tu servidor.")+
    fld("fu-o","Objetivo",inp("fu-o","objetivo",e.objetivo,"text",'placeholder="Primeras visitas de implantes"')),
    `<button type="button" class="btn ghost" data-close>Cancelar</button><button class="btn" type="submit">Guardar</button>`,
    async fd=>{ Object.assign(S.fun.d,{dominio:String(fd.dominio||"").trim(),objetivo:fd.objetivo}); funChange(true); renderMain(); toast("Ajustes guardados"); }); }
function funLive(){ const F=S.fun; if(!F) return; const p=F.d.pasos[F.sel]; const pv=$("#fun-preview"); if(pv&&p) pv.innerHTML=pagePreview(F.d,p);
  const b=document.querySelector(`.fstep[data-fstep="${F.sel}"] b`); if(b&&p) b.textContent=p.nombre; }

/* ---------- Plantillas ---------- */
const RECETAS = [
  {k:"speed",nombre:"Respuesta rápida a leads",desc:"Contesta en menos de un minuto a cada lead de anuncios o formularios, avisa al equipo y lo persigue con SMS, email y una tarea de llamada si no responde.",pasos:["Lead de Meta o formulario","WhatsApp al momento","Aviso al equipo","Oportunidad","Si no responde: SMS, email y llamada"],
    build:()=>({nombre:"Respuesta rápida a leads",disparadores:[nodeN("t_meta"),nodeN("t_google")],pasos:[
      nodeN("a_whatsapp",{plantilla:"bienvenida_lead",cuerpo:"Hola {{contacto.nombre}}, soy del equipo de {{negocio.nombre}}. Hemos recibido tu solicitud. ¿Te va bien que te llamemos hoy?"}),
      nodeN("a_aviso",{cuerpo:"Nuevo lead: {{contacto.nombre}} ({{contacto.telefono}}). Llámale ya."}),
      nodeN("a_opp",{titulo:"Nuevo lead",etapa:etapasDe(sub())[0]}),
      nodeN("w_espera",{modo:"Hasta que pase algo",evento:"Responda",maximo:1}),
      nodeN("l_si",{campo:"Respondió"},{si:[nodeN("a_tag",{etiqueta:"respondió"})],no:[
        nodeN("a_sms",{cuerpo:"Hola {{contacto.nombre}}, te escribimos de {{negocio.nombre}} por tu solicitud. Responde a este SMS y te llamamos."}),
        nodeN("w_espera",{modo:"Un tiempo",cantidad:1,unidad:"días"}),
        nodeN("a_email",{asunto:"Tu solicitud en {{negocio.nombre}}",cuerpo:"Hola {{contacto.nombre}},\n\nIntentamos contactarte por tu solicitud. Puedes elegir día y hora aquí: {{enlace.reserva}}"}),
        nodeN("w_espera",{modo:"Un tiempo",cantidad:2,unidad:"días"}),
        nodeN("a_tarea",{titulo:"Llamar al lead que no responde",plazo:24})]})]})},
  {k:"citas",nombre:"Recordatorios de cita y ausencias",desc:"Confirma cada cita, la recuerda el día antes y dos horas antes, y si el contacto no se presenta le ofrece cambiarla.",pasos:["Cita reservada","Confirmación","Recordatorio 24 h","Recordatorio 2 h"],
    build:()=>({nombre:"Recordatorios de cita",disparadores:[nodeN("t_cita",{estado:"Se reserva"})],pasos:[
      nodeN("a_whatsapp",{plantilla:"confirmacion_cita",cuerpo:"Hola {{contacto.nombre}}, tu cita en {{negocio.nombre}} está confirmada para el {{cita.fecha}} a las {{cita.hora}}."}),
      nodeN("w_espera",{modo:"Hasta un momento",momento:"24 h antes de la cita"}),
      nodeN("a_whatsapp",{plantilla:"recordatorio_cita",cuerpo:"Te esperamos mañana a las {{cita.hora}}. Si no puedes venir, responde a este mensaje y la cambiamos."}),
      nodeN("w_espera",{modo:"Hasta un momento",momento:"2 h antes de la cita"}),
      nodeN("a_sms",{cuerpo:"{{negocio.nombre}}: te esperamos hoy a las {{cita.hora}}."})]})},
  {k:"noshow",nombre:"Recuperar a quien no vino",desc:"Cuando alguien no se presenta, le escribe con tacto para reprogramar y avisa al equipo si no responde.",pasos:["No se presenta","WhatsApp","Esperar 1 día","Si no responde: tarea"],
    build:()=>({nombre:"Recuperar ausencias",disparadores:[nodeN("t_cita",{estado:"No se presenta"})],pasos:[
      nodeN("w_espera",{modo:"Un tiempo",cantidad:30,unidad:"minutos"}),
      nodeN("a_whatsapp",{plantilla:"reprogramar_cita",cuerpo:"Hola {{contacto.nombre}}, hoy te echamos de menos. ¿Buscamos otro hueco? Elige aquí: {{enlace.reserva}}"}),
      nodeN("w_espera",{modo:"Hasta que pase algo",evento:"Reserve una cita",maximo:1}),
      nodeN("l_objetivo",{evento:"Reserva una cita"}),
      nodeN("a_tarea",{titulo:"Llamar para reprogramar la cita",plazo:24})]})},
  {k:"resenas",nombre:"Pedir reseñas en Google",desc:"Cuando ganas una oportunidad, espera dos días y pide una reseña. Si no hace clic, lo recuerda una vez por email.",pasos:["Oportunidad ganada","Esperar 2 días","WhatsApp con enlace","Si no hace clic: email"],
    build:()=>({nombre:"Pedir reseñas",disparadores:[nodeN("t_etapa",{etapa:etapaGanada(sub())})],pasos:[
      nodeN("w_espera",{modo:"Un tiempo",cantidad:2,unidad:"días"}),
      nodeN("a_whatsapp",{plantilla:"peticion_resena",cuerpo:"Hola {{contacto.nombre}}, gracias por confiar en {{negocio.nombre}}. ¿Nos dejas tu opinión? Son 30 segundos: {{enlace.resena}}"}),
      nodeN("w_espera",{modo:"Hasta que pase algo",evento:"Haga clic en un enlace",maximo:3}),
      nodeN("l_si",{campo:"Hizo clic en un enlace"},{si:[nodeN("a_tag",{etiqueta:"reseña pedida"})],no:[nodeN("a_email",{asunto:"¿Qué tal tu experiencia?",cuerpo:"Hola {{contacto.nombre}},\n\nTu opinión ayuda a otras personas a decidirse. Puedes dejarla aquí: {{enlace.resena}}\n\nGracias."})]})]})},
  {k:"reactivar",nombre:"Reactivar contactos dormidos",desc:"Para listas antiguas: les escribe con una oferta, crea la oportunidad a quien responde y saca de la lista a quien no.",pasos:["Etiqueta «reactivar»","SMS con oferta","Si responde: oportunidad","Si no: email y fuera"],
    build:()=>({nombre:"Reactivar contactos",disparadores:[nodeN("t_etiqueta",{etiqueta:"reactivar"})],ajustes:{reentrada:"No",salirSiResponde:"No",horario:"Lunes a viernes, de 9:00 a 20:00"},pasos:[
      nodeN("a_sms",{cuerpo:"Hola {{contacto.nombre}}, hace tiempo que no te vemos por {{negocio.nombre}}. Este mes tenemos una revisión gratis para ti. ¿Te reservo hueco?"}),
      nodeN("w_espera",{modo:"Hasta que pase algo",evento:"Responda",maximo:2}),
      nodeN("l_si",{campo:"Respondió"},{si:[nodeN("a_opp",{titulo:"Reactivación",etapa:etapasDe(sub())[0]}),nodeN("a_aviso",{cuerpo:"{{contacto.nombre}} ha respondido a la reactivación."})],no:[nodeN("a_email",{asunto:"Una revisión gratis este mes",cuerpo:"Hola {{contacto.nombre}},\n\nTe guardamos una revisión gratis este mes. Reserva aquí: {{enlace.reserva}}"}),nodeN("w_espera",{modo:"Un tiempo",cantidad:5,unidad:"días"}),nodeN("a_untag",{etiqueta:"reactivar"})]})]})},
  {k:"embudo",nombre:"Embudo de captación completo",desc:"Crea las páginas (captación, gracias y reserva) y el flujo que contesta al instante a quien deja sus datos.",pasos:["Página de captación","Gracias","Reserva de cita","Flujo de respuesta"],embudo:true}
];
function useReceta(k){
  const r=RECETAS.find(x=>x.k===k); if(!r||!canEdit()) return;
  if(r.embudo){ const e=newFunDoc(); e.nombre="Captación · "+sub().nombre; e.pasos=[Object.assign(newPaso("captacion"),{titular:"Pide tu primera visita sin compromiso",cta:"",boton:"Quiero mi cita"}),Object.assign(newPaso("gracias"),{titular:"Recibido. Te llamamos hoy.",subtitulo:"Si prefieres, elige tú el día y la hora en el siguiente paso.",cta:"Elegir día y hora"}),newPaso("reserva")];
    const fid=uid("fu"); S.fun=null; save("embudos",fid,e).catch(()=>{});
    const fl=Object.assign(newFlowDoc("Respuesta a la página de captación"),{disparadores:[nodeN("t_formulario",{formulario:fid+"/"+e.pasos[0].id})],pasos:[nodeN("a_whatsapp",{plantilla:"bienvenida_lead",cuerpo:"Hola {{contacto.nombre}}, gracias por escribirnos. Te llamamos hoy. Si lo prefieres, elige tú la hora: {{enlace.reserva}}"}),nodeN("a_aviso",{cuerpo:"Nuevo contacto desde la página de captación: {{contacto.nombre}}"}),nodeN("a_opp",{titulo:"Lead de la página",etapa:etapasDe(sub())[0]})]});
    save("flujos",uid("fl"),fl).catch(()=>{});
    S.autoTab="embudos"; S.fun={id:fid,sub:S.subId,d:clone(e),sel:0,rev:0,dirty:false,nuevo:false}; renderMain(); window.scrollTo(0,0); toast("Embudo y flujo creados"); return; }
  const b=r.build(); const d=Object.assign(newFlowDoc(b.nombre),b); startFlow(d); toast("Plantilla lista para revisar");
}

/* ---------- Drawer ---------- */
function openDrawer(title,body,foot,onSubmit){
  $("#drawer").innerHTML=`<div class="scrim" data-close></div>
    <form class="drawer" id="dr-form" role="dialog" aria-modal="true" aria-label="${esc(title.replace(/<[^>]+>/g,""))}">
      <div class="dr-head"><h2>${title}</h2><button type="button" class="x" data-close aria-label="Cerrar">${I.x}</button></div>
      <div class="dr-body">${body}</div>
      <div class="dr-foot">${foot}</div>
    </form>`;
  const f=$("#dr-form");
  f.addEventListener("submit",async e=>{ e.preventDefault(); const fd=Object.fromEntries(new FormData(f).entries()); try{ await onSubmit(fd,f); closeDrawer(); }catch(err){} });
  const first=f.querySelector("input,select,textarea"); if(first) first.focus();
}
function closeDrawer(){ $("#drawer").innerHTML=""; }
const fld=(id,label,inner,help)=>`<div class="field"><label for="${id}">${label}</label>${inner}${help?`<span class="help">${help}</span>`:""}</div>`;
const inp=(id,name,val,type,extra)=>`<input id="${id}" name="${name}" type="${type||"text"}" value="${esc(val||"")}" ${extra||""}>`;
const selOpts=(arr,cur)=>arr.map(v=>{ const [val,lab]=Array.isArray(v)?v:[v,v]; return `<option value="${esc(val)}" ${val===cur?"selected":""}>${esc(lab)}</option>`; }).join("");
function delBtn(onDel){ // confirmación en dos toques
  return {html:`<button type="button" class="btn danger" id="dr-del">Borrar</button>`, wire(){ const b=$("#dr-del"); if(!b) return; b.addEventListener("click",async()=>{ if(!b.classList.contains("armed")){ b.classList.add("armed"); b.textContent="Toca otra vez para borrar"; return; } await onDel(); closeDrawer(); }); }};
}

function drawerSub(){
  openDrawer("Nueva <span class=\"m\">subcuenta.</span>",
    fld("s-n","Nombre del cliente",inp("s-n","nombre","","text","required"))+
    fld("s-sec","Sector",inp("s-sec","sector","","text",'placeholder="Ej.: Clínica dental, restauración…"'))+
    fld("s-e","Email de contacto",inp("s-e","email","","email"))+
    fld("s-p","Pipeline",`<select id="s-p" name="pipe">${selOpts([["cliente","Cliente: Nuevo → Contactado → Propuesta → Negociación → Ganado"],["agencia","Agencia: Lead → El Desayuno → Propuesta → Cliente"]],"cliente")}</select>`,"Podrás usar las mismas etapas para todos tus clientes."),
    `<button type="button" class="btn ghost" data-close>Cancelar</button><button class="btn" type="submit">Crear subcuenta</button>`,
    async fd=>{ const id=uid("s"); await save("subcuentas",id,{nombre:fd.nombre.trim(),sector:fd.sector.trim(),email:fd.email.trim(),etapas:fd.pipe==="agencia"?ETAPAS_AGENCIA:ETAPAS_CLIENTE,interna:fd.pipe==="agencia",creada:nowISO()}); S.view="sub"; S.subId=id; S.tab="configuracion"; S.brief=null; rememberNav(); render(); toast("Subcuenta creada. Empieza por el brief del cliente."); });
}

function drawerContact(id){
  const c=id?contacto(id):null, s=sub()||S.data.subcuentas.find(x=>x.id===(c&&c.sub));
  const ops=c?S.data.oportunidades.filter(o=>o.contactoId===c.id):[];
  const conv=c?S.data.conversaciones.find(v=>v.contactoId===c.id):null;
  const ro=!canEdit()?"disabled":"";
  const related = c ? `<p class="section-t">Oportunidades</p><div class="mini">${ops.length?ops.map(o=>`<div><span>${esc(o.titulo)} <span class="pill">${esc(o.etapa)}</span></span><b class="num">${eur.format(+o.valor||0)}</b></div>`).join(""):`<div><span style="color:var(--muted)">Ninguna todavía.</span></div>`}</div>
    <div class="actions"><button type="button" class="btn sec" id="go-conv">${conv?"Abrir conversación":"Empezar conversación"}</button></div>` : "";
  const d = c && canEdit() ? delBtn(async()=>{ await remove("contactos",c.id); toast("Contacto borrado"); }) : null;
  openDrawer(c?esc(c.nombre):"Nuevo <span class=\"m\">contacto.</span>",
    fld("c-n","Nombre",inp("c-n","nombre",c&&c.nombre,"text","required "+ro))+
    `<div class="row2">${fld("c-e","Email",inp("c-e","email",c&&c.email,"email",ro))}${fld("c-t","Teléfono",inp("c-t","tel",c&&c.tel,"tel",ro))}</div>`+
    `<div class="row2">${fld("c-em","Empresa",inp("c-em","empresa",c&&c.empresa,"text",ro))}${fld("c-f","Fuente",`<select id="c-f" name="fuente" ${ro}>${selOpts(["Formulario web","Meta Ads","Google Ads","Instagram","Referido","El Desayuno","Manual"],(c&&c.fuente)||"Manual")}</select>`)}</div>`+
    fld("c-tags","Etiquetas",inp("c-tags","etiquetas",c&&(c.etiquetas||[]).join(", "),"text",ro+' placeholder="Separa con comas: vip, implantes"'))+
    fld("c-notas","Notas",`<textarea id="c-notas" name="notas" ${ro}>${esc(c&&c.notas)}</textarea>`)+related,
    canEdit()?`${d?d.html:'<button type="button" class="btn ghost" data-close>Cancelar</button>'}<button class="btn" type="submit">${c?"Guardar cambios":"Crear contacto"}</button>`:`<button type="button" class="btn sec" data-close>Cerrar</button>`,
    async fd=>{ if(!canEdit()) return; const tags=String(fd.etiquetas||"").split(",").map(t=>t.trim()).filter(Boolean);
      const body={sub:c?c.sub:S.subId,nombre:fd.nombre.trim(),email:fd.email.trim(),tel:fd.tel.trim(),empresa:fd.empresa.trim(),fuente:fd.fuente,etiquetas:tags,notas:fd.notas,creado:c?c.creado:nowISO()};
      await save("contactos",c?c.id:uid("c"),body); toast(c?"Cambios guardados":"Contacto creado"); });
  if(d) d.wire();
  const g=$("#go-conv"); if(g) g.addEventListener("click",async()=>{
    if(conv){ S.view="sub"; S.subId=conv.sub; S.tab="conversaciones"; S.convSel=conv.id; rememberNav(); closeDrawer(); render(); }
    else if(canEdit()){ const nid=uid("v"); await save("conversaciones",nid,{sub:c.sub,contactoId:c.id,canal:c.tel?"WhatsApp":"Email",mensajes:[],noLeido:false,actualizado:nowISO()}); S.view="sub"; S.subId=c.sub; S.tab="conversaciones"; S.convSel=nid; rememberNav(); closeDrawer(); render(); }
  });
}

function drawerOpp(id){
  const o=id?S.data.oportunidades.find(x=>x.id===id):null, s=sub(), et=etapasDe(s);
  const cs=of("contactos",s.id).sort((a,b)=>String(a.nombre).localeCompare(b.nombre,"es"));
  if(!cs.length && !o){ openDrawer("Primero, un <span class=\"m\">contacto.</span>",`<p class="lead" style="margin:0">Cada oportunidad va unida a un contacto. Crea uno y vuelve aquí.</p>`,`<button type="button" class="btn ghost" data-close>Cancelar</button><button type="button" class="btn" id="to-c">Crear contacto</button>`,async()=>{}); $("#to-c").addEventListener("click",()=>drawerContact(null)); return; }
  const d = o && canEdit() ? delBtn(async()=>{ await remove("oportunidades",o.id); toast("Oportunidad borrada"); }) : null;
  const ro=!canEdit()?"disabled":"";
  openDrawer(o?esc(o.titulo):"Nueva <span class=\"m\">oportunidad.</span>",
    fld("o-t","Título",inp("o-t","titulo",o&&o.titulo,"text","required "+ro+' placeholder="Ej.: Tratamiento de ortodoncia"'))+
    fld("o-c","Contacto",`<select id="o-c" name="contactoId" required ${ro}>${selOpts(cs.map(c=>[c.id,c.nombre]),o&&o.contactoId)}</select>`)+
    `<div class="row2">${fld("o-v","Valor (€)",inp("o-v","valor",o?o.valor:"","number",'min="0" step="1" required '+ro))}${fld("o-e","Etapa",`<select id="o-e" name="etapa" ${ro}>${selOpts(et,o?o.etapa:et[0])}</select>`)}</div>`+
    fld("o-n","Notas",`<textarea id="o-n" name="notas" ${ro}>${esc(o&&o.notas)}</textarea>`)+
    (o?`<p class="help" style="color:var(--muted);font-size:13px;margin:0">Última actualización: ${rel(o.actualizado)}</p>`:""),
    canEdit()?`${d?d.html:'<button type="button" class="btn ghost" data-close>Cancelar</button>'}<button class="btn" type="submit">${o?"Guardar cambios":"Crear oportunidad"}</button>`:`<button type="button" class="btn sec" data-close>Cerrar</button>`,
    async fd=>{ if(!canEdit()) return; await save("oportunidades",o?o.id:uid("o"),{sub:s.id,titulo:fd.titulo.trim(),contactoId:fd.contactoId,valor:Math.max(0,Math.round(+fd.valor||0)),etapa:fd.etapa,notas:fd.notas,creado:o?o.creado:nowISO(),actualizado:nowISO()}); toast(o?"Cambios guardados":"Oportunidad creada"); });
  if(d) d.wire();
}

function drawerConv(){
  const s=sub(), cs=of("contactos",s.id).sort((a,b)=>String(a.nombre).localeCompare(b.nombre,"es"));
  if(!cs.length){ openDrawer("Primero, un <span class=\"m\">contacto.</span>",`<p class="lead" style="margin:0">Necesitas al menos un contacto para empezar una conversación.</p>`,`<button type="button" class="btn ghost" data-close>Cancelar</button><button type="button" class="btn" id="to-c">Crear contacto</button>`,async()=>{}); $("#to-c").addEventListener("click",()=>drawerContact(null)); return; }
  openDrawer("Nueva <span class=\"m\">conversación.</span>",
    fld("v-c","Contacto",`<select id="v-c" name="contactoId">${selOpts(cs.map(c=>[c.id,c.nombre]))}</select>`)+
    fld("v-ca","Canal",`<select id="v-ca" name="canal">${selOpts(CANALES,"WhatsApp")}</select>`)+
    fld("v-m","Primer mensaje",`<textarea id="v-m" name="texto" required placeholder="Hola, soy Alba de Mrs. Pink Agency…"></textarea>`,"Queda registrado en el historial."),
    `<button type="button" class="btn ghost" data-close>Cancelar</button><button class="btn" type="submit">Registrar mensaje</button>`,
    async fd=>{ const ex=S.data.conversaciones.find(v=>v.contactoId===fd.contactoId); const m={de:"out",texto:fd.texto.trim(),canal:fd.canal,t:nowISO()};
      if(ex){ await save("conversaciones",ex.id,Object.assign({},ex,{mensajes:[...(ex.mensajes||[]),m],canal:fd.canal,actualizado:m.t})); S.convSel=ex.id; }
      else { const id=uid("v"); await save("conversaciones",id,{sub:s.id,contactoId:fd.contactoId,canal:fd.canal,mensajes:[m],noLeido:false,actualizado:m.t}); S.convSel=id; }
      render(); toast("Mensaje registrado"); });
}

function drawerCamp(id){
  const c=id?S.data.campanas.find(x=>x.id===id):null, s=sub();
  const tags=[...new Set(of("contactos",s.id).flatMap(x=>x.etiquetas||[]))].sort();
  const audienciaN=t=>of("contactos",s.id).filter(x=>!t||(x.etiquetas||[]).includes(t)).length;
  const d = c && canEdit() ? delBtn(async()=>{ await remove("campanas",c.id); toast("Campaña borrada"); }) : null;
  const ro=!canEdit()?"disabled":"";
  const fechaVal=c&&c.fecha?c.fecha.slice(0,10):new Date().toISOString().slice(0,10);
  openDrawer(c?esc(c.nombre):"Nueva <span class=\"m\">campaña.</span>",
    fld("k-n","Nombre",inp("k-n","nombre",c&&c.nombre,"text","required "+ro+' placeholder="Ej.: Revisión de otoño"'))+
    `<div class="row2">${fld("k-t","Tipo",`<select id="k-t" name="tipo" ${ro}>${selOpts(TIPOS_CAMP,c?c.tipo:"Email")}</select>`)}${fld("k-e","Estado",`<select id="k-e" name="estado" ${ro}>${selOpts(ESTADOS_CAMP,c?c.estado:"Borrador")}</select>`)}</div>`+
    `<div class="row2">${fld("k-a","Audiencia",`<select id="k-a" name="audiencia" ${ro}>${selOpts([["","Todos ("+audienciaN("")+")"],...tags.map(t=>[t,t+" ("+audienciaN(t)+")"])],c?c.audiencia:"")}</select>`)}${fld("k-f","Fecha",inp("k-f","fecha",fechaVal,"date",ro))}</div>`+
    fld("k-as","Asunto o primera línea",inp("k-as","asunto",c&&c.asunto,"text",ro))+
    fld("k-m","Mensaje",`<textarea id="k-m" name="mensaje" ${ro}>${esc(c&&c.mensaje)}</textarea>`)+
    (c?`<p class="section-t">Resultados</p><div class="row2">${fld("k-env","Enviados",inp("k-env","enviados",c.enviados||0,"number",'min="0" '+ro))}${fld("k-ap","Aperturas",inp("k-ap","aperturas",c.aperturas||0,"number",'min="0" '+ro))}</div>${fld("k-cl","Clics",inp("k-cl","clics",c.clics||0,"number",'min="0" '+ro),"Apúntalos aquí hasta que conectes tu herramienta de envío.")}`:""),
    canEdit()?`${d?d.html:'<button type="button" class="btn ghost" data-close>Cancelar</button>'}<button class="btn" type="submit">${c?"Guardar cambios":"Crear campaña"}</button>`:`<button type="button" class="btn sec" data-close>Cerrar</button>`,
    async fd=>{ if(!canEdit()) return;
      let env=c?Math.max(0,+fd.enviados||0):0;
      if(fd.estado==="Enviada" && !env) env=audienciaN(fd.audiencia);
      await save("campanas",c?c.id:uid("k"),{sub:s.id,nombre:fd.nombre.trim(),tipo:fd.tipo,estado:fd.estado,audiencia:fd.audiencia,fecha:fd.fecha?new Date(fd.fecha+"T09:00:00").toISOString():nowISO(),asunto:fd.asunto,mensaje:fd.mensaje,enviados:env,aperturas:c?Math.max(0,+fd.aperturas||0):0,clics:c?Math.max(0,+fd.clics||0):0});
      toast(c?"Cambios guardados":"Campaña creada"); });
  if(d) d.wire();
}

/* ---------- Eventos ---------- */
document.addEventListener("click",async e=>{
  const t=e.target.closest("button,[data-go-sub],[data-go-integ],[data-ads],[data-user],[data-flow],[data-fun],[data-contact],[data-opp],[data-camp],[data-close]");
  if(e.target.closest("[data-close]")){ closeDrawer(); return; }
  if(!t){ if(S.menu){ S.menu=false; renderSide(); } return; }
  if(t.id==="switch-btn"){ S.menu=!S.menu; renderSide(); return; }
  if(S.menu && !t.closest(".switch-menu")){ S.menu=false; renderSide(); }
  if(t.hasAttribute("data-go-agencia")){ leaveEditors(); S.view="agencia"; S.subId=null; S.menu=false; rememberNav(); render(); return; }
  if(t.dataset.goSub){ leaveEditors(); S.view="sub"; S.subId=t.dataset.goSub; S.tab=t.dataset.goTab||"contactos"; S.q=""; S.tag=""; S.convSel=null; S.menu=false; rememberNav(); render(); window.scrollTo(0,0); return; }
  if(t.dataset.follow){ leaveEditors(); const [kind,id,sid]=t.dataset.follow.split(":"); S.view="sub"; S.subId=sid; rememberNav();
    if(kind==="conv"){ S.tab="conversaciones"; S.convSel=id; render(); }
    else { render(); if(kind==="contact") drawerContact(id); else drawerOpp(id); }
    return; }
  if(t.hasAttribute("data-exportar")){ const blob=new Blob([JSON.stringify(S.data,null,1)],{type:"application/json"}); const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="mrs-pink-crm-datos-"+ymd(new Date())+".json"; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href),2000); toast("Datos exportados"); return; }
  if(t.hasAttribute("data-importar-datos")){ const i=$("#imp-datos"); if(i) i.click(); return; }
  if(t.id==="reset-datos"){ if(!t.classList.contains("armed")){ t.classList.add("armed"); t.textContent="Toca otra vez: se borran tus cambios"; return; } try{ localStorage.removeItem(LS_KEY); }catch(e){} const L=localLoad(); COLS.forEach(c=>S.data[c]=Array.isArray(L[c])?L[c]:[]); leaveEditors(); S.view="agencia"; S.atab="subcuentas"; S.verComo=null; render(); toast("Datos de ejemplo restaurados"); return; }
  if(t.dataset.merge){ const ta=document.getElementById(t.dataset.target); if(ta){ const a=ta.selectionStart??ta.value.length, b=ta.selectionEnd??a; ta.value=ta.value.slice(0,a)+t.dataset.merge+ta.value.slice(b); ta.focus(); ta.setSelectionRange(a+t.dataset.merge.length,a+t.dataset.merge.length); ta.dispatchEvent(new Event("input",{bubbles:true})); } return; }
  if(t.dataset.autotab){ S.autoTab=t.dataset.autotab; renderMain(); return; }
  if(t.hasAttribute("data-new-flow")){ startFlow(newFlowDoc("Flujo sin nombre")); return; }
  if(t.dataset.flow){ openFlow(t.dataset.flow); return; }
  if(t.hasAttribute("data-flow-back")){ leaveEditors(); renderMain(); return; }
  if(t.dataset.fins && S.flow){ const [ap,i]=t.dataset.fins.split(":"); drawerPickNode(ap,+i); return; }
  if(t.dataset.pick && S.flow){ closeDrawer(); insertNode(t.dataset.pick); return; }
  if(t.hasAttribute("data-add-trig")){ drawerPickTrig(); return; }
  if(t.dataset.pickTrig && S.flow){ closeDrawer(); const n=nodeN(t.dataset.pickTrig); S.flow.d.disparadores=(S.flow.d.disparadores||[]).concat([n]); flowChange(true); renderMain(); if(CAT[n.tipo].f.length) drawerNode("trig",String(S.flow.d.disparadores.length-1)); return; }
  if(t.dataset.fnode && S.flow){ drawerNode("node",t.dataset.fnode); return; }
  if(t.dataset.ftrig!==undefined && S.flow && t.hasAttribute("data-ftrig")){ drawerNode("trig",t.dataset.ftrig); return; }
  if(t.dataset.flowEstado && S.flow){ S.flow.d.estado=t.dataset.flowEstado; flowChange(true); renderMain(); toast({publicado:"Flujo publicado",pausado:"Flujo pausado"}[t.dataset.flowEstado]||"Estado actualizado"); return; }
  if(t.hasAttribute("data-flow-test") && S.flow){ drawerTest(); return; }
  if(t.hasAttribute("data-flow-ajustes") && S.flow){ drawerFlowAjustes(); return; }
  if(t.id==="flow-del" && S.flow){ if(!t.classList.contains("armed")){ t.classList.add("armed"); t.textContent="Toca otra vez para borrar"; return; } const id=S.flow.id; clearTimeout((AS.flow||{}).t); S.flow=null; try{ await remove("flujos",id); toast("Flujo borrado"); }catch(err){} renderMain(); return; }
  if(t.hasAttribute("data-new-fun")){ S.autoTab="embudos"; const d=newFunDoc(); S.fun={id:uid("fu"),sub:S.subId,d,sel:0,rev:0,dirty:true,nuevo:true}; flush("fun",saveFun).then(()=>renderMain()); renderMain(); window.scrollTo(0,0); return; }
  if(t.dataset.fun){ openFun(t.dataset.fun); return; }
  if(t.dataset.fstep!==undefined && S.fun && t.hasAttribute("data-fstep")){ S.fun.sel=+t.dataset.fstep; if(S.fun.dirty) flush("fun",saveFun); renderMain(); return; }
  if(t.hasAttribute("data-add-step") && S.fun){ drawerAddPaso(); return; }
  if(t.dataset.pickStep && S.fun){ closeDrawer(); S.fun.d.pasos.push(newPaso(t.dataset.pickStep)); S.fun.sel=S.fun.d.pasos.length-1; funChange(true); renderMain(); return; }
  if(t.dataset.stepMove && S.fun){ const ps=S.fun.d.pasos, i=S.fun.sel, j=i+(+t.dataset.stepMove); if(j<0||j>=ps.length) return; [ps[i],ps[j]]=[ps[j],ps[i]]; S.fun.sel=j; funChange(true); renderMain(); return; }
  if(t.id==="step-del" && S.fun){ if(!t.classList.contains("armed")){ t.classList.add("armed"); t.textContent="Toca otra vez para borrar"; return; } S.fun.d.pasos.splice(S.fun.sel,1); S.fun.sel=Math.max(0,S.fun.sel-1); funChange(true); renderMain(); toast("Paso borrado"); return; }
  if(t.dataset.pcampo && S.fun){ const p=S.fun.d.pasos[S.fun.sel], k=t.dataset.pcampo, arr=(p.campos||[]).slice(), i=arr.indexOf(k); if(i>=0) arr.splice(i,1); else arr.push(k); p.campos=arr; t.setAttribute("aria-pressed",String(i<0)); funChange(); funLive(); return; }
  if(t.hasAttribute("data-fun-ajustes") && S.fun){ drawerFunAjustes(); return; }
  if(t.dataset.funEstado && S.fun){ S.fun.d.estado=t.dataset.funEstado; funChange(true); renderMain(); toast(t.dataset.funEstado==="publicado"?"Embudo marcado como publicado":"Embudo en borrador"); return; }
  if(t.id==="fun-del" && S.fun){ if(!t.classList.contains("armed")){ t.classList.add("armed"); t.textContent="Toca otra vez para borrar"; return; } const id=S.fun.id; clearTimeout((AS.fun||{}).t); S.fun=null; try{ await remove("embudos",id); toast("Embudo borrado"); }catch(err){} renderMain(); return; }
  if(t.hasAttribute("data-step-flow") && S.fun){ const F=S.fun, p=F.d.pasos[F.sel]; await flush("fun",saveFun); const d=Object.assign(newFlowDoc("Respuesta a "+p.nombre.toLowerCase()+" · "+F.d.nombre),{disparadores:[nodeN("t_formulario",{formulario:F.id+"/"+p.id})],pasos:[nodeN("a_whatsapp",{plantilla:"bienvenida_lead",cuerpo:"Hola {{contacto.nombre}}, hemos recibido tus datos. Te llamamos hoy."}),nodeN("a_aviso",{cuerpo:"Nuevo contacto desde "+F.d.nombre+": {{contacto.nombre}}"})]}); S.fun=null; startFlow(d); toast("Flujo creado"); return; }
  if(t.dataset.receta){ useReceta(t.dataset.receta); return; }
  if(t.dataset.verComo){ leaveEditors(); S.verComo=t.dataset.verComo; S.menu=false; const u=usuario(S.verComo); if(u&&u.rol==="admin"){ S.view="agencia"; S.atab="subcuentas"; } render(); window.scrollTo(0,0); toast("Vista previa como "+(u?u.nombre:"")); return; }
  if(t.hasAttribute("data-salir-vc")){ leaveEditors(); S.verComo=null; S.view="agencia"; S.atab="equipo"; render(); window.scrollTo(0,0); return; }
  if(t.hasAttribute("data-new-user")){ drawerUser(null,t.dataset.newUser||null); return; }
  if(t.dataset.user){ drawerUser(t.dataset.user); return; }
  if(t.dataset.newAds){ leaveEditors(); newCamp(t.dataset.newAds); return; }
  if(t.dataset.ads){ openCamp(t.dataset.ads); return; }
  if(t.hasAttribute("data-ads-back")){ leaveEditors(); renderMain(); return; }
  if(t.dataset.step!==undefined && S.camp){ S.camp.step=+t.dataset.step; if(S.camp.dirty) flush("camp",saveCamp); renderMain(); window.scrollTo(0,0); return; }
  if(t.dataset.setF && S.camp){ setPath(S.camp.d,t.dataset.setF,t.dataset.v); campTouch(); renderMain(); return; }
  if(t.dataset.addRow && S.camp){ const p=t.dataset.addRow, arr=(getPath(S.camp.d,p)||[]).slice(); arr.push(p==="kw"?{t:"",m:"frase"}:""); setPath(S.camp.d,p,arr); campTouch(); renderMain();
    const n=document.getElementById(p==="kw"?`f-kw-${arr.length-1}-t`:fid(p+"."+(arr.length-1))); if(n) n.focus(); return; }
  if(t.dataset.delRow && S.camp){ const parts=t.dataset.delRow.split("."), i=+parts.pop(), arr=(getPath(S.camp.d,parts.join("."))||[]).slice(); arr.splice(i,1); setPath(S.camp.d,parts.join("."),arr); campTouch(); renderMain(); return; }
  if(t.dataset.adsEstado && S.camp){ const st=t.dataset.adsEstado; S.camp.d.estado=st; if(st==="cola") S.camp.d.enviadaEn=nowISO(); campTouch(); await flush("camp",saveCamp); renderMain();
    toast({lista:"Marcada como lista para publicar",cola:"Enviada a publicar",borrador:"Vuelve a ser un borrador"}[st]||"Estado actualizado"); return; }
  if(t.hasAttribute("data-ads-dup") && S.camp){ if(S.camp.dirty) await flush("camp",saveCamp); const d=clone(S.camp.d); d.nombre=(d.nombre||"Campaña")+" (copia)"; d.estado="borrador"; ["externalId","error","enviadaEn"].forEach(k=>delete d[k]); d.creado=nowISO();
    S.camp={id:uid("ad"),sub:S.subId,d,step:0,rev:0,dirty:false,nuevo:true}; campTouch(); await flush("camp",saveCamp); renderMain(); toast("Campaña duplicada"); return; }
  if(t.id==="ads-del" && S.camp){ if(!t.classList.contains("armed")){ t.classList.add("armed"); t.textContent="Toca otra vez para borrar"; return; }
    const id=S.camp.id; clearTimeout((AS.camp||{}).t); S.camp=null; try{ await remove("campanasAds",id); toast("Campaña borrada"); }catch(err){} renderMain(); return; }
  if(t.hasAttribute("data-ads-filtro")){ S.adsFiltro=t.dataset.adsFiltro; renderMain(); return; }
  if(t.dataset.bsec){ if(S.brief) S.brief.sec=t.dataset.bsec; if(S.brief&&S.brief.dirty) flush("brief",saveBrief); if(S.subDraft) flush("sub",saveSubDraft); renderMain(); window.scrollTo(0,0); return; }
  if(t.dataset.chipB && S.brief){ const k=t.dataset.chipB, v=t.dataset.v, arr=Array.isArray(S.brief.campos[k])?S.brief.campos[k].slice():[], i=arr.indexOf(v);
    if(i>=0) arr.splice(i,1); else arr.push(v); S.brief.campos[k]=arr; t.setAttribute("aria-pressed",String(i<0)); briefTouch(); return; }
  if(t.hasAttribute("data-brief-copy")){ drawerBriefCopy(); return; }
  if(t.dataset.atab){ S.atab=t.dataset.atab; rememberNav(); renderMain(); renderSide(); return; }
  if(t.dataset.periodo){ S.periodo=+t.dataset.periodo; rememberNav(); renderMain(); return; }
  if(t.dataset.goInteg){ leaveEditors(); S.view="sub"; S.subId=t.dataset.goInteg; S.tab="integraciones"; S.menu=false; rememberNav(); render(); window.scrollTo(0,0); return; }
  if(t.dataset.connect){ drawerConnect(t.dataset.connect); return; }
  if(t.dataset.disconnect){ drawerDisconnect(t.dataset.disconnect); return; }
  if(t.dataset.importar!==undefined && t.hasAttribute("data-importar")){ drawerImport(t.dataset.importar); return; }
  if(t.dataset.goConv){ S.tab="conversaciones"; S.convSel=t.dataset.goConv; rememberNav(); render(); return; }
  if(t.dataset.tab){ leaveEditors(); S.tab=t.dataset.tab; S.q=""; S.tag=""; rememberNav(); renderMain(); renderSide(); return; }
  if(t.dataset.tag!==undefined && t.classList.contains("chip")){ S.tag=t.dataset.tag; renderMain(); return; }
  if(t.hasAttribute("data-new-sub")){ drawerSub(); return; }
  if(t.hasAttribute("data-new-contact")){ drawerContact(null); return; }
  if(t.hasAttribute("data-new-opp")){ drawerOpp(null); return; }
  if(t.hasAttribute("data-new-conv")){ drawerConv(); return; }
  if(t.hasAttribute("data-new-camp")){ drawerCamp(null); return; }
  if(t.dataset.contact){ drawerContact(t.dataset.contact); return; }
  if(t.dataset.opp){ drawerOpp(t.dataset.opp); return; }
  if(t.dataset.camp){ drawerCamp(t.dataset.camp); return; }
  if(t.dataset.conv){ S.convSel=t.dataset.conv; S.draft=""; const c=S.data.conversaciones.find(x=>x.id===S.convSel); S.draftCanal=c?c.canal:"WhatsApp"; renderMain();
    if(c&&c.noLeido&&canEdit()) save("conversaciones",c.id,Object.assign({},c,{noLeido:false})).then(renderSide).catch(()=>{}); return; }
  if(t.dataset.read){ const c=S.data.conversaciones.find(x=>x.id===t.dataset.read); if(c) await save("conversaciones",c.id,Object.assign({},c,{noLeido:false})); return; }
});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){ if($("#drawer").innerHTML) closeDrawer(); else if(S.menu){ S.menu=false; renderSide(); } }
  if((e.key==="Enter"||e.key===" ") && e.target.dataset && e.target.dataset.camp){ e.preventDefault(); drawerCamp(e.target.dataset.camp); }
});
function onField(e){
  const el=e.target; if(!el||!el.dataset) return;
  const val=el.type==="checkbox"?el.checked:el.type==="number"?(el.value===""?"":+el.value):el.value;
  if(el.dataset.fname==="flow" && S.flow){ S.flow.d.nombre=val; flowChange(); return; }
  if(el.dataset.fname==="fun" && S.fun){ S.fun.d.nombre=val; funChange(); return; }
  if(el.dataset.pf && S.fun){ const p=S.fun.d.pasos[S.fun.sel]; if(!p) return; p[el.dataset.pf]=val; funChange(); funLive(); return; }
  if(el.dataset.f && S.camp){ setPath(S.camp.d,el.dataset.f,val); campTouch(); if(el.hasAttribute("data-struct")) renderMain(); else campLive(); return; }
  if(el.dataset.b && S.brief){ S.brief.campos[el.dataset.b]=val; briefTouch(); return; }
  if(el.dataset.bchk && S.brief){ const k=el.dataset.bchk, o=Object.assign({},S.brief.campos[k]||{}); o[el.dataset.v]=el.checked; S.brief.campos[k]=o; briefTouch(); return; }
  if(el.dataset.s){ const sb=sub(); if(!sb) return; if(!S.subDraft||S.subDraft.id!==sb.id) S.subDraft={id:sb.id,nombre:sb.nombre,sector:sb.sector||"",email:sb.email||""}; S.subDraft[el.dataset.s]=val; autosave("sub",saveSubDraft); }
}
document.addEventListener("change",e=>{ if(e.target.id==="imp-datos"){ const f=e.target.files&&e.target.files[0]; if(!f) return; const rd=new FileReader(); rd.onload=()=>{ try{ const L=JSON.parse(rd.result); if(!L||!Array.isArray(L.subcuentas)) throw 0; COLS.forEach(c=>S.data[c]=Array.isArray(L[c])?L[c]:[]); localSave(); leaveEditors(); S.view="agencia"; S.atab="subcuentas"; render(); toast("Datos importados"); }catch(err){ toast("Ese archivo no es una copia del CRM."); } }; rd.readAsText(f); return; } });
document.addEventListener("change",e=>{ const el=e.target; if(el && (el.tagName==="SELECT"||el.type==="checkbox"||el.type==="date")) onField(e); });
document.addEventListener("input",e=>{
  onField(e);
  if(e.target.id==="q"){ S.q=e.target.value; renderMain(); }
  if(e.target.id==="draft"){ S.draft=e.target.value; }
  if(e.target.id==="canal"){ S.draftCanal=e.target.value; }
});
document.addEventListener("submit",async e=>{
  if(e.target.id!=="composer") return;
  e.preventDefault();
  const txt=S.draft.trim(); if(!txt) return;
  const c=S.data.conversaciones.find(x=>x.id===S.convSel); if(!c) return;
  const canal=$("#canal").value, m={de:"out",texto:txt,canal,t:nowISO()};
  S.draft="";
  try{ await save("conversaciones",c.id,Object.assign({},c,{mensajes:[...(c.mensajes||[]),m].slice(-200),canal,noLeido:false,actualizado:m.t})); toast("Mensaje registrado"); }
  catch(err){ S.draft=txt; renderMain(); }
});
document.addEventListener("keydown",e=>{ if(e.target.id==="draft" && e.key==="Enter" && (e.metaKey||e.ctrlKey)){ e.preventDefault(); $("#composer").requestSubmit(); } });

render();
connect();
})();
