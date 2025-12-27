import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface SolutionOverviewProps {
  title: string;
  description: string;
  capabilities: string[];
  themeColor: "cyan" | "purple" | "green" | "pink" | "teal";
}

export const SolutionOverview = ({ title, description, capabilities, themeColor }: SolutionOverviewProps) => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 bg-background">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={`inline-block px-4 py-2 text-sm font-bold tracking-widest uppercase mb-6 ${
            themeColor === "cyan" ? "text-cyan" :
            themeColor === "purple" ? "text-purple" :
            themeColor === "green" ? "text-green" :
            themeColor === "pink" ? "text-pink" :
            "text-teal"
          }`}>
            The Solution
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8">
            {title}
          </h2>

          <p className="text-xl text-muted-foreground mb-4">It:</p>

          {/* Capabilities List */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {capabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <Check className={`w-6 h-6 flex-shrink-0 mt-0.5 ${
                  themeColor === "cyan" ? "text-cyan" :
                  themeColor === "purple" ? "text-purple" :
                  themeColor === "green" ? "text-green" :
                  themeColor === "pink" ? "text-pink" :
                  "text-teal"
                }`} />
                <span className="text-lg text-foreground leading-relaxed">{capability}</span>
              </motion.div>
            ))}
          </div>

          {/* Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-8 border border-border/50"
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              {["Data Input", "Analysis", "Decision", "Execution", "Learning"].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className={`px-6 py-4 rounded-xl ${
                    themeColor === "cyan" ? "bg-cyan/10 border-cyan/20" :
                    themeColor === "purple" ? "bg-purple/10 border-purple/20" :
                    themeColor === "green" ? "bg-green/10 border-green/20" :
                    themeColor === "pink" ? "bg-pink/10 border-pink/20" :
                    "bg-teal/10 border-teal/20"
                  } border`}>
                    <span className="text-sm font-semibold">{step}</span>
                  </div>
                  {idx < 4 && (
                    <div className="w-8 h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

