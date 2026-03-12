import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import CTABand from "@/components/shared/CTABand";
import TopologyBackground from "@/components/shared/TopologyBackground";
import { ArrowRight } from "lucide-react";

/* ─── Section 1: Hero ─── */
const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <TopologyBackground />
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
    <div className="section-container relative z-10 py-32 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl"
      >
        <h1 className="headline-xl">
          Where strategy, ecosystems, and execution{" "}
          <span className="text-primary">move together.</span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="body-lg mt-6 max-w-2xl"
        >
          Built for how Southeast Asia actually works, Enfactum brings together strategy,
          ecosystems, and execution to help enterprise brands scale with clarity and momentum.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Link to="/contact">
            <Button variant="hero" size="xl">Start a conversation</Button>
          </Link>
          <Link to="/work">
            <Button variant="hero-outline" size="xl">See the proof</Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ─── Section 2: Why SEA ─── */
const WhySEA = () => (
  <section className="py-24 md:py-32">
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <RevealSection>
          <p className="eyebrow mb-4">Why Southeast Asia moves differently</p>
          <h2 className="headline-lg">Not one market. An interconnected web of ecosystems.</h2>
          <div className="space-y-4 mt-6">
            <p className="body-md">
              Southeast Asia is not a single market. It's 700 million people across diverse economies,
              languages, and regulatory environments — bound together by trade corridors, digital
              infrastructure, and rapidly evolving consumer behaviour.
            </p>
            <p className="body-md">
              Growth here moves through ecosystems, local trust, and execution nuance. Imported
              playbooks break. Opportunity exists, but it requires a fundamentally different operating model.
            </p>
          </div>
        </RevealSection>
        <RevealSection delay={0.15}>
          <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary/50 border border-border">
            <div className="absolute inset-0 topology-grid opacity-[0.06]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 300 300" className="w-3/4 h-3/4 opacity-40">
                {/* Abstract network nodes */}
                {[
                  [80, 100], [150, 60], [220, 110], [120, 180], [200, 200],
                  [60, 220], [180, 140], [250, 180], [100, 130], [160, 240],
                ].map(([cx, cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="3" fill="hsl(38, 72%, 56%)" opacity="0.6" />
                    {i > 0 && (
                      <line
                        x1={cx} y1={cy}
                        x2={[80, 150, 220, 120, 200, 60, 180, 250, 100, 160][Math.max(0, i - 1)]}
                        y2={[100, 60, 110, 180, 200, 220, 140, 180, 130, 240][Math.max(0, i - 1)]}
                        stroke="hsl(38, 72%, 56%)" strokeWidth="0.5" opacity="0.2"
                      />
                    )}
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </RevealSection>
      </div>
    </div>
  </section>
);

/* ─── Section 3: Where Growth Breaks ─── */
const frictionPoints = [
  { title: "Strategy-execution gap", body: "Brilliant plans that die in local implementation." },
  { title: "Ecosystem underbuilt", body: "Partners and channels without structure or activation." },
  { title: "Brand-demand disconnect", body: "Creative that doesn't connect to commercial outcomes." },
  { title: "Innovation in pilot limbo", body: "AI and ventures stuck between demo and scale." },
  { title: "Launch without momentum", body: "Events and activations without lasting market impact." },
];

const GrowthBreaks = () => (
  <section className="py-24 md:py-32 bg-secondary/20">
    <div className="section-container">
      <SectionHeader
        eyebrow="Where growth breaks"
        headline="The friction points we're built to solve."
        description="Most enterprise brands hit the same walls when scaling across Southeast Asia."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {frictionPoints.map((point, i) => (
          <RevealSection key={i} delay={i * 0.08}>
            <div className="card-premium h-full">
              <div className="w-8 h-px bg-primary mb-5" />
              <h3 className="font-display text-lg font-semibold text-foreground">{point.title}</h3>
              <p className="body-md mt-2">{point.body}</p>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Section 4: What Enfactum Builds ─── */
const capabilities = [
  {
    title: "Growth Infrastructure",
    desc: "GTM strategy, partner programs, and demand operations that build lasting market position.",
    outcome: "Scalable go-to-market architecture",
    href: "/capabilities/growth-infrastructure",
  },
  {
    title: "Brand & Demand",
    desc: "Performance, social, creative, and digital experiences that connect brand to commercial outcomes.",
    outcome: "Integrated demand generation",
    href: "/capabilities/brand-demand",
  },
  {
    title: "AI Ecosystems",
    desc: "Venture strategy, startup scouting, and innovation programs that move beyond pilot stage.",
    outcome: "Ecosystem-scale innovation",
    href: "/capabilities/ai-ecosystems",
  },
  {
    title: "Live Experiences",
    desc: "Product launches, summits, roadshows, and activations that create market momentum.",
    outcome: "Commercially impactful activations",
    href: "/capabilities/live-experiences",
  },
];

const WhatWeBuilds = () => (
  <section className="py-24 md:py-32">
    <div className="section-container">
      <SectionHeader
        eyebrow="What Enfactum builds"
        headline="Four capabilities. One operating model."
        description="Each capability connects. Together, they form a growth operating system for Southeast Asia."
      />
      <div className="grid md:grid-cols-2 gap-5 mt-14">
        {capabilities.map((cap, i) => (
          <RevealSection key={i} delay={i * 0.08}>
            <Link to={cap.href} className="block group">
              <div className="card-premium h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="eyebrow">{cap.outcome}</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {cap.title}
                </h3>
                <p className="body-md mt-3 flex-1">{cap.desc}</p>
                <div className="flex items-center gap-2 mt-6 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Section 5: How We Work ─── */
const processSteps = [
  { step: "Define", desc: "Diagnose the growth challenge and align stakeholders on the strategy." },
  { step: "Build", desc: "Design the infrastructure, partnerships, and go-to-market architecture." },
  { step: "Operate", desc: "Execute embedded within the business — hands on the work, not just the plan." },
  { step: "Transfer", desc: "Build internal capability and transition ownership to client teams." },
  { step: "Scale", desc: "Expand across markets, partners, and channels with proven playbooks." },
];

const HowWeWork = () => (
  <section className="py-24 md:py-32 bg-secondary/20">
    <div className="section-container">
      <SectionHeader
        eyebrow="How we work"
        headline="Operators, not just advisors."
        description="We embed within the business and stay until growth has real infrastructure."
        centered
      />
      <div className="mt-16 relative">
        {/* Desktop horizontal */}
        <div className="hidden md:flex items-start justify-between relative">
          <div className="absolute top-5 left-0 right-0 h-px bg-border" />
          <div className="absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
          {processSteps.map((step, i) => (
            <RevealSection key={i} delay={i * 0.1} className="flex-1 relative px-3">
              <div className="w-10 h-10 rounded-full border border-primary/50 bg-background flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-xs font-display font-bold text-primary">{i + 1}</span>
              </div>
              <h3 className="font-display font-bold text-lg text-foreground text-center">{step.step}</h3>
              <p className="text-sm text-muted-foreground text-center mt-2">{step.desc}</p>
            </RevealSection>
          ))}
        </div>
        {/* Mobile vertical */}
        <div className="md:hidden space-y-8 relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />
          {processSteps.map((step, i) => (
            <RevealSection key={i} delay={i * 0.08} className="relative">
              <div className="absolute -left-8 top-0 w-6 h-6 rounded-full border border-primary/50 bg-background flex items-center justify-center">
                <span className="text-[10px] font-display font-bold text-primary">{i + 1}</span>
              </div>
              <h3 className="font-display font-bold text-foreground">{step.step}</h3>
              <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
            </RevealSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Section 6: Sector Proof ─── */
const proofClusters = [
  {
    sector: "Enterprise Technology",
    logos: ["HP", "Dell", "SAP", "Cisco"],
  },
  {
    sector: "Consumer & Brand Growth",
    logos: ["Brands For Less", "Unilever", "L'Oréal", "Nestlé"],
  },
  {
    sector: "Institutions & Ecosystems",
    logos: ["GovTech", "ASEAN Foundation", "Enterprise SG", "MAS"],
  },
  {
    sector: "New Economy & Innovation",
    logos: ["The Economist", "Grab", "Sea Group", "GoTo"],
  },
];

const SectorProof = () => (
  <section className="py-24 md:py-32">
    <div className="section-container">
      <SectionHeader
        eyebrow="Sector proof"
        headline="Experience across the industries shaping Southeast Asia."
      />
      <div className="grid sm:grid-cols-2 gap-8 mt-14">
        {proofClusters.map((cluster, i) => (
          <RevealSection key={i} delay={i * 0.08}>
            <div className="card-premium">
              <h3 className="font-display font-semibold text-foreground mb-6">{cluster.sector}</h3>
              <div className="grid grid-cols-2 gap-4">
                {cluster.logos.map((logo) => (
                  <div
                    key={logo}
                    className="h-12 rounded-md bg-secondary/60 border border-border flex items-center justify-center text-xs font-display font-medium text-muted-foreground"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Section 7: Featured Work ─── */
const featuredWork = [
  {
    title: "HP Garage 2.0",
    tags: ["AI Ecosystems", "Innovation"],
    challenge: "Reignite HP's innovation ecosystem across Asia Pacific with a scalable startup engagement platform.",
    role: "End-to-end program design, startup scouting, and partnership architecture.",
    outcome: "200+ startups evaluated, 12 enterprise pilots launched, regional expansion to 4 markets.",
  },
  {
    title: "The Economist BOT",
    tags: ["Live Experiences", "Brand & Demand"],
    challenge: "Create a landmark thought-leadership experience for The Economist's regional audience.",
    role: "Concept, production, audience strategy, and demand generation.",
    outcome: "2,000+ senior leaders engaged, 40% increase in regional subscription pipeline.",
  },
  {
    title: "Brands For Less SEA Launch",
    tags: ["Growth Infrastructure", "Market Entry"],
    challenge: "Launch a Middle East retail brand into Southeast Asia with zero existing presence.",
    role: "Market entry strategy, partner ecosystem build, and launch operations.",
    outcome: "3 markets entered in 18 months, 50+ retail partnerships activated.",
  },
];

const FeaturedWork = () => (
  <section className="py-24 md:py-32 bg-secondary/20">
    <div className="section-container">
      <SectionHeader
        eyebrow="Featured work"
        headline="Proof in practice."
        description="Enterprise programmes designed for scale, built for Southeast Asia."
      />
      <div className="grid lg:grid-cols-3 gap-6 mt-14">
        {featuredWork.map((work, i) => (
          <RevealSection key={i} delay={i * 0.1}>
            <Link to="/work" className="block group h-full">
              <div className="card-premium h-full flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {work.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-3"><strong className="text-foreground/70">Challenge:</strong> {work.challenge}</p>
                <p className="text-sm text-muted-foreground mt-2"><strong className="text-foreground/70">Role:</strong> {work.role}</p>
                <div className="mt-auto pt-5 border-t border-border mt-5">
                  <p className="text-sm font-medium text-primary">{work.outcome}</p>
                </div>
              </div>
            </Link>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Section 8: Depth Behind the Work ─── */
const depthBlocks = [
  { title: "Leadership", desc: "Experienced operators across strategy, growth, and technology.", href: "/company/leadership" },
  { title: "Operating Bench", desc: "200+ specialists across Southeast Asia and India.", href: "/company" },
  { title: "Regional Nodes", desc: "Singapore, India, Malaysia, Indonesia — and expanding.", href: "/company/regional-nodes" },
  { title: "Capability Ownership", desc: "Each capability led by domain-specialist principals.", href: "/capabilities" },
];

const DepthSection = () => (
  <section className="py-24 md:py-32">
    <div className="section-container">
      <SectionHeader
        eyebrow="Depth behind the work"
        headline="Real teams. Real infrastructure."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
        {depthBlocks.map((block, i) => (
          <RevealSection key={i} delay={i * 0.08}>
            <Link to={block.href} className="block group">
              <div className="card-premium h-full">
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {block.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">{block.desc}</p>
                <ArrowRight className="w-4 h-4 text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Section 9: Perspectives ─── */
const articles = [
  { title: "Why imported playbooks fail in Southeast Asia", category: "Growth Strategy", date: "March 2026" },
  { title: "The partner ecosystem advantage in ASEAN enterprise", category: "Ecosystems", date: "February 2026" },
  { title: "From pilot to platform: scaling AI ventures in SEA", category: "AI & Innovation", date: "January 2026" },
];

const Perspectives = () => (
  <section className="py-24 md:py-32 bg-secondary/20">
    <div className="section-container">
      <SectionHeader
        eyebrow="Perspectives"
        headline="Field intelligence, not thought leadership."
      />
      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {articles.map((article, i) => (
          <RevealSection key={i} delay={i * 0.08}>
            <Link to="/thinking" className="block group">
              <div className="card-premium h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-primary font-medium">{article.category}</span>
                  <span className="text-xs text-dim">{article.date}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 mt-5 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Read <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Page ─── */
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
