import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import ParallaxDivider from "@/components/shared/ParallaxDivider";
import CTABand from "@/components/shared/CTABand";
import BrandLogo from "@/components/shared/BrandLogo";
import SEOHead from "@/components/shared/SEOHead";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sectorClusters } from "@/data/brands";

/* ═══════════════════════════════════════════════
   SELECTED OUTCOMES
   ═══════════════════════════════════════════════ */
const outcomeCapsules = [
  {
    brand: "HP",
    label: "AI Ecosystems / Growth Infrastructure",
    outcome: "Built regional innovation and ecosystem architecture across multiple markets and business units — from AI incubation to SMB pipeline to large format product launches.",
  },
  {
    brand: "The Economist",
    label: "Growth Infrastructure / Build-Operate-Transfer",
    outcome: "Created an embedded build-operate-transfer model that delivered 47% cost savings, 50% agency fee reduction, and exceeded revenue expectations within two quarters.",
  },
  {
    brand: "JSHealth Vitamins",
    label: "Brand & Demand / Affiliate",
    outcome: "Built a performance-led affiliate and demand engine delivering +411% ROAS and +311% ROI through 190+ partnership channels across AU, EU, UK & US.",
  },
  {
    brand: "Brands For Less",
    label: "Growth Infrastructure / Market Entry",
    outcome: "Transformed digital acquisition channels to drive +42% site traffic uplift, strengthening competitive position in online retail.",
  },
];

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
const Brands = () => (
  <PageLayout>
    <SEOHead
      title="Brands — Enterprise Experience Across Southeast Asia"
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
    <section className="py-16 md:py-20">
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

    <ParallaxDivider variant="gradient" />

    {/* ═══ SECTION 3 — SECTOR LOGO GRID ═══ */}
    <section className="section-alt py-16 md:py-20">
      <div className="section-container">
        <SectionHeader
          eyebrow="Experience"
          headline="A portfolio that reflects the region's real complexity."
          description="From enterprise platforms to consumer brands and innovation-led companies, Enfactum has built experience across the environments that move Southeast Asia."
        />

        <div className="mt-24 space-y-0">
          {sectorClusters.map((cluster, ci) => (
            <RevealSection key={ci} delay={ci * 0.06} scale>
              <div className="border-t border-border/30 py-14 md:py-16">
                <div className="grid md:grid-cols-12 gap-8">
                  {/* Left — Cluster label */}
                  <div className="md:col-span-4">
                    <span className="text-[10px] font-body text-dim block mb-3">{cluster.num}</span>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight">
                      {cluster.sector}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed mt-4 max-w-xs">
                      {cluster.narrative}
                    </p>
                  </div>

                  {/* Right — Logo grid */}
                  <div className="md:col-span-7 md:col-start-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {cluster.brands.map((brand, bi) => (
                        <div
                          key={bi}
                          className="group flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 p-6 transition-all duration-300 hover:border-white/20"
                        >
                          <BrandLogo
                            name={brand.name}
                            domain={brand.domain}
                            localLogo={brand.localLogo}
                            height={36}
                            opacity={0.6}
                            hoverOpacity={1.0}
                            scaleOnHover
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    <ParallaxDivider variant="mist" />

    {/* ═══ SECTION 4 — SELECTED OUTCOMES ═══ */}
    <section className="py-32 md:py-44">
      <div className="section-container">
        <div className="section-divider mb-20" />
        <SectionHeader
          eyebrow="Selected outcomes"
          headline="Behind the logos."
          description="A few snapshots of how Enfactum has operated for brands across sectors."
        />

        <div className="mt-20 grid sm:grid-cols-2 gap-8">
          {outcomeCapsules.map((capsule, i) => (
            <RevealSection key={i} delay={i * 0.08} blur>
              <div className="card-premium h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  <span className="text-[10px] text-dim uppercase tracking-[0.15em] font-body">
                    {capsule.label}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {capsule.brand}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  {capsule.outcome}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    <ParallaxDivider variant="glow" flip />

    {/* ═══ SECTION 5 — BRIDGE TO WORK + CROSS-LINKS ═══ */}
    <section className="section-alt py-24 md:py-32">
      <div className="section-container">
        <RevealSection>
          <div className="grid md:grid-cols-12 gap-8 items-center mb-16">
            <div className="md:col-span-7">
              <p className="eyebrow mb-4">From breadth to depth</p>
              <h2 className="headline-md max-w-xl">
                Behind every logo is a different challenge, market context, and operating model.
              </h2>
              <p className="body-md text-muted-foreground mt-4 max-w-lg">
                Explore the selected work behind the brands to see how Enfactum turns sector experience into measurable outcomes.
              </p>
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
          <div className="border-t border-border/30 pt-10">
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/capabilities" className="group block">
                <p className="text-[10px] text-dim uppercase tracking-wider font-body mb-1">Related</p>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Explore capabilities →</span>
              </Link>
              <Link to="/partnerships" className="group block">
                <p className="text-[10px] text-dim uppercase tracking-wider font-body mb-1">Related</p>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Partnership models →</span>
              </Link>
              <Link to="/thinking" className="group block">
                <p className="text-[10px] text-dim uppercase tracking-wider font-body mb-1">Related</p>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Read our thinking →</span>
              </Link>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>

    {/* ═══ SECTION 6 — CTA ═══ */}
    <CTABand
      headline="Looking for a partner that understands the region from multiple angles?"
      description="Let's talk about what growth needs to move next."
      primaryLabel="Start a conversation"
    />
  </PageLayout>
);

export default Brands;
