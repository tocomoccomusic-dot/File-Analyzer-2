import { motion } from "framer-motion";
import { ShieldCheck, Users, Clock } from "lucide-react";

export function About() {
  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
              <img 
                src="/about-office.png" 
                alt="Oficinas de Viaweb" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-secondary/10" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[240px] hidden md:block">
              <div className="text-4xl font-extrabold text-primary mb-1">10+</div>
              <p className="text-sm text-gray-600 font-medium">Años acompañando a pymes en la región.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Tecnología de primer nivel,<br /> trato de acá.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              En Viaweb entendemos que adoptar un sistema de gestión o migrar a la nube puede ser abrumador. Por eso no somos solo proveedores de licencias; somos tu equipo de IT externo. Hablamos tu mismo idioma y conocemos el mercado local.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-1">Confianza Comprobada</h4>
                  <p className="text-gray-600">Empresas líderes en Patagonia ya confían su infraestructura y gestión en nuestros sistemas.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-1">Atención Personalizada</h4>
                  <p className="text-gray-600">Nada de tickets interminables que responden bots. Hablás con técnicos que conocen tu caso.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-1">Respuestas Ágiles</h4>
                  <p className="text-gray-600">Entendemos que si el sistema para, tu negocio para. Nuestro soporte está diseñado para la urgencia.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
