import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
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
                { name: "Implementación ERP/CRM", href: "#planes" },
                { name: "Desarrollo Web", href: "#servicios" },
                { name: "E-commerce", href: "#servicios" },
                { name: "Cloud Hosting", href: "#servicios" },
                { name: "SEO & SEM", href: "#servicios" },
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
                { name: "Historia", href: "/historia" },
                { name: "Nuestros Clientes", href: "/clientes-2" },
                { name: "Portal de Clientes", href: "https://cloud.viaweb.net.ar" },
                { name: "Soporte", href: "/tickets" },
                { name: "Blog", href: "/blog" },
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
                <a href="https://wa.me/send?phone=542984372962" target="_blank" rel="noreferrer" className="text-sm text-white/60 hover:text-primary transition-colors">
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
            <a href="/politicas-de-privacidad" className="text-xs text-white/40 hover:text-white/70 transition-colors">
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
              href="/meetings"
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
        <About />
        <Pricing />
        <Contact />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
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
