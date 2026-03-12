import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  "Over 15 years of practice at Allahabad High Court",
  "Strong courtroom presence & dedication to justice",
  "Specialist in SC/ST cases with successful outcomes",
  "Mentoring junior advocates across UP",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 textured-section">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-3 border border-primary/20 rounded-sm" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-primary" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-primary" />
              <img
                src="/assets/uploads/IMG-20260207-WA0012-4.jpg"
                alt="Madan Kumar Tiwari receiving award"
                className="w-full aspect-[3/4] object-cover object-top rounded-sm"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                About
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Experienced Advocate,
              <span className="text-primary block">Trusted Counsel</span>
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Advocate Madan Kumar Tiwari is a seasoned legal professional
              practicing at the Allahabad High Court, Prayagraj. Known for his
              strong courtroom presence and unwavering dedication to justice, he
              has built a remarkable track record of successful outcomes across
              civil, criminal, and constitutional matters.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              With deep expertise in SC/ST cases and a commitment to empowering
              marginalized communities, Advocate Tiwari is the preferred counsel
              for clients across Jaunpur, Prayagraj, Machlishahar Tehsil, and
              Lucknow. He also actively mentors junior advocates, shaping the
              next generation of legal professionals.
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground/80"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
