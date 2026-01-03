import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight, TrendingDown, Clock, Database, Users, AlertCircle,
  Target, TrendingUp, Shield, Zap, BarChart, CheckCircle,
  CreditCard, Wallet, FileText, ArrowUp, ArrowDown, Brain,
  Activity, TrendingDown as TrendingDownIcon, Factory, Package,
  Truck, HardHat, FileBarChart, Settings, Bot, Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Manufacturing = () => {
  const solutions = [
    {
      number: "01",
      title: "Demand Intelligence & Autonomous Planning",
      challenge: "Volatile demand patterns drive stockouts, excess inventory, and margin erosion across product lines.",
      solution: "AI Mill combines predictive analytics with agentic AI to forecast demand scenarios and continuously rebalance plans with automated corrective actions.",
      howItWorks: [
        { icon: Brain, text: "Demand Sensing Agents analyze sales, market signals, and external factors" },
        { icon: Activity, text: "Scenario Planning Agents generate probabilistic demand scenarios" },
        { icon: Zap, text: "Inventory Optimization Agents rebalance stock across warehouses automatically" },
        { icon: CheckCircle, text: "Order Fulfillment Agents prioritize and execute customer orders optimally" },
      ],
      metrics: [
        { value: "25%", label: "Forecast Accuracy ↑", color: "text-emerald-400", border: "#10b981" },
        { value: "20%", label: "Inventory ↓", color: "text-cyan-400", border: "#06b6d4" },
        { value: "35%", label: "Service Level ↑", color: "text-purple-400", border: "#a855f7" },
      ],
      badgeGradient: "from-emerald-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Production Optimization & Predictive Maintenance",
      challenge: "Production inefficiencies and unplanned downtime reduce throughput, asset utilization, and service levels.",
      solution: "Advanced analytics identify optimization opportunities while autonomous agents detect deviations and adjust schedules in real-time.",
      howItWorks: [
        { icon: Brain, text: "Capacity Planning Agents optimize schedules across multiple plants" },
        { icon: Activity, text: "Predictive Maintenance Agents forecast equipment failures and schedule repairs" },
        { icon: Zap, text: "Production Adjustment Agents autonomously adjust lines for demand changes" },
        { icon: CheckCircle, text: "Quality Control Agents monitor output and trigger corrections" },
      ],
      metrics: [
        { value: "30%", label: "Downtime ↓", color: "text-emerald-400", border: "#10b981" },
        { value: "18%", label: "Throughput ↑", color: "text-cyan-400", border: "#06b6d4" },
        { value: "25%", label: "Maintenance Cost ↓", color: "text-purple-400", border: "#a855f7" },
      ],
      badgeGradient: "from-cyan-500 to-blue-500",
    },
    {
      number: "03",
      title: "Supply Chain Resilience & Risk Management",
      challenge: "Global supply chain disruptions create delays, expedited costs, and revenue risk across networks.",
      solution: "AI Mill scores suppliers, predicts disruptions, and autonomously reroutes materials to maintain flow.",
      howItWorks: [
        { icon: Brain, text: "Supplier Risk Agents continuously score supplier reliability" },
        { icon: Activity, text: "Disruption Prediction Agents forecast supply chain bottlenecks" },
        { icon: Zap, text: "Routing Optimization Agents reroute shipments in real-time" },
        { icon: CheckCircle, text: "Inventory Reallocation Agents shift stock to mitigate shortages" },
      ],
      metrics: [
        { value: "40%", label: "On-Time Delivery ↑", color: "text-emerald-400", border: "#10b981" },
        { value: "22%", label: "Expedite Costs ↓", color: "text-cyan-400", border: "#06b6d4" },
        { value: "28%", label: "Risk Exposure ↓", color: "text-purple-400", border: "#a855f7" },
      ],
      badgeGradient: "from-blue-500 to-indigo-500",
    },
    {
      number: "04",
      title: "Quality Intelligence & Process Control",
      challenge: "Quality variability and scrap impact yield, compliance requirements, and customer trust.",
      solution: "Data science identifies defect patterns while agentic AI enforces real-time corrections and learns from outcomes.",
      howItWorks: [
        { icon: Brain, text: "Defect Pattern Agents identify root causes across production lines" },
        { icon: Activity, text: "Process Adjustment Agents fine-tune parameters automatically" },
        { icon: Zap, text: "Quality Assurance Agents validate output against specifications" },
        { icon: CheckCircle, text: "Continuous Learning Agents improve predictions from outcomes" },
      ],
      metrics: [
        { value: "20%", label: "Scrap Reduction", color: "text-emerald-400", border: "#10b981" },
        { value: "95%", label: "First Pass Yield ↑", color: "text-cyan-400", border: "#06b6d4" },
        { value: "15%", label: "Quality Cost ↓", color: "text-purple-400", border: "#a855f7" },
      ],
      badgeGradient: "from-indigo-500 to-purple-500",
    },
  ];

  const challenges = [
    { icon: TrendingDown, text: "Demand volatility & forecast inaccuracy" },
    { icon: Clock, text: "Production inefficiencies & downtime" },
    { icon: AlertCircle, text: "Supply chain disruptions & risk exposure" },
    { icon: BarChart, text: "Quality variability & scrap rates" },
    { icon: Shield, text: "Slow, manual decision cycles" },
    { icon: TrendingDownIcon, text: "Rising operational costs & margin erosion" },
  ];

  const roiMetrics = [
    { metric: "Forecast Accuracy", improvement: "↑ 25%", trend: "up", color: "text-emerald-400" },
    { metric: "Inventory Levels", improvement: "↓ 20%", trend: "down", color: "text-cyan-400" },
    { metric: "Unplanned Downtime", improvement: "↓ 30%", trend: "down", color: "text-emerald-400" },
    { metric: "Operational Costs", improvement: "↓ 15%", trend: "down", color: "text-purple-400" },
    { metric: "Payback Period", improvement: "9 months", trend: "neutral", highlight: true, color: "text-amber-400" },
  ];

  const whyAIMill = [
    {
      icon: Factory,
      title: "Multi-Plant Intelligence",
      description: "Purpose-built for complex manufacturing data across global plant networks.",
    },
    {
      icon: FileBarChart,
      title: "Explainable Insights",
      description: "Transparent analytics executives can trust and act upon confidently.",
    },
    {
      icon: Bot,
      title: "Autonomous Execution",
      description: "Continuous decisioning that executes beyond static dashboards.",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Fast time-to-value without platform sprawl or integration complexity.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-[#020617]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center py-20 lg:py-32">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-start"
              >
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-6">
                  Autonomous Manufacturing Intelligence
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[0.95] tracking-tight text-white mb-8">
                  From <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Advanced Analytics</span> <br />
                  to <br />
                  Autonomous Manufacturing
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed max-w-[540px] mb-12">
                  Manufacturers face rising cost pressure, demand volatility, and operational risk. AI Mill enables lower risk and scalable execution using Data Science & Analytics + Agentic AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl h-14 px-8 shadow-xl shadow-emerald-500/20" asChild>
                    <Link to="/contact" className="flex items-center gap-2">
                      Talk to Manufacturing Experts <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-xl h-14 px-8" asChild>
                    <Link to="/solutions">View Platform</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Hero Dashboard Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-slate-900/80 backdrop-blur-xl rounded-[32px] p-10 border border-slate-800/50 shadow-2xl">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                    </div>
                    <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-emerald-400 uppercase tracking-widest">
                      Manufacturing Live
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: TrendingUp, label: "Demand Signal", value: "92.8%", color: "text-emerald-400" },
                      { icon: Factory, label: "Plant Uptime", value: "97.2%", color: "text-cyan-400" },
                      { icon: Truck, label: "OTIF", value: "94%", color: "text-indigo-400" },
                      { icon: Package, label: "Inventory Turns", value: "8.4x", color: "text-orange-400" },
                      { icon: HardHat, label: "Safety Score", value: "99.1%", color: "text-emerald-400" },
                      { icon: Settings, label: "OEE", value: "89%", color: "text-purple-400" },
                    ].map((item, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                        <item.icon className={`w-5 h-5 ${item.color} mb-3`} />
                        <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">{item.label}</div>
                        <div className={`text-lg font-bold ${item.color}`}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-8 border-t border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map(j => (
                          <div key={j} className="w-8 h-8 rounded-full border-2 border-slate-700 bg-slate-800" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-slate-500">Plant Network</span>
                    </div>
                    <div className="h-6 w-24 bg-slate-800 rounded-md animate-pulse" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-24 lg:py-32 px-6 lg:px-20 bg-slate-950">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Key Business Problems</h2>
              <p className="text-xl text-slate-400 max-w-[900px] mx-auto">
                Global supply chains, volatile demand, and asset-heavy operations demand faster, autonomous decisions.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800/50 hover:border-emerald-500/50 hover:scale-[1.02] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                    <challenge.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed">{challenge.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-24 lg:py-32 px-6 lg:px-20 bg-[#020617]">
          <div className="container mx-auto max-w-7xl">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-24 last:mb-0"
              >
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                  <div className="flex-shrink-0 lg:sticky lg:top-[100px]">
                    <div className={`w-[120px] h-[120px] rounded-full bg-gradient-to-br ${solution.badgeGradient} flex items-center justify-center shadow-lg shadow-emerald-500/20`}>
                      <span className="text-5xl font-extrabold text-white">{solution.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold text-white mb-10">{solution.title}</h3>
                    
                    <div className="bg-red-950/30 border-l-4 border-orange-500 p-8 rounded-r-lg mb-6">
                      <p className="text-xs font-bold text-orange-400 tracking-widest mb-3 uppercase">THE CHALLENGE</p>
                      <p className="text-lg text-slate-300 leading-relaxed">{solution.challenge}</p>
                    </div>

                    <div className="bg-blue-950/30 border-l-4 border-cyan-500 p-8 rounded-r-lg mb-8">
                      <p className="text-xs font-bold text-cyan-400 tracking-widest mb-3 uppercase">AI MILL SOLUTION</p>
                      <p className="text-lg text-slate-300 leading-relaxed">{solution.solution}</p>
                    </div>

                    <div className="bg-amber-950/30 border border-amber-500/30 p-10 rounded-xl mb-10">
                      <h4 className="text-base font-bold text-amber-400 tracking-widest mb-6 uppercase">HOW AGENTIC AI WORKS</h4>
                      <div className="space-y-5">
                        {solution.howItWorks.map((step, sIdx) => (
                          <div key={sIdx} className="flex gap-4 items-center">
                            <step.icon className="w-6 h-6 text-amber-400 flex-shrink-0" />
                            <p className="text-lg font-medium text-slate-300">{step.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {solution.metrics.map((m, mIdx) => (
                        <div key={mIdx} style={{ borderTop: `3px solid ${m.border}` }} className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-800/50 text-center hover:-translate-y-2 transition-transform">
                          <div className={`text-3xl font-extrabold mb-2 ${m.color}`}>{m.value}</div>
                          <div className="text-base font-medium text-slate-400">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ROI Metrics Section */}
        <section className="py-24 lg:py-32 px-6 bg-slate-900">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">ROI & Measurable Outcomes</h2>
            <div className="bg-slate-950/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl overflow-hidden shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 text-white">
                    <th className="p-6 text-sm uppercase tracking-wider font-bold">Metric</th>
                    <th className="p-6 text-sm uppercase tracking-wider font-bold">Improvement</th>
                  </tr>
                </thead>
                <tbody className="text-lg">
                  {roiMetrics.map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-slate-900/30' : 'bg-slate-950/30'}>
                      <td className="p-6 font-medium text-slate-300">{row.metric}</td>
                      <td className={`p-6 font-bold text-2xl lg:text-3xl ${row.color}`}>
                        {row.trend === "up" && <ArrowUp className="inline w-5 h-5 mr-2" />}
                        {row.trend === "down" && <ArrowDown className="inline w-5 h-5 mr-2" />}
                        {row.improvement}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gradient-to-r from-amber-950/50 to-amber-900/30 border-2 border-amber-500/50">
                    <td className="p-6 font-bold text-white flex items-center gap-2">
                      <Award className="text-amber-400" /> {roiMetrics[4].metric}
                    </td>
                    <td className={`p-6 font-bold text-2xl lg:text-3xl ${roiMetrics[4].color}`}>{roiMetrics[4].improvement}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why AI Mill Section */}
        <section className="py-24 lg:py-32 px-6 lg:px-20 bg-slate-950">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-20">Why AI Mill for Manufacturing?</h2>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyAIMill.map((feature, fIdx) => (
              <motion.div
                key={fIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: fIdx * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm p-12 rounded-2xl border border-slate-800/50 hover:border-emerald-500/50 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-lg text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 px-6 bg-gradient-to-br from-emerald-600 via-cyan-600 to-blue-600 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h80v80H10z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")` }} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
              Transform your manufacturing operations into an intelligent, self-optimizing ecosystem.
            </h2>
            <p className="text-xl lg:text-2xl text-white/95 max-w-[700px] mx-auto mb-12 leading-relaxed">
              Join leading manufacturers already using AI Mill to build smarter, more resilient factories.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Button size="lg" className="h-16 px-12 bg-white text-emerald-600 text-lg font-bold rounded-xl shadow-xl hover:scale-105 transition-transform" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Talk to Manufacturing AI Experts <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-10 border-2 border-white/50 bg-transparent text-white text-lg font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all" asChild>
                <Link to="/solutions">View Case Studies →</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Manufacturing;
