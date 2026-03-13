import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import BrandLogo from "@/components/shared/BrandLogo";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ═══════════════════════════════════════════════
   SECTOR CLUSTERS — real brands from creds deck
   ═══════════════════════════════════════════════ */
const sectorClusters = [
  {
    sector: "Enterprise Technology",
    num: "01",
    narrative: "Helping technology brands build market entry, partner momentum, and commercial infrastructure across Southeast Asia.",
    brands: [
      { name: "HP", domain: "hp.com", cue: "AI Ecosystems · Innovation · Channel" },
      { name: "Dell EMC", domain: "dell.com", cue: "Growth Infrastructure" },
      { name: "Seagate", domain: "seagate.com", cue: "Global Performance Marketing" },
      { name: "Redington", domain: "redingtongroup.com", cue: "Content & Partner Platforms" },
      { name: "Lenovo", domain: "lenovo.com", cue: "Field Marketing" },
      { name: "Oracle", domain: "oracle.com", cue: "Enterprise Programmes" },
      { name: "Lexmark", domain: "lexmark.com", cue: "Channel Activation" },
      { name: "Fujifilm", domain: "fujifilm.com", cue: "Market Programmes" },
    ],
  },
  {
    sector: "Consumer & Brand Growth",
    num: "02",
    narrative: "Supporting brands that need market activation, demand generation, and regional growth with commercial discipline.",
    brands: [
      { name: "Brands For Less", domain: "brandsforless.com", cue: "Market Entry · Digital Growth" },
      { name: "Sephora", domain: "sephora.com", cue: "Experiential Launch" },
      { name: "L'Oréal", domain: "loreal.com", cue: "Brand & Demand" },
      { name: "Decathlon", domain: "decathlon.com", cue: "Retail Activation" },
      { name: "Delsey", domain: "delsey.com", cue: "Distribution & Scale" },
      { name: "VIP Industries", domain: "vipindustries.co.in", cue: "Dealer Enablement" },
    ],
  },
  {
    sector: "Media & Institutions",
    num: "03",
    narrative: "Working with publishers, institutions, and ecosystem builders where trust, reach, and stakeholder alignment matter.",
    brands: [
      { name: "The Economist", domain: "economist.com", cue: "BOT · Growth Operations · Affiliate" },
      { name: "Abbott", domain: "abbott.com", cue: "Brand & Demand" },
      { name: "Dscoop", domain: "dscoop.org", cue: "Community & Events" },
      { name: "Guntner", domain: "guntner.com", cue: "Enterprise Programmes" },
    ],
  },
  {
    sector: "Digital Commerce & Innovation",
    num: "04",
    narrative: "Partnering with emerging and innovation-led companies shaping new categories across the region.",
    brands: [
      { name: "JSHealth Vitamins", domain: "jshealthvitamins.com", cue: "Affiliate · Global Growth" },
      { name: "Lazada", domain: "lazada.com", cue: "E-Commerce Activation" },
      { name: "Syfe", domain: "syfe.com", cue: "Fintech Growth" },
      { name: "SingX", domain: "singx.co", cue: "Market Expansion" },
      { name: "insureMO", domain: "insuremo.com", cue: "Enterprise Technology" },
      { name: "eBaoTech", domain: "ebaotech.com", cue: "Digital Platforms" },
    ],
  },
];

/* ═══════════════════════════════════════════════
   SELECTED OUTCOMES
   ═══════════════════════════════════════════════ */
const outcomeCapsules = [
  {
    brand: "HP",
    label: "AI Ecosystems / Growth Infrastructure",
    outcome: "Built regional innovation and ecosystem architecture across multiple markets and business units — from AI incubation to SMB pipeline to large format product launches.",
  },
  {
    brand: "The Economist",
    label: "Growth Infrastructure / Build-Operate-Transfer",
    proof: "Created an embedded build-operate-transfer model that delivered 47% cost savings, 50% agency fee reduction, and exceeded revenue expectations within two quarters.",
  },
  {
    brand: "JSHealth Vitamins",
    label: "Brand & Demand / Affiliate",
    proof: "Built a performance-led affiliate and demand engine delivering +411% ROAS and +311% ROI through 190+ partnership channels across AU, EU, UK & US.",
  },
  {
    brand: "Brands For Less",
    label: "Growth Infrastructure / Digital Commerce",
    proof: "Transformed digital acquisition channels to drive +42% site traffic uplift, strengthening competitive position in online retail.",
  },
];

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
const Brands = () => (
  <PageLayout>
    {/* ─── HERO ─── */}
    <HeroSection
      eyebrow="Brands"
      headline="Trusted across the industries shaping Southeast Asia."
      description="A cross-sector portfolio of enterprise, consumer, institutional, and innovation-led brands that reflects Enfactum's operating range across the region."
    >
      <div className="flex flex-wrap gap-4 mt-2">
        <Link to="/work">
          <Button variant="hero" size="xl">See the work</Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline" size="xl" className="border-border/40 text-foreground/70 hover:text-foreground hover:border-border">
            Start a conversation
          </Button>
        </Link>
      </div>
    </HeroSection>

    {/* ═══ SECTION 2 — INTRO ═══ */}
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <RevealSection>
              <p className="eyebrow mb-6">Why this matters</p>
              <h2 className="headline-lg">Breadth as experience, not vanity.</h2>
            </RevealSection>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <RevealSection delay={0.1}>
              <div className="space-y-6">
                <p className="body-lg">
                  Enfactum works across the systems that shape growth in Southeast Asia — from
                  enterprise technology and channel ecosystems to consumer brands, institutions,
                  and emerging innovators.
                </p>
                <p className="body-md text-muted-foreground">
                  This breadth reflects something deeper — the ability to understand different industries,
                  navigate different stakeholders, and operate effectively across the region's complexity.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>

    {/* ═══ SECTION 3 — SECTOR EXPERIENCE ARCHITECTURE ═══ */}
    <section className="section-alt py-32 md:py-44">
      <div className="section-container">
        <SectionHeader
          eyebrow="Experience"
          headline="A portfolio that reflects the region's real complexity."
          description="From enterprise platforms to consumer brands and innovation-led companies, Enfactum has built experience across the environments that move Southeast Asia."
        />

        <div className="mt-24 space-y-0">
          {sectorClusters.map((cluster, ci) => (
            <RevealSection key={ci} delay={ci * 0.06}>
              <div className="border-t border-border/30 py-14 md:py-16">
                <div className="grid md:grid-cols-12 gap-8">
                  {/* Left — Cluster label */}
                  <div className="md:col-span-4">
                    <span className="text-[10px] font-body text-dim block mb-3">{cluster.num}</span>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight">
                      {cluster.sector}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed mt-4 max-w-xs">
                      {cluster.narrative}
                    </p>
                  </div>

                  {/* Right — Brand entries */}
                  <div className="md:col-span-7 md:col-start-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-0">
                      {cluster.brands.map((brand, bi) => (
                        <div
                          key={bi}
                          className="group py-6 border-b border-border/20 last:border-b-0 cursor-default flex flex-col items-start gap-2"
                        >
                          <BrandLogo name={brand.name} domain={brand.domain} />
                          <span className="block text-[10px] text-dim/0 group-hover:text-dim transition-all duration-700 uppercase tracking-[0.15em] font-body overflow-hidden max-h-0 group-hover:max-h-6">
                            {brand.cue}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 4 — SELECTED OUTCOMES ═══ */}
    <section className="py-32 md:py-44">
      <div className="section-container">
        <div className="section-divider mb-20" />
        <SectionHeader
          eyebrow="Selected outcomes"
          headline="Behind the logos."
          description="A few snapshots of how Enfactum has operated for brands across sectors."
        />

        <div className="mt-20 grid sm:grid-cols-2 gap-8">
          {outcomeCapsules.map((capsule, i) => (
            <RevealSection key={i} delay={i * 0.08}>
              <div className="card-premium h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  <span className="text-[10px] text-dim uppercase tracking-[0.15em] font-body">
                    {capsule.label}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {capsule.brand}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  {capsule.proof}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 5 — BRIDGE TO WORK ═══ */}
    <section className="section-alt py-24 md:py-32">
      <div className="section-container">
        <RevealSection>
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <p className="eyebrow mb-4">From breadth to depth</p>
              <h2 className="headline-md max-w-xl">
                Behind every logo is a different challenge, market context, and operating model.
              </h2>
              <p className="body-md text-muted-foreground mt-4 max-w-lg">
                Explore the work to see how Enfactum turns sector experience into measurable outcomes.
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9 flex md:justify-end">
              <Link to="/work">
                <Button variant="hero" size="xl">
                  View Work <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>

    {/* ═══ SECTION 6 — CTA ═══ */}
    <CTABand
      headline="Looking for a partner that understands the region from multiple angles?"
      description="Let's talk about what growth needs to move next."
      primaryLabel="Start a conversation"
    />
  </PageLayout>
);

export default Brands;
