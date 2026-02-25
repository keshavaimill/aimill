import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ArrowRight,
  FileText,
  Edit,
  Calendar,
  Mail,
  Zap,
  CheckCircle,
  TrendingUp,
  Search,
  Shield,
  Target,
  Award,
  Database,
  Brain,
  Send,
} from "lucide-react";

const LexflowAI = () => {
  const problems = [
    {
      icon: FileText,
      title: "Fragmented Documents",
      desc: "Legal documents scattered across systems, hard to track and manage",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      icon: Edit,
      title: "Manual Drafting",
      desc: "Time-consuming document creation and precedent research",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      icon: Calendar,
      title: "Missed Deadlines",
      desc: "Critical dates slip through cracks without automated tracking",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      icon: Mail,
      title: "Slow Communication",
      desc: "Delayed responses impact client satisfaction and case outcomes",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
  ];

  const channels = ["Email", "WhatsApp", "Document Management", "Legal Databases", "Case Management"];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 relative">
      {/* Soothing Background Texture */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3Ccircle cx='45' cy='15' r='1'/%3E%3Ccircle cx='15' cy='45' r='1'/%3E%3Ccircle cx='45' cy='45' r='1'/%3E%3Ccircle cx='30' cy='30' r='0.8'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
        }} />
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
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }
          .animate-scaleIn { animation: scaleIn 0.8s ease-out forwards; }
          .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
          .delay-200 { animation-delay: 0.2s; }
          .opacity-0 { opacity: 0; }
        `}</style>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
          {/* Subtle Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='30' cy='10' r='1.5'/%3E%3Ccircle cx='10' cy='30' r='1.5'/%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            }} />
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
                  LEGAL TECH AI
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-[64px] font-extrabold leading-[1.1] text-white mb-8 tracking-tight">
                  The Agentic<br />Legal Command<br />Center
                </h1>
                <p className="text-base sm:text-xl lg:text-[24px] text-slate-300 leading-relaxed mb-6 max-w-[600px]">
                  Lexflow AI gives legal teams a unified workspace to manage documents, draft responses, conduct research, and communicate with clients — all powered by governed AI agents.
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full border border-border/50 hover:border-amber-500/50 transition-all">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-sm font-semibold">90% faster drafting</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full border border-border/50 hover:border-amber-500/50 transition-all">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-sm font-semibold">Zero missed deadlines</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full border border-border/50 hover:border-amber-500/50 transition-all">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-sm font-semibold">60% cost reduction</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 h-12 px-6 text-base sm:h-14 sm:px-8 sm:text-lg font-semibold bg-gradient-to-br from-amber-700 via-amber-800 to-amber-800 text-white rounded-xl hover:scale-105 transition-all"
                >
                  Talk to Legal AI Experts <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Legal Workspace Dashboard */}
              <div className="hidden lg:block animate-scaleIn delay-200 opacity-0">
                <div className="glass rounded-2xl p-10 border border-border/50">
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-amber-500" />
                      </div>
                      <div>
                        <div className="font-bold">Legal Workspace</div>
                        <div className="text-xs text-muted-foreground">Matter #2024-LX-0142</div>
                      </div>
                    </div>
                    <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Active</span>
                    </div>
                  </div>

                  {/* Active Tasks */}
                  <div className="space-y-4 mb-6">
                    <div className="glass rounded-xl p-4 border border-border/50">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Edit className="w-4 h-4 text-amber-500" />
                          <span className="text-xs font-bold text-muted-foreground">AI DRAFTING</span>
                        </div>
                        <div className="px-2 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">
                          <span className="text-[10px] font-bold text-amber-500">IN PROGRESS</span>
                        </div>
                      </div>
                      <p className="text-sm font-medium mb-2">Reply to Notice - Section 138</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>Due in 3 days</span>
                      </div>
                    </div>

                    <div className="glass rounded-xl p-4 border border-border/50">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Search className="w-4 h-4 text-amber-500" />
                          <span className="text-xs font-bold text-muted-foreground">RESEARCH</span>
                        </div>
                        <div className="px-2 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                          <span className="text-[10px] font-bold text-emerald-500">COMPLETE</span>
                        </div>
                      </div>
                      <p className="text-sm mb-2">15 relevant precedents found</p>
                      <div className="text-xs text-muted-foreground">Supreme Court judgments analyzed</div>
                    </div>

                    <div className="glass rounded-xl p-4 border border-border/50">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-4 h-4 text-amber-500" />
                        <span className="text-xs font-bold text-muted-foreground">UPCOMING DEADLINE</span>
                      </div>
                      <p className="text-sm">Filing deadline - Jan 15, 2026</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-800/50">
                    <div className="bg-slate-800/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-3 h-3 text-amber-400" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Documents</span>
                      </div>
                      <div className="text-xl font-bold text-amber-400">47</div>
                    </div>
                    <div className="bg-slate-800/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-3 h-3 text-amber-400" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Tasks</span>
                      </div>
                      <div className="text-xl font-bold text-amber-400">12/15</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Context Section */}
        <section className="py-16 bg-slate-950">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <p className="text-xl text-slate-400 leading-relaxed">
              Legal teams struggle with fragmented documents, manual drafting, and missed deadlines. Traditional tools can't handle the complexity of legal workflows or provide the speed modern practices demand. <span className="text-amber-400 font-semibold">Legal teams need automation that understands context and compliance.</span>
            </p>
          </div>
        </section>

        {/* Key Problems */}
        <section className="py-20 bg-[#020617]">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Key Legal Challenges</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {problems.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-10 rounded-2xl hover:border-amber-500/30 hover:-translate-y-2 hover:scale-[1.02] transition-all"
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
        <section className="py-20 bg-slate-950">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Lexflow AI Acts As A Legal Operations Co-Pilot
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                A unified AI-powered workspace that centralizes documents, automates drafting, conducts research, and manages deadlines — all in one place.
              </p>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-sm rounded-[2.5rem] border border-amber-500/20 p-12 shadow-xl shadow-amber-500/5">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">What it does?</h3>
                  <ul className="space-y-4">
                    {[
                      "Centralizes all legal documents and matters",
                      "Drafts notices and responses in seconds",
                      "Researches historical judgments and precedents",
                      "Tracks deadlines and progress automatically",
                      "Streamlines client communication",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                        <span className="text-slate-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-amber-500/15 to-amber-600/15 rounded-2xl p-8 border border-amber-500/30 shadow-lg shadow-amber-500/10">
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider mb-4">Integration Points</h4>
                  <div className="flex flex-wrap gap-2">
                    {channels.map((channel, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-slate-800/70 border border-amber-500/30 rounded-full text-sm text-slate-200 hover:bg-amber-500/20 hover:border-amber-500/50 transition-all"
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
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">How It Works?</h2>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  number: "01",
                  icon: Database,
                  title: "Document Ingestion",
                  description: "Ingests legal documents, case files, and matter data",
                  color: "text-amber-300",
                  bg: "bg-amber-500/5",
                },
                {
                  number: "02",
                  icon: Brain,
                  title: "Intelligent Analysis",
                  description: "Analyzes context and identifies required actions",
                  color: "text-amber-300",
                  bg: "bg-amber-500/5",
                },
                {
                  number: "03",
                  icon: Edit,
                  title: "Automated Drafting",
                  description: "Drafts notices, responses, and legal documents",
                  color: "text-amber-300",
                  bg: "bg-amber-500/5",
                },
                {
                  number: "04",
                  icon: Search,
                  title: "Precedent Research",
                  description: "Researches historical judgments and precedents",
                  color: "text-amber-300",
                  bg: "bg-amber-500/5",
                },
                {
                  number: "05",
                  icon: Calendar,
                  title: "Deadline Management",
                  description: "Tracks deadlines and automates follow-ups",
                  color: "text-amber-300",
                  bg: "bg-amber-500/5",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-8 rounded-2xl text-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-7xl font-black text-slate-800/30 leading-none select-none">{step.number}</div>
                  </div>
                  <div className={`w-16 h-16 rounded-xl ${step.bg} flex items-center justify-center mx-auto mb-4 border border-amber-500/10 relative z-10`}>
                    <step.icon className={step.color} size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 relative z-10">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed relative z-10">{step.description}</p>
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
                <p className="text-slate-400">Typical impact from Lexflow AI deployment</p>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { metric: "Legal Turnaround Time", improvement: "↓ 90%", color: "text-amber-400" },
                  { metric: "Drafting Effort", improvement: "↓ 60%", color: "text-amber-400" },
                  { metric: "Deadline Compliance", improvement: "100%", color: "text-amber-400" },
                  { metric: "Client Experience", improvement: "3X Better", color: "text-amber-400" },
                  { metric: "ROI Period", improvement: "3-6 Months", color: "text-amber-400", highlight: true },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-8 hover:bg-slate-800/20 transition-colors ${row.highlight ? "bg-amber-500/5" : ""}`}
                  >
                    <span className="text-lg font-medium text-slate-300">{row.metric}</span>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${row.highlight ? "text-amber-400" : row.color}`}>
                        {row.improvement}
                      </div>
                      <div className="text-xs uppercase font-bold text-slate-500 tracking-tighter">
                        {row.highlight ? "Typical Period" : "Improvement"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 container mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-amber-800 to-amber-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 blur-[100px]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Modernize Legal Operations With Confidence.
            </h2>
            <p className="text-slate-100 text-lg mb-10 max-w-xl mx-auto relative z-10">
              See Lexflow AI in action with a personalized demo.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-100 rounded-2xl h-14 px-10 font-bold transition-all relative z-10"
            >
              Request Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </div>
  );
};

export default LexflowAI;
