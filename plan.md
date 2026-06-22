## Portal de Clientes Viaweb — Plan

A Spanish-language client portal for Viaweb (ERP-CRM). First version focuses on the **Dashboard / Inicio** view shown in the selected design, behind email/password login powered by Lovable Cloud.

### What you'll get

- **Login page** (`/auth`) — email + password sign-in and sign-up, Spanish copy ("Iniciar sesión", "Crear cuenta").
- **Protected dashboard** (`/`) — sidebar + header layout matching the "Slate argentino" prototype:
  - Sidebar: VIAWEB wordmark, nav (Inicio, Productos, Tickets, Facturación, Soporte), and "Tu suscripción" card.
  - Header: "Panel General" title, notifications icon, user name + initials avatar (real signed-in user).
  - KPI cards: Plan Activo, Tickets Abiertos, Próxima Factura, Uso Mensual (with progress bar).
  - Actividad Reciente feed (3 recent items, color-dot indicators).
  - Acciones Rápidas (Abrir nuevo ticket, Descargar última factura, Contactar soporte).
  - Dark "Soporte Dedicado" card with ejecutivo de cuenta.
- **Sign out** from the user menu.

KPI numbers, activity items, and side cards are seeded with realistic demo data for this first version (no ticketing/billing backend yet) — easy to wire to real tables later.

### Design system

Locked from the chosen direction:
- Palette: zinc neutrals (`bg-zinc-50` / `bg-zinc-100`), brand primary `#0f172a` (slate-900), accent `#0284c7` (sky-600).
- Type: Outfit (display, headings) + Inter (body), loaded via `<link>` in `__root.tsx` head.
- Tokens added to `src/styles.css` (`--brand-primary`, `--brand-accent`, surface tokens) — no hardcoded colors in components.

### Technical details

- **Backend**: enable Lovable Cloud. Use built-in `auth.users` (no profiles table needed for v1 — display name derives from email).
- **Routing** (TanStack Start):
  - `src/routes/auth.tsx` — public login/signup.
  - `src/routes/_authenticated/route.tsx` — managed gate (redirects to `/auth`).
  - `src/routes/_authenticated/index.tsx` — dashboard at `/`.
  - Replace placeholder `src/routes/index.tsx` with a redirect to the dashboard.
- **Components**: `AppSidebar`, `DashboardHeader`, `KpiCard`, `ActivityFeed`, `QuickActions`, `SupportCard` under `src/components/portal/`.
- Shadcn sidebar primitives + `SidebarProvider` in the authenticated layout.
- Session via `supabase.auth` client; sign-out clears Query cache and navigates to `/auth`.

### Out of scope (future iterations)

Tickets CRUD, real invoices/billing, products catalog, password reset, Google sign-in, language toggle. Easy to add on request.
