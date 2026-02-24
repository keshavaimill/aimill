import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Solutions", hasDropdown: true },
  { label: "Industries", hasDropdown: true },
  { label: "Consulting", hasDropdown: false },
  { label: "About", hasDropdown: false },
];

export const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 glass border-b border-border/50" aria-label="Main navigation">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-[100] -translate-y-20 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground opacity-0 transition focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      >
        Skip to main content
      </a>
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/image.png" alt="Ai Mill Logo" className="w-8 h-8 rounded-lg object-contain" />
          <span className="text-xl font-bold text-foreground">Ai Mill</span>
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
                <button className="flex items-center gap-1 px-4 py-2 text-sm text-foreground/90 hover:text-foreground transition-colors">
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
                  className="flex items-center gap-1 px-4 py-2 text-sm text-foreground/90 hover:text-foreground transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  {item.label}
                </Link>
              )}

              {/* Solutions Dropdown */}
              <AnimatePresence>
                {item.label === "Solutions" && activeDropdown === "Solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 p-4 rounded-xl
                            bg-background/95 backdrop-blur-xl border border-border
                            shadow-xl hover:shadow-2xl transition-shadow duration-200
                            origin-top-left"
                  >
                    <div className="transition-transform duration-200 hover:scale-[1.02]">
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
                        className="block px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        GrowthAI
                      </Link>
                      <Link
                        to="/solutions/lexflow-ai"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        LexAgent
                      </Link>
                      <Link
                        to="/solutions/ecommerce-intelligence"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        CommerceIQ
                      </Link>
                      <Link
                        to="/solutions/hr-bot"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        PeopleAgent
                      </Link>
                      <Link
                        to="/solutions/customer-email-ai"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        InboxAgent
                      </Link>
                      <Link
                        to="/solutions/insurance-fnol"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        ClaimAgent
                      </Link>
                      <Link
                        to="/solutions/forecasting-engine"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Forecasting Engine
                      </Link>
                      <Link
                        to="/solutions/predictive-maintenance"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Predictive Maintenance
                      </Link>
                    </div>
                    </div>
                  </motion.div>
                )}

                {/* Industries Dropdown */}
                {item.label === "Industries" && activeDropdown === "Industries" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 p-4 rounded-xl
                            bg-background/95 backdrop-blur-xl border border-border
                            shadow-xl hover:shadow-2xl transition-shadow duration-200
                            origin-top-left"
                  >
                    <div className="transition-transform duration-200 hover:scale-[1.02]">
                    <div className="mb-2 pb-2 border-b border-border/50">
                      <Link
                        to="/industries"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm font-semibold text-primary"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View All Industries →
                      </Link>
                    </div>
                    <div className="space-y-1">
                      <Link
                        to="/industries/lending"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Lending & Financial Services
                      </Link>
                      <Link
                        to="/industries/insurance"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Insurance
                      </Link>
                      <Link
                        to="/industries/agriculture"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Agriculture
                      </Link>
                      <Link
                        to="/industries/supply-chain"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Supply Chain
                      </Link>
                      <Link
                        to="/industries/manufacturing"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Manufacturing
                      </Link>
                      <Link
                        to="/industries/media"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Media
                      </Link>
                      <Link
                        to="/industries/healthcare"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Healthcare
                      </Link>
                      <Link
                        to="/industries/retail"
                        className="block px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Retail
                      </Link>
                    </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">

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
            className="lg:hidden glass border-b border-border/50"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pt-2 space-y-2">
                              {item.label === "Solutions" && (
                                <>
                                  <Link
                                    to="/solutions"
                                    className="block text-sm text-primary font-semibold"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    View All Solutions →
                                  </Link>
                                  <Link
                                    to="/solutions/marketing-agent"
                                    className="block text-sm text-foreground/80 hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    GrowthAI
                                  </Link>
                                  <Link
                                    to="/solutions/lexflow-ai"
                                    className="block text-sm text-foreground/80 hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    LexAgent
                                  </Link>
                                  <Link
                                    to="/solutions/ecommerce-intelligence"
                                    className="block text-sm text-foreground/80 hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    CommerceIQ
                                  </Link>
                                  <Link
                                    to="/solutions/hr-bot"
                                    className="block text-sm text-foreground/80 hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    PeopleAgent
                                  </Link>
                                  <Link
                                    to="/solutions/customer-email-ai"
                                    className="block text-sm text-foreground/80 hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    InboxAgent
                                  </Link>
                                  <Link
                                    to="/solutions/insurance-fnol"
                                    className="block text-sm text-foreground/80 hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    ClaimAgent
                                  </Link>
                                  <Link
                                    to="/solutions/forecasting-engine"
                                    className="block text-sm text-foreground/80 hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    Forecasting Engine
                                  </Link>
                                  <Link
                                    to="/solutions/predictive-maintenance"
                                    className="block text-sm text-foreground/80 hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    Predictive Maintenance
                                  </Link>
                                </>
                              )}
                              {item.label === "Industries" && (
                                <>
                                  <Link
                                    to="/industries"
                                    className="block text-sm text-primary font-semibold"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    View All Industries →
                                  </Link>
                                  <Link
                                    to="/industries/lending"
                                    className="block text-sm text-foreground/80 hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    Lending & Financial Services
                                  </Link>
                                  <Link
                                    to="/industries/insurance"
                                    className="block text-sm text-foreground/80 hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    Insurance
                                  </Link>
                                  <Link
                                    to="/industries/agriculture"
                                    className="block text-sm text-foreground/80 hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    Agriculture
                                  </Link>
                                  <Link
                                    to="/industries/supply-chain"
                                    className="block text-sm text-foreground/80 hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    Supply Chain
                                  </Link>
                                  <Link
                                    to="/industries/manufacturing"
                                    className="block text-sm text-foreground/80 hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    Manufacturing
                                  </Link>
                                  <Link
                                    to="/industries/media"
                                    className="block text-sm text-foreground/80 hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    Media
                                  </Link>
                                  <Link
                                    to="/industries/healthcare"
                                    className="block text-sm text-foreground/80 hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    Healthcare
                                  </Link>
                                  <Link
                                    to="/industries/retail"
                                    className="block text-sm text-foreground/80 hover:text-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    Retail
                                  </Link>
                                </>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={
                        item.label === "Consulting" ? "/consulting" :
                          item.label === "About" ? "/about" :
                            "#"
                      }
                      className="block text-foreground hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
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
