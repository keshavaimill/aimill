import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const AgenticAISection = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 bg-[#1a1a1a]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ backgroundColor: "#609a76ff" }} // green-400
            className="rounded-2xl p-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-black">
              From automation to autonomy
            </h2>
            <p className="text-lg text-black/80 leading-relaxed">
              Agentic systems continuously evaluate goals, invoke tools, collaborate with other agents, and validate outcomes with confidence scoring.
            </p>
          </motion.div>

          {/* Right Column - Comparison Table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 border border-border/50"
          >
            <div className="space-y-6">
              {/* Traditional Automation */}
              <div className="pb-6 border-b border-border/50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Traditional Automation</h3>
                  <span className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground">Rules</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Follows predefined rules and workflows
                </p>
              </div>

              {/* AI Assistants */}
              <div className="pb-6 border-b border-border/50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">AI Assistants</h3>
                  <span className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground">Respond</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Responds to prompts and questions
                </p>
              </div>

              {/* Agentic AI */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Agentic AI</h3>
                  <span className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full font-semibold">Decide & Act</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Executes outcomes autonomously with reasoning
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground italic">
                This is how enterprises move from AI experiments to AI operations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

