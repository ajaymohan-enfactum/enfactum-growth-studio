import { motion, useInView } from "framer-motion";
import { ReactNode, useRef, Children } from "react";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  /** Use curtain reveal instead of fade-up */
  curtain?: boolean;
  /** Blur-to-focus reveal — cinematic editorial feel */
  blur?: boolean;
  /** Scale reveal — subtle zoom-in from slightly smaller */
  scale?: boolean;
  /** Stagger children — reveals each child sequentially */
  stagger?: boolean;
  /** Stagger interval in seconds */
  staggerInterval?: number;
}

const springTransition = { type: "spring" as const, damping: 20, stiffness: 100 };
const easeOut = [0.22, 1, 0.36, 1] as const;

const RevealSection = ({
  children,
  className = "",
  delay = 0,
  distance = 30,
  curtain = false,
  blur = false,
  scale = false,
  stagger = false,
  staggerInterval = 0.12,
}: RevealSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "50px 0px" });

  /* ── Stagger mode: wraps each child in its own reveal ── */
  if (stagger) {
    const childArray = Children.toArray(children);
    return (
      <div ref={ref} className={className}>
        {childArray.map((child, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: distance * 0.6, filter: blur ? "blur(8px)" : "blur(0px)" }}
            animate={
              isInView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: distance * 0.6, filter: blur ? "blur(8px)" : "blur(0px)" }
            }
            transition={{ ...springTransition, delay: delay + i * staggerInterval }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    );
  }

  if (curtain) {
    return (
      <div ref={ref} className={className}>
        <motion.div
          className="relative"
          initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
          animate={isInView ? { clipPath: "inset(0% 0 0 0)", opacity: 1 } : { clipPath: "inset(100% 0 0 0)", opacity: 0 }}
          transition={{ duration: 1.1, delay, ease: easeOut }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  if (blur) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: distance * 0.6, filter: "blur(12px)" }}
        animate={
          isInView
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: distance * 0.6, filter: "blur(12px)" }
        }
        transition={{ ...springTransition, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  if (scale) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.92, y: distance * 0.5 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.92, y: distance * 0.5 }
        }
        transition={{ ...springTransition, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ ...springTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealSection;
