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
  Mail, Eye, Database, FileText, Send, TrendingUp,
  Brain, Mail as MailIcon, Clock, BarChart3
} from "lucide-react";

const CustomerEmailAI = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SolutionHero
          category="CUSTOMER SUPPORT"
          headline="Your autonomous backend customer support team"
          subheadline="AI agents that read, reason, retrieve data, and respond to customer emails — with human oversight only when required."
          keyOutcomes={[
            { icon: "⚡", text: "Near-instant responses" },
            { icon: "💰", text: "60% cost reduction" },
            { icon: "😊", text: "95% CSAT improvement" },
          ]}
          themeColor="teal"
        />
        <SolutionProblem
          problems={[
            {
              icon: "⚠️",
              title: "High email volume",
              description: "Support teams overwhelmed by thousands of daily emails",
            },
            {
              icon: "⚠️",
              title: "Slow response times",
              description: "Customers wait hours or days for responses",
            },
            {
              icon: "⚠️",
              title: "Manual data lookup",
              description: "Agents spend time searching for customer information",
            },
            {
              icon: "⚠️",
              title: "Inconsistent responses",
              description: "Quality varies based on agent experience",
            },
          ]}
          callout="Customer support needs intelligent automation that scales."
          themeColor="teal"
        />
        <SolutionOverview
          title="This agent operates as an autonomous support specialist."
          description="It:"
          capabilities={[
            "Reads incoming emails and understands intent",
            "Identifies required data and fetches information via MCP",
            "Drafts accurate, personalized responses",
            "Escalates complex cases to humans automatically",
            "Learns from resolutions to improve future responses",
          ]}
          themeColor="teal"
        />
        <SolutionHowItWorks
          steps={[
            {
              number: "01",
              icon: Mail,
              title: "Email Ingestion",
              description: "Reads incoming customer emails",
            },
            {
              number: "02",
              icon: Brain,
              title: "Intent Identification",
              description: "Identifies intent and required data",
            },
            {
              number: "03",
              icon: Database,
              title: "Data Retrieval",
              description: "Fetches information via MCP integrations",
            },
            {
              number: "04",
              title: "Response Drafting",
              icon: FileText,
              description: "Drafts accurate responses using context",
            },
            {
              number: "05",
              icon: Send,
              title: "Escalation & Delivery",
              description: "Sends response or escalates to humans",
            },
          ]}
          themeColor="teal"
        />
        <SolutionCapabilities
          capabilities={[
            {
              icon: Mail,
              title: "Email Reading & Understanding",
              description: "NLP-powered email comprehension",
            },
            {
              icon: Database,
              title: "Multi-system Data Retrieval",
              description: "Fetches data from CRM, orders, accounts",
            },
            {
              icon: FileText,
              title: "Contextual Response Generation",
              description: "Generates personalized, accurate responses",
            },
            {
              icon: Brain,
              title: "Intelligent Escalation",
              description: "Routes complex cases to human agents",
            },
            {
              icon: MailIcon,
              title: "Multi-language Support",
              description: "Handles emails in multiple languages",
            },
            {
              icon: BarChart3,
              title: "Performance Analytics",
              description: "Tracks resolution rates and satisfaction",
            },
          ]}
          channels={["Email", "Helpdesk", "CRM", "Ticketing Systems"]}
          themeColor="teal"
        />
        <SolutionOutcomes
          outcomes={[
            {
              icon: Clock,
              metric: "Instant",
              label: "Response times",
              description: "Near-instant automated responses",
            },
            {
              icon: TrendingUp,
              metric: "60%",
              label: "Reduced support costs",
              description: "Automation reduces need for large teams",
            },
            {
              icon: Mail,
              metric: "95%",
              label: "Improved CSAT",
              description: "Faster, more accurate responses",
            },
            {
              icon: BarChart3,
              metric: "3x",
              label: "Higher throughput",
              description: "Handle more tickets with same resources",
            },
          ]}
          themeColor="teal"
        />
        <SolutionGovernance themeColor="teal" />
        <SolutionCTA
          headline="Respond faster — without adding headcount."
          subtext="See Customer Email AI in action with a personalized demo"
          themeColor="teal"
        />
      </main>
      <Footer />
    </div>
  );
};

export default CustomerEmailAI;

