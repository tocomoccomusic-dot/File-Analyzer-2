import { Navbar } from '@/components/layout/Navbar';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

const modules = [
  {
    title: 'CRM & Ventas',
    items: [
      'Seguimiento clientes CRM',
      'Gestión de terceros (clientes, proveedores y contactos)',
      'Gestión de contratos de clientes',
      'Modificación y creación de documentos (presupuestos, pedidos, facturas, notas de entrega)',
      'Gestión comercial (presupuestos, pedidos, contratos)',
      'Gestión de tickets de soporte',
    ],
  },
  {
    title: 'Finanzas & Facturación',
    items: [
      'Control financiero de la empresa',
      'Factura electrónica – Integración Webservices AFIP',
      'Gestión electrónica documental (documentación centralizada)',
      'Gestión de intervenciones (partes de trabajos realizados a los clientes)',
    ],
  },
  {
    title: 'Gestión de Relaciones Humanas (HR)',
    items: [
      'Gestión de usuarios (grupos y permisos)',
      'Gestión de miembros (clubs, asociaciones, cuotas)',
      'Gestión de recursos humanos (vacaciones, salarios)',
      'Hojas de horas fáciles de usar',
    ],
  },
  {
    title: 'Productividad',
    items: [
      'Gestión de proyectos (márgenes de beneficios o costes)',
      'Gestión de agenda y registros (control de eventos y acciones)',
      'Desarrollo de reportes (recopilación de datos y estadísticas)',
      'Manufactura (lista de materiales y planificación MRP)',
    ],
  },
  {
    title: 'Solución Omnicanal',
    items: [
      'Dashboard – página y tablero de inicio',
      'Gestión de punto de venta',
      'Gestión de productos y servicios / almacenes y stock',
      'Integración con e-commerce (sincronización de producto y stock en tiempo real)',
      'Envíos (rastrear selección, pedidos y cantidad a enviar)',
    ],
  },
  {
    title: 'Integración & Desarrollo',
    items: [
      'Administración del sistema (configuración y parametrización)',
      'Programación a medida (modificación de funcionalidades)',
      'Migración de datos (traspaso óptimo y sencillo)',
    ],
  },
];

export default function ErpCrm() {
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
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Software de Gestión</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mt-2 mb-4">
              Implementaciones ERP / CRM
            </h1>
            <p className="text-lg text-gray-500 max-w-3xl leading-relaxed">
              Un software completo para gestionar todos sus negocios. Los sistemas ERP integran y automatizan muchas de las prácticas de negocio asociadas con los aspectos operativos o productivos de una empresa, mientras que el CRM gestiona la relación con los clientes, la venta y el marketing.
            </p>
          </div>

          <div className="mb-12 p-8 bg-secondary rounded-2xl text-white">
            <p className="text-white/80 text-sm leading-relaxed">
              El propósito fundamental de un ERP es otorgar apoyo a los clientes del negocio: tiempos rápidos de respuesta a sus problemas así como un eficiente manejo de información que permita la toma oportuna de decisiones y disminución de costes de operación. ERP/CRM es un software completamente modular —sólo activamos las funciones deseadas— para gestión empresarial de PYMES, profesionales independientes, autoemprendedores o asociaciones. Tu negocio se ejecuta dentro de un servidor web, siendo accesible desde cualquier lugar con conexión a internet.
            </p>
          </div>

          <h2 className="text-2xl font-extrabold text-secondary mb-8">Módulos Disponibles</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <h3 className="font-bold text-secondary mb-4 text-sm uppercase tracking-wide">{mod.title}</h3>
                <ul className="space-y-2">
                  {mod.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center">
            <h3 className="text-lg font-bold text-secondary mb-2">¿Listo para digitalizar su empresa?</h3>
            <p className="text-sm text-gray-500 mb-6 max-w-lg mx-auto">
              Agendá una reunión sin costo y analizamos juntos qué módulos se adaptan mejor a tu negocio.
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
                href="https://wa.me/send?phone=542984372962&text=Quiero información sobre ERP/CRM"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border-2 border-secondary/20 text-secondary font-bold px-8 py-3 rounded-full hover:border-primary hover:text-primary transition-all text-sm"
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
