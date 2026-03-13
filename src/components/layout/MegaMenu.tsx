import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Layers, Megaphone, Brain, Sparkles } from "lucide-react";

const capabilityItems = [
  {
    label: "Growth Infrastructure",
    href: "/capabilities/growth-infrastructure",
    description: "Go-to-market engines, channel ecosystems, and partner activation frameworks that scale.",
    icon: Layers,
  },
  {
    label: "Brand & Demand",
    href: "/capabilities/brand-demand",
    description: "Integrated brand strategy and demand generation that turns visibility into pipeline.",
    icon: Megaphone,
  },
  {
    label: "AI Ecosystems",
    href: "/capabilities/ai-ecosystems",
    description: "AI-native products, platform integrations, and ecosystem plays that move past pilot.",
    icon: Brain,
  },
  {
    label: "Live Experiences",
    href: "/capabilities/live-experiences",
    description: "High-impact events, activations, and experiential platforms that create momentum.",
    icon: Sparkles,
  },
];

const companyItems = [
  { label: "Company", href: "/company" },
  { label: "Leadership", href: "/company/leadership" },
  { label: "Operating Model", href: "/company/operating-model" },
  { label: "Regional Nodes", href: "/company/regional-nodes" },
  { label: "Careers", href: "/company/careers" },
];

const quickLinks = [
  { label: "Work", href: "/work" },
  { label: "Brands", href: "/brands" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Thinking", href: "/thinking" },
];

const featuredCase = {
  client: "HP",
  headline: "From innovation mandate to 21-country ecosystem",
  href: "/work",
  capabilities: ["AI Ecosystems", "Growth Infrastructure"],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
};

interface MegaMenuProps {
  open: boolean;
  onClose: () => void;
}

const MegaMenu = ({ open, onClose }: MegaMenuProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-6 md:top-6 md:right-10 z-10 p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="h-full overflow-y-auto"
          >
            <div className="section-container pt-24 pb-16 md:pt-28 md:pb-20 min-h-full flex flex-col">
              {/* Main Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 flex-1">
                
                {/* Capabilities — Left Column */}
                <div className="md:col-span-5 lg:col-span-5">
                  <motion.p variants={itemVariants} className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6">
                    Capabilities
                  </motion.p>
                  <div className="space-y-1">
                    {capabilityItems.map((item) => (
                      <motion.div key={item.href} variants={itemVariants}>
                        <Link
                          to={item.href}
                          onClick={onClose}
                          className="group flex items-start gap-4 p-4 -mx-4 rounded-lg hover:bg-secondary/60 transition-colors duration-200"
                        >
                          <div className="mt-0.5 p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="block text-base font-semibold font-display text-foreground group-hover:text-primary transition-colors">
                              {item.label}
                            </span>
                            <span className="block text-sm text-muted-foreground mt-0.5 leading-relaxed">
                              {item.description}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 mt-1 ml-auto text-muted-foreground/0 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div variants={itemVariants} className="mt-6">
                    <Link
                      to="/capabilities"
                      onClick={onClose}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
                    >
                      All capabilities <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                </div>

                {/* Middle Column — Quick Links + Company */}
                <div className="md:col-span-3 lg:col-span-3">
                  <motion.p variants={itemVariants} className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6">
                    Explore
                  </motion.p>
                  <div className="space-y-1">
                    {quickLinks.map((link) => (
                      <motion.div key={link.href} variants={itemVariants}>
                        <Link
                          to={link.href}
                          onClick={onClose}
                          className="block py-2.5 text-base font-medium font-display text-foreground/80 hover:text-foreground hover:translate-x-1 transition-all duration-200"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div variants={itemVariants} className="mt-8">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
                      Company
                    </p>
                    <div className="space-y-1">
                      {companyItems.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          onClick={onClose}
                          className="block py-2 text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right Column — Featured Case + CTA */}
                <div className="md:col-span-4 lg:col-span-4">
                  <motion.p variants={itemVariants} className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-6">
                    Featured
                  </motion.p>
                  <motion.div variants={itemVariants}>
                    <Link
                      to={featuredCase.href}
                      onClick={onClose}
                      className="group block p-5 rounded-xl bg-secondary/40 border border-border/50 hover:border-primary/30 hover:bg-secondary/60 transition-all duration-300"
                    >
                      <span className="text-xs font-semibold tracking-wider uppercase text-primary">
                        {featuredCase.client}
                      </span>
                      <p className="mt-2 text-lg font-display font-semibold text-foreground leading-snug">
                        {featuredCase.headline}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {featuredCase.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary/80"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                        View work <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </motion.div>

                  {/* CTA */}
                  <motion.div variants={itemVariants} className="mt-8">
                    <Link
                      to="/contact"
                      onClick={onClose}
                      className="group flex items-center justify-between p-5 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/15 hover:border-primary/40 transition-all duration-300"
                    >
                      <div>
                        <p className="text-base font-display font-semibold text-foreground">Start a conversation</p>
                        <p className="text-sm text-muted-foreground mt-0.5">Let's build what moves markets.</p>
                      </div>
                      <div className="p-2 rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
