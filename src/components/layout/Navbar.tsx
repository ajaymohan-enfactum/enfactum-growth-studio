import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import EnfactumLogo from "@/components/shared/EnfactumLogo";

const capabilitiesLinks = [
  { label: "Growth Infrastructure", href: "/capabilities/growth-infrastructure" },
  { label: "Brand & Demand", href: "/capabilities/brand-demand" },
  { label: "AI Ecosystems", href: "/capabilities/ai-ecosystems" },
  { label: "Live Experiences", href: "/capabilities/live-experiences" },
];

const companyLinks = [
  { label: "Company", href: "/company" },
  { label: "Leadership", href: "/company/leadership" },
  { label: "Operating Model", href: "/company/operating-model" },
  { label: "Regional Nodes", href: "/company/regional-nodes" },
  { label: "Careers", href: "/company/careers" },
];

const navLinks = [
  { label: "Capabilities", href: "/capabilities", submenu: capabilitiesLinks },
  { label: "Work", href: "/work" },
  { label: "Brands", href: "/brands" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Thinking", href: "/thinking" },
  { label: "Company", href: "/company", submenu: companyLinks },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveSubmenu(null);
    setExpandedMobile(null);
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
          <EnfactumLogo />
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
              Start a conversation
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-foreground p-2"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Nav - Sheet */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="right"
          className="w-[85vw] max-w-[360px] bg-background border-border/50 p-0 flex flex-col"
        >
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          
          {/* Header */}
          <div className="px-6 pt-6 pb-4 border-b border-border/40">
            <EnfactumLogo className="text-xl" />
          </div>

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto py-4">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3, ease: "easeOut" }}
              >
                {link.submenu ? (
                  <div>
                    <button
                      onClick={() =>
                        setExpandedMobile(expandedMobile === link.label ? null : link.label)
                      }
                      className="flex items-center justify-between w-full px-6 py-3.5 text-base font-semibold font-display text-foreground hover:bg-secondary/50 transition-colors"
                    >
                      {link.label}
                      <ChevronRight
                        className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                          expandedMobile === link.label ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {expandedMobile === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-2">
                            {link.submenu.map((sub, j) => (
                              <motion.div
                                key={sub.href}
                                initial={{ opacity: 0, x: 12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.03 * j, duration: 0.2 }}
                              >
                                <Link
                                  to={sub.href}
                                  className="flex items-center gap-2 pl-10 pr-6 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/30 transition-colors"
                                >
                                  <span className="w-1 h-1 rounded-full bg-primary/60" />
                                  {sub.label}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="block px-6 py-3.5 text-base font-semibold font-display text-foreground hover:bg-secondary/50 transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="px-6 py-6 border-t border-border/40">
            <Link to="/contact" className="block">
              <Button variant="hero" className="w-full gap-2">
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
