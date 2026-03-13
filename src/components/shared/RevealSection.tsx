import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}

const RevealSection = ({ children, className = "", delay = 0, distance = 40 }: RevealSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealSection;
