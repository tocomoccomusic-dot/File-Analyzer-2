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
  ArrowLeft,
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
      className="flex flex-col w-64 min-h-screen bg-[#1e2739] text-white shrink-0"
      data-testid="sidebar"
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5 border-b border-white/10">
        <img
          src={`${basePath}/company-logo.png`}
          alt="Clientum"
          className="h-8 w-8 rounded-lg object-contain shrink-0"
        />
        <div>
          <span className="text-lg font-extrabold tracking-tight text-white leading-none">
            Client<span className="text-[#f59e0b]">um</span>
          </span>
          <p className="text-[10px] text-white/40 leading-none mt-0.5">Portal de Clientes</p>
        </div>
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
                  ? "bg-[#f59e0b]/15 text-[#f59e0b] border border-[#f59e0b]/20"
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
      <div className="mx-3 mb-3 rounded-xl bg-white/5 border border-white/10 p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-[10px] text-white/40 font-medium uppercase tracking-wide">Tu suscripción</p>
            <p className="text-sm font-bold text-white mt-1">Plan Mayorista</p>
          </div>
          <span className="text-[10px] bg-[#f59e0b]/15 text-[#f59e0b] rounded-full px-2 py-0.5 font-semibold border border-[#f59e0b]/20">Activo</span>
        </div>
        <p className="text-[11px] text-white/40 mb-3">Próximo vencimiento: 15 Jul 2026</p>
        <a
          href={`${basePath}/dashboard/facturacion`}
          className="flex items-center gap-1.5 text-[11px] text-[#f59e0b]/70 hover:text-[#f59e0b] transition-colors font-medium"
        >
          <Calendar className="h-3 w-3" />
          Ver facturación
        </a>
      </div>

      {/* Back to landing */}
      <div className="px-3 pb-1">
        <a
          href="/"
          className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-white/40 hover:bg-white/5 hover:text-white/70 transition-all w-full"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al sitio
        </a>
      </div>

      {/* Sign out */}
      <div className="px-3 pb-4 border-t border-white/10 pt-3">
        <button
          type="button"
          onClick={() => signOut({ redirectUrl: "/" })}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/40 hover:bg-white/5 hover:text-white transition-all w-full"
          data-testid="button-signout"
        >
          <LogOut className="h-4 w-4" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
