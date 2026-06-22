import { motion } from "framer-motion";
import { BarChart2, Globe, ShoppingCart, Cloud, Search, Smartphone } from "lucide-react";

const services = [
  {
    icon: BarChart2,
    title: "Implementación ERP & CRM",
    description: "Odoo, SAP Business One y soluciones a medida. Optimizamos tus procesos internos desde ventas hasta contabilidad.",
    color: "bg-orange-50 text-primary",
    href: "/erp-crm",
  },
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Sitios institucionales, landing pages y aplicaciones web a medida. Diseño moderno, rápido y adaptado a tu marca.",
    color: "bg-blue-50 text-blue-600",
    href: "/ecommerce",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Tiendas online con Tiendanube, WooCommerce o desarrollo propio. Integramos medios de pago argentinos.",
    color: "bg-green-50 text-green-600",
    href: "/ecommerce",
  },
  {
    icon: Cloud,
    title: "Cloud Hosting",
    description: "Servidores VPS, hosting administrado y soluciones de infraestructura en la nube con SLA garantizado.",
    color: "bg-sky-50 text-sky-600",
    href: "/calidad",
  },
  {
    icon: Search,
    title: "SEO & Marketing Digital",
    description: "Posicionamiento orgánico, Google Ads y estrategias digitales para aumentar tu visibilidad online.",
    color: "bg-violet-50 text-violet-600",
    href: "/emarketing",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description: "Apps nativas y PWA para iOS y Android. Extendé tu negocio a los smartphones de tus clientes.",
    color: "bg-rose-50 text-rose-600",
    href: "/emarketing",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Servicios</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2 mb-4">
            Todo lo que tu empresa necesita
          </h2>
          <p className="text-secondary/60 text-lg leading-relaxed">
            Soluciones tecnológicas integrales para pymes y empresas en crecimiento. Desde la estrategia hasta la implementación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.href}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-secondary/60 leading-relaxed mb-4">{service.description}</p>
              <span className="text-xs font-bold text-primary group-hover:underline">Ver más →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
