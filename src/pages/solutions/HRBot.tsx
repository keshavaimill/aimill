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
      color: "text-rose-400",
      bg: "bg-rose-500/10",
            },
            {
              icon: Clock,
      title: "Manual request processing",
      desc: "Time-consuming approval workflows for leave, expenses, and document requests.",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
    },
    {
      icon: AlertCircle,
      title: "Inconsistent information delivery",
      desc: "Different answers from different HR staff, leading to confusion and frustration.",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },
    {
      icon: Calendar,
      title: "Limited availability",
      desc: "HR support only during business hours, leaving employees without answers.",
      color: "text-fuchsia-400",
      bg: "bg-fuchsia-500/10",
    },
    {
      icon: FileText,
      title: "Administrative overhead",
      desc: "HR teams spend too much time on routine tasks instead of strategic initiatives.",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
    },
  ];

  const howItWorks = [
            {
              number: "01",
      icon: MessageSquare,
      title: "Natural Conversation",
      description: "Employees interact with HR Bot through chat, voice, or email",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
            },
            {
              number: "02",
              icon: Brain,
      title: "Intent Understanding",
      description: "AI understands context and extracts relevant information from queries",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
            },
            {
              number: "03",
              icon: Database,
      title: "Knowledge Retrieval",
      description: "Accesses HR policies, employee data, and system information",
      color: "text-fuchsia-400",
      bg: "bg-fuchsia-500/10",
            },
            {
              number: "04",
              icon: Zap,
      title: "Action Execution",
      description: "Processes requests, updates systems, and triggers workflows automatically",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
            },
            {
              number: "05",
              icon: CheckCircle,
              title: "Continuous Learning",
      description: "Improves accuracy and expands knowledge base from each interaction",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
    },
  ];

  const capabilities = [
    {
      icon: MessageSquare,
      title: "24/7 Employee Support",
      description: "Instant answers to HR questions via chat, voice, or email",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
    },
    {
      icon: FileText,
      title: "Request Processing",
      description: "Automated handling of leave, expense, and document requests",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },
    {
      icon: Users,
      title: "Policy & Benefits Information",
      description: "Accurate, up-to-date information about company policies and benefits",
      color: "text-fuchsia-400",
      bg: "bg-fuchsia-500/10",
    },
    {
      icon: Calendar,
      title: "Leave Management",
      description: "Leave balance queries, request submission, and approval workflows",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
    },
    {
      icon: Briefcase,
      title: "Onboarding & Offboarding",
      description: "Guides new hires and manages exit processes",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
            },
            {
              icon: BarChart3,
      title: "HR Analytics",
      description: "Insights into common queries, request patterns, and employee satisfaction",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },
  ];

  const outcomes = [
    { metric: "Response Time", improvement: "↓ 70%", color: "text-pink-400" },
    { metric: "HR Workload", improvement: "↓ 50%", color: "text-purple-400" },
    { metric: "Query Resolution", improvement: "90%", color: "text-indigo-400" },
    { metric: "Employee Satisfaction", improvement: "4x", color: "text-rose-400" },
    { metric: "Automation Rate", improvement: "85%", color: "text-pink-400" },
    { metric: "ROI Period", improvement: "6 months", color: "text-amber-400", highlight: true },
  ];

  const channels = ["Slack", "Microsoft Teams", "Email", "Web Chat", "Mobile App", "HRIS Integration"];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300">
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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-[#020617] pt-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-600/30 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-rose-400/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInLeft">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold tracking-widest mb-6 uppercase shadow-lg shadow-rose-500/20">
                HR AI AUTOMATION
              </div>
              <h1 className="text-5xl lg:text-[64px] font-extrabold leading-[1.1] text-white mb-8 tracking-tight">
                HR Operations<br />Automated Through<br />Conversation
              </h1>
              <p className="text-xl lg:text-[24px] text-slate-300 leading-relaxed mb-6 max-w-[600px]">
                Transform HR workflows with an AI agent that handles employee queries, processes requests, and automates administrative tasks — all through natural conversation.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <div className="flex items-center gap-2 px-4 py-2 bg-rose-500/20 rounded-full border border-rose-500/40 shadow-md shadow-rose-500/10 hover:bg-rose-500/30 transition-all">
                  <Zap className="w-4 h-4 text-rose-300" />
                  <span className="text-sm font-semibold text-rose-300">70% faster response</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-pink-500/20 rounded-full border border-pink-500/40 shadow-md shadow-pink-500/10 hover:bg-pink-500/30 transition-all">
                  <TrendingUp className="w-4 h-4 text-pink-300" />
                  <span className="text-sm font-semibold text-pink-300">50% cost reduction</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-fuchsia-600/20 rounded-full border border-fuchsia-600/40 shadow-md shadow-fuchsia-600/10 hover:bg-fuchsia-600/30 transition-all">
                  <CheckCircle className="w-4 h-4 text-fuchsia-400" />
                  <span className="text-sm font-semibold text-fuchsia-400">90% query resolution</span>
                </div>
              </div>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 h-14 px-8 text-lg font-semibold bg-gradient-to-br from-rose-400 via-pink-500 to-fuchsia-600 text-white rounded-xl shadow-xl shadow-rose-500/40 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/50 transition-all"
              >
                Talk to HR AI Experts <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right Side: Chat Interface Visual */}
            <div className="animate-scaleIn delay-200 opacity-0">
              <div className="bg-slate-900/90 backdrop-blur-xl rounded-[28px] p-10 border border-rose-500/30 shadow-2xl shadow-rose-500/10">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold">HR Assistant</div>
                      <div className="text-xs text-slate-400">Always online</div>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Active</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-slate-800/50 rounded-2xl rounded-tl-sm p-4 max-w-[80%] animate-fadeInLeft delay-500 opacity-0">
                    <p className="text-sm text-slate-300">Hi! How many vacation days do I have left?</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-rose-500/20 to-fuchsia-500/20 border border-rose-500/30 rounded-2xl rounded-tr-sm p-4 ml-auto max-w-[80%] animate-fadeInRight delay-700 opacity-0">
                    <p className="text-sm text-white font-medium mb-2">You have 12 vacation days remaining for 2026.</p>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 bg-pink-500/20 hover:bg-pink-500/30 rounded-lg text-xs font-semibold text-pink-300 transition-all">
                        Request Time Off
                      </button>
                      <button className="px-3 py-1.5 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-xs font-semibold text-purple-300 transition-all">
                        View Policy
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-800/50">
                  {[
                    { label: "Queries Today", val: "247", icon: MessageSquare },
                    { label: "Avg Response", val: "2.3s", icon: Zap },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className={`bg-slate-800/30 rounded-xl p-4 animate-fadeInUp delay-${900 + i * 100} opacity-0`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <stat.icon className="w-3 h-3 text-pink-400" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase">{stat.label}</span>
                      </div>
                      <div className="text-xl font-bold text-pink-400">{stat.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-xl text-slate-400 leading-relaxed">
              HR teams spend countless hours answering repetitive questions and processing routine requests. Traditional support systems can't keep pace with employee expectations for instant, accurate responses. <span className="text-pink-400 font-semibold">HR needs automation that feels human — not robotic.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Key Problems */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-4">Key HR Challenges</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {problems.map((item, i) => (
              <div
                key={i}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-10 rounded-2xl hover:border-pink-500/30 hover:-translate-y-2 hover:scale-[1.02] transition-all w-full md:w-[calc(33.333%-1.33rem)]"
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
          <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-4">
              The HR Bot operates as your 24/7 HR assistant
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              An AI-powered conversational agent that integrates with your HR systems to provide instant support, process requests, and automate workflows.
            </p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-[2.5rem] border border-slate-800/50 p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">What it does:</h3>
                <ul className="space-y-4">
                  {[
                    "Answers employee questions instantly via chat",
                    "Processes leave requests, expense claims, and document requests",
                    "Provides policy information and benefit details",
                    "Integrates with HRIS, payroll, and time-tracking systems",
                    "Learns from interactions to improve responses over time",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-pink-500/5 rounded-2xl p-8 border border-pink-500/10">
                <h4 className="text-sm font-bold text-pink-400 uppercase tracking-wider mb-4">Integration Channels</h4>
                <div className="flex flex-wrap gap-2">
                  {channels.map((channel, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-300"
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
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-4">How It Works</h2>
            <p className="text-lg text-slate-400">Five-step intelligent automation process</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {howItWorks.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-6 rounded-2xl hover:border-pink-500/30 transition-all">
                  <div className="text-4xl font-black text-slate-800 mb-4">{step.number}</div>
                  <div className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center mb-4`}>
                    <step.icon className={step.color} size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-rose-500/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-4">Core Capabilities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, i) => (
              <div
                key={i}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-8 rounded-2xl hover:border-pink-500/30 transition-all group"
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
        <div className="container mx-auto max-w-4xl px-6">
          <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 border-b border-slate-800 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Business Outcomes</h2>
              <p className="text-slate-400">Typical impact from HR Bot deployment</p>
            </div>
            <div className="divide-y divide-slate-800">
              {outcomes.map((row, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-8 hover:bg-slate-800/20 transition-colors ${row.highlight ? "bg-pink-500/5" : ""}`}
                >
                  <span className="text-lg font-medium text-slate-300">{row.metric}</span>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${row.highlight ? "text-pink-400" : row.color}`}>
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
        <div className="container mx-auto max-w-7xl px-6">
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
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-6 border border-pink-500/20">
                  <item.icon className="text-pink-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="bg-gradient-to-br from-rose-600 to-fuchsia-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 blur-[100px]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Transform HR from reactive to proactive — through conversation.
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
  );
};

export default HRBot;