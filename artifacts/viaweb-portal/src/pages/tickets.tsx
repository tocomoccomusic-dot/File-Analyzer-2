import { useState } from "react";
import { PortalLayout } from "@/components/portal/PortalLayout";
import { Plus, Clock, CheckCircle2, AlertCircle, ChevronRight, MessageCircle } from "lucide-react";

type TicketStatus = "open" | "pending" | "closed";

const statusConfig: Record<TicketStatus, { label: string; color: string; icon: typeof Clock }> = {
  open: { label: "Abierto", color: "bg-orange-100 text-orange-700", icon: AlertCircle },
  pending: { label: "En proceso", color: "bg-sky-100 text-sky-700", icon: Clock },
  closed: { label: "Cerrado", color: "bg-gray-100 text-gray-500", icon: CheckCircle2 },
};

const tickets = [
  {
    id: "1044",
    title: "Error en sincronización de stock",
    description: "El módulo de preventistas no actualiza el stock al confirmar el pedido.",
    status: "open" as TicketStatus,
    priority: "Alta",
    priorityColor: "text-red-600 bg-red-50",
    created: "22 Jun 2026",
    updated: "Hace 2 horas",
    category: "ERP",
  },
  {
    id: "1042",
    title: "Consulta sobre configuración de casillas",
    description: "¿Cómo configuro una casilla de correo nueva para el área de ventas?",
    status: "pending" as TicketStatus,
    priority: "Normal",
    priorityColor: "text-blue-600 bg-blue-50",
    created: "20 Jun 2026",
    updated: "Hace 1 día",
    category: "Hosting",
  },
  {
    id: "1039",
    title: "Actualización de logo en el sistema",
    description: "Necesitamos cambiar el logo que aparece en los presupuestos impresos.",
    status: "closed" as TicketStatus,
    priority: "Baja",
    priorityColor: "text-gray-600 bg-gray-50",
    created: "15 Jun 2026",
    updated: "18 Jun 2026",
    category: "ERP",
  },
  {
    id: "1035",
    title: "Reporte de ventas por zona",
    description: "Solicitar la creación de un reporte personalizado de ventas agrupado por zona geográfica.",
    status: "closed" as TicketStatus,
    priority: "Normal",
    priorityColor: "text-blue-600 bg-blue-50",
    created: "10 Jun 2026",
    updated: "14 Jun 2026",
    category: "ERP",
  },
];

export default function TicketsPage() {
  const [filter, setFilter] = useState<TicketStatus | "all">("all");

  const filtered = filter === "all" ? tickets : tickets.filter((t) => t.status === filter);
  const openCount = tickets.filter((t) => t.status === "open").length;

  return (
    <PortalLayout title="Tickets de Soporte">
      {/* Header actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 flex-wrap">
          {(["all", "open", "pending", "closed"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                filter === f
                  ? "bg-primary text-white"
                  : "bg-white border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {f === "all" ? "Todos" : statusConfig[f].label}
              {f === "open" && openCount > 0 && (
                <span className="ml-1.5 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {openCount}
                </span>
              )}
            </button>
          ))}
        </div>
        <a
          href="https://wa.me/542984372962?text=Hola, quiero abrir un ticket de soporte."
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
          data-testid="button-new-ticket"
        >
          <Plus className="h-4 w-4" />
          Nuevo ticket
        </a>
      </div>

      {/* Ticket list */}
      <div className="space-y-3">
        {filtered.length === 0 && (
          <div className="bg-white rounded-xl border border-border p-12 text-center">
            <CheckCircle2 className="h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-40" />
            <p className="text-muted-foreground font-medium">No hay tickets en esta categoría</p>
          </div>
        )}
        {filtered.map((ticket) => {
          const cfg = statusConfig[ticket.status];
          const Icon = cfg.icon;
          return (
            <div
              key={ticket.id}
              className="bg-white rounded-xl border border-border p-5 hover:shadow-sm transition-shadow cursor-pointer group"
              data-testid={`ticket-${ticket.id}`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  ticket.status === "open" ? "bg-orange-50" : ticket.status === "pending" ? "bg-sky-50" : "bg-gray-50"
                }`}>
                  <Icon className={`h-4 w-4 ${
                    ticket.status === "open" ? "text-orange-500" : ticket.status === "pending" ? "text-sky-500" : "text-gray-400"
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <span className="text-xs text-muted-foreground font-medium">#{ticket.id}</span>
                      <h3 className="font-bold text-foreground mt-0.5 group-hover:text-accent transition-colors">
                        {ticket.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${ticket.priorityColor}`}>
                        {ticket.priority}
                      </span>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${cfg.color}`}>
                        {cfg.label}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{ticket.description}</p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground/50 bg-muted px-2 py-0.5 rounded">{ticket.category}</span>
                    <span>Creado {ticket.created}</span>
                    <span>Actualizado {ticket.updated}</span>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1 group-hover:text-accent transition-colors" />
              </div>
            </div>
          );
        })}
      </div>

      {/* WhatsApp shortcut */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm font-bold text-green-800">¿Urgente? Escribinos por WhatsApp</p>
          <p className="text-xs text-green-600 mt-0.5">Respondemos en menos de 2 horas en horario laboral</p>
        </div>
        <a
          href="https://wa.me/542984372962?text=Hola, tengo un problema urgente."
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors whitespace-nowrap"
        >
          <MessageCircle className="h-4 w-4" />
          Consulta urgente
        </a>
      </div>
    </PortalLayout>
  );
}
