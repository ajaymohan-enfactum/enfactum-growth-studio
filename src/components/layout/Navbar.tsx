import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EnfactumLogo from "@/components/shared/EnfactumLogo";

const capabilitiesLinks = [
  { label: "Growth Infrastructure", href: "/capabilities/growth-infrastructure" },
  { label: "Brand & Demand", href: "/capabilities/brand-demand" },
  { label: "AI Ecosystems", href: "/capabilities/ai-ecosystems" },
  { label: "Live Experiences", href: "/capabilities/live-experiences" },
];

const companyLinks = [
  { label: "About", href: "/company" },
  { label: "Leadership", href: "/company/leadership" },
  { label: "Operating Model", href: "/company/operating-model" },
  { label: "Regional Nodes", href: "/company/regional-nodes" },
  { label: "Careers", href: "/company/careers" },
];

const navLinks = [
  { label: "Capabilities", href: "/capabilities", submenu: capabilitiesLinks },
  { label: "Work", href: "/work" },
  { label: "Thinking", href: "/thinking" },
  { label: "Company", href: "/company", submenu: companyLinks },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img src={enfactumLogo} alt="Enfactum" className="h-6 md:h-7 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.submenu && setActiveSubmenu(link.label)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                to={link.href}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {link.label}
                {link.submenu && <ChevronDown className="w-3 h-3" />}
              </Link>
              {link.submenu && (
                <AnimatePresence>
                  {activeSubmenu === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-3"
                    >
                      <div className="bg-card border border-border rounded-lg py-2 min-w-[220px] shadow-xl">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <Link to="/contact">
            <Button variant="hero" size="default">
              Get in touch
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="section-container py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.href}
                    className="block text-lg font-medium text-foreground py-2"
                  >
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <div className="pl-4 space-y-1">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className="block text-sm text-muted-foreground py-1.5 hover:text-foreground transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" className="block pt-2">
                <Button variant="hero" className="w-full">Get in touch</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
