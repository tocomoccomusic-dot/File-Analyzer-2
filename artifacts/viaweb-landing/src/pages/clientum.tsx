import { useState, useEffect } from "react";
import { ClientumNavbar } from "@/components/layout/ClientumNavbar";
import { Phone, MessageCircle, MapPin, X, ChevronDown, Send } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { Linkedin } from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────────────────────── */

const ticker = [
  "+500 PyMEs confían en Clientum",
  "3 hs ahorradas por día en promedio",
  "80% de consultas resueltas automáticamente",
  "Presencia en Río Negro · Neuquén · CABA · Buenos Aires",
  "98% de satisfacción de clientes",
];

const problems = [
  {
    icon: "📝",
    title: "Consultas repetitivas",
    desc: 'Tu equipo responde "precio y stock" 50 veces por día por WhatsApp. Tiempo valioso tirado a la basura.',
  },
  {
    icon: "⏳",
    title: "Leads fríos",
    desc: "Un cliente escribe un domingo a las 14hs. Le respondés el lunes a las 9hs. Ya le compró a la competencia.",
  },
  {
    icon: "🗂️",
    title: "Caos administrativo",
    desc: "Pasando presupuestos de Excel a WhatsApp, y facturas de un sistema a otro, cruzando los dedos para no errarle.",
  },
];

const solutions = [
  {
    icon: "💬",
    title: "Chatbots IA para WhatsApp",
    desc: "Agentes que entienden el contexto, leen tu catálogo, responden como humanos y califican leads 24/7.",
  },
  {
    icon: "📊",
    title: "CRM Simple y Potente",
    desc: "Todos tus contactos y conversaciones en un solo lugar. Embudos visuales, etiquetas y recordatorios automáticos.",
  },
  {
    icon: "📈",
    title: "Reportes y Analítica",
    desc: "Dashboards en tiempo real con tiempos de respuesta, leads generados y rendimiento de agentes.",
  },
  {
    icon: "🔗",
    title: "Integración AFIP & ERP",
    desc: "Conectamos con tu facturador para emitir recibos automáticos al concretar una venta vía chat.",
  },
];

const panelTabs = [
  {
    id: "general",
    label: "Panel General",
    icon: "🏠",
    mockup: (
      <div className="bg-gray-900 rounded-xl p-4 text-xs text-white/80 space-y-3">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-white text-sm">Dashboard</span>
          <span className="text-white/40 text-[10px]">Hoy · 14:32</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Mensajes", value: "8,492", delta: "+14%" },
            { label: "Leads hoy", value: "23", delta: "+8%" },
            { label: "Tiempo ahor.", value: "42 hs", delta: "↑" },
          ].map((s) => (
            <div key={s.label} className="bg-white/5 rounded-lg p-2 text-center">
              <div className="text-primary font-extrabold text-base">{s.value}</div>
              <div className="text-white/40 text-[9px]">{s.label}</div>
              <div className="text-green-400 text-[9px]">{s.delta}</div>
            </div>
          ))}
        </div>
        <div className="bg-white/5 rounded-lg p-3">
          <div className="text-white/50 text-[10px] mb-2">Actividad reciente</div>
          {["Carlos R. preguntó por stock", "Nuevo lead: Óptica Norte", "Turno confirmado: 15hs"].map((a, i) => (
            <div key={i} className="flex items-center gap-2 py-1 border-b border-white/5 last:border-0">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span className="text-white/60 text-[10px]">{a}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "agente",
    label: "Agente IA",
    icon: "🤖",
    mockup: (
      <div className="bg-gray-900 rounded-xl p-4 text-xs flex flex-col h-full min-h-[220px]">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">IA</div>
          <div>
            <div className="text-white font-semibold text-xs">IA Ventas</div>
            <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" /><span className="text-white/40 text-[9px]">En línea</span></div>
          </div>
        </div>
        <div className="flex-1 space-y-2 overflow-hidden">
          <div className="flex gap-2"><div className="bg-white/10 text-white/70 rounded-lg px-3 py-1.5 text-[10px] max-w-[80%]">Hola, quiero saber el precio del producto X</div></div>
          <div className="flex gap-2 justify-end"><div className="bg-primary text-white rounded-lg px-3 py-1.5 text-[10px] max-w-[80%]">¡Hola! El producto X está en $45.000. ¿Te envío la ficha técnica? 📄</div></div>
          <div className="flex gap-2"><div className="bg-white/10 text-white/70 rounded-lg px-3 py-1.5 text-[10px] max-w-[80%]">Sí, y también quiero cotizar 5 unidades</div></div>
          <div className="flex gap-2 justify-end"><div className="bg-primary text-white rounded-lg px-3 py-1.5 text-[10px] max-w-[80%]">Perfecto. 5 unidades: $202.500 con descuento mayorista. ¿Reservamos?</div></div>
        </div>
        <div className="mt-2 flex gap-2">
          <input className="flex-1 bg-white/10 rounded-lg px-2 py-1 text-[10px] text-white/50 outline-none" placeholder="Escribí..." readOnly />
          <div className="bg-primary rounded-lg px-2 py-1 text-white text-[10px]">→</div>
        </div>
      </div>
    ),
  },
  {
    id: "agenda",
    label: "Agenda de Turnos",
    icon: "📅",
    mockup: (
      <div className="bg-gray-900 rounded-xl p-4 text-xs text-white/80">
        <div className="flex justify-between items-center mb-3">
          <span className="font-bold text-white text-sm">Agenda · Hoy</span>
          <span className="bg-primary/20 text-primary text-[9px] px-2 py-0.5 rounded-full">6 turnos</span>
        </div>
        {[
          { hora: "09:00", nombre: "Martín Fernández", tipo: "Consulta inicial", color: "bg-blue-500" },
          { hora: "10:30", nombre: "Ana González", tipo: "Seguimiento CRM", color: "bg-green-500" },
          { hora: "11:00", nombre: "Carlos Ruiz", tipo: "Demo producto", color: "bg-primary" },
          { hora: "14:00", nombre: "Laura Pérez", tipo: "Cierre de venta", color: "bg-purple-500" },
          { hora: "15:30", nombre: "Diego Morales", tipo: "Consulta técnica", color: "bg-yellow-500" },
        ].map((t) => (
          <div key={t.hora} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
            <span className="text-white/40 text-[10px] w-10 shrink-0">{t.hora}</span>
            <div className={`w-1.5 h-full min-h-[28px] rounded-full ${t.color} shrink-0`} />
            <div>
              <div className="text-white text-[10px] font-semibold">{t.nombre}</div>
              <div className="text-white/40 text-[9px]">{t.tipo}</div>
            </div>
            <span className="ml-auto text-[9px] bg-white/5 px-2 py-0.5 rounded-full text-white/50">Confirmado</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: "📊",
    mockup: (
      <div className="bg-gray-900 rounded-xl p-4 text-xs text-white/80">
        <div className="font-bold text-white text-sm mb-3">Analytics · Junio 2026</div>
        <div className="space-y-3">
          {[
            { label: "Consultas resueltas por IA", pct: 82, color: "bg-primary" },
            { label: "Tasa de conversión de leads", pct: 34, color: "bg-green-500" },
            { label: "Tiempo de respuesta promedio", pct: 12, color: "bg-blue-500", suffix: "seg" },
            { label: "Satisfacción del cliente", pct: 97, color: "bg-purple-500" },
          ].map((m) => (
            <div key={m.label}>
              <div className="flex justify-between mb-1">
                <span className="text-white/60 text-[10px]">{m.label}</span>
                <span className="font-bold text-white text-[10px]">{m.pct}{m.suffix ?? "%"}</span>
              </div>
              <div className="bg-white/10 rounded-full h-1.5">
                <div className={`${m.color} h-1.5 rounded-full`} style={{ width: `${m.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "pedidos",
    label: "Pedidos",
    icon: "📦",
    mockup: (
      <div className="bg-gray-900 rounded-xl p-4 text-xs text-white/80">
        <div className="flex justify-between items-center mb-3">
          <span className="font-bold text-white text-sm">Pedidos Recientes</span>
          <span className="text-primary text-[10px] font-semibold">+$840k hoy</span>
        </div>
        {[
          { id: "#4821", cliente: "Distribuidora Vega", monto: "$145.000", estado: "Entregado", color: "text-green-400" },
          { id: "#4822", cliente: "Óptica Norte", monto: "$89.500", estado: "En camino", color: "text-blue-400" },
          { id: "#4823", cliente: "Taller Roca", monto: "$212.000", estado: "Confirmado", color: "text-yellow-400" },
          { id: "#4824", cliente: "Panadería El Sol", monto: "$34.000", estado: "Pendiente", color: "text-white/50" },
        ].map((p) => (
          <div key={p.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
            <div>
              <div className="text-white text-[10px] font-semibold">{p.id} · {p.cliente}</div>
              <div className={`text-[9px] ${p.color}`}>{p.estado}</div>
            </div>
            <span className="text-white font-bold text-[10px]">{p.monto}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "integraciones",
    label: "Integraciones",
    icon: "🔌",
    mockup: (
      <div className="bg-gray-900 rounded-xl p-4 text-xs text-white/80">
        <div className="font-bold text-white text-sm mb-3">Integraciones activas</div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: "WhatsApp API", status: "Conectado", ok: true },
            { name: "Google Sheets", status: "Conectado", ok: true },
            { name: "MercadoLibre", status: "Conectado", ok: true },
            { name: "AFIP / Factura", status: "Conectado", ok: true },
            { name: "WooCommerce", status: "Conectado", ok: true },
            { name: "MercadoPago", status: "Pendiente", ok: false },
          ].map((int) => (
            <div key={int.name} className="bg-white/5 rounded-lg p-2 flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${int.ok ? "bg-green-400" : "bg-yellow-400"}`} />
              <div>
                <div className="text-white text-[10px] font-semibold">{int.name}</div>
                <div className={`text-[9px] ${int.ok ? "text-green-400" : "text-yellow-400"}`}>{int.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const industries = [
  {
    icon: "📦", name: "Distribuidoras",
    problem: "Presupuestos lentos en Excel, consultas de stock que se acumulan y falta de seguimiento a clientes mayoristas.",
    solution: "Bot que consulta stock en tiempo real, genera presupuestos y cotiza automáticamente en 2 minutos.",
    stats: ["-35% tiempo adm.", "+22% cierre ventas", "-40% errores stock"],
    quote: "Pasamos de armar presupuestos a mano todo el día a generarlos al instante en un chat.",
    author: "Sergio R. · Distribuidora Vega, Córdoba",
  },
  {
    icon: "🏠", name: "Inmobiliarias",
    problem: "Consultas de propiedades repetitivas, agendado manual de visitas y seguimiento perdido de interesados.",
    solution: "Bot que filtra propiedades, agenda visitas automáticamente y envía fichas técnicas al instante.",
    stats: ["-50% consultas manuales", "+30% visitas agendadas", "-60% tiempo respuesta"],
    quote: "El chatbot resuelve el 80% de las preguntas de mis clientes automáticamente. Mis agentes ahora venden más.",
    author: "Luciana G. · Inmobiliaria, Mendoza",
  },
  {
    icon: "📋", name: "Est. Contables",
    problem: "Consultas de AFIP, vencimientos y documentación que saturan el equipo contable con tareas repetitivas.",
    solution: "Bot que responde consultas frecuentes, envía alertas de vencimiento y gestiona turnos de atención.",
    stats: ["-45% consultas repetitivas", "+25% capacidad atención", "-70% tiempo en respuestas"],
    quote: "Los reportes que antes me llevaban días ahora se hacen solos. Tengo más tiempo para asesorar clientes.",
    author: "Laura M. · Estudio Contable, Gral. Roca",
  },
  {
    icon: "🔧", name: "Talleres",
    problem: "Turnos gestionados por teléfono, presupuestos demorados y clientes sin seguimiento post-servicio.",
    solution: "Bot que agenda turnos, envía presupuestos por foto de vehículo y automatiza recordatorios.",
    stats: ["-42% ausencias", "+40% turnos", "-67% tiempo"],
    quote: "En 3 días ya tenía todo funcionando. El soporte es increíble y los resultados son reales.",
    author: "Carlos R. · Taller Mecánico, Neuquén",
  },
  {
    icon: "🛒", name: "Comercios",
    problem: "Stock desactualizado, preguntas por precios en redes y pérdida de ventas por respuestas lentas.",
    solution: "Bot sincronizado con stock y catálogo de precios, responde 24/7 y procesa pedidos vía chat.",
    stats: ["-90% tiempo cotización", "+120 pedidos/mes", "+22% conversión"],
    quote: "El ROI fue visible en la primera semana. Vendemos más porque respondemos más rápido.",
    author: "Diego M. · Comercio, Bahía Blanca",
  },
];

const fieldTests = [
  {
    name: "La Paella de Carlitos",
    type: "🍽️ Restaurante · San Martín de los Andes",
    challenge: "Gestión manual de reservas por WhatsApp con errores, dobles turnos y pérdida de mesas.",
    result: "Bot que agenda reservas, confirma automáticamente y manda recordatorios 2hs antes.",
    stats: [{ label: "Reservas/mes", value: "+180%" }, { label: "No-shows", value: "-65%" }, { label: "Hs admin", value: "-4 hs/día" }],
    quote: "Ahora el bot llena el restaurante solo. Yo me enfoco en la cocina.",
    color: "from-orange-500/20 to-red-500/10",
  },
  {
    name: "Óptica Visión Total",
    type: "👓 Óptica · Neuquén Capital",
    challenge: "Cientos de consultas por precios de lentes, disponibilidad y turnos que desbordaban al equipo.",
    result: "Agente IA entrenado con catálogo completo, agenda turnos y cotiza en tiempo real 24/7.",
    stats: [{ label: "Consultas atendidas", value: "94% IA" }, { label: "Tiempo respuesta", value: "8 seg" }, { label: "Ventas", value: "+31%" }],
    quote: "Nuestros vendedores solo atienden a quienes ya quieren comprar. El bot filtra todo.",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    name: "Distribuidora El Gaucho",
    type: "📦 Mayorista · General Roca, Río Negro",
    challenge: "Pedidos mayoristas tomados por WhatsApp, con errores de stock y demoras de 48hs en cotizar.",
    result: "Sistema integrado con ERP que cotiza, verifica stock y genera orden de compra en 90 segundos.",
    stats: [{ label: "Tiempo cotización", value: "90 seg" }, { label: "Errores de stock", value: "-89%" }, { label: "Pedidos/mes", value: "+220" }],
    quote: "Clientum sincronizó nuestro sistema viejo con WhatsApp. Impensable antes.",
    color: "from-green-500/20 to-emerald-500/10",
  },
];

const plans = [
  {
    name: "Free",
    subtitle: "Para explorar la IA sin riesgos.",
    monthly: 0,
    annual: 0,
    displayFree: true,
    features: ["CRM hasta 50 contactos", "1 chatbot (100 msgs/mes)", "1 integración básica"],
    notIncluded: ["Chatbot IA avanzado", "Integraciones ERP/AFIP", "Soporte prioritario"],
    cta: "Empezar gratis",
    highlight: false,
  },
  {
    name: "Starter",
    subtitle: "Primera automatización real.",
    monthly: 149000,
    annual: 119200,
    features: ["CRM 500 contactos", "Chatbot WhatsApp básico", "1 integración completa", "Soporte email/WA"],
    notIncluded: ["Chatbot IA entrenado", "ERP + Facturación", "Multi-agente"],
    cta: "Elegir Starter",
    highlight: false,
  },
  {
    name: "Pro",
    subtitle: "Automatización total de tu operación.",
    monthly: 299000,
    annual: 239200,
    features: ["CRM ilimitado", "Chatbot IA con entrenamiento", "3 integraciones", "ERP básico (stock + pedidos)", "Agenda de turnos IA", "Analytics avanzado"],
    notIncluded: ["Multi-agente avanzado", "Acceso API completa"],
    cta: "Elegir Plan Pro",
    highlight: true,
    badge: "⚡ Más Popular",
  },
  {
    name: "Business",
    subtitle: "Multi-agente IA y operaciones complejas.",
    monthly: 549000,
    annual: 439200,
    features: ["Todo lo de Pro", "Multi-agente avanzado", "ERP + Facturación AFIP", "Acceso API completa", "Clientum Studio incluido", "Soporte dedicado"],
    notIncluded: [],
    cta: "Elegir Business",
    highlight: false,
  },
];

const integrations = [
  "WhatsApp API", "Gmail", "Google Sheets", "Mercado Libre",
  "WooCommerce", "Shopify", "AFIP", "Dolibarr ERP",
  "MercadoPago", "Tango Gestión",
];

const partnerLevels = [
  {
    level: "Nivel 01", icon: "🔗", name: "Referidor",
    desc: "Recomendá Clientum a tu cartera de clientes o red de contactos y cobrá comisiones limpias.",
    highlight: "15%", subtext: "comisión recurrente mensual", cta: "Ser Referidor",
  },
  {
    level: "Nivel 02", icon: "⭐", name: "Reseller",
    desc: "Comprás licencias a precio diferencial mayorista y las revendés con tu propio margen.",
    highlight: "30%", subtext: "descuento sobre lista oficial", cta: "Ser Reseller",
  },
  {
    level: "Nivel 03", icon: "🏆", name: "White Label",
    desc: "Marca blanca completa. La infraestructura corre bajo tu propio dominio y logo corporativo.",
    highlight: "WL", subtext: "Personalización de dominio", cta: "Ser White Label",
  },
];

const steps = [
  { num: "1", icon: "🗓️", title: "Diagnóstico de 45 minutos gratis", desc: "Hoy mismo: analizamos tus procesos y cuellos de botella reales de tu PyME." },
  { num: "2", icon: "⚙️", title: "Configuración y Setup de Bots", desc: "Días 1 a 3: nosotros nos encargamos del código, conexiones de API y base de conocimiento." },
  { num: "3", icon: "🎓", title: "Capacitación de 1 hora al equipo", desc: "Días 3 a 5: entrenamiento sencillo y directo a tus asesores de atención comercial." },
  { num: "✓", icon: "🚀", title: "¡Operativo y generando valor! Semana 1", desc: "Primeros resultados, chats respondidos automáticamente y total tranquilidad de stock." },
];

const testimonials = [
  { quote: "Antes tardábamos 2 horas en hacer presupuestos. Con Clientum se generan en 30 segundos.", name: "Martín F.", role: "Distribuidora · Córdoba", initial: "M" },
  { quote: "El chatbot resuelve el 80% de las preguntas de mis clientes automáticamente. Mis agentes ahora venden más.", name: "Luciana G.", role: "Inmobiliaria · Mendoza", initial: "L" },
  { quote: "En 3 días ya tenía todo funcionando. El soporte es increíble y los resultados son reales.", name: "Carlos R.", role: "Taller Mecánico · Neuquén", initial: "C" },
  { quote: "Los reportes que antes me llevaban días ahora se hacen solos. Tengo más tiempo para asesorar clientes.", name: "Laura M.", role: "Estudio Contable · Gral. Roca", initial: "L" },
  { quote: "El ROI fue visible en la primera semana. Vendemos más porque respondemos más rápido.", name: "Diego M.", role: "Comercio · Bahía Blanca", initial: "D" },
  { quote: "No necesité saber nada técnico. El equipo de Clientum hizo todo el setup.", name: "Andrea P.", role: "Agencia · Rosario", initial: "A" },
];

const faqs = [
  { q: "¿Necesito tener conocimientos técnicos previos?", a: "No. Clientum está diseñado para que cualquier equipo pueda usarlo sin conocimientos de IT. Nuestro equipo hace todo el setup por vos." },
  { q: "¿Cuánto tiempo lleva la puesta en marcha inicial?", a: "El setup completo tarda entre 3 y 7 días hábiles. En la primera semana ya tenés el sistema operativo generando valor." },
  { q: "¿Se integra nativamente con WooCommerce o Shopify?", a: "Sí. Tenemos integraciones nativas con WooCommerce, Shopify, MercadoLibre y más. En tu diagnóstico gratis evaluamos la mejor opción para tu caso." },
  { q: "¿El chatbot funciona sobre nuestro número de WhatsApp existente?", a: "Sí, conectamos el bot a tu número de WhatsApp Business existente mediante la API oficial de Meta." },
  { q: "¿Los precios están expresados en pesos argentinos?", a: "Sí. Todos los precios son en ARS. Facturamos en Argentina y aceptamos todos los medios de pago locales." },
  { q: "¿Puedo cancelar si no me convence?", a: "Sí. No hay contratos a largo plazo. Podés cancelar cuando quieras sin penalidades. Tu satisfacción es nuestra prioridad." },
];

const rubros = [
  "Distribuidora / Mayorista",
  "Inmobiliaria",
  "Estudio Contable / Legal",
  "Taller / Servicios",
  "Comercio / Retail",
  "Restaurante / Gastronomía",
  "Salud / Consultorio",
  "Agencia / Marketing",
  "Otro",
];

const formatARS = (n: number) => "$ " + Math.round(n).toLocaleString("es-AR");
const formatPrice = (n: number) =>
  n === 0 ? "$0" : `$${(n / 1000).toFixed(0)}k`;

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */

export default function Clientum() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activePanelTab, setActivePanelTab] = useState(0);
  const [planPeriod, setPlanPeriod] = useState<"monthly" | "annual">("monthly");
  const [showNotification, setShowNotification] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{ from: "user" | "bot"; text: string }[]>([
    { from: "bot", text: "¡Hola! 👋 Soy el asistente de Clientum. ¿En qué puedo ayudarte hoy?" },
  ]);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // ROI calculator
  const [employees, setEmployees] = useState(5);
  const [hoursLost, setHoursLost] = useState(3);
  const [hourCost, setHourCost] = useState(15000);
  const [missedConsults, setMissedConsults] = useState(30);
  const [avgTicket, setAvgTicket] = useState(50000);

  const operativeCost = employees * hoursLost * hourCost * 22;
  const lostSales = missedConsults * avgTicket * 0.3;
  const totalImpact = operativeCost + lostSales;

  // Countdown to July 6, 2026
  useEffect(() => {
    const target = new Date("2026-07-06T00:00:00-03:00").getTime();
    const update = () => {
      const diff = target - Date.now();
      if (diff <= 0) return;
      setCountdown({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  // Show social proof notification after 3 seconds
  useEffect(() => {
    const t = setTimeout(() => setShowNotification(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const sendChat = () => {
    if (!chatMessage.trim()) return;
    const msg = chatMessage.trim();
    setChatMessage("");
    setChatHistory((h) => [...h, { from: "user", text: msg }]);
    setTimeout(() => {
      setChatHistory((h) => [
        ...h,
        {
          from: "bot",
          text: "Gracias por tu consulta. Para darte más información, ¡hablemos por WhatsApp! 📱",
        },
      ]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Floating Social Proof Notification ── */}
      {showNotification && (
        <div className="fixed bottom-24 left-4 z-50 bg-white shadow-xl border border-gray-100 rounded-2xl px-4 py-3 flex items-center gap-3 max-w-xs animate-[slideInLeft_0.4s_ease-out]">
          <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-white text-sm font-bold shrink-0">C</div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-secondary">Carlos R. acaba de pedir su diagnóstico</p>
            <p className="text-[10px] text-gray-400">📍 Neuquén · hace 2 minutos</p>
          </div>
          <button onClick={() => setShowNotification(false)} className="text-gray-300 hover:text-gray-500">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* ── Floating AI Chat Widget ── */}
      <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-2">
        {showChat && (
          <div className="w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden mb-1">
            <div className="bg-secondary px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">🤖</div>
                <div>
                  <div className="text-white text-xs font-bold">Asistente Clientum</div>
                  <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" /><span className="text-white/50 text-[9px]">En línea</span></div>
                </div>
              </div>
              <button onClick={() => setShowChat(false)} className="text-white/50 hover:text-white"><X className="w-4 h-4" /></button>
            </div>
            <div className="h-48 overflow-y-auto p-3 space-y-2 bg-gray-50">
              {chatHistory.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] text-xs px-3 py-2 rounded-xl ${m.from === "user" ? "bg-primary text-white" : "bg-white text-gray-700 border border-gray-100 shadow-sm"}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2 border-t border-gray-100 flex gap-2">
              <input
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendChat()}
                placeholder="Escribí tu consulta..."
                className="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-primary"
              />
              <button onClick={sendChat} className="bg-primary text-white rounded-lg px-3 py-2">
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
        <button
          onClick={() => setShowChat(!showChat)}
          className="w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center text-white text-xl hover:bg-primary/90 transition-all hover:scale-110"
          aria-label="Chat con Clientum IA"
        >
          {showChat ? "×" : "🤖"}
        </button>
      </div>

      <ClientumNavbar />

      {/* ── Launch Offer Bar ── */}
      <div className="bg-secondary text-white text-xs font-semibold py-2 text-center px-4">
        🏷️ Precio de lanzamiento por tiempo limitado &mdash; Reservá tu diagnóstico hoy{" "}
        <a href="#planes" className="text-primary underline underline-offset-2 ml-1">Ver planes →</a>
      </div>

      {/* ── Stats Ticker ── */}
      <div className="bg-primary text-white text-xs font-semibold overflow-hidden whitespace-nowrap py-2">
        <div className="inline-flex animate-[marquee_32s_linear_infinite] gap-16">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <span className="text-white/50">|</span> {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-block bg-primary/20 border border-primary/30 text-primary text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
                Clientum · IA para PyMEs · by Viaweb
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                Tu PyME merece<br />
                <span className="text-primary">trabajar con IA.</span>
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-lg">
                Dejá de hacerlo todo a mano. Automatizá consultas por WhatsApp,
                presupuestos y seguimiento de ventas.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href="https://wa.me/5492984510883?text=Hola%2C%20quiero%20mi%20diagn%C3%B3stico%20gratis%20de%20Clientum"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  🚀 Diagnóstico gratuito
                </a>
                <a
                  href="https://wa.me/5492984510883"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-white/10 transition-all"
                >
                  Ver demo por WhatsApp
                </a>
              </div>
              <div className="flex flex-wrap gap-5 text-xs text-white/50">
                <span>✓ Setup en 7 días</span>
                <span>✓ Soporte local</span>
                <span>✓ Sin contratos</span>
              </div>
            </div>

            {/* Right — Hero Mockup */}
            <div className="hidden md:flex flex-col gap-3">
              {/* Chat widget */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">IA</div>
                  <div>
                    <div className="text-white text-xs font-semibold">IA Ventas · WhatsApp</div>
                    <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" /><span className="text-white/40 text-[10px]">Respondiendo ahora</span></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2"><div className="bg-white/10 text-white/70 rounded-lg px-3 py-2 text-xs max-w-[75%]">Hola, ¿tienen stock del producto X?</div></div>
                  <div className="flex gap-2 justify-end"><div className="bg-primary text-white rounded-lg px-3 py-2 text-xs max-w-[75%]">¡Hola! Sí, tenemos 48 unidades. ¿Te armo un presupuesto ahora? 🎯</div></div>
                  <div className="flex gap-2"><div className="bg-white/10 text-white/70 rounded-lg px-3 py-2 text-xs max-w-[75%]">Sí, necesito 10 unidades</div></div>
                  <div className="flex gap-2 justify-end"><div className="bg-primary text-white rounded-lg px-3 py-2 text-xs max-w-[75%]">10 u. = $450.000 con envío incluido. Reservamos ahora con el 50%. ¿Confirmás? ✅</div></div>
                </div>
              </div>
              {/* Metric cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-extrabold text-primary">8,492</div>
                  <div className="text-xs text-white/50 mt-1">Mensajes resueltos</div>
                  <div className="text-[10px] text-green-400 mt-0.5">+14% este mes</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-extrabold text-primary">42 hs</div>
                  <div className="text-xs text-white/50 mt-1">Tiempo ahorrado</div>
                  <div className="text-[10px] text-green-400 mt-0.5">Esta semana</div>
                </div>
              </div>
              {/* Lead badge */}
              <div className="bg-primary/20 border border-primary/40 rounded-xl px-4 py-2.5 flex items-center gap-3">
                <span className="text-lg">🎯</span>
                <div>
                  <div className="text-primary text-xs font-bold">Nuevo Lead CRM</div>
                  <div className="text-white/60 text-[10px]">Ana González fue clasificada como Lead Caliente</div>
                </div>
                <span className="ml-auto text-[10px] bg-primary text-white px-2 py-0.5 rounded-full">Ahora</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
            {[
              { value: "+500", label: "PyMEs activas" },
              { value: "3 hs", label: "ahorradas por día" },
              { value: "80%", label: "consultas automáticas" },
              { value: "98%", label: "satisfacción" },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                <div className="text-3xl font-extrabold text-primary mb-1">{s.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section id="problema" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">El Problema</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">
              Tu equipo hace trabajo de robots.
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Horas perdidas copiando y pegando datos. Clientes esperando respuestas. Ventas que se
              enfrían por falta de seguimiento rápido.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution ── */}
      <section id="soluciones" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">La Solución</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">
              Contratá a tu empleado más eficiente.
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Clientum es un ecosistema completo para automatizar la operación de tu PyME.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((s) => (
              <div key={s.title} className="bg-secondary rounded-2xl p-6 text-white hover:scale-[1.02] transition-transform">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pipeline de Ventas CRM ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">CRM Inteligente</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">
              Pipeline de Ventas visual y simple
            </h2>
            <p className="text-gray-500 mt-3">Nunca más un lead perdido. Tu embudo de ventas siempre actualizado, en tiempo real.</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
            {[
              {
                title: "🔵 Nuevos",
                count: 8,
                color: "border-blue-200 bg-blue-50",
                headerColor: "text-blue-600",
                cards: [
                  { name: "Ana González", tag: "WhatsApp", time: "Hace 5 min" },
                  { name: "Comercial Norte SRL", tag: "Web", time: "Hace 23 min" },
                  { name: "Martín López", tag: "WhatsApp", time: "Hace 1 hs" },
                ],
              },
              {
                title: "🟡 Cotizado",
                count: 5,
                color: "border-yellow-200 bg-yellow-50",
                headerColor: "text-yellow-600",
                cards: [
                  { name: "Distribuidora Sol", tag: "$145k", time: "Ayer" },
                  { name: "Óptica Visión", tag: "$89k", time: "Ayer" },
                ],
              },
              {
                title: "🟢 Ganados",
                count: 12,
                color: "border-green-200 bg-green-50",
                headerColor: "text-green-600",
                cards: [
                  { name: "Taller El Gaucho", tag: "✅ Cerrado", time: "Hoy 10:00" },
                  { name: "Panadería El Sol", tag: "✅ Cerrado", time: "Hoy 09:15" },
                ],
              },
            ].map((col) => (
              <div key={col.title} className={`rounded-xl border-2 ${col.color} p-4`}>
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-sm font-bold ${col.headerColor}`}>{col.title}</span>
                  <span className="text-xs bg-white text-gray-500 px-2 py-0.5 rounded-full shadow-sm font-semibold">{col.count}</span>
                </div>
                <div className="space-y-2">
                  {col.cards.map((card) => (
                    <div key={card.name} className="bg-white rounded-lg p-3 shadow-sm border border-white">
                      <div className="font-semibold text-secondary text-xs">{card.name}</div>
                      <div className="flex justify-between mt-1">
                        <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{card.tag}</span>
                        <span className="text-[10px] text-gray-400">{card.time}</span>
                      </div>
                    </div>
                  ))}
                  <div className="bg-white/50 border-2 border-dashed border-gray-200 rounded-lg p-2 text-center text-[10px] text-gray-400 cursor-default">
                    + Nuevo lead
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Panel Tour ── */}
      <section id="panel" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Tour del Panel</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">
              Todo tu negocio en un solo lugar
            </h2>
            <p className="text-gray-500 mt-3">Un panel diseñado para PyMEs. Sin complejidad innecesaria.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {/* Tab buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {panelTabs.map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePanelTab(i)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    activePanelTab === i
                      ? "bg-secondary text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
            {/* Tab content */}
            <div className="bg-gray-900 rounded-2xl p-1 shadow-xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 text-center text-white/30 text-[10px]">clientumcrm.com.ar · {panelTabs[activePanelTab].label}</div>
              </div>
              <div className="p-4">
                {panelTabs[activePanelTab].mockup}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Clientum Studio ── */}
      <section id="studio" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary/20 border border-primary/40 text-primary text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
                Nuevo · Clientum Studio
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
                Creá videos<br />
                <span className="text-primary">promocionales con IA</span>
              </h2>
              <p className="text-white/70 mb-6 text-sm leading-relaxed">
                Generá contenido de marketing para redes sociales en minutos. Scripts, locución con IA, imágenes y edición automática. Sin cámaras, sin locutores, sin agencia.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "🎬 Videos para Instagram, TikTok y YouTube Shorts",
                  "🎙️ Locución con IA en español rioplatense",
                  "🖼️ Imágenes de producto generadas con IA",
                  "📋 Scripts de venta redactados automáticamente",
                  "⚡ Listo en menos de 10 minutos",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/80">
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5492984510883?text=Quiero%20saber%20m%C3%A1s%20sobre%20Clientum%20Studio"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-primary/90 transition-all hover:-translate-y-0.5"
              >
                Conocer Clientum Studio →
              </a>
            </div>
            <div className="relative">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl">
                <div className="text-xs text-white/40 uppercase tracking-widest mb-3">Studio · Preview</div>
                <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/60" />
                  <div className="relative text-center">
                    <div className="text-4xl mb-2">🎬</div>
                    <p className="text-white/80 text-xs font-semibold">Video generado con IA</p>
                    <p className="text-white/40 text-[10px]">Distribuidora El Sol · Oferta de verano</p>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-black/60 rounded-lg px-3 py-1.5 text-[10px] text-white/70">
                    🎙️ "Encontrá todo lo que necesitás en Distribuidora El Sol, con los mejores precios de la zona..."
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {["Script IA ✅", "Voz IA ✅", "Edición ✅"].map((s) => (
                    <div key={s} className="bg-white/5 rounded-lg p-2 text-center text-[10px] text-white/60">{s}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROI Calculator ── */}
      <section id="calculadora" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Calculadora de ROI</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">
              ¿Cuánto te cuesta hacer el trabajo a mano?
            </h2>
            <p className="text-gray-500 mt-3">Calculá el impacto económico de no tener procesos automatizados.</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
              {[
                { label: "Empleados en administración/ventas", value: employees, setter: setEmployees, min: 1, max: 20, display: String(employees) },
                { label: "Horas perdidas por día (tareas repetitivas)", value: hoursLost, setter: setHoursLost, min: 1, max: 8, display: `${hoursLost} hs` },
                { label: "Costo por hora promedio (ARS)", value: hourCost, setter: setHourCost, min: 5000, max: 50000, step: 1000, display: `$${(hourCost / 1000).toFixed(0)}k` },
                { label: "Consultas sin respuesta por mes", value: missedConsults, setter: setMissedConsults, min: 0, max: 200, display: String(missedConsults) },
                { label: "Ticket promedio de venta (ARS)", value: avgTicket, setter: setAvgTicket, min: 10000, max: 500000, step: 5000, display: `$${(avgTicket / 1000).toFixed(0)}k` },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="font-bold text-secondary">{item.display}</span>
                  </div>
                  <input
                    type="range" min={item.min} max={item.max}
                    step={"step" in item ? item.step : 1}
                    value={item.value}
                    onChange={(e) => item.setter(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>
              ))}
            </div>
            <div className="bg-secondary rounded-2xl p-8 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold mb-6 text-white/50 uppercase tracking-widest">Tu costo invisible mensual</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">Costo operativo por horas perdidas</span>
                    <span className="font-bold text-lg">{formatARS(operativeCost)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">Ventas perdidas (30% cierre)</span>
                    <span className="font-bold text-lg">{formatARS(lostSales)}</span>
                  </div>
                  <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                    <span className="font-semibold">Impacto Total Negativo</span>
                    <span className="font-extrabold text-2xl text-primary">{formatARS(totalImpact)}</span>
                  </div>
                </div>
                <div className="bg-primary/20 border border-primary/30 rounded-xl p-4">
                  <p className="text-sm text-white/80">
                    <strong className="text-primary">Clientum Pro cuesta solo $299k al mes.</strong><br />
                    Tu ROI pagando el sistema sería inmediato.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/5492984510883?text=Quiero%20recuperar%20ese%20dinero%20con%20Clientum"
                target="_blank" rel="noreferrer"
                className="mt-6 block text-center bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                Recuperar ese dinero →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Por qué ahora ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Por qué ahora</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">
              El mercado ya cambió. ¿Tu PyME también?
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Las PyMEs que adoptan IA hoy tienen ventaja competitiva real el año próximo.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { stat: "54%", desc: "de las consultas de clientes llegan fuera del horario comercial" },
              { stat: "80%", desc: "de compradores eligen al primero que responde, sin comparar precio" },
              { stat: "49%", desc: "de las PyMEs argentinas perdió ventas por respuesta lenta en 2024" },
              { stat: "70%", desc: "reducción de costos operativos con procesos automatizados" },
              { stat: "64%", desc: "de los consumidores prefieren resolver dudas por chat antes que por teléfono" },
              { stat: "66%", desc: "de las PyMEs que adoptaron IA reportaron más ventas en el primer trimestre" },
            ].map((item) => (
              <div key={item.stat} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:shadow-sm transition-shadow">
                <div className="text-4xl font-extrabold text-primary mb-3">{item.stat}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry Cases ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Casos por Sector</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">
              ¿Cuál es tu rubro? Mirá cómo lo resolvemos
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {industries.map((ind, i) => (
              <button
                key={ind.name}
                onClick={() => setActiveIndustry(i)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeIndustry === i
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary"
                }`}
              >
                {ind.icon} {ind.name}
              </button>
            ))}
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-secondary mb-2 text-sm uppercase tracking-wide">El problema</h3>
                <p className="text-gray-500 text-sm mb-6">{industries[activeIndustry].problem}</p>
                <h3 className="font-bold text-secondary mb-2 text-sm uppercase tracking-wide">La solución Clientum</h3>
                <p className="text-gray-500 text-sm mb-6">{industries[activeIndustry].solution}</p>
                <div className="flex flex-wrap gap-2">
                  {industries[activeIndustry].stats.map((s) => (
                    <span key={s} className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
              <div className="bg-secondary rounded-xl p-6 text-white flex flex-col justify-between">
                <p className="text-white/80 italic text-sm mb-4">
                  &ldquo;{industries[activeIndustry].quote}&rdquo;
                </p>
                <span className="text-primary text-xs font-bold">— {industries[activeIndustry].author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="planes" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Planes</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">
              Escalá a tu ritmo.
            </h2>
            <p className="text-gray-500 mt-3">Sin contratos a largo plazo. Resultados desde el día 1.</p>

            {/* Period toggle */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className={`text-sm font-semibold ${planPeriod === "monthly" ? "text-secondary" : "text-gray-400"}`}>Mensual</span>
              <button
                onClick={() => setPlanPeriod(planPeriod === "monthly" ? "annual" : "monthly")}
                className={`relative w-12 h-6 rounded-full transition-colors ${planPeriod === "annual" ? "bg-primary" : "bg-gray-200"}`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${planPeriod === "annual" ? "translate-x-7" : "translate-x-1"}`} />
              </button>
              <span className={`text-sm font-semibold flex items-center gap-2 ${planPeriod === "annual" ? "text-secondary" : "text-gray-400"}`}>
                Anual
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">-20%</span>
              </span>
            </div>

            {/* Countdown */}
            <div className="mt-6 inline-flex items-center gap-3 bg-secondary text-white rounded-2xl px-5 py-3">
              <span className="text-xs text-white/60">⏱️ Esta oferta expira en:</span>
              {[
                { label: "días", val: countdown.days },
                { label: "hs", val: countdown.hours },
                { label: "min", val: countdown.minutes },
                { label: "seg", val: countdown.seconds },
              ].map((u) => (
                <div key={u.label} className="text-center">
                  <div className="text-xl font-extrabold text-primary w-10 text-center">{String(u.val).padStart(2, "0")}</div>
                  <div className="text-[9px] text-white/40 uppercase">{u.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all ${
                  plan.highlight
                    ? "bg-primary text-white shadow-xl scale-[1.03] ring-2 ring-primary/40"
                    : "bg-white border border-gray-100 shadow-sm text-secondary"
                }`}
              >
                {plan.badge && (
                  <div className="text-xs font-bold mb-3 opacity-90">{plan.badge}</div>
                )}
                <div>
                  <h3 className={`text-lg font-extrabold mb-0.5 ${plan.highlight ? "text-white" : "text-secondary"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mb-4 ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>{plan.subtitle}</p>
                  <div className={`text-3xl font-extrabold mb-0.5 ${plan.highlight ? "text-white" : "text-secondary"}`}>
                    {plan.displayFree ? "$0" : formatPrice(planPeriod === "annual" ? plan.annual : plan.monthly)}
                  </div>
                  <div className={`text-xs mb-5 ${plan.highlight ? "text-white/60" : "text-gray-400"}`}>
                    {plan.displayFree ? "siempre gratis" : `ARS / ${planPeriod === "annual" ? "mes (facturado anual)" : "mes"}`}
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {plan.features.map((f) => (
                      <li key={f} className={`text-xs flex gap-2 ${plan.highlight ? "text-white/90" : "text-gray-600"}`}>
                        <span className={plan.highlight ? "text-white" : "text-primary"}>✓</span> {f}
                      </li>
                    ))}
                    {plan.notIncluded.length > 0 && plan.notIncluded.map((f) => (
                      <li key={f} className={`text-xs flex gap-2 ${plan.highlight ? "text-white/40" : "text-gray-300"}`}>
                        <span>✗</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://wa.me/5492984510883"
                  target="_blank" rel="noreferrer"
                  className={`block text-center text-sm font-bold px-4 py-2.5 rounded-full transition-all ${
                    plan.highlight
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-secondary text-white hover:bg-secondary/80"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrations ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Ecosistema Abierto</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary mt-2">
              Sincronizá con tus herramientas de todos los días
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {integrations.map((int) => (
              <span key={int} className="bg-white text-gray-700 font-semibold text-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                {int}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            ¿Usás otro sistema administrativo? Lo evaluamos y desarrollamos a medida en tu diagnóstico gratis.
          </p>
        </div>
      </section>

      {/* ── Partners ── */}
      <section id="partners" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Programa de Alianzas</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              Hacé crecer tu negocio con Clientum
            </h2>
            <p className="text-white/60 mt-3">Revendé, recomendá o integrá nuestras soluciones y generá ingresos recurrentes en pesos.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {partnerLevels.map((p) => (
              <div key={p.name} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">
                <div className="text-sm text-white/40 uppercase tracking-widest mb-2">{p.level}</div>
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="text-xl font-bold mb-3">{p.name}</h3>
                <p className="text-white/60 text-sm mb-6">{p.desc}</p>
                <div className="text-4xl font-extrabold text-primary mb-1">{p.highlight}</div>
                <div className="text-white/50 text-xs mb-6">{p.subtext}</div>
                <a
                  href="https://wa.me/5492984510883"
                  target="_blank" rel="noreferrer"
                  className="inline-block bg-primary text-white font-bold px-6 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors"
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Implementation ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Implementación Express</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">
              Clientum activo en menos de 24 horas
            </h2>
            <p className="text-gray-500 mt-3">Sin configuraciones infinitas. Setup 100% asistido por nuestro equipo.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-4 ${
                  i === steps.length - 1 ? "bg-primary text-white" : "bg-secondary text-white"
                }`}>
                  {step.num}
                </div>
                <div className="text-2xl mb-2">{step.icon}</div>
                <h4 className="font-bold text-secondary text-sm mb-2">{step.title}</h4>
                <p className="text-gray-400 text-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portal de Clientes ── */}
      <section id="portal" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
            {/* Left */}
            <div>
              <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
                Incluido en tu plan
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-5 leading-tight">
                Tu Portal de Clientes,<br />
                <span className="text-primary">siempre disponible.</span>
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Cada cliente de Clientum accede a su propio portal privado con todo centralizado — facturas, tickets de soporte, estado de suscripción y más. Sin llamadas, sin emails. Todo en un solo lugar.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: "📄", title: "Facturas y pagos", desc: "Descargá tus comprobantes y revisá el historial de facturación en cualquier momento." },
                  { icon: "🎫", title: "Tickets de soporte", desc: "Abrí y seguí el estado de tus consultas técnicas sin necesidad de llamar." },
                  { icon: "📦", title: "Tus productos activos", desc: "Mirá qué servicios tenés contratados, con detalles de configuración y estado." },
                  { icon: "🎧", title: "Acceso a soporte directo", desc: "Chat con nuestro equipo directamente desde el portal, con historial completo." },
                ].map((f) => (
                  <li key={f.title} className="flex items-start gap-4">
                    <span className="text-2xl shrink-0 mt-0.5">{f.icon}</span>
                    <div>
                      <p className="font-bold text-secondary text-sm">{f.title}</p>
                      <p className="text-gray-400 text-sm">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href="/portal"
                className="inline-flex items-center gap-2 bg-secondary text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-secondary/90 transition-all hover:-translate-y-0.5 shadow-md"
              >
                🔐 Acceder a mi portal
              </a>
            </div>

            {/* Right — Portal mockup */}
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                {/* Browser bar */}
                <div className="bg-gray-800 px-4 py-2.5 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-[10px] text-white/30">
                    clientum.com.ar/portal/dashboard
                  </div>
                </div>
                {/* Portal layout */}
                <div className="flex" style={{ minHeight: 340 }}>
                  {/* Sidebar */}
                  <div className="w-44 bg-[#1e2739] p-3 flex flex-col gap-1 shrink-0">
                    <div className="flex items-center gap-2 px-2 py-3 mb-2">
                      <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-white text-[9px] font-bold shrink-0">C</div>
                      <span className="text-white text-xs font-bold">Client<span className="text-primary">um</span></span>
                    </div>
                    {[
                      { label: "Inicio", active: true },
                      { label: "Productos", active: false },
                      { label: "Tickets", active: false },
                      { label: "Facturación", active: false },
                      { label: "Soporte", active: false },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`px-2 py-1.5 rounded-lg text-[10px] font-medium ${
                          item.active
                            ? "bg-primary/15 text-primary border border-primary/20"
                            : "text-white/40"
                        }`}
                      >
                        {item.label}
                      </div>
                    ))}
                    <div className="mt-auto pt-3 border-t border-white/10">
                      <div className="px-2 py-1.5 text-[10px] text-white/30">← Volver al sitio</div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 bg-gray-50 p-4">
                    <p className="text-secondary font-bold text-sm mb-4">Panel General</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {[
                        { label: "Suscripción", value: "Plan Pro", color: "text-green-600" },
                        { label: "Vencimiento", value: "15 Jul 2026", color: "text-secondary" },
                        { label: "Tickets abiertos", value: "2", color: "text-yellow-600" },
                        { label: "Facturas pend.", value: "0", color: "text-green-600" },
                      ].map((k) => (
                        <div key={k.label} className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                          <p className="text-[9px] text-gray-400 uppercase tracking-wide">{k.label}</p>
                          <p className={`font-bold text-sm ${k.color}`}>{k.value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                      <p className="text-[10px] font-semibold text-secondary mb-2">Actividad reciente</p>
                      {[
                        { text: "Factura Junio disponible", time: "Hoy", dot: "bg-primary" },
                        { text: "Ticket #1042 cerrado", time: "Ayer", dot: "bg-green-500" },
                        { text: "Plan renovado automáticamente", time: "1 Jun", dot: "bg-blue-500" },
                      ].map((a) => (
                        <div key={a.text} className="flex items-center gap-2 py-1.5 border-b border-gray-50 last:border-0">
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`} />
                          <span className="text-[10px] text-gray-600 flex-1">{a.text}</span>
                          <span className="text-[9px] text-gray-400">{a.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-primary text-white text-[10px] font-bold px-3 py-2 rounded-xl shadow-lg">
                🔐 Acceso privado por cliente
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Prueba de Campo ── */}
      <section id="casos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Prueba de Campo</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">
              Casos reales. Resultados reales.
            </h2>
            <p className="text-gray-500 mt-3">Implementaciones reales de Clientum en PyMEs argentinas.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {fieldTests.map((test) => (
              <div key={test.name} className={`rounded-2xl p-6 bg-gradient-to-br ${test.color} border border-gray-100 shadow-sm`}>
                <div className="text-xs text-gray-500 mb-1 font-medium">{test.type}</div>
                <h3 className="text-lg font-extrabold text-secondary mb-4">{test.name}</h3>
                <div className="bg-white/70 rounded-xl p-4 mb-4">
                  <p className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wide">Desafío</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{test.challenge}</p>
                </div>
                <div className="bg-white/70 rounded-xl p-4 mb-4">
                  <p className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wide">Solución</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{test.result}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {test.stats.map((s) => (
                    <div key={s.label} className="bg-white rounded-lg p-2 text-center shadow-sm">
                      <div className="font-extrabold text-primary text-sm">{s.value}</div>
                      <div className="text-[9px] text-gray-400 leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
                <blockquote className="text-xs text-gray-600 italic border-l-2 border-primary pl-3">
                  &ldquo;{test.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Testimonios</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">
              PyMEs que ya trabajan con IA
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
                <p className="text-gray-600 text-sm italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-bold text-secondary text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Nuestra Visión</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">La empresa detrás de Clientum</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="font-bold text-primary mb-4 text-lg">Misión</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Democratizar el acceso a la Inteligencia Artificial para que cualquier PyME argentina
                pueda vender, automatizar procesos contables y optimizar su stock sin requerir
                conocimientos técnicos ni contratar personal dedicado de IT.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="font-bold text-primary mb-4 text-lg">Visión</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Ser la plataforma de automatización por chat líder del mercado latinoamericano,
                proveyendo tecnología confiable de nivel corporativo adaptada plenamente a las
                realidades económicas locales de los emprendedores.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🛡️", title: "Tecnología accesible", desc: "Entregamos la solución lista para usar. Olvidate de servidores, configuraciones complejas o mantenimiento técnico." },
              { icon: "🎯", title: "Resultados primero", desc: "El ROI debe ser visible durante el primer mes de uso o reajustamos el sistema de forma bonificada." },
              { icon: "🤝", title: "Cercanía y Confianza", desc: "Hablamos en pesos argentinos, entendemos la coyuntura PyME nacional y te acompañamos paso a paso." },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h4 className="font-bold mb-2">{v.title}</h4>
                <p className="text-white/50 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">Preguntas frecuentes</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex justify-between items-center px-6 py-4 font-semibold text-secondary hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ml-4 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-500 text-sm leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section id="contacto" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                ¿Listo para automatizar tu PyME?
              </h2>
              <p className="text-white/80 mb-8">
                Hablemos. El diagnóstico es 100% gratis y sin compromiso.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/5492984510883"
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 bg-white text-primary font-bold px-6 py-3 rounded-full hover:bg-white/90 transition-colors w-fit"
                >
                  📱 Hablar por WhatsApp
                </a>
                <a
                  href="mailto:clientumlatam@gmail.com"
                  className="flex items-center gap-3 border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors w-fit"
                >
                  ✉️ clientumlatam@gmail.com
                </a>
                <p className="text-white/60 text-sm pt-2">+54 9 2984 51-0883 · Patagonia, Argentina</p>
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
              <h3 className="font-bold text-lg mb-6">¿Preferís que te contactemos?</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const nombre = (form.querySelector("[name=nombre]") as HTMLInputElement)?.value;
                  const empresa = (form.querySelector("[name=empresa]") as HTMLInputElement)?.value;
                  const email = (form.querySelector("[name=email]") as HTMLInputElement)?.value;
                  const tel = (form.querySelector("[name=tel]") as HTMLInputElement)?.value;
                  const rubro = (form.querySelector("[name=rubro]") as HTMLSelectElement)?.value;
                  const mensaje = (form.querySelector("[name=mensaje]") as HTMLTextAreaElement)?.value;
                  const text = `Hola%2C%20soy%20${encodeURIComponent(nombre)}%20de%20${encodeURIComponent(empresa)}%20(${encodeURIComponent(rubro)}).%20Email%3A%20${encodeURIComponent(email)}%20%7C%20Tel%3A%20${encodeURIComponent(tel)}.%20Mensaje%3A%20${encodeURIComponent(mensaje)}`;
                  window.open(`https://wa.me/5492984510883?text=${text}`, "_blank");
                }}
                className="space-y-3"
              >
                <div className="grid grid-cols-2 gap-3">
                  <input name="nombre" required placeholder="Nombre *" className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-white/60 transition-colors" />
                  <input name="empresa" required placeholder="Empresa *" className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-white/60 transition-colors" />
                </div>
                <input name="email" type="email" required placeholder="Email *" className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-white/60 transition-colors" />
                <input name="tel" required placeholder="WhatsApp / Teléfono *" className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-white/60 transition-colors" />
                <select name="rubro" className="w-full bg-white/10 border border-white/20 text-white/80 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-white/60 transition-colors">
                  <option value="" className="text-gray-900">Rubro de tu empresa...</option>
                  {rubros.map((r) => <option key={r} value={r} className="text-gray-900">{r}</option>)}
                </select>
                <textarea
                  name="mensaje"
                  placeholder="¿Qué proceso querés automatizar?"
                  rows={3}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-white/60 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-primary font-bold px-6 py-3 rounded-full hover:bg-white/90 transition-colors text-sm"
                >
                  Solicitar diagnóstico gratis →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-secondary text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/company-logo.png" alt="Clientum" className="h-8 w-8 rounded-lg object-contain" />
                <span className="text-xl font-extrabold text-white">Client<span className="text-primary">um</span></span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                IA para PyMEs argentinas. Automatizá la atención al cliente, generá presupuestos y gestioná tus leads con IA.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="https://www.facebook.com/viawebsocial" target="_blank" rel="noreferrer" className="text-white/50 hover:text-primary transition-colors" aria-label="Facebook">
                  <SiFacebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/viawebsocial/" target="_blank" rel="noreferrer" className="text-white/50 hover:text-primary transition-colors" aria-label="Instagram">
                  <SiInstagram className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/viawebsocial" target="_blank" rel="noreferrer" className="text-white/50 hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-widest">Producto</h4>
              <ul className="space-y-3">
                {[
                  { name: "Chatbot WhatsApp IA", href: "#soluciones" },
                  { name: "CRM Inteligente", href: "#soluciones" },
                  { name: "Clientum Studio", href: "#studio" },
                  { name: "Calculadora de ROI", href: "#calculadora" },
                  { name: "Planes y Precios", href: "#planes" },
                  { name: "Programa de Partners", href: "#partners" },
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm text-white/60 hover:text-primary transition-colors">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-widest">Empresa</h4>
              <ul className="space-y-3">
                {[
                  { name: "Sobre Clientum", href: "#vision" },
                  { name: "Casos de éxito", href: "#casos" },
                  { name: "FAQ", href: "#faq" },
                  { name: "Viaweb (empresa)", href: "https://viaweb.net.ar", ext: true },
                  { name: "Blog", href: "https://viaweb.net.ar/blog/", ext: true },
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.href} target={"ext" in item && item.ext ? "_blank" : undefined} rel={"ext" in item && item.ext ? "noreferrer" : undefined} className="text-sm text-white/60 hover:text-primary transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-widest">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <a href="tel:+5492984510883" className="text-sm text-white/60 hover:text-primary transition-colors">+54 9 2984 51-0883</a>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <a href="https://wa.me/5492984510883" target="_blank" rel="noreferrer" className="text-sm text-white/60 hover:text-primary transition-colors">WhatsApp</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-white/60">Patagonia, Argentina</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Clientum · by Viaweb. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="/terminos-de-uso" className="text-xs text-white/40 hover:text-white/70 transition-colors">Términos de Uso</a>
              <a href="/privacidad" className="text-xs text-white/40 hover:text-white/70 transition-colors">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
