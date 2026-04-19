import { Wrench, Home, Layers, Droplets, Search, Flame } from "lucide-react";
import CTASection from "@/components/CTASection";

const serviceDetails = [
  {
    title: "Roof Repairs",
    seo: "Roof Repairs Galway",
    description:
      "We provide comprehensive roof repair services to address any issues promptly and effectively, ensuring your roof remains in top condition.",
    features: [
      "Leak Repair",
      "Storm Damage",
      "Tile Replacement",
      "Slate Repairs",
      "Emergency Services",
    ],
    icon: Wrench,
  },
  {
    title: "New Roof Installation",
    seo: "New Roof Installation Galway",
    description:
      "Our team specializes in the installation of new roofs, using quality materials to ensure durability and longevity. We cater to both residential and commercial properties.",
    features: [
      "Quality Materials",
      "Skilled Craftsmanship",
      "Residential and Commercial",
      "Custom Design",
      "Energy Efficiency",
    ],
    icon: Home,
  },
  {
    title: "Flat Roofing",
    seo: "Flat Roofing Galway",
    description:
      "We offer expert installation and maintenance of flat roofing systems, ensuring they are both practical and aesthetically pleasing.",
    features: [
      "Durable Materials",
      "Waterproofing",
      "Insulation Options",
      "Low Maintenance",
      "Cost Effective",
    ],
    icon: Layers,
  },
  {
    title: "Gutter Installation",
    seo: "Gutter Installation Galway",
    description:
      "Our gutter installation services help protect your home from water damage, using efficient and durable systems.",
    features: [
      "Seamless Gutters",
      "Custom Fit",
      "Variety of Materials",
      "Leaf Guards",
      "Maintenance Services",
    ],
    icon: Droplets,
  },
  {
    title: "Roof Inspections",
    seo: "Roof Inspections Galway",
    description:
      "We conduct thorough roof inspections to identify any potential issues and ensure your roof's long-term performance.",
    features: [
      "Detailed Reports",
      "Preventative Maintenance",
      "Safety Checks",
      "Qualified Inspectors",
      "Prompt Service",
    ],
    icon: Search,
  },
  {
    title: "Chimney Repairs",
    seo: "Chimney Repairs Galway",
    description:
      "Our specialized chimney repair services ensure safety and functionality, addressing issues like cracks and blockages.",
    features: [
      "Safety Inspections",
      "Masonry Repairs",
      "Blockage Removal",
      "Flashing Repair",
      "Cap Installations",
    ],
    icon: Flame,
  },
];

export default function Services() {
  return (
    <>
      

      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Our Roofing Services
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive roofing solutions for residential and commercial
            properties across Galway and surrounding areas.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-10 md:gap-14">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  id={service.title.toLowerCase().replace(/\s+/g, "-")}
                  className="bg-card rounded-2xl shadow-sm border border-muted overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Left: Icon, Title, SEO Badge, Description */}
                    <div
                      className={`p-8 md:p-10 flex flex-col justify-center ${
                        index % 2 !== 0 ? "md:order-2" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary/10 text-primary rounded-xl p-3 shrink-0">
                          <Icon className="w-7 h-7" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                          {service.title}
                        </h2>
                      </div>

                      <span className="inline-block bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide rounded-full px-3 py-1 mb-5 w-fit">
                        {service.seo}
                      </span>

                      <p className="text-muted-foreground text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Right: What's Included */}
                    <div
                      className={`section-alt p-8 md:p-10 flex flex-col justify-center ${
                        index % 2 !== 0 ? "md:order-1" : ""
                      }`}
                    >
                      <h3 className="text-lg font-semibold text-foreground mb-5">
                        What's Included:
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-foreground"
                          >
                            <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-3 h-3"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span className="text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}