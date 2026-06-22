import { ArrowRight, Download, MessageCircle, TicketPlus } from "lucide-react";

const kpis = [
  {
    label: "Plan Activo",
    value: "Minorista Gold",
    foot: "Próximo pago: 12/10",
    footTone: "accent" as const,
  },
  {
    label: "Tickets Abiertos",
    value: "02",
    foot: "1 requiere atención",
    footTone: "warning" as const,
  },
  {
    label: "Próxima Factura",
    value: "$42.850",
    foot: "Vencimiento en 8 días",
    footTone: "muted" as const,
  },
];

const activity = [
  {
    dot: "bg-green-600",
    bg: "bg-green-100",
    text: "Factura #F-9281 pagada con éxito",
    when: "Hace 2 horas",
  },
  {
    dot: "bg-zinc-400",
    bg: "bg-zinc-100",
    text: "Nuevo ticket creado: Error en sincronización de stock",
    when: "Ayer, 16:45",
  },
  {
    dot: "bg-blue-600",
    bg: "bg-blue-100",
    text: "Actualización de sistema completada v2.4.1",
    when: "3 de Octubre",
  },
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* KPI Cards */}
      <section
        aria-label="Indicadores"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="p-5 bg-zinc-50 rounded-xl ring-1 ring-black/5"
          >
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
              {kpi.label}
            </p>
            <h3 className="text-2xl font-display font-semibold text-zinc-900 mt-1">
              {kpi.value}
            </h3>
            <div
              className={
                "mt-4 flex items-center text-xs font-medium " +
                (kpi.footTone === "accent"
                  ? "text-brand-accent"
                  : kpi.footTone === "warning"
                    ? "text-amber-600"
                    : "text-zinc-500")
              }
            >
              <span>{kpi.foot}</span>
            </div>
          </div>
        ))}
        <div className="p-5 bg-zinc-50 rounded-xl ring-1 ring-black/5">
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
            Uso Mensual
          </p>
          <h3 className="text-2xl font-display font-semibold text-zinc-900 mt-1">84%</h3>
          <div className="mt-4 h-1.5 w-full bg-zinc-200 rounded-full overflow-hidden">
            <div className="h-full bg-brand-accent" style={{ width: "84%" }} />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <section className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-display font-medium text-zinc-900">Actividad Reciente</h4>
            <button className="text-sm text-brand-accent font-medium hover:underline">
              Ver todo
            </button>
          </div>
          <div className="bg-zinc-50 rounded-xl ring-1 ring-black/5 divide-y divide-zinc-950/5">
            {activity.map((it, i) => (
              <div key={i} className="p-4 flex items-start gap-4">
                <div
                  className={
                    "size-8 rounded-full flex items-center justify-center shrink-0 " +
                    it.bg
                  }
                >
                  <div className={"size-2 rounded-full " + it.dot} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-zinc-900">{it.text}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{it.when}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions & Support */}
        <aside className="space-y-6">
          <section>
            <h4 className="font-display font-medium text-zinc-900 mb-4">
              Acciones Rápidas
            </h4>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 py-2.5 px-3 bg-brand-primary text-white rounded-lg text-sm font-medium ring-1 ring-brand-primary hover:bg-zinc-800 transition-colors">
                <TicketPlus className="size-4 shrink-0" />
                Abrir nuevo ticket
                <ArrowRight className="size-4 ml-auto opacity-70" />
              </button>
              <button className="w-full flex items-center gap-3 py-2.5 px-3 bg-zinc-50 text-zinc-900 rounded-lg text-sm font-medium ring-1 ring-black/5 hover:bg-zinc-100 transition-colors">
                <Download className="size-4 shrink-0 text-zinc-500" />
                Descargar última factura
              </button>
              <button className="w-full flex items-center gap-3 py-2.5 px-3 bg-zinc-50 text-zinc-900 rounded-lg text-sm font-medium ring-1 ring-black/5 hover:bg-zinc-100 transition-colors">
                <MessageCircle className="size-4 shrink-0 text-zinc-500" />
                Contactar soporte
              </button>
            </div>
          </section>

          <div className="p-6 bg-brand-primary rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">
                Soporte Dedicado
              </p>
              <p className="text-sm text-white/90 leading-snug text-pretty">
                ¿Necesitás ayuda con tu integración? Hablá con un experto ahora.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-white/60">Tu ejecutivo de cuenta:</p>
                <p className="text-sm font-medium text-white">Julián Rossi</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <div className="size-16 bg-white rounded-full" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
