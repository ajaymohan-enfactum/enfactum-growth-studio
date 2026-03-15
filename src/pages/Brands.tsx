import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import BrandLogo from "@/components/shared/BrandLogo";
import SEOHead from "@/components/shared/SEOHead";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sectorClusters } from "@/data/brands";

/* ═══════════════════════════════════════════════
   SELECTED OUTCOMES — 2 dominant + 2 supporting
   ═══════════════════════════════════════════════ */
const outcomeCapsules = [
  {
    brand: "HP",
    label: "AI Ecosystems / Growth Infrastructure",
    outcome: "Built regional innovation and ecosystem architecture across multiple markets and business units — from AI incubation to SMB pipeline to large format product launches.",
    featured: true,
  },
  {
    brand: "The Economist",
    label: "Growth Infrastructure / Build-Operate-Transfer",
    outcome: "Created an embedded build-operate-transfer model that delivered 47% cost savings, 50% agency fee reduction, and exceeded revenue expectations within two quarters.",
    featured: true,
  },
  {
    brand: "JSHealth Vitamins",
    label: "Brand & Demand / Affiliate",
    outcome: "Built a performance-led affiliate and demand engine delivering +411% ROAS and +311% ROI through 190+ partnership channels across AU, EU, UK & US.",
    featured: false,
  },
  {
    brand: "Brands For Less",
    label: "Growth Infrastructure / Market Entry",
    outcome: "Transformed digital acquisition channels to drive +42% site traffic uplift, strengthening competitive position in online retail.",
    featured: false,
  },
];

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
const Brands = () => (
  <PageLayout>
    <SEOHead
      title="Brands & Clients"
      description="Enfactum has worked with 40+ enterprise brands across enterprise technology, consumer growth, institutions, and innovation sectors in Southeast Asia. HP, The Economist, L'Oréal, and more."
      path="/brands"
    />

    {/* ─── HERO ─── */}
    <HeroSection
      eyebrow="Brands"
      headline={<>Trusted across the industries <span className="text-primary">shaping Southeast Asia.</span></>}
      description="A cross-sector portfolio of enterprise, consumer, institutional, and innovation-led brands that reflects Enfactum's operating range across the region."
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

    {/* ═══ SECTION 2 — INTRO ═══ */}
    <section className="py-20 md:py-28">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <RevealSection blur>
              <p className="eyebrow mb-6">Why this matters</p>
              <h2 className="headline-lg">Breadth as experience, not vanity.</h2>
            </RevealSection>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <RevealSection delay={0.1} blur>
              <div className="space-y-6">
                <p className="body-lg">
                  Enfactum works across the systems that shape growth in Southeast Asia — from
                  enterprise technology and channel ecosystems to consumer brands, institutions,
                  and emerging innovators.
                </p>
                <p className="body-md text-muted-foreground">
                  This breadth reflects something deeper — the ability to understand different industries,
                  navigate different stakeholders, and operate effectively across the region's complexity.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>

    {/* ═══ SECTION 3 — SECTOR CLUSTERS (editorial bands) ═══ */}
    <section className="relative">
      {/* Top edge */}
      <div className="h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />

      {/* ── HERO CLUSTER — Enterprise Technology (prominent) ── */}
      {sectorClusters.length > 0 && (() => {
        const hero = sectorClusters[0];
        return (
          <div className="bg-[#080E1A] py-24 md:py-32 relative overflow-hidden">
            {/* Faint architectural line */}
            <div className="absolute top-0 bottom-0 right-[30%] w-px bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent hidden md:block" />
            <div className="section-container relative z-10">
              <RevealSection blur>
                <div className="grid md:grid-cols-12 gap-10 md:gap-16">
                  {/* Left — large editorial label */}
                  <div className="md:col-span-5">
                    <span className="text-[10px] tracking-[0.3em] text-primary/40 uppercase font-display block mb-4">{hero.num}</span>
                    <h3 className="text-[clamp(1.75rem,3vw,2.75rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
                      {hero.sector}
                    </h3>
                    <p className="text-sm text-foreground/35 leading-relaxed mt-5 max-w-sm">
                      {hero.narrative}
                    </p>
                    {/* Brand count */}
                    <div className="mt-8 flex items-center gap-3">
                      <span className="text-3xl font-display font-bold text-foreground/70">{hero.brands.length}</span>
                      <span className="text-[10px] text-foreground/25 uppercase tracking-[0.2em]">Brands</span>
                    </div>
                  </div>

                  {/* Right — logos, flowing layout */}
                  <div className="md:col-span-6 md:col-start-7 flex items-center">
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 w-full">
                      {hero.brands.map((brand, bi) => (
                        <div
                          key={bi}
                          className="group flex items-center justify-center rounded-sm bg-white/[0.03] border border-white/[0.06] p-5 md:p-6 transition-all duration-500 hover:border-primary/15 hover:bg-white/[0.05]"
                        >
                          <BrandLogo
                            name={brand.name}
                            domain={brand.domain}
                            localLogo={brand.localLogo}
                            height={30}
                            opacity={0.5}
                            hoverOpacity={0.85}
                            scaleOnHover
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        );
      })()}

      {/* ── REMAINING CLUSTERS — compact editorial bands ── */}
      {sectorClusters.slice(1).map((cluster, ci) => (
        <div
          key={ci}
          className={`py-16 md:py-20 ${ci % 2 === 0 ? '' : 'bg-[#0B1121]'}`}
        >
          <div className="section-container">
            <RevealSection delay={ci * 0.06} blur>
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                {/* Label side */}
                <div className="md:col-span-4">
                  <span className="text-[10px] tracking-[0.3em] text-primary/30 uppercase font-display block mb-3">{cluster.num}</span>
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground leading-tight">
                    {cluster.sector}
                  </h3>
                  <p className="text-[13px] text-foreground/30 leading-relaxed mt-3 max-w-xs">
                    {cluster.narrative}
                  </p>
                </div>

                {/* Brands — inline flowing text + logos mixed */}
                <div className="md:col-span-7 md:col-start-6">
                  <div className="flex flex-wrap items-center gap-3 md:gap-4">
                    {cluster.brands.map((brand, bi) => (
                      <div
                        key={bi}
                        className="group flex items-center gap-3 rounded-sm bg-white/[0.03] border border-white/[0.05] px-5 py-3.5 transition-all duration-500 hover:border-primary/15 hover:bg-white/[0.05]"
                      >
                        <BrandLogo
                          name={brand.name}
                          domain={brand.domain}
                          localLogo={brand.localLogo}
                          height={22}
                          opacity={0.45}
                          hoverOpacity={0.8}
                          scaleOnHover
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      ))}
    </section>

    {/* ═══ SECTION 4 — BEHIND THE LOGOS (case snapshots) ═══ */}
    <section className="py-24 md:py-32 bg-[#080E1A] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/[0.06] to-transparent" />
      <div className="section-container">
        <RevealSection blur>
          <div className="max-w-lg mb-16">
            <p className="eyebrow mb-5">Selected outcomes</p>
            <h2 className="headline-md">Behind the logos.</h2>
            <p className="text-sm text-foreground/35 mt-3 leading-relaxed">
              A few snapshots of how Enfactum has operated for brands across sectors.
            </p>
          </div>
        </RevealSection>

        {/* 2 dominant snapshots */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {outcomeCapsules.filter(c => c.featured).map((capsule, i) => (
            <RevealSection key={i} delay={i * 0.1} blur>
              <div className="relative p-8 md:p-10 rounded-sm border border-border/10 bg-background/30 backdrop-blur-sm h-full group hover:border-primary/15 transition-all duration-500">
                {/* Top meta */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[9px] tracking-[0.25em] text-primary/40 uppercase">
                    {capsule.label}
                  </span>
                </div>
                {/* Brand name — monumental */}
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5 group-hover:text-primary/90 transition-colors duration-300">
                  {capsule.brand}
                </h3>
                {/* Outcome */}
                <p className="text-sm text-foreground/40 leading-relaxed max-w-md">
                  {capsule.outcome}
                </p>
                {/* Bottom accent */}
                <div className="mt-8 h-px w-16 bg-gradient-to-r from-primary/20 to-transparent group-hover:w-24 transition-all duration-500" />
              </div>
            </RevealSection>
          ))}
        </div>

        {/* 2 supporting snapshots — compact */}
        <div className="grid md:grid-cols-2 gap-6">
          {outcomeCapsules.filter(c => !c.featured).map((capsule, i) => (
            <RevealSection key={i} delay={0.2 + i * 0.1} blur>
              <div className="relative py-6 px-0 border-t border-border/10 group">
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary/80 transition-colors duration-300">
                      {capsule.brand}
                    </h3>
                    <span className="text-[9px] tracking-[0.2em] text-primary/30 uppercase block mt-1">
                      {capsule.label}
                    </span>
                  </div>
                  <p className="text-[13px] text-foreground/30 leading-relaxed flex-1">
                    {capsule.outcome}
                  </p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 5 — BRIDGE ═══ */}
    <section className="py-20 md:py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />
      <div className="section-container">
        <RevealSection>
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <p className="eyebrow mb-4">From breadth to depth</p>
              <h2 className="headline-md max-w-xl">
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
          <div className="border-t border-border/15 pt-10 mt-14">
            <div className="flex flex-wrap gap-x-12 gap-y-4">
              {[
                { label: "Capabilities", href: "/capabilities" },
                { label: "Partnership models", href: "/partnerships" },
                { label: "Our thinking", href: "/thinking" },
              ].map((link) => (
                <Link key={link.href} to={link.href} className="group inline-flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground/50 group-hover:text-primary transition-colors duration-300">{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-foreground/20 group-hover:text-primary/60 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>

    {/* ═══ CTA ═══ */}
    <CTABand
      headline="Looking for a partner that understands the region from multiple angles?"
      description="Let's talk about what growth needs to move next."
      primaryLabel="Start a conversation"
    />
  </PageLayout>
);

export default Brands;
