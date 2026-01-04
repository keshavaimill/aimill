import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  ArrowRight,
  ShoppingBag,
  Image,
  FileText,
  CheckCircle,
  TrendingUp,
  Database,
  Eye,
  Sparkles,
  Globe,
  BarChart3,
  Zap,
  Coins,
  AlertTriangle,
  Layers,
  Camera,
  PenTool,
  Clock,
  ShieldCheck,
  Package,
  Award,
} from "lucide-react";

const EcommerceIntelligence = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Data Fragmentation",
      desc: "Mismatched specs and descriptions across sales channels erode trust",
      color: "text-lime-400",
      bg: "bg-lime-500/10",
    },
    {
      icon: Clock,
      title: "Production Bottlenecks",
      desc: "Waiting weeks for expensive physical photoshoots delays revenue",
      color: "text-lime-400",
      bg: "bg-lime-500/10",
    },
    {
      icon: FileText,
      title: "Manual Content Fatigue",
      desc: "Teams burn out writing repetitive descriptions instead of strategizing",
      color: "text-lime-400",
      bg: "bg-lime-500/10",
    },
    {
      icon: Package,
      title: "Slow Market Entry",
      desc: "Marketplace onboarding takes weeks, missing critical trend windows",
      color: "text-lime-400",
      bg: "bg-lime-500/10",
    },
  ];

  const channels = ["Amazon", "Shopify", "WooCommerce", "eBay", "Marketplaces", "APIs"];

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
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/30 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-lime-400/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
          
          <div className="container mx-auto max-w-7xl px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fadeInLeft">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime-500/20 border border-lime-500/40 text-lime-300 text-xs font-bold tracking-widest mb-6 uppercase shadow-lg shadow-lime-500/20">
                  ECOMMERCE INTELLIGENCE
                </div>
                <h1 className="text-5xl lg:text-[64px] font-extrabold leading-[1.1] text-white mb-8 tracking-tight">
                  Autonomous Agents<br />For The Modern<br />Catalog
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-6 max-w-[600px]">
                  Orchestrate your entire product lifecycle. From detecting data discrepancies to generating conversion-optimized assets—fully automated.
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  <div className="flex items-center gap-2 px-4 py-2 bg-lime-500/20 rounded-full border border-lime-500/40 shadow-md shadow-lime-500/10 hover:bg-lime-500/30 transition-all">
                    <Zap className="w-4 h-4 text-lime-300" />
                    <span className="text-sm font-semibold text-lime-300">5x faster launches</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-500/40 shadow-md shadow-green-500/10 hover:bg-green-500/30 transition-all">
                    <Coins className="w-4 h-4 text-green-300" />
                    <span className="text-sm font-semibold text-green-300">70% lower overhead</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-emerald-600/20 rounded-full border border-emerald-600/40 shadow-md shadow-emerald-600/10 hover:bg-emerald-600/30 transition-all">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-400">+40% conversion rate</span>
                  </div>
                </div>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 h-14 px-8 text-lg font-semibold bg-gradient-to-br from-lime-500 via-green-500 to-emerald-600 text-white rounded-xl shadow-xl shadow-lime-500/40 hover:scale-105 hover:shadow-2xl hover:shadow-lime-500/50 transition-all"
                >
                  Talk to Ecommerce AI Experts <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Catalog Dashboard */}
              <div className="animate-scaleIn delay-200 opacity-0">
                <div className="bg-slate-900/90 backdrop-blur-xl rounded-[28px] p-10 border border-lime-500/30 shadow-2xl shadow-lime-500/10">
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center">
                        <ShoppingBag className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold">Catalog Dashboard</div>
                        <div className="text-xs text-slate-400">Product Lifecycle Management</div>
                      </div>
                    </div>
                    <div className="px-3 py-1.5 bg-lime-500/10 border border-lime-500/20 rounded-full">
                      <span className="text-[10px] font-bold text-lime-400 uppercase tracking-widest">Active</span>
                    </div>
                  </div>
                  
                  {/* Product Processing */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-gradient-to-r from-lime-500/10 to-green-500/10 rounded-xl p-4 border border-lime-500/20">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-lime-400" />
                          <span className="text-xs font-bold text-lime-400">AI GENERATING</span>
                        </div>
                        <div className="px-2 py-1 bg-lime-500/20 rounded-full">
                          <span className="text-[10px] font-bold text-lime-300">IN PROGRESS</span>
                        </div>
                      </div>
                      <p className="text-sm text-white font-medium mb-2">Product #2847 - Description & Assets</p>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Image className="w-3 h-3 text-lime-400" />
                        <span>Generating lifestyle imagery...</span>
                      </div>
                    </div>
                    
                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-xs font-bold text-green-400">READY FOR PUBLISH</span>
                        </div>
                        <div className="px-2 py-1 bg-green-500/20 rounded-full">
                          <span className="text-[10px] font-bold text-green-400">100% COMPLIANT</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-300 mb-2">Product #2846 - All assets validated</p>
                      <div className="text-xs text-slate-400">Marketplace ready: Amazon, Shopify</div>
                    </div>

                    <div className="bg-slate-800/50 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Eye className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-bold text-slate-400">QUALITY CHECK</span>
                      </div>
                      <p className="text-sm text-slate-300">124 products processed today</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-800/50">
                    <div className="bg-slate-800/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Package className="w-3 h-3 text-lime-400" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Products</span>
                      </div>
                      <div className="text-xl font-bold text-lime-400">1,247</div>
                    </div>
                    <div className="bg-slate-800/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-3 h-3 text-emerald-400" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Conversion</span>
                      </div>
                      <div className="text-xl font-bold text-emerald-400">+40%</div>
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
              Traditional ecommerce operations can't keep pace with modern demand. Data fragmentation slows launches, production bottlenecks delay revenue, and manual content creation burns out teams. <span className="text-lime-400 font-semibold">Ecommerce needs autonomous agents that orchestrate the entire catalog.</span>
            </p>
          </div>
        </section>

        {/* Key Problems */}
        <section className="py-20 bg-[#020617]">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Key Ecommerce Challenges</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {problems.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-10 rounded-2xl hover:border-lime-500/30 hover:-translate-y-2 hover:scale-[1.02] transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-6 border border-emerald-500/20`}>
                    <item.icon className={item.color} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="py-20 bg-slate-950">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                End-to-end catalog intelligence
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                AI Mill's Agents don't just assist; they take ownership of the repetitive, high-volume tasks that slow your team down.
              </p>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-[2.5rem] border border-slate-800/50 p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">What it does:</h3>
                  <ul className="space-y-4">
                    {[
                      "Detect discrepancies between images and descriptions",
                      "Generate product descriptions from images",
                      "Create virtual try-on visuals",
                      "Ensure marketplace readiness and brand compliance",
                      "Optimize content for conversion",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-lime-500/5 rounded-2xl p-8 border border-lime-500/10">
                  <h4 className="text-sm font-bold text-lime-400 uppercase tracking-wider mb-4">Integration Points</h4>
                  <div className="flex flex-wrap gap-2">
                    {channels.map((channel, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-300"
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
                  title: "Ingest & Normalize",
                  description: "Unifies raw product data from PIMs, suppliers, and spreadsheets",
                  color: "text-lime-400",
                  bg: "bg-lime-500/10",
                },
                {
                  number: "02",
                  icon: Eye,
                  title: "Visual Validation",
                  description: "AI scans imagery to ensure it matches technical specifications",
                  color: "text-lime-400",
                  bg: "bg-lime-500/10",
                },
                {
                  number: "03",
                  icon: Sparkles,
                  title: "Generative Enhancement",
                  description: "Creates rich descriptions, SEO tags, and lifestyle imagery",
                  color: "text-lime-400",
                  bg: "bg-lime-500/10",
                },
                {
                  number: "04",
                  icon: Layers,
                  title: "Virtual Production",
                  description: "Synthesizes try-on visuals and 3D assets without cameras",
                  color: "text-lime-400",
                  bg: "bg-lime-500/10",
                },
                {
                  number: "05",
                  icon: ShieldCheck,
                  title: "Quality Gate",
                  description: "Continuous monitoring ensures brand safety before publishing",
                  color: "text-lime-400",
                  bg: "bg-lime-500/10",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-8 rounded-2xl text-center"
                >
                  <div className={`w-16 h-16 rounded-xl ${step.bg} flex items-center justify-center mx-auto mb-4 border border-emerald-500/20`}>
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
                  icon: FileText,
                  title: "Visual-to-Text Generation",
                  description: "Derive accurate specs and descriptions directly from product pixels",
                  color: "text-lime-400",
                  bg: "bg-lime-500/10",
                },
                {
                  icon: Eye,
                  title: "Discrepancy Scouting",
                  description: "Automatically flag when the image color doesn't match the text description",
                  color: "text-lime-400",
                  bg: "bg-lime-500/10",
                },
                {
                  icon: Image,
                  title: "Virtual Studio",
                  description: "Generate on-model photography and scene variations instantly",
                  color: "text-lime-400",
                  bg: "bg-lime-500/10",
                },
                {
                  icon: CheckCircle,
                  title: "Readiness Scoring",
                  description: "Predict marketplace rejection probability before you submit",
                  color: "text-lime-400",
                  bg: "bg-lime-500/10",
                },
                {
                  icon: Globe,
                  title: "Omnichannel Adaptation",
                  description: "Reformats assets specifically for Amazon, Shopify, or Instagram",
                  color: "text-lime-400",
                  bg: "bg-lime-500/10",
                },
                {
                  icon: BarChart3,
                  title: "A/B Content Testing",
                  description: "Iteratively improves listing copy based on performance data",
                  color: "text-lime-400",
                  bg: "bg-lime-500/10",
                },
              ].map((capability, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-8 rounded-2xl hover:border-lime-500/30 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl ${capability.bg} flex items-center justify-center mb-4 border border-emerald-500/20`}>
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
            <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden">
              <div className="p-8 md:p-12 border-b border-slate-800 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Business Outcomes</h2>
                <p className="text-slate-400">Typical impact from Ecommerce Intelligence deployment</p>
              </div>
              <div className="divide-y divide-slate-800">
                {[
                  { metric: "Velocity Increase", improvement: "5x faster", color: "text-lime-400" },
                  { metric: "Cost Reduction", improvement: "↓ 70%", color: "text-green-400" },
                  { metric: "Conversion Lift", improvement: "+40%", color: "text-emerald-400" },
                  { metric: "Brand Compliance", improvement: "100%", color: "text-lime-400" },
                  { metric: "ROI Period", improvement: "3-6 months", color: "text-lime-400", highlight: true },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-8 hover:bg-slate-800/20 transition-colors ${row.highlight ? "bg-lime-500/5" : ""}`}
                  >
                    <span className="text-lg font-medium text-slate-300">{row.metric}</span>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${row.highlight ? "text-lime-400" : row.color}`}>
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
          <div className="bg-gradient-to-br from-lime-600 to-emerald-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/20 blur-[100px]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Scale your catalog, not your headcount.
            </h2>
            <p className="text-slate-100 text-lg mb-10 max-w-xl mx-auto relative z-10">
              See Ecommerce Intelligence in action with a personalized demo.
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

export default EcommerceIntelligence;
