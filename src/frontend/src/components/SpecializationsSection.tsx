import { Gavel, MapPin, Shield, Users } from "lucide-react";
import { motion } from "motion/react";

const specializations = [
  {
    icon: Shield,
    title: "SC/ST Cases",
    badge: "Primary Specialty",
    description:
      "Dedicated representation for Scheduled Caste and Scheduled Tribe communities. Expert handling of atrocity cases, reservation disputes, and constitutional rights violations.",
  },
  {
    icon: Gavel,
    title: "Civil & Criminal Cases",
    badge: "Full Practice",
    description:
      "Comprehensive legal representation in civil disputes, property matters, criminal defense, bail applications, and appeals before the Allahabad High Court.",
  },
  {
    icon: Users,
    title: "Junior Advocate Mentorship",
    badge: "Across UP",
    description:
      "Active mentorship and guidance for junior advocates in Jaunpur, Prayagraj, Machlishahar Tehsil, and Lucknow — nurturing the legal talent of tomorrow.",
  },
];

const locations = [
  "Prayagraj (Allahabad High Court)",
  "Jaunpur",
  "Machlishahar Tehsil",
  "Lucknow",
];

export function SpecializationsSection() {
  return (
    <section id="specializations" className="py-20 bg-background">
      <div className="container-custom">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Expertise
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="section-title">Areas of Practice</h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {specializations.map((spec, i) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-card border border-border rounded-sm p-7 hover:border-primary/40 transition-colors group"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-5 inline-flex p-3 bg-primary/10 rounded-sm">
                <spec.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary/70 mb-2">
                {spec.badge}
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {spec.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Practice Locations */}
        <motion.div
          className="textured-section border border-border rounded-sm p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="font-display text-xl font-bold text-foreground">
              Practice Locations
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {locations.map((loc) => (
              <span
                key={loc}
                className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-primary/5 text-primary text-sm font-medium rounded-full"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {loc}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
