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
} from "@/data/caseStudies";

/* ─── Prioritised case order for the proof engine ─── */
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
type FilterDimension = "outcome" | "capability";

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
  const [activeOutcome, setActiveOutcome] = useState("All");
  const [activeCapability, setActiveCapability] = useState("All");
  const [activeDimension, setActiveDimension] = useState<FilterDimension>("outcome");

  const filteredCases = useMemo(() => {
    return sortedCases.filter((c) => {
      const outcomeMatch =
        activeOutcome === "All" || c.outcomes.includes(activeOutcome);
      const capMatch =
        activeCapability === "All" || c.capabilities.includes(activeCapability);
      return outcomeMatch && capMatch;
    });
  }, [activeOutcome, activeCapability]);

  const featuredCases = filteredCases.slice(0, 10);
  const additionalCases = filteredCases.slice(10);

  return (
    <PageLayout>
      <HeroSection
        eyebrow="Work"
        headline="Proof in practice."
        description="Enterprise programmes designed for commercial outcomes, operating leverage, and ecosystem scale. Strategy connected to execution. Results foregrounded."
      />

      {/* ─── Filter Bar ─── */}
      <section className="py-8 md:py-12 sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border/20">
        <div className="section-container">
          {/* Dimension switcher */}
          <div className="flex gap-6 mb-4">
            <button
              onClick={() => setActiveDimension("outcome")}
              className={`text-[11px] uppercase tracking-[0.2em] font-body font-medium transition-colors ${
                activeDimension === "outcome"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              By outcome
            </button>
            <button
              onClick={() => setActiveDimension("capability")}
              className={`text-[11px] uppercase tracking-[0.2em] font-body font-medium transition-colors ${
                activeDimension === "capability"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              By capability
            </button>
          </div>

          {/* Filter chips */}
          <div className="flex flex-wrap gap-2">
            {activeDimension === "outcome" &&
              outcomeFilters.map((f) => (
                <FilterChip
                  key={f}
                  label={f}
                  active={activeOutcome === f}
                  onClick={() => {
                    setActiveOutcome(f);
                    setActiveCapability("All");
                  }}
                />
              ))}
            {activeDimension === "capability" &&
              capabilityFilters.map((f) => (
                <FilterChip
                  key={f}
                  label={f}
                  active={activeCapability === f}
                  onClick={() => {
                    setActiveCapability(f);
                    setActiveOutcome("All");
                  }}
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
              {activeOutcome !== "All"
                ? activeOutcome
                : activeCapability !== "All"
                ? activeCapability
                : "All programmes"}
            </p>
            <p className="text-[13px] text-muted-foreground max-w-md">
              {filteredCases.length} programme{filteredCases.length !== 1 ? "s" : ""} with
              measurable commercial, operational, or ecosystem outcomes.
            </p>
          </RevealSection>

          <div className="mt-8 space-y-0">
            <div className="bg-red-500 text-white p-8 text-2xl">DEBUG: {featuredCases.length} cases to render</div>
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
              eyebrow="Further proof"
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
