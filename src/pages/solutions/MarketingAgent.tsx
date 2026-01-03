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
  Target, Sparkles, Network, BarChart3, RefreshCw,
  Database, Brain, Sparkles as SparklesIcon, Send, TrendingUp
} from "lucide-react";

const MarketingAgent = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SolutionHero
          category="MARKETING AI"
          headline="Autonomous marketing execution — from insight to impact"
          subheadline="Ai Mill's Marketing Agent identifies the right customers, creates high-performing content, and executes campaigns autonomously across channels — reducing time-to-market while increasing ROI."
          keyOutcomes={[
            { icon: "⚡", text: "80% faster execution" },
            { icon: "💰", text: "40% cost reduction" },
            { icon: "📈", text: "3x ROI improvement" },
          ]}
          themeColor="cyan"
        />
        <SolutionProblem
          problems={[
            {
              icon: "⚠️",
              title: "Manual customer segmentation",
              description: "Time-consuming, error-prone analysis that delays campaign launches",
            },
            {
              icon: "⚠️",
              title: "Slow campaign execution",
              description: "Weeks from insight to launch, missing market opportunities",
            },
            {
              icon: "⚠️",
              title: "Disconnected channels",
              description: "Fragmented customer experience across email, social, and messaging",
            },
            {
              icon: "⚠️",
              title: "High operational overhead",
              description: "Team bottlenecks and burnout from manual processes",
            },
          ]}
          callout="Insights exist — execution doesn't scale."
          themeColor="cyan"
        />
        <SolutionOverview
          title="The Marketing Agent operates as a self-directed growth engine."
          description="It:"
          capabilities={[
            "Continuously analyzes customer data",
            "Identifies churn risk and high-intent segments",
            "Generates personalized content using LLMs",
            "Executes campaigns automatically across channels",
            "Learns from outcomes and optimizes future actions",
          ]}
          themeColor="cyan"
        />
        <SolutionHowItWorks
          steps={[
            {
              number: "01",
              icon: Database,
              title: "Data Ingestion",
              description: "Ingests CRM, transaction, and engagement data",
            },
            {
              number: "02",
              icon: Brain,
              title: "Customer Segmentation",
              description: "Segments customers using predictive and agentic logic",
            },
            {
              number: "03",
              icon: SparklesIcon,
              title: "Content Generation",
              description: "Generates content tailored to product and persona",
            },
            {
              number: "04",
              icon: Send,
              title: "Campaign Execution",
              description: "Executes campaigns via integrated channels",
            },
            {
              number: "05",
              icon: TrendingUp,
              title: "Performance Optimization",
              description: "Measures performance and optimizes strategy",
            },
          ]}
          themeColor="cyan"
        />
        <SolutionCapabilities
          capabilities={[
            {
              icon: Target,
              title: "Customer Segmentation & Churn Prediction",
              description: "AI-powered customer analysis with predictive churn scoring",
            },
            {
              icon: Sparkles,
              title: "Agentic Content Generation",
              description: "Personalized content creation at scale using LLMs",
            },
            {
              icon: Network,
              title: "Multi-channel Execution",
              description: "Deploy across email, social, SMS, and messaging platforms",
            },
            {
              icon: BarChart3,
              title: "Performance Tracking",
              description: "Real-time campaign analytics and ROI measurement",
            },
            {
              icon: RefreshCw,
              title: "A/B Testing & Optimization",
              description: "Continuous testing and strategy refinement",
            },
            {
              icon: RefreshCw,
              title: "Feedback Loops",
              description: "Learn from outcomes to improve future campaigns",
            },
          ]}
          channels={["Email", "WhatsApp", "Instagram", "Twitter/X", "Facebook", "SMS", "Slack", "APIs"]}
          themeColor="cyan"
        />
        <SolutionOutcomes
          outcomes={[
            {
              icon: TrendingUp,
              metric: "5x",
              label: "Faster campaign launches",
              description: "From weeks to hours with automated execution",
            },
            {
              icon: BarChart3,
              metric: "+35%",
              label: "Conversion rate increase",
              description: "Through AI-powered personalization",
            },
            {
              icon: Target,
              metric: "60%",
              label: "Lower marketing ops cost",
              description: "Automation reduces manual work",
            },
            {
              icon: Network,
              metric: "2.5x",
              label: "Higher lifetime value",
              description: "Better targeting and retention",
            },
          ]}
          themeColor="cyan"
        />
        <SolutionGovernance themeColor="cyan" />
        <SolutionCTA
          headline="Turn insights into revenue — automatically."
          subtext="See the Marketing Agent in action with a personalized demo"
          themeColor="cyan"
        />
      </main>
      <Footer />
    </div>
  );
};

export default MarketingAgent;

