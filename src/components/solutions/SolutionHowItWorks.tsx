import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SolutionHowItWorksProps {
  steps: Step[];
  themeColor: "cyan" | "purple" | "green" | "pink" | "teal";
}

export const SolutionHowItWorks = ({ steps, themeColor }: SolutionHowItWorksProps) => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-radial via-transparent to-transparent ${
        themeColor === "cyan" ? "from-cyan/10" :
        themeColor === "purple" ? "from-purple/10" :
        themeColor === "green" ? "from-green/10" :
        themeColor === "pink" ? "from-pink/10" :
        "from-teal/10"
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
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Autonomous execution in five steps
          </h2>
        </motion.div>

        {/* Steps Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-border/50" style={{ top: "60px" }} />
          
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center relative z-10 flex-1"
              >
                {/* Step Number Circle */}
                <div className={`w-20 h-20 rounded-full border-4 border-background flex items-center justify-center mb-6 ${
                  themeColor === "cyan" ? "bg-cyan" :
                  themeColor === "purple" ? "bg-purple" :
                  themeColor === "green" ? "bg-green" :
                  themeColor === "pink" ? "bg-pink" :
                  "bg-teal"
                }`} style={{ boxShadow: `0 0 40px ${themeColor === "cyan" ? "rgba(6, 182, 212, 0.4)" : themeColor === "purple" ? "rgba(139, 92, 246, 0.4)" : themeColor === "green" ? "rgba(16, 185, 129, 0.4)" : themeColor === "pink" ? "rgba(236, 72, 153, 0.4)" : "rgba(20, 184, 166, 0.4)"}` }}>
                  <span className="text-3xl font-black text-white">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <step.icon className={`w-8 h-8 ${
                    themeColor === "cyan" ? "text-cyan" :
                    themeColor === "purple" ? "text-purple" :
                    themeColor === "green" ? "text-green" :
                    themeColor === "pink" ? "text-pink" :
                    "text-teal"
                  }`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

