interface EnfactumLogoProps {
  className?: string;
}

const EnfactumLogo = ({ className = "text-xl md:text-2xl" }: EnfactumLogoProps) => {
  return (
    <span className={`font-display font-bold tracking-tight select-none ${className}`}>
      <span className="text-foreground">en</span>
      <span className="text-primary">fact</span>
      <span className="text-foreground">um</span>
    </span>
  );
};

export default EnfactumLogo;
