import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MessageSquare, Zap, Globe, Code } from "lucide-react";

const features = [
  {
    title: "Seamlessly integrate into your existing workflows",
    description: "Connect with your tools and systems effortlessly.",
    icon: MessageSquare,
    visual: (
      <div className="relative p-6 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border/50 shadow-xl">
        {/* Chat interface mockup */}
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-sm">
              CD
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold">Cameron Diaz</span>
                <span className="text-xs text-muted-foreground">2m ago</span>
              </div>
              <p className="text-sm text-foreground">Can you help me with my order status?</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-xl ml-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-white font-bold text-sm">
              PS
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold">Peter Smith</span>
                <span className="text-xs text-muted-foreground">Just now</span>
              </div>
              <p className="text-sm text-foreground">I've checked your order #12345. It's being prepared for shipment.</p>
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
      <div className="relative p-6 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border/50 shadow-xl">
        {/* App icons grid */}
        <div className="grid grid-cols-4 gap-3">
          {['Google', 'Facebook', 'WhatsApp', 'Slack', 'Teams', 'Discord', 'Telegram', 'Web'].map((app, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-secondary/50 flex items-center justify-center border border-border/30 hover:border-primary/50 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                <span className="text-xs font-semibold">{app[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Integrate with existing systems",
    description: "Use APIs, access business data, and work directly with structured inputs like files, tables, and user records.",
    icon: Code,
    visual: (
      <div className="relative p-6 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border/50 shadow-xl">
        <div className="glass rounded-xl p-4 font-mono text-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded bg-purple/20 flex items-center justify-center text-xs font-bold">S</div>
            <span className="text-foreground font-medium">Initiate refund</span>
          </div>
          <div className="text-xs text-muted-foreground">Stripe</div>
          <div className="mt-3 pt-3 border-t border-border/50">
            <div className="text-xs text-muted-foreground">Status: <span className="text-green">Connected</span></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Deliver human-like conversations",
    description: "Conversations are stateful and persistent, enabling agents to track context and operate across steps.",
    icon: MessageSquare,
    visual: (
      <div className="relative p-6 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border/50 shadow-xl">
        <div className="glass rounded-xl p-4">
          <div className="bg-secondary/50 rounded-lg p-3 mb-3">
            <p className="text-sm text-foreground">I've created a Linear ticket for this issue. Can you include a screenshot or screen recording?</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-secondary p-2 border border-border/30">
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
    <section className="py-24 relative bg-section-bg">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            AIMILL provides the core infrastructure needed to build and run{" "}
            <span className="text-muted-foreground">AI agents in production.</span>
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
              className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors"
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
              <div className="h-64 bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center p-4">
                {feature.visual}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
