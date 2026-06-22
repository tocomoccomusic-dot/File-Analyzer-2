import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Planes ERP", href: "#planes" },
    { name: "Nosotros", href: "#nosotros" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tighter text-secondary">
              Via<span className="text-primary">web</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://cloud.viaweb.net.ar" target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            Portal Clientes
          </a>
          <Button asChild className="rounded-full px-6 font-medium shadow-md hover:shadow-lg transition-all">
            <Link href="/meetings">Agendar Reunión</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-600">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] flex flex-col pt-12">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-gray-800"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px w-full bg-gray-200 my-2" />
                <a href="https://cloud.viaweb.net.ar" target="_blank" rel="noreferrer" className="text-lg font-medium text-gray-800">
                  Portal Clientes
                </a>
                <a href="/tickets" className="text-lg font-medium text-gray-800">
                  Soporte
                </a>
                <Button asChild className="mt-4 rounded-full w-full">
                  <Link href="/meetings">Agendar Reunión</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
