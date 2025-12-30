import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlatformHero } from "@/components/platform/PlatformHero";
import { PlatformArchitecture } from "@/components/platform/PlatformArchitecture";
import { DeploymentScale } from "@/components/platform/DeploymentScale";
import { PlatformCTA } from "@/components/platform/PlatformCTA";

const Platform = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PlatformHero />
        <PlatformArchitecture />
        <DeploymentScale />
        <PlatformCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;

