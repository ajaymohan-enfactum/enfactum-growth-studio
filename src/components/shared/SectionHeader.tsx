import RevealSection from "./RevealSection";

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  centered?: boolean;
  className?: string;
  large?: boolean;
}

const SectionHeader = ({ eyebrow, headline, description, centered = false, className = "", large = false }: SectionHeaderProps) => {
  return (
    <RevealSection className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
      <h2 className={large ? "headline-xl" : "headline-lg"}>{headline}</h2>
      {description && (
        <p className={`body-lg mt-5 ${centered ? "max-w-2xl mx-auto" : "max-w-xl"}`}>
          {description}
        </p>
      )}
    </RevealSection>
  );
};

export default SectionHeader;
