import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ----------------------------------
   Animation Variants
----------------------------------- */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.25,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

/* ----------------------------------
   Component
----------------------------------- */

export const CTASection = () => {
  const shouldReduceMotion = useReducedMotion();
  const words = ["Build", "better", "with", "AIMILL"];

  return (
    <section className="relative w-full min-h-[400px] md:min-h-[520px] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      {/* =================================
          LEFT SIDE — TEXT & CTA
      ================================== */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative bg-[#0a0a0a] flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-20 py-14 md:py-20 text-center md:text-left md:ml-auto md:max-w-[85%] overflow-hidden"
      >
        {/* Animated Grid Background */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 59px,
                rgba(255,255,255,0.02) 59px,
                rgba(255,255,255,0.02) 60px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 59px,
                rgba(255,255,255,0.015) 59px,
                rgba(255,255,255,0.015) 60px
              )
            `,
          }}
        >
          {!shouldReduceMotion && (
            <motion.div
              className="absolute inset-0"
              animate={{ backgroundPosition: ["0px 0px", "-60px -60px"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 59px,
                    rgba(255,255,255,0.015) 59px,
                    rgba(255,255,255,0.015) 60px
                  )
                `,
              }}
            />
          )}
        </div>

        {/* Headline */}
        <motion.div className="relative z-10 mb-10">
          <div className="flex flex-col">
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                variants={wordVariants}
                className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] md:leading-[0.9] ${
                  idx === 3 ? "gradient-text-purple" : "text-white"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeIn}
          className="relative z-10 mx-auto md:mx-0"
        >
          <Link
            to="/contact"
            aria-label="Get started with AIMILL"
            className="inline-flex"
          >
            <motion.div
              role="button"
              tabIndex={0}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { scale: 1.08 }
              }
              whileTap={{ scale: 0.96 }}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      boxShadow: [
                        "0 8px 32px rgba(127,193,251,0.35)",
                        "0 12px 48px rgba(127,193,251,0.55)",
                        "0 8px 32px rgba(127,193,251,0.35)",
                      ],
                    }
              }
              transition={{
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-primary/80 flex flex-col items-center justify-center shadow-lg shadow-primary/40 cursor-pointer"
            >
              <span className="text-xs md:text-sm font-bold text-white leading-tight text-center">
                Get
                <br />
                started
              </span>

              <motion.span
                aria-hidden
                className="mt-1.5"
                whileHover={!shouldReduceMotion ? { x: 4 } : undefined}
              >
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </motion.span>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* =================================
          RIGHT SIDE — IMAGE
      ================================== */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative bg-[#f5efe8] flex items-center justify-center overflow-hidden"
      >
        <div className="relative w-full h-full">
          <img
            src="/imageb.png"
            alt="AIMILL artistic illustration"
            loading="eager"
            className="w-full h-full object-cover min-h-[300px] md:min-h-[520px]"
          />

          {/* Decorative overlays */}
          {!shouldReduceMotion && (
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute w-[220px] h-[320px] bg-gradient-to-br from-primary/10 to-purple/10 top-[12%] right-[18%] -rotate-12"
                animate={{ opacity: [0.2, 0.35, 0.2] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent left-[15%]"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};
