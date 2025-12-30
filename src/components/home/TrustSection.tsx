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
      
      <div className="container mx-auto max-w-6xl relative z-10">
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
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                idx === 0 ? "bg-gradient-to-br from-cyan/30 to-cyan/20" :
                idx === 1 ? "bg-gradient-to-br from-purple/30 to-purple/20" :
                idx === 2 ? "bg-gradient-to-br from-green/30 to-green/20" :
                "bg-gradient-to-br from-pink/30 to-pink/20"
              }`}>
                <item.icon className={`w-6 h-6 ${
                  idx === 0 ? "text-cyan" :
                  idx === 1 ? "text-purple" :
                  idx === 2 ? "text-green" :
                  "text-pink"
                }`} />
              </div>
              <span className="text-sm sm:text-base font-semibold">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

