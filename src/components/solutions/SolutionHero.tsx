import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SolutionHeroProps {
  category: string;
  headline: string;
  subheadline: string;
  keyOutcomes: Array<{ icon: string; text: string }>;
  themeColor: "cyan" | "purple" | "green" | "pink" | "teal";
}

export const SolutionHero = ({ category, headline, subheadline, keyOutcomes, themeColor }: SolutionHeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-40 pb-24 px-4 sm:px-8 lg:px-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[120px] ${
        themeColor === "cyan" ? "bg-cyan/20" :
        themeColor === "purple" ? "bg-purple/20" :
        themeColor === "green" ? "bg-green/20" :
        themeColor === "pink" ? "bg-pink/20" :
        "bg-teal/20"
      }`} />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="text-sm text-muted-foreground mb-6">
              <a href="/" className="hover:text-foreground transition-colors">Solutions</a>
              <span className="mx-2">/</span>
              <span>{category}</span>
            </div>

            {/* Category Label */}
            <div className="mb-6">
              <span className={`inline-block px-4 py-2 text-sm font-bold tracking-widest uppercase rounded-full ${
                themeColor === "cyan" ? "text-cyan bg-cyan/10" :
                themeColor === "purple" ? "text-purple bg-purple/10" :
                themeColor === "green" ? "text-green bg-green/10" :
                themeColor === "pink" ? "text-pink bg-pink/10" :
                "text-teal bg-teal/10"
              }`}>
                {category}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1] mb-6">
              {headline.split(" ").map((word, idx) => (
                <span key={idx}>
                  {word === word.toUpperCase() || word.includes("AI") ? (
                    <span className="gradient-text">{word}</span>
                  ) : (
                    word
                  )}{" "}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              {subheadline}
            </p>

            {/* Key Outcomes */}
            <div className="flex flex-wrap gap-4 mb-10">
              {keyOutcomes.map((outcome, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-border/50"
                >
                  <span className="text-lg">{outcome.icon}</span>
                  <span className="text-sm sm:text-base font-semibold">{outcome.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group h-14 px-10 text-lg">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="glass rounded-3xl p-8 border border-border/50">
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-secondary/30 rounded-lg" />
                    <div className="h-24 bg-secondary/30 rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

