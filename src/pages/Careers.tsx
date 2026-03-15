import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import StaggerGrid from "@/components/shared/StaggerGrid";
import CTABand from "@/components/shared/CTABand";
import SEOHead, { makeBreadcrumbSchema } from "@/components/shared/SEOHead";
import { Button } from "@/components/ui/button";

const whyEnfactum = [
  { title: "Real work, real impact", desc: "You'll work on live enterprise programmes across Southeast Asia — not internal busy-work." },
  { title: "Growth Architect culture", desc: "We build things. Strategy is the starting point, not the end product." },
  { title: "Multi-market exposure", desc: "Work across Singapore, India, Malaysia, Indonesia, and beyond." },
  { title: "Growth trajectory", desc: "Fast-growing company with clear capability leadership paths." },
];

const openRoles = [
  { title: "Senior Growth Strategist", location: "Singapore", type: "Full-time" },
  { title: "Programme Manager", location: "Singapore / India", type: "Full-time" },
  { title: "Creative Director", location: "India", type: "Full-time" },
  { title: "Demand Operations Lead", location: "Singapore", type: "Full-time" },
  { title: "Innovation Programme Lead", location: "Singapore", type: "Full-time" },
];

const Careers = () => (
  <PageLayout>
    <SEOHead
      title="Careers"
      description="Join Enfactum's Architect Bench. Open roles across strategy, creative, technology, demand operations, and programme management in Singapore, India, Malaysia, and Indonesia."
      path="/company/careers"
      jsonLd={makeBreadcrumbSchema([
        { name: "Company", url: "/company" },
        { name: "Careers", url: "/company/careers" },
      ])}
    />
    <HeroSection
      eyebrow="Careers"
      headline={<>Build growth infrastructure. Shape <span className="text-primary">Southeast Asia's future.</span></>}
      description="Enfactum is for people who want to operate — not just advise. We're building something rare, and we're looking for exceptional people to join us."
    />

    <section className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader eyebrow="Why Enfactum" headline="Not a typical agency. Not a typical consultancy." />
        <StaggerGrid className="grid sm:grid-cols-2 gap-5 mt-14" staggerDelay={0.1}>
          {whyEnfactum.map((item, i) => (
            <div key={i} className="card-premium h-full">
              <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
            </div>
          ))}
        </StaggerGrid>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="section-container">
        <SectionHeader eyebrow="Open roles" headline="Current opportunities." />
        <div className="mt-12 space-y-0">
          {openRoles.map((role, i) => (
            <RevealSection key={i} delay={i * 0.06}>
              <div className="flex items-center justify-between py-5 border-b border-border group cursor-pointer">
                <div>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">{role.title}</h3>
                  <p className="text-xs text-dim mt-1">{role.location} · {role.type}</p>
                </div>
                <Link to="/contact">
                  <Button variant="outline" size="sm">Apply</Button>
                </Link>
              </div>
            </RevealSection>
          ))}
        </div>
        <RevealSection className="mt-10">
          <div className="card-premium text-center">
            <h3 className="font-display font-semibold text-foreground">Don't see your role?</h3>
            <p className="text-sm text-muted-foreground mt-2">
              We're always interested in hearing from exceptional people. Send us an expression of interest.
            </p>
            <Link to="/contact" className="inline-block mt-4">
              <Button variant="outline">Start a conversation</Button>
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>

    <CTABand headline="Ready to build something meaningful?" primaryLabel="Start a conversation" primaryHref="/contact" />
  </PageLayout>
);

export default Careers;
