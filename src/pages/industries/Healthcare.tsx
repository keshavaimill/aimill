import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight, TrendingDown, Clock, Database, Users, AlertCircle,
  Target, TrendingUp, Shield, Zap, BarChart3, CheckCircle,
  Activity, Heart, AlertTriangle, FileBarChart, Award, BarChart, ArrowUp, ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Healthcare = () => {
  const challenges = [
    { icon: Users, text: "Care Demand Volatility And Capacity Imbalance" },
    { icon: TrendingDown, text: "Rising Operating And Administrative Costs" },
    { icon: Shield, text: "Clinical And Operational Risk Exposure" },
    { icon: Clock, text: "Slow, Fragmented Decision-Making Across Departments" },
    { icon: AlertTriangle, text: "Supply Chain Disruptions In Critical Care Assets" },
    { icon: Activity, text: "Difficulty Monitoring Real-Time Patient Outcomes At Scale" },
  ];

  const solutions = [
    {
      number: "01",
      title: "Clinical Risk Intelligence & Predictive Care Management",
      challenge: "Healthcare systems are largely reactive—patients are treated after deterioration rather than prevented—leading to higher costs, poorer outcomes, and clinician burnout.",
      solution: [
        "Predictive risk models identifying patients at risk of readmission, complications, or disease progression",
        "Multimodal analytics combining EHR data, lab results, vitals, imaging, and claims",
        "Population health models stratifying patients by severity and intervention urgency"
      ],
      howItWorks: [
        { agent: "Clinical Risk Agents", action: "Continuously assess patient health trajectories" },
        { agent: "Care Planning Agents", action: "Simulate intervention scenarios and outcomes" },
        { agent: "Decision Agents", action: "Recommend personalized care pathways" },
        { agent: "Learning Agents", action: "Recalibrate models as patient conditions evolve" }
      ],
      metrics: [
        { value: "20–35% ↓", label: "Preventable Readmissions", color: "text-green" },
        { value: "Score ↑", label: "Patient Outcomes & Quality", color: "text-cyan" },
        { value: "Workload ↓", label: "Clinician Workload", color: "text-purple" }
      ],
    },
    {
      number: "02",
      title: "Hospital Operations & Capacity Optimization",
      challenge: "Hospitals struggle with inefficient bed utilization, staff shortages, and unpredictable patient inflow, resulting in delayed care and revenue loss.",
      solution: [
        "Demand forecasting models for patient admissions, discharges, and ICU utilization",
        "Workforce optimization models aligning staffing with patient acuity",
        "Throughput analytics tracking bottlenecks across departments"
      ],
      howItWorks: [
        { agent: "Capacity Monitoring Agents", action: "Track real-time operational signals" },
        { agent: "Optimization Agents", action: "Recommend staffing and bed allocation adjustments" },
        { agent: "Action Agents", action: "Trigger scheduling changes and alerts" },
        { agent: "Learning Agents", action: "Improve forecasts using historical and live data" }
      ],
      metrics: [
        { value: "25–40% ↑", label: "Resource Utilization", color: "text-green" },
        { value: "Waits ↓", label: "Wait Times & Delays", color: "text-cyan" },
        { value: "Control ↑", label: "Operational Efficiency", color: "text-purple" }
      ],
    },
    {
      number: "03",
      title: "Fraud, Waste & Abuse (FWA) Detection",
      challenge: "Healthcare fraud, waste, and abuse cost billions annually and remain difficult to detect with rule-based systems.",
      solution: [
        "Anomaly detection models identifying abnormal billing and utilization patterns",
        "Graph analytics uncovering provider–patient–claim fraud networks",
        "Behavioral models profiling providers and members"
      ],
      howItWorks: [
        { agent: "FWA Detection Agents", action: "Monitor claims in near real time" },
        { agent: "Network Agents", action: "Expose coordinated abuse patterns" },
        { agent: "Response Agents", action: "Flag, pause, or escalate suspicious claims" },
        { agent: "Learning Agents", action: "Adapt to emerging fraud tactics" }
      ],
      metrics: [
        { value: "40–60% ↓", label: "Fraud & Leakage", color: "text-green" },
        { value: "Speed ↑", label: "Claim Adjudication", color: "text-cyan" },
        { value: "Trust ↑", label: "Payer-Provider Trust", color: "text-purple" }
      ],
    },
    {
      number: "04",
      title: "Regulatory, Quality & Clinical Compliance Intelligence",
      challenge: "Manual compliance tracking across clinical guidelines, audits, and reporting requirements is costly and error-prone.",
      solution: [
        "Compliance analytics monitoring adherence to clinical protocols and regulations",
        "NLP models extracting insights from clinical notes and audit documents",
        "Quality scoring models aligned with value-based care metrics"
      ],
      howItWorks: [
        { agent: "Compliance Agents", action: "Detect deviations in real time" },
        { agent: "Reporting Agents", action: "Generate audit- and regulator-ready documentation" },
        { agent: "Alert Agents", action: "Ensure timely corrective actions" },
        { agent: "Learning Agents", action: "Stay aligned with evolving regulations and standards" }
      ],
      metrics: [
        { value: "Risk ↓", label: "Regulatory Risk & Penalties", color: "text-green" },
        { value: "Speed ↑", label: "Audit & Reporting Cycles", color: "text-cyan" },
        { value: "Scores ↑", label: "Care Quality & Accreditation", color: "text-purple" }
      ],
    },
  ];

  const roiMetrics = [
    { metric: "Care Delivery Efficiency", improvement: "25%", trend: "up" },
    { metric: "Operating & Admin Costs", improvement: "15%", trend: "down" },
    { metric: "Decision Cycle Time", improvement: "50%", trend: "down" },
    { metric: "Audit Pass Rate", improvement: "20%", trend: "up" },
    { metric: "Payback Period", improvement: "9 months", trend: "neutral", highlight: true },
  ];

  const whyAIMill = [
    {
      icon: Heart,
      title: "Care-First Standards",
      description: "Agents designed to align with clinical outcomes and bedside care standards.",
    },
    {
      icon: Zap,
      title: "Autonomous Action",
      description: "Move from reports to real-time adjustments in staffing and capacity signals.",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise healthcare security meeting HIPAA-grade data handling and compliance.",
    },
    {
      icon: Award,
      title: "Rapid Implementation",
      description: "Quick time-to-value without interrupting critical healthcare workflows and systems.",
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
                    FROM CARE DESIGN TO AUTONOMOUS OPERATIONS
                  </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[0.95] tracking-[-0.03em] text-white mb-8"
                >
                  Scale <span className="gradient-text-purple">Care Delivery</span> <br />
                  Across Your <br />
                  Health System
                </motion.h1>

                {/* Supporting Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-[540px] mb-12 font-medium"
                >
                  Healthcare leaders face rising costs and staffing shortages. AI Mill combines Data Science & Analytics with Agentic AI to turn clinical insights into autonomous operational action.
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
                        { icon: Activity, label: "Care Efficiency", value: "92.4%", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
                        { icon: TrendingUp, label: "Throughput", value: "+18%", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
                        { icon: Shield, label: "Risk Score", value: "Active", color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
                        { icon: Heart, label: "Care Nodes", value: "840", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
                        { icon: Database, label: "Health Data", value: "Secure", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
                        { icon: Target, label: "Outcome Gap", value: "Low", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
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
                Healthcare systems face pressure to scale care delivery while being squeezed by rising costs and limited capacity.
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
                Measurable improvements across key healthcare metrics
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-[1.2]">Why AI Mill For Healthcare?</h2>
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-[1.6]">
                Built specifically for complex health ecosystems with safety, security, and scale at the core.
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
                Solve Cost, Capacity, And Risk Challenges—Without Adding Complexity.
              </h2>
              <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join leading healthcare organizations using AI Mill to transform healthcare operations.
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

export default Healthcare;
