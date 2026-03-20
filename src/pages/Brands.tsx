import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import SEOHead from "@/components/shared/SEOHead";
import { FeaturedOutcome, SupportingOutcome, type OutcomeCapsuleData } from "@/components/shared/OutcomeCapsule";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sectorClusters, type BrandEntry } from "@/data/brands";

/* ═══════════════════════════════════════════════
   BRAND GALLERY CELL — Normalized, equal-sized plates
   ═══════════════════════════════════════════════ */
const BrandCell = ({ brand, delay = 0 }: { brand: BrandEntry; delay?: number }) => {
  const hasLogo = !!brand.localLogo;
  const hasColor = !!brand.colorLogo;

  return (
    <RevealSection delay={delay} scale>
      <div className="group relative flex items-center justify-center h-20 md:h-24 rounded-lg border border-border/25 bg-card/30 hover:border-primary/20 hover:bg-card/50 transition-all duration-500 px-5">
        {hasLogo ? (
          <img
            src={hasColor ? brand.colorLogo! : brand.localLogo!}
            alt={brand.name}
            loading="lazy"
            className="select-none max-h-[32px] md:max-h-[36px] w-auto object-contain"
            style={hasColor ? { opacity: 0.85 } : { filter: "brightness(0) invert(1)", opacity: 0.7 }}
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <span className={`font-display font-bold text-foreground/60 text-sm tracking-[0.04em] uppercase select-none ${hasLogo ? 'hidden' : ''}`}>
          {brand.name}
        </span>

        {/* Tooltip */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1.5 rounded-md bg-foreground/90 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-20 text-center">
          <span className="text-[11px] font-semibold text-background">{brand.name}</span>
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-foreground/90" />
        </div>
      </div>
    </RevealSection>
  );
};

/* ═══════════════════════════════════════════════
   SECTOR GALLERY — Structured ledger-style display
   ═══════════════════════════════════════════════ */
const SectorGallery = ({ cluster, index }: { cluster: typeof sectorClusters[0]; index: number }) => {
  const isAlt = index % 2 === 0;

  return (
    <section className={`relative py-20 md:py-28 ${isAlt ? '' : ''}`}>
      {index > 0 && <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />}

      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Sector header */}
          <div className={`md:col-span-4 ${index % 2 !== 0 ? 'md:order-2 md:col-start-9' : ''}`}>
            <RevealSection blur>
              <span className="text-[64px] md:text-[80px] font-display font-bold text-foreground/[0.03] leading-none select-none block">
                {cluster.num}
              </span>
              <div className="mt-[-8px]">
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground leading-tight tracking-[-0.02em]">
                  {cluster.sector}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-[1.7] mt-4">
                  {cluster.narrative}
                </p>
              </div>
            </RevealSection>
          </div>

          {/* Logo grid — equal-sized cells */}
          <div className={`md:col-span-7 ${index % 2 !== 0 ? 'md:order-1' : 'md:col-start-6'}`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cluster.brands.map((brand, i) => (
                <BrandCell key={brand.name} brand={brand} delay={0.05 + i * 0.04} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
  return (
    <PageLayout>
      <SEOHead
        title="Brands & Clients — Enterprise Credibility Across Southeast Asia"
        description="Enfactum has worked with 40+ brands across enterprise technology, industrial & energy, consumer growth, institutions, and innovation sectors in Southeast Asia."
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

      {/* ═══ SECTOR GALLERIES ═══ */}
      {sectorClusters.map((cluster, i) => (
        <SectorGallery key={cluster.sector} cluster={cluster} index={i} />
      ))}

      {/* ═══ BEHIND THE LOGOS ═══ */}
      <section className="py-28 md:py-36 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/[0.08] to-transparent" />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 50% 40% at 50% 50%, hsl(210 80% 15% / 0.06), transparent 70%)',
        }} />
        <div className="section-container relative z-10">
          <RevealSection blur>
            <div className="max-w-2xl mb-20">
              <p className="eyebrow mb-6">Selected outcomes</p>
              <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
                Behind the logos.
              </h2>
              <p className="text-[13px] text-foreground/25 mt-5 leading-relaxed font-body max-w-lg">
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
