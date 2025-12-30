import { motion } from "framer-motion";
import { Bot, Brain, Cpu, Database, Network, Sparkles } from "lucide-react";

export const FloatingObjects = () => {
  return (
    <div className="absolute inset-0 overflow-visible pointer-events-none">
      {/* 
               SCATTERED LAYOUT V4 (EXTREME SPREAD)
               Goal: Push icons to the very edges and extremities.
               The user wants them "scattered more", so we are using near-max offset values.
            */}

      {/* 1. Top Right Corner - Brain */}
      <motion.div
        className="absolute right-[0%] top-[2%] text-primary/30"
        animate={{
          y: [-25, 25, -25], // Increased movement range
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 9, // Slower for grander movement
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Brain size={80} strokeWidth={1} />
      </motion.div>

      {/* 2. Top-Left Center Zone - Bot (Moved Safely Right) */}
      <motion.div
        className="absolute right-[30%] top-[10%] text-pink-500/20"
        animate={{
          y: [0, -30, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        <Bot size={55} strokeWidth={1} />
      </motion.div>



      {/* 4. Center-Right Zone - Database (Moved away from overlap) */}
      <motion.div
        className="absolute right-[18%] top-[52%] text-cyan-400/20"
        animate={{
          y: [-15, 15, -15],
          scale: [0.9, 1.1, 0.9], // Pulsing effect
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Database size={64} strokeWidth={1} />
      </motion.div>


      {/* 5. Bottom Right Corner - CPU */}
      <motion.div
        className="absolute right-[2%] top-[75%] text-purple-400/30"
        animate={{
          y: [10, -20, 10],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Cpu size={70} strokeWidth={1} />
      </motion.div>

      {/* 6. Bottom Center-Left - Network (Pushed way down) */}
      <motion.div
        className="absolute right-[35%] top-[85%] text-green-400/20"
        animate={{
          y: [-10, 20, -10],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Network size={60} strokeWidth={1} />
      </motion.div>

      {/* Background grid dots */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
    </div>
  );
};
