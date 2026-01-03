import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  ArrowRight, TrendingDown, Clock, Database, Users, AlertCircle,
  Target, TrendingUp, Shield, Zap, BarChart, CheckCircle,
  Sprout, Wheat, ArrowUp, ArrowDown, CloudRain, Droplets, Sun,
  Thermometer, Bug, Satellite, Eye, Layers, Lightbulb, Brain,
  Cpu, Leaf, Scale, DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Agriculture = () => {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const challenges = [
    { icon: CloudRain, text: "Yield unpredictability due to weather and soil variability", gradient: "from-amber-500 to-amber-600", bgColor: "bg-amber-500/15" },
    { icon: Droplets, text: "Overuse of water, fertilizer, and pesticides", gradient: "from-sky-500 to-sky-600", bgColor: "bg-sky-500/15" },
    { icon: Bug, text: "Late detection of pests and diseases", gradient: "from-red-500 to-red-600", bgColor: "bg-red-500/15" },
    { icon: Satellite, text: "Limited real-time field visibility", gradient: "from-purple-500 to-purple-600", bgColor: "bg-purple-500/15" },
    { icon: TrendingDown, text: "Difficulty scaling best practices across large farms", gradient: "from-orange-500 to-orange-600", bgColor: "bg-orange-500/15" },
    { icon: DollarSign, text: "Lower productivity, higher costs, unsustainable resource usage", gradient: "from-amber-500 to-amber-600", bgColor: "bg-amber-500/15" },
  ];

  const solutionIcons = [Eye, Layers, Lightbulb, Brain];

  const solutions = [
    {
      number: "01",
      title: "Precision Farming & Crop Intelligence",
      challenge: "Uniform treatment of fields ignores local variability in soil, moisture, and crop health.",
      solution: "We combine satellite imagery, drone data, IoT sensors, and historical farm data to build crop intelligence models.",
      howItWorks: [
        { agent: "Crop monitoring agents", action: "assess plant health continuously" },
        { agent: "Soil intelligence agents", action: "analyze moisture and nutrient levels" },
        { agent: "Recommendation agents", action: "prescribe variable-rate irrigation and fertilization" },
        { agent: "Learning agents", action: "adapt models to local field conditions" },
      ],
      metrics: [
        { value: "15-30% ↑", label: "Crop Yield Increase", color: "text-green-700", borderColor: "border-t-green-700" },
        { value: "20-35% ↓", label: "Water & Fertilizer Usage", color: "text-sky-600", borderColor: "border-t-sky-600" },
        { value: "Healthier Crops", label: "Lower Stress Levels", color: "text-amber-600", borderColor: "border-t-amber-600" },
      ],
      badgeGradient: "from-amber-600 to-amber-500",
    },
    {
      number: "02",
      title: "Yield Forecasting & Harvest Planning",
      challenge: "Unreliable yield estimates disrupt supply contracts and pricing.",
      solution: "Predictive models forecast yield at field, crop, and regional levels.",
      howItWorks: [
        { agent: "Forecast agents", action: "update predictions throughout the growing season" },
        { agent: "Scenario agents", action: "simulate weather and disease impacts" },
        { agent: "Planning agents", action: "optimize harvest schedules and logistics" },
      ],
      metrics: [
        { value: "Better Planning", label: "Improved Supply Chain", color: "text-orange-600", borderColor: "border-t-orange-600" },
        { value: "↓ Losses", label: "Reduced Post-Harvest Waste", color: "text-green-700", borderColor: "border-t-green-700" },
        { value: "Price Optimization", label: "Better Realization", color: "text-amber-600", borderColor: "border-t-amber-600" },
      ],
      badgeGradient: "from-sky-500 to-sky-600",
    },
    {
      number: "03",
      title: "Pest & Disease Early Detection",
      challenge: "Late detection leads to rapid spread and significant crop losses.",
      solution: "Computer Vision and anomaly detection models identify early signs of pest and disease stress.",
      howItWorks: [
        { agent: "Vision agents", action: "scan crop images" },
        { agent: "Alert agents", action: "notify farmers instantly" },
        { agent: "Action agents", action: "recommend targeted treatment" },
      ],
      metrics: [
        { value: "Significant ↓", label: "Crop Loss Reduction", color: "text-green-700", borderColor: "border-t-green-700" },
        { value: "↓ Pesticides", label: "Lower Chemical Usage", color: "text-sky-600", borderColor: "border-t-sky-600" },
        { value: "Faster Response", label: "Real-Time Alerts", color: "text-red-600", borderColor: "border-t-red-600" },
      ],
      badgeGradient: "from-orange-600 to-red-600",
    },
    {
      number: "04",
      title: "Autonomous Farm Operations & Advisory",
      challenge: "Farm decisions are labor-intensive and experience-dependent.",
      solution: "Agentic AI systems act as always-on digital agronomists.",
      howItWorks: [
        { agent: "Advisory agents", action: "provide daily actionable insights" },
        { agent: "Operations agents", action: "coordinate irrigation, spraying, and harvesting" },
        { agent: "Learning agents", action: "refine recommendations season after season" },
      ],
      metrics: [
        { value: "↓ Labor", label: "Lower Dependency", color: "text-purple-600", borderColor: "border-t-purple-600" },
        { value: "Consistent", label: "Best-Practice Execution", color: "text-sky-600", borderColor: "border-t-sky-600" },
        { value: "↑ Profitability", label: "Improved Farm Income", color: "text-green-700", borderColor: "border-t-green-700" },
      ],
      badgeGradient: "from-purple-500 to-purple-600",
    },
  ];

  const roiMetrics = [
    { metric: "Crop Yield", improvement: "↑ 15–30%", trend: "up" },
    { metric: "Input Costs", improvement: "↓ 20–35%", trend: "down" },
    { metric: "Crop Loss", improvement: "↓ significantly", trend: "down" },
    { metric: "Water Usage", improvement: "↓ up to 30%", trend: "down" },
    { metric: "Payback Period", improvement: "1–2 seasons", trend: "neutral", highlight: true },
  ];

  const whyAIMill = [
    {
      icon: Scale,
      title: "Works Across Farm Sizes",
      description: "From small farms to large agribusinesses",
      gradient: "from-amber-600 to-amber-500",
    },
    {
      icon: Layers,
      title: "System Integration",
      description: "Connects satellite, IoT, and farm management systems",
      gradient: "from-sky-500 to-sky-600",
    },
    {
      icon: Cpu,
      title: "Autonomous AI",
      description: "Advises, learns, and acts independently",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Leaf,
      title: "Sustainability Focus",
      description: "Built for long-term environmental impact",
      gradient: "from-lime-500 to-lime-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-black">
          {/* Background Texture Overlay - Matching Lending Page */}
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
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-8"
                >
                  <span className="text-[11px] uppercase tracking-[0.3em] text-cyan font-bold opacity-80">
                    FROM EXPERIENCE-DRIVEN FARMING TO AUTONOMOUS PRECISION AGRICULTURE
                  </span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[0.95] tracking-[-0.03em] text-foreground mb-8"
                >
                  Agriculture <span className="gradient-text">AI Solutions</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[540px] mb-12 font-medium"
                >
                  Maximize crop yields, optimize resources, and reduce waste with AI-powered precision agriculture that learns from your fields and adapts to changing conditions in real-time.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-5"
                >
                  <Link to="/contact">
                    <Button variant="hero" size="lg" className="group">
                      Talk to Agriculture Specialists
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

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[520px]"
              >
                <div className="absolute inset-0 bg-white rounded-3xl p-12 flex items-center justify-center border border-stone-200 shadow-2xl">
                  <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                    {[
                      { icon: Sun, label: "Soil Health", value: "Excellent", color: "text-green-800", iconColor: "text-amber-600" },
                      { icon: Droplets, label: "Water Level", value: "Optimal", color: "text-sky-700", iconColor: "text-sky-600" },
                      { icon: Thermometer, label: "Temperature", value: "22°C", color: "text-amber-700", iconColor: "text-amber-600" },
                      { icon: Sprout, label: "Crop Health", value: "Healthy", color: "text-green-800", iconColor: "text-lime-600" },
                      { icon: Bug, label: "Pest Alert", value: "None", color: "text-green-800", iconColor: "text-red-600" },
                      { icon: TrendingUp, label: "Yield Forecast", value: "+18%", color: "text-amber-700", iconColor: "text-amber-600" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                        className="bg-gradient-to-b from-yellow-50 to-white rounded-xl p-6 shadow-md border border-amber-200 hover:shadow-xl hover:border-amber-400 hover:translate-y-[-4px] transition-all"
                      >
                        <item.icon className={`w-6 h-6 ${item.iconColor} mx-auto mb-3`} />
                        <div className="text-xs text-stone-700 text-center mb-2 font-medium">{item.label}</div>
                        <div className={`text-xl font-bold ${item.color} text-center`}>{item.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden">
          {/* Elegant Grey Texture Background - Matching Lending Page */}
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.2]">Industry Challenges</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-[900px] mx-auto leading-[1.6]">
                Agriculture faces increasing uncertainty from climate change, rising input costs, labor shortages, and unpredictable yields. Traditional farming practices often rely on intuition and reactive decisions, limiting scalability and profitability.
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
                  <p className="text-base lg:text-lg text-foreground leading-relaxed">{challenge.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
          {/* Elegant Grey Texture Background - Matching Lending Page */}
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
                    <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-cyan to-green flex items-center justify-center text-foreground text-4xl font-bold shadow-xl hover:shadow-2xl transition-all">
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
                          AI MILL SOLUTION
                        </span>
                        <p className="text-base text-foreground leading-relaxed">{solution.solution}</p>
                      </div>
                    </div>

                    {/* How Agentic AI Operates */}
                    <div className="mb-10 glass border border-green/30 p-8 rounded-xl">
                      <h4 className="text-xl font-semibold text-foreground mb-6">How Agentic AI Operates</h4>
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
                              <div className="w-6 h-6 rounded-full bg-green flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Icon className="w-4 h-4 text-foreground" />
                              </div>
                              <div>
                                <span className="font-semibold text-foreground">{item.agent}</span>
                                <span className="text-muted-foreground"> → {item.action}</span>
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
                          <div className={`text-2xl font-bold ${metric.color.includes('green') ? 'text-green' : metric.color.includes('sky') ? 'text-cyan' : metric.color.includes('amber') ? 'text-yellow-500' : metric.color.includes('red') ? 'text-destructive' : 'text-foreground'} mb-3 group-hover:scale-110 transition-transform`}>
                            {metric.value}
                          </div>
                          <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
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
          {/* Elegant Grey Texture Background - Matching Lending Page */}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.2]">ROI & Measurable Outcomes</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-[1.6]">
                Measurable improvements across key agricultural metrics
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
                    <th className="px-6 py-5 text-right text-foreground font-bold text-lg">Typical Improvement</th>
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
                          {row.trend === "down" && <ArrowDown className="w-5 h-5 text-cyan" />}
                          <span className={`text-2xl font-bold ${row.trend === "up" ? "text-green" :
                            row.trend === "down" ? "text-cyan" :
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
          {/* Elegant Grey Texture Background - Matching Lending Page */}
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.2]">Why AI Mill for Agriculture?</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-[1.6]">
                Built for agriculture with field-tested solutions that adapt to your unique farming operations.
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
          {/* Background texture matching Lending page */}
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
                Farm smarter, grow more, and waste less with AI Mill.
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Join leading farmers and agribusinesses already using AI Mill to transform agricultural operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="group">
                    Talk to Agriculture Specialists
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

export default Agriculture;