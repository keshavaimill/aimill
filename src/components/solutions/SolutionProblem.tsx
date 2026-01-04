import { AlertCircle } from "lucide-react";

interface Problem {
  icon: string;
  title: string;
  description: string;
}

interface SolutionProblemProps {
  problems: Problem[];
  callout: string;
  themeColor: "cyan" | "purple" | "green" | "pink" | "teal";
}

export const SolutionProblem = ({ problems, callout, themeColor }: SolutionProblemProps) => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
      <div className="container mx-auto max-w-5xl">
        <div>
          <span className={`inline-block px-4 py-2 text-sm font-bold tracking-widest uppercase mb-6 ${
            themeColor === "cyan" ? "text-cyan" :
            themeColor === "purple" ? "text-purple" :
            themeColor === "green" ? "text-green" :
            themeColor === "pink" ? "text-pink" :
            "text-teal"
          }`}>
            The Challenge
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-12">
            Common challenges
          </h2>

          {/* Problem Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, idx) => (
              <div
                key={idx}
                className={`bg-card rounded-xl p-6 border-l-4 ${
                  themeColor === "cyan" ? "border-cyan" :
                  themeColor === "purple" ? "border-purple" :
                  themeColor === "green" ? "border-green" :
                  themeColor === "pink" ? "border-pink" :
                  "border-teal"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    themeColor === "cyan" ? "bg-cyan/20" :
                    themeColor === "purple" ? "bg-purple/20" :
                    themeColor === "green" ? "bg-green/20" :
                    themeColor === "pink" ? "bg-pink/20" :
                    "bg-teal/20"
                  }`}>
                    <AlertCircle className={`w-6 h-6 ${
                      themeColor === "cyan" ? "text-cyan" :
                      themeColor === "purple" ? "text-purple" :
                      themeColor === "green" ? "text-green" :
                      themeColor === "pink" ? "text-pink" :
                      "text-teal"
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className={`rounded-xl p-6 text-center border ${
              themeColor === "cyan" ? "bg-cyan/5 border-cyan/20" :
              themeColor === "purple" ? "bg-purple/5 border-purple/20" :
              themeColor === "green" ? "bg-green/5 border-green/20" :
              themeColor === "pink" ? "bg-pink/5 border-pink/20" :
              "bg-teal/5 border-teal/20"
          }`}>
            <p className={`text-xl font-semibold italic ${
              themeColor === "cyan" ? "text-cyan" :
              themeColor === "purple" ? "text-purple" :
              themeColor === "green" ? "text-green" :
              themeColor === "pink" ? "text-pink" :
              "text-teal"
            }`}>{callout}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

