import { useState } from "react";

interface BrandLogoProps {
  name: string;
  domain: string;
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
 * Loads logo from Clearbit CDN; falls back to styled text on error.
 */
const BrandLogo = ({
  name,
  domain,
  height = 28,
  opacity = 0.4,
  hoverOpacity = 0.7,
  scaleOnHover = false,
  className = "",
}: BrandLogoProps) => {
  const [failed, setFailed] = useState(false);

  const logoUrl = `https://logo.clearbit.com/${domain}?size=200`;

  if (failed) {
    return (
      <span
        className={`font-display font-semibold text-foreground/40 tracking-tight select-none ${className}`}
        style={{ fontSize: `${Math.max(height * 0.5, 12)}px`, lineHeight: `${height}px` }}
      >
        {name}
      </span>
    );
  }

  return (
    <img
      src={logoUrl}
      alt={name}
      onError={() => setFailed(true)}
      loading="lazy"
      className={`w-auto object-contain brightness-0 invert transition-all duration-500 select-none ${scaleOnHover ? "hover:scale-105" : ""} ${className}`}
      style={{
        height: `${height}px`,
        opacity,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = String(hoverOpacity); }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = String(opacity); }}
    />
  );
};

export default BrandLogo;
