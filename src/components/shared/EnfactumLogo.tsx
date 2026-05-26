import logoUrl from "@/assets/enfactum-logo.png";

interface EnfactumLogoProps {
  className?: string;
}

const EnfactumLogo = ({ className = "text-xl md:text-2xl" }: EnfactumLogoProps) => {
  return (
    <img
      src={logoUrl}
      alt="Enfactum"
      className={`select-none w-auto ${className.includes("h-") ? className : `h-7 md:h-8 ${className}`}`}
      draggable={false}
    />
  );
};

export default EnfactumLogo;
