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
  Shield, Mail, FileText, CheckCircle, TrendingUp,
  Database, Brain, Globe, BarChart3, Clock
} from "lucide-react";

const InsuranceFNOL = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SolutionHero
          category="INSURANCE"
          headline="Faster, smarter claims processing from first notice of loss"
          subheadline="The FNOL Agent reads claim emails, extracts policy data, validates coverage, and processes claims — dramatically reducing processing time while improving accuracy."
          keyOutcomes={[
            { icon: "⚡", text: "90% faster processing" },
            { icon: "✅", text: "Higher claim accuracy" },
            { icon: "💰", text: "Faster settlements" },
          ]}
          themeColor="purple"
        />
        <SolutionProblem
          problems={[
            {
              icon: "⚠️",
              title: "Slow claim processing",
              description: "Manual review takes days or weeks",
            },
            {
              icon: "⚠️",
              title: "Data extraction errors",
              description: "Manual data entry leads to mistakes",
            },
            {
              icon: "⚠️",
              title: "Missing information",
              description: "Incomplete claims delay processing",
            },
            {
              icon: "⚠️",
              title: "Fraud detection gaps",
              description: "Hard to identify suspicious claims early",
            },
          ]}
          callout="Claims processing needs intelligent automation."
          themeColor="purple"
        />
        <SolutionOverview
          title="The FNOL Agent automates first notice of loss processing."
          description="It:"
          capabilities={[
            "Reads claim emails and extracts key information",
            "Validates policy data and coverage automatically",
            "Maps coverage to issue types intelligently",
            "Connects to weather and police APIs for verification",
            "Scores confidence and flags missing information",
            "Sends automated follow-ups for incomplete claims",
          ]}
          themeColor="purple"
        />
        <SolutionHowItWorks
          steps={[
            {
              number: "01",
              icon: Mail,
              title: "Claim Email Reading",
              description: "Reads and parses incoming claim emails",
            },
            {
              number: "02",
              icon: Database,
              title: "Data Extraction",
              description: "Extracts and validates policy data",
            },
            {
              number: "03",
              icon: Brain,
              title: "Coverage Mapping",
              description: "Maps coverage to issue types",
            },
            {
              number: "04",
              icon: Globe,
              title: "External Verification",
              description: "Connects to weather and police APIs",
            },
            {
              number: "05",
              icon: CheckCircle,
              title: "Confidence Scoring",
              description: "Scores confidence and flags issues",
            },
          ]}
          themeColor="purple"
        />
        <SolutionCapabilities
          capabilities={[
            {
              icon: Mail,
              title: "Email Processing",
              description: "Automated reading and parsing of claim emails",
            },
            {
              icon: Database,
              title: "Policy Data Validation",
              description: "Validates policy information automatically",
            },
            {
              icon: Brain,
              title: "Coverage Intelligence",
              description: "Maps claims to appropriate coverage types",
            },
            {
              icon: Globe,
              title: "External API Integration",
              description: "Verifies claims with weather and police data",
            },
            {
              icon: BarChart3,
              title: "Confidence Scoring",
              description: "Every claim gets a confidence score",
            },
            {
              icon: Shield,
              title: "Fraud Signal Detection",
              description: "Identifies suspicious patterns early",
            },
          ]}
          channels={["Email", "Claims Systems", "Policy Databases", "External APIs"]}
          themeColor="purple"
        />
        <SolutionOutcomes
          outcomes={[
            {
              icon: Clock,
              metric: "90%",
              label: "Faster processing",
              description: "From days to hours with automation",
            },
            {
              icon: CheckCircle,
              metric: "+35%",
              label: "Higher accuracy",
              description: "Automated validation reduces errors",
            },
            {
              icon: TrendingUp,
              metric: "2x",
              label: "Faster settlements",
              description: "Quicker processing means faster payouts",
            },
            {
              icon: Shield,
              metric: "50%",
              label: "Better fraud detection",
              description: "Early identification of suspicious claims",
            },
          ]}
          themeColor="purple"
        />
        <SolutionGovernance themeColor="purple" />
        <SolutionCTA
          headline="Transform claims operations with agentic AI."
          subtext="See the Insurance FNOL Agent in action with a personalized demo"
          themeColor="purple"
        />
      </main>
      <Footer />
    </div>
  );
};

export default InsuranceFNOL;

