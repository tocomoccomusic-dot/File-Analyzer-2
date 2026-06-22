import { PortalLayout } from "@/components/portal/PortalLayout";
import { Download, CreditCard, AlertCircle, CheckCircle2, Clock } from "lucide-react";

type InvoiceStatus = "paid" | "pending" | "overdue";

const statusConfig: Record<InvoiceStatus, { label: string; color: string; icon: typeof Clock }> = {
  paid: { label: "Pagada", color: "bg-green-100 text-green-700", icon: CheckCircle2 },
  pending: { label: "Pendiente", color: "bg-amber-100 text-amber-700", icon: Clock },
  overdue: { label: "Vencida", color: "bg-red-100 text-red-700", icon: AlertCircle },
};

const invoices = [
  { id: "F-2026-06", period: "Junio 2026", amount: "$ 85.000", date: "01 Jun 2026", due: "15 Jun 2026", status: "paid" as InvoiceStatus },
  { id: "F-2026-05", period: "Mayo 2026", amount: "$ 85.000", date: "01 May 2026", due: "15 May 2026", status: "paid" as InvoiceStatus },
  { id: "F-2026-04", period: "Abril 2026", amount: "$ 78.000", date: "01 Abr 2026", due: "15 Abr 2026", status: "paid" as InvoiceStatus },
  { id: "F-2026-03", period: "Marzo 2026", amount: "$ 78.000", date: "01 Mar 2026", due: "15 Mar 2026", status: "paid" as InvoiceStatus },
  { id: "F-2026-02", period: "Febrero 2026", amount: "$ 72.000", date: "01 Feb 2026", due: "15 Feb 2026", status: "paid" as InvoiceStatus },
  { id: "F-2026-01", period: "Enero 2026", amount: "$ 72.000", date: "01 Ene 2026", due: "15 Ene 2026", status: "paid" as InvoiceStatus },
];

const nextInvoice = {
  period: "Julio 2026",
  amount: "$ 85.000",
  due: "15 Jul 2026",
};

export default function FacturacionPage() {
  return (
    <PortalLayout title="Facturación">
      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-border p-5">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Próxima factura</p>
          <p className="text-2xl font-bold font-display text-foreground">{nextInvoice.amount}</p>
          <p className="text-xs text-muted-foreground mt-1">Vence el {nextInvoice.due}</p>
          <span className="inline-block mt-2 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
            {nextInvoice.period}
          </span>
        </div>
        <div className="bg-white rounded-xl border border-border p-5">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Estado de cuenta</p>
          <p className="text-2xl font-bold font-display text-green-600">Al día</p>
          <p className="text-xs text-muted-foreground mt-1">Sin deudas pendientes</p>
          <div className="flex items-center gap-1.5 mt-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
            <span className="text-xs text-green-600 font-medium">6 facturas pagadas</span>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-border p-5">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Método de pago</p>
          <div className="flex items-center gap-2 mt-2">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
            <p className="text-sm font-bold text-foreground">Transferencia bancaria</p>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Banco Patagonia · CBU registrado</p>
          <a
            href="https://wa.me/542984372962?text=Hola, quiero consultar sobre métodos de pago."
            target="_blank"
            rel="noreferrer"
            className="text-xs text-accent hover:underline mt-2 inline-block font-medium"
          >
            Cambiar método →
          </a>
        </div>
      </div>

      {/* Invoice table */}
      <div className="bg-white rounded-xl border border-border overflow-hidden">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h2 className="font-bold font-display text-foreground">Historial de facturas</h2>
          <span className="text-xs text-muted-foreground">{invoices.length} facturas</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">N° Factura</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Período</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Emisión</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Vencimiento</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Importe</th>
                <th className="text-center px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Estado</th>
                <th className="text-center px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">PDF</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {invoices.map((invoice) => {
                const cfg = statusConfig[invoice.status];
                const Icon = cfg.icon;
                return (
                  <tr key={invoice.id} className="hover:bg-muted/30 transition-colors" data-testid={`invoice-${invoice.id}`}>
                    <td className="px-5 py-4 font-mono text-xs font-bold text-foreground">{invoice.id}</td>
                    <td className="px-5 py-4 text-foreground font-medium">{invoice.period}</td>
                    <td className="px-5 py-4 text-muted-foreground">{invoice.date}</td>
                    <td className="px-5 py-4 text-muted-foreground">{invoice.due}</td>
                    <td className="px-5 py-4 text-right font-bold text-foreground">{invoice.amount}</td>
                    <td className="px-5 py-4 text-center">
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${cfg.color}`}>
                        <Icon className="h-3 w-3" />
                        {cfg.label}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <button
                        type="button"
                        className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-accent"
                        aria-label={`Descargar ${invoice.id}`}
                        title="Descargar PDF"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Help note */}
      <p className="text-xs text-muted-foreground text-center mt-4">
        ¿Necesitás una factura A o tenés una consulta? Escribinos a{" "}
        <a href="https://wa.me/542984372962" target="_blank" rel="noreferrer" className="text-accent hover:underline font-medium">
          WhatsApp
        </a>
        .
      </p>
    </PortalLayout>
  );
}
