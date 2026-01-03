import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight, TrendingDown, Clock, Database, Users, AlertCircle,
  Target, TrendingUp, Shield, Zap, BarChart3, CheckCircle,
  CreditCard, Wallet, FileText, ArrowUp, ArrowDown, Brain,
  Activity, TrendingDown as TrendingDownIcon, Building2, Scale,
  RefreshCw, PieChart as PieChartIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Lending = () => {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const challenges = [
    { icon: TrendingDown, text: "High default rates due to incomplete risk assessment", gradient: "from-red-500 to-red-600", bgColor: "bg-red-500/15" },
    { icon: Clock, text: "Slow and manual underwriting processes", gradient: "from-orange-500 to-orange-600", bgColor: "bg-orange-500/15" },
    { icon: AlertCircle, text: "Rising fraud losses and sophisticated fraud patterns", gradient: "from-red-500 to-red-600", bgColor: "bg-red-500/15" },
    { icon: Database, text: "Credit decisions based on static, backward-looking data", gradient: "from-blue-500 to-blue-600", bgColor: "bg-blue-500/15" },
    { icon: Scale, text: "Difficulty balancing growth with regulatory compliance", gradient: "from-purple-500 to-purple-600", bgColor: "bg-purple-500/15" },
    { icon: AlertCircle, text: "Lost revenue, rising NPAs, operational inefficiencies, and customer dissatisfaction", gradient: "from-amber-500 to-amber-600", bgColor: "bg-amber-500/15" },
  ];

  const solutions = [
    {
      number: "01",
      title: "Credit Risk Intelligence & Autonomous Underwriting",
      challenge: "Traditional credit scoring relies heavily on bureau scores and fixed rules, which fail to capture real behavioral risk and changing borrower circumstances.",
      solution: "We build advanced machine learning credit risk models that analyze transactional data, repayment behavior, income patterns, and alternative data sources.",
      howItWorks: [
        { agent: "Risk assessment agents", action: "continuously evaluate borrower profiles" },
        { agent: "Scenario simulation agents", action: "test multiple risk outcomes" },
        { agent: "Decision agents", action: "recommend approvals, limits, and pricing" },
        { agent: "Learning agents", action: "recalibrate models as borrower behavior evolves" },
      ],
      metrics: [

        { value: "35%", label: "Reduction in Defaults", color: "text-green" },
        { value: "50%", label: "Faster Approvals", color: "text-cyan" },
        { value: "28%", label: "Cost Savings", color: "text-purple" },

        { value: "25-40% ↓", label: "Default & Delinquency Rates", color: "text-green-600", borderColor: "border-t-green-500" },
        { value: "Higher Approval", label: "For Low-Risk Borrowers", color: "text-blue-600", borderColor: "border-t-blue-500" },
        { value: "Faster Decisions", label: "Consistent Credit Choices", color: "text-purple-600", borderColor: "border-t-purple-500" },

      ],
      badgeGradient: "from-blue-500 to-purple-500",
    },
    {
      number: "02",
      title: "Portfolio Monitoring & Early Warning Systems",
      challenge: "Most lenders identify stress only after borrowers miss payments, when recovery options are limited.",
      solution: "We deploy early warning systems that predict borrower stress well before defaults occur.",
      howItWorks: [
        { agent: "Monitoring agents", action: "track behavioral and transactional signals" },
        { agent: "Risk agents", action: "flag accounts likely to deteriorate" },
        { agent: "Action agents", action: "trigger proactive interventions (restructuring, alerts, outreach)" },
      ],
      metrics: [

        { value: "42%", label: "Early Detection Rate", color: "text-green" },
        { value: "30%", label: "Lower Write-offs", color: "text-cyan" },
        { value: "55%", label: "Recovery Improvement", color: "text-purple" },

        { value: "Weeks Earlier", label: "Early Risk Detection", color: "text-amber-600", borderColor: "border-t-amber-500" },
        { value: "↓ NPAs", label: "Reduced Write-offs", color: "text-green-600", borderColor: "border-t-green-500" },
        { value: "Stable Portfolio", label: "Improved Health", color: "text-blue-600", borderColor: "border-t-blue-500" },

      ],
      badgeGradient: "from-green-500 to-green-600",
    },
    {
      number: "03",
      title: "Fraud Detection & Financial Crime Prevention",
      challenge: "Fraud tactics evolve faster than rule-based detection systems, leading to significant financial losses.",
      solution: "We use real-time anomaly detection, graph analytics, and behavioral modeling to identify suspicious activity.",
      howItWorks: [
        { agent: "Fraud detection agents", action: "analyze transactions in real time" },
        { agent: "Network agents", action: "uncover hidden fraud rings" },
        { agent: "Response agents", action: "autonomously block or flag transactions" },
        { agent: "Learning agents", action: "adapt to new fraud patterns" },
      ],
      metrics: [

        { value: "65%", label: "Fraud Detection Rate", color: "text-green" },
        { value: "70%", label: "Loss Reduction", color: "text-cyan" },
        { value: "45%", label: "False Positive Reduction", color: "text-purple" },

        { value: "50-70% ↓", label: "Fraud-Related Losses", color: "text-green-600", borderColor: "border-t-green-500" },
        { value: "Fewer False+", label: "Better Accuracy", color: "text-purple-600", borderColor: "border-t-purple-500" },
        { value: "↑ Trust", label: "Improved Customer Confidence", color: "text-blue-600", borderColor: "border-t-blue-500" },

      ],
      badgeGradient: "from-red-500 to-red-600",
    },
    {
      number: "04",
      title: "Regulatory & Compliance Intelligence",
      challenge: "Manual compliance monitoring is costly, slow, and error-prone.",
      solution: "AI-driven compliance analytics continuously monitor transactions, policies, and regulatory requirements.",
      howItWorks: [
        { agent: "Compliance agents", action: "detect violations" },
        { agent: "Reporting agents", action: "generate audit-ready outputs" },
        { agent: "Alert agents", action: "ensure timely corrective actions" },
      ],
      metrics: [

        { value: "40%", label: "Compliance Cost Reduction", color: "text-green" },
        { value: "95%", label: "Audit Pass Rate", color: "text-cyan" },
        { value: "60%", label: "Time Savings", color: "text-purple" },

        { value: "30-50% ↓", label: "Compliance Overhead", color: "text-amber-600", borderColor: "border-t-amber-500" },
        { value: "↓ Risk", label: "Reduced Regulatory Exposure", color: "text-orange-600", borderColor: "border-t-orange-500" },
        { value: "Faster Audits", label: "Automated Reporting", color: "text-blue-600", borderColor: "border-t-blue-500" },

      ],
      badgeGradient: "from-purple-500 to-purple-600",
    },
  ];

  const roiMetrics = [
    { metric: "Default / NPA Rates", improvement: "↓ 25–40%", trend: "down" },
    { metric: "Loan Approval Time", improvement: "↓ 60–80%", trend: "down" },
    { metric: "Fraud Losses", improvement: "↓ 50–70%", trend: "down" },
    { metric: "Operational Costs", improvement: "↓ 30–50%", trend: "down" },
    { metric: "Payback Period", improvement: "3–6 months", trend: "neutral", highlight: true },
  ];

  const whyAIMill = [
    {
      icon: Database,
      title: "Built for Real-World Complexity",
      description: "Handles messy financial data, legacy systems, and regulatory constraints with enterprise-grade reliability.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Shield,
      title: "Explainable AI Models",
      description: "Transparent decisions aligned with regulatory compliance requirements and audit standards.",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: Activity,
      title: "Agentic Systems",
      description: "Continuous monitoring, autonomous decisions, and real-time actions without human intervention.",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description: "Fast deployment with measurable KPIs and typical payback period of 3-6 months.",
      gradient: "from-amber-500 to-amber-600",
    },
  ];

  const solutionIcons = [Brain, Zap, Target, RefreshCw];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}

        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-black">
          {/* Background Texture Overlay - Matching Main Page */}
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

          {/* Ambient Glows - Using Theme Colors */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center py-20 lg:py-32">
              {/* Left Content - 50% */}
              {/* Left Content Area */}


        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="container mx-auto max-w-[1400px] px-[80px] relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center py-20">
              {/* Left Content */}


              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}
                className="space-y-8"
              >

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-8"
                >

                  <span className="text-[11px] uppercase tracking-[0.3em] text-cyan font-bold opacity-80">
                    Enterprise Financial Intelligence


                  <span className="text-[12px] uppercase tracking-[2px] text-blue-500 font-semibold">
                    FROM RULE-BASED DECISIONS TO AUTONOMOUS FINANCIAL INTELLIGENCE

                  </span>
                </motion.div>
                
                {/* Optional Icon */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mb-8"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center" style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                    <Building2 className="w-6 h-6 text-blue-500" />
                  </div>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}

                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[0.95] tracking-[-0.03em] text-foreground mb-8"
                >
                  Scale <span className="gradient-text">Autonomy</span> <br />
                  Across Your <br />
                  Lending Stack

                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[64px] font-extrabold leading-[1.1] text-white mb-8"
                >
                  Lending & Financial Services<br />AI Solutions

                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-[24px] font-normal leading-[1.5] text-slate-300 max-w-[600px] mb-6"
                >
                  The future of financial services belongs to institutions that can make faster, smarter, and safer decisions at scale.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}

                  className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[540px] mb-12 font-medium"


                  className="text-[18px] leading-[1.7] text-slate-400 max-w-[580px] mb-12"


                >
                  Deploy agentic AI systems that transform static risk models into dynamic execution engines. Modernize underwriting, monitoring, and recovery with bank-grade intelligence.
                </motion.p>

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


                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 h-[56px] text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 rounded-xl"

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

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[520px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-12 flex items-center justify-center border border-gray-200/50 shadow-2xl">
                  <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                    {[
                      { icon: BarChart3, label: "Credit Score", value: "750", color: "text-blue-600" },
                      { icon: TrendingUp, label: "Risk Level", value: "Low", color: "text-green-600" },
                      { icon: CheckCircle, label: "Status", value: "Approved", color: "text-blue-600" },
                      { icon: Activity, label: "Transactions", value: "Active", color: "text-purple-600" },
                      { icon: PieChartIcon, label: "Portfolio", value: "Healthy", color: "text-cyan-600" },
                      { icon: Shield, label: "Compliance", value: "Pass", color: "text-green-600" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                        className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all"
                      >
                        <item.icon className={`w-6 h-6 ${item.color} mx-auto mb-3`} />
                        <div className="text-xs text-slate-600 text-center mb-2 font-medium">{item.label}</div>
                        <div className={`text-xl font-bold ${item.color} text-center`}>{item.value}</div>
                      </motion.div>
                    ))}

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
          {/* Elegant Grey Texture Background - Matching Main Page */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Rich gradient base */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-zinc-950/30 to-zinc-900/40" />
            
            {/* Visible mesh gradient */}
            <div className="absolute inset-0 opacity-50" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(128,128,128,0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(128,128,128,0.15) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(128,128,128,0.1) 0%, transparent 70%)
              `,
            }} />
            
            {/* Visible dot pattern */}
            <div className="absolute inset-0 opacity-40" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.25'%3E%3Ccircle cx='15' cy='15' r='1.5'/%3E%3Ccircle cx='45' cy='15' r='1.5'/%3E%3Ccircle cx='15' cy='45' r='1.5'/%3E%3Ccircle cx='45' cy='45' r='1.5'/%3E%3Ccircle cx='30' cy='30' r='1.2'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            
            {/* Visible grid */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px),
                repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px)
              `,

        <section className="relative py-[120px] bg-gradient-to-b from-slate-700 to-slate-600 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,

            }} />
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.2]">Industry Challenges</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-[900px] mx-auto leading-[1.6]">
                Lenders face increasing pressure to make faster, smarter decisions while managing risk and compliance.

              <h2 className="text-[48px] font-bold text-white mb-6 leading-[1.2]">Industry Challenges</h2>
              <p className="text-[20px] text-slate-300 max-w-[900px] mx-auto leading-[1.6]">
                The lending and financial services industry operates in an environment of thin margins, high risk, and intense regulatory pressure. Institutions are expected to grow loan books, improve customer experience, and control defaults — all at the same time.

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

                  className="group glass rounded-xl p-8 border border-border/50 hover:border-cyan/30 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan/20 flex items-center justify-center mb-4 group-hover:bg-cyan/30 transition-colors">
                    <challenge.icon className="w-6 h-6 text-cyan group-hover:text-cyan" />
                  </div>
                  <p className="text-base lg:text-lg text-foreground leading-relaxed">{challenge.text}</p>

                  className="group bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 hover:bg-white/8 hover:border-white/20 hover:translate-y-[-8px] hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${challenge.gradient} ${challenge.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <challenge.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[20px] font-medium text-slate-100 leading-[1.5]">{challenge.text}</p>

                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}

        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
          {/* Elegant Grey Texture Background - Matching Main Page */}
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


        <section className="relative py-[120px] bg-slate-50">
          <div className="container mx-auto max-w-[1200px] px-[80px]">


            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`mb-[80px] last:mb-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-100'} rounded-2xl p-[60px]`}
              >
                <div className="flex flex-col lg:flex-row gap-[60px] items-start">
                  {/* Number Badge - Sticky on desktop, float left on mobile */}
                  <div className="flex-shrink-0">

                    <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-cyan to-green flex items-center justify-center text-foreground text-4xl font-bold shadow-xl hover:shadow-2xl transition-all">

                    <div className={`w-[120px] h-[120px] rounded-full bg-gradient-to-br ${solution.badgeGradient} flex items-center justify-center text-white text-[56px] font-bold shadow-xl hover:shadow-2xl transition-all lg:sticky lg:top-[100px]`}>

                      {solution.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 leading-[1.3]">{solution.title}</h3>



                    <h3 className="text-[40px] font-bold text-slate-900 mb-10 leading-[1.2]">{solution.title}</h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {/* Challenge Box */}

                      <div className="glass border-l-4 border-destructive p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-destructive font-bold mb-3 block">
                          THE CHALLENGE
                        </span>
                        <p className="text-base text-foreground leading-relaxed">{solution.challenge}</p>
                      </div>

                      {/* Solution Box */}
                      <div className="glass border-l-4 border-cyan p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-cyan font-bold mb-3 block">
                          AI MILL SOLUTION
                        </span>
                        <p className="text-base text-foreground leading-relaxed">{solution.solution}</p>


                      <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-red-600 font-bold mb-3 block">
                          THE CHALLENGE
                        </span>
                        <p className="text-[18px] text-gray-800 leading-[1.6]">{solution.challenge}</p>
                      </div>

                      {/* Solution Box */}
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-blue-600 font-bold mb-3 block">
                          AI MILL SOLUTION
                        </span>
                        <p className="text-[18px] text-gray-800 leading-[1.6]">{solution.solution}</p>


                      </div>
                    </div>

                    {/* How Agentic AI Operates */}

                    <div className="mb-10 glass border border-green/30 p-8 rounded-xl">
                      <h4 className="text-xl font-semibold text-foreground mb-6">How Agentic AI Operates</h4>
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
                            <div className="w-6 h-6 rounded-full bg-green flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-4 h-4 text-foreground" />
                            </div>
                            <div>
                              <span className="font-semibold text-foreground">{item.agent}</span>
                              <span className="text-muted-foreground"> → {item.action}</span>
                            </div>
                          </motion.div>
                        ))}


                    <div className="mb-10 bg-green-50 border border-green-300 p-10 rounded-xl">
                      <h4 className="text-base font-bold text-green-700 uppercase tracking-wider mb-6">HOW AGENTIC AI OPERATES</h4>
                      <div className="space-y-5">
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
                              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <span className="font-semibold text-[17px] text-gray-800">{item.agent}</span>
                                <span className="text-[17px] text-gray-800"> {item.action}</span>
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

                          className="glass rounded-xl p-8 shadow-md hover:shadow-xl hover:border-cyan/30 border border-border/50 transition-all group"
                        >
                          <div className={`text-2xl font-bold ${metric.color} mb-3 group-hover:scale-110 transition-transform`}>
                            {metric.value}
                          </div>
                          <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>


                          className="bg-white rounded-xl p-8 shadow-md border border-gray-200 hover:shadow-xl hover:translate-y-[-8px] transition-all text-center"

                        >
                          <div className={`border-t-[3px] ${metric.borderColor} pt-6`}>
                            <div className={`text-[48px] font-bold ${metric.color} mb-3`}>
                              {metric.value}
                            </div>
                            <p className="text-base font-medium text-slate-600 leading-[1.4]">{metric.label}</p>
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

        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
          {/* Elegant Grey Texture Background - Matching Main Page */}
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
          <div className="container mx-auto max-w-[800px] relative z-10">


        <section className="relative py-[100px] bg-white">
          <div className="container mx-auto max-w-[900px] px-[80px]">


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.2]">ROI Metrics</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-[1.6]">
                Measurable improvements across key lending metrics
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
                <thead className="bg-gradient-to-r from-cyan to-green">
                  <tr>
                    <th className="px-6 py-5 text-left text-foreground font-bold text-lg">Metric</th>
                    <th className="px-6 py-5 text-right text-foreground font-bold text-lg">Improvement</th>
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
                        } ${row.highlight ? "bg-yellow/10 border-l-4 border-yellow-500" : ""} hover:bg-cyan/10 hover:scale-[1.01] transition-all`}
                    >
                      <td className="px-6 py-5 font-semibold text-foreground text-base">{row.metric}</td>
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
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
          {/* Elegant Grey Texture Background - Matching Main Page */}
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
              className="text-center mb-20"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.2]">Why AI Mill</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-[1.6]">
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
                  className="group glass rounded-2xl p-10 shadow-md hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan to-green flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <item.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 leading-[1.4]">{item.title}</h3>
                  <p className="text-base text-muted-foreground leading-[1.6]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 bg-background overflow-hidden">
          {/* Background texture matching main page */}
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Grow your loan portfolio without growing risk.
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Join leading financial institutions using AI Mill to reduce defaults, detect fraud, and streamline operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="group">
                    Talk to Our Experts
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

export default Lending;