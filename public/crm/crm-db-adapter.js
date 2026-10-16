/* Mrs. Pink CRM — adaptador de datos.
   Expone window.MPDB con la MISMA interfaz que consumía el prototipo
   (collection(col).doc(id).set/delete, collection(col).onSnapshot),
   pero respaldado por la API de Next.js sobre Neon.
   Estrategia: bootstrap (GET /api/data) + polling ligero + escrituras optimistas.
   localStorage se usa como cache offline de respaldo. */
(function () {
  "use strict";

  var COLS = ["subcuentas","contactos","oportunidades","conversaciones","campanas","integraciones","anuncios","campanasAds","briefs","usuarios","flujos","embudos"];
  var LS_KEY = "mp-crm-datos-v1";
  var POLL_MS = 8000;

  var state = {};        // { col: [docs] }
  var subs = {};         // { col: [cb,...] }
  COLS.forEach(function (c) { state[c] = []; subs[c] = []; });

  function snapshotOf(col) {
    var docs = (state[col] || []).map(function (d) {
      return { id: d.id, data: function () { return d; } };
    });
    return { docs: docs };
  }
  function emit(col) {
    (subs[col] || []).forEach(function (cb) {
      try { cb(snapshotOf(col)); } catch (e) { /* noop */ }
    });
  }
  function emitAll() { COLS.forEach(emit); }

  function cacheToLS() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {}
  }
  function loadLSCache() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      if (!raw) return false;
      var parsed = JSON.parse(raw);
      COLS.forEach(function (c) { state[c] = Array.isArray(parsed[c]) ? parsed[c] : []; });
      return true;
    } catch (e) { return false; }
  }

  async function fetchAll() {
    var res = await fetch("/api/data", { headers: { Accept: "application/json" }, credentials: "same-origin" });
    if (res.status === 401) { var e = new Error("unauthorized"); e.code = "unauthorized"; throw e; }
    if (!res.ok) throw new Error("fetch /api/data failed: " + res.status);
    var json = await res.json();
    COLS.forEach(function (c) { state[c] = Array.isArray(json[c]) ? json[c] : []; });
    cacheToLS();
  }

  var polling = false;
  function startPolling() {
    if (polling) return;
    polling = true;
    setInterval(async function () {
      try { await fetchAll(); emitAll(); } catch (e) { /* mantener últimos datos */ }
    }, POLL_MS);
  }

  function upsertLocal(col, id, body) {
    var arr = state[col] || (state[col] = []);
    var i = arr.findIndex(function (x) { return x.id === id; });
    if (i >= 0) arr[i] = body; else arr.push(body);
  }
  function removeLocal(col, id) {
    state[col] = (state[col] || []).filter(function (x) { return x.id !== id; });
  }

  function docRef(col, id) {
    return {
      set: async function (body) {
        upsertLocal(col, id, body);  // optimista
        emit(col);
        cacheToLS();
        var res = await fetch("/api/data/" + encodeURIComponent(col) + "/" + encodeURIComponent(id), {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "same-origin",
          body: JSON.stringify(body),
        });
        if (!res.ok) { var e = new Error("save failed"); e.code = res.status === 401 ? "invalid_argument" : "save_failed"; throw e; }
      },
      delete: async function () {
        removeLocal(col, id);        // optimista
        emit(col);
        cacheToLS();
        var res = await fetch("/api/data/" + encodeURIComponent(col) + "/" + encodeURIComponent(id), {
          method: "DELETE",
          credentials: "same-origin",
        });
        if (!res.ok) { var e = new Error("delete failed"); e.code = "save_failed"; throw e; }
      },
    };
  }

  function collection(col) {
    return {
      doc: function (id) { return docRef(col, id); },
      onSnapshot: function (cb, errcb) {
        subs[col] = subs[col] || [];
        subs[col].push(cb);
        // Entrega inmediata de lo que ya tengamos en memoria.
        try { cb(snapshotOf(col)); } catch (e) { if (errcb) errcb(e); }
        return function unsubscribe() {
          subs[col] = subs[col].filter(function (f) { return f !== cb; });
        };
      },
    };
  }

  var dbLike = { collection: collection };

  window.MPDB = {
    connect: async function () {
      try {
        await fetchAll();
        startPolling();
        return dbLike;
      } catch (e) {
        if (e && e.code === "unauthorized") return null; // sin sesión → el CRM mostrará login/demo
        // Sin red: si hay cache local, trabajamos offline con ella.
        if (loadLSCache()) { startPolling(); return dbLike; }
        return null;
      }
    },
    me: async function () {
      try {
        var res = await fetch("/api/me", { credentials: "same-origin" });
        if (!res.ok) return { canWrite: true };
        return await res.json();
      } catch (e) { return { canWrite: true }; }
    },
  };
})();
