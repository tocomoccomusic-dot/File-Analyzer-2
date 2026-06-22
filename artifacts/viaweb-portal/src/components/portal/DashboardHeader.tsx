import { Bell, ChevronDown } from "lucide-react";
import { useUser } from "@clerk/react";
import { useState } from "react";

interface DashboardHeaderProps {
  title?: string;
}

function getInitials(name: string | undefined | null, email: string | undefined | null): string {
  if (name) {
    return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  }
  if (email) return email[0].toUpperCase();
  return "U";
}

export function DashboardHeader({ title }: DashboardHeaderProps = {}) {
  const { user } = useUser();
  const [notifOpen, setNotifOpen] = useState(false);

  const displayName = user?.fullName || user?.username || user?.primaryEmailAddress?.emailAddress?.split("@")[0] || "Usuario";
  const initials = getInitials(user?.fullName, user?.primaryEmailAddress?.emailAddress);

  return (
    <header className="h-16 bg-white border-b border-border flex items-center px-6 gap-4 shrink-0" data-testid="dashboard-header">
      <div className="flex-1">
        <h1 className="text-xl font-bold font-display text-foreground">{title ?? "Panel General"}</h1>
      </div>

      {/* Notification bell */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setNotifOpen(!notifOpen)}
          className="relative p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          data-testid="button-notifications"
          aria-label="Notificaciones"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-sky-500 rounded-full border border-white" />
        </button>
        {notifOpen && (
          <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-border z-50 overflow-hidden">
            <div className="px-4 py-3 border-b border-border">
              <p className="font-semibold text-sm text-foreground">Notificaciones</p>
            </div>
            <div className="py-2">
              <div className="px-4 py-3 hover:bg-muted transition-colors cursor-pointer">
                <p className="text-sm font-medium text-foreground">Factura generada</p>
                <p className="text-xs text-muted-foreground mt-0.5">Tu factura de Junio está disponible</p>
              </div>
              <div className="px-4 py-3 hover:bg-muted transition-colors cursor-pointer">
                <p className="text-sm font-medium text-foreground">Ticket #1042 cerrado</p>
                <p className="text-xs text-muted-foreground mt-0.5">El soporte cerró tu consulta</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* User avatar */}
      <div className="flex items-center gap-2" data-testid="user-menu">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
          <span className="text-xs font-bold text-white">{initials}</span>
        </div>
        <div className="hidden sm:block">
          <p className="text-sm font-medium text-foreground leading-none" data-testid="text-username">{displayName}</p>
        </div>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </div>
    </header>
  );
}
