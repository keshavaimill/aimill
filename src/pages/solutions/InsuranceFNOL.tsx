import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  ArrowRight,
  Clock,
  Shield,
  Mail,
  FileText,
  CheckCircle,
  TrendingUp,
  Database,
  Brain,
  Globe,
  BarChart3,
  AlertTriangle,
  Zap,
  Target,
  Award,
} from "lucide-react";

const InsuranceFNOL = () => {
  const problems = [
    {
      icon: Clock,
              title: "Slow Claim Processing",
      desc: "Manual review takes days or weeks, delaying customer satisfaction and settlements.",
      color: "text-violet-300",
      bg: "bg-violet-500/5",
            },
            {
      icon: FileText,
              title: "Data Extraction Errors",
      desc: "Manual data entry leads to mistakes and inconsistent claim information.",
      color: "text-purple-300",
      bg: "bg-purple-500/5",
            },
            {
      icon: AlertTriangle,
              title: "Missing Information",
      desc: "Incomplete claims delay processing and require multiple customer touchpoints.",
      color: "text-violet-300",
      bg: "bg-violet-500/5",
            },
            {
      icon: Shield,
              title: "Fraud Detection Gaps",
      desc: "Hard to identify suspicious claims early without comprehensive data analysis.",
      color: "text-violet-300",
      bg: "bg-violet-500/5",
    },
  ];

  const howItWorks = [
            {
              number: "01",
              icon: Mail,
              title: "Claim Email Reading",
      description: "Reads and parses incoming claim emails automatically",
      color: "text-violet-300",
      bg: "bg-violet-500/5",
            },
            {
              number: "02",
              icon: Database,
              title: "Data Extraction",
      description: "Extracts and validates policy data with high accuracy",
      color: "text-purple-300",
      bg: "bg-purple-500/5",
            },
            {
              number: "03",
              icon: Brain,
              title: "Coverage Mapping",
      description: "Maps coverage to issue types intelligently",
      color: "text-violet-300",
      bg: "bg-violet-500/5",
            },
            {
              number: "04",
              icon: Globe,
              title: "External Verification",
      description: "Connects to weather and police APIs for validation",
      color: "text-violet-300",
      bg: "bg-violet-500/5",
            },
            {
              number: "05",
              icon: CheckCircle,
              title: "Confidence Scoring",
      description: "Scores confidence and flags missing information",
      color: "text-purple-300",
      bg: "bg-purple-500/5",
    },
  ];

  const capabilities = [
            {
              icon: Mail,
              title: "Email Processing",
              description: "Automated reading and parsing of claim emails",
      color: "text-violet-300",
      bg: "bg-violet-500/5",
            },
            {
              icon: Database,
              title: "Policy Data Validation",
              description: "Validates policy information automatically",
      color: "text-purple-300",
      bg: "bg-purple-500/5",
            },
            {
              icon: Brain,
              title: "Coverage Intelligence",
              description: "Maps claims to appropriate coverage types",
      color: "text-violet-300",
      bg: "bg-violet-500/5",
            },
            {
              icon: Globe,
              title: "External API Integration",
              description: "Verifies claims with weather and police data",
      color: "text-violet-300",
      bg: "bg-violet-500/5",
            },
            {
              icon: BarChart3,
              title: "Confidence Scoring",
              description: "Every claim gets a confidence score",
      color: "text-purple-300",
      bg: "bg-purple-500/5",
            },
            {
              icon: Shield,
              title: "Fraud Signal Detection",
              description: "Identifies suspicious patterns early",
      color: "text-violet-300",
      bg: "bg-violet-500/5",
    },
  ];

  const outcomes = [
    { metric: "Processing Speed", improvement: "↑ 90%", color: "text-violet-400" },
    { metric: "Claim Accuracy", improvement: "↑ 35%", color: "text-purple-400" },
    { metric: "Settlement Speed", improvement: "2X Faster", color: "text-violet-400" },
    { metric: "Fraud Detection", improvement: "↑ 50%", color: "text-violet-400" },
    { metric: "Customer Satisfaction", improvement: "↑ 40%", color: "text-purple-400" },
    { metric: "ROI Period", improvement: "4-6 Months", color: "text-amber-400", highlight: true },
  ];

  const channels = ["Email", "Claims Systems", "Policy Databases", "External APIs", "Weather Data", "Police Reports"];

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
              radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)
            `,
          }} />
        </div>
        <div className="container mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInLeft">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 text-muted-foreground text-xs font-bold tracking-widest mb-6 uppercase hover:text-foreground hover:border-violet-500/50 transition-all">
                INSURANCE AI AUTOMATION
              </div>
              <h1 className="text-5xl lg:text-[64px] font-extrabold leading-[1.1] text-white mb-8 tracking-tight">
                Faster, Smarter<br />Claims Processing<br />From FNOL
              </h1>
              <p className="text-xl lg:text-[24px] text-slate-300 leading-relaxed mb-6 max-w-[600px]">
                The FNOL Agent reads claim emails, extracts policy data, validates coverage, and processes claims — dramatically reducing processing time while improving accuracy.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-border/50 hover:border-violet-500/50 transition-all">
                  <span className="w-2 h-2 rounded-full bg-violet-500" />
                  <span className="text-sm font-semibold">90% faster processing</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-border/50 hover:border-violet-500/50 transition-all">
                  <span className="w-2 h-2 rounded-full bg-violet-500" />
                  <span className="text-sm font-semibold">Higher accuracy</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-border/50 hover:border-violet-500/50 transition-all">
                  <span className="w-2 h-2 rounded-full bg-violet-500" />
                  <span className="text-sm font-semibold">Faster settlements</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-14 px-8 text-lg font-semibold bg-gradient-to-br from-violet-700 via-purple-800 to-slate-800 text-white rounded-xl hover:scale-105 transition-all"
              >
                Talk to Insurance AI Experts <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right Side: Claims Processing Dashboard */}
            <div className="animate-scaleIn delay-200 opacity-0">
              <div className="glass rounded-2xl p-10 border border-border/50">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500/60 animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  </div>
                  <div className="px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full">
                    <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest">FNOL Processing</span>
                  </div>
                </div>

                {/* Claim Processing Flow */}
                <div className="space-y-4 mb-6">
                  <div className="bg-slate-800/50 rounded-xl p-4 border-l-4 border-violet-500">
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="w-4 h-4 text-violet-400" />
                      <span className="text-xs font-bold text-slate-400">INCOMING CLAIM</span>
                    </div>
                    <p className="text-sm text-slate-300">Auto accident - Policy #INS-45623</p>
                  </div>

                  <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl p-4 border border-violet-500/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Brain className="w-4 h-4 text-violet-400" />
                        <span className="text-xs font-bold text-violet-400">AI PROCESSING</span>
                      </div>
                      <div className="px-2 py-1 bg-emerald-500/20 rounded-full">
                        <span className="text-[10px] font-bold text-emerald-400">VALIDATED</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Policy verification</span>
                        <span className="text-emerald-400 font-semibold">✓ Active</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Coverage mapping</span>
                        <span className="text-emerald-400 font-semibold">✓ Collision</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Weather data</span>
                        <span className="text-emerald-400 font-semibold">✓ Clear</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-4 h-4 text-indigo-400" />
                      <span className="text-sm text-slate-300">Confidence Score</span>
                    </div>
                    <span className="text-lg font-bold text-indigo-400">94%</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-800/50">
                  {[
                    { label: "Processing Time", val: "2.3m", icon: Clock, color: "text-violet-400" },
                    { label: "Accuracy", val: "98%", icon: Target, color: "text-indigo-400" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-800/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <stat.icon className={`w-3 h-3 ${stat.color}`} />
                        <span className="text-[10px] font-bold text-slate-500 uppercase">{stat.label}</span>
                      </div>
                      <div className={`text-xl font-bold ${stat.color}`}>{stat.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-xl text-slate-400 leading-relaxed">
              Insurance claims processing is plagued by manual data entry, slow validation, and delayed settlements. Traditional systems can't keep pace with customer expectations for fast, accurate claim handling. <span className="text-violet-400 font-semibold">Claims processing needs intelligent automation.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Key Problems */}
      <section className="py-20 bg-[#020617]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-4">Key Claims Challenges</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((item, i) => (
              <div
                key={i}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-10 rounded-2xl hover:border-violet-500/30 hover:-translate-y-2 hover:scale-[1.02] transition-all"
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
            <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-4">
              The FNOL Agent Automates First Notice Of Loss Processing
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              An AI-powered agent that reads, validates, and processes insurance claims automatically — from email intake to coverage verification.
            </p>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-sm rounded-[2.5rem] border border-violet-500/20 p-12 shadow-xl shadow-violet-500/5">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">What it does?</h3>
                <ul className="space-y-4">
                  {[
                    "Reads claim emails and extracts key information",
                    "Validates policy data and coverage automatically",
                    "Maps coverage to issue types intelligently",
                    "Connects to weather and police APIs for verification",
                    "Scores confidence and flags missing information",
                    "Sends automated follow-ups for incomplete claims",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-violet-300 shrink-0 mt-0.5" />
                      <span className="text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-violet-500/15 to-purple-600/15 rounded-2xl p-8 border border-violet-500/30 shadow-lg shadow-violet-500/10">
                <h4 className="text-sm font-bold text-violet-300 uppercase tracking-wider mb-4">Integration Points</h4>
                <div className="flex flex-wrap gap-2">
                  {channels.map((channel, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-slate-800/70 border border-violet-500/30 rounded-full text-sm text-slate-200 hover:bg-violet-500/20 hover:border-violet-500/50 transition-all"
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
            <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-4">How It Works?</h2>
            <p className="text-lg text-slate-400">Five-step automated claims processing</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {howItWorks.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-8 rounded-2xl hover:border-violet-500/30 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-7xl font-black text-slate-800/30 leading-none select-none">{step.number}</div>
                  </div>
                  <div className={`w-16 h-16 rounded-xl ${step.bg} flex items-center justify-center mx-auto mb-4 border border-violet-500/10 relative z-10`}>
                    <step.icon className={step.color} size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 relative z-10">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed relative z-10">{step.description}</p>
                </div>
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-violet-500/50 to-transparent z-20" />
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
            <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-6">Core Capabilities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, i) => (
              <div
                key={i}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-8 rounded-2xl hover:border-violet-500/30 transition-all group"
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
              <p className="text-slate-400">Typical impact from FNOL Agent deployment</p>
            </div>
            <div className="divide-y divide-slate-800">
              {outcomes.map((row, i) => (
                <div
                  key={i}
                    className={`flex items-center justify-between p-8 hover:bg-slate-800/20 transition-colors ${row.highlight ? "bg-violet-500/5" : ""}`}
                >
                  <span className="text-lg font-medium text-slate-300">{row.metric}</span>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${row.highlight ? "text-violet-400" : row.color}`}>
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
                desc: "Adherence to insurance regulations, company policies, and regional requirements.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-10 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6 border border-violet-500/20">
                  <item.icon className="text-violet-400" size={24} />
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
        <div className="bg-gradient-to-br from-violet-800 to-slate-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 blur-[100px]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Transform Claims Operations with Agentic AI.
          </h2>
          <p className="text-slate-200 text-lg mb-10 max-w-xl mx-auto relative z-10">
            See the Insurance FNOL Agent in action with a personalized demo.
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

export default InsuranceFNOL;
