import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import ParallaxDivider from "@/components/shared/ParallaxDivider";
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
  { metric: "40+", label: "Global enterprise clients served" },
  { metric: "15+", label: "Markets with active presence" },
  { metric: "100+", label: "Technology programmes delivered" },
  { metric: "5+", label: "Year average client tenure" },
];

const leaders = [
  { name: "Ajay Mohan", role: "Founder & Managing Partner", focus: "Strategy · Growth · Southeast Asia", bio: "15+ years building growth infrastructure for enterprise brands across Asia Pacific. Leads Enfactum's strategic vision and client partnerships.", photo: ajayPhoto },
  { name: "William Gaultier", role: "Partner", focus: "Ecosystems · Innovation · Partnerships", bio: "Deep enterprise and ecosystem experience across ASEAN, driving innovation programmes and strategic partnerships.", photo: williamPhoto },
  { name: "Pooja Mohan", role: "Director / Co-Founder", focus: "Operations · Creative Strategy · Scale", bio: "Leads Enfactum's operational backbone — managing delivery, team coordination, and programme execution across the region.", photo: poojaPhoto },
  { name: "Sumit Ramchandani", role: "Adtech & Martech Lead", focus: "Martech · Performance · Data", bio: "Specialist in marketing technology, performance infrastructure, and data-driven growth architectures." },
];

const benchCapabilities = [
  { area: "Strategy & Growth", count: "25+", desc: "Growth strategists, market analysts, GTM architects" },
  { area: "Creative & Production", count: "60+", desc: "Creative directors, designers, producers, content specialists" },
  { area: "Technology & Data", count: "40+", desc: "Engineers, data analysts, platform specialists, AI/ML practitioners" },
  { area: "Demand & Marketing Ops", count: "35+", desc: "Performance marketers, social strategists, demand operations" },
  { area: "Programme & Project Ops", count: "30+", desc: "Programme managers, operations leads, delivery coordinators" },
  { area: "Events & Experiences", count: "15+", desc: "Event strategists, producers, logistics, experiential designers" },
];

const regionalNodes = [
  { city: "Singapore", role: "Strategic Hub", desc: "Client leadership, strategy, capability oversight, regional coordination." },
  { city: "India", role: "Scale & Execution Engine", desc: "Creative production, technology, demand operations, programme delivery at scale." },
  { city: "Malaysia", role: "Market Node", desc: "Local market execution, events & activations, partner management." },
  { city: "Indonesia", role: "Market Node", desc: "Indonesia market presence, local partnerships, consumer insights." },
  { city: "USA", role: "Strategic Bridge", desc: "Global client bridge, US market access, cross-border partnership development." },
];

const domainSpecialists = [
  { domain: "Enterprise SaaS & Technology", focus: "GTM strategy, channel programmes, partner ecosystems for technology companies" },
  { domain: "Consumer & Brand Growth", focus: "Market entry, brand-to-demand, retail partnership activation" },
  { domain: "Financial Services & Fintech", focus: "Ecosystem design, regulatory navigation, digital transformation" },
  { domain: "Government & Institutions", focus: "Innovation programmes, public-sector engagement, ecosystem architecture" },
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
      title="Company — Growth Operating Partner, Singapore"
      description="Enfactum is a Singapore-headquartered growth and innovation operating partner for enterprise brands in Southeast Asia. 40+ clients, 15+ markets, 35+ specialists across strategy, creative, technology, and operations."
      path="/company"
    />
    {/* ─── HERO ─── */}
    <HeroSection
      eyebrow="Company"
      headline={<>Built to turn strategy into <span className="text-primary">movement.</span></>}
      description="Enfactum is a growth and innovation operating partner — combining strategy, ecosystems, and execution to help enterprise brands scale with clarity and momentum across the region."
    />

    {/* ═══ SECTION 1 — ORIGIN + METRICS ═══ */}
    <section className="py-32 md:py-44">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <RevealSection blur>
              <p className="eyebrow mb-6">Our story</p>
              <h2 className="headline-lg">From execution gap to operating partner.</h2>
            </RevealSection>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <RevealSection delay={0.1} blur>
              <div className="space-y-6">
              <p className="body-lg">
                  Since 2010, Enfactum has bridged the gap between strategic intent and operational reality.
                  We are not just consultants — we are Growth Architects. For over a decade, we have helped global
                  brands navigate complex markets with precision.
                </p>
                <p className="body-lg">
                  Our Build-Operate-Transfer model replaces siloed teams and short-term projects with
                  integrated operations, hands-on execution, and 5+ year partnerships that build lasting
                  capability.
                </p>
                <p className="body-md text-muted-foreground italic">
                  Headquartered in Singapore. Operating across India, Malaysia, Indonesia, the USA, and broader Southeast Asia.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>

        {/* Metrics bar */}
        <div className="mt-24 border-t border-border/30 pt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {companyMetrics.map((m, i) => (
              <RevealSection key={i} delay={i * 0.08} scale>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <AnimatedCounter
                    value={m.metric}
                    className="font-display text-4xl md:text-5xl font-extrabold text-primary/85 tracking-tight block"
                  />
                  <span className="text-[12px] text-muted-foreground mt-2 block leading-snug font-body">
                    {m.label}
                  </span>
                </motion.div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>

    <ParallaxDivider variant="gradient" />
    {/* ═══ SECTION 2 — LEADERSHIP ═══ */}
    <section className="section-alt py-32 md:py-44">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-5">
            <RevealSection>
              <p className="eyebrow mb-6">Leadership</p>
              <h2 className="headline-lg">Experienced Growth Architects, not career advisors.</h2>
            </RevealSection>
          </div>
          <div className="md:col-span-5 md:col-start-7 flex items-end">
            <RevealSection delay={0.1}>
              <p className="body-md text-muted-foreground">
                The Enfactum leadership team has built and operated growth programmes across Asia Pacific for decades — inside enterprises, agencies, and venture ecosystems.
              </p>
              <Link to="/company/leadership" className="inline-flex items-center gap-2 text-sm text-primary/70 hover:text-primary font-medium transition-colors mt-6">
                Full leadership team <ArrowRight className="w-4 h-4" />
              </Link>
            </RevealSection>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {leaders.map((leader, i) => (
            <RevealSection key={i} delay={i * 0.08} blur>
              <div className="group">
                {leader.photo ? (
                  <div className="w-full aspect-[3/4] rounded-sm overflow-hidden mb-6 relative">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent group-hover:via-primary/30 transition-all duration-700" />
                  </div>
                ) : (
                  <div className="w-full aspect-[3/4] rounded-sm bg-gradient-to-b from-secondary/80 to-secondary/40 border border-border/30 mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent group-hover:via-primary/30 transition-all duration-700" />
                  </div>
                )}
                <h3 className="font-display text-base font-semibold text-foreground tracking-tight">{leader.name}</h3>
                <p className="text-[13px] text-primary/70 font-medium mt-0.5">{leader.role}</p>
                <p className="text-[10px] text-dim uppercase tracking-[0.15em] font-body mt-2">{leader.focus}</p>
                <p className="text-[13px] text-muted-foreground mt-4 leading-relaxed">{leader.bio}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>



    {/* ═══ SECTION 4 — REGIONAL NODES ═══ */}
    <section className="section-alt py-16 md:py-20">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-5">
            <RevealSection>
              <p className="eyebrow mb-6">Regional nodes</p>
              <h2 className="headline-lg">A growth network, not an office list.</h2>
            </RevealSection>
          </div>
          <div className="md:col-span-5 md:col-start-7 flex items-end">
            <RevealSection delay={0.1}>
              <p className="body-md text-muted-foreground">
                Each node has a distinct role — strategy from Singapore, scale through India,
                market presence in Malaysia and Indonesia, with the USA as a global bridge.
              </p>
              <Link to="/company/regional-nodes" className="inline-flex items-center gap-2 text-sm text-primary/70 hover:text-primary font-medium transition-colors mt-6">
                Explore regional nodes <ArrowRight className="w-4 h-4" />
              </Link>
            </RevealSection>
          </div>
        </div>

        <RegionalNodesMap />
      </div>
    </section>

    <ParallaxDivider variant="gradient" flip />
    {/* ═══ SECTION 5 — DOMAIN SPECIALISTS (VERTICALS) ═══ */}
    <section className="py-16 md:py-20">
      <div className="section-container">
        <div className="section-divider mb-12" />
        <SectionHeader
          eyebrow="Verticals"
          headline="Industry depth across key sectors."
          description="Beyond functional capability, Enfactum maintains sector-specific expertise through dedicated domain specialists."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domainSpecialists.map((ds, i) => (
            <RevealSection key={i} delay={i * 0.08} scale>
              <div className="relative h-full rounded-xl bg-white/[0.05] border border-white/10 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 group">
                {/* Number */}
                <span className="text-[10px] font-body text-dim">{String(i + 1).padStart(2, '0')}</span>
                {/* Vertical accent line */}
                <div className="w-6 h-px bg-primary/40 mt-4 mb-5 group-hover:w-10 transition-all duration-500" />
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                  {ds.domain}
                </h3>
                <p className="text-[13px] text-muted-foreground mt-3 leading-relaxed font-body">
                  {ds.focus}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    <ParallaxDivider variant="mist" />
    {/* ═══ SECTION 6 — CAPABILITY OWNERSHIP ═══ */}
    <section className="section-alt py-32 md:py-44">
      <div className="section-container">
        <SectionHeader
          eyebrow="Capability ownership"
          headline="Each capability led by a dedicated principal."
          description="Capability owners are accountable for methodology, quality, talent, and client outcomes within their domain."
        />
        <div className="mt-20 grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {capabilityOwnership.map((co, i) => (
            <RevealSection key={i} delay={i * 0.08} scale>
              <div className="border-t border-border/30 pt-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  <span className="text-[10px] text-dim uppercase tracking-[0.15em] font-body">{co.scope}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{co.capability}</h3>
                <p className="text-[13px] text-muted-foreground mt-3 leading-relaxed">{co.owner}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 7 — GROWTH ARCHITECTURE PRINCIPLES ═══ */}
    <section className="py-32 md:py-44">
      <div className="section-container">
        <div className="section-divider mb-20" />
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-5">
            <RevealSection>
              <p className="eyebrow mb-6">What we value</p>
              <h2 className="headline-lg">How we work. What we believe.</h2>
            </RevealSection>
          </div>
          <div className="md:col-span-5 md:col-start-7 flex items-end">
            <RevealSection delay={0.1}>
              <p className="body-md text-muted-foreground">
                These aren't aspirational values. They're operational commitments
                that shape how we build teams, design programmes, and deliver outcomes.
              </p>
              <Link to="/company/operating-model" className="inline-flex items-center gap-2 text-sm text-primary/70 hover:text-primary font-medium transition-colors mt-6">
                View Growth Architecture <ArrowRight className="w-4 h-4" />
              </Link>
            </RevealSection>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {growthPrinciples.map((p, i) => (
            <RevealSection key={i} delay={i * 0.06}>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{p.title}</h3>
                <p className="text-[13px] text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 8 — NAVIGATION LINKS ═══ */}
    <section className="section-alt py-20">
      <div className="section-container">
        <RevealSection>
          <p className="eyebrow mb-10">Explore further</p>
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
                <div className="grid md:grid-cols-12 gap-4 py-6 border-b border-border/20 group-hover:border-primary/15 transition-colors duration-700">
                  <div className="md:col-span-3">
                    <span className="font-display text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors duration-500">
                      {link.title}
                    </span>
                  </div>
                  <div className="md:col-span-7">
                    <span className="text-[13px] text-muted-foreground">{link.desc}</span>
                  </div>
                  <div className="md:col-span-2 flex items-center justify-end">
                    <ArrowRight className="w-4 h-4 text-dim group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-500" />
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
