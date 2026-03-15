import { Link, useParams } from "react-router-dom";

import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import CaseCard from "@/components/shared/CaseCard";
import SEOHead, { makeServiceSchema, makeFAQSchema, makeBreadcrumbSchema } from "@/components/shared/SEOHead";
import { getCasesByIds } from "@/data/caseStudies";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/* ═══════════════════════════════════════════════
   CAPABILITY DATA — expanded for buyer clarity
   ═══════════════════════════════════════════════ */

interface CapData {
  eyebrow: string;
  headline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  forWhom: string;
  typicalClients: string[];
  challenge: { heading: string; body: string; bullets: string[] };
  whatWeBuild: { heading: string; body: string; deliverables: { title: string; desc: string }[] };
  howItWorks: { step: string; desc: string }[];
  outcomeCaseIds: string[];
  team: { heading: string; body: string };
  nextCapability: { title: string; href: string };
  faqs: { question: string; answer: string }[];
}

const capabilityData: Record<string, CapData> = {
  "growth-infrastructure": {
    eyebrow: "Growth Infrastructure",
    headline: "Build the go-to-market architecture your Southeast Asia expansion actually needs.",
    description: "GTM strategy, partner and channel programmes, revenue operations, and market-entry infrastructure — designed for multi-market scale, not single-country experiments.",
    seoTitle: "Growth Infrastructure for Southeast Asia — GTM Strategy & Partner Ecosystems",
    seoDescription: "Go-to-market strategy, partner and channel programmes, revenue operations, and market-entry infrastructure for enterprise brands expanding across Southeast Asia.",
    forWhom: "Enterprise brands entering or expanding across Southeast Asia who need GTM infrastructure and partner ecosystems — not just a market-entry plan or a local distributor.",
    typicalClients: ["Global technology companies expanding into ASEAN", "Consumer brands launching in new Southeast Asian markets", "Enterprise SaaS companies building regional channel programmes", "Retail brands activating multi-market partner ecosystems"],
    challenge: {
      heading: "Global GTM strategies break in Southeast Asia.",
      body: "Enterprise brands enter Southeast Asia with strategies built for homogeneous markets. But this region has 10+ regulatory environments, fragmented distribution, and growth that moves through ecosystems and local trust — not just advertising spend.",
      bullets: [
        "Channel partners exist but aren't structured or activated",
        "Demand operations lack regional infrastructure",
        "Market-entry plans don't survive contact with local complexity",
        "Sales teams operate without regional enablement or pipeline architecture",
      ],
    },
    whatWeBuild: {
      heading: "Go-to-market architecture built for how this region works.",
      body: "We design and operate the infrastructure that connects strategy to revenue — partner programmes, channel ecosystems, demand operations, and multi-market playbooks.",
      deliverables: [
        { title: "Market entry architecture", desc: "Country prioritisation, regulatory mapping, commercial model design, and launch sequencing across target markets." },
        { title: "Partner & channel programmes", desc: "Partner identification, tiering, onboarding, enablement, and activation — structured for scale, not just contracts." },
        { title: "Revenue operations", desc: "Pipeline infrastructure, sales enablement, CRM architecture, and demand-to-revenue workflows." },
        { title: "Multi-market playbooks", desc: "Repeatable GTM frameworks that adapt to local market dynamics while maintaining strategic coherence." },
        { title: "Sales enablement", desc: "Regional sales tools, competitive positioning, partner collateral, and pipeline acceleration programmes." },
      ],
    },
    howItWorks: [
      { step: "Market diagnostic", desc: "Assess the competitive landscape, ecosystem structure, channel readiness, and regulatory environment across target markets." },
      { step: "GTM architecture", desc: "Design the go-to-market model — partner tiers, channel strategy, demand infrastructure, and revenue operations framework." },
      { step: "Partner activation", desc: "Identify, qualify, onboard, and activate partners and channels with structured programmes and enablement." },
      { step: "Operations build", desc: "Embed within the business to build pipeline infrastructure, sales processes, and demand operations." },
      { step: "Scale & transfer", desc: "Expand to new markets using proven playbooks. Transfer operations, knowledge, and ownership to internal teams." },
    ],
    outcomeCaseIds: ["economist-bot", "economist-ht", "lexmark-mpc", "hp-whatsapp", "bfl-sea", "hp-smb"],
    team: {
      heading: "Led by GTM and channel specialists.",
      body: "The Growth Infrastructure capability is led by principals with deep experience in enterprise sales, channel programme design, and regional GTM architecture — people who have built and operated these systems across ASEAN markets.",
    },
    nextCapability: { title: "Brand & Demand", href: "/capabilities/brand-demand" },
    faqs: [
      { question: "What is growth infrastructure in Southeast Asia?", answer: "Growth infrastructure refers to the underlying commercial architecture — GTM strategy, partner ecosystems, channel programmes, revenue operations, and market-entry systems — that enables enterprise brands to scale across Southeast Asia's fragmented markets." },
      { question: "How does Enfactum approach market entry in Southeast Asia?", answer: "Enfactum designs market-entry architecture that connects strategy to execution: country prioritisation, regulatory mapping, partner identification and activation, demand infrastructure, and multi-market playbooks — all built for the region's complexity." },
      { question: "What is a Build-Operate-Transfer engagement?", answer: "Enfactum builds and operates the growth capability, then transfers full ownership, methodology, and knowledge to the client team — typically over 12–24 months." },
    ],
  },

  "brand-demand": {
    eyebrow: "Brand & Demand",
    headline: "Connect brand to commercial outcomes. Make demand compound across Southeast Asia.",
    description: "Performance marketing, social, influencer, affiliate, and creative — integrated into a single commercial engine with measurable ROI across fragmented ASEAN markets.",
    seoTitle: "Brand & Demand — Performance Marketing & Growth in Southeast Asia",
    seoDescription: "Integrated brand and demand generation across Southeast Asia: performance marketing, affiliate programmes, influencer ecosystems, creative, and digital experience — connected to measurable commercial outcomes.",
    forWhom: "Brands that need commercially accountable demand generation across Southeast Asia's digital channels — not another agency retainer with vanity metrics.",
    typicalClients: ["Consumer brands scaling digital presence across ASEAN", "Enterprise companies launching demand programmes regionally", "DTC brands entering Southeast Asian markets", "Technology companies building regional brand authority"],
    challenge: {
      heading: "Your brand team and performance team don't talk to each other.",
      body: "Most brands separate brand building from demand generation. Creative teams produce assets that don't convert. Performance teams optimise for clicks that don't build equity. In Southeast Asia, this disconnect is magnified by market fragmentation — different platforms, languages, and consumer behaviours in every market.",
      bullets: [
        "Creative doesn't connect to commercial outcomes",
        "Performance marketing operates without brand coherence",
        "Influencer and affiliate programmes are fragmented and unscalable",
        "No unified view of brand-to-revenue across markets",
      ],
    },
    whatWeBuild: {
      heading: "A single commercial engine from brand to revenue.",
      body: "We integrate every demand channel into one system — so creative, performance, social, influencer, and affiliate work together toward commercial outcomes.",
      deliverables: [
        { title: "Integrated demand strategy", desc: "Channel architecture, audience mapping, budget allocation, and KPI frameworks that connect brand investment to revenue." },
        { title: "Performance & paid media", desc: "Multi-market paid strategy, campaign management, and optimisation across search, social, and programmatic." },
        { title: "Social & content ecosystems", desc: "Platform-specific content strategies, community management, and editorial calendars across ASEAN markets." },
        { title: "Influencer & affiliate programmes", desc: "Structured influencer partnerships and affiliate ecosystems — recruited, managed, and measured for commercial impact." },
        { title: "Creative & digital experiences", desc: "Campaign creative, landing pages, and digital brand experiences designed for conversion, not just awareness." },
      ],
    },
    howItWorks: [
      { step: "Commercial diagnostic", desc: "Audit current brand and demand activity. Map audience, channels, and conversion paths. Identify gaps and opportunities." },
      { step: "Demand architecture", desc: "Design the integrated channel strategy — budget allocation, creative frameworks, influencer tiers, and measurement systems." },
      { step: "Channel activation", desc: "Launch and operate campaigns across performance, social, influencer, and affiliate — with unified creative direction." },
      { step: "Optimisation & scaling", desc: "Continuous optimisation based on commercial outcomes. Scale what works. Kill what doesn't. Expand to new markets." },
      { step: "Capability transfer", desc: "Build internal capability. Transfer playbooks, vendor relationships, and operational knowledge to your team." },
    ],
    outcomeCaseIds: ["economist-affiliate", "myrepublic", "loose-moose", "jshealth", "tiktok-pharma"],
    team: {
      heading: "Led by creative and performance specialists.",
      body: "The Brand & Demand capability is led by specialists who've run integrated demand programmes across ASEAN — people who bridge brand strategy and commercial performance, not just media buying.",
    },
    nextCapability: { title: "AI Ecosystems", href: "/capabilities/ai-ecosystems" },
    faqs: [
      { question: "How does Enfactum integrate brand and performance marketing?", answer: "Enfactum connects brand building and demand generation into a single commercial engine — shared goals, shared signals, shared learning — so creative, performance, social, influencer, and affiliate work together toward revenue." },
      { question: "What affiliate and influencer programmes does Enfactum build?", answer: "Enfactum designs and operates structured affiliate ecosystems and influencer partnerships — recruited, managed, and measured for commercial impact, not just reach — across Southeast Asia's fragmented digital landscape." },
      { question: "Does Enfactum operate as an agency?", answer: "Not a traditional agency. Enfactum operates as an embedded growth partner — building capability, running demand operations, and transferring methodology — rather than providing retainer-based agency services." },
    ],
  },

  "ai-ecosystems": {
    eyebrow: "AI Ecosystems",
    headline: "Move innovation from pilot to production. Build ecosystem architecture that scales.",
    description: "Venture strategy, startup scouting, partnership design, pilot management, and scale-up architecture — built around enterprise innovation mandates in Southeast Asia.",
    seoTitle: "AI Ecosystems & Innovation Programs in APAC",
    seoDescription: "Enterprise AI and innovation ecosystem programmes across Southeast Asia and APAC: venture strategy, startup scouting, pilot-to-production pathways, and commercialisation architecture for corporate innovation mandates.",
    forWhom: "Enterprises with innovation mandates that need a Growth Architect to move from scouting to scaling — not another accelerator programme or innovation theatre.",
    typicalClients: ["Global technology companies building regional innovation ecosystems", "Enterprises with corporate venture or open innovation mandates", "Government agencies designing startup engagement programmes", "Companies seeking AI/ML implementation partners through ecosystem models"],
    challenge: {
      heading: "Your innovation programme generates press releases, not production implementations.",
      body: "Most enterprise innovation programs in Southeast Asia generate activity — demo days, scouting reports, pilot proposals — but rarely move ventures from pilot to production. The ecosystem exists in fragments. Startups are evaluated but not activated. Pilots run but don't scale. Corporate innovation stays separate from the core business.",
      bullets: [
        "Startup scouting generates lists, not partnerships",
        "Pilots run in sandboxes that never connect to production",
        "No architecture for moving from pilot to scale",
        "Innovation stays in the innovation team — never reaches the business",
      ],
    },
    whatWeBuild: {
      heading: "Innovation ecosystem architecture that produces commercial outcomes.",
      body: "We design and operate the full innovation stack — from ecosystem strategy through startup curation, partnership design, pilot management, and commercialisation pathways.",
      deliverables: [
        { title: "Innovation ecosystem strategy", desc: "Define innovation mandates, technology focus areas, partnership models, and success metrics aligned to business objectives." },
        { title: "Startup scouting & curation", desc: "Structured scouting programmes — identification, evaluation, shortlisting, and matchmaking against enterprise use cases." },
        { title: "Enterprise-startup partnerships", desc: "Partnership structure design, commercial terms, IP frameworks, and integration architecture between enterprise and startup." },
        { title: "Pilot & sandbox management", desc: "Pilot programme design, sandbox environments, success criteria, and structured evaluation for go/no-go decisions." },
        { title: "Scale-up architecture", desc: "Pathways from successful pilot to production deployment, procurement integration, and regional expansion." },
      ],
    },
    howItWorks: [
      { step: "Mandate definition", desc: "Align innovation mandate with business strategy. Define technology focus, partnership models, and success metrics." },
      { step: "Ecosystem mapping", desc: "Map the relevant startup, technology, and research ecosystem across target domains and geographies." },
      { step: "Scouting & curation", desc: "Run structured scouting — identify, evaluate, and shortlist startups against enterprise use cases and readiness criteria." },
      { step: "Pilot & partnership", desc: "Design and manage pilot programmes. Structure partnerships. Operate sandboxes. Evaluate outcomes." },
      { step: "Scale & transfer", desc: "Move successful pilots to production. Build procurement pathways. Transfer programme ownership and methodology." },
    ],
    outcomeCaseIds: ["hp-garage", "enterprise-ai", "oracle-dha"],
    team: {
      heading: "Led by innovation Growth Architects, not consultants.",
      body: "The AI Ecosystems capability is led by people who've built and operated corporate innovation programmes — who understand both enterprise procurement cycles and startup velocity, and know how to bridge the two.",
    },
    nextCapability: { title: "Live Experiences", href: "/capabilities/live-experiences" },
    faqs: [
      { question: "What is an AI ecosystem programme?", answer: "An AI ecosystem programme connects enterprise innovation mandates with external capability — startups, AI partners, research institutions — through structured scouting, pilot management, and scale-up architecture. It moves beyond demo days to create production-ready implementations." },
      { question: "How does Enfactum help enterprises scale AI beyond pilots?", answer: "Enfactum builds the operating architecture between pilot and production: business sponsorship, technical integration, procurement pathways, and clear success criteria — so good ideas don't die in sandbox environments." },
      { question: "What regions does Enfactum cover for innovation programmes?", answer: "Enfactum operates AI and innovation ecosystem programmes across Singapore, India, Malaysia, Indonesia, and broader APAC — with startup ecosystem access across 21 countries." },
    ],
  },

  "live-experiences": {
    eyebrow: "Live Experiences",
    headline: "Create market moments designed for commercial impact, not just attendance.",
    description: "Product launches, partner summits, roadshows, and experiential activations — every event tied to pipeline, partner activation, or market momentum across Southeast Asia.",
    seoTitle: "Live Experiences — Product Launches & Event Activation in Southeast Asia",
    seoDescription: "Product launches, partner summits, roadshows, and experiential activations for enterprise brands across Southeast Asia — commercially designed events tied to pipeline, partner activation, and market momentum.",
    forWhom: "Brands that need market moments designed for pipeline, partner activation, and commercial impact — not events measured by headcount and social impressions.",
    typicalClients: ["Technology companies launching products across ASEAN", "Enterprises running partner summits and channel activations", "Brands executing regional roadshows and field marketing", "Companies creating experiential activations with commercial objectives"],
    challenge: {
      heading: "Your events are cost centres with unclear ROI.",
      body: "Most enterprise events in Southeast Asia are designed for awareness and relationship maintenance. They're expensive, logistically complex, and measured by attendance — not commercial outcomes. Product launches create buzz but no lasting market momentum. Partner summits engage but don't activate.",
      bullets: [
        "Events aren't designed around commercial objectives",
        "No structured follow-through from engagement to pipeline",
        "Launches generate attention but not sustained momentum",
        "Partner events don't translate to partner activation or revenue",
      ],
    },
    whatWeBuild: {
      heading: "Commercially designed activations with measurable business outcomes.",
      body: "We design and produce events that are built backward from business objectives — pipeline targets, partner activation goals, and market impact metrics — not creative concepts.",
      deliverables: [
        { title: "Product & market launches", desc: "Launch programmes designed for market entry momentum — audience strategy, creative, production, and post-launch activation." },
        { title: "Partner summits & activations", desc: "Events that activate partners — structured around enablement, deal-making, and programme enrolment, not just networking." },
        { title: "Regional roadshows", desc: "Multi-market field marketing programmes — locally adapted, commercially consistent, and operationally efficient." },
        { title: "Experiential activations", desc: "Brand experiences designed for engagement and conversion — immersive, measurable, and commercially justified." },
        { title: "Hybrid & digital platforms", desc: "Digital and hybrid event infrastructure for scaled reach without sacrificing engagement quality." },
      ],
    },
    howItWorks: [
      { step: "Commercial objectives", desc: "Define business outcomes — pipeline targets, partner activation goals, audience composition, and success metrics." },
      { step: "Experience architecture", desc: "Design the experience around commercial objectives — format, content, audience journey, and engagement mechanics." },
      { step: "Production & logistics", desc: "Full production management — venue, AV, staging, catering, technology, and on-ground logistics." },
      { step: "Activation & engagement", desc: "Execute the experience. Manage real-time engagement, audience interaction, and partner activation." },
      { step: "Measurement & follow-through", desc: "Post-event pipeline tracking, lead handoff, partner follow-up, and commercial impact reporting." },
    ],
    outcomeCaseIds: ["hp-lf-launch", "bfl-sea", "sephora-my", "lazada-1111"],
    team: {
      heading: "Led by event strategists who think in commercial outcomes.",
      body: "The Live Experiences capability is led by people who've produced hundreds of enterprise events across Southeast Asia — and who measure success by pipeline generated, not applause volume.",
    },
    nextCapability: { title: "Growth Infrastructure", href: "/capabilities/growth-infrastructure" },
    faqs: [
      { question: "What makes Enfactum's approach to events different?", answer: "Enfactum designs events backward from commercial objectives — pipeline targets, partner activation goals, and market impact metrics — rather than from creative concepts. Every event is tied to measurable business outcomes." },
      { question: "What types of events does Enfactum produce?", answer: "Product launches, partner summits, regional roadshows, experiential activations, and hybrid/digital platforms — all designed for enterprise brands across Southeast Asia." },
      { question: "How are events measured for success?", answer: "By commercial outcomes: pipeline generated, partner activation rates, deal influence, market perception shift, and follow-through conversion — not just attendance or social impressions." },
    ],
  },
};

/* ═══════════════════════════════════════════════
   BUYER-FACING DATA — Growth Infrastructure & Brand & Demand
   ═══════════════════════════════════════════════ */

interface BuyerCapData {
  eyebrow: string;
  headline: string;
  challengeBody: string;
  seoTitle: string;
  seoDescription: string;
  whatWeBuild: { title: string; desc: string }[];
  process: { label: string; desc: string }[];
  outcomes: { num: string; label: string; client?: string }[];
  whoItsFor: string[];
  outcomeCaseIds: string[];
  nextCapability: { title: string; href: string };
  faqs: { question: string; answer: string }[];
}

const buyerCapData: Record<string, BuyerCapData> = {
  "growth-infrastructure": {
    eyebrow: "Growth Infrastructure",
    headline: "Build the go-to-market architecture your Southeast Asia expansion actually needs.",
    challengeBody: "Most companies enter Southeast Asia with a strategy deck and a channel plan. Six months in, pipeline stalls, partners disengage, and the GTM model built for another market fails to convert. The gap is not ambition. It is infrastructure.",
    seoTitle: "Growth Infrastructure for Southeast Asia — GTM Strategy & Partner Ecosystems",
    seoDescription: "Go-to-market strategy, partner and channel programmes, revenue operations, and market-entry infrastructure for enterprise brands expanding across Southeast Asia.",
    whatWeBuild: [
      { title: "GTM Architecture", desc: "Market entry design, positioning, competitive mapping, and go-to-market sequencing for complex regional launches." },
      { title: "Partner & Channel Programmes", desc: "Recruitment, tiering, activation, and commercial enablement of distributor and reseller networks." },
      { title: "Revenue Operations", desc: "Pipeline infrastructure, lead management, conversion systems, and commercial process design." },
    ],
    process: [
      { label: "Diagnose", desc: "Map the market, assess channel readiness, identify structural gaps." },
      { label: "Architect", desc: "Design the GTM model, partner framework, and commercial infrastructure." },
      { label: "Operate", desc: "Embed a team to run the programme — recruitment, activation, pipeline management." },
      { label: "Transfer", desc: "Hand over a working system with trained internal capability." },
    ],
    outcomes: [
      { num: "+4%", label: "Market share growth", client: "Lexmark" },
      { num: "10→20%", label: "Revenue coverage expansion" },
      { num: "5+ yrs", label: "Programme sustained", client: "HP" },
    ],
    whoItsFor: [
      "Enterprise technology brands entering Southeast Asia",
      "Regional distributors building partner ecosystems",
      "Global brands scaling through indirect channel",
      "Companies with stalled or underperforming GTM models",
    ],
    outcomeCaseIds: ["economist-bot", "lexmark-mpc"],
    nextCapability: { title: "Brand & Demand", href: "/capabilities/brand-demand" },
    faqs: capabilityData["growth-infrastructure"].faqs,
  },
  "brand-demand": {
    eyebrow: "Brand & Demand",
    headline: "Connect brand to commercial outcomes. Make demand compound across Southeast Asia.",
    challengeBody: "Performance campaigns generate clicks. Brand campaigns build awareness. Neither builds commercial momentum on its own. In Southeast Asia, where trust and relevance are earned market by market, the brands that grow fastest connect brand to demand as a single system.",
    seoTitle: "Brand & Demand — Performance Marketing & Growth in Southeast Asia",
    seoDescription: "Integrated brand and demand generation across Southeast Asia: performance marketing, affiliate programmes, influencer ecosystems, creative, and digital experience — connected to measurable commercial outcomes.",
    whatWeBuild: [
      { title: "Performance & Paid Media", desc: "Paid acquisition, programmatic, search, and retargeting — optimised for cost per outcome, not cost per click." },
      { title: "Social & Influencer", desc: "Platform strategy, creator partnerships, and community-led growth across SEA's fragmented social landscape." },
      { title: "Content & Creative", desc: "Campaign creative, brand content, video production, and design systems built for regional adaptation." },
    ],
    process: [
      { label: "Audit", desc: "Evaluate current performance, creative assets, and channel mix across markets." },
      { label: "Build", desc: "Design the integrated brand-to-demand engine — creative, media, and measurement." },
      { label: "Launch", desc: "Deploy campaigns with in-market teams managing execution and optimisation." },
      { label: "Optimise", desc: "Continuous performance improvement, creative refresh, and budget reallocation." },
    ],
    outcomes: [
      { num: "+43%", label: "Qualified traffic increase", client: "Seagate" },
      { num: "-27%", label: "Cost per lead reduction" },
      { num: "25%", label: "Lower CAC vs. other channels", client: "Economist" },
    ],
    whoItsFor: [
      "Consumer brands launching in new SEA markets",
      "B2B companies connecting brand investment to pipeline",
      "E-commerce and DTC brands scaling paid acquisition",
      "Brands consolidating fragmented regional agency relationships",
    ],
    outcomeCaseIds: ["economist-affiliate", "myrepublic"],
    nextCapability: { title: "AI Ecosystems", href: "/capabilities/ai-ecosystems" },
    faqs: capabilityData["brand-demand"].faqs,
  },
};

/* ═══════════════════════════════════════════════
   BUYER-FACING PAGE LAYOUT
   ═══════════════════════════════════════════════ */
const BuyerCapabilityPage = ({ data }: { data: BuyerCapData }) => (
  <PageLayout>
    <SEOHead
      title={data.seoTitle}
      description={data.seoDescription}
      path={`/capabilities/${data.eyebrow.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
    />

    {/* ─── S1: CHALLENGE / HERO ─── */}
    <HeroSection eyebrow={data.eyebrow} headline={data.headline}>
      <p className="text-lg text-foreground/60 max-w-2xl mt-2">{data.challengeBody}</p>
      <div className="mt-8">
        <Link to="/contact">
          <Button variant="hero" size="xl">Discuss {data.eyebrow}</Button>
        </Link>
      </div>
    </HeroSection>

    {/* ─── S2: WHAT WE BUILD ─── */}
    <section className="py-16 md:py-20">
      <div className="section-container">
        <p className="text-xs tracking-widest text-primary uppercase mb-10">What we build</p>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-foreground/[0.08]">
          {data.whatWeBuild.map((item, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <div className="px-0 md:px-8 py-6 md:py-0 first:pl-0 last:pr-0">
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-foreground/50 mt-2">{item.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ─── S3: HOW IT WORKS ─── */}
    <section className="section-alt py-16 md:py-20">
      <div className="section-container">
        <p className="text-xs tracking-widest text-primary uppercase mb-8">How it works</p>
        {/* Desktop — horizontal */}
        <div className="hidden md:flex items-start">
          {data.process.map((step, i) => (
            <RevealSection key={i} delay={i * 0.08} className="flex items-start">
              <div className="flex-1">
                <h3 className="text-lg font-display font-semibold text-foreground">{step.label}</h3>
                <p className="text-sm text-foreground/50 mt-2 max-w-[220px]">{step.desc}</p>
              </div>
              {i < data.process.length - 1 && (
                <span className="text-xl text-foreground/20 mx-4 mt-1 shrink-0">→</span>
              )}
            </RevealSection>
          ))}
        </div>
        {/* Mobile — stacked */}
        <div className="md:hidden space-y-6">
          {data.process.map((step, i) => (
            <RevealSection key={i} delay={i * 0.05}>
              <h3 className="text-lg font-display font-semibold text-foreground">{step.label}</h3>
              <p className="text-sm text-foreground/50 mt-1">{step.desc}</p>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ─── S4: OUTCOMES ─── */}
    <section className="py-16 md:py-20">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-start justify-start gap-12 sm:gap-16">
          {data.outcomes.map((stat, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <div>
                <p className="text-5xl font-display font-bold text-foreground leading-none">{stat.num}</p>
                <p className="text-xs text-foreground/40 mt-2">
                  {stat.label}{stat.client && <span className="text-foreground/30"> ({stat.client})</span>}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ─── S5: WHO IT'S FOR ─── */}
    <section className="section-alt py-16 md:py-20">
      <div className="section-container">
        <p className="text-xs tracking-widest text-primary uppercase mb-6">Who it's for</p>
        <RevealSection>
          <div className="flex flex-wrap gap-3">
            {data.whoItsFor.map((item, i) => (
              <span key={i} className="text-sm text-foreground/50 border border-foreground/10 rounded-full px-5 py-2">
                {item}
              </span>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>

    {/* ─── S6: RELATED WORK ─── */}
    <section className="py-16 md:py-20">
      <div className="section-container">
        <div className="section-divider mb-12" />
        <RevealSection>
          <p className="eyebrow mb-2">Selected outcomes</p>
        </RevealSection>
        <div className="mt-8 space-y-0">
          {getCasesByIds(data.outcomeCaseIds).slice(0, 2).map((cs, i) => (
            <CaseCard key={cs.id} cs={cs} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* ─── FAQ ─── */}
    {data.faqs.length > 0 && (
      <section className="section-alt py-20 md:py-28">
        <div className="section-container">
          <div className="section-divider mb-16" />
          <RevealSection>
            <p className="eyebrow mb-6">Common questions</p>
            <h2 className="headline-md max-w-2xl">Frequently asked about {data.eyebrow}.</h2>
          </RevealSection>
          <div className="mt-12 space-y-0 max-w-3xl">
            {data.faqs.map((faq, i) => (
              <RevealSection key={i} delay={i * 0.06}>
                <div className="border-b border-border/20 py-8">
                  <h3 className="font-display text-[15px] font-semibold text-foreground leading-snug">{faq.question}</h3>
                  <p className="text-[14px] text-muted-foreground mt-3 leading-relaxed">{faq.answer}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    )}

    {/* ─── NEXT + CTA ─── */}
    <section className="py-12">
      <div className="section-container flex items-center justify-between">
        <RevealSection>
          <p className="text-[11px] text-muted-foreground uppercase tracking-[0.15em] font-body mb-2">Next capability</p>
          <Link to={data.nextCapability.href} className="group inline-flex items-center gap-3">
            <span className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
              {data.nextCapability.title}
            </span>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-500" />
          </Link>
        </RevealSection>
      </div>
    </section>

    <CTABand
      headline={`Ready to discuss ${data.eyebrow}?`}
      description="Tell us the problem. We'll explain how we'd approach it and what outcomes to expect."
      primaryLabel="Start a conversation"
    />
  </PageLayout>
);

/* ═══════════════════════════════════════════════
   LEGACY PAGE LAYOUT — AI Ecosystems & Live Experiences
   ═══════════════════════════════════════════════ */
const LegacyCapabilityPage = ({ data, slug }: { data: CapData; slug: string }) => (
  <PageLayout>
    <SEOHead
      title={data.seoTitle}
      description={data.seoDescription}
      path={`/capabilities/${slug}`}
      jsonLd={{
        ...makeServiceSchema(data.eyebrow, data.seoDescription, `/capabilities/${slug}`),
        ...makeFAQSchema(data.faqs),
      }}
    />
    <HeroSection eyebrow={data.eyebrow} headline={data.headline} description={data.description}>
      <Link to="/contact">
        <Button variant="hero" size="xl">Discuss {data.eyebrow}</Button>
      </Link>
    </HeroSection>

    <section className="py-16 md:py-20">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <RevealSection>
              <p className="eyebrow mb-6">Who this is for</p>
              <p className="body-lg">{data.forWhom}</p>
            </RevealSection>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <RevealSection delay={0.1}>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 font-body mb-6">Typical clients</h4>
              <div className="space-y-0">
                {data.typicalClients.map((client, i) => (
                  <div key={i} className="py-3 border-b border-border/20 text-[14px] text-secondary-foreground">{client}</div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>

    <section className="section-alt py-16 md:py-20">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <RevealSection>
              <p className="eyebrow mb-6">The challenge</p>
              <h2 className="headline-lg">{data.challenge.heading}</h2>
            </RevealSection>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <RevealSection delay={0.1}>
              <p className="body-lg mb-8">{data.challenge.body}</p>
              <div className="space-y-4">
                {data.challenge.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-primary/50 mt-2.5 shrink-0" />
                    <span className="text-[14px] text-muted-foreground leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="section-container">
        <div className="section-divider mb-20" />
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-5">
            <RevealSection>
              <p className="eyebrow mb-6">What we build</p>
              <h2 className="headline-lg">{data.whatWeBuild.heading}</h2>
            </RevealSection>
          </div>
          <div className="md:col-span-5 md:col-start-7 flex items-end">
            <RevealSection delay={0.1}>
              <p className="body-md text-muted-foreground">{data.whatWeBuild.body}</p>
            </RevealSection>
          </div>
        </div>
        <div className="space-y-0">
          {data.whatWeBuild.deliverables.map((d, i) => (
            <RevealSection key={i} delay={i * 0.04}>
              <div className="grid md:grid-cols-12 gap-4 py-8 border-b border-border/20">
                <div className="md:col-span-4">
                  <h3 className="font-display text-[15px] font-semibold text-foreground">{d.title}</h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-[14px] text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    <section className="section-alt py-16 md:py-20">
      <div className="section-container">
        <SectionHeader eyebrow="How it works" headline="From diagnostic to scale." description="A structured process designed for clarity, accountability, and transfer of capability." centered />
        <div className="mt-24 relative">
          <div className="hidden md:block">
            <div className="flex items-start justify-between relative">
              <div className="absolute top-[18px] left-[10%] right-[10%] h-px bg-border/30" />
              <div className="absolute top-[18px] left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/0 via-primary/15 to-primary/0" />
              {data.howItWorks.map((step, i) => (
                <RevealSection key={i} delay={i * 0.08} className="flex-1 relative px-3 text-center">
                  <div className="w-9 h-9 rounded-full border border-border bg-background flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-[10px] font-display font-bold text-primary/70">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-[14px] tracking-tight">{step.step}</h3>
                  <p className="text-[12px] text-muted-foreground mt-2 leading-relaxed max-w-[150px] mx-auto">{step.desc}</p>
                </RevealSection>
              ))}
            </div>
          </div>
          <div className="md:hidden space-y-8 relative pl-10">
            <div className="absolute left-[14px] top-2 bottom-2 w-px bg-border/30" />
            {data.howItWorks.map((step, i) => (
              <RevealSection key={i} delay={i * 0.05} className="relative">
                <div className="absolute -left-10 top-0 w-7 h-7 rounded-full border border-border bg-background flex items-center justify-center">
                  <span className="text-[9px] font-display font-bold text-primary/70">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm">{step.step}</h3>
                <p className="text-[13px] text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="section-container">
        <div className="section-divider mb-20" />
        <RevealSection>
          <p className="eyebrow mb-2">Selected outcomes</p>
          <p className="text-[13px] text-muted-foreground max-w-md">Programmes delivered. Outcomes measured. Infrastructure built.</p>
        </RevealSection>
        <div className="mt-8 space-y-0">
          {getCasesByIds(data.outcomeCaseIds).map((cs, i) => (
            <CaseCard key={cs.id} cs={cs} index={i} />
          ))}
        </div>
      </div>
    </section>

    <section className="section-alt py-20 md:py-24">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <RevealSection>
              <p className="eyebrow mb-4">Capability leadership</p>
              <h3 className="headline-md">{data.team.heading}</h3>
            </RevealSection>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-center">
            <RevealSection delay={0.1}>
              <p className="body-md text-muted-foreground">{data.team.body}</p>
              <Link to="/company/leadership" className="inline-flex items-center gap-2 text-sm text-primary/70 hover:text-primary font-medium transition-colors mt-6">
                Meet the leadership team <ArrowRight className="w-4 h-4" />
              </Link>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>

    {data.faqs.length > 0 && (
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="section-divider mb-16" />
          <RevealSection>
            <p className="eyebrow mb-6">Common questions</p>
            <h2 className="headline-md max-w-2xl">Frequently asked about {data.eyebrow}.</h2>
          </RevealSection>
          <div className="mt-12 space-y-0 max-w-3xl">
            {data.faqs.map((faq, i) => (
              <RevealSection key={i} delay={i * 0.06}>
                <div className="border-b border-border/20 py-8">
                  <h3 className="font-display text-[15px] font-semibold text-foreground leading-snug">{faq.question}</h3>
                  <p className="text-[14px] text-muted-foreground mt-3 leading-relaxed">{faq.answer}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    )}

    <section className="section-alt py-20 md:py-24">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-5">
            <RevealSection>
              <p className="text-[11px] text-muted-foreground uppercase tracking-[0.15em] font-body mb-3">Next capability</p>
              <Link to={data.nextCapability.href} className="group inline-flex items-center gap-3">
                <span className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">{data.nextCapability.title}</span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-500" />
              </Link>
            </RevealSection>
          </div>
          <div className="md:col-span-5 md:col-start-7">
            <RevealSection delay={0.1}>
              <Link to="/capabilities" className="group inline-flex items-center gap-2">
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">View all capabilities</span>
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-all duration-300" />
              </Link>
            </RevealSection>
          </div>
        </div>
        <div className="border-t border-border/30 pt-10">
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/work" className="group block">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-body mb-1">Related</p>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">View selected work →</span>
            </Link>
            <Link to="/brands" className="group block">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-body mb-1">Related</p>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Brands we've worked with →</span>
            </Link>
            <Link to="/thinking" className="group block">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-body mb-1">Related</p>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Read our thinking →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <CTABand
      headline={`Ready to discuss ${data.eyebrow}?`}
      description="Tell us the problem. We'll explain how we'd approach it and what outcomes to expect."
      primaryLabel="Start a conversation"
    />
  </PageLayout>
);

/* ═══════════════════════════════════════════════
   PAGE COMPONENT — routes to buyer or legacy layout
   ═══════════════════════════════════════════════ */

const CapabilityDetail = () => {
  const { slug } = useParams();
  const key = slug || "growth-infrastructure";

  // Buyer-facing layout for Growth Infrastructure & Brand & Demand
  if (buyerCapData[key]) {
    return <BuyerCapabilityPage data={buyerCapData[key]} />;
  }

  // Legacy layout for AI Ecosystems & Live Experiences
  const data = capabilityData[key] || capabilityData["growth-infrastructure"];
  return <LegacyCapabilityPage data={data} slug={key} />;
};

export default CapabilityDetail;
