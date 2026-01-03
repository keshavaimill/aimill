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
  Clock, Users, FileText, Calendar, 
  Activity, BarChart3, Zap, Database, 
  TrendingUp, CheckCircle, Brain, MessageSquare, Shield, Briefcase
} from "lucide-react";

const HRBot = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SolutionHero
          category="HR AI"
          headline="HR operations automated through conversation"
          subheadline="Transform HR workflows with an AI agent that handles employee queries, processes requests, and automates administrative tasks — all through natural conversation."
          keyOutcomes={[
            { icon: "⚡", text: "70% faster response time" },
            { icon: "💰", text: "50% cost reduction" },
            { icon: "📈", text: "90% query resolution" },
          ]}
          themeColor="pink"
        />

        <SolutionProblem
          problems={[
            {
              icon: "⚠️",
              title: "High-volume employee queries",
              description: "HR teams overwhelmed by repetitive questions about policies, benefits, and procedures",
            },
            {
              icon: "⚠️",
              title: "Manual request processing",
              description: "Time-consuming approval workflows for leave, expenses, and document requests",
            },
            {
              icon: "⚠️",
              title: "Inconsistent information delivery",
              description: "Different answers from different HR staff, leading to confusion and frustration",
            },
            {
              icon: "⚠️",
              title: "Limited availability",
              description: "HR support only during business hours, leaving employees without answers",
            },
            {
              icon: "⚠️",
              title: "Administrative overhead",
              description: "HR teams spend too much time on routine tasks instead of strategic initiatives",
            },
          ]}
          callout="HR needs automation that feels human — not robotic."
          themeColor="pink"
        />

        <SolutionOverview
          title="The HR Bot operates as your 24/7 HR assistant."
          description="It:"
          capabilities={[
            "Answers employee questions instantly via chat",
            "Processes leave requests, expense claims, and document requests",
            "Provides policy information and benefit details",
            "Integrates with HRIS, payroll, and time-tracking systems",
            "Learns from interactions to improve responses over time",
          ]}
          themeColor="pink"
        />

        <SolutionHowItWorks
          steps={[
            {
              number: "01",
              icon: MessageSquare,
              title: "Natural Conversation",
              description: "Employees interact with HR Bot through chat, voice, or email",
            },
            {
              number: "02",
              icon: Brain,
              title: "Intent Understanding",
              description: "AI understands context and extracts relevant information from queries",
            },
            {
              number: "03",
              icon: Database,
              title: "Knowledge Retrieval",
              description: "Accesses HR policies, employee data, and system information",
            },
            {
              number: "04",
              icon: Zap,
              title: "Action Execution",
              description: "Processes requests, updates systems, and triggers workflows automatically",
            },
            {
              number: "05",
              icon: CheckCircle,
              title: "Continuous Learning",
              description: "Improves accuracy and expands knowledge base from each interaction",
            },
          ]}
          themeColor="pink"
        />

        <SolutionCapabilities
          capabilities={[
            {
              icon: MessageSquare,
              title: "24/7 Employee Support",
              description: "Instant answers to HR questions via chat, voice, or email",
            },
            {
              icon: FileText,
              title: "Request Processing",
              description: "Automated handling of leave, expense, and document requests",
            },
            {
              icon: Users,
              title: "Policy & Benefits Information",
              description: "Accurate, up-to-date information about company policies and benefits",
            },
            {
              icon: Calendar,
              title: "Leave Management",
              description: "Leave balance queries, request submission, and approval workflows",
            },
            {
              icon: Briefcase,
              title: "Onboarding & Offboarding",
              description: "Guides new hires and manages exit processes",
            },
            {
              icon: BarChart3,
              title: "HR Analytics",
              description: "Insights into common queries, request patterns, and employee satisfaction",
            },
          ]}
          channels={["Slack", "Microsoft Teams", "Email", "Web Chat", "Mobile App", "HRIS Integration"]}
          themeColor="pink"
        />

        <SolutionOutcomes
          outcomes={[
            {
              icon: TrendingUp,
              metric: "70%",
              label: "↑ Faster response time",
              description: "Instant answers vs. hours or days for manual responses",
            },
            {
              icon: Clock,
              metric: "50%",
              label: "↓ HR workload reduction",
              description: "Automation frees HR teams for strategic work",
            },
            {
              icon: CheckCircle,
              metric: "90%",
              label: "Query resolution rate",
              description: "Most employee questions resolved without human intervention",
            },
            {
              icon: TrendingUp,
              metric: "4x",
              label: "Employee satisfaction",
              description: "24/7 availability and consistent, accurate information",
            },
          ]}
          themeColor="pink"
        />

        <SolutionGovernance themeColor="pink" />
        
        <SolutionCTA
          headline="Transform HR from reactive to proactive — through conversation."
          subtext="See how HR Bot can automate your HR operations and improve employee experience."
          themeColor="pink"
        />
      </main>
      <Footer />
    </div>
  );
};

export default HRBot;
