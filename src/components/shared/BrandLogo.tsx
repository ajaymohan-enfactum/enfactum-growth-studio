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
 * Brand logo component — text fallback until logo files are uploaded.
 */
const BrandLogo = ({
  name,
  height = 28,
  className = "",
}: BrandLogoProps) => (
  <span
    className={`font-display font-medium text-foreground/50 tracking-wide select-none text-sm whitespace-nowrap ${className}`}
    style={{ lineHeight: `${height}px` }}
  >
    {name}
  </span>
);

export default BrandLogo;
