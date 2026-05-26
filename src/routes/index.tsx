import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Btn } from "@/components/site/Layout";
import { IMG, SEASONAL_SPECIALS } from "@/lib/images";
import { useEffect, useState } from "react";
import { Dog, Recycle, Coffee } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Passionfruit Coffee | Bed-Stuy, Brooklyn" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const TESTIMONIALS = [
  { quote: "blueberry cardamom cappuccino my beloved… every drink I've ever gotten here has been gorgeousss", src: "@carsonjane via Corner" },
  { quote: "Got their strawberry pandan matcha latte and their passion fruit poundcake as I settled to read. Such an inviting space and it was so yummy!", src: "Joe Coffee reviewer" },
  { quote: "Tahitian Vanilla Latte, Salted Caramel Latte, and Blueberry Cardamom Latte — each worth the $8 price tag. The quality was excellent.", src: "Joe Coffee reviewer" },
  { quote: "Would go as far to say you should travel to try what the baristas are whipping up behind the counter! That Passionfruit pound cake is something else.", src: "Joe Coffee reviewer" },
  { quote: "Counter service with gratuity already included and creative seasonal matcha drinks that actually work.", src: "@chasingembers via Corner" },
  { quote: "The spot is beautiful. A small pastry case, sleek interior, and full of life. Great artwork adorns the walls. The workers were awesome.", src: "Yelp reviewer" },
];

const PRESS = [
  { name: "Gothamist", url: "https://gothamist.com/arts-entertainment/these-brooklyn-coffee-shops-are-asking-customers-to-stop-tipping" },
  { name: "Sprudge", url: "https://sprudge.com/the-sprudge-guide-to-coffee-in-north-brooklyn-262429.html" },
  { name: "News12", url: "https://bronx.news12.com/brooklyn-coffee-shops-tout-benefits-of-ditching-the-tip" },
  { name: "Brooklyn Eagle", url: "https://brooklyneagle.com/articles/2024/09/20/some-bk-coffee-shops-ask-customers-to-stop-tipping/" },
  { name: "Patch", url: "https://patch.com/new-york/bed-stuy/pastry-chef-barista-couple-open-new-cafe-bed-stuy" },
  { name: "Everlastying", url: "https://www.everlastying.com/dine/passionfruit-coffee-brooklyn" },
  { name: "WFHishNYC", url: "https://wfhishnyc.substack.com/p/review-passionfruit-coffee" },
];

function Home() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const ld = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Passionfruit Coffee",
    image: IMG.heroInterior,
    address: {
      "@type": "PostalAddress",
      streetAddress: "733 Madison St",
      addressLocality: "Brooklyn",
      addressRegion: "NY",
      postalCode: "11221",
      addressCountry: "US",
    },
    telephone: "+1-347-221-0185",
    email: "maggie@passionfruitcoffee.com",
    url: "/",
    priceRange: "$$",
    openingHours: "Mo-Su 08:00-17:00",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "602" },
  };

  return (
    <SiteLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ height: "95vh" }}>
        <div className="absolute inset-0 kenburns">
          <img src={IMG.heroInterior} alt="Floor-to-ceiling windows and natural light at Passionfruit Coffee in Bed-Stuy" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#0F0F0F]/35" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="fade-up text-white max-w-4xl" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(42px, 6vw, 64px)", lineHeight: 1.1, animationDelay: "0.4s" }}>
            Coffee and Pastries in Bed-Stuy, Brooklyn
          </h1>
          <p className="fade-up mt-4 text-[#E5E5E5] text-lg" style={{ animationDelay: "0.6s" }}>
            Open daily, 8am–5pm · 733 Madison St
          </p>
          <div className="fade-up mt-8" style={{ animationDelay: "0.8s" }}>
            <Btn to="/menu">See the Menu</Btn>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-[#111111] border-b border-[#2A2A2A] py-5">
        <div className="mx-auto max-w-[1200px] px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center">
          <span className="text-xs uppercase tracking-[0.1em] text-white">4.9★ on Joe Coffee · 602 reviews</span>
          <span className="hidden md:block w-px h-4 bg-[#2A2A2A]" />
          <span className="text-xs uppercase tracking-[0.1em] text-white">Ranked #2 Café in Bed-Stuy</span>
          <span className="hidden md:block w-px h-4 bg-[#2A2A2A]" />
          <span className="text-xs uppercase tracking-[0.1em] text-white">Featured in Gothamist · Sprudge · News12</span>
        </div>
      </section>

      {/* What we are */}
      <section className="bg-[#0F0F0F] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-[55%_45%] gap-12 items-center">
          <div className="aspect-[2/3] overflow-hidden" style={{ borderRadius: 8 }}>
            <img src={IMG.coffeeBeans} alt="Passionfruit Pound Cake close-up" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-300" />
          </div>
          <div>
            <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>
              Meticulously made. Always in house.
            </h2>
            <p className="mt-6 text-[#A0A0A0] text-[17px] leading-[1.7]">
              Taylor and Chloe Siok built Passionfruit in 2023 with one idea — that a neighborhood café could be both an outstanding craft experience and a genuinely good place to work. Every pastry comes from Taylor's kitchen. Every drink comes from DOMA beans. And gratuity is already included in every price — because hospitality shouldn't come with an awkward screen at the end.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Btn to="/our-story">Our Story</Btn>
              <Btn to="/menu" variant="secondary">View Menu</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal showcase */}
      <section className="bg-[#1A1A1A] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-center font-script text-[#C8A96E] text-2xl">Seasonal</p>
          <h2 className="text-center text-white mt-2" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>
            What's on Right Now
          </h2>
          <p className="text-center text-[#A0A0A0] mt-3 max-w-2xl mx-auto">
            Our menu changes with the seasons. Here's what we're loving at the moment.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {SEASONAL_SPECIALS.map((s) => (
              <div key={s.name} className="bg-[#0F0F0F] border border-[#2A2A2A] overflow-hidden hover:border-[#3A3A3A] transition" style={{ borderRadius: 8 }}>
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={s.image} alt={s.name} loading="lazy" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-xl" style={{ fontFamily: "Playfair Display, serif" }}>{s.name}</h3>
                  <p className="text-[#A0A0A0] text-sm mt-2">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Btn to="/menu" variant="secondary">Full Menu</Btn>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="bg-[#111111] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[900px] px-6">
          <h2 className="text-center text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>The Menu</h2>
          <p className="text-center text-[#A0A0A0] mt-3">Everything made with intention. Gratuity included in every price.</p>
          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div>
              <p className="label-eyebrow text-[#C8A96E] mb-4">Coffee & Drinks</p>
              <ul className="space-y-2 text-[#FFFFFF]">
                {["Espresso","Americano","Latte","Cappuccino","Cold Brew","Tahitian Vanilla Latte","Salted Caramel Latte","Blueberry Cardamom Latte","Blueberry Cardamom Cappuccino","Matcha Latte","Hojicha Latte","Matcha Passionfruit Spritz"].map(i => (
                  <li key={i} className="text-base">{i}</li>
                ))}
              </ul>
              <p className="text-xs text-[#A0A0A0] italic mt-4">Served with DOMA Coffee, Post Falls, Idaho · ~$5–8 · Alternative milks available</p>
            </div>
            <div>
              <p className="label-eyebrow text-[#C8A96E] mb-4">Pastries</p>
              <ul className="space-y-2 text-[#FFFFFF]">
                {["Passionfruit Pound Cake","Blueberry Lemon Olive Oil Cake","Hazelnut Caramel Coffee Cake","Madeleines (warmed to order)","Chocolate Chip Cookies"].map(i => (
                  <li key={i} className="text-base">{i}</li>
                ))}
              </ul>
              <p className="text-xs text-[#A0A0A0] italic mt-4">All made in-house by Taylor Siok · ~$5–8</p>
            </div>
          </div>
          <div className="text-center mt-12"><Btn to="/menu">View Full Menu</Btn></div>
        </div>
      </section>

      {/* No tip */}
      <section className="bg-[#1A1A1A] py-[70px] md:py-[110px] border-t-2 border-[#C8A96E]">
        <div className="mx-auto max-w-[680px] px-6 text-center">
          <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>No tip required. Ever.</h2>
          <p className="mt-6 text-[#A0A0A0] text-[17px] leading-[1.7]">
            Gratuity is included in every price on our menu — not as a workaround, but as a commitment. Our team earns a consistent wage, gets PTO, and shares in the success of the business. We eliminated tipping before we opened, because we believe hospitality shouldn't come with an awkward screen at the end.
          </p>
          <div className="my-8 h-px bg-[#2A2A2A]" />
          <blockquote className="text-white text-[22px] italic" style={{ fontFamily: "Playfair Display, serif" }}>
            "The hours are more consistent, the pay is the same week to week, and we can just focus on being hospitable."
          </blockquote>
          <p className="text-xs text-[#A0A0A0] mt-3">— Taylor Siok, Gothamist</p>
          <div className="mt-10">
            <p className="label-eyebrow text-[#A0A0A0] mb-4">As featured in</p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-[#A0A0A0]">
              <a href="https://gothamist.com" target="_blank" rel="noreferrer" className="hover:text-white">Gothamist</a>
              <a href="https://bronx.news12.com" target="_blank" rel="noreferrer" className="hover:text-white">News12</a>
              <a href="https://brooklyneagle.com" target="_blank" rel="noreferrer" className="hover:text-white">Brooklyn Eagle</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0F0F0F] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>What people are saying</h2>
          <div className="mt-12 min-h-[200px] flex flex-col items-center justify-center">
            <p className="text-[#C8A96E] mb-4">★★★★★ 4.9</p>
            <blockquote key={idx} className="text-white text-2xl italic fade-up" style={{ fontFamily: "Playfair Display, serif" }}>
              "{TESTIMONIALS[idx].quote}"
            </blockquote>
            <p className="text-sm text-[#A0A0A0] mt-4">— {TESTIMONIALS[idx].src}</p>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition ${i === idx ? "bg-[#C8A96E]" : "bg-[#2A2A2A]"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="bg-[#111111] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="label-eyebrow text-[#A0A0A0]">As seen in</p>
          <div className="flex flex-wrap justify-center items-center gap-10 mt-6 text-lg text-[#A0A0A0]">
            {PRESS.map(p => (
              <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="hover:text-white transition font-medium">
                {p.name}
              </a>
            ))}
          </div>
          <div className="mt-8">
            <a href="/press" className="text-sm text-[#C8A96E] hover:underline">Read the Coverage →</a>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="bg-[#0F0F0F] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>Come find us</h2>
            <p className="mt-4 text-[#A0A0A0] text-[17px]">733 Madison St, Brooklyn, NY 11221 · Near the Gates Ave J train</p>
            <ul className="mt-8 space-y-4 text-[#A0A0A0]">
              <li>Hours: Open daily, 8am–5pm</li>
              <li>Phone: <a className="text-white hover:text-[#C8A96E]" href="tel:+13472210185">(347) 221-0185</a></li>
              <li>Email: <a className="text-white hover:text-[#C8A96E]" href="mailto:maggie@passionfruitcoffee.com">maggie@passionfruitcoffee.com</a></li>
            </ul>
            <div className="mt-8 grid gap-4">
              <div className="flex items-start gap-3"><Dog className="text-[#C8A96E] mt-1" size={20} /><span className="text-sm text-[#A0A0A0]">Dog-friendly outdoor seating with water bowls and carabiners</span></div>
              <div className="flex items-start gap-3"><Recycle className="text-[#C8A96E] mt-1" size={20} /><span className="text-sm text-[#A0A0A0]">For-here reusable cups available</span></div>
              <div className="flex items-start gap-3"><Coffee className="text-[#C8A96E] mt-1" size={20} /><span className="text-sm text-[#A0A0A0]">Counter service · no reservations needed</span></div>
            </div>
            <div className="mt-8">
              <Btn href="https://maps.google.com/?q=733+Madison+St+Brooklyn+NY+11221" external>Get Directions</Btn>
            </div>
          </div>
          <div className="overflow-hidden border border-[#2A2A2A]" style={{ borderRadius: 8 }}>
            <iframe
              title="Map to Passionfruit Coffee"
              src="https://maps.google.com/maps?q=733+Madison+St+Brooklyn+NY+11221&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
            />
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="bg-[#111111] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>@passionfruit.coffee</h2>
          <p className="mt-3 text-[#A0A0A0]">Follow along for seasonal specials, new pastries, and Bed-Stuy moments.</p>
          <a href="https://instagram.com/passionfruit.coffee" target="_blank" rel="noreferrer" className="grid grid-cols-3 gap-2 mt-10">
            {[IMG.heroInterior, IMG.coffeeBeans, IMG.family].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden" style={{ borderRadius: 8 }}>
                <img src={src} alt="Passionfruit Coffee Instagram" loading="lazy" className="w-full h-full object-cover hover:scale-[1.03] transition" />
              </div>
            ))}
          </a>
          <div className="mt-10">
            <Btn href="https://instagram.com/passionfruit.coffee" external variant="secondary">Follow on Instagram</Btn>
          </div>
        </div>
      </section>

      {/* Email signup */}
      <section className="bg-[#1A1A1A] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[560px] px-6 text-center">
          <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>Seasonal specials. First.</h2>
          <p className="mt-3 text-[#A0A0A0]">Get notified when new drinks and pastries drop. No noise. Just the good stuff.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert("You're on the list."); }} className="mt-8 space-y-3">
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="w-full bg-[#0F0F0F] border border-[#2A2A2A] text-white text-base px-4 py-3 focus:outline-none focus:border-[#C8A96E]"
              style={{ borderRadius: 4 }}
            />
            <button type="submit" className="w-full bg-[#C8A96E] text-[#0F0F0F] px-7 py-3 text-xs uppercase tracking-wider font-medium hover:brightness-110" style={{ borderRadius: 4 }}>
              Join the List
            </button>
          </form>
          <p className="text-xs text-[#A0A0A0] mt-4">We respect your inbox. Unsubscribe anytime.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
