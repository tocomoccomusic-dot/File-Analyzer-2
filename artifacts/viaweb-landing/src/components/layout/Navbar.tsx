import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Planes", href: "#planes" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-extrabold tracking-tighter text-secondary">
            Via<span className="text-primary">web</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Menú principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-secondary/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://cloud.viaweb.net.ar/viaweb/custom/externalaccess/www/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-secondary/70 hover:text-primary transition-colors"
          >
            Portal de Clientes
          </a>
          <a
            href="#contacto"
            className="text-sm font-bold bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
          >
            Consultar ahora
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-secondary"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-secondary/70 hover:text-primary py-2 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://cloud.viaweb.net.ar/viaweb/custom/externalaccess/www/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-secondary/70 hover:text-primary py-2 transition-colors"
              onClick={() => setOpen(false)}
            >
              Portal de Clientes
            </a>
            <a
              href="#contacto"
              className="mt-2 text-sm font-bold bg-primary text-white px-5 py-2.5 rounded-full text-center"
              onClick={() => setOpen(false)}
            >
              Consultar ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
