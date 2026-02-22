import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, scale } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight, TrendingDown, Clock, Database, Users, AlertCircle,
  Target, TrendingUp, Shield, Zap, BarChart, CheckCircle,
  Package, Truck, ArrowUp, ArrowDown, Activity, Plug, Eye,
  AlertTriangle, DollarSign, Brain, Network
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SupplyChain = () => {
  const challenges = [
    { icon: TrendingDown, text: "Inaccurate Demand Forecasts Leading To Stockouts Or Excess Inventory", gradient: "from-purple-500 to-purple-600", bgColor: "bg-purple-500/15" },
    { icon: DollarSign, text: "Capital Locked In Slow-Moving Inventory", gradient: "from-cyan-500 to-cyan-600", bgColor: "bg-cyan-500/15" },
    { icon: Clock, text: "Long Planning Cycles Unable To React To Disruptions", gradient: "from-cyan-500 to-cyan-600", bgColor: "bg-cyan-500/15" },
    { icon: Eye, text: "Limited End-to-End Visibility Across Suppliers, Warehouses, And Channels", gradient: "from-cyan-500 to-cyan-600", bgColor: "bg-cyan-500/15" },
    { icon: BarChart, text: "Human Planners Overwhelmed By Data Complexity", gradient: "from-purple-500 to-purple-600", bgColor: "bg-purple-500/15" },
    { icon: AlertTriangle, text: "Direct Impact On Service Levels, Margins, And Working Capital Efficiency", gradient: "from-destructive to-red-700", bgColor: "bg-destructive/15" },
  ];

  const solutions = [
    {
      number: "01",
      title: "AI-Powered Demand Forecasting Intelligence",
      challenge: "Most demand forecasts rely on historical averages and static assumptions, failing during promotions, seasonality shifts, or market volatility.",
      solution: [
        "Advanced time-series and machine learning models capturing seasonality, trends, and demand variability",
        "Integration of external demand signals including promotions, pricing, weather, and market indicators",
        "SKU- and location-level forecasting models scalable across large assortments"
      ],
      howItWorks: [
        { icon: Brain, text: "Forecast agents continuously monitor demand patterns" },
        { icon: Activity, text: "Agents detect bias, anomalies, and demand shifts" },
        { icon: Zap, text: "Models automatically retrain without human intervention" },
      ],
      metrics: [
        { value: "20-40% ↑", label: "Forecast Accuracy", color: "text-cyan", borderColor: "border-t-cyan" },
        { value: "↓ Bias", label: "Reduced Forecast Error", color: "text-purple", borderColor: "border-t-purple" },
        { value: "Better Alignment", label: "Demand-Supply Match", color: "text-green", borderColor: "border-t-green" },
      ],
      badgeGradient: "from-cyan to-green",
    },
    {
      number: "02",
      title: "Autonomous Inventory Optimization & Replenishment",
      challenge: "Overstocking increases holding costs, while understocking leads to lost sales and customer dissatisfaction.",
      solution: [
        "Probabilistic inventory models accounting for demand and lead-time uncertainty",
        "Safety stock and reorder point optimization by SKU, location, and service level",
        "Cost-to-serve and service-level trade-off modeling"
      ],
      howItWorks: [
        { icon: Brain, text: "Inventory agents recommend optimal replenishment quantities" },
        { icon: Activity, text: "Redistribution agents rebalance stock across locations" },
        { icon: Zap, text: "Exception agents respond to supply disruptions automatically" },
      ],
      metrics: [
        { value: "25-35% ↓", label: "Inventory Holding Costs", color: "text-green", borderColor: "border-t-green" },
        { value: "30% ↓", label: "Fewer Stockouts", color: "text-purple", borderColor: "border-t-purple" },
        { value: "Turns ↑", label: "Improved Inventory Velocity", color: "text-cyan", borderColor: "border-t-cyan" },
      ],
      badgeGradient: "from-cyan to-blue-600",
    },
    {
      number: "03",
      title: "End-to-End Supply Chain Visibility & Control Tower",
      challenge: "Decisions are made in silos with limited real-time visibility.",
      solution: [
        "Control tower analytics integrating data from suppliers, warehouses, transportation, ERP, and sales systems",
        "Event correlation and risk-scoring models identifying delays and bottlenecks",
        "KPI analytics for service levels, lead times, and fulfillment performance"
      ],
      howItWorks: [
        { icon: Brain, text: "Monitoring agents detect risks and delays" },
        { icon: Activity, text: "Decision agents recommend corrective actions" },
        { icon: Zap, text: "Scenario agents simulate outcomes before execution" },
      ],
      metrics: [
        { value: "Faster Response", label: "To Disruptions", color: "text-purple", borderColor: "border-t-purple" },
        { value: "↓ Cycle Time", label: "Reduced Planning Time", color: "text-cyan", borderColor: "border-t-cyan" },
        { value: "↑ Service", label: "Improved Levels", color: "text-green", borderColor: "border-t-green" },
      ],
      badgeGradient: "from-purple to-cyan",
    },
  ];

  const roiMetrics = [
    { metric: "Forecast Accuracy", improvement: "20–40%", trend: "up", color: "text-green" },
    { metric: "Inventory Costs", improvement: "25–35%", trend: "down", color: "text-cyan" },
    { metric: "Stockouts", improvement: "~30%", trend: "down", color: "text-purple" },
    { metric: "Working Capital", improvement: "10–25% released", trend: "down", color: "text-cyan" },
    { metric: "Payback Period", improvement: "3–6 months", trend: "neutral", highlight: true, color: "text-cyan" },
  ];

  const whyAIMill = [
    {
      icon: Zap,
      title: "Built for Volatility",
      description: "Designed for real-world disruptions, market fluctuations, and supply chain uncertainty.",
      gradient: "from-cyan to-blue-600",
    },
    {
      icon: Activity,
      title: "Autonomous Planning",
      description: "Plans, acts, and learns independently without manual intervention or delays.",
      gradient: "from-cyan to-green",
    },
    {
      icon: Plug,
      title: "Seamless Integration",
      description: "Works with existing ERP, WMS, TMS, and planning systems out of the box.",
      gradient: "from-purple to-cyan",
    },
    {
      icon: TrendingUp,
      title: "Rapid ROI",
      description: "Measurable KPIs and improvements within 3-6 months of deployment.",
      gradient: "from-green to-cyan",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712]">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-black">
          {/* Background Texture Overlay - Matching Agriculture Page */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Soft dot pattern */}
            <div className="absolute inset-0 opacity-15" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='30' cy='10' r='1.5'/%3E%3Ccircle cx='10' cy='30' r='1.5'/%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            {/* Subtle grain texture */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            }} />
            {/* Soft radial gradients for depth */}
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
                    Autonomous Supply Chain Intelligence
                  </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[0.95] tracking-[-0.03em] text-white mb-8"
                >
                  Supply Chain <span className="gradient-text-purple">AI Solutions</span>
                </motion.h1>

                {/* Supporting Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-[540px] mb-12 font-medium"
                >
                  Deploy agentic AI systems that transform static planning into dynamic execution. Modernize forecasting, inventory, and logistics with enterprise-grade intelligence.
                </motion.p>

                {/* CTA Area */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-5"
                >
                  <Button
                    size="lg"
                    className="group relative bg-white text-black hover:bg-gray-100 px-8 h-14 text-base font-bold transition-all duration-300 rounded-lg overflow-hidden"
                    asChild
                  >
                    <Link to="/contact">
                      <span className="relative z-10 flex items-center">
                        Talk to Our Experts
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/10 text-white hover:bg-white/5 px-8 h-14 text-base font-bold transition-all rounded-lg"
                    asChild
                  >
                    <Link to="/solutions">View Platform</Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Visual Area */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="relative"
              >
                {/* Elevated Product Card */}
                <div className="relative z-20 w-full aspect-[4/5] max-w-[500px] mx-auto bg-[#0f111a] rounded-[32px] p-8 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7),0_0_50px_-10px_rgba(59,130,246,0.1)] border border-white/10 overflow-hidden">

                  {/* Subtle Grain Texture */}
                  <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")` }} />

                  {/* Ambient Gradient Glow */}
                  <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
                  <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

                  <div className="relative h-full flex flex-col z-10">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-10">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                      </div>

                      {/* Active Status Pill */}
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-lg">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                          Supply System Active
                        </span>
                      </div>
                    </div>

                    {/* Metric Grid */}
                    <div className="grid grid-cols-2 gap-5 flex-1 content-start">
                      {[
                        { icon: Package, label: "Inv. Accuracy", value: "99.8%", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                        { icon: Truck, label: "On-Time Rate", value: "97.4%", color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
                        { icon: Activity, label: "Cycle Time", value: "-24%", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                        { icon: BarChart, label: "Demand Bias", value: "0.4%", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
                        { icon: Database, label: "Data Flow", value: "Real-time", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
                        { icon: CheckCircle, label: "Fulfillment", value: "Optimal", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                          whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.03)" }}
                          className="bg-white/[0.02] rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all cursor-default group relative overflow-hidden"
                        >
                          <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center ${item.bg} ${item.border} border shadow-inner`}>
                            <item.icon className={`w-5 h-5 ${item.color}`} />
                          </div>
                          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 group-hover:text-gray-400 transition-colors">
                            {item.label}
                          </div>
                          <div className="text-xl font-bold text-gray-100 tracking-tight group-hover:text-white transition-colors">
                            {item.value}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom Indicator */}
                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map(j => (
                            <div key={j} className="w-7 h-7 rounded-full border border-black bg-gray-800 flex items-center justify-center text-[10px] text-gray-400">
                              <Users className="w-3 h-3" />
                            </div>
                          ))}
                        </div>
                        <span className="text-[11px] font-medium text-gray-500">
                          Logistics Agents
                        </span>
                      </div>
                      <div className="h-1.5 w-20 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-2/3 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Decorative Elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-12 -right-12 w-40 h-40 bg-blue-600/20 rounded-full blur-[60px] pointer-events-none"
                />
                <motion.div
                  animate={{ y: [0, 15, 0], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-12 -left-12 w-40 h-40 bg-purple-600/20 rounded-full blur-[60px] pointer-events-none"
                />
              </motion.div>

            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden">
          {/* Elegant Grey Texture Background */}
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
              <p className="text-lg sm:text-xl text-gray-400 max-w-[900px] mx-auto leading-[1.6]">
                Supply chain leaders operate in an environment defined by uncertainty: fluctuating demand, supplier instability, logistics disruptions, and rising inventory costs.
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
          {/* Elegant Grey Texture Background */}
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
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-32 last:mb-0 relative"
              >
                {/* Section Header with Number Badge */}
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

                {/* Challenge & Solution Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                  {/* Challenge Box */}
                  <div className="bg-[#0f111a] border border-white/5 rounded-2xl p-8 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-red-500/80" />
                    <span className="text-xs font-bold text-red-400 uppercase tracking-[0.2em] mb-4 block">
                      The Challenge
                    </span>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {solution.challenge}
                    </p>
                  </div>

                  {/* Solution Box */}
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

                {/* Agentic Workflow - Striped Rows */}
                <div className="bg-[#06070a] border border-white/5 rounded-3xl overflow-hidden mb-12">
                  <div className="px-8 py-6 border-b border-white/5 bg-white/[0.02]">
                    <h4 className="text-sm font-bold text-purple-400 uppercase tracking-[0.2em]">
                      Outcome-Driven Agentic AI Layer
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
                          <item.icon className="w-4 h-4 text-purple-400" />
                        </div>
                        <div className="text-base text-gray-400">
                          <span className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                            {item.text.split(" ").slice(0, 2).join(" ")}
                          </span>
                          {" " + item.text.split(" ").slice(2).join(" ")}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* KPI Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {solution.metrics.map((metric, metricIdx) => (
                    <div
                      key={metricIdx}
                      className="bg-[#0f111a] border border-white/5 rounded-2xl p-6 hover:border-purple/30 transition-all duration-300 group"
                    >
                      <div className={`text-4xl font-bold mb-2 tracking-tight ${metric.color}`}>
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

        {/* INDUSTRY CHALLENGES SECTION */}
        <section className="py-[120px] px-6 lg:px-20 bg-slate-950 text-center">
          <div className="max-w-[900px] mx-auto mb-20">
            <h2 className="text-4xl lg:text-[48px] font-bold text-white mb-6">Industry Challenges</h2>
            <p className="text-lg lg:text-[20px] text-slate-400 leading-relaxed">
              Supply chain leaders operate in an environment defined by uncertainty: fluctuating demand, supplier instability, logistics disruptions, and rising inventory costs.
            </p>
          </div>
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8">
            {challenges.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-10 rounded-2xl flex items-center gap-6 text-left hover:border-slate-700 transition-all"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`} style={{ background: c.bgColor }}>
                  <c.icon className="text-white w-6 h-6" />
                </div>
                <p className="text-lg lg:text-[20px] font-medium text-slate-300 leading-snug">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ROI Metrics Table */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden">
          {/* Elegant Grey Texture Background */}
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
          <div className="container mx-auto max-w-[800px] relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-[1.2]">ROI & Measurable Outcomes</h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-[1.6]">
                Measurable improvements across key supply chain metrics
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl shadow-2xl overflow-hidden border border-border"
            >
              <table className="w-full border-collapse">
                <thead className="bg-gradient-to-r from-purple to-cyan">
                  <tr>
                    <th className="px-8 py-5 text-left text-white font-bold text-sm uppercase tracking-wider">Metric</th>
                    <th className="px-8 py-5 text-right text-white font-bold text-sm uppercase tracking-wider">Typical Improvement</th>
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
                      <td className="px-8 py-6 font-semibold text-[18px] text-white">{row.metric}</td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-3">
                          {row.trend === "up" && <ArrowUp className="w-5 h-5 text-green" />}
                          {row.trend === "down" && <ArrowDown className="w-5 h-5 text-green" />}
                          <span className="text-2xl font-bold text-green">
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

        {/* Why Ai Mill Section */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden">
          {/* Elegant Grey Texture Background */}
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-[1.2]">Why Ai Mill for Supply Chain?</h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-[1.6]">
                Built for supply chain operations with end-to-end visibility and real-time optimization.
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
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-purple to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-[1.4]">{item.title}</h3>
                  <p className="text-base text-gray-400 leading-[1.6]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 bg-[#030712] overflow-hidden">
          {/* Background texture matching premium theme */}
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
                Build A Supply Chain That Heals Itself.
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join leading supply chain organizations already using Ai Mill to create autonomous, resilient networks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="group rounded-xl bg-white text-black hover:bg-gray-100 h-14 px-8 font-bold">
                    Transform Your Supply Chain
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/solutions">
                  <Button variant="outline" size="lg" className="rounded-xl border-white/10 text-white hover:bg-white/5 h-14 px-8 font-bold">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main >
      <Footer />
    </div >
  );
};

export default SupplyChain;
