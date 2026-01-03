import { LucideIcon } from "lucide-react";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SolutionHowItWorksProps {
  steps: Step[];
  themeColor: "cyan" | "purple" | "green" | "pink" | "teal";
}

export const SolutionHowItWorks = ({ steps, themeColor }: SolutionHowItWorksProps) => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 sm:mb-20">
          <span className={`inline-block px-4 py-2 text-sm font-bold tracking-widest uppercase mb-6 ${
            themeColor === "cyan" ? "text-cyan" :
            themeColor === "purple" ? "text-purple" :
            themeColor === "green" ? "text-green" :
            themeColor === "pink" ? "text-pink" :
            "text-teal"
          }`}>
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Autonomous execution in five steps
          </h2>
        </div>

        {/* Steps Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-border/50" style={{ top: "60px" }} />
          
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center relative z-10 flex-1"
              >
                {/* Step Number Circle */}
                <div className={`w-20 h-20 rounded-full border-4 border-background flex items-center justify-center mb-6 ${
                  themeColor === "cyan" ? "bg-cyan" :
                  themeColor === "purple" ? "bg-purple" :
                  themeColor === "green" ? "bg-green" :
                  themeColor === "pink" ? "bg-pink" :
                  "bg-teal"
                }`}>
                  <span className="text-3xl font-black text-white">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <step.icon className={`w-8 h-8 ${
                    themeColor === "cyan" ? "text-cyan" :
                    themeColor === "purple" ? "text-purple" :
                    themeColor === "green" ? "text-green" :
                    themeColor === "pink" ? "text-pink" :
                    "text-teal"
                  }`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

