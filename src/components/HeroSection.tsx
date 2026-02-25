import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FloatingObjects } from "./FloatingObjects";
import { HeroVisual } from "./home/HeroVisual";
import HoverGridBackground from "./HoverGridBackground";
// import PlatformHero from "./platform/PlatformHero";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[78vh] lg:min-h-screen flex items-start lg:items-center justify-center overflow-hidden pt-16 lg:pt-20 pb-20 lg:pb-0 bg-black">
      {/* BACKGROUND GRID */}
      <HoverGridBackground />

      {/* Soothing Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft dot pattern */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='30' cy='10' r='1.5'/%3E%3Ccircle cx='10' cy='30' r='1.5'/%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
        }} />
        {/* Soft radial gradients for depth */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(128,128,128,0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(128,128,128,0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(128,128,128,0.05) 0%, transparent 70%)
          `,
        }} />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 pointer-events-none">
        <FloatingObjects />

        <div className="container mx-auto px-5 sm:px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              {/* Announcement pill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-start mb-7 sm:mb-8"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 text-xs sm:text-sm text-foreground hover:text-foreground hover:border-primary/70 hover:bg-zinc-800/80 transition-all group pointer-events-auto shadow-lg"
                >

                  <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                  Enterprise AI consulting with dedicated support and proven outcomes
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Main headline */}
              <div className="text-left max-w-2xl">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-7 sm:mb-6"
                >
                  Agents & ML Workflows That Execute{" "}
                  <span className="gradient-text-purple">Real Business Outcomes</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 sm:mb-8"
                >
                  Ai Mill delivers AI, Agentic, and traditional Data Science consulting and products to help enterprises build, deploy, and scale intelligent systems with real business impact.
                </motion.p>

                {/* Value Bullets */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex flex-wrap items-center gap-4 mb-12 sm:mb-10"
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full border border-border/50">
                    <span className="w-2 h-2 shrink-0 rounded-full bg-green" />
                    <span className="text-xs sm:text-sm font-semibold">Outcome-driven agentic systems</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full border border-border/50">
                    <span className="w-2 h-2 shrink-0 rounded-full bg-primary" />
                    <span className="text-xs sm:text-sm font-semibold">Production-grade, secure, auditable</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full border border-border/50">
                    <span className="w-2 h-2 shrink-0 rounded-full bg-purple" />
                    <span className="text-xs sm:text-sm font-semibold">Industry-specialized agents</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full border border-border/50">
                    <span className="w-2 h-2 shrink-0 rounded-full bg-green" />
                    <span className="text-xs sm:text-sm font-semibold">Distinguished AI Consulting Practice</span>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-start gap-5 sm:gap-4 pointer-events-auto"
                >

                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                      Book a Demo
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/platform" className="w-full sm:w-auto">
                    <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                      Explore the Agentic Architecture
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

        {/* Scroll indicator - hidden on mobile, visible on laptop+ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:block"
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
      </div>
    </section>
  );
};