import { Github, Youtube, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  platform: [
    { label: "Platform", href: "/platform" },
    { label: "Agent Studio", href: "/platform" },
    { label: "Knowledge Bases", href: "/platform" },
    { label: "Integrations", href: "/platform" },
  ],
  solutions: [
    { label: "All Solutions", href: "/solutions" },
    { label: "Marketing Agent", href: "/solutions/marketing-agent" },
    { label: "Lexflow AI", href: "/solutions/lexflow-ai" },
    { label: "Ecommerce Intelligence", href: "/solutions/ecommerce-intelligence" },
    { label: "HR Bot", href: "/solutions/hr-bot" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Webinars", href: "#" },
  ],
  community: [
    { label: "Discord", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Developers", href: "#" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Consulting", href: "/consulting" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card/80 backdrop-blur-sm">

      {/* Main footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-foreground">AI Mill</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Building the future of AI agents.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 ${
                    idx === 0 ? "bg-gradient-to-br from-gray-800/50 to-gray-700/50 hover:from-gray-800 hover:to-gray-700" :
                    idx === 1 ? "bg-gradient-to-br from-red-600/30 to-red-500/20 hover:from-red-600/40 hover:to-red-500/30" :
                    idx === 2 ? "bg-gradient-to-br from-blue-500/30 to-blue-400/20 hover:from-blue-500/40 hover:to-blue-400/30" :
                    "bg-gradient-to-br from-blue-700/30 to-blue-600/20 hover:from-blue-700/40 hover:to-blue-600/30"
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className={`w-5 h-5 ${
                    idx === 0 ? "text-gray-300" :
                    idx === 1 ? "text-red-400" :
                    idx === 2 ? "text-blue-400" :
                    "text-blue-500"
                  }`} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar with status */}
      <div className="border-t border-border bg-background">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Left side - Status */}
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green" />
              <span className="text-green font-medium">Services Operational</span>
            </div>
            
            {/* Right side - Certifications and links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <span className="text-green">✓</span>
                <span>SOC 2 Certified</span>
              </div>
              <p className="text-sm text-muted-foreground">
                © 2025 AI Mill. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
