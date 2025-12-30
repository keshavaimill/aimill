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
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    themeColor === "cyan" ? "bg-gradient-to-br from-cyan/30 to-cyan/20" :
                    themeColor === "purple" ? "bg-gradient-to-br from-purple/30 to-purple/20" :
                    themeColor === "green" ? "bg-gradient-to-br from-green/30 to-green/20" :
                    themeColor === "pink" ? "bg-gradient-to-br from-pink/30 to-pink/20" :
                    "bg-gradient-to-br from-teal/30 to-teal/20"
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
              </motion.div>
            ))}
          </div>

          {/* Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`rounded-xl p-6 text-center border ${
              themeColor === "cyan" ? "bg-cyan/5 border-cyan/20" :
              themeColor === "purple" ? "bg-purple/5 border-purple/20" :
              themeColor === "green" ? "bg-green/5 border-green/20" :
              themeColor === "pink" ? "bg-pink/5 border-pink/20" :
              "bg-teal/5 border-teal/20"
            }`}
          >
            <p className={`text-xl font-semibold italic ${
              themeColor === "cyan" ? "text-cyan" :
              themeColor === "purple" ? "text-purple" :
              themeColor === "green" ? "text-green" :
              themeColor === "pink" ? "text-pink" :
              "text-teal"
            }`}>{callout}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

