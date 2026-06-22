import { Navbar } from '@/components/layout/Navbar';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'E-Marketing',
    desc: 'Tomamos decisiones basadas en datos para crear un plan de medios digitales, y generar ventas a partir de optimizaciones constantes, medición, taggeo y automatización. Reforzamos la reputación e imagen corporativa de su marca, potenciando cada una de las estrategias digitales en pro de incrementar las ventas mediante la atracción, conversión y fidelización de clientes.',
  },
  {
    title: 'SEO y SEM / Marketing Automation / Retargeting',
    desc: 'Tanto el SEO como el SEM son dos estrategias indispensables en marketing online para la obtención de resultados óptimos, con el objetivo de ayudar a las empresas a mejorar su posición en los buscadores como Google. Desde ventas y segmentación hasta divulgación y redes sociales, nuestro equipo de expertos en Marketing Automation puede ayudarte a ahorrar tiempo y esfuerzo, logrando centrarnos en formas creativas para llegar a los consumidores y generar más ingresos.',
  },
  {
    title: 'E-Mail Marketing / Social Ads / Programática CRM',
    desc: 'Permitiendo combinar e-mail marketing con Social Ads. La recolección de datos y cookies se desarrolla de manera automatizada y siendo accesible para nuestros clientes. El módulo CRM está integrado con las demás funcionalidades, por lo que con una herramienta podemos gestionar toda la información de forma automatizada. Esas cookies podrán ser la base de la compra programática dentro de las Social Ads.',
  },
  {
    title: 'Ejecución y Optimización de Campañas / Herramientas de Medición',
    desc: 'Planificamos, ejecutamos y optimizamos anuncios para la marca, utilizando la información de lo que funcionó para aumentar los resultados en todas las próximas campañas. Medimos los resultados en línea a través de plataformas de Analytics, evaluando y comprendiendo el interés de los visitantes en el sitio para detectar cuáles acciones generan más resultados positivos.',
  },
  {
    title: 'Configuración de Cuentas / Gestión de Canales de Pago',
    desc: 'En la actualidad, existe un ecosistema de medios de pago integrado donde las diferentes modalidades conviven y se complementan. En e-commerce, los sistemas de procesamiento de pagos online permiten la integración de una tienda con múltiples medios de pago, a través de los denominados Gateways de pago o plataformas de pago.',
  },
  {
    title: 'Definición de Estrategia de E-Marketing',
    desc: 'Una vez hemos hecho el análisis de situación, definido los objetivos y el insight, tenemos la información suficiente para definir la estrategia de e-marketing. Incluye reportes y seguimiento de las principales métricas de negocio y gestión, gestión integral del assortment de productos, búsqueda de la satisfacción del consumidor en todo punto de contacto, y definición de la estrategia de canales/medios.',
  },
];

export default function Emarketing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              ← Volver al inicio
            </Link>
          </div>

          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Business Intelligence</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mt-2 mb-4">
              E-Marketing & Gerenciamiento
            </h1>
            <p className="text-lg text-gray-500 max-w-3xl leading-relaxed">
              Seguimiento de las principales métricas de negocio y gestión. Nuestro modelo de negocio garantiza sitios que venden más: planificamos, implementamos y administramos canales digitales a partir de herramientas de e-marketing, enfocándonos en la conversión del sitio.
            </p>
          </div>

          <div className="mb-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-sm text-gray-600 leading-relaxed">
              Con <strong>SEO</strong> (Search Engine Optimization) el objetivo es lograr resultados orgánicos, y con <strong>SEM</strong> (Search Engine Marketing) se busca obtener mayor visibilidad mediante campañas de anuncios. Proponemos diferentes estrategias de negocios a través de cambios y mejoras, comunicando las nuevas tendencias y siendo receptivos a sugerencias con el fin de generar la máxima rentabilidad en sus e-commerce.
            </p>
          </div>

          <h2 className="text-2xl font-extrabold text-secondary mb-8">Soluciones Disponibles</h2>
          <div className="space-y-4 mb-14">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <h3 className="font-bold text-secondary mb-2 text-sm uppercase tracking-wide">{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-8 bg-secondary rounded-2xl text-white text-center">
            <h3 className="text-xl font-bold mb-2">¿Querés más visibilidad online?</h3>
            <p className="text-white/70 text-sm mb-6 max-w-lg mx-auto">
              Hablemos sobre una estrategia de e-marketing personalizada para tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://viaweb.net.ar/meetings"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-all text-sm"
              >
                Agendar Reunión Gratis
              </a>
              <a
                href="https://wa.me/send?phone=542984372962&text=Quiero información sobre E-Marketing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white font-bold px-8 py-3 rounded-full hover:border-white transition-all text-sm"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
