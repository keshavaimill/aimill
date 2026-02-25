import { motion } from "framer-motion";
import { Shield, Lock, UserCheck, Code } from "lucide-react";

const trustItems = [
  {
     icon: Shield,
    text: "Built for Enterprise Deployment",
    bg: "bg-sky-500/20",
    color: "text-sky-400",
  },
  {
    icon: Lock,
    text: "Secure by Design",
    bg: "bg-violet-500/20",
    color: "text-violet-400",
  },
  {
    icon: UserCheck,
    text: "Human Oversight Built-in",
    bg: "bg-emerald-500/20",
    color: "text-emerald-400",
  },
  {
    icon: Code,
    text: "API & System-Native",
    bg: "bg-fuchsia-600/20" ,
    color: "text-fuchsia-400",
  },
];

export const TrustSection = () => {
  return (
    <section className="relative py-12 sm:py-24 px-4 sm:px-8 lg:px-20 border-y border-border/50">
      <div className="container mx-auto max-w-6xl min-w-0">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.bg}`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <span className="text-sm sm:text-base font-semibold">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
