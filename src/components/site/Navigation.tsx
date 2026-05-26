import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LOGO_WHITE } from "@/lib/images";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/our-story", label: "Our Story" },
  { to: "/press", label: "Press" },
  { to: "/seasonal", label: "Seasonal" },
  { to: "/contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-[#0F0F0F]/80 backdrop-blur-md border-b border-[#2A2A2A]" : "bg-transparent"
      }`}
      style={{ height: 64 }}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Link to="/" aria-label="Passionfruit Coffee home">
          <img src={LOGO_WHITE} alt="Passionfruit Coffee" style={{ height: 28 }} />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = loc.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm transition-colors hover:text-white ${
                  active ? "text-white" : "text-[#A0A0A0]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="bg-[#C8A96E] text-[#0F0F0F] px-5 py-2 text-xs uppercase tracking-wider font-medium hover:brightness-110 transition"
            style={{ borderRadius: 4 }}
          >
            Visit Us
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-[#0F0F0F] flex flex-col">
          <div className="flex justify-between items-center h-16 px-6">
            <img src={LOGO_WHITE} alt="Passionfruit Coffee" style={{ height: 28 }} />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-[28px] text-white"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
