import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-white via-orange-50/40 to-amber-50/60 pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold px-4 py-2 rounded-full mb-6 border border-primary/20">
              🇦🇷 Empresa patagónica de tecnología
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-secondary leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tecnología que hace{" "}
            <span className="text-primary relative">
              crecer
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                <path d="M0 6 Q100 0 200 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>{" "}
            tu negocio
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-secondary/60 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Implementamos ERP, desarrollamos tu web y digitalizamos procesos. Tu socio tecnológico en Patagonia con más de 10 años de experiencia.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#planes"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full text-base shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all group"
            >
              Ver planes y precios
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/send?phone=542984372962&text=¡Hola! Quiero una consulta gratuita."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-2 border-secondary/20 text-secondary font-bold px-8 py-4 rounded-full text-base hover:border-primary hover:text-primary transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              Consultá gratis
            </a>
          </motion.div>

          <motion.p
            className="mt-8 text-sm text-secondary/40 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            +100 empresas ya confían en Viaweb · Sin costo de consulta inicial
          </motion.p>
        </div>
      </div>
    </section>
  );
}
