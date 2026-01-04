import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, time } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight, TrendingDown, Clock, Database, Users, AlertCircle,
  Target, TrendingUp, Shield, Zap, BarChart3, CheckCircle,
  Film, Sparkles, Eye, Award, Activity, BarChart, ArrowUp, ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Media = () => {
  const challenges = [
    { icon: Users, text: "Audience Fragmentation Leading To Inconsistent Reach" },
    { icon: Film, text: "Difficulty Scaling Content Production At Market Speed" },
    { icon: TrendingDown, text: "Suboptimal Advertising Yield And Monetization" },
    { icon: Clock, text: "Operational Bottlenecks In Content Launching" },
    { icon: AlertCircle, text: "Decision Latency Driven By Siloed Performance Data" },
    { icon: Eye, text: "Limited Real-Time Visibility Across Distribution Channels" },
  ];

  const solutions = [
    {
      number: "01",
      title: "Audience Intelligence & Dynamic Segmentation",
      challenge: "Media organizations struggle to track fragmented audiences across platforms, leading to wasted spend and missed engagement.",
      solution: [
        "Audience segmentation models based on demographics, viewing behavior, and content affinity",
        "Predictive models estimating content reach, watch time, engagement depth, and churn risk",
        "Cross-platform analytics integrating OTT, TV, social, and web consumption data",
        "Trend detection models identifying emerging genres, formats, and audience shifts",
      ],
      howItWorks: [
        { agent: "Demand Sensing Agents", action: "Monitor platform performance and audience shifts" },
        { agent: "Segmentation Agents", action: "Rebalance audience clusters in real-time" },
        { agent: "Allocation Agents", action: "Optimize content distribution across channels" },
        { agent: "Conversion Agents", action: "Trigger personalized subscriber acquisition paths" },
      ],
      metrics: [
        { value: "25%", label: "Higher Engagement", color: "text-green" },
        { value: "40%", label: "Churn Reduction", color: "text-cyan" },
        { value: "30%", label: "ROAS Improvement", color: "text-purple" },
      ],
    },
    {
      number: "02",
      title: "AI-Powered Content & Programming Optimization",
      challenge: "Publishers can't produce or adapt content fast enough to capture viral trends, resulting in missed monetization windows.",
      solution: [
        "Demand forecasting models for ad inventory across time slots and platforms",
        "Audience-value scoring based on engagement, demographics, and intent signals",
        "Pricing optimization models for CPM, sponsorships, and programmatic inventory",
      ],
      howItWorks: [
        { agent: "Trend Analysis Agents", action: "Identify surfacing content themes and formats" },
        { agent: "Programming Agents", action: "Optimize release schedules for maximum lift" },
        { agent: "Adaptation Agents", action: "Automate format changes and creative variants" },
        { agent: "Distribution Agents", action: "Execute seeding across social and web properties" },
      ],
      metrics: [
        { value: "50%", label: "Faster Launch", color: "text-green" },
        { value: "35%", label: "Yield Increase", color: "text-cyan" },
        { value: "45%", label: "Cost Savings", color: "text-purple" },
      ],
    },
    {
      number: "03",
      title: "Advertising Yield & Revenue Intelligence",
      challenge: "Static pricing and manual inventory management lead to inventory leakage and suboptimal fill rates.",
      solution: [
        "Anomaly detection models identifying abnormal traffic and consumption patterns",
        "Network and graph analytics uncovering piracy networks and bot-driven fraud",
        "Brand safety classification models analyzing content and placement context"
      ],
      howItWorks: [
        { agent: "Pricing Agents", action: "Adjust rate cards based on demand and fill rates" },
        { agent: "Inventory Agents", action: "Predict sell-out risk and allocate placements" },
        { agent: "Yield Agents", action: "Maximize revenue per mille (RPM) across streams" },
        { agent: "Sourcing Agents", action: "Optimize SSP and DSP partner configurations" },
      ],
      metrics: [
        { value: "18%", label: "Revenue Lift", color: "text-green" },
        { value: "Fill Rate ↑", label: "Better Utilization", color: "text-cyan" },
        { value: "Leakage ↓", label: "Reduced Revenue Loss", color: "text-purple" },
      ],
    },
  ];

  const roiMetrics = [
    { metric: "Audience Engagement", improvement: "20%", trend: "up" },
    { metric: "Content Cycle Time", improvement: "50%", trend: "down" },
    { metric: "Advertising Yield", improvement: "15%", trend: "up" },
    { metric: "Operational Costs", improvement: "25%", trend: "down" },
    { metric: "Payback Period", improvement: "7 months", trend: "neutral", highlight: true },
  ];

  const whyAIMill = [
    {
      icon: Sparkles,
      title: "Multi-Channel Scale",
      description: "Agents that operate across web, mobile, social, and CTV without human intervention.",
    },
    {
      icon: Zap,
      title: "Real-Time Action",
      description: "Recalibrate audience spend and content distribution in milliseconds as performance shifts.",
    },
    {
      icon: BarChart,
      title: "Explainable ROI",
      description: "Transparent models that link every agent action to specific engagement and revenue lifts.",
    },
    {
      icon: Shield,
      title: "Safe Autonomy",
      description: "Automated content and distribution that operates within your strict brand guardrails.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-slate-300">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-black">
          {/* Background Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-15" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='30' cy='10' r='1.5'/%3E%3Ccircle cx='10' cy='30' r='1.5'/%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            }} />
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(128,128,128,0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(128,128,128,0.08) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(128,128,128,0.05) 0%, transparent 70%)
              `,
            }} />
          </div>

          {/* Ambient Glows */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center py-20 lg:py-32">
              {/* Left Content Area */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start"
              >
                {/* Upper Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-8"
                >
                  <span className="text-[11px] uppercase tracking-[0.3em] text-purple font-bold opacity-80">
                    FROM REACH TO AUTONOMOUS INTELLIGENCE
                  </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[0.95] tracking-[-0.03em] text-white mb-8"
                >
                  Scale <span className="gradient-text-purple">Performance</span> <br />
                  Across Your <br />
                  Media Ecosystem
                </motion.h1>

                {/* Supporting Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-[540px] mb-12 font-medium"
                >
                  Media leaders face margin pressure and fragmented audiences. AI Mill combines Data Science & Analytics with Agentic AI to move from insight to action—continuously.
                </motion.p>

                {/* CTA Area */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-5"
                >
                  <Link to="/contact">
                    <Button variant="hero" size="lg" className="group">
                      Talk to Our Experts
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/solutions">
                    <Button variant="heroOutline" size="lg">
                      View Platform
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Visual Area */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-20 w-full aspect-[4/5] max-w-[500px] mx-auto bg-gradient-to-br from-[#1a1f35] to-[#0b0f19] rounded-[32px] p-8 sm:p-10 shadow-[0_0_50px_-10px_rgba(0,0,0,0.7),0_0_30px_rgba(124,58,237,0.15)] border border-white/10 overflow-hidden group">
                  <div className="absolute inset-0 opacity-[0.07]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                  }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="relative h-full flex flex-col z-10">
                    <div className="flex justify-between items-center mb-10">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-slate-700/50 border border-slate-600/50" />
                        <div className="w-3 h-3 rounded-full bg-slate-700/50 border border-slate-600/50" />
                        <div className="w-3 h-3 rounded-full bg-slate-700/50 border border-slate-600/50" />
                      </div>
                      <div className="relative group/pill">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[8px] opacity-50 group-hover/pill:opacity-80 transition-opacity" />
                        <div className="relative px-4 py-1.5 bg-slate-900/40 backdrop-blur-md border border-blue-500/30 rounded-full flex items-center gap-2">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                          </span>
                          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">System Active</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 flex-1 content-start">
                      {[
                        { icon: Users, label: "Audience Reach", value: "94.2%", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
                        { icon: TrendingUp, label: "Content Perf", value: "+18%", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
                        { icon: BarChart3, label: "Ad Yield", value: "87%", color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
                        { icon: Activity, label: "Engagement", value: "+22%", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
                        { icon: Eye, label: "Visibility", value: "Real-time", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
                        { icon: Target, label: "Goal Match", value: "Optimal", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                      ].map((card, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                          whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.08)" }}
                          className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/5 hover:border-white/10 transition-all cursor-default group/card overflow-hidden"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${card.bg} ${card.border} border`}>
                              <card.icon className={`w-5 h-5 ${card.color}`} />
                            </div>
                            <div className={`w-1.5 h-1.5 rounded-full ${card.bg.replace('/10', '/50')}`} />
                          </div>
                          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{card.label}</div>
                          <div className="text-xl font-bold text-white tracking-tight">{card.value}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-zinc-950/30 to-zinc-900/40" />
            <div className="absolute inset-0 opacity-50" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(128,128,128,0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(128,128,128,0.15) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(128,128,128,0.1) 0%, transparent 70%)
              `,
            }} />
            <div className="absolute inset-0 opacity-40" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.25'%3E%3Ccircle cx='15' cy='15' r='1.5'/%3E%3Ccircle cx='45' cy='15' r='1.5'/%3E%3Ccircle cx='15' cy='45' r='1.5'/%3E%3Ccircle cx='45' cy='45' r='1.5'/%3E%3Ccircle cx='30' cy='30' r='1.2'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px),
                repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px)
              `,
            }} />
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-[1.2]">Industry Challenges</h2>
              <p className="text-lg sm:text-xl text-slate-400 max-w-[900px] mx-auto leading-[1.6]">
                Media organizations face pressure to adapt and scale while dealing with fragmented data and audience volatility.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group glass rounded-xl p-8 border border-border/50 hover:border-purple/30 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple/20 flex items-center justify-center mb-4 group-hover:bg-purple/30 transition-colors">
                    <challenge.icon className="w-6 h-6 text-purple" />
                  </div>
                  <p className="text-base lg:text-lg text-white leading-relaxed">{challenge.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
          <div className="absolute inset-0 pointer-events-none overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-zinc-950/30 to-zinc-900/40" />
            <div className="absolute inset-0 opacity-50" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(128,128,128,0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(128,128,128,0.15) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(128,128,128,0.1) 0%, transparent 70%)
              `,
            }} />
          </div>
          <div className="container mx-auto max-w-7xl relative z-10">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-32 last:mb-0 relative"
              >
                <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 mb-12">
                  <div className="flex-shrink-0">
                    <div
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)] flex items-center justify-center text-white text-3xl md:text-4xl font-bold border-4 border-black/50"
                      style={{ backgroundImage: "var(--gradient-purple-pink)" }}
                    >
                      {solution.number}
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.5]">
                    {solution.title}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                  <div className="bg-[#0f111a] border border-white/5 rounded-2xl p-8 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-red-500/80" />
                    <span className="text-xs font-bold text-red-400 uppercase tracking-[0.2em] mb-4 block">
                      The Challenge
                    </span>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {solution.challenge}
                    </p>
                  </div>

                  <div className="bg-[#0f111a] border border-white/5 rounded-2xl p-8 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-purple" />
                    <div className="absolute inset-0 bg-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-[0.2em] mb-4 block relative z-10">
                      Traditional Data Science Layer
                    </span>
                    <ul className="space-y-3 relative z-10">
                      {solution.solution.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2.5 flex-shrink-0" />
                          <span className="text-lg text-gray-300 leading-relaxed">• {item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[#06070a] border border-white/5 rounded-3xl overflow-hidden mb-12">
                  <div className="px-8 py-6 border-b border-white/5 bg-white/[0.02]">
                    <h4 className="text-sm font-bold text-purple-400 uppercase tracking-[0.2em]">
                      How Agentic AI Works
                    </h4>
                  </div>
                  <div className="divide-y divide-white/5">
                    {solution.howItWorks.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className={`px-8 py-5 flex items-start md:items-center gap-4 group transition-colors hover:bg-white/[0.02] ${itemIdx % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'
                          }`}
                      >
                        <div className="w-8 h-8 rounded-full bg-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-0">
                          <CheckCircle className="w-4 h-4 text-purple-400" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-1 md:gap-3 text-base">
                          <span className="font-semibold text-white">{item.agent}</span>
                          <span className="hidden md:inline text-gray-600">→</span>
                          <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                            {item.action}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {solution.metrics.map((metric, metricIdx) => (
                    <div
                      key={metricIdx}
                      className="bg-[#0f111a] border border-white/5 rounded-2xl p-6 hover:border-purple/30 transition-all duration-300 group"
                    >
                      <div className={`text-4xl font-bold mb-2 ${metric.color} tracking-tight`}>
                        {metric.value}
                      </div>
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-widest group-hover:text-gray-400 transition-colors">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ROI Metrics Table */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-zinc-950/30 to-zinc-900/40" />
          </div>
          <div className="container mx-auto max-w-[800px] relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-[1.2]">ROI Benchmarks</h2>
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-[1.6]">
                Measurable improvements across key media metrics
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl shadow-2xl overflow-hidden border border-border"
            >
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple to-cyan">
                  <tr>
                    <th className="px-6 py-5 text-left text-white font-bold text-lg">Metric</th>
                    <th className="px-6 py-5 text-right text-white font-bold text-lg">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {roiMetrics.map((row, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className={`${idx % 2 === 0 ? "bg-card/50" : "bg-card/30"
                        } ${row.highlight ? "bg-purple-500/10 border-l-4 border-purple-500" : ""} hover:bg-purple-500/10 transition-all`}
                    >
                      <td className="px-6 py-5 font-semibold text-white text-base">{row.metric}</td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end gap-3">
                          {row.trend === "up" && <ArrowUp className="w-5 h-5 text-green" />}
                          {row.trend === "down" && <ArrowDown className="w-5 h-5 text-destructive" />}
                          <span className={`text-2xl font-bold ${row.trend === "up" ? "text-green" :
                            row.trend === "down" ? "text-destructive" :
                              "text-yellow-500"
                            }`}>
                            {row.improvement}
                          </span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* Why AI Mill Section */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-zinc-950/30 to-zinc-900/40" />
          </div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-[1.2]">Why AI Mill For Media?</h2>
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-[1.6]">
                Built specifically for multi-channel media ecosystems with scale and brand safety at the core.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyAIMill.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group glass rounded-2xl p-10 shadow-md hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple to-cyan flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-[1.4]">{item.title}</h3>
                  <p className="text-base text-slate-400 leading-[1.6]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 bg-background overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-40" style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(128,128,128,0.3) 2px, rgba(128,128,128,0.3) 4px),
                repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(128,128,128,0.3) 2px, rgba(128,128,128,0.3) 4px),
                radial-gradient(circle at 20% 50%, rgba(128,128,128,0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(128,128,128,0.15) 0%, transparent 50%)
              `,
            }} />
          </div>

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Scale Content, Audiences, And Revenue Without Increasing Risk.
              </h2>
              <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join leading media organizations using AI Mill to transform reach, yield, and operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="group">
                    Talk to Our Experts
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/solutions">
                  <Button variant="heroOutline" size="lg">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Media;

