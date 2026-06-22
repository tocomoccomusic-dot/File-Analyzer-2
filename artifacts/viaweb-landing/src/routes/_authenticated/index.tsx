import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/portal/PortalShell";
import { Dashboard } from "@/components/portal/Dashboard";

export const Route = createFileRoute("/_authenticated/")({
  head: () => ({
    meta: [
      { title: "Inicio — Portal Viaweb" },
      { name: "description", content: "Panel general de tu cuenta Viaweb." },
    ],
  }),
  component: Inicio,
});

function Inicio() {
  const { user } = Route.useRouteContext();
  return (
    <PortalShell user={user} activeKey="inicio" title="Panel General">
      <Dashboard />
    </PortalShell>
  );
}
