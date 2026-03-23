import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useCallback, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/shared/MagneticButton";
import HeroAtmosphere from "@/components/shared/HeroAtmosphere";

import PageLayout from "@/components/layout/PageLayout";
import RevealSection from "@/components/shared/RevealSection";
import SEOHead, { organizationSchema, webSiteSchema } from "@/components/shared/SEOHead";
import { getFlagshipCases } from "@/data/caseStudies";
import { ArrowRight, ArrowUpRight, ChevronDown, Layers, Megaphone, Brain, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════════════
   HERO — Cinematic, atmospheric, flagship entrance
   ═══════════════════════════════════════════════ */
const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
      {/* Deep atmospheric background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #0A101F 0%, #060D18 40%, #0D1526 70%, #060D18 100%)',
      }} />

      {/* Canvas atmosphere — topology, aurora, signal flow */}
      <HeroAtmosphere />

      {/* Giant SEA watermark with ambient drift for spatial depth */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        initial={{ opacity: 0, scale: 1.08, filter: "blur(12px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 2.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <span
          className="font-display font-black tracking-[-0.06em] text-primary/[0.035]"
          style={{ fontSize: 'clamp(18rem, 40vw, 45rem)', lineHeight: 0.85 }}
        >
          SEA
        </span>
      </motion.div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 px-6 md:px-12 lg:px-16 max-w-[1200px] mx-auto w-full"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-px bg-primary/40" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary/70 font-medium">Growth & Innovation Operating Partner</span>
          </div>
        </motion.div>

        {/* Headline — staggered lines */}
        <div className="max-w-4xl">
          <motion.h1
            className="text-[clamp(2.5rem,5.8vw,5.5rem)] font-extrabold text-foreground leading-[0.92] tracking-[-0.04em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease }}
            >
              Where strategy, ecosystems,
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8, ease }}
            >
              and execution{" "}
              <span className="text-primary">move together.</span>
            </motion.span>
          </motion.h1>
        </div>

        {/* Descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3, ease }}
          className="mt-8 max-w-[580px] leading-[1.7] font-light"
          style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)' }}
        >
          We help enterprise brands enter and grow in Southeast Asian markets — building the commercial infrastructure, partnerships, and on-the-ground teams that drive lasting revenue.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6, ease }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <Link to="/contact">
            <MagneticButton variant="hero" size="xl">Start a conversation</MagneticButton>
          </Link>
          <Link to="/work">
            <MagneticButton variant="hero-outline" size="xl">See our work</MagneticButton>
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
};

/* ═══════════════════════════════════════════════
   STATS — Horizontal counter strip (not cards)
   ═══════════════════════════════════════════════ */
const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const stats = [
    { num: "700M+", label: "People across ten countries" },
    { num: "$300B+", label: "Digital economy" },
    { num: "40+", label: "Enterprise clients" },
    { num: "15+", label: "Years in-region" },
  ];

  return (
    <section ref={ref} className="relative py-16 md:py-20 border-y border-border/20" style={{
      background: 'linear-gradient(90deg, hsl(220 18% 8%), hsl(220 16% 9%), hsl(220 18% 8%))',
    }}>
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`text-center md:text-left ${i > 0 ? 'md:border-l md:border-border/20 md:pl-8' : ''}`}>
                <p className="stat-accent text-[clamp(2rem,3.5vw,3rem)] mb-1" style={{ color: '#FFFFFF' }}>{stat.num}</p>
                <p className="text-xs tracking-wide" style={{ color: 'rgba(255,255,255,0.65)' }}>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   BRAND MARQUEE — Trusted-by logo/text strip
   ═══════════════════════════════════════════════ */
const brandNames = [
  "HP", "Oracle", "Dell EMC", "L'Oréal", "Lancôme", "The Economist", "Lazada",
  "Singtel", "NUS", "Seagate", "Kiehl's", "Abbott", "Commvault", "Redington",
];

const BrandMarquee = () => (
  <RevealSection blur delay={0.1}>
    <section className="relative py-10 md:py-12 border-b border-border/10 overflow-hidden">
      <div className="section-container mb-6">
        <p className="eyebrow text-center">Trusted by</p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to right, hsl(220 16% 7%), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to left, hsl(220 16% 7%), transparent)' }} />
        <div className="flex animate-ticker" style={{ animationDuration: '35s', width: 'max-content' }}>
          {[...brandNames, ...brandNames].map((name, i) => (
            <span
              key={i}
              className="inline-flex items-center px-8 md:px-10 text-[15px] md:text-[16px] font-display font-semibold tracking-[-0.01em] whitespace-nowrap hover:text-foreground/60 transition-colors duration-500"
              style={{ color: 'rgba(255,255,255,0.40)' }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  </RevealSection>
);

/* ═══════════════════════════════════════════════
   WHY SEA — Editorial asymmetric layout
   ═══════════════════════════════════════════════ */
const WhySEA = () => {
  const seaRef = useRef<HTMLDivElement>(null);
  const seaInView = useInView(seaRef, { once: true, amount: 0.2 });
  const markets = [
    { market: "Singapore", role: "HQ & Strategy Hub", code: "sg" },
    { market: "India", role: "Operating Bench", code: "in" },
    { market: "Malaysia", role: "Regional Node", code: "my" },
    { market: "Indonesia", role: "Growth Market", code: "id" },
  ];

  return (
  <section ref={seaRef} className="relative py-16 md:py-24 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none" style={{
      background: 'radial-gradient(ellipse 60% 50% at 70% 40%, hsl(210 80% 20% / 0.08), transparent 60%)',
    }} />
    {/* Subtle vertical structure line */}
    <div className="absolute top-0 bottom-0 left-[50%] w-px bg-gradient-to-b from-transparent via-border/15 to-transparent hidden md:block" />
    {/* Bottom bleed line into capabilities */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/[0.06] to-transparent" />

    <div className="section-container relative z-10">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="md:col-span-6">
          <RevealSection blur>
            <p className="eyebrow mb-5">Why Southeast Asia</p>
            <h2 className="headline-lg max-w-md">
              Growth here moves through ecosystems, local trust, and execution nuance<span className="text-primary">.</span>
            </h2>
          </RevealSection>
          <RevealSection delay={0.15} blur>
            <p className="text-secondary-foreground mt-6 leading-[1.8] max-w-md text-[15px]">
              Nearly 700 million people across ten countries — no single playbook covers it. That is why Enfactum exists.
            </p>
            <Link to="/company" className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-6 hover:gap-3 transition-all duration-300">
              Learn more about us <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealSection>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <div className="space-y-0">
            {markets.map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={seaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-5 py-4 border-b border-border/15 group hover:border-primary/15 transition-colors duration-500">
                  <img src={`https://flagcdn.com/w80/${node.code}.png`} alt={node.market} className="w-8 h-8 rounded-full object-cover" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{node.market}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{node.role}</p>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary/50 transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};



/* ═══════════════════════════════════════════════
   CAPABILITIES — Interconnected architecture
   ═══════════════════════════════════════════════ */
const capData = [
  { title: "Growth Infrastructure", desc: "GTM strategy, partner programs, and demand operations that build lasting market position.", href: "/capabilities/growth-infrastructure", num: "01", icon: Layers },
  { title: "Brand & Demand", desc: "Performance, social, creative, and digital experiences that connect brand to commercial outcomes.", href: "/capabilities/brand-demand", num: "02", icon: Megaphone },
  { title: "AI Ecosystems", desc: "Venture strategy, startup scouting, and innovation programs that move beyond pilot stage.", href: "/capabilities/ai-ecosystems", num: "03", icon: Brain },
  { title: "Live Experiences", desc: "Product launches, summits, roadshows, and activations that create market momentum.", href: "/capabilities/live-experiences", num: "04", icon: Sparkles },
];

const Capabilities = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
  <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden" style={{
    background: 'linear-gradient(180deg, hsl(220 18% 8%), hsl(222 20% 10%), hsl(220 18% 8%))',
  }}>
    {/* Structural grid lines suggesting architecture */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 bottom-0 left-[25%] w-px bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent hidden md:block" />
      <div className="absolute top-0 bottom-0 left-[50%] w-px bg-gradient-to-b from-transparent via-primary/[0.06] to-transparent hidden md:block" />
      <div className="absolute top-0 bottom-0 left-[75%] w-px bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent hidden md:block" />
      <div className="absolute left-0 right-0 top-[50%] h-px bg-gradient-to-r from-transparent via-primary/[0.04] to-transparent hidden md:block" />
    </div>

    <div className="section-container relative z-10">
      <RevealSection>
        <div className="text-center mb-16 md:mb-20">
          <p className="eyebrow mb-5">Our Solutions</p>
          <h2 className="headline-lg">Four capabilities<span className="text-primary">.</span><br className="hidden md:block" />One growth architecture<span className="text-primary">.</span></h2>
          <p className="text-sm max-w-md mx-auto leading-relaxed text-muted-foreground mt-5">
            Each capability connects. Together, they form a growth operating system for Southeast Asia.
          </p>
        </div>
      </RevealSection>

      {/* Architecture grid — 2x2 with animated connecting lines */}
      <div className="relative">
        {/* Center connection hub — animated */}
        {/* Center connection node */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-primary/15 bg-primary/[0.03] backdrop-blur-sm z-10 hidden md:flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
        </motion.div>

        {/* Connecting lines — static, revealed on scroll */}
        <div className="absolute inset-0 hidden md:block pointer-events-none z-[5]">
          <motion.div
            className="absolute top-[calc(50%-1px)] left-[25%] h-px origin-right"
            style={{ width: '25%', background: 'linear-gradient(90deg, hsl(210 100% 50% / 0.04), hsl(210 100% 50% / 0.12))' }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute top-[calc(50%-1px)] left-[50%] h-px origin-left"
            style={{ width: '25%', background: 'linear-gradient(90deg, hsl(210 100% 50% / 0.12), hsl(210 100% 50% / 0.04))' }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute left-[calc(50%-1px)] top-[25%] w-px origin-bottom"
            style={{ height: '25%', background: 'linear-gradient(180deg, hsl(210 100% 50% / 0.04), hsl(210 100% 50% / 0.12))' }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute left-[calc(50%-1px)] top-[50%] w-px origin-top"
            style={{ height: '25%', background: 'linear-gradient(180deg, hsl(210 100% 50% / 0.12), hsl(210 100% 50% / 0.04))' }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5 group/grid">
          {capData.map((cap, i) => (
            <RevealSection key={i} delay={i * 0.1} scale>
              <Link to={cap.href} className="group/card block h-full">
                <div className="relative h-full rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm p-8 md:p-10 flex flex-col justify-between min-h-[280px] overflow-hidden transition-all duration-700 hover:border-primary/25 hover:bg-card/60 group-hover/grid:opacity-60 hover:!opacity-100">
                  {/* Subtle gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover/card:from-primary/[0.02] group-hover/card:to-primary/[0.05] transition-all duration-700 rounded-xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <cap.icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 mt-auto">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 transition-colors duration-400 group-hover/card:text-primary">
                      {cap.title}
                    </h3>
                    <p className="text-sm leading-relaxed max-w-sm text-muted-foreground">{cap.desc}</p>
                  </div>

                  <div className="relative z-10 mt-6 flex items-center gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-400">
                    <span className="text-xs text-primary font-medium">Explore</span>
                    <ArrowRight className="w-3 h-3 text-primary" />
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
};

/* ═══════════════════════════════════════════════
   PULL QUOTE — Human-voice founder quote
   ═══════════════════════════════════════════════ */
const PullQuote = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0.3]);
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.45], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative py-20 md:py-20 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, hsl(220 16% 7% / 0), hsl(215 30% 9% / 0.6) 30%, hsl(210 35% 10% / 0.8) 50%, hsl(215 30% 9% / 0.6) 70%, hsl(220 16% 7% / 0))',
      }} />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 50%, hsl(210 80% 15% / 0.1), transparent 70%)',
      }} />

      <div className="section-container relative z-10">
        <motion.div style={{ scale, opacity }} className="max-w-3xl mx-auto text-center">
          {/* Top rule */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <motion.div className="h-px bg-primary/25" style={{ width: lineWidth }} />
          </div>

          <blockquote className="font-display font-bold text-foreground leading-[1.25] tracking-[-0.02em]" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)' }}>
            "Growth in Southeast Asia doesn't follow a formula. It follows <span className="text-primary">relationships</span>, <span className="text-primary">ecosystems</span>, and the <span className="text-primary">judgment</span> of people who've done it before."
          </blockquote>

          <div className="mt-10">
            <p className="text-sm font-semibold text-foreground tracking-tight">Ajay Mohan</p>
            <p className="text-xs text-foreground/65 mt-1 font-body">Founder & Managing Partner</p>
          </div>

          {/* Bottom rule */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.div className="h-px bg-primary/25" style={{ width: lineWidth }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   HOW WE WORK — Authoritative operating sequence
   ═══════════════════════════════════════════════ */
const processSteps = [
  { step: "Define", desc: "Diagnose the growth challenge, map the ecosystem landscape, and align stakeholders around a shared growth thesis.", phase: "Strategy" },
  { step: "Build", desc: "Architect GTM infrastructure, partnerships, demand engines, and the operating model that will carry it all.", phase: "Architecture" },
  { step: "Operate", desc: "Run the growth architecture with embedded teams — executing, optimising, and owning outcomes alongside the client.", phase: "Execution" },
  { step: "Transfer", desc: "Hand over documented playbooks, trained teams, and operational capability — not dependency.", phase: "Capability" },
  { step: "Scale", desc: "Expand across markets, channels, and business units with proven, repeatable architecture.", phase: "Expansion" },
];

const HowWeWork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden" style={{
      background: 'linear-gradient(180deg, hsl(220 16% 7%), hsl(218 22% 9.5%), hsl(220 16% 7%))',
    }}>
      {/* Structural vertical guides */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {[20, 40, 60, 80].map((pct) => (
          <div key={pct} className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/[0.015] to-transparent" style={{ left: `${pct}%` }} />
        ))}
      </div>

      <div className="section-container relative z-10">
        {/* Header — asymmetric with supporting context */}
        <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-24">
          <div className="md:col-span-6">
            <RevealSection blur>
              <p className="eyebrow mb-5">How We Work</p>
              <h2 className="headline-lg max-w-lg">From strategy to operating momentum<span className="text-primary">.</span></h2>
            </RevealSection>
          </div>
          <div className="md:col-span-4 md:col-start-8 flex items-end">
            <RevealSection delay={0.1}>
              <p className="text-[13px] text-foreground/65 leading-relaxed font-body">
                Five phases, one continuous operating sequence — each phase builds on the last to create lasting infrastructure.
              </p>
            </RevealSection>
          </div>
        </div>

        {/* Process sequence — vertical on mobile, horizontal on desktop */}
        <div className="relative">
          {/* Horizontal connecting rail — desktop */}
          <motion.div
            className="absolute top-[28px] left-0 right-0 h-px hidden md:block origin-left"
            style={{ background: 'linear-gradient(90deg, hsl(210 100% 50% / 0.05), hsl(210 100% 50% / 0.15) 20%, hsl(210 100% 50% / 0.15) 80%, hsl(210 100% 50% / 0.05))' }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="grid md:grid-cols-5 gap-0">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={`relative group ${i < processSteps.length - 1 ? 'md:border-r md:border-border/8' : ''} border-b md:border-b-0 border-border/10`}
              >
                <div className="py-8 md:py-0 md:px-7 md:first:pl-0 md:last:pr-0">
                  {/* Step node — on the rail */}
                  <div className="flex items-center gap-3 mb-7 md:mb-8">
                    <div className="relative">
                      <div className="w-[14px] h-[14px] rounded-full border-2 border-primary/30 bg-background relative z-10 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500" />
                    </div>
                    <span className="text-[10px] text-foreground/65 tracking-[0.2em] uppercase font-body">{step.phase}</span>
                  </div>

                  {/* Step number */}
                  <span className="text-[40px] md:text-[48px] font-display font-bold text-foreground/[0.03] leading-none select-none block mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Step name */}
                  <h3 className="text-xl md:text-[1.375rem] font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-400 tracking-[-0.01em]">
                    {step.step}
                  </h3>

                  {/* Accent line */}
                  <div className="w-8 h-px bg-primary/15 mb-4 group-hover:w-12 group-hover:bg-primary/30 transition-all duration-500" />

                  {/* Description */}
                  <p className="text-[12px] leading-[1.75] text-foreground/70 font-body max-w-[200px]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTORS — Curated breadth & credibility
   ═══════════════════════════════════════════════ */
const sectorClusters = [
  { label: "Enterprise Technology", names: "HP · Oracle · Dell EMC · Commvault · Singtel · Redington · element14", num: "01" },
  { label: "Consumer & Brand Growth", names: "L'Oréal · Lancôme · Kiehl's · Brands For Less · JSHealth", num: "02" },
  { label: "Industrial & Energy", names: "Castrol · Güntner · markem-imaje", num: "03" },
  { label: "Institutions & Ecosystems", names: "The Economist · NUS · Abbott · Andaz · eBaoTech", num: "04" },
  { label: "New Economy & Innovation", names: "Lazada · MyRepublic · InsureMO · Integrate", num: "05" },
];

const SectorExperience = () => (
  <section className="relative py-20 md:py-28 overflow-hidden bg-[hsl(var(--section-alt))]">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />
    {/* Subtle vertical guide at the column split */}
    <div className="absolute top-0 bottom-0 left-[38%] w-px bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent hidden md:block" />

    <div className="section-container relative z-10">
      {/* Section header — full width, editorial */}
      <RevealSection blur>
        <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-24">
          <div className="md:col-span-5">
            <p className="eyebrow mb-5">Experience</p>
            <h2 className="headline-lg"><span className="text-primary">Credibility</span> built across sectors<span className="text-foreground">.</span></h2>
          </div>
          <div className="md:col-span-4 md:col-start-8 flex items-end">
            <p className="text-[13px] text-foreground/65 leading-relaxed font-body">
              A decade of operating across enterprise, consumer, industrial, and new-economy sectors — the breadth that builds pattern recognition.
            </p>
          </div>
        </div>
      </RevealSection>

      <div className="grid md:grid-cols-12 gap-12 md:gap-16">
        {/* Left — Monumental stats with architectural framing */}
        <div className="md:col-span-4">
          <RevealSection blur>
            <div className="space-y-0">
              {[
                { num: "100+", label: "Programmes delivered", sub: "strategy through execution" },
                { num: "5+", label: "Year avg. partnerships", sub: "embedded, not project-based" },
                { num: "10", label: "Markets covered", sub: "across Southeast Asia" },
              ].map((stat, i) => (
                <div key={stat.label} className={`py-8 ${i > 0 ? 'border-t border-border/10' : ''}`}>
                  <div className="flex items-baseline gap-4">
                    <p className="stat-accent text-[clamp(2.5rem,4vw,3.75rem)]">{stat.num}</p>
                    <div className="w-6 h-px bg-primary/20 mt-1" />
                  </div>
                  <p className="text-[13px] font-medium text-foreground/70 mt-3 font-body">{stat.label}</p>
                  <p className="text-[11px] text-foreground/65 mt-1 font-body">{stat.sub}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link to="/brands" className="inline-flex items-center gap-2 text-[11px] text-primary/50 hover:text-primary uppercase tracking-[0.2em] font-body transition-colors duration-500">
                View all brands <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </RevealSection>
        </div>

        {/* Right — Sector architecture as curated ledger */}
        <div className="md:col-span-7 md:col-start-6">
          <div className="space-y-0">
            {sectorClusters.map((cluster, i) => (
              <RevealSection key={i} delay={0.1 + i * 0.08} blur>
                <Link to="/brands" className="group block">
                  <div className={`py-8 md:py-9 ${i > 0 ? 'border-t border-border/10' : ''} group-hover:border-primary/15 transition-colors duration-500`}>
                    <div className="grid grid-cols-12 gap-4 items-start">
                      {/* Number */}
                      <div className="col-span-2 md:col-span-1">
                        <span className="text-[28px] md:text-[32px] font-display font-bold text-foreground/[0.05] leading-none select-none block mt-1">
                          {cluster.num}
                        </span>
                      </div>
                      {/* Content */}
                      <div className="col-span-8 md:col-span-9">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-[15px] md:text-base font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-400">
                            {cluster.label}
                          </h3>
                        </div>
                        <p className="text-[12px] text-foreground/65 leading-[1.8] font-body">{cluster.names}</p>
                      </div>
                      {/* Arrow */}
                      <div className="col-span-2 flex items-center justify-end mt-1">
                        <ArrowRight className="w-3.5 h-3.5 text-foreground/8 group-hover:text-primary group-hover:translate-x-1 transition-all duration-400" />
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SELECTED WORK — Editorial proof moment
   ═══════════════════════════════════════════════ */
const SelectedWork = () => {
  const flagships = getFlagshipCases();
  const lead = flagships[0]; // HP
  const supporting = flagships.slice(1, 3); // Economist, BFL

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{
      background: 'linear-gradient(170deg, hsl(220 18% 8%), hsl(222 20% 10%), hsl(220 18% 8%))',
    }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 40% 50% at 80% 70%, hsl(210 100% 50% / 0.04), transparent 50%)',
      }} />
      {/* Editorial left accent */}
      <div className="absolute top-[10%] bottom-[10%] left-[5%] w-px bg-gradient-to-b from-transparent via-primary/[0.05] to-transparent hidden md:block" />

      <div className="section-container relative z-10">
        <RevealSection>
          <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-24">
            <div className="md:col-span-6">
              <p className="eyebrow mb-4">Selected Work</p>
              <h2 className="headline-lg">Proven outcomes<span className="text-primary">,</span> real change<span className="text-primary">.</span></h2>
            </div>
            <div className="md:col-span-4 md:col-start-8 flex items-end">
              <Link to="/work" className="inline-flex items-center gap-2 text-[11px] text-primary/50 hover:text-primary uppercase tracking-[0.2em] font-body transition-colors duration-500">
                View all work <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </RevealSection>

        {/* ─── LEAD CASE — HP — Full editorial feature ─── */}
        {lead && (
          <RevealSection blur>
            <Link to={`/work#${lead.id}`} className="group block">
              <article className="relative pb-16 md:pb-20 border-b border-border/15">
                {/* Large faint client watermark */}
                <span className="absolute top-0 right-0 text-[100px] md:text-[140px] font-display font-black text-foreground/[0.015] leading-none select-none pointer-events-none hidden md:block tracking-[-0.04em]">
                  {lead.client}
                </span>

                <div className="grid md:grid-cols-12 gap-8 md:gap-12 relative z-10">
                  <div className="md:col-span-7">
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      {lead.capabilities?.slice(0, 2).map((tag: string) => (
                        <span key={tag} className="text-[9px] px-2.5 py-1 rounded-sm bg-primary/[0.06] text-primary/60 font-medium tracking-[0.15em] uppercase">
                          {tag}
                        </span>
                      ))}
                      {lead.sectors?.[0] && (
                        <span className="text-[9px] px-2.5 py-1 rounded-sm bg-secondary text-muted-foreground/75 font-medium tracking-[0.15em] uppercase">
                          {lead.sectors[0]}
                        </span>
                      )}
                    </div>

                    {/* Client */}
                    <span className="text-[11px] text-foreground/65 uppercase tracking-[0.2em] font-body block mb-3">{lead.client}</span>

                    {/* Headline — dramatic scale */}
                    <h3 className="text-2xl md:text-3xl lg:text-[2.25rem] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em] group-hover:text-primary transition-colors duration-500 max-w-xl">
                      {lead.headline}
                    </h3>

                    {/* Challenge */}
                    <p className="text-[13px] text-foreground/65 mt-6 leading-[1.8] max-w-md font-body">
                      {lead.challenge}
                    </p>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-2 mt-8 text-[11px] text-primary/50 uppercase tracking-[0.15em] font-body group-hover:text-primary/80 transition-colors duration-500">
                      Read case study <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Right — Monumental metrics */}
                  <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end">
                    <div className="space-y-8">
                      {lead.results?.slice(0, 3).map((r: { metric: string; label: string }, ri: number) => (
                        <div key={ri}>
                          <p className="font-display text-3xl md:text-4xl font-bold text-primary/70 tracking-tight leading-none">
                            {r.metric}
                          </p>
                         <span className="text-[11px] text-foreground/65 mt-2 block leading-snug font-body">
                            {r.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </RevealSection>
        )}

        {/* ─── SUPPORTING CASES — Editorial rows ─── */}
        <div className="mt-0">
          {supporting.map((cs, i) => (
            <RevealSection key={cs.id} delay={0.1 + i * 0.08} blur>
              <Link to={`/work#${cs.id}`} className="group block">
                <article className="grid md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-12 border-b border-border/10 group-hover:border-primary/10 transition-colors duration-500">
                  {/* Number */}
                  <div className="md:col-span-1 hidden md:block">
                    <span className="text-[32px] font-display font-bold text-foreground/[0.04] leading-none select-none">
                      {String(i + 2).padStart(2, '0')}
                    </span>
                  </div>
                  {/* Client + Headline */}
                  <div className="md:col-span-4">
                    <span className="text-[10px] text-foreground/65 uppercase tracking-[0.2em] font-body block mb-2">{cs.client}</span>
                    <h3 className="font-display text-lg font-bold text-foreground leading-[1.2] group-hover:text-primary transition-colors duration-400">
                      {cs.headline}
                    </h3>
                  </div>
                  {/* Challenge */}
                  <div className="md:col-span-3">
                    <p className="text-[12px] text-foreground/65 leading-[1.75] font-body">{cs.challenge}</p>
                  </div>
                  {/* Metrics */}
                  <div className="md:col-span-3">
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                      {cs.results?.slice(0, 2).map((r: { metric: string; label: string }, ri: number) => (
                        <div key={ri}>
                          <p className="text-lg font-display font-bold text-primary tracking-tight leading-none">{r.metric}</p>
                          <span className="text-[10px] text-foreground/65 mt-1 block font-body">{r.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="md:col-span-1 flex items-center justify-end">
                    <ArrowRight className="w-3.5 h-3.5 text-foreground/8 group-hover:text-primary group-hover:translate-x-1 transition-all duration-400" />
                  </div>
                </article>
              </Link>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   DEPTH — Institutional trust strip (not cards)
   ═══════════════════════════════════════════════ */
const DepthSection = () => (
  <section className="relative py-20 md:py-24 overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />

    <div className="section-container relative z-10">
      <RevealSection blur>
        <p className="eyebrow mb-4">Behind the work</p>
        <h2 className="headline-lg text-foreground mb-16">Depth where it matters<span className="text-primary">.</span></h2>
      </RevealSection>

      <div className="grid md:grid-cols-3 gap-0 border border-border/20 rounded-xl overflow-hidden">
        {[
          { stat: "12+", label: "Senior Principals", desc: "Named leaders across strategy, growth, technology, and creative.", href: "/company/leadership" },
          { stat: "200+", label: "Operating Bench", desc: "Execution depth across SEA and India — embedded, not outsourced.", href: "/company" },
          { stat: "5", label: "Regional Nodes", desc: "Singapore · India · Malaysia · Indonesia · USA", href: "/company/regional-nodes" },
        ].map((item, i) => (
          <RevealSection key={i} delay={i * 0.1}>
            <Link to={item.href} className="group block">
              <div className={`p-8 md:p-10 h-full flex flex-col justify-between min-h-[260px] transition-all duration-500 hover:bg-card/40 ${i < 2 ? 'md:border-r md:border-border/20' : ''}`}>
                <p className="stat-accent text-5xl md:text-6xl">{item.stat}</p>
                <div className="mt-auto">
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">{item.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
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
   THINKING — Editorial article list
   ═══════════════════════════════════════════════ */
const articles = [
  { title: "Southeast Asia Is Not One Market. Stop Planning It Like One.", category: "Architect View", readTime: "4 min" },
  { title: "In B2B, Your Buyer Already Trusts Someone Else.", category: "Architect View", readTime: "3 min" },
  { title: "Imported Playbooks Break Fast in Southeast Asia.", category: "Field Note", readTime: "5 min" },
  { title: "Why Channel Partners Are Your Real Growth Engine in ASEAN.", category: "Field Note", readTime: "4 min" },
];

const Thinking = () => {
  const thinkRef = useRef<HTMLDivElement>(null);
  const thinkInView = useInView(thinkRef, { once: true, amount: 0.15 });

  return (
  <section ref={thinkRef} className="relative py-20 md:py-24 overflow-hidden" style={{
    background: 'linear-gradient(180deg, hsl(220 18% 8%), hsl(222 18% 9%), hsl(220 18% 8%))',
  }}>
    <div className="section-container relative z-10">
      <RevealSection blur>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-4">Insights</p>
            <h2 className="headline-md">Perspectives from inside the work<span className="text-primary">.</span></h2>
          </div>
          <Link to="/thinking" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300">
            All insights <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </RevealSection>

      {articles.map((article, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={thinkInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/thinking" className="group block">
            <div className="flex items-center gap-6 md:gap-8 py-5 border-b border-border/20 transition-colors duration-300 group-hover:border-primary/15">
              <span className="text-xs uppercase tracking-wider text-primary/50 shrink-0 w-[90px] hidden md:block">
                {article.category}
              </span>
              <h3 className="flex-1 text-base md:text-lg font-medium text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                {article.title}
              </h3>
              <span className="text-xs text-muted-foreground shrink-0 hidden md:block">{article.readTime}</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground/20 group-hover:text-primary transition-colors duration-300 shrink-0" />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
  );
};

/* ═══════════════════════════════════════════════
   POINT OF VIEW — Conviction moment
   ═══════════════════════════════════════════════ */
const beliefs = [
  { statement: <>Enterprise pipeline grows when you lead with <span className="text-primary">diagnostics</span>, not product demos.</>, domain: "Growth Infrastructure" },
  { statement: <>Multi-market launch succeeds when you build <span className="text-primary">distribution before awareness</span>.</>, domain: "Brand & Demand" },
  { statement: <>The best innovation programs start with a <span className="text-primary">commercial mandate</span>, not a technology bet.</>, domain: "AI Ecosystems" },
  { statement: <>Events become <span className="text-primary">pipeline machines</span> when designed backward from business objectives.</>, domain: "Live Experiences" },
];

const PointOfView = () => {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % beliefs.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="relative py-20 md:py-24 overflow-hidden">
      {/* Continuous background — no alternate bg, just the default page tone */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 60% at 50% 50%, hsl(210 60% 12% / 0.05), transparent 70%)',
      }} />

      <div className="section-container relative z-10">
        {/* Section intro — centered, editorial */}
        <RevealSection blur>
          <div className="flex items-center gap-4 mb-16 md:mb-20">
            <div className="w-8 h-px bg-primary/30" />
            <p className="eyebrow">What we believe</p>
          </div>
        </RevealSection>

        {/* Main conviction area */}
        <div className="max-w-4xl">
          {/* Active statement */}
          <div className="relative min-h-[120px] md:min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                className="font-display font-bold text-foreground leading-[1.1] tracking-[-0.025em]"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {beliefs[active].statement}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Domain indicator + progress — inline, quiet */}
          <div className="flex items-center gap-5 mt-10 md:mt-12">
            <AnimatePresence mode="wait">
              <motion.span
                key={active}
                className="text-[11px] uppercase tracking-[0.2em] text-primary/50 font-medium shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {beliefs[active].domain}
              </motion.span>
            </AnimatePresence>
            <div className="flex-1 h-px bg-border/10 relative overflow-hidden max-w-[120px]">
              <motion.div
                className="absolute top-0 left-0 h-full bg-primary/25"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                key={active}
                transition={{ duration: 6, ease: 'linear' }}
              />
            </div>
            <span className="text-[10px] text-foreground/10 font-mono tracking-wider">
              {String(active + 1).padStart(2, '0')}<span className="text-foreground/[0.06]"> / </span>{String(beliefs.length).padStart(2, '0')}
            </span>
          </div>

          {/* Domain tabs — horizontal, minimal */}
          <div className="flex flex-wrap gap-0 mt-10 md:mt-14 border-t border-border/10 pt-0">
            {beliefs.map((b, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`py-4 pr-6 md:pr-8 text-left transition-all duration-400 relative ${
                  i === active ? '' : 'opacity-30 hover:opacity-50'
                }`}
              >
                <span className={`text-[11px] uppercase tracking-[0.15em] font-body transition-colors duration-400 ${
                  i === active ? 'text-foreground/80' : 'text-foreground/40'
                }`}>
                  {b.domain}
                </span>
                {i === active && (
                  <motion.div
                    className="absolute top-0 left-0 right-6 md:right-8 h-px bg-primary/40"
                    layoutId="beliefTab"
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════════ */
const CTASection = () => (
  <section className="relative py-24 md:py-24 overflow-hidden" style={{
    background: 'linear-gradient(180deg, hsl(220 18% 8%), hsl(222 20% 11%) 50%, hsl(220 16% 7%))',
  }}>
    <div className="absolute inset-0 pointer-events-none" style={{
      background: 'radial-gradient(ellipse 50% 60% at 50% 50%, hsl(210 100% 50% / 0.04), transparent 60%)',
    }} />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/15 to-transparent" />

    <div className="section-container text-center relative z-10">
      <RevealSection blur>
        <div className="max-w-2xl mx-auto">
          <div className="w-10 h-px bg-primary/25 mx-auto mb-8" />
          <h2 className="headline-lg">Let's move growth forward<span className="text-primary">.</span></h2>
          <p className="text-[15px] text-muted-foreground mt-5 max-w-md mx-auto leading-relaxed">
            Tell us where growth needs to move next.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link to="/contact">
              <Button variant="hero" size="xl">Start a conversation</Button>
            </Link>
            <Link to="/capabilities">
              <Button variant="hero-outline" size="xl">Explore capabilities</Button>
            </Link>
          </div>
          <a href="mailto:info@enfactum.com" className="inline-block text-sm text-muted-foreground mt-6 transition-colors duration-300 hover:text-foreground">
            Or email us directly at info@enfactum.com
          </a>
        </div>
      </RevealSection>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />
  </section>
);

/* ═══════════════════════════════════════════════
   PAGE ASSEMBLY
   ═══════════════════════════════════════════════ */
const Index = () => (
  <PageLayout>
    <SEOHead
      title="Enfactum — Growth & Innovation Operating Partner for Southeast Asia"
      description="Enfactum brings together strategy, ecosystems, and execution to help enterprise brands scale across Southeast Asia."
      path="/"
      jsonLd={{ ...organizationSchema, ...webSiteSchema }}
    />

    <Hero />
    <Stats />
    <BrandMarquee />
    <WhySEA />
    <Capabilities />
    <SectorExperience />
    <PullQuote />
    <HowWeWork />
    <SelectedWork />
    <DepthSection />
    <Thinking />
    
    <CTASection />
  </PageLayout>
);

export default Index;
