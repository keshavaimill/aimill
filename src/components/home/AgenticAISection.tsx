import { motion } from "framer-motion";
import { ArrowRight, Laptop, Coffee } from "lucide-react";
import { useState } from "react";

export const AgenticAISection = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 bg-section-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              From automation to autonomy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Agentic systems continuously evaluate goals, invoke tools, collaborate with other agents, and validate outcomes with confidence scoring.
            </p>
          </motion.div>

          {/* Right Column - Coding Environment Image with GIF-like effects */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl bg-card/50 aspect-[4/3] group">
              {!imageError ? (
                <>
                  {/* Animated image with parallax effect */}
                  <motion.img
                    src="/coding-environment.jpeg"
                    alt="Coding environment with coffee cup and laptop showing code on screen"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                  />
                  
                  {/* Animated overlay - code lines effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating code snippets overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-xs font-mono text-primary/30 bg-primary/5 px-2 py-1 rounded backdrop-blur-sm"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${30 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        {i === 0 && "function() {"}
                        {i === 1 && "console.log()"}
                        {i === 2 && "return true"}
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Pulsing glow effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary/20 rounded-2xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Steam effect from coffee (if visible in image) */}
                  <div className="absolute top-1/4 left-1/4">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-8 bg-white/20 rounded-full blur-sm"
                        style={{
                          left: `${i * 8}px`,
                        }}
                        animate={{
                          y: [0, -20, -40],
                          opacity: [0, 0.5, 0],
                          scale: [0.8, 1, 1.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-card to-card/50 p-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Coffee className="w-8 h-8 text-primary" />
                      </div>
                      <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Laptop className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Add <code className="text-xs bg-secondary px-2 py-1 rounded">coding-environment.jpg</code> to the <code className="text-xs bg-secondary px-2 py-1 rounded">/public</code> folder
                    </p>
                    <p className="text-xs text-muted-foreground/60">
                      Coffee cup and laptop coding scene image
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

