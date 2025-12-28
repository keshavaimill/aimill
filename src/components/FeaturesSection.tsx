import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MessageSquare, Zap, Globe, Code } from "lucide-react";

const features = [
  {
    title: "Augment customer support workflows",
    description: "Give agents the ability to handle routine inquiries, escalate when needed, and stay consistent across channels.",
    icon: MessageSquare,
    visual: (
      <div className="relative p-6">
        <div className="space-y-3">
          <div className="glass rounded-xl p-3 flex items-center gap-3 max-w-[280px]">
            <div className="w-10 h-10 rounded-full bg-green/20 flex items-center justify-center text-lg">💬</div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">WhatsApp User</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-green/20 text-green">Assigned</span>
              </div>
            </div>
          </div>
          <div className="glass rounded-xl p-3 flex items-center gap-3 max-w-[280px] ml-8">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-lg">🌐</div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Webchat User</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Assigned</span>
              </div>
              <p className="text-xs text-muted-foreground">Can I get a refund?</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Deploy where your users are",
    description: "Agents can be deployed on the web, embedded into custom applications, or run through voice interfaces.",
    icon: Globe,
    visual: (
      <div className="relative p-6">
        <div className="glass rounded-xl p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-purple/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-purple" />
            </div>
            <span className="font-semibold">Agent</span>
            <div className="flex gap-2 ml-auto">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-lg">💼</div>
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-lg">💭</div>
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-lg">💬</div>
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">+</div>
            </div>
          </div>
          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground mb-2">Instructions</p>
            <p className="text-sm text-secondary-foreground">You're an integral part of this company's operations. Use these tools to optimize our customer feedback loop.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Integrate with existing systems",
    description: "Use APIs, access business data, and work directly with structured inputs like files, tables, and user records.",
    icon: Code,
    visual: (
      <div className="relative p-6">
        <div className="glass rounded-xl p-4 font-mono text-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded bg-purple/20 flex items-center justify-center text-xs">S</div>
            <span className="text-muted-foreground">Initiate refund</span>
          </div>
          <div className="text-xs text-muted-foreground">Stripe</div>
        </div>
      </div>
    ),
  },
  {
    title: "Deliver contextual conversations",
    description: "Conversations are stateful and persistent, enabling agents to track context and operate across steps.",
    icon: MessageSquare,
    visual: (
      <div className="relative p-6">
        <div className="glass rounded-xl p-4">
          <div className="bg-secondary/50 rounded-lg p-3 mb-3">
            <p className="text-sm">I've created a Linear ticket for this issue. Can you include a screenshot or screen recording?</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-secondary p-2">
            <input 
              type="text" 
              placeholder="Type to test your bot..." 
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              readOnly
            />
            <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    ),
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 relative" style={{ backgroundColor: "#fff8eeff" }}>
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-zinc-900">
            AIMILL provides the core infrastructure needed to build and run{" "}
            <span className="text-zinc-600">AI agents in production.</span>
          </h2>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-black/85 border border-border overflow-hidden hover:bg-black/90 transition-colors"

            >
              {/* Learn more link */}
              <Link
                to="/platform"
                className="absolute top-4 right-4 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors z-10"
              >
                Learn more
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {/* Visual */}
              <div className="h-64 bg-secondary/30 flex items-center justify-center">
                {feature.visual}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
