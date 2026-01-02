import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  ArrowRight, TrendingDown, Clock, Database, Users, AlertCircle,
  Target, TrendingUp, Shield, Zap, BarChart, CheckCircle,
  Factory, Settings, ArrowUp, ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Manufacturing = () => {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const challenges = [
    { icon: AlertCircle, text: "Unexpected equipment failures causing downtime" },
    { icon: TrendingDown, text: "Quality control issues leading to defects and recalls" },
    { icon: Clock, text: "Inefficient production scheduling and resource allocation" },
    { icon: Database, text: "Siloed data across machines and systems" },
    { icon: Users, text: "Skills gap in operating advanced manufacturing systems" },
    { icon: BarChart, text: "Difficulty optimizing production for cost and quality" },
  ];

  const solutions = [
    {
      number: "01",
      title: "Predictive Maintenance & Asset Intelligence",
      challenge: "Unplanned equipment failures cause significant downtime and production losses, but traditional maintenance schedules are either too frequent (wasteful) or too infrequent (risky).",
      solution: "AI agents monitor equipment health in real-time, predicting failures before they occur and scheduling maintenance at optimal times, reducing downtime by 40-50% and maintenance costs by 25-30%.",
      howItWorks: [
        { agent: "Sensor Monitoring Agents", action: "Continuously analyze vibration, temperature, and performance data" },
        { agent: "Failure Prediction Agents", action: "Identify patterns indicating impending equipment failure" },
        { agent: "Maintenance Scheduling Agents", action: "Optimize maintenance timing to minimize production impact" },
        { agent: "Parts Management Agents", action: "Ensure required parts are available when needed" },
      ],
      metrics: [
        { value: "45%", label: "Downtime Reduction", color: "text-green-600" },
        { value: "28%", label: "Maintenance Cost Savings", color: "text-blue-600" },
        { value: "35%", label: "Equipment Life Extension", color: "text-cyan-600" },
      ],
    },
    {
      number: "02",
      title: "AI-Driven Quality Inspection & Defect Prevention",
      challenge: "Quality defects are often detected too late in the production process, resulting in waste, rework, and potential recalls that damage brand reputation.",
      solution: "AI agents analyze production data, sensor readings, and visual inspections to detect quality issues in real-time, enabling immediate corrective action.",
      howItWorks: [
        { agent: "Visual Inspection Agents", action: "Analyze images and video for defects and anomalies" },
        { agent: "Process Monitoring Agents", action: "Track production parameters that affect quality" },
        { agent: "Root Cause Analysis Agents", action: "Identify causes of quality issues automatically" },
        { agent: "Corrective Action Agents", action: "Recommend and implement fixes in real-time" },
      ],
      metrics: [
        { value: "50%", label: "Defect Rate Reduction", color: "text-green-600" },
        { value: "40%", label: "Rework Cost Savings", color: "text-blue-600" },
        { value: "60%", label: "Inspection Time Reduction", color: "text-cyan-600" },
      ],
    },
    {
      number: "03",
      title: "Autonomous Production Planning & Scheduling",
      challenge: "Complex manufacturing operations with multiple production lines, constraints, and objectives make it difficult to optimize schedules and resource allocation.",
      solution: "AI agents optimize production schedules, resource allocation, and sequencing in real-time, maximizing throughput while minimizing costs and meeting quality standards.",
      howItWorks: [
        { agent: "Scheduling Optimization Agents", action: "Create optimal production schedules considering constraints" },
        { agent: "Resource Allocation Agents", action: "Assign machines, materials, and labor efficiently" },
        { agent: "Throughput Optimization Agents", action: "Identify bottlenecks and optimize flow" },
        { agent: "Energy Management Agents", action: "Optimize energy consumption while maintaining production" },
      ],
      metrics: [
        { value: "22%", label: "Throughput Increase", color: "text-green-600" },
        { value: "18%", label: "Energy Cost Reduction", color: "text-blue-600" },
        { value: "30%", label: "On-Time Delivery Improvement", color: "text-cyan-600" },
      ],
    },
  ];

  const roiMetrics = [
    { metric: "Unplanned Downtime", improvement: "45%", trend: "down" },
    { metric: "Maintenance Cost", improvement: "28%", trend: "down" },
    { metric: "Throughput", improvement: "22%", trend: "up" },
    { metric: "Quality Defects", improvement: "50%", trend: "down" },
    { metric: "Payback Period", improvement: "7 months", trend: "neutral", highlight: true },
  ];

  const whyAIMill = [
    {
      icon: Shield,
      title: "Industrial-Grade Reliability",
      description: "Built for manufacturing environments with robust systems that operate 24/7 in demanding conditions.",
    },
    {
      icon: Zap,
      title: "Real-Time Control",
      description: "Make production decisions in real-time with AI agents that respond instantly to changing conditions.",
    },
    {
      icon: TrendingUp,
      title: "Proven Performance",
      description: "Average 40-50% reduction in downtime and 25-30% improvement in overall equipment effectiveness.",
    },
    {
      icon: Target,
      title: "Seamless Integration",
      description: "Integrate with existing MES, ERP, and SCADA systems without disrupting operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
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
                  <span className="text-[12px] uppercase tracking-[2px] text-gray-600 font-semibold">
                    FROM REACTIVE OPERATIONS TO AUTONOMOUS MANUFACTURING
                  </span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[60px] font-extrabold leading-[1.1] text-[#0f0f0f] mb-6"
                >
                  Manufacturing Industry AI Solutions
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-[22px] font-normal leading-[1.6] text-[#4b5563] max-w-[600px] mb-6"
                >
                  Transform your manufacturing operations with AI that predicts failures, optimizes production, 
                  ensures quality, and reduces costs—increasing throughput by 20%+ while cutting downtime by 45%.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-[18px] leading-[1.7] text-[#6b7280] max-w-[580px] mb-8"
                >
                  AI Mill enables manufacturers to move beyond reactive maintenance and manual quality control by deploying Data Science and Agentic AI systems that continuously monitor equipment, predict failures, optimize production, and ensure quality — autonomously and in real time.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-gray-700 to-red-600 hover:from-gray-800 hover:to-red-700 text-white px-8 h-[56px] text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 rounded-xl"
                    asChild
                  >
                    <Link to="/contact">
                      Transform Your Manufacturing
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
                className="relative h-[500px] lg:h-[600px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-red-500/20 to-cyan-500/20 rounded-3xl blur-3xl animate-pulse" />
                <div className="relative h-full bg-gradient-to-br from-gray-50 via-white to-red-50 rounded-3xl p-8 flex items-center justify-center border border-gray-100/50 shadow-2xl">
                  <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                        className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                      >
                        <Settings className="w-8 h-8 text-gray-700 mx-auto" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="relative py-[120px] bg-gradient-to-b from-[#18181b] to-[#27272a] overflow-hidden">
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
                Modern manufacturing faces increasing complexity, quality demands, and cost pressures.
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
                  className="group bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 hover:bg-white/10 hover:border-gray-400/30 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-500/20 flex items-center justify-center mb-4 group-hover:bg-gray-500/30 transition-colors">
                    <challenge.icon className="w-6 h-6 text-gray-400 group-hover:text-gray-300" />
                  </div>
                  <p className="text-base lg:text-lg text-white leading-relaxed">{challenge.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="relative py-[120px] bg-gradient-to-b from-white via-gray-50/50 to-white">
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
                  {/* Number Badge - 120px diameter, circular gradient */}
                  <div className="flex-shrink-0">
                    <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-gray-700 to-red-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl hover:shadow-2xl transition-all">
                      {solution.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[36px] font-bold text-black mb-10 leading-[1.3]">{solution.title}</h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                      {/* Challenge Box */}
                      <div className="bg-[#fef2f2] border-l-4 border-red-500 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-red-600 font-bold mb-3 block">
                          THE CHALLENGE
                        </span>
                        <p className="text-base text-gray-700 leading-relaxed">{solution.challenge}</p>
                      </div>

                      {/* Solution Box */}
                      <div className="bg-gray-50/80 border-l-4 border-gray-500 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-gray-600 font-bold mb-3 block">
                          AI MILL SOLUTION
                        </span>
                        <p className="text-base text-gray-700 leading-relaxed">{solution.solution}</p>
                      </div>
                    </div>

                    {/* How Agentic AI Operates */}
                    <div className="mb-10 bg-green-50/50 p-8 rounded-xl">
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">How Agentic AI Operates</h4>
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
                              <span className="font-semibold text-gray-900">{item.agent}</span>
                              <span className="text-gray-600"> → {item.action}</span>
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
                          className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:border-gray-300 transition-all group"
                        >
                          <div className={`text-[24px] font-bold ${metric.color} mb-3 group-hover:scale-110 transition-transform`}>
                            {metric.value}
                          </div>
                          <p className="text-sm font-medium text-gray-600">{metric.label}</p>
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
        <section className="relative py-[120px] bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-[800px] px-[80px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-[44px] font-bold text-black mb-4 leading-[1.2]">ROI Metrics</h2>
              <p className="text-[20px] text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                Measurable improvements across key manufacturing metrics
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
                <thead className="bg-gradient-to-r from-gray-700 to-red-600">
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
                      className={`${
                        idx % 2 === 0 ? "bg-white" : "bg-[#f9fafb]"
                      } ${row.highlight ? "bg-yellow-50 border-l-4 border-yellow-500" : ""} hover:bg-gray-100/50 hover:scale-[1.01] transition-all`}
                    >
                      <td className="px-6 py-5 font-semibold text-gray-900 text-base">{row.metric}</td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end gap-3">
                          {row.trend === "up" && <ArrowUp className="w-5 h-5 text-green-600" />}
                          {row.trend === "down" && <ArrowDown className="w-5 h-5 text-red-600" />}
                          <span className={`text-[24px] font-bold ${
                            row.trend === "up" ? "text-green-600" : 
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
        <section className="relative py-[120px] bg-white">
          <div className="container mx-auto max-w-7xl px-[80px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-[44px] font-bold text-black mb-4 leading-[1.2]">Why AI Mill</h2>
              <p className="text-[20px] text-gray-600 max-w-2xl mx-auto leading-[1.6]">
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
                  className="group bg-white rounded-2xl p-10 shadow-md hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
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
        <section className="relative py-[120px] bg-gradient-to-r from-gray-700 via-gray-800 to-red-600 overflow-hidden">
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
                Transform your manufacturing operations into an intelligent, self-optimizing ecosystem.
              </h2>
              <p className="text-[20px] text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join leading manufacturers using AI Mill to reduce downtime, improve quality, and optimize production.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-gray-700 px-10 py-7 text-lg font-semibold hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all rounded-xl"
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

export default Manufacturing;

