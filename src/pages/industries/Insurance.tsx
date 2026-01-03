import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight, TrendingDown, Clock, Database, Users, AlertCircle,
  Target, TrendingUp, Shield, Zap, BarChart3, CheckCircle,
  FileText, ArrowUp, ArrowDown, Activity, AlertTriangle, Building2,
  Sparkles, Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Insurance = () => {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const problems = [
    { icon: TrendingDown, title: "Loss Ratio Deterioration", text: "Inaccurate pricing and delayed risk signals erode profitability.", gradient: "from-destructive to-red-700", bgColor: "bg-destructive/15" },
    { icon: Clock, title: "FNOL Delays", text: "Slow, incomplete first notice drives leakage and rework.", gradient: "from-purple-500 to-purple-600", bgColor: "bg-purple-500/15" },
    { icon: AlertCircle, title: "Claims Leakage", text: "Manual reviews increase fraud exposure and handling costs.", gradient: "from-cyan-500 to-cyan-600", bgColor: "bg-cyan-500/15" },
    { icon: FileText, title: "Underwriting Bottlenecks", text: "Human-heavy processes slow growth and create inconsistency.", gradient: "from-cyan-500 to-cyan-600", bgColor: "bg-cyan-500/15" },
    { icon: Users, title: "Customer Churn", text: "Reactive service and generic offers reduce retention.", gradient: "from-purple-500 to-purple-600", bgColor: "bg-purple-500/15" },
    { icon: AlertTriangle, title: "Operational Risk", text: "Manual errors and compliance gaps drive rising costs.", gradient: "from-destructive to-red-700", bgColor: "bg-destructive/15" },
  ];

  const solutionIcons = [Brain, Activity, Zap];

  const solutions = [
    {
      number: "01",
      title: "AI-Powered Claims Intelligence & FNOL Optimization",
      challenge: "Slow FNOL and manual claims triage lead to excessive leakage, higher settlement costs, and poor customer sentiment.",
      solution: "We deploy predictive severity models and computer vision to intake, classify, and route claims automatically at the moment of loss.",
      howItWorks: [
        { agent: "Severity agents", action: "predict claim costs during first notice" },
        { agent: "Triage agents", action: "route claims to optimized handling channels" },
        { agent: "Fraud agents", action: "detect anomalies before settlement" },
      ],
      metrics: [
        { value: "30-50% ↓", label: "Cycle Time Reduction", color: "text-green", borderColor: "border-t-green" },
        { value: "↓ Leakage", label: "Reduced Claims Leakage", color: "text-cyan", borderColor: "border-t-cyan" },
        { value: "↑ CX Score", label: "Improved Sentiment", color: "text-purple", borderColor: "border-t-purple" },
      ],
      badgeGradient: "from-purple to-pink-500",
    },
    {
      number: "02",
      title: "Autonomous Underwriting & Risk Selection",
      challenge: "Manual underwriting is slow and inconsistent, preventing rapid growth and accurate risk-adjusted pricing.",
      solution: "We implement straight-through processing engines that use alternative data and ensemble models to score risk in real time.",
      howItWorks: [
        { agent: "Intake agents", action: "extract and validate submission data" },
        { agent: "Risk agents", action: "score alignment with appetite" },
        { agent: "Pricing agents", action: "optimize premiums based on risk" },
      ],
      metrics: [
        { value: "40-60% ↓", label: "Underwriting Cycle Time", color: "text-cyan", borderColor: "border-t-cyan" },
        { value: "3-7% ↓", label: "Loss Ratio Improvement", color: "text-green", borderColor: "border-t-green" },
        { value: "↑ GWP", label: "Increased Growth Potential", color: "text-purple", borderColor: "border-t-purple" },
      ],
      badgeGradient: "from-cyan to-blue-600",
    },
    {
      number: "03",
      title: "Predictive Pricing & Retention Intelligence",
      challenge: "One-size-fits-all pricing and reactive retention strategies lead to adverse selection and customer churn.",
      solution: "We build dynamic pricing elasticity models and churn prediction systems to deliver personalized offers.",
      howItWorks: [
        { agent: "Elasticity agents", action: "calculate price sensitivity" },
        { agent: "Churn agents", action: "flag high-risk accounts early" },
        { agent: "Offer agents", action: "generate personalized win-back offers" },
      ],
      metrics: [
        { value: "↑ Retention", label: "Customer Lifetime Value", color: "text-purple", borderColor: "border-t-purple" },
        { value: "Optimized", label: "Renewal Pricing Strategy", color: "text-cyan", borderColor: "border-t-cyan" },
        { value: "Better Mix", label: "Improved Portfolio Quality", color: "text-green", borderColor: "border-t-green" },
      ],
      badgeGradient: "from-purple to-cyan",
    },
  ];

  const roiMetrics = [
    { metric: "Loss Ratio", improvement: "↓ 3–7%", trend: "down", color: "text-destructive" },
    { metric: "Claims Cycle Time", improvement: "↓ 30–50%", trend: "down", color: "text-cyan" },
    { metric: "Handling Costs", improvement: "↓ 20–35%", trend: "down", color: "text-cyan" },
    { metric: "Underwriting Time", improvement: "↓ 40–60%", trend: "down", color: "text-cyan" },
    { metric: "Payback Period", improvement: "6–12 months", trend: "neutral", highlight: true, color: "text-cyan" },
  ];

  const whyAIMill = [
    {
      icon: Database,
      title: "Insurance Domain Expertise",
      description: "Designed specifically for FNOL, claims, underwriting, and pricing data with deep industry context.",
      gradient: "from-purple to-pink-500",
    },
    {
      icon: Shield,
      title: "Explainable Compliance",
      description: "Transparent AI models aligned with regulatory expectations and audit requirements.",
      gradient: "from-cyan to-blue-600",
    },
    {
      icon: Activity,
      title: "Autonomous Execution",
      description: "Agentic AI enables real-time, autonomous actions across the entire insurance value chain.",
      gradient: "from-cyan to-green",
    },
    {
      icon: TrendingUp,
      title: "Proven Impact",
      description: "Measurable ROI benchmarks and rapid deployment within 6-12 months of implementation.",
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
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px] pointer-events-none" />

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
                    AUTONOMOUS INSURANCE INTELLIGENCE
                  </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[0.95] tracking-[-0.03em] text-white mb-8"
                >
                  Insurance <span className="gradient-text">AI Solutions</span>
                </motion.h1>

                {/* Supporting Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-[540px] mb-12 font-medium"
                >
                  AI Mill combines Advanced Analytics with Agentic AI to enable faster decisions, lower risk, and scaled execution across claims, underwriting, and customer experience.
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
                        Modernize Your Stack
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
                <div className="relative z-20 w-full aspect-[4/5] max-w-[500px] mx-auto bg-[#f8fafc] rounded-[32px] p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5),0_0_80px_-10px_rgba(139,92,246,0.2)] border border-white/40 overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23000' fill-rule='evenodd' opacity='.1'/%3E%3C/svg%3E")` }} />

                  <div className="relative h-full flex flex-col">
                    <div className="flex justify-between items-center mb-12">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/30" />
                        <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/30" />
                        <div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400/30" />
                      </div>
                      <div className="px-3 py-1 bg-purple-50 border border-purple-100 rounded-full text-[10px] font-bold text-purple-600 uppercase tracking-widest">
                        Insurance Core Active
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 flex-1 content-start">
                      {[
                        { icon: FileText, label: "Claims Automation", value: "94.2%", color: "purple" },
                        { icon: Shield, label: "Appetite Align", value: "Optimal", color: "indigo" },
                        { icon: Activity, label: "Loss Severity", value: "-12.5%", color: "emerald" },
                        { icon: CheckCircle, label: "UW Decisions", value: "Instant", color: "purple" },
                        { icon: Database, label: "Risk Data", value: "Real-time", color: "violet" },
                        { icon: TrendingUp, label: "Retention", value: "+18%", color: "purple" },
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
                            ${item.color === 'purple' ? 'bg-purple-50 text-purple-600 group-hover:bg-purple-100' : ''}
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
                        <span className="text-xs font-bold text-slate-500">Claims Agents</span>
                      </div>
                      <div className="h-6 w-24 bg-slate-100 rounded-md animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Floating Decorative Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-purple/20 rounded-full blur-2xl z-10"
                />
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan/20 rounded-full blur-3xl z-10"
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
                Modern insurance operates in real time—across claims, pricing, risk, and customer experience. Manual workflows can't respond fast enough.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group glass rounded-xl p-8 border border-border/50 hover:border-purple/30 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple/20 flex items-center justify-center mb-4 group-hover:bg-purple/30 transition-colors">
                    <problem.icon className="w-6 h-6 text-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                  <p className="text-base text-gray-400 leading-relaxed">{problem.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-zinc-950/30 to-zinc-900/40" />
            <div className="absolute inset-0 opacity-50" style={{
              backgroundImage: `
                radial-gradient(circle at 80% 30%, rgba(128,128,128,0.15) 0%, transparent 50%),
                radial-gradient(circle at 20% 70%, rgba(128,128,128,0.15) 0%, transparent 50%)
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
                    <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-purple to-pink-500 flex items-center justify-center text-foreground text-4xl font-bold shadow-xl">
                      {solution.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-[1.3]">{solution.title}</h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                      <div className="glass border-l-4 border-destructive p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-destructive font-bold mb-3 block">
                          THE CHALLENGE
                        </span>
                        <p className="text-base text-white leading-relaxed">{solution.challenge}</p>
                      </div>

                      <div className="glass border-l-4 border-purple p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-purple font-bold mb-3 block">
                          AI MILL SOLUTION
                        </span>
                        <p className="text-base text-white leading-relaxed">{solution.solution}</p>
                      </div>
                    </div>

                    <div className="mb-10 glass border border-purple/30 p-8 rounded-xl bg-purple-950/10">
                      <h4 className="text-base font-bold uppercase tracking-wider mb-6 text-purple-400">HOW AGENTIC AI WORKS</h4>
                      <div className="space-y-4">
                        {solution.howItWorks.map((item, itemIdx) => {
                          const Icon = solutionIcons[itemIdx % solutionIcons.length];
                          return (
                            <motion.div
                              key={itemIdx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: itemIdx * 0.1 }}
                              className="flex items-start gap-4"
                            >
                              <div className="w-6 h-6 rounded-full bg-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <span className="font-semibold text-white">{item.agent}</span>
                                <span className="text-gray-400"> → {item.action}</span>
                              </div>
                            </motion.div>
                          );
                        })}
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
                          className="glass rounded-xl p-8 shadow-md hover:shadow-xl hover:border-purple/30 border border-border/50 transition-all group text-center"
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
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-[1.6]">
                Measurable improvements across key insurance metrics
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
                      className={`${idx % 2 === 0 ? "bg-card/50" : "bg-card/30"} ${row.highlight ? "bg-purple-500/10 border-l-4 border-purple-500" : ""} hover:bg-purple-500/10 transition-all`}
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
          <div className="absolute inset-0 pointer-events-none overflow-hidden text-center">
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
                Built for insurance with deep domain context and regulatory compliance at the core.
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
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-purple to-cyan flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
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
                Fix leakage and protect margins.
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join leading insurance carriers already using AI Mill to transform claims, underwriting, and customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="group rounded-xl bg-white text-black hover:bg-gray-100 h-14 px-8 font-bold">
                    Transform Your Operations
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
      </main>
      <Footer />
    </div>
  );
};

export default Insurance;