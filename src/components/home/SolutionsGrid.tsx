import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Scale,
  ShoppingBag,
  Users,
  Mail,
  TrendingUp,
  Shield,
  Wrench,
  Lightbulb,
  Database,
  Brain,
  Bot,
  Cog,
  ShieldCheck,
} from 'lucide-react';

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  color: 'cyan' | 'purple' | 'green' | 'pink' | 'teal';
}

const services: ServiceItem[] = [
  {
    icon: Lightbulb,
    title: 'AI Strategy & Transformation',
    description:
      'Define where AI creates real business value and build a clear transformation roadmap.',
    href: '/consulting',
    color: 'cyan',
  },
  {
    icon: Database,
    title: 'Data & Analytics Foundation',
    description:
      'Design and modernize data platforms, pipelines, and governance for reliable AI at scale.',
    href: '/consulting',
    color: 'purple',
  },
  {
    icon: Brain,
    title: 'Applied Data Science',
    description:
      'Build predictive and optimization models that directly impact operational outcomes.',
    href: '/consulting',
    color: 'green',
  },
  {
    icon: Bot,
    title: 'Agentic AI Systems Design',
    description:
      'Design and deploy autonomous AI agents that observe, decide, and act across workflows.',
    href: '/consulting',
    color: 'pink',
  },
  {
    icon: Cog,
    title: 'AI Engineering & Deployment',
    description:
      'Productionize AI models with MLOps, system integration, security, and scalability.',
    href: '/consulting',
    color: 'teal',
  },
  {
    icon: ShieldCheck,
    title: 'Governance & Responsible AI',
    description:
      'Enable trustworthy AI with explainability, monitoring, compliance, and oversight.',
    href: '/consulting',
    color: 'cyan',
  },
];

const products: ServiceItem[] = [
  {
    icon: Target,
    title: 'GrowthAI',
    description:
      'Agentic marketing automation that drives acquisition and revenue.',
    href: '/solutions/marketing-agent',
    color: 'cyan',
  },
  {
    icon: Scale,
    title: 'LexAgent',
    description: 'AI-driven legal workflows for faster reviews and compliance.',
    href: '/solutions/lexflow-ai',
    color: 'purple',
  },
  {
    icon: ShoppingBag,
    title: 'CommerceIQ',
    description:
      'ML-powered insights to optimize pricing, demand, and conversion.',
    href: '/solutions/ecommerce-intelligence',
    color: 'green',
  },
  {
    icon: Users,
    title: 'PeopleAgent',
    description:
      'AI assistant for HR operations and employee service delivery.',
    href: '/solutions/hr-bot',
    color: 'pink',
  },
  {
    icon: Mail,
    title: 'InboxAgent',
    description: 'Agentic email intelligence for automated customer responses.',
    href: '/solutions/customer-email-ai',
    color: 'teal',
  },
  {
    icon: Shield,
    title: 'ClaimAgent',
    description: 'AI-enabled FNOL and claims intake with faster resolution.',
    href: '/solutions/insurance-fnol',
    color: 'purple',
  },
];

export const SolutionsGrid = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20">
      {/* Elegant Grey Texture Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-zinc-950/30 to-zinc-900/40" />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(128,128,128,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(128,128,128,0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(128,128,128,0.1) 0%, transparent 70%)
          `,
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.25'%3E%3Ccircle cx='15' cy='15' r='1.5'/%3E%3Ccircle cx='45' cy='15' r='1.5'/%3E%3Ccircle cx='15' cy='45' r='1.5'/%3E%3Ccircle cx='45' cy='45' r='1.5'/%3E%3Ccircle cx='30' cy='30' r='1.2'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px)
          `,
          }}
        />
      </div>

      <div className="container mx-auto max-w-[1400px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Everything you need to{' '}
            <span className="gradient-text-purple">scale autonomy</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Strategic guidance and powerful tools to accelerate your AI journey
          </p>
        </motion.div>

        <div className="grid xl:grid-cols-2 gap-16 lg:gap-24">
          {/* Services Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border/50" />
              <h3 className="text-2xl font-bold text-center min-w-max">
                Enterprise AI Advisory & Transformation
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border/50" />
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((service, idx) => (
                <ServiceCard key={idx} item={service} idx={idx} />
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border/50" />
              <h3 className="text-2xl font-bold text-center min-w-max">
                Agentic Solutions Built for Industry
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border/50" />
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {products.map((product, idx) => (
                <ServiceCard key={idx} item={product} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ item, idx }: { item: ServiceItem; idx: number }) => {
  const cardContent = (
    <div className="flex flex-col h-full">
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 flex-shrink-0 ${
          item.color === 'cyan'
            ? 'bg-cyan/10'
            : item.color === 'purple'
            ? 'bg-purple/10'
            : item.color === 'green'
            ? 'bg-green/10'
            : item.color === 'pink'
            ? 'bg-pink/10'
            : 'bg-teal/10'
        }`}
      >
        <item.icon
          className={`w-5 h-5 ${
            item.color === 'cyan'
              ? 'text-cyan'
              : item.color === 'purple'
              ? 'text-purple'
              : item.color === 'green'
              ? 'text-green'
              : item.color === 'pink'
              ? 'text-pink'
              : 'text-teal'
          }`}
        />
      </div>
      <h3 className="text-base font-bold mb-2 flex-shrink-0">{item.title}</h3>
      <p className="text-sm text-muted-foreground leading-snug line-clamp-2 flex-grow min-h-[2.5rem]">
        {item.description}
      </p>
    </div>
  );

  const cardClassName =
    'rounded-xl p-5 h-[200px] flex flex-col bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/50 transition-all group backdrop-blur-sm';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
    >
      <div className={cardClassName}>{cardContent}</div>
    </motion.div>
  );
};
