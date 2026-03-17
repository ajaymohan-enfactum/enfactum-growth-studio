import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useCallback, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/shared/MagneticButton";

import PageLayout from "@/components/layout/PageLayout";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import SEOHead, { organizationSchema, webSiteSchema } from "@/components/shared/SEOHead";
import { getFlagshipCases } from "@/data/caseStudies";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════════════
   HERO — Dark, full-screen, bold typography
   ═══════════════════════════════════════════════ */
const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
    <div className="absolute inset-0 z-0" style={{
      background: 'radial-gradient(ellipse 70% 50% at 50% 40%, hsl(210 80% 15% / 0.2), transparent 70%)',
    }} />

    <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border/60 bg-card/60 backdrop-blur-sm mb-10"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs text-muted-foreground font-medium tracking-wide">Growth & Innovation Operating Partner</span>
      </motion.div>

      <motion.h1
        className="text-[clamp(2.75rem,6vw,5.5rem)] font-extrabold text-foreground leading-[0.95] tracking-[-0.04em]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease }}
      >
        Strategy, ecosystems,{" "}
        <br className="hidden md:block" />
        and execution{" "}
        <span className="text-primary">move together</span>
        <span className="text-primary">.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease }}
        className="text-lg md:text-xl text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed font-light"
      >
        Helping enterprise brands scale across Southeast Asia with embedded growth architecture.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.95, ease }}
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

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.6, ease }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
    >
      <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Scroll</span>
      <ChevronDown className="w-4 h-4 text-primary/50" strokeWidth={1.5} style={{ animation: 'scroll-bounce 2s ease-in-out infinite' }} />
    </motion.div>
  </section>
);

/* ═══════════════════════════════════════════════
   STATS — White background, large numbers
   JoinTalent-style clean cards on light bg
   ═══════════════════════════════════════════════ */
const Stats = () => (
  <section className="section-light py-24 md:py-32">
    <div className="section-container">
      <RevealSection>
        <div className="text-center mb-16">
          <p className="eyebrow mb-5">By the numbers</p>
          <h2 className="headline-lg">Proven impact across the region<span className="text-primary">.</span></h2>
        </div>
      </RevealSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {[
          { num: "700M+", label: "People across ten countries" },
          { num: "$300B+", label: "Digital economy" },
          { num: "40+", label: "Enterprise clients" },
          { num: "15+", label: "Years in-region" },
        ].map((stat, i) => (
          <RevealSection key={i} delay={i * 0.1}>
            <div className="jt-card text-center flex flex-col items-center justify-center min-h-[180px]">
              <p className="stat-accent text-[clamp(2rem,4vw,3.5rem)] mb-3">{stat.num}</p>
              <p className="text-sm font-medium">{stat.label}</p>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   WHY SEA — Dark, split layout
   ═══════════════════════════════════════════════ */
const WhySEA = () => (
  <section className="bg-background py-24 md:py-32">
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
        <RevealSection blur>
          <div>
            <p className="eyebrow mb-6">Why Southeast Asia</p>
            <h2 className="headline-lg">
              Growth here moves through ecosystems, local trust, and execution nuance<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed max-w-md">
              Nearly 700 million people across ten countries. A digital economy past $300 billion — and accelerating. No single playbook covers it. That is why Enfactum exists.
            </p>
            <Link to="/company" className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-8 hover:gap-3 transition-all duration-300">
              Learn more about us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </RevealSection>

        <div className="grid grid-cols-2 gap-4">
          {[
            { market: "Singapore", role: "HQ & Strategy Hub", icon: "🇸🇬" },
            { market: "India", role: "Operating Bench", icon: "🇮🇳" },
            { market: "Malaysia", role: "Regional Node", icon: "🇲🇾" },
            { market: "Indonesia", role: "Growth Market", icon: "🇮🇩" },
          ].map((node, i) => (
            <RevealSection key={i} delay={0.1 + i * 0.1} scale>
              <div className="jt-card-dark flex flex-col justify-between min-h-[160px]">
                <span className="text-2xl">{node.icon}</span>
                <div className="mt-auto">
                  <p className="text-lg font-bold text-foreground">{node.market}</p>
                  <p className="text-xs text-muted-foreground mt-1">{node.role}</p>
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
   CAPABILITIES — White bg, JoinTalent card grid
   Large rounded cards with hover lift + arrow
   ═══════════════════════════════════════════════ */
const capabilities = [
  { title: "Growth Infrastructure", desc: "GTM strategy, partner programs, and demand operations that build lasting market position.", href: "/capabilities/growth-infrastructure", num: "01" },
  { title: "Brand & Demand", desc: "Performance, social, creative, and digital experiences that connect brand to commercial outcomes.", href: "/capabilities/brand-demand", num: "02" },
  { title: "AI Ecosystems", desc: "Venture strategy, startup scouting, and innovation programs that move beyond pilot stage.", href: "/capabilities/ai-ecosystems", num: "03" },
  { title: "Live Experiences", desc: "Product launches, summits, roadshows, and activations that create market momentum.", href: "/capabilities/live-experiences", num: "04" },
];

const Capabilities = () => (
  <section className="section-light py-24 md:py-32">
    <div className="section-container">
      <RevealSection>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-4">Our Solutions</p>
            <h2 className="headline-lg">Four capabilities<span className="text-primary">.</span><br />One growth architecture<span className="text-primary">.</span></h2>
          </div>
          <p className="text-sm max-w-xs leading-relaxed">
            Each capability connects. Together, they form a growth operating system for Southeast Asia.
          </p>
        </div>
      </RevealSection>

      <div className="grid md:grid-cols-2 gap-6">
        {capabilities.map((cap, i) => (
          <RevealSection key={i} delay={i * 0.1} scale>
            <Link to={cap.href} className="group block h-full">
              <div className="jt-card h-full flex flex-col justify-between min-h-[260px] relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/[0.03] group-hover:to-primary/[0.06] transition-all duration-700 rounded-2xl" />

                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-xs font-mono tracking-wider" style={{ color: 'hsl(var(--light-muted))' }}>{cap.num}</span>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-white" style={{ backgroundColor: 'hsl(var(--light-card-border))' }}>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
                  </div>
                </div>

                <div className="relative z-10 mt-auto">
                  <h3 className="text-2xl md:text-[1.75rem] font-bold mb-3 transition-colors duration-400 group-hover:text-primary" style={{ color: 'hsl(var(--light-fg))' }}>
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-sm">{cap.desc}</p>
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
   PULL QUOTE — Dark bg, typographic moment
   ═══════════════════════════════════════════════ */
const PullQuote = () => (
  <section className="bg-background py-28 md:py-40">
    <div className="section-container">
      <RevealSection blur>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display font-bold text-foreground leading-[1.08] tracking-[-0.03em]" style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.75rem)' }}>
            Growth in Southeast Asia requires{" "}
            <span className="text-primary">Growth Architects</span>
            , not just strategists<span className="text-primary">.</span>
          </p>
        </div>
      </RevealSection>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   HOW WE WORK — White bg, numbered steps
   ═══════════════════════════════════════════════ */
const processSteps = [
  { step: "Define", desc: "Diagnose the growth challenge and map the ecosystem landscape." },
  { step: "Build", desc: "Architect GTM infrastructure, partnerships, and demand engine." },
  { step: "Operate", desc: "Run the growth architecture with embedded teams." },
  { step: "Transfer", desc: "Hand over with documented playbooks and trained teams." },
  { step: "Scale", desc: "Expand across markets with proven architecture." },
];

const HowWeWork = () => (
  <section className="section-light py-24 md:py-32">
    <div className="section-container">
      <RevealSection>
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">How We Work</p>
          <h2 className="headline-lg">From strategy to operating momentum<span className="text-primary">.</span></h2>
        </div>
      </RevealSection>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {processSteps.map((step, i) => (
          <RevealSection key={i} delay={i * 0.08} scale>
            <div className="jt-card text-center md:text-left flex flex-col items-center md:items-start min-h-[200px] group">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-6 transition-all duration-500 group-hover:scale-110" style={{ backgroundColor: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))' }}>
                {i + 1}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'hsl(var(--light-fg))' }}>{step.step}</h3>
              <p className="text-xs leading-relaxed">{step.desc}</p>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTORS — Dark bg, clean card grid
   ═══════════════════════════════════════════════ */
const sectorClusters = [
  { label: "Enterprise Technology", names: "HP · Oracle · Dell EMC · Commvault · Redington · element14" },
  { label: "Consumer & Brand Growth", names: "L'Oréal · Lancôme · Kiehl's · Brands For Less · JSHealth" },
  { label: "Media & Institutions", names: "The Economist · NUS · Andaz · Abbott · InsureMO" },
  { label: "New Economy", names: "Lazada · MyRepublic · Singtel · Integrate" },
];

const SectorExperience = () => (
  <section className="bg-background py-24 md:py-32">
    <div className="section-container">
      <div className="grid md:grid-cols-5 gap-16 md:gap-12">
        {/* Left — large stats */}
        <div className="md:col-span-2">
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

        {/* Right — sector cards */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sectorClusters.map((cluster, i) => (
            <RevealSection key={i} delay={i * 0.08} scale>
              <div className="jt-card-dark min-h-[150px] flex flex-col justify-end">
                <p className="text-xs text-primary/60 uppercase tracking-wider mb-3 font-semibold">{cluster.label}</p>
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
   SELECTED WORK — White bg, editorial
   ═══════════════════════════════════════════════ */
const SelectedWork = () => {
  const flagships = getFlagshipCases();
  const featured = flagships.slice(0, 3);
  return (
    <section className="section-light py-24 md:py-32">
      <div className="section-container">
        <RevealSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow mb-4">Case Studies</p>
              <h2 className="headline-lg">Proven outcomes<span className="text-primary">,</span> real change<span className="text-primary">.</span></h2>
            </div>
            <Link to="/work" className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300" style={{ color: 'hsl(var(--primary))' }}>
              View all work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((cs, i) => (
            <RevealSection key={cs.id} delay={i * 0.1} scale>
              <Link to={`/work#${cs.id}`} className="group block h-full">
                <div className="jt-card h-full flex flex-col min-h-[280px]">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-medium uppercase tracking-wider" style={{ color: 'hsl(var(--primary))' }}>{cs.sector}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ color: 'hsl(var(--primary))' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300" style={{ color: 'hsl(var(--light-fg))' }}>
                    {cs.client}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1">{cs.headline}</p>
                  {cs.outcomes && cs.outcomes[0] && (
                    <div className="mt-6 pt-5" style={{ borderTop: '1px solid hsl(var(--light-card-border))' }}>
                      <p className="text-sm font-semibold" style={{ color: 'hsl(var(--primary))' }}>{cs.outcomes[0]}</p>
                    </div>
                  )}
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   DEPTH — Dark bg, 3 cards
   ═══════════════════════════════════════════════ */
const DepthSection = () => (
  <section className="bg-background py-24 md:py-32">
    <div className="section-container">
      <RevealSection blur>
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Behind the work</p>
          <h2 className="headline-lg">Depth where it matters<span className="text-primary">.</span></h2>
        </div>
      </RevealSection>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { stat: "12+", title: "Senior Principals", desc: "Named leaders across strategy, growth, technology, and creative.", href: "/company/leadership" },
          { stat: "200+", title: "Operating Bench", desc: "Execution depth across SEA and India — embedded, not outsourced.", href: "/company" },
          { stat: "5", title: "Regional Nodes", desc: "Singapore · India · Malaysia · Indonesia · USA", href: "/company/regional-nodes" },
        ].map((item, i) => (
          <RevealSection key={i} delay={i * 0.1} scale>
            <Link to={item.href} className="group block h-full">
              <div className="jt-card-dark h-full flex flex-col justify-between min-h-[240px]">
                <p className="stat-accent text-6xl md:text-7xl">{item.stat}</p>
                <div className="mt-auto">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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
   THINKING — White bg, editorial list
   ═══════════════════════════════════════════════ */
const articles = [
  { title: "Southeast Asia Is Not One Market. Stop Planning It Like One.", category: "Architect View", readTime: "4 min" },
  { title: "In B2B, Your Buyer Already Trusts Someone Else.", category: "Architect View", readTime: "3 min" },
  { title: "Imported Playbooks Break Fast in Southeast Asia.", category: "Field Note", readTime: "5 min" },
  { title: "Why Channel Partners Are Your Real Growth Engine in ASEAN.", category: "Field Note", readTime: "4 min" },
];

const Thinking = () => (
  <section className="section-light py-24 md:py-32">
    <div className="section-container">
      <RevealSection>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-4">Insights</p>
            <h2 className="headline-md">Perspectives from inside the work<span className="text-primary">.</span></h2>
          </div>
          <Link to="/thinking" className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300" style={{ color: 'hsl(var(--primary))' }}>
            All insights <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </RevealSection>

      {articles.map((article, i) => (
        <RevealSection key={i} delay={i * 0.06}>
          <Link to="/thinking" className="group block">
            <div className="flex items-center gap-6 md:gap-8 py-5 transition-all duration-300" style={{ borderBottom: '1px solid hsl(var(--light-card-border))' }}>
              <span className="text-xs uppercase tracking-wider shrink-0 w-[90px] hidden md:block" style={{ color: 'hsl(var(--primary))' }}>
                {article.category}
              </span>
              <h3 className="flex-1 text-base md:text-lg font-medium leading-snug group-hover:text-primary transition-colors duration-300" style={{ color: 'hsl(var(--light-fg))' }}>
                {article.title}
              </h3>
              <span className="text-xs shrink-0 hidden md:block">{article.readTime}</span>
              <ArrowUpRight className="w-4 h-4 opacity-30 group-hover:opacity-100 transition-all duration-300 shrink-0" style={{ color: 'hsl(var(--primary))' }} />
            </div>
          </Link>
        </RevealSection>
      ))}
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   INSIGHT CAROUSEL — Dark bg
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
    const timer = setInterval(() => setActive((prev) => (prev + 1) % quotes.length), 5000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; }, []);
  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) setActive((prev) => diff > 0 ? (prev + 1) % quotes.length : (prev - 1 + quotes.length) % quotes.length);
    touchStart.current = null;
  }, [quotes.length]);

  return (
    <section className="bg-background">
      <div className="section-container py-20 md:py-28" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <RevealSection>
          <p className="eyebrow mb-10">What we believe</p>
        </RevealSection>
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
        <div className="flex items-center gap-3 mt-8">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1 rounded-full transition-all duration-500 ${i === active ? "bg-primary w-8" : "bg-foreground/20 hover:bg-foreground/40 w-4"}`}
              aria-label={`Go to statement ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   CTA — White bg variant
   ═══════════════════════════════════════════════ */
const CTASection = () => (
  <section className="section-light py-24 md:py-32">
    <div className="section-container text-center">
      <RevealSection scale>
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-6">Next step</p>
          <h2 className="headline-xl">Let's move growth forward<span className="text-primary">.</span></h2>
          <p className="text-lg mt-5 max-w-xl mx-auto leading-relaxed">
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
          <a href="mailto:info@enfactum.com" className="inline-block text-sm mt-6 transition-colors duration-300" style={{ color: 'hsl(var(--light-muted))' }}>
            Or email us directly at info@enfactum.com
          </a>
        </div>
      </RevealSection>
    </div>
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
    <WhySEA />
    <Capabilities />
    <PullQuote />
    <HowWeWork />
    <SectorExperience />
    <SelectedWork />
    <DepthSection />
    <Thinking />
    <QuoteCarousel quotes={clientInsights} />
    <CTASection />
  </PageLayout>
);

export default Index;
