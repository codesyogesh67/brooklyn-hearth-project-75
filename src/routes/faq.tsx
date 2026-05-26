import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Btn } from "@/components/site/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  component: Faq,
  head: () => ({
    meta: [
      { title: "FAQ | Passionfruit Coffee — Bed-Stuy, Brooklyn" },
      { name: "description", content: "Answers to common questions about Passionfruit Coffee: no-tip policy, dog-friendliness, coffee sourcing, hours, and more." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
});

const QA = [
  { q: "Do you take tips?", a: "No — and that's intentional. Gratuity is included in every price. Our team earns a consistent, fair wage every week. No tip screen. No tip jar. Just good hospitality." },
  { q: "Where is your coffee from?", a: "We proudly serve DOMA Coffee Roasting Company from Post Falls, Idaho — a third-generation family-owned roaster we've loved for years." },
  { q: "Are your pastries made in house?", a: "Yes, entirely. Taylor — who trained at the Culinary Institute of America and cooked at Restaurant Daniel — bakes everything fresh daily. Every item on the pastry menu is designed to pair with coffee or tea." },
  { q: "Are dogs allowed?", a: "Dogs aren't allowed inside (except service animals), but we have outdoor seating with water bowls and carabiners out front so your pup can wait safely while you order." },
  { q: "Do you have non-dairy milk?", a: "Yes — we offer alternative milk options at the counter." },
  { q: "What are your hours?", a: "Open every day, 8am–5pm." },
  { q: "How do I reach you for press or events?", a: "Email us at maggie@passionfruitcoffee.com." },
];

function Faq() {
  return (
    <SiteLayout>
      <section className="bg-[#0F0F0F] py-[70px] md:py-[110px] text-center px-6">
        <h1 className="text-white" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(42px, 6vw, 64px)" }}>Questions? We've got answers.</h1>
      </section>

      <section className="bg-[#0F0F0F] pb-[110px]">
        <div className="mx-auto max-w-[760px] px-6">
          <Accordion type="single" collapsible className="w-full">
            {QA.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#2A2A2A]">
                <AccordionTrigger className="text-white text-[17px] font-medium hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#A0A0A0] text-base leading-[1.8] pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-[#111111] py-[70px] text-center px-6">
        <p className="text-[#A0A0A0] max-w-xl mx-auto">Still have a question? Reach out at maggie@passionfruitcoffee.com or come in any day between 8am and 5pm.</p>
        <div className="mt-6"><Btn to="/contact">Visit Us — 733 Madison St</Btn></div>
      </section>
    </SiteLayout>
  );
}
