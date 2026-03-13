import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import { ArrowRight } from "lucide-react";

/* ═══════════════════════════════════════════════
   FLAGSHIP CASE STUDIES
   ═══════════════════════════════════════════════ */
const flagshipCases = [
  {
    num: "01",
    title: "HP Garage 2.0",
    subtitle: "Building an AI incubation ecosystem across Asia Pacific",
    capabilities: ["AI Ecosystems", "Innovation Programmes", "Partnership Architecture"],
    region: "Singapore · Malaysia · Indonesia · India",
    sector: "Enterprise Technology",
    challenge:
      "HP needed to build a robust AI innovation program to drive adoption across key verticals and support startups, requiring deep collaboration with government, universities, and ecosystem partners.",
    role:
      "Enfactum designed and operated the full programme — from innovation mandate definition and ecosystem mapping through startup scouting, curation, enterprise-startup matchmaking, pilot design, and regional expansion architecture.",
    outcomes: [
      { metric: "30+", label: "AI startups delivering solutions in GA" },
      { metric: "15+", label: "Key verticals empowered with AI" },
      { metric: "9", label: "Companies scaled to production" },
      { metric: "Q3 FY25", label: "Effective co-selling date" },
    ],
    insight: "Innovation programmes succeed when they're designed as operating systems, not events.",
  },
  {
    num: "02",
    title: "The Economist APAC",
    subtitle: "Reintroducing a global brand to the Asia Pacific market through Build-Operate-Transfer",
    capabilities: ["Growth Infrastructure", "Brand & Demand", "Build-Operate-Transfer"],
    region: "Singapore · India · Regional APAC",
    sector: "Media & Publishing",
    challenge:
      "The Economist needed a comprehensive strategy to grow its business in the APAC region, requiring an overhaul of local marketing capabilities to drive subscriptions — including India market re-entry via strategic partnership.",
    role:
      "Enfactum led the full Build-Operate-Transfer engagement — from team assessment and rapid deployment through integrated growth operations, affiliate engine build-out, and India re-entry via partnership with Hindustan Times.",
    outcomes: [
      { metric: "47%", label: "Cost savings vs. traditional model" },
      { metric: "50%", label: "Reduction in agency fees" },
      { metric: "6 wks", label: "Rapid deployment for full team" },
      { metric: "3-digit %", label: "Subscription growth in India" },
    ],
    insight: "The most powerful brand experiences are commercially designed from day one.",
  },
  {
    num: "03",
    title: "TikTok Shop Pharma",
    subtitle: "Dominating digital marketplaces in Indonesia through creator-led commerce",
    capabilities: ["Brand & Demand", "Growth Infrastructure", "Digital Commerce"],
    region: "Indonesia",
    sector: "Consumer & Pharma",
    challenge:
      "A traditional pharmaceutical brand needed to establish a foothold in digital commerce, specifically targeting revenue growth through TikTok Shop across the Indonesian market.",
    role:
      "Enfactum built the full digital commerce architecture — from creator recruitment and content strategy through TikTok Shop operations, performance optimisation, and massive scale activation with 220+ creators.",
    outcomes: [
      { metric: "1B+", label: "IDR monthly revenue on TikTok Shop" },
      { metric: "10M+", label: "Total reach across creator network" },
      { metric: "410K+", label: "Engagements from 3,400+ posts" },
      { metric: "4.1%", label: "Engagement rate (above industry avg)" },
    ],
    insight: "Market entry in Southeast Asia is an ecosystem play, not a distribution deal.",
  },
];

/* ═══════════════════════════════════════════════
   ADDITIONAL PROOF
   ═══════════════════════════════════════════════ */
const additionalCases = [
  { title: "HP SMB Pipeline Acceleration", capabilities: ["Growth Infrastructure"], sector: "Enterprise Technology", outcome: "60% lower cost per lead, 2,000+ unique leads", region: "Malaysia" },
  { title: "HP Large Format Product Launch", capabilities: ["Live Experiences"], sector: "Enterprise Technology", outcome: "US$3M product funnel from launch event", region: "Regional APAC" },
  { title: "JSHealth Vitamins Global Growth", capabilities: ["Brand & Demand"], sector: "Consumer & Wellness", outcome: "+411% ROAS via partnership channels", region: "AU · EU · UK · US" },
  { title: "Seagate Global Performance", capabilities: ["Brand & Demand"], sector: "Enterprise Technology", outcome: "+43% qualified traffic, -27% cost per lead", region: "APAC · EU · US" },
  { title: "Brands For Less Digital Growth", capabilities: ["Growth Infrastructure"], sector: "Consumer & Retail", outcome: "+42% site traffic uplift achieved", region: "Regional" },
  { title: "Enterprise AI Portfolio", capabilities: ["AI Ecosystems"], sector: "Enterprise Technology", outcome: "5+ major AI implementations, 100K+ records enriched", region: "SG · IN" },
  { title: "Delsey Asia Distribution", capabilities: ["Growth Infrastructure"], sector: "Consumer & Retail", outcome: "200K+ units sold across Asian markets", region: "Regional Asia" },
  { title: "VIP Industries Dealer Network", capabilities: ["Growth Infrastructure"], sector: "Consumer & Retail", outcome: "120% quarterly target, 3x microsite traffic", region: "India" },
  { title: "Lazada 11.11 Festival Activation", capabilities: ["Live Experiences"], sector: "E-Commerce", outcome: "Multi-market record-breaking engagement", region: "SEA" },
  { title: "Sephora Malaysia Re-Launch", capabilities: ["Live Experiences"], sector: "Consumer & Retail", outcome: "Record store opening attendance", region: "Malaysia" },
  { title: "HP WhatsApp Partner Programme", capabilities: ["Growth Infrastructure"], sector: "Enterprise Technology", outcome: "1,300+ partners enrolled, 5+ years running", region: "India · SEA" },
  { title: "Redington Content Platform", capabilities: ["Brand & Demand"], sector: "Enterprise Technology", outcome: "50+ video assets, 100% strategy deployed", region: "Regional" },
];

const impactCategories = [
  { label: "Cost Efficiency", metric: "47%", desc: "Cost savings on headcount vs. traditional agency models." },
  { label: "ROAS Uplift", metric: "+411%", desc: "Return on ad spend achieved through partnership-driven growth channels." },
  { label: "Market Reach", metric: "15+", desc: "Global markets served with active programme delivery." },
  { label: "Pipeline Generated", metric: "$3M+", desc: "Product funnel generated from a single launch event." },
  { label: "Digital Commerce", metric: "1B+", desc: "IDR monthly revenue achieved on TikTok Shop for pharma client." },
  { label: "Client Tenure", metric: "5+ yrs", desc: "Average engagement length — built for long-term partnership, not projects." },
];

const capFilters = ["All", "Growth Infrastructure", "Brand & Demand", "AI Ecosystems", "Live Experiences"];

/* ═══════════════════════════════════════════════
   FLAGSHIP CASE COMPONENT
   ═══════════════════════════════════════════════ */
const FlagshipCase = ({ cs }: { cs: typeof flagshipCases[0] }) => (
  <RevealSection delay={0.05} distance={50}>
    <div className="border-t border-border/30 pt-16 pb-20 md:pt-20 md:pb-28">
      {/* Header row */}
      <div className="grid md:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-16">
        <div className="md:col-span-1">
          <span className="text-[10px] font-body text-dim">{cs.num}</span>
        </div>
        <div className="md:col-span-7">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            {cs.capabilities.map((cap) => (
              <span key={cap} className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-medium font-body">
                {cap}
              </span>
            ))}
          </div>
          <h2 className="headline-lg">{cs.title}</h2>
          <p className="body-lg mt-4 max-w-xl">{cs.subtitle}</p>
        </div>
        <div className="md:col-span-3 md:col-start-10 flex flex-col justify-end">
          <div className="space-y-3">
            <div>
              <span className="text-[10px] text-dim uppercase tracking-[0.15em] font-body block mb-1">Sector</span>
              <span className="text-[13px] text-foreground/70 font-display font-medium">{cs.sector}</span>
            </div>
            <div>
              <span className="text-[10px] text-dim uppercase tracking-[0.15em] font-body block mb-1">Region</span>
              <span className="text-[13px] text-foreground/70 font-display font-medium">{cs.region}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Narrative body */}
      <div className="grid md:grid-cols-12 gap-8 md:gap-8">
        <div className="md:col-span-5 md:col-start-2">
          <div className="space-y-10">
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 font-body mb-4">The challenge</h4>
              <p className="body-md text-secondary-foreground leading-[1.8]">{cs.challenge}</p>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 font-body mb-4">Enfactum's role</h4>
              <p className="body-md text-secondary-foreground leading-[1.8]">{cs.role}</p>
            </div>
          </div>
        </div>

        {/* Outcomes */}
        <div className="md:col-span-5 md:col-start-8">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 font-body mb-8">Business outcomes</h4>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            {cs.outcomes.map((o, oi) => (
              <motion.div
                key={oi}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + oi * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-display text-3xl md:text-4xl font-extrabold text-primary/90 tracking-tight block">
                  {o.metric}
                </span>
                <span className="text-[12px] text-muted-foreground mt-1.5 block leading-snug font-body">
                  {o.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Insight */}
          <div className="mt-12 pt-8 border-t border-border/20">
            <p className="text-[13px] text-foreground/50 italic leading-relaxed">
              "{cs.insight}"
            </p>
          </div>
        </div>
      </div>
    </div>
  </RevealSection>
);

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCases = activeFilter === "All"
    ? additionalCases
    : additionalCases.filter((c) => c.capabilities.includes(activeFilter));

  return (
    <PageLayout>
      <HeroSection
        eyebrow="Work"
        headline="Proof in practice."
        description="Enterprise programmes designed for scale, built for Southeast Asia. Strategy connected to execution. Outcomes foregrounded."
      />

      {/* ─── Flagship Case Studies ─── */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <RevealSection>
            <p className="eyebrow mb-2">Flagship programmes</p>
            <p className="text-[13px] text-muted-foreground max-w-md">
              Programmes that demonstrate how Enfactum operates — from AI incubation to market re-entry to digital commerce at scale.
            </p>
          </RevealSection>

          {flagshipCases.map((cs) => (
            <FlagshipCase key={cs.title} cs={cs} />
          ))}
        </div>
      </section>

      {/* ─── Additional Proof Grid ─── */}
      <section className="section-alt py-32 md:py-44">
        <div className="section-container">
          <SectionHeader
            eyebrow="Further proof"
            headline="More work across capabilities and sectors."
          />

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mt-14">
            {capFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-sm text-[12px] font-medium font-body uppercase tracking-wider transition-all duration-500 ${
                  activeFilter === f
                    ? "bg-primary/15 text-primary border border-primary/30"
                    : "text-muted-foreground hover:text-foreground border border-border/40 hover:border-border/60"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Cases */}
          <div className="mt-12 space-y-0">
            {filteredCases.map((c, i) => (
              <RevealSection key={c.title} delay={i * 0.04}>
                <div className="grid md:grid-cols-12 gap-4 py-6 border-b border-border/20 hover:border-primary/10 transition-colors duration-700 group">
                  <div className="md:col-span-4">
                    <h3 className="font-display text-[15px] font-semibold text-foreground group-hover:text-primary/90 transition-colors duration-500">
                      {c.title}
                    </h3>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-[11px] text-dim uppercase tracking-wider font-body">{c.capabilities[0]}</span>
                  </div>
                  <div className="md:col-span-1">
                    <span className="text-[11px] text-dim font-body">{c.region}</span>
                  </div>
                  <div className="md:col-span-4">
                    <span className="text-[13px] text-primary/70 font-medium">{c.outcome}</span>
                  </div>
                  <div className="md:col-span-1 flex items-center justify-end">
                    <ArrowRight className="w-3.5 h-3.5 text-dim group-hover:text-primary/60 group-hover:translate-x-0.5 transition-all duration-500" />
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Outcome Framework ─── */}
      <section className="py-32 md:py-44">
        <div className="section-container">
          <div className="section-divider mb-20" />
          <SectionHeader
            eyebrow="Impact framework"
            headline="How we measure what matters."
            description="Every programme is designed around commercial outcomes — not activity metrics."
            centered
          />

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {impactCategories.map((cat, i) => (
              <RevealSection key={i} delay={i * 0.06}>
                <div className="border-t border-border/30 pt-6">
                  <span className="font-display text-3xl font-extrabold text-primary/80 tracking-tight">{cat.metric}</span>
                  <h3 className="font-display text-base font-semibold text-foreground mt-3">{cat.label}</h3>
                  <p className="text-[13px] text-muted-foreground mt-2 leading-relaxed">{cat.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        headline="Have a growth challenge to discuss?"
        description="We'd like to understand your context before we propose a solution."
        primaryLabel="Start a conversation"
      />
    </PageLayout>
  );
};

export default Work;
