import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import { ArrowRight } from "lucide-react";

/* ─── Section 3: Partner categories ─── */
const partnerTypes = [
  {
    title: "Enterprise technology platforms",
    description: "We work with technology companies that need market entry, ecosystem activation, demand creation, and regional GTM support across Southeast Asia.",
  },
  {
    title: "Distributors & channel ecosystems",
    description: "We help distributors and channel-led businesses design partner programs, activate routes to market, and create measurable movement across partner networks.",
  },
  {
    title: "AI & innovation partners",
    description: "We partner with AI companies, innovation platforms, and enterprise technology players to build pilots, ecosystems, and scalable market-facing programs.",
  },
  {
    title: "Startups & venture ecosystems",
    description: "We work with startups, venture studios, accelerators, and innovation communities to connect new capability with real commercial opportunity.",
  },
  {
    title: "Media, content & community partners",
    description: "We collaborate with publishers, content platforms, communities, and audience-led partners where credibility, attention, and influence matter.",
  },
  {
    title: "Specialist collaborators",
    description: "We work with specialist operators, creators, strategists, and delivery partners who add depth, speed, or market-specific capability to the work.",
  },
];

/* ─── Section 4: Value pillars ─── */
const valuePillars = [
  {
    title: "Strategy & market design",
    description: "We help define where the partnership fits, what problem it solves, and how it creates value in-market.",
  },
  {
    title: "GTM & ecosystem activation",
    description: "We turn partnership strategy into action through partner recruitment, enablement, co-marketing, and commercial activation.",
  },
  {
    title: "Demand & market visibility",
    description: "We build the messaging, content, and audience motion that helps the partnership become visible and relevant in the market.",
  },
  {
    title: "Program build & operation",
    description: "We design and run the structures that make partnerships usable — from frameworks and workflows to communications, reporting, and execution cadence.",
  },
  {
    title: "Regional execution",
    description: "We help partnerships move across markets with the right balance of regional consistency and local relevance.",
  },
  {
    title: "Build-Operate-Transfer capability",
    description: "Where needed, we build the partnership capability, operate it until it works, and transfer it into the client organization.",
  },
];

/* ─── Section 5: Partnership models ─── */
const partnershipModels = [
  {
    title: "Market entry partnerships",
    forWhom: "For companies entering new markets and needing access, credibility, and execution support.",
    brings: "Market design, local activation, ecosystem connections, commercial execution.",
  },
  {
    title: "Channel & distributor activation",
    forWhom: "For brands that need partner ecosystems to produce real business outcomes.",
    brings: "Partner strategy, recruitment, enablement, activation, program operations.",
  },
  {
    title: "Innovation ecosystem programs",
    forWhom: "For enterprises that want to connect internal priorities with startups, AI partners, and external capability.",
    brings: "Ecosystem design, pilot structuring, startup engagement, program build.",
  },
  {
    title: "Co-marketing & demand generation",
    forWhom: "For partnerships that need visibility, audience engagement, and measurable follow-through.",
    brings: "Messaging, content, activation, demand programs, performance discipline.",
  },
  {
    title: "Strategic alliance development",
    forWhom: "For organizations building long-term partnership-led growth across categories or markets.",
    brings: "Alliance strategy, partner architecture, commercial alignment, operating support.",
  },
  {
    title: "Build-Operate-Transfer partnerships",
    forWhom: "For companies that want a capability built, proven, and eventually transferred.",
    brings: "Design, execution, operational ownership, transfer model.",
  },
];

/* ─── Section 6: Partnership examples ─── */
const partnershipExamples = [
  {
    name: "HP Garage 2.0",
    type: "AI ecosystem & innovation architecture",
    role: "Built a regional model connecting enterprise needs, startup capability, and partner ecosystems across multiple markets.",
    result: "Expanded access, ecosystem differentiation, and a stronger platform for innovation-led growth.",
  },
  {
    name: "HP-Rakuten",
    type: "Enterprise-startup collaboration",
    role: "Helped shape structured engagement between enterprise priorities and external AI innovation.",
    result: "Created a more usable path from innovation interest to pilot opportunity.",
  },
  {
    name: "The Economist × Hindustan Times",
    type: "Strategic growth partnership",
    role: "Designed and activated a partnership-led market re-entry model.",
    result: "Created a more scalable route to audience access, subscription growth, and market traction.",
  },
  {
    name: "Channel & partner ecosystem programs",
    type: "Distributor & channel activation",
    role: "Built and operated partner-facing motions across recruitment, enablement, communication, and activation.",
    result: "Stronger partner participation, better commercial follow-through, and more measurable ecosystem movement.",
  },
  {
    name: "Affiliate & partner-led growth programs",
    type: "Performance-led partnership engine",
    role: "Designed acquisition systems that used partner trust and external channels to drive efficient growth.",
    result: "Lower acquisition costs, stronger conversion, and more scalable demand generation.",
  },
];

/* ─── Section 7: Principles ─── */
const principles = [
  {
    title: "Shared commercial intent",
    description: "The best partnerships are built around real business movement, not symbolic collaboration.",
  },
  {
    title: "Clear ownership",
    description: "Partnerships work better when responsibilities, incentives, and decision-making are defined early.",
  },
  {
    title: "Willingness to build",
    description: "Strong outcomes usually come from partnerships that are designed and operated, not improvised.",
  },
  {
    title: "Long-term value over short-term noise",
    description: "We look for partnerships that create durable advantage, not one-off visibility.",
  },
  {
    title: "Regional ambition",
    description: "The most interesting work often sits at the intersection of multiple markets, stakeholders, and growth paths.",
  },
  {
    title: "Execution discipline",
    description: "Good ideas matter. Follow-through matters more.",
  },
];

const Partnerships = () => (
  <PageLayout>
    {/* ── SECTION 1: HERO ── */}
    <HeroSection
      eyebrow="Partnerships"
      headline="Partnerships that move markets."
      description="Enfactum partners with enterprise platforms, distributors, startups, media properties, and ecosystem builders to create growth, capability, and commercial momentum across Southeast Asia."
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/contact">
          <Button variant="hero" size="xl">Start a partnership conversation</Button>
        </Link>
        <a href="#partnership-models">
          <Button variant="hero-outline" size="xl">Explore partnership models</Button>
        </a>
      </div>
    </HeroSection>

    {/* ── SECTION 2: WHY PARTNERSHIPS MATTER ── */}
    <section className="py-20 md:py-28">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <RevealSection>
            <h2 className="headline-lg">
              Growth in Southeast Asia rarely moves in straight lines.
            </h2>
          </RevealSection>
          <RevealSection delay={0.1}>
            <div className="space-y-5">
              <p className="body-md">
                It moves through trust. Through channels. Through local relationships. Through ecosystems that already shape how buyers discover, evaluate, and act.
              </p>
              <p className="body-md">
                That is why the right partnership is not a side initiative. It is often the growth model.
              </p>
              <p className="body-md">
                The strongest partnerships do more than create visibility. They create access, credibility, activation, and follow-through. They make it easier for brands to enter markets, build momentum, and scale with more precision.
              </p>
              <p className="body-md font-medium text-foreground">
                At Enfactum, we help design, activate, and operate those partnerships — so they create real commercial movement.
              </p>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>

    <div className="section-container"><div className="section-divider" /></div>

    {/* ── SECTION 3: WHO WE PARTNER WITH ── */}
    <section className="py-20 md:py-28">
      <div className="section-container">
        <RevealSection>
          <p className="eyebrow mb-4">Who we partner with</p>
          <h2 className="headline-lg max-w-3xl">Six types of partnership. One shared ambition.</h2>
        </RevealSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {partnerTypes.map((type, i) => (
            <RevealSection key={i} delay={i * 0.06}>
              <div className="card-premium h-full">
                <h3 className="font-display text-lg font-semibold text-foreground">{type.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed font-body">{type.description}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── SECTION 4: HOW ENFACTUM CREATES VALUE ── */}
    <section className="py-20 md:py-28 section-alt">
      <div className="section-container">
        <RevealSection>
          <p className="eyebrow mb-4">How we create value</p>
          <h2 className="headline-lg max-w-4xl">We do more than connect companies. We help make the partnership work.</h2>
        </RevealSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px mt-14 bg-border/30 rounded-md overflow-hidden border border-border/40">
          {valuePillars.map((pillar, i) => (
            <RevealSection key={i} delay={i * 0.06}>
              <div className="bg-card/80 p-7 md:p-9 h-full">
                <span className="text-[11px] font-medium text-primary/60 font-body">0{i + 1}</span>
                <h3 className="font-display text-base font-semibold text-foreground mt-3">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed font-body">{pillar.description}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── SECTION 5: PARTNERSHIP MODELS ── */}
    <section id="partnership-models" className="py-20 md:py-28 scroll-mt-24">
      <div className="section-container">
        <RevealSection>
          <p className="eyebrow mb-4">Partnership models</p>
          <h2 className="headline-lg max-w-3xl">Structured for outcomes. Designed for context.</h2>
        </RevealSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {partnershipModels.map((model, i) => (
            <RevealSection key={i} delay={i * 0.06}>
              <div className="card-premium h-full flex flex-col">
                <h3 className="font-display text-lg font-semibold text-foreground">{model.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed font-body flex-1">{model.forWhom}</p>
                <div className="mt-5 pt-5 border-t border-border/30">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-primary/60 font-body mb-2">What Enfactum brings</p>
                  <p className="text-[13px] text-foreground/80 font-body leading-relaxed">{model.brings}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── SECTION 6: PARTNERSHIPS IN PRACTICE ── */}
    <section className="py-20 md:py-28 section-alt">
      <div className="section-container">
        <RevealSection>
          <p className="eyebrow mb-4">Partnerships in practice</p>
          <h2 className="headline-lg max-w-3xl">Partnerships we've helped build and operate.</h2>
        </RevealSection>
        <div className="space-y-0 mt-14">
          {partnershipExamples.map((example, i) => (
            <RevealSection key={i} delay={i * 0.06}>
              <div className="border-b border-border/30 py-8 md:py-10 grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-start">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{example.name}</h3>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-primary/70 mt-1 font-body">{example.type}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">{example.role}</p>
                  <p className="text-sm text-foreground font-medium mt-3 font-body">{example.result}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
        <RevealSection delay={0.2}>
          <div className="mt-10">
            <Link to="/work" className="inline-flex items-center gap-2 text-sm text-primary/70 hover:text-primary transition-colors font-body">
              See more of our work <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>

    {/* ── SECTION 7: WHAT MAKES A STRONG PARTNERSHIP ── */}
    <section className="py-20 md:py-28">
      <div className="section-container">
        <RevealSection>
          <p className="eyebrow mb-4">Our lens</p>
          <h2 className="headline-lg max-w-3xl">What makes a strong partnership.</h2>
        </RevealSection>
        <div className="mt-14 space-y-0">
          {principles.map((p, i) => (
            <RevealSection key={i} delay={i * 0.05}>
              <div className="border-b border-border/30 py-7 md:py-8 grid md:grid-cols-[280px_1fr] gap-3 md:gap-12 items-baseline">
                <h3 className="font-display text-base font-semibold text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{p.description}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── SECTION 8: FINAL CTA ── */}
    <CTABand
      headline="Looking to build together in Southeast Asia?"
      description="Whether you are a platform, distributor, startup, media property, or ecosystem builder — we are interested in partnerships that create real commercial movement."
      primaryLabel="Start a partnership conversation"
      primaryHref="/contact"
      secondaryLabel="Explore our work"
      secondaryHref="/work"
    />
  </PageLayout>
);

export default Partnerships;
