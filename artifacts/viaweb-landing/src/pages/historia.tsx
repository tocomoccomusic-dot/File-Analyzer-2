import { Navbar } from '@/components/layout/Navbar';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2016',
    events: [
      'Surge la primera oficina ubicada en la calle Maipú al 1438, of. N°2 de la localidad General Roca, Río Negro, Argentina. Comenzamos ofreciendo desarrollos web a medida, identidad corporativa y multimedia.',
      'Se suman los primeros dos colaboradores.',
    ],
  },
  {
    year: '2017',
    events: [
      'Se inicia el armado de una red interna para alojar los sitios de nuestros clientes.',
      'Empezamos a incorporar uso interno de Enterprise Resource Planning (ERP) y Customer Relationship Management (CRM).',
    ],
  },
  {
    year: '2018',
    events: [
      'Sumamos Cloud, permitiéndonos alojar sitios de nuestros clientes. Iniciamos el denominado partnership; trabajan con nosotros dos partners.',
      'Mudamos oficina hacia calle Chacabuco al 1302, of. N°1 en General Roca, Río Negro, y se incorporan dos colaboradores más.',
    ],
  },
  {
    year: '2020',
    events: [
      'Se suman 5 colaboradores más e implementamos análisis de datos y business intelligence para nuestros clientes, entregando reportes y análisis de conversión.',
      'Trasladamos oficina hacia Av. Presidente Julio Argentino Roca al 1884, of. N°1 en General Roca, Río Negro.',
    ],
  },
  {
    year: '2021',
    events: [
      'Nos adentramos en abstraer los servicios de ERP y CRM.',
      'Comenzamos el proceso de venta en mercados objetivos tales como México y Chile.',
      'Cerramos oficina física para intensificar y enfocar nuestro trabajo remotamente.',
    ],
  },
];

const stats = [
  { value: '4', label: 'Partners de comercialización' },
  { value: '+10', label: 'Colaboradores' },
  { value: '+150', label: 'Clientes' },
  { value: '+5M', label: 'en facturación anual' },
];

export default function Historia() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6">
              ← Volver al inicio
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mt-4">
              Nuestra Historia
            </h1>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl">
              Más de cinco años ofreciendo implementación y desarrollo de soluciones tecnológicas que permiten a nuestros clientes aumentar sus resultados.
            </p>
          </div>

          <div className="mb-16 p-8 bg-secondary rounded-2xl text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{s.value}</div>
                  <p className="text-xs text-white/60 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-secondary mb-10">Línea de Tiempo</h2>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 md:left-1/2" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex gap-6 md:gap-0"
                >
                  <div className="flex-none w-12 md:w-1/2 md:pr-10 md:text-right">
                    <span className="inline-block text-3xl font-extrabold text-primary leading-none">{item.year}</span>
                  </div>
                  <div className="absolute left-6 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-white shadow md:left-1/2 md:-translate-x-1.5" />
                  <div className="flex-1 md:pl-10">
                    <ul className="space-y-2">
                      {item.events.map((ev, j) => (
                        <li key={j} className="text-sm text-gray-600 leading-relaxed">{ev}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-secondary mb-3">Nuestra Misión</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                El éxito de nuestra misión se sustenta en un equipo de calificados profesionales y una apuesta permanente a generar alianzas de excelencia con nuestros clientes. Desde hace más de cinco años propiciamos un buen clima de trabajo de la mano de un equipo que se destaca por el compañerismo, trabajo en equipo y la colaboración.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-secondary mb-3">Nuestra Visión</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nuestros valores son: Invertir en las personas y su desarrollo profesional. Construir relaciones en base a confianza, responsabilizándonos por los compromisos asumidos. Y lograr resultados sustentables. Nuestra visión se cristaliza en una gama de servicios y herramientas tecnológicas que busca satisfacer la demanda de nuestros clientes y anticiparse a las necesidades del mercado.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
