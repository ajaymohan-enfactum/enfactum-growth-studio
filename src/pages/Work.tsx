import { useState, useMemo } from "react";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import CaseCard from "@/components/shared/CaseCard";
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
  const [activeDimension, setActiveDimension] = useState<FilterDimension>("outcome");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCases = useMemo(() => {
    if (activeFilter === "All") return sortedCases;

    return sortedCases.filter((c) => {
      switch (activeDimension) {
        case "outcome":
          return c.outcomes.includes(activeFilter);
        case "capability":
          return c.capabilities.includes(activeFilter);
        case "sector":
          return c.sectors.includes(activeFilter);
        case "challenge":
          return c.challengeTypes.includes(activeFilter);
        default:
          return true;
      }
    });
  }, [activeDimension, activeFilter]);

  const featuredCases = filteredCases.slice(0, 10);
  const additionalCases = filteredCases.slice(10);

  const handleDimensionSwitch = (dim: FilterDimension) => {
    setActiveDimension(dim);
    setActiveFilter("All");
  };

  return (
    <PageLayout>
      <HeroSection
        eyebrow="Work"
        headline="Selected work across the region."
        description="A look at the work, systems, and outcomes Enfactum has built across Southeast Asia."
      />

      {/* ─── Filter Bar ─── */}
      <section className="py-8 md:py-12 sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border/20">
        <div className="section-container">
          {/* Dimension switcher */}
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

          {/* Filter chips */}
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

      {/* ─── Featured Cases (full cards) ─── */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <RevealSection>
            <p className="eyebrow mb-2">
              {activeFilter !== "All" ? activeFilter : "All programmes"}
            </p>
            <p className="text-[13px] text-muted-foreground max-w-md">
              {filteredCases.length} programme{filteredCases.length !== 1 ? "s" : ""} with
              measurable commercial, operational, or ecosystem outcomes.
            </p>
          </RevealSection>

          <div className="mt-8 space-y-0">
            {featuredCases.map((cs, i) => (
              <CaseCard key={cs.id} cs={cs} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Additional Cases (compact rows) ─── */}
      {additionalCases.length > 0 && (
        <section className="section-alt py-24 md:py-32">
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
        description="We'd like to understand your context before we propose a solution."
        primaryLabel="Start a conversation"
      />
    </PageLayout>
  );
};

export default Work;
