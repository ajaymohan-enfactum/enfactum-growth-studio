import { Link } from "react-router-dom";
import { useRef, useCallback, useState } from "react";
import MagneticButton from "./MagneticButton";
import RevealSection from "./RevealSection";

interface CTABandProps {
  headline?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const CTABand = ({
  headline = "Let's build what's next.",
  description = "Tell us where growth needs to move.",
  primaryLabel = "Start a conversation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CTABandProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative py-16 md:py-20 overflow-hidden"
    >
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-700"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(500px circle at ${cursorPos.x}px ${cursorPos.y}px, hsl(210 100% 50% / 0.06), transparent 60%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="section-container relative z-10 text-center">
        <RevealSection distance={50}>
          <p className="eyebrow mb-8">Next step</p>
          <h2 className="headline-xl max-w-3xl mx-auto">{headline}</h2>
          {description && <p className="body-lg mt-5 max-w-xl mx-auto">{description}</p>}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link to={primaryHref}>
              <MagneticButton variant="hero" size="xl">{primaryLabel}</MagneticButton>
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link to={secondaryHref}>
                <MagneticButton variant="hero-outline" size="xl">{secondaryLabel}</MagneticButton>
              </Link>
            )}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default CTABand;
