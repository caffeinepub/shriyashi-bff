import { motion } from "motion/react";

const photos = [
  {
    src: "/assets/uploads/IMG-20260207-WA0011-3.jpg",
    caption: "Advocate Madan Kumar Tiwari — Formal Portrait",
    sub: "Allahabad High Court, Prayagraj",
  },
  {
    src: "/assets/uploads/IMG-20260207-WA0012-4.jpg",
    caption: "Award & Recognition Ceremony",
    sub: "Excellence in Legal Practice",
  },
  {
    src: "/assets/uploads/IMG-20260207-WA0013-2.jpg",
    caption: "With Fellow Advocates",
    sub: "High Court Bar Association",
  },
  {
    src: "/assets/uploads/IMG-20260207-WA0010-1.jpg",
    caption: "Press Conference",
    sub: "Advocating for Justice in Media",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 textured-section">
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
              Gallery
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="section-title">Moments & Milestones</h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              data-ocid={`gallery.item.${i + 1}`}
              className="gallery-item group cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="relative overflow-hidden rounded-sm border border-border group-hover:border-primary/40 transition-colors">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full aspect-[3/4] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs font-bold text-foreground leading-tight">
                    {photo.caption}
                  </p>
                  <p className="text-xs text-primary mt-0.5">{photo.sub}</p>
                </div>
              </div>
              <div className="mt-2 px-1">
                <p className="text-xs font-semibold text-foreground/80 truncate">
                  {photo.caption}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {photo.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
