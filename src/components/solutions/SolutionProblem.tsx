import { motion } from "framer-motion";
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
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b via-transparent to-transparent ${
        themeColor === "cyan" ? "from-cyan/5" :
        themeColor === "purple" ? "from-purple/5" :
        themeColor === "green" ? "from-green/5" :
        themeColor === "pink" ? "from-pink/5" :
        "from-teal/5"
      }`} />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
            {problems[0]?.title.split("—")[0] || "Common challenges"}
          </h2>

          {/* Problem Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`glass rounded-xl p-6 border-l-4 ${
                  themeColor === "cyan" ? "border-cyan" :
                  themeColor === "purple" ? "border-purple" :
                  themeColor === "green" ? "border-green" :
                  themeColor === "pink" ? "border-pink" :
                  "border-teal"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 text-center"
          >
            <p className="text-xl font-semibold italic text-destructive">{callout}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

