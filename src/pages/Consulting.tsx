import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Code, Settings, TrendingUp, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Consulting = () => {
  const services = [
    {
      icon: Target,
      title: "Strategy & Roadmap",
      description: "Define your agentic AI vision and build a clear execution path",
    },
    {
      icon: Code,
      title: "Custom Agent Design",
      description: "Develop specialized agents tailored to your business processes",
    },
    {
      icon: Settings,
      title: "Platform Integration",
      description: "Seamlessly connect with your existing systems and workflows",
    },
    {
      icon: Building2,
      title: "Governance Frameworks",
      description: "Establish policies, controls, and compliance structures",
    },
    {
      icon: TrendingUp,
      title: "Scale & Optimization",
      description: "Optimize performance and scale your AI operations",
    },
  ];

  const industries = [
    "Finance",
    "Insurance",
    "Retail",
    "Manufacturing",
    "Healthcare",
    "Media",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-40 pb-24 px-4 sm:px-8 lg:px-20">
          {/* Dark Grey Texture Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-zinc-950/30 to-zinc-900/40" />
            <div className="absolute inset-0 opacity-[0.1]" style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.02) 60px, rgba(255,255,255,0.02) 61px),
                repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.02) 60px, rgba(255,255,255,0.02) 61px)
              `,
            }} />
          </div>
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple/20 rounded-full blur-[120px]" />
          
          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 text-sm font-bold tracking-widest uppercase text-purple bg-purple/10 rounded-full mb-6">
                Consulting
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-8">
                Boutique{" "}
                <span className="gradient-text-purple">Agentic AI</span> Consulting
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Build AI systems that actually work. Expert guidance from strategy to execution.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group h-16 px-12 text-lg">
                  Talk to an Expert
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
          {/* Elegant Dark Grey Texture Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Rich gradient base */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-zinc-950/50 to-zinc-900/60" />
            
            {/* Visible grid pattern */}
            <div className="absolute inset-0 opacity-[0.2]" style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.05) 39px, rgba(255,255,255,0.05) 40px),
                repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.05) 39px, rgba(255,255,255,0.05) 40px)
              `,
            }} />
            
            {/* Visible dots at grid intersections */}
            <div className="absolute inset-0 opacity-[0.25]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='0' cy='0' r='1'/%3E%3Ccircle cx='40' cy='0' r='1'/%3E%3Ccircle cx='0' cy='40' r='1'/%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px',
            }} />
            
            {/* Enhanced mesh for depth */}
            <div className="absolute inset-0 opacity-[0.12]" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(128,128,128,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(128,128,128,0.1) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(128,128,128,0.06) 0%, transparent 70%)
              `,
            }} />
            
            {/* Additional texture overlay */}
            <div className="absolute inset-0 opacity-[0.15]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground">
                End-to-end support for your agentic AI journey
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="glass rounded-2xl p-8 border border-zinc-800/50 bg-zinc-950/30 hover:border-zinc-700 hover:bg-zinc-950/50 transition-all group backdrop-blur-sm"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                    idx === 0 ? "bg-gradient-to-br from-cyan/30 to-cyan/20" :
                    idx === 1 ? "bg-gradient-to-br from-purple/30 to-purple/20" :
                    idx === 2 ? "bg-gradient-to-br from-green/30 to-green/20" :
                    idx === 3 ? "bg-gradient-to-br from-pink/30 to-pink/20" :
                    "bg-gradient-to-br from-teal/30 to-teal/20"
                  }`}>
                    <service.icon className={`w-8 h-8 ${
                      idx === 0 ? "text-cyan" :
                      idx === 1 ? "text-purple" :
                      idx === 2 ? "text-green" :
                      idx === 3 ? "text-pink" :
                      "text-teal"
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
          {/* Dark Grey Texture Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-zinc-950/40 to-zinc-900/50" />
            <div className="absolute inset-0 opacity-[0.15]" style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.03) 60px, rgba(255,255,255,0.03) 61px),
                repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.03) 60px, rgba(255,255,255,0.03) 61px)
              `,
            }} />
            <div className="absolute inset-0 opacity-[0.2]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.25'%3E%3Ccircle cx='15' cy='15' r='1.5'/%3E%3Ccircle cx='45' cy='15' r='1.5'/%3E%3Ccircle cx='15' cy='45' r='1.5'/%3E%3Ccircle cx='45' cy='45' r='1.5'/%3E%3Ccircle cx='30' cy='30' r='1.2'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground">
                Specialized expertise across verticals
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass rounded-xl p-8 text-center border border-zinc-800/50 bg-zinc-950/30 hover:border-zinc-700 hover:bg-zinc-950/50 transition-all group backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold">{industry}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
          {/* Dark Grey Texture Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-zinc-950/30 to-zinc-900/40" />
            <div className="absolute inset-0 opacity-[0.08]" style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.02) 60px, rgba(255,255,255,0.02) 61px),
                repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.02) 60px, rgba(255,255,255,0.02) 61px)
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
                Build AI systems that{" "}
                <span className="gradient-text">actually work</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-12">
                Let's discuss how agentic AI can transform your operations
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group h-16 px-12 text-lg">
                  Talk to an Expert
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

export default Consulting;

