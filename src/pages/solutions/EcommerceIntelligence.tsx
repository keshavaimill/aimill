import React from "react";
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
  ShoppingBag,
  Image,
  FileText,
  CheckCircle,
  TrendingUp,
  Database,
  Eye,
  Sparkles,
  Globe,
  BarChart3,
  Zap,
  Coins,
  AlertTriangle,
  Layers,
  Camera,
  PenTool,
  Clock,
  ShieldCheck
} from "lucide-react";

// --- Data Configuration (Clean & Editable) ---

const THEME_COLOR = "green"; // Used for accents

const HERO_DATA = {
  category: "ECOMMERCE INTELLIGENCE",
  headline: "Autonomous agents for the modern catalog",
  subheadline: "Orchestrate your entire product lifecycle. From detecting data discrepancies to generating conversion-optimized assets—fully automated.",
  outcomes: [
    { icon: "⚡", text: "5x faster launches" },
    { icon: "💰", text: "70% lower overhead" },
    { icon: "📈", text: "+40% conversion rate" },
  ],
};

const PROBLEMS_DATA = [
  {
    icon: "⚠️",
    title: "Data Fragmentation",
    description: "Mismatched specs and descriptions across sales channels erode trust.",
  },
  {
    icon: "⚠️",
    title: "Production Bottlenecks",
    description: "Waiting weeks for expensive physical photoshoots delays revenue.",
  },
  {
    icon: "⚠️",
    title: "Manual Content Fatigue",
    description: "Teams burn out writing repetitive descriptions instead of strategizing.",
  },
  {
    icon: "⚠️",
    title: "Slow Market Entry",
    description: "Marketplace onboarding takes weeks, missing critical trend windows.",
  },
];

const WORKFLOW_STEPS = [
  {
    number: "01",
    icon: Database,
    title: "Ingest & Normalize",
    description: "Unifies raw product data from PIMs, suppliers, and spreadsheets.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Visual Validation",
    description: "AI scans imagery to ensure it matches technical specifications.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Generative Enhancement",
    description: "Creates rich descriptions, SEO tags, and lifestyle imagery.",
  },
  {
    number: "04",
    icon: Layers,
    title: "Virtual Production",
    description: "Synthesizes try-on visuals and 3D assets without cameras.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Quality Gate",
    description: "Continuous monitoring ensures brand safety before publishing.",
  },
];

const OUTCOMES_DATA = [
  {
    icon: Zap,
    metric: "5x",
    label: "Velocity Increase",
    description: "Accelerate time-to-market from weeks to days.",
  },
  {
    icon: Coins,
    metric: "70%",
    label: "Cost Reduction",
    description: "Slash photography and copywriting expenses.",
  },
  {
    icon: TrendingUp,
    metric: "+40%",
    label: "Conversion Lift",
    description: "High-fidelity content drives higher buyer confidence.",
  },
  {
    icon: CheckCircle,
    metric: "100%",
    label: "Brand Compliance",
    description: "Never publish off-brand or incorrect data again.",
  },
];

const CAPABILITIES_DATA = [
  {
    icon: FileText,
    title: "Visual-to-Text Generation",
    description: "Derive accurate specs and descriptions directly from product pixels.",
  },
  {
    icon: Eye,
    title: "Discrepancy Scouting",
    description: "Automatically flag when the image color doesn't match the text description.",
  },
  {
    icon: Image,
    title: "Virtual Studio",
    description: "Generate on-model photography and scene variations instantly.",
  },
  {
    icon: CheckCircle,
    title: "Readiness Scoring",
    description: "Predict marketplace rejection probability before you submit.",
  },
  {
    icon: Globe,
    title: "Omnichannel Adaptation",
    description: "Reformats assets specifically for Amazon, Shopify, or Instagram.",
  },
  {
    icon: BarChart3,
    title: "A/B Content Testing",
    description: "Iteratively improves listing copy based on performance data.",
  },
];

// --- Main Component ---

const EcommerceIntelligence = () => {
  return (
    // Changed: bg-zinc-950 is a very dark charcoal, not pure black.
    // text-zinc-100 softens the white text slightly so it isn't harsh.
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-green-500/30 selection:text-green-200 font-sans">
      
      {/* Subtle Ambient Background 
        This adds a faint green glow at the top center to give the page depth.
        It is "fixed" so it stays in place while you scroll.
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[60%] h-[500px] bg-green-900/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[400px] bg-emerald-900/5 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <Navbar />

      {/* Main content sits above the background (z-10) */}
      <main className="relative z-10 flex flex-col gap-12 sm:gap-20 pb-20">
        
        <SolutionHero
          category={HERO_DATA.category}
          headline={HERO_DATA.headline}
          subheadline={HERO_DATA.subheadline}
          keyOutcomes={HERO_DATA.outcomes}
          themeColor={THEME_COLOR}
        />

        {/* Added a wrapper for the 'Problem' section to give it a slight tint.
           This breaks up the visual monotony of a long dark page.
        */}
        <div className="bg-zinc-900/30 border-y border-white/5 py-12">
            <SolutionProblem
            problems={PROBLEMS_DATA}
            callout="Traditional ecommerce operations can't keep pace with modern demand."
            themeColor={THEME_COLOR}
            />
        </div>

        <SolutionOverview
          title="End-to-end catalog intelligence."
          description="Ai Mill's Agents don't just assist; they take ownership of the repetitive, high-volume tasks that slow your team down:"
          capabilities={[
            "Detect discrepancies between images and descriptions",
            "Generate product descriptions from images",
            "Create virtual try-on visuals",
            "Ensure marketplace readiness and brand compliance",
            "Optimize content for conversion",
          ]}
          themeColor={THEME_COLOR}
        />

        <SolutionHowItWorks
          steps={WORKFLOW_STEPS}
          themeColor={THEME_COLOR}
        />

        <SolutionCapabilities
          capabilities={CAPABILITIES_DATA}
          channels={["Amazon", "Shopify", "WooCommerce", "eBay", "Marketplaces"]}
          themeColor={THEME_COLOR}
        />

        <div className="bg-gradient-to-b from-zinc-900/0 to-zinc-900/50 pt-10">
            <SolutionOutcomes
            outcomes={OUTCOMES_DATA}
            themeColor={THEME_COLOR}
            />
        </div>

        <SolutionGovernance themeColor={THEME_COLOR} />

        <SolutionCTA
          headline="Scale your catalog, not your headcount."
          subtext="See Ecommerce Intelligence in action with a personalized demo."
          themeColor={THEME_COLOR}
        />
      </main>

      <Footer />
    </div>
  );
};

export default EcommerceIntelligence;
