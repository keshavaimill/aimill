import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionProblem } from "@/components/solutions/SolutionProblem";
import { SolutionOverview } from "@/components/solutions/SolutionOverview";
import { SolutionHowItWorks } from "@/components/solutions/SolutionHowItWorks";
import { SolutionCapabilities } from "@/components/solutions/SolutionCapabilities";
import { SolutionOutcomes } from "@/components/solutions/SolutionOutcomes";
import { SolutionGovernance } from "@/components/solutions/SolutionGovernance";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { 
  ShoppingBag, Image, FileText, CheckCircle, TrendingUp,
  Database, Eye, Sparkles, Globe, BarChart3
} from "lucide-react";

const EcommerceIntelligence = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SolutionHero
          category="ECOMMERCE AI"
          headline="AI agents powering the future of ecommerce operations"
          subheadline="A single platform to manage catalogs, ensure content accuracy, generate product assets, and optimize conversions — autonomously."
          keyOutcomes={[
            { icon: "⚡", text: "5x faster catalog launches" },
            { icon: "💰", text: "70% lower content costs" },
            { icon: "📈", text: "40% higher conversion" },
          ]}
          themeColor="green"
        />
        <SolutionProblem
          problems={[
            {
              icon: "⚠️",
              title: "Inconsistent product data",
              description: "Mismatched images and descriptions across channels",
            },
            {
              icon: "⚠️",
              title: "Costly photoshoots",
              description: "Expensive and time-consuming product photography",
            },
            {
              icon: "⚠️",
              title: "Manual content creation",
              description: "Slow, repetitive product description writing",
            },
            {
              icon: "⚠️",
              title: "Slow catalog onboarding",
              description: "Weeks to add new products to marketplaces",
            },
          ]}
          callout="Ecommerce teams need intelligent automation for scale."
          themeColor="green"
        />
        <SolutionOverview
          title="Ai Mill's Ecommerce Agents manage catalog intelligence end-to-end."
          description="They:"
          capabilities={[
            "Detect discrepancies between images and descriptions",
            "Generate product descriptions from images",
            "Create virtual try-on visuals",
            "Ensure marketplace readiness and brand compliance",
            "Optimize content for conversion",
          ]}
          themeColor="green"
        />
        <SolutionHowItWorks
          steps={[
            {
              number: "01",
              icon: Database,
              title: "Product Data Ingestion",
              description: "Ingests product data from multiple sources",
            },
            {
              number: "02",
              icon: Eye,
              title: "Image & Description Validation",
              description: "Validates consistency between visuals and text",
            },
            {
              number: "03",
              icon: Sparkles,
              title: "AI-based Content Generation",
              description: "Generates descriptions and marketing copy",
            },
            {
              number: "04",
              icon: Image,
              title: "Virtual Image Creation",
              description: "Creates product visuals and try-on images",
            },
            {
              number: "05",
              icon: CheckCircle,
              title: "Continuous Quality Checks",
              description: "Monitors and maintains catalog quality",
            },
          ]}
          themeColor="green"
        />
        <SolutionCapabilities
          capabilities={[
            {
              icon: FileText,
              title: "Image-to-Description Generation",
              description: "AI generates accurate product descriptions from images",
            },
            {
              icon: Eye,
              title: "Discrepancy Detection",
              description: "Identifies mismatches between images and descriptions",
            },
            {
              icon: Image,
              title: "Virtual Try-ons",
              description: "Creates virtual product visualizations",
            },
            {
              icon: CheckCircle,
              title: "Catalog Quality Scoring",
              description: "Ensures marketplace readiness and compliance",
            },
            {
              icon: Globe,
              title: "Multi-channel Optimization",
              description: "Optimizes content for different marketplaces",
            },
            {
              icon: BarChart3,
              title: "Conversion Optimization",
              description: "A/B tests and optimizes product listings",
            },
          ]}
          channels={["Amazon", "Shopify", "WooCommerce", "eBay", "Marketplaces"]}
          themeColor="green"
        />
        <SolutionOutcomes
          outcomes={[
            {
              icon: TrendingUp,
              metric: "5x",
              label: "Faster catalog launches",
              description: "From weeks to days with automated processing",
            },
            {
              icon: ShoppingBag,
              metric: "70%",
              label: "Reduced content costs",
              description: "AI replaces expensive photoshoots and copywriting",
            },
            {
              icon: BarChart3,
              metric: "+40%",
              label: "Higher conversion rates",
              description: "Optimized content drives more sales",
            },
            {
              icon: CheckCircle,
              metric: "100%",
              label: "Brand consistency",
              description: "Automated compliance ensures brand standards",
            },
          ]}
          themeColor="green"
        />
        <SolutionGovernance themeColor="green" />
        <SolutionCTA
          headline="Scale ecommerce without scaling effort."
          subtext="See Ecommerce Intelligence in action with a personalized demo"
          themeColor="green"
        />
      </main>
      <Footer />
    </div>
  );
};

export default EcommerceIntelligence;

