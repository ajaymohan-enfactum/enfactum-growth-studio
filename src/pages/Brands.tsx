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

    {/* ═══ SECTOR CLUSTERS — varied editorial composition ═══ */}
    <section className="relative">
      <div className="h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />

      {/* ── CLUSTER 01 — Enterprise Technology (hero scale) ── */}
      {sectorClusters.length > 0 && (() => {
        const hero = sectorClusters[0];
        return (
          <div className="bg-[#080E1A] py-28 md:py-36 relative overflow-hidden">
            <div className="absolute top-0 bottom-0 right-[28%] w-px bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent hidden md:block" />
            {/* Faint sector watermark */}
            <span className="absolute top-8 right-8 text-[120px] md:text-[180px] font-display font-bold text-foreground/[0.015] leading-none select-none pointer-events-none hidden md:block">
              {hero.num}
            </span>

            <div className="section-container relative z-10">
              <RevealSection blur>
                <div className="mb-16 max-w-lg">
                  <span className="text-[10px] tracking-[0.3em] text-primary/40 uppercase font-body block mb-4">Sector {hero.num}</span>
                  <h3 className="text-[clamp(2rem,3.5vw,3rem)] font-display font-bold text-foreground leading-[1.08] tracking-[-0.02em]">
                    {hero.sector}
                  </h3>
                  <p className="text-[13px] text-foreground/25 leading-[1.8] mt-5 max-w-md font-body">
                    {hero.narrative}
                  </p>
                </div>
              </RevealSection>

              {/* Logos — staggered organic grid */}
              <RevealSection delay={0.15} blur>
                <div className="flex flex-wrap items-center gap-4">
                  {hero.brands.map((brand, bi) => (
                    <div
                      key={bi}
                      className="group flex items-center justify-center rounded-sm bg-white/[0.025] border border-white/[0.04] transition-all duration-500 hover:border-primary/12 hover:bg-white/[0.04]"
                      style={{
                        padding: bi < 4 ? '1.5rem 2rem' : '1rem 1.5rem',
                      }}
                    >
                      <BrandLogo
                        name={brand.name}
                        domain={brand.domain}
                        localLogo={brand.localLogo}
                        height={bi < 4 ? 32 : 24}
                        opacity={bi < 4 ? 0.5 : 0.35}
                        hoverOpacity={0.85}
                        scaleOnHover
                      />
                    </div>
                  ))}
                </div>
              </RevealSection>
            </div>
          </div>
        );
      })()}

      {/* ── CLUSTER 02 — Consumer & Brand Growth (split editorial) ── */}
      {sectorClusters.length > 1 && (() => {
        const cluster = sectorClusters[1];
        return (
          <div className="py-24 md:py-32">
            <div className="section-container">
              <RevealSection blur>
                <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
                  <div className="md:col-span-5">
                    <span className="text-[10px] tracking-[0.3em] text-primary/30 uppercase font-body block mb-3">Sector {cluster.num}</span>
                    <h3 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-display font-bold text-foreground leading-[1.12] tracking-[-0.01em]">
                      {cluster.sector}
                    </h3>
                    <p className="text-[13px] text-foreground/25 leading-[1.8] mt-4 max-w-sm font-body">
                      {cluster.narrative}
                    </p>
                  </div>
                  <div className="md:col-span-6 md:col-start-7">
                    {/* Vertical stacked brand entries — editorial list */}
                    <div className="space-y-0">
                      {cluster.brands.map((brand, bi) => (
                        <div key={bi} className="group flex items-center gap-5 py-5 border-b border-border/8 last:border-0">
                          <div className="shrink-0 w-20 flex justify-center">
                            <BrandLogo
                              name={brand.name}
                              domain={brand.domain}
                              localLogo={brand.localLogo}
                              height={22}
                              opacity={0.4}
                              hoverOpacity={0.8}
                              scaleOnHover
                            />
                          </div>
                          <span className="text-[13px] text-foreground/30 font-body group-hover:text-foreground/50 transition-colors duration-500">
                            {brand.name}
                          </span>
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

      {/* ── CLUSTERS 03 & 04 — side-by-side compact sectors ── */}
      {sectorClusters.length > 2 && (
        <div className="py-24 md:py-32 bg-[#0B1121]">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-16 md:gap-20">
              {sectorClusters.slice(2).map((cluster, ci) => (
                <RevealSection key={ci} delay={ci * 0.1} blur>
                  <div>
                    <span className="text-[10px] tracking-[0.3em] text-primary/25 uppercase font-body block mb-3">Sector {cluster.num}</span>
                    <h3 className="text-xl font-display font-bold text-foreground leading-tight">
                      {cluster.sector}
                    </h3>
                    <p className="text-[12px] text-foreground/20 leading-[1.8] mt-3 max-w-xs font-body">
                      {cluster.narrative}
                    </p>

                    {/* Brand names as flowing text with logo inline */}
                    <div className="mt-8 space-y-0">
                      {cluster.brands.map((brand, bi) => (
                        <div key={bi} className="group flex items-center gap-4 py-3 border-t border-foreground/[0.04] first:border-0">
                          <div className="shrink-0 w-14 flex justify-center">
                            <BrandLogo
                              name={brand.name}
                              domain={brand.domain}
                              localLogo={brand.localLogo}
                              height={18}
                              opacity={0.3}
                              hoverOpacity={0.7}
                              scaleOnHover
                            />
                          </div>
                          <span className="text-[12px] text-foreground/20 font-body group-hover:text-foreground/40 transition-colors duration-500">
                            {brand.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>

    {/* ═══ BEHIND THE LOGOS ═══ */}
    <section className="py-28 md:py-36 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/[0.06] to-transparent" />
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-6">
            <RevealSection blur>
              <p className="eyebrow mb-6">Selected outcomes</p>
              <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
                Behind the logos.
              </h2>
              <p className="text-[13px] text-foreground/25 mt-4 leading-relaxed font-body max-w-md">
                A few snapshots of how Enfactum has operated for brands across sectors.
              </p>
            </RevealSection>
          </div>
        </div>

        {/* Dominant snapshots — editorial spread */}
        {outcomeCapsules.filter(c => c.featured).map((capsule, i) => (
          <RevealSection key={i} delay={i * 0.1} blur>
            <div className={`grid md:grid-cols-12 gap-8 py-12 ${i > 0 ? 'border-t border-border/8' : ''}`}>
              <div className="md:col-span-4">
                <h3 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.01em]">
                  {capsule.brand}
                </h3>
                <span className="text-[10px] tracking-[0.2em] text-primary/30 uppercase font-body block mt-2">
                  {capsule.label}
                </span>
              </div>
              <div className="md:col-span-7 md:col-start-6 flex items-center">
                <p className="text-[14px] text-foreground/35 leading-[1.8] font-body">
                  {capsule.outcome}
                </p>
              </div>
            </div>
          </RevealSection>
        ))}

        {/* Supporting snapshots — compact */}
        <div className="border-t border-border/8 mt-4">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
            {outcomeCapsules.filter(c => !c.featured).map((capsule, i) => (
              <RevealSection key={i} delay={0.25 + i * 0.08} blur>
                <div className="py-8 border-t border-border/6 first:border-0 md:first:border-t">
                  <div className="flex items-start gap-4">
                    <span className="text-lg font-display font-bold text-foreground/60 shrink-0">{capsule.brand}</span>
                  </div>
                  <p className="text-[12px] text-foreground/20 mt-3 leading-relaxed font-body">{capsule.outcome}</p>
                  <span className="text-[9px] text-primary/20 uppercase tracking-[0.15em] font-body block mt-3">{capsule.label}</span>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ═══ BRIDGE ═══ */}
    <section className="py-20 md:py-24 bg-[hsl(var(--section-alt))]">
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

export default Brands;
