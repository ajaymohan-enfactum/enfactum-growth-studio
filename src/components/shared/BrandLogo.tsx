import { useState } from "react";

interface BrandLogoProps {
  name: string;
  /** Clearbit domain for auto-fetch (e.g. "hp.com") */
  domain?: string | null;
  /** Local logo path relative to public/ (e.g. "/logos/redington.png") */
  localLogo?: string | null;
  /** Logo height in pixels (default 28) */
  height?: number;
  /** Base opacity 0–1 (default 0.4) */
  opacity?: number;
  /** Hover opacity 0–1 (default 0.7) */
  hoverOpacity?: number;
  /** Whether to scale on hover */
  scaleOnHover?: boolean;
  className?: string;
}

/**
 * Premium brand logo component.
 * Tries local logo first, then Clearbit CDN; falls back to styled text on error.
 */
const BrandLogo = ({
  name,
  domain,
  localLogo,
  height = 28,
  opacity = 0.4,
  hoverOpacity = 0.7,
  scaleOnHover = false,
  className = "",
}: BrandLogoProps) => {
  const [failed, setFailed] = useState(false);
  const [clearbitFailed, setClearbitFailed] = useState(false);

  // Determine which URL to use
  const localUrl = localLogo || null;
  const clearbitUrl = domain ? `https://logo.clearbit.com/${domain}?size=200` : null;

  // If both sources failed or neither exists, show text
  const showText =
    failed ||
    (!localUrl && !clearbitUrl) ||
    (!localUrl && clearbitFailed) ||
    (localUrl && failed && !clearbitUrl) ||
    (localUrl && failed && clearbitFailed);

  if (showText) {
    return (
      <span
        className={`font-display font-medium text-foreground/30 tracking-tight select-none text-[13px] whitespace-nowrap ${className}`}
        style={{ lineHeight: `${height}px` }}
      >
        {name}
      </span>
    );
  }

  // Determine current src: prefer local, fall back to clearbit
  const currentSrc = localUrl && !failed ? localUrl : clearbitUrl;

  const handleError = () => {
    if (localUrl && !failed) {
      // Local failed, try clearbit
      setFailed(true);
      if (!clearbitUrl) setClearbitFailed(true);
    } else {
      // Clearbit failed too
      setClearbitFailed(true);
      setFailed(true);
    }
  };

  return (
    <img
      src={currentSrc!}
      alt={name}
      onError={handleError}
      loading="lazy"
      className={`w-auto object-contain brightness-0 invert transition-all duration-200 select-none ${scaleOnHover ? "hover:scale-105" : ""} ${className}`}
      style={{
        height: `${height}px`,
        opacity,
        filter: "grayscale(100%) brightness(0) invert(1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = String(hoverOpacity);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = String(opacity);
      }}
    />
  );
};

export default BrandLogo;
