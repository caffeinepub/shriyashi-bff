import { MapPin, Phone, Scale } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-primary font-display font-bold text-lg mb-3">
              <Scale className="w-5 h-5" />
              <span>Adv. Madan Kumar Tiwari</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Practicing Advocate at the Allahabad High Court, Prayagraj.
              Specialist in SC/ST cases and mentor to junior advocates across
              Uttar Pradesh.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:9651533770"
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 96515 33770
              </a>
              <div className="flex items-start gap-2 text-sm text-foreground/70">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Muir Road, Old Building, High Court, Prayagraj</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Practice Areas", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year}. Advocate Madan Kumar Tiwari. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
