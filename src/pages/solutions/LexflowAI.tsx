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
  FileText, PenTool, Search, Calendar, Mail,
  Database, Brain, FileText as FileIcon, Clock, TrendingUp
} from "lucide-react";

const LexflowAI = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SolutionHero
          category="LEGAL TECH"
          headline="The agentic legal command center"
          subheadline="Lexflow AI gives legal teams a unified workspace to manage documents, draft responses, conduct research, and communicate with clients — all powered by governed AI agents."
          keyOutcomes={[
            { icon: "⚡", text: "90% faster drafting" },
            { icon: "📋", text: "Zero missed deadlines" },
            { icon: "💰", text: "60% cost reduction" },
          ]}
          themeColor="purple"
        />
        <SolutionProblem
          problems={[
            {
              icon: "⚠️",
              title: "Fragmented documents and notices",
              description: "Legal documents scattered across systems, hard to track and manage",
            },
            {
              icon: "⚠️",
              title: "Manual drafting and research",
              description: "Time-consuming document creation and precedent research",
            },
            {
              icon: "⚠️",
              title: "Missed deadlines and follow-ups",
              description: "Critical dates slip through cracks without automated tracking",
            },
            {
              icon: "⚠️",
              title: "Slow client communication",
              description: "Delayed responses impact client satisfaction and case outcomes",
            },
          ]}
          callout="Legal teams need automation that understands context and compliance."
          themeColor="purple"
        />
        <SolutionOverview
          title="Lexflow AI acts as a legal operations co-pilot."
          description="It:"
          capabilities={[
            "Centralizes all legal documents and matters",
            "Drafts notices and responses in seconds",
            "Researches historical judgments and precedents",
            "Tracks deadlines and progress automatically",
            "Streamlines client communication",
          ]}
          themeColor="purple"
        />
        <SolutionHowItWorks
          steps={[
            {
              number: "01",
              icon: Database,
              title: "Upload Documents",
              description: "Upload documents and notices to centralized workspace",
            },
            {
              number: "02",
              icon: Brain,
              title: "Classify & Analyze",
              description: "Agents classify, analyze, and index content automatically",
            },
            {
              number: "03",
              icon: PenTool,
              title: "Drafting Studio",
              description: "Generates responses using RAG and legal knowledge base",
            },
            {
              number: "04",
              icon: Search,
              title: "Research Agent",
              description: "References relevant judgments and precedents",
            },
            {
              number: "05",
              icon: Calendar,
              title: "Command Center",
              description: "Tracks deadlines and actions automatically",
            },
          ]}
          themeColor="purple"
        />
        <SolutionCapabilities
          capabilities={[
            {
              icon: FileText,
              title: "Matter-based Legal Workspaces",
              description: "Organize all case documents in one secure workspace",
            },
            {
              icon: PenTool,
              title: "AI Drafting Studio",
              description: "Generate legal documents with context-aware AI",
            },
            {
              icon: Search,
              title: "Legal Research Agent",
              description: "Find relevant precedents and judgments instantly",
            },
            {
              icon: Calendar,
              title: "Deadline & Progress Tracking",
              description: "Never miss a deadline with automated tracking",
            },
            {
              icon: Mail,
              title: "Email & WhatsApp Communication",
              description: "Streamlined client communication channels",
            },
            {
              icon: FileIcon,
              title: "Document Version Control",
              description: "Track changes and maintain document history",
            },
          ]}
          channels={["Email", "WhatsApp", "Document Management", "Legal Databases"]}
          themeColor="purple"
        />
        <SolutionOutcomes
          outcomes={[
            {
              icon: Clock,
              metric: "90%",
              label: "Faster legal turnaround",
              description: "From days to hours with AI-powered drafting",
            },
            {
              icon: TrendingUp,
              metric: "60%",
              label: "Reduced drafting effort",
              description: "Automation handles routine document creation",
            },
            {
              icon: FileText,
              metric: "100%",
              label: "Better compliance",
              description: "Automated tracking ensures no missed deadlines",
            },
            {
              icon: Mail,
              metric: "3x",
              label: "Improved client experience",
              description: "Faster responses and better communication",
            },
          ]}
          themeColor="purple"
        />
        <SolutionGovernance themeColor="purple" />
        <SolutionCTA
          headline="Modernize legal operations with confidence."
          subtext="See Lexflow AI in action with a personalized demo"
          themeColor="purple"
        />
      </main>
      <Footer />
    </div>
  );
};

export default LexflowAI;

