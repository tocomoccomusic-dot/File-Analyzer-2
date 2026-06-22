import type { ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
import { AppSidebar, type NavKey } from "./AppSidebar";
import { DashboardHeader } from "./DashboardHeader";

interface PortalShellProps {
  user: User;
  activeKey: NavKey;
  title: string;
  children: ReactNode;
}

export function PortalShell({ user, activeKey, title, children }: PortalShellProps) {
  return (
    <div className="min-h-screen bg-zinc-100 font-sans text-zinc-900">
      <div className="flex min-h-screen">
        <AppSidebar activeKey={activeKey} />
        <main className="flex-1 flex flex-col min-w-0">
          <DashboardHeader user={user} title={title} />
          <div className="p-8 overflow-y-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
