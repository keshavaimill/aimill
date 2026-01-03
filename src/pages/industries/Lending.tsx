import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight, TrendingDown, Clock, Database, Users, AlertCircle,
  Target, TrendingUp, Shield, Zap, BarChart, CheckCircle,
  CreditCard, Wallet, FileText, ArrowUp, ArrowDown, Brain,
  Activity, TrendingDown as TrendingDownIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Lending = () => {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const challenges = [
    { icon: TrendingDown, text: "High default rates due to incomplete risk assessment" },
    { icon: Clock, text: "Slow and manual underwriting processes" },
    { icon: AlertCircle, text: "Rising fraud losses and sophisticated fraud patterns" },
    { icon: BarChart, text: "Credit decisions based on static, backward-looking data" },
    { icon: Shield, text: "Difficulty balancing growth with regulatory compliance" },
    { icon: TrendingDownIcon, text: "Lost revenue, rising NPAs, operational inefficiencies" },
  ];

  const solutions = [
    {
      number: "01",
      title: "Credit Risk Intelligence & Autonomous Underwriting",
      challenge: "Traditional credit scoring models fail to adapt to changing economic conditions and borrower behaviors, leading to inaccurate risk assessments.",
      solution: "AI Mill's agentic AI continuously analyzes credit data, market signals, and borrower patterns to provide dynamic risk scoring that updates in real-time, reducing defaults by 25-40%.",
      howItWorks: [
        { agent: "Risk Assessment Agents", action: "Analyze credit history, income patterns, and market conditions" },
        { agent: "Behavioral Analysis Agents", action: "Monitor spending patterns and early warning signals" },
        { agent: "Portfolio Optimization Agents", action: "Balance risk across loan portfolios automatically" },
        { agent: "Compliance Agents", action: "Ensure all decisions meet regulatory requirements" },
      ],
      metrics: [
        { value: "35%", label: "Reduction in Defaults", color: "text-green-600" },
        { value: "50%", label: "Faster Approvals", color: "text-blue-600" },
        { value: "28%", label: "Cost Savings", color: "text-purple-600" },
      ],
    },
    {
      number: "02",
      title: "Portfolio Monitoring & Early Warning Systems",
      challenge: "Lenders struggle to identify at-risk accounts early enough to take preventive action, resulting in higher write-offs.",
      solution: "Autonomous monitoring agents track portfolio health 24/7, flagging accounts showing early distress signals and recommending intervention strategies.",
      howItWorks: [
        { agent: "Early Warning Agents", action: "Detect payment pattern changes and risk indicators" },
        { agent: "Collection Strategy Agents", action: "Optimize outreach timing and methods" },
        { agent: "Restructuring Agents", action: "Propose loan modifications for viable accounts" },
        { agent: "Recovery Agents", action: "Maximize recovery rates through intelligent workflows" },
      ],
      metrics: [
        { value: "42%", label: "Early Detection Rate", color: "text-green-600" },
        { value: "30%", label: "Lower Write-offs", color: "text-blue-600" },
        { value: "55%", label: "Recovery Improvement", color: "text-purple-600" },
      ],
    },
    {
      number: "03",
      title: "Fraud Detection & Financial Crime Prevention",
      challenge: "Sophisticated fraud schemes evolve faster than rule-based systems can adapt, leading to significant financial losses.",
      solution: "AI agents learn from fraud patterns across the network, detecting anomalies and suspicious behaviors in real-time before funds are disbursed.",
      howItWorks: [
        { agent: "Pattern Detection Agents", action: "Identify unusual application patterns and anomalies" },
        { agent: "Identity Verification Agents", action: "Cross-reference data across multiple sources" },
        { agent: "Transaction Monitoring Agents", action: "Track post-approval behavior for fraud signals" },
        { agent: "Network Analysis Agents", action: "Detect coordinated fraud rings and schemes" },
      ],
      metrics: [
        { value: "65%", label: "Fraud Detection Rate", color: "text-green-600" },
        { value: "70%", label: "Loss Reduction", color: "text-blue-600" },
        { value: "45%", label: "False Positive Reduction", color: "text-purple-600" },
      ],
    },
    {
      number: "04",
      title: "Regulatory & Compliance Intelligence",
      challenge: "Regulatory requirements change frequently, and manual compliance processes are error-prone and resource-intensive.",
      solution: "Autonomous compliance agents monitor regulatory updates, audit loan decisions, and ensure all processes meet current standards automatically.",
      howItWorks: [
        { agent: "Regulatory Monitoring Agents", action: "Track regulatory changes and updates in real-time" },
        { agent: "Audit Agents", action: "Review all loan decisions for compliance" },
        { agent: "Documentation Agents", action: "Generate required compliance reports automatically" },
        { agent: "Training Agents", action: "Update staff on new requirements and procedures" },
      ],
      metrics: [
        { value: "40%", label: "Compliance Cost Reduction", color: "text-green-600" },
        { value: "95%", label: "Audit Pass Rate", color: "text-blue-600" },
        { value: "60%", label: "Time Savings", color: "text-purple-600" },
      ],
    },
  ];

  const roiMetrics = [
    { metric: "Default Rates", improvement: "35%", trend: "down" },
    { metric: "Approval Time", improvement: "50%", trend: "down" },
    { metric: "Fraud Losses", improvement: "70%", trend: "down" },
    { metric: "Operational Costs", improvement: "28%", trend: "down" },
    { metric: "Payback Period", improvement: "8 months", trend: "neutral", highlight: true },
  ];

  const whyAIMill = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Enterprise security and compliance built into every agent, meeting financial industry standards.",
    },
    {
      icon: Zap,
      title: "Real-Time Decisions",
      description: "Make credit decisions in seconds, not days, with continuous risk monitoring and updates.",
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description: "Average 25-40% reduction in defaults and 50% faster processing times across implementations.",
    },
    {
      icon: Target,
      title: "Regulatory Compliance",
      description: "Automated compliance monitoring ensures you stay ahead of regulatory changes and requirements.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030712]">
          {/* Noise/Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

          {/* Ambient Glows */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center py-20 lg:py-32">
              {/* Left Content - 50% */}
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
                  <span className="text-[11px] uppercase tracking-[0.3em] text-blue-400 font-bold opacity-80">
                    Enterprise Financial Intelligence
                  </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[0.95] tracking-[-0.03em] text-white mb-8"
                >
                  Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Autonomy</span> <br />
                  Across Your <br />
                  Lending Stack
                </motion.h1>

                {/* Supporting Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-[540px] mb-12 font-medium"
                >
                  Deploy agentic AI systems that transform static risk models into dynamic execution engines. Modernize underwriting, monitoring, and recovery with bank-grade intelligence.
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

              {/* Right Visual - 50% */}
              {/* Right Visual Area */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="relative"
              >
                {/* Elevated Product Card */}
                <div className="relative z-20 w-full aspect-[4/5] max-w-[500px] mx-auto bg-[#f8fafc] rounded-[32px] p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5),0_0_80px_-10px_rgba(59,130,246,0.2)] border border-white/40 overflow-hidden">

                  {/* Grid Pattern Texture */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23000' fill-rule='evenodd' opacity='.1'/%3E%3C/svg%3E")` }} />

                  {/* Dashboard Content */}
                  <div className="relative h-full flex flex-col">
                    <div className="flex justify-between items-center mb-12">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/30" />
                        <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/30" />
                        <div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400/30" />
                      </div>
                      <div className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                        System Active
                      </div>
                    </div>

                    {/* Metric Cards Grid */}
                    <div className="grid grid-cols-2 gap-6 flex-1 content-start">
                      {[
                        { icon: BarChart, label: "Credit Alpha", value: "94.2%", color: "blue" },
                        { icon: TrendingUp, label: "Port. Growth", value: "+28%", color: "indigo" },
                        { icon: Shield, label: "Risk Mitigation", value: "Active", color: "emerald" },
                        { icon: Activity, label: "Live Nodes", value: "1,240", color: "blue" },
                        { icon: Database, label: "Data Flow", value: "Real-time", color: "violet" },
                        { icon: CheckCircle, label: "Compliance", value: "Certified", color: "blue" },
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

                    {/* Bottom Status bar */}
                    <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map(j => (
                            <div key={j} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-slate-500">Agent Network</span>
                      </div>
                      <div className="h-6 w-24 bg-slate-100 rounded-md animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Floating Decorative Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl z-10"
                />
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl z-10"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="relative py-[120px] bg-gradient-to-b from-[#0f172a] to-[#1e293b] overflow-hidden">
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
              className="text-center mb-16"
            >
              <h2 className="text-[44px] font-bold text-white mb-4 leading-[1.2]">Industry Challenges</h2>
              <p className="text-[20px] text-gray-300 max-w-[900px] mx-auto leading-[1.6]">
                Lenders face increasing pressure to make faster, smarter decisions while managing risk and compliance.
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
                  className="group bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 hover:bg-white/10 hover:border-blue-400/30 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                    <challenge.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                  </div>
                  <p className="text-base lg:text-lg text-white leading-relaxed">{challenge.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="relative py-[120px] bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
          <div className="container mx-auto max-w-7xl px-[80px]">
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
                  {/* Number Badge - 120px diameter, circular gradient, sticky on scroll */}
                  <div className="flex-shrink-0">
                    <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl hover:shadow-2xl transition-all">
                      {solution.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[36px] font-bold text-white mb-10 leading-[1.3]">{solution.title}</h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                      {/* Challenge Box */}
                      <div className="bg-red-950/30 border-l-4 border-red-500 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-red-600 font-bold mb-3 block">
                          THE CHALLENGE
                        </span>
                        <p className="text-base text-gray-300 leading-relaxed">{solution.challenge}</p>
                      </div>

                      {/* Solution Box */}
                      <div className="bg-blue-950/30 border-l-4 border-blue-500 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-blue-600 font-bold mb-3 block">
                          AI MILL SOLUTION
                        </span>
                        <p className="text-base text-gray-300 leading-relaxed">{solution.solution}</p>
                      </div>
                    </div>

                    {/* How Agentic AI Operates */}
                    <div className="mb-10 bg-green-950/20 p-8 rounded-xl border border-green-900/30">
                      <h4 className="text-xl font-semibold text-white mb-6">How Agentic AI Operates</h4>
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
                            <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <span className="font-semibold text-white">{item.agent}</span>
                              <span className="text-gray-400"> → {item.action}</span>
                            </div>
                          </motion.div>
                        ))}
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
                          className="bg-gray-800/50 rounded-xl p-8 shadow-md hover:shadow-xl hover:border-blue-500/30 border border-gray-700/50 transition-all group"
                        >
                          <div className={`text-[24px] font-bold ${metric.color} mb-3 group-hover:scale-110 transition-transform`}>
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
        <section className="relative py-[120px] bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="container mx-auto max-w-[800px] px-[80px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-[44px] font-bold text-white mb-4 leading-[1.2]">ROI Metrics</h2>
              <p className="text-[20px] text-gray-400 max-w-2xl mx-auto leading-[1.6]">
                Measurable improvements across key lending metrics
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
            >
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-green-600">
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
                      className={`${idx % 2 === 0 ? "bg-white" : "bg-[#f9fafb]"
                        } ${row.highlight ? "bg-yellow-50 border-l-4 border-yellow-500" : ""} hover:bg-blue-50/50 hover:scale-[1.01] transition-all`}
                    >
                      <td className="px-6 py-5 font-semibold text-gray-900 text-base">{row.metric}</td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end gap-3">
                          {row.trend === "up" && <ArrowUp className="w-5 h-5 text-green-600" />}
                          {row.trend === "down" && <ArrowDown className="w-5 h-5 text-red-600" />}
                          <span className={`text-[24px] font-bold ${row.trend === "up" ? "text-green-600" :
                            row.trend === "down" ? "text-red-600" :
                              "text-yellow-600"
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
        <section className="relative py-[120px] bg-gray-900">
          <div className="container mx-auto max-w-7xl px-[80px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-[44px] font-bold text-white mb-4 leading-[1.2]">Why AI Mill</h2>
              <p className="text-[20px] text-gray-400 max-w-2xl mx-auto leading-[1.6]">
                Built specifically for financial services with security, compliance, and performance at the core.
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
                  className="group bg-white rounded-2xl p-10 shadow-md hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-[22px] font-bold text-black mb-3 leading-[1.4]">{item.title}</h3>
                  <p className="text-[16px] text-gray-600 leading-[1.6]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-[120px] bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-4xl px-[80px] text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[52px] font-bold text-white mb-6 leading-tight">
                Grow your loan portfolio without growing risk.
              </h2>
              <p className="text-[20px] text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join leading financial institutions using AI Mill to reduce defaults, detect fraud, and streamline operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 px-10 py-7 text-lg font-semibold hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all rounded-xl"
                  asChild
                >
                  <Link to="/contact">
                    Talk to Our Experts
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white px-10 py-7 text-lg font-semibold hover:bg-white/20 backdrop-blur-sm rounded-xl"
                  asChild
                >
                  <Link to="/solutions">View Case Studies</Link>
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

export default Lending;

