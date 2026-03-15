import { useState } from "react";

interface BrandLogoProps {
  name: string;
  domain?: string | null;
  localLogo?: string | null;
  height?: number;
  opacity?: number;
  hoverOpacity?: number;
  scaleOnHover?: boolean;
  className?: string;
}

/**
 * Brand logo — renders local PNG with graceful text fallback.
 * Monochrome filter with hover lift.
 */
const BrandLogo = ({
  name,
  localLogo,
  height = 28,
  opacity = 0.5,
  hoverOpacity = 0.9,
  scaleOnHover = false,
  className = "",
}: BrandLogoProps) => {
  const [imgError, setImgError] = useState(false);

  if (!localLogo || imgError) {
    return (
      <span
        className={`font-display font-semibold tracking-[0.04em] select-none whitespace-nowrap uppercase ${className}`}
        style={{
          fontSize: Math.max(10, height * 0.42),
          lineHeight: `${height}px`,
          opacity,
          letterSpacing: "0.08em",
          color: "hsl(var(--foreground))",
          transition: "opacity 0.5s ease",
        }}
        onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = String(hoverOpacity); }}
        onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = String(opacity); }}
      >
        {name}
      </span>
    );
  }

  return (
    <img
      src={localLogo}
      alt={name}
      loading="lazy"
      onError={() => setImgError(true)}
      className={`select-none transition-all duration-500 ${scaleOnHover ? "hover:scale-110" : ""} ${className}`}
      style={{
        height,
        width: "auto",
        objectFit: "contain",
        filter: "brightness(0) invert(1)",
        opacity,
        transition: "opacity 0.5s ease, transform 0.5s ease, filter 0.5s ease",
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLImageElement).style.opacity = String(hoverOpacity);
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLImageElement).style.opacity = String(opacity);
      }}
    />
  );
};

export default BrandLogo;
