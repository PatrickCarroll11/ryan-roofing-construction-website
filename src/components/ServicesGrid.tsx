import { Hammer, HardHat, Layers, Droplets, Search, Flame } from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Roof Repairs",
    description: "Comprehensive repair services for all roof types.",
  },
  {
    icon: HardHat,
    title: "New Roof Installation",
    description: "Professional installation of new roofs with quality materials.",
  },
  {
    icon: Layers,
    title: "Flat Roofing",
    description: "Expert installation and maintenance of flat roofing systems.",
  },
  {
    icon: Droplets,
    title: "Gutter Installation",
    description: "Efficient gutter systems to protect your home.",
  },
  {
    icon: Search,
    title: "Roof Inspections",
    description: "Thorough inspections to ensure your roof's integrity.",
  },
  {
    icon: Flame,
    title: "Chimney Repairs",
    description: "Specialized repairs to maintain chimney safety and functionality.",
  },
];

const ServicesGrid = () => (
  <section className="py-24">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">Our Services</h2>
        <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
          From emergency repairs to full roof installations, we cover every roofing need across Galway.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="group p-8 rounded-lg border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-brand-green-light flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;