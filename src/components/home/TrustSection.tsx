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
    <section className="relative py-16 sm:py-24 px-4 sm:px-8 lg:px-20 border-y border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm sm:text-base font-semibold">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

