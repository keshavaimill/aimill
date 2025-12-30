import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Scale, ShoppingBag, Users, Mail, TrendingUp, Shield, Wrench } from "lucide-react";

const solutions = [
  {
    icon: Target,
    title: "Marketing Agent",
    description: "Autonomous marketing execution from insight to impact",
    href: "/solutions/marketing-agent",
    color: "cyan",
  },
  {
    icon: Scale,
    title: "Lexflow AI",
    description: "The agentic legal command center",
    href: "/solutions/lexflow-ai",
    color: "purple",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce Intelligence",
    description: "AI agents powering ecommerce operations",
    href: "/solutions/ecommerce-intelligence",
    color: "green",
  },
  {
    icon: Users,
    title: "HR Bot",
    description: "HR operations automated through conversation",
    href: "/solutions/hr-bot",
    color: "pink",
  },
  {
    icon: Mail,
    title: "Customer Email AI",
    description: "Autonomous backend customer support team",
    href: "/solutions/customer-email-ai",
    color: "teal",
  },
  {
    icon: TrendingUp,
    title: "Forecasting Engine",
    description: "Demand prediction you can act on",
    href: "/solutions/forecasting-engine",
    color: "cyan",
  },
  {
    icon: Shield,
    title: "Insurance FNOL Agent",
    description: "Faster, smarter claims processing",
    href: "/solutions/insurance-fnol",
    color: "purple",
  },
  {
    icon: Wrench,
    title: "Predictive Maintenance",
    description: "Prevent failures before they happen",
    href: "/solutions/predictive-maintenance",
    color: "green",
  },
  {
    icon: Target,
    title: "AI Consulting",
    description: "Boutique agentic AI consulting",
    href: "/consulting",
    color: "pink",
  },
];

export const SolutionsGrid = () => {
  return (
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Product Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Specialized AI agents for every business function
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {solutions.map((solution, idx) => {
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
                  className="rounded-xl p-4 h-full block bg-zinc-900 border border-zinc-700 hover:border-zinc-500 transition-all group">
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
  );
};

