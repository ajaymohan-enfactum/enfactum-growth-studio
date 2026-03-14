import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

/**
 * Parses a metric string like "40+", "15+", "$2.4M", "100%", "Jaya Grocer"
 * and animates the numeric portion on scroll.
 */
const parseMetric = (value: string): { prefix: string; number: number; decimals: number; suffix: string } | null => {
  const match = value.match(/^([^0-9]*?)([\d,.]+)(.*)$/);
  if (!match) return null;
  const prefix = match[1];
  const numStr = match[2].replace(/,/g, "");
  const number = parseFloat(numStr);
  if (isNaN(number)) return null;
  const decimalMatch = numStr.match(/\.(\d+)/);
  const decimals = decimalMatch ? decimalMatch[1].length : 0;
  const suffix = match[3];
  return { prefix, number, decimals, suffix };
};

const AnimatedCounter = ({ value, className = "", duration = 1.5 }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(value);
  const parsed = useRef(parseMetric(value));
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || !parsed.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const { prefix, number, decimals, suffix } = parsed.current;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * number;
      
      const formatted = decimals > 0 
        ? current.toFixed(decimals) 
        : Math.round(current).toLocaleString();
      
      setDisplay(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplay(value); // Ensure exact final value
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  // If not parseable as number, just show the value
  if (!parsed.current) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export default AnimatedCounter;
