import { type ReactNode } from "react";
import { AppSidebar } from "./AppSidebar";
import { DashboardHeader } from "./DashboardHeader";

interface PortalLayoutProps {
  children: ReactNode;
  title?: string;
}

export function PortalLayout({ children, title }: PortalLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background" data-testid="portal-layout">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader title={title} />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
