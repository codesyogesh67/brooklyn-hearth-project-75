import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Btn } from "@/components/site/Layout";
import { IMG } from "@/lib/images";
import { Heart, Users, Leaf, Sparkles, Coffee } from "lucide-react";

export const Route = createFileRoute("/our-story")({
  component: Story,
  head: () => ({
    meta: [
      { title: "Our Story | Passionfruit Coffee — Bed-Stuy, Brooklyn" },
      { name: "description", content: "Built by Taylor and Chloe Siok — a CIA-trained pastry chef and a decade-deep hospitality veteran — Passionfruit is a no-tip coffee shop in Bed-Stuy." },
    ],
    links: [{ rel: "canonical", href: "/our-story" }],
  }),
});

function Story() {
  return (
    <SiteLayout>
      <section className="relative w-full overflow-hidden" style={{ height: "65vh" }}>
        <img src={IMG.family} alt="Taylor and Chloe Siok, owners of Passionfruit Coffee" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0F0F0F]/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(42px, 6vw, 64px)" }}>Built by lifers.</h1>
          <p className="mt-3 text-[#E5E5E5] text-lg">Taylor and Chloe Siok · Owners</p>
        </div>
      </section>

      <section className="bg-[#0F0F0F] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="label-eyebrow text-[#C8A96E]">Co-Owner & Head Pastry Chef</p>
            <h2 className="text-white mt-3" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>Taylor Siok</h2>
            <p className="mt-6 text-[#A0A0A0] text-[17px] leading-[1.8]">
              Taylor started in the pastry world at the Culinary Institute of America in 2013. After graduating, he cooked at Restaurant Daniel on the Upper East Side — one of New York's most decorated kitchens. He moved back to Washington, where he opened Common Crumb Bakery, became Pastry Chef and Director of Operations at Luna Restaurant, and eventually worked alongside his longtime friend and James Beard Award–winning pastry chef Ghaya Oliveria at her Long Island City shop, Ghaya — all while quietly planning what would become Passionfruit. Every pastry on our menu came out of years of that training. Nothing here is accidental.
            </p>
          </div>
          <div className="aspect-[4/5] overflow-hidden" style={{ borderRadius: 8 }}>
            <img src={IMG.family} alt="Taylor Siok" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] overflow-hidden md:order-1 order-2" style={{ borderRadius: 8 }}>
            <img src={IMG.heroInterior} alt="Chloe Siok behind the bar" className="w-full h-full object-cover" />
          </div>
          <div className="md:order-2 order-1">
            <p className="label-eyebrow text-[#C8A96E]">Co-Owner & Head Barista</p>
            <h2 className="text-white mt-3" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>Chloe Siok</h2>
            <p className="mt-6 text-[#A0A0A0] text-[17px] leading-[1.8]">
              Chloe has spent 10+ years working every role in the service industry — barista, host, server, dishwasher, floor manager, bartender. She honed her coffee craft at Evans Brothers in Washington state, and most recently worked as a bartender at Please Don't Tell, one of Manhattan's most celebrated cocktail bars. She's seen the industry from every angle. That's exactly why she and Taylor built Passionfruit the way they did.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>Why we don't take tips.</h2>
          <p className="mt-6 text-[#A0A0A0] text-[17px] leading-[1.8]">
            As service-industry lifers, Taylor and Chloe watched talented people leave hospitality year after year — not because they didn't love the work, but because unpredictable tipped wages made planning a life impossible. So when they opened Passionfruit, they built gratuity in from the start. Our team earns a consistent wage every week. They have PTO. And they're not waiting to see if the tip screen converts.
          </p>
          <div className="my-10 border-y-2 border-[#C8A96E] py-8">
            <blockquote className="text-white italic text-2xl" style={{ fontFamily: "Playfair Display, serif" }}>
              "The hours are more consistent, the pay is the same week to week, and we find it gets rid of the awkwardness of the tipping and we can just focus on being hospitable."
            </blockquote>
            <p className="text-xs text-[#A0A0A0] mt-4">— Taylor Siok, as quoted in Gothamist and News12 Brooklyn</p>
          </div>
        </div>
      </section>

      <section className="bg-[#0F0F0F] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[3/4] overflow-hidden" style={{ borderRadius: 8 }}>
            <img src={IMG.coffeeBeans} alt="DOMA Coffee beans" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="label-eyebrow text-[#C8A96E]">DOMA Coffee Roasting Company · Post Falls, Idaho</p>
            <h2 className="text-white mt-3" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>Our Coffee</h2>
            <p className="mt-6 text-[#A0A0A0] text-[17px] leading-[1.8]">
              We've been drinking DOMA's coffee for years. When it came time to choose a roasting partner for Passionfruit, the answer was easy. DOMA is a third-generation family-owned business that empowers its employees, maintains open communication with staff, and works hard to better their communities — locally and globally. That aligned with everything we were building. We're proud to share their work with Bed-Stuy.
            </p>
            <div className="mt-6"><Btn href="https://www.domacoffee.com" external variant="secondary">Learn About DOMA</Btn></div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-center text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>What we believe in</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mt-12 text-center">
            {[
              { Icon: Sparkles, name: "Craft First", desc: "Everything made with intention." },
              { Icon: Heart, name: "Fair Wages", desc: "Gratuity built in, PTO for all staff." },
              { Icon: Users, name: "Community", desc: "Built for the neighborhood, by people who live here." },
              { Icon: Leaf, name: "Seasonal", desc: "Our menu changes because good ingredients change." },
              { Icon: Coffee, name: "No Pretension", desc: "Great coffee shouldn't come with an attitude." },
            ].map(({ Icon, name, desc }) => (
              <div key={name} className="flex flex-col items-center">
                <Icon size={24} className="text-[#C8A96E]" />
                <p className="label-eyebrow text-white mt-4">{name}</p>
                <p className="text-sm text-[#A0A0A0] mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
