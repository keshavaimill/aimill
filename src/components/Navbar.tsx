import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const platformItems = {
  features: [
    { title: "Agent Studio", description: "Build and customize your agent rapidly", icon: "🎨" },
    { title: "Autonomous Engine", description: "Use LLMs to guide conversations and tasks", icon: "⚡" },
    { title: "Knowledge Bases", description: "Train your agent with custom sources", icon: "📚" },
    { title: "Human Handoff", description: "Seamlessly transfer to human agents", icon: "👤" },
    { title: "Tables", description: "Store and manage conversation data", icon: "📊" },
  ],
  channels: [
    { title: "WhatsApp", icon: "💬" },
    { title: "Instagram", icon: "📸" },
    { title: "Messenger", icon: "💭" },
    { title: "Slack", icon: "💼" },
  ],
  integrations: [
    { title: "HubSpot", icon: "🔶" },
    { title: "Notion", icon: "📝" },
    { title: "Jira", icon: "🔷" },
    { title: "Calendly", icon: "📅" },
  ],
  llmProviders: [
    { title: "OpenAI", icon: "🤖" },
    { title: "Anthropic", icon: "🧠" },
    { title: "Groq", icon: "⚡" },
    { title: "Hugging Face", icon: "🤗" },
  ],
};

const navItems = [
  { label: "Platform", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Industries", hasDropdown: true },
  { label: "Consulting", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
  { label: "About", hasDropdown: false },
];

export const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-18 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold text-foreground">AIMILL</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.hasDropdown ? (
                <button className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                </button>
              ) : (
                <Link
                  to={
                    item.label === "Consulting" ? "/consulting" :
                    item.label === "About" ? "/about" :
                    "#"
                  }
                  className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  {item.label}
                </Link>
              )}

              {/* Platform Mega Dropdown */}
              <AnimatePresence>
                {item.label === "Platform" && activeDropdown === "Platform" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] p-6 rounded-2xl glass border border-border/50"
                  >
                    <div className="mb-4">
                      <Link
                        to="/platform"
                        className="block px-4 py-2 rounded-lg hover:bg-secondary transition-colors font-semibold text-primary"
                      >
                        View Platform →
                      </Link>
                    </div>
                    <div className="grid grid-cols-4 gap-6">
                      {/* Features */}
                      <div className="col-span-1">
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Features</h4>
                        <div className="space-y-1">
                          {platformItems.features.map((feature) => (
                            <Link
                              key={feature.title}
                              to="/platform"
                              className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary transition-colors group"
                            >
                              <span className="text-lg">{feature.icon}</span>
                              <div>
                                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{feature.title}</p>
                                <p className="text-xs text-muted-foreground">{feature.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Channels */}
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Channels</h4>
                        <div className="space-y-1">
                          {platformItems.channels.map((channel) => (
                            <a
                              key={channel.title}
                              href="#"
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors"
                            >
                              <span>{channel.icon}</span>
                              <span className="text-sm text-foreground">{channel.title}</span>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Integrations */}
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Integrations</h4>
                        <div className="space-y-1">
                          {platformItems.integrations.map((integration) => (
                            <a
                              key={integration.title}
                              href="#"
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors"
                            >
                              <span>{integration.icon}</span>
                              <span className="text-sm text-foreground">{integration.title}</span>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* LLM Providers */}
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">LLM Providers</h4>
                        <div className="space-y-1">
                          {platformItems.llmProviders.map((provider) => (
                            <a
                              key={provider.title}
                              href="#"
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors"
                            >
                              <span>{provider.icon}</span>
                              <span className="text-sm text-foreground">{provider.title}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Solutions Dropdown */}
                {item.label === "Solutions" && activeDropdown === "Solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 p-4 rounded-xl glass border border-border/50"
                  >
                    <div className="mb-2 pb-2 border-b border-border/50">
                      <Link
                        to="/solutions"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm font-semibold text-primary"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View All Solutions →
                      </Link>
                    </div>
                    <div className="space-y-1">
                      <Link
                        to="/solutions/marketing-agent"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Marketing Agent
                      </Link>
                      <Link
                        to="/solutions/lexflow-ai"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Lexflow AI
                      </Link>
                      <Link
                        to="/solutions/ecommerce-intelligence"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Ecommerce Intelligence
                      </Link>
                      <Link
                        to="/solutions/hr-bot"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        HR Bot
                      </Link>
                      <Link
                        to="/solutions/customer-email-ai"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Customer Email AI
                      </Link>
                    </div>
                  </motion.div>
                )}

                {/* Industries Dropdown */}
                {item.label === "Industries" && activeDropdown === "Industries" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 p-4 rounded-xl glass border border-border/50"
                  >
                    <div className="space-y-1">
                      <Link
                        to="/industries"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm font-semibold"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View All Industries →
                      </Link>
                    </div>
                  </motion.div>
                )}

                {/* Resources Dropdown */}
                {item.label === "Resources" && activeDropdown === "Resources" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 p-4 rounded-xl glass border border-border/50"
                  >
                    <div className="space-y-1">
                      <a
                        href="#"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm"
                      >
                        Documentation
                      </a>
                      <a
                        href="#"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm"
                      >
                        Blog
                      </a>
                      <a
                        href="#"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm"
                      >
                        Case Studies
                      </a>
                      <a
                        href="#"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm"
                      >
                        Webinars
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Log in
          </a>
          <Link to="/contact">
            <Button variant="nav">Book a Demo</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={
                    item.label === "Platform" ? "/platform" :
                    item.label === "Solutions" ? "/solutions" :
                    item.label === "Industries" ? "/industries" :
                    item.label === "Consulting" ? "/consulting" :
                    item.label === "About" ? "/about" :
                    "#"
                  }
                  className="block text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <Button variant="heroOutline" className="w-full">Log in</Button>
                <Link to="/contact" className="w-full block" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="hero" className="w-full">Book a Demo</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
