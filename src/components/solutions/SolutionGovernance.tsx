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
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Integrations */}
          <div>
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
                <div key={i} className="aspect-square bg-card rounded-xl flex items-center justify-center border border-border/50">
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
          </div>

          {/* Right: Governance */}
          <div>
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
                <div
                  key={idx}
                  className={`flex gap-4 p-5 bg-card rounded-xl border-l-4 ${
                    themeColor === "cyan" ? "border-cyan" :
                    themeColor === "purple" ? "border-purple" :
                    themeColor === "green" ? "border-green" :
                    themeColor === "pink" ? "border-pink" :
                    "border-teal"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    themeColor === "cyan" ? "bg-cyan/20" :
                    themeColor === "purple" ? "bg-purple/20" :
                    themeColor === "green" ? "bg-green/20" :
                    themeColor === "pink" ? "bg-pink/20" :
                    "bg-teal/20"
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      themeColor === "cyan" ? "text-cyan" :
                      themeColor === "purple" ? "text-purple" :
                      themeColor === "green" ? "text-green" :
                      themeColor === "pink" ? "text-pink" :
                      "text-teal"
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

