import { Scale } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#specializations" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container-custom flex items-center justify-between h-16">
        <a
          href="#hero"
          className="flex items-center gap-2 text-primary font-display font-bold text-lg"
        >
          <Scale className="w-5 h-5" />
          <span>Adv. M.K. Tiwari</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              data-ocid={`nav.link.${i + 1}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:9651533770"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity gold-btn"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}
