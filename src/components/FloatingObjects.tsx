import { motion } from "framer-motion";

export const FloatingObjects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left side objects */}
      <motion.div
        className="absolute left-[5%] top-[20%] w-32 h-32"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Wireframe cube */}
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
          <g stroke="hsl(265, 89%, 66%)" strokeWidth="1" fill="none">
            {/* Front face */}
            <path d="M20,30 L50,15 L80,30 L50,45 Z" strokeDasharray="4 2" />
            {/* Top lines */}
            <path d="M20,30 L20,70" strokeDasharray="4 2" />
            <path d="M80,30 L80,70" strokeDasharray="4 2" />
            <path d="M50,45 L50,85" strokeDasharray="4 2" />
            {/* Bottom face */}
            <path d="M20,70 L50,85 L80,70" strokeDasharray="4 2" />
          </g>
        </svg>
      </motion.div>

      <motion.div
        className="absolute left-[10%] top-[40%] w-24 h-24"
        animate={{
          y: [10, -10, 10],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        {/* Wireframe sphere */}
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
          <g stroke="hsl(160, 84%, 39%)" strokeWidth="1" fill="none">
            <circle cx="50" cy="50" r="35" strokeDasharray="4 2" />
            <ellipse cx="50" cy="50" rx="35" ry="15" strokeDasharray="4 2" />
            <ellipse cx="50" cy="50" rx="15" ry="35" strokeDasharray="4 2" />
          </g>
        </svg>
      </motion.div>

      <motion.div
        className="absolute left-[15%] top-[60%] w-16 h-16"
        animate={{
          y: [-5, 15, -5],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        {/* Small diamond */}
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-50">
          <polygon
            points="50,10 90,50 50,90 10,50"
            stroke="hsl(189, 94%, 43%)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 2"
          />
        </svg>
      </motion.div>

      {/* Right side objects */}
      <motion.div
        className="absolute right-[5%] top-[25%] w-40 h-40"
        animate={{
          y: [5, -15, 5],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Coffee cup / cylinder */}
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
          <g stroke="hsl(174, 72%, 40%)" strokeWidth="1.5" fill="none">
            {/* Cup body */}
            <ellipse cx="50" cy="25" rx="25" ry="8" />
            <path d="M25,25 L30,75" />
            <path d="M75,25 L70,75" />
            <ellipse cx="50" cy="75" rx="20" ry="6" />
            {/* Handle */}
            <path d="M75,35 Q95,35 95,50 Q95,65 75,65" strokeDasharray="4 2" />
          </g>
          {/* Steam effect */}
          <g stroke="hsl(189, 94%, 43%)" strokeWidth="1" opacity="0.4">
            <path d="M40,15 Q45,5 40,-5" strokeDasharray="2 2" />
            <path d="M50,12 Q55,2 50,-8" strokeDasharray="2 2" />
            <path d="M60,15 Q65,5 60,-5" strokeDasharray="2 2" />
          </g>
        </svg>
      </motion.div>

      <motion.div
        className="absolute right-[15%] top-[45%] w-28 h-28"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        {/* Scissors / tools */}
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
          <g stroke="hsl(189, 94%, 43%)" strokeWidth="1.5" fill="none">
            {/* Pencil */}
            <path d="M30,70 L70,30 L80,40 L40,80 Z" strokeDasharray="4 2" />
            <path d="M70,30 L80,20" />
            {/* Ruler */}
            <path d="M20,20 L50,20 L50,35 L20,35 Z" strokeDasharray="4 2" />
            <line x1="30" y1="20" x2="30" y2="25" />
            <line x1="40" y1="20" x2="40" y2="28" />
          </g>
        </svg>
      </motion.div>

      <motion.div
        className="absolute right-[8%] top-[65%] w-20 h-20"
        animate={{
          y: [0, -20, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        {/* Small triangle */}
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-50">
          <polygon
            points="50,20 80,70 20,70"
            stroke="hsl(330, 85%, 60%)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 2"
          />
        </svg>
      </motion.div>

      {/* Background grid dots */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Gradient orbs
      <div className="absolute left-1/4 top-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute right-1/4 top-1/2 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" /> */}
    </div>
  );
};
