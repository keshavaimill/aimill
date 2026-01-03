import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingDown,
  Clock,
  AlertCircle,
  BarChart3,
  Zap,
  Sparkles,
  ShoppingBag,
  TrendingUp,
  Activity,
  CheckCircle,
  Database,
  Shield,
  Award,
  Package,
  DollarSign,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Retail = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Demand Volatility & Forecast Inaccuracy",
      desc: "Driving stockouts, excess inventory, and margin erosion.",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
    {
      icon: Package,
      title: "Inventory Imbalance Across Channels",
      desc: "Capital locked in slow movers while fast sellers run dry.",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      icon: DollarSign,
      title: "Promotion & Pricing Ineffectiveness",
      desc: "Discount leakage and poor ROI from static campaigns.",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
    },
    {
      icon: Users,
      title: "Customer Experience Gaps (Online & In-Store)",
      desc: "Low conversion, high returns, and inconsistent journeys.",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },
    {
      icon: Clock,
      title: "Slow Decision Cycles",
      desc: "Insights arrive too late to change outcomes.",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
  ];

  const solutions = [
    {
      title: "Demand Volatility & Forecast Inaccuracy",
      ds: [
        "Granular demand forecasting by SKU, store, and channel.",
        "Explainable scenarios for planners and merchants.",
      ],
      agentic: [
        "Continuously monitors demand signals.",
        "Autonomously adjusts forecasts and replenishment actions.",
      ],
    },
    {
      title: "Inventory Imbalance Across Channels",
      ds: [
        "Inventory optimization and allocation scoring.",
        "Clear trade-offs between service level and working capital.",
      ],
      agentic: [
        "Rebalances inventory across stores and e-commerce in real time.",
        "Learns from sell-through outcomes.",
      ],
    },
    {
      title: "Promotion & Pricing Ineffectiveness",
      ds: [
        "Promotion lift, elasticity, and cannibalization analysis.",
        "Decision-ready price and offer recommendations.",
      ],
      agentic: [
        "Activates and refines promotions dynamically.",
        "Stops underperforming campaigns automatically.",
      ],
    },
    {
      title: "Customer Experience Gaps (Virtual Try-Ons)",
      ds: [
        "Customer segmentation and fit/size prediction.",
        "Conversion and return-risk scoring.",
      ],
      agentic: [
        "Personalizes virtual try-ons and recommendations.",
        "Continuously optimizes based on shopper behavior.",
      ],
    },
  ];

  const roiMetrics = [
    { metric: "Forecast Accuracy", improvement: "↑ 15–25%", color: "text-orange-400" },
    { metric: "Inventory Holding Costs", improvement: "↓ 10–20%", color: "text-amber-400" },
    { metric: "Conversion Rate (Digital)", improvement: "↑ 5–12%", color: "text-rose-400" },
    { metric: "Decision Cycle Time", improvement: "↓ 40–60%", color: "text-pink-400" },
    { metric: "Payback Period", improvement: "6–12 months", color: "text-amber-400", highlight: true },
  ];

  const whyAIMill = [
    {
      icon: Database,
      title: "Built for complex retail data across stores, channels, and suppliers",
      desc: "Purpose-built for retail data complexity across all channels.",
    },
    {
      icon: Shield,
      title: "Explainable insights leaders can trust",
      desc: "Transparent analytics that executives can confidently act upon.",
    },
    {
      icon: Zap,
      title: "Agentic AI that executes decisions, not just reports them",
      desc: "Systems that continuously monitor, decide, and act autonomously.",
    },
    {
      icon: Award,
      title: "Fast deployment with measurable value in months",
      desc: "Rapid time-to-value without disrupting retail operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-[#020617]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto max-w-7xl px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-widest mb-6 uppercase">
                  FROM ADVANCED ANALYTICS TO AUTONOMOUS RETAIL INTELLIGENCE
                </div>
                <h1 className="text-5xl lg:text-[64px] font-extrabold leading-[1.1] text-white mb-8 tracking-tight">
                  Retail AI<br />Solutions
                </h1>
                <p className="text-xl lg:text-[24px] text-slate-300 leading-relaxed mb-6 max-w-[600px]">
                  Retail leaders face margin pressure, volatile demand, and rising customer expectations. AI Mill enables faster decisions, lower risk, and scaled execution.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed mb-12 max-w-[580px]">
                  We combine Data Science & Analytics with Agentic AI to move from insight to action—continuously.
                </p>
                <Button
                  size="lg"
                  className="h-[56px] px-8 text-lg font-semibold bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white rounded-xl shadow-xl shadow-orange-500/20 hover:scale-105 transition-all"
                  asChild
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Talk to Retail AI Experts <ArrowRight className="w-5 h-5" />
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
                    <div className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full">
                      <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Live Dashboard</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Forecast Acc", val: "94%", color: "text-orange-400", bg: "bg-orange-500/10", icon: BarChart3 },
                      { label: "Inventory Turn", val: "8.2x", color: "text-amber-400", bg: "bg-amber-500/10", icon: TrendingUp },
                      { label: "Conversion", val: "+12%", color: "text-rose-400", bg: "bg-rose-500/10", icon: Activity },
                      { label: "Customer LTV", val: "+18%", color: "text-pink-400", bg: "bg-pink-500/10", icon: Users },
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
                Modern retail is multi-channel, real-time, and margin-sensitive. Traditional BI and rule-based systems can't keep pace with volatility, personalization, and execution speed.
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
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-10 rounded-2xl hover:border-orange-500/30 transition-all"
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
              <p className="text-lg text-orange-400 font-semibold mb-4">Data Science & Analytics + Agentic AI</p>
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
                      <div className="bg-orange-500/5 rounded-2xl p-6 border border-orange-500/10">
                        <div className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase tracking-wider mb-4">
                          <BarChart3 size={16} /> Data Science & Analytics
                        </div>
                        <ul className="space-y-3">
                          {sol.ds.map((item, idx) => (
                            <li key={idx} className="text-slate-300 text-sm leading-relaxed flex gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-amber-500/5 rounded-2xl p-6 border border-amber-500/10">
                        <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-4">
                          <Zap size={16} /> Agentic AI
                        </div>
                        <ul className="space-y-3">
                          {sol.agentic.map((item, idx) => (
                            <li key={idx} className="text-slate-300 text-sm leading-relaxed flex gap-3 font-medium">
                              <CheckCircle size={14} className="text-amber-400 mt-1 shrink-0" />
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
                <h2 className="text-3xl font-bold text-white mb-2">Retail ROI Benchmarks</h2>
                <p className="text-slate-400">Typical impact across our deployed AI Mill models.</p>
              </div>
              <div className="divide-y divide-slate-800">
                {roiMetrics.map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-8 hover:bg-slate-800/20 transition-colors ${row.highlight ? "bg-orange-500/5" : ""}`}
                  >
                    <span className="text-lg font-medium text-slate-300">{row.metric}</span>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${row.highlight ? "text-orange-400" : row.color}`}>
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
              <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-6">Why AI Mill for Retail</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyAIMill.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-8 rounded-2xl hover:border-orange-500/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20">
                    <item.icon className="text-orange-400" size={24} />
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
          <div className="bg-gradient-to-br from-orange-600 to-amber-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[100px] -z-10" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Solve demand volatility, inventory risk, and CX gaps—without adding complexity.
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
              Join leading retailers already using AI Mill to transform retail operations.
            </p>
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 rounded-2xl h-14 px-10 font-bold"
              asChild
            >
              <Link to="/contact">Talk to AI Mill Retail Experts</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Retail;
