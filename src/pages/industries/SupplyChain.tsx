import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  ArrowRight, TrendingDown, Clock, Database, Users, AlertCircle,
  Target, TrendingUp, Shield, Zap, BarChart, CheckCircle,
  Package, Truck, ArrowUp, ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SupplyChain = () => {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const challenges = [
    { icon: AlertCircle, text: "Supply disruptions causing production delays" },
    { icon: TrendingDown, text: "Inefficient inventory management leading to stockouts or overstock" },
    { icon: Clock, text: "Manual tracking processes unable to keep pace with demand" },
    { icon: Database, text: "Fragmented data across suppliers and systems" },
    { icon: Users, text: "Lack of visibility into supplier performance" },
    { icon: BarChart, text: "Difficulty predicting demand and optimizing logistics" },
  ];

  const solutions = [
    {
      number: "01",
      title: "AI-Powered Demand Forecasting Intelligence",
      challenge: "Traditional forecasting methods fail to account for market volatility, seasonal patterns, and external factors, leading to inaccurate predictions and poor inventory decisions.",
      solution: "AI agents analyze historical data, market trends, and external signals to provide accurate demand forecasts that adapt in real-time, reducing stockouts by 40% and excess inventory by 35%.",
      howItWorks: [
        { agent: "Demand Analysis Agents", action: "Analyze sales patterns, seasonality, and market trends" },
        { agent: "External Signal Agents", action: "Monitor economic indicators, weather, and social signals" },
        { agent: "Inventory Optimization Agents", action: "Calculate optimal stock levels across locations" },
        { agent: "Replenishment Agents", action: "Automate purchase orders and restocking decisions" },
      ],
      metrics: [
        { value: "40%", label: "Stockout Reduction", color: "text-green-600" },
        { value: "35%", label: "Excess Inventory Reduction", color: "text-blue-600" },
        { value: "28%", label: "Cost Savings", color: "text-purple-600" },
      ],
    },
    {
      number: "02",
      title: "Autonomous Inventory Optimization & Replenishment",
      challenge: "Manual inventory management leads to stockouts, overstock, and inefficient capital allocation across multiple locations and SKUs.",
      solution: "Autonomous agents continuously optimize inventory levels across the entire network, automatically triggering replenishment orders and balancing stock to minimize costs while ensuring availability.",
      howItWorks: [
        { agent: "Inventory Analysis Agents", action: "Monitor stock levels and turnover rates across all locations" },
        { agent: "Optimization Agents", action: "Calculate optimal reorder points and quantities" },
        { agent: "Replenishment Agents", action: "Automate purchase orders and transfer requests" },
        { agent: "Capital Allocation Agents", action: "Balance inventory investment across product categories" },
      ],
      metrics: [
        { value: "35%", label: "Inventory Cost Reduction", color: "text-green-600" },
        { value: "40%", label: "Stockout Reduction", color: "text-blue-600" },
        { value: "25%", label: "Working Capital Improvement", color: "text-purple-600" },
      ],
    },
    {
      number: "03",
      title: "End-to-End Supply Chain Visibility & Control Tower",
      challenge: "Lack of visibility across the supply chain makes it difficult to identify bottlenecks, coordinate activities, and respond to disruptions quickly.",
      solution: "AI agents provide real-time visibility across the entire supply chain, from suppliers to customers, enabling proactive decision-making and rapid response to issues.",
      howItWorks: [
        { agent: "Visibility Agents", action: "Aggregate data from all supply chain systems and partners" },
        { agent: "Monitoring Agents", action: "Track shipments, inventory, and production in real-time" },
        { agent: "Alert Agents", action: "Identify issues and notify stakeholders immediately" },
        { agent: "Coordination Agents", action: "Coordinate activities across multiple parties and systems" },
      ],
      metrics: [
        { value: "60%", label: "Visibility Improvement", color: "text-green-600" },
        { value: "45%", label: "Response Time Reduction", color: "text-blue-600" },
        { value: "30%", label: "Coordination Efficiency", color: "text-purple-600" },
      ],
    },
  ];

  const roiMetrics = [
    { metric: "Forecast Accuracy", improvement: "35%", trend: "up" },
    { metric: "Inventory Costs", improvement: "28%", trend: "down" },
    { metric: "Stockouts", improvement: "40%", trend: "down" },
    { metric: "Working Capital", improvement: "25%", trend: "down" },
    { metric: "Payback Period", improvement: "9 months", trend: "neutral", highlight: true },
  ];

  const whyAIMill = [
    {
      icon: Shield,
      title: "End-to-End Visibility",
      description: "Complete visibility across your entire supply chain from suppliers to customers with real-time tracking and insights.",
    },
    {
      icon: Zap,
      title: "Real-Time Optimization",
      description: "Continuous optimization of routes, inventory, and logistics decisions as conditions change in real-time.",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Average 25-40% reduction in costs and 30-45% improvement in on-time delivery across implementations.",
    },
    {
      icon: Target,
      title: "Scalable Platform",
      description: "From regional operations to global supply chains, scale your AI operations as your business grows.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
                  <span className="text-[12px] uppercase tracking-[2px] text-orange-600 font-semibold">
                    FROM FRAGILE SUPPLY CHAINS TO SELF-HEALING NETWORKS
                  </span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[60px] font-extrabold leading-[1.1] text-[#0f0f0f] mb-6"
                >
                  Supply Chain & Distribution AI Solutions
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-[22px] font-normal leading-[1.6] text-[#4b5563] max-w-[600px] mb-6"
                >
                  Optimize your supply chain with AI that predicts demand, manages inventory, 
                  optimizes logistics, and mitigates risks—reducing costs by up to 35% while improving service levels.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-[18px] leading-[1.7] text-[#6b7280] max-w-[580px] mb-8"
                >
                  AI Mill enables supply chain leaders to move beyond reactive planning and manual processes by deploying Data Science and Agentic AI systems that continuously forecast demand, optimize inventory, and coordinate logistics — autonomously and in real time.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white px-8 h-[56px] text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 rounded-xl"
                    asChild
                  >
                    <Link to="/contact">
                      Transform Your Supply Chain
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
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl animate-pulse" />
                <div className="relative h-full bg-gradient-to-br from-orange-50 via-white to-blue-50 rounded-3xl p-8 flex items-center justify-center border border-orange-100/50 shadow-2xl">
                  <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                        className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-orange-100 hover:shadow-xl transition-all"
                      >
                        <Truck className="w-8 h-8 text-orange-600 mx-auto" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="relative py-[120px] bg-gradient-to-b from-[#1e293b] to-[#334155] overflow-hidden">
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
                Modern supply chains are complex, global, and vulnerable to disruptions that can impact business operations.
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
                  className="group bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 hover:bg-white/10 hover:border-orange-400/30 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                    <challenge.icon className="w-6 h-6 text-orange-400 group-hover:text-orange-300" />
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
                    <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-orange-600 to-blue-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl hover:shadow-2xl transition-all">
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
                      <div className="bg-orange-50/80 border-l-4 border-orange-500 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <span className="text-xs uppercase tracking-wider text-orange-600 font-bold mb-3 block">
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
                          className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:border-orange-200 transition-all group"
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
                Measurable improvements across key supply chain metrics
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
                <thead className="bg-gradient-to-r from-orange-600 to-blue-600">
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
                      } ${row.highlight ? "bg-yellow-50 border-l-4 border-yellow-500" : ""} hover:bg-orange-50/50 hover:scale-[1.01] transition-all`}
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
                Built for supply chain operations with end-to-end visibility and real-time optimization capabilities.
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
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-600 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
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
        <section className="relative py-[120px] bg-gradient-to-r from-orange-600 via-orange-700 to-blue-600 overflow-hidden">
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
                Build a supply chain that heals itself.
              </h2>
              <p className="text-[20px] text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join leading companies using AI Mill to optimize inventory, reduce costs, and improve service levels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 px-10 py-7 text-lg font-semibold hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all rounded-xl"
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

export default SupplyChain;

