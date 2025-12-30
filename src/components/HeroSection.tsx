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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
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
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all group pointer-events-auto"
                >

                  <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                  Community support, daily live office hours, and thousands of builders
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Main headline */}
              <div className="text-left max-w-2xl">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1] tracking-tight mb-6"
                >
                  Agents that Execute{" "}
                  <span className="gradient-text-purple">Real Business Outcomes</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl text-muted-foreground mb-8"
                >
                  AI Mill builds autonomous AI agents that reason, plan, act, and collaborate with humans to drive revenue, efficiency, and operational intelligence at enterprise scale.
                </motion.p>

                {/* Value Bullets */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex flex-wrap items-center gap-4 mb-10"
                >
                  <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-border/50">
                    <span className="w-2 h-2 rounded-full bg-green" />
                    <span className="text-sm font-semibold">Outcome-driven agentic systems</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-border/50">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-semibold">Production-grade, secure, auditable</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-border/50">
                    <span className="w-2 h-2 rounded-full bg-purple" />
                    <span className="text-sm font-semibold">Industry-specialized agents</span>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-start gap-4 pointer-events-auto"
                >

                  <Link to="/contact">
                    <Button variant="hero" size="lg" className="group">
                      Book a Demo
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/platform">
                    <Button variant="heroOutline" size="lg">
                      Explore the Platform
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
      </div>
    </section>
  );
};