import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { LOGO_WHITE } from "@/lib/images";

export function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#2A2A2A]">
      <div className="mx-auto max-w-[1200px] px-6 pt-[60px] pb-10 grid gap-10 md:grid-cols-4">
        <div>
          <img src={LOGO_WHITE} alt="Passionfruit Coffee" style={{ height: 28 }} />
          <p className="text-[#A0A0A0] text-sm mt-4 leading-relaxed">
            Coffee and Pastries in Bed-Stuy, Brooklyn
          </p>
          <a
            href="https://instagram.com/passionfruit.coffee"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[#A0A0A0] hover:text-white mt-4"
          >
            <Instagram size={18} />
            <span className="text-sm">@passionfruit.coffee</span>
          </a>
        </div>
        <div>
          <h4 className="label-eyebrow text-white mb-4">Pages</h4>
          <ul className="space-y-2 text-sm text-[#A0A0A0]">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/menu" className="hover:text-white">Menu</Link></li>
            <li><Link to="/our-story" className="hover:text-white">Our Story</Link></li>
            <li><Link to="/press" className="hover:text-white">Press</Link></li>
            <li><Link to="/seasonal" className="hover:text-white">Seasonal</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="label-eyebrow text-white mb-4">Info</h4>
          <ul className="space-y-2 text-sm text-[#A0A0A0]">
            <li>Open Daily 8am–5pm</li>
            <li>733 Madison St, Brooklyn NY 11221</li>
            <li>Near Gates Ave J train</li>
          </ul>
        </div>
        <div>
          <h4 className="label-eyebrow text-white mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-[#A0A0A0]">
            <li><a href="tel:+13472210185" className="hover:text-white">(347) 221-0185</a></li>
            <li><a href="mailto:maggie@passionfruitcoffee.com" className="hover:text-white">maggie@passionfruitcoffee.com</a></li>
            <li>
              <a href="https://domacoffee.com" target="_blank" rel="noreferrer" className="hover:text-white">
                DOMA Coffee Partner
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#0F0F0F] py-5 text-center text-xs text-[#A0A0A0]">
        © 2025 Passionfruit Coffee · All rights reserved
      </div>
    </footer>
  );
}
