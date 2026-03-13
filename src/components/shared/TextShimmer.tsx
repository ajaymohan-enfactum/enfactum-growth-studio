import { ReactNode } from "react";

interface TextShimmerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps text with a subtle animated light sweep / shimmer effect.
 * Works best on accent-colored text.
 */
const TextShimmer = ({ children, className = "" }: TextShimmerProps) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-[1]">{children}</span>
      <span
        className="absolute inset-0 z-[2] pointer-events-none animate-shimmer"
        style={{
          background: "linear-gradient(110deg, transparent 30%, hsl(210 100% 70% / 0.3) 45%, hsl(210 100% 80% / 0.15) 55%, transparent 70%)",
          backgroundSize: "250% 100%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          mixBlendMode: "screen",
        }}
      />
    </span>
  );
};

export default TextShimmer;
