import { useState, useEffect } from "react";
import { MessageCircle, X, Phone, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WA_NUMBER = "542984372962";
const WA_DEFAULT_MSG = encodeURIComponent("¡Hola! Quiero hacer una consulta.");
const TAWK_PROPERTY_ID = import.meta.env.VITE_TAWK_PROPERTY_ID as string | undefined;
const TAWK_WIDGET_ID = (import.meta.env.VITE_TAWK_WIDGET_ID as string | undefined) ?? "default";

function useTawkTo() {
  useEffect(() => {
    if (!TAWK_PROPERTY_ID) return;
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.head.appendChild(s1);
    return () => {
      document.head.removeChild(s1);
    };
  }, []);
}

export function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useTawkTo();

  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setOpen(true), 8000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const close = () => {
    setOpen(false);
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">Soporte Viaweb</p>
                  <p className="text-white/80 text-xs">Respondemos en minutos</p>
                </div>
              </div>
              <button
                type="button"
                onClick={close}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Cerrar"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
              <div className="bg-gray-50 rounded-xl rounded-tl-none px-4 py-3 text-sm text-gray-700 leading-relaxed">
                ¡Hola! 👋 ¿Necesitás ayuda o querés una consulta sin cargo? Escribinos por WhatsApp.
              </div>

              <div className="space-y-2">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${WA_DEFAULT_MSG}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-[#25D366] text-white font-bold px-4 py-3 rounded-xl hover:bg-[#22c55e] transition-colors text-sm"
                  onClick={close}
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  Abrir WhatsApp
                </a>
                <a
                  href="tel:+5492984372962"
                  className="flex items-center gap-3 bg-gray-100 text-gray-700 font-medium px-4 py-3 rounded-xl hover:bg-gray-200 transition-colors text-sm"
                  onClick={close}
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  Llamar: +54 298 437-2962
                </a>
                {TAWK_PROPERTY_ID && (
                  <button
                    type="button"
                    className="w-full flex items-center gap-3 bg-gray-100 text-gray-700 font-medium px-4 py-3 rounded-xl hover:bg-gray-200 transition-colors text-sm"
                    onClick={() => {
                      if (typeof window !== "undefined" && (window as any).Tawk_API) {
                        (window as any).Tawk_API.toggle();
                      }
                      close();
                    }}
                  >
                    <HelpCircle className="h-4 w-4 shrink-0" />
                    Chat en vivo
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB button */}
      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg shadow-green-500/40 flex items-center justify-center relative"
        aria-label="Abrir chat de soporte"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="h-6 w-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-25" />
        )}
      </motion.button>
    </div>
  );
}
