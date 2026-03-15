import { useState } from "react";

interface BrandLogoProps {
  name: string;
  domain?: string | null;
  localLogo?: string | null;
  height?: number;
  className?: string;
}

/**
 * Brand logo — renders local PNG as white monochrome mark.
 * High-contrast treatment optimised for dark backgrounds.
 * Graceful typographic fallback for missing assets.
 */
const BrandLogo = ({
  name,
  localLogo,
  height = 28,
  className = "",
}: BrandLogoProps) => {
  const [imgError, setImgError] = useState(false);

  if (!localLogo || imgError) {
    return (
      <span
        className={`font-display font-bold tracking-[0.04em] select-none whitespace-nowrap uppercase text-foreground/80 ${className}`}
        style={{
          fontSize: Math.max(12, height * 0.5),
          lineHeight: `${height}px`,
          letterSpacing: "0.06em",
        }}
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
      className={`select-none ${className}`}
      style={{
        height,
        width: "auto",
        objectFit: "contain",
        filter: "brightness(0) invert(1)",
        opacity: 0.92,
      }}
    />
  );
};

export default BrandLogo;
