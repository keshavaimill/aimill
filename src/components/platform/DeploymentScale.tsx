import { motion } from "framer-motion";
import { Cloud, Building2, Shield, BarChart3, Lock } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Cloud or VPC Deployment",
    description: "Deploy on Ai Mill Cloud or in your own VPC for maximum control",
    badge: "Flexible",
    color: "cyan",
  },
  {
    icon: Building2,
    title: "Multi-tenant Architecture",
    description: "Isolate workloads while maintaining operational efficiency",
    badge: "Secure",
    color: "purple",
  },
  {
    icon: Shield,
    title: "Role-based Access Control",
    description: "Granular permissions for teams, agents, and workflows",
    badge: "Governed",
    color: "pink",
  },
  {
    icon: BarChart3,
    title: "SLA-ready Observability",
    description: "Real-time monitoring, alerts, and performance metrics",
    badge: "Reliable",
    color: "green",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "SOC 2, GDPR ready with full audit trails and encryption",
    badge: "Compliant",
    color: "teal",
  },
];

export const DeploymentScale = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-purple/10 via-transparent to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-2 text-sm font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full mb-6">
            Deployment & Scale
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Built for how enterprises operate
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Deploy confidently with enterprise-grade infrastructure and security
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative glass rounded-2xl p-6 sm:p-8 md:p-10 border border-border/50 hover:border-primary/30 transition-all group min-h-[220px] sm:min-h-[260px] flex flex-col"
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 sm:top-6 sm:right-6 px-3 py-1 text-xs font-semibold rounded-full ${
                feature.color === "cyan" ? "bg-cyan/10 text-cyan" :
                feature.color === "purple" ? "bg-purple/10 text-purple" :
                feature.color === "pink" ? "bg-pink/10 text-pink" :
                feature.color === "green" ? "bg-green/10 text-green" :
                "bg-teal/10 text-teal"
              }`}>
                {feature.badge}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                feature.color === "cyan" ? "bg-gradient-to-br from-cyan/20 to-cyan/10" :
                feature.color === "purple" ? "bg-gradient-to-br from-purple/20 to-purple/10" :
                feature.color === "pink" ? "bg-gradient-to-br from-pink/20 to-pink/10" :
                feature.color === "green" ? "bg-gradient-to-br from-green/20 to-green/10" :
                "bg-gradient-to-br from-teal/20 to-teal/10"
              }`}>
                <feature.icon className={`w-8 h-8 ${
                  feature.color === "cyan" ? "text-cyan" :
                  feature.color === "purple" ? "text-purple" :
                  feature.color === "pink" ? "text-pink" :
                  feature.color === "green" ? "text-green" :
                  "text-teal"
                }`} />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-base text-muted-foreground flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - 2 Cards Centered */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
              className="relative glass rounded-2xl p-6 sm:p-8 md:p-10 border border-border/50 hover:border-primary/30 transition-all group min-h-[220px] sm:min-h-[260px] flex flex-col"
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 sm:top-6 sm:right-6 px-3 py-1 text-xs font-semibold rounded-full ${
                feature.color === "cyan" ? "bg-cyan/10 text-cyan" :
                feature.color === "purple" ? "bg-purple/10 text-purple" :
                feature.color === "pink" ? "bg-pink/10 text-pink" :
                feature.color === "green" ? "bg-green/10 text-green" :
                "bg-teal/10 text-teal"
              }`}>
                {feature.badge}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                feature.color === "cyan" ? "bg-gradient-to-br from-cyan/20 to-cyan/10" :
                feature.color === "purple" ? "bg-gradient-to-br from-purple/20 to-purple/10" :
                feature.color === "pink" ? "bg-gradient-to-br from-pink/20 to-pink/10" :
                feature.color === "green" ? "bg-gradient-to-br from-green/20 to-green/10" :
                "bg-gradient-to-br from-teal/20 to-teal/10"
              }`}>
                <feature.icon className={`w-8 h-8 ${
                  feature.color === "cyan" ? "text-cyan" :
                  feature.color === "purple" ? "text-purple" :
                  feature.color === "pink" ? "text-pink" :
                  feature.color === "green" ? "text-green" :
                  "text-teal"
                }`} />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-base text-muted-foreground flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

