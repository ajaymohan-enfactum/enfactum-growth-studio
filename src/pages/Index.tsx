import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import CTABand from "@/components/shared/CTABand";
import TopologyBackground from "@/components/shared/TopologyBackground";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════════════
   SECTION 1 — HERO
   Full-viewport cinematic opening
   ═══════════════════════════════════════════════ */
const Hero = () => (
  <section className="relative min-h-screen flex items-end overflow-hidden">
    <TopologyBackground />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/60" />
    <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />

    <div className="section-container relative z-10 pb-20 md:pb-28 lg:pb-36 pt-40">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease }}
        className="eyebrow mb-8"
      >
        Growth &amp; Innovation Operating Partner · Southeast Asia
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease }}
        className="headline-display max-w-[18ch]"
      >
        Where strategy, ecosystems, and execution{" "}
        <span className="text-primary">move together.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease }}
        className="body-xl mt-8 max-w-[52ch]"
      >
        Built for how Southeast Asia actually works, Enfactum brings together
        strategy, ecosystems, and execution to help enterprise brands scale
        with clarity and momentum.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0, ease }}
        className="flex flex-col sm:flex-row gap-4 mt-14"
      >
        <Link to="/contact">
          <Button variant="hero" size="xl">Start a conversation</Button>
        </Link>
        <Link to="/work">
          <Button variant="hero-outline" size="xl">See the proof</Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 2 — WHY SOUTHEAST ASIA
   Editorial split with generous breathing room
   ═══════════════════════════════════════════════ */
const WhySEA = () => (
  <section className="py-32 md:py-44">
    <div className="section-container">
      <div className="grid md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-5">
          <RevealSection>
            <p className="eyebrow mb-6">Why Southeast Asia moves differently</p>
            <h2 className="headline-lg">
              Not one market.<br />
              An interconnected web of ecosystems.
            </h2>
          </RevealSection>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <RevealSection delay={0.15}>
            <div className="space-y-6">
              <p className="body-lg">
                Southeast Asia is 700 million people across diverse economies,
                languages, and regulatory environments — bound together by trade
                corridors, digital infrastructure, and rapidly evolving consumer
                behaviour.
              </p>
              <p className="body-lg">
                Growth here moves through ecosystems, local trust, and execution
                nuance. Imported playbooks break. Opportunity exists, but it
                requires a fundamentally different operating model.
              </p>
              <div className="pt-4">
                <div className="h-px w-20 bg-primary/30" />
              </div>
              <p className="body-md text-muted-foreground italic">
                Enfactum exists because the gap between global ambition and
                regional reality needed an operator — not another advisor.
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
  { title: "Strategy-execution gap", body: "Brilliant plans that die in local implementation." },
  { title: "Ecosystem underbuilt", body: "Partners and channels without structure or activation." },
  { title: "Brand-demand disconnect", body: "Creative that doesn't connect to commercial outcomes." },
  { title: "Innovation in pilot limbo", body: "AI and ventures stuck between demo and scale." },
  { title: "Launch without momentum", body: "Events and activations without lasting market impact." },
];

const GrowthBreaks = () => (
  <section className="py-32 md:py-44">
    <div className="section-container">
      <div className="section-divider mb-20" />
      <SectionHeader
        eyebrow="Where growth breaks"
        headline="The friction points we're built to solve."
      />
      <div className="mt-20 grid md:grid-cols-12 gap-y-12">
        {frictionPoints.map((point, i) => (
          <RevealSection
            key={i}
            delay={i * 0.08}
            className={`md:col-span-4 ${i >= 3 ? "md:col-start-" + (i === 3 ? "3" : "7") : ""}`}
          >
            <div className="pr-8">
              <div className="w-6 h-px bg-primary/50 mb-6" />
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
  },
  {
    title: "Brand & Demand",
    desc: "Performance, social, creative, and digital experiences that connect brand to commercial outcomes.",
    outcome: "Integrated demand generation",
    href: "/capabilities/brand-demand",
    num: "02",
  },
  {
    title: "AI Ecosystems",
    desc: "Venture strategy, startup scouting, and innovation programs that move beyond pilot stage.",
    outcome: "Ecosystem-scale innovation",
    href: "/capabilities/ai-ecosystems",
    num: "03",
  },
  {
    title: "Live Experiences",
    desc: "Product launches, summits, roadshows, and activations that create market momentum.",
    outcome: "Commercially impactful activations",
    href: "/capabilities/live-experiences",
    num: "04",
  },
];

const WhatWeBuilds = () => (
  <section className="section-alt py-32 md:py-44">
    <div className="section-container">
      <SectionHeader
        eyebrow="What Enfactum builds"
        headline="Four capabilities. One operating model."
        description="Each capability connects. Together, they form a growth operating system for Southeast Asia."
      />
      <div className="mt-20 space-y-0">
        {capabilities.map((cap, i) => (
          <RevealSection key={i} delay={i * 0.06}>
            <Link to={cap.href} className="group block">
              <div className="grid md:grid-cols-12 gap-6 py-10 border-b border-border/40 group-hover:border-primary/20 transition-colors duration-700">
                <div className="md:col-span-1">
                  <span className="text-xs font-body text-dim">{cap.num}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                    {cap.title}
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="body-md text-muted-foreground">{cap.desc}</p>
                  <p className="eyebrow mt-4">{cap.outcome}</p>
                </div>
                <div className="md:col-span-2 flex items-center justify-end">
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-500" />
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
  <section className="py-32 md:py-44">
    <div className="section-container">
      <SectionHeader
        eyebrow="How we work"
        headline="Operators, not just advisors."
        description="We embed within the business and stay until growth has real infrastructure."
        centered
      />
      <div className="mt-24 relative">
        {/* Desktop */}
        <div className="hidden md:block">
          <div className="flex items-start justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-[18px] left-[10%] right-[10%] h-px bg-border/40" />
            <div className="absolute top-[18px] left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0" />
            {processSteps.map((step, i) => (
              <RevealSection key={i} delay={i * 0.1} className="flex-1 relative px-4 text-center">
                <div className="w-9 h-9 rounded-full border border-border bg-background flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:border-primary/40 transition-colors">
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
              <div className="absolute -left-10 top-0 w-7 h-7 rounded-full border border-border bg-background flex items-center justify-center">
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
   SECTION 6 — SECTOR PROOF
   Architectural proof clusters — editorial, not logo-wall
   ═══════════════════════════════════════════════ */
const proofClusters = [
  {
    sector: "Enterprise Technology",
    num: "01",
    caption: "Growth infrastructure, innovation ecosystems, and partner programmes for global technology leaders entering and expanding across ASEAN.",
    logos: [
      { name: "HP", capability: "AI Ecosystems · Innovation" },
      { name: "Dell", capability: "Growth Infrastructure" },
      { name: "SAP", capability: "Partner Ecosystems" },
      { name: "Cisco", capability: "Channel Strategy" },
    ],
  },
  {
    sector: "Consumer & Brand Growth",
    num: "02",
    caption: "Integrated brand-to-demand strategies and market entry for consumer brands scaling across Southeast Asia's diverse retail landscape.",
    logos: [
      { name: "Brands For Less", capability: "Market Entry · Launch" },
      { name: "Unilever", capability: "Brand & Demand" },
      { name: "L'Oréal", capability: "Digital & Social" },
      { name: "Nestlé", capability: "Demand Operations" },
    ],
  },
  {
    sector: "Institutions & Ecosystems",
    num: "03",
    caption: "Ecosystem design, programme architecture, and stakeholder engagement for public institutions and regional bodies shaping ASEAN's future.",
    logos: [
      { name: "GovTech", capability: "Innovation Programmes" },
      { name: "ASEAN Foundation", capability: "Ecosystem Design" },
      { name: "Enterprise SG", capability: "Growth Programmes" },
      { name: "MAS", capability: "Fintech Ecosystems" },
    ],
  },
  {
    sector: "New Economy & Innovation",
    num: "04",
    caption: "Venture strategy, experience design, and commercial activation for platforms and media companies driving Southeast Asia's new economy.",
    logos: [
      { name: "The Economist", capability: "Live Experiences" },
      { name: "Grab", capability: "Ecosystem Strategy" },
      { name: "Sea Group", capability: "Growth Infrastructure" },
      { name: "GoTo", capability: "Market Activation" },
    ],
  },
];

const SectorProof = () => (
  <section className="section-alt py-32 md:py-44">
    <div className="section-container">
      <SectionHeader
        eyebrow="Sector proof"
        headline="Experience across the industries shaping Southeast Asia."
      />

      <div className="mt-24 space-y-0">
        {proofClusters.map((cluster, ci) => (
          <RevealSection key={ci} delay={ci * 0.06}>
            <div className="border-t border-border/30 py-14 md:py-16">
              <div className="grid md:grid-cols-12 gap-8">
                {/* Left — Cluster label */}
                <div className="md:col-span-4">
                  <span className="text-[10px] font-body text-dim block mb-3">{cluster.num}</span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight">
                    {cluster.sector}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed mt-4 max-w-xs">
                    {cluster.caption}
                  </p>
                </div>

                {/* Right — Logo entries */}
                <div className="md:col-span-7 md:col-start-6">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-0">
                    {cluster.logos.map((logo, li) => (
                      <div
                        key={li}
                        className="group py-5 border-b border-border/20 last:border-b-0 cursor-default"
                      >
                        <span className="font-display text-[15px] font-semibold text-foreground/40 group-hover:text-foreground/80 transition-colors duration-700 tracking-tight">
                          {logo.name}
                        </span>
                        <span className="block text-[10px] text-dim/0 group-hover:text-dim transition-all duration-700 mt-1 uppercase tracking-[0.15em] font-body overflow-hidden max-h-0 group-hover:max-h-6">
                          {logo.capability}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
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
   Large editorial case cards
   ═══════════════════════════════════════════════ */
const featuredWork = [
  {
    title: "HP Garage 2.0",
    tags: ["AI Ecosystems", "Innovation"],
    challenge: "Reignite HP's innovation ecosystem across Asia Pacific with a scalable startup engagement platform.",
    role: "End-to-end program design, startup scouting, and partnership architecture.",
    outcome: "200+ startups evaluated · 12 enterprise pilots · 4 markets",
  },
  {
    title: "The Economist BOT",
    tags: ["Live Experiences", "Brand & Demand"],
    challenge: "Create a landmark thought-leadership experience for The Economist's regional audience.",
    role: "Concept, production, audience strategy, and demand generation.",
    outcome: "2,000+ senior leaders · 40% subscription pipeline lift",
  },
  {
    title: "Brands For Less SEA Launch",
    tags: ["Growth Infrastructure", "Market Entry"],
    challenge: "Launch a Middle East retail brand into Southeast Asia with zero existing presence.",
    role: "Market entry strategy, partner ecosystem build, and launch operations.",
    outcome: "3 markets in 18 months · 50+ retail partnerships",
  },
];

const FeaturedWork = () => (
  <section className="py-32 md:py-44">
    <div className="section-container">
      <SectionHeader
        eyebrow="Featured work"
        headline="Proof in practice."
      />
      <div className="mt-20 space-y-0">
        {featuredWork.map((work, i) => (
          <RevealSection key={i} delay={i * 0.08}>
            <Link to="/work" className="group block">
              <div className="py-12 border-b border-border/30 group-hover:border-primary/15 transition-colors duration-700">
                <div className="grid md:grid-cols-12 gap-6 md:gap-8">
                  <div className="md:col-span-5">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {work.tags.map((tag) => (
                        <span key={tag} className="text-[11px] px-2.5 py-1 rounded-sm bg-primary/8 text-primary/70 font-medium tracking-wide uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                      {work.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="body-md text-muted-foreground">{work.challenge}</p>
                    <p className="text-[13px] text-dim mt-3">{work.role}</p>
                  </div>
                  <div className="md:col-span-2 flex md:flex-col md:items-end md:justify-end">
                    <p className="text-sm font-medium text-primary/80 leading-snug text-right">
                      {work.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </RevealSection>
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

/* ═══════════════════════════════════════════════
   SECTION 8 — DEPTH BEHIND THE WORK
   Architectural teaser blocks
   ═══════════════════════════════════════════════ */
const depthBlocks = [
  { title: "Leadership", desc: "Experienced operators across strategy, growth, and technology.", href: "/company/leadership", num: "01" },
  { title: "Operating Bench", desc: "200+ specialists across Southeast Asia and India.", href: "/company", num: "02" },
  { title: "Regional Nodes", desc: "Singapore, India, Malaysia, Indonesia — and expanding.", href: "/company/regional-nodes", num: "03" },
  { title: "Capability Ownership", desc: "Each capability led by domain-specialist principals.", href: "/capabilities", num: "04" },
];

const DepthSection = () => (
  <section className="section-alt py-32 md:py-44">
    <div className="section-container">
      <SectionHeader
        eyebrow="Depth behind the work"
        headline="Real teams. Real infrastructure."
      />
      <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {depthBlocks.map((block, i) => (
          <RevealSection key={i} delay={i * 0.08}>
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
  { title: "Why imported playbooks fail in Southeast Asia", category: "Growth Strategy", date: "March 2026" },
  { title: "The partner ecosystem advantage in ASEAN enterprise", category: "Ecosystems", date: "February 2026" },
  { title: "From pilot to platform: scaling AI ventures in SEA", category: "AI & Innovation", date: "January 2026" },
];

const Perspectives = () => (
  <section className="py-32 md:py-44">
    <div className="section-container">
      <div className="section-divider mb-20" />
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <RevealSection>
            <p className="eyebrow mb-6">Perspectives</p>
            <h2 className="headline-lg">Field intelligence, not thought leadership.</h2>
            <Link to="/thinking" className="inline-flex items-center gap-2 text-sm text-primary/70 hover:text-primary font-medium transition-colors mt-8">
              All perspectives <ArrowRight className="w-4 h-4" />
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
   PAGE ASSEMBLY
   ═══════════════════════════════════════════════ */
const Index = () => (
  <PageLayout>
    <Hero />
    <WhySEA />
    <GrowthBreaks />
    <WhatWeBuilds />
    <HowWeWork />
    <SectorProof />
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
