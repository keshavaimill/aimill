import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  ArrowRight,
  Mail,
  Eye,
  Database,
  FileText,
  Send,
  TrendingUp,
  Brain,
  Clock,
  BarChart3,
  AlertTriangle,
  Zap,
  CheckCircle,
  MessageSquare,
  Users,
  Shield,
  Award,
} from "lucide-react";

const CustomerEmailAI = () => {
  const problems = [
    {
      icon: Mail,
              title: "High email volume",
      desc: "Support teams overwhelmed by thousands of daily emails",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
            },
            {
      icon: Clock,
              title: "Slow response times",
      desc: "Customers wait hours or days for responses",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
            },
            {
      icon: Database,
              title: "Manual data lookup",
      desc: "Agents spend time searching for customer information",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
            },
            {
      icon: AlertTriangle,
              title: "Inconsistent responses",
      desc: "Quality varies based on agent experience and availability",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
  ];

  const channels = ["Email", "Helpdesk", "CRM", "Ticketing Systems", "Slack", "APIs"];

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
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600/30 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
          
          <div className="container mx-auto max-w-7xl px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fadeInLeft">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-widest mb-6 uppercase shadow-lg shadow-amber-500/20">
                  CUSTOMER SUPPORT AI
                </div>
                <h1 className="text-5xl lg:text-[64px] font-extrabold leading-[1.1] text-white mb-8 tracking-tight">
                  Your Autonomous<br />Backend Customer<br />Support Team
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-6 max-w-[600px]">
                  AI agents that read, reason, retrieve data, and respond to customer emails — with human oversight only when required.
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full border border-amber-500/40 shadow-md shadow-amber-500/10 hover:bg-amber-500/30 transition-all">
                    <Zap className="w-4 h-4 text-amber-300" />
                    <span className="text-sm font-semibold text-amber-300">Near-instant responses</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full border border-amber-500/40 shadow-md shadow-amber-500/10 hover:bg-amber-500/30 transition-all">
                    <TrendingUp className="w-4 h-4 text-amber-300" />
                    <span className="text-sm font-semibold text-amber-300">60% cost reduction</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-yellow-600/20 rounded-full border border-yellow-600/40 shadow-md shadow-yellow-600/10 hover:bg-yellow-600/30 transition-all">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-semibold text-yellow-400">95% CSAT improvement</span>
                  </div>
                </div>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 h-14 px-8 text-lg font-semibold bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 text-white rounded-xl shadow-xl shadow-amber-500/40 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 transition-all"
                >
                  Talk to Support AI Experts <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Support Dashboard */}
              <div className="animate-scaleIn delay-200 opacity-0">
                <div className="bg-slate-900/90 backdrop-blur-xl rounded-[28px] p-10 border border-amber-500/30 shadow-2xl shadow-amber-500/10">
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold">Support Dashboard</div>
                        <div className="text-xs text-slate-400">Live Ticket Processing</div>
                      </div>
                    </div>
                    <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Active</span>
                    </div>
                  </div>
                  
                  {/* Active Tickets */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-gradient-to-r from-amber-500/20 to-yellow-600/20 rounded-xl p-4 border border-amber-500/40 shadow-lg shadow-amber-500/10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-amber-300" />
                          <span className="text-xs font-bold text-amber-300">AI PROCESSING</span>
                        </div>
                        <div className="px-2 py-1 bg-emerald-500/30 rounded-full border border-emerald-500/50">
                          <span className="text-[10px] font-bold text-emerald-300">RESOLVED</span>
                        </div>
                      </div>
                      <p className="text-sm text-white font-medium mb-2">Order Status Inquiry - Ticket #1247</p>
                      <div className="flex items-center gap-2 text-xs text-emerald-300">
                        <Clock className="w-3 h-3" />
                        <span>Responded in 12 seconds</span>
                      </div>
                    </div>
                    
                    <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/50">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Brain className="w-4 h-4 text-amber-300" />
                          <span className="text-xs font-bold text-amber-300">ANALYZING</span>
                        </div>
                        <div className="px-2 py-1 bg-amber-500/30 rounded-full border border-amber-500/50">
                          <span className="text-[10px] font-bold text-amber-300">IN PROGRESS</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-200 mb-2">Refund Request - Ticket #1248</p>
                      <div className="text-xs text-slate-300">Retrieving order data...</div>
                    </div>

                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Users className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-bold text-slate-400">TICKET METRICS</span>
                      </div>
                      <p className="text-sm text-slate-300">247 tickets processed today</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-800/50">
                    <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-xl p-4 border border-amber-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-3 h-3 text-amber-300" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Response Time</span>
                      </div>
                      <div className="text-xl font-bold text-amber-300">&lt;30s</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-700/10 rounded-xl p-4 border border-yellow-600/30">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="w-3 h-3 text-yellow-400" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Satisfaction</span>
                      </div>
                      <div className="text-xl font-bold text-yellow-400">95%</div>
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
              Customer support needs intelligent automation that scales. Support teams are overwhelmed by email volume, slow response times hurt satisfaction, and manual processes limit throughput. <span className="text-amber-400 font-semibold">Support needs autonomous agents that respond intelligently.</span>
            </p>
          </div>
        </section>

        {/* Key Problems */}
        <section className="py-32 bg-[#020617]">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Key Support Challenges</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {problems.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/60 p-10 rounded-2xl hover:border-amber-500/50 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/10 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-6 border border-amber-500/40 shadow-md shadow-amber-500/10`}>
                    <item.icon className="text-amber-300" size={24} />
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
                This agent operates as an autonomous support specialist
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                It continuously reads incoming emails, understands intent, retrieves necessary data, drafts personalized responses, and escalates complex cases to humans when needed.
              </p>
            </div>
            
            <div className="bg-slate-900/70 backdrop-blur-sm rounded-[2.5rem] border border-amber-500/20 p-12 shadow-xl shadow-amber-500/5">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">What it does:</h3>
                  <ul className="space-y-4">
                    {[
            "Reads incoming emails and understands intent",
            "Identifies required data and fetches information via MCP",
            "Drafts accurate, personalized responses",
            "Escalates complex cases to humans automatically",
            "Learns from resolutions to improve future responses",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                        <span className="text-slate-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-amber-500/15 to-yellow-600/15 rounded-2xl p-8 border border-amber-500/30 shadow-lg shadow-amber-500/10">
                  <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider mb-4">Integration Points</h4>
                  <div className="flex flex-wrap gap-2">
                    {channels.map((channel, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-slate-800/70 border border-amber-500/30 rounded-full text-sm text-slate-200 hover:bg-amber-500/20 hover:border-amber-500/50 transition-all"
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
              icon: Mail,
              title: "Email Ingestion",
              description: "Reads incoming customer emails",
                  color: "text-amber-400",
                  bg: "bg-amber-500/10",
            },
            {
              number: "02",
              icon: Brain,
              title: "Intent Identification",
              description: "Identifies intent and required data",
                  color: "text-amber-400",
                  bg: "bg-amber-500/10",
            },
            {
              number: "03",
              icon: Database,
              title: "Data Retrieval",
              description: "Fetches information via MCP integrations",
                  color: "text-amber-400",
                  bg: "bg-amber-500/10",
            },
            {
              number: "04",
                  icon: FileText,
              title: "Response Drafting",
              description: "Drafts accurate responses using context",
                  color: "text-amber-400",
                  bg: "bg-amber-500/10",
            },
            {
              number: "05",
              icon: Send,
              title: "Escalation & Delivery",
              description: "Sends response or escalates to humans",
                  color: "text-amber-400",
                  bg: "bg-amber-500/10",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-8 rounded-2xl text-center"
                >
                  <div className={`w-16 h-16 rounded-xl ${step.bg} flex items-center justify-center mx-auto mb-4 border border-amber-500/20`}>
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

        {/* Capabilities */}
        <section className="py-20 bg-slate-950">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Key Capabilities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
            {
              icon: Mail,
              title: "Email Reading & Understanding",
              description: "NLP-powered email comprehension",
                  color: "text-amber-400",
                  bg: "bg-amber-500/10",
            },
            {
              icon: Database,
              title: "Multi-system Data Retrieval",
              description: "Fetches data from CRM, orders, accounts",
                  color: "text-amber-400",
                  bg: "bg-amber-500/10",
            },
            {
              icon: FileText,
              title: "Contextual Response Generation",
              description: "Generates personalized, accurate responses",
                  color: "text-amber-400",
                  bg: "bg-amber-500/10",
            },
            {
              icon: Brain,
              title: "Intelligent Escalation",
              description: "Routes complex cases to human agents",
                  color: "text-amber-400",
                  bg: "bg-amber-500/10",
            },
            {
                  icon: MessageSquare,
              title: "Multi-language Support",
              description: "Handles emails in multiple languages",
                  color: "text-amber-400",
                  bg: "bg-amber-500/10",
            },
            {
              icon: BarChart3,
              title: "Performance Analytics",
              description: "Tracks resolution rates and satisfaction",
                  color: "text-amber-400",
                  bg: "bg-amber-500/10",
                },
              ].map((capability, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-8 rounded-2xl hover:border-amber-500/30 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl ${capability.bg} flex items-center justify-center mb-4 border border-amber-500/20`}>
                    <capability.icon className={capability.color} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{capability.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 bg-[#020617]">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="bg-slate-900/90 rounded-[2.5rem] border border-amber-500/20 shadow-2xl shadow-amber-500/10 overflow-hidden">
              <div className="p-8 md:p-12 border-b border-slate-800 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Business Outcomes</h2>
                <p className="text-slate-400">Typical impact from Customer Email AI deployment</p>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { metric: "Response Times", improvement: "Near-instant", color: "text-amber-300" },
                  { metric: "Support Costs", improvement: "↓ 60%", color: "text-yellow-400" },
                  { metric: "Customer Satisfaction", improvement: "+95%", color: "text-amber-300" },
                  { metric: "Ticket Throughput", improvement: "3x higher", color: "text-yellow-400" },
                  { metric: "ROI Period", improvement: "3-6 months", color: "text-amber-300", highlight: true },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-8 hover:bg-slate-800/30 transition-colors ${row.highlight ? "bg-gradient-to-r from-amber-500/10 to-yellow-600/10 border-l-4 border-amber-500" : ""}`}
                  >
                    <span className="text-lg font-medium text-slate-200">{row.metric}</span>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${row.highlight ? "text-amber-300" : row.color}`}>
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
          <div className="bg-gradient-to-br from-amber-600 via-amber-500 to-yellow-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-amber-500/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/40 blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/40 blur-[100px] animate-pulse" style={{ animationDelay: '0.5s' }} />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Respond faster — without adding headcount.
            </h2>
            <p className="text-slate-100 text-lg mb-10 max-w-xl mx-auto relative z-10">
              See Customer Email AI in action with a personalized demo.
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

export default CustomerEmailAI;
