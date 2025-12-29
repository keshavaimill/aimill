import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FloatingObjects } from "./FloatingObjects";
import { HeroVisual } from "./home/HeroVisual";
import { PixelGridBackground } from "./PixelGridBackground";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt- bg-black">
      <PixelGridBackground />
      <FloatingObjects />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Announcement pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-start mb-8"
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all group"
              >
                <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                Community support, daily live office hours, and thousands of builders
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Main headline */}
            <div className="text-left max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-[0.9] tracking-tight mb-8"
              >
                The Complete{" "}
                <span className="gradient-text-purple">AI Agent Platform</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed"
              >
                Build and run AI agents in production.
              </motion.p>

              {/* Value Bullets */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 mb-10"
              >
                <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-border/50">
                  <span className="w-2 h-2 rounded-full bg-green" />
                  <span className="text-sm font-semibold">Designed for production, not pilots</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-border/50">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-semibold">Outcome-driven, confidence-scored decisions</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-border/50">
                  <span className="w-2 h-2 rounded-full bg-purple" />
                  <span className="text-sm font-semibold">Secure, auditable, human-in-the-loop by design</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="group">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="heroOutline" size="lg">
                    Book a Demo
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
