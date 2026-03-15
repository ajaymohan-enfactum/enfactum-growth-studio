import { Link } from "react-router-dom";
import SEASignalField from "@/components/shared/SEASignalField";
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

import HeroAtmosphere from "@/components/shared/HeroAtmosphere";

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
      {/* Deep base gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse 130% 90% at 25% 45%, hsl(218 65% 7%) 0%, hsl(225 15% 8%) 35%, hsl(222 45% 5%) 65%, hsl(225 15% 8%) 100%)',
        }}
      />

      {/* Immersive atmosphere */}
      <HeroAtmosphere />

      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] transition-opacity duration-700"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(550px circle at ${cursorPos.x}px ${cursorPos.y}px, hsl(210 100% 50% / 0.08), transparent 55%)`,
        }}
      />

      {/* Bottom gradient fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent z-[3]" />

      <div className="section-container relative z-10 w-full">
        <div className="grid md:grid-cols-5 items-center min-h-[70vh]">
          {/* Left side — 60% */}
          <div className="md:col-span-3 flex flex-col justify-center">
            {/* Vertical blue accent bar — taller, more deliberate */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="w-[2px] h-20 bg-gradient-to-b from-primary via-primary/60 to-transparent mb-8 origin-top"
            />

            <h1 className="text-[clamp(2.25rem,5.2vw,4.5rem)] font-bold text-foreground leading-[1.02] tracking-[-0.03em]">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.4, ease }}
              >
                Where strategy, ecosystems,
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.65, ease }}
              >
                and execution{" "}
                <TextShimmer><span className="text-primary">move together.</span></TextShimmer>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease }}
              className="text-[13px] tracking-[0.25em] text-foreground/35 uppercase mt-5 font-light"
            >
              Growth &amp; Innovation Operating Partner · Southeast Asia
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.4, ease }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <Link to="/contact">
                <MagneticButton variant="hero" size="xl">Start a conversation</MagneticButton>
              </Link>
              <Link to="/work">
                <MagneticButton variant="hero-outline" size="xl">See our work</MagneticButton>
              </Link>
            </motion.div>
          </div>

          {/* Right side — atmospheric space (visual tension) */}
          <div className="hidden md:flex md:col-span-2 items-center justify-center relative">
            {/* Soft radial anchor glow on right side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, delay: 0.8, ease }}
              className="absolute w-[280px] h-[280px] rounded-full"
              style={{
                background: "radial-gradient(circle, hsla(210, 100%, 50%, 0.06) 0%, hsla(210, 80%, 40%, 0.02) 50%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2, ease }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-foreground/20 uppercase">Scroll</span>
        <ChevronDown
          className="w-4 h-4 text-primary/50"
          strokeWidth={1.5}
          style={{ animation: 'scroll-bounce 2s ease-in-out infinite' }}
        />
      </motion.div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 2 — WHY SOUTHEAST ASIA
   Asymmetric conviction statement — editorial, spacious
   ═══════════════════════════════════════════════ */
const WhySEA = () => (
  <section id="why-sea" className="py-28 md:py-40 bg-[#0c1629] relative overflow-hidden">
    {/* Faint vertical rule for architectural tension */}
    <div className="absolute top-0 bottom-0 left-[8%] md:left-[12%] w-px bg-gradient-to-b from-transparent via-primary/[0.06] to-transparent" />
    <div className="section-container">
      <div className="grid md:grid-cols-12 gap-8 md:gap-0">
        {/* Left — oversized conviction */}
        <div className="md:col-span-8 md:col-start-2">
          <RevealSection blur>
            <p className="text-[clamp(1.75rem,3.8vw,3.5rem)] font-display font-light text-foreground leading-[1.2] tracking-[-0.02em]">
              Growth here moves through ecosystems, local trust, and execution nuance.{" "}
              <span className="text-foreground/30">Imported playbooks break.</span>
            </p>
          </RevealSection>
        </div>
        {/* Right — supporting data, offset lower */}
        <div className="md:col-span-3 md:col-start-9 md:pt-20">
          <RevealSection delay={0.3} blur>
            <div className="space-y-4 md:border-l md:border-primary/10 md:pl-6">
              <p className="text-sm text-foreground/40 leading-relaxed">Nearly 700 million people across ten countries.</p>
              <p className="text-sm text-foreground/40 leading-relaxed">A digital economy past $300 billion — and accelerating.</p>
              <p className="text-sm text-foreground/55 font-medium leading-relaxed">No single playbook covers it. That is why Enfactum exists.</p>
            </div>
          </RevealSection>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 3 — WHERE GROWTH BREAKS
   Systemic — tight 2-col layout, label left, problems right
   ═══════════════════════════════════════════════ */
const frictionPoints = [
  { title: "Strategy-execution gap", body: "Brilliant plans that die in local implementation.", icon: Crosshair },
  { title: "Ecosystem underbuilt", body: "Partners and channels without structure or activation.", icon: Network },
  { title: "Brand-demand disconnect", body: "Creative that doesn't connect to commercial outcomes.", icon: Unlink },
  { title: "Innovation in pilot limbo", body: "AI and ventures stuck between demo and scale.", icon: FlaskConical },
  { title: "Launch without momentum", body: "Events and activations without lasting market impact.", icon: Rocket },
];

const GrowthBreaks = () => (
  <section id="growth-breaks" className="py-20 md:py-28">
    <div className="section-container">
      <div className="grid md:grid-cols-12 gap-8 md:gap-12">
        {/* Left — sticky label */}
        <div className="md:col-span-4">
          <RevealSection blur>
            <div className="md:sticky md:top-32">
              <p className="eyebrow mb-5">Where growth breaks</p>
              <h2 className="headline-md max-w-xs">The friction points we're built to solve.</h2>
            </div>
          </RevealSection>
        </div>
        {/* Right — tight problem list */}
        <div className="md:col-span-7 md:col-start-6">
          {frictionPoints.map((point, i) => (
            <RevealSection key={i} delay={i * 0.08} blur>
              <div className={`flex items-start gap-5 py-7 ${i < frictionPoints.length - 1 ? 'border-b border-border/20' : ''} group`}>
                <point.icon className="w-4 h-4 text-primary/50 mt-1 shrink-0 transition-colors duration-300 group-hover:text-primary/80" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground leading-snug group-hover:text-primary/90 transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{point.body}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 4 — WHAT ENFACTUM BUILDS
   Architecture-led — full-width numbered editorial list
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
  <section id="capabilities" className="py-24 md:py-32 bg-[#080E1A] relative">
    {/* Architectural background number */}
    <div className="absolute top-12 right-8 md:right-16 text-[12rem] md:text-[18rem] font-display font-black text-foreground/[0.015] leading-none select-none pointer-events-none">
      04
    </div>
    <div className="section-container relative">
      <RevealSection>
        <p className="eyebrow mb-4">Capabilities</p>
        <h2 className="headline-lg max-w-2xl">Four capabilities. One growth architecture.</h2>
        <p className="text-sm text-foreground/40 mt-3 max-w-lg">Each capability connects. Together, they form a growth operating system for Southeast Asia.</p>
      </RevealSection>
      <div className="mt-16">
        {capabilities.map((cap, i) => (
          <RevealSection key={i} delay={i * 0.08}>
            <Link to={cap.href} className="group block">
              <div className="grid md:grid-cols-12 items-baseline gap-4 md:gap-8 py-8 border-t border-border/10">
                {/* Number */}
                <span className="md:col-span-1 text-5xl md:text-6xl font-display font-black text-foreground/[0.06] leading-none select-none">
                  {cap.num}
                </span>
                {/* Title */}
                <h3 className="md:col-span-3 text-xl md:text-2xl font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {cap.title}
                </h3>
                {/* Desc */}
                <p className="md:col-span-5 text-sm text-foreground/45 leading-relaxed">{cap.desc}</p>
                {/* Outcome tag */}
                <p className="md:col-span-3 text-[10px] tracking-[0.2em] text-primary/60 uppercase text-right">
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
   INTERLUDE — CINEMATIC PULL QUOTE
   Full-bleed typographic moment, visual peak
   ═══════════════════════════════════════════════ */
const PullQuote = () => (
  <section className="relative py-24 md:py-36 overflow-hidden">
    {/* Gradient atmosphere */}
    <div className="absolute inset-0" style={{
      background: "radial-gradient(ellipse 80% 60% at 50% 50%, hsla(215, 60%, 12%, 0.6) 0%, hsl(225 15% 8%) 70%)"
    }} />
    {/* Horizontal accent lines */}
    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/[0.08] to-transparent -translate-y-1/2" />
    <div className="section-container relative z-10">
      <RevealSection distance={40}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-8 h-px bg-primary/40 mx-auto mb-10" />
          <p className="font-display font-bold text-foreground/85 leading-[1.12] tracking-[-0.02em]" style={{ fontSize: 'clamp(1.75rem, 4.2vw, 3.5rem)' }}>
            Growth here moves through <span className="text-primary">ecosystems</span>, <span className="text-primary">local trust</span>, and <span className="text-primary">execution nuance</span>. Imported playbooks break.
          </p>
          <div className="w-8 h-px bg-primary/40 mx-auto mt-10" />
        </div>
      </RevealSection>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 5 — HOW WE WORK
   Horizontal compact timeline — dense, systemic
   ═══════════════════════════════════════════════ */
const processSteps = [
  { step: "Define", desc: "Diagnose the growth challenge and map the ecosystem landscape before committing resources." },
  { step: "Build", desc: "Architect the GTM infrastructure, partnerships, and demand engine from the ground up." },
  { step: "Operate", desc: "Run the growth architecture with embedded teams, not external advisors." },
  { step: "Transfer", desc: "Hand over operational ownership with documented playbooks and trained internal teams." },
  { step: "Scale", desc: "Expand across markets with proven architecture, not replicated guesswork." },
];

const HowWeWork = () => (
  <section id="how-we-work" className="py-20 md:py-28 bg-[#0B1121]">
    <div className="section-container">
      <div className="grid md:grid-cols-12 gap-8 md:gap-12">
        {/* Left — headline */}
        <div className="md:col-span-4">
          <RevealSection blur>
            <p className="eyebrow mb-5">How we work</p>
            <h2 className="headline-md">Growth Architects, not just advisors.</h2>
          </RevealSection>
        </div>
        {/* Right — compact timeline */}
        <div className="md:col-span-7 md:col-start-6">
          {processSteps.map((step, i) => (
            <RevealSection key={i} delay={i * 0.06}>
              <div className="flex items-start gap-6 py-6 border-b border-border/10 last:border-b-0 group">
                {/* Step number */}
                <span className="text-3xl font-display font-bold text-primary/15 leading-none shrink-0 w-10 text-right tabular-nums group-hover:text-primary/30 transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground">{step.step}</h3>
                  <p className="text-sm text-foreground/40 mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 6 — CLIENTS & SECTORS
   Institutional — single-column, compressed, proof-led
   ═══════════════════════════════════════════════ */
const sectorClusters = [
  { label: "Enterprise Technology", names: "HP · Oracle · Lexmark · Dell EMC · Commvault · Seagate · Redington · element14 · markem-imaje" },
  { label: "Consumer & Brand Growth", names: "L'Oréal · Lancôme · Kiehl's · Brands For Less · Delsey · VIP Industries · JSHealth Vitamins · Loose Moose Wine" },
  { label: "Media, Institutions & Ecosystems", names: "The Economist · NUS · Andaz · Abbott · InsureMO · eBaoTech · DSCOOP" },
  { label: "New Economy & Platforms", names: "Lazada · MyRepublic · Singtel · Integrate" },
];

const SectorExperience = () => (
  <section className="py-16 md:py-20 relative">
    {/* Top divider */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
    <div className="section-container">
      <div className="grid md:grid-cols-12 gap-6">
        {/* Left — label + stats */}
        <div className="md:col-span-3">
          <RevealSection blur>
            <p className="text-[10px] tracking-[0.3em] text-foreground/25 uppercase mb-6">Experience</p>
            <div className="space-y-5">
              {[
                { num: "40+", label: "Enterprise clients" },
                { num: "100+", label: "Programmes" },
                { num: "15+", label: "Markets" },
                { num: "5+", label: "Year avg. partnerships" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-display font-bold text-foreground leading-none">{stat.num}</p>
                  <p className="text-[10px] text-foreground/30 uppercase tracking-[0.15em] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
        {/* Right — sector clusters in a single flowing column */}
        <div className="md:col-span-8 md:col-start-5">
          {sectorClusters.map((cluster, i) => (
            <RevealSection key={i} delay={i * 0.06}>
              <div className={`py-5 ${i < sectorClusters.length - 1 ? 'border-b border-border/10' : ''}`}>
                <p className="text-[10px] tracking-[0.2em] text-primary/60 uppercase mb-2">
                  {cluster.label}
                </p>
                <p className="text-[15px] text-foreground/40 leading-relaxed tracking-wide">
                  {cluster.names}
                </p>
              </div>
            </RevealSection>
          ))}
          <RevealSection delay={0.3}>
            <p className="text-[10px] text-foreground/15 tracking-[0.25em] uppercase mt-8">
              Singapore · India · Malaysia · Indonesia · USA · APAC
            </p>
          </RevealSection>
        </div>
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
    <section id="selected-work" className="py-24 md:py-32 bg-[#080E1A]">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-6 mb-14">
          <div className="md:col-span-6">
            <RevealSection>
              <p className="eyebrow mb-4">Selected work</p>
              <h2 className="headline-lg">Selected outcomes.</h2>
            </RevealSection>
          </div>
          <div className="md:col-span-4 md:col-start-8 flex items-end">
            <RevealSection delay={0.2}>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Selected work with measurable commercial, operational, and ecosystem outcomes.
              </p>
            </RevealSection>
          </div>
        </div>
        <div className="space-y-0">
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
   Asymmetric split — text-led, institutional
   ═══════════════════════════════════════════════ */
const depthBlocks = [
  { title: "Leadership", desc: "Experienced Growth Architects across strategy, growth, and technology.", href: "/company/leadership" },
  { title: "Architect Bench", desc: "200+ specialists across Southeast Asia and India.", href: "/company" },
  { title: "Regional Nodes", desc: "Singapore · India · Malaysia · Indonesia · USA", href: "/company/regional-nodes" },
  { title: "Capability Ownership", desc: "Each capability led by domain-specialist principals.", href: "/capabilities" },
];

const DepthSection = () => (
  <section id="depth" className="py-20 md:py-28 relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
    <div className="section-container">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        {/* Left — heading, wider */}
        <div className="md:col-span-5">
          <RevealSection blur>
            <h2 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-display font-semibold text-foreground leading-tight">Real Teams. Real Accountability.</h2>
            <p className="text-sm text-foreground/40 mt-5 leading-relaxed">
              Every engagement is led by named principals with domain expertise — not rotated junior consultants.
            </p>
          </RevealSection>
        </div>
        {/* Right — items */}
        <div className="md:col-span-5 md:col-start-8">
          {depthBlocks.map((block, i) => (
            <RevealSection key={i} delay={i * 0.08}>
              <Link to={block.href} className="group block">
                <div className={`py-5 ${i < depthBlocks.length - 1 ? 'border-b border-foreground/[0.06]' : ''}`}>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {block.title}
                  </h3>
                  <p className="text-[13px] text-foreground/35 mt-1">{block.desc}</p>
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
   Editorial journal preview — tighter, more refined
   ═══════════════════════════════════════════════ */
const articles = [
  { title: "Southeast Asia Is Not One Market. Stop Planning It Like One.", category: "Architect View", author: "Enfactum", readTime: "4 min" },
  { title: "In B2B, Your Buyer Already Trusts Someone Else.", category: "Architect View", author: "Enfactum", readTime: "3 min" },
  { title: "Imported Playbooks Break Fast in Southeast Asia.", category: "Field Note", author: "Enfactum", readTime: "5 min" },
  { title: "Why Channel Partners Are Your Real Growth Engine in ASEAN.", category: "Field Note", author: "Enfactum", readTime: "4 min" },
];

const Perspectives = () => (
  <section id="thinking" className="py-20 md:py-28 bg-[#0c1629]">
    <div className="section-container">
      <RevealSection>
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="eyebrow mb-4">Thinking</p>
            <h2 className="headline-md">Perspectives from inside the work.</h2>
          </div>
          <Link to="/thinking" className="hidden md:inline-flex items-center gap-2 text-sm text-primary/70 hover:text-primary font-medium transition-colors">
            All thinking <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </RevealSection>
      <div>
        {articles.map((article, i) => (
          <RevealSection key={i} delay={i * 0.06}>
            <Link to="/thinking" className="group block">
              <div className="flex items-center gap-6 md:gap-8 py-5 border-b border-foreground/[0.06]">
                <span className="text-[10px] text-primary/50 tracking-[0.2em] uppercase shrink-0 w-[90px] hidden md:block">
                  {article.category}
                </span>
                <h3 className="flex-1 text-base md:text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                  {article.title}
                </h3>
                <span className="text-[11px] text-foreground/25 shrink-0 hidden md:block">
                  {article.readTime}
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
    <WhySEA />
    <GrowthBreaks />
    <WhatWeBuilds />
    <PullQuote />
    <HowWeWork />
    <SectorExperience />
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
