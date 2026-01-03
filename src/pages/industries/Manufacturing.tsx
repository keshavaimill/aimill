import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  ArrowRight, TrendingDown, Clock, Database, Users, AlertCircle,
  Target, TrendingUp, Shield, Zap, BarChart, CheckCircle,
  Factory, Settings, ArrowUp, ArrowDown, Activity, AlertTriangle,
  XCircle, BarChart2, Box, Package, Search, Network,
  Eye, DollarSign, Gauge
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Manufacturing = () => {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const challenges = [
    { icon: AlertTriangle, text: "Unexpected machine failures disrupting production", gradient: "from-red-500 to-red-600", bgColor: "bg-red-500/15" },
    { icon: XCircle, text: "Quality issues detected too late in the process", gradient: "from-orange-500 to-orange-600", bgColor: "bg-orange-500/15" },
    { icon: BarChart2, text: "Inefficient production planning and capacity utilization", gradient: "from-cyan-500 to-cyan-600", bgColor: "bg-cyan-500/15" },
    { icon: DollarSign, text: "High maintenance costs driven by calendar-based servicing", gradient: "from-amber-500 to-amber-600", bgColor: "bg-amber-500/15" },
    { icon: Eye, text: "Limited real-time visibility across plants and lines", gradient: "from-purple-500 to-purple-600", bgColor: "bg-purple-500/15" },
    { icon: TrendingDown, text: "Impact on OEE, margins, delivery commitments, and customer trust", gradient: "from-red-500 to-red-600", bgColor: "bg-red-500/15" },
  ];

  const solutionIcons = [Activity, AlertCircle, Search];

  const solutions = [
    {
      number: "01",
      title: "Predictive Maintenance & Asset Intelligence",
      challenge: "Most manufacturers rely on reactive or preventive maintenance, leading to either costly breakdowns or unnecessary servicing.",
      solution: "We build machine-level predictive models using historical sensor data, vibration signals, temperature, and operational logs.",
      howItWorks: [
        { agent: "Autonomous monitoring agents", action: "continuously analyze equipment health" },
        { agent: "Failure-prediction agents", action: "trigger maintenance actions before breakdowns" },
        { agent: "Root-cause agents", action: "learn which conditions lead to failures" },
      ],
      metrics: [
        { value: "30-50% ↓", label: "Unplanned Downtime", color: "text-green-600", borderColor: "border-t-green-500" },
        { value: "20-35% ↓", label: "Maintenance Cost Savings", color: "text-cyan-600", borderColor: "border-t-cyan-500" },
        { value: "Extended Life", label: "Asset Lifespan Improvement", color: "text-purple-600", borderColor: "border-t-purple-500" },
      ],
      badgeGradient: "from-red-500 to-red-600",
    },
    {
      number: "02",
      title: "AI-Driven Quality Inspection & Defect Prevention",
      challenge: "Manual inspections are slow, inconsistent, and miss defects until it's too late.",
      solution: "Computer Vision models inspect products in real time across assembly lines.",
      howItWorks: [
        { agent: "Vision agents", action: "detect surface defects, misalignment, and anomalies" },
        { agent: "Decision agents", action: "auto-flag defective batches" },
        { agent: "Learning agents", action: "improve detection accuracy continuously" },
      ],
      metrics: [
        { value: "Up to 90%", label: "Defect Detection Accuracy", color: "text-green-600", borderColor: "border-t-green-500" },
        { value: "25-40% ↓", label: "Scrap & Rework Reduction", color: "text-orange-600", borderColor: "border-t-orange-500" },
        { value: "↑ Satisfaction", label: "Improved Customer Quality", color: "text-cyan-600", borderColor: "border-t-cyan-500" },
      ],
      badgeGradient: "from-cyan-500 to-cyan-600",
    },
    {
      number: "03",
      title: "Autonomous Production Planning & Scheduling",
      challenge: "Static production schedules fail to adapt to real-world disruptions like machine failures or demand fluctuations.",
      solution: "We deploy optimization and forecasting models that continuously align demand, capacity, and constraints.",
      howItWorks: [
        { agent: "Scheduling agents", action: "dynamically replan production" },
        { agent: "Capacity agents", action: "rebalance workloads across lines" },
        { agent: "Exception agents", action: "resolve conflicts autonomously" },
      ],
      metrics: [
        { value: "15-25% ↑", label: "Production Throughput", color: "text-green-600", borderColor: "border-t-green-500" },
        { value: "↓ Idle Time", label: "Reduced Equipment Downtime", color: "text-cyan-600", borderColor: "border-t-cyan-500" },
        { value: "Faster Fulfillment", label: "Improved Delivery Times", color: "text-purple-600", borderColor: "border-t-purple-500" },
      ],
      badgeGradient: "from-slate-500 to-slate-600",
    },
  ];

  const roiMetrics = [
    { metric: "Unplanned Downtime", improvement: "↓ 30–50%", trend: "down", color: "text-green-600" },
    { metric: "Maintenance Cost", improvement: "↓ 20–35%", trend: "down", color: "text-cyan-600" },
    { metric: "Production Throughput", improvement: "↑ 15–25%", trend: "up", color: "text-green-600" },
    { metric: "Quality Defects", improvement: "↓ 25–40%", trend: "down", color: "text-orange-600" },
    { metric: "Payback Period", improvement: "3–6 months", trend: "neutral", highlight: true, color: "text-amber-600" },
  ];

  const whyAIMill = [
    {
      icon: Database,
      title: "Real Factory Data",
      description: "Built for actual production environments, not lab models. Handles messy, real-world manufacturing data.",
      gradient: "from-slate-500 to-slate-600",
    },
    {
      icon: Zap,
      title: "Autonomous Action",
      description: "Acts without waiting for human approval. Responds to issues in milliseconds, not hours.",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: Network,
      title: "Scalable Deployment",
      description: "Works across plants and geographies. Deploy once, scale everywhere with consistent results.",
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      icon: TrendingUp,
      title: "Fast ROI",
      description: "Measurable improvements within 3-6 months. Track savings, uptime, and quality in real-time.",
      gradient: "from-green-500 to-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-neutral-50 to-neutral-200">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-[0.03]" style={{
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
                  <span className="text-[12px] uppercase tracking-[2px] text-slate-500 font-semibold">
                    FROM REACTIVE OPERATIONS TO AUTONOMOUS MANUFACTURING
                  </span>
                </motion.div>
                
                {/* Optional Icon */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mb-8"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-500 to-cyan-500 flex items-center justify-center" style={{ background: 'rgba(100, 116, 139, 0.1)' }}>
                    <Factory className="w-6 h-6 text-slate-500" />
                  </div>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[64px] font-extrabold leading-[1.1] text-zinc-900 mb-8"
                >
                  Manufacturing Industry<br />AI Solutions
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-[24px] font-normal leading-[1.5] text-zinc-600 max-w-[600px] mb-6"
                >
                  Manufacturing leaders are under pressure to produce more with less — less downtime, less waste, and less uncertainty.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-[18px] leading-[1.7] text-zinc-500 max-w-[580px] mb-12"
                >
                  AI Mill enables manufacturers to transform traditional plants into self-optimizing, intelligent factories using advanced Data Science and Agentic AI systems that predict, decide, and act in real time.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-slate-500 via-cyan-500 to-indigo-500 hover:from-slate-600 hover:to-indigo-600 text-white px-8 h-[56px] text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 rounded-xl"
                    asChild
                  >
                    <Link to="/contact">
                      Transform Your Manufacturing
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Visual - Factory Monitoring Dashboard */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[500px]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white rounded-3xl p-12 flex flex-col justify-between border-2 border-zinc-200 shadow-2xl">
                  {/* Top Metrics Row */}
                  <div className="flex gap-3 mb-6">
                    {[
                      { icon: Activity, label: "OEE", value: "87%", color: "text-green-600", iconColor: "text-green-600" },
                      { icon: Settings, label: "Uptime", value: "94%", color: "text-slate-500", iconColor: "text-slate-500" },
                      { icon: AlertCircle, label: "Alerts", value: "2", color: "text-red-600", iconColor: "text-red-600" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        className="bg-white rounded-lg p-4 flex-1 border border-zinc-200 shadow-sm"
                      >
                        <item.icon className={`w-4 h-4 ${item.iconColor} mb-2`} />
                        <div className="text-[10px] text-zinc-500 mb-1">{item.label}</div>
                        <div className={`text-xl font-bold ${item.color}`}>{item.value}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Main Visualization Area */}
                  <div className="bg-gradient-to-b from-slate-50 to-white rounded-xl p-8 border border-zinc-200 flex-1 flex items-center justify-center mb-6">
                    <div className="flex gap-6 items-center">
                      {[
                        { label: "Line 1", status: "Active", color: "bg-green-500" },
                        { label: "Line 2", status: "Running", color: "bg-cyan-500" },
                        { label: "Line 3", status: "Running", color: "bg-cyan-500" },
                        { label: "Line 4", status: "Running", color: "bg-cyan-500" },
                      ].map((line, i) => (
                        <motion.div
                          key={i}
                          animate={line.status === "Active" ? { scale: [1, 1.05, 1] } : {}}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                          className="flex flex-col items-center"
                        >
                          <div className={`w-16 h-16 ${line.color} rounded-full flex items-center justify-center mb-2 shadow-lg`}>
                            <Box className="w-8 h-8 text-white" />
                          </div>
                          <div className="text-xs text-zinc-500 font-medium">{line.label}</div>
                          <div className="text-xs text-zinc-400">{line.status}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Status Row */}
                  <div className="flex gap-3 mt-6">
                    {[
                      { icon: CheckCircle, label: "Quality", value: "Pass", color: "text-green-600", iconColor: "text-green-600" },
                      { icon: Zap, label: "Output", value: "1.2K/hr", color: "text-cyan-600", iconColor: "text-cyan-600" },
                      { icon: TrendingUp, label: "Efficiency", value: "+15%", color: "text-slate-500", iconColor: "text-slate-500" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                        className="bg-white rounded-lg p-4 flex-1 border border-zinc-200 shadow-sm"
                      >
                        <item.icon className={`w-4 h-4 ${item.iconColor} mb-2`} />
                        <div className="text-[10px] text-zinc-500 mb-1">{item.label}</div>
                        <div className={`text-base font-semibold ${item.color}`}>{item.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="relative py-[120px] bg-gradient-to-b from-zinc-800 to-zinc-900 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
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
              <h2 className="text-[48px] font-bold text-neutral-50 mb-6 leading-[1.2]">Industry Challenges</h2>
              <p className="text-[20px] text-zinc-300 max-w-[900px] mx-auto leading-[1.6]">
                Manufacturing operations generate massive volumes of machine, sensor, and production data — yet most of it remains underutilized. Decision-making is often reactive, siloed, and dependent on manual intervention.
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
                  className="group bg-neutral-50/5 backdrop-blur-md rounded-2xl p-10 border border-neutral-50/8 hover:bg-neutral-50/8 hover:border-slate-500/30 hover:translate-y-[-8px] hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${challenge.gradient} ${challenge.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <challenge.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[20px] font-medium text-neutral-50 leading-[1.5]">{challenge.text}</p>
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
                className={`mb-[80px] last:mb-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50'} rounded-2xl p-[60px]`}
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
                    <h3 className="text-[40px] font-bold text-zinc-900 mb-10 leading-[1.2]">{solution.title}</h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {/* Challenge Box */}
                      <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-red-600 font-bold mb-3 block">
                          THE CHALLENGE
                        </span>
                        <p className="text-[18px] text-zinc-900 leading-[1.6]">{solution.challenge}</p>
                      </div>

                      {/* Solution Box */}
                      <div className={`border-l-4 p-8 rounded-lg shadow-sm hover:shadow-md transition-all ${
                        idx === 0 ? "bg-blue-50 border-cyan-500" :
                        idx === 1 ? "bg-cyan-50 border-cyan-500" :
                        "bg-sky-50 border-sky-500"
                      }`}>
                        <span className={`text-xs uppercase tracking-wider font-bold mb-3 block ${
                          idx === 0 ? "text-cyan-600" :
                          idx === 1 ? "text-cyan-600" :
                          "text-sky-600"
                        }`}>
                          AI MILL SOLUTION
                        </span>
                        <p className="text-[18px] text-zinc-900 leading-[1.6]">{solution.solution}</p>
                      </div>
                    </div>

                    {/* How Agentic AI Works */}
                    <div className={`mb-10 p-10 rounded-xl border ${
                      idx === 0 ? "bg-purple-50 border-purple-300" :
                      idx === 1 ? "bg-green-50 border-green-300" :
                      "bg-yellow-50 border-yellow-300"
                    }`}>
                      <h4 className={`text-base font-bold uppercase tracking-wider mb-6 ${
                        idx === 0 ? "text-purple-600" :
                        idx === 1 ? "text-green-700" :
                        "text-yellow-700"
                      }`}>HOW AGENTIC AI WORKS{idx === 0 ? " HERE" : ""}</h4>
                      <div className="space-y-5">
                        {solution.howItWorks.map((item, itemIdx) => {
                          const Icon = solutionIcons[itemIdx % solutionIcons.length];
                          const iconColor = idx === 0 ? "bg-purple-500" : idx === 1 ? "bg-green-600" : "bg-yellow-500";
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
                                <span className="font-semibold text-[17px] text-zinc-900">{item.agent}</span>
                                <span className="text-[17px] text-zinc-900"> {item.action}</span>
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
                          className="bg-white rounded-xl p-8 shadow-md border border-zinc-200 hover:shadow-xl hover:translate-y-[-8px] hover:border-slate-500 transition-all text-center"
                        >
                          <div className={`border-t-[3px] ${metric.borderColor} pt-6`}>
                            <div className={`text-[48px] font-bold ${metric.color} mb-3`}>
                              {metric.value}
                            </div>
                            <p className="text-base font-medium text-zinc-600 leading-[1.4]">{metric.label}</p>
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
              <h2 className="text-[44px] font-bold text-zinc-900 mb-4 leading-[1.2]">ROI & Measurable Outcomes</h2>
              <p className="text-[20px] text-zinc-600 max-w-2xl mx-auto leading-[1.6]">
                Measurable improvements across key manufacturing metrics
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-zinc-200"
            >
              <table className="w-full border-collapse">
                <thead className="bg-gradient-to-r from-slate-500 via-slate-600 to-cyan-500">
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
                        idx % 2 === 0 ? "bg-white" : "bg-neutral-50"
                      } ${row.highlight ? "bg-gradient-to-r from-amber-50 to-amber-100 border-l-4 border-amber-500" : ""} hover:bg-slate-100 hover:scale-[1.01] transition-all`}
                    >
                      <td className="px-8 py-6 font-semibold text-[18px] text-zinc-900">{row.metric}</td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-3">
                          {row.trend === "up" && <ArrowUp className={`w-5 h-5 ${row.color}`} />}
                          {row.trend === "down" && <ArrowDown className={`w-5 h-5 ${row.color}`} />}
                          <span className={`text-[28px] font-bold ${row.color}`}>
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
        <section className="relative py-[100px] bg-neutral-50">
          <div className="container mx-auto max-w-[1200px] px-[80px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-[44px] font-bold text-zinc-900 mb-4 leading-[1.2]">Why AI Mill for Manufacturing?</h2>
              <p className="text-[20px] text-zinc-600 max-w-2xl mx-auto leading-[1.6]">
                Built for manufacturing with industrial-grade reliability and seamless system integration.
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
                  className="group bg-white rounded-2xl p-12 shadow-md border border-zinc-200 hover:translate-y-[-8px] hover:shadow-xl hover:border-slate-500 transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-18 h-18 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`} style={{ width: '72px', height: '72px' }}>
                    <item.icon className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-[24px] font-bold text-zinc-900 mb-4 leading-[1.4]">{item.title}</h3>
                  <p className="text-[17px] text-zinc-600 leading-[1.6]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-[120px] bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 to-zinc-600 overflow-hidden" style={{ background: 'linear-gradient(135deg, #18181b 0%, #27272a 30%, #3f3f46 60%, #52525b 100%)' }}>
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-[0.05]" style={{
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
              <h2 className="text-[56px] font-bold text-white mb-6 leading-tight" style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)' }}>
                Transform your manufacturing operations into an intelligent, self-optimizing ecosystem.
              </h2>
              <p className="text-[22px] text-white/95 mb-12 max-w-[700px] mx-auto leading-relaxed">
                Join leading manufacturers already using AI Mill to build smarter, more resilient factories.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white text-slate-500 px-12 py-5 text-lg font-bold hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all rounded-xl"
                  asChild
                >
                  <Link to="/contact">
                    Talk to Manufacturing AI Experts
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

export default Manufacturing;