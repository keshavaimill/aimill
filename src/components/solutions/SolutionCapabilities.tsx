import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SolutionCapabilitiesProps {
  capabilities: Capability[];
  channels?: string[];
  themeColor: "cyan" | "purple" | "green" | "pink" | "teal";
}

export const SolutionCapabilities = ({ capabilities, channels, themeColor }: SolutionCapabilitiesProps) => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 bg-background">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-2 text-sm font-bold tracking-widest uppercase mb-6 ${
            themeColor === "cyan" ? "text-cyan" :
            themeColor === "purple" ? "text-purple" :
            themeColor === "green" ? "text-green" :
            themeColor === "pink" ? "text-pink" :
            "text-teal"
          }`}>
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Everything you need for production deployment
          </h2>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((capability, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all group min-h-[240px] flex flex-col"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                themeColor === "cyan" ? "bg-gradient-to-br from-cyan/20 to-cyan/10" :
                themeColor === "purple" ? "bg-gradient-to-br from-purple/20 to-purple/10" :
                themeColor === "green" ? "bg-gradient-to-br from-green/20 to-green/10" :
                themeColor === "pink" ? "bg-gradient-to-br from-pink/20 to-pink/10" :
                "bg-gradient-to-br from-teal/20 to-teal/10"
              }`} style={{ boxShadow: `0 8px 24px ${themeColor === "cyan" ? "rgba(6, 182, 212, 0.3)" : themeColor === "purple" ? "rgba(139, 92, 246, 0.3)" : themeColor === "green" ? "rgba(16, 185, 129, 0.3)" : themeColor === "pink" ? "rgba(236, 72, 153, 0.3)" : "rgba(20, 184, 166, 0.3)"}` }}>
                <capability.icon className={`w-8 h-8 ${
                  themeColor === "cyan" ? "text-cyan" :
                  themeColor === "purple" ? "text-purple" :
                  themeColor === "green" ? "text-green" :
                  themeColor === "pink" ? "text-pink" :
                  "text-teal"
                }`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">{capability.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed flex-grow">{capability.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Channels/Integrations */}
        {channels && channels.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-8 block">
              Channels & Integrations
            </span>
            <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
              {channels.map((channel, idx) => (
                <div key={idx} className="w-12 h-12 rounded-lg bg-secondary/30 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity">
                  <span className="text-xs font-semibold">{channel}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

