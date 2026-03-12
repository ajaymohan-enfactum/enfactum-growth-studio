import { Link } from "react-router-dom";
import enfactumLogo from "@/assets/enfactum_logo.gif";

const footerLinks = {
  Capabilities: [
    { label: "Growth Infrastructure", href: "/capabilities/growth-infrastructure" },
    { label: "Brand & Demand", href: "/capabilities/brand-demand" },
    { label: "AI Ecosystems", href: "/capabilities/ai-ecosystems" },
    { label: "Live Experiences", href: "/capabilities/live-experiences" },
  ],
  Company: [
    { label: "About", href: "/company" },
    { label: "Leadership", href: "/company/leadership" },
    { label: "Operating Model", href: "/company/operating-model" },
    { label: "Regional Nodes", href: "/company/regional-nodes" },
    { label: "Careers", href: "/company/careers" },
  ],
  Resources: [
    { label: "Work", href: "/work" },
    { label: "Thinking", href: "/thinking" },
    { label: "Contact", href: "/contact" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <img src={enfactumLogo} alt="Enfactum" className="h-6 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Strategy, ecosystems, and execution for enterprise brands scaling across Southeast Asia.
            </p>
            <p className="mt-6 text-xs text-dim">Singapore · India · Malaysia · Indonesia</p>
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
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
