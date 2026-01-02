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
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-32">
              {/* Left Content - 50% */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Icon with gradient circle */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-6"
                >
                  <span className="text-[12px] uppercase tracking-[2px] text-blue-600 font-semibold">
                    FROM RULE-BASED DECISIONS TO AUTONOMOUS FINANCIAL INTELLIGENCE
                  </span>
                </motion.div>
                
                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[60px] font-extrabold leading-[1.1] text-[#0f0f0f] mb-6"
                >
                  Lending & Financial Services AI Solutions
                </motion.h1>
                
                {/* Subheading */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-[22px] font-normal leading-[1.6] text-[#4b5563] max-w-[600px] mb-6"
                >
                  The future of financial services belongs to institutions that can make faster, smarter, and safer decisions at scale.
                </motion.p>
                
                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-[18px] leading-[1.7] text-[#6b7280] max-w-[580px] mb-8"
                >
                  AI Mill enables banks, NBFCs, fintechs, and lenders to move beyond static rules and legacy scoring models by deploying Data Science and Agentic AI systems that continuously assess risk, prevent fraud, and optimize portfolios — autonomously and in real time.
                </motion.p>
                
                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 h-[56px] text-lg font-semibold shadow-lg hover:shadow-xl transition-all rounded-xl"
                    asChild
                  >
                    <Link to="/contact">
                      Talk to Financial AI Experts
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Visual - 50% */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[600px] lg:h-[700px]"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-blue-600/30 rounded-3xl blur-3xl animate-pulse" />
                
                {/* Main visual container */}
                <div className="relative h-full bg-gradient-to-br from-blue-50 via-purple-50/50 to-blue-100 rounded-3xl p-8 flex items-center justify-center border border-blue-200/50 shadow-2xl overflow-hidden">
                  {/* Abstract financial visualization */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 400 400">
                      <defs>
                        <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <circle cx="20" cy="20" r="1.5" fill="#3b82f6" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#circuit)" />
                    </svg>
                  </div>
                  
                  {/* Floating card elements */}
                  <div className="relative z-10 grid grid-cols-3 gap-4 w-full max-w-md">
                    {[
                      { icon: BarChart, label: "Credit Score", value: "750" },
                      { icon: TrendingUp, label: "Risk Level", value: "Low" },
                      { icon: Shield, label: "Status", value: "Approved" },
                      { icon: Activity, label: "Transactions", value: "Active" },
                      { icon: Database, label: "Portfolio", value: "Healthy" },
                      { icon: CheckCircle, label: "Compliance", value: "Pass" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                        className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-blue-100 hover:shadow-xl transition-all"
                      >
                        <item.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <div className="text-xs text-gray-600 text-center mb-1">{item.label}</div>
                        <div className="text-sm font-bold text-blue-600 text-center">{item.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
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
                  {/* Number Badge - 120px diameter, circular gradient, sticky on scroll */}
                  <div className="flex-shrink-0">
                    <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl hover:shadow-2xl transition-all">
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
                      <div className="bg-blue-50/80 border-l-4 border-blue-500 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-blue-600 font-bold mb-3 block">
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
                          className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:border-blue-200 transition-all group"
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
                      className={`${
                        idx % 2 === 0 ? "bg-white" : "bg-[#f9fafb]"
                      } ${row.highlight ? "bg-yellow-50 border-l-4 border-yellow-500" : ""} hover:bg-blue-50/50 hover:scale-[1.01] transition-all`}
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

