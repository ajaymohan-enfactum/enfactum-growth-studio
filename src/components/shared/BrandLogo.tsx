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
        className={`font-display font-semibold tracking-[0.06em] select-none whitespace-nowrap uppercase text-foreground/70 ${className}`}
        style={{
          fontSize: Math.max(11, height * 0.45),
          lineHeight: `${height}px`,
          letterSpacing: "0.08em",
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
        opacity: 0.85,
      }}
    />
  );
};

export default BrandLogo;
