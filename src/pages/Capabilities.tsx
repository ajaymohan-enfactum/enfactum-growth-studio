import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    title: "Growth Infrastructure",
    problem: "Disconnected GTM strategies that fail to scale across Southeast Asia's diverse markets.",
    does: "We design and operate go-to-market architecture — partner programs, channel strategies, and demand operations that build lasting market position.",
    outcomes: ["Scalable partner ecosystems", "Revenue operations frameworks", "Multi-market GTM playbooks"],
    for: "Enterprise brands entering or expanding across Southeast Asia.",
    href: "/capabilities/growth-infrastructure",
  },
  {
    title: "Brand & Demand",
    problem: "Brand activity that doesn't connect to commercial outcomes. Demand that doesn't compound.",
    does: "Performance marketing, social, influencer, affiliate, and creative — integrated into a single commercial engine.",
    outcomes: ["Integrated demand generation", "Creative-to-conversion pipelines", "Measurable brand impact"],
    for: "Brands seeking commercially accountable growth across digital channels.",
    href: "/capabilities/brand-demand",
  },
  {
    title: "AI Ecosystems",
    problem: "Innovation stuck in pilot mode. Ventures without ecosystem context or scale architecture.",
    does: "Venture strategy, startup scouting, partnership design, and pilot-to-scale programs built around enterprise innovation mandates.",
    outcomes: ["Enterprise-startup partnerships", "Innovation program architecture", "Pilot-to-platform pathways"],
    for: "Enterprises building AI and innovation ecosystems in Southeast Asia.",
    href: "/capabilities/ai-ecosystems",
  },
  {
    title: "Live Experiences",
    problem: "Events without commercial outcomes. Launches without lasting momentum.",
    does: "Product launches, partner summits, roadshows, and experiential activations designed for measurable market impact.",
    outcomes: ["Pipeline-driving events", "Partner activation summits", "Market-entry launches"],
    for: "Brands creating market moments with commercial intent.",
    href: "/capabilities/live-experiences",
  },
];

const engagementModels = [
  { title: "Consulting", desc: "Strategic advisory and growth diagnostics for specific challenges." },
  { title: "Projects", desc: "Scoped programmes with defined deliverables and timelines." },
  { title: "Embedded Teams", desc: "Enfactum operators embedded within your organisation for sustained impact." },
  { title: "Build-Operate-Transfer", desc: "We build the capability, operate it, and transfer ownership to your team." },
];

const Capabilities = () => (
  <PageLayout>
    <HeroSection
      eyebrow="Capabilities"
      headline="An integrated growth operating system for Southeast Asia."
      description="Four capabilities that connect. One operating model that delivers. Strategy, ecosystems, and execution — together."
    />

    {/* System Map */}
    <section className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="Operating system"
          headline="Four capabilities. One integrated model."
          description="Each capability reinforces the others. Growth Infrastructure feeds demand. Brand & Demand fuels market presence. AI Ecosystems drive innovation. Live Experiences create momentum."
          centered
        />
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {capabilities.map((cap, i) => (
            <RevealSection key={i} delay={i * 0.08}>
              <Link to={cap.href} className="block group h-full">
                <div className="card-premium h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="eyebrow">{cap.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4"><strong className="text-foreground/70">Problem:</strong> {cap.problem}</p>
                  <p className="body-md flex-1">{cap.does}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cap.outcomes.map((o) => (
                      <span key={o} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary">{o}</span>
                    ))}
                  </div>
                  <p className="text-xs text-dim mt-4">For: {cap.for}</p>
                  <div className="flex items-center gap-2 mt-4 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* Engagement Models */}
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="section-container">
        <SectionHeader
          eyebrow="Engagement models"
          headline="Flexible structures. Serious commitment."
          centered
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {engagementModels.map((model, i) => (
            <RevealSection key={i} delay={i * 0.08}>
              <div className="card-premium h-full text-center">
                <h3 className="font-display font-semibold text-foreground">{model.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{model.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    <CTABand headline="Ready to build growth infrastructure?" primaryLabel="Start a conversation" />
  </PageLayout>
);

export default Capabilities;
