import { motion } from "framer-motion";
import { Check, Target, Zap, Building2, TrendingUp } from "lucide-react";

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
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 bg-section-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8">
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
                    <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
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
              {["Strategy", "Build", "Deploy", "Measure", "Scale"].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    idx === 0 ? "bg-primary text-primary-foreground" :
                    "bg-secondary text-foreground"
                  }`}>
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{step}</div>
                    {idx < 4 && (
                      <div className="h-8 w-0.5 bg-border ml-5 mt-2" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

