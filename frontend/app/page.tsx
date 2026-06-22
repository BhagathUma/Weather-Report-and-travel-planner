import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import HeroSection from "@/components/sections/HeroSection";
import WeatherFormSection from "@/components/sections/WeatherFormSection";
import BackgroundEffects from "@/components/sections/BackgroundEffects";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      <BackgroundEffects />

      <div className="mx-auto max-w-7xl px-6">

        <Navbar />

        <HeroSection />

        <WeatherFormSection />

        <Footer />

      </div>

    </main>
  );
}