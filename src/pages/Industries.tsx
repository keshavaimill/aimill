import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Shield, ShoppingBag, Factory, Heart, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      name: "Finance",
      description: "Risk assessment, fraud detection, and automated compliance",
      useCases: ["Fraud detection", "Risk analysis", "Regulatory compliance"],
      outcomes: ["Reduced fraud losses", "Faster approvals", "Better compliance"],
    },
    {
      icon: Shield,
      name: "Insurance",
      description: "Claims processing, underwriting, and customer service automation",
      useCases: ["FNOL processing", "Claims validation", "Policy management"],
      outcomes: ["Faster claims", "Lower costs", "Better accuracy"],
    },
    {
      icon: ShoppingBag,
      name: "Retail",
      description: "Inventory optimization, customer service, and personalization",
      useCases: ["Demand forecasting", "Customer support", "Personalization"],
      outcomes: ["Higher sales", "Lower inventory", "Better CX"],
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      useCases: ["Predictive maintenance", "Quality assurance", "Supply chain"],
      outcomes: ["Less downtime", "Lower costs", "Better quality"],
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Patient care coordination, administrative automation, and diagnostics",
      useCases: ["Care coordination", "Admin automation", "Diagnostic support"],
      outcomes: ["Better outcomes", "Lower costs", "Faster care"],
    },
    {
      icon: Film,
      name: "Media",
      description: "Content creation, audience engagement, and distribution optimization",
      useCases: ["Content generation", "Audience analysis", "Distribution"],
      outcomes: ["More engagement", "Faster production", "Better reach"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-40 pb-24 px-4 sm:px-8 lg:px-20">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          
          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 text-sm font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full mb-6">
                Industries
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-8">
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
          <div className="container mx-auto max-w-7xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="glass rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-8 h-8 text-primary" />
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
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
          <div className="container mx-auto max-w-4xl text-center">
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

