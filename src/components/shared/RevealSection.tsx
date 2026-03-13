import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}

const RevealSection = ({ children, className = "", delay = 0, distance = 40 }: RevealSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
