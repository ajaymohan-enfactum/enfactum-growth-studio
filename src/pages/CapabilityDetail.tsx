import { Link, useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import { Button } from "@/components/ui/button";

const capabilityData: Record<string, {
  eyebrow: string; headline: string; description: string;
  challenge: string; whatWeBuild: string[]; howItWorks: string[];
  proof: { title: string; outcome: string }[];
  team: string;
}> = {
  "growth-infrastructure": {
    eyebrow: "Growth Infrastructure",
    headline: "Build the architecture for scalable growth across Southeast Asia.",
    description: "GTM strategy, partner and channel programs, and demand and revenue operations — designed for how this region actually works.",
    challenge: "Enterprise brands enter Southeast Asia with global strategies that ignore local complexity. Channels are fragmented, partners are underleveraged, and demand operations lack regional infrastructure.",
    whatWeBuild: [
      "Go-to-market strategy and market entry architecture",
      "Partner and channel program design and activation",
      "Revenue operations and demand infrastructure",
      "Multi-market expansion playbooks",
      "Sales enablement and pipeline acceleration",
    ],
    howItWorks: [
      "Market and ecosystem diagnostic",
      "GTM architecture design",
      "Partner identification and activation",
      "Operations build and embed",
      "Scale and transfer",
    ],
    proof: [
      { title: "Brands For Less SEA Launch", outcome: "3 markets in 18 months, 50+ retail partnerships" },
      { title: "Enterprise SaaS Expansion", outcome: "4x pipeline growth across ASEAN" },
    ],
    team: "Led by principals with deep experience in enterprise sales, channel strategy, and regional GTM architecture.",
  },
  "brand-demand": {
    eyebrow: "Brand & Demand",
    headline: "Connect brand to commercial outcomes. Make demand compound.",
    description: "Performance and social marketing, influencer and affiliate programs, creative and digital experiences — integrated into a single commercial engine.",
    challenge: "Too many brands separate brand activity from demand generation. The result: creative that doesn't convert, and performance that doesn't build equity. In Southeast Asia, this disconnect is magnified by market fragmentation.",
    whatWeBuild: [
      "Integrated brand-to-demand strategies",
      "Performance marketing and paid media",
      "Social and content ecosystems",
      "Influencer and affiliate program design",
      "Creative direction and digital experience design",
    ],
    howItWorks: [
      "Commercial and audience diagnostic",
      "Brand-demand architecture",
      "Channel and creative activation",
      "Optimisation and scaling",
      "Capability transfer",
    ],
    proof: [
      { title: "Consumer Electronics Campaign", outcome: "320% ROAS improvement across 3 markets" },
      { title: "DTC Brand Launch", outcome: "40K customers acquired in first quarter" },
    ],
    team: "Specialists in performance, creative, and social — operating as an integrated unit, not siloed disciplines.",
  },
  "ai-ecosystems": {
    eyebrow: "AI Ecosystems",
    headline: "Move innovation from pilot to platform.",
    description: "Venture strategy, startup scouting, partnership design, and scale-up architecture — built around enterprise innovation mandates.",
    challenge: "Most enterprise innovation programs generate activity, not outcomes. Startups are scouted but not activated. Pilots run but don't scale. The ecosystem exists in fragments.",
    whatWeBuild: [
      "Innovation ecosystem strategy and architecture",
      "Startup scouting and curation programmes",
      "Enterprise-startup partnership design",
      "Pilot and sandbox programme management",
      "Scale-up and commercialisation pathways",
    ],
    howItWorks: [
      "Innovation mandate definition",
      "Ecosystem mapping and scouting",
      "Partnership and pilot design",
      "Programme operation and curation",
      "Scale architecture and transfer",
    ],
    proof: [
      { title: "HP Garage 2.0", outcome: "200+ startups evaluated, 12 enterprise pilots, 4-market expansion" },
      { title: "Enterprise AI Programme", outcome: "6 production-ready AI implementations in 12 months" },
    ],
    team: "Innovation operators who understand both enterprise procurement and startup velocity.",
  },
  "live-experiences": {
    eyebrow: "Live Experiences",
    headline: "Create market moments with commercial impact.",
    description: "Product launches, partner summits, roadshows, and experiential activations — designed for measurable business outcomes, not just attendance.",
    challenge: "Most events are cost centres with unclear ROI. In Southeast Asia, live activations should drive partner engagement, pipeline generation, and brand momentum — but few are designed that way.",
    whatWeBuild: [
      "Product and market launch programmes",
      "Partner summits and channel activations",
      "Regional roadshows and field marketing",
      "Experiential brand activations",
      "Hybrid and digital event platforms",
    ],
    howItWorks: [
      "Commercial objectives and audience design",
      "Experience architecture and creative",
      "Production and logistics management",
      "Activation and engagement",
      "Measurement and follow-through",
    ],
    proof: [
      { title: "The Economist BOT", outcome: "2,000+ senior leaders, 40% subscription pipeline lift" },
      { title: "Regional Partner Summit", outcome: "120 partners activated, $2M pipeline generated" },
    ],
    team: "Event strategists who think in commercial outcomes, supported by world-class production capability.",
  },
};

const CapabilityDetail = () => {
  const { slug } = useParams();
  const data = capabilityData[slug || ""] || capabilityData["growth-infrastructure"];

  return (
    <PageLayout>
      <HeroSection eyebrow={data.eyebrow} headline={data.headline} description={data.description}>
        <Link to="/contact">
          <Button variant="hero" size="xl">Discuss this capability</Button>
        </Link>
      </HeroSection>

      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16">
            <RevealSection>
              <SectionHeader eyebrow="The challenge" headline="Why this matters." />
              <p className="body-md mt-6">{data.challenge}</p>
            </RevealSection>
            <RevealSection delay={0.1}>
              <SectionHeader eyebrow="What we build" headline="Our approach." />
              <ul className="mt-6 space-y-3">
                {data.whatWeBuild.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="body-md">{item}</span>
                  </li>
                ))}
              </ul>
            </RevealSection>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="section-container">
          <SectionHeader eyebrow="How it works" headline="From diagnostic to scale." centered />
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 mt-14">
            {data.howItWorks.map((step, i) => (
              <RevealSection key={i} delay={i * 0.08} className="flex-1 text-center">
                <div className="w-10 h-10 rounded-full border border-primary/40 bg-background flex items-center justify-center mx-auto mb-3">
                  <span className="text-xs font-display font-bold text-primary">{i + 1}</span>
                </div>
                <p className="text-sm font-medium text-foreground">{step}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-container">
          <SectionHeader eyebrow="Proof" headline="Results that matter." />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {data.proof.map((p, i) => (
              <RevealSection key={i} delay={i * 0.08}>
                <div className="card-premium">
                  <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="text-primary font-medium mt-2">{p.outcome}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <RevealSection>
            <div className="card-premium">
              <p className="eyebrow mb-2">Capability ownership</p>
              <p className="body-md">{data.team}</p>
            </div>
          </RevealSection>
        </div>
      </section>

      <CTABand headline={`Ready to explore ${data.eyebrow}?`} primaryLabel="Start a conversation" />
    </PageLayout>
  );
};

export default CapabilityDetail;
