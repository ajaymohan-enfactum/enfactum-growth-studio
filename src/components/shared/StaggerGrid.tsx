import { motion, useInView } from "framer-motion";
import { ReactNode, useRef, Children, cloneElement, isValidElement } from "react";

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  baseDelay?: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(3px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

/**
 * Wraps a grid/list of children and staggers their entrance on scroll.
 * Each direct child animates in sequence with configurable delay.
 */
const StaggerGrid = ({ children, className = "", staggerDelay = 0.08, baseDelay = 0.05 }: StaggerGridProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        return (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
              duration: 0.6,
              delay: baseDelay + i * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
};

export default StaggerGrid;
