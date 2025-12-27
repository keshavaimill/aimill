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
  Users, MessageSquare, Calendar, CheckCircle, TrendingUp,
  Database, Brain, MessageSquare as ChatIcon, Clock, BarChart3
} from "lucide-react";

const HRBot = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SolutionHero
          category="HR AUTOMATION"
          headline="HR operations, automated through conversation"
          subheadline="Give employees instant access to HR services using natural language — while automating approvals and workflows."
          keyOutcomes={[
            { icon: "⚡", text: "80% reduced HR workload" },
            { icon: "⏱️", text: "Instant employee resolutions" },
            { icon: "😊", text: "95% employee satisfaction" },
          ]}
          themeColor="pink"
        />
        <SolutionProblem
          problems={[
            {
              icon: "⚠️",
              title: "Repetitive employee queries",
              description: "HR teams spend hours answering the same questions",
            },
            {
              icon: "⚠️",
              title: "Manual approvals",
              description: "Slow approval processes for leave and requests",
            },
            {
              icon: "⚠️",
              title: "Disconnected HR systems",
              description: "Information scattered across multiple platforms",
            },
            {
              icon: "⚠️",
              title: "After-hours support gaps",
              description: "No 24/7 access to HR information and services",
            },
          ]}
          callout="HR teams need to focus on people, not tickets."
          themeColor="pink"
        />
        <SolutionOverview
          title="The HR Bot acts as a 24/7 HR operations layer."
          description="It:"
          capabilities={[
            "Answers policy and benefits questions instantly",
            "Handles leave and ticket requests automatically",
            "Automates approvals based on company policies",
            "Integrates with Slack and Teams",
            "Provides self-service access to HR information",
          ]}
          themeColor="pink"
        />
        <SolutionHowItWorks
          steps={[
            {
              number: "01",
              icon: MessageSquare,
              title: "Employee Query",
              description: "Employee asks question via chat or voice",
            },
            {
              number: "02",
              icon: Brain,
              title: "Intent Recognition",
              description: "Bot understands request and retrieves relevant data",
            },
            {
              number: "03",
              icon: Database,
              title: "Data Retrieval",
              description: "Fetches information from HR systems and policies",
            },
            {
              number: "04",
              icon: CheckCircle,
              title: "Automated Processing",
              description: "Processes requests and approvals automatically",
            },
            {
              number: "05",
              icon: ChatIcon,
              title: "Response & Confirmation",
              description: "Provides answer or confirmation to employee",
            },
          ]}
          themeColor="pink"
        />
        <SolutionCapabilities
          capabilities={[
            {
              icon: MessageSquare,
              title: "Natural Language HR Access",
              description: "Employees ask questions in plain language",
            },
            {
              icon: Calendar,
              title: "Leave & Ticket Management",
              description: "Automated leave requests and ticket routing",
            },
            {
              icon: CheckCircle,
              title: "Automated Approvals",
              description: "Policy-based automatic approval workflows",
            },
            {
              icon: Users,
              title: "Slack & Teams Integration",
              description: "Works where employees already communicate",
            },
            {
              icon: Database,
              title: "HR System Integration",
              description: "Connects to existing HRIS and payroll systems",
            },
            {
              icon: BarChart3,
              title: "HR Analytics",
              description: "Insights into employee queries and trends",
            },
          ]}
          channels={["Slack", "Microsoft Teams", "Web Chat", "Mobile"]}
          themeColor="pink"
        />
        <SolutionOutcomes
          outcomes={[
            {
              icon: TrendingUp,
              metric: "80%",
              label: "Reduced HR workload",
              description: "Automation handles routine inquiries",
            },
            {
              icon: Clock,
              metric: "Instant",
              label: "Employee resolutions",
              description: "24/7 access to HR information and services",
            },
            {
              icon: Users,
              metric: "95%",
              label: "Employee satisfaction",
              description: "Faster, more convenient HR service",
            },
            {
              icon: BarChart3,
              metric: "60%",
              label: "Lower HR costs",
              description: "Reduced need for additional HR staff",
            },
          ]}
          themeColor="pink"
        />
        <SolutionGovernance themeColor="pink" />
        <SolutionCTA
          headline="Let HR focus on people — not tickets."
          subtext="See the HR Bot in action with a personalized demo"
          themeColor="pink"
        />
      </main>
      <Footer />
    </div>
  );
};

export default HRBot;

