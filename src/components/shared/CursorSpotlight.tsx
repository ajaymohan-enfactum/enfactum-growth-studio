import { useRef, useCallback, useState, ReactNode } from "react";

interface CursorSpotlightProps {
  children: ReactNode;
  className?: string;
  /** Spotlight radius in pixels */
  radius?: number;
  /** Spotlight opacity 0-1 */
  intensity?: number;
  /** Color in HSL format matching primary */
  color?: string;
}

/**
 * Wraps content with a cursor-following radial gradient glow.
 * Creates a premium "spotlight" effect (Linear/Stripe style).
 */
const CursorSpotlight = ({
  children,
  className = "",
  radius = 350,
  intensity = 0.08,
  color = "hsl(210, 100%, 50%)",
}: CursorSpotlightProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    },
    []
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(${radius}px circle at ${position.x}px ${position.y}px, ${color.replace(")", ` / ${intensity})`).replace("hsl", "hsla").replace("hsla(", "hsl(")}, transparent 70%)`,
        }}
      />
      <div className="relative z-[2]">{children}</div>
    </div>
  );
};

export default CursorSpotlight;
