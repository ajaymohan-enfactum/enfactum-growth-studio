import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import SEOHead, { makeFAQSchema } from "@/components/shared/SEOHead";
import { ArrowRight } from "lucide-react";

/* ─── Data ─── */
const partnerTypes = [
  { title: "Enterprise technology platforms", description: "We work with technology companies that need market entry, ecosystem activation, demand creation, and regional GTM support across Southeast Asia." },
  { title: "Distributors & channel ecosystems", description: "We help distributors and channel-led businesses design partner programs, activate routes to market, and create measurable movement across partner networks." },
  { title: "AI & innovation partners", description: "We partner with AI companies, innovation platforms, and enterprise technology players to build pilots, ecosystems, and scalable market-facing programs." },
  { title: "Startups & venture ecosystems", description: "We work with startups, venture studios, accelerators, and innovation communities to connect new capability with real commercial opportunity." },
  { title: "Media, content & community partners", description: "We collaborate with publishers, content platforms, communities, and audience-led partners where credibility, attention, and influence matter." },
  { title: "Specialist collaborators", description: "We work with specialist Growth Architects, creators, strategists, and delivery partners who add depth, speed, or market-specific capability to the work." },
];

const valuePillars = [
  { title: "Strategy & market design", description: "We help define where the partnership fits, what problem it solves, and how it creates value in-market." },
  { title: "GTM & ecosystem activation", description: "We turn partnership strategy into action through partner recruitment, enablement, co-marketing, and commercial activation." },
  { title: "Demand & market visibility", description: "We build the messaging, content, and audience motion that helps the partnership become visible and relevant in the market." },
  { title: "Program build & operation", description: "We design and run the structures that make partnerships usable — from frameworks and workflows to communications, reporting, and execution cadence." },
  { title: "Regional execution", description: "We help partnerships move across markets with the right balance of regional consistency and local relevance." },
  { title: "Build-Operate-Transfer capability", description: "Where needed, we build the partnership capability, operate it until it works, and transfer it into the client organization." },
];

const partnershipModels = [
  { title: "Market entry partnerships", forWhom: "For companies entering new markets and needing access, credibility, and execution support.", brings: "Market design, local activation, ecosystem connections, commercial execution." },
  { title: "Channel & distributor activation", forWhom: "For brands that need partner ecosystems to produce real business outcomes.", brings: "Partner strategy, recruitment, enablement, activation, program operations." },
  { title: "Innovation ecosystem programs", forWhom: "For enterprises that want to connect internal priorities with startups, AI partners, and external capability.", brings: "Ecosystem design, pilot structuring, startup engagement, program build." },
  { title: "Co-marketing & demand generation", forWhom: "For partnerships that need visibility, audience engagement, and measurable follow-through.", brings: "Messaging, content, activation, demand programs, performance discipline." },
  { title: "Strategic alliance development", forWhom: "For organizations building long-term partnership-led growth across categories or markets.", brings: "Alliance strategy, partner architecture, commercial alignment, operating support." },
  { title: "Build-Operate-Transfer partnerships", forWhom: "For companies that want a capability built, proven, and eventually transferred.", brings: "Design, execution, operational ownership, transfer model." },
];

const partnershipExamples = [
  { name: "HP Garage 2.0", type: "AI ecosystem & innovation architecture", role: "Built a regional model connecting enterprise needs, startup capability, and partner ecosystems across multiple markets.", result: "Expanded access, ecosystem differentiation, and a stronger platform for innovation-led growth.", featured: true },
  { name: "The Economist × Hindustan Times", type: "Strategic growth partnership", role: "Designed and activated a partnership-led market re-entry model.", result: "Created a more scalable route to audience access, subscription growth, and market traction.", featured: true },
  { name: "HP-Rakuten", type: "Enterprise-startup collaboration", role: "Helped shape structured engagement between enterprise priorities and external AI innovation.", result: "Created a more usable path from innovation interest to pilot opportunity.", featured: false },
  { name: "Channel & partner ecosystem programs", type: "Distributor & channel activation", role: "Built and operated partner-facing motions across recruitment, enablement, communication, and activation.", result: "Stronger partner participation, better commercial follow-through, and more measurable ecosystem movement.", featured: false },
  { name: "Affiliate & partner-led growth programs", type: "Performance-led partnership engine", role: "Designed acquisition systems that used partner trust and external channels to drive efficient growth.", result: "Lower acquisition costs, stronger conversion, and more scalable demand generation.", featured: false },
];

const principles = [
  { title: "Shared commercial intent", description: "The best partnerships are built around real business movement, not symbolic collaboration." },
  { title: "Clear ownership", description: "Partnerships work better when responsibilities, incentives, and decision-making are defined early." },
  { title: "Willingness to build", description: "Strong outcomes usually come from partnerships that are designed and operated, not improvised." },
  { title: "Long-term value over short-term noise", description: "We look for partnerships that create durable advantage, not one-off visibility." },
  { title: "Regional ambition", description: "The most interesting work often sits at the intersection of multiple markets, stakeholders, and growth paths." },
  { title: "Execution discipline", description: "Good ideas matter. Follow-through matters more." },
];

const Partnerships = () => (
  <PageLayout>
    <SEOHead
      title="Partnership Models"
      description="Enfactum designs, activates, and operates partnerships for enterprise brands across Southeast Asia — from channel and distributor activation to innovation ecosystems, strategic alliances, and Build-Operate-Transfer programmes."
      path="/partnerships"
      jsonLd={makeFAQSchema([
        { question: "What types of partnerships does Enfactum support?", answer: "Enfactum works with enterprise technology platforms, distributors and channel ecosystems, AI and innovation partners, startups and venture ecosystems, media and content partners, and specialist collaborators across Southeast Asia." },
        { question: "How does Enfactum approach partnership-led growth?", answer: "Enfactum treats partnerships as growth infrastructure — designing the strategy, activating the ecosystem, building programme operations, and operating the system until it creates measurable commercial movement." },
        { question: "What is a Build-Operate-Transfer partnership?", answer: "Enfactum builds a partnership capability, operates it until it delivers proven results, and then transfers full ownership and methodology to the client organisation." },
      ])}
    />

    {/* ── HERO ── */}
    <HeroSection
      eyebrow="Partnerships"
      headline={<>Partnerships that <span className="text-primary">move markets.</span></>}
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

    {/* ── WHY PARTNERSHIPS MATTER ── */}
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <RevealSection blur>
              <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
                Growth in Southeast Asia rarely moves in straight lines.
              </h2>
            </RevealSection>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <RevealSection delay={0.1} blur>
              <div className="space-y-5">
                <p className="text-[clamp(0.9rem,1.1vw,1.05rem)] text-foreground/50 leading-[1.8] font-body">
                  It moves through trust. Through channels. Through local relationships. Through ecosystems that already shape how buyers discover, evaluate, and act.
                </p>
                <p className="text-[clamp(0.9rem,1.1vw,1.05rem)] text-foreground/50 leading-[1.8] font-body">
                  That is why the right partnership is not a side initiative. It is often the growth model.
                </p>
                <p className="text-[clamp(0.9rem,1.1vw,1.05rem)] text-foreground/50 leading-[1.8] font-body">
                  The strongest partnerships do more than create visibility. They create access, credibility, activation, and follow-through.
                </p>
                <p className="text-[14px] text-foreground/70 font-medium leading-[1.8] font-body border-l-2 border-primary/15 pl-5 mt-6">
                  At Enfactum, we help design, activate, and operate those partnerships — so they create real commercial movement.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>

    {/* ── WHO WE PARTNER WITH — editorial 2-col lanes ── */}
    <section className="py-24 md:py-32 bg-[hsl(var(--section-alt))]">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-6">
            <RevealSection blur>
              <p className="eyebrow mb-6">Who we partner with</p>
              <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
                Six types of partnership.<br className="hidden md:block" /> One shared ambition.
              </h2>
            </RevealSection>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          {partnerTypes.map((type, i) => (
            <RevealSection key={i} delay={i * 0.06} blur>
              <div className="py-8 border-t border-border/10">
                <div className="flex items-start gap-5">
                  <span className="text-[36px] md:text-[48px] font-display font-bold text-foreground/[0.03] leading-none shrink-0 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-[15px] font-semibold text-foreground leading-snug">{type.title}</h3>
                    <p className="text-[12px] text-foreground/25 mt-3 leading-relaxed font-body">{type.description}</p>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── HOW ENFACTUM CREATES VALUE — flowing editorial ── */}
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-6">
            <RevealSection blur>
              <p className="eyebrow mb-6">How Enfactum creates value</p>
              <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
                We do more than connect companies.
              </h2>
            </RevealSection>
          </div>
          <div className="md:col-span-4 md:col-start-8 flex items-end">
            <RevealSection delay={0.1}>
              <p className="text-[13px] text-foreground/30 leading-relaxed font-body">
                We help make the partnership work — from strategy through activation to sustained operation.
              </p>
            </RevealSection>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-0">
          {valuePillars.map((pillar, i) => (
            <RevealSection key={i} delay={i * 0.05} blur>
              <div className="py-8 border-t border-border/10">
                <span className="text-[10px] text-primary/30 uppercase tracking-[0.2em] font-body font-medium">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-[14px] font-semibold text-foreground mt-3">{pillar.title}</h3>
                <p className="text-[12px] text-foreground/25 mt-3 leading-[1.8] font-body">{pillar.description}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── PARTNERSHIP MODELS — alternating hierarchy ── */}
    <section id="partnership-models" className="py-24 md:py-32 bg-[#0B1121] relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 bottom-0 left-[50%] w-px bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent hidden md:block" />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-6">
            <RevealSection blur>
              <p className="eyebrow mb-6">Partnership models</p>
              <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
                Structured for outcomes.<br className="hidden md:block" /> Designed for context.
              </h2>
            </RevealSection>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
          {partnershipModels.map((model, i) => (
            <RevealSection key={i} delay={i * 0.06} blur>
              <div className="py-8 border-t border-foreground/[0.06]">
                <h3 className="font-display text-lg font-semibold text-foreground">{model.title}</h3>
                <p className="text-[13px] text-foreground/25 mt-3 leading-[1.8] font-body">{model.forWhom}</p>
                <div className="mt-5 flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-primary/30 mt-1.5 shrink-0" />
                  <p className="text-[12px] text-foreground/35 font-body leading-relaxed">
                    <span className="text-foreground/15 uppercase tracking-[0.15em] text-[10px]">Enfactum brings</span>
                    <br />
                    {model.brings}
                  </p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── PARTNERSHIPS IN PRACTICE — featured + archive ── */}
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-6">
            <RevealSection blur>
              <p className="eyebrow mb-6">Partnerships in practice</p>
              <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
                Partnerships we've helped<br className="hidden md:block" /> build and operate.
              </h2>
            </RevealSection>
          </div>
        </div>

        {/* Featured examples — editorial panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {partnershipExamples.filter(e => e.featured).map((example, i) => (
            <RevealSection key={i} delay={i * 0.1} blur>
              <div className="relative p-8 md:p-10 rounded-sm border border-border/10 bg-[hsl(var(--section-alt))] h-full">
                <span className="text-[70px] md:text-[90px] font-display font-bold text-foreground/[0.02] leading-none select-none pointer-events-none absolute top-3 right-5 hidden md:block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-primary/40 uppercase tracking-[0.2em] font-body">{example.type}</span>
                <h3 className="text-[clamp(1.15rem,1.8vw,1.5rem)] font-display font-bold text-foreground mt-3 leading-[1.2] tracking-[-0.01em]">
                  {example.name}
                </h3>
                <div className="w-8 h-px bg-primary/15 my-5" />
                <p className="text-[13px] text-foreground/30 leading-[1.8] font-body">{example.role}</p>
                <p className="text-[13px] text-foreground/50 font-medium mt-4 leading-[1.7] font-body border-l border-primary/15 pl-4">
                  {example.result}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Supporting examples — compact rows */}
        {partnershipExamples.filter(e => !e.featured).map((example, i) => (
          <RevealSection key={i} delay={0.2 + i * 0.06} blur>
            <div className="grid md:grid-cols-12 gap-4 py-6 border-t border-border/8">
              <div className="md:col-span-3">
                <h4 className="font-display text-[14px] font-semibold text-foreground">{example.name}</h4>
                <span className="text-[10px] text-primary/30 uppercase tracking-[0.15em] font-body">{example.type}</span>
              </div>
              <div className="md:col-span-5">
                <p className="text-[12px] text-foreground/25 leading-relaxed font-body">{example.role}</p>
              </div>
              <div className="md:col-span-4">
                <p className="text-[12px] text-foreground/35 font-medium leading-relaxed font-body">{example.result}</p>
              </div>
            </div>
          </RevealSection>
        ))}

        <RevealSection delay={0.3}>
          <div className="mt-10">
            <Link to="/work" className="inline-flex items-center gap-2 text-sm text-primary/50 hover:text-primary transition-colors duration-500 font-body">
              See more of our work <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>

    {/* ── WHAT MAKES A STRONG PARTNERSHIP — principles ── */}
    <section className="py-24 md:py-32 bg-[hsl(var(--section-alt))]">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-6">
            <RevealSection blur>
              <p className="eyebrow mb-6">Principles</p>
              <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
                What makes a strong partnership.
              </h2>
            </RevealSection>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-0">
          {principles.map((p, i) => (
            <RevealSection key={i} delay={i * 0.05} blur>
              <div className="py-8 border-t border-border/10">
                <h3 className="font-display text-[14px] font-semibold text-foreground">{p.title}</h3>
                <p className="text-[12px] text-foreground/25 mt-3 leading-[1.8] font-body">{p.description}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── CROSS-LINKS ── */}
    <section className="py-20">
      <div className="section-container">
        <RevealSection blur>
          <p className="eyebrow mb-12">Explore further</p>
        </RevealSection>
        <div className="space-y-0">
          {[
            { title: "Capabilities", desc: "How Enfactum's four capabilities connect to partnership-led growth.", href: "/capabilities" },
            { title: "Brands we've worked with", desc: "40+ enterprise brands across four sector clusters.", href: "/brands" },
            { title: "Read our thinking", desc: "Perspectives on ecosystems, partner-led growth, and commercial strategy.", href: "/thinking" },
          ].map((link, i) => (
            <RevealSection key={i} delay={i * 0.04}>
              <Link to={link.href} className="group block">
                <div className="grid md:grid-cols-12 gap-4 py-6 border-b border-border/10 group-hover:border-primary/10 transition-colors duration-700">
                  <div className="md:col-span-3">
                    <span className="font-display text-[14px] font-semibold text-foreground group-hover:text-primary transition-colors duration-500">
                      {link.title}
                    </span>
                  </div>
                  <div className="md:col-span-7">
                    <span className="text-[12px] text-foreground/25">{link.desc}</span>
                  </div>
                  <div className="md:col-span-2 flex items-center justify-end">
                    <ArrowRight className="w-3.5 h-3.5 text-foreground/8 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-500" />
                  </div>
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

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
