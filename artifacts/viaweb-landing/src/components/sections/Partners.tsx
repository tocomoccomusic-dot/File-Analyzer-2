import { motion } from "framer-motion";

const partners = [
  { name: "Odoo", category: "ERP/CRM", initials: "OD", color: "bg-purple-600" },
  { name: "SAP Business One", category: "ERP", initials: "SA", color: "bg-blue-600" },
  { name: "Google Workspace", category: "Productividad", initials: "GW", color: "bg-green-600" },
  { name: "Tiendanube", category: "E-commerce", initials: "TN", color: "bg-sky-500" },
  { name: "WooCommerce", category: "E-commerce", initials: "WC", color: "bg-violet-600" },
  { name: "Cloudflare", category: "Seguridad", initials: "CF", color: "bg-orange-500" },
  { name: "Microsoft 365", category: "Productividad", initials: "M3", color: "bg-blue-500" },
  { name: "MercadoPago", category: "Pagos", initials: "MP", color: "bg-yellow-500" },
];

const programLevels = [
  { icon: "🔗", name: "Referidor", perk: "15% comisión mensual", color: "bg-primary/10 text-primary" },
  { icon: "⭐", name: "Reseller", perk: "30% descuento mayorista", color: "bg-secondary/10 text-secondary" },
  { icon: "🏆", name: "White Label", perk: "Marca blanca completa", color: "bg-amber-50 text-amber-700" },
];

export function Partners() {
  return (
    <section id="socios" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Tech partners */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Socios Tecnológicos</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-secondary mt-2 mb-3">
            Trabajamos con las mejores plataformas
          </h2>
          <p className="text-secondary/60 max-w-xl mx-auto">
            Somos partners certificados de las principales tecnologías del mercado para brindarte las mejores soluciones.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-10">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              className="flex flex-col items-center gap-2 group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className={`w-14 h-14 rounded-2xl ${partner.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                <span className="text-sm font-extrabold text-white">{partner.initials}</span>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold text-secondary leading-tight">{partner.name}</p>
                <p className="text-[10px] text-secondary/50 mt-0.5">{partner.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners program teaser */}
        <motion.div
          className="mt-16 rounded-2xl bg-secondary text-white p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Programa de Partners</span>
              <h3 className="text-2xl md:text-3xl font-extrabold mt-2 mb-4">
                Generá ingresos recomendando Viaweb
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Revendé, recomendá o integrá nuestras soluciones y generá ingresos recurrentes
                en pesos. Tenemos 3 niveles según tu modelo de negocio.
              </p>
              <a
                href="/partners"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-primary/90 transition-all"
              >
                Ver programa completo →
              </a>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {programLevels.map((level) => (
                <div key={level.name} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                  <div className="text-3xl mb-2">{level.icon}</div>
                  <div className="font-bold text-sm mb-1">{level.name}</div>
                  <div className="text-white/50 text-[11px]">{level.perk}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
