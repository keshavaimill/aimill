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
  Wrench, Database, Brain, AlertTriangle, TrendingUp,
  BarChart3, Settings, Clock, DollarSign
} from "lucide-react";

const PredictiveMaintenance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SolutionHero
          category="MANUFACTURING"
          headline="Prevent failures before they happen"
          subheadline="Agentic AI that analyzes sensor data, predicts failures, and optimizes maintenance schedules — reducing downtime and extending asset lifespan."
          keyOutcomes={[
            { icon: "⚡", text: "50% less downtime" },
            { icon: "💰", text: "40% lower maintenance costs" },
            { icon: "📈", text: "30% longer asset life" },
          ]}
          themeColor="green"
        />
        <SolutionProblem
          problems={[
            {
              icon: "⚠️",
              title: "Reactive maintenance",
              description: "Fixing problems after they occur causes downtime",
            },
            {
              icon: "⚠️",
              title: "Unnecessary maintenance",
              description: "Over-maintenance wastes time and resources",
            },
            {
              icon: "⚠️",
              title: "Equipment failures",
              description: "Unexpected breakdowns disrupt production",
            },
            {
              icon: "⚠️",
              title: "Manual analysis",
              description: "Time-consuming sensor data analysis",
            },
          ]}
          callout="Manufacturing needs predictive intelligence, not reactive fixes."
          themeColor="green"
        />
        <SolutionOverview
          title="Predictive Maintenance agents analyze data and predict failures."
          description="They:"
          capabilities={[
            "Ingest sensor and operational data continuously",
            "Analyze patterns to predict failure points",
            "Optimize maintenance schedules automatically",
            "Alert teams before failures occur",
            "Learn from maintenance outcomes to improve predictions",
          ]}
          themeColor="green"
        />
        <SolutionHowItWorks
          steps={[
            {
              number: "01",
              icon: Database,
              title: "Sensor Data Ingestion",
              description: "Continuously ingests sensor and operational data",
            },
            {
              number: "02",
              icon: Brain,
              title: "Pattern Analysis",
              description: "Analyzes patterns to identify failure signals",
            },
            {
              number: "03",
              icon: AlertTriangle,
              title: "Failure Prediction",
              description: "Predicts when failures are likely to occur",
            },
            {
              number: "04",
              icon: Settings,
              title: "Maintenance Optimization",
              description: "Optimizes maintenance schedules and priorities",
            },
            {
              number: "05",
              icon: BarChart3,
              title: "Continuous Learning",
              description: "Improves predictions from maintenance outcomes",
            },
          ]}
          themeColor="green"
        />
        <SolutionCapabilities
          capabilities={[
            {
              icon: Database,
              title: "Sensor & Data Ingestion",
              description: "Collects data from IoT sensors and systems",
            },
            {
              icon: Brain,
              title: "Failure Prediction",
              description: "AI-powered prediction of equipment failures",
            },
            {
              icon: Settings,
              title: "Maintenance Optimization",
              description: "Optimal scheduling to minimize downtime",
            },
            {
              icon: AlertTriangle,
              title: "Early Warning System",
              description: "Alerts before failures occur",
            },
            {
              icon: BarChart3,
              title: "Asset Health Monitoring",
              description: "Continuous monitoring of equipment health",
            },
            {
              icon: Wrench,
              title: "Maintenance Planning",
              description: "Automated maintenance schedule generation",
            },
          ]}
          channels={["IoT Sensors", "SCADA", "MES", "CMMS"]}
          themeColor="green"
        />
        <SolutionOutcomes
          outcomes={[
            {
              icon: Clock,
              metric: "50%",
              label: "Less downtime",
              description: "Predictive maintenance prevents failures",
            },
            {
              icon: DollarSign,
              metric: "40%",
              label: "Lower maintenance costs",
              description: "Optimized schedules reduce unnecessary work",
            },
            {
              icon: TrendingUp,
              metric: "30%",
              label: "Longer asset lifespan",
              description: "Proactive care extends equipment life",
            },
            {
              icon: BarChart3,
              metric: "80%",
              label: "Better planning",
              description: "Predictive insights improve scheduling",
            },
          ]}
          themeColor="green"
        />
        <SolutionGovernance themeColor="green" />
        <SolutionCTA
          headline="Move from reactive to predictive operations."
          subtext="See Predictive Maintenance in action with a personalized demo"
          themeColor="green"
        />
      </main>
      <Footer />
    </div>
  );
};

export default PredictiveMaintenance;

