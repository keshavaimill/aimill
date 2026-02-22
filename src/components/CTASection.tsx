import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-8 lg:px-20 bg-background overflow-hidden">
      {/* Background with grey texture - more visible */}
      <div className="absolute inset-0">
        {/* Grey texture pattern - enhanced visibility */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(128,128,128,0.3) 2px, rgba(128,128,128,0.3) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(128,128,128,0.3) 2px, rgba(128,128,128,0.3) 4px),
            radial-gradient(circle at 20% 50%, rgba(128,128,128,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(128,128,128,0.15) 0%, transparent 50%)
          `,
          }}
        />
        {/* Additional texture overlay - more visible */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.6'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:space-y-6"
          >
            {/* Stacked Text with Button aligned */}
            <div className="space-y-2 lg:space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.9] tracking-tight">
                Build
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.9] tracking-tight">
                Better
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.9] tracking-tight">
                With
              </h2>
              <div className="flex items-center gap-4 lg:gap-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight">
                  <span className="bg-gradient-to-r from-cyan via-blue-400 to-purple bg-clip-text text-transparent">
                    Ai Mill
                  </span>
                </h2>
                {/* Circular Get Started Button - Aligned with Ai Mill */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-600 hover:bg-gray-700 flex flex-col items-center justify-center text-white font-semibold text-xs gap-1 shadow-lg group transition-colors"
                    >
                      <span>Get</span>
                      <span>started</span>
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-2xl xl:max-w-3xl mx-auto">
              {/* Image Container with subtle effects */}
              <div className="relative rounded-2xl overflow-hidden group">
                {/* Subtle glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan/20 via-purple/20 to-pink/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                <motion.img
                  src="/image f.png"
                  alt="Ai Mill illustration"
                  className="relative w-full h-auto object-contain rounded-2xl"
                  initial={{ scale: 1.05, opacity: 0.9 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />

                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/5 pointer-events-none rounded-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
