import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Ingresá tu nombre completo"),
  company: z.string().optional(),
  email: z.string().email("Email inválido"),
  phone: z.string().min(8, "Ingresá un teléfono válido"),
  message: z.string().min(10, "Contanos un poco más sobre tu consulta"),
});

type FormData = z.infer<typeof schema>;

function buildWhatsAppMessage(data: FormData): string {
  const lines = [
    `*Nueva consulta desde viaweb.net.ar*`,
    ``,
    `*Nombre:* ${data.name}`,
    data.company ? `*Empresa:* ${data.company}` : null,
    `*Email:* ${data.email}`,
    `*Teléfono:* ${data.phone}`,
    ``,
    `*Mensaje:*`,
    data.message,
  ]
    .filter(Boolean)
    .join("\n");
  return encodeURIComponent(lines);
}

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const message = buildWhatsAppMessage(data);
    window.open(`https://wa.me/542984372962?text=${message}`, "_blank", "noreferrer");
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2 mb-4">
            Hablemos de tu proyecto
          </h2>
          <p className="text-secondary/60 text-lg leading-relaxed">
            Completá el formulario y te respondemos por WhatsApp en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-xl font-bold text-secondary mb-4">Información de contacto</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "+54 (298) 437-2962", href: "tel:+5492984372962" },
                  { icon: MessageCircle, label: "WhatsApp disponible", href: "https://wa.me/send?phone=542984372962" },
                  { icon: MapPin, label: "Patagonia, Argentina", href: undefined },
                  { icon: Clock, label: "Lun–Vie: 9 a 18 hs", href: undefined },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-secondary/80 hover:text-primary transition-colors">
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-secondary/80">{item.label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-1.5">Nombre *</label>
                  <input
                    {...register("name")}
                    placeholder="Tu nombre completo"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-1.5">Empresa</label>
                  <input
                    {...register("company")}
                    placeholder="Nombre de tu empresa"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-1.5">Email *</label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="tu@empresa.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-1.5">Teléfono *</label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="+54 9 ..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary mb-1.5">Mensaje *</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Contanos sobre tu proyecto o consulta..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                <MessageCircle className="h-4 w-4" />
                Enviar por WhatsApp
              </button>
              <p className="text-xs text-secondary/40 text-center">
                Al enviar abriremos WhatsApp con tu mensaje pre-cargado. Sin spam, sin datos a terceros.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
