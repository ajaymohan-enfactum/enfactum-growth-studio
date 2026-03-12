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
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 topology-grid opacity-[0.03]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="section-container relative z-10 text-center">
        <RevealSection>
          <h2 className="headline-lg max-w-3xl mx-auto">{headline}</h2>
          <p className="body-lg mt-4 max-w-xl mx-auto">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
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
