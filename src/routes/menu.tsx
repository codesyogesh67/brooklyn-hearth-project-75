import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Btn } from "@/components/site/Layout";
import { IMG, SEASONAL_SPECIALS } from "@/lib/images";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu | Passionfruit Coffee — Bed-Stuy, Brooklyn" },
      { name: "description", content: "Full menu of specialty coffee from DOMA Roasters and housemade pastries by CIA-trained pastry chef Taylor Siok. Gratuity included." },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
});

const COFFEE = [
  { name: "Espresso" }, { name: "Americano" }, { name: "Latte" }, { name: "Cappuccino" }, { name: "Cold Brew" },
  { name: "Tahitian Vanilla Latte", desc: "rich, smooth, no artificial sweeteners" },
  { name: "Salted Caramel Latte", desc: "balanced, not cloying" },
  { name: "Blueberry Cardamom Latte", desc: "a house favorite" },
  { name: "Blueberry Cardamom Cappuccino" },
];
const TEA = [
  { name: "Matcha Latte" }, { name: "Hojicha Latte" }, { name: "Matcha Passionfruit Spritz" },
];
const PASTRIES = [
  { name: "Passionfruit Pound Cake", desc: "tangy, sweet, unmistakably ours. The signature." },
  { name: "Blueberry Lemon Olive Oil Cake", desc: "bright and delicate, a fan favorite" },
  { name: "Hazelnut Caramel Coffee Cake", desc: "rich and layered" },
  { name: "Madeleines", desc: "warmed to order in the oven; allow a few extra minutes, worth every second" },
  { name: "Chocolate Chip Cookies" },
];

function MenuPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Passionfruit Coffee Menu",
    hasMenuSection: [
      { "@type": "MenuSection", name: "Coffee & Drinks", hasMenuItem: [...COFFEE, ...TEA].map(i => ({ "@type": "MenuItem", name: i.name, description: (i as any).desc })) },
      { "@type": "MenuSection", name: "Pastries", hasMenuItem: PASTRIES.map(i => ({ "@type": "MenuItem", name: i.name, description: i.desc })) },
    ],
  };
  return (
    <SiteLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="relative w-full overflow-hidden" style={{ height: "50vh" }}>
        <img src={IMG.coffeeBeans} alt="Latte art macro at Passionfruit Coffee" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0F0F0F]/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(42px, 6vw, 64px)" }}>The Menu</h1>
          <p className="mt-3 text-[#E5E5E5] text-lg">Made fresh, every day. Gratuity included in every price.</p>
        </div>
      </section>

      <section className="bg-[#0F0F0F] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[800px] px-6">
          <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>Coffee & Drinks</h2>
          <p className="text-sm italic text-[#A0A0A0] mt-2">Proudly serving DOMA Coffee Roasting Company · Post Falls, Idaho</p>

          <p className="label-eyebrow text-[#C8A96E] mt-10 mb-4">Espresso-based</p>
          <ul className="divide-y divide-[#2A2A2A]">
            {COFFEE.map((i) => (
              <li key={i.name} className="py-3 flex justify-between gap-4">
                <div>
                  <p className="text-white">{i.name}</p>
                  {(i as any).desc && <p className="text-sm text-[#A0A0A0] mt-1">{(i as any).desc}</p>}
                </div>
              </li>
            ))}
          </ul>

          <p className="label-eyebrow text-[#C8A96E] mt-10 mb-4">Tea & Non-coffee</p>
          <ul className="divide-y divide-[#2A2A2A]">
            {TEA.map((i) => (
              <li key={i.name} className="py-3 text-white">{i.name}</li>
            ))}
          </ul>

          <p className="text-sm text-[#A0A0A0] italic mt-8">~$5–8 · Alternative milk options available · For-here reusable cups — ask at the counter</p>
        </div>
      </section>

      <section className="bg-[#1A1A1A] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>Seasonal Specials</h2>
          <p className="text-[#A0A0A0] mt-3">Our rotating menu. Always changing. Always worth trying.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {SEASONAL_SPECIALS.map((s) => (
              <div key={s.name} className="bg-[#0F0F0F] border border-[#2A2A2A] overflow-hidden" style={{ borderRadius: 8 }}>
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
        </div>
      </section>

      <section className="bg-[#0F0F0F] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[800px] px-6">
          <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>Pastries</h2>
          <p className="text-[#A0A0A0] mt-3">All made in-house by Taylor Siok. Every item designed to pair with coffee or tea.</p>
          <ul className="divide-y divide-[#2A2A2A] mt-8">
            {PASTRIES.map(p => (
              <li key={p.name} className="py-4">
                <p className="text-white">{p.name}</p>
                {p.desc && <p className="text-sm text-[#A0A0A0] mt-1">{p.desc}</p>}
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#A0A0A0] italic mt-6">~$5–8</p>
        </div>
      </section>

      <section className="bg-[#111111] py-12">
        <div className="mx-auto max-w-[600px] px-6 text-center text-sm text-[#A0A0A0]">
          <p>Menu is subject to seasonal change. Gratuity is included in all prices — no tip screen, no jar. Alternative milks available. Dogs welcome outside. Open daily 8am–5pm.</p>
          <a className="text-[#C8A96E] hover:underline mt-4 inline-block" href="https://maps.google.com/?q=733+Madison+St+Brooklyn+NY+11221" target="_blank" rel="noreferrer">Get Directions →</a>
        </div>
      </section>
    </SiteLayout>
  );
}
