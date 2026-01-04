import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  ArrowRight,
  Target,
  Sparkles,
  Network,
  BarChart3,
  RefreshCw,
  Database,
  Brain,
  Send,
  TrendingUp,
  Zap,
  CheckCircle,
  Users,
  Mail,
  Calendar,
  Shield,
  Award,
} from "lucide-react";

const MarketingAgent = () => {
  const problems = [
    {
      icon: Target,
              title: "Manual customer segmentation",
      desc: "Time-consuming, error-prone analysis that delays campaign launches",
      color: "text-sky-400",
      bg: "bg-sky-500/10",
            },
            {
      icon: Send,
              title: "Slow campaign execution",
      desc: "Weeks from insight to launch, missing market opportunities",
      color: "text-sky-400",
      bg: "bg-sky-500/10",
            },
            {
      icon: Network,
              title: "Disconnected channels",
      desc: "Fragmented customer experience across email, social, and messaging",
      color: "text-sky-400",
      bg: "bg-sky-500/10",
            },
            {
      icon: RefreshCw,
              title: "High operational overhead",
      desc: "Team bottlenecks and burnout from manual processes",
      color: "text-sky-400",
      bg: "bg-sky-500/10",
    },
  ];

  const channels = ["Email", "WhatsApp", "Instagram", "Twitter/X", "Facebook", "SMS", "Slack", "APIs"];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300">
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
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-[#020617] pt-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
          
          <div className="container mx-auto max-w-7xl px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fadeInLeft">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-300 text-xs font-bold tracking-widest mb-6 uppercase shadow-lg shadow-sky-500/20">
                  MARKETING AI
                </div>
                <h1 className="text-5xl lg:text-[64px] font-extrabold leading-[1.1] text-white mb-8 tracking-tight">
                  Autonomous Marketing<br />Execution — From<br />Insight to Impact
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-6 max-w-[600px]">
                  AI Mill's Marketing Agent identifies the right customers, creates high-performing content, and executes campaigns autonomously across channels — reducing time-to-market while increasing ROI.
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  <div className="flex items-center gap-2 px-4 py-2 bg-sky-500/20 rounded-full border border-sky-500/40 shadow-md shadow-sky-500/10 hover:bg-sky-500/30 transition-all">
                    <Zap className="w-4 h-4 text-sky-300" />
                    <span className="text-sm font-semibold text-sky-300">80% faster execution</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-sky-500/20 rounded-full border border-sky-500/40 shadow-md shadow-sky-500/10 hover:bg-sky-500/30 transition-all">
                    <TrendingUp className="w-4 h-4 text-sky-300" />
                    <span className="text-sm font-semibold text-sky-300">40% cost reduction</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-sky-500/20 rounded-full border border-sky-500/40 shadow-md shadow-sky-500/10 hover:bg-sky-500/30 transition-all">
                    <BarChart3 className="w-4 h-4 text-sky-300" />
                    <span className="text-sm font-semibold text-sky-300">3x ROI improvement</span>
                  </div>
                </div>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 h-14 px-8 text-lg font-semibold bg-gradient-to-br from-sky-500 via-sky-600 to-blue-600 text-white rounded-xl shadow-xl shadow-sky-500/40 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/50 transition-all"
                >
                  Talk to Marketing AI Experts <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Marketing Dashboard */}
              <div className="animate-scaleIn delay-200 opacity-0">
                <div className="bg-slate-900/90 backdrop-blur-xl rounded-[28px] p-10 border border-sky-500/30 shadow-2xl shadow-sky-500/10">
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold">Campaign Dashboard</div>
                        <div className="text-xs text-slate-400">Q1 2024 Growth Campaign</div>
                      </div>
                    </div>
                    <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Active</span>
                    </div>
                  </div>
                  
                  {/* Active Campaigns */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-gradient-to-r from-sky-500/20 to-blue-600/20 rounded-xl p-4 border border-sky-500/40 shadow-lg shadow-sky-500/10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-sky-300" />
                          <span className="text-xs font-bold text-sky-300">AI GENERATING</span>
                        </div>
                        <div className="px-2 py-1 bg-sky-500/30 rounded-full border border-sky-500/50">
                          <span className="text-[10px] font-bold text-sky-300">IN PROGRESS</span>
                        </div>
                      </div>
                      <p className="text-sm text-white font-medium mb-2">Churn Prevention Campaign - Segment A</p>
                      <div className="flex items-center gap-2 text-xs text-sky-300">
                        <Calendar className="w-3 h-3" />
                        <span>Launching in 2 hours</span>
                      </div>
                    </div>
                    
                    <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/50">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-sky-300" />
                          <span className="text-xs font-bold text-sky-300">PERFORMANCE</span>
                        </div>
                        <div className="px-2 py-1 bg-emerald-500/30 rounded-full border border-emerald-500/50">
                          <span className="text-[10px] font-bold text-emerald-300">+35% CTR</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-200 mb-2">High-intent segment campaign</p>
                      <div className="text-xs text-slate-300">12,450 impressions, 2.8% conversion</div>
                    </div>

                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Users className="w-4 h-4 text-sky-400" />
                        <span className="text-xs font-bold text-slate-400">SEGMENT ANALYSIS</span>
                      </div>
                      <p className="text-sm text-slate-300">3 new segments identified</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-800/50">
                    <div className="bg-gradient-to-br from-sky-500/10 to-sky-600/10 rounded-xl p-4 border border-sky-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Send className="w-3 h-3 text-sky-300" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Campaigns</span>
                      </div>
                      <div className="text-xl font-bold text-sky-300">24</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-600/10 to-blue-700/10 rounded-xl p-4 border border-blue-600/30">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-3 h-3 text-blue-400" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase">ROI</span>
                      </div>
                      <div className="text-xl font-bold text-blue-400">3.2x</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Context Section */}
        <section className="py-24 bg-slate-950">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <p className="text-xl text-slate-400 leading-relaxed">
              Insights exist — execution doesn't scale. Marketing teams struggle with manual segmentation, slow campaign launches, and disconnected channels. Traditional tools can't keep pace with customer expectations or market opportunities. <span className="text-sky-400 font-semibold">Marketing needs autonomous execution that scales.</span>
            </p>
          </div>
        </section>

        {/* Key Problems */}
        <section className="py-32 bg-[#020617]">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Key Marketing Challenges</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {problems.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/60 p-10 rounded-2xl hover:border-sky-500/50 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-sky-500/10 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center mb-6 border border-sky-500/40 shadow-md shadow-sky-500/10`}>
                    <item.icon className="text-sky-300" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="py-32 bg-slate-950">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                The Marketing Agent operates as a self-directed growth engine
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                It continuously analyzes customer data, identifies churn risk and high-intent segments, generates personalized content, and executes campaigns automatically across channels.
              </p>
            </div>
            
            <div className="bg-slate-900/70 backdrop-blur-sm rounded-[2.5rem] border border-sky-500/20 p-12 shadow-xl shadow-sky-500/5">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">What it does:</h3>
                  <ul className="space-y-4">
                    {[
            "Continuously analyzes customer data",
            "Identifies churn risk and high-intent segments",
            "Generates personalized content using LLMs",
            "Executes campaigns automatically across channels",
            "Learns from outcomes and optimizes future actions",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                        <span className="text-slate-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-sky-500/15 to-blue-600/15 rounded-2xl p-8 border border-sky-500/30 shadow-lg shadow-sky-500/10">
                  <h4 className="text-sm font-bold text-sky-300 uppercase tracking-wider mb-4">Integration Points</h4>
                  <div className="flex flex-wrap gap-2">
                    {channels.map((channel, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-slate-800/70 border border-sky-500/30 rounded-full text-sm text-slate-200 hover:bg-sky-500/20 hover:border-sky-500/50 transition-all"
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
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">How It Works</h2>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {[
            {
              number: "01",
              icon: Database,
              title: "Data Ingestion",
              description: "Ingests CRM, transaction, and engagement data",
                  color: "text-sky-400",
                  bg: "bg-sky-500/10",
            },
            {
              number: "02",
              icon: Brain,
              title: "Customer Segmentation",
              description: "Segments customers using predictive and agentic logic",
                  color: "text-sky-400",
                  bg: "bg-sky-500/10",
            },
            {
              number: "03",
                  icon: Sparkles,
              title: "Content Generation",
              description: "Generates content tailored to product and persona",
                  color: "text-sky-400",
                  bg: "bg-sky-500/10",
            },
            {
              number: "04",
              icon: Send,
              title: "Campaign Execution",
              description: "Executes campaigns via integrated channels",
                  color: "text-sky-400",
                  bg: "bg-sky-500/10",
            },
            {
              number: "05",
              icon: TrendingUp,
              title: "Performance Optimization",
              description: "Measures performance and optimizes strategy",
                  color: "text-sky-400",
                  bg: "bg-sky-500/10",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-8 rounded-2xl text-center"
                >
                  <div className={`w-16 h-16 rounded-xl ${step.bg} flex items-center justify-center mx-auto mb-4 border border-sky-500/20`}>
                    <step.icon className={step.color} size={28} />
                  </div>
                  <div className="text-4xl font-black text-slate-800 mb-4">{step.number}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 bg-[#020617]">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="bg-slate-900/90 rounded-[2.5rem] border border-sky-500/20 shadow-2xl shadow-sky-500/10 overflow-hidden">
              <div className="p-8 md:p-12 border-b border-slate-800 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Business Outcomes</h2>
                <p className="text-slate-400">Typical impact from Marketing Agent deployment</p>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { metric: "Campaign Launch Speed", improvement: "5x faster", color: "text-sky-300" },
                  { metric: "Conversion Rate", improvement: "+35%", color: "text-blue-400" },
                  { metric: "Marketing Ops Cost", improvement: "↓ 60%", color: "text-sky-300" },
                  { metric: "Customer Lifetime Value", improvement: "2.5x higher", color: "text-blue-400" },
                  { metric: "ROI Period", improvement: "3-6 months", color: "text-sky-300", highlight: true },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-8 hover:bg-slate-800/30 transition-colors ${row.highlight ? "bg-gradient-to-r from-sky-500/10 to-blue-600/10 border-l-4 border-sky-500" : ""}`}
                  >
                    <span className="text-lg font-medium text-slate-200">{row.metric}</span>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${row.highlight ? "text-sky-300" : row.color}`}>
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
          <div className="bg-gradient-to-br from-sky-600 via-sky-500 to-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-sky-500/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/40 blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/40 blur-[100px] animate-pulse" style={{ animationDelay: '0.5s' }} />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Turn insights into revenue — automatically.
            </h2>
            <p className="text-slate-100 text-lg mb-10 max-w-xl mx-auto relative z-10">
              See the Marketing Agent in action with a personalized demo.
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
  );
};

export default MarketingAgent;
