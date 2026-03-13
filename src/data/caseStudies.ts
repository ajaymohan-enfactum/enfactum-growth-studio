/* ═══════════════════════════════════════════════
   CENTRAL CASE STUDY DATA
   Single source of truth for all proof across the site
   ═══════════════════════════════════════════════ */

export interface CaseOutcome {
  metric: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  headline: string;          // outcome-led micro-headline
  capabilities: string[];
  sectors: string[];
  outcomes: string[];         // outcome category tags for filtering
  challengeTypes: string[];   // challenge category tags for filtering
  challenge: string;          // 1-sentence
  role: string;               // 1-sentence Enfactum role
  results: CaseOutcome[];
  region: string;
  insight?: string;
  flagship?: boolean;
}

/* ─── OUTCOME FILTER CATEGORIES ─── */
export const outcomeFilters = [
  "All",
  "Revenue Growth",
  "Cost Efficiency",
  "Pipeline Generation",
  "Ecosystem Scale",
  "Channel Engagement",
  "Customer Acquisition",
  "Market Entry",
  "Sales Enablement",
] as const;

export const capabilityFilters = [
  "All",
  "Growth Infrastructure",
  "Brand & Demand",
  "AI Ecosystems",
  "Live Experiences",
] as const;

export const sectorFilters = [
  "All",
  "Enterprise Technology",
  "Consumer & Retail",
  "Media & Publishing",
  "Digital Commerce",
  "Fintech",
] as const;

/* ─── ALL CASES ─── */
export const allCaseStudies: CaseStudy[] = [
  /* ── 1. HP Garage 2.0 ── */
  {
    id: "hp-garage",
    client: "HP",
    headline: "From innovation mandate to 21-country ecosystem with new recurring revenue",
    capabilities: ["AI Ecosystems", "Growth Infrastructure"],
    sectors: ["Enterprise Technology"],
    outcomes: ["Ecosystem Scale", "Revenue Growth", "Channel Engagement"],
    challenge: "HP needed to build a regional AI innovation programme that would go beyond startup scouting to create enterprise differentiation and recurring revenue.",
    role: "Enfactum designed and operated the full programme — from mandate definition and ecosystem mapping through startup curation, enterprise matchmaking, pilot management, and commercialisation architecture.",
    results: [
      { metric: "21", label: "Countries with ecosystem access" },
      { metric: "8,000+", label: "Enterprise customers reached" },
      { metric: "48,000+", label: "Channel partners in network" },
      { metric: "30+", label: "AI startups delivering in GA" },
      { metric: "9", label: "Companies scaled to production" },
    ],
    region: "Singapore · Malaysia · Indonesia · India",
    insight: "Innovation programmes succeed when they're designed as operating systems — with commercial architecture, not just demo days.",
    flagship: true,
  },

  /* ── 2. The Economist — APAC Growth Team Build ── */
  {
    id: "economist-bot",
    client: "The Economist",
    headline: "47% lower cost, fully operational growth team in 6 weeks",
    capabilities: ["Growth Infrastructure", "Brand & Demand"],
    sectors: ["Media & Publishing"],
    outcomes: ["Cost Efficiency", "Revenue Growth", "Customer Acquisition"],
    challenge: "The Economist needed to overhaul its APAC marketing capabilities to drive subscription growth — fast — without the cost and timeline of a traditional agency build.",
    role: "Enfactum led the full Build-Operate-Transfer engagement — team assessment, rapid deployment, integrated growth operations, and capability transfer.",
    results: [
      { metric: "47%", label: "Cost savings vs. traditional model" },
      { metric: "6 wks", label: "Fully operational growth team" },
      { metric: "50%", label: "Reduction in agency fees" },
      { metric: "2 Qtrs", label: "Revenue ahead of plan" },
    ],
    region: "Singapore · Regional APAC",
    insight: "Build-Operate-Transfer works when you deploy operators who run the work — not consultants who advise on it.",
    flagship: true,
  },

  /* ── 3. Brands For Less — SEA Launch ── */
  {
    id: "bfl-sea",
    client: "Brands For Less",
    headline: "From zero regional presence to measurable digital market entry",
    capabilities: ["Growth Infrastructure", "Brand & Demand"],
    sectors: ["Consumer & Retail"],
    outcomes: ["Market Entry", "Revenue Growth", "Customer Acquisition"],
    challenge: "Brands For Less needed a structured go-to-market strategy and digital infrastructure to launch in Southeast Asia from scratch.",
    role: "Enfactum built the full digital growth architecture — from market entry strategy and competitive analysis through digital acquisition, content systems, and performance optimisation.",
    results: [
      { metric: "+42%", label: "Site traffic uplift" },
      { metric: "360°", label: "Growth strategy deployed" },
      { metric: "SEA", label: "Market entry established" },
    ],
    region: "Regional SEA",
    insight: "Market entry in Southeast Asia is an ecosystem play, not a distribution deal.",
    flagship: true,
  },

  /* ── 4. The Economist — Hindustan Times Partnership ── */
  {
    id: "economist-ht",
    client: "The Economist",
    headline: "Triple-digit subscription growth through partnership-led re-entry",
    capabilities: ["Growth Infrastructure"],
    sectors: ["Media & Publishing"],
    outcomes: ["Revenue Growth", "Market Entry", "Customer Acquisition"],
    challenge: "The Economist needed to re-enter the India market with a commercially sustainable model — not a standalone local operation.",
    role: "Enfactum architected the partnership with Hindustan Times, designing a digital-first distribution model that achieved immediate GTM results and sustained growth.",
    results: [
      { metric: "3-digit %", label: "Subscription growth over 3 years" },
      { metric: "Immediate", label: "GTM results from launch" },
      { metric: "Sustainable", label: "Digital-first partnership model" },
    ],
    region: "India",
    insight: "Market re-entry works when you partner with local distribution power rather than replicate global operations.",
  },

  /* ── 5. HP Large Format Printer Launch ── */
  {
    id: "hp-lf-launch",
    client: "HP",
    headline: "US$3M pipeline from an experiential launch",
    capabilities: ["Live Experiences"],
    sectors: ["Enterprise Technology"],
    outcomes: ["Pipeline Generation", "Revenue Growth"],
    challenge: "HP needed a product launch that would generate measurable pipeline — not just industry buzz — for its large format printing ecosystem.",
    role: "Enfactum designed and produced an immersive launch experience built backward from commercial objectives, with integrated follow-through into pipeline.",
    results: [
      { metric: "US$3M", label: "Product pipeline from launch" },
      { metric: "$12K+", label: "Artwork sales at event" },
      { metric: "30+", label: "Press articles generated" },
      { metric: "274+", label: "Attendees" },
    ],
    region: "Regional APAC",
    insight: "The most powerful launch experiences are commercially designed from day one.",
  },

  /* ── 6. HP Graphics — WhatsApp Channel Engagement ── */
  {
    id: "hp-whatsapp",
    client: "HP",
    headline: "80%+ partner engagement at 80%+ lower cost — sustained 5 years",
    capabilities: ["Growth Infrastructure"],
    sectors: ["Enterprise Technology"],
    outcomes: ["Channel Engagement", "Cost Efficiency", "Sales Enablement"],
    challenge: "HP needed a scalable, low-cost way to engage and activate its graphics partner network across India and SEA — beyond traditional email and events.",
    role: "Enfactum built a WhatsApp-based partner engagement programme with structured communications, enablement content, and partner activation workflows.",
    results: [
      { metric: "80%+", label: "Engagement rate" },
      { metric: "1,300+", label: "Partners enrolled" },
      { metric: "80%+", label: "Lower cost per connect" },
      { metric: "5+ yrs", label: "Programme sustained" },
    ],
    region: "India · SEA",
    insight: "Channel engagement scales when you meet partners where they are — not where your CRM lives.",
  },

  /* ── 7. The Economist — Global Affiliate Engine ── */
  {
    id: "economist-affiliate",
    client: "The Economist",
    headline: "25% lower CAC through affiliate-led acquisition",
    capabilities: ["Brand & Demand"],
    sectors: ["Media & Publishing"],
    outcomes: ["Customer Acquisition", "Cost Efficiency", "Revenue Growth"],
    challenge: "The Economist needed a cost-efficient subscription acquisition channel that could scale globally without proportional cost increases.",
    role: "Enfactum built and operated a global affiliate engine — from partner recruitment and onboarding through performance management and continuous optimisation.",
    results: [
      { metric: "25%", label: "Lower CAC vs. other channels" },
      { metric: "8%", label: "Of total APAC subscription sales" },
      { metric: "80+", label: "Affiliate partnerships" },
    ],
    region: "APAC · Global",
    insight: "Affiliate programmes become strategic when they're designed as acquisition infrastructure — not a side channel.",
  },

  /* ── 8. Lexmark — MPC Engagement Strategy ── */
  {
    id: "lexmark-mpc",
    client: "Lexmark",
    headline: "Market share growth from 10% to 20% revenue coverage via structured channel",
    capabilities: ["Growth Infrastructure"],
    sectors: ["Enterprise Technology"],
    outcomes: ["Channel Engagement", "Revenue Growth", "Sales Enablement"],
    challenge: "Lexmark needed to grow market share in a competitive landscape by activating its MPC (Managed Print Channel) partner segment more effectively.",
    role: "Enfactum designed a segmented channel engagement strategy with structured loyalty architecture, tiered activation, and revenue coverage expansion.",
    results: [
      { metric: "+4%", label: "Market share growth" },
      { metric: "10→20%", label: "Revenue coverage expansion" },
      { metric: "Scalable", label: "Structured loyalty architecture" },
    ],
    region: "Regional",
    insight: "Channel engagement drives market share when it's structured around commercial tiers — not uniform incentives.",
  },

  /* ── 9. MyRepublic — Pay-for-Results ── */
  {
    id: "myrepublic",
    client: "MyRepublic",
    headline: "Risk-free customer acquisition — pay only for actual sales",
    capabilities: ["Brand & Demand"],
    sectors: ["Digital Commerce"],
    outcomes: ["Customer Acquisition", "Cost Efficiency"],
    challenge: "MyRepublic needed a scalable acquisition model with zero upfront risk — paying only for verified sales, not clicks or impressions.",
    role: "Enfactum built and operated a pay-for-results performance model with end-to-end management, predictable CAC, and a scalable partnership network.",
    results: [
      { metric: "Pay-per-sale", label: "Zero upfront risk model" },
      { metric: "Predictable", label: "CAC across all channels" },
      { metric: "Scalable", label: "Partnership network" },
      { metric: "End-to-end", label: "Hands-off management" },
    ],
    region: "Singapore",
    insight: "Performance marketing becomes strategic when you absorb the risk and prove the economics first.",
  },

  /* ── 10. Oracle — Digital Health Assessment ── */
  {
    id: "oracle-dha",
    client: "Oracle",
    headline: "Diagnostic framework that created qualified enterprise pipeline",
    capabilities: ["Growth Infrastructure"],
    sectors: ["Enterprise Technology"],
    outcomes: ["Pipeline Generation", "Sales Enablement"],
    challenge: "Oracle needed a consultative sales framework that could generate qualified pipeline from diagnostic engagements — not cold outreach.",
    role: "Enfactum designed and deployed a Digital Health Assessment framework — an insight-led selling model deployed across major accounts to create qualified pipeline.",
    results: [
      { metric: "Qualified", label: "Pipeline generation" },
      { metric: "Consultative", label: "Sales framework deployed" },
      { metric: "Major accounts", label: "Deployed across enterprise" },
      { metric: "Insight-led", label: "Selling model" },
    ],
    region: "Regional APAC",
    insight: "Enterprise pipeline grows when you lead with diagnostics, not product demos.",
  },

  /* ── 11. Loose Moose Wine ── */
  {
    id: "loose-moose",
    client: "Loose Moose Wine",
    headline: "Performance-led launch across 3 markets with 100+ affiliate partners",
    capabilities: ["Brand & Demand"],
    sectors: ["Consumer & Retail"],
    outcomes: ["Market Entry", "Revenue Growth", "Customer Acquisition"],
    challenge: "Loose Moose Wine needed to launch across Singapore, Malaysia, and Australia simultaneously with measurable revenue from day one.",
    role: "Enfactum built a performance-led expansion strategy — affiliate recruitment, retail distribution partnerships, and digital revenue generation across all three markets.",
    results: [
      { metric: "3", label: "Markets launched simultaneously" },
      { metric: "100+", label: "Affiliate partners" },
      { metric: "Jaya Grocer", label: "Retail distribution secured" },
      { metric: "Measurable", label: "Revenue from launch" },
    ],
    region: "Singapore · Malaysia · Australia",
    insight: "Multi-market launch succeeds when you build distribution infrastructure before you build awareness.",
  },

  /* ── 12. TikTok Shop Pharma ── */
  {
    id: "tiktok-pharma",
    client: "TikTok Shop Pharma",
    headline: "1B+ IDR monthly revenue through creator-led commerce at scale",
    capabilities: ["Brand & Demand"],
    sectors: ["Consumer & Retail", "Digital Commerce"],
    outcomes: ["Revenue Growth", "Customer Acquisition"],
    challenge: "A traditional pharmaceutical brand needed to establish digital commerce dominance on TikTok Shop across Indonesia.",
    role: "Enfactum built the full commerce architecture — creator recruitment, content strategy, TikTok Shop operations, and massive-scale activation with 220+ creators.",
    results: [
      { metric: "1B+", label: "IDR monthly revenue" },
      { metric: "10M+", label: "Total reach across network" },
      { metric: "220+", label: "Creators activated" },
      { metric: "4.1%", label: "Engagement rate (above avg)" },
    ],
    region: "Indonesia",
    insight: "Creator-led commerce at scale requires operational infrastructure, not just influencer lists.",
  },

  /* ── 13. JSHealth Vitamins ── */
  {
    id: "jshealth",
    client: "JSHealth Vitamins",
    headline: "+411% ROAS through partnership-driven global growth",
    capabilities: ["Brand & Demand"],
    sectors: ["Consumer & Retail"],
    outcomes: ["Revenue Growth", "Customer Acquisition", "Cost Efficiency"],
    challenge: "JSHealth needed scalable, cost-efficient acquisition channels across multiple global markets without proportional ad spend increases.",
    role: "Enfactum built and managed a partnership-driven growth engine — affiliate recruitment, performance optimisation, and cross-market scaling.",
    results: [
      { metric: "+411%", label: "ROAS via partnerships" },
      { metric: "+311%", label: "Total ROI delivered" },
      { metric: "190+", label: "Active affiliate partners" },
    ],
    region: "AU · EU · UK · US",
    insight: "Affiliate partnerships transform into a scalable, high-ROI growth channel when structured as infrastructure.",
  },

  /* ── 14. Seagate Global Performance ── */
  {
    id: "seagate",
    client: "Seagate",
    headline: "+43% qualified traffic with 27% lower cost per lead",
    capabilities: ["Brand & Demand"],
    sectors: ["Enterprise Technology"],
    outcomes: ["Customer Acquisition", "Cost Efficiency", "Pipeline Generation"],
    challenge: "Seagate needed to improve global digital performance — driving more qualified traffic while reducing cost per lead across multiple regions.",
    role: "Enfactum optimised the full performance marketing stack — audience targeting, creative strategy, and conversion architecture across APAC, EU, and US.",
    results: [
      { metric: "+43%", label: "Qualified traffic increase" },
      { metric: "-27%", label: "Cost per lead reduction" },
      { metric: "Global", label: "Multi-region deployment" },
    ],
    region: "APAC · EU · US",
    insight: "Performance marketing improves when you optimise the full funnel — not just the ad spend.",
  },

  /* ── 15. HP SMB Pipeline ── */
  {
    id: "hp-smb",
    client: "HP",
    headline: "60% lower cost per lead with 2,000+ unique leads",
    capabilities: ["Growth Infrastructure"],
    sectors: ["Enterprise Technology"],
    outcomes: ["Pipeline Generation", "Cost Efficiency", "Customer Acquisition"],
    challenge: "HP needed to accelerate SMB pipeline generation in Malaysia through integrated digital and channel activation.",
    role: "Enfactum designed and operated an integrated pipeline programme — digital acquisition, partner co-marketing, and lead management across 9 partner channels.",
    results: [
      { metric: "60%", label: "Lower cost per lead" },
      { metric: "2,000+", label: "Unique leads delivered" },
      { metric: "9", label: "Partner channels activated" },
    ],
    region: "Malaysia",
    insight: "Pipeline accelerates when digital and channel work as one system, not two teams.",
  },

  /* ── 16. VIP Industries ── */
  {
    id: "vip-industries",
    client: "VIP Industries",
    headline: "120% quarterly target through dealer network activation",
    capabilities: ["Growth Infrastructure"],
    sectors: ["Consumer & Retail"],
    outcomes: ["Revenue Growth", "Channel Engagement", "Sales Enablement"],
    challenge: "VIP Industries needed to activate its dealer network and drive measurable quarterly sales targets across India.",
    role: "Enfactum built a dealer enablement programme with structured activation, microsite traffic generation, and quarterly target management.",
    results: [
      { metric: "120%", label: "Quarterly target achieved" },
      { metric: "3x", label: "Microsite traffic growth" },
      { metric: "Activated", label: "Dealer network at scale" },
    ],
    region: "India",
    insight: "Dealer networks perform when you give them tools and targets — not just products.",
  },

  /* ── 17. Sephora Malaysia ── */
  {
    id: "sephora-my",
    client: "Sephora",
    headline: "Record store opening attendance through cultural moment creation",
    capabilities: ["Live Experiences"],
    sectors: ["Consumer & Retail"],
    outcomes: ["Market Entry", "Customer Acquisition"],
    challenge: "Sephora needed a Malaysia re-launch that would generate record attendance and establish cultural relevance beyond a standard store opening.",
    role: "Enfactum designed and produced an experiential launch that created a cultural moment — driving record attendance and sustained social conversation.",
    results: [
      { metric: "Record", label: "Store opening attendance" },
      { metric: "Viral", label: "Social media impact" },
      { metric: "Cultural", label: "Moment created" },
    ],
    region: "Malaysia",
    insight: "Retail launches succeed when they create cultural moments, not just store openings.",
  },

  /* ── 18. Delsey Asia Distribution ── */
  {
    id: "delsey",
    client: "Delsey",
    headline: "200K+ units sold across Asian distribution network",
    capabilities: ["Growth Infrastructure"],
    sectors: ["Consumer & Retail"],
    outcomes: ["Revenue Growth", "Market Entry"],
    challenge: "Delsey needed structured distribution and market activation across Asian markets to reach volume at scale.",
    role: "Enfactum built distribution infrastructure and market activation programmes across multiple Asian markets.",
    results: [
      { metric: "200K+", label: "Units sold" },
      { metric: "Multi-market", label: "Distribution network" },
    ],
    region: "Regional Asia",
  },

  /* ── 19. Enterprise AI Portfolio ── */
  {
    id: "enterprise-ai",
    client: "HP",
    headline: "5+ major AI implementations with 100K+ records enriched",
    capabilities: ["AI Ecosystems"],
    sectors: ["Enterprise Technology"],
    outcomes: ["Ecosystem Scale", "Revenue Growth"],
    challenge: "HP's enterprise customers needed practical AI implementations — not innovation theatre — with measurable data and operational outcomes.",
    role: "Enfactum delivered enterprise AI solutions across multiple use cases — from data enrichment to multi-lingual voice agents — moving each from pilot to production.",
    results: [
      { metric: "5+", label: "Major enterprise AI implementations" },
      { metric: "100K+", label: "Records enriched via AI" },
      { metric: "9", label: "Multi-lingual voice & text agents" },
    ],
    region: "Singapore · India",
    insight: "Enterprise AI scales when there's architecture between the lab and the business.",
  },

  /* ── 20. Lazada 11.11 ── */
  {
    id: "lazada-1111",
    client: "Lazada",
    headline: "Multi-market record-breaking engagement for 11.11 festival",
    capabilities: ["Live Experiences"],
    sectors: ["Digital Commerce"],
    outcomes: ["Customer Acquisition", "Revenue Growth"],
    challenge: "Lazada needed to break engagement records across SEA markets for its flagship 11.11 shopping festival.",
    role: "Enfactum designed and executed multi-market festival activation with record-breaking engagement and commercial outcomes.",
    results: [
      { metric: "Record", label: "Breaking engagement across SEA" },
      { metric: "Multi-market", label: "Simultaneous activation" },
    ],
    region: "Southeast Asia",
  },

  /* ── 21. Redington Content Platform ── */
  {
    id: "redington",
    client: "Redington",
    headline: "50+ video assets with 100% strategy deployment",
    capabilities: ["Brand & Demand"],
    sectors: ["Enterprise Technology"],
    outcomes: ["Channel Engagement", "Sales Enablement"],
    challenge: "Redington needed a scalable content platform to support partner engagement and channel enablement across the region.",
    role: "Enfactum built a content production platform delivering 50+ video assets with full strategy deployment across Redington's partner network.",
    results: [
      { metric: "50+", label: "Video assets produced" },
      { metric: "100%", label: "Strategy deployed" },
    ],
    region: "Regional",
  },
];

/* ─── HELPER: Get cases by ID ─── */
export const getCaseById = (id: string) => allCaseStudies.find(c => c.id === id);
export const getCasesByIds = (ids: string[]) => ids.map(getCaseById).filter(Boolean) as CaseStudy[];
export const getFlagshipCases = () => allCaseStudies.filter(c => c.flagship);
export const getCasesByCapability = (cap: string) => allCaseStudies.filter(c => c.capabilities.includes(cap));
