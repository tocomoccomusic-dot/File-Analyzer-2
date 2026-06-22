import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  LayoutDashboard,
  Package,
  Ticket,
  FileText,
  Headphones,
  ChevronRight,
  Calendar,
  LogOut,
} from "lucide-react";
import { useClerk } from "@clerk/react";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

const navItems = [
  { label: "Inicio", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Productos", icon: Package, href: "/dashboard/productos" },
  { label: "Tickets", icon: Ticket, href: "/dashboard/tickets" },
  { label: "Facturación", icon: FileText, href: "/dashboard/facturacion" },
  { label: "Soporte", icon: Headphones, href: "/dashboard/soporte" },
];

export function AppSidebar() {
  const [location] = useLocation();
  const { signOut } = useClerk();

  return (
    <aside
      className="flex flex-col w-64 min-h-screen bg-primary text-primary-foreground shrink-0"
      data-testid="sidebar"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5 border-b border-white/10">
        <span className="text-2xl font-extrabold tracking-tighter font-display text-white">
          VIA<span className="text-sky-400">WEB</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1" aria-label="Menú principal">
        {navItems.map((item) => {
          const isActive = location === item.href || location.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              data-testid={`nav-${item.label.toLowerCase()}`}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <span className="flex-1">{item.label}</span>
              {isActive && <ChevronRight className="h-3 w-3 opacity-60" />}
            </Link>
          );
        })}
      </nav>

      {/* Subscription card */}
      <div className="mx-3 mb-4 rounded-xl bg-white/5 border border-white/10 p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-xs text-white/50 font-medium uppercase tracking-wide">Tu suscripción</p>
            <p className="text-sm font-bold text-white mt-1">Plan Mayorista</p>
          </div>
          <span className="text-xs bg-sky-500/20 text-sky-300 rounded-full px-2 py-0.5 font-medium">Activo</span>
        </div>
        <p className="text-xs text-white/40 mb-3">Próximo vencimiento: 15 Jul 2026</p>
        <a
          href={`${basePath}/dashboard/facturacion`}
          className="flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 transition-colors font-medium"
        >
          <Calendar className="h-3 w-3" />
          Ver facturación
        </a>
      </div>

      {/* Sign out */}
      <div className="px-3 pb-4 border-t border-white/10 pt-3">
        <button
          type="button"
          onClick={() => signOut({ redirectUrl: basePath || "/" })}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/50 hover:bg-white/5 hover:text-white transition-all w-full"
          data-testid="button-signout"
        >
          <LogOut className="h-4 w-4" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
