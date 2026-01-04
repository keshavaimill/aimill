import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { AgenticAISection } from "@/components/home/AgenticAISection";
import { PlatformTeaser } from "@/components/home/PlatformTeaser";
import { SolutionsGrid } from "@/components/home/SolutionsGrid";
import { WhyAIMILL } from "@/components/home/WhyAIMILL";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { AnnouncementSection } from "@/components/home/AnnouncementSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SolutionsGrid />
        <AnnouncementSection />
        <TrustSection />
        <AgenticAISection />
        <PlatformTeaser />
        <WhyAIMILL />
        <FeaturesSection />
        <ArchitectureSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
