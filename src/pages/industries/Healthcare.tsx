import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingDown,
  Clock,
  AlertCircle,
  Database,
  Activity,
  BarChart3,
  Zap,
  Sparkles,
  Heart,
  TrendingUp,
  Shield,
  CheckCircle,
  Award,
  Users,
  FileBarChart,
  AlertTriangle,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Healthcare = () => {
  const problems = [
    {
      icon: Users,
      title: "Care Demand Volatility & Capacity Imbalance",
      desc: "Leading to patient backlogs, clinician burnout, and revenue leakage",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      icon: TrendingDown,
      title: "Rising Operating & Administrative Costs",
      desc: "Driven by inefficiencies, manual processes, and fragmented workflows",
      color: "text-teal-400",
      bg: "bg-teal-500/10",
    },
    {
      icon: Shield,
      title: "Clinical & Operational Risk Exposure",
      desc: "Resulting in compliance gaps, quality variation, and financial penalties",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      icon: Clock,
      title: "Slow, Fragmented Decision-Making",
      desc: "Causing delayed interventions and missed optimization opportunities",
      color: "text-sky-400",
      bg: "bg-sky-500/10",
    },
    {
      icon: AlertTriangle,
      title: "Supply Chain Disruptions in Critical Care Assets",
      desc: "Creating shortages, excess inventory, and care delays",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
  ];

  const solutions = [
    {
      title: "Care Demand & Capacity",
      ds: [
        "Forecast patient demand, optimize staffing and bed utilization",
      ],
      agentic: [
        "Continuously rebalance schedules and capacity based on live signals",
      ],
    },
    {
      title: "Cost & Efficiency",
      ds: [
        "Identify cost drivers, automate spend and utilization insights",
      ],
      agentic: [
        "Execute savings actions and monitor outcomes autonomously",
      ],
    },
    {
      title: "Risk & Compliance",
      ds: [
        "Score clinical, operational, and regulatory risk",
      ],
      agentic: [
        "Trigger preventive actions and adapt controls in real time",
      ],
    },
    {
      title: "Decision Velocity",
      ds: [
        "Deliver explainable, decision-ready insights",
      ],
      agentic: [
        "Act across systems without waiting for manual intervention",
      ],
    },
    {
      title: "Healthcare Supply Chain",
      ds: [
        "Predict shortages and optimize inventory levels",
      ],
      agentic: [
        "Reorder, reroute, and learn from demand shifts automatically",
      ],
    },
  ];

  const roiMetrics = [
    { metric: "Care Delivery Efficiency", improvement: "↑ 15–25%", color: "text-emerald-400" },
    { metric: "Operating & Admin Costs", improvement: "↓ 10–20%", color: "text-teal-400" },
    { metric: "Decision Cycle Time", improvement: "↓ 40–60%", color: "text-blue-400" },
    { metric: "Payback Period", improvement: "6–12 months", color: "text-amber-400", highlight: true },
  ];

  const whyAIMill = [
    {
      icon: Database,
      title: "Built for complex, regulated healthcare data environments",
      desc: "Purpose-built for healthcare data with regulatory compliance in mind.",
    },
    {
      icon: Shield,
      title: "Explainable insights that clinicians and executives trust",
      desc: "Transparent analytics aligned with healthcare decision-making standards.",
    },
    {
      icon: Zap,
      title: "Agentic AI enables continuous, autonomous decisioning",
      desc: "Systems that continuously monitor, decide, and act across healthcare operations.",
    },
    {
      icon: Award,
      title: "Rapid deployment with measurable value in months, not years",
      desc: "Fast time-to-value without disrupting critical healthcare operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-[#020617]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto max-w-7xl px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest mb-6 uppercase">
                  FROM ADVANCED ANALYTICS TO AUTONOMOUS HEALTHCARE INTELLIGENCE
                </div>
                <h1 className="text-5xl lg:text-[64px] font-extrabold leading-[1.1] text-white mb-8 tracking-tight">
                  Healthcare Industry<br />AI Solutions
                </h1>
                <p className="text-xl lg:text-[24px] text-slate-300 leading-relaxed mb-6 max-w-[600px]">
                  Healthcare leaders face rising costs, staffing shortages, and regulatory pressure. Decisions must be faster, safer, and scalable across complex ecosystems.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed mb-12 max-w-[580px]">
                  AI Mill enables confident execution through Data Science & Analytics and Agentic AI—turning insight into action, continuously.
                </p>
                <Button
                  size="lg"
                  className="h-[56px] px-8 text-lg font-semibold bg-gradient-to-br from-blue-500 via-blue-600 to-teal-600 text-white rounded-xl shadow-xl shadow-blue-500/20 hover:scale-105 transition-all"
                  asChild
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Talk to Healthcare AI Experts <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>

              {/* Right Side: Dashboard Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-slate-900/80 backdrop-blur-xl rounded-[28px] p-10 border border-slate-800/50 shadow-2xl">
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500/60 animate-pulse" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                    </div>
                    <div className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
                      <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Live Dashboard</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Capacity Util", val: "92%", color: "text-blue-400", bg: "bg-blue-500/10", icon: Activity },
                      { label: "Care Efficiency", val: "+18%", color: "text-teal-400", bg: "bg-teal-500/10", icon: TrendingUp },
                      { label: "Risk Score", val: "Low", color: "text-emerald-400", bg: "bg-emerald-500/10", icon: Shield },
                      { label: "Cost Reduction", val: "-15%", color: "text-cyan-400", bg: "bg-cyan-500/10", icon: BarChart3 },
                    ].map((card, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className={`${card.bg} rounded-xl p-5 border border-slate-800/50 hover:border-slate-700/50 transition-all`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-8 h-8 rounded-lg ${card.bg} flex items-center justify-center border border-slate-700/50`}>
                            <card.icon className={`w-4 h-4 ${card.color}`} />
                          </div>
                          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{card.label}</span>
                        </div>
                        <div className={`text-2xl font-extrabold ${card.color}`}>{card.val}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Context Section */}
        <section className="py-24 bg-slate-950">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="text-center">
              <p className="text-xl text-slate-400 leading-relaxed">
                Healthcare operations now span providers, payers, suppliers, and regulators. Legacy systems analyze data but cannot decide, act, or adapt in real time.
              </p>
            </div>
          </div>
        </section>

        {/* Key Business Problems */}
        <section className="py-32 bg-[#020617]">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-6">Key Business Problems</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-10 rounded-2xl hover:border-blue-500/30 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-6`}>
                    <item.icon className={item.color} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Mill Solution Approach */}
        <section className="py-32 bg-slate-950">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-4">
                AI Mill Solution Approach
              </h2>
              <p className="text-lg text-blue-400 font-semibold mb-4">Data Science & Analytics + Agentic AI</p>
            </div>
            <div className="space-y-8">
              {solutions.map((sol, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-[2.5rem] border border-slate-800/50 shadow-xl overflow-hidden"
                >
                  <div className="p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-white mb-8">{sol.title}</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-blue-500/5 rounded-2xl p-6 border border-blue-500/10">
                        <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-4">
                          <BarChart3 size={16} /> Data Science & Analytics
                        </div>
                        <ul className="space-y-3">
                          {sol.ds.map((item, idx) => (
                            <li key={idx} className="text-slate-300 text-sm leading-relaxed flex gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-teal-500/5 rounded-2xl p-6 border border-teal-500/10">
                        <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider mb-4">
                          <Zap size={16} /> Agentic AI
                        </div>
                        <ul className="space-y-3">
                          {sol.agentic.map((item, idx) => (
                            <li key={idx} className="text-slate-300 text-sm leading-relaxed flex gap-3 font-medium">
                              <CheckCircle size={14} className="text-teal-400 mt-1 shrink-0" />
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

        {/* ROI Benchmarks */}
        <section className="py-32 bg-[#020617]">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden">
              <div className="p-8 md:p-12 border-b border-slate-800 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Healthcare ROI Benchmarks</h2>
                <p className="text-slate-400">Typical impact across our deployed AI Mill models.</p>
              </div>
              <div className="divide-y divide-slate-800">
                {roiMetrics.map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-8 hover:bg-slate-800/20 transition-colors ${row.highlight ? "bg-blue-500/5" : ""}`}
                  >
                    <span className="text-lg font-medium text-slate-300">{row.metric}</span>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${row.highlight ? "text-blue-400" : row.color}`}>
                        {row.improvement}
                      </div>
                      <div className="text-xs uppercase font-bold text-slate-500 tracking-tighter">
                        Typical Improvement
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why AI Mill */}
        <section className="py-32 bg-slate-950">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-6">Why AI Mill for Healthcare?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyAIMill.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-8 rounded-2xl hover:border-blue-500/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                    <item.icon className="text-blue-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 container mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 to-teal-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] -z-10" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Solve healthcare cost, capacity, and risk challenges—without adding complexity.
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
              Join leading healthcare organizations already using AI Mill to transform healthcare operations.
            </p>
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 rounded-2xl h-14 px-10 font-bold"
              asChild
            >
              <Link to="/contact">Talk to AI Mill Healthcare Experts</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Healthcare;
