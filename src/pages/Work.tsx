import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import CaseCard from "@/components/shared/CaseCard";
import SEOHead from "@/components/shared/SEOHead";
import {
  allCaseStudies,
  outcomeFilters,
  capabilityFilters,
  sectorFilters,
  challengeFilters,
} from "@/data/caseStudies";

/* ─── Prioritised case order ─── */
const priorityOrder = [
  "hp-garage",
  "economist-bot",
  "hp-lf-launch",
  "economist-ht",
  "hp-whatsapp",
  "economist-affiliate",
  "lexmark-mpc",
  "myrepublic",
  "oracle-dha",
  "loose-moose",
  "tiktok-pharma",
  "jshealth",
  "bfl-sea",
  "seagate",
  "hp-smb",
  "vip-industries",
  "sephora-my",
  "delsey",
  "enterprise-ai",
  "lazada-1111",
  "redington",
];

const sortedCases = [
  ...priorityOrder
    .map((id) => allCaseStudies.find((c) => c.id === id))
    .filter(Boolean),
  ...allCaseStudies.filter((c) => !priorityOrder.includes(c.id)),
] as typeof allCaseStudies;

/* ═══════════════════════════════════════════════
   FILTER BAR
   ═══════════════════════════════════════════════ */
type FilterDimension = "outcome" | "capability" | "sector" | "challenge";

const dimensionLabels: Record<FilterDimension, string> = {
  outcome: "By outcome",
  capability: "By capability",
  sector: "By sector",
  challenge: "By challenge",
};

const dimensionFilters: Record<FilterDimension, readonly string[]> = {
  outcome: outcomeFilters,
  capability: capabilityFilters,
  sector: sectorFilters,
  challenge: challengeFilters,
};

const FilterChip = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-sm text-[11px] font-medium font-body uppercase tracking-wider transition-all duration-500 ${
      active
        ? "bg-primary/15 text-primary border border-primary/30"
        : "text-muted-foreground hover:text-foreground border border-border/40 hover:border-border/60"
    }`}
  >
    {label}
  </button>
);

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
const Work = () => {
  const location = useLocation();
  const [activeDimension, setActiveDimension] = useState<FilterDimension>("outcome");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!hash) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [location.hash]);

  const filteredCases = useMemo(() => {
    if (activeFilter === "All") return sortedCases;
    return sortedCases.filter((c) => {
      switch (activeDimension) {
        case "outcome": return c.outcomes.includes(activeFilter);
        case "capability": return c.capabilities.includes(activeFilter);
        case "sector": return c.sectors.includes(activeFilter);
        case "challenge": return c.challengeTypes.includes(activeFilter);
        default: return true;
      }
    });
  }, [activeDimension, activeFilter]);

  const flagshipCases = filteredCases.slice(0, 2);
  const featuredCases = filteredCases.slice(2, 10);
  const additionalCases = filteredCases.slice(10);

  const handleDimensionSwitch = (dim: FilterDimension) => {
    setActiveDimension(dim);
    setActiveFilter("All");
  };

  return (
    <PageLayout>
      <SEOHead
        title="Selected Work"
        description="Case studies and outcomes from Enfactum's work with enterprise brands across Southeast Asia."
        path="/work"
      />
      <HeroSection
        eyebrow="Work"
        headline={<>Selected work <span className="text-primary">across the region.</span></>}
        description="A look at the work, systems, and outcomes Enfactum has built across Southeast Asia."
        variant="editorial"
      />

      {/* ─── Filter Bar ─── */}
      <section className="py-8 md:py-12 sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border/20">
        <div className="section-container">
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
            {(Object.keys(dimensionLabels) as FilterDimension[]).map((dim) => (
              <button
                key={dim}
                onClick={() => handleDimensionSwitch(dim)}
                className={`text-[11px] uppercase tracking-[0.2em] font-body font-medium transition-colors ${
                  activeDimension === dim
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {dimensionLabels[dim]}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {dimensionFilters[activeDimension].map((f) => (
              <FilterChip
                key={f}
                label={f}
                active={activeFilter === f}
                onClick={() => setActiveFilter(f)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Flagship Cases — editorial atmosphere ─── */}
      {flagshipCases.length > 0 && (
        <section className="py-20 md:py-28 relative overflow-hidden">
          {/* Sharp editorial background */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'linear-gradient(180deg, hsl(220 20% 6%), hsl(215 25% 8%) 50%, hsl(220 16% 7%))',
          }} />
          {/* Left accent line */}
          <div className="absolute top-0 bottom-0 left-[6%] w-px bg-gradient-to-b from-transparent via-primary/[0.06] to-transparent hidden md:block" />
          {/* Static atmospheric glow */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 50% 50% at 70% 40%, hsl(210 100% 50% / 0.04), transparent 60%)',
          }} />

          <div className="section-container relative z-10">
            <RevealSection blur>
              <div className="mb-14 flex items-end justify-between">
                <div>
                  <p className="eyebrow mb-3">
                    {activeFilter !== "All" ? activeFilter : "Featured programmes"}
                  </p>
                  <p className="text-[13px] text-muted-foreground max-w-md">
                    {filteredCases.length} programme{filteredCases.length !== 1 ? "s" : ""} with
                    measurable commercial, operational, or ecosystem outcomes.
                  </p>
                </div>
                <span className="text-[80px] md:text-[100px] font-display font-bold text-foreground/[0.02] leading-none select-none pointer-events-none hidden md:block">
                  W
                </span>
              </div>
            </RevealSection>

            <div className="space-y-0">
              {flagshipCases.map((cs, i) => (
                <CaseCard key={cs.id} cs={cs} index={i} variant="flagship" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Editorial bridge ─── */}
      {featuredCases.length > 0 && (
        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/[0.08] to-transparent" />
          <div className="section-container py-10 md:py-14">
            <RevealSection blur>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-border/30" />
                <p className="text-[11px] text-foreground/20 uppercase tracking-[0.2em] font-body">
                  More programmes across capabilities and sectors
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      )}

      {/* ─── Featured Cases ─── */}
      {featuredCases.length > 0 && (
        <section className="py-8 md:py-12 relative">
          {/* Subtle vertical guide */}
          <div className="absolute top-0 bottom-0 left-[50%] w-px bg-gradient-to-b from-transparent via-border/[0.03] to-transparent hidden md:block" />
          <div className="section-container relative z-10">
            <div className="space-y-0">
              {featuredCases.map((cs, i) => (
                <CaseCard key={cs.id} cs={cs} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Additional Cases ─── */}
      {additionalCases.length > 0 && (
        <section className="py-16 md:py-20 bg-[hsl(var(--section-alt))] relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />
          <div className="section-container">
            <SectionHeader
              eyebrow="Additional work"
              headline="More work across capabilities and sectors."
            />
            <div className="mt-12 space-y-0">
              {additionalCases.map((cs, i) => (
                <CaseCard key={cs.id} cs={cs} index={i} variant="compact" />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        headline="Have a growth challenge to discuss?"
        description="We'd like to understand your context before we propose an approach."
        primaryLabel="Start a conversation"
      />
    </PageLayout>
  );
};

export default Work;
