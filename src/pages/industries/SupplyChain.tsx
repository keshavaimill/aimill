import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
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
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const challenges = [
    { icon: TrendingDown, text: "Inaccurate demand forecasts leading to stockouts or excess inventory", gradient: "from-red-500 to-red-600", bgColor: "bg-red-500/15" },
    { icon: DollarSign, text: "Capital locked in slow-moving inventory", gradient: "from-amber-500 to-amber-600", bgColor: "bg-amber-500/15" },
    { icon: Clock, text: "Long planning cycles unable to react to disruptions", gradient: "from-orange-500 to-orange-600", bgColor: "bg-orange-500/15" },
    { icon: Eye, text: "Limited end-to-end visibility across suppliers, warehouses, and channels", gradient: "from-sky-500 to-sky-600", bgColor: "bg-sky-500/15" },
    { icon: BarChart, text: "Human planners overwhelmed by data complexity", gradient: "from-purple-500 to-purple-600", bgColor: "bg-purple-500/15" },
    { icon: AlertTriangle, text: "Direct impact on service levels, margins, and working capital efficiency", gradient: "from-red-500 to-red-600", bgColor: "bg-red-500/15" },
  ];

  const solutionIcons = [Brain, Activity, Zap];

  const solutions = [
    {
      number: "01",
      title: "AI-Powered Demand Forecasting Intelligence",
      challenge: "Most demand forecasts rely on historical averages and static assumptions, failing during promotions, seasonality shifts, or market volatility.",
      solution: "We develop advanced forecasting models using time-series analysis, machine learning, and external demand signals.",
      howItWorks: [
        { agent: "Forecast agents", action: "continuously monitor demand patterns" },
        { agent: "Agents", action: "detect bias, anomalies, and demand shifts" },
        { agent: "Models", action: "automatically retrain without human intervention" },
      ],
      metrics: [
        { value: "20-40% ↑", label: "Forecast Accuracy", color: "text-sky-600", borderColor: "border-t-sky-500" },
        { value: "↓ Bias", label: "Reduced Forecast Error", color: "text-orange-600", borderColor: "border-t-orange-500" },
        { value: "Better Alignment", label: "Demand-Supply Match", color: "text-purple-600", borderColor: "border-t-purple-500" },
      ],
      badgeGradient: "from-orange-500 to-orange-400",
    },
    {
      number: "02",
      title: "Autonomous Inventory Optimization & Replenishment",
      challenge: "Overstocking increases holding costs, while understocking leads to lost sales and customer dissatisfaction.",
      solution: "We implement probabilistic inventory models that calculate optimal safety stock and reorder points.",
      howItWorks: [
        { agent: "Inventory agents", action: "recommend optimal replenishment quantities" },
        { agent: "Redistribution agents", action: "rebalance stock across locations" },
        { agent: "Exception agents", action: "respond to supply disruptions automatically" },
      ],
      metrics: [
        { value: "25-35% ↓", label: "Inventory Holding Costs", color: "text-green-600", borderColor: "border-t-green-500" },
        { value: "30% ↓", label: "Fewer Stockouts", color: "text-orange-600", borderColor: "border-t-orange-500" },
        { value: "↑ Turns", label: "Improved Inventory Velocity", color: "text-sky-600", borderColor: "border-t-sky-500" },
      ],
      badgeGradient: "from-sky-500 to-sky-400",
    },
    {
      number: "03",
      title: "End-to-End Supply Chain Visibility & Control Tower",
      challenge: "Decisions are made in silos with limited real-time visibility.",
      solution: "We build AI-powered control towers aggregating data across suppliers, warehouses, transportation, and sales.",
      howItWorks: [
        { agent: "Monitoring agents", action: "detect risks and delays" },
        { agent: "Decision agents", action: "recommend corrective actions" },
        { agent: "Scenario agents", action: "simulate outcomes before execution" },
      ],
      metrics: [
        { value: "Faster Response", label: "To Disruptions", color: "text-red-600", borderColor: "border-t-red-500" },
        { value: "↓ Cycle Time", label: "Reduced Planning Time", color: "text-sky-600", borderColor: "border-t-sky-500" },
        { value: "↑ Service", label: "Improved Levels", color: "text-green-600", borderColor: "border-t-green-500" },
      ],
      badgeGradient: "from-purple-500 to-purple-400",
    },
  ];

  const roiMetrics = [
    { metric: "Forecast Accuracy", improvement: "↑ 20–40%", trend: "up", color: "text-sky-600" },
    { metric: "Inventory Costs", improvement: "↓ 25–35%", trend: "down", color: "text-green-600" },
    { metric: "Stockouts", improvement: "↓ ~30%", trend: "down", color: "text-orange-600" },
    { metric: "Working Capital", improvement: "10–25% released", trend: "down", color: "text-purple-600" },
    { metric: "Payback Period", improvement: "3–6 months", trend: "neutral", highlight: true, color: "text-amber-600" },
  ];

  const whyAIMill = [
    {
      icon: Zap,
      title: "Built for Volatility",
      description: "Designed for real-world disruptions, market fluctuations, and supply chain uncertainty.",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: Activity,
      title: "Autonomous Planning",
      description: "Plans, acts, and learns independently without manual intervention or delays.",
      gradient: "from-sky-500 to-sky-600",
    },
    {
      icon: Plug,
      title: "Seamless Integration",
      description: "Works with existing ERP, WMS, TMS, and planning systems out of the box.",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Rapid ROI",
      description: "Measurable KPIs and improvements within 3-6 months of deployment.",
      gradient: "from-green-500 to-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-50 to-slate-200">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="container mx-auto max-w-[1400px] px-[80px] relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center py-20">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-6"
                >
                  <span className="text-[12px] uppercase tracking-[2px] text-orange-500 font-semibold">
                    FROM FRAGILE SUPPLY CHAINS TO SELF-HEALING NETWORKS
                  </span>
                </motion.div>
                
                {/* Optional Icon */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mb-8"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center" style={{ background: 'rgba(249, 115, 22, 0.1)' }}>
                    <Truck className="w-6 h-6 text-orange-500" />
                  </div>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[64px] font-extrabold leading-[1.1] text-slate-900 mb-8"
                >
                  Supply Chain &<br />Distribution AI<br />Solutions
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-[24px] font-normal leading-[1.5] text-slate-600 max-w-[600px] mb-6 opacity-90"
                >
                  Optimize your supply chain with AI that predicts demand, manages inventory, optimizes logistics, and mitigates risks — reducing costs by up to 35% while improving service levels.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-[18px] leading-[1.7] text-slate-500 max-w-[580px] mb-12"
                >
                  AI Mill enables supply chain leaders to move beyond reactive planning and manual processes by deploying Data Science and Agentic AI systems that continuously forecast demand, optimize inventory, and coordinate logistics — autonomously and in real time.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-600 via-orange-600 to-indigo-600 hover:from-orange-700 hover:to-indigo-700 text-white px-8 h-[56px] text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 rounded-xl"
                    asChild
                  >
                    <Link to="/contact">
                      Transform Your Supply Chain
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[480px]"
              >
                <div className="absolute inset-0 bg-white rounded-3xl p-12 flex items-center justify-center border border-slate-200 shadow-2xl">
                  <div className="grid grid-cols-3 gap-5 w-full max-w-md">
                    {[
                      { label: "In Transit" },
                      { label: "Dispatched" },
                      { label: "On Route" },
                      { label: "Warehouse A" },
                      { label: "Warehouse B" },
                      { label: "Warehouse C" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                        className="bg-white rounded-xl p-7 shadow-md border border-slate-200 hover:shadow-xl hover:border-orange-500 hover:translate-y-[-4px] hover:scale-[1.02] transition-all flex flex-col items-center"
                      >
                        <Truck className="w-8 h-8 text-orange-500 mb-3" />
                        <div className="text-sm text-slate-600 text-center font-medium mt-3">{item.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="relative py-[120px] bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="container mx-auto max-w-7xl px-[80px] relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-[48px] font-bold text-white mb-6 leading-[1.2]">Industry Challenges</h2>
              <p className="text-[20px] text-slate-300 max-w-[900px] mx-auto leading-[1.6]">
                Supply chain leaders operate in an environment defined by uncertainty: fluctuating demand, supplier instability, logistics disruptions, and rising inventory costs. Traditional planning systems are static, slow, and heavily manual.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
              {challenges.map((challenge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 hover:bg-white/8 hover:border-orange-500/30 hover:translate-y-[-8px] hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${challenge.gradient} ${challenge.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <challenge.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[20px] font-medium text-slate-100 leading-[1.5]">{challenge.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="relative py-[120px]">
          <div className="container mx-auto max-w-[1200px] px-[80px]">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`mb-[80px] last:mb-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} rounded-2xl p-[60px]`}
              >
                <div className="flex flex-col lg:flex-row gap-[60px] items-start">
                  {/* Number Badge - Sticky on desktop */}
                  <div className="flex-shrink-0">
                    <div className={`w-[120px] h-[120px] rounded-full bg-gradient-to-br ${solution.badgeGradient} flex items-center justify-center text-white text-[56px] font-bold shadow-xl hover:shadow-2xl transition-all lg:sticky lg:top-[100px]`}>
                      {solution.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[40px] font-bold text-slate-900 mb-10 leading-[1.2]">{solution.title}</h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {/* Challenge Box */}
                      <div className="bg-red-50 border-l-4 border-orange-500 p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-orange-600 font-bold mb-3 block">
                          THE CHALLENGE
                        </span>
                        <p className="text-[18px] text-slate-900 leading-[1.6]">{solution.challenge}</p>
                      </div>

                      {/* Solution Box */}
                      <div className="bg-blue-50 border-l-4 border-sky-500 p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-sky-600 font-bold mb-3 block">
                          AI MILL SOLUTION
                        </span>
                        <p className="text-[18px] text-slate-900 leading-[1.6]">{solution.solution}</p>
                      </div>
                    </div>

                    {/* How Agentic AI Works */}
                    <div className={`mb-10 p-10 rounded-xl border ${
                      idx === 0 ? "bg-amber-50 border-amber-300" :
                      idx === 1 ? "bg-green-50 border-green-300" :
                      "bg-blue-50 border-blue-300"
                    }`}>
                      <h4 className={`text-base font-bold uppercase tracking-wider mb-6 ${
                        idx === 0 ? "text-amber-600" :
                        idx === 1 ? "text-green-700" :
                        "text-blue-700"
                      }`}>HOW AGENTIC AI WORKS</h4>
                      <div className="space-y-5">
                        {solution.howItWorks.map((item, itemIdx) => {
                          const Icon = solutionIcons[itemIdx % solutionIcons.length];
                          const iconColor = idx === 0 ? "bg-amber-500" : idx === 1 ? "bg-green-600" : "bg-blue-600";
                          return (
                            <motion.div
                              key={itemIdx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: itemIdx * 0.1 }}
                              className="flex items-start gap-4"
                            >
                              <div className={`w-6 h-6 rounded-full ${iconColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <span className="font-semibold text-[17px] text-slate-900">{item.agent}</span>
                                <span className="text-[17px] text-slate-900"> {item.action}</span>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Business Impact Cards */}
                    <div className="grid md:grid-cols-3 gap-6">
                      {solution.metrics.map((metric, metricIdx) => (
                        <motion.div
                          key={metricIdx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: metricIdx * 0.1 }}
                          className="bg-white rounded-xl p-8 shadow-md border border-slate-200 hover:shadow-xl hover:translate-y-[-8px] hover:border-orange-500 transition-all text-center"
                        >
                          <div className={`border-t-[3px] ${metric.borderColor} pt-6`}>
                            <div className={`text-[48px] font-bold ${metric.color} mb-3`}>
                              {metric.value}
                            </div>
                            <p className="text-base font-medium text-slate-600 leading-[1.4]">{metric.label}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ROI Metrics Table */}
        <section className="relative py-[100px] bg-white">
          <div className="container mx-auto max-w-[900px] px-[80px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-[44px] font-bold text-slate-900 mb-4 leading-[1.2]">ROI & Measurable Outcomes</h2>
              <p className="text-[20px] text-slate-600 max-w-2xl mx-auto leading-[1.6]">
                Measurable improvements across key supply chain metrics
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
            >
              <table className="w-full border-collapse">
                <thead className="bg-gradient-to-r from-orange-500 via-orange-600 to-purple-500">
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
                      className={`${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50"
                      } ${row.highlight ? "bg-gradient-to-r from-amber-50 to-amber-100 border-l-4 border-amber-500" : ""} hover:bg-orange-50 hover:scale-[1.01] transition-all`}
                    >
                      <td className="px-8 py-6 font-semibold text-[18px] text-slate-900">{row.metric}</td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-3">
                          {row.trend === "up" && <ArrowUp className={`w-5 h-5 ${row.color || "text-sky-600"}`} />}
                          {row.trend === "down" && <ArrowDown className={`w-5 h-5 ${row.color || "text-orange-600"}`} />}
                          <span className={`text-[28px] font-bold ${row.color || "text-amber-600"}`}>
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
        <section className="relative py-[100px] bg-slate-100">
          <div className="container mx-auto max-w-[1200px] px-[80px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-[44px] font-bold text-slate-900 mb-4 leading-[1.2]">Why AI Mill for Supply Chain?</h2>
              <p className="text-[20px] text-slate-600 max-w-2xl mx-auto leading-[1.6]">
                Built for supply chain operations with end-to-end visibility and real-time optimization capabilities.
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
                  className="group bg-white rounded-2xl p-12 shadow-md border border-slate-200 hover:translate-y-[-8px] hover:shadow-xl hover:border-orange-500 transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-18 h-18 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`} style={{ width: '72px', height: '72px' }}>
                    <item.icon className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-[24px] font-bold text-slate-900 mb-4 leading-[1.4]">{item.title}</h3>
                  <p className="text-[17px] text-slate-600 leading-[1.6]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-[120px] bg-gradient-to-r from-orange-500 via-orange-600 to-purple-500 to-indigo-500 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 30%, #a855f7 70%, #6366f1 100%)' }}>
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="container mx-auto max-w-4xl px-[80px] text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[56px] font-bold text-white mb-6 leading-tight" style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.2)' }}>
                Build a supply chain that heals itself.
              </h2>
              <p className="text-[22px] text-white/95 mb-12 max-w-[700px] mx-auto leading-relaxed">
                Join leading supply chain organizations already using AI Mill to create autonomous, resilient networks.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 px-12 py-5 text-lg font-bold hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all rounded-xl"
                  asChild
                >
                  <Link to="/contact">
                    Transform Your Supply Chain
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/50 text-white px-10 py-5 text-lg font-semibold hover:bg-white/20 hover:border-white backdrop-blur-sm rounded-xl"
                  asChild
                >
                  <Link to="/solutions">View Case Studies →</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SupplyChain;