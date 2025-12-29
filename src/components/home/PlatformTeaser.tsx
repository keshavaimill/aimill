import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Network, Database, Plug, UserCheck, BarChart3, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: Network,
    title: "Agent Orchestration Engine",
    description: "Design and coordinate multi-agent workflows",
  },
  {
    icon: Database,
    title: "Secure RAG & Knowledge Fabric",
    description: "Enterprise-grade knowledge management",
  },
  {
    icon: Plug,
    title: "MCP & Tool Integration Layer",
    description: "Connect to any system or API",
  },
  {
    icon: UserCheck,
    title: "Human-in-the-Loop Governance",
    description: "Built-in oversight and approval workflows",
  },
  {
    icon: BarChart3,
    title: "Confidence Scoring & Audit Logs",
    description: "Every decision explained and tracked",
  },
  {
    icon: Globe,
    title: "Channel-Native Execution",
    description: "Deploy across web, mobile, and messaging",
  },
];

export const PlatformTeaser = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            The AI-MILL Agentic Ecosystem
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Design, orchestrate, deploy, and monitor AI agents across your enterprise.
          </p>
        </motion.div>

        {/* Capability Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {capabilities.map((capability, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="
  rounded-2xl p-6 h-full block
  bg-zinc-900/80
  backdrop-blur-md
  border border-zinc-700/60
  hover:border-zinc-500/60
  transition-all
  group
"

            >
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <capability.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2">{capability.title}</h3>
              <p className="text-sm text-muted-foreground">{capability.description}</p>
            </motion.div>

          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link to="/platform">
            <Button variant="heroOutline" size="lg" className="group">
              View Platform
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

