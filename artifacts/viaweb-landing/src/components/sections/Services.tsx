import { motion } from "framer-motion";
import { Server, MonitorSmartphone, CloudCog, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Server,
    title: "Implementación ERP / CRM",
    description: "Despliegue completo de sistemas de gestión empresarial. Desde comercios minoristas hasta distribuidoras mayoristas, adaptamos la herramienta a tus procesos.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: MonitorSmartphone,
    title: "Desarrollo Web & E-commerce",
    description: "Diseño y desarrollo de sitios web institucionales y tiendas online a medida. Escalables, rápidos y optimizados para conversión.",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: CloudCog,
    title: "Soluciones Cloud",
    description: "Alojamiento en la nube seguro y confiable para las operaciones de tu negocio. Alta disponibilidad sin los costos de infraestructura física.",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: TrendingUp,
    title: "SEO & SEM",
    description: "Posicionamiento en buscadores y campañas de marketing digital con reportes claros. Hacemos que tus clientes te encuentren primero.",
    color: "bg-emerald-50 text-emerald-600"
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Soluciones Integrales</h2>
          <p className="text-lg text-gray-600">
            Cubrimos todas las necesidades tecnológicas de tu empresa para que puedas enfocarte en lo que mejor hacés: hacer crecer tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-gray-50/50">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
