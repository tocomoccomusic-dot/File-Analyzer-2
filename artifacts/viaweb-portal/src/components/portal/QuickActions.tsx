import { Ticket, Download, MessageCircle } from "lucide-react";

const actions = [
  {
    label: "Abrir nuevo ticket",
    icon: Ticket,
    href: "/tickets",
    color: "bg-sky-50 text-sky-700 hover:bg-sky-100",
    border: "border-sky-200",
  },
  {
    label: "Descargar última factura",
    icon: Download,
    href: "#",
    color: "bg-slate-50 text-slate-700 hover:bg-slate-100",
    border: "border-slate-200",
  },
  {
    label: "Contactar soporte",
    icon: MessageCircle,
    href: "https://wa.me/send?phone=542984372962",
    color: "bg-green-50 text-green-700 hover:bg-green-100",
    border: "border-green-200",
    external: true,
  },
];

export function QuickActions() {
  return (
    <div className="bg-white rounded-xl border border-border p-5" data-testid="quick-actions">
      <h3 className="font-bold font-display text-foreground mb-4">Acciones Rápidas</h3>
      <div className="space-y-2">
        {actions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noreferrer" : undefined}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-colors ${action.color} ${action.border}`}
            data-testid={`action-${action.label.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <action.icon className="h-4 w-4 shrink-0" />
            <span className="text-sm font-medium">{action.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
