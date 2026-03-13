import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    num: "01",
    title: "Growth Infrastructure",
    problem: "Your GTM strategy doesn't survive contact with Southeast Asia's fragmented market reality.",
    what: "We design and operate go-to-market architecture — partner programs, channel strategies, and demand operations — built for multi-market scale.",
    for: "Enterprise brands entering or expanding across Southeast Asia who need GTM infrastructure, not just a market-entry plan.",
    outcomes: ["Scalable partner ecosystems", "Revenue operations", "Multi-market playbooks"],
    href: "/capabilities/growth-infrastructure",
  },
  {
    num: "02",
    title: "Brand & Demand",
    problem: "Your brand and performance teams operate in silos. Creative doesn't convert. Demand doesn't compound.",
    what: "We integrate performance marketing, social, influencer, affiliate, and creative into a single commercial engine with measurable ROI.",
    for: "Brands that need commercially accountable demand generation across Southeast Asia's digital channels — not another agency retainer.",
    outcomes: ["Integrated demand generation", "Creative-to-conversion pipelines", "Measurable brand impact"],
    href: "/capabilities/brand-demand",
  },
  {
    num: "03",
    title: "AI Ecosystems",
    problem: "Your innovation program generates pilots and press releases, not production implementations.",
    what: "We build innovation ecosystem architecture — venture strategy, startup scouting, partnership design, and pilot-to-scale programmes.",
    for: "Enterprises with innovation mandates that need an operator to move from scouting to scaling, not another accelerator programme.",
    outcomes: ["Enterprise-startup partnerships", "Pilot-to-platform pathways", "Innovation programme architecture"],
    href: "/capabilities/ai-ecosystems",
  },
  {
    num: "04",
    title: "Live Experiences",
    problem: "Your events are cost centres. Launches create buzz but no lasting commercial momentum.",
    what: "We design and produce product launches, partner summits, roadshows, and experiential activations — all tied to measurable business outcomes.",
    for: "Brands that need market moments designed for pipeline, partner activation, and commercial impact — not just attendance.",
    outcomes: ["Pipeline-driving events", "Partner activation summits", "Market-entry launches"],
    href: "/capabilities/live-experiences",
  },
];

const engagementModels = [
  { title: "Consulting", duration: "4–12 weeks", desc: "Strategic advisory and growth diagnostics for a specific challenge. Deliverable-led, time-bound." },
  { title: "Projects", duration: "2–6 months", desc: "Scoped programmes with defined outcomes — market entry, campaign launches, ecosystem builds." },
  { title: "Embedded Teams", duration: "6–18 months", desc: "Enfactum operators working inside your organisation for sustained execution and capability building." },
  { title: "Build-Operate-Transfer", duration: "12–24 months", desc: "We build and run the capability, then transfer full ownership and knowledge to your team." },
];

const systemConnections = [
  { from: "Growth Infrastructure", to: "Brand & Demand", link: "GTM architecture feeds integrated demand programmes" },
  { from: "Brand & Demand", to: "Live Experiences", link: "Demand strategy shapes commercially designed activations" },
  { from: "AI Ecosystems", to: "Growth Infrastructure", link: "Innovation partnerships feed new growth channels" },
  { from: "Live Experiences", to: "AI Ecosystems", link: "Events surface ecosystem opportunities and startup deal flow" },
];

const Capabilities = () => (
  <PageLayout>
    <HeroSection
      eyebrow="Capabilities"
      headline="An integrated growth operating system for Southeast Asia."
      description="Each capability solves a specific growth challenge. Together, they form an integrated operating model — strategy connected to ecosystems connected to execution."
    />

    {/* ═══ CAPABILITY INDEX ═══ */}
    <section className="py-32 md:py-44">
      <div className="section-container">
        <RevealSection>
          <p className="eyebrow mb-2">Capability overview</p>
          <p className="text-[13px] text-muted-foreground max-w-lg">
            Each capability page explains the business challenge, what we build, how it works, selected outcomes, and who it's for.
          </p>
        </RevealSection>

        <div className="mt-16 space-y-0">
          {capabilities.map((cap, i) => (
            <RevealSection key={i} delay={i * 0.05}>
              <Link to={cap.href} className="group block">
                <div className="border-t border-border/30 py-14 md:py-16 group-hover:border-primary/15 transition-colors duration-700">
                  <div className="grid md:grid-cols-12 gap-8">
                    {/* Left — number + title */}
                    <div className="md:col-span-4">
                      <span className="text-[10px] font-body text-dim block mb-3">{cap.num}</span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                        {cap.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {cap.outcomes.map((o) => (
                          <span key={o} className="text-[10px] uppercase tracking-[0.15em] text-primary/50 font-body">{o}</span>
                        ))}
                      </div>
                    </div>

                    {/* Middle — challenge + what we build */}
                    <div className="md:col-span-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 font-body mb-3">The challenge</h4>
                          <p className="text-[15px] text-secondary-foreground leading-[1.7]">{cap.problem}</p>
                        </div>
                        <div>
                          <h4 className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 font-body mb-3">What we build</h4>
                          <p className="text-[15px] text-secondary-foreground leading-[1.7]">{cap.what}</p>
                        </div>
                        <div>
                          <h4 className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 font-body mb-3">Who it's for</h4>
                          <p className="text-[13px] text-muted-foreground leading-relaxed">{cap.for}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right — arrow */}
                    <div className="md:col-span-2 flex items-start justify-end">
                      <ArrowRight className="w-5 h-5 text-dim group-hover:text-primary group-hover:translate-x-1 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ HOW CAPABILITIES CONNECT ═══ */}
    <section className="section-alt py-32 md:py-44">
      <div className="section-container">
        <SectionHeader
          eyebrow="How the capabilities connect"
          headline="Each capability reinforces the others."
          description="This isn't four separate offerings. It's one operating system — each capability feeds outcomes to the next."
          centered
        />
        <div className="mt-20 space-y-0">
          {systemConnections.map((conn, i) => (
            <RevealSection key={i} delay={i * 0.06}>
              <div className="grid md:grid-cols-12 gap-4 py-6 border-b border-border/20">
                <div className="md:col-span-3">
                  <span className="font-display text-[15px] font-semibold text-foreground">{conn.from}</span>
                </div>
                <div className="md:col-span-1 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-primary/40" />
                </div>
                <div className="md:col-span-3">
                  <span className="font-display text-[15px] font-semibold text-foreground">{conn.to}</span>
                </div>
                <div className="md:col-span-5">
                  <span className="text-[13px] text-muted-foreground">{conn.link}</span>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ ENGAGEMENT MODELS ═══ */}
    <section className="py-32 md:py-44">
      <div className="section-container">
        <div className="section-divider mb-20" />
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-5">
            <RevealSection>
              <p className="eyebrow mb-6">How we engage</p>
              <h2 className="headline-lg">Four ways to work with us.</h2>
            </RevealSection>
          </div>
          <div className="md:col-span-5 md:col-start-7 flex items-end">
            <RevealSection delay={0.1}>
              <p className="body-md text-muted-foreground">
                We structure engagements around your context — not a fixed service menu.
                Every model is designed to deliver measurable outcomes and build lasting capability.
              </p>
            </RevealSection>
          </div>
        </div>

        <div className="space-y-0">
          {engagementModels.map((model, i) => (
            <RevealSection key={i} delay={i * 0.05}>
              <div className="grid md:grid-cols-12 gap-4 py-8 border-b border-border/20 hover:border-primary/10 transition-colors duration-700">
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

    <CTABand
      headline="Have a specific growth challenge?"
      description="Tell us the problem. We'll tell you how we'd approach it."
      primaryLabel="Start a conversation"
    />
  </PageLayout>
);

export default Capabilities;
