import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ChevronRight, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import EnfactumLogo from "@/components/shared/EnfactumLogo";
import MegaMenu from "@/components/layout/MegaMenu";

const navLinks = [
  { label: "Capabilities", href: "/capabilities", hasMega: true },
  { label: "Work", href: "/work" },
  { label: "Brands", href: "/brands" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Thinking", href: "/thinking" },
  { label: "Company", href: "/company", hasMega: true },
];

const capabilitiesLinks = [
  { label: "Growth Infrastructure", href: "/capabilities/growth-infrastructure" },
  { label: "Brand & Demand", href: "/capabilities/brand-demand" },
  { label: "AI Ecosystems", href: "/capabilities/ai-ecosystems" },
  { label: "Live Experiences", href: "/capabilities/live-experiences" },
];

const companyLinks = [
  { label: "Company", href: "/company" },
  { label: "Leadership", href: "/company/leadership" },
  { label: "Growth Architecture", href: "/company/operating-model" },
  { label: "Regional Nodes", href: "/company/regional-nodes" },
  { label: "Careers", href: "/company/careers" },
];

const mobileSubmenuMap: Record<string, { label: string; href: string }[]> = {
  Capabilities: capabilitiesLinks,
  Company: companyLinks,
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [shrunk, setShrunk] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setShrunk(y > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setExpandedMobile(null);
  }, [location]);

  // Lock body scroll when mega menu is open
  useEffect(() => {
    document.body.style.overflow = megaOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [megaOpen]);

  return (
    <>
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
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setMegaOpen(true)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <Link to="/contact">
              <Button variant="hero" size="default">
                Start a conversation
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMegaOpen(true)}
            className="md:hidden text-foreground p-2"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mega Menu — Desktop & Mobile */}
      <MegaMenu open={megaOpen} onClose={() => setMegaOpen(false)} />
    </>
  );
};

export default Navbar;
