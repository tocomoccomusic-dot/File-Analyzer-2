import { Phone, MessageCircle } from "lucide-react";

export function SupportCard() {
  return (
    <div className="bg-primary rounded-xl p-5 text-white" data-testid="support-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
          <span className="text-sm font-bold">JM</span>
        </div>
        <div>
          <p className="text-xs text-white/50 font-medium">Tu ejecutivo</p>
          <p className="text-sm font-bold">Soporte Viaweb</p>
        </div>
      </div>
      <h3 className="font-bold font-display text-white mb-1">Soporte Dedicado</h3>
      <p className="text-xs text-white/60 mb-4 leading-relaxed">
        Tenés un ejecutivo de cuenta asignado. Contactanos por cualquier consulta — respondemos en menos de 24 horas.
      </p>
      <div className="space-y-2">
        <a
          href="https://wa.me/send?phone=542984372962"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-xs font-medium text-sky-300 hover:text-sky-200 transition-colors"
          data-testid="link-whatsapp-support"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          WhatsApp: +54 298 437-2962
        </a>
        <a
          href="tel:+5492984372962"
          className="flex items-center gap-2 text-xs font-medium text-sky-300 hover:text-sky-200 transition-colors"
          data-testid="link-phone-support"
        >
          <Phone className="h-3.5 w-3.5" />
          Llamar al soporte
        </a>
      </div>
    </div>
  );
}
