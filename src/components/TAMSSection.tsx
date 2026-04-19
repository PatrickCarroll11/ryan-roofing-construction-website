import { CheckCircle2, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const badges = [
  "Qualified Roofers",
  "Fully Insured",
  "Industry Certified",
];

export default function TAMSSection() {
  return (
    <section className="bg-primary/[0.04] border-y border-primary/10 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Icon Circle */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <HardHat className="w-8 h-8 text-primary" strokeWidth={1.75} />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
          Certified Roofing Experts in Galway
        </h2>

        {/* Body */}
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          Our team is fully qualified and insured, offering peace of mind with every project. We adhere to the highest industry standards for safety and quality.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mb-10">
          When you choose Ryan Roofing &amp; Construction, you&apos;re choosing a team that stands behind its work — from initial inspection through to final completion.
        </p>

        {/* CTA Button */}
        <Button asChild size="lg" className="mb-12 px-8 py-6 h-auto font-semibold shadow-lg">
          <Link to="/contact">Ask About Our Services</Link>
        </Button>

        {/* Badge Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
          {badges.map((badge) => (
            <div
              key={badge}
              className="flex flex-col items-center gap-3 bg-card border border-primary/10 rounded-xl px-6 py-6 shadow-sm"
            >
              <CheckCircle2 className="w-7 h-7 text-primary flex-shrink-0" strokeWidth={2} />
              <span className="text-foreground font-semibold text-base text-center leading-snug">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}