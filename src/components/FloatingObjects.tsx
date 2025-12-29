import { motion } from "framer-motion";

export const FloatingObjects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Purple Cylinder (like Botpress) */}
      <motion.div
        className="absolute left-[8%] top-[15%] w-40 h-40"
        animate={{
          y: [-15, 15, -15],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-24 h-32">
              {/* Cylinder body with gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/40 via-purple-600/40 to-purple-700/40 rounded-t-full rounded-b-full shadow-lg shadow-purple-500/20" />
              {/* Cylinder top ellipse */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-purple-400/50 rounded-full" />
              {/* Cylinder bottom ellipse */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-purple-600/50 rounded-full" />
              {/* Highlight */}
              <div className="absolute left-2 top-4 w-8 h-20 bg-white/10 rounded-full blur-sm" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Blue Faceted Gem */}
      <motion.div
        className="absolute left-[12%] top-[35%] w-32 h-32"
        animate={{
          y: [10, -10, 10],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="w-full h-full relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            {/* Faceted gem shape */}
            <polygon
              points="50,10 80,30 80,70 50,90 20,70 20,30"
              fill="url(#blueGradient)"
              opacity="0.6"
            />
            {/* Highlight */}
            <polygon
              points="50,10 65,25 50,40 35,25"
              fill="rgba(255,255,255,0.3)"
            />
            {/* Edge highlights */}
            <line x1="50" y1="10" x2="80" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <line x1="50" y1="10" x2="20" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          </svg>
        </div>
      </motion.div>

      {/* Green Spiky Sphere */}
      <motion.div
        className="absolute left-[15%] top-[55%] w-28 h-28"
        animate={{
          y: [-8, 12, -8],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="w-full h-full relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <radialGradient id="greenGradient">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.4" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="35" fill="url(#greenGradient)" opacity="0.5" />
            {/* Spikes */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30) * (Math.PI / 180);
              const x1 = 50 + Math.cos(angle) * 35;
              const y1 = 50 + Math.sin(angle) * 35;
              const x2 = 50 + Math.cos(angle) * 42;
              const y2 = 50 + Math.sin(angle) * 42;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#10b981"
                  strokeWidth="2"
                  opacity="0.6"
                />
              );
            })}
            {/* Highlight */}
            <circle cx="45" cy="45" r="8" fill="rgba(255,255,255,0.2)" />
          </svg>
        </div>
      </motion.div>

      {/* Dark Blue Propeller-like Object */}
      <motion.div
        className="absolute right-[10%] top-[20%] w-36 h-36"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-full h-full relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="darkBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {/* Propeller blades */}
            {[0, 90, 180, 270].map((rotation, i) => (
              <g key={i} transform={`rotate(${rotation} 50 50)`}>
                <ellipse
                  cx="50"
                  cy="20"
                  rx="8"
                  ry="25"
                  fill="url(#darkBlueGradient)"
                  opacity="0.4"
                />
              </g>
            ))}
            {/* Center circle */}
            <circle cx="50" cy="50" r="8" fill="#1e40af" opacity="0.6" />
          </svg>
        </div>
      </motion.div>

      {/* Light Blue Abstract Shape */}
      <motion.div
        className="absolute right-[15%] top-[45%] w-24 h-24"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <div className="w-full h-full relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="lightBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M50,10 Q70,30 90,50 Q70,70 50,90 Q30,70 10,50 Q30,30 50,10"
              fill="url(#lightBlueGradient)"
              opacity="0.5"
            />
          </svg>
        </div>
      </motion.div>

      {/* Small Pink/Accent Shape */}
      <motion.div
        className="absolute right-[8%] top-[65%] w-20 h-20"
        animate={{
          y: [0, -20, 0],
          x: [0, 5, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <div className="w-full h-full relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#be185d" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <polygon
              points="50,20 80,70 20,70"
              fill="url(#pinkGradient)"
              opacity="0.5"
            />
          </svg>
        </div>
      </motion.div>

      {/* Background grid dots */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Gradient orbs - more subtle like Botpress */}
      <div className="absolute left-1/4 top-1/3 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
      <div className="absolute right-1/4 top-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />
      <div className="absolute left-1/2 top-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />
    </div>
  );
};
