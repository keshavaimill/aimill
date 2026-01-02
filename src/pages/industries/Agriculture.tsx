import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  ArrowRight, TrendingDown, Clock, Database, Users, AlertCircle,
  Target, TrendingUp, Shield, Zap, BarChart, CheckCircle,
  Sprout, Wheat, ArrowUp, ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Agriculture = () => {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const challenges = [
    { icon: AlertCircle, text: "Unpredictable weather patterns affecting crop yields" },
    { icon: TrendingDown, text: "Inefficient resource allocation leading to waste" },
    { icon: Clock, text: "Manual monitoring processes too slow for timely intervention" },
    { icon: Database, text: "Fragmented data across farms and systems" },
    { icon: Users, text: "Labor shortages impacting operations" },
    { icon: BarChart, text: "Price volatility making planning difficult" },
  ];

  const solutions = [
    {
      number: "01",
      title: "Precision Farming & Crop Intelligence",
      challenge: "Farmers struggle to predict optimal planting times, irrigation needs, and harvest windows, leading to suboptimal yields and resource waste.",
      solution: "AI agents analyze weather patterns, soil conditions, and historical data to provide real-time recommendations for planting, irrigation, and harvesting decisions.",
      howItWorks: [
        { agent: "Weather Analysis Agents", action: "Monitor forecasts and historical patterns to predict optimal conditions" },
        { agent: "Soil Health Agents", action: "Analyze soil data and recommend nutrient applications" },
        { agent: "Irrigation Optimization Agents", action: "Calculate precise water needs based on crop stage and conditions" },
        { agent: "Harvest Timing Agents", action: "Determine optimal harvest windows for maximum yield and quality" },
      ],
      metrics: [
        { value: "25%", label: "Yield Increase", color: "text-green-600" },
        { value: "30%", label: "Water Savings", color: "text-blue-600" },
        { value: "20%", label: "Cost Reduction", color: "text-yellow-600" },
      ],
    },
    {
      number: "02",
      title: "Yield Forecasting & Harvest Planning",
      challenge: "Unpredictable yields make it difficult to plan harvests, manage labor, and coordinate with buyers, leading to waste and lost revenue.",
      solution: "AI agents predict crop yields with high accuracy by analyzing weather, soil conditions, and crop health data, enabling better harvest planning and resource allocation.",
      howItWorks: [
        { agent: "Yield Prediction Agents", action: "Analyze multiple data sources to forecast crop yields accurately" },
        { agent: "Harvest Planning Agents", action: "Optimize harvest schedules and labor allocation" },
        { agent: "Market Coordination Agents", action: "Coordinate with buyers based on predicted yields" },
        { agent: "Resource Planning Agents", action: "Plan storage and transportation needs in advance" },
      ],
      metrics: [
        { value: "35%", label: "Forecast Accuracy", color: "text-green-600" },
        { value: "28%", label: "Waste Reduction", color: "text-blue-600" },
        { value: "22%", label: "Revenue Increase", color: "text-yellow-600" },
      ],
    },
    {
      number: "03",
      title: "Pest & Disease Early Detection",
      challenge: "Early detection of pests and diseases is critical but often happens too late, resulting in significant crop losses and treatment costs.",
      solution: "Autonomous monitoring agents use image recognition and sensor data to detect pests and diseases early, recommending targeted treatment strategies.",
      howItWorks: [
        { agent: "Image Recognition Agents", action: "Analyze drone and camera imagery for pest and disease signs" },
        { agent: "Sensor Monitoring Agents", action: "Track environmental conditions that favor disease development" },
        { agent: "Treatment Recommendation Agents", action: "Suggest targeted interventions based on specific threats" },
        { agent: "Prevention Agents", action: "Predict and prevent outbreaks before they occur" },
      ],
      metrics: [
        { value: "40%", label: "Early Detection Rate", color: "text-green-600" },
        { value: "35%", label: "Crop Loss Reduction", color: "text-blue-600" },
        { value: "50%", label: "Treatment Cost Savings", color: "text-yellow-600" },
      ],
    },
    {
      number: "04",
      title: "Autonomous Farm Operations & Advisory",
      challenge: "Traditional farming methods apply resources uniformly, leading to overuse in some areas and underuse in others, reducing efficiency and profitability.",
      solution: "AI-powered precision agriculture agents analyze field variability to provide site-specific recommendations for seeds, fertilizers, and pesticides, operating autonomously.",
      howItWorks: [
        { agent: "Field Mapping Agents", action: "Create detailed maps of soil variability and field conditions" },
        { agent: "Variable Rate Agents", action: "Calculate optimal application rates for each field zone" },
        { agent: "Equipment Control Agents", action: "Automate machinery to apply inputs precisely" },
        { agent: "Performance Tracking Agents", action: "Monitor results and continuously improve recommendations" },
      ],
      metrics: [
        { value: "32%", label: "Input Efficiency Gain", color: "text-green-600" },
        { value: "18%", label: "Yield Improvement", color: "text-blue-600" },
        { value: "25%", label: "Environmental Impact Reduction", color: "text-yellow-600" },
      ],
    },
  ];

  const roiMetrics = [
    { metric: "Crop Yield", improvement: "25%", trend: "up" },
    { metric: "Input Costs", improvement: "22%", trend: "down" },
    { metric: "Crop Loss", improvement: "35%", trend: "down" },
    { metric: "Water Usage", improvement: "30%", trend: "down" },
    { metric: "Payback Period", improvement: "10 months", trend: "neutral", highlight: true },
  ];

  const whyAIMill = [
    {
      icon: Shield,
      title: "Field-Tested Solutions",
      description: "Proven AI agents deployed across diverse agricultural operations, from small farms to large agribusinesses.",
    },
    {
      icon: Zap,
      title: "Real-Time Monitoring",
      description: "24/7 monitoring of crops, weather, and conditions with instant alerts and recommendations.",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "Increase yields while reducing environmental impact through precision agriculture and optimization.",
    },
    {
      icon: Target,
      title: "Scalable Platform",
      description: "From single farms to agricultural networks, scale your AI operations as you grow.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-green-50/30 to-white">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
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
                  <span className="text-[12px] uppercase tracking-[2px] text-green-600 font-semibold">
                    FROM EXPERIENCE-DRIVEN FARMING TO AUTONOMOUS PRECISION AGRICULTURE
                  </span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[60px] font-extrabold leading-[1.1] text-[#0f0f0f] mb-6"
                >
                  Agriculture AI Solutions
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-[22px] font-normal leading-[1.6] text-[#4b5563] max-w-[600px] mb-6"
                >
                  Maximize crop yields, optimize resources, and reduce waste with AI-powered precision agriculture 
                  that learns from your fields and adapts to changing conditions in real-time.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-[18px] leading-[1.7] text-[#6b7280] max-w-[580px] mb-8"
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
                    className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white px-8 h-[56px] text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 rounded-xl"
                    asChild
                  >
                    <Link to="/contact">
                      Talk to Agriculture AI Specialists
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
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-yellow-500/20 to-green-600/20 rounded-3xl blur-3xl animate-pulse" />
                <div className="relative h-full bg-gradient-to-br from-green-50 via-white to-yellow-50 rounded-3xl p-8 flex items-center justify-center border border-green-100/50 shadow-2xl">
                  <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                        className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-green-100 hover:shadow-xl transition-all"
                      >
                        <Wheat className="w-8 h-8 text-green-600 mx-auto" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="relative py-[120px] bg-gradient-to-b from-[#14532d] to-[#166534] overflow-hidden">
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
                Modern agriculture faces increasing pressure to produce more with less while adapting to climate change.
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
                  className="group bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 hover:bg-white/10 hover:border-green-400/30 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                    <challenge.icon className="w-6 h-6 text-green-400 group-hover:text-green-300" />
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
                    <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-green-600 to-yellow-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl hover:shadow-2xl transition-all">
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
                      <div className="bg-green-50/80 border-l-4 border-green-500 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-green-600 font-bold mb-3 block">
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
                          className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:border-green-200 transition-all group"
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
                Measurable improvements across key agricultural metrics
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
                <thead className="bg-gradient-to-r from-green-600 to-yellow-600">
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
                      } ${row.highlight ? "bg-yellow-50 border-l-4 border-yellow-500" : ""} hover:bg-green-50/50 hover:scale-[1.01] transition-all`}
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
                  className="group bg-white rounded-2xl p-10 shadow-md hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-yellow-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
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
        <section className="relative py-[120px] bg-gradient-to-r from-green-600 via-green-700 to-yellow-600 overflow-hidden">
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
                Farm smarter, grow more, and waste less with AI Mill.
              </h2>
              <p className="text-[20px] text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join forward-thinking farmers and agribusinesses using AI Mill to increase yields, reduce waste, and optimize operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-green-600 px-10 py-7 text-lg font-semibold hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all rounded-xl"
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

export default Agriculture;

