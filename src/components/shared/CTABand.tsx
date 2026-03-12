import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RevealSection from "./RevealSection";

interface CTABandProps {
  headline?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const CTABand = ({
  headline = "Let's build what's next.",
  description = "Tell us where growth needs to move.",
  primaryLabel = "Start a conversation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CTABandProps) => {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="section-container relative z-10 text-center">
        <RevealSection distance={50}>
          <p className="eyebrow mb-8">Next step</p>
          <h2 className="headline-xl max-w-3xl mx-auto">{headline}</h2>
          {description && <p className="body-lg mt-5 max-w-xl mx-auto">{description}</p>}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link to={primaryHref}>
              <Button variant="hero" size="xl">{primaryLabel}</Button>
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link to={secondaryHref}>
                <Button variant="hero-outline" size="xl">{secondaryLabel}</Button>
              </Link>
            )}
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default CTABand;
