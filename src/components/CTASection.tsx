import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-card to-secondary" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          
          {/* Gradient orbs */}
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />

          <div className="relative z-10 py-20 px-8 md:px-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Text content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-xl"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Build better with{" "}
                  <span className="gradient-text">AIMILL</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join thousands of developers building the next generation of AI-powered applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button variant="hero" size="lg" className="group">
                      Book a Demo
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/consulting">
                    <Button variant="heroOutline" size="lg">
                      Talk to an Expert
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Visual element */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 relative">
                  {/* Animated rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-primary/30"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 rounded-full border border-accent/30"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 rounded-full border border-green/30"
                  />
                  
                  {/* Center button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-24 h-24 rounded-full bg-primary flex items-center justify-center cursor-pointer shadow-lg shadow-primary/30"
                    >
                      <ArrowRight className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                  </div>

                  {/* Floating dots */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 rounded-full bg-primary"
                      style={{
                        top: `${20 + i * 20}%`,
                        left: i % 2 === 0 ? "0%" : "100%",
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{
                        y: [-5, 5, -5],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
