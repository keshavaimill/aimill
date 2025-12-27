import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Outcome {
  icon: LucideIcon;
  metric: string;
  label: string;
  description: string;
}

interface SolutionOutcomesProps {
  outcomes: Outcome[];
  themeColor: "cyan" | "purple" | "green" | "pink" | "teal";
}

export const SolutionOutcomes = ({ outcomes, themeColor }: SolutionOutcomesProps) => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b via-transparent to-transparent ${
        themeColor === "cyan" ? "from-cyan/8" :
        themeColor === "purple" ? "from-purple/8" :
        themeColor === "green" ? "from-green/8" :
        themeColor === "pink" ? "from-pink/8" :
        "from-teal/8"
      }`} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className={`inline-block px-4 py-2 text-sm font-bold tracking-widest uppercase mb-6 ${
            themeColor === "cyan" ? "text-cyan" :
            themeColor === "purple" ? "text-purple" :
            themeColor === "green" ? "text-green" :
            themeColor === "pink" ? "text-pink" :
            "text-teal"
          }`}>
            Business Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Measurable impact from day one
          </h2>
        </motion.div>

        {/* Outcomes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass rounded-2xl p-8 text-center border border-border/50 hover:border-primary/30 transition-all group min-h-[280px] flex flex-col items-center relative overflow-hidden"
            >
              {/* Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-b to-transparent opacity-0 group-hover:opacity-100 transition-opacity ${
                themeColor === "cyan" ? "from-cyan/5" :
                themeColor === "purple" ? "from-purple/5" :
                themeColor === "green" ? "from-green/5" :
                themeColor === "pink" ? "from-pink/5" :
                "from-teal/5"
              }`} />

              {/* Icon */}
              <div className="mb-6 relative z-10">
                <outcome.icon className={`w-14 h-14 ${
                  themeColor === "cyan" ? "text-cyan" :
                  themeColor === "purple" ? "text-purple" :
                  themeColor === "green" ? "text-green" :
                  themeColor === "pink" ? "text-pink" :
                  "text-teal"
                }`} />
              </div>

              {/* Metric */}
              <div className={`text-5xl font-black mb-4 relative z-10 ${
                themeColor === "cyan" ? "bg-gradient-to-r from-cyan to-cyan/60 bg-clip-text text-transparent" :
                themeColor === "purple" ? "bg-gradient-to-r from-purple to-purple/60 bg-clip-text text-transparent" :
                themeColor === "green" ? "bg-gradient-to-r from-green to-green/60 bg-clip-text text-transparent" :
                themeColor === "pink" ? "bg-gradient-to-r from-pink to-pink/60 bg-clip-text text-transparent" :
                "bg-gradient-to-r from-teal to-teal/60 bg-clip-text text-transparent"
              }`}>
                {outcome.metric}
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold mb-3 relative z-10">{outcome.label}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

