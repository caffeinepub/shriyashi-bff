import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { SpecializationsSection } from "./components/SpecializationsSection";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SpecializationsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
