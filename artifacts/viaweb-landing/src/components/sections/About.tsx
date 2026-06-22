import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Más de 10 años en el mercado patagónico",
  "Equipo local con soporte en español",
  "Metodología ágil y tiempos de entrega reales",
  "Sin intermediarios — trabajamos directamente con vos",
  "Soporte técnico post-implementación incluido",
];

export function About() {
  return (
    <section id="nosotros" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Nosotros</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2 mb-6 leading-tight">
              Tu socio tecnológico en el sur de Argentina
            </h2>
            <p className="text-secondary/60 text-lg leading-relaxed mb-6">
              Somos un equipo de profesionales apasionados por la tecnología, con sede en la Patagonia argentina. Trabajamos con empresas de todos los sectores para digitalizar procesos y acelerar su crecimiento.
            </p>
            <p className="text-secondary/60 leading-relaxed mb-8">
              Nuestro diferencial es el acompañamiento cercano: no somos una empresa impersonal. Conocemos a nuestros clientes, entendemos su negocio y diseñamos soluciones que realmente funcionan.
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-secondary/80">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/historia"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-primary/90 transition-all shadow-md hover:-translate-y-0.5"
            >
              Conocé nuestra historia →
            </a>
          </motion.div>

          {/* Right: stat cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[
              { value: "10+", label: "Años de experiencia", color: "bg-primary text-white" },
              { value: "100+", label: "Clientes activos", color: "bg-secondary text-white" },
              { value: "99.9%", label: "Uptime garantizado", color: "bg-amber-400 text-white" },
              { value: "24h", label: "Respuesta máxima", color: "bg-green-500 text-white" },
            ].map((stat) => (
              <div key={stat.label} className={`${stat.color} rounded-2xl p-6 text-center`}>
                <div className="text-4xl font-extrabold mb-2">{stat.value}</div>
                <p className="text-sm font-medium opacity-90">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
