import { motion } from "framer-motion";
import { ArrowRight, Database, Brain, Wrench, CheckCircle, TrendingUp } from "lucide-react";

export const HeroVisual = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto mt-12">
      {/* Flow Diagram */}
      <div className="glass rounded-3xl p-8 border border-border/50">
        <div className="flex items-center justify-between gap-4">
          {/* Input */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-xl bg-cyan/20 flex items-center justify-center">
              <Database className="w-8 h-8 text-cyan" />
            </div>
            <span className="text-xs font-semibold">Inputs</span>
          </motion.div>

          <ArrowRight className="w-6 h-6 text-muted-foreground" />

          {/* Agents */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-xl bg-purple/20 flex items-center justify-center">
              <Brain className="w-8 h-8 text-purple" />
            </div>
            <span className="text-xs font-semibold">Agents</span>
          </motion.div>

          <ArrowRight className="w-6 h-6 text-muted-foreground" />

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-xl bg-green/20 flex items-center justify-center">
              <Wrench className="w-8 h-8 text-green" />
            </div>
            <span className="text-xs font-semibold">Tools</span>
          </motion.div>

          <ArrowRight className="w-6 h-6 text-muted-foreground" />

          {/* Decisions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-xl bg-pink/20 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-pink" />
            </div>
            <span className="text-xs font-semibold">Decisions</span>
          </motion.div>

          <ArrowRight className="w-6 h-6 text-muted-foreground" />

          {/* Outcomes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <span className="text-xs font-semibold">Outcomes</span>
          </motion.div>
        </div>

        {/* Floating Labels */}
        <div className="absolute -top-4 left-1/4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="px-3 py-1 glass rounded-full text-xs font-semibold border border-border/50"
          >
            LLMs
          </motion.div>
        </div>
        <div className="absolute -top-4 right-1/4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="px-3 py-1 glass rounded-full text-xs font-semibold border border-border/50"
          >
            MCP Servers
          </motion.div>
        </div>
        {/* Bottom Left */}
<div className="absolute -bottom-6 left-1/2 -translate-x-full -ml-12">
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.9 }}
    className="px-3 py-1 glass rounded-full text-xs font-semibold border border-border/50 whitespace-nowrap"
  >
    RAG Pipelines
  </motion.div>
</div>

{/* Bottom Right */}
<div className="absolute -bottom-6 left-1/2 translate-x-[20px]">
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 2.1 }}
    className="px-3 py-1 glass rounded-full text-xs font-semibold border border-border/50 whitespace-nowrap"
  >
    Human-in-the-loop
  </motion.div>
</div>

      </div>
    </div>
  );
};

