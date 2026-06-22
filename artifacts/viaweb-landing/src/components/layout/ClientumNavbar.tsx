import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Problema", href: "#problema" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Studio", href: "#studio" },
  { label: "Planes", href: "#planes" },
  { label: "Partners", href: "#partners" },
  { label: "Casos", href: "#casos" },
];

export function ClientumNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-secondary/97 backdrop-blur-md shadow-lg border-b border-white/5"
          : "bg-secondary"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/company-logo.png"
            alt="Clientum logo"
            className="h-8 w-8 rounded-lg object-contain"
          />
          <span className="text-xl font-extrabold tracking-tight text-white">
            Client<span className="text-primary">um</span>
          </span>
          <span className="hidden sm:inline text-[10px] font-semibold text-white/40 ml-0.5">
            IA para PyMEs
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Menú principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://clientumcrm.com.ar"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            Dashboard
          </a>
          <a
            href="#contacto"
            className="text-sm font-bold bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-all shadow-md shadow-primary/20 hover:-translate-y-0.5"
          >
            Diagnóstico gratis
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-secondary border-t border-white/10 shadow-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://clientumcrm.com.ar"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-white/70 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setOpen(false)}
            >
              Dashboard
            </a>
            <a
              href="#contacto"
              className="mt-2 text-sm font-bold bg-primary text-white px-5 py-2.5 rounded-full text-center"
              onClick={() => setOpen(false)}
            >
              Diagnóstico gratis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
