import { motion } from "framer-motion";
import { 
  PenTool, Workflow, Database, Plug, UserCheck, BarChart3,
  Check, ChevronRight, FileText
} from "lucide-react";

const modules = [
  {
    number: "01",
    label: "AGENT BUILDER",
    title: "Define what each agent does — and how it thinks",
    icon: PenTool,
    color: "purple",
    features: [
      "Business goal definition",
      "Reasoning and decision strategies",
      "Tool access control",
      "Context and memory scope",
      "Multi-agent collaboration rules",
    ],
    visual: "form",
    reverse: false,
  },
  {
    number: "02",
    label: "WORKFLOW ORCHESTRATOR",
    title: "Turn complex processes into autonomous flows",
    icon: Workflow,
    color: "cyan",
    features: [
      "Visual workflow builder",
      "Parallel agent execution",
      "Conditional routing",
      "Escalation and fallback logic",
      "Retry and failure handling",
    ],
    visual: "flow",
    reverse: true,
  },
  {
    number: "03",
    label: "KNOWLEDGE STUDIO",
    title: "Your governed enterprise intelligence layer",
    icon: Database,
    color: "green",
    features: [
      "Document and data ingestion",
      "Secure RAG pipeline configuration",
      "Version control and access permissions",
      "Continuous knowledge updates",
    ],
    visual: "files",
    reverse: false,
  },
  {
    number: "04",
    label: "TOOL & MCP MANAGER",
    title: "Safely connect agents to real systems",
    icon: Plug,
    color: "pink",
    features: [
      "API and system integrations",
      "Credential vaulting",
      "Field mapping and validation",
      "Observability and monitoring",
    ],
    visual: "integrations",
    reverse: true,
  },
  {
    number: "05",
    label: "HUMAN-IN-THE-LOOP CONSOLE",
    title: "Control without slowing down",
    icon: UserCheck,
    color: "teal",
    features: [
      "Review and approval queues",
      "Exception handling",
      "Override and escalation paths",
      "Feedback loops to improve agent behavior",
    ],
    visual: "queue",
    reverse: false,
  },
  {
    number: "06",
    label: "CONFIDENCE & OUTCOME ENGINE",
    title: "Every decision explained. Every outcome measured.",
    icon: BarChart3,
    color: "gradient",
    features: [
      "Confidence scoring per action",
      "Explainability traces",
      "KPI and outcome mapping",
      "Performance dashboards for leadership",
    ],
    visual: "dashboard",
    special: true,
  },
];

export const ProductStudio = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 sm:mb-24"
        >
          <span className="inline-block px-4 py-2 text-sm font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full mb-6">
            Product Studio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Where agentic systems are{" "}
            <span className="gradient-text">designed and controlled</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            The Ai Mill Product Studio is a single control plane for enterprise AI execution.
          </p>
        </motion.div>

        {/* Modules */}
        <div className="space-y-6 sm:space-y-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden min-h-[500px] ${
                module.special
                  ? "bg-gradient-to-br from-purple/10 via-pink/10 to-cyan/10 border-2 border-purple/30"
                  : module.color === "purple" ? "bg-gradient-to-br from-purple/10 to-purple/5" :
                    module.color === "cyan" ? "bg-gradient-to-br from-cyan/10 to-cyan/5" :
                    module.color === "green" ? "bg-gradient-to-br from-green/10 to-green/5" :
                    module.color === "pink" ? "bg-gradient-to-br from-pink/10 to-pink/5" :
                    "bg-gradient-to-br from-teal/10 to-teal/5"
              }`}
            >
              {module.special && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-background/80 backdrop-blur-xl border border-purple/30 rounded-full text-xs font-bold tracking-widest uppercase text-purple">
                  ⭐ Key Differentiator
                </div>
              )}

              <div
                className={`grid md:grid-cols-2 gap-8 p-8 sm:p-12 lg:p-16 ${
                  module.reverse ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Content Column */}
                <div
                  className={`flex flex-col justify-center ${
                    module.reverse ? "md:col-start-2" : ""
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    module.color === "purple" ? "bg-gradient-to-br from-purple/30 to-purple/20" :
                    module.color === "cyan" ? "bg-gradient-to-br from-cyan/30 to-cyan/20" :
                    module.color === "green" ? "bg-gradient-to-br from-green/30 to-green/20" :
                    module.color === "pink" ? "bg-gradient-to-br from-pink/30 to-pink/20" :
                    module.color === "teal" ? "bg-gradient-to-br from-teal/30 to-teal/20" :
                    "bg-gradient-to-br from-purple/30 via-pink/30 to-cyan/30"
                  }`}>
                    <module.icon className={`w-8 h-8 ${
                      module.color === "purple" ? "text-purple" :
                      module.color === "cyan" ? "text-cyan" :
                      module.color === "green" ? "text-green" :
                      module.color === "pink" ? "text-pink" :
                      module.color === "teal" ? "text-teal" :
                      "text-primary"
                    }`} />
                  </div>
                  <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">
                    {module.number} — {module.label}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6">
                    {module.title}
                  </h3>
                  <ul className="space-y-4">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base sm:text-lg text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Column */}
                <div
                  className={`flex items-center justify-center ${
                    module.reverse ? "md:col-start-1 md:row-start-1" : ""
                  }`}
                >
                  <div className="w-full max-w-md glass rounded-2xl p-6 sm:p-8 border border-border/50">
                    {module.visual === "form" && (
                      <div className="space-y-4">
                        <div>
                          <label className="text-xs text-muted-foreground mb-1 block">Agent Name</label>
                          <div className="h-10 bg-secondary/50 rounded-lg" />
                        </div>
                        <div>
                          <label className="text-xs text-muted-foreground mb-1 block">Primary Goal</label>
                          <div className="h-24 bg-secondary/50 rounded-lg" />
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-6 bg-primary/20 rounded-full" />
                          <span className="text-sm">Enable RAG</span>
                        </div>
                        <div className="h-10 bg-secondary/50 rounded-lg" />
                        <button className="w-full h-10 bg-purple rounded-lg text-sm font-semibold">
                          Deploy Agent
                        </button>
                      </div>
                    )}
                    {module.visual === "flow" && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-center gap-4">
                          <div className="w-16 h-16 rounded-full bg-green/20 flex items-center justify-center">
                            <span className="text-green text-xs">Start</span>
                          </div>
                          <ChevronRight className="w-6 h-6 text-muted-foreground" />
                          <div className="w-20 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                            <span className="text-xs">Task</span>
                          </div>
                          <ChevronRight className="w-6 h-6 text-muted-foreground" />
                          <div className="w-16 h-16 rounded-full bg-green/20 flex items-center justify-center">
                            <span className="text-green text-xs">End</span>
                          </div>
                        </div>
                      </div>
                    )}
                    {module.visual === "files" && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 p-2 bg-secondary/30 rounded">
                          <FileText className="w-4 h-4" />
                          <span className="text-sm">Legal</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-secondary/30 rounded">
                          <FileText className="w-4 h-4" />
                          <span className="text-sm">HR</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-secondary/30 rounded">
                          <FileText className="w-4 h-4" />
                          <span className="text-sm">Sales</span>
                        </div>
                        <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
                          <div className="text-xs text-muted-foreground mb-2">Status: Indexed</div>
                          <div className="h-2 bg-primary/20 rounded-full" />
                        </div>
                      </div>
                    )}
                    {module.visual === "integrations" && (
                      <div className="grid grid-cols-3 gap-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="aspect-square bg-secondary/30 rounded-lg flex items-center justify-center">
                            <Plug className="w-6 h-6 text-primary" />
                          </div>
                        ))}
                      </div>
                    )}
                    {module.visual === "queue" && (
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="p-3 bg-secondary/30 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-semibold">High Priority</span>
                              <span className="text-xs text-muted-foreground">12m ago</span>
                            </div>
                            <div className="text-sm mb-2">Customer refund request</div>
                            <div className="flex gap-2">
                              <div className="flex-1 h-6 bg-green/20 rounded text-xs flex items-center justify-center">
                                Approve
                              </div>
                              <div className="flex-1 h-6 bg-red/20 rounded text-xs flex items-center justify-center">
                                Reject
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {module.visual === "dashboard" && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="p-2 bg-green/20 rounded text-center">
                            <div className="text-xs font-bold text-green">12,450</div>
                            <div className="text-[10px] text-muted-foreground">Actions</div>
                          </div>
                          <div className="p-2 bg-primary/20 rounded text-center">
                            <div className="text-xs font-bold text-primary">86%</div>
                            <div className="text-[10px] text-muted-foreground">Confidence</div>
                          </div>
                          <div className="p-2 bg-green/20 rounded text-center">
                            <div className="text-xs font-bold text-green">8%</div>
                            <div className="text-[10px] text-muted-foreground">Escalations</div>
                          </div>
                        </div>
                        <div className="h-32 bg-secondary/30 rounded-lg" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

