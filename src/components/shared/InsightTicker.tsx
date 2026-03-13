import { ReactNode } from "react";

interface InsightTickerProps {
  insights: string[];
  speed?: number;
  className?: string;
}

/**
 * Slow-scrolling infinite marquee of client insights/testimonials.
 */
const InsightTicker = ({ insights, speed = 40, className = "" }: InsightTickerProps) => {
  // Double the items for seamless loop
  const items = [...insights, ...insights];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex items-center gap-12 animate-ticker whitespace-nowrap"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {items.map((insight, i) => (
          <span
            key={i}
            className="flex items-center gap-12 shrink-0"
          >
            <span className="text-[13px] italic text-muted-foreground/60 font-body max-w-[400px] whitespace-normal inline-block leading-relaxed">
              "{insight}"
            </span>
            <span className="w-1 h-1 rounded-full bg-primary/30 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default InsightTicker;
