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
  TrendingUp, Database, Brain, BarChart3, Package, TrendingUp as TrendIcon,
  LineChart, TrendingDown, Clock
} from "lucide-react";

const ForecastingEngine = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SolutionHero
          category="SUPPLY CHAIN & RETAIL"
          headline="Demand prediction you can act on"
          subheadline="Agentic forecasting that blends statistical models and AI reasoning to improve planning accuracy."
          keyOutcomes={[
            { icon: "📊", text: "40% better accuracy" },
            { icon: "📦", text: "30% lower inventory" },
            { icon: "💰", text: "50% fewer stockouts" },
          ]}
          themeColor="cyan"
        />
        <SolutionProblem
          problems={[
            {
              icon: "⚠️",
              title: "Inaccurate demand forecasts",
              description: "Traditional models miss trends and seasonality",
            },
            {
              icon: "⚠️",
              title: "Excess inventory",
              description: "Overstocking ties up capital and space",
            },
            {
              icon: "⚠️",
              title: "Stockouts and lost sales",
              description: "Understocking leads to missed opportunities",
            },
            {
              icon: "⚠️",
              title: "Manual planning processes",
              description: "Time-consuming and error-prone analysis",
            },
          ]}
          callout="Planning needs intelligence, not just algorithms."
          themeColor="cyan"
        />
        <SolutionOverview
          title="The Forecasting Engine combines statistical models with agentic reasoning."
          description="It:"
          capabilities={[
            "Analyzes historical data and external factors",
            "Identifies patterns, trends, and seasonality",
            "Adjusts forecasts based on market signals",
            "Optimizes inventory levels automatically",
            "Provides explainable predictions with confidence scores",
          ]}
          themeColor="cyan"
        />
        <SolutionHowItWorks
          steps={[
            {
              number: "01",
              icon: Database,
              title: "Data Ingestion",
              description: "Ingests sales, inventory, and market data",
            },
            {
              number: "02",
              icon: Brain,
              title: "Pattern Analysis",
              description: "Identifies trends and seasonality patterns",
            },
            {
              number: "03",
              icon: BarChart3,
              title: "Forecast Generation",
              description: "Generates predictions using AI and statistical models",
            },
            {
              number: "04",
              icon: Package,
              title: "Inventory Optimization",
              description: "Recommends optimal inventory levels",
            },
            {
              number: "05",
              icon: TrendIcon,
              title: "Continuous Learning",
              description: "Improves accuracy from outcomes",
            },
          ]}
          themeColor="cyan"
        />
        <SolutionCapabilities
          capabilities={[
            {
              icon: LineChart,
              title: "Demand Forecasting",
              description: "AI-powered demand prediction with high accuracy",
            },
            {
              icon: Package,
              title: "Inventory Optimization",
              description: "Optimal stock levels to minimize costs",
            },
            {
              icon: TrendingUp,
              title: "Trend & Seasonality Analysis",
              description: "Identifies patterns and seasonal variations",
            },
            {
              icon: BarChart3,
              title: "Confidence Scoring",
              description: "Every forecast includes confidence metrics",
            },
            {
              icon: Database,
              title: "Multi-source Data Integration",
              description: "Combines internal and external data sources",
            },
            {
              icon: Brain,
              title: "Explainable Predictions",
              description: "Understand why forecasts were made",
            },
          ]}
          channels={["ERP", "WMS", "Analytics Platforms", "APIs"]}
          themeColor="cyan"
        />
        <SolutionOutcomes
          outcomes={[
            {
              icon: TrendingUp,
              metric: "40%",
              label: "Better accuracy",
              description: "More accurate than traditional forecasting",
            },
            {
              icon: Package,
              metric: "30%",
              label: "Lower inventory",
              description: "Optimized stock levels reduce carrying costs",
            },
            {
              icon: TrendingDown,
              metric: "50%",
              label: "Fewer stockouts",
              description: "Better planning prevents out-of-stock situations",
            },
            {
              icon: Clock,
              metric: "80%",
              label: "Faster planning",
              description: "Automated forecasting saves planning time",
            },
          ]}
          themeColor="cyan"
        />
        <SolutionGovernance themeColor="cyan" />
        <SolutionCTA
          headline="Plan with clarity, not guesswork."
          subtext="See the Forecasting Engine in action with a personalized demo"
          themeColor="cyan"
        />
      </main>
      <Footer />
    </div>
  );
};

export default ForecastingEngine;

