import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    category: "ERP",
    title: "Cómo digitalizar el proceso de ventas con preventistas en Odoo",
    excerpt: "Automatizá la toma de pedidos en campo y sincronizá stock en tiempo real. Caso de éxito con una distribuidora patagónica.",
    readTime: "5 min",
    date: "10 Jun 2026",
    color: "bg-primary",
    initials: "ERP",
  },
  {
    category: "E-commerce",
    title: "Integrar MercadoPago con Tiendanube: guía paso a paso",
    excerpt: "Configurá los medios de pago argentinos en tu tienda online y aumentá tu tasa de conversión con cuotas sin interés.",
    readTime: "4 min",
    date: "2 Jun 2026",
    color: "bg-sky-500",
    initials: "EC",
  },
  {
    category: "Cloud",
    title: "Por qué el hosting local importa para el SEO de tu empresa",
    excerpt: "La latencia de los servidores afecta tu posicionamiento en Google. Te explicamos cómo mejorar los Core Web Vitals.",
    readTime: "3 min",
    date: "25 May 2026",
    color: "bg-violet-500",
    initials: "CL",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Blog</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">
              Recursos y consejos
            </h2>
            <p className="text-secondary/60 mt-2 max-w-lg">
              Artículos, guías y casos de éxito sobre tecnología para pymes argentinas.
            </p>
          </div>
          <a
            href="https://viaweb.net.ar/blog/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors whitespace-nowrap"
          >
            Ver todos los artículos
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href="https://viaweb.net.ar/blog/"
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Card header */}
              <div className={`${post.color} h-32 flex items-center justify-center`}>
                <span className="text-4xl font-extrabold text-white/30 tracking-widest">{post.initials}</span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-secondary/40 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime} lectura
                  </span>
                </div>
                <h3 className="font-bold text-secondary leading-snug mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-secondary/60 leading-relaxed flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-secondary/40">{post.date}</span>
                  <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Leer más <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
