import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const AgenticAISection = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 bg-[#1a1a1a]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ backgroundColor: "#D1FAE5" }} // green-400
            className="rounded-2xl p-12 h-full flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-black">
              From Automation To Autonomy
            </h2>
            <p className="text-lg text-black/80 leading-relaxed">
              Agentic systems continuously evaluate goals, invoke tools, collaborate with other agents, and validate outcomes with confidence scoring.
            </p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <img
                src="/imagem.png"
                alt="From Automation to Autonomy comparison"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

