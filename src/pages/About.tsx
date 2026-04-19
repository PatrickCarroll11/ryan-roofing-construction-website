import { CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";

const About = () => {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Ryan Roofing & Construction — quality Roofer service you can trust.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Ryan Roofing & Construction is a trusted provider of roofing and construction services in Galway. Our team is dedicated to delivering high-quality workmanship and exceptional customer service.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            With years of experience, we are committed to ensuring your property is both protected and aesthetically pleasing..
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">What Sets Us Apart</h2>
          <div className="space-y-4 mb-10">
            {[{"title":"Quality Materials","desc":"We use only the best materials for durability."},{"title":"Competitive Pricing","desc":"Affordable and transparent pricing on all services."},{"title":"Professional Team","desc":"Our skilled team delivers exceptional results."},{"title":"Wide Coverage","desc":"We serve Galway and surrounding areas."},{"title":"Customer Satisfaction","desc":"Our priority is your satisfaction and peace of mind."}].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
