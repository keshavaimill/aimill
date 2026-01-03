import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight, TrendingDown, Clock, Database, Users, AlertCircle,
  Target, TrendingUp, Shield, Zap, BarChart3, CheckCircle,
  FileText, ArrowUp, ArrowDown, Brain, Activity, RefreshCw, Send,
  Sparkles, Network
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MarketingAgent = () => {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const challenges = [
    { icon: Users, text: "Manual customer segmentation that delays speed-to-market", gradient: "from-cyan to-green", bgColor: "bg-cyan/15" },
    { icon: Clock, text: "Weeks spent planning and executing multi-channel campaigns", gradient: "from-purple to-pink-500", bgColor: "bg-purple/15" },
    { icon: AlertCircle, text: "Fragmented customer experience across disconnected silos", gradient: "from-destructive to-red-700", bgColor: "bg-destructive/15" },
    { icon: TrendingDown, text: "Low conversion rates due to generic, impersonal content", gradient: "from-cyan to-green", bgColor: "bg-cyan/15" },
    { icon: BarChart3, text: "Difficulty measuring true ROI across all marketing spend", gradient: "from-purple to-pink-500", bgColor: "bg-purple/15" },
    { icon: RefreshCw, text: "High operational overhead and team burnout from manual work", gradient: "from-cyan to-green", bgColor: "bg-cyan/15" },
  ];

  const solutionIcons = [Brain, Target, Sparkles, Send, Activity];

  const solutions = [
    {
      number: "01",
      title: "Autonomous Segmentation & High-Intent Targeting",
      challenge: "Manual segmentation is time-consuming and often miss-identifies key growth clusters or churn risks.",
      solution: "Our Marketing Agent ingests CRM and transaction data to autonomously build high-fidelity segments and predict intent in real-time.",
      howItWorks: [
        { agent: "Data Ingest Agents", action: "sync data across CRM, Web, and ERP silos" },
        { agent: "Intent Agents", action: "score every customer profile based on behavioral signals" },
        { agent: "Cluster Agents", action: "identify micro-segments for hyper-personalized outreach" },
      ],
      metrics: [
        { value: "35% ↑", label: "Conversion Rate Increase", color: "text-green" },
        { value: "↓ Churn", label: "Early Warning System", color: "text-cyan" },
        { value: "Real-time", label: "Segment Refresh Rate", color: "text-purple" },
      ],
      badgeGradient: "from-cyan to-green",
    },
    {
      number: "02",
      title: "Agentic Content Generation & A/B Optimization",
      challenge: "Creative teams are bottlenecks, often taking weeks to produce variations for multi-channel testing.",
      solution: "AI agents use brand guidelines and product data to generate personalized copy and visuals, executing continuous A/B tests to maximize ROI.",
      howItWorks: [
        { agent: "Brand Voice Agents", action: "ensure consistency across all generated assets" },
        { agent: "Creative Agents", action: "generate multi-variant copy and image prompts" },
        { agent: "Optimization Agents", action: "autonomously shift spend to winning variants" },
      ],
      metrics: [
        { value: "80% ↓", label: "Content Production Time", color: "text-cyan" },
        { value: "3x", label: "ROI Improvement", color: "text-green" },
        { value: "-40%", label: "Creation Costs", color: "text-purple" },
      ],
      badgeGradient: "from-purple to-pink-500",
    },
    {
      number: "03",
      title: "Multi-Channel Orchestration & Execution",
      challenge: "Coordinating consistent messaging across Email, Social, SMS, and WhatsApp is manual and prone to error.",
      solution: "The Marketing Agent acts as a central air traffic controller, deploying the right message at the right time on the right channel.",
      howItWorks: [
        { agent: "Orchestration Agents", action: "map the optimal customer journey path" },
        { agent: "Channel Agents", action: "execute deployment across integrated platforms" },
        { agent: "Feedback Agents", action: "capture cross-channel signals for central learning" },
      ],
      metrics: [
        { value: "5x", label: "Faster Market Speed", color: "text-cyan" },
        { value: "Seamless", label: "Omnichannel Continuity", color: "text-green" },
        { value: "2.5x", label: "Higher Lifetime Value", color: "text-purple" },
      ],
      badgeGradient: "from-cyan to-blue-600",
    },
  ];

  const roiMetrics = [
    { metric: "Launch Velocity", improvement: "5x faster", trend: "up" },
    { metric: "Conversion Rates", improvement: "↑ 35%", trend: "up" },
    { metric: "Marketing Ops Cost", improvement: "↓ 60%", trend: "down" },
    { metric: "Customer LTV", improvement: "+18%", trend: "up" },
    { metric: "Ad Spend Efficiency", improvement: "25% improvement", trend: "up", highlight: true },
  ];

  const whyAIMill = [
    {
      icon: Target,
      title: "Deep Personalization",
      description: "Go beyond 'First Name' tokens with AI that understands intent, sentiment, and behavior.",
      gradient: "from-cyan to-green",
    },
    {
      icon: RefreshCw,
      title: "Continuous Learning",
      description: "Our agents don't just execute; they learn from every click and conversion to optimize the next.",
      gradient: "from-purple to-pink-500",
    },
    {
      icon: Network,
      title: "Seamless Integration",
      description: "Connects with your entire tech stack—from CRM and ERP to Ad platforms and Messaging APIs.",
      gradient: "from-cyan to-blue-600",
    },
    {
      icon: Shield,
      title: "Brand Safe Execution",
      description: "Rigorous governance layers ensure all AI-generated content stays within brand and legal guidelines.",
      gradient: "from-green to-cyan",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
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
                    Autonomous Marketing Execution
                  </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[0.95] tracking-[-0.03em] text-foreground mb-8"
                >
                  Drive <span className="gradient-text">Growth</span> <br />
                  With Agentic <br />
                  Execution
                </motion.h1>

                {/* Supporting Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[540px] mb-12 font-medium"
                >
                  Deploy AI agents that analyze intent, generate content, and execute campaigns across channels. Turn your marketing stack into a self-directed revenue engine.
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
                      Book Strategic Demo
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/solutions">
                    <Button variant="heroOutline" size="lg">
                      View All Agents
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
                {/* Elevated Product Card */}
                <div className="relative z-20 w-full aspect-[4/5] max-w-[500px] mx-auto bg-[#f8fafc] rounded-[32px] p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5),0_0_80px_-10px_rgba(34,197,94,0.2)] border border-white/40 overflow-hidden">

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
                      <div className="px-3 py-1 bg-green-50 border border-green-100 rounded-full text-[10px] font-bold text-green-600 uppercase tracking-widest">
                        Marketing Engine Active
                      </div>
                    </div>

                    {/* Metric Cards Grid */}
                    <div className="grid grid-cols-2 gap-6 flex-1 content-start">
                      {[
                        { icon: Target, label: "Intent Score", value: "98.2%", color: "blue" },
                        { icon: Activity, label: "Conv. Rate", value: "+35%", color: "emerald" },
                        { icon: Send, label: "Live Flows", value: "24", color: "indigo" },
                        { icon: Sparkles, label: "Assets Gen", value: "1,240", color: "violet" },
                        { icon: Users, label: "Active Segs", value: "842", color: "blue" },
                        { icon: TrendingUp, label: "Ad ROI", value: "4.2x", color: "emerald" },
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
                        <span className="text-xs font-bold text-slate-500">Execution Cluster</span>
                      </div>
                      <div className="h-6 w-24 bg-slate-100 rounded-md animate-pulse" />
                    </div>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.2]">The Marketing Bottleneck</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-[900px] mx-auto leading-[1.6]">
                Modern marketing requires hyper-personalization at massive scale. Manual workflows can't keep up with the speed of data and customer expectations.
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
                  <p className="text-base lg:text-lg text-foreground leading-relaxed font-medium">{challenge.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden">
          {/* Subtle mesh background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-zinc-950/30 to-zinc-900/40 pointer-events-none" />

          <div className="container mx-auto max-w-7xl relative z-10">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-[64px] last:mb-0"
              >
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-cyan to-green flex items-center justify-center text-foreground text-4xl font-bold shadow-xl">
                      {solution.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 leading-[1.3]">{solution.title}</h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
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
                          AGENTIC SOLUTION
                        </span>
                        <p className="text-base text-foreground leading-relaxed">{solution.solution}</p>
                      </div>
                    </div>

                    {/* How Agentic AI Works */}
                    <div className="mb-10 glass border border-green/30 p-8 rounded-xl bg-green-950/5">
                      <h4 className="text-base font-bold uppercase tracking-wider mb-6 text-green-400">HOW AGENTIC AI OPERATES</h4>
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
                              <div className="w-6 h-6 rounded-full bg-green flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-green/20">
                                <Icon className="w-3.5 h-3.5 text-black" />
                              </div>
                              <div className="text-base">
                                <span className="font-bold text-foreground">{item.agent}</span>
                                <span className="text-muted-foreground ml-2">→ {item.action}</span>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Metrics/Impact Cards */}
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
                          <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{metric.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ROI Metrics Section */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden">
          {/* Section Background texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-zinc-950/30 to-zinc-900/40 pointer-events-none" />

          <div className="container mx-auto max-w-[800px] relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">ROI & Impact</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Measurable growth across the entire marketing lifecycle.
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
                        } ${row.highlight ? "bg-cyan-500/10 border-l-4 border-cyan-500" : ""} hover:bg-cyan-500/10 transition-all`}
                    >
                      <td className="px-6 py-5 font-semibold text-foreground text-base">{row.metric}</td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end gap-3">
                          {row.trend === "up" && <ArrowUp className="w-5 h-5 text-green" />}
                          {row.trend === "down" && <ArrowDown className="w-5 h-5 text-destructive" />}
                          <span className={`text-2xl font-bold ${row.trend === "up" ? "text-green" :
                            row.trend === "down" ? "text-destructive" :
                              "text-foreground"
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
          <div className="absolute inset-0 bg-gradient-to-br from-background via-zinc-950/30 to-zinc-900/40 pointer-events-none" />

          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Why the AI Mill Marketing Agent</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Built for orchestration, governance, and measurable performance.
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
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
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
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 bg-black overflow-hidden">
          {/* Background texture matching industry pages */}
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
                Stop planning. <br /> Start executing.
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                Join high-growth marketing teams using AI Mill to decrease speed-to-market while increasing true ROAS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="group h-14 px-8 font-bold text-base">
                    Book Strategic Demo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/solutions">
                  <Button variant="heroOutline" size="lg" className="h-14 px-8 font-bold text-base">
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

export default MarketingAgent;
