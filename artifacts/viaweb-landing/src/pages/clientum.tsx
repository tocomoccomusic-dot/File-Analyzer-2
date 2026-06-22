import { useState } from "react";
import { ClientumNavbar } from "@/components/layout/ClientumNavbar";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { Linkedin } from "lucide-react";

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

const industries = [
  {
    icon: "📦",
    name: "Distribuidoras",
    problem: "Presupuestos lentos en Excel, consultas de stock que se acumulan y falta de seguimiento a clientes mayoristas.",
    solution: "Bot que consulta stock en tiempo real, genera presupuestos y cotiza automáticamente en 2 minutos.",
    stats: ["-35% tiempo adm.", "+22% cierre ventas", "-40% errores stock"],
    quote: "Pasamos de armar presupuestos a mano todo el día a generarlos al instante en un chat.",
    author: "Sergio R. · Distribuidora Vega, Córdoba",
  },
  {
    icon: "🏠",
    name: "Inmobiliarias",
    problem: "Consultas de propiedades repetitivas, agendado manual de visitas y seguimiento perdido de interesados.",
    solution: "Bot que filtra propiedades, agenda visitas automáticamente y envía fichas técnicas al instante.",
    stats: ["-50% consultas manuales", "+30% visitas agendadas", "-60% tiempo respuesta"],
    quote: "El chatbot resuelve el 80% de las preguntas de mis clientes automáticamente. Mis agentes ahora venden más.",
    author: "Luciana G. · Inmobiliaria, Mendoza",
  },
  {
    icon: "📋",
    name: "Est. Contables",
    problem: "Consultas de AFIP, vencimientos y documentación que saturan el equipo contable con tareas repetitivas.",
    solution: "Bot que responde consultas frecuentes, envía alertas de vencimiento y gestiona turnos de atención.",
    stats: ["-45% consultas repetitivas", "+25% capacidad atención", "-70% tiempo en respuestas"],
    quote: "Los reportes que antes me llevaban días ahora se hacen solos. Tengo más tiempo para asesorar clientes.",
    author: "Laura M. · Estudio Contable, Gral. Roca",
  },
  {
    icon: "🔧",
    name: "Talleres",
    problem: "Turnos gestionados por teléfono, presupuestos demorados y clientes sin seguimiento post-servicio.",
    solution: "Bot que agenda turnos, envía presupuestos por foto de vehículo y automatiza recordatorios.",
    stats: ["-42% ausencias", "+40% turnos", "-67% tiempo"],
    quote: "En 3 días ya tenía todo funcionando. El soporte es increíble y los resultados son reales.",
    author: "Carlos R. · Taller Mecánico, Neuquén",
  },
  {
    icon: "🛒",
    name: "Comercios",
    problem: "Stock desactualizado, preguntas por precios en redes y pérdida de ventas por respuestas lentas.",
    solution: "Bot sincronizado con stock y catálogo de precios, responde 24/7 y procesa pedidos vía chat.",
    stats: ["-90% tiempo cotización", "+120 pedidos/mes", "+22% conversión"],
    quote: "El ROI fue visible en la primera semana. Vendemos más porque respondemos más rápido.",
    author: "Diego M. · Comercio, Bahía Blanca",
  },
];

const plans = [
  {
    name: "Free",
    subtitle: "Para explorar la IA sin riesgos.",
    price: "$0",
    period: "ARS / mes",
    features: ["CRM hasta 50 contactos", "1 chatbot (100 msgs/mes)", "1 integración básica"],
    cta: "Empezar gratis",
    highlight: false,
  },
  {
    name: "Starter",
    subtitle: "Primera automatización real para tu PyME.",
    price: "$149k",
    period: "ARS / mes",
    features: ["CRM 500 contactos", "Chatbot WhatsApp básico", "1 integración completa", "Soporte email/WA"],
    cta: "Elegir Starter",
    highlight: false,
  },
  {
    name: "Pro",
    subtitle: "Automatización total de tu operación.",
    price: "$299k",
    period: "ARS / mes",
    features: ["CRM ilimitado", "Chatbot IA con entrenamiento", "3 integraciones", "ERP básico (stock + pedidos)"],
    cta: "Elegir Plan Pro",
    highlight: true,
    badge: "⚡ Más Popular",
  },
  {
    name: "Business",
    subtitle: "Multi-agente IA y operaciones complejas.",
    price: "$549k",
    period: "ARS / mes",
    features: ["Todo lo de Pro", "Multi-agente avanzado", "ERP + Facturación AFIP", "Acceso API completa"],
    cta: "Elegir Business",
    highlight: false,
  },
  {
    name: "Enterprise",
    subtitle: "Automatización total a medida de tu escala.",
    price: "A medida",
    period: "Cotización rápida",
    features: ["Todo lo de Business", "Agentes autónomos", "Soporte de cuenta dedicado", "Integración heredada"],
    cta: "Hablar con Ventas",
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
    level: "Nivel 01",
    icon: "🔗",
    name: "Referidor",
    desc: "Recomendá Clientum a tu cartera de clientes o red de contactos y cobrá comisiones limpias.",
    highlight: "15%",
    subtext: "comisión recurrente mensual",
    cta: "Ser Referidor",
  },
  {
    level: "Nivel 02",
    icon: "⭐",
    name: "Reseller",
    desc: "Comprás licencias a precio diferencial mayorista y las revendés con tu propio margen.",
    highlight: "30%",
    subtext: "descuento sobre lista oficial",
    cta: "Ser Reseller",
  },
  {
    level: "Nivel 03",
    icon: "🏆",
    name: "White Label",
    desc: "Marca blanca completa. La infraestructura corre bajo tu propio dominio y logo corporativo.",
    highlight: "WL",
    subtext: "Personalización de dominio",
    cta: "Ser White Label",
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

export default function Clientum() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ROI Calculator state
  const [employees, setEmployees] = useState(5);
  const [hoursLost, setHoursLost] = useState(3);
  const [hourCost, setHourCost] = useState(15000);
  const [missedConsults, setMissedConsults] = useState(30);
  const [avgTicket, setAvgTicket] = useState(50000);

  const workingDays = 22;
  const operativeCost = employees * hoursLost * hourCost * workingDays;
  const lostSales = missedConsults * avgTicket * 0.3;
  const totalImpact = operativeCost + lostSales;

  const formatARS = (n: number) =>
    "$ " + Math.round(n).toLocaleString("es-AR");

  return (
    <div className="min-h-screen bg-white font-sans">
      <ClientumNavbar />

      {/* Ticker */}
      <div className="bg-primary text-white text-xs font-semibold overflow-hidden whitespace-nowrap py-2">
        <div className="inline-flex animate-[marquee_30s_linear_infinite] gap-16">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <span className="text-white/60">|</span> {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary/20 border border-primary/30 text-primary text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Clientum · IA para PyMEs · by Viaweb
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Tu PyME merece<br />
              <span className="text-primary">trabajar con IA.</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-2xl">
              Dejá de hacerlo todo a mano. Automatizá consultas por WhatsApp,
              presupuestos y seguimiento de ventas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://wa.me/5492984510883?text=Hola%2C%20quiero%20mi%20diagn%C3%B3stico%20gratis%20de%20Clientum"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full text-base hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                🚀 Diagnóstico gratuito
              </a>
              <a
                href="https://wa.me/5492984510883"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white/10 transition-all"
              >
                Ver demo por WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-white/50">
              <span>✓ Setup en 7 días</span>
              <span>✓ Soporte local</span>
              <span>✓ Sin contratos</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
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

      {/* Problem */}
      <section className="py-20 bg-gray-50">
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

      {/* Solution */}
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
              <div key={s.title} className="bg-secondary rounded-2xl p-6 text-white hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="calculadora" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Calculadora de ROI</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">
              ¿Cuánto te cuesta hacer el trabajo a mano?
            </h2>
            <p className="text-gray-500 mt-3">Calculá el impacto económico de no tener procesos automatizados en tu PyME.</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Sliders */}
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
                    type="range"
                    min={item.min}
                    max={item.max}
                    step={"step" in item ? item.step : 1}
                    value={item.value}
                    onChange={(e) => item.setter(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>
              ))}
            </div>

            {/* Results */}
            <div className="bg-secondary rounded-2xl p-8 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-6 text-white/70 uppercase tracking-widest text-sm">Tu costo invisible mensual</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">Costo operativo por horas perdidas</span>
                    <span className="font-bold text-lg">{formatARS(operativeCost)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">Ventas perdidas (asumiendo 30% cierre)</span>
                    <span className="font-bold text-lg">{formatARS(lostSales)}</span>
                  </div>
                  <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                    <span className="font-semibold">Impacto Total Negativo</span>
                    <span className="font-extrabold text-2xl text-primary">{formatARS(totalImpact)}</span>
                  </div>
                </div>
                <p className="text-white/50 text-xs mb-2">Dinero que estás perdiendo por mes</p>
                <div className="bg-primary/20 border border-primary/30 rounded-xl p-4">
                  <p className="text-sm text-white/80">
                    <strong className="text-primary">Clientum Pro cuesta solo $299.000 al mes.</strong><br />
                    Tu ROI pagando el sistema sería inmediato.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/5492984510883?text=Quiero%20recuperar%20ese%20dinero%20con%20Clientum"
                target="_blank"
                rel="noreferrer"
                className="mt-6 block text-center bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                Recuperar ese dinero →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Casos por Sector</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">
              ¿Cuál es tu rubro? Mirá cómo lo resolvemos
            </h2>
          </div>
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {industries.map((ind, i) => (
              <button
                key={ind.name}
                onClick={() => setActiveIndustry(i)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeIndustry === i
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {ind.icon} {ind.name}
              </button>
            ))}
          </div>
          {/* Active industry card */}
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-secondary mb-2">El problema</h3>
                <p className="text-gray-500 text-sm mb-6">{industries[activeIndustry].problem}</p>
                <h3 className="font-bold text-secondary mb-2">La solución Clientum</h3>
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

      {/* Pricing */}
      <section id="planes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Planes</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">
              Escalá a tu ritmo.
            </h2>
            <p className="text-gray-500 mt-3">Sin contratos a largo plazo. Resultados desde el día 1.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all ${
                  plan.highlight
                    ? "bg-primary text-white shadow-xl scale-105"
                    : "bg-white border border-gray-100 shadow-sm text-secondary"
                }`}
              >
                {plan.badge && (
                  <div className="text-xs font-bold mb-3 opacity-90">{plan.badge}</div>
                )}
                <div>
                  <h3 className={`text-lg font-extrabold mb-1 ${plan.highlight ? "text-white" : "text-secondary"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mb-4 ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>{plan.subtitle}</p>
                  <div className={`text-3xl font-extrabold mb-1 ${plan.highlight ? "text-white" : "text-secondary"}`}>
                    {plan.price}
                  </div>
                  <div className={`text-xs mb-6 ${plan.highlight ? "text-white/60" : "text-gray-400"}`}>{plan.period}</div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className={`text-xs flex gap-2 ${plan.highlight ? "text-white/80" : "text-gray-500"}`}>
                        <span className="text-primary">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://wa.me/5492984510883"
                  target="_blank"
                  rel="noreferrer"
                  className={`block text-center text-sm font-bold px-4 py-2 rounded-full transition-all ${
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

      {/* Integrations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Ecosistema Abierto</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary mt-2">
              Sincronizá con tus herramientas de todos los días
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {integrations.map((int) => (
              <span
                key={int}
                className="bg-gray-100 text-gray-700 font-semibold text-sm px-4 py-2 rounded-full border border-gray-200"
              >
                {int}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            ¿Usás otro sistema administrativo? Lo evaluamos y desarrollamos a medida en tu diagnóstico gratis.
          </p>
        </div>
      </section>

      {/* Partners */}
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
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-primary text-white font-bold px-6 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors"
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation */}
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

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Casos Reales</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">
              PyMEs que ya trabajan con IA
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
                <p className="text-gray-600 text-sm italic mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-bold">
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

      {/* Mission & Vision */}
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

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">Preguntas frecuentes</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex justify-between items-center px-6 py-4 font-semibold text-secondary hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`text-primary font-bold transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-500 text-sm leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                ¿Listo para automatizar tu PyME?
              </h2>
              <p className="text-white/80 mb-6">
                Hablemos. El diagnóstico es 100% gratis y sin compromiso.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/5492984510883"
                  target="_blank"
                  rel="noreferrer"
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
                <p className="text-white/60 text-sm">+54 9 2984 51-0883 · Patagonia, Argentina</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <h3 className="font-bold text-lg mb-6">¿Preferís que te contactemos?</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const nombre = (form.querySelector("[name=nombre]") as HTMLInputElement)?.value;
                  const empresa = (form.querySelector("[name=empresa]") as HTMLInputElement)?.value;
                  const tel = (form.querySelector("[name=tel]") as HTMLInputElement)?.value;
                  const msg = `Hola%2C%20soy%20${encodeURIComponent(nombre)}%20de%20${encodeURIComponent(empresa)}.%20Mi%20WhatsApp%20es%20${encodeURIComponent(tel)}.%20Quiero%20mi%20diagn%C3%B3stico%20gratis%20de%20Clientum.`;
                  window.open(`https://wa.me/5492984510883?text=${msg}`, "_blank");
                }}
                className="space-y-3"
              >
                <input name="nombre" required placeholder="Nombre *" className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-2 text-sm outline-none focus:border-white/60" />
                <input name="empresa" required placeholder="Empresa *" className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-2 text-sm outline-none focus:border-white/60" />
                <input name="tel" required placeholder="WhatsApp / Teléfono *" className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-2 text-sm outline-none focus:border-white/60" />
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

      {/* Footer */}
      <footer className="bg-secondary text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <span className="text-2xl font-extrabold tracking-tighter text-white">
                Client<span className="text-primary">um</span>
              </span>
              <p className="mt-4 text-sm text-white/60 leading-relaxed">
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
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Producto</h4>
              <ul className="space-y-3">
                {[
                  { name: "Chatbot WhatsApp IA", href: "#soluciones" },
                  { name: "CRM Inteligente", href: "#soluciones" },
                  { name: "Calculadora de ROI", href: "#calculadora" },
                  { name: "Planes y Precios", href: "#planes" },
                  { name: "Programa de Partners", href: "#partners" },
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm text-white/60 hover:text-primary transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Empresa</h4>
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
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <a href="tel:+5492984510883" className="text-sm text-white/60 hover:text-primary transition-colors">
                    +54 9 2984 51-0883
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <a href="https://wa.me/5492984510883" target="_blank" rel="noreferrer" className="text-sm text-white/60 hover:text-primary transition-colors">
                    WhatsApp
                  </a>
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
              <a href="/terminos-de-uso" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Términos de Uso
              </a>
              <a href="/privacidad" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
