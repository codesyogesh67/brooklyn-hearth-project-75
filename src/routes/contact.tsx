import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Btn } from "@/components/site/Layout";
import { IMG } from "@/lib/images";
import { Dog, Recycle, Coffee } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact | Passionfruit Coffee — Bed-Stuy, Brooklyn" },
      { name: "description", content: "Visit Passionfruit Coffee at 733 Madison St, Brooklyn, NY 11221. Open daily 8am–5pm. Reach us at maggie@passionfruitcoffee.com." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="relative w-full overflow-hidden" style={{ height: "40vh" }}>
        <img src={IMG.heroInterior} alt="Outdoor seating at Passionfruit Coffee" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0F0F0F]/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(42px, 6vw, 64px)" }}>Come find us.</h1>
          <p className="mt-3 text-[#E5E5E5] text-lg">733 Madison St, Brooklyn, NY 11221 · Open daily, 8am–5pm</p>
        </div>
      </section>

      <section className="bg-[#0F0F0F] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-[45%_55%] gap-10 items-start">
          <div>
            <p className="text-white text-[17px]">733 Madison St, Brooklyn, NY 11221</p>
            <p className="text-sm italic text-[#A0A0A0] mt-1">Near the Gates Ave J train stop</p>
            <ul className="mt-6 space-y-3 text-[#A0A0A0]">
              <li>Hours: Open daily, 8am–5pm</li>
              <li>Phone: <a className="text-white hover:text-[#C8A96E]" href="tel:+13472210185">(347) 221-0185</a></li>
              <li>Email: <a className="text-white hover:text-[#C8A96E]" href="mailto:maggie@passionfruitcoffee.com">maggie@passionfruitcoffee.com</a></li>
              <li>Instagram: <a className="text-white hover:text-[#C8A96E]" href="https://instagram.com/passionfruit.coffee" target="_blank" rel="noreferrer">@passionfruit.coffee</a></li>
            </ul>
            <div className="mt-8 grid gap-4">
              <div className="flex items-start gap-3"><Dog className="text-[#C8A96E] mt-1" size={20} /><span className="text-sm text-[#A0A0A0]">Dog-friendly outdoor seating — water bowls and carabiners out front</span></div>
              <div className="flex items-start gap-3"><Recycle className="text-[#C8A96E] mt-1" size={20} /><span className="text-sm text-[#A0A0A0]">For-here reusable cups available — ask at the counter</span></div>
              <div className="flex items-start gap-3"><Coffee className="text-[#C8A96E] mt-1" size={20} /><span className="text-sm text-[#A0A0A0]">Counter service — no reservations needed</span></div>
            </div>
            <div className="mt-8"><Btn href="https://maps.google.com/?q=733+Madison+St+Brooklyn+NY+11221" external>Get Directions</Btn></div>
          </div>
          <div className="overflow-hidden border border-[#2A2A2A]" style={{ borderRadius: 8 }}>
            <iframe title="Map to Passionfruit Coffee" src="https://maps.google.com/maps?q=733+Madison+St+Brooklyn+NY+11221&output=embed" width="100%" height="420" loading="lazy" style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }} />
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[640px] px-6">
          <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>Get in touch</h2>
          <p className="mt-3 text-[#A0A0A0]">General questions, press inquiries, or just want to say hello.</p>
          {sent ? (
            <p className="mt-8 italic text-white text-xl" style={{ fontFamily: "Playfair Display, serif" }}>
              Message sent — we'll be in touch soon.
            </p>
          ) : (
            <form className="mt-8 space-y-5" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div>
                <label className="label-eyebrow text-[#A0A0A0]">Name</label>
                <input required maxLength={100} className="mt-2 w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white px-3 py-2 focus:outline-none focus:border-[#C8A96E]" style={{ borderRadius: 4 }} />
              </div>
              <div>
                <label className="label-eyebrow text-[#A0A0A0]">Email</label>
                <input required type="email" maxLength={255} className="mt-2 w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white px-3 py-2 focus:outline-none focus:border-[#C8A96E]" style={{ borderRadius: 4 }} />
              </div>
              <div>
                <label className="label-eyebrow text-[#A0A0A0]">Subject</label>
                <select required className="mt-2 w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white px-3 py-2 focus:outline-none focus:border-[#C8A96E]" style={{ borderRadius: 4 }}>
                  <option>General</option>
                  <option>Press Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="label-eyebrow text-[#A0A0A0]">Message</label>
                <textarea required maxLength={2000} className="mt-2 w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white px-3 py-2 focus:outline-none focus:border-[#C8A96E]" style={{ borderRadius: 4, minHeight: 120 }} />
              </div>
              <button type="submit" className="w-full bg-[#C8A96E] text-[#0F0F0F] px-7 py-3 text-xs uppercase tracking-wider font-medium hover:brightness-110" style={{ borderRadius: 4 }}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
