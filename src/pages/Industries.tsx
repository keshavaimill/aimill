import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Shield, ShoppingBag, Factory, Heart, Film, CreditCard, Sprout, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Industries = () => {
  const industries = [
    {
      icon: CreditCard,
      name: "Lending & Financial Services",
      description: "Risk assessment, fraud detection, and automated compliance",
      useCases: ["Credit risk intelligence", "Fraud detection", "Portfolio monitoring"],
      outcomes: ["35% fewer defaults", "50% faster approvals", "70% fraud reduction"],
      href: "/industries/lending",
    },
    {
      icon: Sprout,
      name: "Agriculture",
      description: "Predictive crop management, pest detection, and supply chain optimization",
      useCases: ["Crop management", "Pest detection", "Precision agriculture"],
      outcomes: ["25% yield increase", "30% water savings", "35% cost reduction"],
      href: "/industries/agriculture",
    },
    {
      icon: Package,
      name: "Supply Chain",
      description: "Demand forecasting, logistics optimization, and risk management",
      useCases: ["Demand forecasting", "Logistics optimization", "Supplier intelligence"],
      outcomes: ["28% inventory reduction", "25% cost savings", "45% on-time delivery"],
      href: "/industries/supply-chain",
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, and production optimization",
      useCases: ["Predictive maintenance", "Quality intelligence", "Production optimization"],
      outcomes: ["45% downtime reduction", "50% defect reduction", "22% throughput increase"],
      href: "/industries/manufacturing",
    },
    {
      icon: Shield,
      name: "Insurance",
      description: "Claims processing, underwriting, and customer service automation",
      useCases: ["FNOL processing", "Claims validation", "Policy management"],
      outcomes: ["Faster claims", "Lower costs", "Better accuracy"],
      href: "/industries/insurance",
    },
    {
      icon: ShoppingBag,
      name: "Retail",
      description: "Inventory optimization, customer service, and personalization",
      useCases: ["Demand forecasting", "Customer support", "Personalization"],
      outcomes: ["Higher sales", "Lower inventory", "Better CX"],
      href: null,
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Patient care coordination, administrative automation, and diagnostics",
      useCases: ["Care coordination", "Admin automation", "Diagnostic support"],
      outcomes: ["Better outcomes", "Lower costs", "Faster care"],
      href: null,
    },
    {
      icon: Film,
      name: "Media",
      description: "Content creation, audience engagement, and distribution optimization",
      useCases: ["Content generation", "Audience analysis", "Distribution"],
      outcomes: ["More engagement", "Faster production", "Better reach"],
      href: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-40 pb-24 px-4 sm:px-8 lg:px-20 bg-black">
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-[120px]" />

          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 text-sm font-bold tracking-widest uppercase text-cyan bg-cyan/10 rounded-full mb-6">
                Industries
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-8 text-foreground">
                Agentic AI for{" "}
                <span className="gradient-text">Every Industry</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Specialized solutions built for the unique challenges of your vertical
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, idx) => {
                const cardContent = (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`glass rounded-2xl p-8 border border-border/50 hover:border-cyan/30 hover:scale-[1.02] hover:shadow-xl transition-all group ${industry.href ? 'cursor-pointer' : ''}`}
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 shadow-[0_0_15px_-5px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_-5px] transition-all duration-300 ${idx === 0 ? "group-hover:shadow-blue-500/30 group-hover:border-blue-500/30" :
                        idx === 1 ? "group-hover:shadow-green-500/30 group-hover:border-green-500/30" :
                          idx === 2 ? "group-hover:shadow-orange-500/30 group-hover:border-orange-500/30" :
                            idx === 3 ? "group-hover:shadow-gray-500/30 group-hover:border-gray-500/30" :
                              idx === 4 ? "group-hover:shadow-purple/30 group-hover:border-purple/30" :
                                idx === 5 ? "group-hover:shadow-pink/30 group-hover:border-pink/30" :
                                  idx === 6 ? "group-hover:shadow-red-500/30 group-hover:border-red-500/30" :
                                    "group-hover:shadow-teal/30 group-hover:border-teal/30"
                      }`}>
                      <industry.icon className={`w-7 h-7 stroke-[1.5] ${idx === 0 ? "text-blue-500" :
                          idx === 1 ? "text-green-500" :
                            idx === 2 ? "text-orange-500" :
                              idx === 3 ? "text-gray-400" :
                                idx === 4 ? "text-purple" :
                                  idx === 5 ? "text-pink" :
                                    idx === 6 ? "text-red-400" :
                                      "text-teal"
                        }`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
                    <p className="text-muted-foreground mb-6">{industry.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Use Cases
                      </h4>
                      <ul className="space-y-2">
                        {industry.useCases.map((useCase, i) => (
                          <li key={i} className="text-sm flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? "bg-blue-500" :
                                idx === 1 ? "bg-green-500" :
                                  idx === 2 ? "bg-orange-500" :
                                    idx === 3 ? "bg-gray-400" :
                                      idx === 4 ? "bg-purple" :
                                        idx === 5 ? "bg-pink" :
                                          idx === 6 ? "bg-red-400" :
                                            "bg-teal"
                              }`} />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {industry.outcomes.map((outcome, i) => (
                          <li key={i} className="text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {industry.href && (
                      <div className="mt-6 pt-6 border-t border-border/50">
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan group/link">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                );

                return industry.href ? (
                  <Link key={idx} to={industry.href} className="block no-underline">
                    {cardContent}
                  </Link>
                ) : (
                  <div key={idx}>{cardContent}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Ready to transform your industry?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-12">
                See how agentic AI can solve your specific challenges
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group h-16 px-12 text-lg">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;

