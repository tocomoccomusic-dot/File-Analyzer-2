import { PortalLayout } from "@/components/portal/PortalLayout";
import { CheckCircle, Package, Globe, ShoppingCart, Cloud, Search, Smartphone, ExternalLink } from "lucide-react";

const products = [
  {
    id: 1,
    name: "ERP Mayorista",
    description: "Sistema ERP completo con módulos de ventas, stock, compras, preventistas y contabilidad.",
    status: "Activo",
    since: "Enero 2025",
    renewal: "15 Jul 2026",
    icon: Package,
    iconColor: "text-primary bg-primary/10",
    features: ["Ventas y presupuestos", "Control de stock", "Módulo de preventistas", "Reportes avanzados", "App móvil incluida"],
    badge: "bg-green-100 text-green-700",
  },
  {
    id: 2,
    name: "Hosting Profesional",
    description: "Servidor VPS con panel de control, SSL gratuito, backups diarios y monitoreo 24/7.",
    status: "Activo",
    since: "Marzo 2024",
    renewal: "15 Jul 2026",
    icon: Cloud,
    iconColor: "text-sky-600 bg-sky-50",
    features: ["10 GB SSD", "SSL gratuito", "5 casillas de correo", "Backups diarios", "Uptime 99.9%"],
    badge: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    name: "Sitio Web Corporativo",
    description: "Sitio institucional responsive con CMS, formularios y métricas básicas.",
    status: "Activo",
    since: "Marzo 2024",
    renewal: "15 Jul 2026",
    icon: Globe,
    iconColor: "text-violet-600 bg-violet-50",
    features: ["Diseño responsive", "CMS incluido", "Google Analytics", "Formulario de contacto", "Optimización SEO"],
    badge: "bg-green-100 text-green-700",
  },
];

const available = [
  { name: "E-commerce", icon: ShoppingCart, desc: "Tienda online con pagos en Argentina" },
  { name: "SEO & SEM", icon: Search, desc: "Posicionamiento y Google Ads" },
  { name: "App Móvil", icon: Smartphone, desc: "Aplicación iOS y Android" },
];

export default function ProductosPage() {
  return (
    <PortalLayout title="Mis Productos">
      {/* Active products */}
      <div className="mb-8">
        <h2 className="text-lg font-bold font-display text-foreground mb-4">Servicios Activos</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-border p-5 flex flex-col gap-4" data-testid={`product-${product.id}`}>
              <div className="flex items-start justify-between">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${product.iconColor}`}>
                  <product.icon className="h-5 w-5" />
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${product.badge}`}>
                  {product.status}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
              <ul className="space-y-1.5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-border mt-auto">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Desde {product.since}</span>
                  <span>Vence {product.renewal}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available products */}
      <div>
        <h2 className="text-lg font-bold font-display text-foreground mb-4">También disponible para tu empresa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {available.map((item) => (
            <div key={item.name} className="bg-white rounded-xl border border-dashed border-border p-5 flex flex-col items-center text-center gap-3 hover:border-accent transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-1">{item.name}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <a
                href="https://wa.me/542984372962?text=Hola, quiero consultar sobre agregar un servicio."
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-accent hover:text-accent/80 flex items-center gap-1 transition-colors"
              >
                Consultar <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}
