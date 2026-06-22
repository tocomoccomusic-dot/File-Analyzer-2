import { useEffect, useRef } from "react";
import type React from "react";
import { ClerkProvider, SignIn, SignUp, Show, useClerk } from "@clerk/react";
import { publishableKeyFromHost } from "@clerk/react/internal";
import { shadcn } from "@clerk/themes";
import { Switch, Route, Redirect, useLocation, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import DashboardPage from "@/pages/dashboard";
import ProductosPage from "@/pages/productos";
import TicketsPage from "@/pages/tickets";
import FacturacionPage from "@/pages/facturacion";
import SoportePage from "@/pages/soporte";

const queryClient = new QueryClient();

const clerkPubKey = publishableKeyFromHost(
  window.location.hostname,
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
);

const clerkProxyUrl = import.meta.env.VITE_CLERK_PROXY_URL;

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function stripBase(path: string): string {
  return basePath && path.startsWith(basePath)
    ? path.slice(basePath.length) || "/"
    : path;
}

if (!clerkPubKey) {
  throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY");
}

const clerkAppearance = {
  theme: shadcn,
  cssLayerName: "clerk" as const,
  options: {
    logoPlacement: "inside" as const,
    logoLinkUrl: "/",
    logoImageUrl: `${window.location.origin}${basePath}/company-logo.png`,
  },
  variables: {
    colorPrimary: "#f59e0b",
    colorForeground: "#1e2739",
    colorMutedForeground: "#6b7280",
    colorDanger: "#dc2626",
    colorBackground: "#ffffff",
    colorInput: "#f8fafc",
    colorInputForeground: "#1e2739",
    colorNeutral: "#e2e8f0",
    fontFamily: "'Inter', sans-serif",
    borderRadius: "0.75rem",
  },
  elements: {
    rootBox: "w-full flex justify-center",
    cardBox: "bg-white rounded-2xl w-[440px] max-w-full overflow-hidden shadow-xl border border-gray-100",
    card: "!shadow-none !border-0 !bg-transparent !rounded-none",
    footer: "!shadow-none !border-0 !bg-transparent !rounded-none",
    headerTitle: "text-[#1e2739] font-bold font-display text-xl",
    headerSubtitle: "text-gray-500",
    socialButtonsBlockButtonText: "text-[#1e2739] font-medium",
    formFieldLabel: "text-[#1e2739] font-medium text-sm",
    footerActionLink: "text-[#f59e0b] hover:text-[#d97706] font-medium",
    footerActionText: "text-gray-500",
    dividerText: "text-gray-400",
    identityPreviewEditButton: "text-[#f59e0b]",
    formFieldSuccessText: "text-green-600",
    alertText: "text-red-600",
    logoBox: "mb-3",
    logoImage: "h-10 rounded-xl",
    socialButtonsBlockButton: "border-gray-200 hover:bg-gray-50",
    formButtonPrimary: "bg-[#1e2739] hover:bg-[#2d3a50] text-white",
    formFieldInput: "bg-gray-50 border-gray-200 text-[#1e2739]",
    footerAction: "bg-gray-50",
    dividerLine: "bg-gray-200",
    alert: "bg-red-50 border-red-200",
    otpCodeFieldInput: "border-gray-300 bg-gray-50",
    formFieldRow: "gap-3",
    main: "px-1",
  },
};

function ClerkQueryClientCacheInvalidator() {
  const { addListener } = useClerk();
  const qc = useQueryClient();
  const prevUserIdRef = useRef<string | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = addListener(({ user }) => {
      const userId = user?.id ?? null;
      if (prevUserIdRef.current !== undefined && prevUserIdRef.current !== userId) {
        qc.clear();
      }
      prevUserIdRef.current = userId;
    });
    return unsubscribe;
  }, [addListener, qc]);

  return null;
}

function SignInPage() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-zinc-100 px-4">
      <SignIn
        routing="path"
        path={`${basePath}/sign-in`}
        signUpUrl={`${basePath}/sign-up`}
      />
    </div>
  );
}

function SignUpPage() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-zinc-100 px-4">
      <SignUp
        routing="path"
        path={`${basePath}/sign-up`}
        signInUrl={`${basePath}/sign-in`}
      />
    </div>
  );
}

function HomeRedirect() {
  return (
    <>
      <Show when="signed-in">
        <Redirect to="/dashboard" />
      </Show>
      <Show when="signed-out">
        <Redirect to="/sign-in" />
      </Show>
    </>
  );
}

function protect(Page: React.ComponentType) {
  return function ProtectedPage() {
    return (
      <>
        <Show when="signed-in">
          <Page />
        </Show>
        <Show when="signed-out">
          <Redirect to="/sign-in" />
        </Show>
      </>
    );
  };
}

const ProtectedDashboard = protect(DashboardPage);
const ProtectedProductos = protect(ProductosPage);
const ProtectedTickets = protect(TicketsPage);
const ProtectedFacturacion = protect(FacturacionPage);
const ProtectedSoporte = protect(SoportePage);

function ClerkProviderWithRoutes() {
  const [, setLocation] = useLocation();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      proxyUrl={clerkProxyUrl}
      appearance={clerkAppearance}
      signInUrl={`${basePath}/sign-in`}
      signUpUrl={`${basePath}/sign-up`}
      localization={{
        signIn: {
          start: {
            title: "Bienvenido de vuelta",
            subtitle: "Ingresá a tu portal de clientes",
          },
        },
        signUp: {
          start: {
            title: "Crear cuenta",
            subtitle: "Accedé al portal de clientes Viaweb",
          },
        },
      }}
      routerPush={(to) => setLocation(stripBase(to))}
      routerReplace={(to) => setLocation(stripBase(to), { replace: true })}
    >
      <QueryClientProvider client={queryClient}>
        <ClerkQueryClientCacheInvalidator />
        <TooltipProvider>
          <Switch>
            <Route path="/" component={HomeRedirect} />
            <Route path="/sign-in/*?" component={SignInPage} />
            <Route path="/sign-up/*?" component={SignUpPage} />
            <Route path="/dashboard" component={ProtectedDashboard} />
            <Route path="/dashboard/productos" component={ProtectedProductos} />
            <Route path="/dashboard/tickets" component={ProtectedTickets} />
            <Route path="/dashboard/facturacion" component={ProtectedFacturacion} />
            <Route path="/dashboard/soporte" component={ProtectedSoporte} />
            <Route component={NotFound} />
          </Switch>
        </TooltipProvider>
        <Toaster />
      </QueryClientProvider>
    </ClerkProvider>
  );
}

function App() {
  return (
    <WouterRouter base={basePath}>
      <ClerkProviderWithRoutes />
    </WouterRouter>
  );
}

export default App;
