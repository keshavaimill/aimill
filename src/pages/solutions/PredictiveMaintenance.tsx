import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  ArrowRight,
  Wrench,
  Database,
  Brain,
  AlertTriangle,
  TrendingUp,
  BarChart3,
  Settings,
  Clock,
  DollarSign,
  Zap,
  CheckCircle,
  Activity,
  Gauge,
} from "lucide-react";

const PredictiveMaintenance = () => {
  const problems = [
    {
      icon: Wrench,
              title: "Reactive maintenance",
      desc: "Fixing problems after they occur causes downtime",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
            },
            {
      icon: Clock,
              title: "Unnecessary maintenance",
      desc: "Over-maintenance wastes time and resources",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
            },
            {
      icon: AlertTriangle,
              title: "Equipment failures",
      desc: "Unexpected breakdowns disrupt production",
      color: "text-red-400",
      bg: "bg-red-500/10",
            },
            {
      icon: BarChart3,
              title: "Manual analysis",
      desc: "Time-consuming sensor data analysis",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
  ];

  const channels = ["IoT Sensors", "SCADA", "MES", "CMMS"];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 relative">
      {/* Soothing Background Texture */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3Ccircle cx='45' cy='15' r='1'/%3E%3Ccircle cx='15' cy='45' r='1'/%3E%3Ccircle cx='45' cy='45' r='1'/%3E%3Ccircle cx='30' cy='30' r='0.8'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
        }} />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            radial-gradient(circle at 15% 25%, rgba(255,255,255,0.02) 0%, transparent 40%),
            radial-gradient(circle at 85% 75%, rgba(255,255,255,0.02) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.015) 0%, transparent 60%)
          `,
        }} />
      </div>
      <div className="relative z-10">
      <Navbar />
      <main>
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }
          .animate-scaleIn { animation: scaleIn 0.8s ease-out forwards; }
          .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
          .delay-200 { animation-delay: 0.2s; }
          .opacity-0 { opacity: 0; }
        `}</style>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
          {/* Subtle Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='30' cy='10' r='1.5'/%3E%3Ccircle cx='10' cy='30' r='1.5'/%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            }} />
            <div className="absolute inset-0 opacity-15" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
              `,
            }} />
          </div>

          <div className="container mx-auto max-w-7xl px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fadeInLeft">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 text-muted-foreground text-xs font-bold tracking-widest mb-6 uppercase hover:text-foreground hover:border-emerald-500/50 transition-all">
                  MANUFACTURING AI
                </div>
                <h1 className="text-5xl lg:text-[64px] font-extrabold leading-[1.1] text-white mb-8 tracking-tight">
                  Prevent Failures<br />Before They<br />Happen
                </h1>
                <p className="text-xl lg:text-[24px] text-slate-300 leading-relaxed mb-6 max-w-[600px]">
                  Agentic AI that analyzes sensor data, predicts failures, and optimizes maintenance schedules — reducing downtime and extending asset lifespan.
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-border/50 hover:border-emerald-500/50 transition-all">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-sm font-semibold">50% less downtime</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-border/50 hover:border-emerald-500/50 transition-all">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-sm font-semibold">40% lower costs</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-border/50 hover:border-emerald-500/50 transition-all">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-sm font-semibold">30% longer asset life</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 h-14 px-8 text-lg font-semibold bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-700 text-white rounded-xl hover:scale-105 transition-all"
                >
                  Talk to Manufacturing AI Experts <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Maintenance Dashboard */}
              <div className="animate-scaleIn delay-200 opacity-0">
                <div className="glass rounded-2xl p-10 border border-border/50">
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                        <Activity className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold">Asset Health Monitor</div>
                        <div className="text-xs text-slate-400">Production Line #3</div>
                      </div>
                    </div>
                    <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Active</span>
                    </div>
                  </div>

                  {/* Asset Status */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-4 border border-orange-500/20">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-400" />
                          <span className="text-xs font-bold text-orange-400">PREDICTIVE ALERT</span>
                        </div>
                        <div className="px-2 py-1 bg-orange-500/20 rounded-full">
                          <span className="text-[10px] font-bold text-orange-300">ACTION REQUIRED</span>
                        </div>
                      </div>
                      <p className="text-sm text-white font-medium mb-2">Motor #7 - Bearing wear detected</p>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Clock className="w-3 h-3 text-slate-500" />
                        <span>Maintenance due in 5 days</span>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Gauge className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs font-bold text-cyan-400">HEALTH SCORE</span>
                        </div>
                        <div className="px-2 py-1 bg-cyan-500/20 rounded-full">
                          <span className="text-[10px] font-bold text-cyan-400">87%</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-300 mb-2">12 assets monitored</p>
                      <div className="text-xs text-slate-400">All within normal parameters</div>
                    </div>

                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Settings className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-bold text-slate-400">SCHEDULED MAINTENANCE</span>
                      </div>
                      <p className="text-sm text-slate-300">3 maintenance tasks this week</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-800/50">
                    <div className="bg-slate-800/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-3 h-3 text-green-400" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Downtime</span>
                      </div>
                      <div className="text-xl font-bold text-green-400">↓ 50%</div>
                    </div>
                    <div className="bg-slate-800/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-3 h-3 text-yellow-400" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Savings</span>
                      </div>
                      <div className="text-xl font-bold text-yellow-400">40%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Context Section */}
        <section className="py-16 bg-slate-950">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <p className="text-xl text-slate-400 leading-relaxed">
              Manufacturing needs predictive intelligence, not reactive fixes. Equipment failures cause unexpected downtime, while over-maintenance wastes resources. Traditional approaches can't predict when failures will occur. <span className="text-green-400 font-semibold">Manufacturing needs AI that predicts and prevents.</span>
            </p>
          </div>
        </section>

        {/* Key Problems */}
        <section className="py-20 bg-[#020617]">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Key Manufacturing Challenges</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {problems.map((item, i) => {
                const hoverBorderClass = item.color.includes('orange') ? 'hover:border-orange-500/30' :
                                        item.color.includes('yellow') ? 'hover:border-yellow-500/30' :
                                        item.color.includes('red') ? 'hover:border-red-500/30' :
                                        item.color.includes('purple') ? 'hover:border-purple-500/30' :
                                        'hover:border-green-500/30';
                return (
                <div
                  key={i}
                  className={`bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-10 rounded-2xl ${hoverBorderClass} hover:-translate-y-2 hover:scale-[1.02] transition-all`}
                >
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-6`}>
                    <item.icon className={item.color} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="py-20 bg-slate-950">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Predictive Maintenance Agents Analyze Data And Predict Failures
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                They ingest sensor and operational data continuously, analyze patterns to predict failure points, and optimize maintenance schedules automatically.
              </p>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-sm rounded-[2.5rem] border border-emerald-500/20 p-12 shadow-xl shadow-emerald-500/5">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">What they do?</h3>
                  <ul className="space-y-4">
                    {[
            "Ingest sensor and operational data continuously",
            "Analyze patterns to predict failure points",
            "Optimize maintenance schedules automatically",
            "Alert teams before failures occur",
            "Learn from maintenance outcomes to improve predictions",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                        <span className="text-slate-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/15 to-emerald-700/15 rounded-2xl p-8 border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
                  <h4 className="text-sm font-bold text-emerald-300 uppercase tracking-wider mb-4">Integration Points</h4>
                  <div className="flex flex-wrap gap-2">
                    {channels.map((channel, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-slate-800/70 border border-emerald-500/30 rounded-full text-sm text-slate-200 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all"
                      >
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-[#020617]">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">How It Works?</h2>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {[
            {
              number: "01",
              icon: Database,
              title: "Sensor Data Ingestion",
              description: "Continuously ingests sensor and operational data",
                  color: "text-blue-300",
                  bg: "bg-blue-500/5",
            },
            {
              number: "02",
              icon: Brain,
              title: "Pattern Analysis",
              description: "Analyzes patterns to identify failure signals",
                  color: "text-purple-300",
                  bg: "bg-purple-500/5",
            },
            {
              number: "03",
              icon: AlertTriangle,
              title: "Failure Prediction",
              description: "Predicts when failures are likely to occur",
                  color: "text-orange-300",
                  bg: "bg-orange-500/5",
            },
            {
              number: "04",
              icon: Settings,
              title: "Maintenance Optimization",
              description: "Optimizes maintenance schedules and priorities",
                  color: "text-emerald-300",
                  bg: "bg-emerald-500/5",
            },
            {
              number: "05",
              icon: BarChart3,
              title: "Continuous Learning",
              description: "Improves predictions from maintenance outcomes",
                  color: "text-cyan-300",
                  bg: "bg-cyan-500/5",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-8 rounded-2xl text-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-7xl font-black text-slate-800/30 leading-none select-none">{step.number}</div>
                  </div>
                  <div className={`w-16 h-16 rounded-xl ${step.bg} flex items-center justify-center mx-auto mb-4 border ${
                    step.color.includes('blue') ? 'border-blue-500/10' :
                    step.color.includes('purple') ? 'border-purple-500/10' :
                    step.color.includes('orange') ? 'border-orange-500/10' :
                    step.color.includes('emerald') ? 'border-emerald-500/10' :
                    step.color.includes('cyan') ? 'border-cyan-500/10' :
                    'border-emerald-500/10'
                  } relative z-10`}>
                    <step.icon className={step.color} size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 relative z-10">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed relative z-10">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 bg-slate-950">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden">
              <div className="p-8 md:p-12 border-b border-slate-800 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Business Outcomes</h2>
                <p className="text-slate-400">Typical impact from Predictive Maintenance deployment</p>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { metric: "Downtime Reduction", improvement: "↓ 50%", color: "text-green-400" },
                  { metric: "Maintenance Costs", improvement: "↓ 40%", color: "text-yellow-400" },
                  { metric: "Asset Lifespan", improvement: "+30%", color: "text-cyan-400" },
                  { metric: "Planning Accuracy", improvement: "+80%", color: "text-blue-400" },
                  { metric: "ROI Period", improvement: "4-8 Months", color: "text-green-400", highlight: true },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-8 hover:bg-slate-800/20 transition-colors ${row.highlight ? "bg-green-500/5" : ""}`}
                  >
                    <span className="text-lg font-medium text-slate-300">{row.metric}</span>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${row.highlight ? "text-green-400" : row.color}`}>
                        {row.improvement}
                      </div>
                      <div className="text-xs uppercase font-bold text-slate-500 tracking-tighter">
                        {row.highlight ? "Typical Period" : "Improvement"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 container mx-auto px-6">
          <div className="bg-gradient-to-br from-emerald-800 to-slate-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 blur-[100px]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Move From Reactive To Predictive Operations.
            </h2>
            <p className="text-slate-100 text-lg mb-10 max-w-xl mx-auto relative z-10">
              See Predictive Maintenance in action with a personalized demo.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-100 rounded-2xl h-14 px-10 font-bold transition-all relative z-10"
            >
              Request Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </div>
  );
};

export default PredictiveMaintenance;
