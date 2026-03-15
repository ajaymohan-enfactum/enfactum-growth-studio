import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import BrandLogo from "@/components/shared/BrandLogo";
import SEOHead from "@/components/shared/SEOHead";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sectorClusters, type BrandEntry } from "@/data/brands";
import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════
   SELECTED OUTCOMES
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
   BRAND PLATE — elevated dark capsule with logo
   ═══════════════════════════════════════════════ */
const BrandPlate = ({
  brand,
  size = "md",
  delay = 0,
  heightOverride,
}: {
  brand: BrandEntry;
  size?: "lg" | "md" | "sm";
  delay?: number;
  heightOverride?: number;
}) => {
  const heights = { lg: 36, md: 26, sm: 20 };
  const paddings = { lg: "px-7 py-5", md: "px-5 py-4", sm: "px-4 py-3" };
  const h = heightOverride ?? heights[size];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${paddings[size]} rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-primary/20 hover:bg-white/[0.05] transition-all duration-500 cursor-default`}
    >
      <BrandLogo
        name={brand.name}
        domain={brand.domain}
        localLogo={brand.localLogo}
        height={h}
      />
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════
   SECTOR HEADER
   ═══════════════════════════════════════════════ */
const SectorHeader = ({
  num,
  title,
  descriptor,
  narrative,
  align = "left",
}: {
  num: string;
  title: string;
  descriptor: string;
  narrative: string;
  align?: "left" | "center" | "right";
}) => {
  const alignClass = align === "center" ? "text-center mx-auto" : align === "right" ? "md:text-right md:ml-auto" : "";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`max-w-lg ${alignClass} mb-14 md:mb-20`}
    >
      <span className="text-[80px] md:text-[120px] font-display font-bold text-foreground/[0.025] leading-none select-none block">
        {num}
      </span>
      <div className="mt-[-12px] md:mt-[-20px]">
        <h3 className="text-[clamp(1.5rem,2.8vw,2.5rem)] font-display font-bold text-foreground leading-[1.08] tracking-[-0.025em]">
          {title}
        </h3>
        <p className="text-[11px] uppercase tracking-[0.25em] text-primary/40 font-body mt-2.5">
          {descriptor}
        </p>
        <p className="text-[13px] text-foreground/30 leading-[1.8] font-body mt-5">
          {narrative}
        </p>
      </div>
    </motion.div>
  );
};

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

          {/* Row 1 — flagship brands, larger */}
          <div className="flex flex-wrap gap-4 md:gap-5 mb-5">
            {c01.brands.slice(0, 3).map((brand, i) => (
              <BrandPlate key={brand.name} brand={brand} size="lg" delay={0.1 + i * 0.08} heightOverride={72} />
            ))}
          </div>
          {/* Row 2 — mid tier */}
          <div className="flex flex-wrap gap-4 md:gap-5 mb-5 md:pl-6">
            {c01.brands.slice(3, 7).map((brand, i) => (
              <BrandPlate key={brand.name} brand={brand} size="md" delay={0.3 + i * 0.06} heightOverride={52} />
            ))}
          </div>
          {/* Row 3 — supporting */}
          <div className="flex flex-wrap gap-3 md:gap-4 md:pl-2">
            {c01.brands.slice(7).map((brand, i) => (
              <BrandPlate key={brand.name} brand={brand} size="sm" delay={0.5 + i * 0.05} heightOverride={40} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTOR 02 — Consumer & Brand Growth ── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="section-container relative z-10">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Logos */}
            <div className="md:col-span-7 md:order-1">
              <div className="flex flex-wrap gap-4 md:gap-5 mb-5">
                {c02.brands.slice(0, 2).map((brand, i) => (
                  <BrandPlate key={brand.name} brand={brand} size="lg" delay={0.1 + i * 0.1} />
                ))}
              </div>
              <div className="flex flex-wrap gap-4 md:gap-5">
                {c02.brands.slice(2).map((brand, i) => (
                  <BrandPlate key={brand.name} brand={brand} size="md" delay={0.3 + i * 0.08} />
                ))}
              </div>
            </div>

            {/* Copy */}
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
              <BrandPlate key={brand.name} brand={brand} size="lg" delay={0.15 + i * 0.1} />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {c03.brands.slice(3).map((brand, i) => (
              <BrandPlate key={brand.name} brand={brand} size="md" delay={0.4 + i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTOR 04 — New Economy & Innovation ── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="section-container relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* Copy */}
            <div className="md:col-span-4 md:sticky md:top-36">
              <SectorHeader
                num="04"
                title={c04.sector}
                descriptor="Emergent · Innovation-led · Future-facing"
                narrative={c04.narrative}
              />
            </div>

            {/* Logos */}
            <div className="md:col-span-7 md:col-start-6">
              <div className="flex flex-wrap gap-4 md:gap-5 mb-5">
                {c04.brands.slice(0, 2).map((brand, i) => (
                  <BrandPlate key={brand.name} brand={brand} size="lg" delay={0.1 + i * 0.1} heightOverride={324} />
                ))}
              </div>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {c04.brands.slice(2).map((brand, i) => (
                  <BrandPlate key={brand.name} brand={brand} size="md" delay={0.3 + i * 0.08} heightOverride={234} />
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

          {/* Featured outcomes */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
            {outcomeCapsules.filter(c => c.featured).map((capsule, i) => (
              <RevealSection key={i} delay={i * 0.12} blur>
                <div className="group relative rounded-xl border border-white/[0.05] bg-white/[0.02] p-8 md:p-10 hover:border-primary/15 transition-all duration-700 h-full flex flex-col justify-between">
                  <span className="absolute top-6 right-8 text-[100px] font-display font-bold text-foreground/[0.02] leading-none select-none pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] font-display font-bold text-foreground leading-[1.08] tracking-[-0.02em] mb-2">
                      {capsule.brand}
                    </h3>
                    <span className="text-[10px] tracking-[0.2em] text-primary/40 uppercase font-body">
                      {capsule.label}
                    </span>
                    <p className="text-[14px] text-foreground/35 leading-[1.8] font-body mt-6">
                      {capsule.outcome}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2">
                    <div className="w-6 h-px bg-primary/20 group-hover:w-10 transition-all duration-500" />
                    <span className="text-[10px] text-primary/30 uppercase tracking-[0.15em] font-body">Case outcome</span>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Supporting outcomes */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {outcomeCapsules.filter(c => !c.featured).map((capsule, i) => (
              <RevealSection key={i} delay={0.3 + i * 0.08} blur>
                <div className="group rounded-xl border border-white/[0.04] bg-white/[0.01] p-6 md:p-8 hover:border-primary/10 transition-all duration-700">
                  <div className="flex items-baseline gap-4 mb-4">
                    <h4 className="text-lg font-display font-bold text-foreground leading-tight">{capsule.brand}</h4>
                    <span className="text-[9px] text-primary/25 uppercase tracking-[0.15em] font-body">{capsule.label}</span>
                  </div>
                  <p className="text-[13px] text-foreground/25 leading-[1.7] font-body">{capsule.outcome}</p>
                </div>
              </RevealSection>
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
