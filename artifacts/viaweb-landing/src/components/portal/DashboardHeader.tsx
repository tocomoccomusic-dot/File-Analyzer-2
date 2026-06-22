import type { User } from "@supabase/supabase-js";
import { Bell, LogOut } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function deriveName(user: User) {
  const meta = (user.user_metadata ?? {}) as Record<string, unknown>;
  const full = typeof meta.full_name === "string" ? meta.full_name : "";
  if (full) return full;
  const email = user.email ?? "";
  const local = email.split("@")[0] ?? "Cliente";
  return local
    .split(/[._-]/)
    .filter(Boolean)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export function DashboardHeader({ user, title }: { user: User; title: string }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const name = deriveName(user);
  const company =
    (user.user_metadata?.company as string | undefined) ?? "Distribuidora Sur";

  async function handleSignOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <header className="h-16 border-b border-zinc-200 bg-zinc-50 flex items-center justify-between px-8">
      <h2 className="font-display font-medium text-lg text-zinc-900">{title}</h2>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Notificaciones"
          className="p-2 text-zinc-500 hover:bg-zinc-200 rounded-full transition-colors relative"
        >
          <Bell className="size-4" />
          <span className="absolute top-1.5 right-1.5 size-1.5 bg-brand-accent rounded-full" />
        </button>

        <div className="h-8 w-px bg-zinc-200" />

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-3 outline-none">
            <div className="text-right">
              <p className="text-sm font-medium text-zinc-900 leading-tight">{name}</p>
              <p className="text-xs text-zinc-500">{company}</p>
            </div>
            <div className="size-9 rounded-full bg-zinc-300 ring-1 ring-black/5 grid place-items-center">
              <span className="text-xs font-semibold text-zinc-600">
                {initials(name) || "VI"}
              </span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="font-normal">
              <p className="text-sm font-medium">{name}</p>
              <p className="text-xs text-zinc-500 truncate">{user.email}</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Mi cuenta</DropdownMenuItem>
            <DropdownMenuItem>Configuración</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut} className="text-red-600 focus:text-red-700">
              <LogOut className="mr-2 size-4" />
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
