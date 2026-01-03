import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, TrendingDown, Clock, Database, Users, AlertCircle,
  TrendingUp, Shield, BarChart3, CheckCircle, FileText, Activity, 
  AlertTriangle, Sparkles, Zap, ShieldCheck, Cpu, 
  ArrowUpRight, BarChart, Scale, Layers, ChevronDown, Calculator
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

// --- Data Structures ---

const PROBLEMS = [
  { 
    icon: TrendingDown, 
    title: "Loss Ratio Deterioration", 
    desc: "Inaccurate pricing and delayed risk signals erode profitability.",
    color: "text-rose-400",
    bg: "bg-rose-500/5"
  },
  { 
    icon: Clock, 
    title: "FNOL Delays & Intake Quality", 
    desc: "Slow, incomplete first notice drives leakage and customer frustration.",
    color: "text-amber-400",
    bg: "bg-amber-500/5"
  },
  { 
    icon: AlertCircle, 
    title: "Claims Leakage", 
    desc: "Manual reviews increase fraud exposure and handling costs.",
    color: "text-orange-400",
    bg: "bg-orange-500/5"
  },
  { 
    icon: FileText, 
    title: "Underwriting Bottlenecks", 
    desc: "Human-heavy processes slow growth and create inconsistency.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/5"
  },
  { 
    icon: Users, 
    title: "Customer Churn", 
    desc: "Reactive service and generic offers reduce retention.",
    color: "text-sky-400",
    bg: "bg-sky-500/5"
  }
];

const SOLUTION_DETAILS = [
  {
    id: "loss-ratio",
    title: "Loss Ratio & Risk Management",
    ds: ["Risk scoring, pricing optimization, and loss forecasting.", "Explainable, portfolio-level insights."],
    agentic: ["Monitors exposure and adjusts actions continuously.", "Automated pricing triggers based on real-time risk data."]
  },
  {
    id: "fnol",
    title: "FNOL & Intake Quality",
    ds: ["Severity prediction and claim classification.", "Data completeness scoring at the point of intake."],
    agentic: ["Guides FNOL in real time and validates inputs.", "Triggers next-best actions (triage/dispatch) instantly."]
  },
  {
    id: "claims",
    title: "Claims & Resolution",
    ds: ["Fraud detection, triage, and settlement optimization.", "Predictive subrogation identifying potential recoveries early."],
    agentic: ["Autonomously routes, escalates, or fast-tracks claims.", "Automates low-complexity settlement communications."]
  },
  {
    id: "underwriting",
    title: "Underwriting Efficiency",
    ds: ["Automated risk assessment and appetite alignment.", "Multi-source data ingestion for holistic risk profiling."],
    agentic: ["Executes straight-through underwriting (STP) within limits.", "Flags appetite exceptions to human underwriters instantly."]
  },
  {
    id: "churn",
    title: "Customer Retention & LTV",
    ds: ["Churn prediction and cross-sell propensity modeling.", "Customer sentiment analysis from claims interactions."],
    agentic: ["Activates personalized interventions across channels.", "Autonomous renewal outreach with optimized offer timing."]
  }
];

const ROI_DATA = [
  { metric: "Loss Ratio", value: "↓ 3–7%", color: "text-emerald-400" },
  { metric: "FNOL-to-Settlement Cycle", value: "↓ 30–50%", color: "text-sky-400" },
  { metric: "Claims Handling Costs", value: "↓ 20–35%", color: "text-indigo-400" },
  { metric: "Underwriting Cycle Time", value: "↓ 40–60%", color: "text-purple-400" },
  { metric: "Payback Period", value: "6–12 months", color: "text-amber-400" }
];

// --- Sub-Components ---

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description: string;
  light?: boolean;
}

const SectionHeader = ({ subtitle, title, description, light = false }: SectionHeaderProps) => (
  <div className="max-w-3xl mb-12">
    <motion.h4 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-sky-400 font-bold tracking-[0.2em] uppercase text-xs mb-4"
    >
      {subtitle}
    </motion.h4>
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-5xl font-bold mb-6 tracking-tight ${light ? 'text-slate-900' : 'text-white'}`}
    >
      {title}
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className={`text-lg leading-relaxed ${light ? 'text-slate-600' : 'text-slate-400'}`}
    >
      {description}
    </motion.p>
  </div>
);

// --- New Component: Interactive Loss Ratio Calculator ---

const LossRatioCalculator = () => {
  const [premium, setPremium] = useState(1000000);
  const [losses, setLosses] = useState(650000);

  const ratio = useMemo(() => Math.round((losses / premium) * 100), [premium, losses]);

  const getStatus = () => {
    if (ratio < 65) return { label: "Healthy Margin", color: "text-emerald-400", bg: "bg-emerald-500/10" };
    if (ratio <= 80) return { label: "Under Performance", color: "text-amber-400", bg: "bg-amber-500/10" };
    return { label: "Critical Risk", color: "text-rose-400", bg: "bg-rose-500/10" };
  };

  const status = getStatus();

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="p-8 rounded-[2.5rem] bg-slate-900/50 border border-slate-800 shadow-2xl backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
          <Calculator className="text-sky-400" size={20} />
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight">Loss Ratio Calculator</h3>
      </div>

      <div className="space-y-8">
        {/* Premium Input */}
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <label className="text-sm font-medium text-slate-400">Total Earned Premium</label>
            <span className="text-lg font-mono text-white">${premium.toLocaleString()}</span>
          </div>
          <input 
            type="range" min="100000" max="5000000" step="50000" 
            value={premium} onChange={(e) => setPremium(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
          />
        </div>

        {/* Losses Input */}
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <label className="text-sm font-medium text-slate-400">Incurred Losses</label>
            <span className="text-lg font-mono text-white">${losses.toLocaleString()}</span>
          </div>
          <input 
            type="range" min="50000" max="5000000" step="25000" 
            value={losses} onChange={(e) => setLosses(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div>

        {/* Result Area */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Projected Loss Ratio</p>
          <motion.div 
            key={ratio}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`text-7xl font-bold tracking-tighter mb-4 ${status.color}`}
          >
            {ratio}%
          </motion.div>
          <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${status.bg} ${status.color}`}>
            {status.label}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Page Component ---

const Insurance = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-sky-500/30 font-sans">
      <Navbar />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-32 md:pt-48 md:pb-48 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-900/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto max-w-7xl px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-widest mb-8 uppercase">
                  <Sparkles size={14} /> Autonomous Insurance Intelligence
                </span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.05] mb-8">
                  From Analytics to <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400">
                    Autonomous Action.
                  </span>
                </h1>
                <p className="text-xl text-slate-400 max-w-xl leading-relaxed mb-10">
                  Speed and accuracy now define competitiveness. AI Mill combines Data Science with Agentic AI to help insurance leaders protect margins and scale execution.
                </p>
                <div className="flex flex-wrap gap-5">
                  <Button size="lg" className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl h-14 px-8 shadow-xl shadow-sky-500/20" asChild>
                    <Link to="/contact" className="flex items-center gap-2">
                      Talk to Insurance Experts <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
              </motion.div>

              {/* Hero Dashboard Visual */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-[2.5rem] p-8 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Live Risk Feed</div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Claims Intake", val: "Optimized", color: "text-emerald-400" },
                    { label: "Loss Ratio Signal", val: "Stable", color: "text-sky-400" },
                    { label: "STP Underwriting", val: "Active", color: "text-indigo-400" }
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-950/50 border border-slate-800 rounded-2xl">
                      <span className="text-sm font-medium">{row.label}</span>
                      <span className={`text-xs font-bold uppercase ${row.color}`}>{row.val}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-slate-800 flex justify-center">
                  <Activity className="text-sky-500 animate-pulse" size={48} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- INSURANCE CONTEXT (FIXED WITH CALCULATOR) --- */}
        <section className="py-24 bg-slate-950">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Left Column: Fixed space with Calculator */}
              <div className="order-2 lg:order-1 relative">
                <LossRatioCalculator />
              </div>

              {/* Right Column: Text Content */}
              <div className="order-1 lg:order-2">
                <SectionHeader 
                  subtitle="Industry Context"
                  title="The Real-Time Imperative"
                  description="Modern insurance operates across complex cycles of pricing, risk, and claims. Legacy systems and manual workflows can’t respond fast enough to rising inflation or customer impatience."
                />
                <div className="grid gap-6">
                  <div className="flex gap-4 p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
                    <ShieldCheck className="text-sky-400 shrink-0" size={24} />
                    <div>
                      <h4 className="text-white font-bold mb-1">Consistency at Scale</h4>
                      <p className="text-sm text-slate-500">Eliminate variance in decision-making across underwriting and claims handling.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
                    <Zap className="text-indigo-400 shrink-0" size={24} />
                    <div>
                      <h4 className="text-white font-bold mb-1">Instant Response</h4>
                      <p className="text-sm text-slate-500">Deploy agents that react to new data signals within milliseconds, not months.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- BUSINESS PROBLEMS GRID --- */}
        <section className="py-32 bg-[#020617]">
          <div className="container mx-auto max-w-7xl px-6 text-center">
            <SectionHeader 
              subtitle="The Challenges"
              title="Critical Business Friction"
              description="We identify and solve the core bottlenecks that erode carrier profitability."
            />
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
              {PROBLEMS.map((prob, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all text-left"
                >
                  <div className={`w-12 h-12 rounded-xl ${prob.bg} flex items-center justify-center mb-6`}>
                    <prob.icon className={prob.color} size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{prob.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{prob.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SOLUTION DEEP DIVE (DS + AGENTIC) --- */}
        <section className="py-32 bg-slate-950">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-20">
              <h2 className="text-sm font-bold text-sky-400 uppercase tracking-[0.3em] mb-4">The Solution Approach</h2>
              <p className="text-4xl font-bold text-white tracking-tighter">Data Science + Agentic AI</p>
            </div>

            <div className="space-y-12">
              {SOLUTION_DETAILS.map((sol, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-slate-900/40 rounded-[3rem] border border-slate-800 overflow-hidden shadow-2xl"
                >
                  <div className="grid lg:grid-cols-12">
                    <div className="lg:col-span-4 p-10 lg:p-14 bg-slate-900/80 border-r border-slate-800 flex flex-col justify-center">
                      <span className="text-xs font-mono text-slate-500 mb-4 tracking-widest uppercase">Solution 0{i+1}</span>
                      <h3 className="text-3xl font-bold text-white leading-tight">{sol.title}</h3>
                    </div>
                    <div className="lg:col-span-8 p-10 lg:p-14 grid md:grid-cols-2 gap-12 bg-slate-950/20">
                      <div>
                        <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-widest mb-6">
                          <BarChart3 size={16} /> Data Science & Analytics
                        </div>
                        <ul className="space-y-4">
                          {sol.ds.map((item, idx) => (
                            <li key={idx} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/30 mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-8 bg-sky-500/5 rounded-[2rem] border border-sky-500/10">
                        <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-widest mb-6">
                          <Zap size={16} /> Agentic AI
                        </div>
                        <ul className="space-y-4">
                          {sol.agentic.map((item, idx) => (
                            <li key={idx} className="text-slate-300 text-sm leading-relaxed font-medium flex gap-3">
                              <CheckCircle size={14} className="text-sky-500 mt-1 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- ROI BENCHMARKS --- */}
        <section className="py-32 bg-[#020617]">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="bg-slate-900 rounded-[3rem] border border-slate-800 shadow-3xl overflow-hidden">
              <div className="p-12 text-center border-b border-slate-800">
                <h2 className="text-3xl font-bold text-white mb-2">Performance Benchmarks</h2>
                <p className="text-slate-500">Typical impact across our deployed AI Mill modules.</p>
              </div>
              <div className="divide-y divide-slate-800">
                {ROI_DATA.map((row, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center justify-between p-10 md:px-20 hover:bg-slate-800/20 transition-colors">
                    <span className="text-xl font-medium text-slate-300 mb-4 md:mb-0">{row.metric}</span>
                    <div className="text-center md:text-right">
                      <div className={`text-4xl font-bold tracking-tight ${row.color}`}>{row.value}</div>
                      <div className="text-[10px] uppercase font-bold text-slate-500 tracking-[0.2em] mt-1">Target Improvement</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- WHY AI MILL --- */}
        <section className="py-32 bg-slate-950">
          <div className="container mx-auto max-w-7xl px-6">
            <SectionHeader 
              subtitle="Why AI Mill"
              title="Purpose-Built for Insurance"
              description="Generic AI models fail in insurance. We build with domain specificity and regulatory alignment at the core."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Database, title: "Native Data Context", desc: "Designed for the nuances of FNOL, claims, and pricing data." },
                { icon: Scale, title: "Explainable Decisions", desc: "Decision logs that align with regulatory audit expectations." },
                { icon: Activity, title: "Continuous Execution", desc: "Agentic AI enables real-time response across the value chain." },
                { icon: Zap, title: "Zero Disruption", desc: "Faster time-to-value without heavy operational overhaul." }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    <item.icon className="text-sky-400" size={24} />
                  </div>
                  <h4 className="text-white font-bold">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <section className="py-32 container mx-auto px-6">
          <div className="bg-gradient-to-br from-sky-600 to-indigo-700 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-white/5 pointer-events-none" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight relative z-10">
              Fix delays. Reduce leakage. <br className="hidden md:block" /> Protect your margins.
            </h2>
            <p className="text-sky-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed relative z-10">
              Join leading carriers utilizing AI Mill to automate complexity and drive scaled efficiency.
            </p>
            <Button size="lg" className="bg-slate-950 text-white hover:bg-slate-900 rounded-2xl h-16 px-12 text-lg font-bold relative z-10 transition-transform hover:scale-105 active:scale-95 shadow-2xl" asChild>
              <Link to="/contact">
                Talk to AI Mill Insurance Experts
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Insurance;