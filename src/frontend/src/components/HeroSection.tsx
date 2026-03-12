import { Award, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/uploads/IMG-20260207-WA0011-3.jpg"
          alt="Advocate Madan Kumar Tiwari"
          className="w-full h-full object-cover object-top"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative gold border left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-60" />

      <div className="relative z-10 container-custom pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Allahabad High Court
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-3">
              Madan Kumar
              <span className="block text-primary">Tiwari</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 mb-2 font-medium">
              Advocate | Allahabad High Court, Prayagraj
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/60 mb-8">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                Muir Road, Old Building, High Court
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-primary" />
                SC/ST Specialist
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:9651533770"
                data-ocid="hero.primary_button"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-base rounded-sm hover:opacity-90 transition-all gold-btn shadow-gold"
              >
                <Phone className="w-5 h-5" />
                +91 96515 33770
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-primary font-semibold text-base rounded-sm hover:bg-primary/10 transition-all"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-10 bg-primary animate-pulse" />
        <span className="text-xs text-primary tracking-widest uppercase">
          Scroll
        </span>
      </div>
    </section>
  );
}
