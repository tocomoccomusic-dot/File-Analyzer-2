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

export function Partners() {
  return (
    <section id="socios" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
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

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
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

        <motion.p
          className="text-center text-xs text-secondary/40 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          ¿Usás otra plataforma? Consultanos — probablemente ya tengamos experiencia con ella.
        </motion.p>
      </div>
    </section>
  );
}
