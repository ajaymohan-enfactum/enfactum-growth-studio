import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useCallback, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/shared/MagneticButton";
import TextShimmer from "@/components/shared/TextShimmer";
import InsightTicker from "@/components/shared/InsightTicker";
import StickySectionLabel from "@/components/shared/StickySectionLabel";
import { ChevronDown } from "lucide-react";

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
      className="relative min-h-screen flex items-center overflow-hidden"
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

      <div className="section-container relative z-10 w-full">
        <div className="grid md:grid-cols-5 items-center">
          {/* Left side — 60% */}
          <div className="md:col-span-3">
            {/* Vertical blue accent bar */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="w-[3px] h-16 bg-primary mb-6 origin-top"
            />

            <h1 className="text-4xl md:text-6xl font-semibold text-foreground leading-tight">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease }}
              >
                Where strategy, ecosystems, and execution{" "}
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7, ease }}
              >
                <TextShimmer><span className="text-primary">move together.</span></TextShimmer>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease }}
              className="text-sm tracking-widest text-foreground/40 uppercase mt-4"
            >
              Growth &amp; Innovation Operating Partner · Southeast Asia
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3, ease }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Link to="/contact">
                <MagneticButton variant="hero" size="xl">Start a conversation</MagneticButton>
              </Link>
              <Link to="/work">
                <MagneticButton variant="hero-outline" size="xl">See our work</MagneticButton>
              </Link>
            </motion.div>
          </div>

          {/* Right side — 40% */}
          <div className="hidden md:flex md:col-span-2" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.0, ease }}
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
  <section id="why-sea" className="py-20 md:py-28 bg-[#0c1629]">
    <div className="section-container">
      <RevealSection blur>
        <p className="text-3xl md:text-4xl font-light text-foreground leading-relaxed max-w-4xl">
          Growth here moves through ecosystems, local trust, and execution nuance. Imported playbooks break.
        </p>
      </RevealSection>
      <RevealSection delay={0.2} blur>
        <div className="mt-8 space-y-3">
          <p className="text-base text-foreground/50">Nearly 700 million people across ten countries.</p>
          <p className="text-base text-foreground/50">A digital economy past $300 billion — and accelerating.</p>
          <p className="text-base text-foreground/60 font-medium">No single playbook covers it. That is why Enfactum exists.</p>
        </div>
      </RevealSection>
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
        headline="Four capabilities. One growth architecture."
        description="Each capability connects. Together, they form a growth operating system for Southeast Asia."
      />
      <div className="mt-12">
        {capabilities.map((cap, i) => (
          <RevealSection key={i} delay={i * 0.08}>
            <Link to={cap.href} className="group block">
              <div className="flex items-center gap-6 md:gap-10 py-8 border-t border-border/10">
                {/* Number */}
                <span className="text-7xl font-display font-black text-foreground/[0.08] leading-none select-none shrink-0 w-20 text-right">
                  {cap.num}
                </span>
                {/* Title + desc */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-foreground/50 mt-1">{cap.desc}</p>
                </div>
                {/* Outcome tag */}
                <p className="hidden md:block text-xs tracking-widest text-primary uppercase text-right shrink-0 max-w-[220px]">
                  {cap.outcome}
                </p>
              </div>
            </Link>
          </RevealSection>
        ))}
        <div className="border-t border-border/10" />
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 5 — HOW WE WORK
   Horizontal process with cinematic linework
   ═══════════════════════════════════════════════ */
const processSteps = [
  { step: "Define", desc: "Diagnose the growth challenge and map the ecosystem landscape before committing resources." },
  { step: "Build", desc: "Architect the GTM infrastructure, partnerships, and demand engine from the ground up." },
  { step: "Operate", desc: "Run the growth architecture with embedded teams, not external advisors." },
  { step: "Transfer", desc: "Hand over operational ownership with documented playbooks and trained internal teams." },
  { step: "Scale", desc: "Expand across markets with proven architecture, not replicated guesswork." },
];

const HowWeWork = () => (
  <section id="how-we-work" className="py-16 md:py-20">
    <div className="section-container">
      <h2 className="headline-lg max-w-xl">Growth Architects, not just advisors.</h2>
      <div className="mt-14">
        {processSteps.map((step, i) => (
          <RevealSection key={i} delay={i * 0.08}>
            <div className="flex gap-8 md:gap-12 mb-16 last:mb-0">
              {/* Number */}
              <span className="text-[120px] font-display font-black leading-none text-foreground/[0.05] select-none shrink-0 hidden md:block" style={{ width: '30%', textAlign: 'right', paddingRight: '2rem' }}>
                {String(i + 1)}
              </span>
              {/* Content */}
              <div style={{ width: '70%' }} className="pt-4 md:pt-8">
                <span className="text-5xl font-display font-black text-foreground/[0.05] leading-none select-none md:hidden mb-2 block">{String(i + 1)}</span>
                <h3 className="text-2xl font-display font-semibold text-foreground">{step.step}</h3>
                <div className="border-t border-border/10 my-3" />
                <p className="text-base text-foreground/50">{step.desc}</p>
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 6 — CLIENTS & SECTORS
   Static text-only sector clusters
   ═══════════════════════════════════════════════ */
const sectorClusters = [
  { label: "Enterprise Technology", names: "HP · Oracle · Lexmark · Dell EMC · Commvault · Seagate · Redington · element14 · markem-imaje" },
  { label: "Consumer & Brand Growth", names: "L'Oréal · Lancôme · Kiehl's · Brands For Less · Delsey · VIP Industries · JSHealth Vitamins · Loose Moose Wine" },
  { label: "Media, Institutions & Ecosystems", names: "The Economist · NUS · Andaz · Abbott · InsureMO · eBaoTech · DSCOOP" },
  { label: "New Economy & Platforms", names: "Lazada · MyRepublic · Singtel · Integrate" },
];

const SectorExperience = () => (
  <section className="py-20 bg-[#0B1121]">
    <div className="section-container">
      <p className="text-xs tracking-[0.3em] text-foreground/30 uppercase mb-16 text-center">
        Clients &amp; Sectors
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20 max-w-5xl mx-auto">
        {sectorClusters.map((cluster, i) => (
          <RevealSection key={i} delay={i * 0.08}>
            <div className="border-b border-foreground/[0.08] pb-6">
              <p className="text-xs tracking-widest text-primary uppercase mb-3">
                {cluster.label}
              </p>
              <p className="text-sm text-foreground/50 leading-relaxed">
                {cluster.names}
              </p>
            </div>
          </RevealSection>
        ))}
      </div>
      <p className="text-xs text-foreground/20 tracking-[0.2em] uppercase mt-16 text-center">
        Singapore · India · Malaysia · Indonesia · USA · APAC
      </p>
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
  { title: "Leadership", desc: "Experienced Growth Architects across strategy, growth, and technology.", href: "/company/leadership" },
  { title: "Architect Bench", desc: "200+ specialists across Southeast Asia and India.", href: "/company" },
  { title: "Regional Nodes", desc: "Singapore · India · Malaysia · Indonesia · USA", href: "/company/regional-nodes" },
  { title: "Capability Ownership", desc: "Each capability led by domain-specialist principals.", href: "/capabilities" },
];

const DepthSection = () => (
  <section id="depth" className="py-16 md:py-20 bg-[#0c1629]">
    <div className="section-container">
      <div className="grid md:grid-cols-5 gap-12 md:gap-16">
        {/* Left — heading */}
        <div className="md:col-span-2">
          <RevealSection blur>
            <h2 className="text-3xl font-display font-semibold text-foreground">Real Teams. Real Accountability.</h2>
            <p className="text-base text-foreground/50 mt-4">
              Every engagement is led by named principals with domain expertise — not rotated junior consultants.
            </p>
          </RevealSection>
        </div>
        {/* Right — items */}
        <div className="md:col-span-3">
          {depthBlocks.map((block, i) => (
            <RevealSection key={i} delay={i * 0.08}>
              <Link to={block.href} className="group block">
                <div className={`py-5 ${i < depthBlocks.length - 1 ? 'border-b border-foreground/[0.08]' : ''}`}>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {block.title}
                  </h3>
                  <p className="text-sm text-foreground/40 mt-1">{block.desc}</p>
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
   SECTION 9 — PERSPECTIVES
   Editorial journal preview
   ═══════════════════════════════════════════════ */
const articles = [
  { title: "Southeast Asia Is Not One Market. Stop Planning It Like One.", category: "Architect View", author: "Enfactum", readTime: "4 min" },
  { title: "In B2B, Your Buyer Already Trusts Someone Else.", category: "Architect View", author: "Enfactum", readTime: "3 min" },
  { title: "Imported Playbooks Break Fast in Southeast Asia.", category: "Field Note", author: "Enfactum", readTime: "5 min" },
  { title: "Why Channel Partners Are Your Real Growth Engine in ASEAN.", category: "Field Note", author: "Enfactum", readTime: "4 min" },
];

const Perspectives = () => (
  <section id="thinking" className="py-16 md:py-20">
    <div className="section-container">
      <div className="section-divider mb-12" />
      <RevealSection>
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow mb-4">Thinking</p>
            <h2 className="headline-lg">Perspectives from inside the work.</h2>
          </div>
          <Link to="/thinking" className="hidden md:inline-flex items-center gap-2 text-sm text-primary/70 hover:text-primary font-medium transition-colors">
            All thinking <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </RevealSection>
      <div>
        {articles.map((article, i) => (
          <RevealSection key={i} delay={i * 0.08}>
            <Link to="/thinking" className="group block">
              <div className="flex items-center gap-6 md:gap-8 py-5 border-b border-foreground/[0.08]">
                {/* Category */}
                <span className="text-xs text-primary tracking-widest uppercase shrink-0 w-[100px] hidden md:block">
                  {article.category}
                </span>
                {/* Headline */}
                <h3 className="flex-1 text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>
                {/* Meta */}
                <span className="text-xs text-foreground/40 shrink-0 hidden md:block">
                  {article.author} · {article.readTime}
                </span>
              </div>
            </Link>
          </RevealSection>
        ))}
      </div>
      <Link to="/thinking" className="md:hidden inline-flex items-center gap-2 text-sm text-primary/70 hover:text-primary font-medium transition-colors mt-6">
        All thinking <ArrowRight className="w-4 h-4" />
      </Link>
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
        <div className="relative min-h-[200px] md:min-h-[240px] flex items-center w-full max-w-4xl">
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
      title="Enfactum — Growth & Innovation Operating Partner for Southeast Asia"
      description="Enfactum brings together strategy, ecosystems, and execution to help enterprise brands scale across Southeast Asia. GTM strategy, partner ecosystems, AI innovation, brand and demand, and live experiences."
      path="/"
      jsonLd={{ ...organizationSchema, ...webSiteSchema }}
    />

    <StickySectionLabel sections={sectionLabels} />
    <Hero />
    {/* Break 1 — Stat strip */}
    <div className="bg-[#0d1526] py-14">
      <div className="section-container flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16">
        {[
          { num: "40+", label: "Enterprise clients" },
          { num: "100+", label: "Programmes" },
          { num: "15+", label: "Markets" },
          { num: "5+", label: "Year average partnerships" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-6xl md:text-7xl font-display font-bold text-foreground leading-none">{stat.num}</p>
            <p className="text-xs text-foreground/40 uppercase tracking-widest mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
    <WhySEA />
    <GrowthBreaks />
    <WhatWeBuilds />
    {/* Break 2 — Pull quote */}
    <section className="py-16">
      <div className="section-container">
        <p className="text-center font-bold text-white/80 font-display leading-snug max-w-4xl mx-auto" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
          Growth here moves through <span className="text-primary">ecosystems</span>, <span className="text-primary">local trust</span>, and <span className="text-primary">execution nuance</span>. Imported playbooks break.
        </p>
      </div>
    </section>
    <HowWeWork />
    <SectorExperience />
    {/* Break 5 — Silent divider */}
    <div className="py-2"><div className="w-full h-px border-t border-white/10" /></div>
    <FeaturedWork />
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
