import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useCallback, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/shared/MagneticButton";
import TextShimmer from "@/components/shared/TextShimmer";
import InsightTicker from "@/components/shared/InsightTicker";
import StickySectionLabel from "@/components/shared/StickySectionLabel";
import { ChevronDown } from "lucide-react";
import BrandLogo from "@/components/shared/BrandLogo";
import { sectorClusters as brandSectorClusters, allMarqueeBrands } from "@/data/brands";

import PageLayout from "@/components/layout/PageLayout";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import CTABand from "@/components/shared/CTABand";

import HybridBackground from "@/components/shared/HybridBackground";

import CaseCard from "@/components/shared/CaseCard";
import SEOHead, { organizationSchema, webSiteSchema } from "@/components/shared/SEOHead";
import { getFlagshipCases } from "@/data/caseStudies";
import { ArrowRight, Crosshair, Network, Unlink, FlaskConical, Rocket, BarChart3, Megaphone, Brain, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════════════
   SECTION 1 — HERO
   Full-viewport cinematic opening
   ═══════════════════════════════════════════════ */
const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse 120% 80% at 20% 50%, hsl(215 60% 8%) 0%, hsl(225 15% 8%) 40%, hsl(220 40% 6%) 70%, hsl(225 15% 8%) 100%)',
          backgroundSize: '200% 200%',
          animation: 'hero-gradient-shift 8s ease-in-out infinite alternate',
        }}
      />
      <HybridBackground />
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-700"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, hsl(210 100% 50% / 0.07), transparent 55%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="section-container relative z-10">
        {/* Eyebrow — appears first */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="eyebrow mb-8"
        >
          Growth &amp; Innovation Operating Partner · Southeast Asia
        </motion.p>

        {/* Headline — line-by-line stagger */}
        <h1 className="headline-display max-w-[18ch]">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease }}
          >
            Where strategy, ecosystems, and execution{" "}
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease }}
          >
            <TextShimmer><span className="text-primary">move together.</span></TextShimmer>
          </motion.span>
        </h1>


        {/* CTAs — slide up 300ms after subtext */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6, ease }}
          className="flex flex-col sm:flex-row gap-4 mt-14"
        >
          <Link to="/contact">
            <MagneticButton variant="hero" size="xl">Start a conversation</MagneticButton>
          </Link>
          <Link to="/work">
            <MagneticButton variant="hero-outline" size="xl">See our work</MagneticButton>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2, ease }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <ChevronDown
          className="w-5 h-5 text-primary/60"
          strokeWidth={1.5}
          style={{ animation: 'scroll-bounce 2s ease-in-out infinite' }}
        />
      </motion.div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 2 — WHY SOUTHEAST ASIA
   Editorial split with generous breathing room
   ═══════════════════════════════════════════════ */
const WhySEA = () => (
  <section id="why-sea" className="py-16 md:py-20 bg-[#080E1A]">
    <div className="section-container">
      <div className="grid md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-5">
          <RevealSection blur>
            <p className="eyebrow mb-6">Why Southeast Asia moves differently</p>
            <h2 className="headline-lg">
              Not one market.<br />
              An interconnected web of ecosystems.
            </h2>
          </RevealSection>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <RevealSection delay={0.15} blur>
            <div className="space-y-6">
              <p className="body-lg">
                Southeast Asia is nearly 700 million people across diverse economies,
                languages, and regulatory environments — bound together by trade
                corridors, digital infrastructure, and rapidly evolving consumer
                behaviour.
              </p>
              <p className="body-lg">
                Growth here moves through ecosystems, local trust, and execution
                nuance.
              </p>
              <div className="pt-4">
                <div className="h-px w-20 bg-primary/30" />
              </div>
              <p className="body-md text-muted-foreground italic">
                Enfactum exists because the gap between global ambition and
                regional reality needed a Growth Architect — not another advisor.
              </p>
            </div>
          </RevealSection>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 3 — WHERE GROWTH BREAKS
   Restrained problem framing
   ═══════════════════════════════════════════════ */
const frictionPoints = [
  { title: "Strategy-execution gap", body: "Brilliant plans that die in local implementation.", icon: Crosshair },
  { title: "Ecosystem underbuilt", body: "Partners and channels without structure or activation.", icon: Network },
  { title: "Brand-demand disconnect", body: "Creative that doesn't connect to commercial outcomes.", icon: Unlink },
  { title: "Innovation in pilot limbo", body: "AI and ventures stuck between demo and scale.", icon: FlaskConical },
  { title: "Launch without momentum", body: "Events and activations without lasting market impact.", icon: Rocket },
];

const GrowthBreaks = () => (
  <section id="growth-breaks" className="py-16 md:py-20">
    <div className="section-container">
      <div className="section-divider mb-12" />
      <SectionHeader
        eyebrow="Where growth breaks"
        headline="The friction points we're built to solve."
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {frictionPoints.map((point, i) => (
          <RevealSection
            key={i}
            delay={i * 0.1}
            blur
            className={i >= 3 ? "sm:col-span-1" : ""}
          >
            <div className="h-full rounded-xl bg-white/[0.05] border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(37,99,235,0.15)] group/card">
              <point.icon className="w-5 h-5 text-primary/70 mb-5 transition-transform duration-300 group-hover/card:scale-110" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-semibold text-foreground leading-snug">
                {point.title}
              </h3>
              <p className="body-md mt-3 text-muted-foreground">{point.body}</p>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 4 — WHAT ENFACTUM BUILDS
   Capability cards with editorial spacing
   ═══════════════════════════════════════════════ */
const capabilities = [
  {
    title: "Growth Infrastructure",
    desc: "GTM strategy, partner programs, and demand operations that build lasting market position.",
    outcome: "Scalable go-to-market architecture",
    href: "/capabilities/growth-infrastructure",
    num: "01",
    icon: BarChart3,
  },
  {
    title: "Brand & Demand",
    desc: "Performance, social, creative, and digital experiences that connect brand to commercial outcomes.",
    outcome: "Integrated demand generation",
    href: "/capabilities/brand-demand",
    num: "02",
    icon: Megaphone,
  },
  {
    title: "AI Ecosystems",
    desc: "Venture strategy, startup scouting, and innovation programs that move beyond pilot stage.",
    outcome: "Ecosystem-scale innovation",
    href: "/capabilities/ai-ecosystems",
    num: "03",
    icon: Brain,
  },
  {
    title: "Live Experiences",
    desc: "Product launches, summits, roadshows, and activations that create market momentum.",
    outcome: "Commercially impactful activations",
    href: "/capabilities/live-experiences",
    num: "04",
    icon: Sparkles,
  },
];

const WhatWeBuilds = () => (
  <section id="capabilities" className="py-16 md:py-20 bg-[#080E1A]">
    <div className="section-container">
      <SectionHeader
        eyebrow="What Enfactum builds"
        headline="Four capabilities. One growth architecture."
        description="Each capability connects. Together, they form a growth operating system for Southeast Asia."
      />
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {capabilities.map((cap, i) => (
          <RevealSection key={i} delay={i * 0.1} scale>
            <Link to={cap.href} className="group block h-full">
              <div className="relative h-full rounded-xl bg-white/[0.05] border border-white/10 p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                {/* Number top-right */}
                <span className="absolute top-6 right-6 text-xs font-body text-dim">{cap.num}</span>
                {/* Icon */}
                <cap.icon
                  className="w-12 h-12 text-primary mb-6 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]"
                  strokeWidth={1.5}
                />
                {/* Title */}
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {cap.title}
                </h3>
                {/* Description */}
                <p className="body-md text-muted-foreground mt-3">{cap.desc}</p>
                {/* Outcome tag + arrow */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/[0.06]">
                  <p className="eyebrow opacity-60 group-hover:opacity-100 transition-opacity duration-300">{cap.outcome}</p>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>
            </Link>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 5 — HOW WE WORK
   Horizontal process with cinematic linework
   ═══════════════════════════════════════════════ */
const processSteps = [
  { step: "Define", desc: "Diagnose the challenge. Align stakeholders. Set commercial objectives." },
  { step: "Build", desc: "Design infrastructure, partnerships, and go-to-market architecture." },
  { step: "Operate", desc: "Execute embedded — hands on the work, not just the plan." },
  { step: "Transfer", desc: "Build internal capability. Transition ownership to client teams." },
  { step: "Scale", desc: "Expand across markets, partners, and channels with proven playbooks." },
];

const HowWeWork = () => (
  <section id="how-we-work" className="py-16 md:py-20">
    <div className="section-container">
      <SectionHeader
        eyebrow="How we work"
        headline="Growth Architects, not just advisors."
        description="We embed within the business and stay until growth has real infrastructure."
        centered
      />
      <div className="mt-14 relative">
        {/* Desktop */}
        <div className="hidden md:block">
          <div className="flex items-start justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-[18px] left-[10%] right-[10%] h-px bg-border/40" />
            <div className="absolute top-[18px] left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0" />
            {processSteps.map((step, i) => (
              <RevealSection key={i} delay={i * 0.1} className="flex-1 relative px-4 text-center">
                <div className="w-9 h-9 rounded-full border border-border bg-background flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:border-primary/40 transition-colors" style={{ boxShadow: '0 0 20px 6px hsl(210 100% 50% / 0.08)' }}>
                  <span className="text-[10px] font-display font-bold text-primary/70">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-display font-bold text-foreground text-base tracking-tight">{step.step}</h3>
                <p className="text-[13px] text-muted-foreground mt-3 leading-relaxed max-w-[160px] mx-auto">{step.desc}</p>
              </RevealSection>
            ))}
          </div>
        </div>
        {/* Mobile */}
        <div className="md:hidden space-y-10 relative pl-10">
          <div className="absolute left-[14px] top-2 bottom-2 w-px bg-border/30" />
          {processSteps.map((step, i) => (
            <RevealSection key={i} delay={i * 0.06} className="relative">
              <div className="absolute -left-10 top-0 w-7 h-7 rounded-full border border-border bg-background flex items-center justify-center" style={{ boxShadow: '0 0 16px 4px hsl(210 100% 50% / 0.08)' }}>
                <span className="text-[9px] font-display font-bold text-primary/70">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-display font-semibold text-foreground">{step.step}</h3>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{step.desc}</p>
            </RevealSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 6 — SECTOR EXPERIENCE
   Architectural experience clusters — editorial, not logo-wall
   ═══════════════════════════════════════════════ */


const marqueeNames = allMarqueeBrands.map((b) => b.name);

const SectorExperience = () => (
  <section className="py-16 md:py-20 bg-[#080E1A]">
    <div className="section-container">
      <SectionHeader
        eyebrow="Experience"
        headline="Experience across the industries shaping Southeast Asia."
      />

      {/* CSS-only brand text marquee — Row 1 (left) */}
      <RevealSection delay={0.1} className="mt-10 mb-4">
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#080E1A] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#080E1A] to-transparent" />
          <div className="flex whitespace-nowrap" style={{ animation: 'marquee-left 30s linear infinite' }}>
            {[0, 1].map((dup) => (
              <div key={dup} className="flex items-center gap-6 shrink-0 pr-6">
                {['HP', 'Oracle', 'Lexmark', 'The Economist', 'Lenovo', 'Dell EMC', 'Commvault', 'Singtel', 'Redington'].map((name) => (
                  <span key={`${dup}-${name}`} className="inline-flex items-center gap-6 shrink-0">
                    <span className="text-[14px] font-medium tracking-[0.05em] text-white/60 select-none">{name}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* CSS-only brand text marquee — Row 2 (right) */}
      <RevealSection delay={0.15} className="mb-12">
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#080E1A] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#080E1A] to-transparent" />
          <div className="flex whitespace-nowrap" style={{ animation: 'marquee-right 35s linear infinite' }}>
            {[0, 1].map((dup) => (
              <div key={dup} className="flex items-center gap-6 shrink-0 pr-6">
                {['MyRepublic', 'Lazada', "L'Oréal", 'Lancôme', 'Abbott', 'NUS', 'Andaz', 'eBaoTech', 'InsureMO', 'element14'].map((name) => (
                  <span key={`${dup}-${name}`} className="inline-flex items-center gap-6 shrink-0">
                    <span className="text-[14px] font-medium tracking-[0.05em] text-white/60 select-none">{name}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Sector clusters */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {brandSectorClusters.map((cluster, ci) => (
          <RevealSection key={ci} delay={ci * 0.08}>
            <div className="border-t border-border/30 pt-6">
              <span className="text-[10px] font-body text-dim block mb-2">{cluster.num}</span>
              <h3 className="font-display text-base font-bold text-foreground leading-tight">
                {cluster.sector}
              </h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed mt-2 line-clamp-3">
                {cluster.narrative}
              </p>
              {/* Brand logos */}
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
                {cluster.brands.map((brand, bi) => (
                  <BrandLogo
                    key={bi}
                    name={brand.name}
                    domain={brand.domain}
                    localLogo={brand.localLogo}
                    height={18}
                    opacity={0.4}
                    hoverOpacity={0.8}
                  />
                ))}
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 7 — FEATURED WORK
   Result-oriented selected work
   ═══════════════════════════════════════════════ */
const FeaturedWork = () => {
  const flagships = getFlagshipCases();
  return (
    <section id="selected-work" className="py-16 md:py-20 border-t border-white/10">
      <div className="section-container">
        <SectionHeader
          eyebrow="Selected work"
          headline="Selected outcomes."
        />
        <p className="text-[13px] text-muted-foreground mt-4 max-w-lg">
          Selected work with measurable commercial, operational, and ecosystem outcomes.
        </p>
        <div className="mt-10 space-y-0">
          {flagships.map((cs, i) => (
            <CaseCard key={cs.id} cs={cs} index={i} />
          ))}
        </div>
        <RevealSection delay={0.3} className="mt-12">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-primary/70 hover:text-primary font-medium transition-colors">
            View recent work <ArrowRight className="w-4 h-4" />
          </Link>
        </RevealSection>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 8 — DEPTH BEHIND THE WORK
   Architectural teaser blocks
   ═══════════════════════════════════════════════ */
const depthBlocks = [
  { title: "Leadership", desc: "Experienced Growth Architects across strategy, growth, and technology.", href: "/company/leadership", num: "01" },
  { title: "Architect Bench", desc: "Over 35 specialists across Southeast Asia and India.", href: "/company", num: "02" },
  { title: "Regional Nodes", desc: "Singapore, India, Malaysia, Indonesia — and expanding.", href: "/company/regional-nodes", num: "03" },
  { title: "Capability Ownership", desc: "Each capability led by domain-specialist principals.", href: "/capabilities", num: "04" },
];

const DepthSection = () => (
  <section id="depth" className="py-16 md:py-20 bg-[#080E1A]">
    <div className="section-container">
      <SectionHeader
        eyebrow="Depth behind the work"
        headline="Real teams. Real infrastructure."
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {depthBlocks.map((block, i) => (
          <RevealSection key={i} delay={i * 0.08} scale>
            <Link to={block.href} className="group block h-full">
              <div className="h-full border-t border-border/40 pt-8 group-hover:border-primary/25 transition-colors duration-700">
                <span className="text-[10px] font-body text-dim">{block.num}</span>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-500 mt-3">
                  {block.title}
                </h3>
                <p className="text-[13px] text-muted-foreground mt-2 leading-relaxed">{block.desc}</p>
                <ArrowRight className="w-4 h-4 text-dim group-hover:text-primary mt-6 group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </Link>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 9 — PERSPECTIVES
   Editorial journal preview
   ═══════════════════════════════════════════════ */
const articles = [
  { title: "Southeast Asia Is Not One Market. Stop Planning It Like One.", category: "Architect View", date: "March 2026" },
  { title: "In B2B, Your Buyer Already Trusts Someone Else.", category: "Architect View", date: "March 2026" },
  { title: "Imported Playbooks Break Fast in Southeast Asia.", category: "Field Note", date: "February 2026" },
];

const Perspectives = () => (
  <section id="thinking" className="py-16 md:py-20">
    <div className="section-container">
      <div className="section-divider mb-12" />
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <RevealSection>
            <p className="eyebrow mb-6">Thinking</p>
            <h2 className="headline-lg">Perspectives from inside the work.</h2>
            <Link to="/thinking" className="inline-flex items-center gap-2 text-sm text-primary/70 hover:text-primary font-medium transition-colors mt-8">
              All thinking <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealSection>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          {articles.map((article, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <Link to="/thinking" className="group block">
                <div className="py-8 border-b border-border/30 group-hover:border-primary/15 transition-colors duration-700">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[11px] text-primary/60 font-medium uppercase tracking-wider">{article.category}</span>
                    <span className="text-[11px] text-dim">{article.date}</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-500 leading-snug">
                    {article.title}
                  </h3>
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   INSIGHT STATEMENTS DATA + CAROUSEL
   ═══════════════════════════════════════════════ */
const clientInsights: React.ReactNode[] = [
  <>Enterprise pipeline grows when you lead with <span className="text-primary">diagnostics</span>, not product demos.</>,
  <>Multi-market launch succeeds when you build <span className="text-primary">distribution before awareness</span>.</>,
  <>Channel engagement scales when you meet <span className="text-primary">partners where they are</span>.</>,
  <>The best innovation programs start with a <span className="text-primary">commercial mandate</span>, not a technology bet.</>,
  <>Growth in Southeast Asia requires <span className="text-primary">Growth Architects</span>, not just strategists.</>,
  <>Events become <span className="text-primary">pipeline machines</span> when designed backward from business objectives.</>,
];

const QuoteCarousel = ({ quotes }: { quotes: React.ReactNode[] }) => {
  const [active, setActive] = useState(0);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      setActive((prev) =>
        diff > 0 ? (prev + 1) % quotes.length : (prev - 1 + quotes.length) % quotes.length
      );
    }
    touchStart.current = null;
  }, [quotes.length]);

  return (
    <section className="py-16 md:py-20 border-y border-border/20 overflow-hidden bg-[#080E1A]">
      <div
        className="section-container relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Statement */}
        <div className="relative min-h-[120px] flex items-center w-full max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl md:text-3xl lg:text-4xl text-foreground font-display font-bold leading-snug tracking-tight"
            >
              {quotes[active]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Dots — left-aligned */}
        <div className="flex items-center gap-2 mt-8">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === active ? "bg-primary scale-125" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to statement ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


const sectionLabels = [
  { id: "why-sea", label: "Why Southeast Asia" },
  { id: "growth-breaks", label: "Growth Challenges" },
  { id: "capabilities", label: "Capabilities" },
  { id: "how-we-work", label: "How We Work" },
  { id: "selected-work", label: "Selected Work" },
  { id: "depth", label: "Our Depth" },
  { id: "thinking", label: "Thinking" },
];

/* ═══════════════════════════════════════════════
   PAGE ASSEMBLY
   ═══════════════════════════════════════════════ */
const Index = () => (
  <PageLayout>
    <SEOHead
      title="Growth & Innovation Operating Partner for Southeast Asia"
      description="Enfactum brings together strategy, ecosystems, and execution to help enterprise brands scale across Southeast Asia. GTM strategy, partner ecosystems, AI innovation, brand and demand, and live experiences."
      path="/"
      jsonLd={{ ...organizationSchema, ...webSiteSchema }}
    />

    <StickySectionLabel sections={sectionLabels} />
    <Hero />
    <WhySEA />
    <GrowthBreaks />
    <WhatWeBuilds />
    <HowWeWork />
    <SectorExperience />
    <FeaturedWork />
    <QuoteCarousel quotes={clientInsights} />
    <DepthSection />
    <Perspectives />
    <CTABand
      headline="Let's move growth forward."
      description="Tell us where growth needs to move next."
      primaryLabel="Start a conversation"
      primaryHref="/contact"
      secondaryLabel="Explore capabilities"
      secondaryHref="/capabilities"
    />
  </PageLayout>
);


export default Index;
