import { Navbar } from '@/components/layout/Navbar';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

const publicSector = ['Canal 10 TV', 'Diario 10', 'Municipio de Maquinchao', 'Municipio de 25 de Mayo – La Pampa'];

const privateSector = [
  'AFP Service', 'AMBAR', 'Agua Wass', 'Aitue Propiedades', 'AKBAR SRL', 'Anmerica',
  'Bauleras Roca', 'Cabarcos Motores SRL', 'Centro Empleados de Comercio', 'Coe Consultorio',
  'Consorcio de Riego General Roca', 'Consultorio Cerol', 'Cooperativa de Trabajo Frigorífico J.J Gomez',
  'Estudio Integra', 'Farmacia San Martín', 'Forestal Norte', 'Frecuencia Urbana 887 FM',
  'Growlife Patagonia', 'Grupo Bio', 'Grupo de Asesores', 'Habitar Sur', 'Kj Logistica',
  'LP SRL', 'Lubrano Hogar', 'Mafacha Ferretería Pinturería', 'Morgado Hogar', 'Naval Patagonia',
  'Patagonia Remolques', 'Poliservice Suministros', 'Saitt', 'SCT Patagonia',
  'Terbay Propiedades', 'YendoApp',
];

const portfolio = [
  { name: 'Yendo', url: 'https://www.yendoapp.com/' },
  { name: 'Wass Agua', url: 'https://www.wass.com.ar/' },
  { name: 'Terbay Propiedades', url: 'https://www.terbay.com.ar/' },
  { name: 'SCT Patagonia', url: 'https://www.sctpatagonia.com.ar/' },
  { name: 'Poliservice SRL', url: 'https://www.poliservice.com.ar/' },
  { name: 'AFP Service', url: 'https://www.afpservice.com.ar/' },
  { name: 'Aitue Propiedades', url: 'https://www.aituepropiedades.com.ar/' },
  { name: 'Anmerica', url: 'https://www.anmerica.com.ar/' },
  { name: 'Bauleras Roca', url: 'https://www.baulerasroca.com.ar/' },
  { name: 'Betos Lomos', url: 'https://www.betosroca.com.ar/' },
  { name: 'Cabarcos Motores', url: 'https://www.cabarcosmotores.com.ar/' },
  { name: 'Consorcio de Riego General Roca', url: 'https://www.riegogeneralroca.com.ar/' },
  { name: 'Consultorio Cerol', url: 'https://www.cerol.com.ar/' },
];

export default function Clientes() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="mb-10">
            <Link href="/" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6">
              ← Volver al inicio
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mt-4">
              Nuestros Clientes
            </h1>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl">
              Más de 150 empresas e instituciones de toda la Patagonia confían en Viaweb para sus soluciones digitales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-secondary mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                Sector Público
              </h2>
              <ul className="space-y-2">
                {publicSector.map((c) => (
                  <li key={c} className="text-sm text-gray-600 py-1 border-b border-gray-50 last:border-0">{c}</li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-secondary mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                Sector Privado
              </h2>
              <ul className="grid grid-cols-2 gap-x-4">
                {privateSector.map((c) => (
                  <li key={c} className="text-sm text-gray-600 py-1 border-b border-gray-50 last:border-0">{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-secondary mb-8">Nuestro Portfolio</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {portfolio.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-primary/40 hover:shadow-md transition-all"
              >
                <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">{item.name}</span>
                <svg className="h-4 w-4 text-gray-300 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
