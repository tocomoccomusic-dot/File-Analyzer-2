import { createFileRoute, useNavigate, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Acceso — Portal Viaweb" },
      { name: "description", content: "Ingresá al portal de clientes de Viaweb." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) navigate({ to: "/", replace: true });
    });
  }, [navigate]);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast.error("No pudimos iniciar sesión", { description: error.message });
      return;
    }
    toast.success("¡Bienvenido de nuevo!");
    router.invalidate();
    navigate({ to: "/", replace: true });
  }

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: window.location.origin },
    });
    setLoading(false);
    if (error) {
      toast.error("No pudimos crear tu cuenta", { description: error.message });
      return;
    }
    toast.success("Cuenta creada", { description: "Ya podés ingresar al portal." });
    router.invalidate();
    navigate({ to: "/", replace: true });
  }

  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center px-4 font-sans">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="font-display font-semibold text-2xl tracking-tight text-brand-primary">
              VIAWEB
            </span>
          </div>
          <h1 className="font-display text-2xl font-semibold text-zinc-900">
            Portal de Clientes
          </h1>
          <p className="text-sm text-zinc-500 mt-2">
            Accedé a tu plan, tickets y facturación.
          </p>
        </div>

        <div className="bg-zinc-50 rounded-2xl ring-1 ring-black/5 p-6 shadow-sm">
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="signin">Iniciar sesión</TabsTrigger>
              <TabsTrigger value="signup">Crear cuenta</TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-in">Correo electrónico</Label>
                  <Input
                    id="email-in"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vos@empresa.com.ar"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pwd-in">Contraseña</Label>
                  <Input
                    id="pwd-in"
                    type="password"
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-primary hover:bg-zinc-800 text-white"
                >
                  {loading ? "Ingresando..." : "Ingresar al portal"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-up">Correo electrónico</Label>
                  <Input
                    id="email-up"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vos@empresa.com.ar"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pwd-up">Contraseña</Label>
                  <Input
                    id="pwd-up"
                    type="password"
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-primary hover:bg-zinc-800 text-white"
                >
                  {loading ? "Creando cuenta..." : "Crear cuenta"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>

        <p className="text-center text-xs text-zinc-500 mt-6">
          © {new Date().getFullYear()} Viaweb · Soporte ERP-CRM
        </p>
      </div>
    </div>
  );
}
