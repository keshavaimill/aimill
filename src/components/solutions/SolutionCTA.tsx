import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SolutionCTAProps {
  headline: string;
  subtext: string;
  themeColor: "cyan" | "purple" | "green" | "pink" | "teal";
}

export const SolutionCTA = ({ headline, subtext, themeColor }: SolutionCTAProps) => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-transparent border-t border-border/50 ${
        themeColor === "cyan" ? "via-cyan/8" :
        themeColor === "purple" ? "via-purple/8" :
        themeColor === "green" ? "via-green/8" :
        themeColor === "pink" ? "via-pink/8" :
        "via-teal/8"
      }`} />
      
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            {headline.split("—").map((part, idx) => (
              <span key={idx}>
                {idx === 0 ? (
                  part
                ) : (
                  <span className="gradient-text">{part}</span>
                )}
              </span>
            ))}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12">
            {subtext}
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="group h-16 px-12 text-lg">
              Book a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <div className="mt-6">
            <Link to="/platform" className={`text-base font-semibold hover:underline inline-flex items-center gap-2 ${
              themeColor === "cyan" ? "text-cyan" :
              themeColor === "purple" ? "text-purple" :
              themeColor === "green" ? "text-green" :
              themeColor === "pink" ? "text-pink" :
              "text-teal"
            }`}>
              Or explore the platform →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

