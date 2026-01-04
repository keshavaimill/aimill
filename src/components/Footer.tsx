import { Github, Youtube, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  industry: [
    { label: "All Industries", href: "/industries" },
    { label: "Lending & Financial Services", href: "/industries/lending" },
    { label: "Agriculture", href: "/industries/agriculture" },
    { label: "Supply Chain", href: "/industries/supply-chain" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Insurance", href: "/industries/insurance" },
    { label: "Retail", href: "/industries/retail" },
  ],
  solutions: [
    { label: "All Solutions", href: "/solutions" },
    { label: "GrowthAI", href: "/solutions/marketing-agent" },
    { label: "LexAgent", href: "/solutions/lexflow-ai" },
    { label: "CommerceIQ", href: "/solutions/ecommerce-intelligence" },
    { label: "PeopleAgent", href: "/solutions/hr-bot" },
    { label: "InboxAgent", href: "/solutions/customer-email-ai" },
    { label: "ClaimAgent", href: "/solutions/insurance-fnol" },
    { label: "Forecasting Engine", href: "/solutions/forecasting-engine" },
    { label: "Predictive Maintenance", href: "/solutions/predictive-maintenance" },
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
    <footer className="relative border-t border-border/50 bg-zinc-950/50 backdrop-blur-sm">

      {/* Main footer */}
      <div className="container mx-auto px-6 md:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <img src="/image.png" alt="AI Mill Logo" className="w-10 h-10 rounded-lg object-contain group-hover:scale-105 transition-transform" />
              <span className="text-2xl font-bold text-foreground">AI Mill</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-xs">
              Building The Future With AI Agents.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg ${
                    idx === 0 ? "bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50" :
                    idx === 1 ? "bg-red-950/30 hover:bg-red-950/50 border border-red-900/30" :
                    idx === 2 ? "bg-blue-950/30 hover:bg-blue-950/50 border border-blue-900/30" :
                    "bg-blue-950/30 hover:bg-blue-950/50 border border-blue-900/30"
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
            <h4 className="font-semibold mb-6 text-foreground">Industry</h4>
            <ul className="space-y-4">
              {footerLinks.industry.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block hover:translate-x-1">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block hover:translate-x-1">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-foreground">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block hover:translate-x-1">
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
            <h4 className="font-semibold mb-6 text-foreground">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block hover:translate-x-1">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block hover:translate-x-1">
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
      <div className="border-t border-border/50 bg-zinc-900/30">
        <div className="container mx-auto px-6 md:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Left side - Status */}
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-green font-medium">Services Operational</span>
            </div>
            
            {/* Right side - Certifications and links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm">
              <p className="text-muted-foreground">
                © 2025 AI Mill. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-muted-foreground">
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
