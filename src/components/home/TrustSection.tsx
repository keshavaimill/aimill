import { motion } from "framer-motion";
import { Shield, Lock, UserCheck, Code } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    text: "Built for enterprise deployment",
  },
  {
    icon: Lock,
    text: "Secure by design",
  },
  {
    icon: UserCheck,
    text: "Human oversight built-in",
  },
  {
    icon: Code,
    text: "API & system-native",
  },
];

export const TrustSection = () => {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Gradient transition from black to section-bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-section-bg" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-secondary/50 border border-border/30 flex items-center justify-center backdrop-blur-sm group-hover:border-primary/50 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <item.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <span className="text-sm sm:text-base font-semibold text-foreground/90 group-hover:text-foreground transition-colors">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

