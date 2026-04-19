import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Roofing Services in Galway?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
          Contact us today for reliable and quality roofing solutions that you can trust.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button variant="heroOutline" asChild>
            <a href="tel:0913456789">
              <Phone className="h-5 w-5" />
              Call 091 345 6789
            </a>
          </Button>
          <Button variant="heroOutline" asChild>
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm opacity-80">
          <a href="tel:0913456789" className="flex items-center gap-2 justify-center hover:opacity-100 transition-opacity">
            <Phone className="h-4 w-4" /> 091 345 6789
          </a>
          <a href="mailto:declan@ryanroofing.ie" className="flex items-center gap-2 justify-center hover:opacity-100 transition-opacity">
            <Mail className="h-4 w-4" /> declan@ryanroofing.ie
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
