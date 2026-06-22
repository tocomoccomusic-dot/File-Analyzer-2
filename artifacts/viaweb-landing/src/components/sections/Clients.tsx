import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Martín Olivares",
    role: "Gerente Comercial",
    company: "Distribuidora del Sur",
    initials: "DO",
    color: "bg-orange-500",
    text: "Viaweb implementó nuestro ERP en tiempo récord. La capacitación fue excelente y el soporte post-implementación es realmente diferente al de otras empresas.",
    stars: 5,
  },
  {
    name: "Cecilia Ramos",
    role: "Directora",
    company: "Constructora Patagónica",
    initials: "CP",
    color: "bg-sky-600",
    text: "Llevábamos años con planillas de Excel. Hoy manejamos todo desde un sistema integrado. La inversión se recuperó en menos de 6 meses.",
    stars: 5,
  },
  {
    name: "Diego Fernández",
    role: "Dueño",
    company: "Agropecuaria Fernández",
    initials: "AF",
    color: "bg-green-600",
    text: "El equipo de Viaweb entendió las particularidades de nuestro negocio. Adaptaron el sistema a nuestra forma de trabajar, no al revés.",
    stars: 5,
  },
];

const sectors = [
  { label: "Agropecuario" },
  { label: "Construcción" },
  { label: "Distribución" },
  { label: "Comercio" },
  { label: "Salud" },
  { label: "Servicios" },
  { label: "Industria" },
  { label: "Turismo" },
];

export function Clients() {
  return (
    <section id="clientes" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Clientes</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2 mb-4">
            +100 empresas confían en Viaweb
          </h2>
          <p className="text-secondary/60 text-lg leading-relaxed">
            Trabajamos con pymes de todos los rubros en la Patagonia argentina. Conocé lo que dicen nuestros clientes.
          </p>
        </motion.div>

        {/* Sector pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {sectors.map((sector, i) => (
            <motion.span
              key={sector.label}
              className="text-xs font-semibold px-4 py-2 rounded-full bg-secondary/5 text-secondary/60 border border-secondary/10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              {sector.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="h-6 w-6 text-primary/20" />

              {/* Text */}
              <p className="text-sm text-secondary/70 leading-relaxed flex-1 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center shrink-0`}>
                  <span className="text-xs font-bold text-white">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary">{t.name}</p>
                  <p className="text-xs text-secondary/50">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA band */}
        <motion.div
          className="rounded-2xl bg-gradient-to-r from-secondary to-secondary/90 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">¿Querés ser el próximo caso de éxito?</p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Más de 100 empresas ya lo son.
            </h3>
            <p className="text-white/60 mt-2 text-sm">
              Consultá sin cargo y en 48 hs te presentamos una propuesta a medida.
            </p>
          </div>
          <a
            href="https://viaweb.net.ar/clientes-2/"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full text-sm shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all whitespace-nowrap"
          >
            Ver todos los clientes →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
