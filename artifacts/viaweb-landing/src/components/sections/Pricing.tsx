import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const plans = [
  {
    name: "Minorista",
    target: "Para comercios al por menor",
    description: "Gestión ágil de punto de venta, control de stock y facturación electrónica.",
    features: [
      "Facturación electrónica AFIP",
      "Control de inventario básico",
      "Caja diaria y reportes",
      "Soporte por ticket",
      "Actualizaciones incluidas"
    ],
    popular: false
  },
  {
    name: "Mayorista",
    target: "Para distribuidoras",
    description: "Control avanzado de depósitos, listas de precios múltiples y gestión de vendedores.",
    features: [
      "Todo lo del plan Minorista",
      "Múltiples listas de precios",
      "Gestión de preventistas/vendedores",
      "Cuentas corrientes",
      "Soporte prioritario WhatsApp"
    ],
    popular: true
  },
  {
    name: "Personalizado",
    target: "Para industrias y pymes complejas",
    description: "Implementación a medida con módulos específicos según las reglas de tu negocio.",
    features: [
      "Análisis de procesos",
      "Desarrollo de módulos a medida",
      "Integraciones con terceros",
      "Capacitación presencial/virtual",
      "Account Manager dedicado"
    ],
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="planes" className="py-24 bg-slate-50 border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">ERP & CRM</span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4">Planes de Implementación</h2>
          <p className="text-lg text-gray-600">
            Suscripciones mensuales sin sorpresas. Escalamos el software al ritmo del crecimiento de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 border ${
                plan.popular ? "border-primary shadow-xl shadow-primary/10" : "border-gray-200 shadow-sm"
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Más Elegido
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-secondary mb-1">Plan {plan.name}</h3>
                <p className="text-sm text-primary font-medium mb-4">{plan.target}</p>
                <p className="text-gray-600 text-sm h-12">{plan.description}</p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-green-100 p-1">
                      <Check className="h-3 w-3 text-green-600" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <Button 
                  className="w-full rounded-full h-12" 
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="/productos">Ver detalles</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <Info className="h-4 w-4" /> 
            Consultá por descuentos en pagos anuales o semestrales.
          </p>
        </div>
      </div>
    </section>
  );
}
