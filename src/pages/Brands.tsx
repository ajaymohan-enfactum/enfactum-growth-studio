import { Link } from "react-router-dom";
import { useRef, useState, useCallback } from "react";
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
   FLOATING BRAND — no border, no box, just logo
   ═══════════════════════════════════════════════ */
const FloatingBrand = ({
  brand,
  size = "md",
  delay = 0,
  drift = 0,
}: {
  brand: BrandEntry;
  size?: "hero" | "lg" | "md" | "sm";
  delay?: number;
  drift?: number;
}) => {
  const heights = { hero: 44, lg: 32, md: 24, sm: 18 };
  const h = heights[size];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 + drift }}
      whileInView={{ opacity: 1, y: drift }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: drift - 4 }}
      className="group relative cursor-default"
    >
      {/* Subtle glow halo behind logo on hover */}
      <div className="absolute inset-0 -m-4 rounded-full bg-primary/0 group-hover:bg-primary/[0.04] transition-all duration-700 blur-xl pointer-events-none" />
      <BrandLogo
        name={brand.name}
        domain={brand.domain}
        localLogo={brand.localLogo}
        height={h}
        opacity={size === "hero" ? 0.55 : size === "lg" ? 0.4 : size === "md" ? 0.3 : 0.2}
        hoverOpacity={0.9}
        scaleOnHover
      />
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
const Brands = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const fieldRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!fieldRef.current) return;
    const rect = fieldRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const c01 = sectorClusters[0]; // Enterprise Technology
  const c02 = sectorClusters[1]; // Consumer & Brand Growth
  const c03 = sectorClusters[2]; // Institutions & Ecosystems
  const c04 = sectorClusters[3]; // New Economy & Innovation

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

      {/* ═══ LIVING SECTOR CONSTELLATIONS ═══ */}
      <div
        ref={fieldRef}
        onMouseMove={handleMouseMove}
        className="relative"
      >
        {/* Ambient cursor glow */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-1000"
          style={{
            opacity: 0.4,
            background: `radial-gradient(700px circle at ${cursorPos.x}px ${cursorPos.y}px, hsl(210 100% 50% / 0.025), transparent 60%)`,
          }}
        />

        {/* ── SECTOR 01 — Enterprise Technology ── */}
        <section className="relative py-32 md:py-44 bg-[#070D1A] overflow-hidden">
          {/* Faint architectural grid */}
          <div className="absolute top-0 bottom-0 left-[18%] w-px bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent hidden md:block" />
          <div className="absolute top-0 bottom-0 right-[22%] w-px bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent hidden md:block" />
          <div className="absolute left-0 right-0 top-[55%] h-px bg-gradient-to-r from-transparent via-primary/[0.01] to-transparent hidden md:block" />

          <div className="section-container relative z-10">
            {/* Sector label — enormous, atmospheric */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="mb-20 md:mb-28"
            >
              <span className="text-[120px] md:text-[200px] font-display font-bold text-foreground/[0.018] leading-none select-none block">
                01
              </span>
              <div className="mt-[-20px] md:mt-[-40px]">
                <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-display font-bold text-foreground leading-[1.05] tracking-[-0.03em]">
                  {c01.sector}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.25em] text-primary/30 font-body mt-3">
                  Structured · Platform-led · Systemic
                </p>
              </div>
            </motion.div>

            {/* Constellation — scattered, not gridded */}
            <div className="relative">
              {/* Row 1 — hero scale, wide spacing */}
              <div className="flex items-end gap-12 md:gap-20 mb-12 md:mb-16">
                <FloatingBrand brand={c01.brands[0]} size="hero" delay={0.1} />
                <FloatingBrand brand={c01.brands[1]} size="hero" delay={0.2} drift={-8} />
                <div className="hidden md:block">
                  <FloatingBrand brand={c01.brands[2]} size="lg" delay={0.3} drift={4} />
                </div>
              </div>

              {/* Row 2 — offset, mixed sizes */}
              <div className="flex items-center gap-10 md:gap-16 md:pl-24 mb-10 md:mb-14">
                <div className="md:hidden">
                  <FloatingBrand brand={c01.brands[2]} size="lg" delay={0.3} />
                </div>
                <FloatingBrand brand={c01.brands[3]} size="lg" delay={0.35} drift={-4} />
                <FloatingBrand brand={c01.brands[4]} size="md" delay={0.4} drift={6} />
                <FloatingBrand brand={c01.brands[5]} size="md" delay={0.45} />
              </div>

              {/* Row 3 — smaller, trailing off */}
              <div className="flex items-center gap-8 md:gap-14 md:pl-8">
                {c01.brands.slice(6).map((brand, i) => (
                  <FloatingBrand key={brand.name} brand={brand} size="sm" delay={0.5 + i * 0.06} drift={i % 2 === 0 ? 3 : -3} />
                ))}
              </div>
            </div>

            {/* Narrative — floats at bottom right */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[13px] text-foreground/20 leading-[1.8] font-body mt-16 md:mt-24 max-w-md md:ml-auto md:text-right"
            >
              {c01.narrative}
            </motion.p>
          </div>
        </section>

        {/* ── SECTOR 02 — Consumer & Brand Growth ── */}
        <section className="relative py-32 md:py-40 overflow-hidden">
          <div className="section-container relative z-10">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
              {/* Logos on the left — editorial vertical flow */}
              <div className="md:col-span-7 md:order-1">
                <div className="space-y-10 md:space-y-14">
                  {/* Hero brand — dominant */}
                  <div className="md:pl-8">
                    <FloatingBrand brand={c02.brands[0]} size="hero" delay={0.1} drift={-6} />
                  </div>
                  {/* Mid tier — staggered horizontal */}
                  <div className="flex items-end gap-10 md:gap-16 md:pl-20">
                    <FloatingBrand brand={c02.brands[1]} size="lg" delay={0.2} />
                    <FloatingBrand brand={c02.brands[2]} size="lg" delay={0.28} drift={8} />
                  </div>
                  {/* Supporting — smaller, offset */}
                  <div className="flex items-center gap-8 md:gap-12 md:pl-4">
                    {c02.brands.slice(3).map((brand, i) => (
                      <FloatingBrand key={brand.name} brand={brand} size="md" delay={0.35 + i * 0.08} drift={i % 2 === 0 ? -4 : 5} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Copy on the right */}
              <div className="md:col-span-4 md:col-start-9 md:order-2 md:sticky md:top-36">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-[80px] md:text-[120px] font-display font-bold text-foreground/[0.02] leading-none select-none block">
                    02
                  </span>
                  <h3 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-display font-bold text-foreground leading-[1.08] tracking-[-0.02em] mt-[-8px]">
                    {c02.sector}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-primary/30 font-body mt-3">
                    Fluid · Brand-led · Activation-oriented
                  </p>
                  <p className="text-[13px] text-foreground/20 leading-[1.8] font-body mt-5 max-w-sm">
                    {c02.narrative}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTOR 03 — Institutions & Ecosystems ── */}
        <section className="relative py-32 md:py-40 bg-[#080E1C] overflow-hidden">
          <div className="absolute left-0 right-0 top-[35%] h-px bg-gradient-to-r from-transparent via-primary/[0.015] to-transparent hidden md:block" />

          <div className="section-container relative z-10">
            {/* Copy centered, logos orbiting */}
            <div className="text-center max-w-lg mx-auto mb-20 md:mb-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-[80px] md:text-[140px] font-display font-bold text-foreground/[0.018] leading-none select-none block">
                  03
                </span>
                <h3 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-display font-bold text-foreground leading-[1.08] tracking-[-0.02em] mt-[-8px]">
                  {c03.sector}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.25em] text-primary/30 font-body mt-3">
                  Stable · Networked · Trust-based
                </p>
                <p className="text-[13px] text-foreground/20 leading-[1.8] font-body mt-5">
                  {c03.narrative}
                </p>
              </motion.div>
            </div>

            {/* Logos — dispersed around center, asymmetric */}
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
              <FloatingBrand brand={c03.brands[0]} size="hero" delay={0.15} drift={-6} />
              <FloatingBrand brand={c03.brands[1]} size="lg" delay={0.25} drift={10} />
              <FloatingBrand brand={c03.brands[2]} size="lg" delay={0.3} drift={-3} />
            </div>
            <div className="flex items-center justify-center gap-10 md:gap-16 mt-10 md:mt-14">
              {c03.brands.slice(3).map((brand, i) => (
                <FloatingBrand key={brand.name} brand={brand} size="md" delay={0.4 + i * 0.08} drift={i % 2 === 0 ? 5 : -5} />
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTOR 04 — New Economy & Innovation ── */}
        <section className="relative py-32 md:py-40 overflow-hidden">
          <div className="section-container relative z-10">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              {/* Copy left */}
              <div className="md:col-span-4 md:sticky md:top-36">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-[80px] md:text-[120px] font-display font-bold text-foreground/[0.02] leading-none select-none block">
                    04
                  </span>
                  <h3 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-display font-bold text-foreground leading-[1.08] tracking-[-0.02em] mt-[-8px]">
                    {c04.sector}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-primary/30 font-body mt-3">
                    Emergent · Innovation-led · Future-facing
                  </p>
                  <p className="text-[13px] text-foreground/20 leading-[1.8] font-body mt-5 max-w-sm">
                    {c04.narrative}
                  </p>
                </motion.div>
              </div>

              {/* Logos — ascending diagonal */}
              <div className="md:col-span-7 md:col-start-6">
                <div className="space-y-12 md:space-y-16">
                  <div className="md:pl-16">
                    <FloatingBrand brand={c04.brands[0]} size="lg" delay={0.1} drift={-8} />
                  </div>
                  <div className="flex items-end gap-10 md:gap-14 md:pl-4">
                    <FloatingBrand brand={c04.brands[1]} size="lg" delay={0.2} />
                    <FloatingBrand brand={c04.brands[2]} size="md" delay={0.28} drift={6} />
                  </div>
                  <div className="flex items-center gap-8 md:gap-12 md:pl-24">
                    {c04.brands.slice(3).map((brand, i) => (
                      <FloatingBrand key={brand.name} brand={brand} size="md" delay={0.35 + i * 0.08} drift={i % 2 === 0 ? -4 : 4} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ═══ BEHIND THE LOGOS ═══ */}
      <section className="py-28 md:py-36 relative bg-[#060B18]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/[0.08] to-transparent" />
        <div className="absolute top-0 bottom-0 left-[33%] w-px bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent hidden md:block" />
        <div className="absolute top-0 bottom-0 left-[66%] w-px bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent hidden md:block" />

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
                <div className="group relative rounded-2xl border border-white/[0.04] bg-white/[0.015] p-8 md:p-10 hover:border-primary/15 transition-all duration-700 h-full flex flex-col justify-between">
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
                <div className="group rounded-xl border border-white/[0.03] bg-white/[0.01] p-6 md:p-8 hover:border-primary/10 transition-all duration-700">
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
