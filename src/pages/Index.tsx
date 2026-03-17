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

import networkAbstract from "@/assets/visuals/network-abstract.png";
import growthArchitecture from "@/assets/visuals/growth-architecture.png";
import innovationParticles from "@/assets/visuals/innovation-particles.png";
import seaTopography from "@/assets/visuals/sea-topography.png";

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
          background: 'linear-gradient(135deg, #111827 0%, #0F172A 50%, #0B1120 100%)',
        }}
      />

      {/* SEA watermark */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-display"
          style={{
            fontSize: 'clamp(200px, 35vw, 500px)',
            fontWeight: 900,
            color: 'rgba(59, 130, 246, 0.04)',
            letterSpacing: '-0.05em',
            lineHeight: 1,
          }}
        >
          SEA
        </span>
      </div>

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
                Where strategy, ecosystems, and execution
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.65, ease }}
              >
                <TextShimmer><span className="text-primary">move together.</span></TextShimmer>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease }}
              className="text-[13px] tracking-[0.25em] text-foreground/50 uppercase mt-5 font-light"
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

          {/* Right side — SEA topography visual */}
          <div className="hidden md:flex md:col-span-2 items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease }}
              className="relative w-full"
            >
              <img
                src={seaTopography}
                alt=""
                className="w-full h-auto opacity-30 mix-blend-screen"
                style={{ filter: "blur(1px)" }}
              />
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/5 to-transparent" />
            </motion.div>
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
   Thesis moment — editorial split with living system visual
   ═══════════════════════════════════════════════ */
const WhySEA = () => (
  <section id="why-sea" className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0e1525 0%, #101828 40%, #111b2e 100%)" }}>
    {/* Faint architectural vertical rules */}
    <div className="absolute top-0 bottom-0 left-[8%] md:left-[12%] w-px bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent" />
    <div className="absolute top-0 bottom-0 right-[8%] md:right-[38%] w-px bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent hidden md:block" />

    <div className="section-container relative z-10">
      <div className="grid md:grid-cols-12 gap-0">
        {/* Left — thesis text + integrated metrics */}
        <div className="md:col-span-6 py-28 md:py-40 relative z-10">
          {/* Eyebrow */}
          <RevealSection blur>
            <p className="eyebrow mb-8">Why Southeast Asia moves differently</p>
          </RevealSection>

          {/* Conviction headline */}
          <RevealSection blur delay={0.1}>
            <p className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-display font-semibold text-foreground leading-[1.15] tracking-[-0.02em]">
              Growth here moves through ecosystems, local trust, and execution nuance.
            </p>
          </RevealSection>

          <RevealSection blur delay={0.2}>
            <p className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-display font-semibold text-foreground/25 leading-[1.15] tracking-[-0.02em] mt-2">
              Imported playbooks break.
            </p>
          </RevealSection>

          {/* Supporting context — tighter, more embedded */}
          <RevealSection blur delay={0.35}>
            <div className="mt-12 space-y-3 max-w-md">
               <p className="text-sm text-foreground/50 leading-relaxed">Nearly 700 million people across ten countries. A digital economy past $300 billion — and accelerating.</p>
               <p className="text-sm text-foreground/65 font-medium leading-relaxed">No single playbook covers it. That is why Enfactum exists.</p>
            </div>
          </RevealSection>

          {/* Integrated metrics — strategic framing, not dashboard */}
          <RevealSection blur delay={0.45}>
            <div className="mt-14 pt-8 border-t border-primary/[0.08]">
              <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                {[
                  { num: "700M+", context: "People across ten countries" },
                  { num: "$300B+", context: "Digital economy and accelerating" },
                  { num: "10", context: "Markets, no single playbook" },
                  { num: "15+", context: "Years of operating in-region" },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-2xl md:text-3xl font-display font-bold text-foreground/80 leading-none tracking-tight">
                      {item.num}
                    </p>
                     <p className="text-foreground/30 mt-2 leading-snug tracking-wide uppercase" style={{ fontSize: '11px' }}>
                       {item.context}
                     </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>

        {/* Right — living system visual */}
        <div className="md:col-span-6 relative min-h-[300px] md:min-h-0">
          {/* Signal field canvas */}
          <SEASignalField />

          {/* Gradient overlay to blend into text side */}
           <div className="absolute inset-0 bg-gradient-to-r from-[#0e1525] via-transparent to-transparent md:w-1/3 pointer-events-none" />

           {/* Top/bottom fade */}
           <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0e1525] to-transparent pointer-events-none" />
           <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111b2e] to-transparent pointer-events-none" />

          {/* Soft radial depth */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse 70% 60% at 60% 45%, hsla(215, 50%, 15%, 0.3) 0%, transparent 70%)"
          }} />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 3 — WHERE GROWTH BREAKS
   Diagnostic framework — staggered tiles with connective tissue
   ═══════════════════════════════════════════════ */
const frictionPoints = [
  { title: "Strategy-execution gap", body: "Brilliant plans that die in local implementation.", icon: Crosshair, num: "01" },
  { title: "Ecosystem underbuilt", body: "Partners and channels without structure or activation.", icon: Network, num: "02" },
  { title: "Brand-demand disconnect", body: "Creative that doesn't connect to commercial outcomes.", icon: Unlink, num: "03" },
  { title: "Innovation in pilot limbo", body: "AI and ventures stuck between demo and scale.", icon: FlaskConical, num: "04" },
  { title: "Launch without momentum", body: "Events and activations without lasting market impact.", icon: Rocket, num: "05" },
];

const GrowthBreaks = () => (
  <section id="growth-breaks" className="py-24 md:py-32 relative overflow-hidden">
    {/* Background image — subtle */}
    <div className="absolute inset-0 pointer-events-none">
      <img src={networkAbstract} alt="" className="w-full h-full object-cover opacity-[0.07]" />
      <div className="absolute inset-0 bg-background/80" />
    </div>

    <div className="section-container relative z-10">
      {/* Header */}
      <RevealSection blur>
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="eyebrow mb-5">Where growth breaks</p>
          <h2 className="text-[clamp(1.5rem,2.8vw,2.5rem)] font-display font-semibold text-foreground leading-[1.12] tracking-[-0.02em]">
            The friction points we're built to solve.
          </h2>
          <p className="text-sm text-foreground/50 mt-4 max-w-md leading-relaxed">
            Five structural failures that repeat across Southeast Asia — and that no single vendor, agency, or consultant is built to address.
          </p>
        </div>
      </RevealSection>

      {/* Diagnostic grid — staggered 2-column with connective line */}
      <div className="relative">
        {/* Vertical connective line — runs through the center on desktop */}
        <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-px bg-gradient-to-b from-transparent via-primary/[0.08] to-transparent hidden md:block" />

        <div className="space-y-0">
          {frictionPoints.map((point, i) => {
            const isLeft = i % 2 === 0;
            return (
              <RevealSection key={i} delay={i * 0.1} blur>
                <div className={`grid md:grid-cols-2 gap-6 md:gap-0 ${i > 0 ? 'mt-6 md:mt-0' : ''}`}>
                  {/* Spacer or content — alternating sides */}
                  {!isLeft && <div className="hidden md:block" />}

                  <div className={`relative ${isLeft ? 'md:pr-16' : 'md:pl-16'} py-6 md:py-10 group`}>
                    {/* Connection node on the center line */}
                    <div className={`absolute top-1/2 -translate-y-1/2 hidden md:block ${isLeft ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} z-10`}>
                      <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary/50 transition-colors duration-500 ring-4 ring-background" />
                    </div>

                    {/* Tile content */}
                    <div className="relative p-6 md:p-8 rounded-sm border border-border/10 group-hover:border-primary/15 transition-all duration-500 bg-background/40 backdrop-blur-sm">
                      {/* Diagnostic number */}
                      <div className="flex items-start justify-between mb-5">
                        <point.icon className="w-[18px] h-[18px] text-primary/40 group-hover:text-primary/70 transition-colors duration-500" strokeWidth={1.5} />
                        <span className="text-[10px] tracking-[0.3em] text-foreground/20 font-display font-bold uppercase">
                          {point.num}
                        </span>
                      </div>

                      <h3 className="font-display text-lg font-semibold text-foreground leading-snug group-hover:text-foreground transition-colors duration-300">
                        {point.title}
                      </h3>
                      <p className="text-sm text-foreground/50 mt-2.5 leading-relaxed">{point.body}</p>

                      {/* Bottom accent line */}
                      <div className="mt-6 h-px w-12 bg-gradient-to-r from-primary/20 to-transparent group-hover:w-20 transition-all duration-500" />
                    </div>
                  </div>

                  {isLeft && <div className="hidden md:block" />}
                </div>
              </RevealSection>
            );
          })}
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
  <section id="capabilities" className="py-28 md:py-36 bg-[hsl(var(--section-alt))] relative overflow-hidden">
    {/* Background visual */}
    <div className="absolute inset-0 pointer-events-none">
      <img src={growthArchitecture} alt="" className="w-full h-full object-cover opacity-[0.06]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--section-alt))] via-transparent to-[hsl(var(--section-alt))]" />
    </div>
    {/* Faint architectural grid lines */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/[0.06] to-transparent hidden md:block" />
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/[0.05] to-transparent hidden md:block" />
    </div>

    <div className="section-container relative z-10">
      {/* Header — centered, systemic */}
      <RevealSection>
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
          <p className="eyebrow mb-5">Growth Architecture</p>
          <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-display font-bold text-foreground leading-[1.08] tracking-[-0.02em]">
            Four capabilities. One growth architecture.
          </h2>
          <p className="text-sm text-foreground/50 mt-4 leading-relaxed max-w-md mx-auto">
            Each capability connects. Together, they form a growth operating system for Southeast Asia.
          </p>
        </div>
      </RevealSection>

      {/* Architecture grid — 2×2 with connective tissue */}
      <div className="relative">
        {/* Central node — the connective anchor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border border-primary/15 bg-[#080E1A] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-primary/30" />
          </div>
        </div>

        {/* Connector lines from center to each quadrant */}
        <div className="absolute inset-0 hidden md:block pointer-events-none z-10">
          {/* Top-left */}
          <div className="absolute top-1/2 left-1/2 w-[calc(25%-1rem)] h-px bg-gradient-to-l from-primary/10 to-transparent -translate-y-1/2 -translate-x-full" />
          <div className="absolute top-1/2 left-[calc(25%+1rem)] h-[calc(25%-1rem)] w-px bg-gradient-to-t from-primary/10 to-transparent -translate-y-full" />
          {/* Top-right */}
          <div className="absolute top-1/2 left-1/2 w-[calc(25%-1rem)] h-px bg-gradient-to-r from-primary/10 to-transparent -translate-y-1/2" />
          <div className="absolute top-1/2 right-[calc(25%+1rem)] h-[calc(25%-1rem)] w-px bg-gradient-to-t from-primary/10 to-transparent -translate-y-full" />
          {/* Bottom-left */}
          <div className="absolute top-1/2 left-[calc(25%+1rem)] h-[calc(25%-1rem)] w-px bg-gradient-to-b from-primary/10 to-transparent" />
          {/* Bottom-right */}
          <div className="absolute top-1/2 right-[calc(25%+1rem)] h-[calc(25%-1rem)] w-px bg-gradient-to-b from-primary/10 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {capabilities.map((cap, i) => (
            <RevealSection key={i} delay={i * 0.12} blur>
              <Link to={cap.href} className="group block h-full">
                <div className="relative h-full p-8 md:p-10 rounded-sm border border-border/10 group-hover:border-primary/15 bg-background/30 backdrop-blur-sm transition-all duration-500 group-hover:bg-background/50">
                  {/* Top row — number + outcome */}
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-4xl font-display font-bold text-foreground/[0.06] leading-none select-none">
                      {cap.num}
                    </span>
                    <span className="text-[9px] tracking-[0.25em] text-primary/40 uppercase text-right max-w-[160px] leading-snug group-hover:text-primary/60 transition-colors duration-500">
                      {cap.outcome}
                    </span>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center group-hover:border-primary/25 transition-colors duration-500">
                      <cap.icon className="w-3.5 h-3.5 text-primary/50 group-hover:text-primary/80 transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {cap.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-foreground/50 leading-relaxed max-w-sm">{cap.desc}</p>

                  {/* Bottom accent */}
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/10 to-transparent group-hover:from-primary/20 transition-colors duration-500" />
                    <ArrowRight className="w-3.5 h-3.5 text-foreground/20 group-hover:text-primary/50 transition-all duration-500 group-hover:translate-x-0.5" />
                  </div>
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
   Progressive sequence with momentum
   ═══════════════════════════════════════════════ */
const processSteps = [
  { step: "Define", desc: "Diagnose the growth challenge and map the ecosystem landscape before committing resources." },
  { step: "Build", desc: "Architect the GTM infrastructure, partnerships, and demand engine from the ground up." },
  { step: "Operate", desc: "Run the growth architecture with embedded teams, not external advisors." },
  { step: "Transfer", desc: "Hand over operational ownership with documented playbooks and trained internal teams." },
  { step: "Scale", desc: "Expand across markets with proven architecture, not replicated guesswork." },
];

const HowWeWork = () => (
  <section id="how-we-work" className="py-28 md:py-36 bg-[hsl(var(--section-alt))] relative overflow-hidden">
    {/* Horizontal momentum line */}
    <div className="absolute top-[52%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/[0.06] to-transparent hidden md:block pointer-events-none" />

    <div className="section-container relative z-10">
      {/* Header */}
      <RevealSection blur>
        <div className="max-w-xl mb-16 md:mb-20">
          <p className="eyebrow mb-5">How we work</p>
          <h2 className="text-[clamp(1.5rem,2.8vw,2.5rem)] font-display font-semibold text-foreground leading-[1.12] tracking-[-0.02em]">
            From strategy to operating momentum.
          </h2>
          <p className="text-sm text-foreground/50 mt-4 leading-relaxed max-w-md">
            Five phases. Each one builds on the last. No phase exists in isolation.
          </p>
        </div>
      </RevealSection>

      {/* Horizontal sequence — desktop */}
      <div className="hidden md:block">
        {/* Progress track */}
        <div className="relative mb-14">
          <div className="absolute top-4 left-0 right-0 h-px bg-border/15" />
          <div className="flex justify-between relative">
            {processSteps.map((_, i) => (
              <RevealSection key={i} delay={i * 0.12} blur>
                <div className="relative flex flex-col items-center" style={{ width: '1px' }}>
                  {/* Node */}
                  <div className="w-[9px] h-[9px] rounded-full bg-primary/25 ring-[3px] ring-[#0B1121] relative z-10" />
                  {/* Connecting dash after node */}
                  {i < processSteps.length - 1 && (
                    <div className="absolute top-[4px] left-[9px] h-px bg-gradient-to-r from-primary/15 to-primary/5" style={{ width: 'calc((100vw - 8rem) / 5 - 9px)' }} />
                  )}
                </div>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* Step cards — horizontal row */}
        <div className="grid grid-cols-5 gap-4">
          {processSteps.map((step, i) => (
            <RevealSection key={i} delay={0.1 + i * 0.12} blur>
              <div className="group">
                {/* Phase number */}
                <span className="text-[10px] tracking-[0.3em] text-primary/30 uppercase font-display block mb-3 group-hover:text-primary/50 transition-colors duration-500">
                  Phase {String(i + 1).padStart(2, '0')}
                </span>
                {/* Step name */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.step}
                </h3>
                {/* Accent bar */}
                <div className="h-px w-8 bg-primary/15 mb-4 group-hover:w-12 group-hover:bg-primary/30 transition-all duration-500" />
                {/* Description */}
                <p className="text-[13px] text-foreground/45 leading-relaxed group-hover:text-foreground/60 transition-colors duration-500">
                  {step.desc}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>

      {/* Vertical sequence — mobile */}
      <div className="md:hidden relative">
        {/* Vertical track */}
        <div className="absolute top-0 bottom-0 left-[14px] w-px bg-border/10" />
        <div className="space-y-8">
          {processSteps.map((step, i) => (
            <RevealSection key={i} delay={i * 0.08}>
              <div className="flex gap-6 relative group">
                {/* Node */}
                <div className="relative shrink-0 mt-1.5">
                  <div className="w-[9px] h-[9px] rounded-full bg-primary/25 ring-[3px] ring-[#0B1121] relative z-10 ml-[10px]" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.3em] text-primary/30 uppercase font-display block mb-1">
                    Phase {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-foreground">{step.step}</h3>
                  <div className="h-px w-8 bg-primary/15 my-2.5" />
                  <p className="text-sm text-foreground/50 leading-relaxed">{step.desc}</p>
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
            <p className="text-[10px] tracking-[0.3em] text-foreground/40 uppercase mb-6">Experience</p>
            <div className="space-y-5">
              {[
                { num: "40+", label: "Enterprise clients" },
                { num: "100+", label: "Programmes" },
                { num: "15+", label: "Markets" },
                { num: "5+", label: "Year avg. partnerships" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-display font-bold text-foreground leading-none">{stat.num}</p>
                  <p className="text-[10px] text-foreground/40 uppercase tracking-[0.15em] mt-1">{stat.label}</p>
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
   SELECTED WORK — After Thinking
   2 large featured case study cards
   ═══════════════════════════════════════════════ */
const SelectedWorkAfterThinking = () => {
  const flagships = getFlagshipCases();
  const featured = flagships.slice(0, 2);
  return (
    <section id="selected-work" className="py-24 md:py-32 bg-[hsl(var(--section-alt))]">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-6 mb-14">
          <div className="md:col-span-6">
            <RevealSection>
              <p className="eyebrow mb-4">Selected work</p>
              <h2 className="headline-lg">Selected work across the region.</h2>
            </RevealSection>
          </div>
          <div className="md:col-span-4 md:col-start-8 flex items-end">
            <RevealSection delay={0.2}>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Measurable commercial, operational, and ecosystem outcomes across Southeast Asia.
              </p>
            </RevealSection>
          </div>
        </div>

        {/* 2 featured case study cards */}
        <div className="space-y-0">
          {featured.map((cs, i) => (
            <CaseCard key={cs.id} cs={cs} index={i} variant="flagship" />
          ))}
        </div>

        <RevealSection delay={0.3} className="mt-12">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-primary/70 hover:text-primary font-medium transition-colors">
            View all work <ArrowRight className="w-4 h-4" />
          </Link>
        </RevealSection>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 8 — DEPTH BEHIND THE WORK
   Institutional trust layer — architectural, weighted
   ═══════════════════════════════════════════════ */
const depthItems = [
  {
    title: "Leadership",
    stat: "12+",
    statLabel: "Senior principals",
    desc: "Named leaders across strategy, growth, technology, and creative — each with deep regional experience.",
    href: "/company/leadership",
    prominent: true,
  },
  {
    title: "Operating Bench",
    stat: "200+",
    statLabel: "Specialists",
    desc: "Execution depth across Southeast Asia and India — embedded, not outsourced.",
    href: "/company",
    prominent: true,
  },
  {
    title: "Regional Nodes",
    stat: "5",
    statLabel: "Markets",
    desc: "Singapore · India · Malaysia · Indonesia · USA",
    href: "/company/regional-nodes",
    prominent: false,
  },
  {
    title: "Capability Ownership",
    stat: "4",
    statLabel: "Domains",
    desc: "Each capability led by domain-specialist principals with operating accountability.",
    href: "/capabilities",
    prominent: false,
  },
];

const DepthSection = () => (
  <section id="depth" className="py-24 md:py-32 relative overflow-hidden">
    {/* Architectural vertical line */}
    <div className="absolute top-0 bottom-0 left-[50%] w-px bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent hidden md:block" />

    <div className="section-container relative z-10">
      {/* Header */}
      <RevealSection blur>
        <div className="max-w-lg mb-16 md:mb-20">
          <p className="eyebrow mb-5">Behind the work</p>
          <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-display font-bold text-foreground leading-[1.08] tracking-[-0.02em]">
            Depth where it matters.
          </h2>
          <p className="text-sm text-foreground/30 mt-4 leading-relaxed max-w-sm">
            Every engagement is led by named principals with domain expertise — not rotated junior consultants.
          </p>
        </div>
      </RevealSection>

      {/* Prominent items — 2-col with stat anchors */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {depthItems.filter(d => d.prominent).map((item, i) => (
          <RevealSection key={i} delay={i * 0.1} blur>
            <Link to={item.href} className="group block h-full">
              <div className="relative p-8 md:p-10 rounded-sm border border-border/10 bg-background/30 backdrop-blur-sm h-full group-hover:border-primary/15 transition-all duration-500">
                {/* Stat anchor */}
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-4xl md:text-5xl font-display font-bold text-foreground/80 leading-none tracking-tight">
                    {item.stat}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] text-foreground/25 uppercase pb-1">
                    {item.statLabel}
                  </span>
                </div>

                <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                  {item.title}
                </h3>
                <p className="text-[13px] text-foreground/30 leading-relaxed max-w-xs">{item.desc}</p>

                {/* Bottom accent */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/10 to-transparent group-hover:from-primary/20 transition-colors duration-500" />
                  <ArrowRight className="w-3.5 h-3.5 text-foreground/10 group-hover:text-primary/50 transition-all duration-500" />
                </div>
              </div>
            </Link>
          </RevealSection>
        ))}
      </div>

      {/* Supporting items — compact inline */}
      <div className="grid md:grid-cols-2 gap-6">
        {depthItems.filter(d => !d.prominent).map((item, i) => (
          <RevealSection key={i} delay={0.25 + i * 0.08} blur>
            <Link to={item.href} className="group block">
              <div className="flex items-start gap-6 py-6 border-t border-border/10 group-hover:border-primary/10 transition-colors duration-500">
                {/* Stat */}
                <span className="text-2xl font-display font-bold text-foreground/60 leading-none shrink-0 w-12">
                  {item.stat}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-foreground/25 mt-1 leading-relaxed">{item.desc}</p>
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
  <section id="thinking" className="py-20 md:py-28 bg-[hsl(var(--section-alt))]">
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
    <section className="py-16 md:py-20 border-y border-border/30 overflow-hidden bg-[hsl(var(--section-alt))]">
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
    <DepthSection />
    <Perspectives />
    <SelectedWorkAfterThinking />
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
