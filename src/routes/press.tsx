import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Btn } from "@/components/site/Layout";

export const Route = createFileRoute("/press")({
  component: Press,
  head: () => ({
    meta: [
      { title: "Press | Passionfruit Coffee — Bed-Stuy, Brooklyn" },
      { name: "description", content: "Passionfruit Coffee has been featured by Gothamist, Sprudge, News12, Brooklyn Eagle, and more." },
    ],
    links: [{ rel: "canonical", href: "/press" }],
  }),
});

const LOGOS = ["Gothamist","Sprudge","News12 Brooklyn","Brooklyn Eagle","Patch","Everlastying","WFHishNYC"];

const CARDS = [
  { pub: "Gothamist", date: "September 2024", title: "These Brooklyn coffee shops are asking customers to stop tipping", desc: "Taylor Siok quoted as a leader of NYC's gratuity-free café movement.", url: "https://gothamist.com/arts-entertainment/these-brooklyn-coffee-shops-are-asking-customers-to-stop-tipping" },
  { pub: "Sprudge", date: "", title: "The Sprudge Guide to Coffee in North Brooklyn", desc: "Named and detailed in Sprudge's authoritative specialty coffee city guide; praised for pastry + coffee pairing and DOMA sourcing.", url: "https://sprudge.com/the-sprudge-guide-to-coffee-in-north-brooklyn-262429.html" },
  { pub: "News12 Brooklyn", date: "September 2024", title: "Brooklyn coffee shops tout benefits of ditching the tip", desc: "Taylor Siok quoted on the no-tip model and PTO for workers.", url: "https://bronx.news12.com/brooklyn-coffee-shops-tout-benefits-of-ditching-the-tip" },
  { pub: "Brooklyn Eagle", date: "September 2024", title: "Some BK coffee shops ask customers to stop tipping", desc: "Named alongside Sey Coffee as a Brooklyn no-tip leader.", url: "https://brooklyneagle.com/articles/2024/09/20/some-bk-coffee-shops-ask-customers-to-stop-tipping/" },
  { pub: "Patch (Bed-Stuy)", date: "March 2023", title: "Pastry Chef And Barista Couple Open New Cafe In Bed-Stuy", desc: "Opening feature calling Passionfruit \"a marriage of talent from a James Beard Award winning pastry shop and a top-level barista.\"", url: "https://patch.com/new-york/bed-stuy/pastry-chef-barista-couple-open-new-cafe-bed-stuy" },
  { pub: "Everlastying", date: "July 2025", title: "Passionfruit Coffee in Bed-Stuy, Brooklyn", desc: "Full editorial review; praised interior, latte art, Passionfruit Pound Cake, and Blueberry Lemon Olive Oil Cake.", url: "https://www.everlastying.com/dine/passionfruit-coffee-brooklyn" },
  { pub: "WFHishNYC Substack", date: "October 2024", title: "Review — Passionfruit Coffee", desc: "Remote worker review praising natural light, comfortable noise level, and overall atmosphere.", url: "https://wfhishnyc.substack.com/p/review-passionfruit-coffee" },
];

function Press() {
  return (
    <SiteLayout>
      <section className="bg-[#0F0F0F] py-[70px] md:py-[110px] text-center px-6">
        <h1 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(42px, 6vw, 64px)" }}>In the Press</h1>
        <p className="mt-4 text-[#A0A0A0] text-lg">Passionfruit has been featured by Gothamist, Sprudge, News12, the Brooklyn Eagle, and more.</p>
      </section>

      <section className="bg-[#111111] py-12">
        <div className="mx-auto max-w-[1200px] px-6 flex flex-wrap justify-center gap-12 text-lg text-[#A0A0A0]">
          {LOGOS.map(l => <span key={l} className="font-medium hover:text-white transition">{l}</span>)}
        </div>
      </section>

      <section className="bg-[#0F0F0F] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[900px] px-6">
          <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>Coverage</h2>
          <div className="mt-10">
            {CARDS.map((c, i) => (
              <article key={c.title} className={`py-8 ${i !== 0 ? "border-t border-[#2A2A2A]" : ""}`}>
                <p className="label-eyebrow text-[#C8A96E]">{c.pub}</p>
                {c.date && <p className="text-xs text-[#A0A0A0] mt-1">{c.date}</p>}
                <h3 className="text-white mt-3 text-[22px]" style={{ fontFamily: "Playfair Display, serif" }}>{c.title}</h3>
                <p className="text-[#A0A0A0] mt-2">{c.desc}</p>
                <a href={c.url} target="_blank" rel="noreferrer" className="inline-block mt-3 text-sm text-[#C8A96E] hover:underline">Read Article →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-[70px] md:py-[110px]">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <h2 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(30px, 4vw, 42px)" }}>Press Inquiries</h2>
          <p className="mt-4 text-[#A0A0A0]">Interested in featuring Passionfruit? We'd love to hear from you.</p>
          <p className="mt-4 text-[#A0A0A0]">maggie@passionfruitcoffee.com · (347) 221-0185 · 733 Madison St, Brooklyn, NY 11221</p>
          <div className="mt-8"><Btn href="mailto:maggie@passionfruitcoffee.com">Get in Touch</Btn></div>
        </div>
      </section>
    </SiteLayout>
  );
}
