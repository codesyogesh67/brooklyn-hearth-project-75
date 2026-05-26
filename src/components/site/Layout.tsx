import { ReactNode } from "react";
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
  const base =
    "inline-flex items-center justify-center px-7 py-[14px] text-xs uppercase tracking-wider font-medium transition-all duration-300 hover:scale-[1.02] " +
    (variant === "primary"
      ? "bg-[#C8A96E] text-[#0F0F0F] hover:brightness-110"
      : "bg-transparent text-white border border-white hover:bg-white hover:text-[#0F0F0F]");
  const style = { borderRadius: 4 };
  const cls = `${base} ${className}`;
  if (href) {
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={cls} style={style}>
        {children}
      </a>
    );
  }
  if (to) {
    // dynamic import to avoid cycle
    const A = require("@tanstack/react-router").Link;
    return <A to={to} className={cls} style={style}>{children}</A>;
  }
  return <button type={type} onClick={onClick} className={cls} style={style}>{children}</button>;
}
