import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  ArrowRight,
  Clock,
  Users,
  FileText,
  Calendar,
  BarChart3,
  Zap,
  Database,
  TrendingUp,
  CheckCircle,
  Brain,
  MessageSquare,
  Shield,
  Briefcase,
  AlertCircle,
  Target,
  Award,
} from "lucide-react";

const HRBot = () => {
  const problems = [
    {
      icon: MessageSquare,
      title: "High-volume employee queries",
      desc: "HR teams overwhelmed by repetitive questions about policies, benefits, and procedures.",
      color: "text-rose-300",
      bg: "bg-rose-500/5",
            },
            {
              icon: Clock,
      title: "Manual request processing",
      desc: "Time-consuming approval workflows for leave, expenses, and document requests.",
      color: "text-rose-300",
      bg: "bg-rose-500/5",
    },
    {
      icon: AlertCircle,
      title: "Inconsistent information delivery",
      desc: "Different answers from different HR staff, leading to confusion and frustration.",
      color: "text-pink-300",
      bg: "bg-pink-500/5",
    },
    {
      icon: Calendar,
      title: "Limited availability",
      desc: "HR support only during business hours, leaving employees without answers.",
      color: "text-fuchsia-300",
      bg: "bg-fuchsia-500/5",
    },
    {
      icon: FileText,
      title: "Administrative overhead",
      desc: "HR teams spend too much time on routine tasks instead of strategic initiatives.",
      color: "text-rose-300",
      bg: "bg-rose-500/5",
    },
  ];

  const howItWorks = [
            {
              number: "01",
      icon: MessageSquare,
      title: "Natural Conversation",
      description: "Employees interact with HR Bot through chat, voice, or email",
      color: "text-rose-300",
      bg: "bg-rose-500/5",
            },
            {
              number: "02",
              icon: Brain,
      title: "Intent Understanding",
      description: "AI understands context and extracts relevant information from queries",
      color: "text-pink-300",
      bg: "bg-pink-500/5",
            },
            {
              number: "03",
              icon: Database,
      title: "Knowledge Retrieval",
      description: "Accesses HR policies, employee data, and system information",
      color: "text-fuchsia-300",
      bg: "bg-fuchsia-500/5",
            },
            {
              number: "04",
              icon: Zap,
      title: "Action Execution",
      description: "Processes requests, updates systems, and triggers workflows automatically",
      color: "text-rose-300",
      bg: "bg-rose-500/5",
            },
            {
              number: "05",
              icon: CheckCircle,
              title: "Continuous Learning",
      description: "Improves accuracy and expands knowledge base from each interaction",
      color: "text-rose-300",
      bg: "bg-rose-500/5",
    },
  ];

  const capabilities = [
    {
      icon: MessageSquare,
      title: "24/7 Employee Support",
      description: "Instant answers to HR questions via chat, voice, or email",
      color: "text-rose-300",
      bg: "bg-rose-500/5",
    },
    {
      icon: FileText,
      title: "Request Processing",
      description: "Automated handling of leave, expense, and document requests",
      color: "text-pink-300",
      bg: "bg-pink-500/5",
    },
    {
      icon: Users,
      title: "Policy & Benefits Information",
      description: "Accurate, up-to-date information about company policies and benefits",
      color: "text-fuchsia-300",
      bg: "bg-fuchsia-500/5",
    },
    {
      icon: Calendar,
      title: "Leave Management",
      description: "Leave balance queries, request submission, and approval workflows",
      color: "text-rose-300",
      bg: "bg-rose-500/5",
    },
    {
      icon: Briefcase,
      title: "Onboarding & Offboarding",
      description: "Guides new hires and manages exit processes",
      color: "text-rose-300",
      bg: "bg-rose-500/5",
            },
            {
              icon: BarChart3,
      title: "HR Analytics",
      description: "Insights into common queries, request patterns, and employee satisfaction",
      color: "text-pink-300",
      bg: "bg-pink-500/5",
    },
  ];

  const outcomes = [
    { metric: "Response Time", improvement: "↓ 70%", color: "text-slate-400" },
    { metric: "HR Workload", improvement: "↓ 50%", color: "text-slate-400" },
    { metric: "Query Resolution", improvement: "90%", color: "text-slate-400" },
    { metric: "Employee Satisfaction", improvement: "4X", color: "text-slate-400" },
    { metric: "Automation Rate", improvement: "85%", color: "text-slate-400" },
    { metric: "ROI Period", improvement: "6 Months", color: "text-amber-400", highlight: true },
  ];

  const channels = ["Slack", "Microsoft Teams", "Email", "Web Chat", "Mobile App", "HRIS Integration"];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 relative">
      {/* Soothing Background Texture */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Soft dot pattern */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3Ccircle cx='45' cy='15' r='1'/%3E%3Ccircle cx='15' cy='45' r='1'/%3E%3Ccircle cx='45' cy='45' r='1'/%3E%3Ccircle cx='30' cy='30' r='0.8'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        {/* Very subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
        }} />
        {/* Gentle radial gradients for depth */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            radial-gradient(circle at 15% 25%, rgba(255,255,255,0.02) 0%, transparent 40%),
            radial-gradient(circle at 85% 75%, rgba(255,255,255,0.02) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.015) 0%, transparent 60%)
          `,
        }} />
      </div>
      <div className="relative z-10">
      <Navbar />
      <main>
        <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out forwards;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Soft dot pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='30' cy='10' r='1.5'/%3E%3Ccircle cx='10' cy='30' r='1.5'/%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          {/* Subtle grain texture */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          }} />
          {/* Soft radial gradients */}
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(180, 83, 9, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(180, 83, 9, 0.05) 0%, transparent 50%)
            `,
          }} />
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInLeft">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 text-muted-foreground text-xs font-bold tracking-widest mb-6 uppercase hover:text-foreground hover:border-amber-500/50 transition-all">
                HR AI AUTOMATION
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[64px] font-extrabold leading-[1.1] text-white mb-8 tracking-tight">
                HR Operations<br />Automated Through<br />Conversation
              </h1>
              <p className="text-base sm:text-xl lg:text-[24px] text-slate-300 leading-relaxed mb-6 max-w-[600px]">
                Transform HR workflows with an AI agent that handles employee queries, processes requests, and automates administrative tasks — all through natural conversation.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full border border-border/50 hover:border-amber-500/50 transition-all">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-sm font-semibold">70% faster response</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full border border-border/50 hover:border-amber-500/50 transition-all">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-sm font-semibold">50% cost reduction</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full border border-border/50 hover:border-amber-500/50 transition-all">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-sm font-semibold">90% query resolution</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-12 px-6 text-base sm:h-14 sm:px-8 sm:text-lg font-semibold bg-gradient-to-br from-amber-700 via-amber-800 to-amber-800 text-white rounded-xl hover:scale-105 transition-all"
              >
                Talk to HR AI Experts <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right Side: HR Dashboard */}
            <div className="hidden lg:block animate-scaleIn delay-200 opacity-0">
              <div className="glass rounded-2xl p-10 border border-border/50">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-white font-bold">HR Dashboard</div>
                      <div className="text-xs text-slate-400">Q1 2024 Employee Support</div>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Active</span>
                  </div>
                </div>
                
                {/* Active Requests */}
                <div className="space-y-4 mb-6">
                  <div className="glass rounded-xl p-4 border border-border/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-500" />
                        <span className="text-xs font-bold text-muted-foreground">AI PROCESSING</span>
                      </div>
                      <div className="px-2 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">
                        <span className="text-[10px] font-bold text-amber-500">IN PROGRESS</span>
                      </div>
                    </div>
                    <p className="text-sm font-medium mb-2">Leave Request - Employee #1247</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>Processing in 2 minutes</span>
                    </div>
                  </div>
                  
                  <div className="glass rounded-xl p-4 border border-border/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs font-bold text-muted-foreground">RESOLVED</span>
                      </div>
                      <div className="px-2 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                        <span className="text-[10px] font-bold text-emerald-500">APPROVED</span>
                      </div>
                    </div>
                    <p className="text-sm mb-2">Policy inquiry - Benefits package</p>
                    <div className="text-xs text-muted-foreground">Resolved in 12 seconds</div>
                  </div>

                  <div className="glass rounded-xl p-4 border border-border/50">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-4 h-4 text-amber-500" />
                      <span className="text-xs font-bold text-muted-foreground">QUERY ANALYSIS</span>
                    </div>
                    <p className="text-sm">247 queries processed today</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-border/50">
                  <div className="glass rounded-xl p-4 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-3 h-3 text-amber-500" />
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">Queries</span>
                    </div>
                    <div className="text-xl font-bold text-foreground">247</div>
                  </div>
                  <div className="glass rounded-xl p-4 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-3 h-3 text-amber-500" />
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">Response</span>
                    </div>
                    <div className="text-xl font-bold text-foreground">2.3s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xl text-slate-400 leading-relaxed">
              HR teams spend countless hours answering repetitive questions and processing routine requests. Traditional support systems can't keep pace with employee expectations for instant, accurate responses. <span className="text-amber-200 font-semibold">HR needs automation that feels human — not robotic.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Key Problems */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-4">Key HR Challenges</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {problems.map((item, i) => (
              <div
                key={i}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-10 rounded-2xl hover:border-amber-700/40 hover:-translate-y-2 hover:scale-[1.02] transition-all w-full md:w-[calc(33.333%-1.33rem)]"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-6`}>
                  <item.icon className={item.color} size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-32 bg-slate-950">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-4">
              The HR Bot Operates As Your 24/7 HR Assistant
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              An AI-powered conversational agent that integrates with your HR systems to provide instant support, process requests, and automate workflows.
            </p>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-sm rounded-[2.5rem] border border-amber-700/20 p-12 shadow-xl shadow-amber-900/5">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">What it does?</h3>
                <ul className="space-y-4">
                  {[
                    "Answers employee questions instantly via chat",
                    "Processes leave requests, expense claims, and document requests",
                    "Provides policy information and benefit details",
                    "Integrates with HRIS, payroll, and time-tracking systems",
                    "Learns from interactions to improve responses over time",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-rose-300 shrink-0 mt-0.5" />
                      <span className="text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-800/20 to-amber-700/20 rounded-2xl p-8 border border-amber-700/30 shadow-lg shadow-amber-900/10">
                <h4 className="text-sm font-bold text-amber-200 uppercase tracking-wider mb-4">Integration Channels</h4>
                <div className="flex flex-wrap gap-2">
                  {channels.map((channel, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-slate-800/70 border border-amber-700/30 rounded-full text-sm text-amber-200 hover:bg-amber-800/30 hover:border-amber-600/50 transition-all"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-4">How It Works?</h2>
            <p className="text-lg text-slate-400">Five-step intelligent automation process</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {howItWorks.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-8 rounded-2xl hover:border-amber-700/40 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-7xl font-black text-slate-800/30 leading-none select-none">{step.number}</div>
                  </div>
                  <div className={`w-16 h-16 rounded-xl ${step.bg} flex items-center justify-center mx-auto mb-4 border border-amber-700/10 relative z-10`}>
                    <step.icon className={step.color} size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 relative z-10">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed relative z-10">{step.description}</p>
                </div>
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-amber-700/30 to-transparent z-20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-4">Core Capabilities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, i) => (
              <div
                key={i}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-8 rounded-2xl hover:border-amber-700/40 transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className={item.color} size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 border-b border-slate-800 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Business Outcomes</h2>
              <p className="text-slate-400">Typical impact from HR Bot deployment</p>
            </div>
            <div className="divide-y divide-slate-800">
              {outcomes.map((row, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-8 hover:bg-slate-800/20 transition-colors ${row.highlight ? "bg-amber-800/20" : ""}`}
                  >
                    <span className="text-lg font-medium text-slate-300">{row.metric}</span>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${row.highlight ? "text-amber-200" : "text-amber-300"}`}>
                      {row.improvement}
                    </div>
                    <div className="text-xs uppercase font-bold text-slate-500 tracking-tighter">
                      Improvement
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-4">Enterprise-Grade Governance</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Data Privacy & Security",
                desc: "Enterprise-grade encryption, SOC 2 compliance, and role-based access controls.",
              },
              {
                icon: Target,
                title: "Accuracy & Reliability",
                desc: "Continuous monitoring, human-in-the-loop validation, and audit trails.",
              },
              {
                icon: Award,
                title: "Compliance & Policy",
                desc: "Adherence to labor laws, company policies, and regional regulations.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-10 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-800/20 flex items-center justify-center mb-6 border border-amber-700/20">
                  <item.icon className="text-amber-300" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-amber-800 to-amber-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-700/20 blur-[100px]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Transform HR From Reactive To Proactive — Through Conversation.
          </h2>
          <p className="text-slate-200 text-lg mb-10 max-w-xl mx-auto relative z-10">
            See how HR Bot can automate your HR operations and improve employee experience.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-100 rounded-2xl h-14 px-10 font-bold transition-all relative z-10"
          >
            Talk to HR AI Experts
          </Link>
        </div>
      </section>
      </main>
      <Footer />
      </div>
    </div>
  );
};

export default HRBot;
