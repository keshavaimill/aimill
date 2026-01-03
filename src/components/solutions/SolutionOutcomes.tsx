import { LucideIcon } from "lucide-react";

interface Outcome {
  icon: LucideIcon;
  metric: string;
  label: string;
  description: string;
}

interface SolutionOutcomesProps {
  outcomes: Outcome[];
  themeColor: "cyan" | "purple" | "green" | "pink" | "teal";
}

export const SolutionOutcomes = ({ outcomes, themeColor }: SolutionOutcomesProps) => {
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
            Business Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Measurable impact from day one
          </h2>
        </div>

        {/* Outcomes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-8 text-center border border-border/50 min-h-[280px] flex flex-col items-center"
            >
              {/* Icon */}
              <div className="mb-6">
                <outcome.icon className={`w-14 h-14 ${
                  themeColor === "cyan" ? "text-cyan" :
                  themeColor === "purple" ? "text-purple" :
                  themeColor === "green" ? "text-green" :
                  themeColor === "pink" ? "text-pink" :
                  "text-teal"
                }`} />
              </div>

              {/* Metric */}
              <div className={`text-5xl font-black mb-4 ${
                themeColor === "cyan" ? "text-cyan" :
                themeColor === "purple" ? "text-purple" :
                themeColor === "green" ? "text-green" :
                themeColor === "pink" ? "text-pink" :
                "text-teal"
              }`}>
                {outcome.metric}
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold mb-3">{outcome.label}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

