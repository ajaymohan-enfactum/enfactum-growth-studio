import { Link } from "react-router-dom";
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
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════════════
   HERO — Full-screen, centered, minimal
   Inspired by Elephant Design's bold simplicity
   ═══════════════════════════════════════════════ */
const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
    {/* Ambient glow */}
    <div className="absolute inset-0 z-0" style={{
      background: 'radial-gradient(ellipse 60% 50% at 50% 45%, hsl(210 80% 15% / 0.25), transparent 70%)',
    }} />

    <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 48 }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
        className="h-[2px] bg-primary mx-auto mb-12"
      />

      <motion.h1
        className="text-[clamp(2.75rem,6vw,5.5rem)] font-extrabold text-foreground leading-[0.95] tracking-[-0.04em]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease }}
      >
        Strategy, ecosystems,{" "}
        <br className="hidden md:block" />
        and execution{" "}
        <TextShimmer><span className="text-primary">move together.</span></TextShimmer>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9, ease }}
        className="text-lg md:text-xl text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed font-light"
      >
        Growth & Innovation Operating Partner for enterprise brands scaling across Southeast Asia.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1, ease }}
        className="flex flex-wrap justify-center gap-4 mt-12"
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
      transition={{ duration: 0.6, delay: 1.8, ease }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
    >
      <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Scroll</span>
      <ChevronDown className="w-4 h-4 text-primary/50" strokeWidth={1.5} style={{ animation: 'scroll-bounce 2s ease-in-out infinite' }} />
    </motion.div>
  </section>
);

/* ═══════════════════════════════════════════════
   STATS BENTO — Elephant Design inspired grid
   Large accent-colored numbers in a bento layout
   ═══════════════════════════════════════════════ */
const StatsBento = () => (
  <section className="border-y border-border/60">
    <div className="section-full">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {[
          { num: "700M+", label: "People across ten countries" },
          { num: "$300B+", label: "Digital economy" },
          { num: "40+", label: "Enterprise clients" },
          { num: "15+", label: "Years in-region" },
        ].map((stat, i) => (
          <RevealSection key={i} delay={i * 0.08}>
            <div className="bento-cell flex flex-col justify-center min-h-[160px] md:min-h-[200px]">
              <p className="stat-accent text-[clamp(2rem,4vw,3.5rem)]">{stat.num}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-3">{stat.label}</p>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   WHY SEA — Split bento with text + visual
   ═══════════════════════════════════════════════ */
const WhySEA = () => (
  <section className="border-b border-border/60">
    <div className="section-full">
      <div className="grid md:grid-cols-2">
        {/* Left — narrative */}
        <div className="bento-cell py-16 md:py-24 px-8 md:px-16">
          <RevealSection blur>
            <p className="eyebrow mb-6">Why Southeast Asia</p>
          </RevealSection>
          <RevealSection blur delay={0.1}>
            <h2 className="headline-lg max-w-lg">
              Growth here moves through ecosystems, local trust, and execution nuance.
            </h2>
          </RevealSection>
          <RevealSection blur delay={0.2}>
            <p className="text-xl md:text-2xl font-semibold text-muted-foreground mt-4 leading-snug tracking-tight">
              Imported playbooks break.
            </p>
          </RevealSection>
          <RevealSection blur delay={0.3}>
            <p className="text-sm text-muted-foreground mt-8 leading-relaxed max-w-md">
              Nearly 700 million people across ten countries. A digital economy past $300 billion — and accelerating. No single playbook covers it. That is why Enfactum exists.
            </p>
          </RevealSection>
        </div>

        {/* Right — visual grid of markets */}
        <div className="grid grid-cols-2">
          {[
            { market: "Singapore", role: "HQ & Strategy Hub" },
            { market: "India", role: "Operating Bench" },
            { market: "Malaysia", role: "Regional Node" },
            { market: "Indonesia", role: "Growth Market" },
          ].map((node, i) => (
            <RevealSection key={i} delay={0.1 + i * 0.08}>
              <div className="bento-cell flex flex-col justify-end min-h-[140px] md:min-h-[180px]">
                <p className="text-lg font-bold text-foreground">{node.market}</p>
                <p className="text-xs text-muted-foreground mt-1">{node.role}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   CAPABILITIES — 2×2 bento cards
   ═══════════════════════════════════════════════ */
const capabilities = [
  { title: "Growth Infrastructure", desc: "GTM strategy, partner programs, and demand operations that build lasting market position.", href: "/capabilities/growth-infrastructure", num: "01" },
  { title: "Brand & Demand", desc: "Performance, social, creative, and digital experiences that connect brand to commercial outcomes.", href: "/capabilities/brand-demand", num: "02" },
  { title: "AI Ecosystems", desc: "Venture strategy, startup scouting, and innovation programs that move beyond pilot stage.", href: "/capabilities/ai-ecosystems", num: "03" },
  { title: "Live Experiences", desc: "Product launches, summits, roadshows, and activations that create market momentum.", href: "/capabilities/live-experiences", num: "04" },
];

const Capabilities = () => (
  <section className="border-b border-border/60">
    <div className="section-full">
      {/* Section header row */}
      <div className="bento-cell py-12 md:py-16 px-8 md:px-16 border-b border-border/60">
        <RevealSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow mb-4">Growth Architecture</p>
              <h2 className="headline-lg">Four capabilities.<br />One growth architecture.</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Each capability connects. Together, they form a growth operating system for Southeast Asia.
            </p>
          </div>
        </RevealSection>
      </div>

      {/* 2×2 grid */}
      <div className="grid md:grid-cols-2">
        {capabilities.map((cap, i) => (
          <RevealSection key={i} delay={i * 0.1}>
            <Link to={cap.href} className="group block">
              <div className="bento-cell min-h-[220px] md:min-h-[280px] flex flex-col justify-between relative">
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground/40 font-mono">{cap.num}</span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-400" />
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-400 mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">{cap.desc}</p>
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
   PULL QUOTE — Full-width typographic moment
   ═══════════════════════════════════════════════ */
const PullQuote = () => (
  <section className="py-28 md:py-40 bg-background">
    <div className="section-container">
      <RevealSection>
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-display font-bold text-foreground leading-[1.08] tracking-[-0.03em]" style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.75rem)' }}>
            Growth in Southeast Asia requires{" "}
            <span className="text-primary">Growth Architects</span>
            , not just strategists.
          </p>
        </div>
      </RevealSection>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   HOW WE WORK — Horizontal process strip
   ═══════════════════════════════════════════════ */
const processSteps = [
  { step: "Define", desc: "Diagnose the growth challenge and map the ecosystem landscape." },
  { step: "Build", desc: "Architect GTM infrastructure, partnerships, and demand engine." },
  { step: "Operate", desc: "Run the growth architecture with embedded teams." },
  { step: "Transfer", desc: "Hand over with documented playbooks and trained teams." },
  { step: "Scale", desc: "Expand across markets with proven architecture." },
];

const HowWeWork = () => (
  <section className="border-y border-border/60">
    <div className="section-full">
      {/* Header */}
      <div className="bento-cell py-12 md:py-16 px-8 md:px-16 border-b border-border/60">
        <RevealSection>
          <p className="eyebrow mb-4">How we work</p>
          <h2 className="headline-lg">From strategy to operating momentum.</h2>
        </RevealSection>
      </div>

      {/* Steps grid */}
      <div className="grid grid-cols-2 md:grid-cols-5">
        {processSteps.map((step, i) => (
          <RevealSection key={i} delay={i * 0.08}>
            <div className="bento-cell min-h-[180px] md:min-h-[220px] flex flex-col justify-between">
              <span className="stat-accent text-4xl md:text-5xl">0{i + 1}</span>
              <div className="mt-auto">
                <h3 className="text-lg font-bold text-foreground mb-2">{step.step}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTORS — Bento with stats + lists
   ═══════════════════════════════════════════════ */
const sectorClusters = [
  { label: "Enterprise Technology", names: "HP · Oracle · Dell EMC · Commvault · Redington · element14" },
  { label: "Consumer & Brand Growth", names: "L'Oréal · Lancôme · Kiehl's · Brands For Less · JSHealth" },
  { label: "Media & Institutions", names: "The Economist · NUS · Andaz · Abbott · InsureMO" },
  { label: "New Economy", names: "Lazada · MyRepublic · Singtel · Integrate" },
];

const SectorExperience = () => (
  <section className="border-b border-border/60">
    <div className="section-full">
      <div className="grid md:grid-cols-3">
        {/* Left — large stats */}
        <div className="bento-cell py-16 md:py-24 px-8 md:px-16 border-b md:border-b-0 border-border/60">
          <RevealSection blur>
            <p className="eyebrow mb-10">Experience</p>
            <div className="space-y-10">
              {[
                { num: "40+", label: "Enterprise clients" },
                { num: "100+", label: "Programmes delivered" },
                { num: "5+", label: "Year avg. partnerships" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="stat-accent text-[clamp(2.5rem,4vw,4rem)]">{stat.num}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>

        {/* Right — sector list */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2">
          {sectorClusters.map((cluster, i) => (
            <RevealSection key={i} delay={i * 0.06}>
              <div className="bento-cell min-h-[140px] flex flex-col justify-end">
                <p className="text-xs text-primary/60 uppercase tracking-wider mb-2 font-medium">{cluster.label}</p>
                <p className="text-sm text-foreground/60 leading-relaxed">{cluster.names}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SELECTED WORK
   ═══════════════════════════════════════════════ */
const SelectedWork = () => {
  const flagships = getFlagshipCases();
  const featured = flagships.slice(0, 2);
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <RevealSection>
            <p className="eyebrow mb-4">Selected work</p>
            <h2 className="headline-lg">Results across the region.</h2>
          </RevealSection>
          <RevealSection delay={0.2}>
            <Link to="/work" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
              View all work <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealSection>
        </div>

        <div className="space-y-0">
          {featured.map((cs, i) => (
            <CaseCard key={cs.id} cs={cs} index={i} variant="flagship" />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   DEPTH — Bento grid: leadership + bench + nodes
   ═══════════════════════════════════════════════ */
const DepthSection = () => (
  <section className="border-y border-border/60">
    <div className="section-full">
      {/* Header */}
      <div className="bento-cell py-12 md:py-16 px-8 md:px-16 border-b border-border/60">
        <RevealSection blur>
          <p className="eyebrow mb-4">Behind the work</p>
          <h2 className="headline-lg">Depth where it matters.</h2>
        </RevealSection>
      </div>

      {/* Bento grid */}
      <div className="grid md:grid-cols-3">
        <RevealSection delay={0}>
          <Link to="/company/leadership" className="group block">
            <div className="bento-cell min-h-[220px] md:min-h-[280px] flex flex-col justify-between">
              <p className="stat-accent text-6xl md:text-7xl">12+</p>
              <div className="mt-auto">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">Senior Principals</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Named leaders across strategy, growth, technology, and creative.</p>
              </div>
            </div>
          </Link>
        </RevealSection>

        <RevealSection delay={0.1}>
          <Link to="/company" className="group block">
            <div className="bento-cell min-h-[220px] md:min-h-[280px] flex flex-col justify-between">
              <p className="stat-accent text-6xl md:text-7xl">200+</p>
              <div className="mt-auto">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">Operating Bench</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Execution depth across SEA and India — embedded, not outsourced.</p>
              </div>
            </div>
          </Link>
        </RevealSection>

        <RevealSection delay={0.2}>
          <Link to="/company/regional-nodes" className="group block">
            <div className="bento-cell min-h-[220px] md:min-h-[280px] flex flex-col justify-between">
              <p className="stat-accent text-6xl md:text-7xl">5</p>
              <div className="mt-auto">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">Regional Nodes</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Singapore · India · Malaysia · Indonesia · USA</p>
              </div>
            </div>
          </Link>
        </RevealSection>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   THINKING — Clean editorial list
   ═══════════════════════════════════════════════ */
const articles = [
  { title: "Southeast Asia Is Not One Market. Stop Planning It Like One.", category: "Architect View", readTime: "4 min" },
  { title: "In B2B, Your Buyer Already Trusts Someone Else.", category: "Architect View", readTime: "3 min" },
  { title: "Imported Playbooks Break Fast in Southeast Asia.", category: "Field Note", readTime: "5 min" },
  { title: "Why Channel Partners Are Your Real Growth Engine in ASEAN.", category: "Field Note", readTime: "4 min" },
];

const Thinking = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="section-container">
      <RevealSection>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-4">Thinking</p>
            <h2 className="headline-md">Perspectives from inside the work.</h2>
          </div>
          <Link to="/thinking" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
            All thinking <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </RevealSection>

      {articles.map((article, i) => (
        <RevealSection key={i} delay={i * 0.06}>
          <Link to="/thinking" className="group block">
            <div className="flex items-center gap-6 md:gap-8 py-5 border-b border-border/60 hover:border-primary/30 transition-colors duration-300">
              <span className="text-xs text-primary/50 uppercase tracking-wider shrink-0 w-[90px] hidden md:block">
                {article.category}
              </span>
              <h3 className="flex-1 text-base md:text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                {article.title}
              </h3>
              <span className="text-xs text-muted-foreground shrink-0 hidden md:block">{article.readTime}</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary transition-all duration-300 shrink-0" />
            </div>
          </Link>
        </RevealSection>
      ))}
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
    <section className="border-y border-border/60 bg-card">
      <div className="section-container py-20 md:py-28" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className="relative min-h-[160px] md:min-h-[180px] flex items-center w-full max-w-4xl">
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
        <div className="flex items-center gap-2 mt-8">
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
      description="Enfactum brings together strategy, ecosystems, and execution to help enterprise brands scale across Southeast Asia."
      path="/"
      jsonLd={{ ...organizationSchema, ...webSiteSchema }}
    />

    <Hero />
    <StatsBento />
    <WhySEA />
    <Capabilities />
    <PullQuote />
    <HowWeWork />
    <SectorExperience />
    <DepthSection />
    <Thinking />
    <SelectedWork />
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
