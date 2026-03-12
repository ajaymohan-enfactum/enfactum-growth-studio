import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  children?: ReactNode;
  compact?: boolean;
}

const HeroSection = ({ eyebrow, headline, description, children, compact = false }: HeroSectionProps) => {
  return (
    <section className={`relative ${compact ? "pt-28 pb-16 md:pt-36 md:pb-20" : "pt-32 pb-20 md:pt-44 md:pb-28"} overflow-hidden`}>
      <div className="absolute inset-0 topology-grid opacity-[0.03]" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
          <h1 className="headline-xl">{headline}</h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="body-lg mt-6 max-w-2xl"
            >
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
