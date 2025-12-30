import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Scale, ShoppingBag, Users, Mail, TrendingUp, Shield, Wrench } from "lucide-react";

const allSolutions = [
  {
    icon: Target,
    title: "Marketing Agent",
    description: "Autonomous marketing execution from insight to impact",
    href: "/solutions/marketing-agent",
    color: "cyan",
    category: "Marketing",
  },
  {
    icon: Scale,
    title: "Lexflow AI",
    description: "The agentic legal command center",
    href: "/solutions/lexflow-ai",
    color: "purple",
    category: "Legal",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce Intelligence",
    description: "AI agents powering ecommerce operations",
    href: "/solutions/ecommerce-intelligence",
    color: "green",
    category: "Ecommerce",
  },
  {
    icon: Users,
    title: "HR Bot",
    description: "HR operations automated through conversation",
    href: "/solutions/hr-bot",
    color: "pink",
    category: "HR",
  },
  {
    icon: Mail,
    title: "Customer Email AI",
    description: "Autonomous backend customer support team",
    href: "/solutions/customer-email-ai",
    color: "teal",
    category: "Support",
  },
  {
    icon: TrendingUp,
    title: "Forecasting Engine",
    description: "Demand prediction you can act on",
    href: "/solutions/forecasting-engine",
    color: "cyan",
    category: "Analytics",
  },
  {
    icon: Shield,
    title: "Insurance FNOL Agent",
    description: "Faster, smarter claims processing",
    href: "/solutions/insurance-fnol",
    color: "purple",
    category: "Insurance",
  },
  {
    icon: Wrench,
    title: "Predictive Maintenance",
    description: "Prevent failures before they happen",
    href: "/solutions/predictive-maintenance",
    color: "green",
    category: "Manufacturing",
  },
];

const categories = ["All", ...Array.from(new Set(allSolutions.map(s => s.category)))];

const Solutions = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSolutions = selectedCategory === "All" 
    ? allSolutions 
    : allSolutions.filter(s => s.category === selectedCategory);

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
                Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-8">
                AI Agents for{" "}
                <span className="gradient-text">Every Business Function</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Specialized solutions built for production deployment
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="relative py-8 px-4 sm:px-8 lg:px-20 border-b border-border/50">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
          {/* Elegant Grey Texture Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Soft gradient base */}
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
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredSolutions.map((solution, idx) => {
                const Component = solution.href.startsWith("/") ? Link : motion.div;
                const props = solution.href.startsWith("/") 
                  ? { to: solution.href }
                  : {};

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <Component
                      {...props}
                      className="glass rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-all group block h-full"
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${
                        solution.color === "cyan" ? "bg-cyan/20" :
                        solution.color === "purple" ? "bg-purple/20" :
                        solution.color === "green" ? "bg-green/20" :
                        solution.color === "pink" ? "bg-pink/20" :
                        "bg-teal/20"
                      }`}>
                        <solution.icon className={`w-5 h-5 ${
                          solution.color === "cyan" ? "text-cyan" :
                          solution.color === "purple" ? "text-purple" :
                          solution.color === "green" ? "text-green" :
                          solution.color === "pink" ? "text-pink" :
                          "text-teal"
                        }`} />
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                        {solution.category}
                      </div>
                      <h3 className="text-base font-bold mb-1.5">{solution.title}</h3>
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{solution.description}</p>
                      <div className="flex items-center gap-2 text-xs font-semibold text-primary group-hover:gap-3 transition-all">
                        Learn more
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </Component>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;

