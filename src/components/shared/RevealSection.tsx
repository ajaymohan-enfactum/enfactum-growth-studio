import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

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
}

const RevealSection = ({
  children,
  className = "",
  delay = 0,
  distance = 40,
  curtain = false,
  blur = false,
  scale = false,
}: RevealSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  if (curtain) {
    return (
      <div ref={ref} className={className}>
        <motion.div
          className="relative"
          initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
          animate={isInView ? { clipPath: "inset(0% 0 0 0)", opacity: 1 } : { clipPath: "inset(100% 0 0 0)", opacity: 0 }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
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
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
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
        transition={{ duration: 1.0, delay, ease: [0.22, 1, 0.36, 1] }}
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
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealSection;
