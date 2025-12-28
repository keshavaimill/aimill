import { motion } from "framer-motion";
import { 
  Mail, MessageSquare, FileText, Code, Calendar,
  CheckSquare, Brain, ShieldCheck, Network,
  Sparkles, Database, HardDrive,
  Cloud, Settings, Lock, BarChart3
} from "lucide-react";

const layers = [
  {
    name: "INPUT LAYER",
    color: "cyan",
    bgColor: "bg-cyan/5",
    borderColor: "border-cyan/20",
    labelBg: "bg-cyan/10",
    items: [
      { icon: Mail, label: "Emails" },
      { icon: MessageSquare, label: "Chats" },
      { icon: FileText, label: "Documents" },
      { icon: Code, label: "APIs" },
      { icon: Calendar, label: "Events" },
    ],
  },
  {
    name: "AGENT LAYER",
    color: "purple",
    bgColor: "bg-purple/5",
    borderColor: "border-purple/20",
    labelBg: "bg-purple/10",
    items: [
      { icon: CheckSquare, label: "Task Agents", description: "Execute specific actions" },
      { icon: Brain, label: "Reasoning Agents", description: "Analyze and decide" },
      { icon: ShieldCheck, label: "Validation Agents", description: "Verify outcomes" },
      { icon: Network, label: "Coordinator Agents", description: "Orchestrate workflows" },
    ],
    grid: true,
  },
  {
    name: "INTELLIGENCE LAYER",
    color: "pink",
    bgColor: "bg-pink/5",
    borderColor: "border-pink/20",
    labelBg: "bg-pink/10",
    items: [
      { icon: Sparkles, label: "LLMs", subItems: ["OpenAI", "Anthropic", "Groq", "Hugging Face"] },
      { icon: Database, label: "RAG Pipelines" },
      { icon: HardDrive, label: "Vector Stores" },
      { icon: Brain, label: "Memory" },
    ],
  },
  {
    name: "TOOL & MCP LAYER",
    color: "green",
    bgColor: "bg-green/5",
    borderColor: "border-green/20",
    labelBg: "bg-green/10",
    items: [
      { icon: Cloud, label: "CRM" },
      { icon: Settings, label: "ERP" },
      { icon: Cloud, label: "Weather APIs" },
      { icon: Database, label: "Internal DBs" },
      { icon: Code, label: "Third-party" },
      { icon: Lock, label: "Payment APIs" },
      { icon: MessageSquare, label: "Communication" },
      { icon: BarChart3, label: "Analytics" },
    ],
    scroll: true,
  },
  {
    name: "GOVERNANCE LAYER",
    color: "teal",
    bgColor: "bg-teal/5",
    borderColor: "border-teal/20",
    labelBg: "bg-teal/10",
    items: [
      { icon: ShieldCheck, label: "Human Review", badge: "Always Active" },
      { icon: BarChart3, label: "Confidence Scoring", badge: "Always Active" },
      { icon: FileText, label: "Audit Logs", badge: "Always Active" },
      { icon: Lock, label: "Policy Enforcement", badge: "Always Active" },
    ],
  },
];

export const PlatformArchitecture = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden ">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple/5 via-transparent to-cyan/5" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Built for trust, scale, and execution
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Ai Mill's platform is architected for real-world enterprise environments.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="relative max-w-6xl mx-auto">
          <div className="glass rounded-3xl border border-border/50 p-8 sm:p-12 lg:p-16">
            <div className="space-y-8 sm:space-y-10">
              {layers.map((layer, layerIndex) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: layerIndex * 0.1 }}
                  className={`${layer.bgColor} ${layer.borderColor} border-2 rounded-2xl p-6 sm:p-8`}
                >
                  {/* Layer Label */}
                  <div className="mb-6">
                    <span className={`inline-block px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-md ${
                      layer.color === "cyan" ? "text-cyan bg-cyan/10" :
                      layer.color === "purple" ? "text-purple bg-purple/10" :
                      layer.color === "pink" ? "text-pink bg-pink/10" :
                      layer.color === "green" ? "text-green bg-green/10" :
                      "text-teal bg-teal/10"
                    }`}>
                      {layer.name}
                    </span>
                  </div>

                  {/* Layer Items */}
                  <div className={`flex ${layer.grid ? "grid grid-cols-2 sm:grid-cols-4 gap-4" : layer.scroll ? "flex-wrap gap-3" : "flex-wrap gap-4"} justify-between`}>
                    {layer.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (layerIndex * 0.1) + (itemIndex * 0.05) }}
                        className="glass rounded-xl p-4 sm:p-5 flex items-center gap-3 hover:bg-card/50 transition-all group min-w-[140px] flex-1"
                      >
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          layer.color === "cyan" ? "bg-cyan/20" :
                          layer.color === "purple" ? "bg-purple/20" :
                          layer.color === "pink" ? "bg-pink/20" :
                          layer.color === "green" ? "bg-green/20" :
                          "bg-teal/20"
                        }`}>
                          <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                            layer.color === "cyan" ? "text-cyan" :
                            layer.color === "purple" ? "text-purple" :
                            layer.color === "pink" ? "text-pink" :
                            layer.color === "green" ? "text-green" :
                            "text-teal"
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm sm:text-base font-semibold text-foreground mb-1">
                            {item.label}
                          </div>
                          {item.description && (
                            <div className="text-xs text-muted-foreground">
                              {item.description}
                            </div>
                          )}
                          {item.badge && (
                            <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-green/20 text-green rounded-full">
                              {item.badge}
                            </span>
                          )}
                          {item.subItems && (
                            <div className="grid grid-cols-2 gap-1 mt-2">
                              {item.subItems.map((sub) => (
                                <span key={sub} className="text-xs text-muted-foreground">
                                  {sub}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

