import { motion } from "framer-motion";
import { Package, RefreshCw, GitBranch } from "lucide-react";

export const ArchitectureSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-section-bg">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Gradient orbs */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main statement */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            <span className="text-muted-foreground">Ai Mill uses a fully isolated runtime architecture:</span>{" "}
            <span className="text-foreground">Every deployed agent runs its own self-contained environment.</span>
          </h2>

          {/* Sub-statement with icons */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            They're{" "}
            <span className="inline-flex items-center gap-2">
              versioned <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan/30 to-cyan/20"><Package className="w-5 h-5 text-cyan" /></span>
            </span>
            , durable{" "}
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-green/30 to-green/20"><RefreshCw className="w-5 h-5 text-green" /></span>
            </span>
            , and compatible{" "}
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple/30 to-purple/20"><GitBranch className="w-5 h-5 text-purple" /></span>
            </span>{" "}
            with future platform changes, so what you build today will still work tomorrow.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
