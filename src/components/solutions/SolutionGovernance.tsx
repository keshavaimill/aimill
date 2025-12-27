import { motion } from "framer-motion";
import { ShieldCheck, FileText, Lock, UserCheck } from "lucide-react";

interface SolutionGovernanceProps {
  themeColor: "cyan" | "purple" | "green" | "pink" | "teal";
}

export const SolutionGovernance = ({ themeColor }: SolutionGovernanceProps) => {
  const features = [
    {
      icon: UserCheck,
      title: "Human Oversight",
      description: "Review and approve critical decisions before execution",
    },
    {
      icon: FileText,
      title: "Audit Trails",
      description: "Complete logs of all agent actions and decisions",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Ready",
      description: "SOC 2, GDPR, and industry-specific compliance",
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "Encryption at rest and in transit, role-based access",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 bg-background">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Integrations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-block px-4 py-2 text-sm font-bold tracking-widest uppercase mb-6 ${
              themeColor === "cyan" ? "text-cyan" :
              themeColor === "purple" ? "text-purple" :
              themeColor === "green" ? "text-green" :
              themeColor === "pink" ? "text-pink" :
              "text-teal"
            }`}>
              Integrations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Connect to your existing stack
            </h2>
            <p className="text-muted-foreground mb-8">
              Seamlessly integrate with your CRM, ERP, communication tools, and more.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div key={i} className="aspect-square glass rounded-xl flex items-center justify-center border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-8 h-8 bg-secondary/50 rounded" />
                </div>
              ))}
            </div>
            <a href="#" className={`text-base font-semibold ${
              themeColor === "cyan" ? "text-cyan" :
              themeColor === "purple" ? "text-purple" :
              themeColor === "green" ? "text-green" :
              themeColor === "pink" ? "text-pink" :
              "text-teal"
            } hover:underline inline-flex items-center gap-2`}>
              View all integrations →
            </a>
          </motion.div>

          {/* Right: Governance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-block px-4 py-2 text-sm font-bold tracking-widest uppercase mb-6 ${
              themeColor === "cyan" ? "text-cyan" :
              themeColor === "purple" ? "text-purple" :
              themeColor === "green" ? "text-green" :
              themeColor === "pink" ? "text-pink" :
              "text-teal"
            }`}>
              Security & Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Enterprise-grade control and compliance
            </h2>
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`flex gap-4 p-5 glass rounded-xl border-l-4 ${
                    themeColor === "cyan" ? "border-cyan" :
                    themeColor === "purple" ? "border-purple" :
                    themeColor === "green" ? "border-green" :
                    themeColor === "pink" ? "border-pink" :
                    "border-teal"
                  }`}
                >
                  <feature.icon className={`w-8 h-8 flex-shrink-0 ${
                    themeColor === "cyan" ? "text-cyan" :
                    themeColor === "purple" ? "text-purple" :
                    themeColor === "green" ? "text-green" :
                    themeColor === "pink" ? "text-pink" :
                    "text-teal"
                  }`} />
                  <div>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

