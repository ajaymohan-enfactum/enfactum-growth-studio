import { Link } from "react-router-dom";
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

const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-background border-t border-border">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
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
              <a href="tel:+65XXXXXXXX" className="block hover:text-foreground transition-colors">+65 XXXX XXXX</a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
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
            </div>
          ))}
        </div>
        <div className="line-glow mt-12 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-dim">
          <span>© {new Date().getFullYear()} Enfactum. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
            <a href="https://www.linkedin.com/company/995805" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com/enfactum" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              X / Twitter
            </a>
            <a href="https://youtube.com/@enfactum" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
