import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-shed.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative container py-24 md:py-32">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-tight mb-6">
            Reliable Roofing Solutions,<br />in Galway
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed font-normal">
            Expert roofing services that stand the test of time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <Button variant="hero" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button variant="heroOutline" asChild>
              <a href="tel:0913456789">
                <Phone className="h-5 w-5 mr-2" />
                Call 091 345 6789
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;