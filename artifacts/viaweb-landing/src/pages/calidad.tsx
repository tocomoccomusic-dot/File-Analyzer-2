import { Navbar } from '@/components/layout/Navbar';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Target, CheckCircle, Layers } from 'lucide-react';

const scrumban = [
  {
    title: 'Visualizar el trabajo',
    desc: 'Se ordenan las tarjetas en la columna "en cola" (para hacer), y la regla directa es que la tarea ubicada al principio de la columna es la más importante.',
  },
  {
    title: 'Priorizar tareas',
    desc: 'Ideal para visualizar los pasos del flujo de trabajo. El equipo tiene mejor perspectiva del proceso, descubriendo dónde aparecen los cuellos de botella.',
  },
  {
    title: 'Extender el tablero',
    desc: 'El equipo planifica si es necesario. Las tareas se tiran del backlog hasta que quede vacío, lo que conlleva tener que planificar más tareas.',
  },
  {
    title: 'Planificar bajo demanda',
    desc: 'Estimar se considera como desperdicio. Las sesiones de planificación son cortas y están centradas en priorizar en vez de en planificar.',
  },
];

const goals = [
  'La mejora continua en los procesos de digitalización de su empresa.',
  'Asegurar que las soluciones brindadas logren resultados positivos y efectivos.',
  'Cumplir los requisitos aplicados para garantizar las metas propuestas, satisfacer sus necesidades y la de sus clientes.',
];

export default function Calidad() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              ← Volver al inicio
            </Link>
          </div>

          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Política de Calidad</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mt-2 mb-4">
              Viaweb: el referente de desarrollo tecnológico
            </h1>
            <p className="text-lg text-gray-500 max-w-3xl leading-relaxed">
              La empresa que se dedica principalmente a digitalizar su negocio promoviendo soluciones de software que se adapten a sus necesidades actuales y futuras.
            </p>
          </div>

          <div className="mb-14 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Layers,
                title: 'Sistema ERP',
                desc: 'Abarcamos por completo el sistema ERP para ubicar la información del día a día en un sistema que posibilite tomar decisiones correctas de ingresos y egresos.',
              },
              {
                icon: Target,
                title: 'Sistema CRM',
                desc: 'Ayudamos a nuestros clientes a llevar a cabo un embudo de ventas efectivo integrando las herramientas brindadas, logrando que el customer journey sea positivo y efectivo.',
              },
              {
                icon: CheckCircle,
                title: 'Desarrollo Web',
                desc: 'Brindamos desarrollo web con el objetivo de lograr la unión de todos los canales de venta e integrar todos los sistemas de información internos de la empresa.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mb-14 p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-sm text-gray-600 leading-relaxed">
              El proceso completo se lleva a cabo desde la estrategia, maquetación al diseño y, a posterior, puesta en producción en nuestros servidores Cloud, facilitándole a la empresa su total digitalización con nosotros y la obtención de resultados exitosos. Los resultados de venta logrados por nuestros clientes son nuestro mayor objetivo; también, llegar a los clientes de nuestros clientes, generándoles de esta manera más tráfico en los sitios.
            </p>
          </div>

          <div className="mb-14">
            <h2 className="text-2xl font-extrabold text-secondary mb-2">Nuestro proceso de Desarrollo</h2>
            <p className="text-gray-500 text-sm mb-8">
              <strong>Scrumban</strong> combina características de Scrum y el método Kanban, con la finalidad de obtener mejores y más rápidos resultados.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {scrumban.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100"
                >
                  <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-semibold text-secondary text-sm mb-1">{s.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-secondary rounded-2xl text-white">
            <h2 className="text-xl font-bold mb-5">Nuestros Objetivos como Viaweb</h2>
            <ul className="space-y-3">
              {goals.map((g) => (
                <li key={g} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
