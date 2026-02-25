import { LucideIcon } from "lucide-react";

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SolutionCapabilitiesProps {
  capabilities: Capability[];
  channels?: string[];
  themeColor: "cyan" | "purple" | "green" | "pink" | "teal";
}

export const SolutionCapabilities = ({ capabilities, channels, themeColor }: SolutionCapabilitiesProps) => {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-20 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-2 text-sm font-bold tracking-widest uppercase mb-6 ${
            themeColor === "cyan" ? "text-cyan" :
            themeColor === "purple" ? "text-purple" :
            themeColor === "green" ? "text-green" :
            themeColor === "pink" ? "text-pink" :
            "text-teal"
          }`}>
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Everything you need for production deployment
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((capability, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-6 sm:p-8 border border-border/50 min-h-[200px] sm:min-h-[240px] flex flex-col"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                themeColor === "cyan" ? "bg-cyan/20" :
                themeColor === "purple" ? "bg-purple/20" :
                themeColor === "green" ? "bg-green/20" :
                themeColor === "pink" ? "bg-pink/20" :
                "bg-teal/20"
              }`}>
                <capability.icon className={`w-8 h-8 ${
                  themeColor === "cyan" ? "text-cyan" :
                  themeColor === "purple" ? "text-purple" :
                  themeColor === "green" ? "text-green" :
                  themeColor === "pink" ? "text-pink" :
                  "text-teal"
                }`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">{capability.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed flex-grow">{capability.description}</p>
            </div>
          ))}
        </div>

        {/* Channels/Integrations */}
        {channels && channels.length > 0 && (
          <div className="text-center">
            <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-8 block">
              Channels & Integrations
            </span>
            <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
              {channels.map((channel, idx) => (
                <div key={idx} className="w-12 h-12 rounded-lg bg-secondary/30 flex items-center justify-center">
                  <span className="text-xs font-semibold">{channel}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

