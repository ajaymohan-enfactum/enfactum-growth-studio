import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import SEOHead from "@/components/shared/SEOHead";
import RegionalNodesMap from "@/components/shared/RegionalNodesMap";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

import ajayPhoto from "@/assets/team/ajay-mohan.png";
import williamPhoto from "@/assets/team/william-gaultier.png";
import poojaPhoto from "@/assets/team/pooja-mohan.png";

/* ═══════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════ */

const companyMetrics = [
  { metric: "40+", label: "Enterprise clients served" },
  { metric: "15+", label: "Markets with active presence" },
  { metric: "100+", label: "Programmes delivered" },
  { metric: "5+", label: "Year average client tenure" },
];

const leaders = [
  { name: "Ajay Mohan", role: "Founder & Managing Partner", focus: "Strategy · Growth · Southeast Asia", bio: "15+ years building growth infrastructure for enterprise brands across Asia Pacific. Leads Enfactum's strategic vision and client partnerships.", photo: ajayPhoto },
  { name: "William Gaultier", role: "Partner", focus: "Ecosystems · Innovation · Partnerships", bio: "Deep enterprise and ecosystem experience across ASEAN, driving innovation programmes and strategic partnerships.", photo: williamPhoto },
  { name: "Pooja Mohan", role: "Director / Co-Founder", focus: "Operations · Creative Strategy · Scale", bio: "Leads Enfactum's operational backbone — managing delivery, team coordination, and programme execution across the region.", photo: poojaPhoto },
  { name: "Sumit Ramchandani", role: "Adtech & Martech Lead", focus: "Martech · Performance · Data", bio: "Specialist in marketing technology, performance infrastructure, and data-driven growth architectures." },
];

const domainSpecialists = [
  { domain: "Enterprise SaaS & Technology", focus: "GTM strategy, channel programmes, partner ecosystems for technology companies", clients: "HP · Oracle · Dell EMC · Commvault · Lenovo", featured: true },
  { domain: "Consumer & Brand Growth", focus: "Market entry, brand-to-demand, retail partnership activation", clients: "L'Oréal · Lancôme · Kiehl's · JSHealth · Brands For Less", featured: false },
  { domain: "Financial Services & Fintech", focus: "Ecosystem design, regulatory navigation, digital transformation", clients: "eBaoTech · Insuremo · Redington", featured: false },
  { domain: "Government & Institutions", focus: "Innovation programmes, public-sector engagement, ecosystem architecture", clients: "The Economist · NUS · Abbott · DSCOOP", featured: false },
];

const capabilityOwnership = [
  { capability: "Growth Infrastructure", owner: "Led by a dedicated partner with GTM and channel expertise", scope: "Market entry · Partner programmes · Revenue operations" },
  { capability: "Brand & Demand", owner: "Led by a creative and performance specialist", scope: "Performance · Social · Influencer · Creative" },
  { capability: "AI Ecosystems", owner: "Led by an innovation and venture strategist", scope: "Startup scouting · Pilot design · Scale architecture" },
  { capability: "Live Experiences", owner: "Led by an events and activation specialist", scope: "Launches · Summits · Roadshows · Experiential" },
];

const growthPrinciples = [
  { title: "Growth Architect mindset", desc: "We don't advise from the outside. We embed within the business and stay until the work has real infrastructure." },
  { title: "Ecosystem intelligence", desc: "We understand how growth moves through partnerships, channels, and local trust — not just marketing funnels." },
  { title: "Outcome obsession", desc: "Every programme is designed around commercial outcomes. We measure what matters to the business, not vanity metrics." },
  { title: "Regional depth", desc: "We're built for Southeast Asia. Our teams, partners, and growth architecture are designed for this region's complexity." },
  { title: "Capability ownership", desc: "Each capability is led by a domain-specialist principal who owns quality, methodology, and client outcomes." },
  { title: "Structured transfer", desc: "We build to transfer. Every engagement is designed to leave the client with lasting capability, not dependency." },
];

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */

const Company = () => (
  <PageLayout>
    <SEOHead
      title="Company"
      description="Enfactum is a Singapore-headquartered growth and innovation operating partner for enterprise brands in Southeast Asia. 40+ clients, 15+ markets, 200+ specialists across strategy, creative, technology, and operations."
      path="/company"
    />

    {/* ─── HERO ─── */}
    <HeroSection
      eyebrow="Company"
      headline={<>Built to turn strategy into <span className="text-primary">movement.</span></>}
      description="Enfactum is a growth and innovation operating partner — combining strategy, ecosystems, and execution to help enterprise brands scale with clarity and momentum across the region."
    />

    {/* ═══ SECTION 1 — ORIGIN STATEMENT ═══ */}
    <section className="py-24 md:py-32">
      <div className="section-container">
        {/* Large editorial statement */}
        <RevealSection blur>
          <div className="max-w-3xl mb-20">
            <p className="eyebrow mb-6">Our story</p>
            <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
              From execution gap to operating partner.
            </h2>
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-6">
            <RevealSection delay={0.1} blur>
              <p className="text-[clamp(1rem,1.15vw,1.125rem)] text-foreground/70 leading-[1.75] font-body">
                Since 2010, Enfactum has bridged the gap between strategic intent and operational reality.
                We are not just consultants — we are Growth Architects. For over a decade, we have helped global
                brands navigate complex markets with precision.
              </p>
            </RevealSection>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <RevealSection delay={0.15} blur>
              <p className="text-[clamp(1rem,1.15vw,1.125rem)] text-foreground/70 leading-[1.75] font-body">
                Our Build-Operate-Transfer model replaces siloed teams and short-term projects with
                integrated operations, hands-on execution, and 5+ year partnerships that build lasting
                capability.
              </p>
              <p className="text-[13px] text-foreground/25 mt-8 leading-relaxed italic font-body">
                Headquartered in Singapore. Operating across India, Malaysia, Indonesia, the USA, and broader Southeast Asia.
              </p>
            </RevealSection>
          </div>
        </div>

        {/* ── Metrics — monumental integrated stats ── */}
        <div className="mt-28 md:mt-36 relative">
          {/* Architectural line */}
          <div className="h-px w-full bg-gradient-to-r from-border/40 via-border/20 to-transparent mb-16" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-8">
            {companyMetrics.map((m, i) => (
              <RevealSection key={i} delay={i * 0.08} blur>
                <div className="relative">
                  {/* Faint architectural number */}
                  <span className="absolute -top-2 right-0 text-[80px] md:text-[100px] font-display font-bold text-foreground/[0.02] leading-none select-none pointer-events-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <AnimatedCounter
                    value={m.metric}
                    className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-foreground/90 tracking-tight block leading-none"
                  />
                  <div className="w-8 h-px bg-primary/30 mt-5 mb-4" />
                  <span className="text-[11px] text-foreground/30 block leading-snug font-body tracking-wide">
                    {m.label}
                  </span>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ═══ SECTION 2 — LEADERSHIP ═══ */}
    <section className="py-24 md:py-32 bg-[hsl(var(--section-alt))]">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-6">
            <RevealSection blur>
              <p className="eyebrow mb-6">Leadership</p>
              <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
                Experienced Growth Architects,<br className="hidden md:block" /> not career advisors.
              </h2>
            </RevealSection>
          </div>
          <div className="md:col-span-4 md:col-start-8 flex items-end">
            <RevealSection delay={0.1}>
              <p className="text-[13px] text-foreground/35 leading-relaxed font-body">
                The Enfactum leadership team has built and operated growth programmes across Asia Pacific for decades — inside enterprises, agencies, and venture ecosystems.
              </p>
              <Link to="/company/leadership" className="inline-flex items-center gap-2 text-sm text-primary/60 hover:text-primary font-medium transition-colors duration-500 mt-6">
                Full leadership team <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </RevealSection>
          </div>
        </div>

        {/* Leader grid — first leader prominent */}
        <div className="grid md:grid-cols-12 gap-8">
          {/* Ajay — featured leader */}
          <div className="md:col-span-5">
            <RevealSection blur>
              <div className="group">
                <div className="w-full aspect-[3/4] rounded-sm overflow-hidden mb-8 relative">
                  <img
                    src={leaders[0].photo}
                    alt={leaders[0].name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent group-hover:via-primary/30 transition-all duration-700" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground tracking-tight">{leaders[0].name}</h3>
                <p className="text-sm text-primary/60 font-medium mt-1">{leaders[0].role}</p>
                <p className="text-[10px] text-foreground/20 uppercase tracking-[0.2em] font-body mt-3">{leaders[0].focus}</p>
                <p className="text-[13px] text-foreground/35 mt-5 leading-relaxed max-w-sm">{leaders[0].bio}</p>
              </div>
            </RevealSection>
          </div>

          {/* Supporting leaders */}
          <div className="md:col-span-6 md:col-start-7 grid sm:grid-cols-3 gap-6">
            {leaders.slice(1).map((leader, i) => (
              <RevealSection key={i} delay={0.1 + i * 0.08} blur>
                <div className="group">
                  {leader.photo ? (
                    <div className="w-full aspect-[3/4] rounded-sm overflow-hidden mb-5 relative">
                      <img
                        src={leader.photo}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    </div>
                  ) : (
                    <div className="w-full aspect-[3/4] rounded-sm bg-gradient-to-b from-secondary/60 to-secondary/20 border border-border/20 mb-5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    </div>
                  )}
                  <h3 className="font-display text-sm font-semibold text-foreground tracking-tight">{leader.name}</h3>
                  <p className="text-[12px] text-primary/50 font-medium mt-0.5">{leader.role}</p>
                  <p className="text-[10px] text-foreground/20 uppercase tracking-[0.15em] font-body mt-2">{leader.focus}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ═══ SECTION 3 — REGIONAL NODES ═══ */}
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-6">
            <RevealSection blur>
              <p className="eyebrow mb-6">Regional nodes</p>
              <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
                A growth network,<br className="hidden md:block" /> not an office list.
              </h2>
            </RevealSection>
          </div>
          <div className="md:col-span-4 md:col-start-8 flex items-end">
            <RevealSection delay={0.1}>
              <p className="text-[13px] text-foreground/35 leading-relaxed font-body">
                Each node has a distinct role — strategy from Singapore, scale through India,
                market presence in Malaysia and Indonesia, with the USA as a global bridge.
              </p>
              <Link to="/company/regional-nodes" className="inline-flex items-center gap-2 text-sm text-primary/60 hover:text-primary font-medium transition-colors duration-500 mt-6">
                Explore regional nodes <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </RevealSection>
          </div>
        </div>

        <RegionalNodesMap />
      </div>
    </section>

    {/* ═══ SECTION 4 — DOMAIN SPECIALISTS ═══ */}
    <section className="py-24 md:py-32 bg-[hsl(var(--section-alt))]">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-6">
            <RevealSection blur>
              <p className="eyebrow mb-6">Verticals</p>
              <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
                Industry depth across<br className="hidden md:block" /> key sectors.
              </h2>
            </RevealSection>
          </div>
          <div className="md:col-span-4 md:col-start-8 flex items-end">
            <RevealSection delay={0.1}>
              <p className="text-[13px] text-foreground/30 leading-relaxed font-body">
                Beyond functional capability, Enfactum maintains sector-specific expertise through dedicated domain specialists.
              </p>
            </RevealSection>
          </div>
        </div>

        {/* Featured sector — Enterprise Technology */}
        {domainSpecialists.filter(ds => ds.featured).map((ds, i) => (
          <RevealSection key={i} blur>
            <div className="relative p-8 md:p-12 rounded-sm border border-border/10 bg-background/20 backdrop-blur-sm mb-8">
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-7">
                  <span className="text-[80px] md:text-[100px] font-display font-bold text-foreground/[0.025] leading-none select-none pointer-events-none absolute top-4 right-6 hidden md:block">
                    01
                  </span>
                  <span className="text-[10px] text-primary/40 uppercase tracking-[0.2em] font-body">Primary vertical</span>
                  <h3 className="text-[clamp(1.25rem,2vw,1.75rem)] font-display font-bold text-foreground mt-3 leading-[1.15] tracking-[-0.01em]">
                    {ds.domain}
                  </h3>
                  <div className="w-10 h-px bg-primary/15 my-5" />
                  <p className="text-[14px] text-foreground/35 leading-[1.8] max-w-md">{ds.focus}</p>
                </div>
                <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end">
                  <span className="text-[10px] text-foreground/15 uppercase tracking-[0.2em] font-body mb-3">Select clients</span>
                  <p className="text-[13px] text-foreground/25 leading-[1.8] font-body">{ds.clients}</p>
                </div>
              </div>
            </div>
          </RevealSection>
        ))}

        {/* Supporting sectors — horizontal lanes */}
        <div className="grid md:grid-cols-3 gap-0">
          {domainSpecialists.filter(ds => !ds.featured).map((ds, i) => (
            <RevealSection key={i} delay={0.1 + i * 0.08} blur>
              <div className={`py-8 md:py-10 md:px-8 ${i < 2 ? 'md:border-r border-border/8' : ''} border-t border-border/10`}>
                <span className="text-[32px] font-display font-bold text-foreground/[0.03] leading-none select-none block mb-4">
                  {String(i + 2).padStart(2, '0')}
                </span>
                <h3 className="font-display text-[15px] font-semibold text-foreground leading-snug">
                  {ds.domain}
                </h3>
                <p className="text-[12px] text-foreground/25 mt-3 leading-relaxed font-body">{ds.focus}</p>
                <p className="text-[10px] text-foreground/12 mt-4 font-body leading-relaxed">{ds.clients}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 5 — CAPABILITY OWNERSHIP ═══ */}
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-6">
            <RevealSection blur>
              <p className="eyebrow mb-6">Capability ownership</p>
              <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
                Each capability led by<br className="hidden md:block" /> a dedicated principal.
              </h2>
            </RevealSection>
          </div>
          <div className="md:col-span-4 md:col-start-8 flex items-end">
            <RevealSection delay={0.1}>
              <p className="text-[13px] text-foreground/30 leading-relaxed font-body">
                Capability owners are accountable for methodology, quality, talent, and client outcomes within their domain.
              </p>
            </RevealSection>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-0">
          {capabilityOwnership.map((co, i) => (
            <RevealSection key={i} delay={i * 0.08} blur>
              <div className="py-10 border-t border-border/15">
                <span className="text-[10px] text-foreground/20 uppercase tracking-[0.2em] font-body">{co.scope}</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-4">{co.capability}</h3>
                <p className="text-[13px] text-foreground/30 mt-3 leading-relaxed">{co.owner}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 6 — GROWTH ARCHITECTURE PRINCIPLES ═══ */}
    <section className="py-24 md:py-32 bg-[#0B1121] relative overflow-hidden">
      {/* Architectural vertical line */}
      <div className="absolute top-0 bottom-0 left-[33.33%] w-px bg-gradient-to-b from-transparent via-foreground/[0.03] to-transparent hidden md:block" />
      <div className="absolute top-0 bottom-0 left-[66.66%] w-px bg-gradient-to-b from-transparent via-foreground/[0.03] to-transparent hidden md:block" />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-6">
            <RevealSection blur>
              <p className="eyebrow mb-6">What we value</p>
              <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
                How we work.<br /> What we believe.
              </h2>
            </RevealSection>
          </div>
          <div className="md:col-span-4 md:col-start-8 flex items-end">
            <RevealSection delay={0.1}>
              <p className="text-[13px] text-foreground/30 leading-relaxed font-body">
                These aren't aspirational values. They're operational commitments
                that shape how we build teams, design programmes, and deliver outcomes.
              </p>
              <Link to="/company/operating-model" className="inline-flex items-center gap-2 text-sm text-primary/60 hover:text-primary font-medium transition-colors duration-500 mt-6">
                View Growth Architecture <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </RevealSection>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-0">
          {growthPrinciples.map((p, i) => (
            <RevealSection key={i} delay={i * 0.05} blur>
              <div className="py-10 border-t border-foreground/[0.06]">
                <h3 className="font-display text-[15px] font-semibold text-foreground">{p.title}</h3>
                <p className="text-[13px] text-foreground/25 mt-4 leading-[1.8]">{p.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 7 — NAVIGATION LINKS ═══ */}
    <section className="py-24 md:py-28">
      <div className="section-container">
        <RevealSection blur>
          <p className="eyebrow mb-14">Explore further</p>
        </RevealSection>
        <div className="space-y-0">
          {[
            { title: "Leadership", desc: "Meet the full leadership team.", href: "/company/leadership" },
            { title: "Growth Architecture", desc: "How we structure and deliver programmes.", href: "/company/operating-model" },
            { title: "Regional Nodes", desc: "Our operating network across Southeast Asia.", href: "/company/regional-nodes" },
            { title: "Careers", desc: "Build something meaningful with us.", href: "/company/careers" },
          ].map((link, i) => (
            <RevealSection key={i} delay={i * 0.04}>
              <Link to={link.href} className="group block">
                <div className="grid md:grid-cols-12 gap-4 py-7 border-b border-border/15 group-hover:border-primary/15 transition-colors duration-700">
                  <div className="md:col-span-3">
                    <span className="font-display text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors duration-500">
                      {link.title}
                    </span>
                  </div>
                  <div className="md:col-span-7">
                    <span className="text-[13px] text-foreground/30">{link.desc}</span>
                  </div>
                  <div className="md:col-span-2 flex items-center justify-end">
                    <ArrowRight className="w-3.5 h-3.5 text-foreground/10 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-500" />
                  </div>
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    <CTABand
      headline="Want to work with us — or join us?"
      description="Whether you're an enterprise brand, a potential partner, or exceptional talent."
      primaryLabel="Start a conversation"
      secondaryLabel="View careers"
      secondaryHref="/company/careers"
    />
  </PageLayout>
);

export default Company;
