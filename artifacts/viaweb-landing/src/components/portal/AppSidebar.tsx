import { Home, Package, Ticket, Receipt, LifeBuoy } from "lucide-react";

export type NavKey = "inicio" | "productos" | "tickets" | "facturacion" | "soporte";

const items: { key: NavKey; label: string; icon: typeof Home }[] = [
  { key: "inicio", label: "Inicio", icon: Home },
  { key: "productos", label: "Productos", icon: Package },
  { key: "tickets", label: "Tickets", icon: Ticket },
  { key: "facturacion", label: "Facturación", icon: Receipt },
  { key: "soporte", label: "Soporte", icon: LifeBuoy },
];

export function AppSidebar({ activeKey }: { activeKey: NavKey }) {
  return (
    <aside className="w-64 border-r border-zinc-200 bg-zinc-50 flex flex-col shrink-0">
      <div className="p-6">
        <div className="h-8 w-32 bg-brand-primary/10 rounded flex items-center px-3">
          <span className="font-display font-semibold text-brand-primary tracking-tight">
            VIAWEB
          </span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = item.key === activeKey;
          return (
            <button
              key={item.key}
              type="button"
              className={
                "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors " +
                (isActive
                  ? "bg-zinc-200/50 text-brand-primary"
                  : "text-zinc-600 hover:bg-zinc-200/30")
              }
            >
              <Icon
                className={
                  "size-4 shrink-0 " +
                  (isActive ? "text-brand-primary" : "text-zinc-400")
                }
              />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-200">
        <div className="p-3 bg-zinc-200/40 rounded-lg ring-1 ring-black/5">
          <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mb-1">
            Tu suscripción
          </p>
          <p className="text-sm font-medium text-zinc-900">ERP Minorista</p>
          <p className="text-xs text-zinc-500 mt-1">Vence: 12 Oct, 2024</p>
        </div>
      </div>
    </aside>
  );
}
