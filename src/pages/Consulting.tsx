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
          <div className="absolute inset-0 grid-pattern opacity-30" />
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
          <div className="container mx-auto max-w-6xl">
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
                  className="glass rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 bg-card/30">
          <div className="container mx-auto max-w-6xl">
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
                  className="glass rounded-xl p-8 text-center border border-border/50 hover:border-purple/30 transition-all group"
                >
                  <h3 className="text-xl font-bold">{industry}</h3>
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

