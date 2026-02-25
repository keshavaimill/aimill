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
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 border-t border-border/50">
      <div className="container mx-auto max-w-4xl text-center">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            {headline}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12">
            {subtext}
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="group h-12 sm:h-16 px-8 sm:px-12 text-base sm:text-lg">
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
        </div>
      </div>
    </section>
  );
};

