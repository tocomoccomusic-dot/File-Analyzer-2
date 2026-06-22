import { PortalLayout } from "@/components/portal/PortalLayout";
import { MessageCircle, Phone, HelpCircle, BookOpen, Video, FileText, Clock, Mail } from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "Base de conocimiento",
    description: "Artículos y guías sobre el uso del sistema ERP, configuración y funciones.",
    href: "https://viaweb.tawk.help/",
    cta: "Explorar artículos",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: Video,
    title: "Videotutoriales",
    description: "Tutoriales en video sobre las funciones más usadas del sistema.",
    href: "https://viaweb.net.ar/tickets/",
    cta: "Ver videos",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: FileText,
    title: "Documentación técnica",
    description: "Manuales de usuario, guías de implementación y documentación del sistema.",
    href: "https://viaweb.net.ar/tickets/",
    cta: "Ver documentación",
    color: "bg-amber-50 text-amber-600",
  },
];

const faq = [
  {
    q: "¿Cómo puedo cambiar mi contraseña del sistema?",
    a: "Desde el panel principal, hacé clic en tu nombre de usuario → Configuración → Seguridad → Cambiar contraseña.",
  },
  {
    q: "¿Con qué frecuencia se realizan los backups?",
    a: "Los backups se realizan automáticamente todos los días a las 2 AM y se conservan por 30 días.",
  },
  {
    q: "¿Cómo agrego un nuevo usuario al sistema?",
    a: "Desde la sección Configuración → Usuarios → Nuevo usuario. Completá los datos y asigná el perfil de acceso correspondiente.",
  },
  {
    q: "¿Puedo acceder al sistema desde mi celular?",
    a: "Sí. El sistema tiene una app móvil disponible para Android e iOS. También podés acceder desde el navegador del celular.",
  },
  {
    q: "¿Cómo exporto los reportes a Excel?",
    a: "En cualquier reporte, hacé clic en el botón 'Exportar' y seleccioná el formato .xlsx (Excel) o .csv.",
  },
];

export default function SoportePage() {
  return (
    <PortalLayout title="Soporte">
      {/* Contact channels */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <a
          href="https://wa.me/542984372962?text=Hola, necesito soporte técnico."
          target="_blank"
          rel="noreferrer"
          className="bg-white rounded-xl border border-border p-5 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all group"
          data-testid="support-whatsapp"
        >
          <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
            <MessageCircle className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h3 className="font-bold text-foreground group-hover:text-green-600 transition-colors">WhatsApp</h3>
            <p className="text-xs text-muted-foreground mt-0.5">+54 298 437-2962</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            Respuesta en &lt; 2 horas
          </div>
        </a>

        <a
          href="tel:+5492984372962"
          className="bg-white rounded-xl border border-border p-5 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all group"
          data-testid="support-phone"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Teléfono</h3>
            <p className="text-xs text-muted-foreground mt-0.5">+54 (298) 437-2962</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            Lun–Vie: 9 a 18 hs
          </div>
        </a>

        <a
          href="https://viaweb.net.ar/tickets/"
          target="_blank"
          rel="noreferrer"
          className="bg-white rounded-xl border border-border p-5 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all group"
          data-testid="support-ticket"
        >
          <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
            <HelpCircle className="h-5 w-5 text-sky-600" />
          </div>
          <div>
            <h3 className="font-bold text-foreground group-hover:text-sky-600 transition-colors">Sistema de tickets</h3>
            <p className="text-xs text-muted-foreground mt-0.5">viaweb.net.ar/tickets</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            Respuesta en &lt; 24 horas
          </div>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Resources */}
        <div>
          <h2 className="text-base font-bold font-display text-foreground mb-4">Recursos de ayuda</h2>
          <div className="space-y-3">
            {resources.map((res) => (
              <a
                key={res.title}
                href={res.href}
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-xl border border-border p-4 flex items-start gap-4 hover:shadow-sm transition-shadow group"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${res.color}`}>
                  <res.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground text-sm group-hover:text-accent transition-colors">{res.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{res.description}</p>
                  <span className="text-xs text-accent font-medium mt-1 inline-block">{res.cta} →</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-base font-bold font-display text-foreground mb-4">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-border p-4">
                <p className="text-sm font-bold text-foreground mb-1.5">{item.q}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Email note */}
      <div className="mt-6 bg-primary/5 border border-primary/10 rounded-xl p-4 flex items-center gap-3">
        <Mail className="h-5 w-5 text-primary shrink-0" />
        <p className="text-sm text-foreground">
          También podés escribirnos a{" "}
          <a href="mailto:soporte@viaweb.net.ar" className="font-bold text-accent hover:underline">
            soporte@viaweb.net.ar
          </a>
          {" "}— respondemos en horario laboral.
        </p>
      </div>
    </PortalLayout>
  );
}
