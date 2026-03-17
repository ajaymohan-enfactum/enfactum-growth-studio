import { Link } from "react-router-dom";
import { useRef } from "react";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import SEOHead from "@/components/shared/SEOHead";
import { ArrowRight, Layers, Megaphone, Brain, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const capabilities = [
  {
    num: "01",
    title: "Growth Infrastructure",
    problem: "GTM strategy that doesn't survive contact with Southeast Asia's fragmented market reality.",
    what: "Go-to-market architecture — partner programs, channel strategies, and demand operations — built for multi-market scale.",
    for: "Enterprise brands entering or expanding across Southeast Asia who need GTM infrastructure, not just a market-entry plan.",
    outcomes: ["Scalable partner ecosystems", "Revenue operations", "Multi-market playbooks"],
    href: "/capabilities/growth-infrastructure",
    icon: Layers,
  },
  {
    num: "02",
    title: "Brand & Demand",
    problem: "Brand and performance teams operating in silos — creative doesn't convert, demand doesn't compound.",
    what: "Integrated performance marketing, social, influencer, affiliate, and creative as a single commercial engine with measurable ROI.",
    for: "Brands that need commercially accountable demand generation across Southeast Asia's digital channels — not another agency retainer.",
    outcomes: ["Integrated demand generation", "Creative-to-conversion pipelines", "Measurable brand impact"],
    href: "/capabilities/brand-demand",
    icon: Megaphone,
  },
  {
    num: "03",
    title: "AI Ecosystems",
    problem: "Innovation programs that generate pilots and press releases, not production implementations.",
    what: "Innovation ecosystem architecture — venture strategy, startup scouting, partnership design, and pilot-to-scale programmes.",
    for: "Enterprises with innovation mandates that need a Growth Architect to move from scouting to scaling, not another accelerator programme.",
    outcomes: ["Enterprise-startup partnerships", "Pilot-to-platform pathways", "Innovation programme architecture"],
    href: "/capabilities/ai-ecosystems",
    icon: Brain,
  },
  {
    num: "04",
    title: "Live Experiences",
    problem: "Events as cost centres — launches create buzz but no lasting commercial momentum.",
    what: "Product launches, partner summits, roadshows, and experiential activations — all tied to measurable business outcomes.",
    for: "Brands that need market moments designed for pipeline, partner activation, and commercial impact — not just attendance.",
    outcomes: ["Pipeline-driving events", "Partner activation summits", "Market-entry launches"],
    href: "/capabilities/live-experiences",
    icon: Sparkles,
  },
];

const engagementModels = [
  { title: "Consulting", duration: "4–12 weeks", desc: "Strategic advisory and growth diagnostics for a specific challenge. Deliverable-led, time-bound." },
  { title: "Projects", duration: "2–6 months", desc: "Scoped programmes with defined outcomes — market entry, campaign launches, ecosystem builds." },
  { title: "Embedded Teams", duration: "6–18 months", desc: "Enfactum Growth Architects working inside your organisation for sustained execution and capability building." },
  { title: "Build-Operate-Transfer", duration: "12–24 months", desc: "We build and run the capability, then transfer full ownership and knowledge to your team." },
];

/* ═══════════════════════════════════════════════
   ARCHITECTURE SYSTEM — Connected capability display
   ═══════════════════════════════════════════════ */
const ArchitectureSystem = () => (
  <section className="relative py-28 md:py-36 overflow-hidden" style={{
    background: 'linear-gradient(180deg, hsl(220 18% 8%), hsl(222 20% 10%), hsl(220 18% 8%))',
  }}>
    {/* Structural lines */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 bottom-0 left-[25%] w-px bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent hidden md:block" />
      <div className="absolute top-0 bottom-0 left-[50%] w-px bg-gradient-to-b from-transparent via-primary/[0.06] to-transparent hidden md:block" />
      <div className="absolute top-0 bottom-0 left-[75%] w-px bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent hidden md:block" />
    </div>

    <div className="section-container relative z-10">
      <RevealSection blur>
        <div className="text-center mb-16 md:mb-20">
          <p className="eyebrow mb-5">The architecture</p>
          <h2 className="headline-xl">Four capabilities<span className="text-primary">.</span><br className="hidden md:block" />One growth architecture<span className="text-primary">.</span></h2>
          <p className="text-sm max-w-md mx-auto leading-relaxed text-muted-foreground mt-5">
            This isn't four separate offerings. It's one integrated system — each capability feeds outcomes to the next.
          </p>
        </div>
      </RevealSection>

      {/* Connected cards with central hub */}
      <div className="relative">
        {/* Center hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-primary/20 bg-primary/[0.04] z-10 hidden md:flex items-center justify-center">
          <div className="text-center">
            <div className="w-3 h-3 rounded-full bg-primary/40 mx-auto animate-pulse" />
            <span className="text-[8px] uppercase tracking-[0.2em] text-primary/50 mt-1 block">System</span>
          </div>
        </div>

        {/* Connection lines */}
        <div className="absolute inset-0 hidden md:block pointer-events-none z-[5]">
          <div className="absolute top-[calc(50%-1px)] left-[20%] w-[30%] h-px" style={{ background: 'linear-gradient(90deg, hsl(210 100% 50% / 0.06), hsl(210 100% 50% / 0.2))' }} />
          <div className="absolute top-[calc(50%-1px)] left-[50%] w-[30%] h-px" style={{ background: 'linear-gradient(90deg, hsl(210 100% 50% / 0.2), hsl(210 100% 50% / 0.06))' }} />
          <div className="absolute left-[calc(50%-1px)] top-[15%] w-px h-[35%]" style={{ background: 'linear-gradient(180deg, hsl(210 100% 50% / 0.06), hsl(210 100% 50% / 0.2))' }} />
          <div className="absolute left-[calc(50%-1px)] top-[50%] w-px h-[35%]" style={{ background: 'linear-gradient(180deg, hsl(210 100% 50% / 0.2), hsl(210 100% 50% / 0.06))' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {capabilities.map((cap, i) => (
            <RevealSection key={i} delay={i * 0.1} scale>
              <Link to={cap.href} className="group block h-full">
                <div className="relative h-full rounded-xl border border-border/30 bg-card/30 backdrop-blur-sm p-8 md:p-10 flex flex-col justify-between min-h-[320px] overflow-hidden transition-all duration-700 hover:border-primary/25 hover:bg-card/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/[0.02] group-hover:to-primary/[0.05] transition-all duration-700 rounded-xl" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                        <cap.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground uppercase">{cap.num}</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-500 mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-[14px] text-muted-foreground leading-[1.7] max-w-sm">
                      {cap.what}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6">
                    <div className="flex flex-wrap gap-2">
                      {cap.outcomes.map((o) => (
                        <span key={o} className="text-[10px] uppercase tracking-[0.12em] text-primary/50 bg-primary/5 px-2 py-1 rounded">
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>
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
   CONNECTION LOGIC — How capabilities feed each other
   ═══════════════════════════════════════════════ */
const systemConnections = [
  { from: "Growth Infrastructure", to: "Brand & Demand", link: "GTM architecture feeds integrated demand programmes" },
  { from: "Brand & Demand", to: "Live Experiences", link: "Demand strategy shapes commercially designed activations" },
  { from: "AI Ecosystems", to: "Growth Infrastructure", link: "Innovation partnerships feed new growth channels" },
  { from: "Live Experiences", to: "AI Ecosystems", link: "Events surface ecosystem opportunities and startup deal flow" },
];

const ConnectionsSection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />

    <div className="section-container relative z-10">
      <RevealSection blur>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5">How the capabilities connect</p>
          <h2 className="headline-lg">Each capability reinforces the others<span className="text-primary">.</span></h2>
        </div>
      </RevealSection>

      <div className="max-w-2xl mx-auto space-y-0">
        {systemConnections.map((conn, i) => (
          <RevealSection key={i} delay={i * 0.08}>
            <div className="py-6 border-b border-border/15">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-primary">{conn.from}</span>
                <ArrowRight className="w-3 h-3 text-primary/40" />
                <span className="text-xs font-semibold text-primary">{conn.to}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{conn.link}</p>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

const Capabilities = () => (
  <PageLayout>
    <SEOHead
      title="Capabilities — Growth Infrastructure, Brand & Demand, AI Ecosystems, Live Experiences"
      description="Enfactum's four integrated capabilities for enterprise brands in Southeast Asia: Growth Infrastructure, Brand & Demand, AI Ecosystems, and Live Experiences."
      path="/capabilities"
    />
    <HeroSection
      eyebrow="Capabilities"
      headline={<>An integrated growth operating system for <span className="text-primary">Southeast Asia.</span></>}
      description="Each capability solves a specific growth challenge. Together, they form an integrated growth architecture — strategy connected to ecosystems connected to execution."
      variant="systemic"
    />

    <ArchitectureSystem />
    <ConnectionsSection />

    {/* ═══ ENGAGEMENT MODELS ═══ */}
    <section className="py-24 md:py-32" style={{
      background: 'linear-gradient(180deg, hsl(220 18% 8%), hsl(222 20% 9%), hsl(220 18% 8%))',
    }}>
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-5">
            <RevealSection blur>
              <p className="eyebrow mb-6">How we engage</p>
              <h2 className="headline-lg">Four ways to work with us.</h2>
            </RevealSection>
          </div>
          <div className="md:col-span-5 md:col-start-7 flex items-end">
            <RevealSection delay={0.1} blur>
              <p className="body-md text-muted-foreground">
                We structure engagements around your context — not a fixed service menu.
              </p>
            </RevealSection>
          </div>
        </div>

        <div className="space-y-0">
          {engagementModels.map((model, i) => (
            <RevealSection key={i} delay={i * 0.05}>
              <div className="grid md:grid-cols-12 gap-4 py-8 border-b border-border/15 hover:border-primary/10 transition-colors duration-700">
                <div className="md:col-span-3">
                  <h3 className="font-display text-[15px] font-semibold text-foreground">{model.title}</h3>
                </div>
                <div className="md:col-span-2">
                  <span className="text-[12px] text-primary/60 font-medium">{model.duration}</span>
                </div>
                <div className="md:col-span-7">
                  <span className="text-[13px] text-muted-foreground">{model.desc}</span>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* Cross-links */}
    <section className="py-20">
      <div className="section-container">
        <RevealSection blur>
          <p className="eyebrow mb-12">Explore further</p>
        </RevealSection>
        <div className="space-y-0">
          {[
            { title: "Selected work", desc: "Case studies with measurable outcomes across Southeast Asia.", href: "/work" },
            { title: "Brands we've worked with", desc: "40+ enterprise brands across four sector clusters.", href: "/brands" },
            { title: "Partnership models", desc: "How Enfactum designs and operates partnership-led growth.", href: "/partnerships" },
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
      headline="Have a specific growth challenge?"
      description="Tell us the problem. We'll tell you how we'd approach it."
      primaryLabel="Start a conversation"
    />
  </PageLayout>
);

export default Capabilities;
