const activities = [
  {
    id: 1,
    title: "Ticket #1044 abierto",
    description: "Error en sincronización de stock",
    time: "Hace 2 horas",
    color: "bg-orange-500",
  },
  {
    id: 2,
    title: "Factura #F-2026-06 disponible",
    description: "Período Junio 2026 — Plan Mayorista",
    time: "Hace 1 día",
    color: "bg-sky-500",
  },
  {
    id: 3,
    title: "Actualización del sistema",
    description: "Módulo de preventistas v3.2 instalado",
    time: "Hace 3 días",
    color: "bg-green-500",
  },
];

export function ActivityFeed() {
  return (
    <div className="bg-white rounded-xl border border-border p-5" data-testid="activity-feed">
      <h3 className="font-bold font-display text-foreground mb-4">Actividad Reciente</h3>
      <div className="space-y-4">
        {activities.map((item, i) => (
          <div key={item.id} className="flex items-start gap-3">
            <div className="flex flex-col items-center shrink-0 mt-1">
              <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
              {i < activities.length - 1 && <div className="w-px flex-1 bg-border mt-1 h-8" />}
            </div>
            <div className="flex-1 min-w-0 pb-1">
              <p className="text-sm font-semibold text-foreground leading-tight" data-testid={`activity-title-${item.id}`}>{item.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
              <p className="text-xs text-muted-foreground/70 mt-1">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
