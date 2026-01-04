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
} from "lucide-react";

const LexflowAI = () => {
  const problems = [
    {
      icon: FileText,
      title: "Fragmented documents",
      desc: "Legal documents scattered across systems, hard to track and manage",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      icon: Edit,
      title: "Manual drafting",
      desc: "Time-consuming document creation and precedent research",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      icon: Calendar,
      title: "Missed deadlines",
      desc: "Critical dates slip through cracks without automated tracking",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      icon: Mail,
      title: "Slow communication",
      desc: "Delayed responses impact client satisfaction and case outcomes",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
  ];

  const channels = ["Email", "WhatsApp", "Document Management", "Legal Databases", "Case Management"];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300">
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
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-[#020617] pt-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/30 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
          
          <div className="container mx-auto max-w-7xl px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fadeInLeft">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-widest mb-6 uppercase shadow-lg shadow-amber-500/20">
                  LEGAL TECH AI
                </div>
                <h1 className="text-5xl lg:text-[64px] font-extrabold leading-[1.1] text-white mb-8 tracking-tight">
                  The Agentic<br />Legal Command<br />Center
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-6 max-w-[600px]">
                  Lexflow AI gives legal teams a unified workspace to manage documents, draft responses, conduct research, and communicate with clients — all powered by governed AI agents.
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full border border-amber-500/40 shadow-md shadow-amber-500/10 hover:bg-amber-500/30 transition-all">
                    <Zap className="w-4 h-4 text-amber-300" />
                    <span className="text-sm font-semibold text-amber-300">90% faster drafting</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full border border-amber-500/40 shadow-md shadow-amber-500/10 hover:bg-amber-500/30 transition-all">
                    <CheckCircle className="w-4 h-4 text-amber-300" />
                    <span className="text-sm font-semibold text-amber-300">Zero missed deadlines</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full border border-amber-500/40 shadow-md shadow-amber-500/10 hover:bg-amber-500/30 transition-all">
                    <TrendingUp className="w-4 h-4 text-amber-300" />
                    <span className="text-sm font-semibold text-amber-300">60% cost reduction</span>
                  </div>
                </div>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 h-14 px-8 text-lg font-semibold bg-gradient-to-br from-amber-500 via-amber-600 to-amber-600 text-white rounded-xl shadow-xl shadow-amber-500/40 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 transition-all"
                >
                  Talk to Legal AI Experts <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Legal Workspace Dashboard */}
              <div className="animate-scaleIn delay-200 opacity-0">
                <div className="bg-slate-900/90 backdrop-blur-xl rounded-[28px] p-10 border border-amber-500/30 shadow-2xl shadow-amber-500/10">
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold">Legal Workspace</div>
                        <div className="text-xs text-slate-400">Matter #2024-LX-0142</div>
                      </div>
                    </div>
                    <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Active</span>
                    </div>
                  </div>
                  
                  {/* Active Tasks */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-gradient-to-r from-amber-500/10 to-amber-500/10 rounded-xl p-4 border border-amber-500/20">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Edit className="w-4 h-4 text-amber-400" />
                          <span className="text-xs font-bold text-amber-400">AI DRAFTING</span>
                        </div>
                        <div className="px-2 py-1 bg-amber-500/20 rounded-full">
                          <span className="text-[10px] font-bold text-amber-300">IN PROGRESS</span>
                        </div>
                      </div>
                      <p className="text-sm text-white font-medium mb-2">Reply to Notice - Section 138</p>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Calendar className="w-3 h-3" />
                        <span>Due in 3 days</span>
                      </div>
                    </div>
                    
                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Search className="w-4 h-4 text-amber-400" />
                          <span className="text-xs font-bold text-amber-400">RESEARCH</span>
                        </div>
                        <div className="px-2 py-1 bg-emerald-500/20 rounded-full">
                          <span className="text-[10px] font-bold text-emerald-400">COMPLETE</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-300 mb-2">15 relevant precedents found</p>
                      <div className="text-xs text-slate-400">Supreme Court judgments analyzed</div>
                    </div>

                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-bold text-slate-400">UPCOMING DEADLINE</span>
                      </div>
                      <p className="text-sm text-slate-300">Filing deadline - Jan 15, 2026</p>
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
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <p className="text-xl text-slate-400 leading-relaxed">
              Legal teams struggle with fragmented documents, manual drafting, and missed deadlines. Traditional tools can't handle the complexity of legal workflows or provide the speed modern practices demand. <span className="text-amber-400 font-semibold">Legal teams need automation that understands context and compliance.</span>
            </p>
          </div>
        </section>

        {/* Key Problems */}
        <section className="py-20 bg-[#020617]">
          <div className="container mx-auto max-w-7xl px-6">
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
          <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Lexflow AI acts as a legal operations co-pilot
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                A unified AI-powered workspace that centralizes documents, automates drafting, conducts research, and manages deadlines — all in one place.
              </p>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-[2.5rem] border border-slate-800/50 p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">What it does:</h3>
                  <ul className="space-y-4">
                    {[
                      "Centralizes all legal documents and matters",
                      "Drafts notices and responses in seconds",
                      "Researches historical judgments and precedents",
                      "Tracks deadlines and progress automatically",
                      "Streamlines client communication",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-500/5 rounded-2xl p-8 border border-amber-500/10">
                  <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-4">Integration Points</h4>
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

        {/* Outcomes */}
        <section className="py-20 bg-[#020617]">
          <div className="container mx-auto max-w-4xl px-6">
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
                  { metric: "Client Experience", improvement: "3x better", color: "text-amber-400" },
                  { metric: "ROI Period", improvement: "3-6 months", color: "text-amber-400", highlight: true },
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
        <section className="py-20 container mx-auto px-6">
          <div className="bg-gradient-to-br from-amber-600 to-amber-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 blur-[100px]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Modernize legal operations with confidence.
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
  );
};

export default LexflowAI;
