import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  ArrowRight, TrendingDown, Clock, Database, Users, AlertCircle,
  Target, TrendingUp, Shield, Zap, BarChart3, CheckCircle,
  FileText, ArrowUp, ArrowDown, Activity, AlertTriangle, Building2,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Insurance = () => {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const problems = [
    { 
      icon: TrendingDown, 
      title: "Loss Ratio Deterioration",
      description: "Inaccurate pricing and delayed risk signals erode profitability.",
      gradient: "from-red-500 to-red-600",
      bgColor: "bg-red-500/15"
    },
    { 
      icon: Clock, 
      title: "FNOL Delays & Poor Intake Quality",
      description: "Slow, incomplete first notice drives leakage, rework, and customer frustration.",
      gradient: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-500/15"
    },
    { 
      icon: AlertCircle, 
      title: "Claims Leakage & Slow Resolution",
      description: "Manual reviews increase fraud exposure and handling costs.",
      gradient: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/15"
    },
    { 
      icon: FileText, 
      title: "Underwriting Bottlenecks",
      description: "Human-heavy processes slow growth and create inconsistent decisions.",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/15"
    },
    { 
      icon: Users, 
      title: "Customer Churn & Low Lifetime Value",
      description: "Reactive service and generic offers reduce retention.",
      gradient: "from-red-500 to-red-600",
      bgColor: "bg-red-500/15"
    },
  ];

  const solutions = [
    {
      title: "Loss Ratio Deterioration",
      dataScience: [
        "Risk scoring, pricing optimization, and loss forecasting",
        "Explainable, portfolio-level insights"
      ],
      agenticAI: [
        "Monitors exposure and adjusts actions continuously"
      ]
    },
    {
      title: "FNOL Delays & Poor Intake Quality",
      dataScience: [
        "Severity prediction, claim classification, and data completeness scoring at intake"
      ],
      agenticAI: [
        "Guides FNOL in real time, validates inputs, and triggers next-best actions instantly"
      ]
    },
    {
      title: "Claims Leakage & Slow Resolution",
      dataScience: [
        "Fraud detection, triage, and settlement optimization"
      ],
      agenticAI: [
        "Autonomously routes, escalates, or fast-tracks claims"
      ]
    },
    {
      title: "Underwriting Bottlenecks",
      dataScience: [
        "Automated risk assessment and appetite alignment"
      ],
      agenticAI: [
        "Executes straight-through underwriting within governance limits"
      ]
    },
    {
      title: "Customer Churn & Low Lifetime Value",
      dataScience: [
        "Churn prediction and cross-sell propensity modeling"
      ],
      agenticAI: [
        "Activates personalized interventions across channels"
      ]
    },
  ];

  const roiMetrics = [
    { metric: "Loss Ratio", improvement: "↓ 3–7%", trend: "down", color: "text-emerald-600" },
    { metric: "FNOL-to-Settlement Cycle Time", improvement: "↓ 30–50%", trend: "down", color: "text-teal-600" },
    { metric: "Claims Handling Costs", improvement: "↓ 20–35%", trend: "down", color: "text-emerald-600" },
    { metric: "Underwriting Cycle Time", improvement: "↓ 40–60%", trend: "down", color: "text-blue-800" },
    { metric: "Payback Period", improvement: "6–12 months", trend: "neutral", highlight: true, color: "text-amber-600" },
  ];

  const whyAIMill = [
    {
      icon: Database,
      title: "Built for Insurance Complexity",
      description: "Designed specifically for FNOL, claims, underwriting, and pricing data with deep domain knowledge.",
      gradient: "from-blue-800 to-teal-600",
    },
    {
      icon: Shield,
      title: "Explainable Decisions",
      description: "Transparent AI models aligned with regulatory expectations and audit requirements.",
      gradient: "from-emerald-600 to-emerald-500",
    },
    {
      icon: Activity,
      title: "Continuous Execution",
      description: "Agentic AI enables real-time, autonomous actions across the insurance value chain.",
      gradient: "from-indigo-600 to-indigo-500",
    },
    {
      icon: TrendingUp,
      title: "Fast Time to Value",
      description: "Rapid deployment with measurable impact within 6-12 months, no operational disruption.",
      gradient: "from-teal-600 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-sky-50 to-blue-100">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e40af' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                  <span className="text-[12px] uppercase tracking-[2px] text-blue-800 font-semibold">
                    FROM ADVANCED ANALYTICS TO AUTONOMOUS INSURANCE INTELLIGENCE
                  </span>
                </motion.div>
                
                {/* Optional Icon */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mb-8"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-800 to-teal-600 flex items-center justify-center" style={{ background: 'rgba(30, 64, 175, 0.1)' }}>
                    <Shield className="w-6 h-6 text-blue-800" />
                  </div>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[64px] font-extrabold leading-[1.1] text-slate-900 mb-8"
                >
                  Insurance Industry<br />AI Solutions
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-[24px] font-normal leading-[1.5] text-slate-700 max-w-[600px] mb-6"
                >
                  Insurance leaders face rising loss ratios, claims inflation, and customer impatience. Speed and accuracy now define competitiveness.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-[18px] leading-[1.7] text-slate-500 max-w-[580px] mb-12"
                >
                  AI Mill combines Data Science & Analytics with Agentic AI to enable faster decisions, lower risk, and scaled execution across claims, underwriting, pricing, and customer experience.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-800 via-teal-600 to-indigo-600 hover:from-blue-900 hover:to-indigo-700 text-white px-8 h-[56px] text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 rounded-xl"
                    asChild
                  >
                    <Link to="/contact">
                      Talk to Insurance AI Experts
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Visual - Insurance Dashboard */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[520px]"
              >
                <div className="absolute inset-0 bg-white rounded-3xl p-12 flex items-center justify-center border-2 border-blue-100 shadow-2xl relative">
                  {/* 2x2 Grid */}
                  <div className="grid grid-cols-2 gap-4 w-full h-full relative">
                    {/* Top Left - Claims */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-200 flex flex-col relative"
                    >
                      <div className="absolute top-3 right-3 w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
                      <FileText className="w-6 h-6 text-blue-800 mb-3" />
                      <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-2 font-semibold">CLAIMS</div>
                      <div className="text-[32px] font-bold text-emerald-600 mb-1">94%</div>
                      <div className="text-[13px] text-slate-500">Auto-Processed</div>
                    </motion.div>

                    {/* Top Right - Risk */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 border border-amber-200 flex flex-col relative"
                    >
                      <div className="absolute top-3 right-3 w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
                      <AlertTriangle className="w-6 h-6 text-amber-600 mb-3" />
                      <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-2 font-semibold">RISK SCORE</div>
                      <div className="text-[32px] font-bold text-emerald-600 mb-1">Low</div>
                      <div className="text-[13px] text-slate-500">Portfolio Health</div>
                    </motion.div>

                    {/* Bottom Left - Underwriting */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-200 flex flex-col"
                    >
                      <Users className="w-6 h-6 text-teal-600 mb-3" />
                      <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-2 font-semibold">UNDERWRITING</div>
                      <div className="text-[32px] font-bold text-teal-600 mb-1">87%</div>
                      <div className="text-[13px] text-slate-500">Straight-Through</div>
                    </motion.div>

                    {/* Bottom Right - Customer */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-200 flex flex-col"
                    >
                      <TrendingUp className="w-6 h-6 text-indigo-600 mb-3" />
                      <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-2 font-semibold">RETENTION</div>
                      <div className="text-[32px] font-bold text-indigo-600 mb-1">92%</div>
                      <div className="text-[13px] text-slate-500">Customer LTV</div>
                    </motion.div>
                  </div>

                  {/* Center Status Circle */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 flex flex-col items-center justify-center border-4 border-white shadow-xl">
                      <CheckCircle className="w-10 h-10 text-white mb-2" />
                      <div className="text-[14px] font-semibold text-white">Active</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industry Context Section */}
        <section className="relative py-[80px] bg-white border-b border-blue-100">
          <div className="container mx-auto max-w-[900px] px-[80px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="text-[22px] font-normal leading-[1.7] text-slate-700">
                Modern insurance operates in real time—across claims, pricing, risk, and customer experience. Legacy systems and manual workflows can't respond fast enough or consistently.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Business Problems Section */}
        <section className="relative py-[120px] bg-gradient-to-b from-blue-900 to-blue-800 overflow-hidden">
          <div className="container mx-auto max-w-7xl px-[80px] relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-[48px] font-bold text-white mb-4 leading-[1.2]">Key Business Problems</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
              {problems.map((problem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group bg-white/8 backdrop-blur-md rounded-2xl p-10 border border-white/12 hover:bg-white/12 hover:border-teal-600/40 hover:translate-y-[-8px] hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                    idx === problems.length - 1 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${problem.gradient} ${problem.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <problem.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[22px] font-bold text-white mb-3 leading-[1.3]">{problem.title}</h3>
                  <p className="text-[17px] font-normal text-slate-300 leading-[1.6]">{problem.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Mill Solution Approach Section */}
        <section className="relative py-[120px] bg-slate-50">
          <div className="container mx-auto max-w-[1200px] px-[80px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-[48px] font-bold text-slate-900 mb-6 leading-[1.2]">AI Mill Solution Approach</h2>
              <p className="text-[24px] font-semibold text-blue-800 leading-[1.3]">Data Science & Analytics + Agentic AI</p>
            </motion.div>

            <div className="space-y-12">
              {solutions.map((solution, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl p-12 shadow-lg border-2 border-blue-100 hover:border-blue-800 hover:shadow-xl transition-all"
                >
                  <h3 className="text-[28px] font-bold text-slate-900 mb-8 leading-[1.2]">{solution.title}</h3>

                  <div className="space-y-6">
                    {/* Data Science & Analytics Section */}
                    <div className="bg-blue-50 border-l-4 border-blue-800 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <BarChart3 className="w-5 h-5 text-blue-800" />
                        <span className="text-[13px] font-bold text-blue-800 uppercase tracking-wider">DATA SCIENCE & ANALYTICS</span>
                      </div>
                      <ul className="space-y-3">
                        {solution.dataScience.map((point, pointIdx) => (
                          <li key={pointIdx} className="text-[17px] text-slate-900 leading-[1.6] flex items-start">
                            <span className="mr-3 text-blue-800">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Agentic AI Section */}
                    <div className="bg-green-50 border-l-4 border-emerald-600 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="w-5 h-5 text-emerald-600" />
                        <span className="text-[13px] font-bold text-emerald-600 uppercase tracking-wider">AGENTIC AI</span>
                      </div>
                      <ul className="space-y-3">
                        {solution.agenticAI.map((point, pointIdx) => (
                          <li key={pointIdx} className="text-[17px] text-slate-900 leading-[1.6] flex items-start">
                            <span className="mr-3 text-emerald-600">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Benchmarks Section */}
        <section className="relative py-[100px] bg-white">
          <div className="container mx-auto max-w-[900px] px-[80px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-[44px] font-bold text-slate-900 mb-4 leading-[1.2]">Insurance ROI Benchmarks</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-100"
            >
              <table className="w-full border-collapse">
                <thead className="bg-gradient-to-r from-blue-800 to-teal-600">
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
                      } ${row.highlight ? "bg-gradient-to-r from-amber-50 to-amber-100 border-l-4 border-amber-600" : ""} hover:bg-blue-50 hover:scale-[1.01] transition-all`}
                    >
                      <td className="px-8 py-6 font-semibold text-[18px] text-slate-900">{row.metric}</td>
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

        {/* Why AI Mill for Insurance Section */}
        <section className="relative py-[100px] bg-sky-50">
          <div className="container mx-auto max-w-[1200px] px-[80px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-[44px] font-bold text-slate-900 mb-4 leading-[1.2]">Why AI Mill for Insurance?</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyAIMill.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-white rounded-2xl p-12 shadow-md border-2 border-blue-100 hover:translate-y-[-8px] hover:shadow-xl hover:border-blue-800 transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-18 h-18 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`} style={{ width: '72px', height: '72px' }}>
                    <item.icon className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-[24px] font-bold text-slate-900 mb-4 leading-[1.4]">{item.title}</h3>
                  <p className="text-[17px] text-slate-700 leading-[1.6]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-[120px] bg-gradient-to-r from-blue-900 via-blue-800 to-teal-600 to-teal-500 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 30%, #0d9488 70%, #14b8a6 100%)' }}>
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
              <h2 className="text-[56px] font-bold text-white mb-6 leading-tight" style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.2)' }}>
                Fix FNOL delays, reduce claims leakage, and protect margins—without adding complexity.
              </h2>
              <p className="text-[22px] text-white/95 mb-12 max-w-[700px] mx-auto leading-relaxed">
                Join leading insurance carriers already using AI Mill to transform claims, underwriting, and customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-800 px-12 py-5 text-lg font-bold hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all rounded-xl"
                  asChild
                >
                  <Link to="/contact">
                    Talk to Insurance AI Experts
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/50 text-white px-10 py-5 text-lg font-semibold hover:bg-white/20 hover:border-white backdrop-blur-sm rounded-xl"
                  asChild
                >
                  <Link to="/solutions">View Insurance Case Studies →</Link>
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

export default Insurance;
