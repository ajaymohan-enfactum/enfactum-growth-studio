import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import { ArrowRight } from "lucide-react";

/* ═══════════════════════════════════════════════
   FLAGSHIP CASE STUDIES — narrative chapters
   ═══════════════════════════════════════════════ */
const flagshipCases = [
  {
    num: "01",
    title: "HP Garage 2.0",
    subtitle: "Rebuilding HP's innovation ecosystem across Asia Pacific",
    capabilities: ["AI Ecosystems", "Innovation Programmes", "Partnership Architecture"],
    region: "Singapore · Malaysia · Indonesia · India",
    sector: "Enterprise Technology",
    challenge:
      "HP needed to reignite its innovation engine across Asia Pacific — moving beyond one-off hackathons to build a scalable, repeatable startup engagement platform that could identify, evaluate, and integrate emerging technologies into HP's enterprise portfolio.",
    role:
      "Enfactum designed and operated the full programme — from innovation mandate definition and ecosystem mapping through startup scouting, curation, enterprise-startup matchmaking, pilot design, and regional expansion architecture.",
    outcomes: [
      { metric: "200+", label: "Startups evaluated" },
      { metric: "12", label: "Enterprise pilots launched" },
      { metric: "4", label: "Markets expanded" },
      { metric: "3", label: "Production integrations" },
    ],
    insight: "Innovation programmes succeed when they're designed as operating systems, not events.",
  },
  {
    num: "02",
    title: "The Economist BOT",
    subtitle: "A landmark thought-leadership experience for Southeast Asia's senior business community",
    capabilities: ["Live Experiences", "Brand & Demand", "Audience Strategy"],
    region: "Singapore · Regional ASEAN",
    sector: "Media & Institutions",
    challenge:
      "The Economist sought to create its most impactful regional experience — one that would engage Southeast Asia's most senior business leaders, drive measurable subscription pipeline, and position the brand as the essential voice on Asian economics and policy.",
    role:
      "Enfactum led concept development, experience architecture, production management, audience strategy, and integrated demand generation — building a programme that connected editorial credibility to commercial outcomes.",
    outcomes: [
      { metric: "2,000+", label: "Senior leaders engaged" },
      { metric: "40%", label: "Subscription pipeline lift" },
      { metric: "92%", label: "Audience satisfaction" },
      { metric: "3x", label: "ROI vs. prior events" },
    ],
    insight: "The most powerful brand experiences are commercially designed from day one.",
  },
  {
    num: "03",
    title: "Brands For Less SEA Launch",
    subtitle: "From zero presence to multi-market retail expansion across Southeast Asia",
    capabilities: ["Growth Infrastructure", "Market Entry", "Partner Ecosystems"],
    region: "Malaysia · Indonesia · Thailand",
    sector: "Consumer & Retail",
    challenge:
      "Brands For Less — a leading Middle East value retailer — wanted to enter Southeast Asia but had zero existing presence, no local partnerships, and no regional infrastructure. The market was unfamiliar, fragmented, and required a fundamentally different operating approach.",
    role:
      "Enfactum built the full market entry architecture — from country prioritisation and regulatory navigation through partner identification, commercial negotiation, retail partnership activation, and launch operations across three markets simultaneously.",
    outcomes: [
      { metric: "3", label: "Markets entered in 18 months" },
      { metric: "50+", label: "Retail partnerships activated" },
      { metric: "18mo", label: "Zero to operational" },
      { metric: "$4M+", label: "First-year revenue pipeline" },
    ],
    insight: "Market entry in Southeast Asia is an ecosystem play, not a distribution deal.",
  },
];

/* ═══════════════════════════════════════════════
   ADDITIONAL PROOF
   ═══════════════════════════════════════════════ */
const additionalCases = [
  { title: "Enterprise SaaS ASEAN Expansion", capabilities: ["Growth Infrastructure"], sector: "Enterprise Technology", outcome: "4x pipeline growth across 5 ASEAN markets", region: "Regional" },
  { title: "Consumer Electronics Campaign", capabilities: ["Brand & Demand"], sector: "Consumer & Brand Growth", outcome: "320% ROAS improvement across 3 markets", region: "SG · MY · ID" },
  { title: "Regional Partner Summit Series", capabilities: ["Live Experiences"], sector: "Enterprise Technology", outcome: "$2M pipeline generated per event", region: "Singapore" },
  { title: "DTC Brand Launch SEA", capabilities: ["Brand & Demand"], sector: "Consumer & Brand Growth", outcome: "40K customers acquired in first quarter", region: "MY · TH" },
  { title: "Enterprise AI Programme", capabilities: ["AI Ecosystems"], sector: "New Economy & Innovation", outcome: "6 production-ready AI implementations", region: "SG · IN" },
  { title: "GovTech Innovation Lab", capabilities: ["AI Ecosystems"], sector: "Institutions & Ecosystems", outcome: "3 national pilot programmes launched", region: "Singapore" },
];

const impactCategories = [
  { label: "Pipeline", metric: "$12M+", desc: "Revenue pipeline generated and accelerated across client programmes." },
  { label: "Partner Activation", metric: "200+", desc: "Ecosystem partners activated and commercially engaged." },
  { label: "Market Entry", metric: "8", desc: "New markets entered and established for enterprise clients." },
  { label: "Innovation Scale", metric: "18", desc: "Pilots moved from sandbox to production and scale." },
  { label: "Launch Momentum", metric: "35+", desc: "Market activations delivered with measurable commercial impact." },
  { label: "Efficiency", metric: "3.2x", desc: "Average ROI improvement across operated programmes." },
];

const capFilters = ["All", "Growth Infrastructure", "Brand & Demand", "AI Ecosystems", "Live Experiences"];

/* ═══════════════════════════════════════════════
   FLAGSHIP CASE COMPONENT
   ═══════════════════════════════════════════════ */
const FlagshipCase = ({ cs, index }: { cs: typeof flagshipCases[0]; index: number }) => (
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
              Three programmes that demonstrate how Enfactum operates — from ecosystem design to market launch to innovation infrastructure.
            </p>
          </RevealSection>

          {flagshipCases.map((cs, i) => (
            <FlagshipCase key={cs.title} cs={cs} index={i} />
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
