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
import { sectorClusters, type SectorCluster, type BrandEntry } from "@/data/brands";
import { motion, useInView } from "framer-motion";

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
   SECTOR CLUSTER — living layout
   ═══════════════════════════════════════════════ */
const sectorMeta: Record<string, { accent: string; descriptor: string }> = {
  "Enterprise Technology": {
    accent: "from-primary/8 via-primary/3 to-transparent",
    descriptor: "Structured. Platform-led. Systemic.",
  },
  "Consumer & Brand Growth": {
    accent: "from-cyan-500/6 via-cyan-500/2 to-transparent",
    descriptor: "Fluid. Brand-led. Activation-oriented.",
  },
  "Institutions & Ecosystems": {
    accent: "from-indigo-400/6 via-indigo-400/2 to-transparent",
    descriptor: "Stable. Networked. Trust-based.",
  },
  "New Economy & Innovation": {
    accent: "from-violet-400/6 via-violet-400/2 to-transparent",
    descriptor: "Emergent. Innovation-led. Future-facing.",
  },
};

/* ─── BRAND NODE ─── */
const BrandNode = ({
  brand,
  size = "md",
  delay = 0,
}: {
  brand: BrandEntry;
  size?: "lg" | "md" | "sm";
  delay?: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const dims = { lg: { h: 36, pad: "px-7 py-5" }, md: { h: 26, pad: "px-5 py-4" }, sm: { h: 20, pad: "px-4 py-3" } };
  const d = dims[size];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex items-center justify-center ${d.pad} rounded-xl
        border border-white/[0.04] bg-white/[0.015]
        hover:border-primary/20 hover:bg-white/[0.035]
        transition-all duration-700 cursor-default`}
    >
      {/* Glow ring on hover */}
      <div
        className="absolute inset-0 rounded-xl transition-opacity duration-700 pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          boxShadow: "0 0 30px -8px hsl(210 100% 50% / 0.12), inset 0 0 20px -10px hsl(210 100% 50% / 0.06)",
        }}
      />
      <BrandLogo
        name={brand.name}
        domain={brand.domain}
        localLogo={brand.localLogo}
        height={d.h}
        opacity={0.45}
        hoverOpacity={0.9}
        scaleOnHover
      />
    </motion.div>
  );
};

/* ─── SECTOR FIELD ─── */
const SectorField = ({
  cluster,
  index,
  reverse = false,
}: {
  cluster: SectorCluster;
  index: number;
  reverse?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const meta = sectorMeta[cluster.sector] || { accent: "from-primary/6 to-transparent", descriptor: "" };

  // Create size hierarchy — first 3 brands get "lg", next 3 "md", rest "sm"
  const getSize = (i: number): "lg" | "md" | "sm" => {
    if (i < 2) return "lg";
    if (i < 5) return "md";
    return "sm";
  };

  return (
    <div ref={ref} className="relative">
      {/* Atmospheric gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${meta.accent} rounded-3xl opacity-0 transition-opacity duration-1000 ${isInView ? "opacity-100" : ""}`} />

      <div className={`relative grid md:grid-cols-12 gap-8 md:gap-12 items-start ${reverse ? "" : ""}`}>
        {/* Copy side */}
        <div className={`${reverse ? "md:col-span-4 md:col-start-9 md:order-2" : "md:col-span-4"} sticky top-32`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-[64px] md:text-[80px] font-display font-bold text-foreground/[0.03] leading-none select-none">
                {cluster.num}
              </span>
            </div>
            <h3 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-display font-bold text-foreground leading-[1.08] tracking-[-0.02em]">
              {cluster.sector}
            </h3>
            <p className="text-[11px] uppercase tracking-[0.2em] text-primary/40 font-body mt-3">
              {meta.descriptor}
            </p>
            <p className="text-[13px] text-foreground/25 leading-[1.8] mt-5 max-w-sm font-body">
              {cluster.narrative}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-8 h-px bg-primary/20" />
              <span className="text-[11px] text-foreground/15 font-body">{cluster.brands.length} brands</span>
            </div>
          </motion.div>
        </div>

        {/* Logo constellation */}
        <div className={`${reverse ? "md:col-span-7 md:order-1" : "md:col-span-7 md:col-start-6"}`}>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {cluster.brands.map((brand, bi) => (
              <BrandNode
                key={brand.name}
                brand={brand}
                size={getSize(bi)}
                delay={bi * 0.08}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
const Brands = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const heroFieldRef = useRef<HTMLDivElement>(null);

  const handleHeroMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroFieldRef.current) return;
    const rect = heroFieldRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <PageLayout>
      <SEOHead
        title="Brands & Clients — Enterprise Credibility Across Southeast Asia"
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

      {/* ═══ LIVING SECTOR ARCHITECTURE ═══ */}
      <section className="relative">
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/[0.08] to-transparent" />

        {/* Brand universe ambient field */}
        <div
          ref={heroFieldRef}
          onMouseMove={handleHeroMouseMove}
          className="relative"
        >
          {/* Cursor glow for the whole sector region */}
          <div
            className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-1000"
            style={{
              opacity: 0.5,
              background: `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, hsl(210 100% 50% / 0.03), transparent 60%)`,
            }}
          />

          {/* Sector 01 — Enterprise Technology */}
          <div className="py-24 md:py-32 bg-[#070D1A] relative overflow-hidden">
            {/* Architectural grid lines */}
            <div className="absolute top-0 bottom-0 left-[20%] w-px bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent hidden md:block" />
            <div className="absolute top-0 bottom-0 right-[20%] w-px bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent hidden md:block" />
            <div className="section-container relative z-10">
              <SectorField cluster={sectorClusters[0]} index={0} />
            </div>
          </div>

          {/* Sector 02 — Consumer & Brand Growth */}
          <div className="py-24 md:py-32 relative overflow-hidden">
            <div className="section-container relative z-10">
              <SectorField cluster={sectorClusters[1]} index={1} reverse />
            </div>
          </div>

          {/* Sector 03 — Institutions & Ecosystems */}
          <div className="py-24 md:py-32 bg-[#080E1C] relative overflow-hidden">
            <div className="absolute left-0 right-0 top-[40%] h-px bg-gradient-to-r from-transparent via-primary/[0.02] to-transparent hidden md:block" />
            <div className="section-container relative z-10">
              <SectorField cluster={sectorClusters[2]} index={2} />
            </div>
          </div>

          {/* Sector 04 — New Economy & Innovation */}
          <div className="py-24 md:py-32 relative overflow-hidden">
            <div className="section-container relative z-10">
              <SectorField cluster={sectorClusters[3]} index={3} reverse />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BEHIND THE LOGOS ═══ */}
      <section className="py-28 md:py-36 relative bg-[#060B18]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/[0.08] to-transparent" />
        {/* Atmospheric grid */}
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

          {/* Featured outcomes — large editorial panels */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
            {outcomeCapsules.filter(c => c.featured).map((capsule, i) => (
              <RevealSection key={i} delay={i * 0.12} blur>
                <div className="group relative rounded-2xl border border-white/[0.04] bg-white/[0.015] p-8 md:p-10 hover:border-primary/15 transition-all duration-700 h-full flex flex-col justify-between">
                  {/* Background number */}
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

          {/* Supporting outcomes — compact row */}
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
