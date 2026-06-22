import { AppSidebar } from "@/components/portal/AppSidebar";
import { DashboardHeader } from "@/components/portal/DashboardHeader";
import { KpiCard } from "@/components/portal/KpiCard";
import { ActivityFeed } from "@/components/portal/ActivityFeed";
import { QuickActions } from "@/components/portal/QuickActions";
import { SupportCard } from "@/components/portal/SupportCard";
import {
  CheckCircle,
  Ticket,
  CalendarClock,
  BarChart3,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background" data-testid="dashboard-page">
      <AppSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />

        <main className="flex-1 p-6 overflow-auto">
          {/* KPI grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            <KpiCard
              title="Plan Activo"
              value="Mayorista"
              subtitle="Desde Enero 2025"
              icon={CheckCircle}
              iconColor="text-green-600"
              badge="Al día"
              badgeColor="bg-green-100 text-green-700"
            />
            <KpiCard
              title="Tickets Abiertos"
              value="2"
              subtitle="Último: hace 2 horas"
              icon={Ticket}
              iconColor="text-orange-500"
              badge="1 urgente"
              badgeColor="bg-orange-100 text-orange-700"
            />
            <KpiCard
              title="Próxima Factura"
              value="15 Jul"
              subtitle="Plan Mayorista mensual"
              icon={CalendarClock}
              iconColor="text-sky-600"
            />
            <KpiCard
              title="Uso Mensual"
              value="68%"
              subtitle="Del límite de usuarios"
              icon={BarChart3}
              iconColor="text-violet-600"
              progress={68}
              progressLabel="Usuarios activos"
            />
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Left column — takes 2/3 */}
            <div className="lg:col-span-2 space-y-4">
              <ActivityFeed />
              <QuickActions />
            </div>

            {/* Right column — takes 1/3 */}
            <div>
              <SupportCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
