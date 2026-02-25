import { motion } from "framer-motion";

const metrics = [
  {
    metric: "40% Faster Process Cycles",
    label: "INVOICE PROCESSING",
    description: "AI reduces processing from 3 days to 2 days",
    color: "#3b82f6", // Blue
  },
  {
    metric: "$4M Savings",
    label: "IT SERVICE DESK",
    description: "Agents handle 45% of tickets autonomously",
    color: "#10b981", // Green
  },
  {
    metric: "20% Productivity",
    label: "CUSTOMER SUPPORT",
    description: "Self-optimizing routing improves resolution",
    color: "#8b5cf6", // Purple
  },
  {
    metric: "70% Less Manual Work",
    label: "ORDER MANAGEMENT",
    description: "Auto-resolve issues, save 22K hours",
    color: "#f97316", // Orange
  },
  {
    metric: "5% Revenue Uplift",
    label: "SALES PIPELINE",
    description: "AI flags opportunities in CRM",
    color: "#eab308", // Gold
  },
];

export const AgenticAISection = () => {
  return (
    <section className="py-16 md:py-32 flex justify-center relative bg-transparent">
      {/* Split Background to bridge the Hero (Black) and Content (Theme Background) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black from-50% to-background to-50%" />

      <div className="container px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row w-full overflow-hidden rounded-3xl">
          {/* Left Side - 45% - Light Lavender Background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:w-[45%] bg-[#f5f3f8] p-6 sm:p-10 md:p-16 lg:p-24 flex flex-col"
          >
            {/* Large Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-[48px] lg:text-[56px] font-bold text-black mb-10 sm:mb-16"
              style={{ lineHeight: "1.1", fontWeight: 700 }}
            >
              From Automation To Autonomy
            </motion.h2>

            {/* Metric Cards */}
            <div className="flex flex-col">
              {metrics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col mb-8 sm:mb-12 last:mb-0"
                >
                  {/* Bold Metric */}
                  <div 
                    className="text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] font-bold text-black mb-4"
                  >
                    {item.metric}
                  </div>
                  
                  {/* Colored Uppercase Label */}
                  <div 
                    className="uppercase font-semibold mb-3"
                    style={{ 
                      fontSize: "13px",
                      color: item.color,
                      letterSpacing: "1px",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </div>
                  
                  {/* Gray Description */}
                  <div 
                    className="text-[15px] md:text-[16px]"
                    style={{ 
                      color: "#6b7280",
                      lineHeight: "1.6"
                    }}
                  >
                    {item.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - 55% - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:w-[55%] min-h-[400px] md:min-h-full relative bg-neutral-900 overflow-hidden"
          >
            <motion.img
              src="/coding-environment.jpeg"
              alt="Coding workspace"
              className="w-full h-full object-cover"
              style={{
                objectPosition: "center"
              }}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

