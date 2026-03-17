import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useCallback, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/shared/MagneticButton";

import PageLayout from "@/components/layout/PageLayout";
import RevealSection from "@/components/shared/RevealSection";
import SEOHead, { organizationSchema, webSiteSchema } from "@/components/shared/SEOHead";
import { getFlagshipCases } from "@/data/caseStudies";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ─── Abstract floating shapes (reusable) ─── */
const AbstractBlob = ({ className = "", color = "var(--primary)" }: { className?: string; color?: string }) => (
  <div className={`absolute rounded-full blur-3xl pointer-events-none ${className}`} style={{ background: `hsl(${color} / 0.08)` }} />
);

const AbstractRing = ({ className = "" }: { className?: string }) => (
  <div className={`absolute rounded-full border pointer-events-none ${className}`} style={{ borderColor: 'hsl(var(--primary) / 0.06)' }} />
);

const AbstractDots = ({ className = "" }: { className?: string }) => (
  <svg className={`absolute pointer-events-none opacity-[0.04] ${className}`} width="200" height="200" viewBox="0 0 200 200">
    {Array.from({ length: 100 }).map((_, i) => (
      <circle key={i} cx={(i % 10) * 20 + 10} cy={Math.floor(i / 10) * 20 + 10} r="1.5" fill="currentColor" />
    ))}
  </svg>
);

/* ─── Parallax wrapper ─── */
const ParallaxLayer = ({ children, speed = 0.1, className = "" }: { children: React.ReactNode; speed?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════
   HERO — Dark, full-screen, bold typography
   ═══════════════════════════════════════════════ */
const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 35%, hsl(210 80% 15% / 0.25), transparent 70%), radial-gradient(ellipse 50% 40% at 80% 60%, hsl(260 60% 20% / 0.12), transparent 60%)',
      }} />

      {/* Abstract graphics */}
      <AbstractBlob className="w-[500px] h-[500px] top-[10%] left-[-10%]" color="210 100% 50%" />
      <AbstractBlob className="w-[400px] h-[400px] bottom-[5%] right-[-5%]" color="260 80% 50%" />
      <AbstractRing className="w-[600px] h-[600px] top-[15%] right-[-15%]" />
      <AbstractRing className="w-[300px] h-[300px] bottom-[20%] left-[5%]" />
      <AbstractDots className="top-[20%] right-[10%] text-foreground" />

      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
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
      </motion.div>

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
};

/* ═══════════════════════════════════════════════
   STATS — White bg, UNEQUAL grid (1 large + 3 small)
   ═══════════════════════════════════════════════ */
const Stats = () => (
  <section className="bg-background py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none" style={{
      background: 'radial-gradient(ellipse 60% 50% at 70% 30%, hsl(210 100% 50% / 0.06), transparent 60%)',
    }} />
    <AbstractDots className="top-10 left-10 text-primary" />

    <div className="section-container relative z-10">
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
          <RevealSection key={i} delay={i * 0.1} scale>
            <div className="jt-card-dark text-center flex flex-col items-center justify-center min-h-[180px] shadow-xl shadow-black/20">
              <p className="stat-accent text-[clamp(2rem,4vw,3.5rem)] mb-3">{stat.num}</p>
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   WHY SEA — Dark, asymmetric 7/5 split
   ═══════════════════════════════════════════════ */
const WhySEA = () => (
  <section className="bg-background py-24 md:py-36 relative overflow-hidden">
    <AbstractBlob className="w-[500px] h-[500px] top-[-10%] right-[-10%]" color="210 100% 50%" />
    <AbstractRing className="w-[400px] h-[400px] bottom-[10%] left-[-5%]" />

    <div className="section-container relative z-10">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <ParallaxLayer speed={0.05}>
            <RevealSection blur>
              <p className="eyebrow mb-6">Why Southeast Asia</p>
              <h2 className="headline-xl max-w-xl">
                Growth here moves through ecosystems, local trust, and execution nuance<span className="text-primary">.</span>
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed max-w-lg text-base">
                Nearly 700 million people across ten countries. A digital economy past $300 billion — and accelerating. No single playbook covers it. That is why Enfactum exists.
              </p>
              <Link to="/company" className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-8 hover:gap-3 transition-all duration-300">
                Learn more about us <ArrowRight className="w-4 h-4" />
              </Link>
            </RevealSection>
          </ParallaxLayer>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { market: "Singapore", role: "HQ & Strategy Hub", icon: "🇸🇬" },
            { market: "India", role: "Operating Bench", icon: "🇮🇳" },
            { market: "Malaysia", role: "Regional Node", icon: "🇲🇾" },
            { market: "Indonesia", role: "Growth Market", icon: "🇮🇩" },
          ].map((node, i) => (
            <ParallaxLayer key={i} speed={0.03 + i * 0.02}>
              <RevealSection delay={0.1 + i * 0.1} scale>
                <div className="jt-card-dark flex flex-col items-start min-h-[140px] shadow-lg shadow-black/15">
                  <span className="text-2xl mb-3">{node.icon}</span>
                  <p className="text-base font-bold text-foreground">{node.market}</p>
                  <p className="text-xs text-muted-foreground mt-1">{node.role}</p>
                </div>
              </RevealSection>
            </ParallaxLayer>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   CAPABILITIES — White bg, unequal 2-col layout
   First card spans full width, rest in 2 cols
   ═══════════════════════════════════════════════ */
const capabilities = [
  { title: "Growth Infrastructure", desc: "GTM strategy, partner programs, and demand operations that build lasting market position.", href: "/capabilities/growth-infrastructure", num: "01" },
  { title: "Brand & Demand", desc: "Performance, social, creative, and digital experiences that connect brand to commercial outcomes.", href: "/capabilities/brand-demand", num: "02" },
  { title: "AI Ecosystems", desc: "Venture strategy, startup scouting, and innovation programs that move beyond pilot stage.", href: "/capabilities/ai-ecosystems", num: "03" },
  { title: "Live Experiences", desc: "Product launches, summits, roadshows, and activations that create market momentum.", href: "/capabilities/live-experiences", num: "04" },
];

const Capabilities = () => (
  <section className="relative py-24 md:py-32 overflow-hidden" style={{
    background: 'linear-gradient(180deg, hsl(220 16% 7%), hsl(220 18% 9%), hsl(220 16% 7%))',
  }}>
    <AbstractRing className="w-[500px] h-[500px] top-[-10%] left-[-10%]" />
    <AbstractDots className="bottom-20 right-10 text-primary" />

    <div className="section-container relative z-10">
      <RevealSection>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-4">Our Solutions</p>
            <h2 className="headline-lg">Four capabilities<span className="text-primary">.</span><br />One growth architecture<span className="text-primary">.</span></h2>
          </div>
          <p className="text-sm max-w-xs leading-relaxed text-muted-foreground">
            Each capability connects. Together, they form a growth operating system for Southeast Asia.
          </p>
        </div>
      </RevealSection>

      <div className="grid md:grid-cols-2 gap-6">
        {capabilities.map((cap, i) => (
          <RevealSection key={i} delay={i * 0.1} scale>
            <Link to={cap.href} className="group block h-full">
              <div className="jt-card-dark h-full flex flex-col justify-between min-h-[260px] relative overflow-hidden shadow-xl shadow-black/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/[0.03] group-hover:to-primary/[0.06] transition-all duration-700 rounded-2xl" />
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-xs font-mono tracking-wider text-muted-foreground">{cap.num}</span>
                  <div className="w-10 h-10 rounded-full bg-border flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
                  </div>
                </div>
                <div className="relative z-10 mt-auto">
                  <h3 className="text-2xl font-bold text-foreground mb-3 transition-colors duration-400 group-hover:text-primary">
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-sm text-muted-foreground">{cap.desc}</p>
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
   PULL QUOTE — Dark bg with gradient & parallax
   ═══════════════════════════════════════════════ */
const PullQuote = () => (
  <section className="relative py-32 md:py-44 overflow-hidden" style={{
    background: 'linear-gradient(160deg, hsl(220 16% 7%), hsl(220 20% 10%), hsl(220 16% 7%))',
  }}>
    <AbstractBlob className="w-[600px] h-[600px] top-[-20%] left-[20%]" color="210 100% 50%" />
    <AbstractRing className="w-[400px] h-[400px] bottom-[-10%] right-[10%]" />

    <div className="section-container relative z-10">
      <ParallaxLayer speed={0.08}>
        <RevealSection blur>
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-display font-bold text-foreground leading-[1.08] tracking-[-0.03em]" style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.75rem)' }}>
              Growth in Southeast Asia requires{" "}
              <span className="text-primary">Growth Architects</span>
              , not just strategists<span className="text-primary">.</span>
            </p>
          </div>
        </RevealSection>
      </ParallaxLayer>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   HOW WE WORK — White bg, numbered steps
   Unequal: first 2 steps larger, last 3 smaller
   ═══════════════════════════════════════════════ */
const processSteps = [
  { step: "Define", desc: "Diagnose the growth challenge and map the ecosystem landscape." },
  { step: "Build", desc: "Architect GTM infrastructure, partnerships, and demand engine." },
  { step: "Operate", desc: "Run the growth architecture with embedded teams." },
  { step: "Transfer", desc: "Hand over with documented playbooks and trained teams." },
  { step: "Scale", desc: "Expand across markets with proven architecture." },
];

const HowWeWork = () => (
  <section className="section-light py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none" style={{
      background: 'radial-gradient(ellipse 50% 60% at 20% 80%, hsl(210 100% 50% / 0.03), transparent 50%)',
    }} />

    <div className="section-container relative z-10">
      <RevealSection>
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">How We Work</p>
          <h2 className="headline-lg">From strategy to operating momentum<span className="text-primary">.</span></h2>
        </div>
      </RevealSection>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {processSteps.map((step, i) => (
          <RevealSection key={i} delay={i * 0.08} scale>
            <div className="jt-card flex flex-col min-h-[200px] group shadow-md shadow-black/[0.04]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold mb-6 transition-all duration-500 group-hover:scale-110" style={{ backgroundColor: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))' }}>
                {i + 1}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'hsl(var(--light-fg))' }}>{step.step}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'hsl(var(--light-muted))' }}>{step.desc}</p>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTORS — Dark, asymmetric 5/7 split
   ═══════════════════════════════════════════════ */
const sectorClusters = [
  { label: "Enterprise Technology", names: "HP · Oracle · Dell EMC · Commvault · Redington · element14" },
  { label: "Consumer & Brand Growth", names: "L'Oréal · Lancôme · Kiehl's · Brands For Less · JSHealth" },
  { label: "Media & Institutions", names: "The Economist · NUS · Andaz · Abbott · InsureMO" },
  { label: "New Economy", names: "Lazada · MyRepublic · Singtel · Integrate" },
];

const SectorExperience = () => (
  <section className="relative py-24 md:py-32 overflow-hidden" style={{
    background: 'linear-gradient(170deg, hsl(220 16% 7%), hsl(220 18% 9%), hsl(220 16% 7%))',
  }}>
    <AbstractBlob className="w-[400px] h-[400px] bottom-[-10%] left-[-5%]" color="210 100% 50%" />
    <AbstractDots className="top-20 right-20 text-foreground" />

    <div className="section-container relative z-10">
      <div className="grid md:grid-cols-2 gap-16 md:gap-12">
        <div>
          <ParallaxLayer speed={0.06}>
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
          </ParallaxLayer>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sectorClusters.map((cluster, i) => (
            <RevealSection key={i} delay={i * 0.08} scale>
              <div className="jt-card-dark min-h-[150px] flex flex-col justify-end shadow-xl shadow-black/20">
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
   SELECTED WORK — White bg, unequal 8/4 featured
   ═══════════════════════════════════════════════ */
const SelectedWork = () => {
  const flagships = getFlagshipCases();
  const featured = flagships.slice(0, 3);
  return (
    <section className="section-light py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 40% 50% at 80% 70%, hsl(210 100% 50% / 0.03), transparent 50%)',
      }} />

      <div className="section-container relative z-10">
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
                <div className="jt-card h-full flex flex-col min-h-[280px] shadow-md shadow-black/[0.04]">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-medium uppercase tracking-wider" style={{ color: 'hsl(var(--primary))' }}>{cs.sectors?.[0] || 'Case Study'}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ color: 'hsl(var(--primary))' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300" style={{ color: 'hsl(var(--light-fg))' }}>
                    {cs.client}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'hsl(var(--light-muted))' }}>{cs.headline}</p>
                  {cs.outcomes?.[0] && (
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
   DEPTH — Dark bg, unequal 3 cards
   ═══════════════════════════════════════════════ */
const DepthSection = () => (
  <section className="relative py-24 md:py-32 overflow-hidden" style={{
    background: 'linear-gradient(180deg, hsl(220 16% 7%), hsl(220 20% 9%), hsl(220 16% 7%))',
  }}>
    <AbstractRing className="w-[500px] h-[500px] top-[-15%] right-[-10%]" />

    <div className="section-container relative z-10">
      <RevealSection blur>
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Behind the work</p>
          <h2 className="headline-lg text-foreground">Depth where it matters<span className="text-primary">.</span></h2>
        </div>
      </RevealSection>

      <div className="grid md:grid-cols-3 gap-6">
        <RevealSection delay={0} scale>
          <Link to="/company/leadership" className="group block h-full">
            <div className="jt-card-dark h-full flex flex-col justify-between min-h-[280px] shadow-xl shadow-black/20">
              <p className="stat-accent text-6xl md:text-7xl">12+</p>
              <div className="mt-auto">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">Senior Principals</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Named leaders across strategy, growth, technology, and creative.</p>
              </div>
            </div>
          </Link>
        </RevealSection>
          <RevealSection delay={0.1} scale>
            <Link to="/company" className="group block h-full">
              <div className="jt-card-dark h-full flex flex-col justify-between min-h-[280px] shadow-xl shadow-black/20">
                <p className="stat-accent text-6xl">200+</p>
                <div className="mt-auto">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">Operating Bench</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Execution depth across SEA and India — embedded, not outsourced.</p>
                </div>
              </div>
            </Link>
          </RevealSection>

          <RevealSection delay={0.2} scale>
            <Link to="/company/regional-nodes" className="group block h-full">
              <div className="jt-card-dark h-full flex flex-col justify-between min-h-[280px] shadow-xl shadow-black/20">
                <p className="stat-accent text-6xl">5</p>
                <div className="mt-auto">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">Regional Nodes</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Singapore · India · Malaysia · Indonesia · USA</p>
                </div>
              </div>
            </Link>
          </RevealSection>
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
  <section className="section-light py-24 md:py-32 relative overflow-hidden">
    <AbstractDots className="top-10 right-20 text-primary" />

    <div className="section-container relative z-10">
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
            <div className="flex items-center gap-6 md:gap-8 py-5 transition-all duration-300 group-hover:pl-2" style={{ borderBottom: '1px solid hsl(var(--light-card-border))' }}>
              <span className="text-xs uppercase tracking-wider shrink-0 w-[90px] hidden md:block" style={{ color: 'hsl(var(--primary))' }}>
                {article.category}
              </span>
              <h3 className="flex-1 text-base md:text-lg font-medium leading-snug group-hover:text-primary transition-colors duration-300" style={{ color: 'hsl(var(--light-fg))' }}>
                {article.title}
              </h3>
              <span className="text-xs shrink-0 hidden md:block" style={{ color: 'hsl(var(--light-muted))' }}>{article.readTime}</span>
              <ArrowUpRight className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 shrink-0" style={{ color: 'hsl(var(--primary))' }} />
            </div>
          </Link>
        </RevealSection>
      ))}
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   INSIGHT CAROUSEL — Dark bg with gradient
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
    <section className="relative overflow-hidden" style={{
      background: 'linear-gradient(160deg, hsl(220 16% 7%), hsl(220 20% 10%), hsl(220 16% 8%))',
    }}>
      <AbstractBlob className="w-[500px] h-[500px] top-[-20%] right-[-10%]" color="210 100% 50%" />

      <div className="section-container py-20 md:py-28 relative z-10" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
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
   CTA — White bg with gradient
   ═══════════════════════════════════════════════ */
const CTASection = () => (
  <section className="section-light py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none" style={{
      background: 'radial-gradient(ellipse 50% 60% at 50% 50%, hsl(210 100% 50% / 0.04), transparent 60%)',
    }} />
    <AbstractRing className="w-[300px] h-[300px] top-[10%] left-[5%]" />
    <AbstractRing className="w-[200px] h-[200px] bottom-[15%] right-[10%]" />

    <div className="section-container text-center relative z-10">
      <RevealSection scale>
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-6">Next step</p>
          <h2 className="headline-xl">Let's move growth forward<span className="text-primary">.</span></h2>
          <p className="text-lg mt-5 max-w-xl mx-auto leading-relaxed" style={{ color: 'hsl(var(--light-muted))' }}>
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
