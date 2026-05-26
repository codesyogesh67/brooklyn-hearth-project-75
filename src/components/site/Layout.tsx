import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { AnnouncementBar } from "./AnnouncementBar";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { CookieConsent } from "./CookieConsent";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white flex flex-col">
      <AnnouncementBar />
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
}

const btnBase =
  "inline-flex items-center justify-center px-7 py-[14px] text-xs uppercase tracking-wider font-medium transition-all duration-300 hover:scale-[1.02]";
const btnPrimary = "bg-[#C8A96E] text-[#0F0F0F] hover:brightness-110";
const btnSecondary =
  "bg-transparent text-white border border-white hover:bg-white hover:text-[#0F0F0F]";

export function Btn({
  children,
  href,
  to,
  variant = "primary",
  external,
  type = "button",
  onClick,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  to?: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}) {
  const cls = `${btnBase} ${variant === "primary" ? btnPrimary : btnSecondary} ${className}`;
  const style = { borderRadius: 4 };
  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={cls}
        style={style}
      >
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} className={cls} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} style={style}>
      {children}
    </button>
  );
}
