import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight, TrendingDown, Clock, Database, Users, AlertCircle,
  Target, TrendingUp, Shield, Zap, BarChart, CheckCircle,
  Factory, Settings, ArrowUp, ArrowDown, Activity, AlertTriangle,
  XCircle, BarChart2, Box, Package, Search, Network,
  Eye, DollarSign, Gauge, Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Manufacturing = () => {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const challenges = [
    { icon: AlertTriangle, text: "Unexpected machine failures disrupting production", gradient: "from-destructive to-red-700", bgColor: "bg-destructive/15" },
    { icon: XCircle, text: "Quality issues detected too late in the process", gradient: "from-purple-500 to-purple-600", bgColor: "bg-purple-500/15" },
    { icon: BarChart2, text: "Inefficient production planning and capacity utilization", gradient: "from-cyan-500 to-cyan-600", bgColor: "bg-cyan-500/15" },
    { icon: DollarSign, text: "High maintenance costs driven by calendar-based servicing", gradient: "from-cyan-500 to-cyan-600", bgColor: "bg-cyan-500/15" },
    { icon: Eye, text: "Limited real-time visibility across plants and lines", gradient: "from-purple-500 to-purple-600", bgColor: "bg-purple-500/15" },
    { icon: TrendingDown, text: "Impact on OEE, margins, delivery commitments, and customer trust", gradient: "from-destructive to-red-700", bgColor: "bg-destructive/15" },
  ];

  const solutionIcons = [Brain, Activity, Zap];

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
        { value: "30-50% ↓", label: "Unplanned Downtime", color: "text-green", borderColor: "border-t-green" },
        { value: "20-35% ↓", label: "Maintenance Cost Savings", color: "text-cyan", borderColor: "border-t-cyan" },
        { value: "Extended Life", label: "Asset Lifespan Improvement", color: "text-purple", borderColor: "border-t-purple" },
      ],
      badgeGradient: "from-cyan to-green",
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
        { value: "Up to 90%", label: "Defect Detection Accuracy", color: "text-green", borderColor: "border-t-green" },
        { value: "25-40% ↓", label: "Scrap & Rework Reduction", color: "text-purple", borderColor: "border-t-purple" },
        { value: "↑ Satisfaction", label: "Improved Customer Quality", color: "text-cyan", borderColor: "border-t-cyan" },
      ],
      badgeGradient: "from-cyan to-blue-600",
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
        { value: "15-25% ↑", label: "Production Throughput", color: "text-green", borderColor: "border-t-green" },
        { value: "↓ Idle Time", label: "Reduced Equipment Downtime", color: "text-cyan", borderColor: "border-t-cyan" },
        { value: "Faster Fulfillment", label: "Improved Delivery Times", color: "text-purple", borderColor: "border-t-purple" },
      ],
      badgeGradient: "from-purple to-cyan",
    },
  ];



  const roiMetrics = [
    { metric: "Unplanned Downtime", improvement: "↓ 30–50%", trend: "down", color: "text-destructive" },
    { metric: "Maintenance Cost", improvement: "↓ 20–35%", trend: "down", color: "text-cyan" },
    { metric: "Production Throughput", improvement: "↑ 15–25%", trend: "up", color: "text-green" },
    { metric: "Quality Defects", improvement: "↓ 25–40%", trend: "down", color: "text-destructive" },
    { metric: "Payback Period", improvement: "3–6 months", trend: "neutral", highlight: true, color: "text-cyan" },
  ];

  const whyAIMill = [
    {
      icon: Database,
      title: "Real Factory Data",
      description: "Built for actual production environments, not lab models. Handles messy, real-world manufacturing data.",
      gradient: "from-cyan to-blue-600",
    },
    {
      icon: Zap,
      title: "Autonomous Action",
      description: "Acts without waiting for human approval. Responds to issues in milliseconds, not hours.",
      gradient: "from-cyan to-green",
    },
    {
      icon: Network,
      title: "Scalable Deployment",
      description: "Works across plants and geographies. Deploy once, scale everywhere with consistent results.",
      gradient: "from-purple to-cyan",
    },
    {
      icon: TrendingUp,
      title: "Fast ROI",
      description: "Measurable improvements within 3-6 months. Track savings, uptime, and quality in real-time.",
      gradient: "from-green to-cyan",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712]">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-black">
          {/* Background Texture Overlay */}
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
                  <span className="text-[11px] uppercase tracking-[0.3em] text-cyan font-bold opacity-80">
                    FROM REACTIVE OPERATIONS TO AUTONOMOUS MANUFACTURING
                  </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[0.95] tracking-[-0.03em] text-white mb-8"
                >
                  Manufacturing <span className="gradient-text">AI Solutions</span>
                </motion.h1>

                {/* Supporting Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-[540px] mb-12 font-medium"
                >
                  AI Mill enables manufacturers to transform traditional plants into self-optimizing, intelligent factories using advanced Data Science and Agentic AI systems that predict, decide, and act in real time.
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
                        Transform Your Plant
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
                <div className="relative z-20 w-full aspect-[4/5] max-w-[500px] mx-auto bg-[#f8fafc] rounded-[32px] p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5),0_0_80px_-10px_rgba(59,130,246,0.2)] border border-white/40 overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23000' fill-rule='evenodd' opacity='.1'/%3E%3C/svg%3E")` }} />

                  <div className="relative h-full flex flex-col">
                    <div className="flex justify-between items-center mb-12">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/30" />
                        <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/30" />
                        <div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400/30" />
                      </div>
                      <div className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                        Plant System Active
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 flex-1 content-start">
                      {[
                        { icon: Activity, label: "OEE Status", value: "87.4%", color: "blue" },
                        { icon: Gauge, label: "Machine Load", value: "Optimal", color: "indigo" },
                        { icon: Zap, label: "Power usage", value: "Normal", color: "emerald" },
                        { icon: Settings, label: "Uptime Rate", value: "99.2%", color: "blue" },
                        { icon: Database, label: "Plant Data", value: "Real-time", color: "violet" },
                        { icon: CheckCircle, label: "Quality Check", value: "Certified", color: "blue" },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)" }}
                          className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm transition-all cursor-default group"
                        >
                          <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center transition-colors
                            ${item.color === 'blue' ? 'bg-blue-50 text-blue-500 group-hover:bg-blue-100' : ''}
                            ${item.color === 'indigo' ? 'bg-indigo-50 text-indigo-500 group-hover:bg-indigo-100' : ''}
                            ${item.color === 'emerald' ? 'bg-emerald-50 text-emerald-500 group-hover:bg-emerald-100' : ''}
                            ${item.color === 'violet' ? 'bg-violet-50 text-violet-500 group-hover:bg-violet-100' : ''}
                          `}>
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">{item.label}</div>
                          <div className="text-lg font-bold text-slate-900">{item.value}</div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map(j => (
                            <div key={j} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-slate-500">Plant Agents</span>
                      </div>
                      <div className="h-6 w-24 bg-slate-100 rounded-md animate-pulse" />
                    </div>
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

                {/* Floating Decorative Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-cyan/20 rounded-full blur-2xl z-10"
                />
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple/20 rounded-full blur-3xl z-10"
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
                Manufacturing operations generate massive volumes of machine, sensor, and production data — yet most of it remains underutilized.
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
                  className="group glass rounded-xl p-8 border border-border/50 hover:border-cyan/30 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan/20 flex items-center justify-center mb-4 group-hover:bg-cyan/30 transition-colors">
                    <challenge.icon className="w-6 h-6 text-cyan" />
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
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-[48px] last:mb-0"
              >
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-cyan to-green flex items-center justify-center text-foreground text-4xl font-bold shadow-xl">
                      {solution.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-[1.3]">{solution.title}</h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                      {/* Challenge Box */}
                      <div className="glass border-l-4 border-destructive p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-destructive font-bold mb-3 block">
                          THE CHALLENGE
                        </span>
                        <p className="text-base text-white leading-relaxed">{solution.challenge}</p>
                      </div>

                      {/* Solution Box */}
                      <div className="glass border-l-4 border-cyan p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-cyan font-bold mb-3 block">
                          AI MILL SOLUTION
                        </span>
                        <p className="text-base text-white leading-relaxed">{solution.solution}</p>
                      </div>
                    </div>

                    {/* How Agentic AI Works */}
                    <div className="mb-10 glass border border-green/30 p-8 rounded-xl bg-green-950/10">
                      <h4 className="text-base font-bold uppercase tracking-wider mb-6 text-cyan">HOW AGENTIC AI WORKS</h4>
                      <div className="space-y-4">
                        {solution.howItWorks.map((item, itemIdx) => (
                          <motion.div
                            key={itemIdx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: itemIdx * 0.1 }}
                            className="flex items-start gap-4"
                          >
                            <div className="w-6 h-6 rounded-full bg-cyan flex items-center justify-center flex-shrink-0 mt-0.5">
                              <item.icon className="w-4 h-4 text-white" />
                            </div>
                            <p className="text-gray-400">
                              <span className="font-semibold text-white">{item.text.split(" ").slice(0, 3).join(" ")}</span>
                              {" " + item.text.split(" ").slice(3).join(" ")}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {solution.metrics.map((metric, metricIdx) => (
                        <motion.div
                          key={metricIdx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: metricIdx * 0.1 }}
                          className="glass rounded-xl p-8 shadow-md hover:shadow-xl hover:border-cyan/30 border border-border/50 transition-all group text-center"
                        >
                          <div className={`text-2xl font-bold text-white mb-3 group-hover:scale-110 transition-transform`}>
                            {metric.value}
                          </div>
                          <p className="text-sm font-medium text-gray-400">{metric.label}</p>
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
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden">
          {/* Elegant Grey Texture Background */}
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-[1.2]">ROI & Measurable Outcomes</h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-[1.6]">
                Measurable improvements across key manufacturing metrics
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
                <thead className="bg-gradient-to-r from-cyan to-green">
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
                        } ${row.highlight ? "bg-cyan-500/10 border-l-4 border-cyan-500" : ""} hover:bg-cyan-500/10 transition-all`}
                    >
                      <td className="px-8 py-6 font-semibold text-[18px] text-white">{row.metric}</td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-3">
                          {row.trend === "up" && <ArrowUp className="w-5 h-5 text-green-500" />}
                          {row.trend === "down" && <ArrowDown className="w-5 h-5 text-destructive" />}
                          <span className={`text-2xl font-bold text-white`}>
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
          {/* Elegant Grey Texture Background */}
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-[1.2]">Why AI Mill</h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-[1.6]">
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
                  className="group glass rounded-2xl p-10 shadow-md hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-cyan to-green flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
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
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 bg-black overflow-hidden">
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
                Self-optimizing factory ecosystem.
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join leading manufacturers already using AI Mill to build smarter, more resilient factories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="group rounded-xl bg-white text-black hover:bg-gray-100 h-14 px-8 font-bold">
                    Transform Your Plant
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/solutions">
                  <Button variant="outline" size="lg" className="rounded-xl border-white/10 text-white hover:bg-white/5 h-14 px-8 font-bold">
                    View Platform
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div >
  );
};

export default Manufacturing;
