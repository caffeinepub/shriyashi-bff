import { Heart } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center gap-3">
          <img
            src="/assets/generated/logo.dim_200x200.png"
            alt="Love Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-romantic"
          />
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              For My Love, Shriyashi
            </h1>
            <Heart className="h-5 w-5 text-accent fill-accent animate-pulse" />
          </div>
        </div>
      </div>
    </header>
  );
}
