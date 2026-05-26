import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { IMG, SEASONAL_SPECIALS } from "@/lib/images";

export const Route = createFileRoute("/seasonal")({
  component: Seasonal,
  head: () => ({
    meta: [
      { title: "Seasonal Specials | Passionfruit Coffee — Bed-Stuy, Brooklyn" },
      { name: "description", content: "Current seasonal drinks and pastries at Passionfruit Coffee. Always changing. Always worth the visit." },
    ],
    links: [{ rel: "canonical", href: "/seasonal" }],
  }),
});

function Seasonal() {
  return (
    <SiteLayout>
      <section className="relative w-full overflow-hidden" style={{ height: "70vh" }}>
        <div className="absolute inset-0 kenburns">
          <img src={IMG.drink1} alt="Current seasonal drink at Passionfruit" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#0F0F0F]/35" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(42px, 6vw, 64px)" }}>What's On Right Now</h1>
          <p className="mt-3 text-[#E5E5E5] text-lg">Updated seasonally. Always worth the visit.</p>
        </div>
      </section>

      <section className="bg-[#0F0F0F] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>This Season's Specials</h2>
          {SEASONAL_SPECIALS.length === 0 ? (
            <p className="mt-8 italic text-[#A0A0A0]">Seasonal menu coming soon — follow @passionfruit.coffee for updates</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {SEASONAL_SPECIALS.map((s) => (
                <div key={s.name} className="bg-[#1A1A1A] border border-[#2A2A2A] overflow-hidden hover:border-[#3A3A3A] transition" style={{ borderRadius: 8 }}>
                  <div className="aspect-[3/2] overflow-hidden">
                    <img src={s.image} alt={s.name} loading="lazy" className="w-full h-full object-cover hover:scale-[1.03] transition" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-white text-xl" style={{ fontFamily: "Playfair Display, serif" }}>{s.name}</h3>
                    <p className="text-[#A0A0A0] text-sm mt-2">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#1A1A1A] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[520px] px-6 text-center">
          <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>Be first to know.</h2>
          <p className="mt-3 text-[#A0A0A0]">Sign up and we'll tell you the moment new seasonal drinks drop.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert("You're on the list."); }} className="mt-8 space-y-3">
            <input type="email" required placeholder="you@email.com" className="w-full bg-[#0F0F0F] border border-[#2A2A2A] text-white text-base px-4 py-3 focus:outline-none focus:border-[#C8A96E]" style={{ borderRadius: 4 }} />
            <button type="submit" className="w-full bg-[#C8A96E] text-[#0F0F0F] px-7 py-3 text-xs uppercase tracking-wider font-medium hover:brightness-110" style={{ borderRadius: 4 }}>Join the List</button>
          </form>
          <p className="text-xs text-[#A0A0A0] mt-4">No noise. Just seasonal drops.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
