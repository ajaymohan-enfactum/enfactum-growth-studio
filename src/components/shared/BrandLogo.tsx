import { useState } from "react";

interface BrandLogoProps {
  name: string;
  domain: string;
  className?: string;
}

/**
 * Premium brand logo component.
 * Loads logo from CDN at runtime; falls back to styled text on dark bg.
 * Uses grayscale + brightness filter for monochrome treatment.
 */
const BrandLogo = ({ name, domain, className = "" }: BrandLogoProps) => {
  const [failed, setFailed] = useState(false);

  const logoUrl = `https://logo.clearbit.com/${domain}?size=200`;

  if (failed) {
    return (
      <span
        className={`font-display text-[15px] font-semibold text-foreground/40 tracking-tight select-none ${className}`}
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
      className={`h-7 md:h-8 w-auto object-contain brightness-0 invert opacity-40 group-hover:opacity-70 transition-all duration-700 select-none ${className}`}
    />
  );
};

export default BrandLogo;
