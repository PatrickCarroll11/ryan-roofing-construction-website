import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does a roof repair cost in Galway?",
    a: "The cost of a roof repair in Galway depends on the extent of the damage, the materials required, and the size of the area affected. Minor repairs such as replacing a few slates or fixing a small leak can start from around €150–€300, while more extensive repairs may cost more. We always provide a free, no-obligation quote before any work begins so you know exactly what to expect.",
  },
  {
    q: "How quickly can you respond to a roofing emergency in Galway?",
    a: "We understand that a damaged or leaking roof requires urgent attention. For roofing emergencies in Galway and the surrounding areas, we aim to respond as quickly as possible — often the same day or within 24 hours. Contact us directly on 091 345 6789 and we will do our best to get to you promptly.",
  },
  {
    q: "What areas in Galway do you cover?",
    a: "Ryan Roofing & Construction serves Galway City and a wide range of surrounding towns and villages including Oranmore, Athenry, Tuam, Loughrea, Gort, Clifden, Ballinasloe, Kinvara, Headford, Portumna, and Spiddal. If you are unsure whether we cover your area, give us a call and we will be happy to help.",
  },
  {
    q: "Do you offer a guarantee on your roofing work?",
    a: "Yes. We stand behind the quality of our workmanship on every project. All of our roofing repairs and installations are carried out to the highest industry standards, and we offer guarantees on both materials and labour. We are also fully insured, giving you complete peace of mind from start to finish.",
  },
  {
    q: "What types of roofs do you work on in Galway?",
    a: "Our team is experienced with all common roof types found in Galway homes and commercial properties. This includes pitched slate and tile roofs, flat roofs, felt and EPDM rubber systems, as well as chimneys and guttering. Whether you have a traditional terraced house or a modern commercial building, we have the skills and materials to handle the job.",
  },
  {
    q: "How do I know if my roof needs replacing or just repairing?",
    a: "This is a very common question and the answer depends on the age of your roof, the extent of the damage, and the condition of the underlying structure. As a general rule, if your roof is over 20–25 years old and experiencing repeated issues, a full replacement may be more cost-effective in the long run. We offer thorough roof inspections across Galway to assess the condition of your roof and give you an honest recommendation — with no pressure to commit.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Common questions from homeowners and businesses in Galway about our roofing services.
          </p>
        </div>
        <div className="divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-primary transition-colors"
              >
                <span className="font-semibold">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="pb-5 text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;