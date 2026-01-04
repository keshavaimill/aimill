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
    <section className="relative min-h-[70vh] flex items-center justify-center pt-40 pb-24 px-4 sm:px-8 lg:px-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left Column: Content */}
          <div>
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
              {headline}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              {subheadline}
            </p>

            {/* Key Outcomes */}
            <div className="flex flex-wrap gap-4 mb-10">
              {keyOutcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border/50"
                >
                  <span className="text-lg">{outcome.icon}</span>
                  <span className="text-sm sm:text-base font-semibold">{outcome.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group h-14 px-10 text-lg">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="relative hidden md:block">
            <div className="relative w-full max-w-md mx-auto">
              <div className="bg-card rounded-3xl p-8 border border-border/50">
                <div className="space-y-4">
                  <div className="h-32 bg-secondary rounded-xl" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-secondary/50 rounded-lg" />
                    <div className="h-24 bg-secondary/50 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

