import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  /** Use curtain reveal instead of fade-up */
  curtain?: boolean;
}

const RevealSection = ({ children, className = "", delay = 0, distance = 40, curtain = false }: RevealSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  if (curtain) {
    return (
      <div ref={ref} className={className}>
        {/* Dark overlay that slides up to reveal */}
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
