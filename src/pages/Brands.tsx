import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import SEOHead from "@/components/shared/SEOHead";
import BrandPlate from "@/components/shared/BrandPlate";
import SectorHeader from "@/components/shared/SectorHeader";
import { FeaturedOutcome, SupportingOutcome, type OutcomeCapsuleData } from "@/components/shared/OutcomeCapsule";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sectorClusters } from "@/data/brands";

/* ═══════════════════════════════════════════════
   SELECTED OUTCOMES
   ═══════════════════════════════════════════════ */
const outcomeCapsules: OutcomeCapsuleData[] = [
  {
    brand: "HP",
    caseId: "hp-garage",
    label: "AI Ecosystems / Growth Infrastructure",
    outcome: "Built regional innovation and ecosystem architecture across multiple markets and business units — from AI incubation to SMB pipeline to large format product launches.",
    featured: true,
  },
  {
    brand: "The Economist",
    caseId: "economist-bot",
    label: "Growth Infrastructure / Build-Operate-Transfer",
    outcome: "Created an embedded build-operate-transfer model that delivered 47% cost savings, 50% agency fee reduction, and exceeded revenue expectations within two quarters.",
    featured: true,
  },
  {
    brand: "JSHealth Vitamins",
    caseId: "jshealth",
    label: "Brand & Demand / Affiliate",
    outcome: "Built a performance-led affiliate and demand engine delivering +411% ROAS and +311% ROI through 190+ partnership channels across AU, EU, UK & US.",
    featured: false,
  },
  {
    brand: "Brands For Less",
    caseId: "bfl-sea",
    label: "Growth Infrastructure / Market Entry",
    outcome: "Transformed digital acquisition channels to drive +42% site traffic uplift, strengthening competitive position in online retail.",
    featured: false,
  },
];

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
const Brands = () => {
  const c01 = sectorClusters[0];
  const c02 = sectorClusters[1];
  const c03 = sectorClusters[2];
  const c04 = sectorClusters[3];

  return (
    <PageLayout>
      <SEOHead
        title="Brands & Clients — Enterprise Credibility Across Southeast Asia"
        description="Enfactum has worked with 40+ enterprise brands across enterprise technology, consumer growth, institutions, and innovation sectors in Southeast Asia."
        path="/brands"
      />

      {/* ─── HERO ─── */}
      <HeroSection
        eyebrow="Brands"
        headline={<>Trusted across the industries <span className="text-primary">shaping Southeast Asia.</span></>}
        description="A cross-sector portfolio of enterprise, consumer, institutional, and innovation-led brands that reflects Enfactum's operating range across the region."
        variant="institutional"
      >
        <div className="flex flex-wrap gap-4 mt-2">
          <Link to="/work">
            <Button variant="hero" size="xl">See the work</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="xl" className="border-border/40 text-foreground/70 hover:text-foreground hover:border-border">
              Start a conversation
            </Button>
          </Link>
        </div>
      </HeroSection>

      {/* ═══ INTRO ═══ */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <RevealSection blur>
                <p className="eyebrow mb-6">Why this matters</p>
                <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
                  Breadth as experience, not vanity.
                </h2>
              </RevealSection>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <RevealSection delay={0.1} blur>
                <div className="space-y-5">
                  <p className="text-[clamp(0.9rem,1.1vw,1.05rem)] text-foreground/50 leading-[1.8] font-body">
                    Enfactum works across the systems that shape growth in Southeast Asia — from
                    enterprise technology and channel ecosystems to consumer brands, institutions,
                    and emerging innovators.
                  </p>
                  <p className="text-[13px] text-foreground/25 leading-[1.8] font-body">
                    This breadth reflects something deeper — the ability to understand different industries,
                    navigate different stakeholders, and operate effectively across the region's complexity.
                  </p>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTOR CONSTELLATIONS ═══ */}

      {/* ── SECTOR 01 — Enterprise Technology ── */}
      <section className="relative py-28 md:py-36 bg-[hsl(var(--section-alt))] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        <div className="section-container relative z-10">
          <SectorHeader
            num="01"
            title={c01.sector}
            descriptor="Structured · Platform-led · Systemic"
            narrative={c01.narrative}
          />
          <div className="flex flex-wrap gap-4 md:gap-5 mb-5">
            {c01.brands.slice(0, 3).map((brand, i) => (
              <BrandPlate key={brand.name} brand={brand} sector={c01.sector} size="lg" delay={0.1 + i * 0.08} />
            ))}
          </div>
          <div className="flex flex-wrap gap-4 md:gap-5 mb-5 md:pl-6">
            {c01.brands.slice(3, 7).map((brand, i) => (
              <BrandPlate key={brand.name} brand={brand} sector={c01.sector} size="md" delay={0.3 + i * 0.06} />
            ))}
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4 md:pl-2">
            {c01.brands.slice(7).map((brand, i) => (
              <BrandPlate key={brand.name} brand={brand} sector={c01.sector} size="sm" delay={0.5 + i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTOR 02 — Consumer & Brand Growth ── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="section-container relative z-10">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-7 md:order-1">
              <div className="flex flex-wrap gap-4 md:gap-5 mb-5">
                {c02.brands.slice(0, 2).map((brand, i) => (
                  <BrandPlate key={brand.name} brand={brand} sector={c02.sector} size="lg" delay={0.1 + i * 0.1} />
                ))}
              </div>
              <div className="flex flex-wrap gap-4 md:gap-5">
                {c02.brands.slice(2).map((brand, i) => (
                  <BrandPlate key={brand.name} brand={brand} sector={c02.sector} size="md" delay={0.3 + i * 0.08} />
                ))}
              </div>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:order-2 md:sticky md:top-36">
              <SectorHeader
                num="02"
                title={c02.sector}
                descriptor="Fluid · Brand-led · Activation-oriented"
                narrative={c02.narrative}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTOR 03 — Institutions & Ecosystems ── */}
      <section className="relative py-28 md:py-36 bg-[hsl(var(--section-alt))] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        <div className="section-container relative z-10">
          <SectorHeader
            num="03"
            title={c03.sector}
            descriptor="Stable · Networked · Trust-based"
            narrative={c03.narrative}
            align="center"
          />
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 mb-5">
            {c03.brands.slice(0, 3).map((brand, i) => (
              <BrandPlate key={brand.name} brand={brand} sector={c03.sector} size="lg" delay={0.15 + i * 0.1} />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {c03.brands.slice(3).map((brand, i) => (
              <BrandPlate key={brand.name} brand={brand} sector={c03.sector} size="md" delay={0.4 + i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTOR 04 — New Economy & Innovation ── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="section-container relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 md:sticky md:top-36">
              <SectorHeader
                num="04"
                title={c04.sector}
                descriptor="Emergent · Innovation-led · Future-facing"
                narrative={c04.narrative}
              />
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <div className="flex flex-wrap gap-4 md:gap-5 mb-5">
                {c04.brands.slice(0, 2).map((brand, i) => (
                  <BrandPlate key={brand.name} brand={brand} sector={c04.sector} size="lg" delay={0.1 + i * 0.1} />
                ))}
              </div>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {c04.brands.slice(2).map((brand, i) => (
                  <BrandPlate key={brand.name} brand={brand} sector={c04.sector} size="md" delay={0.3 + i * 0.08} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BEHIND THE LOGOS ═══ */}
      <section className="py-28 md:py-36 relative bg-[hsl(var(--section-alt))]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/[0.08] to-transparent" />
        <div className="section-container relative z-10">
          <RevealSection blur>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <p className="eyebrow mb-6">Selected outcomes</p>
              <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
                Behind the logos.
              </h2>
              <p className="text-[13px] text-foreground/25 mt-5 leading-relaxed font-body max-w-lg mx-auto">
                A few snapshots of how Enfactum has operated for brands across sectors — delivering outcomes, not just services.
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-14">
            {outcomeCapsules.filter(c => c.featured).map((capsule, i) => (
              <FeaturedOutcome key={i} capsule={capsule} index={i} delay={i * 0.12} />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {outcomeCapsules.filter(c => !c.featured).map((capsule, i) => (
              <SupportingOutcome key={i} capsule={capsule} delay={0.3 + i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BRIDGE ═══ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />
        <div className="section-container">
          <RevealSection blur>
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <p className="eyebrow mb-4">From breadth to depth</p>
                <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-display font-bold text-foreground leading-[1.12] tracking-[-0.01em] max-w-xl">
                  Behind every logo is a different challenge, market context, and operating model.
                </h2>
              </div>
              <div className="md:col-span-4 md:col-start-9 flex md:justify-end">
                <Link to="/work">
                  <Button variant="hero" size="xl">
                    View Work <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </RevealSection>
          <RevealSection delay={0.1}>
            <div className="border-t border-border/10 pt-10 mt-14">
              <div className="flex flex-wrap gap-x-12 gap-y-4">
                {[
                  { label: "Capabilities", href: "/capabilities" },
                  { label: "Partnership models", href: "/partnerships" },
                  { label: "Our thinking", href: "/thinking" },
                ].map((link) => (
                  <Link key={link.href} to={link.href} className="group inline-flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground/30 group-hover:text-primary transition-colors duration-300">{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-foreground/10 group-hover:text-primary/60 transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <CTABand
        headline="Looking for a partner that understands the region from multiple angles?"
        description="Let's talk about what growth needs to move next."
        primaryLabel="Start a conversation"
      />
    </PageLayout>
  );
};

export default Brands;
