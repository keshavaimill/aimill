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
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-amber-50 to-orange-200">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                  <span className="text-[12px] uppercase tracking-[2px] text-amber-600 font-semibold">
                    FROM EXPERIENCE-DRIVEN FARMING TO AUTONOMOUS PRECISION AGRICULTURE
                  </span>
                </motion.div>
                
                {/* Optional Icon */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mb-8"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center" style={{ background: 'rgba(217, 119, 6, 0.1)' }}>
                    <Wheat className="w-6 h-6 text-amber-600" />
                  </div>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[64px] font-extrabold leading-[1.1] text-stone-900 mb-8"
                >
                  Agriculture AI Solutions
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-[24px] font-normal leading-[1.5] text-stone-600 max-w-[600px] mb-6"
                >
                  Maximize crop yields, optimize resources, and reduce waste with AI-powered precision agriculture that learns from your fields and adapts to changing conditions in real-time.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-[18px] leading-[1.7] text-stone-500 max-w-[580px] mb-12"
                >
                  AI Mill enables farmers and agribusinesses to move beyond traditional farming methods by deploying Data Science and Agentic AI systems that continuously monitor crops, predict yields, detect pests early, and optimize operations — autonomously and in real time.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 h-[56px] text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 rounded-xl"
                    asChild
                  >
                    <Link to="/contact">
                      Talk to Agriculture Specialists
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
        <section className="relative py-[120px] bg-gradient-to-b from-amber-900 to-amber-950 overflow-hidden">
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
              className="text-center mb-20"
            >
              <h2 className="text-[48px] font-bold text-amber-100 mb-6 leading-[1.2]">Industry Challenges</h2>
              <p className="text-[20px] text-amber-200 max-w-[900px] mx-auto leading-[1.6]">
                Agriculture faces increasing uncertainty from climate change, rising input costs, labor shortages, and unpredictable yields. Traditional farming practices often rely on intuition and reactive decisions, limiting scalability and profitability.
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
                  className="group bg-amber-50/8 backdrop-blur-md rounded-2xl p-10 border border-amber-200/15 hover:bg-amber-50/12 hover:border-amber-400/30 hover:translate-y-[-8px] hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${challenge.gradient} ${challenge.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <challenge.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[20px] font-medium text-amber-100 leading-[1.5]">{challenge.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="relative py-[120px]">
          <div className="container mx-auto max-w-[1200px] px-[80px]">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`mb-[80px] last:mb-0 ${idx % 2 === 0 ? 'bg-amber-50' : 'bg-white'} rounded-2xl p-[60px]`}
              >
                <div className="flex flex-col lg:flex-row gap-[60px] items-start">
                  {/* Number Badge - Sticky on desktop */}
                  <div className="flex-shrink-0">
                    <div className={`w-[120px] h-[120px] rounded-full bg-gradient-to-br ${solution.badgeGradient} flex items-center justify-center text-white text-[56px] font-bold shadow-xl hover:shadow-2xl transition-all lg:sticky lg:top-[100px]`}>
                      {solution.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[40px] font-bold text-stone-900 mb-10 leading-[1.2]">{solution.title}</h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {/* Challenge Box */}
                      <div className="bg-red-50 border-l-4 border-orange-500 p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-orange-600 font-bold mb-3 block">
                          THE CHALLENGE
                        </span>
                        <p className="text-[18px] text-stone-900 leading-[1.6]">{solution.challenge}</p>
                      </div>

                      {/* Solution Box */}
                      <div className="bg-yellow-50 border-l-4 border-amber-500 p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-amber-600 font-bold mb-3 block">
                          AI MILL SOLUTION
                        </span>
                        <p className="text-[18px] text-stone-900 leading-[1.6]">{solution.solution}</p>
                      </div>
                    </div>

                    {/* How Agentic AI Operates */}
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
                              <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <span className="font-semibold text-[17px] text-stone-900">{item.agent}</span>
                                <span className="text-[17px] text-stone-900"> {item.action}</span>
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
                          className="bg-white rounded-xl p-8 shadow-md border border-stone-200 hover:shadow-xl hover:translate-y-[-8px] transition-all text-center"
                        >
                          <div className={`border-t-[3px] ${metric.borderColor} pt-6`}>
                            <div className={`text-[48px] font-bold ${metric.color} mb-3`}>
                              {metric.value}
                            </div>
                            <p className="text-base font-medium text-stone-600 leading-[1.4]">{metric.label}</p>
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
        <section className="relative py-[100px] bg-white">
          <div className="container mx-auto max-w-[900px] px-[80px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-[44px] font-bold text-stone-900 mb-4 leading-[1.2]">ROI & Measurable Outcomes</h2>
              <p className="text-[20px] text-stone-600 max-w-2xl mx-auto leading-[1.6]">
                Measurable improvements across key agricultural metrics
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200"
            >
              <table className="w-full border-collapse">
                <thead className="bg-gradient-to-r from-amber-600 to-orange-600">
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
                        idx % 2 === 0 ? "bg-white" : "bg-stone-50"
                      } ${row.highlight ? "bg-gradient-to-r from-amber-50 to-amber-100 border-l-4 border-amber-500" : ""} hover:bg-amber-50 hover:scale-[1.01] transition-all`}
                    >
                      <td className="px-8 py-6 font-semibold text-[18px] text-stone-900">{row.metric}</td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex items-center justify-end gap-3">
                          {row.trend === "up" && <ArrowUp className="w-5 h-5 text-green-700" />}
                          {row.trend === "down" && <ArrowDown className="w-5 h-5 text-sky-600" />}
                          <span className={`text-[28px] font-bold ${
                            row.trend === "up" ? "text-green-700" : 
                            row.trend === "down" ? "text-sky-600" : 
                            "text-amber-600"
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
        <section className="relative py-[100px] bg-amber-50">
          <div className="container mx-auto max-w-[1200px] px-[80px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-[44px] font-bold text-stone-900 mb-4 leading-[1.2]">Why AI Mill for Agriculture?</h2>
              <p className="text-[20px] text-stone-600 max-w-2xl mx-auto leading-[1.6]">
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
                  className="group bg-white rounded-2xl p-12 shadow-md border border-stone-200 hover:translate-y-[-8px] hover:shadow-xl hover:border-amber-500 transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-18 h-18 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`} style={{ width: '72px', height: '72px' }}>
                    <item.icon className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-[24px] font-bold text-stone-900 mb-4 leading-[1.4]">{item.title}</h3>
                  <p className="text-[17px] text-stone-600 leading-[1.6]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-[120px] bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-10" style={{
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
                Farm smarter, grow more, and waste less with AI Mill.
              </h2>
              <p className="text-[22px] text-white/95 mb-12 max-w-[700px] mx-auto leading-relaxed">
                Join leading farmers and agribusinesses already using AI Mill to transform agricultural operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white text-amber-600 px-12 py-5 text-lg font-bold hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all rounded-xl"
                  asChild
                >
                  <Link to="/contact">
                    Talk to Agriculture Specialists
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/50 text-white px-10 py-5 text-lg font-semibold hover:bg-white/20 hover:border-white backdrop-blur-sm rounded-xl"
                  asChild
                >
                  <Link to="/solutions">View Case Studies →</Link>
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

export default Agriculture;