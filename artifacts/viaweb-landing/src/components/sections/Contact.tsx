import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  empresa: z.string().min(2, "El nombre de empresa debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresá un email válido"),
  telefono: z.string().optional(),
  servicio: z.string({ required_error: "Seleccioná un servicio de tu interés" }),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const servicios = [
  { value: "erp-minorista", label: "ERP/CRM — Plan Minorista" },
  { value: "erp-mayorista", label: "ERP/CRM — Plan Mayorista" },
  { value: "erp-personalizado", label: "ERP/CRM — Plan Personalizado" },
  { value: "desarrollo-web", label: "Desarrollo Web / E-commerce" },
  { value: "cloud", label: "Soluciones Cloud" },
  { value: "seo-sem", label: "SEO & SEM" },
  { value: "otro", label: "Otro / Consulta general" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      servicio: "",
      mensaje: "",
    },
  });

  function onSubmit(values: ContactFormValues) {
    const text = [
      `*Nueva consulta desde viaweb.net.ar*`,
      ``,
      `*Nombre:* ${values.nombre}`,
      `*Empresa:* ${values.empresa}`,
      `*Email:* ${values.email}`,
      values.telefono ? `*Teléfono:* ${values.telefono}` : null,
      `*Servicio de interés:* ${servicios.find((s) => s.value === values.servicio)?.label ?? values.servicio}`,
      ``,
      `*Consulta:*`,
      values.mensaje,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/542984372962?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    form.reset();
  }

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 max-w-6xl mx-auto">
          {/* Left column — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
              Contacto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight">
              Hablemos de tu empresa.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              Completá el formulario y te respondemos por WhatsApp. Sin presiones, sin ventas agresivas — solo una charla para entender si podemos ayudarte.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary text-sm">Teléfono</p>
                  <a href="tel:+5492984372962" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    +54 (298) 437-2962
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-green-50 flex items-center justify-center shrink-0">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-secondary text-sm">WhatsApp</p>
                  <a
                    href="https://wa.me/send?phone=542984372962&text=¡Hola! Quiero hacer una consulta."
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    Chatear ahora
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-secondary text-sm">Horario de atención</p>
                  <p className="text-gray-600 text-sm">Lunes a Viernes, 8:00 — 18:00 (ARG)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-gray-100">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">¡Consulta enviada!</h3>
                  <p className="text-gray-600 mb-6 max-w-sm">
                    Se abrió WhatsApp con tu mensaje. Si no se abrió automáticamente, escribinos directamente al <strong>+54 298 437-2962</strong>.
                  </p>
                  <Button variant="outline" className="rounded-full" onClick={() => setSent(false)}>
                    Enviar otra consulta
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                    data-testid="form-contact"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="nombre"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-secondary font-medium">Nombre *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Juan García"
                                className="bg-white border-gray-200 rounded-xl h-11"
                                data-testid="input-nombre"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="empresa"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-secondary font-medium">Empresa *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Mi Empresa S.A."
                                className="bg-white border-gray-200 rounded-xl h-11"
                                data-testid="input-empresa"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-secondary font-medium">Email *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="juan@empresa.com"
                                className="bg-white border-gray-200 rounded-xl h-11"
                                data-testid="input-email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="telefono"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-secondary font-medium">Teléfono</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+54 9 298..."
                                className="bg-white border-gray-200 rounded-xl h-11"
                                data-testid="input-telefono"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="servicio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-medium">Servicio de interés *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger
                                className="bg-white border-gray-200 rounded-xl h-11"
                                data-testid="select-servicio"
                              >
                                <SelectValue placeholder="Seleccioná un servicio..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {servicios.map((s) => (
                                <SelectItem key={s.value} value={s.value}>
                                  {s.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="mensaje"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-medium">¿En qué te podemos ayudar? *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Contanos brevemente sobre tu empresa y qué necesitás..."
                              className="bg-white border-gray-200 rounded-xl min-h-[120px] resize-none"
                              data-testid="textarea-mensaje"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full h-13 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                      data-testid="button-submit"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Enviar por WhatsApp
                    </Button>

                    <p className="text-xs text-center text-gray-400">
                      Al enviar, se abrirá WhatsApp con tu consulta lista para enviar. No almacenamos tus datos.
                    </p>
                  </form>
                </Form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
