import { Navbar } from '@/components/layout/Navbar';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Users, Zap, TrendingUp, Star } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'El poder de las Alianzas',
    desc: 'Viaweb partners se basa en una premisa sencilla: juntos podemos lograr más cosas. Al unirse a la red, se vuelve parte de una comunidad con un objetivo compartido de hacer más cosas por nuestros clientes.',
  },
  {
    icon: Zap,
    title: 'Una inversión en Usted',
    desc: 'Para ayudar a los socios a crecer y tener éxito, Viaweb invierte en usted: los recursos, programas y herramientas que ofrecemos le ayudan a capacitar a su equipo, a crear soluciones innovadoras, a diferenciarse en el mercado y a conectarse con los clientes.',
  },
  {
    icon: TrendingUp,
    title: 'Aquí comienza su Crecimiento',
    desc: 'Con acceso a una gran variedad de productos y servicios, nuestros socios están facultados para crear y ofrecer soluciones que pueden abordar cualquier escenario del cliente.',
  },
  {
    icon: Star,
    title: 'Valoración para los Clientes',
    desc: 'El éxito del cliente es un principio fundamental para Viaweb. Como asesores de confianza, nuestros socios integran sus habilidades únicas con la tecnología que ofrecemos para brindar resultados exitosos a nuestros clientes mutuos.',
  },
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              ← Volver al inicio
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mb-4">
              Únase a Viaweb Partners
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Como socio de Viaweb, obtendrá acceso al instante a recursos, programas, herramientas y conexiones exclusivos. Únase a una comunidad diseñada para fomentar el crecimiento de negocios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contacto@viaweb.net.ar?subject=Quiero ser Partner de Viaweb"
                className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-full text-base shadow-xl hover:bg-primary/90 transition-all"
              >
                Conviértase en Socio
              </a>
              <a
                href="https://cloud.viaweb.net.ar/viaweb/custom/externalaccess/www/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border-2 border-secondary/20 text-secondary font-bold px-8 py-4 rounded-full text-base hover:border-primary hover:text-primary transition-all"
              >
                Iniciar sesión
              </a>
            </div>
          </motion.div>

          <div className="mb-16">
            <h2 className="text-2xl font-extrabold text-secondary mb-2 text-center">¿Qué es Viaweb Partners?</h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
              Viaweb Partners es un centro de personas, recursos y ofertas que se reúnen para ofrecerle todo lo que necesita para desarrollar y proporcionar soluciones exitosas para sus clientes.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-secondary mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-16 p-8 bg-secondary rounded-2xl text-white">
            <h2 className="text-xl font-bold mb-2">¡La oportunidad está esperando!</h2>
            <p className="text-white/70 text-sm leading-relaxed max-w-2xl mb-6">
              El cielo es el límite: aproveche la ventaja distintiva de Viaweb y la impresionante variedad de ofertas para impulsar la innovación, ampliar horizontes y profundizar su alcance en el mercado. Capacítese con las herramientas y los recursos que necesita para lograr la experiencia y obtener más competencias para diferenciar su negocio.
            </p>
            <a
              href="mailto:contacto@viaweb.net.ar?subject=Quiero ser Partner de Viaweb"
              className="inline-flex items-center bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-all text-sm"
            >
              Aplicar a Viaweb Partners
            </a>
          </div>

          <blockquote className="border-l-4 border-primary pl-6 py-2">
            <p className="text-gray-600 italic text-sm leading-relaxed mb-3">
              &ldquo;Estoy totalmente agradecido con Viaweb porque aquí obtuve la oportunidad de tener mi primer experiencia en ventas corporativas. Además de desarrollar esas habilidades, me familiaricé con el uso de sistemas, puntualmente con el CRM y PM de la empresa. El clima laboral fue de los puntos más importantes para mí, ya que venía de organizaciones donde no se priorizaba, y aquí pude sentirme verdaderamente cómodo a la hora de trabajar.&rdquo;
            </p>
            <cite className="text-sm font-semibold text-secondary not-italic">
              — Ignacio Szczygol, Ejecutivo de Cuentas
            </cite>
          </blockquote>
        </div>
      </main>
    </div>
  );
}
