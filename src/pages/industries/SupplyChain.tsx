import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  ArrowRight, TrendingDown, Clock, Zap, BarChart, 
  Truck, Activity, Plug, Eye, AlertTriangle, 
  DollarSign, Brain, Network, Award, TrendingUp, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SupplyChain = () => {
  const challenges = [
    { icon: TrendingDown, text: "Inaccurate demand forecasts leading to stockouts or excess inventory", gradient: "from-red-500 to-red-600", bgColor: "rgba(239, 68, 68, 0.15)" },
    { icon: DollarSign, text: "Capital locked in slow-moving inventory", gradient: "from-amber-500 to-amber-600", bgColor: "rgba(245, 158, 11, 0.15)" },
    { icon: Clock, text: "Long planning cycles unable to react to disruptions", gradient: "from-orange-500 to-orange-600", bgColor: "rgba(249, 115, 22, 0.15)" },
    { icon: Eye, text: "Limited end-to-end visibility across suppliers, warehouses, and channels", gradient: "from-sky-500 to-sky-600", bgColor: "rgba(14, 165, 233, 0.15)" },
    { icon: BarChart, text: "Human planners overwhelmed by data complexity", gradient: "from-purple-500 to-purple-600", bgColor: "rgba(168, 85, 247, 0.15)" },
    { icon: AlertTriangle, text: "Direct impact on service levels, margins, and working capital efficiency", gradient: "from-red-500 to-red-600", bgColor: "rgba(239, 68, 68, 0.15)" },
  ];

  const solutions = [
    {
      number: "01",
      title: "AI-Powered Demand Forecasting Intelligence",
      challenge: "Most demand forecasts rely on historical averages and static assumptions, failing during promotions, seasonality shifts, or market volatility.",
      solution: "We develop advanced forecasting models using time-series analysis, machine learning, and external demand signals.",
      howItWorks: [
        { icon: Brain, text: "Forecast agents continuously monitor demand patterns" },
        { icon: Activity, text: "Agents detect bias, anomalies, and demand shifts" },
        { icon: Zap, text: "Models automatically retrain without human intervention" },
      ],
      metrics: [
        { value: "20-40% ↑", label: "Forecast Accuracy", color: "#38bdf8", border: "#38bdf8" },
        { value: "↓ Bias", label: "Reduced Forecast Error", color: "#fb923c", border: "#fb923c" },
        { value: "Better Alignment", label: "Demand-Supply Match", color: "#a78bfa", border: "#a78bfa" },
      ],
      badgeGradient: "from-[#f97316] to-[#fb923c]",
      bg: "bg-slate-950"
    },
    {
      number: "02",
      title: "Autonomous Inventory Optimization & Replenishment",
      challenge: "Overstocking increases holding costs, while understocking leads to lost sales and customer dissatisfaction.",
      solution: "We implement probabilistic inventory models that calculate optimal safety stock and reorder points.",
      howItWorks: [
        { icon: Brain, text: "Inventory agents recommend optimal replenishment quantities" },
        { icon: Activity, text: "Redistribution agents rebalance stock across locations" },
        { icon: Zap, text: "Exception agents respond to supply disruptions automatically" },
      ],
      metrics: [
        { value: "25-35% ↓", label: "Inventory Holding Costs", color: "#34d399", border: "#34d399" },
        { value: "30% ↓", label: "Fewer Stockouts", color: "#fb923c", border: "#fb923c" },
        { value: "↑ Turns", label: "Improved Inventory Velocity", color: "#38bdf8", border: "#38bdf8" },
      ],
      badgeGradient: "from-[#0ea5e9] to-[#38bdf8]",
      bg: "bg-slate-900"
    },
    {
      number: "03",
      title: "End-to-End Supply Chain Visibility & Control Tower",
      challenge: "Decisions are made in silos with limited real-time visibility.",
      solution: "We build AI-powered control towers aggregating data across suppliers, warehouses, transportation, and sales.",
      howItWorks: [
        { icon: Brain, text: "Monitoring agents detect risks and delays" },
        { icon: Activity, text: "Decision agents recommend corrective actions" },
        { icon: Zap, text: "Scenario agents simulate outcomes before execution" },
      ],
      metrics: [
        { value: "Faster Response", label: "To Disruptions", color: "#f87171", border: "#f87171" },
        { value: "↓ Cycle Time", label: "Reduced Planning Time", color: "#38bdf8", border: "#38bdf8" },
        { value: "↑ Service", label: "Improved Levels", color: "#34d399", border: "#34d399" },
      ],
      badgeGradient: "from-[#a855f7] to-[#c084fc]",
      bg: "bg-slate-950"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300">
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-[#020617]">
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="container mx-auto max-w-[1400px] px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center relative z-10 py-20">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-widest uppercase">
                  FROM FRAGILE SUPPLY CHAINS TO SELF-HEALING NETWORKS
                </span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center border border-orange-500/30">
                  <Truck className="w-6 h-6 text-orange-400" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-[64px] font-extrabold leading-[1.1] text-white mb-8 tracking-tight"
              >
                Supply Chain &<br />
                Distribution AI<br />
                Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl lg:text-[24px] text-slate-300 leading-relaxed mb-6 max-w-[600px]"
              >
                Optimize your supply chain with AI that predicts demand, manages inventory, optimizes logistics, and mitigates risks — reducing costs by up to 35% while improving service levels.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-slate-400 leading-relaxed mb-12 max-w-[580px]"
              >
                AI Mill enables supply chain leaders to move beyond reactive planning and manual processes by deploying Data Science and Agentic AI systems that continuously forecast demand, optimize inventory, and coordinate logistics — autonomously and in real time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Button className="h-[56px] px-8 text-lg font-semibold bg-gradient-to-br from-orange-500 via-orange-600 to-purple-600 text-white rounded-xl shadow-xl shadow-orange-500/20 hover:scale-105 transition-all" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Transform Your Supply Chain <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Visual: Supply Chain Dashboard */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.3 }} 
              className="relative"
            >
              <div className="bg-slate-900/80 backdrop-blur-xl rounded-[28px] p-10 border border-slate-800/50 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/60 animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full">
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Live Network</span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: BarChart, label: "Forecast Accuracy", value: "94%", color: "text-sky-400", bg: "bg-sky-500/10" },
                    { icon: TrendingUp, label: "Inventory Turns", value: "8.2x", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                    { icon: Truck, label: "OTIF Rate", value: "97%", color: "text-orange-400", bg: "bg-orange-500/10" },
                    { icon: Activity, label: "Fill Rate", value: "99%", color: "text-purple-400", bg: "bg-purple-500/10" },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className={`${item.bg} rounded-xl p-5 border border-slate-800/50 hover:border-slate-700/50 transition-all`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center border border-slate-700/50`}>
                          <item.icon className={`w-4 h-4 ${item.color}`} />
                        </div>
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{item.label}</span>
                      </div>
                      <div className={`text-2xl font-extrabold ${item.color}`}>{item.value}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Network Status */}
                <div className="mt-6 pt-6 border-t border-slate-800/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Network Status</span>
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map(j => (
                        <div key={j} className="w-8 h-8 rounded-full border-2 border-slate-800 bg-gradient-to-br from-orange-500/20 to-purple-500/20" />
                      ))}
                    </div>
                  </div>
                  <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "94%" }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      className="h-full bg-gradient-to-r from-orange-500 to-purple-500 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-slate-500">Operational Efficiency</span>
                    <span className="text-xs font-bold text-orange-400">94%</span>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl -z-10"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10"
              />
            </motion.div>
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

        {/* SOLUTIONS SECTIONS */}
        {solutions.map((sol, idx) => (
          <section key={idx} className={`py-[120px] ${sol.bg}`}>
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 px-6 lg:px-16 relative">
              <div className={`w-[120px] h-[120px] rounded-full flex-shrink-0 lg:sticky lg:top-[100px] self-start flex items-center justify-center bg-gradient-to-br ${sol.badgeGradient} shadow-lg shadow-orange-500/20`}>
                <span className="text-[56px] font-extrabold text-white">{sol.number}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl lg:text-[40px] font-bold text-white mb-10">{sol.title}</h3>
                
                <div className="bg-red-950/30 border-l-4 border-orange-500 p-8 rounded-r-lg mb-6">
                  <p className="text-[12px] font-bold text-orange-400 tracking-widest mb-3 uppercase">THE CHALLENGE</p>
                  <p className="text-lg text-slate-300 leading-relaxed">{sol.challenge}</p>
                </div>

                <div className="bg-blue-950/30 border-l-4 border-sky-500 p-8 rounded-r-lg mb-8">
                  <p className="text-[12px] font-bold text-sky-400 tracking-widest mb-3 uppercase">AI MILL SOLUTION</p>
                  <p className="text-lg text-slate-300 leading-relaxed">{sol.solution}</p>
                </div>

                {/* How Agentic AI Works */}
                <div className="bg-amber-950/30 border border-amber-500/30 p-10 rounded-xl mb-10">
                  <h4 className="text-[16px] font-bold text-amber-400 tracking-widest mb-6">HOW AGENTIC AI WORKS</h4>
                  <div className="space-y-5">
                    {sol.howItWorks.map((step, sIdx) => (
                      <div key={sIdx} className="flex gap-4 items-center">
                        <step.icon className="w-6 h-6 text-amber-400 flex-shrink-0" />
                        <p className="text-lg font-medium text-slate-300">{step.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {sol.metrics.map((m, mIdx) => (
                    <div key={mIdx} style={{ borderTop: `3px solid ${m.border}` }} className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-800/50 text-center hover:-translate-y-2 transition-transform">
                      <div className="text-3xl font-extrabold mb-2" style={{ color: m.color }}>{m.value}</div>
                      <div className="text-base font-medium text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ROI METRICS SECTION */}
        <section className="py-[100px] bg-slate-900">
          <div className="container mx-auto max-w-4xl px-6">
            <h2 className="text-4xl lg:text-[44px] font-bold text-white text-center mb-16">ROI & Measurable Outcomes</h2>
            <div className="bg-slate-950/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl overflow-hidden shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-600 via-orange-500 to-purple-600 text-white">
                    <th className="p-6 text-[14px] uppercase tracking-wider font-bold">Metric</th>
                    <th className="p-6 text-[14px] uppercase tracking-wider font-bold">Improvement</th>
                  </tr>
                </thead>
                <tbody className="text-lg">
                  {[
                    { m: "Forecast Accuracy", v: "↑ 20–40%", c: "text-sky-400" },
                    { m: "Inventory Costs", v: "↓ 25–35%", c: "text-emerald-400" },
                    { m: "Stockouts", v: "↓ ~30%", c: "text-orange-400" },
                    { m: "Working Capital", v: "10–25% released", c: "text-purple-400" },
                  ].map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-slate-900/30' : 'bg-slate-950/30'}>
                      <td className="p-6 font-medium text-slate-300">{row.m}</td>
                      <td className={`p-6 font-bold text-2xl lg:text-[28px] ${row.c}`}>{row.v}</td>
                    </tr>
                  ))}
                  <tr className="bg-gradient-to-r from-amber-950/50 to-amber-900/30 border-2 border-amber-500/50">
                    <td className="p-6 font-bold text-white flex items-center gap-2">
                      <Award className="text-amber-400" /> Payback Period
                    </td>
                    <td className="p-6 font-bold text-2xl lg:text-[28px] text-amber-400">3–6 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* WHY AI MILL SECTION */}
        <section className="py-[100px] bg-slate-950">
          <h2 className="text-4xl lg:text-[44px] font-bold text-white text-center mb-20">Why AI Mill for Supply Chain?</h2>
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 px-6 lg:px-10">
            {[
              { icon: Zap, title: "Built for Volatility", desc: "Designed for real-world disruptions, market fluctuations, and supply chain uncertainty.", grad: "from-orange-500 to-orange-600" },
              { icon: Activity, title: "Autonomous Planning", desc: "Plans, acts, and learns independently without manual intervention or delays.", grad: "from-sky-500 to-sky-600" },
              { icon: Plug, title: "Seamless Integration", desc: "Works with existing ERP, WMS, TMS, and planning systems out of the box.", grad: "from-purple-500 to-purple-600" },
              { icon: TrendingUp, title: "Rapid ROI", desc: "Measurable KPIs and improvements within 3-6 months of deployment.", grad: "from-emerald-500 to-emerald-600" }
            ].map((feature, fIdx) => (
              <motion.div 
                key={fIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: fIdx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-slate-900/50 backdrop-blur-sm p-12 rounded-2xl border border-slate-800/50 hover:border-orange-500/50 hover:shadow-xl transition-all"
              >
                <div className={`w-[72px] h-[72px] rounded-full flex items-center justify-center bg-gradient-to-br ${feature.grad} shadow-lg mb-6`}>
                  <feature.icon className="text-white w-9 h-9" />
                </div>
                <h3 className="text-2xl lg:text-[24px] font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-lg text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-[120px] bg-gradient-to-br from-orange-600 via-orange-500 to-purple-600 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h80v80H10z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")` }} />
          <div className="relative z-10 px-6 lg:px-10">
            <h2 className="text-4xl lg:text-[56px] font-extrabold text-white mb-6 drop-shadow-lg">Build a supply chain that heals itself.</h2>
            <p className="text-xl lg:text-[22px] text-white/95 max-w-[700px] mx-auto mb-12 leading-relaxed">
              Join leading supply chain organizations already using AI Mill to create autonomous, resilient networks.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Button className="h-[64px] px-12 bg-white text-orange-600 text-lg font-bold rounded-xl shadow-xl hover:scale-105 transition-transform" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Transform Your Supply Chain <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" className="h-[64px] px-10 border-2 border-white/50 bg-transparent text-white text-lg font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all" asChild>
                <Link to="/solutions">
                  View Case Studies →
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SupplyChain;
