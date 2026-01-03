import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingDown,
  Clock,
  AlertCircle,
  FileX,
  Users,
  BarChart3,
  Zap,
  Sparkles,
  Film,
  TrendingUp,
  Activity,
  Eye,
  Target,
  CheckCircle,
  Database,
  Shield,
  Award,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Media = () => {
  const problems = [
    {
      icon: Users,
      title: "Audience Fragmentation & Demand Volatility",
      desc: "Resulting in inconsistent reach, inefficient spend, and revenue leakage.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      icon: Film,
      title: "Content Performance & Scale Challenges",
      desc: "Making it hard to produce, adapt, and promote the right content fast enough.",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },
    {
      icon: TrendingDown,
      title: "Advertising Yield & Monetization Inefficiency",
      desc: "Leading to suboptimal pricing, fill rates, and partner value.",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
    },
    {
      icon: Clock,
      title: "Operational Bottlenecks Across Media Ops",
      desc: "Slowing content launches, campaign execution, and distribution decisions.",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
    },
    {
      icon: AlertCircle,
      title: "Decision Latency & Execution Risk",
      desc: "Driven by siloed data, manual analysis, and delayed responses.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
  ];

  const solutions = [
    {
      title: "Audience Segmentation",
      ds: [
        "Forecast audience demand, segment behavior, and predict reach by channel.",
      ],
      agentic: [
        "Continuously reallocates spend and distribution based on live performance.",
      ],
    },
    {
      title: "Content Generation & Performance",
      ds: [
        "Identify content themes, formats, and timing that drive engagement and revenue.",
      ],
      agentic: [
        "Generates, adapts, and promotes content autonomously based on audience response.",
      ],
    },
    {
      title: "Advertising Yield",
      ds: [
        "Optimize pricing, inventory allocation, and yield forecasting.",
      ],
      agentic: [
        "Adjusts inventory and deal strategies in real time to maximize monetization.",
      ],
    },
    {
      title: "Media Operations Efficiency",
      ds: [
        "Surface bottlenecks, delays, and cost drivers across workflows.",
      ],
      agentic: [
        "Coordinates actions across teams and systems to reduce cycle times.",
      ],
    },
    {
      title: "Decision Risk",
      ds: [
        "Provide explainable, decision-ready insights with clear trade-offs.",
      ],
      agentic: [
        "Acts within guardrails, learns from outcomes, and reduces operational risk.",
      ],
    },
  ];

  const roiMetrics = [
    { metric: "Audience Engagement", improvement: "↑ 10–20%", color: "text-purple-400" },
    { metric: "Content Production Efficiency", improvement: "↑ 20–30%", color: "text-pink-400" },
    { metric: "Advertising Yield", improvement: "↑ 8–15%", color: "text-indigo-400" },
    { metric: "Operational Costs", improvement: "↓ 15–25%", color: "text-emerald-400" },
    { metric: "Decision Time", improvement: "↓ 40–60%", color: "text-rose-400" },
    { metric: "Payback Period", improvement: "6–12 months", color: "text-amber-400", highlight: true },
  ];

  const whyAIMill = [
    {
      icon: Database,
      title: "Designed for complex, multi-channel media ecosystems",
      desc: "Built to handle the complexity of modern media operations across platforms.",
    },
    {
      icon: Shield,
      title: "Explainable insights leaders can trust",
      desc: "Transparent analytics that executives can confidently act upon.",
    },
    {
      icon: Zap,
      title: "Agentic AI for continuous, autonomous decision-making",
      desc: "Systems that continuously monitor, decide, and act without manual intervention.",
    },
    {
      icon: Award,
      title: "Rapid time-to-value without operational disruption",
      desc: "Fast deployment with measurable impact within months, not years.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-[#020617]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto max-w-7xl px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest mb-6 uppercase">
                  FROM ADVANCED ANALYTICS TO AUTONOMOUS MEDIA INTELLIGENCE
                </div>
                <h1 className="text-5xl lg:text-[64px] font-extrabold leading-[1.1] text-white mb-8 tracking-tight">
                  Media Industry<br />AI Solutions
                </h1>
                <p className="text-xl lg:text-[24px] text-slate-300 leading-relaxed mb-6 max-w-[600px]">
                  Media leaders face margin pressure, fragmented audiences, and always-on content demands. Decisions must be faster, lower-risk, and scalable across channels.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed mb-12 max-w-[580px]">
                  AI Mill combines Data Science & Analytics with Agentic AI to drive smarter decisions and autonomous execution across the media value chain.
                </p>
                <Button
                  size="lg"
                  className="h-[56px] px-8 text-lg font-semibold bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 text-white rounded-xl shadow-xl shadow-purple-500/20 hover:scale-105 transition-all"
                  asChild
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Talk to Media AI Experts <ArrowRight className="w-5 h-5" />
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
                    <div className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full">
                      <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Live Dashboard</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Audience Reach", val: "94%", color: "text-purple-400", bg: "bg-purple-500/10", icon: Users },
                      { label: "Content Perf", val: "+18%", color: "text-pink-400", bg: "bg-pink-500/10", icon: TrendingUp },
                      { label: "Ad Yield", val: "87%", color: "text-indigo-400", bg: "bg-indigo-500/10", icon: BarChart3 },
                      { label: "Engagement", val: "+22%", color: "text-rose-400", bg: "bg-rose-500/10", icon: Activity },
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
                Media organizations operate across complex ecosystems of content, platforms, and monetization models. Traditional analytics and manual workflows cannot keep pace with real-time performance, personalization, and content scale.
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
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-10 rounded-2xl hover:border-purple-500/30 transition-all"
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
              <p className="text-lg text-purple-400 font-semibold mb-4">Data Science & Analytics + Agentic AI</p>
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
                      <div className="bg-purple-500/5 rounded-2xl p-6 border border-purple-500/10">
                        <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-wider mb-4">
                          <BarChart3 size={16} /> Data Science & Analytics
                        </div>
                        <ul className="space-y-3">
                          {sol.ds.map((item, idx) => (
                            <li key={idx} className="text-slate-300 text-sm leading-relaxed flex gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-indigo-500/5 rounded-2xl p-6 border border-indigo-500/10">
                        <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider mb-4">
                          <Zap size={16} /> Agentic AI
                        </div>
                        <ul className="space-y-3">
                          {sol.agentic.map((item, idx) => (
                            <li key={idx} className="text-slate-300 text-sm leading-relaxed flex gap-3 font-medium">
                              <CheckCircle size={14} className="text-indigo-400 mt-1 shrink-0" />
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
                <h2 className="text-3xl font-bold text-white mb-2">Media ROI Benchmarks</h2>
                <p className="text-slate-400">Typical impact across our deployed AI Mill models.</p>
              </div>
              <div className="divide-y divide-slate-800">
                {roiMetrics.map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-8 hover:bg-slate-800/20 transition-colors ${row.highlight ? "bg-purple-500/5" : ""}`}
                  >
                    <span className="text-lg font-medium text-slate-300">{row.metric}</span>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${row.highlight ? "text-purple-400" : row.color}`}>
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
              <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-6">Why AI Mill for Media?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyAIMill.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-8 rounded-2xl hover:border-purple-500/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20">
                    <item.icon className="text-purple-400" size={24} />
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
          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[100px] -z-10" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Scale content, audiences, and revenue without increasing complexity or risk.
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
              Join leading media organizations already using AI Mill to transform media operations.
            </p>
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 rounded-2xl h-14 px-10 font-bold"
              asChild
            >
              <Link to="/contact">Talk to AI Mill Media Experts</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Media;

