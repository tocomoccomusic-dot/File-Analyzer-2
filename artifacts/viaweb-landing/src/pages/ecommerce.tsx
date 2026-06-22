import { Navbar } from '@/components/layout/Navbar';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

const solutions = [
  {
    title: 'E-Commerce Website',
    items: [
      'Creatividad & Diseño (Mobile / Desktop)',
      'UI & UX',
      'Soporte técnico y funcional',
      'Testing & QA',
      'Integraciones (Precio / Stock / Órdenes)',
      'Configuración e integración de métodos de pago y métodos de envío',
    ],
    desc: 'Desarrollamos, implementamos y mantenemos sitios donde plasmamos la identidad de cada marca, generando las mejores prácticas y teniendo en cuenta las tendencias del mercado.',
  },
  {
    title: 'Marketplaces',
    items: [
      'Creación de usuario y cuenta',
      'Diseño de piezas gráficas',
      'Gestión de cambios y devoluciones',
      'Catalogación',
      'Ticket System Account',
      'Customer Service: Pre-Post Ventas',
      'Configuración e integración de métodos de pago y métodos de envío',
      'Registro de teléfonos y de pedidos',
    ],
    desc: 'Desarrollamos y gestionamos tiendas online escalables, flexibles y ágiles para brindar una atención personalizada de compra al consumidor.',
  },
  {
    title: 'Plataforma Omnicanal',
    items: [
      'Simplificación en las operaciones',
      'Rentabilidad',
      'Organización',
      'Mejores relaciones con los clientes',
      'Excelente experiencia de usuario',
      'Competitividad',
      'Obtención de patrones de comportamiento',
      'Base de clientes más amplia',
    ],
    desc: 'Sistema que concentra los diferentes canales online (sitio propio, marketplaces) y el sistema de gestión de la empresa, permitiendo controlar desde un único lugar precios, stock, órdenes y gateways de pago.',
  },
  {
    title: 'Métricas',
    items: [
      'Business analytics insights',
      'Conversion rate optimization',
      'Customer Journey analysis',
      'Standard & Custom GA, GTM & EEC measurement',
      'A/B testing',
      'UX optimization',
      'Real-time dashboards',
      'Sales & operation KPI tracking',
    ],
    desc: 'Impulsamos una cultura basada en datos con un equipo de especialistas que miden, analizan y mejoran la experiencia del consumidor final.',
  },
  {
    title: 'Correos Corporativos',
    items: [
      'Aspecto más profesional',
      'Creación de varias cuentas bajo el mismo dominio',
      'Configurable en cualquier dispositivo',
      'Coordinación con otras herramientas',
      'Copias de seguridad propias',
    ],
    desc: 'Gran herramienta de comunicación que permite separar la comunicación personal de los trabajadores de la comunicación de trabajo y de la empresa.',
  },
  {
    title: 'Diseño UX/UI de Calidad',
    items: [
      'Análisis',
      'Wireframing',
      'Prototipado',
      'Maquetado',
      'Desarrollo',
    ],
    desc: 'Nos centramos en brindar calidad, diseño, estrategia y producción a los desafíos digitales. Creamos soluciones sólidas y relevantes que atraen tanto a usuarios como a organizaciones.',
  },
];

export default function Ecommerce() {
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
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Web & Digital</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mt-2 mb-4">
              E-Commerce
            </h1>
            <p className="text-lg text-gray-500 max-w-3xl leading-relaxed">
              Desarrollamos sitios web con tecnología omnicanal. Contamos con una estrategia global digital que optimiza la gestión unificada de stocks, logística, tiendas físicas, e-commerce, experiencias y resultados de negocio.
            </p>
          </div>

          <div className="mb-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-sm text-gray-600 leading-relaxed">
              Debido a que el <strong>70% del tráfico web en Latinoamérica</strong> proviene de dispositivos móviles, sabemos lo importante que es construir una tienda online que cargue rápido y se vea increíble en todos los dispositivos. Por eso, pensamos diseños adaptables y cuidadosamente creados para ofrecer la mejor experiencia posible en computadoras de escritorio, celulares y tablets.
            </p>
          </div>

          <h2 className="text-2xl font-extrabold text-secondary mb-8">Soluciones Disponibles</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <h3 className="font-bold text-secondary mb-2 text-sm uppercase tracking-wide">{sol.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{sol.desc}</p>
                <ul className="space-y-1.5">
                  {sol.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="p-8 bg-secondary rounded-2xl text-white text-center">
            <h3 className="text-xl font-bold mb-2">¿Listo para abrir tu tienda online?</h3>
            <p className="text-white/70 text-sm mb-6 max-w-lg mx-auto">
              Agendá una reunión sin costo y te mostramos cómo podemos hacer crecer tu negocio en internet.
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
                href="https://wa.me/send?phone=542984372962&text=Quiero información sobre E-Commerce"
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
