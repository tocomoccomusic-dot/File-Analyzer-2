import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import TerminosDeUso from "@/pages/terminos-de-uso";
import Privacidad from "@/pages/privacidad";
import Historia from "@/pages/historia";
import PartnersPage from "@/pages/partners";
import Clientes from "@/pages/clientes";
import ErpCrm from "@/pages/erp-crm";
import Ecommerce from "@/pages/ecommerce";
import Emarketing from "@/pages/emarketing";
import Calidad from "@/pages/calidad";
import Clientum from "@/pages/clientum";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Clients } from "@/components/sections/Clients";
import { FloatingChat } from "@/components/layout/FloatingChat";
import { Partners } from "@/components/sections/Partners";
import { Blog } from "@/components/sections/Blog";
import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle, Linkedin } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";

const queryClient = new QueryClient();

function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <span className="text-2xl font-extrabold tracking-tighter text-white">
              Via<span className="text-primary">web</span>
            </span>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Tu socio tecnológico en Patagonia. Implementaciones ERP, desarrollo web y soluciones cloud para pymes argentinas.
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
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Servicios</h4>
            <ul className="space-y-3">
              {[
                { name: "Clientum · IA para PyMEs", href: "/clientum", ext: false },
                { name: "Implementación ERP/CRM", href: "/erp-crm", ext: false },
                { name: "Desarrollo Web & E-commerce", href: "/ecommerce", ext: false },
                { name: "E-Marketing", href: "/emarketing", ext: false },
                { name: "Soporte técnico", href: "https://viaweb.tawk.help/", ext: true },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} target={item.ext ? "_blank" : undefined} rel={item.ext ? "noreferrer" : undefined} className="text-sm text-white/60 hover:text-primary transition-colors">
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
                { name: "Historia", href: "/historia", ext: false },
                { name: "Nuestros Clientes", href: "/clientes", ext: false },
                { name: "Partners", href: "/partners", ext: false },
                { name: "Portal de Clientes", href: "https://cloud.viaweb.net.ar/viaweb/custom/externalaccess/www/", ext: true },
                { name: "Blog", href: "https://viaweb.net.ar/blog/", ext: true },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} target={item.ext ? "_blank" : undefined} rel={item.ext ? "noreferrer" : undefined} className="text-sm text-white/60 hover:text-primary transition-colors">
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
                <a href="tel:+5492984372962" className="text-sm text-white/60 hover:text-primary transition-colors">
                  +54 (298) 437-2962
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <a href="https://wa.me/send?phone=542984372962&text=¡Hola! Quiero hacer una consulta." target="_blank" rel="noreferrer" className="text-sm text-white/60 hover:text-primary transition-colors">
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
            &copy; {new Date().getFullYear()} Viaweb. Todos los derechos reservados.
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
  );
}

function CtaSection() {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            ¿Listo para transformar tu empresa?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Agendá una reunión sin costo y analizamos juntos qué solución se adapta mejor a tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://viaweb.net.ar/meetings"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full text-base shadow-xl hover:bg-white/90 transition-all"
            >
              Agendar Reunión Gratis
            </a>
            <a
              href="https://wa.me/send?phone=542984372962&text=¡Hola! Quiero hacer una consulta."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-full text-base hover:border-white transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              Consultá por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ClientumSection() {
  return (
    <section className="py-20 bg-secondary text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="bg-primary/20 border border-primary/30 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Nuevo producto Viaweb
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Conocé <span className="text-primary">Clientum</span> —<br />
              IA para PyMEs argentinas.
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Dejá de perder ventas por responder tarde. Automatizá consultas por WhatsApp,
              generá presupuestos al instante y gestioná tus leads con IA, sin saber nada técnico.
            </p>

            {/* Mini feature list */}
            <ul className="space-y-3 mb-10">
              {[
                "🤖 Chatbot IA que responde como humano en WhatsApp 24/7",
                "📊 CRM simple: todos tus contactos y conversaciones en un lugar",
                "🔗 Integración con AFIP, MercadoPago, Shopify y más",
                "⚡ Setup completo en menos de 7 días, sin conocimientos técnicos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80 text-sm">
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/clientum"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full text-base hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                🚀 Ver Clientum completo
              </a>
              <a
                href="https://wa.me/5492984510883?text=Hola%2C%20quiero%20mi%20diagn%C3%B3stico%20gratis%20de%20Clientum"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white/10 transition-all"
              >
                Diagnóstico gratis →
              </a>
            </div>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "+500", label: "PyMEs activas", icon: "🏪" },
              { value: "80%", label: "consultas automáticas", icon: "🤖" },
              { value: "3 hs", label: "ahorradas por día", icon: "⏱️" },
              { value: "98%", label: "satisfacción", icon: "⭐" },
              { value: "24/7", label: "atención sin parar", icon: "💬" },
              { value: "7 días", label: "para estar activo", icon: "⚡" },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="text-3xl font-extrabold text-primary mb-1">{s.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries ticker */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <p className="text-center text-white/40 text-xs uppercase tracking-widest mb-5">Funciona para cualquier rubro</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["📦 Distribuidoras", "🏠 Inmobiliarias", "📋 Est. Contables", "🔧 Talleres", "🛒 Comercios", "🚚 Transporte", "🏗️ Constructoras", "🍽️ Gastronomía", "📣 Agencias"].map((r) => (
              <span key={r} className="bg-white/5 border border-white/10 text-white/70 text-sm px-4 py-2 rounded-full">
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { value: "10+", label: "Años de trayectoria" },
    { value: "100+", label: "Clientes activos" },
    { value: "24h", label: "Tiempo de respuesta" },
    { value: "99.9%", label: "Uptime garantizado" },
  ];

  return (
    <section className="py-16 border-y border-gray-100 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{stat.value}</div>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <ClientumSection />
        <About />
        <Clients />
        <Partners />
        <Pricing />
        <Blog />
        <Contact />
        <CtaSection />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/terminos-de-uso" component={TerminosDeUso} />
      <Route path="/privacidad" component={Privacidad} />
      <Route path="/historia" component={Historia} />
      <Route path="/partners" component={PartnersPage} />
      <Route path="/clientes" component={Clientes} />
      <Route path="/erp-crm" component={ErpCrm} />
      <Route path="/ecommerce" component={Ecommerce} />
      <Route path="/emarketing" component={Emarketing} />
      <Route path="/calidad" component={Calidad} />
      <Route path="/clientum" component={Clientum} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
