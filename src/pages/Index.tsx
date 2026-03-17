import { Link } from "react-router-dom";
import SEASignalField from "@/components/shared/SEASignalField";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useCallback, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/shared/MagneticButton";
import TextShimmer from "@/components/shared/TextShimmer";

import PageLayout from "@/components/layout/PageLayout";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";

import CaseCard from "@/components/shared/CaseCard";
import SEOHead, { organizationSchema, webSiteSchema } from "@/components/shared/SEOHead";
import { getFlagshipCases } from "@/data/caseStudies";
import { ArrowRight, Crosshair, Network, Unlink, FlaskConical, Rocket, BarChart3, Megaphone, Brain, Sparkles, ChevronDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════════════
   SECTION 1 — HERO
   Clean, minimal, high-contrast
   ═══════════════════════════════════════════════ */
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 z-0" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, hsl(210 80% 15% / 0.3), transparent 70%)',
      }} />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-[3]" />

      <div className="section-container relative z-10 w-full">
        <div className="max-w-3xl py-32 md:py-0">
          {/* Accent line */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="w-[2px] h-16 bg-primary mb-10 origin-top"
          />

          <h1 className="text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold text-foreground leading-[1.0] tracking-[-0.03em]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
            >
              Where strategy, ecosystems,
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
            >
              and execution{" "}
              <TextShimmer><span className="text-primary">move together.</span></TextShimmer>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease }}
            className="text-base text-muted-foreground mt-8 max-w-lg leading-relaxed"
          >
            Growth & Innovation Operating Partner for enterprise brands scaling across Southeast Asia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Link to="/contact">
              <MagneticButton variant="hero" size="xl">Start a conversation</MagneticButton>
            </Link>
            <Link to="/work">
              <MagneticButton variant="hero-outline" size="xl">See our work</MagneticButton>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8, ease }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-primary/50" strokeWidth={1.5} style={{ animation: 'scroll-bounce 2s ease-in-out infinite' }} />
      </motion.div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 2 — WHY SOUTHEAST ASIA
   Clean split layout
   ═══════════════════════════════════════════════ */
const WhySEA = () => (
  <section id="why-sea" className="relative overflow-hidden bg-card">
    <div className="section-container relative z-10">
      <div className="grid md:grid-cols-2 gap-16 md:gap-20">
        {/* Left — thesis */}
        <div className="py-24 md:py-32">
          <RevealSection blur>
            <p className="eyebrow mb-6">Why Southeast Asia</p>
          </RevealSection>

          <RevealSection blur delay={0.1}>
            <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-bold text-foreground leading-[1.12] tracking-[-0.02em]">
              Growth here moves through ecosystems, local trust, and execution nuance.
            </h2>
          </RevealSection>

          <RevealSection blur delay={0.2}>
            <p className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-semibold text-muted-foreground leading-[1.15] tracking-[-0.02em] mt-3">
              Imported playbooks break.
            </p>
          </RevealSection>

          <RevealSection blur delay={0.3}>
            <div className="mt-10 space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">Nearly 700 million people across ten countries. A digital economy past $300 billion — and accelerating.</p>
              <p className="text-sm text-foreground/70 font-medium leading-relaxed">No single playbook covers it. That is why Enfactum exists.</p>
            </div>
          </RevealSection>

          {/* Metrics — clean grid */}
          <RevealSection blur delay={0.4}>
            <div className="mt-12 pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { num: "700M+", context: "People across ten countries" },
                  { num: "$300B+", context: "Digital economy" },
                  { num: "10", context: "Markets" },
                  { num: "15+", context: "Years operating in-region" },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-3xl font-bold text-foreground leading-none tracking-tight">{item.num}</p>
                    <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">{item.context}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>

        {/* Right — signal field visual */}
        <div className="relative min-h-[300px] md:min-h-0">
          <SEASignalField />
          <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent md:w-1/4 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-card to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 3 — WHERE GROWTH BREAKS
   Clean card grid — no connective tissue
   ═══════════════════════════════════════════════ */
const frictionPoints = [
  { title: "Strategy-execution gap", body: "Brilliant plans that die in local implementation.", icon: Crosshair, num: "01" },
  { title: "Ecosystem underbuilt", body: "Partners and channels without structure or activation.", icon: Network, num: "02" },
  { title: "Brand-demand disconnect", body: "Creative that doesn't connect to commercial outcomes.", icon: Unlink, num: "03" },
  { title: "Innovation in pilot limbo", body: "AI and ventures stuck between demo and scale.", icon: FlaskConical, num: "04" },
  { title: "Launch without momentum", body: "Events and activations without lasting market impact.", icon: Rocket, num: "05" },
];

const GrowthBreaks = () => (
  <section id="growth-breaks" className="py-24 md:py-32 bg-background">
    <div className="section-container">
      <RevealSection blur>
        <div className="max-w-xl mb-14">
          <p className="eyebrow mb-5">Where growth breaks</p>
          <h2 className="headline-lg">The friction points we're built to solve.</h2>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-md">
            Five structural failures that repeat across Southeast Asia — and that no single vendor, agency, or consultant is built to address.
          </p>
        </div>
      </RevealSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {frictionPoints.map((point, i) => (
          <RevealSection key={i} delay={i * 0.08} blur>
            <div className="group p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/25 transition-all duration-400 hover:-translate-y-1 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <point.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-xs text-muted-foreground/50 font-mono">{point.num}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {point.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.body}</p>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 4 — WHAT ENFACTUM BUILDS
   Clean 2×2 card grid
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
  <section id="capabilities" className="py-24 md:py-32 bg-card">
    <div className="section-container">
      <RevealSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5">Growth Architecture</p>
          <h2 className="headline-lg">Four capabilities. One growth architecture.</h2>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-md mx-auto">
            Each capability connects. Together, they form a growth operating system for Southeast Asia.
          </p>
        </div>
      </RevealSection>

      <div className="grid md:grid-cols-2 gap-5">
        {capabilities.map((cap, i) => (
          <RevealSection key={i} delay={i * 0.1} blur>
            <Link to={cap.href} className="group block h-full">
              <div className="h-full p-8 md:p-10 rounded-xl border border-border bg-background hover:border-primary/25 transition-all duration-400 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <cap.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs text-muted-foreground/40 font-mono">{cap.num}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{cap.desc}</p>

                <div className="flex items-center justify-between pt-6 border-t border-border/60">
                  <span className="text-xs text-primary/60 uppercase tracking-wider">{cap.outcome}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
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
   INTERLUDE — PULL QUOTE
   Clean, typographic
   ═══════════════════════════════════════════════ */
const PullQuote = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="section-container">
      <RevealSection>
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-px bg-primary mx-auto mb-10" />
          <p className="font-display font-bold text-foreground leading-[1.12] tracking-[-0.02em]" style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)' }}>
            Growth here moves through <span className="text-primary">ecosystems</span>, <span className="text-primary">local trust</span>, and <span className="text-primary">execution nuance</span>. Imported playbooks break.
          </p>
          <div className="w-12 h-px bg-primary mx-auto mt-10" />
        </div>
      </RevealSection>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 5 — HOW WE WORK
   Clean horizontal steps
   ═══════════════════════════════════════════════ */
const processSteps = [
  { step: "Define", desc: "Diagnose the growth challenge and map the ecosystem landscape before committing resources." },
  { step: "Build", desc: "Architect the GTM infrastructure, partnerships, and demand engine from the ground up." },
  { step: "Operate", desc: "Run the growth architecture with embedded teams, not external advisors." },
  { step: "Transfer", desc: "Hand over operational ownership with documented playbooks and trained internal teams." },
  { step: "Scale", desc: "Expand across markets with proven architecture, not replicated guesswork." },
];

const HowWeWork = () => (
  <section id="how-we-work" className="py-24 md:py-32 bg-card">
    <div className="section-container">
      <RevealSection blur>
        <div className="max-w-xl mb-14">
          <p className="eyebrow mb-5">How we work</p>
          <h2 className="headline-lg">From strategy to operating momentum.</h2>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-md">
            Five phases. Each one builds on the last. No phase exists in isolation.
          </p>
        </div>
      </RevealSection>

      {/* Desktop: horizontal cards */}
      <div className="hidden md:grid grid-cols-5 gap-4">
        {processSteps.map((step, i) => (
          <RevealSection key={i} delay={i * 0.1} blur>
            <div className="group p-6 rounded-xl border border-border bg-background hover:border-primary/20 transition-all duration-400 h-full">
              <span className="text-xs text-primary/50 font-mono block mb-4">
                0{i + 1}
              </span>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {step.step}
              </h3>
              <div className="h-px w-8 bg-primary/20 mb-4" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          </RevealSection>
        ))}
      </div>

      {/* Mobile: vertical list */}
      <div className="md:hidden space-y-4">
        {processSteps.map((step, i) => (
          <RevealSection key={i} delay={i * 0.06}>
            <div className="flex gap-5 p-5 rounded-xl border border-border bg-background">
              <span className="text-sm text-primary/50 font-mono shrink-0 pt-0.5">0{i + 1}</span>
              <div>
                <h3 className="text-base font-bold text-foreground mb-1">{step.step}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
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
   Clean, minimal
   ═══════════════════════════════════════════════ */
const sectorClusters = [
  { label: "Enterprise Technology", names: "HP · Oracle · Lexmark · Dell EMC · Commvault · Seagate · Redington · element14 · markem-imaje" },
  { label: "Consumer & Brand Growth", names: "L'Oréal · Lancôme · Kiehl's · Brands For Less · Delsey · VIP Industries · JSHealth Vitamins · Loose Moose Wine" },
  { label: "Media, Institutions & Ecosystems", names: "The Economist · NUS · Andaz · Abbott · InsureMO · eBaoTech · DSCOOP" },
  { label: "New Economy & Platforms", names: "Lazada · MyRepublic · Singtel · Integrate" },
];

const SectorExperience = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="section-container">
      <div className="grid md:grid-cols-12 gap-12">
        {/* Left — stats */}
        <div className="md:col-span-4">
          <RevealSection blur>
            <p className="eyebrow mb-8">Experience</p>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
              {[
                { num: "40+", label: "Enterprise clients" },
                { num: "100+", label: "Programmes" },
                { num: "15+", label: "Markets" },
                { num: "5+", label: "Year avg. partnerships" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-bold text-foreground leading-none">{stat.num}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>

        {/* Right — sector clusters */}
        <div className="md:col-span-7 md:col-start-6">
          {sectorClusters.map((cluster, i) => (
            <RevealSection key={i} delay={i * 0.06}>
              <div className={`py-6 ${i < sectorClusters.length - 1 ? 'border-b border-border' : ''}`}>
                <p className="text-xs text-primary/60 uppercase tracking-wider mb-2 font-medium">{cluster.label}</p>
                <p className="text-base text-foreground/60 leading-relaxed">{cluster.names}</p>
              </div>
            </RevealSection>
          ))}
          <RevealSection delay={0.3}>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-6">
              Singapore · India · Malaysia · Indonesia · USA · APAC
            </p>
          </RevealSection>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SELECTED WORK
   ═══════════════════════════════════════════════ */
const SelectedWorkAfterThinking = () => {
  const flagships = getFlagshipCases();
  const featured = flagships.slice(0, 2);
  return (
    <section id="selected-work" className="py-24 md:py-32 bg-card">
      <div className="section-container">
        <div className="flex items-end justify-between mb-14">
          <div>
            <RevealSection>
              <p className="eyebrow mb-4">Selected work</p>
              <h2 className="headline-lg">Selected work across the region.</h2>
            </RevealSection>
          </div>
          <RevealSection delay={0.2}>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs hidden md:block">
              Measurable commercial, operational, and ecosystem outcomes across Southeast Asia.
            </p>
          </RevealSection>
        </div>

        <div className="space-y-0">
          {featured.map((cs, i) => (
            <CaseCard key={cs.id} cs={cs} index={i} variant="flagship" />
          ))}
        </div>

        <RevealSection delay={0.3} className="mt-10">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
            View all work <ArrowRight className="w-4 h-4" />
          </Link>
        </RevealSection>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   DEPTH BEHIND THE WORK
   Clean cards
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
  <section id="depth" className="py-24 md:py-32 bg-background">
    <div className="section-container">
      <RevealSection blur>
        <div className="max-w-lg mb-14">
          <p className="eyebrow mb-5">Behind the work</p>
          <h2 className="headline-lg">Depth where it matters.</h2>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-sm">
            Every engagement is led by named principals with domain expertise — not rotated junior consultants.
          </p>
        </div>
      </RevealSection>

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        {depthItems.filter(d => d.prominent).map((item, i) => (
          <RevealSection key={i} delay={i * 0.1} blur>
            <Link to={item.href} className="group block h-full">
              <div className="h-full p-8 md:p-10 rounded-xl border border-border bg-card hover:border-primary/25 transition-all duration-400 hover:-translate-y-1">
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-5xl font-bold text-foreground leading-none tracking-tight">{item.stat}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider pb-1">{item.statLabel}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-xs text-primary/60">Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </Link>
          </RevealSection>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {depthItems.filter(d => !d.prominent).map((item, i) => (
          <RevealSection key={i} delay={0.25 + i * 0.08} blur>
            <Link to={item.href} className="group block">
              <div className="flex items-center gap-6 p-6 rounded-xl border border-border bg-card hover:border-primary/20 transition-all duration-400">
                <span className="text-3xl font-bold text-foreground leading-none shrink-0">{item.stat}</span>
                <div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
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
   PERSPECTIVES — Clean list
   ═══════════════════════════════════════════════ */
const articles = [
  { title: "Southeast Asia Is Not One Market. Stop Planning It Like One.", category: "Architect View", readTime: "4 min" },
  { title: "In B2B, Your Buyer Already Trusts Someone Else.", category: "Architect View", readTime: "3 min" },
  { title: "Imported Playbooks Break Fast in Southeast Asia.", category: "Field Note", readTime: "5 min" },
  { title: "Why Channel Partners Are Your Real Growth Engine in ASEAN.", category: "Field Note", readTime: "4 min" },
];

const Perspectives = () => (
  <section id="thinking" className="py-20 md:py-28 bg-card">
    <div className="section-container">
      <RevealSection>
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="eyebrow mb-4">Thinking</p>
            <h2 className="headline-md">Perspectives from inside the work.</h2>
          </div>
          <Link to="/thinking" className="hidden md:inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
            All thinking <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </RevealSection>

      <div>
        {articles.map((article, i) => (
          <RevealSection key={i} delay={i * 0.06}>
            <Link to="/thinking" className="group block">
              <div className="flex items-center gap-6 md:gap-8 py-5 border-b border-border">
                <span className="text-xs text-primary/50 uppercase tracking-wider shrink-0 w-[90px] hidden md:block">
                  {article.category}
                </span>
                <h3 className="flex-1 text-base md:text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                  {article.title}
                </h3>
                <span className="text-xs text-muted-foreground shrink-0 hidden md:block">{article.readTime}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0" />
              </div>
            </Link>
          </RevealSection>
        ))}
      </div>

      <Link to="/thinking" className="md:hidden inline-flex items-center gap-2 text-sm text-primary font-medium mt-6">
        All thinking <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   INSIGHT CAROUSEL
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
      setActive((prev) => diff > 0 ? (prev + 1) % quotes.length : (prev - 1 + quotes.length) % quotes.length);
    }
    touchStart.current = null;
  }, [quotes.length]);

  return (
    <section className="py-16 md:py-20 border-y border-border bg-background">
      <div className="section-container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className="relative min-h-[180px] md:min-h-[200px] flex items-center w-full max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease }}
              className="text-2xl md:text-3xl lg:text-4xl text-foreground font-bold leading-snug tracking-tight"
            >
              {quotes[active]}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-2 mt-6">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? "bg-primary scale-125" : "bg-foreground/20 hover:bg-foreground/40"}`}
              aria-label={`Go to statement ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

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
    <QuoteCarousel quotes={clientInsights} />
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
