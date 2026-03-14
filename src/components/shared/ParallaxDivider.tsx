import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxDividerProps {
  /** Visual style variant */
  variant?: "glow" | "gradient" | "mist";
  /** Flip direction — useful between alternating sections */
  flip?: boolean;
  className?: string;
}

const ParallaxDivider = ({ variant = "glow", flip = false, className = "" }: ParallaxDividerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [20, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  if (variant === "gradient") {
    return (
      <div ref={ref} className={`relative h-16 md:h-24 overflow-hidden ${className}`}>
        <motion.div
          className="absolute inset-0"
          style={{
            y: y1,
            opacity,
            background: flip
              ? "linear-gradient(to bottom, hsl(225 15% 8% / 0), hsl(225 12% 9% / 1) 40%, hsl(225 12% 9% / 1) 60%, hsl(225 15% 8% / 0))"
              : "linear-gradient(to bottom, hsl(225 12% 9% / 0), hsl(225 15% 8% / 1) 40%, hsl(225 15% 8% / 1) 60%, hsl(225 12% 9% / 0))",
          }}
        />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-2/3 h-px"
          style={{
            y: y2,
            opacity,
            background: "linear-gradient(to right, transparent, hsl(210 100% 50% / 0.15), transparent)",
            top: "50%",
          }}
        />
      </div>
    );
  }

  if (variant === "mist") {
    return (
      <div ref={ref} className={`relative h-40 md:h-56 overflow-hidden ${className}`}>
        <motion.div
          className="absolute inset-0"
          style={{ y: y1, opacity }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 80% 50% at ${flip ? "30%" : "70%"} 50%, hsl(210 100% 50% / 0.04), transparent)`,
            }}
          />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          style={{ y: y2, opacity }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 60% 40% at ${flip ? "70%" : "30%"} 50%, hsl(195 80% 50% / 0.03), transparent)`,
            }}
          />
        </motion.div>
        {/* Thin center line */}
        <motion.div
          className="absolute left-0 right-0 h-px top-1/2"
          style={{
            opacity,
            background: "linear-gradient(to right, transparent, hsl(var(--border) / 0.3), transparent)",
          }}
        />
      </div>
    );
  }

  // Default: glow
  return (
    <div ref={ref} className={`relative h-24 md:h-32 overflow-hidden ${className}`}>
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
        style={{
          y: y1,
          opacity,
          background: "radial-gradient(circle, hsl(210 100% 50% / 0.06), transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        className="absolute left-0 right-0 h-px top-1/2"
        style={{
          opacity,
          background: "linear-gradient(to right, transparent, hsl(var(--border) / 0.4), transparent)",
        }}
      />
    </div>
  );
};

export default ParallaxDivider;
