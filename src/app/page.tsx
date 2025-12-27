import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { IsometricProcess } from "@/components/IsometricProcess";
import { BentoGrid } from "@/components/BentoGrid";
import { Infrastructure } from "@/components/Infrastructure";
import { Footer } from "@/components/Footer";
import { AuraBackground } from "@/components/AuraBackground";

import { Comparisons } from "@/components/Comparisons";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden selection:bg-[#FACC15] selection:text-black">
      <AuraBackground />
      <Navbar />
      <Hero />
      <Comparisons />
      <Marquee />
      <IsometricProcess />
      <BentoGrid />
      <Infrastructure />
      <Footer />
    </div>
  );
}
