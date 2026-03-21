import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import EnfactumLogo from "@/components/shared/EnfactumLogo";

const footerLinks = {
  Capabilities: [
    { label: "Growth Infrastructure", href: "/capabilities/growth-infrastructure" },
    { label: "Brand & Demand", href: "/capabilities/brand-demand" },
    { label: "AI Ecosystems", href: "/capabilities/ai-ecosystems" },
    { label: "Live Experiences", href: "/capabilities/live-experiences" },
  ],
  Company: [
    { label: "Company", href: "/company" },
    { label: "Leadership", href: "/company/leadership" },
    { label: "Growth Architecture", href: "/company/operating-model" },
    { label: "Regional Nodes", href: "/company/regional-nodes" },
    { label: "Careers", href: "/company/careers" },
  ],
  Explore: [
    { label: "Work", href: "/work" },
    { label: "Brands", href: "/brands" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Thinking", href: "/thinking" },
    { label: "Contact", href: "/contact" },
  ],
};

const ease = [0.22, 1, 0.36, 1] as const;

const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <footer ref={ref} className="bg-background border-t border-border">
      <div className="section-container py-16 md:py-20">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <EnfactumLogo className="text-lg" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Growth and innovation operating partner for enterprise brands scaling across Southeast Asia. Strategy, ecosystems, and execution.
            </p>
            <div className="mt-6 space-y-1.5 text-xs text-dim">
              <p>7 Straits View, #05-01</p>
              <p>Marina One East Tower</p>
              <p>Singapore 018936</p>
              <a href="mailto:info@enfactum.com" className="block hover:text-foreground transition-colors">info@enfactum.com</a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0.2 + ci * 0.08, ease }}
            >
              <h4 className="text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-dim hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <div className="line-glow mt-12 mb-8" />
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-dim"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
        >
          <span>© {new Date().getFullYear()} Enfactum. All rights reserved.</span>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
              <a href="https://www.linkedin.com/company/995805" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
            </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
