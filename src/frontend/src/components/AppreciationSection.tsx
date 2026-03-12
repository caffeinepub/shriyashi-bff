import { Heart, Smile, Sparkles, Star } from "lucide-react";

export function AppreciationSection() {
  const qualities = [
    { icon: Heart, text: "Your love makes my world complete", id: "love" },
    { icon: Sparkles, text: "Every moment with you is magical", id: "magic" },
    {
      icon: Star,
      text: "You're the most beautiful person inside and out",
      id: "beauty",
    },
    { icon: Smile, text: "Your smile brightens my darkest days", id: "smile" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-secondary/30 to-accent/10 rounded-3xl">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Why I <span className="text-primary">Love You</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Just a few of the infinite reasons why you mean everything to me
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {qualities.map((quality) => (
            <div
              key={quality.id}
              className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-sm border border-border/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <quality.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-base sm:text-lg font-medium text-card-foreground pt-2">
                {quality.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
