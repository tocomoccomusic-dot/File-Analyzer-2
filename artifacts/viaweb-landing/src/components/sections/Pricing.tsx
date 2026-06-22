import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Minorista",
    price: "Plan ERP/CRM",
    description: "Para pequeñas empresas que empiezan a digitalizar sus procesos.",
    features: [
      "ERP/CRM básico",
      "Hosting incluido",
      "Soporte por ticket",
      "Casillas de correo",
      "SSL incluido",
      "Capacitación inicial",
    ],
    cta: "Ver plan",
    href: "https://viaweb.net.ar/producto/plan-erp-crm-minorista-pagado-cada-un-mes/",
    featured: false,
  },
  {
    name: "Mayorista",
    price: "Plan ERP/CRM",
    description: "La elección de la mayoría de nuestros clientes en crecimiento.",
    features: [
      "ERP/CRM completo",
      "Portal de clientes",
      "Hosting profesional",
      "Soporte prioritario",
      "Casillas ilimitadas",
      "Capacitación incluida",
    ],
    cta: "Ver plan",
    href: "https://viaweb.net.ar/producto/plan-erp-crm-mayorista-pagado-cada-un-mes/",
    featured: true,
  },
  {
    name: "Personalizado",
    price: "A medida",
    description: "Soluciones a medida para empresas con necesidades especiales.",
    features: [
      "ERP/CRM personalizado",
      "Desarrollo a medida",
      "Apps móviles",
      "Soporte dedicado",
      "Infraestructura propia",
      "Gerente de cuenta",
    ],
    cta: "Consultar",
    href: "https://viaweb.net.ar/producto/plan-erp-crm-personalizado-pagado-cada-un-mes/",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="planes" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Planes</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2 mb-4">
            Precios adaptados a tu empresa
          </h2>
          <p className="text-secondary/60 text-lg leading-relaxed">
            Nuestros precios son en pesos argentinos y se adaptan al tamaño y necesidades de cada empresa. Consultanos sin compromiso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.featured
                  ? "bg-primary text-white shadow-2xl shadow-primary/30 scale-105"
                  : "bg-white border border-gray-100 shadow-md"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-secondary text-xs font-bold px-4 py-1 rounded-full shadow-md">
                  Más elegido
                </span>
              )}
              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.featured ? "text-white" : "text-secondary"}`}>
                  {plan.name}
                </h3>
                <p className={`text-3xl font-extrabold mb-2 ${plan.featured ? "text-white" : "text-secondary"}`}>
                  {plan.price}
                </p>
                <p className={`text-sm ${plan.featured ? "text-white/70" : "text-secondary/60"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${plan.featured ? "text-amber-300" : "text-primary"}`} />
                    <span className={`text-sm ${plan.featured ? "text-white/90" : "text-secondary/70"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-full text-sm transition-all ${
                  plan.featured
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20"
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
