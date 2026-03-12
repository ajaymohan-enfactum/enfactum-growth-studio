import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";

const flagshipCases = [
  {
    title: "HP Garage 2.0",
    tags: ["AI Ecosystems", "Innovation"],
    challenge: "Reignite HP's innovation ecosystem across Asia Pacific.",
    role: "Program design, startup scouting, partnership architecture.",
    outcome: "200+ startups evaluated, 12 enterprise pilots, 4-market expansion.",
    sector: "Enterprise Technology",
  },
  {
    title: "The Economist BOT",
    tags: ["Live Experiences", "Brand & Demand"],
    challenge: "Create a landmark thought-leadership experience for regional audiences.",
    role: "Concept, production, audience strategy, demand generation.",
    outcome: "2,000+ senior leaders, 40% subscription pipeline lift.",
    sector: "Institutions & Ecosystems",
  },
  {
    title: "Brands For Less SEA Launch",
    tags: ["Growth Infrastructure", "Market Entry"],
    challenge: "Launch a Middle East retail brand into SEA with zero presence.",
    role: "Market entry strategy, partner ecosystem build, launch operations.",
    outcome: "3 markets in 18 months, 50+ retail partnerships.",
    sector: "Consumer & Brand Growth",
  },
];

const additionalCases = [
  { title: "Enterprise SaaS ASEAN Expansion", tags: ["Growth Infrastructure"], sector: "Enterprise Technology", outcome: "4x pipeline growth" },
  { title: "Consumer Electronics Campaign", tags: ["Brand & Demand"], sector: "Consumer & Brand Growth", outcome: "320% ROAS improvement" },
  { title: "Regional Partner Summit Series", tags: ["Live Experiences"], sector: "Enterprise Technology", outcome: "$2M pipeline generated" },
  { title: "DTC Brand Launch SEA", tags: ["Brand & Demand"], sector: "Consumer & Brand Growth", outcome: "40K customers Q1" },
  { title: "Enterprise AI Programme", tags: ["AI Ecosystems"], sector: "New Economy & Innovation", outcome: "6 production implementations" },
  { title: "GovTech Innovation Lab", tags: ["AI Ecosystems"], sector: "Institutions & Ecosystems", outcome: "3 national pilots" },
];

const impactCategories = [
  { label: "Pipeline", desc: "Revenue pipeline generated and accelerated." },
  { label: "Efficiency", desc: "Operational efficiency and cost optimisation." },
  { label: "Partner Activation", desc: "Ecosystem partners activated and engaged." },
  { label: "Market Entry", desc: "New markets entered and established." },
  { label: "Innovation Scale", desc: "Pilots moved to production and scale." },
  { label: "Launch Momentum", desc: "Market presence and brand impact created." },
];

const filters = ["All", "Growth Infrastructure", "Brand & Demand", "AI Ecosystems", "Live Experiences"];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCases = activeFilter === "All"
    ? additionalCases
    : additionalCases.filter((c) => c.tags.includes(activeFilter));

  return (
    <PageLayout>
      <HeroSection
        eyebrow="Work"
        headline="Proof in practice."
        description="Enterprise programmes designed for scale, built for Southeast Asia. Here's what we've delivered."
      />

      {/* Flagship cases */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <SectionHeader eyebrow="Flagship programmes" headline="Featured work." />
          <div className="grid lg:grid-cols-3 gap-6 mt-14">
            {flagshipCases.map((work, i) => (
              <RevealSection key={i} delay={i * 0.1}>
                <div className="card-premium h-full flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{work.title}</h3>
                  <p className="text-sm text-muted-foreground mt-3">{work.challenge}</p>
                  <p className="text-sm text-muted-foreground mt-2">{work.role}</p>
                  <div className="mt-auto pt-5 border-t border-border mt-5">
                    <p className="text-sm font-medium text-primary">{work.outcome}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="section-container">
          <SectionHeader eyebrow="Proof grid" headline="More work across capabilities." />
          <div className="flex flex-wrap gap-3 mt-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {filteredCases.map((c, i) => (
              <RevealSection key={c.title} delay={i * 0.06}>
                <div className="card-premium h-full">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {c.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{c.title}</h3>
                  <p className="text-xs text-dim mt-1">{c.sector}</p>
                  <p className="text-sm text-primary font-medium mt-3">{c.outcome}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Framework */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <SectionHeader eyebrow="Impact categories" headline="How we measure outcomes." centered />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {impactCategories.map((cat, i) => (
              <RevealSection key={i} delay={i * 0.06}>
                <div className="card-premium text-center">
                  <h3 className="font-display font-semibold text-primary">{cat.label}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{cat.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <CTABand headline="See how we can help." primaryLabel="Start a conversation" />
    </PageLayout>
  );
};

export default Work;
