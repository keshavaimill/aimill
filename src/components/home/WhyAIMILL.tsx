import { motion } from "framer-motion";
import { Check, Target, Zap, Building2, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";


const benefits = [
  {
    icon: Target,
    title: "Designed for production, not demos",
    description: "Built for real-world enterprise deployment",
  },
  {
    icon: Zap,
    title: "Outcome-based agent design",
    description: "Every agent optimized for measurable business results",
  },
  {
    icon: Building2,
    title: "Vertical-specific intelligence",
    description: "Industry-tailored solutions that understand your domain",
  },
  {
    icon: TrendingUp,
    title: "Faster time-to-value",
    description: "Deploy in weeks, not months",
  },
];

export const WhyAIMILL = () => {
    const steps = ["Strategy", "Build", "Deploy", "Measure", "Scale"];
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) =>
        prev < steps.length - 1 ? prev + 1 : 0
      );
    }, 1200); // speed of travel

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 bg-[#1a1a1a]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ backgroundColor: "#609a76ff" }} // green-400
            className="rounded-2xl p-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-black">
              Why AIMILL
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg text-black/100 font-bold leading-relaxed">{benefit.title}</h3>
                    <p className="text-black">{benefit.description}</p>
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
            className="glass rounded-2xl p-8 border border-border/50"
          >
            <h3 className="text-xl font-bold mb-6">Your Journey</h3>
            <div className="space-y-4">
              {steps.map((step, idx) => {
  const isActive = idx <= activeStep;

              return (
                <div key={idx} className="flex items-start gap-4">
                  {/* Circle */}
                  <motion.div
                    animate={{
                      backgroundColor: isActive
                        ? "hsl(var(--primary))"
                        : "hsl(var(--secondary))",
                      color: isActive ? "#000" : "#fff",
                    }}
                    transition={{ duration: 0.4 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                  >
                    {idx + 1}
                  </motion.div>

                  {/* Label + Line */}
                  <div className="flex-1">
                    <div className="font-semibold">{step}</div>

                    {idx < steps.length - 1 && (
                      <motion.div
                        animate={{
                          backgroundColor: idx < activeStep
                            ? "hsl(var(--primary))"
                            : "hsl(var(--border))",
                          height: idx < activeStep ? "2rem" : "1.5rem",
                        }}
                        transition={{ duration: 0.4 }}
                        className="w-0.5 ml-5 mt-2"
                      />
                    )}
                  </div>
                </div>
              );
            })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

