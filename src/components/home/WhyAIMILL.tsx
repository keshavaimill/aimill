import { motion, AnimatePresence } from "framer-motion";
import { Target, Zap, Building2, TrendingUp, Lightbulb, Hammer, Rocket, BarChart3, Network } from "lucide-react";
import { useState, useEffect } from "react";

const benefits = [
  {
    icon: Target,
    description: "Production-First Architecture Designed to operate reliably within complex enterprise systems.",
  },
  {
    icon: Zap,
    description: "Business Outcomes at the Core Agent behavior aligned directly to measurable results.",
  },
  {
    icon: Building2,
    description: "Domain-Specific Intelligence Solutions shaped by industry realities, not generic models.",
  },
  {
    icon: TrendingUp,
    description: "Rapid Path to Impact from engagement to production in weeks—not quarters.",
  },
];

export const WhyAIMILL = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [collapsed, setCollapsed] = useState(false);

  const steps = [
    { icon: Lightbulb, title: "Strategy", description: "Identify high-impact use cases and define success metrics." },
    { icon: Hammer, title: "Build", description: "Develop custom agents with low-code orchestration and templates." },
    { icon: Rocket, title: "Deploy", description: "Launch with enterprise-grade security and scalable infrastructure." },
    { icon: BarChart3, title: "Measure", description: "Track performance with real-time analytics and optimize ROI." },
    { icon: Network, title: "Scale", description: "Expand capabilities across departments and automate workflows." }
  ];

  // Auto timeline animation
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!collapsed && activeIndex < steps.length) {
      timer = setTimeout(() => {
        setActiveIndex(prev => prev + 1);
      }, 1800); // delay between each step expand
    }

    if (!collapsed && activeIndex === steps.length) {
      timer = setTimeout(() => {
        setCollapsed(true);
      }, 2200); // wait before collapsing all
    }

    if (collapsed) {
      timer = setTimeout(() => {
        setCollapsed(false);
        setActiveIndex(0);
      }, 1200); // restart after collapse
    }

    return () => clearTimeout(timer);
  }, [activeIndex, collapsed, steps.length]);

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-20 bg-section-bg overflow-x-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`,
        }} />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ backgroundColor: "#D1FAE5" }}
            className="rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8 text-black">
              Why Ai Mill?
            </h2>
            <div className="space-y-6 flex-grow">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      idx === 0
                        ? "bg-gradient-to-br from-indigo-500/30 to-indigo-400/20"
                        : idx === 1
                        ? "bg-gradient-to-br from-purple/30 to-purple/20"
                        : idx === 2
                        ? "bg-gradient-to-br from-violet-500/30 to-violet-400/20"
                        : "bg-gradient-to-br from-pink/30 to-pink/20"
                    }`}
                  >
                    <benefit.icon
                      className={`w-6 h-6 ${
                        idx === 0
                          ? "text-indigo-500"
                          : idx === 1
                          ? "text-purple"
                          : idx === 2
                          ? "text-violet-500"
                          : "text-pink"
                      }`}
                    />
                  </div>

                  <div>
                    <p className="text-lg text-black font-semibold leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Timeline Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 sm:p-8 lg:p-10 border border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col"
          >
            <motion.h3 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold mb-8 text-foreground"
            >
              Your Journey
            </motion.h3>
            <div className="relative flex-grow">
              <div className="space-y-0">
                {steps.map((step, idx) => {
                  const isExpanded = !collapsed && idx < activeIndex;

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-start gap-4 pb-6 last:pb-0 group"
                    >
                      {/* Icon Circle */}
                      <div className="flex flex-col items-center relative z-10">
                        <motion.button
                          animate={{ scale: isExpanded ? 1.15 : 1.1 }}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          className={`w-10 h-10 rounded-full flex items-center justify-center relative cursor-pointer ${
                            idx === 0 ? "bg-gradient-to-br from-cyan/30 to-cyan/20" :
                            idx === 1 ? "bg-gradient-to-br from-purple/30 to-purple/20" :
                            idx === 2 ? "bg-gradient-to-br from-green/30 to-green/20" :
                            idx === 3 ? "bg-gradient-to-br from-pink/30 to-pink/20" :
                            "bg-gradient-to-br from-primary/30 to-primary/20"
                          } ${isExpanded ? "ring-2 ring-white/50" : ""}`}
                        >
                          <step.icon className={`w-5 h-5 ${
                            idx === 0 ? "text-cyan" :
                            idx === 1 ? "text-purple" :
                            idx === 2 ? "text-green" :
                            idx === 3 ? "text-pink" :
                            "text-primary"
                          }`} />
                          {isExpanded && (
                            <motion.div
                              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className={`absolute inset-0 rounded-full ${
                                idx === 0 ? "bg-cyan/20" :
                                idx === 1 ? "bg-purple/20" :
                                idx === 2 ? "bg-green/20" :
                                idx === 3 ? "bg-pink/20" :
                                "bg-primary/20"
                              }`}
                            />
                          )}
                        </motion.button>
                        
                        {idx < steps.length - 1 && (
                          <div
                            className="w-0.5 mt-2 mb-2 bg-white/20"
                            style={{ minHeight: "3rem" }}
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <h4 className={`text-base sm:text-lg font-bold mb-2 transition-colors ${
                          isExpanded
                            ? idx === 0 ? "text-cyan" :
                              idx === 1 ? "text-purple" :
                              idx === 2 ? "text-green" :
                              idx === 3 ? "text-pink" :
                              "text-primary"
                            : "text-white/70"
                        }`}>
                          {step.title}
                        </h4>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.p
                              initial={{ opacity: 0, height: 0, y: -10 }}
                              animate={{ opacity: 1, height: "auto", y: 0 }}
                              exit={{ opacity: 0, height: 0, y: -10 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="text-sm text-white/80 leading-relaxed overflow-hidden"
                            >
                              {step.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
