import { Link } from "react-router-dom";
import { useRef, useCallback, useState } from "react";
import { motion, useInView } from "framer-motion";
import MagneticButton from "./MagneticButton";

interface CTABandProps {
  headline?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

const CTABand = ({
  headline = "Let's build what's next.",
  description = "Tell us where growth needs to move.",
  primaryLabel = "Start a conversation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CTABandProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative py-16 md:py-20 overflow-hidden"
    >
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-700"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(500px circle at ${cursorPos.x}px ${cursorPos.y}px, hsl(210 100% 50% / 0.06), transparent 60%)`,
        }}
      />
      {/* Ambient breathing glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(ellipse 40% 50% at 50% 50%, hsl(210 100% 50% / 0.03), transparent 60%)',
            'radial-gradient(ellipse 45% 55% at 52% 48%, hsl(210 100% 50% / 0.05), transparent 65%)',
            'radial-gradient(ellipse 40% 50% at 50% 50%, hsl(210 100% 50% / 0.03), transparent 60%)',
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 48 } : { width: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="h-px bg-primary/20 mx-auto mb-8"
        />
        <motion.p
          className="eyebrow mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          Next step
        </motion.p>
        <motion.h2
          className="headline-xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          {headline}
        </motion.h2>
        {description && (
          <motion.p
            className="body-lg mt-5 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease }}
          >
            {description}
          </motion.p>
        )}
        <motion.div
          className="flex flex-col items-center gap-4 mt-12"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65, ease }}
        >
          <Link to={primaryHref}>
            <MagneticButton variant="hero" size="xl">{primaryLabel}</MagneticButton>
          </Link>
          <a href="mailto:info@enfactum.com" className="text-sm text-foreground/40 hover:text-foreground/60 transition-colors duration-300">
            Or email us directly at info@enfactum.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABand;
