import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-card">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-6 flex items-center justify-between text-sm">
          <span className="font-medium tracking-wide">Your Trusted Galway Roofer</span>
          <a
            href="tel:0913456789"
            className="flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity"
          >
            <Phone className="w-3.5 h-3.5" />
            091 345 6789
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Mark */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-black text-xl">
            R
          </div>
          <span className="font-heading font-bold text-xl leading-tight">Ryan Roofing & Construction</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.to)
                  ? "text-primary border-b-2 border-primary pb-0.5"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:0913456789"
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            091 345 6789
          </a>
          <Button asChild>
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-muted px-5 pb-6 pt-4 shadow-lg">
          <nav className="flex flex-col gap-1 mb-5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${
                  isActive(link.to)
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href="tel:0913456789"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-primary border border-primary rounded-md py-3 hover:bg-primary/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              091 345 6789
            </a>
            <Button asChild className="w-full">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Get a Free Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}