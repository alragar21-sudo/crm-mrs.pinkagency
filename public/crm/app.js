(function(){
"use strict";
/* ---------- Idioma ---------- */
let LANG=(()=>{ try{ const l=localStorage.getItem("mp-lang"); return l==="en"?"en":"es"; }catch(e){ return "es"; } })();
let LOC=LANG==="en"?"en-GB":"es-ES";
const EN_DICT={"Agencia": "Agency", "Vista de agencia": "Agency view", "Cuenta": "Account", "Subcuenta": "Sub-account", "Subcuentas": "Sub-accounts", "Contactos": "Contacts", "Oportunidades": "Opportunities", "Conversaciones": "Conversations", "Campañas": "Campaigns", "Automatizaciones": "Automations", "Informes": "Reports", "Integraciones": "Integrations", "Configuración": "Settings", "Equipo": "Team", "Cabeza fría. Marcas que arden.": "Cool head. Brands on fire.", "Aún no hay subcuentas.": "No sub-accounts yet.", "Cargando": "Loading", "Abriendo tu": "Opening your", "Un segundo, estamos trayendo tus cuentas.": "One second, we're fetching your accounts.", "Cargando subcuentas…": "Loading sub-accounts…", "Modo prueba.": "Test mode.", "Este navegador no puede guardar datos del CRM: lo que hagas aquí se pierde al recargar.": "This browser can't save CRM data: anything you do here is lost when you reload.", "Solo lectura.": "Read only.", "Solo lectura": "Read only", "Puedes consultar el CRM, pero no cambiar datos.": "You can look around the CRM, but not change data.", "Versión local.": "Local version.", "Los datos se guardan en este navegador. Exporta una copia de vez en cuando.": "Data is saved in this browser. Export a copy every now and then.", "Exportar datos": "Export data", "Importar": "Import", "Volver a los datos de ejemplo": "Restore the sample data", "Toca otra vez: se borran tus cambios": "Tap again: your changes will be erased", "Datos exportados": "Data exported", "Datos importados": "Data imported", "Datos de ejemplo restaurados": "Sample data restored", "Ese archivo no es una copia del CRM.": "That file isn't a CRM copy.", "No se ha podido guardar en este navegador.": "Couldn't save in this browser.", "Tus": "Your", "Tu": "Your", "cuentas.": "accounts.", "contactos.": "contacts.", "conversaciones.": "conversations.", "envíos.": "sends.", "Tus campañas de": "Your ad", "anuncios.": "campaigns.", "Que trabaje": "Let it run", "sola.": "on its own.", "Los números de": "The numbers for", "todas.": "all of them.", "números.": "numbers.", "integraciones.": "integrations.", "conexiones.": "connections.", "Conoce a tu": "Get to know your", "cliente.": "client.", "equipo.": "team.", "Sin": "No", "acceso.": "access.", "Nueva": "New", "Nuevo": "New", "subcuenta.": "sub-account.", "contacto.": "contact.", "oportunidad.": "opportunity.", "conversación.": "conversation.", "campaña.": "campaign.", "Primero, un": "First, a", "Invitar": "Invite", "persona.": "someone.", "Añadir": "Add", "paso.": "step.", "disparador.": "trigger.", "Copiar": "Copy", "Probar con un": "Test with a", "Ajustes del": "Settings for this", "flujo.": "flow.", "embudo.": "funnel.", "datos.": "data.", "Conectar": "Connect", "Desconectar": "Disconnect", "Todas tus subcuentas de un vistazo. Entra en una para trabajar sus contactos, su pipeline y sus campañas.": "All your sub-accounts at a glance. Open one to work on its contacts, pipeline and campaigns.", "Nueva subcuenta": "New sub-account", "Crear subcuenta": "Create sub-account", "Cada cliente tiene su propia subcuenta con contactos, oportunidades, conversaciones y marketing. Empieza por la tuya o por tu primer cliente.": "Each client gets their own sub-account with contacts, opportunities, conversations and marketing. Start with yours or your first client.", "{n} de clientes": "{n} are clients", "en todas las cuentas": "across all accounts", "Pipeline abierto": "Open pipeline", "{n} ya ganado": "{n} already won", "Sin responder": "Unanswered", "conversaciones": "conversations", "Tipo": "Type", "Ganado": "Won", "Entrar": "Open", "Tu agencia": "Your agency", "Ejemplo": "Example", "Cliente": "Client", "Sin sector": "No industry", "Nombre del cliente": "Client name", "Sector": "Industry", "Email de contacto": "Contact email", "Ej.: Clínica dental, restauración…": "E.g. dental clinic, restaurant…", "Cliente: Nuevo → Contactado → Propuesta → Negociación → Ganado": "Client: New → Contacted → Proposal → Negotiation → Won", "Agencia: Lead → El Desayuno → Propuesta → Cliente": "Agency: Lead → El Desayuno → Proposal → Client", "Podrás usar las mismas etapas para todos tus clientes.": "You can use the same stages for all your clients.", "Subcuenta creada. Empieza por el brief del cliente.": "Sub-account created. Start with the client brief.", "Contactado": "Contacted", "Propuesta": "Proposal", "Negociación": "Negotiation", "Perdido": "Lost", "El Desayuno reservado": "El Desayuno booked", "Propuesta enviada": "Proposal sent", "Formulario web": "Web form", "Referido": "Referral", "Sin origen": "No source", "sin fuente": "no source", "{n} contactos": "{n} contacts", "Nuevo contacto": "New contact", "Crear contacto": "Create contact", "Nombre": "Name", "Contacto": "Contact", "Etiquetas": "Tags", "Fuente": "Source", "Alta": "Added", "Busca por nombre, email, teléfono o empresa": "Search by name, email, phone or company", "Buscar contactos": "Search contacts", "Todos": "All", "Nada por aquí.": "Nothing here.", "Ningún contacto coincide con la búsqueda.": "No contact matches your search.", "Sin contactos todavía.": "No contacts yet.", "Añade el primero a mano. Cuando conectes formularios o anuncios, entrarán aquí solos.": "Add the first one by hand. Once you connect forms or ads, they'll land here on their own.", "Teléfono": "Phone", "Empresa": "Company", "Separa con comas: vip, implantes": "Separate with commas: vip, implants", "Notas": "Notes", "Ninguna todavía.": "None yet.", "Abrir conversación": "Open conversation", "Empezar conversación": "Start conversation", "Guardar cambios": "Save changes", "Cancelar": "Cancel", "Borrar": "Delete", "Cerrar": "Close", "Toca otra vez para borrar": "Tap again to delete", "Cambios guardados": "Changes saved", "Contacto creado": "Contact created", "Contacto borrado": "Contact deleted", "contacto borrado": "deleted contact", "Arrastra cada tarjeta a su etapa. Toca una para editarla.": "Drag each card to its stage. Tap one to edit it.", "Nueva oportunidad": "New opportunity", "Crear oportunidad": "Create opportunity", "{n} abierto": "{n} open", "Arrastra aquí": "Drop here", "Sin contacto": "No contact", "Título": "Headline", "Valor (€)": "Value (€)", "Etapa": "Stage", "Ej.: Tratamiento de ortodoncia": "E.g. orthodontic treatment", "Última actualización:": "Last updated:", "Movida a": "Moved to", "Cada oportunidad va unida a un contacto. Crea uno y vuelve aquí.": "Every opportunity belongs to a contact. Create one and come back.", "Oportunidad creada": "Opportunity created", "Oportunidad borrada": "Opportunity deleted", "Email, WhatsApp, SMS e Instagram en una sola bandeja.": "Email, WhatsApp, SMS and Instagram in one inbox.", "Bandeja vacía.": "Empty inbox.", "Empieza una conversación con cualquiera de tus contactos.": "Start a conversation with any of your contacts.", "Nueva conversación": "New conversation", "Sin mensajes": "No messages", "Sin mensajes todavía.": "No messages yet.", "Tú:": "You:", "Marcar como leída": "Mark as read", "Ver ficha": "View profile", "Canal": "Channel", "Respuesta": "Reply", "Escribe tu respuesta…": "Write your reply…", "Registrar mensaje": "Log message", "Mensaje registrado": "Message logged", "Sin leer": "Unread", "El mensaje queda en el historial. El envío real llegará cuando conectes cada canal.": "The message is logged in the history. Real sending arrives when you connect each channel.", "Necesitas al menos un contacto para empezar una conversación.": "You need at least one contact to start a conversation.", "Primer mensaje": "First message", "Queda registrado en el historial.": "It's logged in the history.", "Hola, soy Alba de Mrs. Pink Agency…": "Hi, I'm Alba from Mrs. Pink Agency…", "Email, SMS y WhatsApp a tus contactos, filtrados por etiqueta.": "Email, SMS and WhatsApp to your contacts, filtered by tag.", "Nueva campaña": "New campaign", "Crear campaña": "Create campaign", "{n} enviadas": "{n} sent", "Mensajes enviados": "Messages sent", "en total": "in total", "Apertura media": "Avg. open rate", "de lo enviado": "of what was sent", "Clic medio": "Avg. click rate", "Enviados": "Sent", "Aperturas": "Opens", "Clics": "Clicks", "Todos los contactos": "All contacts", "Etiqueta:": "Tag:", "Sin campañas todavía.": "No campaigns yet.", "Prepara un envío para una etiqueta concreta o para todos tus contactos.": "Prepare a send for one tag or for all your contacts.", "Ej.: Revisión de otoño": "E.g. autumn check-up", "Estado": "Status", "Borrador": "Draft", "Programada": "Scheduled", "Enviada": "Sent", "Audiencia": "Audience", "Fecha": "Date", "Asunto o primera línea": "Subject or first line", "Mensaje": "Message", "Resultados": "Results", "Apúntalos aquí hasta que conectes tu herramienta de envío.": "Log them here until you connect your sending tool.", "Campaña creada": "Campaign created", "Campaña borrada": "Campaign deleted", "Todos ({n})": "All ({n})", "Anuncios, leads y cierres del periodo. Primero los datos, después las opiniones.": "Ads, leads and closed deals for the period. Data first, opinions later.", "{n} semanas": "{n} weeks", "Periodo": "Period", "Inversión en anuncios": "Ad spend", "Leads nuevos": "New leads", "{n} de anuncios": "{n} from ads", "Coste por lead": "Cost per lead", "inversión ÷ leads de anuncios": "spend ÷ leads from ads", "{n} cierres · retorno {n}×": "{n} deals · return {n}×", "Leads por semana": "Leads per week", "según el origen del contacto": "by contact source", "Inversión por semana": "Spend per week", "datos de las integraciones": "from integrations", "Aún no hay datos de anuncios.": "No ad data yet.", "Conectar anuncios": "Connect ads", "Sin leads nuevos en este periodo.": "No new leads in this period.", "Otros orígenes": "Other sources", "Por origen": "By source", "de lead a cliente": "from lead to client", "Origen": "Source", "Inversión": "Spend", "Cierres": "Deals", "Valor ganado": "Value won", "Seguimiento": "Follow-up", "{n} pendientes": "{n} pending", "todo al día": "all up to date", "Nadie esperando respuesta. Cabeza fría.": "Nobody waiting for a reply. Cool head.", "Y {n} más.": "And {n} more.", "Embudo": "Funnel", "hasta dónde ha llegado cada contacto": "how far each contact has got", "Campañas de anuncios": "Ad campaigns", "leads según cada plataforma": "leads as reported by each platform", "Plataforma": "Platform", "Campaña": "Campaign", "Impresiones": "Impressions", "Retorno": "Return", "Semana del": "Week of", "Leads por semana y origen": "Leads per week by source", "Inversión semanal por plataforma": "Weekly spend by platform", "Sin responder:": "Unanswered:", "Lead sin contactar:": "Uncontacted lead:", "Oportunidad parada:": "Stalled opportunity:", "Lead sin contactar": "Uncontacted lead", "Oportunidad parada": "Stalled opportunity", "{n} días sin moverse": "{n} days without moving", "entró": "came in", "Ver como": "View as", "Vincula las cuentas de anuncios de este cliente para ver inversión, clics y coste por lead en Informes.": "Link this client's ad accounts to see spend, clicks and cost per lead in Reports.", "Facebook e Instagram Ads: inversión, impresiones, clics y leads de cada campaña.": "Facebook and Instagram Ads: spend, impressions, clicks and leads for each campaign.", "Búsqueda, Performance Max y YouTube: inversión, clics y conversiones.": "Search, Performance Max and YouTube: spend, clicks and conversions.", "Conectada": "Connected", "Revisar conexión": "Check connection", "Sin conectar": "Not connected", "Ninguna cuenta vinculada": "No account linked", "Cuenta sin nombre": "Unnamed account", "Datos al día": "Data up to date", "Sin datos todavía": "No data yet", "{n} campaña": "{n} campaign", "{n} campañas": "{n} campaigns", "campaña": "campaign", "campañas": "campaigns", "Conectar Meta Ads": "Connect Meta Ads", "Conectar Google Ads": "Connect Google Ads", "Reconectar": "Reconnect", "Importar CSV": "Import CSV", "La conexión automática llegará con tu sistema de integración. Mientras tanto, vincula la cuenta y sube el informe semanal en CSV desde el administrador de anuncios.": "Automatic syncing arrives with your integration system. Meanwhile, link the account and upload the weekly CSV report from the ads manager.", "Cómo se conecta": "How it connects", "Token de usuario del sistema (API de marketing)": "System user token (Marketing API)", "Inicio de sesión con Facebook (OAuth)": "Sign in with Facebook (OAuth)", "API de Google Ads (token de desarrollador)": "Google Ads API (developer token)", "Inicio de sesión con Google (OAuth)": "Sign in with Google (OAuth)", "ID de la cuenta publicitaria": "Ad account ID", "ID del Business Manager": "Business Manager ID", "ID de la página de Facebook": "Facebook Page ID", "ID del píxel o conjunto de datos": "Pixel or dataset ID", "ID de cliente de Google Ads": "Google Ads customer ID", "ID de tu cuenta de administrador (MCC)": "Your manager account (MCC) ID", "Acción de conversión principal": "Main conversion action", "Formulario enviado": "Form submitted", "Nombre para reconocerla": "Name to recognise it", "El token no se guarda en el CRM.": "The token isn't stored in the CRM.", "Cualquiera con acceso al CRM podría leerlo. Lo guarda tu sistema de integración en tu servidor, y aquí solo queda qué cuenta usar y cómo se conecta.": "Anyone with access to the CRM could read it. Your integration system keeps it on your server; here we only store which account to use and how it connects.", "Vincular cuenta": "Link account", "El ID de la cuenta publicitaria, por ejemplo act_{n}": "The ad account ID, e.g. act_{n}", "El ID de cliente, por ejemplo {n}-{n}-{n}": "The customer ID, e.g. {n}-{n}-{n}", "Importar filas": "Import rows", "Archivo CSV": "CSV file", "O pega aquí las filas": "Or paste the rows here", "Columnas en este orden: fecha, campaña, inversión, impresiones, clics y conversiones. Opcional, detrás: formularios, mensajes, llamadas, reservas y compras. Vale separado por comas o por punto y coma.": "Columns in this order: date, campaign, spend, impressions, clicks and leads. Comma or semicolon separated.", "Sin filas todavía.": "No rows yet.", "filas listas para importar": "rows ready to import", "sin fecha válida, se ignoran": "without a valid date, ignored", "No hay filas válidas que importar.": "No valid rows to import.", "filas importadas en": "rows imported into", "Ajustes": "Settings", "Cuando montes la conexión con las APIs de Meta y Google, tu sistema lee las campañas enviadas a publicar y escribe los resultados en estas colecciones.": "Once you build the connection to the Meta and Google APIs, your system reads the campaigns sent for publishing and writes the results to these collections.", "Para tu sistema de integración": "For your integration system", "dónde escribir los datos": "where to write the data", "Últimos datos": "Latest data", "Gestionar": "Manage", "Crea una subcuenta para vincular sus cuentas de anuncios.": "Create a sub-account to link its ad accounts.", "Sin subcuentas.": "No sub-accounts.", "{n} cuentas de anuncios conectadas y {n} por revisar. Cada subcuenta vincula sus propias cuentas de Meta y Google.": "{n} ad accounts connected and {n} to check. Each sub-account links its own Meta and Google accounts.", "{n} cuentas de anuncios conectadas. Cada subcuenta vincula sus propias cuentas de Meta y Google.": "{n} ad accounts connected. Each sub-account links its own Meta and Google accounts.", "Meta Ads: conectada": "Meta Ads: connected", "Meta Ads: sin conectar": "Meta Ads: not connected", "Meta Ads: revisar conexión": "Meta Ads: check connection", "Google Ads: conectada": "Google Ads: connected", "Google Ads: sin conectar": "Google Ads: not connected", "Google Ads: revisar conexión": "Google Ads: check connection", "Acceso eliminado": "Access removed", "Prepara cada campaña aquí: objetivo, presupuesto, audiencia y anuncio. Cuando esté lista, la envías a publicar en Meta o Google.": "Prepare each campaign here: objective, budget, audience and ad. When it's ready, send it to publish on Meta or Google.", "Todas": "All", "{n} lista para publicar": "{n} ready to publish", "{n} listas para publicar": "{n} ready to publish", "Presupuesto": "Budget", "Fechas": "Dates", "Inversión {n} sem.": "Spend {n} wks", "Leads {n} sem.": "Leads {n} wks", "No hay campañas de esta plataforma.": "No campaigns on this platform.", "Prepara la primera: eliges objetivo, presupuesto, audiencia y anuncio, y ves cómo quedará antes de publicarla.": "Prepare the first one: choose the objective, budget, audience and ad, and see how it'll look before publishing.", "Lista para publicar": "Ready to publish", "Enviada a publicar": "Sent to publish", "Activa": "Active", "Pausada": "Paused", "Con errores": "With errors", "Sin presupuesto": "No budget", "{n}/día": "{n}/day", "{n} en total": "{n} in total", "← Campañas": "← Campaigns", "Duplicar": "Duplicate", "Guardado": "Saved", "Guardando…": "Saving…", "Cambios sin guardar": "Unsaved changes", "Objetivo": "Objective", "Anuncio": "Ad", "Revisión": "Review", "Pasos de la campaña": "Campaign steps", "Anterior": "Back", "Siguiente: Presupuesto": "Next: Budget", "Siguiente: Audiencia": "Next: Audience", "Siguiente: Anuncio": "Next: Ad", "Siguiente: Revisión": "Next: Review", "Siguiente": "Next", "Qué quieres que pase cuando alguien vea el anuncio.": "What you want to happen when someone sees the ad.", "Clientes potenciales": "Leads", "Formulario instantáneo dentro de Facebook o Instagram.": "Instant form inside Facebook or Instagram.", "Tráfico": "Traffic", "Visitas a la web o a una landing.": "Visits to the website or a landing page.", "Ventas": "Sales", "Compras o conversiones en la web. Necesita píxel.": "Purchases or conversions on the website. Needs a pixel.", "Interacción": "Engagement", "Mensajes de WhatsApp, Instagram o Messenger.": "WhatsApp, Instagram or Messenger messages.", "Reconocimiento": "Awareness", "Que te vea y te recuerde la gente adecuada.": "Get seen and remembered by the right people.", "Búsqueda": "Search", "Anuncios de texto cuando alguien busca lo que vendes.": "Text ads when someone searches for what you sell.", "Todos los canales de Google con un solo presupuesto.": "Every Google channel with a single budget.", "YouTube, Discover y Gmail con imagen y vídeo.": "YouTube, Discover and Gmail with image and video.", "Banners en webs de la red de Display.": "Banners on Display Network sites.", "Nombre de la campaña": "Campaign name", "Implantes · leads · octubre": "Implants · leads · October", "Ortodoncia invisible · búsqueda": "Clear aligners · search", "Categoría especial de anuncio": "Special ad category", "Ninguna": "None", "Vivienda": "Housing", "Empleo": "Employment", "Servicios financieros": "Financial services", "Temas sociales, elecciones o política": "Social issues, elections or politics", "Obligatoria si anuncias vivienda, empleo, servicios financieros o temas sociales. Limita la segmentación por edad, sexo y zona.": "Required if you advertise housing, employment, financial services or social issues. It limits targeting by age, gender and area.", "Presupuesto y calendario": "Budget and schedule", "Tipo de presupuesto": "Budget type", "Diario": "Daily", "Total de la campaña": "Campaign total", "Importe (€)": "Amount (€)", "Empieza": "Starts", "Termina": "Ends", "Déjalo vacío para que siga activa.": "Leave it empty to keep it running.", "Estrategia de puja": "Bid strategy", "Mayor volumen": "Highest volume", "Objetivo de coste por resultado": "Cost per result goal", "Límite de puja": "Bid cap", "Maximizar conversiones": "Maximise conversions", "CPA objetivo": "Target CPA", "Maximizar clics": "Maximise clicks", "ROAS objetivo": "Target ROAS", "Coste por resultado objetivo (€)": "Cost per result goal (€)", "Puja máxima (€)": "Maximum bid (€)", "CPA objetivo (€)": "Target CPA (€)", "ROAS objetivo (%)": "Target ROAS (%)", "Unos {n} al mes.": "About {n} a month.", "Con el coste por lead de las últimas {n} semanas en Meta Ads ({n}), serían unos {n} leads al mes.": "At the cost per lead of the last {n} weeks on Meta Ads ({n}), that's about {n} leads a month.", "Con el coste por lead de las últimas {n} semanas en Google Ads ({n}), serían unos {n} leads al mes.": "At the cost per lead of the last {n} weeks on Google Ads ({n}), that's about {n} leads a month.", "Cuando haya datos de esta cuenta, aquí verás cuántos leads puedes esperar.": "Once this account has data, you'll see here how many leads to expect.", "Ojo:": "Heads up:", "con las demás campañas activas o listas suman {n} al mes y el cliente indicó {n} en el brief.": "together with the other active or ready campaigns that's {n} a month, and the client set {n} in the brief.", "Ubicaciones": "Locations", "Ciudades, provincias o códigos postales, separados por comas.": "Cities, provinces or postcodes, separated by commas.", "Radio (km)": "Radius (km)", "Edad mínima": "Minimum age", "Edad máxima": "Maximum age", "{n} significa {n} o más.": "{n} means {n} or older.", "Sexo": "Gender", "Mujeres": "Women", "Hombres": "Men", "Intereses y comportamientos": "Interests and behaviours", "Estética dental, bodas, salud y bienestar": "Cosmetic dentistry, weddings, health and wellbeing", "Públicos personalizados": "Custom audiences", "Visitantes de la web 180 días": "Website visitors, 180 days", "Excluir": "Exclude", "Pacientes actuales": "Current patients", "Ubicaciones de los anuncios": "Ad placements", "Automáticas (recomendado). Meta reparte el presupuesto donde mejor funciona.": "Automatic (recommended). Meta spends the budget where it works best.", "Categoría especial:": "Special category:", "Meta no deja segmentar por edad, sexo ni código postal, y pide un radio de al menos {n} km.": "Meta doesn't allow targeting by age, gender or postcode, and requires a radius of at least {n} km.", "Dónde y a quién": "Where and to whom", "Idiomas": "Languages", "Español, valenciano": "Spanish, Valencian", "Señales de audiencia": "Audience signals", "Personas que buscan ortodoncia invisible, visitantes de la web, lista de clientes": "People searching for clear aligners, website visitors, client list", "Palabras clave": "Keywords", "Empieza con concordancia de frase o exacta para tener control. La amplia funciona mejor cuando las conversiones están bien medidas.": "Start with phrase or exact match to stay in control. Broad match works better once conversions are tracked properly.", "Amplia": "Broad", "Frase": "Phrase", "Exacta": "Exact", "Añadir palabra clave": "Add keyword", "Palabras clave negativas": "Negative keywords", "Palabra clave {n}": "Keyword {n}", "Concordancia de la palabra clave {n}": "Match type for keyword {n}", "Quitar palabra clave {n}": "Remove keyword {n}", "Búsquedas por las que no quieres aparecer, separadas por comas.": "Searches you don't want to show up for, separated by commas.", "gratis, curso, empleo, segunda mano": "free, course, jobs, second hand", "Texto principal": "Primary text", "Descripción": "Description", "Botón": "Button", "URL de destino": "Destination URL", "Creatividad": "Creative", "¿Te falta una pieza? Implantes con estudio {n}D y financiación sin intereses.": "Missing a tooth? Implants with a {n}D scan and interest-free financing.", "Primera visita gratis": "Free first visit", "Plazas limitadas": "Limited spots", "Más información": "Learn more", "Solicitar presupuesto": "Get quote", "Reservar": "Book now", "Contactar": "Contact us", "Registrarte": "Sign up", "Enviar mensaje de WhatsApp": "Send WhatsApp message", "Comprar": "Shop now", "implantes-carrusel-{n}jpg o enlace a la carpeta": "implants-carousel-{n}jpg or a folder link", "Nombre del archivo o enlace. Prepara {n} × {n} para el feed y {n} × {n} para stories y reels.": "File name or link. Prepare {n} × {n} for the feed and {n} × {n} for stories and reels.", "Formulario instantáneo": "Instant form", "Se abre dentro de Facebook o Instagram, sin salir a la web. Una pregunta por línea.": "It opens inside Facebook or Instagram, without leaving for a website. One question per line.", "Preguntas": "Questions", "Nombre completo Teléfono ¿Qué tratamiento te interesa? ¿Cuándo prefieres que te llamemos?": "Full name Phone Which treatment are you interested in? When should we call you?", "Política de privacidad": "Privacy policy", "Web al terminar el formulario (opcional)": "Website after the form (optional)", "Anuncio de búsqueda adaptable": "Responsive search ad", "Recursos del anuncio": "Ad assets", "Google combina títulos y descripciones y aprende qué mezcla funciona. Hasta {n} títulos de {n} caracteres y {n} descripciones de {n}": "Google mixes headlines and descriptions and learns which combination works. Up to {n} headlines of {n} characters and {n} descriptions of {n}", "URL final": "Final URL", "Ruta {n}": "Path {n}", "Títulos": "Headlines", "Descripciones": "Descriptions", "Añadir título": "Add headline", "Añadir descripción": "Add description", "Título {n}": "Headline {n}", "Descripción {n}": "Description {n}", "Quitar título {n}": "Remove headline {n}", "Quitar descripción {n}": "Remove description {n}", "Ortodoncia invisible": "Clear aligners", "Financiación sin intereses": "Interest-free financing", "Clínica en Valencia": "Clinic in Valencia", "Estudio {n}D y plan de tratamiento en la primera visita. Pide cita hoy.": "{n}D scan and treatment plan at the first visit. Book today.", "Paga en cómodas cuotas sin intereses. Más de {n} años cuidando sonrisas.": "Pay in easy interest-free instalments. Over {n} years caring for smiles.", "Imágenes, logo y vídeo": "Images, logo and video", "Carpeta con imágenes {n} × {n} y {n} × {n} logo cuadrado y vídeo de YouTube": "Folder with {n} × {n} and {n} × {n} images, square logo and a YouTube video", "Resumen": "Summary", "Calendario": "Schedule", "Puja": "Bid", "Público": "Audience", "Categoría especial": "Special category", "No aplica": "Not applicable", "· sin fecha de fin": "· no end date", "{n}-{n} años · todos los sexos": "{n}-{n} years · all genders", "{n}-{n}+ años · todos los sexos": "{n}-{n}+ years · all genders", "todos los sexos": "all genders", "mujeres": "women", "hombres": "men", "Antes de publicar": "Before publishing", "Notas internas": "Internal notes", "Ideas para la siguiente versión, aprobaciones del cliente…": "Ideas for the next version, client approvals…", "La campaña tiene nombre": "The campaign has a name", "Presupuesto mayor que {n}": "Budget above {n}", "Fecha de inicio": "Start date", "La fecha de fin va después del inicio": "The end date is after the start", "Ubicaciones donde se mostrarán los anuncios": "Locations where the ads will show", "Preguntas del formulario instantáneo": "Instant form questions", "Enlace a la política de privacidad (Meta lo exige en los formularios)": "Privacy policy link (Meta requires it on forms)", "URL de destino con https://": "Destination URL with https://", "Creatividad: imagen o vídeo": "Creative: image or video", "El texto principal pasa de {n} caracteres y se cortará con «Ver más»": "The primary text is over {n} characters and will be cut with “See more”", "Al menos una ubicación de anuncio": "At least one ad placement", "Categoría especial (Vivienda): todas las edades y todos los sexos": "Special category (Housing): all ages and all genders", "Categoría especial (Empleo): todas las edades y todos los sexos": "Special category (Employment): all ages and all genders", "Categoría especial (Servicios financieros): todas las edades y todos los sexos": "Special category (Financial services): all ages and all genders", "Categoría especial: radio de {n} km ({n} millas) o más": "Special category: radius of {n} km ({n} miles) or more", "Al menos una palabra clave": "At least one keyword", "Al menos {n} títulos (tienes {n})": "At least {n} headlines (you have {n})", "Al menos {n} descripciones (tienes {n})": "At least {n} descriptions (you have {n})", "URL final con https://": "Final URL with https://", "Imágenes, logo o vídeo para los recursos": "Images, logo or video for the assets", "Importe de la puja (Objetivo de coste por resultado)": "Bid amount (Cost per result goal)", "Importe de la puja (Límite de puja)": "Bid amount (Bid cap)", "Importe de la puja (CPA objetivo)": "Bid amount (Target CPA)", "Importe de la puja (ROAS objetivo)": "Bid amount (Target ROAS)", "Cuenta de Meta Ads conectada en Integraciones": "Meta Ads account connected in Integrations", "Cuenta de Google Ads conectada en Integraciones": "Google Ads account connected in Integrations", "Marcar como lista": "Mark as ready", "Resuelve los puntos en rojo para marcarla como lista.": "Fix the items in red to mark it as ready.", "Enviar a publicar en Meta Ads": "Send to publish on Meta Ads", "Enviar a publicar en Google Ads": "Send to publish on Google Ads", "Volver a borrador": "Back to draft", "Cancelar el envío": "Cancel sending", "Enviar cambios a Meta Ads": "Send changes to Meta Ads", "Enviar cambios a Google Ads": "Send changes to Google Ads", "Marcada como lista para publicar": "Marked as ready to publish", "Vuelve a ser un borrador": "Back to draft", "Estado actualizado": "Status updated", "Campaña duplicada": "Campaign duplicated", "Campaña sin nombre": "Unnamed campaign", "Vista previa": "Preview", "Publicidad": "Sponsored", "Aquí va el texto principal.": "Your primary text goes here.", "Tu imagen o vídeo": "Your image or video", "Ver más": "See more", "Patrocinado": "Sponsored", "Título {n} | Título {n} | Título {n}": "Headline {n} | Headline {n} | Headline {n}", "Tus descripciones aparecerán aquí.": "Your descriptions will show here.", "Google combina títulos y descripciones. Esta es una de las combinaciones posibles.": "Google mixes headlines and descriptions. This is one possible combination.", "Al mes, aprox.": "Per month, approx.", "Pendiente": "Pending", "Nada": "Nothing", "{n} punto": "{n} item", "{n} puntos": "{n} items", "Del brief del cliente": "From the client brief", "Por qué les eligen": "Why they're chosen", "Cliente ideal": "Ideal client", "Qué le frena": "What holds them back", "Ofertas y garantías": "Offers and guarantees", "Tono": "Tone", "Rellena el brief en Configuración y aquí tendrás a mano la propuesta, el cliente ideal y las ofertas mientras escribes.": "Fill in the brief in Settings and you'll have the value proposition, ideal client and offers at hand while you write.", "El brief aún está vacío.": "The brief is still empty.", "ID en Meta Ads: {n}": "ID on Meta Ads: {n}", "ID en Google Ads: {n}": "ID on Google Ads: {n}", "devolvió un error.": "returned an error.", "Todo lo que necesitas para prepararle la estrategia y el servicio. Rellénalo con el cliente en la reunión de arranque: se guarda solo.": "Everything you need to prepare their strategy and service. Fill it in with the client at the kick-off meeting: it saves itself.", "Copiar brief": "Copy brief", "Brief de ejemplo.": "Sample brief.", "Está relleno para que veas cómo queda. Cámbialo por los datos reales del cliente.": "It's filled in so you can see how it looks. Replace it with the client's real details.", "Brief al {n}%": "Brief {n}% done", "Secciones del brief": "Brief sections", "Cómo aparece este cliente en tu CRM.": "How this client appears in your CRM.", "Nombre de la subcuenta": "Sub-account name", "Etapas del pipeline": "Pipeline stages", "Usuarios": "Users", "Quién puede entrar en esta subcuenta y qué puede hacer.": "Who can access this sub-account and what they can do.", "El negocio": "The business", "Lo básico para presentarles bien y no preguntar dos veces.": "The basics, so you can introduce them well and never ask twice.", "Nombre comercial": "Trading name", "Web": "Website", "Razón social": "Legal name", "CIF": "Tax ID", "Persona de contacto": "Contact person", "Cargo": "Role", "Ámbito": "Reach", "Elige una opción": "Choose an option", "Provincial": "Regional", "Nacional": "National", "Internacional": "International", "Dónde venden o atienden": "Where they sell or serve", "Valencia y área metropolitana": "Valencia and metro area", "Años en marcha": "Years in business", "Personas en el equipo": "Team size", "¿Qué hacéis, en una frase?": "What do you do, in one sentence?", "Clínica dental especializada en implantes y ortodoncia invisible.": "Dental clinic specialising in implants and clear aligners.", "La marca": "The brand", "Cómo quieren que les vean y cómo hablan.": "How they want to be seen and how they speak.", "¿Por qué os eligen a vosotros y no a la competencia?": "Why do people choose you over the competition?", "¿Cómo y por qué empezó el negocio?": "How and why did the business start?", "Tono de voz": "Tone of voice", "Cercano": "Friendly", "Profesional": "Professional", "Divertido": "Fun", "Técnico": "Technical", "Directo": "Direct", "Tranquilizador": "Reassuring", "Inspirador": "Inspiring", "Ideas o palabras que les representan": "Ideas or words that represent them", "Lo que nunca dirían o harían": "What they would never say or do", "Logo, colores y tipografías": "Logo, colours and fonts", "Enlace al manual de marca o a la carpeta": "Link to the brand guidelines or folder", "Tres competidores y qué hacen bien": "Three competitors and what they do well", "Marcas que admiran, del sector o no": "Brands they admire, in their industry or not", "Su cliente ideal": "Their ideal client", "A quién le hablamos y qué le preocupa.": "Who we're talking to and what worries them.", "¿Quién es? Edad, zona, situación, a qué se dedica": "Who are they? Age, area, situation, what they do", "¿Qué problema le resolvéis?": "What problem do you solve for them?", "¿Qué quiere conseguir de verdad?": "What do they really want to achieve?", "¿Qué le frena antes de comprar?": "What holds them back before buying?", "¿Dónde busca información?": "Where do they look for information?", "Google, Instagram, recomendaciones de amigos…": "Google, Instagram, recommendations from friends…", "¿Cuánto tarda en decidir?": "How long do they take to decide?", "El mismo día": "The same day", "Una semana": "A week", "Un mes": "A month", "Varios meses": "Several months", "Ticket medio (€)": "Average order value (€)", "¿Vuelve a comprar?": "Do they buy again?", "Compra una vez": "Buys once", "Repite alguna vez al año": "Comes back once or twice a year", "Cliente recurrente": "Recurring client", "Productos y servicios": "Products and services", "Qué venden y qué conviene empujar.": "What they sell and what's worth pushing.", "Servicios o productos principales, con precio": "Main services or products, with prices", "¿Cuál queréis vender más? ¿Por qué?": "Which one do you want to sell more of? Why?", "Margen aproximado de lo que queréis potenciar": "Approximate margin of what you want to push", "Por ejemplo, {n} %": "For example, {n} %", "Meses fuertes y meses flojos": "Strong months and quiet months", "Ofertas, garantías o regalos que podemos usar": "Offers, guarantees or gifts we can use", "Objetivos": "Goals", "Qué tiene que pasar para que esto sea un éxito.": "What has to happen for this to be a success.", "Objetivo principal": "Main goal", "Más contactos o leads": "More contacts or leads", "Más ventas online": "More online sales", "Más reservas o citas": "More bookings or appointments", "Más visitas a la tienda": "More store visits", "Dar a conocer la marca": "Build brand awareness", "Fidelizar a los clientes actuales": "Keep current clients coming back", "Plazo": "Timeframe", "{n} meses": "{n} months", "La meta en números": "The goal in numbers", "{n} primeras visitas nuevas al mes": "{n} new first visits a month", "¿Cómo sabremos que funciona?": "How will we know it works?", "Coste por cita por debajo de {n}": "Cost per appointment below {n}", "Valor de un cliente en todo su ciclo (€)": "Customer lifetime value (€)", "Contactos nuevos que pueden atender a la semana": "New contacts they can handle per week", "¿Qué tendría que pasar para que dentro de un año digan que fue un acierto?": "What would have to happen for them to say, a year from now, it was the right call?", "Marketing actual": "Current marketing", "De dónde partimos.": "Where we're starting from.", "Canales que usan ahora": "Channels they use now", "Ficha de Google": "Google Business Profile", "Eventos": "Events", "Boca a boca": "Word of mouth", "Qué ha funcionado": "What has worked", "Qué no ha funcionado y por qué creen que fue": "What hasn't worked and why they think so", "Inversión actual en anuncios (€/mes)": "Current ad spend (€/month)", "Presupuesto para anuncios (€/mes)": "Ad budget (€/month)", "Las campañas te avisan si lo superas.": "Campaigns warn you if you go over it.", "Web, CRM y email que usan": "Website, CRM and email tools they use", "Qué miden ahora": "What they track now", "Píxel de Meta": "Meta Pixel", "API de conversiones": "Conversions API", "Conversiones de Google Ads": "Google Ads conversions", "Nada instalado": "Nothing installed", "Accesos": "Access", "Lo que necesitas para empezar. Marca cada uno cuando lo tengas.": "What you need to get started. Tick each one when you have it.", "Te añaden como socio": "They add you as a partner", "Cuenta publicitaria de Meta": "Meta ad account", "Con permiso para gestionar campañas": "With permission to manage campaigns", "Página de Facebook e Instagram": "Facebook Page and Instagram", "Vinculada a tu cuenta de administrador (MCC)": "Linked to your manager account (MCC)", "Permiso de editor": "Editor permission", "Permiso para publicar": "Permission to publish", "Ficha de Google (Business Profile)": "Google Business Profile", "Acceso a la web": "Website access", "Usuario propio, nunca el del cliente": "Your own user, never the client's", "Herramienta de email o CRM": "Email tool or CRM", "Notas de accesos": "Access notes", "Quién da cada acceso y cuándo": "Who gives each access and when", "No apuntes contraseñas aquí: cualquiera con acceso al CRM podría verlas.": "Don't write passwords here: anyone with access to the CRM could see them.", "El servicio": "The service", "Qué contrata y cómo vais a trabajar.": "What they're hiring and how you'll work together.", "Servicios contratados": "Services hired", "El Plan · Estrategia": "El Plan · Strategy", "El Golpe · Publicidad": "El Golpe · Advertising", "Los Diamantes · CRM y datos": "Los Diamantes · CRM and data", "Duración": "Duration", "Sin permanencia": "No minimum term", "Cuota mensual (€)": "Monthly fee (€)", "Gestión de anuncios": "Ad management", "Incluida, {n} % de la inversión…": "Included, {n} % of spend…", "Reuniones": "Meetings", "Semanal": "Weekly", "Quincenal": "Every two weeks", "Mensual": "Monthly", "Canal de comunicación": "Communication channel", "Llamada": "Call", "Responsable en Mrs. Pink Agency": "Lead at Mrs. Pink Agency", "Entregables del primer mes": "First month deliverables", "Siguiente: El negocio": "Next: The business", "Siguiente: La marca": "Next: The brand", "Siguiente: Su cliente ideal": "Next: Their ideal client", "Siguiente: Productos y servicios": "Next: Products and services", "Siguiente: Objetivos": "Next: Goals", "Siguiente: Marketing actual": "Next: Current marketing", "Siguiente: Accesos": "Next: Access", "Siguiente: El servicio": "Next: The service", "Siguiente: Usuarios": "Next: Users", "El brief en texto, listo para pegar en tu documento de estrategia o en una conversación con Claude.": "The brief as text, ready to paste into your strategy document or a conversation with Claude.", "Copiar texto": "Copy text", "Brief copiado": "Brief copied", "Selecciónalo y cópialo con Ctrl+C o Cmd+C": "Select it and copy with Ctrl+C or Cmd+C", "Guardado ahora": "Saved just now", "Quién entra en el CRM y qué ve cada persona. Usa «Ver como» para comprobarlo desde sus ojos.": "Who can get into the CRM and what each person sees. Use “View as” to check it through their eyes.", "Invitar persona": "Invite someone", "Administradora de agencia": "Agency admin", "Ve y gestiona todo: subcuentas, equipo, integraciones y el servicio de cada cliente.": "Sees and manages everything: sub-accounts, team, integrations and each client's service.", "Solo entra en las subcuentas que le asignes, con el permiso que elijas en cada apartado.": "Only gets into the sub-accounts you assign, with the permission you choose for each section.", "Entra solo en su subcuenta. Nunca ve otras cuentas, el equipo ni las condiciones del servicio.": "Only gets into their own sub-account. Never sees other accounts, the team or the service terms.", "Persona": "Person", "Rol": "Role", "Permisos": "Permissions", "Último acceso": "Last access", "Acceso total": "Full access", "Invitación pendiente": "Invitation pending", "Activo": "Active", "Desactivado": "Deactivated", "Edita {n} ve {n} de {n} apartados": "Edits {n}, views {n} of {n} sections", "Edita {n} de {n} apartados": "Edits {n} of {n} sections", "Ve {n} de {n} apartados": "Views {n} of {n} sections", "Aún no hay nadie.": "Nobody here yet.", "Invita a tu equipo y a tus clientes, y decide qué subcuentas y apartados ve cada uno.": "Invite your team and your clients, and decide which sub-accounts and sections each one sees.", "Cómo funciona hoy.": "How it works today.", "Estos usuarios y permisos son el diseño para tu versión con inicio de sesión: todavía no se envían invitaciones ni se bloquea nada. Mientras tanto, el CRM se comparte desde el menú Compartir y quien entra lo ve todo, así que no lo compartas con clientes.": "These users and permissions are the design for your version with sign-in: no invitations are sent and nothing is blocked yet. Meanwhile, the CRM is shared from the Share menu and whoever gets in sees everything, so don't share it with clients.", "Nadie más tiene acceso a esta subcuenta.": "Nobody else has access to this sub-account.", "Invitar a esta subcuenta": "Invite to this sub-account", "Su subcuenta": "Their sub-account", "Subcuentas a las que entra": "Sub-accounts they can access", "Permisos por apartado": "Permissions by section", "Editar": "Edit", "Solo ver": "View only", "Sin acceso": "No access", "Acceso total.": "Full access.", "Ve la vista de agencia, todas las subcuentas y el equipo.": "Sees the agency view, every sub-account and the team.", "Desactivar corta el acceso sin borrar a la persona.": "Deactivating cuts access without deleting the person.", "La invitación quedará pendiente. Se enviará por email cuando tu versión con inicio de sesión esté lista.": "The invitation will stay pending. It'll be sent by email once your version with sign-in is ready.", "Crear invitación": "Create invitation", "Invitación creada": "Invitation created", "Ya hay una persona con ese email.": "There's already someone with that email.", "Tiene que quedar al menos una administradora.": "There has to be at least one admin left.", "Salir de la vista previa": "Exit preview", "todas las subcuentas": "all sub-accounts", "ninguna subcuenta": "no sub-account", "Esta persona aún no tiene ninguna subcuenta asignada, así que al entrar no vería nada. Asígnale una desde Equipo.": "This person has no sub-account assigned yet, so they'd see nothing when they sign in. Assign one from Team.", "Flujos que contestan, recuerdan y hacen seguimiento por ti, y embudos que convierten visitas en contactos.": "Flows that reply, remind and follow up for you, and funnels that turn visits into contacts.", "Flujos": "Flows", "Embudos": "Funnels", "Plantillas": "Templates", "Nuevo flujo": "New flow", "Nuevo embudo": "New funnel", "Flujo": "Flow", "Cuando…": "When…", "Pasos": "Steps", "Han entrado": "Enrolled", "Actualizado": "Updated", "Sin disparador": "No trigger", "Publicado": "Published", "Pausado": "Paused", "Sin flujos todavía.": "No flows yet.", "Un flujo hace solo lo que harías a mano: contestar a un lead en un minuto, recordar una cita o pedir una reseña. Empieza desde cero o con una plantilla.": "A flow does on its own what you'd do by hand: reply to a lead within a minute, remind an appointment or ask for a review. Start from scratch or from a template.", "Ver plantillas": "See templates", "Sin embudos todavía.": "No funnels yet.", "Llegan al final": "Reach the end", "Sin dominio": "No domain", "Sin pasos": "No steps", "Un embudo es el camino que recorre un cliente: una página para dejar sus datos, otra de gracias, una para reservar. Cada formulario puede activar un flujo.": "A funnel is the path a client follows: a page to leave their details, a thank-you page, one to book. Each form can trigger a flow.", "Usar plantilla": "Use template", "Plantilla lista para revisar": "Template ready to review", "Embudo y flujo creados": "Funnel and flow created", "Respuesta rápida a leads": "Speed to lead", "Contesta en menos de un minuto a cada lead de anuncios o formularios, avisa al equipo y lo persigue con SMS, email y una tarea de llamada si no responde.": "Replies to every lead from ads or forms in under a minute, alerts the team and follows up with SMS, email and a call task if they don't answer.", "Lead de Meta o formulario": "Meta lead or form", "WhatsApp al momento": "Instant WhatsApp", "Aviso al equipo": "Team alert", "Oportunidad": "Opportunity", "Si no responde: SMS, email y llamada": "No reply: SMS, email and call", "Recordatorios de cita y ausencias": "Appointment reminders and no-shows", "Confirma cada cita, la recuerda el día antes y dos horas antes, y si el contacto no se presenta le ofrece cambiarla.": "Confirms each appointment, reminds the day before and two hours before, and offers to reschedule if the contact doesn't show up.", "Cita reservada": "Appointment booked", "Confirmación": "Confirmation", "Recordatorio {n} h": "Reminder {n} h", "Recuperar a quien no vino": "Win back no-shows", "Cuando alguien no se presenta, le escribe con tacto para reprogramar y avisa al equipo si no responde.": "When someone doesn't show up, it writes to them tactfully to reschedule and alerts the team if they don't reply.", "No se presenta": "Doesn't show up", "Esperar {n} día": "Wait {n} day", "Esperar {n} días": "Wait {n} days", "Si no responde: tarea": "No reply: task", "Pedir reseñas en Google": "Ask for Google reviews", "Cuando ganas una oportunidad, espera dos días y pide una reseña. Si no hace clic, lo recuerda una vez por email.": "When you win an opportunity, it waits two days and asks for a review. If they don't click, it reminds them once by email.", "Oportunidad ganada": "Opportunity won", "WhatsApp con enlace": "WhatsApp with link", "Si no hace clic: email": "No click: email", "Reactivar contactos dormidos": "Reactivate dormant contacts", "Para listas antiguas: les escribe con una oferta, crea la oportunidad a quien responde y saca de la lista a quien no.": "For old lists: writes to them with an offer, creates an opportunity for those who reply and removes those who don't.", "Etiqueta «reactivar»": "Tag “reactivate”", "SMS con oferta": "SMS with offer", "Si responde: oportunidad": "Reply: opportunity", "Si no: email y fuera": "No reply: email and out", "Embudo de captación completo": "Complete lead funnel", "Crea las páginas (captación, gracias y reserva) y el flujo que contesta al instante a quien deja sus datos.": "Creates the pages (opt-in, thank you and booking) and the flow that instantly replies to whoever leaves their details.", "Página de captación": "Opt-in page", "Gracias": "Thank you", "Reserva de cita": "Appointment booking", "Flujo de respuesta": "Reply flow", "← Automatizaciones": "← Automations", "Nombre del flujo": "Flow name", "Probar con un contacto": "Test with a contact", "Publicar": "Publish", "Pausar": "Pause", "Reanudar": "Resume", "Para publicarlo:": "To publish it:", "Añade al menos un disparador": "Add at least one trigger", "Añade al menos un paso": "Add at least one step", "Hay {n} paso sin configurar": "{n} step isn't set up", "Hay {n} pasos sin configurar": "{n} steps aren't set up", "Añade al menos un disparador.": "Add at least one trigger.", "Añade al menos un paso.": "Add at least one step.", "Hay {n} paso sin configurar.": "{n} step isn't set up.", "Hay {n} pasos sin configurar.": "{n} steps aren't set up.", "Dentro ahora": "In the flow now", "esperando un paso": "waiting for a step", "Han terminado": "Finished", "{n} % de los que entraron": "{n} % of those enrolled", "Objetivo cumplido": "Goal met", "contactos en total": "contacts in total", "Elige qué hace entrar a un contacto en este flujo.": "Choose what enrols a contact in this flow.", "Añadir disparador": "Add trigger", "Añadir un paso aquí": "Add a step here", "Fin": "End", "Falta configurar": "Needs setting up", "Sí": "Yes", "Los flujos publicados los ejecutará tu sistema de automatización cuando lo montes en Claude Code. Aquí los diseñas, los pruebas con contactos reales y ves sus resultados.": "Published flows will run on your automation system once you build it in Claude Code. Here you design them, test them with real contacts and see their results.", "Disparadores": "Triggers", "Comunicación": "Communication", "Contactos y ventas": "Contacts and sales", "Tiempo": "Time", "Lógica": "Logic", "Otras herramientas": "Other tools", "El contacto entra en el flujo en cuanto pasa cualquiera de los disparadores.": "The contact enters the flow as soon as any of the triggers happens.", "Solo si la fuente es": "Only if the source is", "Cualquiera": "Any", "Etiqueta añadida": "Tag added", "Etiqueta": "Tag", "reactivar": "reactivate", "Formulario": "Form", "Lead de Meta Ads": "Meta Ads lead", "Lead de Google Ads": "Google Ads lead", "Estado de una cita": "Appointment status", "Cuando la cita": "When the appointment", "Se reserva": "Is booked", "Se confirma": "Is confirmed", "Se cancela": "Is cancelled", "Se completa": "Is completed", "Primera visita": "First visit", "Oportunidad cambia de etapa": "Opportunity changes stage", "Pasa a la etapa": "Moves to stage", "Días sin moverse": "Days without moving", "En la etapa": "In stage", "Mensaje recibido": "Message received", "Si contiene": "If it contains", "precio, cita…": "price, appointment…", "Evento de email": "Email event", "Cuando el contacto": "When the contact", "Abre el email": "Opens the email", "Hace clic": "Clicks", "Se da de baja": "Unsubscribes", "Rebota": "Bounces", "Clic en enlace de seguimiento": "Tracking link clicked", "Enlace": "Link", "Reserva tu cita": "Book your appointment", "Fecha del contacto": "Contact date", "Cumpleaños": "Birthday", "Fecha de alta": "Date added", "Fin del tratamiento": "End of treatment", "Renovación": "Renewal", "Días antes ({n} es el mismo día)": "Days before ({n} is the same day)", "Pago recibido": "Payment received", "Producto": "Product", "Webhook entrante": "Incoming webhook", "Nombre del webhook": "Webhook name", "Enviar email": "Send email", "Asunto": "Subject", "Remitente": "Sender", "Nombre <correo@dominio>": "Name <email@domain>", "Enviar SMS": "Send SMS", "Enviar WhatsApp": "Send WhatsApp", "Plantilla aprobada": "Approved template", "Fuera de la ventana de {n} horas desde el último mensaje del contacto, WhatsApp solo deja enviar plantillas aprobadas por Meta.": "Outside the {n}-hour window since the contact's last message, WhatsApp only lets you send templates approved by Meta.", "Fuera de la ventana de {n} horas desde el último mensaje del contacto, WhatsApp solo deja…": "Outside the {n}-hour window since the contact's last message, WhatsApp only lets…", "Mensaje de Instagram o Facebook": "Instagram or Facebook message", "Solo funciona si el contacto te ha escrito en las últimas {n} horas.": "Only works if the contact has written to you in the last {n} hours.", "Llamada del equipo": "Team call", "Quién llama": "Who calls", "Guion": "Script", "Avisar al equipo": "Alert the team", "A quién": "Who", "Por": "Via", "Notificación en el CRM": "CRM notification", "Conversación con IA": "AI conversation", "Qué tiene que conseguir": "What it has to achieve", "Que reserve la primera visita": "Get them to book the first visit", "Mensajes como máximo": "Maximum messages", "Responde al contacto usando el brief del cliente hasta que reserve o pida hablar con una persona. Entonces avisa al equipo.": "Replies to the contact using the client brief until they book or ask to speak to a person. Then it alerts the team.", "Responde al contacto usando el brief del cliente hasta que reserve o pida hablar con una…": "Replies to the contact using the client brief until they book or ask to speak to a…", "Añadir etiqueta": "Add tag", "Quitar etiqueta": "Remove tag", "Actualizar contacto": "Update contact", "Campo": "Field", "Nuevo valor": "New value", "Crear o mover oportunidad": "Create or move opportunity", "Asignar a una persona": "Assign to someone", "Asignar a": "Assign to", "Reparto": "Distribution", "Siempre a esta persona": "Always to this person", "Por turnos entre el equipo": "Round robin across the team", "Crear tarea": "Create task", "Tarea": "Task", "Llamar al contacto": "Call the contact", "Para": "For", "Plazo (horas)": "Due in (hours)", "Añadir nota": "Add note", "Nota": "Note", "Pasar a otro flujo": "Move to another flow", "Salir de este flujo": "Leave this flow", "Esperar": "Wait", "Un tiempo": "A set time", "Hasta un momento": "Until a moment", "Hasta que pase algo": "Until something happens", "Cantidad": "Amount", "Unidad": "Unit", "minutos": "minutes", "horas": "hours", "días": "days", "Hasta": "Until", "24 h antes de la cita": "24 h before the appointment", "2 h antes de la cita": "2 h before the appointment", "El día siguiente a las {n}:{n}": "The next day at {n}:{n}", "El próximo lunes a las {n}:{n}": "Next Monday at {n}:{n}", "Hasta que": "Until they", "Responda": "Reply", "Abra el email": "Open the email", "Haga clic en un enlace": "Click a link", "Reserve una cita": "Book an appointment", "Como máximo (días)": "At most (days)", "Condición si / no": "If / else condition", "Si el contacto": "If the contact", "Respondió": "Replied", "Tiene la etiqueta": "Has the tag", "Viene de la fuente": "Comes from source", "Está en la etapa": "Is in stage", "Abrió el último email": "Opened the last email", "Hizo clic en un enlace": "Clicked a link", "Tiene teléfono": "Has a phone number", "Prueba A/B": "A/B test", "Porcentaje que va a la versión A": "Percentage that goes to version A", "Reparte los contactos al azar entre dos caminos para ver cuál funciona mejor.": "Splits contacts randomly between two paths to see which works better.", "Se cumple cuando el contacto": "Met when the contact", "Reserva una cita": "Books an appointment", "Responde": "Replies", "Gana la oportunidad": "Wins the opportunity", "Paga": "Pays", "Hace clic en un enlace": "Clicks a link", "Si se cumple en cualquier momento, el contacto salta aquí y sigue desde este punto.": "If it's met at any point, the contact jumps here and continues from this step.", "Enviar webhook": "Send webhook", "Método": "Method", "Añadir fila en Google Sheets": "Add row to Google Sheets", "Hoja": "Sheet", "Enviar conversión a Meta": "Send conversion to Meta", "Evento": "Event", "Usa la API de conversiones para que Meta optimice con resultados reales, no con clics.": "Uses the Conversions API so Meta optimises for real results, not clicks.", "Conversión offline en Google Ads": "Offline conversion in Google Ads", "Acción de conversión": "Conversion action", "Cita realizada": "Appointment completed", "Insertar dato": "Insert field", "Guardar": "Save", "Subir": "Move up", "Paso borrado": "Step deleted", "Borrar (y {n} paso de la rama No)": "Delete (and {n} step in the No branch)", "Borrar (y {n} pasos de la rama No)": "Delete (and {n} steps in the No branch)", "Borrar (y {n} paso de la rama B)": "Delete (and {n} step in branch B)", "Borrar (y {n} pasos de la rama B)": "Delete (and {n} steps in branch B)", "{n} caracteres · {n} SMS": "{n} characters · {n} SMS", "Elige una etapa": "Choose a stage", "Quien tenga asignado el contacto": "Whoever the contact is assigned to", "Elige un formulario": "Choose a form", "Crea primero un embudo con un formulario.": "Create a funnel with a form first.", "Elige un flujo": "Choose a flow", "Sin configurar": "Not set up", "Hasta que responda · máx. {n} d": "Until they reply · max. {n} d", "{n} minuto": "{n} minute", "{n} minutos": "{n} minutes", "{n} hora": "{n} hour", "{n} horas": "{n} hours", "{n} día": "{n} day", "{n} días": "{n} days", "¿Puede entrar el mismo contacto más de una vez?": "Can the same contact enter more than once?", "Si el contacto responde": "If the contact replies", "Sale del flujo y avisa al equipo": "Leaves the flow and alerts the team", "Sigue en el flujo": "Stays in the flow", "Evita que alguien que ya está hablando contigo reciba mensajes automáticos.": "Stops someone who's already talking to you from getting automated messages.", "Horario de envío": "Sending hours", "Cualquier hora": "Any time", "Lunes a viernes, de {n}:{n} a {n}:{n}": "Monday to Friday, {n}:{n} to {n}:{n}", "Todos los días, de {n}:{n} a {n}:{n}": "Every day, {n}:{n} to {n}:{n}", "Fuera de horario, los mensajes esperan al siguiente hueco.": "Outside those hours, messages wait for the next slot.", "Ajustes guardados": "Settings saved", "Flujo publicado": "Flow published", "Flujo pausado": "Flow paused", "Flujo borrado": "Flow deleted", "Flujo creado": "Flow created", "Es una simulación con sus datos reales: no se envía nada.": "It's a simulation with their real data: nothing is sent.", "Simular": "Simulate", "Lo que pasaría": "What would happen", "Esta subcuenta aún no tiene contactos con los que probar.": "This sub-account has no contacts to test with yet.", "Ahora": "Now", "Entra en el flujo": "Enters the flow", "Termina el flujo": "Flow ends", "Sale de este flujo": "Leaves this flow", "Espera {n} minuto": "Waits {n} minute", "Espera {n} minutos": "Waits {n} minutes", "Espera {n} hora": "Waits {n} hour", "Espera {n} horas": "Waits {n} hours", "Espera {n} día": "Waits {n} day", "Espera {n} días": "Waits {n} days", "Espera hasta": "Waits until", "Espera hasta que responda (en la prueba no pasa: sigue al cabo de {n} día)": "Waits until they reply (doesn't happen in the test: continues after {n} day)", "Espera hasta que responda (en la prueba no pasa: sigue al cabo de {n} días)": "Waits until they reply (doesn't happen in the test: continues after {n} days)", "Espera hasta que responda: ya ha respondido, sigue enseguida": "Waits until they reply: they already have, continues right away", "Prueba A/B: en la simulación va por la versión A": "A/B test: in the simulation it takes version A", "no se envía, el contacto no tiene teléfono": "not sent, the contact has no phone number", "no se envía, el contacto no tiene email": "not sent, the contact has no email", "Respondió: sí": "Replied: yes", "Respondió: no": "Replied: no", "Nombre del embudo": "Funnel name", "Despublicar": "Unpublish", "Indica el dominio en Ajustes.": "Set the domain in Settings.", "indica el dominio en Ajustes.": "set the domain in Settings.", "Visitas": "Visits", "en el primer paso": "on the first step", "{n} % de conversión": "{n} % conversion", "{n} % de las visitas": "{n} % of visits", "{n} % pasan aquí": "{n} % get here", "Pasos del embudo": "Funnel steps", "{n} visitas": "{n} visits", "Añadir paso": "Add step", "Paso {n}": "Step {n}", "Nombre del paso": "Step name", "Ruta": "Path", "Titular": "Headline", "Tu primera visita, gratis y sin compromiso": "Your first visit, free and with no commitment", "Subtítulo": "Subheadline", "Puntos clave": "Key points", "Uno por línea.": "One per line.", "Estudio {n}D incluido Presupuesto cerrado Financiación sin intereses": "{n}D scan included Fixed quote Interest-free financing", "Imagen o vídeo": "Image or video", "Nombre del archivo o enlace": "File name or link", "Duración de la cita (min)": "Appointment length (min)", "Disponibilidad": "Availability", "Precio (€)": "Price (€)", "Texto del botón del formulario": "Form button text", "Botón principal": "Main button", "Quiero mi primera visita": "I want my first visit", "Campos": "Fields", "Fecha preferida": "Preferred date", "Pregunta propia (opcional)": "Custom question (optional)", "¿Qué tratamiento te interesa?": "Which treatment are you interested in?", "Casilla de consentimiento y enlace a la política de privacidad. Necesaria para cumplir el RGPD.": "Consent checkbox and privacy policy link. Required to comply with GDPR.", "Flujos que activa este formulario:": "Flows this form triggers:", "ninguno todavía.": "none yet.", "Crear flujo para este formulario": "Create flow for this form", "Subir paso": "Move step up", "Bajar paso": "Move step down", "Borrar paso": "Delete step", "Sin pasos.": "No steps.", "Añade la primera página del embudo.": "Add the funnel's first page.", "Titular de la página": "Page headline", "Texto del botón": "Button text", "Acepto la política de privacidad y que me contactéis sobre mi solicitud.": "I accept the privacy policy and agree to be contacted about my request.", "Las páginas las publicará tu sistema cuando lo montes en Claude Code, en el dominio que indiques. Los envíos de cada formulario crean el contacto en esta subcuenta y activan sus flujos.": "Your system will publish the pages once you build it in Claude Code, on the domain you set. Each form submission creates the contact in this sub-account and triggers its flows.", "Captación": "Opt-in", "Formulario para conseguir el contacto": "Form to capture the contact", "Confirma y da el siguiente paso": "Confirms and gives the next step", "Calendario para elegir día y hora": "Calendar to pick a day and time", "Página de venta": "Sales page", "Presenta la oferta": "Presents the offer", "Pedido": "Order", "Datos y pago": "Details and payment", "Oferta adicional": "Upsell", "Un extra justo después de comprar": "An extra right after buying", "Registro a evento": "Event registration", "Webinar o evento presencial": "Webinar or in-person event", "Encuesta": "Survey", "Preguntas para cualificar": "Questions to qualify", "Dominio": "Domain", "Un subdominio del cliente apuntado a tu servidor.": "A client subdomain pointed at your server.", "Embudo borrado": "Funnel deleted", "Embudo marcado como publicado": "Funnel marked as published", "Embudo en borrador": "Funnel back in draft", "Lun {n}:{n}": "Mon {n}:{n}", "Mar {n}:{n}": "Tue {n}:{n}", "Mié {n}:{n}": "Wed {n}:{n}", "Paso {n}: Captación": "Step {n}: Opt-in", "Paso {n}: Gracias": "Step {n}: Thank you", "Formulario borrado": "Deleted form", "ahora": "just now", "hace {n} min": "{n} min ago", "hace {n} h": "{n} h ago", "hace {n} d": "{n} d ago", "Guardado hace {n} min": "Saved {n} min ago", "Guardado hace {n} h": "Saved {n} h ago", "Guardado hace {n} d": "Saved {n} d ago", "{n} k €": "{n}k €", "Sin nombre": "Unnamed", "Tu marca": "Your brand", "{n}/{n} recomendado": "{n}/{n} recommended", "Todo": "All", "Vista previa como": "Previewing as", "Nuevo lead": "New lead", "Reactivación": "Reactivation", "Llamar al lead que no responde": "Call the lead who isn't replying", "Llamar para reprogramar la cita": "Call to reschedule the appointment", "Recordatorios de cita": "Appointment reminders", "Recuperar ausencias": "Win back no-shows", "Pedir reseñas": "Ask for reviews", "Reactivar contactos": "Reactivate contacts", "Flujo sin nombre": "Untitled flow", "Embudo sin nombre": "Untitled funnel", "Lead de la página": "Page lead", "respondió": "replied", "reseña pedida": "review requested", "sin fecha de fin": "no end date", "Nueva subcuenta.": "New sub-account.", "Nuevo contacto.": "New contact.", "Nueva oportunidad.": "New opportunity.", "Nueva conversación.": "New conversation.", "Nueva campaña.": "New campaign.", "Invitar persona.": "Invite someone.", "Añadir paso.": "Add step.", "Añadir disparador.": "Add trigger.", "Copiar brief.": "Copy brief.", "Probar con un contacto.": "Test with a contact.", "Ajustes del flujo.": "Flow settings.", "Ajustes del embudo.": "Funnel settings.", "Importar datos.": "Import data.", "Primero, un contacto.": "First, a contact.", "Conectar Meta.": "Connect Meta.", "Conectar Google.": "Connect Google.", "Desconectar Meta.": "Disconnect Meta.", "Desconectar Google.": "Disconnect Google.", "Sin acceso.": "No access.", "Accesos recibidos": "Access received", "Recibidos": "Received", "Pendientes": "Pending", "El CRM está lleno: borra registros antiguos para seguir.": "The CRM is full: delete old records to keep going.", "No se ha podido guardar. Prueba otra vez en unos segundos.": "Couldn't save. Try again in a few seconds.", "No tienes permiso para editar este CRM.": "You don't have permission to edit this CRM.", "sí": "yes", "sin conectar": "not connected", "revisar conexión": "check connection", "por revisar": "to check", "Idioma": "Language", "Captación · Mrs. Pink Agency": "Opt-in · Mrs. Pink Agency", "Llamar": "Call", "Todos los sexos": "All genders", "reserva una cita": "books an appointment", "responde": "replies", "gana la oportunidad": "wins the opportunity", "paga": "pays", "hace clic en un enlace": "clicks a link", "responda": "reply", "abra el email": "open the email", "haga clic en un enlace": "click a link", "reserve una cita": "book an appointment", "el día siguiente a las {n}:{n}": "the next day at {n}:{n}", "el próximo lunes a las {n}:{n}": "next Monday at {n}:{n}"};
const EN_PAT=[["^Estás viendo el CRM como (.+)$", "You're viewing the CRM as {1}"], ["^· (.+?) · (.+?)\\. Así lo verá cuando tenga inicio de sesión\\. Lo que cambies aquí se guarda de verdad\\.$", "· {t1} · {t2}. This is how they'll see it once they can sign in. Anything you change here is saved for real."], ["^Dejarás de recibir datos nuevos de (.+?) en (.+?)\\. Los datos que ya tienes se quedan en Informes\\.$", "You'll stop receiving new data from {1} in {2}. The data you already have stays in Reports."], ["^Vincula la cuenta de (.+?) de (.+?) para preparar y publicar campañas desde el CRM\\.$", "Link {2}'s {1} account to prepare and publish campaigns from the CRM."], ["^Sube el informe de (.+?) de (.+?)\\. Si una semana ya existe, se sustituye\\.$", "Upload the {1} report for {2}. If a week already exists, it's replaced."], ["^Conecta la cuenta de (.+?) en Integraciones para poder enviarla\\.$", "Connect the {1} account in Integrations to be able to send it."], ["^Enviada (.+?)\\. Tu sistema de integración la creará en (.+?) y aquí verás si queda activa o si hay errores\\.$", "Sent {t1}. Your integration system will create it on {2} and you'll see here whether it's active or has errors."], ["^(Meta Ads|Google Ads) devolvió un error\\.$", "{1} returned an error."], ["^Vista previa como (.+)$", "Previewing as {1}"], ["^Movida a (.+)$", "Moved to {t1}"], ["^(.+?) vinculada$", "{1} linked"], ["^(.+?) desconectada$", "{1} disconnected"], ["^Guardado (.+)$", "Saved {t1}"], ["^Datos al día (.+)$", "Data up to date {t1}"], ["^entró (.+)$", "came in {t1}"], ["^Última actualización: (.+)$", "Last updated: {t1}"], ["^Entra en el flujo: (.+)$", "Enters the flow: {1}"], ["^Brief de (.+)$", "Brief for {1}"], ["^Espera hasta: (.+)$", "Waits until: {t1}"], ["^Espera hasta que (.+?) \\(en la prueba no pasa: sigue al cabo de (.+?)\\)$", "Waits until they {t1} (doesn't happen in the test: continues after {t2})"], ["^Objetivo «(.+?)»: aún no$", "Goal “{t1}”: not yet"], ["^Objetivo «(.+?)»: cumplido$", "Goal “{t1}”: met"], ["^(.+?): sí \\(en la prueba se da por hecho que no\\)$", "{t1}: yes (the test assumes not)"], ["^(.+?): no \\(en la prueba se da por hecho que no\\)$", "{t1}: no (the test assumes not)"], ["^(\\d+) filas importadas en (\\d+) campañas?$", "{1} rows imported into {2} campaign(s)"], ["^(\\d+) filas listas para importar · (\\d+) sin fecha válida, se ignoran\\.$", "{1} rows ready to import · {2} without a valid date, ignored."], ["^(\\d+) filas listas para importar\\.$", "{1} rows ready to import."], ["^Nuevo contacto desde (.+)$", "New contact from {1}"], ["^Enviada (.+)$", "Sent {t1}"], ["^Tiene la etiqueta «(.+?)»$", "Has the tag “{1}”"], ["^Viene de la fuente (.+)$", "Comes from source {t1}"], ["^Está en la etapa (.+)$", "Is in stage {t1}"], ["^Captación · (.+)$", "Opt-in · {1}"]].map(([r,t])=>[new RegExp(r),t]);
const I18N_NUM=/€\s?\d[\d.,]*|\d[\d.,]*\s?€|\d[\d.,]*/g;
const I18N_SEPS=[" · "," → "," › ",": "," | "];
const fixNum=n=>n.replace(/(\d),(\d{1,2})(?!\d)/,"$1.$2");
function trText(t,depth){
  depth=depth||0;
  if(Object.prototype.hasOwnProperty.call(EN_DICT,t)) return EN_DICT[t];
  const nums=[]; const key=t.replace(I18N_NUM,m=>{ nums.push(m); return "{n}"; });
  if(nums.length&&Object.prototype.hasOwnProperty.call(EN_DICT,key)){ let i=0; return EN_DICT[key].replace(/\{n\}/g,()=>fixNum(nums[i++]||"")); }
  for(const [rx,tpl] of EN_PAT){ const m=t.match(rx); if(m) return tpl.replace(/\{t?(\d)\}/g,(all,g)=>{ const v=m[+g]||""; return all[1]==="t"?(trText(v,depth+1)??v):v; }); }
  if(depth>3) return null;
  for(const s of I18N_SEPS){ if(!t.includes(s)) continue; const parts=t.split(s); const out=parts.map(p=>trText(p,depth+1)); if(out.some(o=>o!=null)) return parts.map((p,i)=>out[i]??p).join(s); }
  if(/[.?!] /.test(t)){ const parts=t.split(/(?<=[.?!]) /); if(parts.length>1){ const out=parts.map(p=>trText(p,depth+1)); if(out.some(o=>o!=null)) return parts.map((p,i)=>out[i]??p).join(" "); } }
  if(t.includes(", ")&&t.length<90){ const parts=t.split(", "); const out=parts.map(p=>trText(p,depth+1)); if(out.every(o=>o!=null)) return out.join(", "); }
  return null;
}
const tx = s => LANG==="en" ? (trText(String(s).replace(/\s+/g," ").trim())??s) : s;
const I18N_ATTR=["placeholder","aria-label","title"];
const I18N_DONE=new WeakMap();
function i18nTextNode(n){
  const pe=n.parentElement; if(!pe||pe.closest("textarea,script,style,[data-notr]")) return;
  const v=n.nodeValue; if(I18N_DONE.get(n)===v) return;
  const t=v.replace(/\s+/g," ").trim(); if(!t||!/[A-Za-zÁÉÍÓÚáéíóúñÑ]/.test(t)) return;
  const r=trText(t); if(r!=null&&r!==t){ const lead=v.match(/^\s*/)[0], tail=v.match(/\s*$/)[0]; const nv=lead+r+tail; I18N_DONE.set(n,nv); n.nodeValue=nv; } else I18N_DONE.set(n,v);
}
function i18nAttrs(el){ if(el.closest&&el.closest("[data-notr]")) return; I18N_ATTR.forEach(a=>{ const v=el.getAttribute&&el.getAttribute(a); if(!v) return; const r=trText(v.replace(/\s+/g," ").trim()); if(r!=null&&r!==v) el.setAttribute(a,r); }); }
function i18nTree(root){
  if(LANG!=="en"||!root) return;
  if(root.nodeType===3){ i18nTextNode(root); return; }
  if(root.nodeType!==1) return;
  i18nAttrs(root); root.querySelectorAll("[placeholder],[aria-label],[title]").forEach(i18nAttrs);
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT); let n; while((n=w.nextNode())) i18nTextNode(n);
}
const i18nObs=new MutationObserver(muts=>{ if(LANG!=="en") return;
  for(const m of muts){ if(m.type==="childList") m.addedNodes.forEach(i18nTree); else if(m.type==="characterData") i18nTextNode(m.target); else if(m.type==="attributes") i18nAttrs(m.target); } });
function setFormats(){ LOC=LANG==="en"?"en-GB":"es-ES";
  eur=new Intl.NumberFormat(LOC,{style:"currency",currency:"EUR",maximumFractionDigits:0});
  nf=new Intl.NumberFormat(LOC);
  eur2=new Intl.NumberFormat(LOC,{style:"currency",currency:"EUR",minimumFractionDigits:2,maximumFractionDigits:2});
  document.documentElement.lang=LANG; }
function setLang(l){ if(l===LANG) return; LANG=l; try{ localStorage.setItem("mp-lang",l); }catch(e){} setFormats(); closeDrawer(); S.menu=false; render(); i18nTree(document.body); }


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
const COLS = ["subcuentas","contactos","oportunidades","conversaciones","campanas","integraciones","anuncios","campanasAds","briefs","usuarios","flujos","embudos","citas","tareas","facturas","productos","suscripciones","resenas","agentes"];
let eur = new Intl.NumberFormat(LOC,{style:"currency",currency:"EUR",maximumFractionDigits:0});
let nf = new Intl.NumberFormat(LOC);

/* ---------- Estado ---------- */
const S = {
  data:{subcuentas:[],contactos:[],oportunidades:[],conversaciones:[],campanas:[],integraciones:[],anuncios:[],campanasAds:[],briefs:[],usuarios:[],flujos:[],embudos:[],citas:[],tareas:[],facturas:[],productos:[],suscripciones:[],resenas:[],agentes:[]},
  loaded:{}, mode:"cargando", readOnly:false,
  view:"agencia", subId:null, tab:"inicio", agTab:"citas", calWeek:0, calHidden:[], payTab:"facturas", revF:"todas", convQ:"", convCanal:"", atab:"subcuentas", periodo:12, verComo:null, autoTab:"flujos", flow:null, fun:null, flowIns:null, camp:null, brief:null, subDraft:null, adsFiltro:"",
  q:"", tag:"", convSel:null, draft:"", draftCanal:"WhatsApp", menu:false
};
try{ const saved = JSON.parse(localStorage.getItem("mp-crm-nav")||"null"); if(saved){ S.view=saved.view||"agencia"; S.subId=saved.subId||null; S.tab=saved.tab||"inicio"; S.atab=saved.atab||"subcuentas"; S.periodo=saved.periodo||12; } }catch(e){}
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
  return d.toLocaleDateString(LOC,{day:"numeric",month:"short"});
}
function fecha(iso){ if(!iso) return "—"; return new Date(iso).toLocaleDateString(LOC,{day:"numeric",month:"short",year:"numeric"}); }
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
  // Si no hay adaptador o el servidor no responde, cae a localStorage.
  let d=null;
  try{ d = window.MPDB ? await window.MPDB.connect() : null; }catch(e){ d=null; }
  if(!d){ S.mode="local"; const L=localLoad(), SD=window.MP_SEED||{}; COLS.forEach(c=>S.data[c]=Array.isArray(L[c])?L[c]:(Array.isArray(SD[c])?JSON.parse(JSON.stringify(SD[c])):[])); render(); return; }
  db=d; S.mode="vivo";
  try{
    const me = window.MPDB.me ? await window.MPDB.me() : null;
    if(me && me.canWrite===false) S.readOnly=true;
  }catch(e){}
  COLS.forEach(col=>{
    db.collection(col).onSnapshot(snap=>{
      S.data[col]=snap.docs.map(d=>Object.assign({id:d.id},d.data()));
      S.loaded[col]=true; render();
    }, err=>{ S.loaded[col]=true; render(); });
  });
}
// En vista previa sin capacidad, a los 10 s use() devuelve null → modo demo.
setTimeout(()=>{ if(S.mode==="cargando"){ S.mode="demo"; render(); } },11000);

/* ---------- Render principal ---------- */
function render(){
  applyVerComo();
  if(S.view==="sub" && !sub() && S.mode!=="cargando" && (S.mode!=="vivo" || S.loaded.subcuentas)){ S.view="agencia"; S.subId=null; }
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
    nav=navSubHTML(vu);
  }
  $("#side").innerHTML=`
    <div class="side-top"><div class="wordmark" data-notr>mrs. pink agency</div><div class="lang" role="group" aria-label="Idioma"><button type="button" data-lang="es" aria-pressed="${LANG==="es"}" data-notr>ES</button><button type="button" data-lang="en" aria-pressed="${LANG==="en"}" data-notr>EN</button></div></div>
    <div class="switch">
      <button class="switch-btn" id="switch-btn" aria-haspopup="menu" aria-expanded="${S.menu}">${current}${I.chev}</button>
      ${menu}
    </div>
    <button type="button" class="side-search" data-palette>${I.search}<span>Buscar</span><kbd>⌘K</kbd></button>
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
  else if(S.view==="sub") html = ({contactos:viewContactos,oportunidades:viewOpps,conversaciones:viewConvs,marketing:viewMarketing,informes:()=>viewInformes(S.subId),integraciones:viewIntegSub,campanas:viewCampanas,automatizaciones:viewAutomatizaciones,configuracion:viewConfig,inicio:viewInicio,calendario:viewCalendario,pagos:viewPagos,reputacion:viewReputacion,agente:viewAgente}[S.tab]||viewInicio)();
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
let eur2 = new Intl.NumberFormat(LOC,{style:"currency",currency:"EUR",minimumFractionDigits:2,maximumFractionDigits:2});
const subById = id => S.data.subcuentas.find(s=>s.id===id);
const integ = id => S.data.integraciones.find(x=>x.id===id) || {};
function monday(d){ const x=new Date(d); const day=(x.getDay()+6)%7; x.setHours(0,0,0,0); x.setDate(x.getDate()-day); return x; }
const ymd = d => { const x=new Date(d); return x.getFullYear()+"-"+String(x.getMonth()+1).padStart(2,"0")+"-"+String(x.getDate()).padStart(2,"0"); };
const wkLabel = w => new Date(w+"T12:00:00").toLocaleDateString(LOC,{day:"numeric",month:"short"});
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
        tip.innerHTML=`<b>${esc(c.lab?c.lab[i]:"Semana del "+wkLabel(c.W[i]))}</b><br>`+c.rows[i].map(x=>`<i style="background:${c.dot&&c.dot[x.k]||"var(--s-"+x.k+")"}"></i>${esc(x.label)}: <b>${esc(x.v)}</b>`).join("<br>")+`<br><span style="opacity:.7">${esc(c.tot[i])}</span>`;
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

/* ---------- Informes: anuncios + ventas reales + previsión ---------- */
const ACC = {formulario:"Formularios",mensaje:"Mensajes",llamada:"Llamadas",reserva:"Reservas",compra:"Compras"};
const EFI = {baja:[.45,"Baja"],media:[.6,"Media"],alta:[.8,"Alta"]};
const closeDate = o => o.cerrado||o.actualizado||o.creado;
const pct = (v,d=1) => (v*100).toFixed(d).replace(".",LANG==="en"?".":",")+" %";
const xr = v => (v>=10?Math.round(v):v.toFixed(1)).toString().replace(".",LANG==="en"?".":",")+"×";
const div0 = (a,b) => b?a/b:0;
const MES = d => d.toLocaleDateString(LOC,{month:"short",year:"2-digit"});

function adsRep(sid,W,plat){
  const start=new Date(W[0]+"T00:00:00"), end=new Date(+new Date(W[W.length-1]+"T00:00:00")+7*DAY);
  const inS=x=>sid==null||x.sub===sid, okP=k=>!plat||k===plat;
  const byW={}; W.forEach(w=>byW[w]={inv:0,invMeta:0,invGoogle:0,conv:0,ventas:0,ing:0});
  const Z=()=>({inv:0,imp:0,cl:0,conv:0,acc:{},ventas:0,ing:0,opps:0,last:""});
  const tot=Z(), P={meta:Z(),google:Z()}, camps={};
  const keyOf=(sub,pl,c)=>sub+"|"+pl+"|"+(c||"");
  S.data.anuncios.filter(a=>inS(a)&&okP(platKey(a.plataforma))).forEach(a=>{
    const k=platKey(a.plataforma), key=keyOf(a.sub,a.plataforma,a.campana);
    const c=camps[key]||(camps[key]=Object.assign(Z(),{key,a,k,weeks:{}}));
    (a.semanas||[]).forEach(r=>{ const w=r.inicio; if(!byW[w]) return;
      const inv=+r.inversion||0, conv=+(r.conversiones!=null?r.conversiones:r.leads)||0, acc=r.acciones&&Object.keys(r.acciones).length?r.acciones:{formulario:conv};
      [tot,P[k],c].forEach(o=>{ o.inv+=inv; o.imp+=+r.impresiones||0; o.cl+=+r.clics||0; o.conv+=conv; Object.entries(acc).forEach(([t,v])=>o.acc[t]=(o.acc[t]||0)+(+v||0)); if(w>o.last) o.last=w; });
      byW[w].inv+=inv; byW[w][k==="google"?"invGoogle":"invMeta"]+=inv; byW[w].conv+=conv;
      c.weeks[w]=Object.assign({inv:0,imp:0,cl:0,conv:0,ventas:0,ing:0},c.weeks[w]||{}); const cw=c.weeks[w]; cw.inv+=inv; cw.imp+=+r.impresiones||0; cw.cl+=+r.clics||0; cw.conv+=conv; });
  });
  const ventasList=[];
  S.data.oportunidades.filter(inS).forEach(o=>{ const k=contacto(o.contactoId); if(!k) return; const g=grupo(k.fuente); if(g==="otros"||!okP(g)) return;
    let key=keyOf(o.sub,k.fuente,k.campana);
    if(!camps[key]){ key=keyOf(o.sub,k.fuente,""); }
    const cr=new Date(o.creado||k.creado||0);
    const getC=()=>camps[key]||(camps[key]=Object.assign(Z(),{key,a:{sub:o.sub,plataforma:k.fuente,campana:"",estado:""},k:g,weeks:{},sinCamp:true}));
    if(cr>=start&&cr<end){ tot.opps++; P[g].opps++; getC().opps++; }
    if(o.etapa!==etapaGanada(subById(o.sub))) return;
    const cd=new Date(closeDate(o)); if(!(cd>=start&&cd<end)) return;
    const v=+o.valor||0, w=ymd(monday(cd)), c=getC();
    [tot,P[g],c].forEach(x=>{ x.ventas++; x.ing+=v; });
    if(byW[w]){ byW[w].ventas++; byW[w].ing+=v; }
    c.weeks[w]=Object.assign({inv:0,imp:0,cl:0,conv:0,ventas:0,ing:0},c.weeks[w]||{}); c.weeks[w].ventas++; c.weeks[w].ing+=v;
    ventasList.push({o,k,key,cd});
  });
  return {W,byW,tot,P,camps:Object.values(camps),ventasList};
}

/* Supuestos de la previsión (por subcuenta) */
function fcBase(sid){
  const R=adsRep(sid,weeks(12),""), T=R.tot, m=52/12/12; // 12 semanas → mes
  return {B0:T.inv*m, L0:T.conv*m, V0:T.ventas*m, close:div0(T.ventas,T.conv), ticket:div0(T.ing,T.ventas), cpl:div0(T.inv,T.conv), R};
}
function fcState(sid){
  S.fc=S.fc||{}; if(S.fc[sid]) return S.fc[sid];
  const b=fcBase(sid), sv=(subById(sid)||{}).prevision||{};
  const st={presu:Math.round((sv.presu||b.B0*1.5||1000)/50)*50, ticket:Math.round(sv.ticket||b.ticket||1000), cierre:+(sv.cierre||(b.close*100)||5).toFixed(1),
    margen:sv.margen||60, efi:sv.efi||"media", objetivo:sv.objetivo||Math.round(b.V0*b.ticket*2/1000)*1000||10000};
  S.fc[sid]=st; return st;
}
function fcModel(b,st){
  const e=EFI[st.efi][0], close=st.cierre/100, m=st.margen/100, cpl0=b.cpl||1, B0=b.B0||1;
  const leads=B=>B<=0?0:(B/cpl0)*Math.pow(B/B0,-e);
  const at=B=>{ const L=leads(B), V=L*close, I=V*st.ticket; return {B,L,V,I,G:I*m-B,cpa:div0(B,V),roas:div0(I,B),cplB:div0(B,L),mcpa:close?cpl0*Math.pow(B/B0,e)/((1-e)*close):0}; };
  const k=close*st.ticket*m/cpl0;
  const opt=k>0?B0*Math.pow((1-e)*k,1/e):0, ceil=k>0?B0*Math.pow(k,1/e):0;
  const need=I=>{ if(!(I>0)||!(close*st.ticket>0)) return 0; return B0*Math.pow(I/(close*st.ticket)*cpl0/B0,1/(1-e)); };
  return {at,opt,ceil,need,cpaMax:st.ticket*m,e};
}

function chartCPA(id,W,byW,cpaMax){
  const w=640,h=230,pl=56,pr=12,pt=14,pb=28, ih=h-pt-pb, bw=(w-pl-pr)/W.length;
  const roll=W.map((wk,i)=>{ let inv=0,v=0; for(let j=Math.max(0,i-3);j<=i;j++){ inv+=byW[W[j]].inv; v+=byW[W[j]].ventas; } return v?inv/v:null; });
  const vals=roll.filter(v=>v!=null); if(!vals.length) return `<p class="muted" style="margin:0">Todavía no hay ventas atribuidas a anuncios en este periodo.</p>`;
  const max=niceMax(Math.max(...vals,cpaMax||0)*1.05);
  let g=axis(W,max,v=>short(v)+" €",w,h,pl,pr,pt,pb);
  if(cpaMax>0 && cpaMax<=max){ const y=pt+ih-cpaMax/max*ih; g+=`<line x1="${pl}" x2="${w-pr}" y1="${y}" y2="${y}" stroke="var(--bad)" stroke-width="1.5" stroke-dasharray="5 4"/><text x="${w-pr}" y="${y-6}" text-anchor="end" style="fill:var(--bad)">CPA máximo rentable</text>`; }
  g+=`<line class="cross" id="${id}-x" x1="0" x2="0" y1="${pt}" y2="${pt+ih}" visibility="hidden"/>`;
  let path="", started=false; roll.forEach((v,i)=>{ if(v==null){ started=false; return; } const x=pl+i*bw+bw/2, y=pt+ih-v/max*ih; path+=(started?"L":"M")+x.toFixed(1)+","+y.toFixed(1); started=true; });
  g+=`<path d="${path}" fill="none" stroke="var(--granate-ink,var(--fg))" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
  const li=roll.map((v,i)=>v!=null?i:-1).filter(i=>i>=0).pop(); if(li!=null) g+=`<circle cx="${pl+li*bw+bw/2}" cy="${pt+ih-roll[li]/max*ih}" r="4" fill="var(--fg)" stroke="var(--surface)" stroke-width="2"/>`;
  W.forEach((wk,i)=>g+=`<rect class="hit" data-i="${i}" x="${pl+i*bw}" y="${pt}" width="${bw}" height="${ih}"/>`);
  CH[id]={W,cross:id+"-x",cx:W.map((_,i)=>pl+i*bw+bw/2),rows:W.map((wk,i)=>[{k:"cpa",label:"CPA real (4 semanas)",v:roll[i]!=null?eur.format(roll[i]):"sin ventas"},{k:"v",label:"Ventas esta semana",v:nf.format(byW[wk].ventas)}]),tot:W.map(wk=>eur.format(byW[wk].inv)+" invertidos esa semana"),dot:{cpa:"var(--fg)",v:"var(--rosa)"}};
  return `<div class="chart" data-chart="${id}"><svg viewBox="0 0 ${w} ${h}" role="img" aria-label="CPA real por semana">${g}</svg><div class="tip" hidden></div></div>`;
}
function chartCurve(id,M,b,st){
  const w=640,h=250,pl=60,pr=14,pt=14,pb=30, ih=h-pt-pb, iw=w-pl-pr;
  const xMax=Math.max(b.B0*4,st.presu*1.3,Math.min(M.opt*1.4,b.B0*8),500), N=40, xs=[...Array(N+1)].map((_,i)=>xMax*i/N);
  const pts=xs.map(x=>M.at(x)), yMax=niceMax(Math.max(...pts.map(p=>p.I))*1.02), yMin=Math.min(0,...pts.map(p=>p.G));
  const Y=v=>pt+ih-(v-yMin)/(yMax-yMin)*ih, X=v=>pl+v/xMax*iw;
  let g="";
  for(let i=0;i<=4;i++){ const v=yMin+(yMax-yMin)*i/4; g+=`<line class="${i?"gl":"base"}" x1="${pl}" x2="${w-pr}" y1="${Y(v)}" y2="${Y(v)}"/><text x="${pl-8}" y="${Y(v)+4}" text-anchor="end">${esc(short(v))} €</text>`; }
  if(yMin<0) g+=`<line class="base" x1="${pl}" x2="${w-pr}" y1="${Y(0)}" y2="${Y(0)}"/>`;
  for(let i=0;i<=5;i++){ const v=xMax*i/5; g+=`<text x="${X(v)}" y="${h-8}" text-anchor="middle">${esc(short(v))} €</text>`; }
  const line=(f,col,dash)=>`<polyline fill="none" stroke="${col}" stroke-width="2" ${dash?'stroke-dasharray="4 4"':""} stroke-linejoin="round" points="${pts.map(p=>X(p.B).toFixed(1)+","+Y(f(p)).toFixed(1)).join(" ")}"/>`;
  g+=line(p=>p.B,"var(--line-strong)",1)+line(p=>p.I,"var(--s-meta)")+line(p=>p.G,"var(--s-google)");
  const mk=(x,lab,col)=>{ if(!(x>0)||x>xMax) return ""; const p=M.at(x); return `<line x1="${X(x)}" x2="${X(x)}" y1="${pt}" y2="${pt+ih}" stroke="${col}" stroke-width="1" stroke-dasharray="2 3"/><circle cx="${X(x)}" cy="${Y(p.G)}" r="4.5" fill="${col}" stroke="var(--surface)" stroke-width="2"/><text x="${X(x)+5}" y="${pt+10}" style="fill:${col};font-weight:600">${esc(lab)}</text>`; };
  g+=mk(b.B0,"Ahora","var(--muted)")+mk(M.opt,"Máximo beneficio","var(--ok)")+mk(st.presu,"Tu escenario","var(--fg)");
  const hit=xs.map((x,i)=>`<rect class="hit" data-i="${i}" x="${X(x)-iw/N/2}" y="${pt}" width="${iw/N}" height="${ih}"/>`).join("");
  g+=`<line class="cross" id="${id}-x" x1="0" x2="0" y1="${pt}" y2="${pt+ih}" visibility="hidden"/>`+hit;
  CH[id]={W:xs,lab:xs.map(x=>eur.format(x)+" al mes en anuncios"),cross:id+"-x",cx:xs.map(X),
    rows:pts.map(p=>[{k:"i",label:"Ingresos",v:eur.format(p.I)},{k:"g",label:"Beneficio",v:eur.format(p.G)}]),tot:pts.map(p=>"CPA "+(p.V?eur.format(p.cpa):"—")+" · "+nf.format(Math.round(p.V))+" ventas"),dot:{i:"var(--s-meta)",g:"var(--s-google)"}};
  return `<div class="legend"><span><i style="background:var(--s-meta)"></i>Ingresos</span><span><i style="background:var(--s-google)"></i>Beneficio bruto</span><span><i style="background:var(--line-strong)"></i>Inversión</span></div>
    <div class="chart" data-chart="${id}"><svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Curva de escalado: ingresos y beneficio según inversión mensual">${g}</svg><div class="tip" hidden></div></div>`;
}

function delta(cur,prev,goodUp){
  if(!(prev>0)) return "";
  const d=(cur-prev)/prev; if(Math.abs(d)<.005) return `<span class="delta">= igual que antes</span>`;
  const good=goodUp?d>0:d<0;
  return `<span class="delta ${good?"up":"down"}">${d>0?"▲":"▼"} ${pct(Math.abs(d),0)} vs periodo anterior</span>`;
}
function veredicto(c,m){
  if(c.a.estado==="pausada") return `<span class="pill">Pausada</span>`;
  const real=c.ventas?c.ing/c.ventas:0, roasM=div0(c.ing,c.inv)*m;
  if(!c.ventas){ const cpaMax=(fcTicketSub(c.a.sub))*m; return c.inv>cpaMax&&cpaMax>0?`<span class="pill bad">Pausar o rehacer</span>`:`<span class="pill">Pocos datos</span>`; }
  if(c.ventas>=3&&roasM>=2) return `<span class="pill ok">Escalar +20 %</span>`;
  if(roasM>=1) return `<span class="pill warn">Mantener y optimizar</span>`;
  return `<span class="pill bad">Recortar</span>`;
}
const fcTicketSub = sid => (S.fc&&S.fc[sid]&&S.fc[sid].ticket) || fcBase(sid).ticket || 0;
const margenDe = sid => sid ? fcState(sid).margen/100 : .6;

function campKey(k){ return "ck-"+k.replace(/[^A-Za-z0-9]/g,c=>"_"+c.charCodeAt(0).toString(36)); }

function viewInformes(sid){
  const n=S.periodo, plat=S.repPlat||"", s=sid?subById(sid):null, m=margenDe(sid);
  const W=weeks(n), Wp=weeks(n*2).slice(0,n);
  const R=adsRep(sid,W,plat), Rp=adsRep(sid,Wp,plat), T=R.tot, Tp=Rp.tot, M=metrics(sid,n);
  const chips=`<div class="actions"><div class="chips" role="group" aria-label="Plataforma">${[["","Todo"],["meta","Meta Ads"],["google","Google Ads"]].map(([k,l])=>`<button class="chip" data-repplat="${k}" aria-pressed="${plat===k}">${l}</button>`).join("")}</div>
    <div class="chips" role="group" aria-label="Periodo">${[4,12,26].map(k=>`<button class="chip" data-periodo="${k}" aria-pressed="${n===k}">${k} semanas</button>`).join("")}</div></div>`;
  const ttl = sid ? "Tus <span class=\"m\">números.</span>" : "Los números de <span class=\"m\">todas.</span>";
  const head=headHTML(sid?esc(s.nombre):"Vista de agencia", ttl, "Lo que dicen Meta y Google, cruzado con las ventas reales del CRM. Primero los datos, después las opiniones.", chips);

  // Estado de las fuentes
  let fuentes="";
  if(sid){ const ig=integ(sid);
    fuentes=`<div class="srcs">${Object.entries(PLAT).map(([k,p])=>{ const x=ig[k]||{}, st=x.estado||"desconectada", last=R.P[k].last||adsRep(sid,weeks(52),k).P[k].last;
      return `<div class="src"><span class="logo" style="color:var(--s-${k});width:34px;height:34px;border-radius:10px;font-size:12px">${p.ab}</span><div style="min-width:0"><b>${p.nombre} ${estadoPill(x)}</b><small>${st==="desconectada"?"Sin vincular":(st==="error"?"Sin datos nuevos desde "+(last?wkLabel(last):"—"):(x.ultimaSync?"Sincronizado "+rel(x.ultimaSync):"Sin datos todavía"))}${last&&st!=="error"?" · datos hasta la semana del "+wkLabel(last):""}</small></div>${st!=="conectada"&&canEdit()?`<button class="btn sec" data-go-integ="${esc(sid)}" style="padding:6px 12px">${st==="error"?"Reconectar":"Conectar"}</button>`:""}</div>`; }).join("")}</div>`;
  }
  const sinDatos=!S.data.anuncios.some(a=>(sid==null||a.sub===sid)&&(a.semanas||[]).length);
  if(sinDatos){
    return head+fuentes+`<div class="empty"><h2>Aún no hay datos de <span class="m">anuncios.</span></h2><p>Conecta Meta Ads o Google Ads (o sube su informe en CSV) y aquí verás inversión, conversiones, ventas reales, CPA y la previsión para escalar.</p>${sid&&canEdit()?`<button class="btn" data-go-integ="${esc(sid)}">Conectar anuncios</button>`:""}</div>`+viewInformesCRM(sid,M);
  }

  const cpa=div0(T.inv,T.ventas), cpaP=div0(Tp.inv,Tp.ventas), roas=div0(T.ing,T.inv), roasP=div0(Tp.ing,Tp.inv), ben=T.ing*m-T.inv, benP=Tp.ing*m-Tp.inv;
  const kpis=`<div class="kpis">
      <div class="kpi"><small>Inversión en anuncios</small><b class="num">${eur.format(T.inv)}</b><span class="num">Meta ${eur.format(R.P.meta.inv)} · Google ${eur.format(R.P.google.inv)}</span>${delta(T.inv,Tp.inv,true)}</div>
      <div class="kpi"><small>Ingresos de anuncios</small><b class="num">${eur.format(T.ing)}</b><span>ventas cerradas en el CRM</span>${delta(T.ing,Tp.ing,true)}</div>
      <div class="kpi"><small>Retorno real (ROAS)</small><b class="num">${T.inv?xr(roas):"—"}</b><span>ingresos ÷ inversión</span>${delta(roas,roasP,true)}</div>
      <div class="kpi"><small>Beneficio bruto</small><b class="num" style="${ben<0?"color:var(--bad)":""}">${eur.format(ben)}</b><span>margen del ${Math.round(m*100)} % menos anuncios</span>${delta(ben,benP,true)}</div>
    </div><div class="kpis k2">
      <div class="kpi"><small>Conversiones</small><b class="num">${nf.format(T.conv)}</b><span class="num">según las plataformas · ${T.conv?eur2.format(T.inv/T.conv):"—"} cada una</span>${delta(T.conv,Tp.conv,true)}</div>
      <div class="kpi"><small>Oportunidades</small><b class="num">${nf.format(T.opps)}</b><span class="num">en el CRM · ${T.opps?eur.format(T.inv/T.opps):"—"} cada una</span>${delta(T.opps,Tp.opps,true)}</div>
      <div class="kpi"><small>Ventas reales</small><b class="num">${nf.format(T.ventas)}</b><span class="num">${T.conv?pct(T.ventas/T.conv)+" de las conversiones":"—"}</span>${delta(T.ventas,Tp.ventas,true)}</div>
      <div class="kpi"><small>CPA real</small><b class="num">${T.ventas?eur.format(cpa):"—"}</b><span>inversión ÷ ventas reales</span>${delta(cpa,cpaP,false)}</div>
    </div>`;

  // Embudo de pago
  const steps=[["Impresiones",T.imp,T.imp?"CPM "+eur2.format(T.inv/T.imp*1000):""],["Clics",T.cl,T.cl?"CPC "+eur2.format(T.inv/T.cl):""],["Conversiones",T.conv,T.conv?eur2.format(T.inv/T.conv)+" cada una":""],["Oportunidades",T.opps,T.opps?eur.format(T.inv/T.opps)+" cada una":""],["Ventas",T.ventas,T.ventas?"CPA "+eur.format(T.inv/T.ventas):""]];
  const embudo=`<section class="panel"><div class="ph"><h2>Del anuncio a la venta</h2><span>cuánto cuesta cada paso</span></div><div class="pasos">${steps.map(([l,v,c],i)=>`${i?`<div class="paso-r num">${steps[i-1][1]?pct(v/steps[i-1][1],v/steps[i-1][1]<.1?2:1):"—"}</div>`:""}<div class="paso"><small>${l}</small><b class="num">${nf.format(v)}</b><span class="num">${c}</span></div>`).join("")}</div></section>`;

  // Meta vs Google
  const pRows=["meta","google"].filter(k=>!plat||k===plat).map(k=>{ const x=R.P[k]; return `<tr><td><span class="dotlab" style="color:var(--s-${k})"></span> ${PLAT[k].nombre}</td><td class="r num">${eur.format(x.inv)}</td><td class="r num">${nf.format(x.conv)}</td><td class="r num">${x.conv?eur2.format(x.inv/x.conv):"—"}</td><td class="r num">${nf.format(x.ventas)}</td><td class="r num">${x.ventas?eur.format(x.inv/x.ventas):"—"}</td><td class="r num">${eur.format(x.ing)}</td><td class="r num">${x.inv?xr(x.ing/x.inv):"—"}</td></tr>`; }).join("");
  const plats=`<section class="panel"><div class="ph"><h2>Meta frente a Google</h2><span>lo que dice cada plataforma y lo que de verdad se vende</span></div><div class="table-wrap flat"><table><thead><tr><th>Plataforma</th><th class="r">Inversión</th><th class="r">Conversiones</th><th class="r">Coste/conv.</th><th class="r">Ventas reales</th><th class="r">CPA real</th><th class="r">Ingresos</th><th class="r">ROAS real</th></tr></thead><tbody>${pRows}</tbody></table></div></section>`;

  const cpaMaxAll = sid ? fcModel(fcBase(sid),fcState(sid)).cpaMax : 0;
  const charts=`<div class="grid2">
    <section class="panel"><div class="ph"><h2>Inversión por semana</h2><span>la semana en curso aún no está completa</span></div>${legend(["meta","google"].filter(k=>!plat||k===plat))}${chartLines("ch-inv"+(sid||""),W,R.byW)}</section>
    <section class="panel"><div class="ph"><h2>CPA real por semana</h2><span>media móvil de 4 semanas</span></div>${chartCPA("ch-cpa"+(sid||""),W,R.byW,cpaMaxAll)}</section>
  </div>`;

  // Campañas
  const camps=R.camps.filter(c=>c.inv||c.ventas).sort((a,b)=>b.inv-a.inv);
  S.repCamps={}; camps.forEach(c=>S.repCamps[campKey(c.key)]=c);
  const cRows=camps.map(c=>{ const nm=c.a.campana||"Sin campaña asignada", sb=sid?"":`<small>${esc((subById(c.a.sub)||{}).nombre||"")}</small>`;
    return `<tr data-repcamp="${campKey(c.key)}"><td><div style="min-width:0"><b style="font-weight:600">${esc(nm)}</b><small class="muted" style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;font-size:12.5px;margin-top:4px"><span class="pill" style="color:var(--s-${c.k})"><span class="dotlab"></span><span style="color:var(--fg)">${esc(c.a.plataforma)}</span></span>${c.a.objetivo?esc(c.a.objetivo):""}</small>${sb}</div></td>
      <td class="r num">${eur.format(c.inv)}</td><td class="r num">${c.imp?pct(c.cl/c.imp,2):"—"}</td><td class="r num">${c.cl?eur2.format(c.inv/c.cl):"—"}</td><td class="r num">${nf.format(c.conv)}</td><td class="r num">${c.conv?eur2.format(c.inv/c.conv):"—"}</td>
      <td class="r num"><b>${nf.format(c.ventas)}</b></td><td class="r num"><b>${c.ventas?eur.format(c.inv/c.ventas):"—"}</b></td><td class="r num">${eur.format(c.ing)}</td><td class="r num">${c.inv?xr(c.ing/c.inv):"—"}</td><td>${c.sinCamp?`<span class="pill">Asigna campaña</span>`:veredicto(c,m)}</td></tr>`; }).join("");
  const campT=`<section class="panel"><div class="ph"><h2>Campañas</h2><span>toca una para ver todas sus conversiones y ventas</span></div><div class="table-wrap flat"><table class="t-camps"><thead><tr><th>Campaña</th><th class="r">Inversión</th><th class="r">CTR</th><th class="r">CPC</th><th class="r">Conv.</th><th class="r">Coste/conv.</th><th class="r">Ventas</th><th class="r">CPA real</th><th class="r">Ingresos</th><th class="r">ROAS</th><th>Qué hacer</th></tr></thead><tbody>${cRows||`<tr><td colspan="11" class="muted">Sin campañas con datos en este periodo.</td></tr>`}</tbody></table></div>
    <p class="muted" style="margin:0;font-size:13px">«Escalar» cuando el beneficio dobla la inversión con al menos 3 ventas; «Recortar» cuando cada venta cuesta más de lo que deja. Las ventas se atribuyen por la fuente y la campaña de cada contacto.</p></section>`;

  // Conversiones por tipo
  const tipos=Object.keys(ACC).filter(t=>(R.P.meta.acc[t]||0)+(R.P.google.acc[t]||0)>0), totC=Math.max(1,T.conv);
  const tRows=tipos.map(t=>{ const a=R.P.meta.acc[t]||0, g=R.P.google.acc[t]||0, s2=a+g; return `<div class="fun-row"><span>${ACC[t]}</span><div class="track"><i style="width:${s2/totC*100}%"></i></div><span class="n num"><b>${nf.format(s2)}</b> · ${pct(s2/totC,0)}</span></div><div class="conv-sub muted num">${!plat||plat==="meta"?`Meta ${nf.format(a)}`:""}${!plat?" · ":""}${!plat||plat==="google"?`Google ${nf.format(g)}`:""}</div>`; }).join("");
  const convT=`<section class="panel"><div class="ph"><h2>Conversiones por tipo</h2><span>${nf.format(T.conv)} en total</span></div>${tRows?`<div class="funnel">${tRows}</div>`:`<p class="muted" style="margin:0">Sin conversiones en este periodo.</p>`}</section>`;
  const ventasP=`<section class="panel"><div class="ph"><h2>Últimas ventas de anuncios</h2><span>${nf.format(R.ventasList.length)} en el periodo</span></div>${R.ventasList.length?`<div class="follow">${R.ventasList.sort((a,b)=>b.cd-a.cd).slice(0,5).map(x=>`<button data-follow="contact:${esc(x.k.id)}:${esc(x.o.sub)}"><span class="sev" style="background:var(--s-${grupo(x.k.fuente)})"></span><span style="min-width:0"><b>${esc(x.k.nombre)} · ${eur.format(+x.o.valor||0)}</b><small>${esc(x.k.campana||x.k.fuente)} · ${esc(fechaCorta(ymd(x.cd)))}</small></span>${I.arrow.replace('<svg','<svg width="16" height="16" style="color:var(--muted)"')}</button>`).join("")}</div>`:`<p class="muted" style="margin:0">Cuando un contacto que vino de un anuncio pase a ganado, aparecerá aquí.</p>`}</section>`;

  const prev = sid ? `<section class="panel fc" id="fc"><div class="ph"><h2>Previsión para <span class="m">escalar.</span></h2><span>basada en las últimas 12 semanas</span></div><div id="fc-out">${fcHTML(sid)}</div></section>` : "";
  let agencia="";
  if(!sid){
    const subs=[...S.data.subcuentas].sort((a,b)=>(b.interna?1:0)-(a.interna?1:0)||String(a.nombre).localeCompare(b.nombre,"es"));
    const rows=subs.map(x=>{ const r=adsRep(x.id,W,plat).tot; return `<tr data-go-sub="${esc(x.id)}" data-go-tab="informes"><td><div class="who"><span class="avatar">${esc(ini(x.nombre))}</span><div style="min-width:0"><b>${esc(x.nombre)}</b><small>${esc(x.sector||"")}</small></div></div></td>
      <td class="r num">${eur.format(r.inv)}</td><td class="r num">${nf.format(r.conv)}</td><td class="r num">${nf.format(r.ventas)}</td><td class="r num">${r.ventas?eur.format(r.inv/r.ventas):"—"}</td><td class="r num">${eur.format(r.ing)}</td><td class="r num">${r.inv?xr(r.ing/r.inv):"—"}</td></tr>`; }).join("");
    agencia=`<div class="table-wrap"><table><thead><tr><th>Subcuenta</th><th class="r">Inversión</th><th class="r">Conversiones</th><th class="r">Ventas reales</th><th class="r">CPA real</th><th class="r">Ingresos</th><th class="r">ROAS real</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  }
  return head+fuentes+kpis+(sid?"":agencia)+embudo+plats+charts+campT+`<div class="grid2">${convT}${ventasP}</div>`+prev+viewInformesCRM(sid,M);
}

function viewInformesCRM(sid,M){
  const n=S.periodo, s=sid?subById(sid):null;
  const leadsP=`<section class="panel"><div class="ph"><h2>Leads por semana</h2><span>según el origen del contacto</span></div>${legend(["meta","otros","google"])}
      ${M.contactos.length?chartStack("ch-leads"+(sid||""),M.W,M.byW):`<p class="muted" style="margin:0">Sin leads nuevos en este periodo.</p>`}</section>`;
  const seg=seguimiento(sid), segHTML=`<section class="panel"><div class="ph"><h2>Seguimiento</h2><span>${seg.length?seg.length+" pendientes":"todo al día"}</span></div>
    ${seg.length?`<div class="follow">${seg.slice(0,8).map(x=>`<button data-follow="${esc(x.ref)}"><span class="sev ${x.sev}"></span><span style="min-width:0"><b>${esc(x.t)}</b><small>${esc(x.d)}${sid?"":" · "+esc((subById(x.ref.split(":")[2])||{}).nombre||"")}</small></span>${I.arrow.replace('<svg','<svg width="16" height="16" style="color:var(--muted)"')}</button>`).join("")}</div>${seg.length>8?`<p class="muted" style="margin:0;font-size:13px">Y ${seg.length-8} más.</p>`:""}`:`<p class="muted" style="margin:0">Nadie esperando respuesta. Cabeza fría.</p>`}</section>`;
  let funnel="";
  if(sid){
    const et=etapasDe(s), lost=etapaPerdida(s), ops=of("oportunidades",sid), totalC=of("contactos",sid).length, idx=o=>et.indexOf(o.etapa);
    const rows=[["Contactos",totalC]].concat(et.filter(e=>e!==lost).map((e,i)=>[e,ops.filter(o=>o.etapa!==lost&&idx(o)>=i).length])), top=Math.max(1,rows[0][1]);
    funnel=`<section class="panel"><div class="ph"><h2>Embudo del CRM</h2><span>hasta dónde ha llegado cada contacto</span></div><div class="funnel">${rows.map(([l,v])=>`<div class="fun-row"><span>${esc(l)}</span><div class="track"><i style="width:${Math.max(v?2:0,v/top*100)}%"></i></div><span class="n num"><b>${v}</b> · ${Math.round(v/top*100)}%</span></div>`).join("")}</div></section>`;
  }
  const oRows=[["meta","Meta Ads"],["google","Google Ads"],["otros","Otros orígenes"]].map(([k,l])=>{ const o=M.orig[k]; return `<tr><td><span class="dotlab" style="color:var(--s-${k})"></span> ${l}</td><td class="r num">${nf.format(o.leads)}</td><td class="r num">${o.gan}</td><td class="r num">${eur.format(o.val)}</td></tr>`; }).join("");
  const orig=`<section class="panel"><div class="ph"><h2>Leads por origen</h2><span>contactos nuevos del periodo</span></div><div class="table-wrap flat"><table style="min-width:420px"><thead><tr><th>Origen</th><th class="r">Leads</th><th class="r">Cierres</th><th class="r">Valor ganado</th></tr></thead><tbody>${oRows}</tbody></table></div></section>`;
  return `<h2 class="sec-h">Leads y <span class="m">seguimiento.</span></h2><div class="grid2">${leadsP}${orig}</div><div class="grid2">${funnel||""}${segHTML}</div>`;
}

function fcHTML(sid){
  const b=fcBase(sid), st=fcState(sid);
  if(!(b.B0>0)||!(b.L0>0)) return `<p class="muted" style="margin:0">Hace falta al menos unas semanas de inversión con conversiones para prever. Conecta las cuentas o importa el CSV.</p>`;
  const M=fcModel(b,st);
  const maxR=Math.max(Math.ceil(Math.max(b.B0*5,Math.min(M.opt*1.2,b.B0*10),st.presu)/100)*100,1000);
  const ctl=(k,l,inner,help)=>`<div class="field"><label for="fc-${k}">${l}</label>${inner}${help?`<span class="help">${help}</span>`:""}</div>`;
  const controls=`<div class="fc-ctl">
    ${ctl("presu","Inversión mensual en anuncios",`<div class="fc-range"><input type="range" id="fc-presu" data-fc="presu" min="0" max="${maxR}" step="50" value="${st.presu}"><output class="num">${eur.format(st.presu)}</output></div>`,`Ahora inviertes unos ${eur.format(b.B0)} al mes.`)}
    <div class="row2">${ctl("ticket","Ticket medio (€)",`<input id="fc-ticket" data-fc="ticket" type="number" min="0" step="10" value="${st.ticket}" class="inp">`,`Real: ${b.ticket?eur.format(b.ticket):"—"}`)}
    ${ctl("cierre","Cierre conversión → venta (%)",`<input id="fc-cierre" data-fc="cierre" type="number" min="0" max="100" step="0.1" value="${st.cierre}" class="inp">`,`Real: ${b.close?pct(b.close):"—"}`)}</div>
    <div class="row2">${ctl("margen","Margen bruto (%)",`<input id="fc-margen" data-fc="margen" type="number" min="1" max="100" step="1" value="${st.margen}" class="inp">`,"Lo que te queda de cada venta antes de anuncios.")}
    ${ctl("efi","Saturación al escalar",`<select id="fc-efi" data-fc="efi" class="inp">${Object.entries(EFI).map(([k,[v,l]])=>`<option value="${k}" ${st.efi===k?"selected":""}>${l} · +${Math.round((Math.pow(2,v)-1)*100)} % al duplicar</option>`).join("")}</select>`,"Cuánto se encarece cada conversión al subir presupuesto: la audiencia buena se acaba.")}</div>
    ${ctl("objetivo","Quiero facturar al mes (€)",`<input id="fc-objetivo" data-fc="objetivo" type="number" min="0" step="500" value="${st.objetivo}" class="inp">`)}
    ${canEdit()?`<button class="btn sec" data-fc-save style="align-self:flex-start">Guardar supuestos</button>`:""}
  </div>`;
  return `<div class="fc-grid">${controls}<div id="fc-res">${fcResults(sid)}</div></div>`;
}
function fcResults(sid){
  const b=fcBase(sid), st=fcState(sid), M=fcModel(b,st), now=M.at(b.B0), sc=M.at(st.presu), opt=M.at(M.opt);
  const fmtV=v=>nf.format(Math.round(v));
  const res=`<div class="fc-res">
    <div class="fc-kpis">
      <div class="fc-k"><small>Conversiones / mes</small><b class="num">${fmtV(sc.L)}</b><span class="num">ahora ${fmtV(now.L)}</span></div>
      <div class="fc-k"><small>Ventas / mes</small><b class="num">${fmtV(sc.V)}</b><span class="num">ahora ${fmtV(now.V)}</span></div>
      <div class="fc-k"><small>Ingresos / mes</small><b class="num">${eur.format(sc.I)}</b><span class="num">ahora ${eur.format(now.I)}</span></div>
      <div class="fc-k"><small>Beneficio bruto / mes</small><b class="num" style="${sc.G<0?"color:var(--bad)":""}">${eur.format(sc.G)}</b><span class="num">ahora ${eur.format(now.G)}</span></div>
      <div class="fc-k"><small>CPA previsto</small><b class="num">${sc.V?eur.format(sc.cpa):"—"}</b><span class="num">máximo rentable ${eur.format(M.cpaMax)}</span></div>
      <div class="fc-k"><small>ROAS previsto</small><b class="num">${sc.B?xr(sc.roas):"—"}</b><span class="num">ahora ${xr(now.roas)}</span></div>
    </div>
    <div class="fc-notes">
      <div class="ck ${opt.G>now.G*1.05?"ok":"warn"}"><span class="ic">${opt.G>now.G*1.05?"↑":"="}</span><div><b>Con más beneficio: ${eur.format(M.opt)} al mes</b><br><span class="muted">Ganarías ${eur.format(opt.G)} al mes (${opt.G>=now.G?"+":""}${eur.format(opt.G-now.G)} sobre hoy). A partir de ahí cada venta extra cuesta más de lo que deja.</span></div></div>
      <div class="ck ${sc.mcpa<=M.cpaMax?"ok":"bad"}"><span class="ic">€</span><div><b>CPA marginal en tu escenario: ${eur.format(sc.mcpa)}</b><br><span class="muted">${sc.mcpa<=M.cpaMax?"La siguiente venta todavía sale rentable: hay margen para subir.":"La siguiente venta ya cuesta más de lo que deja ("+eur.format(M.cpaMax)+"). Baja presupuesto o mejora el anuncio antes de escalar."}</span></div></div>
      ${fcObjetivo(b,st,M)}
    </div>
    ${chartCurve("ch-curve-"+sid,M,b,st)}
  </div>`;
  // Plan de 6 meses: +20 % al mes hasta el escenario elegido
  const target=st.presu, d0=new Date(); let B=b.B0, acc=0; const rows=[];
  for(let i=1;i<=6;i++){ B = B<target ? Math.min(target,B*1.2) : B>target ? Math.max(target,B*.8) : B; const p=M.at(B); acc+=p.G; const md=new Date(d0.getFullYear(),d0.getMonth()+i,1);
    rows.push(`<tr style="cursor:default"><td style="white-space:nowrap">${esc(MES(md))}</td><td class="r num">${eur.format(B)}</td><td class="r num">${fmtV(p.L)}</td><td class="r num">${fmtV(p.V)}</td><td class="r num">${p.V?eur.format(p.cpa):"—"}</td><td class="r num">${eur.format(p.I)}</td><td class="r num" style="${p.G<0?"color:var(--bad)":""}">${eur.format(p.G)}</td><td class="r num">${eur.format(acc)}</td></tr>`); }
  const plan=`<div><p class="section-t" style="margin:0 0 8px">Plan de escalado: +20 % al mes hasta tu escenario</p><div class="table-wrap flat"><table><thead><tr><th>Mes</th><th class="r">Inversión</th><th class="r">Conversiones</th><th class="r">Ventas</th><th class="r">CPA</th><th class="r">Ingresos</th><th class="r">Beneficio</th><th class="r">Acumulado</th></tr></thead><tbody>${rows.join("")}</tbody></table></div>
    <p class="muted" style="margin:8px 0 0;font-size:13px">Subir más de un 20–30 % de golpe reinicia el aprendizaje de Meta y Google. Es una estimación: el CPA real manda, revísalo cada semana en esta misma pantalla.</p></div>`;
  return res+plan;
}
function fcObjetivo(b,st,M){
  const I=+st.objetivo||0; if(!I) return "";
  const B=M.need(I), p=M.at(B);
  if(B>M.ceil) return `<div class="ck bad"><span class="ic">!</span><div><b>Facturar ${eur.format(I)} al mes no sale rentable solo con anuncios</b><br><span class="muted">Necesitarías unos ${eur.format(B)} al mes y perderías dinero. Sube el ticket o la tasa de cierre, o abre campañas nuevas.</span></div></div>`;
  const meses=B<=b.B0?0:Math.ceil(Math.log(B/b.B0)/Math.log(1.2));
  return `<div class="ck ${p.G>0?"ok":"warn"}"><span class="ic">◎</span><div><b>Para facturar ${eur.format(I)} al mes: ${eur.format(B)} en anuncios</b><br><span class="muted">${nf.format(Math.round(p.V))} ventas con un CPA de ${eur.format(p.cpa)} y ${eur.format(p.G)} de beneficio. ${meses?`Escalando un 20 % al mes llegas en ${meses} ${meses===1?"mes":"meses"}.`:"Ya lo cubre tu inversión actual."}</span></div></div>`;
}
function fcRefresh(sid){ const o=$("#fc-res"); if(!o) return; o.innerHTML=fcResults(sid); const out=$("#fc-presu")&&$("#fc-presu").nextElementSibling; if(out) out.textContent=eur.format(fcState(sid).presu); wireCharts(); }

function drawerRepCamp(k){
  const c=(S.repCamps||{})[k]; if(!c) return;
  const ws=Object.entries(c.weeks).sort((a,b)=>b[0].localeCompare(a[0]));
  const tipos=Object.entries(c.acc).filter(([,v])=>v>0).sort((a,b)=>b[1]-a[1]);
  const ventas=adsRep(c.a.sub,weeks(S.periodo),"").ventasList.filter(v=>v.key===c.key);
  const body=`<div class="rc-kv"><div><small>Plataforma</small><b>${esc(c.a.plataforma)}</b></div><div><small>Objetivo</small><b>${esc(c.a.objetivo||"—")}</b></div><div><small>Estado</small><b>${esc(c.a.estado||"—")}</b></div><div><small>Periodo</small><b>${S.periodo} semanas</b></div></div>
    <div class="mini">
      <div><span>Inversión</span><b class="num">${eur2.format(c.inv)}</b></div>
      <div><span>Impresiones · CPM</span><b class="num">${nf.format(c.imp)} · ${c.imp?eur2.format(c.inv/c.imp*1000):"—"}</b></div>
      <div><span>Clics · CTR · CPC</span><b class="num">${nf.format(c.cl)} · ${c.imp?pct(c.cl/c.imp,2):"—"} · ${c.cl?eur2.format(c.inv/c.cl):"—"}</b></div>
      <div><span>Conversiones · coste</span><b class="num">${nf.format(c.conv)} · ${c.conv?eur2.format(c.inv/c.conv):"—"}</b></div>
      <div><span>Oportunidades en el CRM</span><b class="num">${nf.format(c.opps)}</b></div>
      <div><span>Ventas reales · CPA real</span><b class="num">${nf.format(c.ventas)} · ${c.ventas?eur.format(c.inv/c.ventas):"—"}</b></div>
      <div><span>Ingresos · ROAS real</span><b class="num">${eur.format(c.ing)} · ${c.inv?xr(c.ing/c.inv):"—"}</b></div>
    </div>
    <p class="section-t">Conversiones por tipo</p>${tipos.length?`<div class="mini">${tipos.map(([t,v])=>`<div><span>${ACC[t]||esc(t)}</span><b class="num">${nf.format(v)} · ${pct(v/Math.max(1,c.conv),0)}</b></div>`).join("")}</div>`:`<p class="muted" style="margin:0">Sin conversiones.</p>`}
    <p class="section-t">Semana a semana</p><div class="table-wrap flat"><table style="min-width:0;font-size:13.5px"><thead><tr><th>Semana</th><th class="r">Inversión</th><th class="r">Conv.</th><th class="r">Ventas</th><th class="r">CPA</th></tr></thead><tbody>${ws.map(([w,x])=>`<tr style="cursor:default"><td>${esc(wkLabel(w))}</td><td class="r num">${eur.format(x.inv)}</td><td class="r num">${nf.format(x.conv)}</td><td class="r num">${nf.format(x.ventas)}</td><td class="r num">${x.ventas?eur.format(x.inv/x.ventas):"—"}</td></tr>`).join("")}</tbody></table></div>
    <p class="section-t">Ventas de esta campaña</p>${ventas.length?`<div class="mini">${ventas.sort((a,b)=>b.cd-a.cd).map(v=>`<div><span>${esc(v.k.nombre)} <span class="muted">· ${esc(fechaCorta(ymd(v.cd)))}</span></span><b class="num">${eur.format(+v.o.valor||0)}</b></div>`).join("")}</div>`:`<p class="muted" style="margin:0">Ninguna en este periodo. Asigna la campaña en la ficha del contacto para atribuir sus ventas.</p>`}`;
  openDrawer(esc(c.a.campana||"Sin campaña asignada"),body,`<button type="button" class="btn sec" data-close>Cerrar</button>`,async()=>{});
}


Object.assign(EN_DICT,{"Lo que dicen Meta y Google, cruzado con las ventas reales del CRM. Primero los datos, después las opiniones.":"What Meta and Google report, matched against real sales in the CRM. Data first, opinions later.",
"Todo":"All","Inversión en anuncios":"Ad spend","Ingresos de anuncios":"Revenue from ads","ventas cerradas en el CRM":"sales closed in the CRM","Retorno real (ROAS)":"Real return (ROAS)","ingresos ÷ inversión":"revenue ÷ spend","Beneficio bruto":"Gross profit","Conversiones":"Conversions","Oportunidades":"Opportunities","Ventas reales":"Real sales","CPA real":"Real CPA","inversión ÷ ventas reales":"spend ÷ real sales",
"Del anuncio a la venta":"From ad to sale","cuánto cuesta cada paso":"what each step costs","Impresiones":"Impressions","Clics":"Clicks","Ventas":"Sales","Meta frente a Google":"Meta vs Google","lo que dice cada plataforma y lo que de verdad se vende":"what each platform reports and what actually sells","Plataforma":"Platform","Inversión":"Spend","Coste/conv.":"Cost/conv.","Ingresos":"Revenue","ROAS real":"Real ROAS",
"Inversión por semana":"Spend per week","datos de las plataformas":"platform data","CPA real por semana":"Real CPA per week","media móvil de 4 semanas":"4-week moving average","CPA máximo rentable":"Break-even CPA","toca una para ver todas sus conversiones y ventas":"tap one to see all its conversions and sales","Campaña":"Campaign","Qué hacer":"What to do",
"Escalar +20 %":"Scale +20 %","Mantener y optimizar":"Keep and optimise","Recortar":"Cut back","Pausar o rehacer":"Pause or rebuild","Pocos datos":"Not enough data","Pausada":"Paused","Asigna campaña":"Assign campaign","Sin campaña asignada":"No campaign assigned",
"«Escalar» cuando el beneficio dobla la inversión con al menos 3 ventas; «Recortar» cuando cada venta cuesta más de lo que deja. Las ventas se atribuyen por la fuente y la campaña de cada contacto.":"«Scale» when profit is double the spend with at least 3 sales; «Cut back» when each sale costs more than it brings in. Sales are attributed by each contact's source and campaign.",
"Conversiones por tipo":"Conversions by type","Formularios":"Forms","Mensajes":"Messages","Llamadas":"Calls","Reservas":"Bookings","Compras":"Purchases","Últimas ventas de anuncios":"Latest sales from ads",
"Previsión para":"Forecast to","escalar.":"scale.","basada en las últimas 12 semanas":"based on the last 12 weeks","Inversión mensual en anuncios":"Monthly ad spend","Ticket medio (€)":"Average sale value (€)","Cierre conversión → venta (%)":"Close rate, conversion → sale (%)","Margen bruto (%)":"Gross margin (%)","Lo que te queda de cada venta antes de anuncios.":"What you keep from each sale before ads.","Saturación al escalar":"Saturation when scaling","Cuánto se encarece cada conversión al subir presupuesto: la audiencia buena se acaba.":"How much each conversion gets more expensive as budget goes up: the good audience runs out.","Quiero facturar al mes (€)":"Monthly revenue goal (€)","Guardar supuestos":"Save assumptions","Supuestos guardados":"Assumptions saved",
"Conversiones / mes":"Conversions / month","Ventas / mes":"Sales / month","Ingresos / mes":"Revenue / month","Beneficio bruto / mes":"Gross profit / month","CPA previsto":"Forecast CPA","ROAS previsto":"Forecast ROAS","La siguiente venta todavía sale rentable: hay margen para subir.":"The next sale is still profitable: there's room to go up.",
"Plan de escalado: +20 % al mes hasta tu escenario":"Scaling plan: +20 % a month up to your scenario","Mes":"Month","CPA":"CPA","Beneficio":"Profit","Acumulado":"Cumulative","Subir más de un 20–30 % de golpe reinicia el aprendizaje de Meta y Google. Es una estimación: el CPA real manda, revísalo cada semana en esta misma pantalla.":"Raising more than 20–30 % at once resets Meta's and Google's learning. This is an estimate: real CPA rules, check it every week on this screen.",
"Ya lo cubre tu inversión actual.":"Your current spend already covers it.","Ahora":"Now","Máximo beneficio":"Max profit","Tu escenario":"Your scenario","Leads por origen":"Leads by source","contactos nuevos del periodo":"new contacts in the period","Cierres":"Closed","Embudo del CRM":"CRM funnel","Leads y":"Leads and","seguimiento.":"follow-up.","tus anuncios.":"your ads.","Aún no hay datos de":"No data yet from",
"Conecta Meta Ads o Google Ads (o sube su informe en CSV) y aquí verás inversión, conversiones, ventas reales, CPA y la previsión para escalar.":"Connect Meta Ads or Google Ads (or upload their CSV report) and you'll see spend, conversions, real sales, CPA and the scaling forecast here.",
"Sin vincular":"Not linked","Reconectar":"Reconnect","Campaña de origen":"Source campaign","Sin campaña":"No campaign","Para atribuir sus ventas a un anuncio en Informes. Tu integración la rellena sola con el utm_campaign.":"Used to attribute their sales to an ad in Reports. Your integration fills it in from utm_campaign.",
"Objetivo":"Goal","Estado":"Status","Periodo":"Period","Impresiones · CPM":"Impressions · CPM","Clics · CTR · CPC":"Clicks · CTR · CPC","Conversiones · coste":"Conversions · cost","Oportunidades en el CRM":"Opportunities in the CRM","Ventas reales · CPA real":"Real sales · real CPA","Ingresos · ROAS real":"Revenue · real ROAS","Semana a semana":"Week by week","Semana":"Week","Ventas de esta campaña":"Sales from this campaign",
"Ninguna en este periodo. Asigna la campaña en la ficha del contacto para atribuir sus ventas.":"None in this period. Set the campaign on the contact's record to attribute their sales.","Sin conversiones.":"No conversions.","Sin conversiones en este periodo.":"No conversions in this period.","Todavía no hay ventas atribuidas a anuncios en este periodo.":"No sales attributed to ads in this period yet.","Cuando un contacto que vino de un anuncio pase a ganado, aparecerá aquí.":"When a contact who came from an ad is won, they'll show up here.",
"Hace falta al menos unas semanas de inversión con conversiones para prever. Conecta las cuentas o importa el CSV.":"A forecast needs at least a few weeks of spend with conversions. Connect the accounts or import the CSV.","Sin campañas con datos en este periodo.":"No campaigns with data in this period.","Clientes potenciales":"Leads","Búsqueda":"Search","activa":"active","pausada":"paused","Conv.":"Conv.","sin ventas":"no sales",
"Columnas en este orden: fecha, campaña, inversión, impresiones, clics y conversiones. Opcional, detrás: formularios, mensajes, llamadas, reservas y compras. Vale separado por comas o por punto y coma.":"Columns in this order: date, campaign, spend, impressions, clicks and conversions. Optional, after those: forms, messages, calls, bookings and purchases. Comma or semicolon separated both work."});
EN_PAT.push(...[
 ["^según las plataformas · (.+) cada una$","according to the platforms · {1} each"],
 ["^en el CRM · (.+) cada una$","in the CRM · {1} each"],
 ["^(.+) cada una$","{1} each"],
 ["^(.+) de las conversiones$","{1} of conversions"],
 ["^margen del (\\d+) % menos anuncios$","{1} % margin minus ads"],
 ["^([▲▼]) (.+) vs periodo anterior$","{1} {2} vs previous period"],
 ["^= igual que antes$","= same as before"],
 ["^Sincronizado (.+?) · datos hasta la semana del (.+)$","Synced {t1} · data up to the week of {2}"],
 ["^Sincronizado (.+)$","Synced {t1}"],
 ["^Sin datos nuevos desde (.+?)( · .*)?$","No new data since {1}"],
 ["^(\\d+) en el periodo$","{1} in the period"],
 ["^Ahora inviertes unos (.+) al mes\\.$","You currently spend about {1} a month."],
 ["^Real: (.+)$","Actual: {1}"],
 ["^ahora (.+)$","now {1}"],
 ["^máximo rentable (.+)$","break-even {1}"],
 ["^Con más beneficio: (.+) al mes$","Most profitable: {1} a month"],
 ["^Ganarías (.+?) al mes \\((.+?) sobre hoy\\)\\. A partir de ahí cada venta extra cuesta más de lo que deja\\.$","You'd make {1} a month ({2} over today). Beyond that, each extra sale costs more than it brings in."],
 ["^CPA marginal en tu escenario: (.+)$","Marginal CPA in your scenario: {1}"],
 ["^La siguiente venta ya cuesta más de lo que deja \\((.+?)\\)\\. Baja presupuesto o mejora el anuncio antes de escalar\\.$","The next sale already costs more than it brings in ({1}). Lower the budget or improve the ad before scaling."],
 ["^Para facturar (.+?) al mes: (.+?) en anuncios$","To bring in {1} a month: {2} in ads"],
 ["^Escalando un 20 % al mes llegas en (\\d+) (mes|meses)\\.$","Scaling 20 % a month, you get there in {1} month(s)."],
 ["^(\\d+) ventas con un CPA de (.+?) y (.+?) de beneficio\\. (.*)$","{1} sales at a CPA of {2} and {3} profit. {t4}"],
 ["^Facturar (.+?) al mes no sale rentable solo con anuncios$","Bringing in {1} a month isn't profitable with ads alone"],
 ["^Necesitarías unos (.+?) al mes y perderías dinero\\. Sube el ticket o la tasa de cierre, o abre campañas nuevas\\.$","You'd need about {1} a month and you'd lose money. Raise the sale value or the close rate, or open new campaigns."],
 ["^(Baja|Media|Alta) · \\+(\\d+) % al duplicar$","{t1} · +{2} % when doubling"],
 ["^(Meta Ads|Google Ads) · (.+)$","{1} · {t2}"],
 ["^(.+) al mes en anuncios$","{1} a month in ads"],
 ["^(.+) invertidos esa semana$","{1} spent that week"]
]);
Object.assign(EN_DICT,{"Baja":"Low","Media":"Medium","Alta":"High"});

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
      : (canEdit()?`${st==="error"?`<button class="btn" data-connect="${k}">Reconectar</button>`:`<button class="btn sec" data-connect="${k}">API y MCP</button>`}<button class="btn sec" data-importar="${k}">Importar CSV</button><button class="btn ghost" data-disconnect="${k}">Desconectar</button>`:"");
    return `<div class="integ-row"><span class="logo" style="color:var(--s-${k})">${p.ab}</span>
      <div><h3>${p.nombre} ${estadoPill(x)} ${mcpPill(x.mcp)}</h3><p>${st==="error"&&x.error?esc(x.error):p.desc}</p></div>
      <div class="integ-meta">${st==="desconectada"?`<span>Ninguna cuenta vinculada</span>`:`<b>${esc(x.cuentaNombre||"Cuenta sin nombre")}</b><span class="num">${esc(x.cuentaId||"")}</span>${x.metodo?`<span>API · ${esc(metodoTxt(k,x.metodo))}</span>`:""}${x.mcp&&x.mcp.url?`<span>MCP · ${esc(x.mcp.nombre||x.mcp.url)}${x.mcp.herramientas?` · ${x.mcp.herramientas} herramientas`:""}</span>`:""}<span>${x.ultimaSync?"Datos al día "+rel(x.ultimaSync):"Sin datos todavía"} · ${nC} ${nC===1?"campaña":"campañas"}</span>`}</div>
      <div class="actions">${acts}</div></div>`; }).join("");
  return headHTML(esc(s.nombre),"Tus <span class=\"m\">integraciones.</span>","Vincula las cuentas de anuncios y el WhatsApp de este cliente: por API para los datos y los mensajes, y por MCP para trabajar con Claude.","")
    + `<h2 class="sec-h" style="margin:0">Anuncios</h2><div class="integ">${rows}</div>
    <h2 class="sec-h" style="margin:8px 0 0">Mensajería</h2><div class="integ">${waRow(s)}</div>
    <p class="muted" style="margin:0;font-size:14px;max-width:70ch">La conexión automática llegará con tu sistema de integración. Mientras tanto, vincula la cuenta y sube el informe semanal en CSV desde el administrador de anuncios.</p>`;
}
function viewIntegAgencia(){
  const subs=[...S.data.subcuentas].sort((a,b)=>(b.interna?1:0)-(a.interna?1:0)||String(a.nombre).localeCompare(b.nombre,"es"));
  const last=ig=>{ const t=["meta","google"].map(k=>ig[k]&&ig[k].ultimaSync).filter(Boolean).sort().pop(); return t?rel(t):"—"; };
  const conn=subs.reduce((t,s)=>{ const ig=integ(s.id); return t+["meta","google"].filter(k=>ig[k]&&ig[k].estado==="conectada").length; },0);
  const errs=subs.reduce((t,s)=>{ const ig=integ(s.id); return t+["meta","google"].filter(k=>ig[k]&&ig[k].estado==="error").length; },0);
  const rows=subs.map(s=>{ const ig=integ(s.id); return `<tr data-go-integ="${esc(s.id)}"><td><div class="who"><span class="avatar">${esc(ini(s.nombre))}</span><div style="min-width:0"><b>${esc(s.nombre)}</b><small>${esc(s.sector||"")}</small></div></div></td>
    <td>${estadoPill(ig.meta)} ${mcpPill(ig.meta&&ig.meta.mcp)}</td><td>${estadoPill(ig.google)}</td><td>${estadoPill(ig.whatsapp)}</td><td class="muted">${last(ig)}</td><td class="r"><span class="btn sec" style="padding:6px 12px">Gestionar ${I.arrow}</span></td></tr>`; }).join("");
  return headHTML("Vista de agencia","Tus <span class=\"m\">conexiones.</span>",`${conn} cuentas de anuncios conectadas${errs?` y ${errs} por revisar`:""}. Cada subcuenta vincula sus propias cuentas de Meta y Google.`,"")
    + (subs.length?`<div class="table-wrap"><table><thead><tr><th>Subcuenta</th><th>Meta Ads</th><th>Google Ads</th><th>WhatsApp</th><th>Últimos datos</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>`:`<div class="empty"><h2>Sin subcuentas.</h2><p>Crea una subcuenta para vincular sus cuentas de anuncios.</p></div>`)
    + `<section class="panel"><div class="ph"><h2>Para tu sistema de integración</h2><span>dónde escribir los datos</span></div>
      <p class="muted" style="margin:0;max-width:70ch">Cuando montes la conexión con las APIs de Meta y Google, tu sistema lee las campañas enviadas a publicar y escribe los resultados en estas colecciones.</p>
      <div class="code">integraciones/{idSubcuenta}
  meta | google: { estado: "conectada" | "error" | "desconectada",
                   cuentaId, cuentaNombre, ultimaSync, error }

anuncios/{idCampaña}
  sub, plataforma: "Meta Ads" | "Google Ads", campana, objetivo,
  estado: "activa" | "pausada",
  semanas: [{ inicio: "2026-10-26",          (lunes de la semana)
              inversion, impresiones, clics,
              conversiones,                    (todas las que cuenta la plataforma)
              acciones: { formulario, mensaje, llamada, reserva, compra } }]

integraciones/{idSubcuenta}.meta.mcp
  { url, nombre, auth, permisos: { leer, crear, editar },
    estado: "pendiente" | "conectada" | "error", herramientas }

integraciones/{idSubcuenta}.whatsapp
  { estado, numero, phoneNumberId, wabaId, webhook, plantillas,
    mcp: { url, auth, estado } }

agentes/{idSubcuenta}       (configuración del agente setter)
  activo, nombre, presentacion, objetivo, calendario, preguntas,
  objeciones, conocimiento, precios, limites, relevo, horario,
  voz: { modo, proveedor, vozId, tipo, velocidad }

conversaciones/{id}.mensajes[]  lo que escribe tu agente
  { de: "ia", texto, tipo: "texto" | "audio", duracion,
    agente, canal: "WhatsApp", t }
  { de: "sys", texto, relevo: true }   al pasar a una persona
conversaciones/{id}.iaPausada = true   la IA no contesta ahí
citas/{id}.origen = "ia"               cita agendada por el agente

contactos/{id}
  fuente:  "Meta Ads" | "Google Ads"
  campana: nombre exacto de la campaña (utm_campaign)

oportunidades/{id}
  etapa ganada + valor + cerrado (fecha)  →  ventas reales, CPA real y ROAS

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
    const acc={}; ["formulario","mensaje","llamada","reserva","compra"].forEach((k,j)=>{ const v=num(c[6+j]); if(v) acc[k]=v; });
    rows.push({inicio:ymd(monday(d)),campana:String(c[1]||"Sin nombre").replace(/"/g,"").trim(),inversion:num(c[2]),impresiones:num(c[3]),clics:num(c[4]),leads:num(c[5]),acc}); });
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
      const byC={}; rows.forEach(r=>{ (byC[r.campana]=byC[r.campana]||{}); const w=byC[r.campana][r.inicio]||(byC[r.campana][r.inicio]={inicio:r.inicio,inversion:0,impresiones:0,clics:0,leads:0,conversiones:0,acciones:{}});
        w.inversion+=r.inversion; w.impresiones+=r.impresiones; w.clics+=r.clics; w.leads+=r.leads; w.conversiones+=r.leads; Object.entries(r.acc||{}).forEach(([k,v])=>w.acciones[k]=(w.acciones[k]||0)+v); });
      for(const [camp,ws] of Object.entries(byC)){
        const ex=S.data.anuncios.find(a=>a.sub===s.id&&a.plataforma===p.nombre&&a.campana===camp);
        const sem=(ex&&ex.semanas?ex.semanas.filter(x=>!ws[x.inicio]):[]).concat(Object.values(ws).map(w=>Object.assign(w,{inversion:Math.round(w.inversion*100)/100})))
          .sort((a,b)=>a.inicio.localeCompare(b.inicio)).slice(-156);
        await save("anuncios",ex?ex.id:uid("a"),Object.assign({},ex||{},{sub:s.id,plataforma:p.nombre,campana:camp,estado:(ex&&ex.estado)||"activa",semanas:sem}));
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
const fechaCorta = x => x ? new Date(String(x).slice(0,10)+"T12:00:00").toLocaleDateString(LOC,{day:"numeric",month:"short"}) : "—";
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
  const raw=briefText(S.subId);
  const txt=LANG==="en"?raw.split("\n").map(l=>{ if(l.startsWith("## ")) return "## "+tx(l.slice(3)); const i=l.indexOf(": "); return i>0?tx(l.slice(0,i))+l.slice(i):tx(l); }).join("\n"):raw;
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
/* ---------- Conexión por API y MCP · WhatsApp · Agente setter ---------- */
Object.assign(I,{
  bot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 3v4M9 12h.01M15 12h.01M9.5 15.5h5"/></svg>',
  mic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l10.5-6.5z"/></svg>',
  wa:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.6-2-1-1 .8a4 4 0 0 1-1.7-1.7l.8-1-1-2z"/></svg>'
});

const MCP_AUTH = [["oauth","Inicio de sesión del propio servidor (OAuth)"],["servidor","Token guardado en tu servidor"],["ninguna","Sin autenticación (solo pruebas)"]];
const MCP_PERM = [["leer","Leer cuentas, campañas y métricas"],["crear","Crear campañas (siempre en pausa)"],["editar","Cambiar presupuestos y estado"]];
const mcpPill = m => !m||!m.url ? "" : m.estado==="conectada" ? `<span class="pill ok">MCP conectado</span>` : m.estado==="error" ? `<span class="pill bad">MCP con error</span>` : `<span class="pill warn">MCP pendiente</span>`;
const httpsOk = u => /^https:\/\/[^\s/]+\.[^\s]+/.test(String(u||"").trim());

function drawerConnect(k){
  const s=sub(), p=PLAT[k], x=integ(s.id)[k]||{}, m=x.mcp||{};
  const perm=m.permisos||{leer:true};
  openDrawer(`Conectar <span class="m">${p.nombre.split(" ")[0]}.</span>`,
    `<p class="lead" style="margin:0">Vincula la cuenta de ${p.nombre} de ${esc(s.nombre)}. La API trae los datos y publica campañas; el MCP deja que Claude y tus automatizaciones consulten y actúen sobre la cuenta en lenguaje natural.</p>
    <p class="section-t">1 · API de ${k==="meta"?"Marketing de Meta":"Google Ads"}</p>`+
    fld("i-met","Cómo se conecta",`<select id="i-met" name="metodo">${selOpts(METODOS[k],x.metodo||"token")}</select>`)+
    CONN_FIELDS[k].map(([n,l,ph,req])=>fld("i-"+n,l,inp("i-"+n,n,x[n],"text",(req?"required ":"")+(ph?`placeholder="${esc(ph)}"`:""))) ).join("")+
    fld("i-n","Nombre para reconocerla",inp("i-n","cuentaNombre",x.cuentaNombre||s.nombre,"text"))+
    `<p class="section-t">2 · Servidor MCP</p>
    <label class="check"><input type="checkbox" name="mcpOn" id="i-mcpOn" ${m.url?"checked":""}><span>Conectar también por MCP<br><small class="muted">Para preguntar a Claude «¿qué campaña escalo?» o pedirle que prepare una campaña en pausa sin salir del chat.</small></span></label>
    <div id="i-mcp" ${m.url?"":"hidden"} style="display:flex;flex-direction:column;gap:14px">`+
      fld("i-mu","URL del servidor MCP",inp("i-mu","mcpUrl",m.url,"url",'placeholder="https://mcp.tu-dominio.com/meta"'),"La dirección de tu servidor MCP o de tu proveedor. Siempre con https.")+
      fld("i-mn","Nombre del servidor",inp("i-mn","mcpNombre",m.nombre||(p.nombre+" MCP"),"text"))+
      fld("i-ma","Autenticación",`<select id="i-ma" name="mcpAuth">${selOpts(MCP_AUTH,m.auth||"oauth")}</select>`)+
      `<div class="field"><label>Qué puede hacer</label><div class="checks">${MCP_PERM.map(([v,l])=>`<label><input type="checkbox" name="mcpP_${v}" ${perm[v]?"checked":""}><span>${l}</span></label>`).join("")}</div><span class="help">Empieza solo con leer. Crear deja siempre la campaña en pausa para que la revises.</span></div>
    </div>
    <div class="note"><b>Ningún token se guarda en el CRM.</b> Cualquiera con acceso al CRM podría leerlo. Los guarda tu sistema de integración en tu servidor; aquí solo queda qué cuenta usar y cómo se conecta.</div>`,
    `<button type="button" class="btn ghost" data-close>Cancelar</button><button class="btn" type="submit">Vincular cuenta</button>`,
    async fd=>{ const cur=integ(s.id); const body=Object.assign({},cur,{sub:s.id}); delete body.id;
      let mcp=null;
      if(fd.mcpOn){ if(!httpsOk(fd.mcpUrl)){ toast("La URL del MCP tiene que empezar por https://"); throw new Error("url"); }
        const same=m.url===fd.mcpUrl.trim();
        mcp={url:fd.mcpUrl.trim(),nombre:(fd.mcpNombre||"").trim(),auth:fd.mcpAuth,permisos:Object.fromEntries(MCP_PERM.map(([v])=>[v,!!fd["mcpP_"+v]])),estado:same?(m.estado||"pendiente"):"pendiente",herramientas:same?(m.herramientas||0):0,actualizado:nowISO()}; }
      const o=Object.assign({},cur[k]||{},{estado:"conectada",metodo:fd.metodo,cuentaNombre:(fd.cuentaNombre||"").trim(),conectadaEn:(cur[k]&&cur[k].conectadaEn)||nowISO(),ultimaSync:(cur[k]&&cur[k].ultimaSync)||null,error:"",mcp});
      CONN_FIELDS[k].forEach(([n])=>o[n]=(fd[n]||"").trim());
      body[k]=o; await save("integraciones",s.id,body); toast(p.nombre+" vinculada"+(mcp?" con MCP":"")); });
  const cb=$("#i-mcpOn"), box=$("#i-mcp"); if(cb&&box) cb.addEventListener("change",()=>{ box.hidden=!cb.checked; box.style.display=cb.checked?"flex":"none"; });
  if(box&&!m.url) box.style.display="none";
}

/* WhatsApp Business (Cloud API de Meta for Developers + MCP de Meta) */
const WA_FIELDS=[["numero","Número de WhatsApp","+34 600 000 000",true],["phoneNumberId","Phone number ID","123456789012345",true],["wabaId","ID de la cuenta de WhatsApp Business (WABA)","123456789012345",true],["appId","ID de la app en Meta for Developers","",false]];
function waRow(s){
  const x=integ(s.id).whatsapp||{}, st=x.estado||"desconectada", ag=agente(s.id);
  const acts = !canEdit()?"": st==="desconectada" ? addBtn("Conectar WhatsApp",'data-connect-wa') : `${st==="error"?`<button class="btn" data-connect-wa>Reconectar</button>`:`<button class="btn sec" data-connect-wa>Ajustes</button>`}<button class="btn ghost" data-disconnect-wa>Desconectar</button>`;
  return `<div class="integ-row"><span class="logo" style="color:var(--ok)">${I.wa.replace('<svg','<svg width="22" height="22"')}</span>
    <div><h3>WhatsApp Business ${estadoPill(x)} ${mcpPill(x.mcp)}</h3><p>${st==="error"&&x.error?esc(x.error):"Cloud API de Meta for Developers: recibe y envía mensajes y notas de voz. Es lo que usa tu agente setter."}</p></div>
    <div class="integ-meta">${st==="desconectada"?`<span>Ningún número vinculado</span>`:`<b class="num">${esc(x.numero||"Sin número")}</b><span>${esc(x.cuentaNombre||"")}</span><span>${x.ultimaSync?"Mensajes al día "+rel(x.ultimaSync):"Sin mensajes todavía"}${x.plantillas?` · ${x.plantillas} plantillas aprobadas`:""}</span><span>${ag&&ag.activo?`Agente «${esc(ag.nombre)}» respondiendo`:"Agente setter apagado"}</span>`}</div>
    <div class="actions">${acts}</div></div>`;
}
function drawerConnectWA(){
  const s=sub(), x=integ(s.id).whatsapp||{}, m=x.mcp||{};
  openDrawer(`Conectar <span class="m">WhatsApp.</span>`,
    `<p class="lead" style="margin:0">Vincula el número de WhatsApp Business de ${esc(s.nombre)} con la Cloud API de Meta. Así los mensajes entran en Conversaciones y tu agente setter puede contestar.</p>
    <p class="section-t">1 · Cloud API (mensajes reales)</p>`+
    WA_FIELDS.map(([n,l,ph,req])=>fld("w-"+n,l,inp("w-"+n,n,x[n],"text",(req?"required ":"")+(ph?`placeholder="${esc(ph)}"`:""))) ).join("")+
    fld("w-wh","URL del webhook de tu sistema",inp("w-wh","webhook",x.webhook,"url",'placeholder="https://api.tu-dominio.com/whatsapp/webhook"'),"Pégala en Meta for Developers › WhatsApp › Configuración, suscrita a «messages». Tu sistema recibe ahí cada mensaje.")+
    fld("w-cn","Nombre para reconocerla",inp("w-cn","cuentaNombre",x.cuentaNombre||s.nombre,"text"))+
    `<p class="section-t">2 · MCP de Meta (configuración)</p>
    <label class="check"><input type="checkbox" name="mcpOn" id="w-mcpOn" ${m.url?"checked":""}><span>Usar el MCP de WhatsApp Business de Meta<br><small class="muted">Sirve para dar de alta números, crear y aprobar plantillas, configurar el webhook y enviar mensajes de prueba desde Claude. No sirve para atender clientes en producción: eso va por la Cloud API.</small></span></label>
    <div id="w-mcp" style="display:${m.url?"flex":"none"};flex-direction:column;gap:14px">`+
      fld("w-mu","URL del servidor MCP",inp("w-mu","mcpUrl",m.url,"url",'placeholder="La que indica la documentación de Meta for Developers"'))+
      fld("w-ma","Autenticación",`<select id="w-ma" name="mcpAuth">${selOpts([["oauth","Facebook Login for Business (OAuth)"],["servidor","Token guardado en tu servidor"]],m.auth||"oauth")}</select>`,"Tienes que ser administradora de la app en Meta for Developers.")+
    `</div>
    <div class="note"><b>El token de acceso no se guarda en el CRM.</b> Va en tu servidor, junto con el «verify token» del webhook. Aquí solo queda qué número usar.</div>`,
    `<button type="button" class="btn ghost" data-close>Cancelar</button><button class="btn" type="submit">Vincular WhatsApp</button>`,
    async fd=>{ const cur=integ(s.id); const body=Object.assign({},cur,{sub:s.id}); delete body.id;
      if(fd.webhook&&!httpsOk(fd.webhook)){ toast("El webhook tiene que empezar por https://"); throw new Error("url"); }
      let mcp=null; if(fd.mcpOn){ if(!httpsOk(fd.mcpUrl)){ toast("La URL del MCP tiene que empezar por https://"); throw new Error("url"); } mcp={url:fd.mcpUrl.trim(),auth:fd.mcpAuth,estado:m.url===fd.mcpUrl.trim()?(m.estado||"pendiente"):"pendiente",actualizado:nowISO()}; }
      const o=Object.assign({},x,{estado:"conectada",cuentaNombre:(fd.cuentaNombre||"").trim(),webhook:(fd.webhook||"").trim(),conectadaEn:x.conectadaEn||nowISO(),error:"",mcp});
      WA_FIELDS.forEach(([n])=>o[n]=(fd[n]||"").trim());
      body.whatsapp=o; await save("integraciones",s.id,body); toast("WhatsApp vinculado"); });
  const cb=$("#w-mcpOn"), box=$("#w-mcp"); if(cb&&box) cb.addEventListener("change",()=>{ box.style.display=cb.checked?"flex":"none"; });
}
function drawerDisconnectWA(){
  const s=sub();
  openDrawer(`Desconectar <span class="m">WhatsApp.</span>`,`<p class="lead" style="margin:0">Dejarán de entrar mensajes de WhatsApp en ${esc(s.nombre)} y el agente setter dejará de contestar. El historial se queda.</p>`,
    `<button type="button" class="btn ghost" data-close>Cancelar</button><button class="btn danger armed" type="submit">Desconectar</button>`,
    async()=>{ const cur=integ(s.id); const body=Object.assign({},cur,{sub:s.id}); delete body.id; body.whatsapp=Object.assign({},cur.whatsapp||{},{estado:"desconectada"}); await save("integraciones",s.id,body);
      const ag=agente(s.id); if(ag&&ag.activo){ const b2=Object.assign({},ag,{activo:false}); delete b2.id; await save("agentes",s.id,b2); } toast("WhatsApp desconectado"); });
}

/* ---------- Agente setter ---------- */
const TONOS=[["cercano","Cercano y natural"],["profesional","Profesional"],["energico","Enérgico"],["sereno","Sereno y empático"]];
const OBJETIVOS=[["cita","Agendar una cita"],["llamada","Agendar una llamada"],["cualificar","Cualificar y pasar a una persona"],["venta","Cerrar la venta con un enlace de pago"]];
const VOZ_MODOS=[["nunca","Nunca, solo texto"],["si_audio","Cuando el cliente manda un audio"],["largos","En las respuestas largas"],["siempre","Siempre que tenga sentido"]];
const VOZ_PROV=[["elevenlabs","ElevenLabs"],["openai","OpenAI TTS"],["google","Google Cloud TTS"],["azure","Azure Speech"]];
const HORARIOS=[["siempre","Siempre, 24/7"],["fuera","Solo fuera del horario del equipo"],["dentro","Solo en horario del equipo"]];
const RETRASOS=[["natural","Natural: tarda lo que tardaría escribir"],["rapido","Rápido: en pocos segundos"]];
const DISCLOSE=/asistente virtual|asistente de ia|asistente con ia|inteligencia artificial|\bia\b|\bbot\b|virtual/i;

function agDefault(s){
  const b=(briefDoc(s.id)||{}).campos||{}, nm="Lola";
  const cal=(typeof calsDe==="function"?calsDe(s):["Citas"])[0];
  return {sub:s.id,activo:false,nombre:nm,
    presentacion:`¡Hola! Soy ${nm}, la asistente virtual de ${s.nombre}. Te ayudo con lo que necesites y, si quieres hablar con alguien del equipo, te paso en un momento.`,
    tono:"cercano",emojis:true,objetivo:"cita",calendario:cal,servicio:"",enlace:"",
    preguntas:"¿Qué te gustaría mejorar o conseguir?\n¿Desde cuándo lo estás pensando?\n¿Qué te ha frenado hasta ahora?\n¿Cuándo te vendría bien venir?",
    cualificado:"Sabe lo que quiere, tiene intención en los próximos 3 meses y acepta una cita.",
    objeciones:"Es caro | Entiendo que es una inversión. Por eso la primera visita es para darte un presupuesto cerrado, sin compromiso.\nLo tengo que pensar | Claro. ¿Te guardo un hueco esta semana y si cambias de idea lo anulamos sin problema?",
    conocimiento:[b.queHace,b.propuesta,b.servicios,b.ofertas].filter(Boolean).join("\n\n"),
    precios:"",limites:"No dar diagnósticos ni consejos médicos o legales.\nNo prometer resultados ni cerrar precios que no estén aquí.\nNo pedir datos de pago por WhatsApp.",
    relevo:{pide:true,queja:true,precio:false,mensajes:10,palabras:"reclamación, abogado, urgente"},avisar:"",
    horario:"siempre",horas:"09:00-20:00",retraso:"natural",
    voz:{modo:"si_audio",proveedor:"elevenlabs",vozId:"",tipo:"sintetica",consentimiento:false,consentNombre:"",velocidad:1},
    actualizado:null};
}
const agente = sid => S.data.agentes.find(a=>a.id===sid) || null;
function agState(){ const s=sub(); if(!S.ag||S.ag.sid!==s.id){ const doc=agente(s.id); S.ag={sid:s.id,d:Object.assign(agDefault(s),clone(doc||{})),dirty:false,sim:[],busy:false}; delete S.ag.d.id; } return S.ag; }

function agMetrics(sid){
  const since=Date.now()-30*DAY, cs=of("conversaciones",sid);
  let convs=0,msgs=0,audios=0,relevos=0;
  cs.forEach(c=>{ const ia=(c.mensajes||[]).filter(m=>m.de==="ia"&&new Date(m.t)>=since); if(ia.length) convs++; msgs+=ia.length; audios+=ia.filter(m=>m.tipo==="audio").length; if((c.mensajes||[]).some(m=>m.relevo&&new Date(m.t)>=since)) relevos++; });
  const citas=S.data.citas.filter(c=>c.sub===sid&&c.origen==="ia"&&new Date(c.creado||c.inicio)>=since).length;
  return {convs,msgs,audios,relevos,citas};
}

function viewAgente(){
  const s=sub(), A=agState(), d=A.d, wa=integ(s.id).whatsapp||{}, waOk=wa.estado==="conectada", M=agMetrics(s.id), ro=canEdit()?"":"disabled";
  const users=S.data.usuarios.filter(u=>u.rol!=="cliente"&&(u.rol==="admin"||(u.subcuentas||[]).includes(s.id)));
  const estado = d.activo&&waOk ? `<span class="pill ok">Respondiendo en WhatsApp</span>` : d.activo ? `<span class="pill warn">Activo, falta conectar WhatsApp</span>` : `<span class="pill">Apagado</span>`;
  const toggle = canEdit()?`<label class="switchl"><input type="checkbox" data-ag-on ${d.activo?"checked":""} ${!waOk&&!d.activo?"":""}><span></span>${d.activo?"Encendido":"Apagado"}</label>`:"";
  const head=headHTML(esc(s.nombre),"Tu setter, en <span class=\"m\">WhatsApp.</span>","Un agente de IA que contesta a cada lead al momento, le hace las preguntas que harías tú, resuelve objeciones y le agenda la cita. Si algo se complica, te lo pasa.",`<div class="actions" style="align-items:center">${estado}${toggle}</div>`);
  const waBanner = waOk?"":`<div class="banner" style="display:flex;gap:12px;align-items:center;justify-content:space-between;flex-wrap:wrap"><span><b>Falta conectar WhatsApp.</b> Puedes dejarlo preparado y probarlo aquí; contestará de verdad cuando vincules el número en Integraciones.</span>${canEdit()?`<button class="btn sec" data-go-integ="${esc(s.id)}">Conectar WhatsApp</button>`:""}</div>`;
  const kpis=`<div class="kpis"><div class="kpi"><small>Conversaciones atendidas</small><b class="num">${M.convs}</b><span>últimos 30 días</span></div><div class="kpi"><small>Citas agendadas por la IA</small><b class="num">${M.citas}</b><span>${M.convs?pct(M.citas/M.convs,0)+" de las conversaciones":"—"}</span></div><div class="kpi"><small>Notas de voz enviadas</small><b class="num">${M.audios}</b><span>de ${M.msgs} mensajes</span></div><div class="kpi"><small>Pasadas a una persona</small><b class="num">${M.relevos}</b><span>por relevo o petición</span></div></div>`;
  const F=(path,label,inner,help)=>fld("ag-"+path.replace(/\./g,"-"),label,inner,help);
  const tin=(path,ph,extra)=>`<input id="ag-${path.replace(/\./g,"-")}" data-ag="${path}" value="${esc(getPath(d,path)||"")}" ${ph?`placeholder="${esc(ph)}"`:""} ${ro} ${extra||""}>`;
  const tta=(path,rows,ph)=>`<textarea id="ag-${path.replace(/\./g,"-")}" data-ag="${path}" rows="${rows||4}" ${ph?`placeholder="${esc(ph)}"`:""} ${ro}>${esc(getPath(d,path)||"")}</textarea>`;
  const tsel=(path,opts)=>`<select id="ag-${path.replace(/\./g,"-")}" data-ag="${path}" ${ro}>${selOpts(opts,getPath(d,path))}</select>`;
  const tchk=(path,label)=>`<label class="check"><input type="checkbox" data-ag="${path}" ${getPath(d,path)?"checked":""} ${ro}><span>${label}</span></label>`;
  const disclosureOk=DISCLOSE.test(d.presentacion||"");
  const cals=(typeof calsDe==="function"?calsDe(s):["Citas"]);
  const form=`<div class="ag-form">
    <section class="form-block"><h2>1 · Quién es</h2>
      <div class="row2">${F("nombre","Nombre del asistente",tin("nombre","Lola"))}${F("tono","Tono",tsel("tono",TONOS))}</div>
      ${F("presentacion","Cómo se presenta",tta("presentacion",3),disclosureOk?"Se presenta como asistente virtual en el primer mensaje: así lo exige la ley europea de IA desde agosto de 2026.":`<span style="color:var(--bad);font-weight:600">Tiene que decir que es una asistente virtual o una IA. Sin eso no se puede encender.</span>`)}
      ${tchk("emojis","Puede usar algún emoji, como haría una persona")}
      <div class="note"><b>Siempre dice la verdad sobre lo que es.</b> Si alguien pregunta «¿eres un bot?» o «¿hablo con una persona?», responde que es la asistente virtual y ofrece pasarle con el equipo. Esto no se puede desactivar.</div>
    </section>
    <section class="form-block"><h2>2 · Qué tiene que conseguir</h2>
      <div class="row2">${F("objetivo","Objetivo",tsel("objetivo",OBJETIVOS))}${F("calendario","Calendario para las citas",tsel("calendario",cals.map(c=>[c,c])))}</div>
      <div class="row2">${F("servicio","Qué cita o servicio ofrece",tin("servicio","Primera visita y estudio 3D"))}${F("enlace","Enlace de reserva o de pago",tin("enlace","https://…"))}</div>
      ${F("preguntas","Preguntas de cualificación",tta("preguntas",5),"Una por línea, en el orden en que las haría. No las suelta de golpe: las va metiendo en la conversación.")}
      ${F("cualificado","Cuándo un lead está cualificado",tta("cualificado",2))}
    </section>
    <section class="form-block"><h2>3 · Objeciones y conocimiento</h2>
      ${F("objeciones","Objeciones y cómo responderlas",tta("objeciones",5),"Una por línea: objeción | respuesta.")}
      ${F("conocimiento","Lo que tiene que saber del negocio",tta("conocimiento",6),"Sale del brief del cliente. Añade horarios, dirección, financiación, lo que diferencia al negocio…")}
      ${F("precios","Precios que puede decir",tta("precios",3,"Primera visita: gratis\nBlanqueamiento: desde 350 €"),"Si un precio no está aquí, no lo dice: ofrece la cita para dar presupuesto.")}
      ${F("limites","Lo que nunca hace",tta("limites",3))}
    </section>
    <section class="form-block"><h2>4 · Cuándo pasa a una persona</h2>
      <div class="checks">${tchk("relevo.pide","Cuando pide hablar con alguien")}${tchk("relevo.queja","Cuando hay una queja o un enfado")}${tchk("relevo.precio","Cuando pregunta un precio que no está en la lista")}</div>
      <div class="row2">${F("relevo.mensajes","Tras cuántos mensajes sin avanzar",tin("relevo.mensajes","10",'type="number" min="3" max="40"'))}${F("relevo.palabras","Palabras que lo pasan siempre",tin("relevo.palabras","reclamación, abogado"))}</div>
      ${F("avisar","A quién avisa",`<select id="ag-avisar" data-ag="avisar" ${ro}>${selOpts([["","A todo el equipo de la subcuenta"]].concat(users.map(u=>[u.id,u.nombre])),d.avisar||"")}</select>`,"Al pasar, la IA deja de contestar en esa conversación hasta que se la devuelvas.")}
    </section>
    <section class="form-block"><h2>5 · Horario y ritmo</h2>
      <div class="row2">${F("horario","Cuándo contesta",tsel("horario",HORARIOS))}${F("horas","Horario del equipo",tin("horas","09:00-20:00"))}</div>
      ${F("retraso","Ritmo de respuesta",tsel("retraso",RETRASOS),"«Natural» espera lo que se tarda en escribir y lo marca como «escribiendo…». Fuera de las 24 h desde el último mensaje del cliente, WhatsApp solo deja enviar plantillas aprobadas.")}
    </section>
    <section class="form-block"><h2>6 · Notas de voz</h2>
      <div class="row2">${F("voz.modo","Cuándo responde con audio",tsel("voz.modo",VOZ_MODOS))}${F("voz.proveedor","Motor de voz",tsel("voz.proveedor",VOZ_PROV))}</div>
      <div class="row2">${F("voz.vozId","ID de la voz",tin("voz.vozId","La voz elegida en el proveedor"))}${F("voz.velocidad","Velocidad",tin("voz.velocidad","1",'type="number" min="0.7" max="1.3" step="0.05"'))}</div>
      ${F("voz.tipo","Qué voz usa",tsel("voz.tipo",[["sintetica","Una voz sintética del catálogo"],["clonada","La voz clonada de una persona del equipo"]]))}
      ${d.voz.tipo==="clonada"?`<div class="ag-consent">${tchk("voz.consentimiento","Tengo el consentimiento por escrito de esa persona para clonar su voz y usarla en WhatsApp")}${F("voz.consentNombre","Nombre de la persona",tin("voz.consentNombre","Nombre y apellidos"))}</div>`:""}
      <div class="actions" style="align-items:center"><button type="button" class="btn sec" data-ag-voz>${I.play.replace('<svg','<svg width="14" height="14"')}Escuchar un ejemplo</button><span class="muted" style="font-size:13px">Es la voz de tu navegador, solo para hacerte una idea. La real la pone tu motor de voz.</span></div>
      <p class="muted" style="margin:0;font-size:13px">El audio se manda como nota de voz (ogg/opus) y lleva el texto guardado aquí. Como ya se presentó como asistente virtual, sus audios no se hacen pasar por una persona.</p>
    </section>
    ${canEdit()?`<div class="actions" style="justify-content:space-between;align-items:center"><span class="save-ind">${A.dirty?"Cambios sin guardar":d.actualizado?"Guardado "+rel(d.actualizado):"Sin guardar todavía"}</span><button class="btn" data-ag-save>Guardar agente</button></div>`:""}
  </div>`;
  const sim=`<aside class="ag-side"><section class="panel ag-sim"><div class="ph"><h2>Pruébalo</h2><span>con Claude, como si fueras un lead</span></div>
      <div class="ag-phone"><div class="ag-top">${I.wa.replace('<svg','<svg width="16" height="16"')}<b>${esc(s.nombre)}</b><small>WhatsApp · prueba</small></div>
        <div class="msgs ag-msgs" id="ag-msgs">${agSimHTML(A)}</div>
        <form class="ag-comp" id="ag-comp"><input id="ag-in" placeholder="Escribe como si fueras un cliente…" autocomplete="off" aria-label="Mensaje de prueba"><button type="button" class="x" data-ag-audio title="Mandarlo como si fuera un audio" aria-label="Mandarlo como audio">${I.mic}</button><button class="btn" type="submit" style="padding:8px 14px">Enviar</button></form>
      </div>
      <div class="actions"><button class="btn ghost" data-ag-reset type="button">Empezar de nuevo</button></div>
      <p class="muted" id="ag-note" style="margin:0;font-size:12.5px">La prueba usa tu cuenta de Claude y no envía nada a WhatsApp. Se usa la configuración que ves, aunque no la hayas guardado.</p>
    </section>
    <section class="panel"><div class="ph"><h2>Cómo funciona</h2></div>
      <div class="sim">
        <div><b>Entra un WhatsApp</b><time>Meta lo manda al webhook de tu sistema</time></div>
        <div><b>Tu sistema lee esta configuración</b><time>agentes/${esc(s.id)} + la conversación + el contacto</time></div>
        <div><b>Claude escribe la respuesta</b><time>y decide si va en audio, si agenda o si pasa a una persona</time></div>
        <div><b>Si toca audio, se genera la voz</b><time>con tu motor de voz y se sube como nota de voz</time></div>
        <div class="ok"><b>Se envía por la Cloud API</b><time>y queda en Conversaciones marcado como IA</time></div>
      </div></section></aside>`;
  return head+waBanner+kpis+`<div class="ag-grid">${form}${sim}</div>`;
}
function agSimHTML(A){
  if(!A.sim.length) return `<div class="chat-empty" style="padding:20px">Escribe el primer mensaje de un lead, por ejemplo «Hola, vi vuestro anuncio de implantes, ¿cuánto cuesta?».</div>`;
  return A.sim.map(m=>{
    if(m.de==="sys") return `<div class="msg sys">${esc(m.texto)}</div>`;
    if(m.de==="in") return `<div class="msg">${m.audio?`<span class="aud-in">${I.mic.replace('<svg','<svg width="13" height="13"')} Audio</span> `:""}${esc(m.texto)}</div>`;
    if(m.audio) return `<div class="msg out ia"><span class="ia-tag">${esc(A.d.nombre||"IA")} · nota de voz</span><div class="audio"><button type="button" data-say="${esc(m.texto)}" aria-label="Escuchar">${I.play.replace('<svg','<svg width="14" height="14"')}</button><span class="wave" aria-hidden="true">${"<i></i>".repeat(18)}</span><span class="num">${durAudio(m.texto)}</span></div><p class="tr">${esc(m.texto)}</p></div>`;
    return `<div class="msg out ia"><span class="ia-tag">${esc(A.d.nombre||"IA")}</span>${esc(m.texto)}</div>`;
  }).join("")+(A.busy?`<div class="msg out ia typing"><span class="ia-tag">${esc(A.d.nombre||"IA")}</span>escribiendo…</div>`:"");
}
const durAudio = t => { const s=Math.max(3,Math.round(String(t||"").split(/\s+/).length/2.5)); return Math.floor(s/60)+":"+String(s%60).padStart(2,"0"); };
function agRedrawSim(){ const el=$("#ag-msgs"); if(el){ el.innerHTML=agSimHTML(S.ag); el.scrollTop=el.scrollHeight; } }

function agPrompt(A,s){
  const d=A.d, k=(briefDoc(s.id)||{}).campos||{};
  const hist=A.sim.filter(m=>m.de!=="sys").map(m=>(m.de==="in"?"CLIENTE"+(m.audio?" (nota de voz, transcrita)":""):"ASISTENTE"+(m.audio?" (nota de voz)":""))+": "+m.texto).join("\n");
  const first=!A.sim.some(m=>m.de==="ia");
  return `Eres ${d.nombre||"la asistente"}, la asistente virtual (una IA) de ${s.nombre}${s.sector?", "+s.sector:""}, y atiendes por WhatsApp a leads que llegan de anuncios. Haces de setter: tu trabajo es ${(OBJETIVOS.find(o=>o[0]===d.objetivo)||OBJETIVOS[0])[1].toLowerCase()}${d.servicio?" ("+d.servicio+")":""}.
REGLAS FIJAS
- Escribe como en WhatsApp: mensajes cortos (1-3 frases), naturales, en español de España, tono ${(TONOS.find(t=>t[0]===d.tono)||TONOS[0])[1].toLowerCase()}${d.emojis?", algún emoji suelto si encaja":", sin emojis"}. Puedes partir la respuesta en 1-3 mensajes.
- ${first?`Es tu primer mensaje: empieza presentándote así o muy parecido: «${d.presentacion}»`:"Ya te has presentado; no lo repitas."}
- Eres una IA y nunca lo niegas. Si te preguntan si eres una persona o un bot, di con naturalidad que eres la asistente virtual y ofrece pasar con el equipo.
- Haz una pregunta de cualificación cada vez, no un interrogatorio. Preguntas: ${d.preguntas.split("\n").filter(Boolean).join(" / ")}.
- Lead cualificado: ${d.cualificado}
- Si está cualificado, propón ${d.objetivo==="venta"?"el enlace de pago":"dos huecos concretos"}${d.enlace?" o el enlace "+d.enlace:""}${d.calendario?" del calendario «"+d.calendario+"»":""}. Hoy es ${new Date().toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long"})}.
- Objeciones (objeción | respuesta): ${d.objeciones.replace(/\n/g," ; ")}
- Precios que puedes decir: ${d.precios||"ninguno; ofrece la cita para dar presupuesto"}. Nunca inventes precios ni promesas.
- Nunca: ${d.limites.replace(/\n/g," ; ")}
- Pasa a una persona (accion "pasar_a_persona") si: ${[d.relevo.pide&&"pide hablar con alguien",d.relevo.queja&&"hay una queja o enfado",d.relevo.precio&&"pregunta un precio que no está en la lista",d.relevo.palabras&&"dice alguna de estas palabras: "+d.relevo.palabras,"la conversación lleva más de "+(d.relevo.mensajes||10)+" mensajes sin avanzar"].filter(Boolean).join("; ")}.
- Audio: modo «${d.voz.modo}». ${d.voz.modo==="nunca"?"Responde siempre en texto.":d.voz.modo==="si_audio"?"Responde con nota de voz solo si el último mensaje del cliente es una nota de voz.":d.voz.modo==="largos"?"Usa nota de voz cuando la respuesta sea larga o explicativa.":"Usa nota de voz cuando una persona lo haría (explicar, tranquilizar, cerrar la cita)."} Un audio se escribe como se habla, sin emojis ni listas.
LO QUE SABES DEL NEGOCIO
${(d.conocimiento||"").slice(0,4000)||"(sin datos)"}
${k.objeciones?"Objeciones típicas según el brief: "+k.objeciones:""}
CONVERSACIÓN HASTA AHORA
${hist}

Responde SOLO con un JSON así:
{"mensajes":["texto del primer mensaje","opcional segundo"],"audio":false,"accion":"ninguna","cualificado":"aun_no","nota":"por qué, en una frase"}
- "audio": true si la respuesta va como nota de voz (entonces "mensajes" lleva un único texto, el guion del audio).
- "accion": "ninguna" | "proponer_cita" | "cita_agendada" | "pasar_a_persona".
- "cualificado": "si" | "no" | "aun_no".`;
}
async function agSend(texto,audio){
  const A=S.ag, s=sub(); if(!A||A.busy||!texto.trim()) return;
  // Prueba con IA vía /api/ai/json (Claude en el servidor, requiere ANTHROPIC_API_KEY).
  const sample={ json: async (prompt)=>{
    const res=await fetch("/api/ai/json",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({prompt})});
    const j=await res.json().catch(()=>({}));
    if(!res.ok){ const e=new Error(j.code||"error"); e.code=j.code==="not_configured"?"not_configured":j.code; throw e; }
    return j;
  }};
  A.sim.push({de:"in",texto:texto.trim(),audio:!!audio}); A.busy=true; agRedrawSim();
  try{
    const r=await sample.json(agPrompt(A,s),{cache:false});
    const ms=(Array.isArray(r&&r.mensajes)?r.mensajes:[String((r&&r.mensajes)||"")]).map(String).filter(x=>x.trim());
    if(r&&r.audio) A.sim.push({de:"ia",texto:ms.join(" "),audio:true}); else ms.forEach(t=>A.sim.push({de:"ia",texto:t}));
    const ac={proponer_cita:"Propone cita",cita_agendada:"Cita agendada en el calendario",pasar_a_persona:"Pasa la conversación a una persona del equipo"}[r&&r.accion];
    const cu={si:"lead cualificado",no:"lead no cualificado"}[r&&r.cualificado];
    if(ac||cu) A.sim.push({de:"sys",texto:[ac,cu].filter(Boolean).join(" · ")+(r.nota?" — "+r.nota:"")});
  }catch(e){
    A.sim.pop(); A.sim.push({de:"in",texto:texto.trim(),audio:!!audio});
    const msg={not_configured:"Falta configurar la clave de Claude (ANTHROPIC_API_KEY) en Vercel.",not_granted:"No has dado permiso para usar Claude en esta página.",rate_limited:"Demasiadas pruebas seguidas. Espera un poco.",invalid_json:"La respuesta no ha salido bien. Prueba otra vez.",refused:"Claude no ha querido responder a ese mensaje.",session_expired:"Tu sesión ha caducado. Vuelve a entrar."}[e&&e.code]||"No se ha podido generar la respuesta.";
    A.sim.push({de:"sys",texto:msg});
  }finally{ A.busy=false; agRedrawSim(); }
}
function agSet(path,val){ const A=agState(); const ks=path.split("."); let o=A.d; ks.slice(0,-1).forEach(k=>{ o[k]=Object.assign({},o[k]||{}); o=o[k]; }); o[ks[ks.length-1]]=val; A.dirty=true; const i=document.querySelector(".ag-form .save-ind"); if(i) i.textContent="Cambios sin guardar"; }
async function agSave(activar){
  const A=agState(), s=sub(); if(!canEdit()) return;
  const d=Object.assign({},A.d); if(typeof activar==="boolean") d.activo=activar;
  let aviso="";
  if(d.activo&&!DISCLOSE.test(d.presentacion||"")){ aviso="La presentación tiene que decir que es una asistente virtual"; d.activo=false; }
  else if(d.activo&&d.voz&&d.voz.tipo==="clonada"&&d.voz.modo!=="nunca"&&!(d.voz.consentimiento&&String(d.voz.consentNombre||"").trim())){ aviso="Para usar una voz clonada necesitas el consentimiento de esa persona"; d.activo=false; }
  d.relevo=Object.assign({},d.relevo,{mensajes:Math.max(3,Math.min(40,+d.relevo.mensajes||10))});
  d.actualizado=nowISO(); d.sub=s.id;
  try{ await save("agentes",s.id,d); A.d=d; A.dirty=false; toast(aviso?tx(aviso)+" · "+tx("se ha guardado apagado"):typeof activar==="boolean"?(d.activo?"Agente encendido":"Agente apagado"):"Agente guardado"); renderMain(); }catch(e){}
}
function say(text){
  try{ const u=new SpeechSynthesisUtterance(String(text||"")); u.lang=LANG==="en"?"en-GB":"es-ES"; const r=+((S.ag&&S.ag.d.voz&&S.ag.d.voz.velocidad)||1); u.rate=isFinite(r)?r:1;
    const v=speechSynthesis.getVoices().find(x=>x.lang&&x.lang.toLowerCase().startsWith(LANG==="en"?"en":"es")); if(v) u.voice=v; speechSynthesis.cancel(); speechSynthesis.speak(u); }catch(e){ toast("Este navegador no puede reproducir la voz de ejemplo"); }
}

/* Mensajes de IA y audios en Conversaciones */
function msgHTML(m,cur,agName){
  if(m.de==="sys") return `<div class="msg sys">${m.relevo?`<b>Pasada a una persona.</b> `:""}${esc(m.texto)}<time>${rel(m.t)}</time></div>`;
  const out=m.de==="out"||m.de==="ia";
  const tag=m.de==="ia"?`<span class="ia-tag">${esc(m.agente||agName||"IA")}${m.tipo==="audio"?" · nota de voz":""}</span>`:"";
  const body=m.tipo==="audio"?`<div class="audio"><button type="button" data-say="${esc(m.texto)}" aria-label="Escuchar">${I.play.replace('<svg','<svg width="14" height="14"')}</button><span class="wave" aria-hidden="true">${"<i></i>".repeat(18)}</span><span class="num">${esc(m.duracion||durAudio(m.texto))}</span></div><p class="tr">${esc(m.texto)}</p>`:esc(m.texto);
  return `<div class="msg ${out?"out":""} ${m.de==="ia"?"ia":""}">${tag}${body}<time>${esc(m.canal||cur.canal)} · ${rel(m.t)}</time></div>`;
}
function iaConvBar(cur){
  const ag=agente(cur.sub); if(!ag||cur.canal!=="WhatsApp") return "";
  const on=ag.activo&&!cur.iaPausada;
  return `<div class="ia-bar ${on?"on":""}">${I.bot.replace('<svg','<svg width="16" height="16"')}<span>${on?`${esc(ag.nombre)} está atendiendo esta conversación.`:ag.activo?"La llevas tú: la IA no contesta aquí.":"El agente setter está apagado."}</span>${canEdit()&&ag.activo?`<button class="btn ${on?"sec":""}" data-ia-toggle="${esc(cur.id)}" style="padding:6px 12px">${on?"La llevo yo":"Devolver a la IA"}</button>`:""}</div>`;
}

Object.assign(EN_DICT,{"Agente IA":"AI agent","Tu setter, en":"Your setter, on","WhatsApp.":"WhatsApp.","Un agente de IA que contesta a cada lead al momento, le hace las preguntas que harías tú, resuelve objeciones y le agenda la cita. Si algo se complica, te lo pasa.":"An AI agent that answers every lead straight away, asks the questions you'd ask, handles objections and books the appointment. If things get complicated, it hands over to you.",
"Respondiendo en WhatsApp":"Replying on WhatsApp","Activo, falta conectar WhatsApp":"On, WhatsApp not connected yet","Apagado":"Off","Encendido":"On","Falta conectar WhatsApp.":"WhatsApp isn't connected yet.","Puedes dejarlo preparado y probarlo aquí; contestará de verdad cuando vincules el número en Integraciones.":"You can set it up and test it here; it will reply for real once you link the number in Integrations.","Conectar WhatsApp":"Connect WhatsApp",
"Conversaciones atendidas":"Conversations handled","últimos 30 días":"last 30 days","Citas agendadas por la IA":"Appointments booked by the AI","Notas de voz enviadas":"Voice notes sent","Pasadas a una persona":"Handed to a person","por relevo o petición":"by handover or request",
"1 · Quién es":"1 · Who it is","Nombre del asistente":"Assistant name","Tono":"Tone","Cómo se presenta":"How it introduces itself","Se presenta como asistente virtual en el primer mensaje: así lo exige la ley europea de IA desde agosto de 2026.":"It introduces itself as a virtual assistant in the first message, as the EU AI Act requires since August 2026.","Tiene que decir que es una asistente virtual o una IA. Sin eso no se puede encender.":"It has to say it's a virtual assistant or an AI. It can't be switched on without that.","Puede usar algún emoji, como haría una persona":"It may use the odd emoji, like a person would",
"Siempre dice la verdad sobre lo que es.":"It always tells the truth about what it is.","Si alguien pregunta «¿eres un bot?» o «¿hablo con una persona?», responde que es la asistente virtual y ofrece pasarle con el equipo. Esto no se puede desactivar.":"If someone asks «are you a bot?» or «am I talking to a person?», it says it's the virtual assistant and offers to hand over to the team. This can't be turned off.",
"2 · Qué tiene que conseguir":"2 · What it has to achieve","Objetivo":"Goal","Calendario para las citas":"Calendar for appointments","Qué cita o servicio ofrece":"Appointment or service it offers","Enlace de reserva o de pago":"Booking or payment link","Preguntas de cualificación":"Qualifying questions","Una por línea, en el orden en que las haría. No las suelta de golpe: las va metiendo en la conversación.":"One per line, in the order it would ask them. It doesn't fire them all at once: it works them into the conversation.","Cuándo un lead está cualificado":"When a lead is qualified",
"3 · Objeciones y conocimiento":"3 · Objections and knowledge","Objeciones y cómo responderlas":"Objections and how to answer them","Una por línea: objeción | respuesta.":"One per line: objection | answer.","Lo que tiene que saber del negocio":"What it needs to know about the business","Sale del brief del cliente. Añade horarios, dirección, financiación, lo que diferencia al negocio…":"Comes from the client brief. Add opening hours, address, financing, what sets the business apart…","Precios que puede decir":"Prices it may quote","Si un precio no está aquí, no lo dice: ofrece la cita para dar presupuesto.":"If a price isn't here, it won't say it: it offers the appointment to give a quote.","Lo que nunca hace":"What it never does",
"4 · Cuándo pasa a una persona":"4 · When it hands over to a person","Cuando pide hablar con alguien":"When they ask to talk to someone","Cuando hay una queja o un enfado":"When there's a complaint or someone's upset","Cuando pregunta un precio que no está en la lista":"When they ask for a price that isn't on the list","Tras cuántos mensajes sin avanzar":"After how many messages without progress","Palabras que lo pasan siempre":"Words that always trigger a handover","A quién avisa":"Who it notifies","A todo el equipo de la subcuenta":"The whole sub-account team","Al pasar, la IA deja de contestar en esa conversación hasta que se la devuelvas.":"Once handed over, the AI stops replying in that conversation until you give it back.",
"5 · Horario y ritmo":"5 · Hours and pace","Cuándo contesta":"When it replies","Horario del equipo":"Team hours","Ritmo de respuesta":"Reply pace","«Natural» espera lo que se tarda en escribir y lo marca como «escribiendo…». Fuera de las 24 h desde el último mensaje del cliente, WhatsApp solo deja enviar plantillas aprobadas.":"«Natural» waits as long as typing would take and shows «typing…». More than 24 h after the customer's last message, WhatsApp only allows approved templates.",
"6 · Notas de voz":"6 · Voice notes","Cuándo responde con audio":"When it replies with audio","Motor de voz":"Voice engine","ID de la voz":"Voice ID","Velocidad":"Speed","Qué voz usa":"Which voice it uses","Una voz sintética del catálogo":"A synthetic voice from the catalogue","La voz clonada de una persona del equipo":"A cloned voice of someone on the team","Tengo el consentimiento por escrito de esa persona para clonar su voz y usarla en WhatsApp":"I have that person's written consent to clone their voice and use it on WhatsApp","Nombre de la persona":"Person's name","Escuchar un ejemplo":"Play a sample","Es la voz de tu navegador, solo para hacerte una idea. La real la pone tu motor de voz.":"This is your browser's voice, just to give you an idea. The real one comes from your voice engine.","El audio se manda como nota de voz (ogg/opus) y lleva el texto guardado aquí. Como ya se presentó como asistente virtual, sus audios no se hacen pasar por una persona.":"The audio is sent as a voice note (ogg/opus) and its text is saved here. Since it already introduced itself as a virtual assistant, its audios don't pass for a person.",
"Guardar agente":"Save agent","Agente guardado":"Agent saved","Agente encendido":"Agent on","Agente apagado":"Agent off","Cambios sin guardar":"Unsaved changes","Sin guardar todavía":"Not saved yet","Pruébalo":"Try it","con Claude, como si fueras un lead":"with Claude, as if you were a lead","Escribe como si fueras un cliente…":"Write as if you were a customer…","Enviar":"Send","Empezar de nuevo":"Start over","La prueba usa tu cuenta de Claude y no envía nada a WhatsApp. Se usa la configuración que ves, aunque no la hayas guardado.":"The test uses your Claude account and sends nothing to WhatsApp. It uses the settings you see, even if you haven't saved them.","Cómo funciona":"How it works","Entra un WhatsApp":"A WhatsApp comes in","Meta lo manda al webhook de tu sistema":"Meta sends it to your system's webhook","Tu sistema lee esta configuración":"Your system reads these settings","Claude escribe la respuesta":"Claude writes the reply","y decide si va en audio, si agenda o si pasa a una persona":"and decides whether it goes as audio, books, or hands over","Si toca audio, se genera la voz":"If it's audio, the voice is generated","con tu motor de voz y se sube como nota de voz":"with your voice engine and uploaded as a voice note","Se envía por la Cloud API":"It's sent through the Cloud API","y queda en Conversaciones marcado como IA":"and stays in Conversations marked as AI",
"Cercano y natural":"Warm and natural","Profesional":"Professional","Enérgico":"Upbeat","Sereno y empático":"Calm and empathetic","Agendar una cita":"Book an appointment","Agendar una llamada":"Book a call","Cualificar y pasar a una persona":"Qualify and hand over to a person","Cerrar la venta con un enlace de pago":"Close the sale with a payment link","Nunca, solo texto":"Never, text only","Cuando el cliente manda un audio":"When the customer sends an audio","En las respuestas largas":"For longer replies","Siempre que tenga sentido":"Whenever it makes sense","Siempre, 24/7":"Always, 24/7","Solo fuera del horario del equipo":"Only outside team hours","Solo en horario del equipo":"Only during team hours","Natural: tarda lo que tardaría escribir":"Natural: takes as long as typing would","Rápido: en pocos segundos":"Fast: within seconds",
"La prueba con IA funciona al abrir el CRM dentro de Claude.":"The AI test works when you open the CRM inside Claude.","No has dado permiso para usar Claude en esta página.":"You haven't allowed this page to use Claude.","Demasiadas pruebas seguidas. Espera un poco.":"Too many tests in a row. Wait a moment.","La respuesta no ha salido bien. Prueba otra vez.":"The reply didn't come out right. Try again.","Claude no ha querido responder a ese mensaje.":"Claude declined to reply to that message.","Tu sesión ha caducado. Vuelve a entrar.":"Your session has expired. Sign in again.","No se ha podido generar la respuesta.":"The reply couldn't be generated.","Escribe primero lo que diría el audio":"First write what the audio would say","Propone cita":"Proposes an appointment","Cita agendada en el calendario":"Appointment booked in the calendar","Pasa la conversación a una persona del equipo":"Hands the conversation to someone on the team","lead cualificado":"qualified lead","lead no cualificado":"unqualified lead","escribiendo…":"typing…","Audio":"Audio",
"La llevo yo":"I'll take it","Devolver a la IA":"Give back to the AI","La llevas tú: la IA no contesta aquí.":"You're handling it: the AI won't reply here.","El agente setter está apagado.":"The setter agent is off.","La llevas tú: la IA deja de contestar aquí":"You're handling it: the AI stops replying here","La IA vuelve a atender esta conversación":"The AI is handling this conversation again","Pasada a una persona.":"Handed to a person.",
"Anuncios":"Ads","Mensajería":"Messaging","Vincula las cuentas de anuncios y el WhatsApp de este cliente: por API para los datos y los mensajes, y por MCP para trabajar con Claude.":"Link this client's ad accounts and WhatsApp: through the API for data and messages, and through MCP to work with Claude.","MCP conectado":"MCP connected","MCP con error":"MCP error","MCP pendiente":"MCP pending","Ningún número vinculado":"No number linked","Agente setter apagado":"Setter agent off","Ajustes":"Settings","Cloud API de Meta for Developers: recibe y envía mensajes y notas de voz. Es lo que usa tu agente setter.":"Meta for Developers Cloud API: receives and sends messages and voice notes. It's what your setter agent uses.",
"Servidor MCP":"MCP server","Conectar también por MCP":"Also connect through MCP","Para preguntar a Claude «¿qué campaña escalo?» o pedirle que prepare una campaña en pausa sin salir del chat.":"To ask Claude «which campaign should I scale?» or have it prepare a paused campaign without leaving the chat.","URL del servidor MCP":"MCP server URL","La dirección de tu servidor MCP o de tu proveedor. Siempre con https.":"Your MCP server's or provider's address. Always https.","Nombre del servidor":"Server name","Autenticación":"Authentication","Inicio de sesión del propio servidor (OAuth)":"The server's own sign-in (OAuth)","Token guardado en tu servidor":"Token stored on your server","Sin autenticación (solo pruebas)":"No authentication (testing only)","Qué puede hacer":"What it can do","Leer cuentas, campañas y métricas":"Read accounts, campaigns and metrics","Crear campañas (siempre en pausa)":"Create campaigns (always paused)","Cambiar presupuestos y estado":"Change budgets and status","Empieza solo con leer. Crear deja siempre la campaña en pausa para que la revises.":"Start with read only. Creating always leaves the campaign paused for you to review.","Ningún token se guarda en el CRM.":"No token is stored in the CRM.","Vincular cuenta":"Link account",
"1 · Cloud API (mensajes reales)":"1 · Cloud API (real messages)","Número de WhatsApp":"WhatsApp number","ID de la cuenta de WhatsApp Business (WABA)":"WhatsApp Business Account ID (WABA)","ID de la app en Meta for Developers":"Meta for Developers app ID","URL del webhook de tu sistema":"Your system's webhook URL","Pégala en Meta for Developers › WhatsApp › Configuración, suscrita a «messages». Tu sistema recibe ahí cada mensaje.":"Paste it in Meta for Developers › WhatsApp › Configuration, subscribed to «messages». Your system receives every message there.","Nombre para reconocerla":"Name to recognise it","2 · MCP de Meta (configuración)":"2 · Meta MCP (setup)","Usar el MCP de WhatsApp Business de Meta":"Use Meta's WhatsApp Business MCP","Sirve para dar de alta números, crear y aprobar plantillas, configurar el webhook y enviar mensajes de prueba desde Claude. No sirve para atender clientes en producción: eso va por la Cloud API.":"It's for registering numbers, creating and getting templates approved, setting up the webhook and sending test messages from Claude. It's not for serving customers in production: that goes through the Cloud API.","La que indica la documentación de Meta for Developers":"The one given in the Meta for Developers docs","Facebook Login for Business (OAuth)":"Facebook Login for Business (OAuth)","Tienes que ser administradora de la app en Meta for Developers.":"You need to be an admin of the app in Meta for Developers.","El token de acceso no se guarda en el CRM.":"The access token isn't stored in the CRM.","Va en tu servidor, junto con el «verify token» del webhook. Aquí solo queda qué número usar.":"It lives on your server, along with the webhook's «verify token». Only the number to use is kept here.","Vincular WhatsApp":"Link WhatsApp","WhatsApp vinculado":"WhatsApp linked","WhatsApp desconectado":"WhatsApp disconnected","Desconectar":"Disconnect","La URL del MCP tiene que empezar por https://":"The MCP URL must start with https://","El webhook tiene que empezar por https://":"The webhook must start with https://","La presentación tiene que decir que es una asistente virtual":"The introduction has to say it's a virtual assistant","Para usar una voz clonada necesitas el consentimiento de esa persona":"To use a cloned voice you need that person's consent","Este navegador no puede reproducir la voz de ejemplo":"This browser can't play the sample voice","Mandarlo como si fuera un audio":"Send it as if it were an audio","Escuchar":"Listen","API y MCP":"API and MCP","se ha guardado apagado":"saved switched off"});
EN_PAT.push(...[
 ["^(.+) · nota de voz$","{1} · voice note"],
 ["^Agente «(.+)» respondiendo$","Agent «{1}» replying"],
 ["^Mensajes al día (.+)$","Messages up to date {t1}"],
 ["^(\\d+) plantillas aprobadas$","{1} approved templates"],
 ["^(.+) está atendiendo esta conversación\\.$","{1} is handling this conversation."],
 ["^de (\\d+) mensajes$","out of {1} messages"],
 ["^Vincula la cuenta de (.+?) de (.+?)\\. La API trae los datos y publica campañas; el MCP deja que Claude y tus automatizaciones consulten y actúen sobre la cuenta en lenguaje natural\\.$","Link {2}'s {1} account. The API brings in data and publishes campaigns; MCP lets Claude and your automations query and act on the account in plain language."],
 ["^1 · API de (.+)$","1 · {1} API"],
 ["^Vincula el número de WhatsApp Business de (.+?) con la Cloud API de Meta\\. Así los mensajes entran en Conversaciones y tu agente setter puede contestar\\.$","Link {1}'s WhatsApp Business number with Meta's Cloud API. Messages then land in Conversations and your setter agent can reply."],
 ["^Dejarán de entrar mensajes de WhatsApp en (.+?) y el agente setter dejará de contestar\\. El historial se queda\\.$","WhatsApp messages will stop coming into {1} and the setter agent will stop replying. The history stays."],
 ["^(.+) vinculada con MCP$","{1} linked with MCP"],
 ["^MCP · (.+)$","MCP · {1}"],
 ["^API · (.+)$","API · {t1}"],
 ["^Escribe el primer mensaje de un lead, por ejemplo «(.+)»\\.$","Write a lead's first message, for example «{1}»."],
 ["^Guardado (.+)$","Saved {t1}"],
 ["^(.+) de las conversaciones$","{1} of conversations"],
 ["^(.+) \\+ la conversación \\+ el contacto$","{1} + the conversation + the contact"]
]);

/* ---------- Equipo y accesos ---------- */
const AREAS = [["inicio","Inicio"],["calendario","Calendario"],["pagos","Pagos"],["reputacion","Reputación"],["contactos","Contactos"],["oportunidades","Oportunidades"],["conversaciones","Conversaciones"],["marketing","Marketing"],["campanas","Campañas"],["automatizaciones","Automatizaciones"],["agente","Agente IA"],["informes","Informes"],["integraciones","Integraciones"],["configuracion","Configuración"]];
const NIVELES = [["editar","Editar"],["ver","Solo ver"],["no","Sin acceso"]];
const ROLES = {
  admin:{l:"Administradora de agencia",c:"rosa",d:"Ve y gestiona todo: subcuentas, equipo, integraciones y el servicio de cada cliente."},
  equipo:{l:"Equipo",c:"",d:"Solo entra en las subcuentas que le asignes, con el permiso que elijas en cada apartado."},
  cliente:{l:"Cliente",c:"ok",d:"Entra solo en su subcuenta. Nunca ve otras cuentas, el equipo ni las condiciones del servicio."}
};
const PRESET = {
  admin:Object.fromEntries(AREAS.map(a=>[a[0],"editar"])),
  equipo:{agente:"editar",inicio:"ver",calendario:"editar",pagos:"ver",reputacion:"editar",contactos:"editar",oportunidades:"editar",conversaciones:"editar",marketing:"editar",campanas:"editar",automatizaciones:"editar",informes:"ver",integraciones:"ver",configuracion:"ver"},
  cliente:{agente:"ver",inicio:"ver",calendario:"ver",pagos:"ver",reputacion:"ver",contactos:"ver",oportunidades:"ver",conversaciones:"editar",marketing:"no",campanas:"ver",automatizaciones:"no",informes:"ver",integraciones:"no",configuracion:"editar"}
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

/* ---------- Inicio, calendario, pagos, reputación, tareas y buscador ---------- */
Object.assign(I,{
  cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>',
  card:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19M6.5 15h4"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3l-5.5 2.9 1-6.2L3 9.6l6.2-.9z"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11 12 4l8 7v8.5a1 1 0 0 1-1 1h-4.5V15h-5v5.5H5a1 1 0 0 1-1-1z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5 9-10"/></svg>',
  task:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="m8.5 12 2.5 2.5 4.5-5"/></svg>',
  file:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg>',
  up:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  left:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 6-6 6 6 6"/></svg>',
  right:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>'
});
const NAV_SUB = [
  ["Día a día",[["inicio","Inicio","home"],["conversaciones","Conversaciones","chat"],["calendario","Calendario","cal"],["contactos","Contactos","users"],["oportunidades","Oportunidades","pipe"],["pagos","Pagos","card"]]],
  ["Crecimiento",[["marketing","Marketing","mega"],["campanas","Campañas","target"],["automatizaciones","Automatizaciones","bolt"],["agente","Agente IA","bot"],["reputacion","Reputación","star"],["informes","Informes","chart"]]],
  ["Cuenta",[["integraciones","Integraciones","plug"],["configuracion","Configuración","cog"]]]
];
const navIco = k => I[k]||ICO[k]||"";
const navLabel = k => { for(const [,items] of NAV_SUB){ const f=items.find(x=>x[0]===k); if(f) return f[1]; } return k; };
function navSubHTML(vu){
  const un=sinResponder(S.subId);
  return NAV_SUB.map(([g,items])=>{ const vis=items.filter(([k])=>permDe(vu,k)!=="no"); if(!vis.length) return "";
    return `<div class="nav-group"><div class="nav-label">${g}</div>${vis.map(([k,l,ic])=>`<button data-tab="${k}" ${S.tab===k?'aria-current="page"':""}>${navIco(ic)}${l}${k==="conversaciones"&&un?`<span class="badge num">${un}</span>`:""}</button>`).join("")}</div>`; }).join("");
}

/* fechas */
const DAY=86400000;
const startOfDay = d => { const x=new Date(d); x.setHours(0,0,0,0); return x; };
const sameDay = (a,b) => startOfDay(a).getTime()===startOfDay(b).getTime();
const hhmm = d => new Date(d).toLocaleTimeString(LOC,{hour:"2-digit",minute:"2-digit"});
const dLarga = d => new Date(d).toLocaleDateString(LOC,{weekday:"long",day:"numeric",month:"long",year:"numeric"});
const dCorta = d => new Date(d).toLocaleDateString(LOC,{weekday:"short",day:"numeric",month:"short"});
const toLocalInput = d => { const x=new Date(d); return ymd(x)+"T"+String(x.getHours()).padStart(2,"0")+":"+String(x.getMinutes()).padStart(2,"0"); };
const stars = n => `<span class="stars" aria-label="${n} de 5">${"★".repeat(n)}<i>${"★".repeat(5-n)}</i></span>`;
const firstName = n => String(n||"").trim().split(/\s+/)[0]||"";
const userSaludo = () => { const vu=VC(); if(vu) return firstName(vu.nombre); const a=S.data.usuarios.find(u=>u.rol==="admin"&&u.estado!=="desactivado"); return a?firstName(a.nombre):""; };

/* calendarios por subcuenta */
const CAL_COL = ["var(--s-meta)","var(--s-google)","var(--s-otros)","var(--muted)"];
const calsDe = s => (s&&Array.isArray(s.calendarios)&&s.calendarios.length) ? s.calendarios : (s&&s.interna ? ["El Desayuno","Llamadas","Reuniones","Interno"] : ["Citas","Llamadas","Reuniones","Interno"]);
const EST_CITA = {reservada:["Reservada","rosa"],confirmada:["Confirmada","ok"],completada:["Realizada",""],cancelada:["Cancelada","bad"],no_vino:["No vino","warn"]};
const citaPill = e => { const [l,c]=EST_CITA[e]||EST_CITA.reservada; return `<span class="pill ${c}">${l}</span>`; };
const citaFin = c => new Date(new Date(c.inicio).getTime()+(+c.duracion||30)*60000);

/* facturas */
const EST_FAC = {borrador:["Borrador",""],enviada:["Enviada","rosa"],pagada:["Pagada","ok"],vencida:["Vencida","bad"]};
function facEstado(f){ if(f.estado==="enviada" && f.vence && new Date(f.vence+"T23:59:59")<new Date()) return "vencida"; return f.estado||"borrador"; }
const facPill = f => { const [l,c]=EST_FAC[facEstado(f)]; return `<span class="pill ${c}">${l}</span>`; };
const facTotal = f => Math.round((+f.importe||0)*(1+(+f.iva||0)/100)*100)/100;
const EST_SUS = {activa:["Activa","ok"],prueba:["Prueba","rosa"],fallido:["Pago fallido","bad"],cancelada:["Cancelada",""]};
const susPill = x => { const [l,c]=EST_SUS[x.estado]||EST_SUS.activa; return `<span class="pill ${c}">${l}</span>`; };

/* ---------- Inicio ---------- */
function lineArea(vals,labels){
  const w=640,h=220,pl=44,pr=14,pt=14,pb=28, max=niceMax(Math.max(1,...vals)), n=vals.length;
  const X=i=>pl+i*(w-pl-pr)/Math.max(1,n-1), Y=v=>pt+(1-v/max)*(h-pt-pb);
  const pts=vals.map((v,i)=>[X(i),Y(v)]), line=pts.map((p,i)=>(i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" ");
  let g=""; for(let i=0;i<=4;i++){ const v=max*i/4, y=Y(v); g+=`<line class="${i?"gl":"base"}" x1="${pl}" x2="${w-pr}" y1="${y}" y2="${y}"/><text x="${pl-8}" y="${y+4}" text-anchor="end">${esc(short(v))}</text>`; }
  labels.forEach((l,i)=>{ if(i%2===0||i===n-1) g+=`<text x="${X(i)}" y="${h-6}" text-anchor="middle">${esc(l)}</text>`; });
  const last=pts[n-1];
  return `<div class="chart"><svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Ingresos cobrados por mes"><defs><linearGradient id="ga" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C24C86" stop-opacity=".32"/><stop offset="1" stop-color="#C24C86" stop-opacity="0"/></linearGradient></defs>${g}
    <path d="${line} L${last[0]} ${Y(0)} L${pts[0][0]} ${Y(0)} Z" fill="url(#ga)"/><path d="${line}" fill="none" stroke="var(--s-meta)" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="${last[0]}" cy="${last[1]}" r="9" fill="#EEABC5" fill-opacity=".45"/><circle cx="${last[0]}" cy="${last[1]}" r="4.5" fill="var(--s-meta)" stroke="var(--surface)" stroke-width="2"/></svg></div>`;
}
function gauge(val,count){
  const cx=100,cy=100,r=74,a0=135,sw=270,f=Math.max(0,Math.min(1,(val-1)/4));
  const pt=a=>{ const t=a*Math.PI/180; return [cx+r*Math.cos(t),cy+r*Math.sin(t)]; };
  const arc=(a,b)=>{ const [x1,y1]=pt(a),[x2,y2]=pt(b); return `M${x1.toFixed(1)} ${y1.toFixed(1)} A${r} ${r} 0 ${b-a>180?1:0} 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`; };
  const end=a0+sw*f, [ex,ey]=pt(end);
  return `<svg viewBox="0 0 200 176" width="190" height="168" role="img" aria-label="Valoración media ${String(val).replace(".",",")} de 5"><path d="${arc(a0,a0+sw)}" stroke="rgba(246,245,236,.16)" stroke-width="13" fill="none" stroke-linecap="round"/>${f>0?`<path d="${arc(a0,end)}" stroke="#EEABC5" stroke-width="13" fill="none" stroke-linecap="round"/>`:""}<circle cx="${ex}" cy="${ey}" r="8" fill="#F6F5EC" stroke="#EEABC5" stroke-width="4"/>
    <text x="100" y="102" text-anchor="middle" font-size="38" fill="#F6F5EC" font-weight="300" style="letter-spacing:-.04em">${val.toFixed(1).replace(".",LANG==="en"?".":",")}</text><text x="100" y="124" text-anchor="middle" font-size="11.5" fill="rgba(246,245,236,.72)">Valoración media</text><text x="100" y="140" text-anchor="middle" font-size="11.5" fill="rgba(246,245,236,.72)">${count} ${count===1?"reseña":"reseñas"}</text></svg>`;
}
function ingresosMes(sid,n){
  const now=new Date(), out=[];
  for(let i=n-1;i>=0;i--){ const d=new Date(now.getFullYear(),now.getMonth()-i,1), e=new Date(d.getFullYear(),d.getMonth()+1,1);
    const v=S.data.facturas.filter(f=>(sid==null||f.sub===sid)&&f.estado==="pagada"&&f.pagada&&new Date(f.pagada)>=d&&new Date(f.pagada)<e).reduce((t,f)=>t+facTotal(f),0);
    out.push({d,v,l:d.toLocaleDateString(LOC,{month:"short"}).replace(".","")}); }
  return out;
}
function viewInicio(){
  const s=sub(), sid=s.id, vu=VC(), now=new Date(), mes0=new Date(now.getFullYear(),now.getMonth(),1);
  const won=etapaGanada(s), lost=etapaPerdida(s), cs=of("contactos",sid), ops=of("oportunidades",sid);
  const open=ops.filter(o=>o.etapa!==won&&o.etapa!==lost), ganadas=ops.filter(o=>o.etapa===won), perdidas=ops.filter(o=>o.etapa===lost);
  const nuevosMes=cs.filter(c=>c.creado&&new Date(c.creado)>=mes0).length, abierto=open.reduce((t,o)=>t+(+o.valor||0),0);
  const ing=ingresosMes(sid,12), cobradoMes=ing[11].v, prev=ing[10].v, delta=prev?Math.round((cobradoMes-prev)/prev*100):null;
  const cierre=ganadas.length+perdidas.length?Math.round(ganadas.length/(ganadas.length+perdidas.length)*100):0;
  const rs=of("resenas",sid), media=rs.length?rs.reduce((t,r)=>t+(+r.estrellas||0),0)/rs.length:0;
  const h=now.getHours(), saludo=h<14?"Buenos días,":h<21?"Buenas tardes,":"Buenas noches,", nombre=userSaludo();
  const can=k=>permDe(vu,k)!=="no";
  const hero=`<section class="hero"><div><div class="date">${esc(dLarga(now))}</div><h1>${nombre?`${saludo} <span class="m">${esc(nombre)}.</span>`:`Así va <span class="m">${esc(s.nombre)}.</span>`}</h1>
    <p>Así va ${esc(s.nombre)} este mes: leads, ventas, citas y conversaciones en un solo sitio.</p>
    <div class="hkpis">
      <div class="hk"><small>Contactos</small><b class="num">${nf.format(cs.length)}</b><span>+${nuevosMes} este mes</span></div>
      <div class="hk"><small>Pipeline abierto</small><b class="num">${eur.format(abierto)}</b><span>${open.length} ${open.length===1?"oportunidad":"oportunidades"}</span></div>
      <div class="hk"><small>Cobrado este mes</small><b class="num">${eur.format(cobradoMes)}</b><span>${delta==null?"sin datos del mes anterior":(delta>=0?"+":"")+delta+" % vs el mes anterior"}</span></div>
      <div class="hk"><small>Tasa de cierre</small><b class="num">${cierre} %</b><span>ganadas ÷ cerradas</span></div>
    </div></div>
    <div class="hero-side">${rs.length?gauge(media,rs.length):""}<div class="actions">${can("informes")?`<button class="btn sec" data-tab="informes">Ver informes</button>`:""}<button class="btn" data-palette>${I.search}Buscar</button></div></div></section>`;
  // agenda
  const t=S.agTab||"citas", hoy0=startOfDay(now), hoy1=new Date(hoy0.getTime()+DAY);
  const citasHoy=of("citas",sid).filter(c=>c.estado!=="cancelada"&&new Date(c.inicio)>=hoy0&&new Date(c.inicio)<hoy1).sort((a,b)=>String(a.inicio).localeCompare(b.inicio));
  const tareas=of("tareas",sid).filter(x=>!x.hecha||(x.hechaEn&&new Date(x.hechaEn)>=hoy0)).sort((a,b)=>(a.hecha?1:0)-(b.hecha?1:0)||String(a.vence||"9").localeCompare(String(b.vence||"9")));
  const seg=seguimiento(sid);
  let list="";
  if(t==="citas") list=citasHoy.map((c,i)=>{ const k=contacto(c.contactoId); const hot=new Date(c.inicio)<=now&&citaFin(c)>=now || (i===0&&new Date(c.inicio)>now);
    return `<button class="ag-item ${hot?"hot":""}" data-cita="${esc(c.id)}"><b>${esc(c.titulo||(k?k.nombre:"Cita"))}</b><span class="meta2"><span class="num">${hhmm(c.inicio)} – ${hhmm(citaFin(c))}</span>·<span>${esc(c.calendario||"")}</span>${c.lugar?`·<span>${esc(c.lugar)}</span>`:""}${citaPill(c.estado)}</span></button>`; }).join("")||`<p class="muted" style="margin:6px 0">No hay citas hoy.</p>`;
  if(t==="tareas") list=tareas.slice(0,6).map(x=>{ const k=contacto(x.contactoId), late=!x.hecha&&x.vence&&new Date(x.vence)<now;
    return `<div class="ag-item ${x.hecha?"done":""}" style="flex-direction:row;align-items:flex-start;gap:10px;cursor:default"><button class="tick" data-tarea-done="${esc(x.id)}" aria-pressed="${!!x.hecha}" aria-label="Marcar como hecha" ${canEdit()?"":"disabled"}>${x.hecha?I.check:""}</button><span style="min-width:0;display:flex;flex-direction:column;gap:4px;flex:1;cursor:pointer" data-tarea="${esc(x.id)}"><b>${esc(x.titulo)}</b><span class="meta2">${k?`<span>${esc(k.nombre)}</span>·`:""}<span class="${late?"pill bad":""}">${x.vence?(sameDay(x.vence,now)?"Hoy "+hhmm(x.vence):dCorta(x.vence)):"Sin fecha"}</span>${x.usuario?`·<span>${esc(userName(x.usuario))}</span>`:""}</span></span></div>`; }).join("")||`<p class="muted" style="margin:6px 0">No tienes tareas pendientes.</p>`;
  if(t==="seguimientos") list=seg.slice(0,6).map(x=>`<button class="ag-item" data-follow="${esc(x.ref)}"><b>${esc(x.t)}</b><span class="meta2"><span class="sev ${x.sev}" style="display:inline-block"></span><span>${esc(x.d)}</span></span></button>`).join("")||`<p class="muted" style="margin:6px 0">Todo al día.</p>`;
  const agenda=`<section class="panel s4"><div class="ph"><h2>Agenda de hoy</h2><span>${esc(now.toLocaleDateString(LOC,{day:"numeric",month:"short"}))}</span></div>
    <div class="seg" role="tablist">${[["citas","Citas",citasHoy.length],["tareas","Tareas",tareas.filter(x=>!x.hecha).length],["seguimientos","Seguimientos",seg.length]].map(([k,l,n])=>`<button data-agtab="${k}" aria-pressed="${t===k}">${l} <span class="num muted">${n}</span></button>`).join("")}</div>
    <div class="agenda">${list}</div>
    <div class="actions">${t==="citas"&&can("calendario")?`<button class="btn sec" data-tab="calendario">Abrir calendario</button>`:""}${t==="tareas"?addBtn("Nueva tarea","data-new-tarea"):""}</div></section>`;
  const ingresos=`<section class="panel s5"><div class="ph"><div><div class="big-n num">${eur.format(ing.reduce((a,x)=>a+x.v,0))}</div><span>Cobrado en los últimos 12 meses</span></div>${can("pagos")?`<button class="btn ghost" data-tab="pagos">Pagos ${I.arrow}</button>`:""}</div>
    ${ing.some(x=>x.v)?lineArea(ing.map(x=>x.v),ing.map(x=>x.l)):`<p class="muted" style="margin:0">Cuando marques facturas como pagadas, aquí verás tus ingresos mes a mes.</p>`}</section>`;
  const tot=Math.max(1,open.length+ganadas.length+perdidas.length), bars=[["Abiertas",open.length,"var(--g-rosa)","var(--cacao)"],["Ganadas",ganadas.length,"var(--g-granate)","#F6F5EC"],["Perdidas",perdidas.length,"var(--surface-2)","var(--muted)"]], bmax=Math.max(1,...bars.map(b=>b[1]));
  const pipe=`<section class="panel s3"><div class="ph"><h2>Estado del pipeline</h2></div><div><div class="big-n num">${open.length+ganadas.length+perdidas.length}</div><span class="muted" style="font-size:13px">oportunidades</span></div>
    <div class="sbars">${bars.map(b=>`<div class="b" style="height:${30+b[1]/bmax*70}%;background:${b[2]};color:${b[3]}"><b class="num">${Math.round(b[1]/tot*100)} %</b><span>${b[0]}</span></div>`).join("")}</div></section>`;
  const facPend=of("facturas",sid).filter(f=>["enviada","vencida"].includes(facEstado(f))), rsSin=rs.filter(r=>!r.respuesta);
  const wk0=monday(now), wk1=new Date(wk0.getTime()+7*DAY), citasSem=of("citas",sid).filter(c=>c.estado!=="cancelada"&&new Date(c.inicio)>=wk0&&new Date(c.inicio)<wk1).length;
  const minis=[["contactos","Leads nuevos hoy",cs.filter(c=>c.creado&&sameDay(c.creado,now)).length,"Ver contactos"],["conversaciones","Sin responder",sinResponder(sid),"Responder"],["calendario","Citas esta semana",citasSem,"Ver agenda"],["pagos","Facturas pendientes",facPend.length,"Cobrar"],["reputacion","Reseñas sin responder",rsSin.length,"Responder"]].filter(m=>can(m[0]));
  const quick=minis.length?`<div class="quick">${minis.map(m=>`<button class="qk" data-tab="${m[0]}"><small>${m[1]}</small><b class="num">${m[2]}</b><span>${m[3]} ${I.up}</span></button>`).join("")}</div>`:"";
  const top=[...open].sort((a,b)=>(+b.valor||0)-(+a.valor||0)).slice(0,5);
  const topT=`<section class="panel s8"><div class="ph"><h2>Oportunidades con más valor</h2>${can("oportunidades")?`<button class="btn ghost" data-tab="oportunidades">Ver pipeline ${I.arrow}</button>`:""}</div>
    ${top.length?`<div class="table-wrap" style="border:0;border-radius:0;background:none"><table><thead><tr><th>Contacto</th><th>Oportunidad</th><th>Etapa</th><th class="r">Valor</th><th class="r">Actividad</th></tr></thead><tbody>${top.map(o=>{ const k=contacto(o.contactoId); return `<tr data-opp="${esc(o.id)}"><td><div class="who"><span class="circ">${esc(ini(k&&k.nombre))}</span><div style="min-width:0"><b>${esc(k?k.nombre:"Sin contacto")}</b><small>${esc(k&&(k.empresa||k.fuente)||"")}</small></div></div></td><td>${esc(o.titulo)}</td><td><span class="pill">${esc(o.etapa)}</span></td><td class="r num">${eur.format(+o.valor||0)}</td><td class="r muted" style="white-space:nowrap">${rel(o.actualizado)}</td></tr>`; }).join("")}</tbody></table></div>`:`<p class="muted" style="margin:0">Aún no hay oportunidades abiertas.</p>`}</section>`;
  // dato de la semana
  const M=metrics(sid,12), cM=M.orig.meta.leads?M.orig.meta.inv/M.orig.meta.leads:0, cG=M.orig.google.leads?M.orig.google.inv/M.orig.google.leads:0;
  let ins;
  if(cM&&cG){ const best=cM<cG?["Meta Ads",cM,"Google Ads",cG]:["Google Ads",cG,"Meta Ads",cM]; const pc=Math.round((1-best[1]/best[3])*100);
    ins={t:`${best[0]} te trae leads más baratos`,p:`En las últimas 12 semanas, cada lead de ${best[0]} ha costado ${eur2.format(best[1])} frente a ${eur2.format(best[3])} en ${best[2]}: un ${pc} % menos. Si mueves presupuesto, hazlo poco a poco y vigila la calidad de los leads.`,tab:"informes",b:"Ver informes"}; }
  else { const src={}; cs.forEach(c=>{ src[c.fuente||"Sin origen"]=(src[c.fuente||"Sin origen"]||0)+1; }); const e=Object.entries(src).sort((a,b)=>b[1]-a[1])[0];
    ins=e?{t:`${e[0]} es tu mayor fuente de contactos`,p:`${e[1]} de tus ${cs.length} contactos vienen de ${e[0]}. Conecta tus cuentas de anuncios para comparar cuánto te cuesta cada uno.`,tab:"integraciones",b:"Ir a Integraciones"}:{t:"Aún no hay datos",p:"Cuando entren contactos, aquí verás de dónde vienen y qué te cuesta cada uno.",tab:"contactos",b:"Ver contactos"}; }
  const src={}; cs.filter(c=>c.creado&&now-new Date(c.creado)<90*DAY).forEach(c=>{ src[c.fuente||"Sin origen"]=(src[c.fuente||"Sin origen"]||0)+1; });
  const rows=Object.entries(src).sort((a,b)=>b[1]-a[1]).slice(0,6), rmax=Math.max(1,...rows.map(r=>r[1]));
  const side=`<div class="s4" style="display:flex;flex-direction:column;gap:20px;min-width:0"><div class="insight"><small>Dato de la semana</small><h2>${esc(ins.t)}</h2><p>${esc(ins.p)}</p>${can(ins.tab)?`<button class="btn sec" data-tab="${ins.tab}">${esc(ins.b)}</button>`:""}</div>
    <section class="panel"><div class="ph"><h2>Origen de los leads</h2><span>últimos 90 días</span></div>${rows.length?`<div class="hbars">${rows.map(([l,v])=>`<div class="hbar"><span>${esc(l)}</span><div class="track"><i style="width:${v/rmax*100}%"></i></div><b>${v}</b></div>`).join("")}</div>`:`<p class="muted" style="margin:0">Sin leads en los últimos 90 días.</p>`}</section></div>`;
  return hero+`<div class="g12">${agenda}${ingresos}${pipe}</div>`+quick+`<div class="g12">${topT}${side}</div>`;
}

/* ---------- Calendario ---------- */
const H0=8, H1=21, ROWH=48;
function viewCalendario(){
  const s=sub(), sid=s.id, cals=calsDe(s), hidden=new Set(S.calHidden||[]);
  const wk0=monday(new Date()); wk0.setDate(wk0.getDate()+7*(S.calWeek||0)); const wk1=new Date(wk0.getTime()+7*DAY);
  const all=of("citas",sid).filter(c=>new Date(c.inicio)>=wk0&&new Date(c.inicio)<wk1), evs=all.filter(c=>!hidden.has(c.calendario));
  const days=[...Array(7)].map((_,i)=>new Date(wk0.getTime()+i*DAY)), now=new Date();
  const ci=c=>Math.max(0,cals.indexOf(c.calendario));
  const head=days.map(d=>`<div class="dh ${sameDay(d,now)?"today":""}">${esc(d.toLocaleDateString(LOC,{weekday:"short"}).replace(".",""))}<b class="num">${d.getDate()}</b></div>`).join("");
  const hrs=[...Array(H1-H0)].map((_,i)=>`<div class="hr">${String(H0+i).padStart(2,"0")}:00</div>`).join("");
  const cols=days.map(d=>{ const de=evs.filter(c=>sameDay(c.inicio,d));
    const slots=canEdit()?[...Array(H1-H0)].map((_,i)=>`<button class="slot" style="top:${i*ROWH}px" data-slot="${ymd(d)}T${String(H0+i).padStart(2,"0")}:00" aria-label="Nueva cita el ${esc(dCorta(d))} a las ${H0+i}:00"></button>`).join(""):"";
    const items=de.map(c=>{ const st=new Date(c.inicio), hr=st.getHours()+st.getMinutes()/60, top=Math.max(0,(hr-H0)*ROWH)+2, ht=Math.max(22,(+c.duracion||30)/60*ROWH-4), k=contacto(c.contactoId);
      return `<button class="ev ${c.estado==="cancelada"?"cancel":""}" style="--c:${CAL_COL[ci(c)%4]};top:${top}px;height:${ht}px" data-cita="${esc(c.id)}"><b>${esc(c.titulo||(k?k.nombre:"Cita"))}</b><span class="num">${hhmm(st)}</span>${c.lugar&&ht>40?` <span>· ${esc(c.lugar)}</span>`:""}</button>`; }).join("");
    const nl=sameDay(d,now)&&now.getHours()>=H0&&now.getHours()<H1?`<div class="now" style="top:${(now.getHours()+now.getMinutes()/60-H0)*ROWH}px"></div>`:"";
    return `<div class="day" style="height:${(H1-H0)*ROWH}px">${slots}${items}${nl}</div>`; }).join("");
  const rng=`${wk0.toLocaleDateString(LOC,{day:"numeric",month:"short"})} – ${new Date(wk1.getTime()-DAY).toLocaleDateString(LOC,{day:"numeric",month:"short",year:"numeric"})}`;
  const conf=all.filter(c=>c.estado==="confirmada").length, real=all.filter(c=>c.estado==="completada").length, nv=all.filter(c=>c.estado==="no_vino").length, canc=all.filter(c=>c.estado==="cancelada").length;
  const slug=String(s.nombre).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
  const legend=`<section class="panel"><div class="ph"><h2>Calendarios</h2></div><div class="legend-c">${cals.map((c,i)=>`<label><input type="checkbox" data-calf="${esc(c)}" ${hidden.has(c)?"":"checked"}><span class="sw" style="background:${CAL_COL[i%4]}"></span>${esc(c)}<span class="n">${all.filter(x=>x.calendario===c).length}</span></label>`).join("")}</div></section>`;
  const stats=`<section class="panel"><div class="ph"><h2>Esta semana</h2></div><dl class="kv"><dt>Citas</dt><dd class="num" style="text-align:right">${all.length-canc}</dd><dt>Confirmadas</dt><dd class="num" style="text-align:right">${conf}</dd><dt>Realizadas</dt><dd class="num" style="text-align:right">${real}</dd><dt>No vinieron</dt><dd class="num" style="text-align:right">${nv}</dd><dt>Canceladas</dt><dd class="num" style="text-align:right">${canc}</dd><dt>Asistencia</dt><dd class="num" style="text-align:right">${real+nv?Math.round(real/(real+nv)*100)+" %":"—"}</dd></dl></section>`;
  const book=`<section class="panel"><div class="ph"><h2>Enlace de reservas</h2></div><p class="muted" style="margin:0;font-size:13.5px">Tus clientes reservarán solos en tus huecos libres. El enlace funcionará cuando publiques tu sistema de reservas.</p><div class="linkbox"><span>reservas.mrspinkagency.com/${esc(slug)}</span></div></section>`;
  return headHTML(esc(s.nombre),"Tu <span class=\"m\">agenda.</span>","Toca un hueco libre para crear una cita. Toca una cita para cambiarla.",addBtn("Nueva cita","data-new-cita"))
    +`<div class="cal-top"><div class="actions"><button class="btn sec" data-calweek="-1" aria-label="Semana anterior" style="padding:8px 12px">${I.left}</button><button class="btn sec" data-calweek="0">Hoy</button><button class="btn sec" data-calweek="1" aria-label="Semana siguiente" style="padding:8px 12px">${I.right}</button></div><span class="rng num">${esc(rng)}</span></div>
    <div class="g12"><div class="s9" style="min-width:0"><div class="cal-wrap"><div class="cal"><div class="dh" style="border-left:0"></div>${head}<div class="hcol">${hrs}</div>${cols}</div></div></div>
    <div class="s3" style="display:flex;flex-direction:column;gap:20px;min-width:0">${legend}${stats}${book}</div></div>`;
}
function drawerCita(id,pre){
  const c=id?S.data.citas.find(x=>x.id===id):null, s=sub()||subById(c&&c.sub), sid=c?c.sub:s.id, cals=calsDe(subById(sid)), ro2=!canEdit()?"disabled":"";
  const cs=of("contactos",sid).sort((a,b)=>String(a.nombre).localeCompare(b.nombre,"es"));
  const p=Object.assign({},pre||{}), ini0=c?new Date(c.inicio):p.inicio?new Date(p.inicio):(()=>{ const d=new Date(); d.setMinutes(0,0,0); d.setHours(d.getHours()+1); return d; })();
  const k=c?contacto(c.contactoId):p.contactoId?contacto(p.contactoId):null;
  const d=c&&canEdit()?delBtn(async()=>{ await remove("citas",c.id); toast("Cita borrada"); }):null;
  openDrawer(c?esc(c.titulo||"Cita"):"Nueva <span class=\"m\">cita.</span>",
    fld("ci-c","Contacto",`<select id="ci-c" name="contactoId" ${ro2}>${selOpts([["","Sin contacto"]].concat(cs.map(x=>[x.id,x.nombre])),c?c.contactoId||"":p.contactoId||"")}</select>`)+
    fld("ci-t","Título",inp("ci-t","titulo",c?c.titulo:(k?`${cals[0]} · ${k.nombre}`:""),"text",'required placeholder="Primera visita · Laura Gómez" '+ro2))+
    `<div class="row2">${fld("ci-cal","Calendario",`<select id="ci-cal" name="calendario" ${ro2}>${selOpts(cals,c?c.calendario:p.calendario||cals[0])}</select>`)}${fld("ci-e","Estado",`<select id="ci-e" name="estado" ${ro2}>${selOpts(Object.entries(EST_CITA).map(([k2,v])=>[k2,v[0]]),c?c.estado:"reservada")}</select>`)}</div>`+
    `<div class="row2">${fld("ci-i","Empieza",inp("ci-i","inicio",toLocalInput(ini0),"datetime-local","required "+ro2))}${fld("ci-d","Duración",`<select id="ci-d" name="duracion" ${ro2}>${selOpts([["15","15 min"],["30","30 min"],["45","45 min"],["60","1 h"],["90","1 h 30 min"],["120","2 h"]],String(c?c.duracion||30:p.duracion||30))}</select>`)}</div>`+
    fld("ci-l","Lugar",inp("ci-l","lugar",c?c.lugar:"","text",'placeholder="Teléfono, Google Meet, en la clínica…" '+ro2))+
    fld("ci-n","Notas",`<textarea id="ci-n" name="notas" ${ro2}>${esc(c&&c.notas)}</textarea>`)+
    `<p class="muted" style="margin:0;font-size:13px">Los recordatorios por WhatsApp y SMS los enviará tu flujo «Recordatorios de cita» cuando tu sistema esté en marcha.</p>`,
    canEdit()?`${d?d.html:'<button type="button" class="btn ghost" data-close>Cancelar</button>'}<button class="btn" type="submit">${c?"Guardar cambios":"Crear cita"}</button>`:`<button type="button" class="btn sec" data-close>Cerrar</button>`,
    async fd=>{ if(!canEdit()) return; const body={sub:sid,contactoId:fd.contactoId||"",titulo:String(fd.titulo).trim(),calendario:fd.calendario,estado:fd.estado,inicio:new Date(fd.inicio).toISOString(),duracion:+fd.duracion||30,lugar:String(fd.lugar||"").trim(),notas:fd.notas||"",creado:c?c.creado:nowISO(),actualizado:nowISO()};
      await save("citas",c?c.id:uid("ci"),body); toast(c?"Cambios guardados":"Cita creada"); });
  if(d) d.wire();
  const sel=$("#ci-c"), tt=$("#ci-t"); if(sel&&tt&&!c) sel.addEventListener("change",()=>{ const kk=contacto(sel.value); if(kk&&(!tt.value||/·/.test(tt.value))) tt.value=`${$("#ci-cal").value} · ${kk.nombre}`; });
}

/* ---------- Tareas ---------- */
function drawerTarea(id,pre){
  const x=id?S.data.tareas.find(t=>t.id===id):null, sid=x?x.sub:S.subId, ro2=!canEdit()?"disabled":"", p=pre||{};
  const cs=of("contactos",sid).sort((a,b)=>String(a.nombre).localeCompare(b.nombre,"es"));
  const v0=x&&x.vence?new Date(x.vence):(()=>{ const d=new Date(); d.setHours(18,0,0,0); return d; })();
  const d=x&&canEdit()?delBtn(async()=>{ await remove("tareas",x.id); toast("Tarea borrada"); }):null;
  openDrawer(x?esc(x.titulo):"Nueva <span class=\"m\">tarea.</span>",
    fld("ta-t","Tarea",inp("ta-t","titulo",x&&x.titulo,"text",'required placeholder="Llamar para confirmar la cita" '+ro2))+
    fld("ta-c","Contacto",`<select id="ta-c" name="contactoId" ${ro2}>${selOpts([["","Sin contacto"]].concat(cs.map(k=>[k.id,k.nombre])),x?x.contactoId||"":p.contactoId||"")}</select>`)+
    `<div class="row2">${fld("ta-v","Vence",inp("ta-v","vence",toLocalInput(v0),"datetime-local",ro2))}${fld("ta-u","Para",`<select id="ta-u" name="usuario" ${ro2}>${selOpts(usuariosSubOpts(sid),x?x.usuario||"":"")}</select>`)}</div>`+
    fld("ta-n","Notas",`<textarea id="ta-n" name="notas" ${ro2}>${esc(x&&x.notas)}</textarea>`),
    canEdit()?`${d?d.html:'<button type="button" class="btn ghost" data-close>Cancelar</button>'}<button class="btn" type="submit">${x?"Guardar cambios":"Crear tarea"}</button>`:`<button type="button" class="btn sec" data-close>Cerrar</button>`,
    async fd=>{ if(!canEdit()) return; await save("tareas",x?x.id:uid("ta"),{sub:sid,titulo:String(fd.titulo).trim(),contactoId:fd.contactoId||"",vence:fd.vence?new Date(fd.vence).toISOString():"",usuario:fd.usuario||"",notas:fd.notas||"",hecha:x?!!x.hecha:false,hechaEn:x?x.hechaEn||"":"",creado:x?x.creado:nowISO()}); toast(x?"Cambios guardados":"Tarea creada"); });
  if(d) d.wire();
}
async function toggleTarea(id){ const x=S.data.tareas.find(t=>t.id===id); if(!x||!canEdit()) return; const h=!x.hecha; await save("tareas",x.id,Object.assign({},x,{hecha:h,hechaEn:h?nowISO():""})); toast(h?"Tarea hecha":"Tarea pendiente"); }

/* ---------- Pagos ---------- */
function nextNum(sid){ const y=new Date().getFullYear(); const n=S.data.facturas.filter(f=>f.sub===sid&&String(f.numero||"").startsWith(y+"-")).map(f=>+String(f.numero).split("-")[1]||0); return `${y}-${String((n.length?Math.max(...n):0)+1).padStart(4,"0")}`; }
function viewPagos(){
  const s=sub(), sid=s.id, t=S.payTab||"facturas", now=new Date(), mes0=new Date(now.getFullYear(),now.getMonth(),1);
  const fs=of("facturas",sid), sus=of("suscripciones",sid), pr=of("productos",sid);
  const cobrado=fs.filter(f=>f.estado==="pagada"&&f.pagada&&new Date(f.pagada)>=mes0).reduce((a,f)=>a+facTotal(f),0);
  const pend=fs.filter(f=>facEstado(f)==="enviada"), venc=fs.filter(f=>facEstado(f)==="vencida");
  const mrr=sus.filter(x=>x.estado==="activa").reduce((a,x)=>a+(+x.importe||0),0);
  const kpis=`<div class="kpis"><div class="kpi"><small>Cobrado este mes</small><b class="num">${eur.format(cobrado)}</b><span>${fs.filter(f=>f.estado==="pagada"&&f.pagada&&new Date(f.pagada)>=mes0).length} facturas pagadas</span></div>
    <div class="kpi"><small>Pendiente de cobro</small><b class="num">${eur.format(pend.reduce((a,f)=>a+facTotal(f),0))}</b><span>${pend.length} ${pend.length===1?"factura enviada":"facturas enviadas"}</span></div>
    <div class="kpi"><small>Vencido</small><b class="num" style="${venc.length?"color:var(--bad)":""}">${eur.format(venc.reduce((a,f)=>a+facTotal(f),0))}</b><span>${venc.length} ${venc.length===1?"factura":"facturas"}</span></div>
    <div class="kpi"><small>Ingresos recurrentes</small><b class="num">${eur.format(mrr)}/mes</b><span>${sus.filter(x=>x.estado==="activa").length} suscripciones activas</span></div></div>`;
  const tabs=`<div class="chips" role="tablist">${[["facturas","Facturas"],["suscripciones","Suscripciones"],["productos","Productos y servicios"]].map(([k,l])=>`<button class="chip" data-paytab="${k}" aria-pressed="${t===k}">${l}</button>`).join("")}</div>`;
  let body="", act="";
  if(t==="facturas"){ act=addBtn("Nueva factura","data-new-factura");
    const list=[...fs].sort((a,b)=>String(b.emitida||b.creado||"").localeCompare(String(a.emitida||a.creado||"")));
    body=list.length?`<div class="table-wrap"><table><thead><tr><th>Factura</th><th>Cliente</th><th>Concepto</th><th>Emitida</th><th>Vence</th><th>Estado</th><th class="r">Total</th><th></th></tr></thead><tbody>${list.map(f=>{ const k=contacto(f.contactoId), e=facEstado(f);
      const a=!canEdit()?"":e==="borrador"?`<button class="btn sec" style="padding:6px 12px" data-fac-send="${esc(f.id)}">Enviar</button>`:(e==="enviada"||e==="vencida")?`<span class="actions" style="justify-content:flex-end;flex-wrap:nowrap"><button class="btn ghost" style="padding:6px 10px" data-fac-remind="${esc(f.id)}">Recordar</button><button class="btn sec" style="padding:6px 12px" data-fac-paid="${esc(f.id)}">Marcar pagada</button></span>`:`<span class="muted">${f.pagada?fechaCorta(f.pagada):""}</span>`;
      return `<tr data-factura="${esc(f.id)}"><td class="num" style="white-space:nowrap">${esc(f.numero||"—")}</td><td><div class="who"><span class="circ">${esc(ini(k&&k.nombre))}</span><div style="min-width:0"><b>${esc(k?k.nombre:"Sin cliente")}</b><small>${esc(k&&k.empresa||"")}</small></div></div></td><td>${esc(trunc(f.concepto,40))}</td><td class="muted" style="white-space:nowrap">${f.emitida?fechaCorta(f.emitida):"—"}</td><td class="muted" style="white-space:nowrap">${f.vence?fechaCorta(f.vence):"—"}</td><td>${facPill(f)}</td><td class="r num">${eur2.format(facTotal(f))}</td><td class="r" data-stop>${a}</td></tr>`; }).join("")}</tbody></table></div>`
      :`<div class="empty"><h2>Sin facturas todavía.</h2><p>Crea la primera: eliges cliente, concepto e importe, y la marcas como enviada o pagada.</p>${addBtn("Crear factura","data-new-factura")}</div>`; }
  if(t==="suscripciones"){ act=addBtn("Nueva suscripción","data-new-sus");
    body=sus.length?`<div class="table-wrap"><table><thead><tr><th>Cliente</th><th>Plan</th><th>Próximo cobro</th><th>Estado</th><th class="r">Importe</th></tr></thead><tbody>${[...sus].sort((a,b)=>String(a.proximo||"9").localeCompare(String(b.proximo||"9"))).map(x=>{ const k=contacto(x.contactoId), p=pr.find(y=>y.id===x.productoId);
      return `<tr data-sus="${esc(x.id)}"><td><div class="who"><span class="circ">${esc(ini(k&&k.nombre))}</span><div style="min-width:0"><b>${esc(k?k.nombre:"Sin cliente")}</b><small>${esc(k&&k.empresa||"")}</small></div></div></td><td>${esc(p?p.nombre:x.plan||"—")}</td><td class="muted">${x.proximo&&x.estado!=="cancelada"?fechaCorta(x.proximo):"—"}</td><td>${susPill(x)}</td><td class="r num">${eur2.format(+x.importe||0)}/mes</td></tr>`; }).join("")}</tbody></table></div>`
      :`<div class="empty"><h2>Sin suscripciones.</h2><p>Registra aquí las cuotas mensuales de tus clientes para ver tus ingresos recurrentes.</p>${addBtn("Crear suscripción","data-new-sus")}</div>`; }
  if(t==="productos"){ act=addBtn("Nuevo producto","data-new-prod");
    body=pr.length?`<div class="table-wrap"><table><thead><tr><th>Producto o servicio</th><th>Tipo</th><th class="r">Precio</th><th class="r">Vendidos</th></tr></thead><tbody>${[...pr].sort((a,b)=>String(a.nombre).localeCompare(b.nombre,"es")).map(p=>{ const n=fs.filter(f=>f.productoId===p.id&&f.estado!=="borrador").length+sus.filter(x=>x.productoId===p.id).length;
      return `<tr data-prod="${esc(p.id)}"><td><b>${esc(p.nombre)}</b>${p.ejemplo?' <span class="pill ej">Ejemplo</span>':""}${p.descripcion?`<br><small class="muted">${esc(trunc(p.descripcion,70))}</small>`:""}</td><td>${p.tipo==="suscripcion"?"Suscripción":"Pago único"}</td><td class="r num">${eur2.format(+p.precio||0)}${p.tipo==="suscripcion"?"/mes":""}</td><td class="r num">${n}</td></tr>`; }).join("")}</tbody></table></div>`
      :`<div class="empty"><h2>Sin productos.</h2><p>Guarda tus servicios con su precio para rellenar facturas y suscripciones en un clic.</p>${addBtn("Crear producto","data-new-prod")}</div>`; }
  return headHTML(esc(s.nombre),"Tus <span class=\"m\">cobros.</span>","Facturas, cuotas mensuales y lo que vendes. El cobro online llegará cuando conectes Stripe a tu sistema.",act)+kpis+`<div class="toolbar">${tabs}</div>`+body;
}
function drawerFactura(id,pre){
  const f=id?S.data.facturas.find(x=>x.id===id):null, sid=f?f.sub:S.subId, ro2=!canEdit()?"disabled":"", p=pre||{};
  const cs=of("contactos",sid).sort((a,b)=>String(a.nombre).localeCompare(b.nombre,"es")), pr=of("productos",sid).filter(x=>x.tipo!=="suscripcion");
  if(!cs.length&&!f){ openDrawer("Primero, un <span class=\"m\">contacto.</span>",`<p class="lead" style="margin:0">Cada factura va a nombre de un contacto. Crea uno y vuelve aquí.</p>`,`<button type="button" class="btn ghost" data-close>Cancelar</button><button type="button" class="btn" id="to-c">Crear contacto</button>`,async()=>{}); $("#to-c").addEventListener("click",()=>drawerContact(null)); return; }
  const v0=f&&f.vence?f.vence:ymd(new Date(Date.now()+15*DAY));
  const d=f&&canEdit()?delBtn(async()=>{ await remove("facturas",f.id); toast("Factura borrada"); }):null;
  openDrawer(f?`Factura <span class="num">${esc(f.numero||"")}</span>`:"Nueva <span class=\"m\">factura.</span>",
    fld("fa-c","Cliente",`<select id="fa-c" name="contactoId" required ${ro2}>${selOpts(cs.map(k=>[k.id,k.nombre+(k.empresa?" · "+k.empresa:"")]),f?f.contactoId:p.contactoId||"")}</select>`)+
    (pr.length?fld("fa-p","Producto",`<select id="fa-p" name="productoId" ${ro2}>${selOpts([["","Otro concepto"]].concat(pr.map(x=>[x.id,x.nombre+" · "+eur2.format(+x.precio||0)])),f?f.productoId||"":"")}</select>`,"Rellena el concepto y el importe por ti."):"")+
    fld("fa-k","Concepto",inp("fa-k","concepto",f&&f.concepto,"text",'required placeholder="Implante unitario" '+ro2))+
    `<div class="row3">${fld("fa-i","Importe sin IVA (€)",inp("fa-i","importe",f?f.importe:"","number",'min="0" step="0.01" required '+ro2))}${fld("fa-iva","IVA",`<select id="fa-iva" name="iva" ${ro2}>${selOpts([["21","21 %"],["10","10 %"],["4","4 %"],["0","Exento"]],String(f?f.iva??21:21))}</select>`)}${fld("fa-v","Vence",inp("fa-v","vence",v0,"date",ro2))}</div>`+
    `<p class="muted" id="fa-tot" style="margin:0;font-size:14px"></p>`+
    fld("fa-n","Notas",`<textarea id="fa-n" name="notas" ${ro2}>${esc(f&&f.notas)}</textarea>`)+
    `<p class="muted" style="margin:0;font-size:13px">Revisa con tu gestoría los datos fiscales obligatorios antes de enviar facturas reales.</p>`,
    canEdit()?`${d?d.html:'<button type="button" class="btn ghost" data-close>Cancelar</button>'}<button class="btn" type="submit">${f?"Guardar cambios":"Crear borrador"}</button>`:`<button type="button" class="btn sec" data-close>Cerrar</button>`,
    async fd=>{ if(!canEdit()) return; await save("facturas",f?f.id:uid("fa"),Object.assign({},f||{},{sub:sid,numero:f?f.numero:nextNum(sid),contactoId:fd.contactoId,productoId:fd.productoId||"",concepto:String(fd.concepto).trim(),importe:Math.max(0,+fd.importe||0),iva:+fd.iva||0,vence:fd.vence||"",notas:fd.notas||"",estado:f?f.estado:"borrador",emitida:f?f.emitida||"":"",pagada:f?f.pagada||"":"",creado:f?f.creado:nowISO()})); toast(f?"Cambios guardados":"Factura creada en borrador"); });
  if(d) d.wire();
  const upd=()=>{ const i=+($("#fa-i")||{}).value||0, v=+($("#fa-iva")||{}).value||0, el=$("#fa-tot"); if(el) el.textContent=`Total con IVA: ${eur2.format(i*(1+v/100))}`; };
  ["fa-i","fa-iva"].forEach(x=>{ const el=$("#"+x); if(el) el.addEventListener("input",upd); if(el) el.addEventListener("change",upd); }); upd();
  const ps=$("#fa-p"); if(ps) ps.addEventListener("change",()=>{ const x=pr.find(y=>y.id===ps.value); if(!x) return; $("#fa-k").value=x.nombre; $("#fa-i").value=x.precio; upd(); });
}
async function facAccion(id,acc){
  const f=S.data.facturas.find(x=>x.id===id); if(!f||!canEdit()) return;
  if(acc==="send"){ await save("facturas",f.id,Object.assign({},f,{estado:"enviada",emitida:ymd(new Date()),vence:f.vence||ymd(new Date(Date.now()+15*DAY))})); toast("Factura marcada como enviada"); }
  if(acc==="paid"){ await save("facturas",f.id,Object.assign({},f,{estado:"pagada",pagada:nowISO()})); toast("Factura marcada como pagada"); }
  if(acc==="remind"){ const k=contacto(f.contactoId); if(!k){ toast("La factura no tiene cliente."); return; }
    const conv=S.data.conversaciones.find(v=>v.contactoId===k.id), canal=k.tel?"WhatsApp":"Email";
    const m={de:"out",texto:`Hola ${firstName(k.nombre)}, te recordamos que la factura ${f.numero} de ${eur2.format(facTotal(f))} ${facEstado(f)==="vencida"?"venció":"vence"} el ${fechaCorta(f.vence)}. Si ya la has pagado, ignora este mensaje. ¡Gracias!`,canal,t:nowISO()};
    if(conv) await save("conversaciones",conv.id,Object.assign({},conv,{mensajes:[...(conv.mensajes||[]),m].slice(-200),actualizado:m.t}));
    else await save("conversaciones",uid("v"),{sub:f.sub,contactoId:k.id,canal,mensajes:[m],noLeido:false,actualizado:m.t});
    await save("facturas",f.id,Object.assign({},f,{recordada:nowISO()})); toast("Recordatorio registrado en Conversaciones"); }
}
function drawerSus(id){
  const x=id?S.data.suscripciones.find(y=>y.id===id):null, sid=x?x.sub:S.subId, ro2=!canEdit()?"disabled":"";
  const cs=of("contactos",sid).sort((a,b)=>String(a.nombre).localeCompare(b.nombre,"es")), pr=of("productos",sid).filter(p=>p.tipo==="suscripcion");
  if(!cs.length&&!x){ toast("Crea primero un contacto."); return; }
  const d=x&&canEdit()?delBtn(async()=>{ await remove("suscripciones",x.id); toast("Suscripción borrada"); }):null;
  openDrawer(x?"Suscripción":"Nueva <span class=\"m\">suscripción.</span>",
    fld("su-c","Cliente",`<select id="su-c" name="contactoId" required ${ro2}>${selOpts(cs.map(k=>[k.id,k.nombre]),x?x.contactoId:"")}</select>`)+
    (pr.length?fld("su-p","Plan",`<select id="su-p" name="productoId" ${ro2}>${selOpts([["","Otro"]].concat(pr.map(p=>[p.id,p.nombre])),x?x.productoId||"":"")}</select>`):"")+
    fld("su-n","Nombre del plan",inp("su-n","plan",x&&x.plan,"text",'placeholder="Plan de mantenimiento" '+ro2))+
    `<div class="row3">${fld("su-i","Importe al mes (€)",inp("su-i","importe",x?x.importe:"","number",'min="0" step="0.01" required '+ro2))}${fld("su-x","Próximo cobro",inp("su-x","proximo",x?x.proximo:ymd(new Date(Date.now()+30*DAY)),"date",ro2))}${fld("su-e","Estado",`<select id="su-e" name="estado" ${ro2}>${selOpts(Object.entries(EST_SUS).map(([k,v])=>[k,v[0]]),x?x.estado:"activa")}</select>`)}</div>`,
    canEdit()?`${d?d.html:'<button type="button" class="btn ghost" data-close>Cancelar</button>'}<button class="btn" type="submit">${x?"Guardar cambios":"Crear suscripción"}</button>`:`<button type="button" class="btn sec" data-close>Cerrar</button>`,
    async fd=>{ if(!canEdit()) return; const p=pr.find(y=>y.id===fd.productoId); await save("suscripciones",x?x.id:uid("su"),{sub:sid,contactoId:fd.contactoId,productoId:fd.productoId||"",plan:String(fd.plan||"").trim()||(p?p.nombre:""),importe:Math.max(0,+fd.importe||0),proximo:fd.proximo||"",estado:fd.estado,creado:x?x.creado:nowISO()}); toast(x?"Cambios guardados":"Suscripción creada"); });
  if(d) d.wire();
  const ps=$("#su-p"); if(ps) ps.addEventListener("change",()=>{ const p=pr.find(y=>y.id===ps.value); if(!p) return; $("#su-n").value=p.nombre; $("#su-i").value=p.precio; });
}
function drawerProd(id){
  const p=id?S.data.productos.find(y=>y.id===id):null, sid=p?p.sub:S.subId, ro2=!canEdit()?"disabled":"";
  const d=p&&canEdit()?delBtn(async()=>{ await remove("productos",p.id); toast("Producto borrado"); }):null;
  openDrawer(p?esc(p.nombre):"Nuevo <span class=\"m\">producto.</span>",
    fld("pr-n","Nombre",inp("pr-n","nombre",p&&p.nombre,"text",'required placeholder="Implante unitario" '+ro2))+
    `<div class="row2">${fld("pr-t","Tipo",`<select id="pr-t" name="tipo" ${ro2}>${selOpts([["unico","Pago único"],["suscripcion","Suscripción mensual"]],p?p.tipo:"unico")}</select>`)}${fld("pr-p","Precio sin IVA (€)",inp("pr-p","precio",p?p.precio:"","number",'min="0" step="0.01" required '+ro2))}</div>`+
    fld("pr-d","Descripción",`<textarea id="pr-d" name="descripcion" ${ro2}>${esc(p&&p.descripcion)}</textarea>`),
    canEdit()?`${d?d.html:'<button type="button" class="btn ghost" data-close>Cancelar</button>'}<button class="btn" type="submit">${p?"Guardar cambios":"Crear producto"}</button>`:`<button type="button" class="btn sec" data-close>Cerrar</button>`,
    async fd=>{ if(!canEdit()) return; await save("productos",p?p.id:uid("pr"),{sub:sid,nombre:String(fd.nombre).trim(),tipo:fd.tipo,precio:Math.max(0,+fd.precio||0),descripcion:fd.descripcion||"",ejemplo:false,creado:p?p.creado:nowISO()}); toast(p?"Cambios guardados":"Producto creado"); });
  if(d) d.wire();
}

/* ---------- Reputación ---------- */
function plantillaResp(r,s){ const n=firstName(r.autor); return +r.estrellas>=4?`¡Muchas gracias, ${n}! Nos alegra mucho leerte. Te esperamos en ${s.nombre} cuando quieras.`:`Hola, ${n}. Gracias por contárnoslo y sentimos que la experiencia no fuera la que esperabas. Nos gustaría hablarlo contigo: escríbenos y lo vemos.`; }
function viewReputacion(){
  const s=sub(), sid=s.id, rs=of("resenas",sid), f=S.revF||"todas", now=new Date();
  const media=rs.length?rs.reduce((t,r)=>t+(+r.estrellas||0),0)/rs.length:0, dist=[5,4,3,2,1].map(n=>[n,rs.filter(r=>+r.estrellas===n).length]), dmax=Math.max(1,...dist.map(x=>x[1]));
  const list=rs.filter(r=>f==="todas"||(f==="sin"&&!r.respuesta)||(f==="bajas"&&+r.estrellas<=3)).sort((a,b)=>String(b.fecha||"").localeCompare(String(a.fecha||"")));
  const mes=rs.filter(r=>r.fecha&&now-new Date(r.fecha)<30*DAY).length, resp=rs.filter(r=>r.respuesta).length;
  const fl=S.data.flujos.find(x=>x.sub===sid&&(x.disparadores||[]).some(t=>t.tipo==="t_etapa")&&/rese/i.test(x.nombre||""));
  const left=`<div class="s4" style="display:flex;flex-direction:column;gap:20px;min-width:0"><section class="panel"><div class="score"><b class="num">${rs.length?media.toFixed(1).replace(".",LANG==="en"?".":","):"—"}</b><div>${stars(Math.round(media))}<div class="muted" style="font-size:13px">${rs.length} ${rs.length===1?"reseña":"reseñas"} · Google y Facebook</div></div></div>
      <div class="hbars">${dist.map(([n,v])=>`<div class="hbar" style="grid-template-columns:34px minmax(0,1fr) 34px"><span>${n} ★</span><div class="track"><i style="width:${v/dmax*100}%"></i></div><b>${v}</b></div>`).join("")}</div></section>
    <section class="panel"><div class="ph"><h2>Este mes</h2></div><dl class="kv"><dt>Reseñas nuevas</dt><dd class="num" style="text-align:right">${mes}</dd><dt>Respondidas</dt><dd class="num" style="text-align:right">${rs.length?Math.round(resp/rs.length*100):0} %</dd><dt>Sin responder</dt><dd class="num" style="text-align:right">${rs.length-resp}</dd></dl>
      <p class="muted" style="margin:0;font-size:13.5px">${fl?`El flujo «${esc(fl.nombre)}» pide reseña a cada cliente que ganas.`:"Monta un flujo que pida reseña a cada cliente que ganas."}</p>${canEdit()&&permDe(VC(),"automatizaciones")!=="no"?(fl?`<button class="btn sec" data-goflow="${esc(fl.id)}" style="align-self:flex-start">Ver flujo</button>`:`<button class="btn sec" data-receta-go="resenas" style="align-self:flex-start">Crear flujo de reseñas</button>`):""}</section></div>`;
  const chips=`<div class="chips">${[["todas","Todas"],["sin","Sin responder"],["bajas","1 a 3 estrellas"]].map(([k,l])=>`<button class="chip" data-revf="${k}" aria-pressed="${f===k}">${l}</button>`).join("")}</div>`;
  const items=list.map(r=>`<div class="rev"><div class="rev-h"><span class="circ">${esc(ini(r.autor))}</span><div style="min-width:0"><b>${esc(r.autor)}</b>${r.ejemplo?' <span class="pill ej">Ejemplo</span>':""}<div class="meta2" style="display:flex;gap:8px;align-items:center;font-size:12.5px;color:var(--muted)">${stars(+r.estrellas||0)}<span>${esc(r.fuente||"Google")} · ${r.fecha?rel(r.fecha):""}</span></div></div>
      ${r.respuesta?'<span class="pill ok" style="margin-left:auto">Respondida</span>':(canEdit()?`<button class="btn sec" style="margin-left:auto;padding:6px 12px" data-resp="${esc(r.id)}">Responder</button>`:"")}</div>
      <p>${esc(r.texto)}</p>${r.respuesta?`<div class="reply"><b>Respuesta de ${esc(s.nombre)}:</b> ${esc(r.respuesta)}${canEdit()?` <button class="btn ghost" style="padding:2px 6px;font-size:12.5px" data-resp="${esc(r.id)}">Editar</button>`:""}</div>`:""}</div>`).join("");
  const right=`<section class="panel s8"><div class="ph"><h2>Últimas reseñas</h2>${chips}</div>${items||`<p class="muted" style="margin:0">${rs.length?"Ninguna reseña con este filtro.":"Aún no hay reseñas. Cuando conectes tu ficha de Google, entrarán solas."}</p>`}</section>`;
  return headHTML(esc(s.nombre),"Tu <span class=\"m\">reputación.</span>","Reseñas de Google y Facebook en un sitio, con respuesta en un minuto. Entrarán solas cuando conectes tu ficha de Google.",addBtn("Añadir reseña","data-new-resena"))+`<div class="g12">${left}${right}</div>`;
}
function drawerResp(id){
  const r=S.data.resenas.find(x=>x.id===id); if(!r) return; const s=subById(r.sub);
  openDrawer(`Responder a <span class="m">${esc(firstName(r.autor))}.</span>`,
    `<div class="rev" style="padding-top:0"><div>${stars(+r.estrellas||0)}</div><p>${esc(r.texto)}</p></div>`+
    fld("rp-t","Tu respuesta",`<textarea id="rp-t" name="respuesta" style="min-height:140px" required>${esc(r.respuesta||plantillaResp(r,s))}</textarea>`,"Respuesta corta, en tu tono y sin datos personales. Se publicará en Google cuando conectes tu ficha."),
    `<button type="button" class="btn ghost" data-close>Cancelar</button><button class="btn" type="submit">Guardar respuesta</button>`,
    async fd=>{ await save("resenas",r.id,Object.assign({},r,{respuesta:String(fd.respuesta).trim(),respondidaEn:nowISO()})); toast("Respuesta guardada"); });
}
function drawerResena(){
  openDrawer("Añadir <span class=\"m\">reseña.</span>",
    `<div class="row2">${fld("re-a","Autor",inp("re-a","autor","","text","required"))}${fld("re-f","Fuente",`<select id="re-f" name="fuente">${selOpts(["Google","Facebook","Otra"],"Google")}</select>`)}</div>`+
    `<div class="row2">${fld("re-s","Estrellas",`<select id="re-s" name="estrellas">${selOpts([["5","5 ★"],["4","4 ★"],["3","3 ★"],["2","2 ★"],["1","1 ★"]],"5")}</select>`)}${fld("re-d","Fecha",inp("re-d","fecha",ymd(new Date()),"date"))}</div>`+
    fld("re-t","Texto",`<textarea id="re-t" name="texto" required></textarea>`,"Copia aquí una reseña real mientras no esté conectada tu ficha de Google."),
    `<button type="button" class="btn ghost" data-close>Cancelar</button><button class="btn" type="submit">Añadir reseña</button>`,
    async fd=>{ await save("resenas",uid("re"),{sub:S.subId,autor:String(fd.autor).trim(),fuente:fd.fuente,estrellas:+fd.estrellas||5,fecha:fd.fecha?new Date(fd.fecha+"T12:00:00").toISOString():nowISO(),texto:String(fd.texto).trim(),respuesta:"",ejemplo:false}); toast("Reseña añadida"); });
}

/* ---------- Ficha de contacto: actividad ---------- */
function actividad(c){
  const out=[], push=(t,ic,txt)=>{ if(t) out.push({t,ic,txt}); };
  push(c.creado,"users",`Contacto creado desde ${c.fuente||"Manual"}`);
  S.data.oportunidades.filter(o=>o.contactoId===c.id).forEach(o=>{ push(o.creado,"pipe",`Oportunidad «${o.titulo}»`); if(o.actualizado&&o.actualizado!==o.creado) push(o.actualizado,"pipe",`«${o.titulo}» en ${o.etapa}`); });
  S.data.conversaciones.filter(v=>v.contactoId===c.id).forEach(v=>(v.mensajes||[]).slice(-6).forEach(m=>push(m.t,"chat",m.de==="out"?`Mensaje enviado por ${m.canal||v.canal}: «${trunc(m.texto,60)}»`:m.de==="sys"?m.texto:`Mensaje recibido por ${m.canal||v.canal}: «${trunc(m.texto,60)}»`)));
  S.data.citas.filter(x=>x.contactoId===c.id).forEach(x=>push(x.inicio,"cal",`${x.calendario||"Cita"}: ${(EST_CITA[x.estado]||EST_CITA.reservada)[0].toLowerCase()} · ${dCorta(x.inicio)} ${hhmm(x.inicio)}`));
  S.data.facturas.filter(f=>f.contactoId===c.id).forEach(f=>{ if(f.emitida) push(f.emitida+"T09:00:00","file",`Factura ${f.numero} enviada · ${eur2.format(facTotal(f))}`); if(f.pagada) push(f.pagada,"card",`Factura ${f.numero} pagada`); });
  S.data.tareas.filter(x=>x.contactoId===c.id).forEach(x=>push(x.hecha?x.hechaEn:x.creado,"task",x.hecha?`Tarea hecha: ${x.titulo}`:`Tarea pendiente: ${x.titulo}`));
  return out.filter(x=>!isNaN(new Date(x.t))&&new Date(x.t)<=new Date()).sort((a,b)=>new Date(b.t)-new Date(a.t));
}
function fichaExtra(c){
  const citas=S.data.citas.filter(x=>x.contactoId===c.id&&new Date(x.inicio)>=startOfDay(new Date())&&x.estado!=="cancelada").sort((a,b)=>String(a.inicio).localeCompare(b.inicio));
  const facs=S.data.facturas.filter(f=>f.contactoId===c.id), act=actividad(c).slice(0,10);
  const tot=facs.filter(f=>f.estado==="pagada").reduce((a,f)=>a+facTotal(f),0);
  return (citas.length?`<p class="section-t">Próximas citas</p><div class="mini">${citas.slice(0,3).map(x=>`<div><span>${esc(x.titulo||x.calendario)}</span><b class="num">${esc(dCorta(x.inicio))} ${hhmm(x.inicio)}</b></div>`).join("")}</div>`:"")
    +(facs.length?`<p class="section-t">Facturas · ${eur2.format(tot)} cobrados</p><div class="mini">${facs.slice(-3).reverse().map(f=>`<div><span class="num">${esc(f.numero)} ${facPill(f)}</span><b class="num">${eur2.format(facTotal(f))}</b></div>`).join("")}</div>`:"")
    +(act.length?`<p class="section-t">Actividad</p><div class="tl">${act.map(a=>`<div class="tl-i"><span class="ic">${navIco(a.ic)}</span><div><p>${esc(a.txt)}</p><small>${esc(rel(a.t))}</small></div></div>`).join("")}</div>`:"");
}
function fichaAcciones(c){
  if(!c) return ""; const vu=VC(), b=(k,attr,ic,l)=>permDe(vu,k)!=="no"?`<button type="button" class="btn sec" ${attr}>${I[ic]}${l}</button>`:"";
  return `<div class="qa">${b("conversaciones",'id="go-conv"',"chat","Mensaje")}${canEdit()?b("calendario",`data-new-cita-c="${esc(c.id)}"`,"cal","Cita")+b("pagos",`data-new-factura-c="${esc(c.id)}"`,"file","Factura")+`<button type="button" class="btn sec" data-new-tarea-c="${esc(c.id)}">${I.task}Tarea</button>`:""}</div>`;
}

/* ---------- Conversaciones: respuestas rápidas ---------- */
const RAPIDAS = [
  ["Saludo","Hola {nombre}, gracias por escribirnos. ¿En qué te podemos ayudar?"],
  ["Pedir teléfono","¿Nos dejas un teléfono y una hora que te venga bien? Te llamamos sin compromiso."],
  ["Proponer cita","¿Te viene bien que lo veamos en una cita? Elige día y hora aquí y te lo confirmamos."],
  ["Confirmar cita","¡Hecho, {nombre}! Tu cita queda confirmada. Te mandamos un recordatorio el día antes."],
  ["Seguimiento","Hola {nombre}, ¿pudiste ver lo que te enviamos? Si tienes cualquier duda, aquí estamos."],
  ["Gracias","¡Gracias a ti, {nombre}! Cualquier cosa, escríbenos por aquí."]
];
const CANALES_TODOS = ["WhatsApp","Email","SMS","Instagram","Facebook","Llamada","Chat web"];

/* ---------- Buscador (⌘K) ---------- */
function palItems(q){
  q=q.trim().toLowerCase(); const vu=VC(), out=[];
  const secs = S.view==="sub" ? NAV_SUB.flatMap(([,it])=>it).filter(([k])=>permDe(vu,k)!=="no").map(([k,l,ic])=>({kind:"tab",k,l,ic,em:sub()?sub().nombre:""}))
    : [["subcuentas","Subcuentas","grid"],["informes","Informes","chart"],["integraciones","Integraciones","plug"],["equipo","Equipo","key"]].map(([k,l,ic])=>({kind:"atab",k,l,ic,em:"Agencia"}));
  secs.filter(x=>!q||x.l.toLowerCase().includes(q)||tx(x.l).toLowerCase().includes(q)).forEach(x=>out.push(x));
  const allow=new Set(subsDe(vu));
  S.data.subcuentas.filter(s=>allow.has(s.id)&&(!q||String(s.nombre).toLowerCase().includes(q))).slice(0,q?5:3).forEach(s=>out.push({kind:"sub",id:s.id,l:s.nombre,em:s.sector||""}));
  if(q&&(S.view!=="sub"||permDe(vu,"contactos")!=="no")){
    const cs=S.data.contactos.filter(c=>allow.has(c.sub)&&[c.nombre,c.email,c.tel,c.empresa].join(" ").toLowerCase().includes(q)).sort((a,b)=>(a.sub===S.subId?0:1)-(b.sub===S.subId?0:1)).slice(0,8);
    cs.forEach(c=>out.push({kind:"contact",id:c.id,sub:c.sub,l:c.nombre,em:[c.empresa,(subById(c.sub)||{}).nombre].filter(Boolean).join(" · ")}));
    const os=S.data.oportunidades.filter(o=>allow.has(o.sub)&&String(o.titulo).toLowerCase().includes(q)).slice(0,5);
    os.forEach(o=>out.push({kind:"opp",id:o.id,sub:o.sub,l:o.titulo,em:`${o.etapa} · ${eur.format(+o.valor||0)}`}));
  }
  return out;
}
function openPalette(){
  closePalette(); S.palSel=0;
  const w=document.createElement("div"); w.id="pal";
  w.innerHTML=`<div class="pal-scrim" data-palclose></div><div class="pal" role="dialog" aria-modal="true" aria-label="Buscar"><div class="search">${I.search}<input id="pal-in" type="search" placeholder="Busca contactos, oportunidades, subcuentas o secciones…" autocomplete="off" aria-label="Buscar"></div><div class="pal-res" id="pal-res" role="listbox"></div></div>`;
  document.body.appendChild(w); i18nTree(w);
  const inp2=$("#pal-in"), draw=()=>{ const it=palItems(inp2.value); S.palItems=it; S.palSel=Math.min(S.palSel,Math.max(0,it.length-1));
    const grp={tab:"Secciones",atab:"Secciones",sub:"Subcuentas",contact:"Contactos",opp:"Oportunidades"}; let last="", h="";
    it.forEach((x,i)=>{ const g=grp[x.kind]; if(g!==last){ h+=`<small>${g}</small>`; last=g; }
      const icon=x.kind==="contact"?`<span class="circ">${esc(ini(x.l))}</span>`:x.kind==="sub"?`<span class="avatar" style="width:28px;height:28px;font-size:11px;border-radius:8px">${esc(ini(x.l))}</span>`:x.kind==="opp"?I.pipe:navIco(x.ic);
      h+=`<button role="option" data-palpick="${i}" aria-selected="${i===S.palSel}">${icon}<span>${esc(x.l)}</span><em>${esc(x.em||"")}</em></button>`; });
    $("#pal-res").innerHTML=h||`<p class="muted" style="padding:12px;margin:0">Sin resultados.</p>`; };
  inp2.addEventListener("input",()=>{ S.palSel=0; draw(); });
  inp2.addEventListener("keydown",e=>{ const n=(S.palItems||[]).length; if(e.key==="ArrowDown"&&n){ e.preventDefault(); S.palSel=(S.palSel+1)%n; draw(); } if(e.key==="ArrowUp"&&n){ e.preventDefault(); S.palSel=(S.palSel-1+n)%n; draw(); } if(e.key==="Enter"){ e.preventDefault(); palPick(S.palSel); } });
  draw(); inp2.focus();
}
function closePalette(){ const w=$("#pal"); if(w) w.remove(); }
function palPick(i){
  const x=(S.palItems||[])[i]; if(!x) return; closePalette(); leaveEditors(); S.menu=false;
  if(x.kind==="tab"){ S.tab=x.k; }
  else if(x.kind==="atab"){ S.view="agencia"; S.atab=x.k; }
  else if(x.kind==="sub"){ S.view="sub"; S.subId=x.id; S.tab="inicio"; }
  else { S.view="sub"; S.subId=x.sub; }
  rememberNav(); render(); window.scrollTo(0,0);
  if(x.kind==="contact") drawerContact(x.id);
  if(x.kind==="opp") drawerOpp(x.id);
}


/* ---------- Conversaciones (bandeja con filtros y ficha lateral) ---------- */
function viewConvs(){
  const s=sub(), all=of("conversaciones",s.id).sort((a,b)=>String(b.actualizado||"").localeCompare(String(a.actualizado||"")));
  if(!all.length) return headHTML(esc(s.nombre),"Tus <span class=\"m\">conversaciones.</span>","WhatsApp, email, SMS, redes, llamadas y chat web en una sola bandeja.","")
    + `<div class="empty"><h2>Bandeja vacía.</h2><p>Empieza una conversación con cualquiera de tus contactos.</p>${addBtn("Nueva conversación","data-new-conv")}</div>`;
  const q=(S.convQ||"").trim().toLowerCase(), ch=S.convCanal||"";
  const cs=all.filter(c=>{ const k=contacto(c.contactoId); if(ch&&c.canal!==ch&&!(c.mensajes||[]).some(m=>m.canal===ch)) return false;
    return !q||[k&&k.nombre,k&&k.empresa,...(c.mensajes||[]).map(m=>m.texto)].join(" ").toLowerCase().includes(q); });
  if(!S.convSel || !all.find(c=>c.id===S.convSel)) S.convSel=(cs[0]||all[0]).id;
  const cur=all.find(c=>c.id===S.convSel), cc=contacto(cur.contactoId);
  const threads=cs.map(c=>{ const k=contacto(c.contactoId), last=(c.mensajes||[]).filter(m=>m.de!=="sys").slice(-1)[0];
    return `<button class="thread" data-conv="${esc(c.id)}" aria-current="${c.id===S.convSel}">
      <span class="circ">${esc(ini(k&&k.nombre))}</span>
      <span style="min-width:0"><b>${esc(k?k.nombre:"Contacto borrado")}<span class="chpill">${esc(c.canal||"")}</span></b><p>${last?(last.de==="out"?"Tú: ":last.de==="ia"?"IA: ":"")+(last.tipo==="audio"?"🎤 ":"")+esc(last.texto):"Sin mensajes"}</p></span>
      <span><time>${rel(c.actualizado)}</time>${c.noLeido?'<span class="dot" aria-label="Sin leer"></span>':""}</span></button>`; }).join("")||`<p class="muted" style="padding:14px;margin:0">Ningún hilo coincide.</p>`;
  const agN=(agente(s.id)||{}).nombre, msgs=(cur.mensajes||[]).map(m=>msgHTML(m,cur,agN)).join("");
  const ops=cc?S.data.oportunidades.filter(o=>o.contactoId===cc.id):[], op=ops.sort((a,b)=>String(b.actualizado||"").localeCompare(String(a.actualizado||"")))[0];
  const sideP=cc?`<aside class="ib-side"><div class="who"><span class="circ">${esc(ini(cc.nombre))}</span><div><b>${esc(cc.nombre)}</b><small>${esc(cc.empresa||cc.fuente||"")}</small></div></div>
      <dl class="kv"><dt>Email</dt><dd>${esc(cc.email||"—")}</dd><dt>Teléfono</dt><dd class="num">${esc(cc.tel||"—")}</dd><dt>Fuente</dt><dd>${esc(cc.fuente||"—")}</dd></dl>
      ${op?`<div><p class="section-t" style="margin:0 0 6px">Oportunidad</p><div class="mini"><div><span>${esc(op.titulo)} <span class="pill">${esc(op.etapa)}</span></span><b class="num">${eur.format(+op.valor||0)}</b></div></div></div>`:""}
      ${(cc.etiquetas||[]).length?`<div class="tags">${cc.etiquetas.map(t=>`<span class="pill rosa">${esc(t)}</span>`).join("")}</div>`:""}
      <div class="actions" style="flex-direction:column;align-items:stretch">${canEdit()&&permDe(VC(),"calendario")!=="no"?`<button class="btn sec" data-new-cita-c="${esc(cc.id)}">${I.cal}Agendar cita</button>`:""}<button class="btn ghost" data-contact="${esc(cc.id)}">Ver ficha</button></div></aside>`:"";
  return headHTML(esc(s.nombre),"Tus <span class=\"m\">conversaciones.</span>","",addBtn("Nueva conversación","data-new-conv"))+`
    <div class="inbox with-side">
      <div class="threads"><div class="thr-tools"><input id="thr-q" type="search" placeholder="Buscar conversación" value="${esc(S.convQ||"")}" aria-label="Buscar conversación"><select id="thr-canal" aria-label="Canal">${selOpts([["","Todos los canales"]].concat(CANALES_TODOS.map(x=>[x,x])),ch)}</select></div>${threads}</div>
      <div class="chat">
        <div class="chat-head"><div class="who"><span class="circ">${esc(ini(cc&&cc.nombre))}</span><div><b>${esc(cc?cc.nombre:"Contacto borrado")}</b><small>${esc(cur.canal||"")}${cc&&(cc.tel||cc.email)?" · "+esc(cc.tel||cc.email):""}</small></div></div>
          <div class="actions">${cur.noLeido&&canEdit()?`<button class="btn sec" data-read="${esc(cur.id)}">Marcar como leída</button>`:""}${cc?`<button class="btn ghost" data-contact="${esc(cc.id)}">Ver ficha</button>`:""}</div></div>
        ${iaConvBar(cur)}
        <div class="msgs" id="msgs">${msgs||'<div class="chat-empty">Sin mensajes todavía.</div>'}</div>
        ${canEdit()?`<div style="padding:10px 16px 0;display:flex;gap:8px;align-items:center"><select id="quick" aria-label="Respuestas rápidas" style="border:1px solid var(--line-strong);border-radius:12px;padding:7px 10px;background:var(--bg);font-size:13.5px;max-width:100%"><option value="">Respuestas rápidas</option>${RAPIDAS.map((r,i)=>`<option value="${i}">${esc(r[0])}</option>`).join("")}</select></div>
        <form class="composer" id="composer">
          <select id="canal" aria-label="Canal">${CANALES_TODOS.filter(x=>x!=="Llamada").map(c=>`<option ${c===(S.draftCanal||cur.canal)?"selected":""}>${c}</option>`).join("")}</select>
          <textarea id="draft" placeholder="Escribe tu respuesta…" aria-label="Respuesta">${esc(S.draft)}</textarea>
          <button class="btn" type="submit">Registrar mensaje</button>
        </form><div class="hint">El mensaje queda en el historial. El envío real llegará cuando conectes cada canal.</div>`:""}
      </div>
      ${sideP}
    </div>`;
}

/* ---------- Traducciones de lo nuevo ---------- */
Object.assign(EN_DICT,{
"Día a día":"Day to day","Crecimiento":"Growth","Inicio":"Home","Calendario":"Calendar","Pagos":"Payments","Reputación":"Reputation","Buscar":"Search",
"Busca contactos, oportunidades, subcuentas o secciones…":"Search contacts, opportunities, sub-accounts or sections…","Secciones":"Sections","Sin resultados.":"No results.",
"Buenos días,":"Good morning,","Buenas tardes,":"Good afternoon,","Buenas noches,":"Good evening,","Así va":"Here's",
"+{n} este mes":"+{n} this month","{n} oportunidad":"{n} opportunity","{n} oportunidades":"{n} opportunities","Cobrado este mes":"Collected this month","sin datos del mes anterior":"no data for last month",
"+{n} % vs el mes anterior":"+{n} % vs last month","-{n} % vs el mes anterior":"−{n} % vs last month","Tasa de cierre":"Win rate","ganadas ÷ cerradas":"won ÷ closed","Ver informes":"See reports",
"Valoración media":"Average rating","{n} reseñas":"{n} reviews","{n} reseña":"{n} review","Valoración media {n} de {n}":"Average rating {n} out of {n}","{n} de {n}":"{n} out of {n}",
"Agenda de hoy":"Today's agenda","Citas":"Appointments","Tareas":"Tasks","Seguimientos":"Follow-ups","No hay citas hoy.":"No appointments today.","No tienes tareas pendientes.":"You have no pending tasks.","Todo al día.":"All up to date.",
"Abrir calendario":"Open calendar","Nueva tarea":"New task","Hoy {n}:{n}":"Today {n}:{n}","Sin fecha":"No date","Marcar como hecha":"Mark as done",
"Cobrado en los últimos {n} meses":"Collected over the last {n} months","Cuando marques facturas como pagadas, aquí verás tus ingresos mes a mes.":"Once you mark invoices as paid, you'll see your revenue month by month here.","Ingresos cobrados por mes":"Revenue collected per month",
"Estado del pipeline":"Pipeline status","oportunidades":"opportunities","Abiertas":"Open","Ganadas":"Won","Perdidas":"Lost",
"Leads nuevos hoy":"New leads today","Responder":"Reply","Citas esta semana":"Appointments this week","Ver agenda":"See calendar","Facturas pendientes":"Pending invoices","Cobrar":"Collect","Reseñas sin responder":"Unanswered reviews","Ver contactos":"See contacts",
"Oportunidades con más valor":"Highest-value opportunities","Ver pipeline":"See pipeline","Actividad":"Activity","Aún no hay oportunidades abiertas.":"No open opportunities yet.","Valor":"Value",
"Dato de la semana":"Insight of the week","Aún no hay datos":"No data yet","Cuando entren contactos, aquí verás de dónde vienen y qué te cuesta cada uno.":"Once contacts come in, you'll see here where they come from and what each one costs.","Ir a Integraciones":"Go to Integrations",
"Origen de los leads":"Lead sources","últimos {n} días":"last {n} days","Sin leads en los últimos {n} días.":"No leads in the last {n} days.",
"agenda.":"calendar.","Toca un hueco libre para crear una cita. Toca una cita para cambiarla.":"Tap a free slot to create an appointment. Tap an appointment to change it.","Nueva cita":"New appointment","Semana anterior":"Previous week","Hoy":"Today","Semana siguiente":"Next week",
"Calendarios":"Calendars","Esta semana":"This week","Confirmadas":"Confirmed","Realizadas":"Completed","No vinieron":"No-shows","Canceladas":"Cancelled","Asistencia":"Attendance","Enlace de reservas":"Booking link",
"Tus clientes reservarán solos en tus huecos libres. El enlace funcionará cuando publiques tu sistema de reservas.":"Your clients will book your free slots on their own. The link will work once you publish your booking system.",
"Llamadas":"Calls","Reuniones":"Meetings","Interno":"Internal","Reservada":"Booked","Confirmada":"Confirmed","Realizada":"Completed","Cancelada":"Cancelled","No vino":"No-show",
"reservada":"booked","confirmada":"confirmed","realizada":"completed","cancelada":"cancelled","no vino":"no-show",
"cita.":"appointment.","Lugar":"Location","Teléfono, Google Meet, en la clínica…":"Phone, Google Meet, at the clinic…","{n} min":"{n} min","{n} h":"{n} h","{n} h {n} min":"{n} h {n} min",
"Los recordatorios por WhatsApp y SMS los enviará tu flujo «Recordatorios de cita» cuando tu sistema esté en marcha.":"Your «Appointment reminders» flow will send WhatsApp and SMS reminders once your system is running.",
"Crear cita":"Create appointment","Cita creada":"Appointment created","Cita borrada":"Appointment deleted","Cita":"Appointment",
"tarea.":"task.","Llamar para confirmar la cita":"Call to confirm the appointment","Vence":"Due","Tarea creada":"Task created","Tarea borrada":"Task deleted","Tarea hecha":"Task done","Tarea pendiente":"Task pending",
"cobros.":"payments.","Facturas, cuotas mensuales y lo que vendes. El cobro online llegará cuando conectes Stripe a tu sistema.":"Invoices, monthly fees and what you sell. Online payments will arrive once you connect Stripe to your system.",
"{n} facturas pagadas":"{n} invoices paid","{n} factura pagada":"{n} invoice paid","Pendiente de cobro":"Awaiting payment","{n} factura enviada":"{n} invoice sent","{n} facturas enviadas":"{n} invoices sent","Vencido":"Overdue","{n} factura":"{n} invoice","{n} facturas":"{n} invoices",
"Ingresos recurrentes":"Recurring revenue","{n}/mes":"{n}/month","{n} suscripciones activas":"{n} active subscriptions","Facturas":"Invoices","Suscripciones":"Subscriptions","Nueva factura":"New invoice","Factura":"Invoice",
"Concepto":"Item","Emitida":"Issued","Total":"Total","Enviar":"Send","Recordar":"Remind","Marcar pagada":"Mark paid","Sin cliente":"No client","Sin facturas todavía.":"No invoices yet.",
"Crea la primera: eliges cliente, concepto e importe, y la marcas como enviada o pagada.":"Create the first one: pick the client, item and amount, then mark it as sent or paid.","Crear factura":"Create invoice",
"Nueva suscripción":"New subscription","Plan":"Plan","Próximo cobro":"Next charge","Importe":"Amount","Sin suscripciones.":"No subscriptions.","Registra aquí las cuotas mensuales de tus clientes para ver tus ingresos recurrentes.":"Log your clients' monthly fees here to see your recurring revenue.",
"Crear suscripción":"Create subscription","Nuevo producto":"New product","Producto o servicio":"Product or service","Precio":"Price","Vendidos":"Sold","Suscripción":"Subscription","Pago único":"One-off payment","Sin productos.":"No products.",
"Guarda tus servicios con su precio para rellenar facturas y suscripciones en un clic.":"Save your services with their price to fill in invoices and subscriptions in one click.","Crear producto":"Create product",
"Prueba":"Trial","Pago fallido":"Payment failed","Pagada":"Paid","Vencida":"Overdue","factura.":"invoice.","Cada factura va a nombre de un contacto. Crea uno y vuelve aquí.":"Every invoice is addressed to a contact. Create one and come back.",
"Otro concepto":"Other item","Rellena el concepto y el importe por ti.":"Fills in the item and amount for you.","Importe sin IVA (€)":"Amount before VAT (€)","IVA":"VAT","Exento":"Exempt","Total con IVA: {n}":"Total incl. VAT: {n}",
"Revisa con tu gestoría los datos fiscales obligatorios antes de enviar facturas reales.":"Check the mandatory tax details with your accountant before sending real invoices.","Crear borrador":"Create draft",
"Factura creada en borrador":"Invoice saved as draft","Factura borrada":"Invoice deleted","Factura marcada como enviada":"Invoice marked as sent","Factura marcada como pagada":"Invoice marked as paid","Recordatorio registrado en Conversaciones":"Reminder logged in Conversations",
"La factura no tiene cliente.":"The invoice has no client.","Crea primero un contacto.":"Create a contact first.","suscripción.":"subscription.","Otro":"Other","Nombre del plan":"Plan name","Plan de mantenimiento":"Maintenance plan",
"Importe al mes (€)":"Monthly amount (€)","Suscripción creada":"Subscription created","Suscripción borrada":"Subscription deleted","producto.":"product.","Precio sin IVA (€)":"Price before VAT (€)","Suscripción mensual":"Monthly subscription",
"Producto creado":"Product created","Producto borrado":"Product deleted",
"reputación.":"reputation.","Reseñas de Google y Facebook en un sitio, con respuesta en un minuto. Entrarán solas cuando conectes tu ficha de Google.":"Google and Facebook reviews in one place, answered in a minute. They'll come in on their own once you connect your Google Business Profile.",
"Añadir reseña":"Add review","Google y Facebook":"Google and Facebook","Este mes":"This month","Reseñas nuevas":"New reviews","Respondidas":"Answered","Monta un flujo que pida reseña a cada cliente que ganas.":"Set up a flow that asks every client you win for a review.",
"Ver flujo":"See flow","Crear flujo de reseñas":"Create review flow","{n} a {n} estrellas":"{n} to {n} stars","Últimas reseñas":"Latest reviews","Respondida":"Answered","Ninguna reseña con este filtro.":"No reviews match this filter.",
"Aún no hay reseñas. Cuando conectes tu ficha de Google, entrarán solas.":"No reviews yet. Once you connect your Google Business Profile, they'll come in on their own.","Responder a":"Reply to","Tu respuesta":"Your reply",
"Respuesta corta, en tu tono y sin datos personales. Se publicará en Google cuando conectes tu ficha.":"Short, in your tone and without personal details. It'll be posted on Google once you connect your profile.","Guardar respuesta":"Save reply","Respuesta guardada":"Reply saved",
"reseña.":"review.","Autor":"Author","Otra":"Other","Estrellas":"Stars","{n} ★":"{n} ★","Texto":"Text","Copia aquí una reseña real mientras no esté conectada tu ficha de Google.":"Paste a real review here until your Google Business Profile is connected.","Reseña añadida":"Review added",
"Próximas citas":"Upcoming appointments","{n} cobrados":"{n} collected","Buscar conversación":"Search conversations","Todos los canales":"All channels","Llamada":"Call","Chat web":"Web chat","Respuestas rápidas":"Quick replies",
"Saludo":"Greeting","Pedir teléfono":"Ask for a phone number","Proponer cita":"Suggest an appointment","Confirmar cita":"Confirm appointment","Agendar cita":"Book appointment","Ningún hilo coincide.":"No conversations match.",
"WhatsApp, email, SMS, redes, llamadas y chat web en una sola bandeja.":"WhatsApp, email, SMS, social, calls and web chat in one inbox.",
"Hola {nombre}, gracias por escribirnos. ¿En qué te podemos ayudar?":"Hi {nombre}, thanks for getting in touch. How can we help?",
"¿Nos dejas un teléfono y una hora que te venga bien? Te llamamos sin compromiso.":"Could you leave us a phone number and a time that suits you? We'll call you, no strings attached.",
"¿Te viene bien que lo veamos en una cita? Elige día y hora aquí y te lo confirmamos.":"Shall we go over it in an appointment? Pick a day and time here and we'll confirm it.",
"¡Hecho, {nombre}! Tu cita queda confirmada. Te mandamos un recordatorio el día antes.":"Done, {nombre}! Your appointment is confirmed. We'll send you a reminder the day before.",
"Hola {nombre}, ¿pudiste ver lo que te enviamos? Si tienes cualquier duda, aquí estamos.":"Hi {nombre}, did you get a chance to look at what we sent? If you have any questions, we're here.",
"¡Gracias a ti, {nombre}! Cualquier cosa, escríbenos por aquí.":"Thank you, {nombre}! Anything else, just message us here."
});
EN_PAT.push(...[
 ["^Así va (.+) este mes: leads, ventas, citas y conversaciones en un solo sitio\\.$","Here's how {1} is doing this month: leads, sales, appointments and conversations in one place."],
 ["^(Meta Ads|Google Ads) te trae leads más baratos$","{1} brings you cheaper leads"],
 ["^En las últimas (\\d+) semanas, cada lead de (.+?) ha costado (.+?) frente a (.+?) en (.+?): un (\\d+) % menos\\. Si mueves presupuesto, hazlo poco a poco y vigila la calidad de los leads\\.$","Over the last {1} weeks, each lead from {2} cost {3} versus {4} on {5}: {6} % less. If you shift budget, do it gradually and keep an eye on lead quality."],
 ["^(.+) es tu mayor fuente de contactos$","{t1} is your biggest source of contacts"],
 ["^(\\d+) de tus (\\d+) contactos vienen de (.+?)\\. Conecta tus cuentas de anuncios para comparar cuánto te cuesta cada uno\\.$","{1} of your {2} contacts come from {t3}. Connect your ad accounts to compare what each one costs you."],
 ["^Nueva cita el (.+) a las (\\d+):00$","New appointment on {1} at {2}:00"],
 ["^El flujo «(.+)» pide reseña a cada cliente que ganas\\.$","The «{1}» flow asks every client you win for a review."],
 ["^Respuesta de (.+):$","Reply from {1}:"],
 ["^Contacto creado desde (.+)$","Contact created from {t1}"],
 ["^Oportunidad «(.+)»$","Opportunity «{1}»"],
 ["^«(.+)» en (.+)$","«{1}» in {t2}"],
 ["^Mensaje enviado por (.+?): «(.+)»$","Message sent via {t1}: «{2}»"],
 ["^Mensaje recibido por (.+?): «(.+)»$","Message received via {t1}: «{2}»"],
 ["^(.+?): (reservada|confirmada|realizada|cancelada|no vino) · (.+)$","{t1}: {t2} · {3}"],
 ["^Factura (\\S+) enviada · (.+)$","Invoice {1} sent · {2}"],
 ["^Factura (\\S+) pagada$","Invoice {1} paid"],
 ["^Tarea hecha: (.+)$","Task done: {1}"],
 ["^Tarea pendiente: (.+)$","Task pending: {1}"]
].map(([r,t])=>[new RegExp(r),t]));

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
    ${fichaExtra(c)}` : "";
  const d = c && canEdit() ? delBtn(async()=>{ await remove("contactos",c.id); toast("Contacto borrado"); }) : null;
  openDrawer(c?esc(c.nombre):"Nuevo <span class=\"m\">contacto.</span>",
    (c?fichaAcciones(c):"")+fld("c-n","Nombre",inp("c-n","nombre",c&&c.nombre,"text","required "+ro))+
    `<div class="row2">${fld("c-e","Email",inp("c-e","email",c&&c.email,"email",ro))}${fld("c-t","Teléfono",inp("c-t","tel",c&&c.tel,"tel",ro))}</div>`+
    `<div class="row2">${fld("c-em","Empresa",inp("c-em","empresa",c&&c.empresa,"text",ro))}${fld("c-f","Fuente",`<select id="c-f" name="fuente" ${ro}>${selOpts(["Formulario web","Meta Ads","Google Ads","Instagram","Referido","El Desayuno","Manual"],(c&&c.fuente)||"Manual")}</select>`)}</div>`+
    fld("c-camp","Campaña de origen",`<select id="c-camp" name="campana" ${ro}>${["",...new Set(S.data.anuncios.filter(a=>a.sub===(c?c.sub:S.subId)).map(a=>a.campana))].map(x=>`<option value="${esc(x)}" ${(c&&c.campana||"")===x?"selected":""}>${x?esc(x):"Sin campaña"}</option>`).join("")}</select>`,"Para atribuir sus ventas a un anuncio en Informes. Tu integración la rellena sola con el utm_campaign.")+
    fld("c-tags","Etiquetas",inp("c-tags","etiquetas",c&&(c.etiquetas||[]).join(", "),"text",ro+' placeholder="Separa con comas: vip, implantes"'))+
    fld("c-notas","Notas",`<textarea id="c-notas" name="notas" ${ro}>${esc(c&&c.notas)}</textarea>`)+related,
    canEdit()?`${d?d.html:'<button type="button" class="btn ghost" data-close>Cancelar</button>'}<button class="btn" type="submit">${c?"Guardar cambios":"Crear contacto"}</button>`:`<button type="button" class="btn sec" data-close>Cerrar</button>`,
    async fd=>{ if(!canEdit()) return; const tags=String(fd.etiquetas||"").split(",").map(t=>t.trim()).filter(Boolean);
      const body={sub:c?c.sub:S.subId,nombre:fd.nombre.trim(),email:fd.email.trim(),tel:fd.tel.trim(),empresa:fd.empresa.trim(),fuente:fd.fuente,campana:fd.campana||"",etiquetas:tags,notas:fd.notas,creado:c?c.creado:nowISO()}; if(c&&c.ejemplo) body.ejemplo=true;
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
  const t=e.target.closest("button,[data-go-sub],[data-go-integ],[data-ads],[data-user],[data-flow],[data-fun],[data-contact],[data-opp],[data-camp],[data-close],[data-factura],[data-sus],[data-prod],[data-cita],[data-tarea],[data-palclose],[data-repplat],[data-repcamp],[data-fc-save],[data-say],[data-ia-toggle]");
  if(e.target.closest("[data-close]")){ closeDrawer(); return; }
  if(t&&t.hasAttribute("data-palclose")){ closePalette(); return; }
  if(t&&t.dataset.palpick!==undefined&&t.hasAttribute("data-palpick")){ palPick(+t.dataset.palpick); return; }
  if(t&&t.hasAttribute("data-palette")){ S.menu=false; openPalette(); return; }
  if(t){
    const D=t.dataset;
    if(D.agtab){ S.agTab=D.agtab; renderMain(); return; }
    if(D.tareaDone){ e.stopPropagation(); await toggleTarea(D.tareaDone); return; }
    if(D.tarea){ drawerTarea(D.tarea); return; }
    if(t.hasAttribute("data-new-tarea")){ drawerTarea(null); return; }
    if(D.newTareaC){ drawerTarea(null,{contactoId:D.newTareaC}); return; }
    if(D.cita){ drawerCita(D.cita); return; }
    if(t.hasAttribute("data-new-cita")){ drawerCita(null); return; }
    if(D.slot){ drawerCita(null,{inicio:D.slot}); return; }
    if(D.newCitaC){ const k=contacto(D.newCitaC); if(k&&k.sub!==S.subId){ S.subId=k.sub; render(); } drawerCita(null,{contactoId:D.newCitaC}); return; }
    if(D.calweek!==undefined&&t.hasAttribute("data-calweek")){ const v=+D.calweek; S.calWeek=v===0?0:(S.calWeek||0)+v; renderMain(); return; }
    if(D.paytab){ S.payTab=D.paytab; renderMain(); return; }
    if(t.hasAttribute("data-new-factura")){ drawerFactura(null); return; }
    if(D.newFacturaC){ drawerFactura(null,{contactoId:D.newFacturaC}); return; }
    if(D.facSend){ await facAccion(D.facSend,"send"); return; }
    if(D.facPaid){ await facAccion(D.facPaid,"paid"); return; }
    if(D.facRemind){ await facAccion(D.facRemind,"remind"); return; }
    if(D.factura){ drawerFactura(D.factura); return; }
    if(t.hasAttribute("data-new-sus")){ drawerSus(null); return; }
    if(D.sus){ drawerSus(D.sus); return; }
    if(t.hasAttribute("data-new-prod")){ drawerProd(null); return; }
    if(D.prod){ drawerProd(D.prod); return; }
    if(D.revf){ S.revF=D.revf; renderMain(); return; }
    if(D.resp){ drawerResp(D.resp); return; }
    if(t.hasAttribute("data-new-resena")){ drawerResena(); return; }
    if(D.goflow){ leaveEditors(); S.tab="automatizaciones"; rememberNav(); renderSide(); openFlow(D.goflow); return; }
    if(D.recetaGo){ leaveEditors(); S.tab="automatizaciones"; rememberNav(); renderSide(); useReceta(D.recetaGo); return; }
  }
  if(!t){ if(S.menu){ S.menu=false; renderSide(); } return; }
  if(t.id==="switch-btn"){ S.menu=!S.menu; renderSide(); return; }
  if(S.menu && !t.closest(".switch-menu")){ S.menu=false; renderSide(); }
  if(t.hasAttribute("data-go-agencia")){ leaveEditors(); S.view="agencia"; S.subId=null; S.menu=false; rememberNav(); render(); return; }
  if(t.dataset.goSub){ leaveEditors(); S.view="sub"; S.subId=t.dataset.goSub; S.tab=t.dataset.goTab||"inicio"; S.q=""; S.tag=""; S.convSel=null; S.menu=false; rememberNav(); render(); window.scrollTo(0,0); return; }
  if(t.dataset.follow){ leaveEditors(); const [kind,id,sid]=t.dataset.follow.split(":"); S.view="sub"; S.subId=sid; rememberNav();
    if(kind==="conv"){ S.tab="conversaciones"; S.convSel=id; render(); }
    else { render(); if(kind==="contact") drawerContact(id); else drawerOpp(id); }
    return; }
  if(t.dataset.lang){ setLang(t.dataset.lang); return; }
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
  if(t.hasAttribute("data-repplat")){ S.repPlat=t.dataset.repplat; renderMain(); return; }
  if(t.dataset.repcamp){ drawerRepCamp(t.dataset.repcamp); return; }
  if(t.hasAttribute("data-fc-save")){ const s=sub(); if(!s||!canEdit()) return; const body=Object.assign({},s,{prevision:Object.assign({},fcState(s.id))}); delete body.id; save("subcuentas",s.id,body).then(()=>toast("Supuestos guardados")).catch(()=>{}); return; }
  if(t.dataset.goInteg){ leaveEditors(); S.view="sub"; S.subId=t.dataset.goInteg; S.tab="integraciones"; S.menu=false; rememberNav(); render(); window.scrollTo(0,0); return; }
  if(t.dataset.connect){ drawerConnect(t.dataset.connect); return; }
  if(t.hasAttribute("data-connect-wa")){ drawerConnectWA(); return; }
  if(t.hasAttribute("data-disconnect-wa")){ drawerDisconnectWA(); return; }
  if(t.hasAttribute("data-ag-save")){ agSave(); return; }
  if(t.hasAttribute("data-ag-reset")){ if(S.ag){ S.ag.sim=[]; agRedrawSim(); } return; }
  if(t.hasAttribute("data-ag-audio")){ const i=$("#ag-in"); if(i&&i.value.trim()){ const v=i.value; i.value=""; agSend(v,true); } else toast("Escribe primero lo que diría el audio"); return; }
  if(t.hasAttribute("data-ag-voz")){ const d=agState().d; say(d.presentacion||"Hola"); return; }
  if(t.dataset.say!==undefined&&t.hasAttribute("data-say")){ say(t.dataset.say); return; }
  if(t.dataset.iaToggle){ const c=S.data.conversaciones.find(x=>x.id===t.dataset.iaToggle); if(!c||!canEdit()) return; const body=Object.assign({},c,{iaPausada:!c.iaPausada}); delete body.id; save("conversaciones",c.id,body).then(()=>toast(body.iaPausada?"La llevas tú: la IA deja de contestar aquí":"La IA vuelve a atender esta conversación")).catch(()=>{}); return; }
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
  if((e.metaKey||e.ctrlKey)&&String(e.key).toLowerCase()==="k"){ e.preventDefault(); if($("#pal")) closePalette(); else openPalette(); return; }
  if(e.key==="Escape"){ if($("#pal")) closePalette(); else if($("#drawer").innerHTML) closeDrawer(); else if(S.menu){ S.menu=false; renderSide(); } }
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
document.addEventListener("change",e=>{ const el=e.target; if(!el) return;
  if(el.dataset&&el.dataset.calf!==undefined&&el.hasAttribute("data-calf")){ const h=new Set(S.calHidden||[]); if(el.checked) h.delete(el.dataset.calf); else h.add(el.dataset.calf); S.calHidden=[...h]; renderMain(); return; }
  if(el.id==="thr-canal"){ S.convCanal=el.value; renderMain(); return; }
  if(el.id==="quick"&&el.value!==""){ const r=RAPIDAS[+el.value], c=S.data.conversaciones.find(x=>x.id===S.convSel), k=c&&contacto(c.contactoId); const txt=tx(r[1]).replace(/\{nombre\}/g,firstName(k&&k.nombre));
    const ta=$("#draft"); S.draft=(S.draft&&S.draft.trim()?S.draft.trim()+" ":"")+txt; if(ta){ ta.value=S.draft; ta.focus(); } el.value=""; return; }
});
document.addEventListener("change",e=>{ const el=e.target; if(!el||!el.dataset) return;
  if(el.hasAttribute("data-ag-on")){ agSave(el.checked); return; }
  if(el.dataset.ag){ agSet(el.dataset.ag, el.type==="checkbox"?el.checked:el.type==="number"?+el.value:el.value); if(el.dataset.ag==="voz.tipo") renderMain(); }
});
document.addEventListener("input",e=>{
  if(e.target&&e.target.dataset&&e.target.dataset.ag&&e.target.type!=="checkbox"){ const el=e.target; agSet(el.dataset.ag, el.type==="number"?+el.value:el.value); if(el.dataset.ag==="presentacion"){ const ok=DISCLOSE.test(el.value); const hp=el.parentElement.querySelector(".help"); if(hp) hp.innerHTML=ok?tx("Se presenta como asistente virtual en el primer mensaje: así lo exige la ley europea de IA desde agosto de 2026."):`<span style="color:var(--bad);font-weight:600">${tx("Tiene que decir que es una asistente virtual o una IA. Sin eso no se puede encender.")}</span>`; } return; }
  if(e.target&&e.target.dataset&&e.target.dataset.fc&&S.subId){ const st=fcState(S.subId), k=e.target.dataset.fc; st[k]=k==="efi"?e.target.value:(+e.target.value||0); fcRefresh(S.subId); return; }
  onField(e);
  if(e.target.id==="thr-q"){ S.convQ=e.target.value; renderMain(); }
  if(e.target.id==="q"){ S.q=e.target.value; renderMain(); }
  if(e.target.id==="draft"){ S.draft=e.target.value; }
  if(e.target.id==="canal"){ S.draftCanal=e.target.value; }
});
document.addEventListener("submit",e=>{ if(e.target.id!=="ag-comp") return; e.preventDefault(); const i=$("#ag-in"); if(!i) return; const v=i.value; i.value=""; agSend(v,false); });
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

document.documentElement.lang=LANG;
i18nObs.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:I18N_ATTR});
render();
connect();
})();
