import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitInquiry } from "@/hooks/useQueries";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Loader2,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const mutation = useSubmitInquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(
      { name, phone, description },
      {
        onSuccess: () => {
          setName("");
          setPhone("");
          setDescription("");
        },
      },
    );
  };

  return (
    <section id="contact" className="py-20 bg-background">
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
              Contact
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <div className="gold-divider" />
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">
            Reach out to Advocate Madan Kumar Tiwari for a consultation. We'll
            respond promptly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="textured-section border border-border rounded-sm p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-primary/10 rounded-sm flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">
                    Chamber Address
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Muir Road, Old Building,
                    <br />
                    High Court, Prayagraj,
                    <br />
                    Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-primary/10 rounded-sm flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:9651533770"
                    className="text-foreground/80 text-sm hover:text-primary transition-colors font-medium"
                  >
                    +91 96515 33770
                  </a>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-primary/10 rounded-sm flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">
                    Availability
                  </p>
                  <p className="text-sm text-foreground/80">
                    Monday – Saturday
                  </p>
                  <p className="text-sm text-foreground/60">
                    Available for consultations
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="textured-section border border-border rounded-sm p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Send an Inquiry
              </h3>

              {mutation.isSuccess && (
                <div
                  data-ocid="contact.success_state"
                  className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/30 rounded-sm mb-6"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Inquiry submitted successfully!
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Advocate Tiwari will contact you shortly.
                    </p>
                  </div>
                </div>
              )}

              {mutation.isError && (
                <div
                  data-ocid="contact.error_state"
                  className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-sm mb-6"
                >
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                  <p className="text-sm text-foreground">
                    Something went wrong. Please try again or call directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="name"
                    className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    data-ocid="contact.name_input"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="phone"
                    className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    data-ocid="contact.phone_input"
                    placeholder="+91 XXXXX XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    type="tel"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="description"
                    className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                  >
                    Case Description *
                  </Label>
                  <Textarea
                    id="description"
                    data-ocid="contact.message_textarea"
                    placeholder="Briefly describe your legal matter..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows={5}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={mutation.isPending}
                  className="w-full bg-primary text-primary-foreground font-bold py-5 rounded-sm hover:opacity-90 transition-all gold-btn"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2
                        className="w-4 h-4 mr-2 animate-spin"
                        data-ocid="contact.loading_state"
                      />
                      Submitting...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
