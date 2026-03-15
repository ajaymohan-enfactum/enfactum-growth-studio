/* ═══════════════════════════════════════════════
   CENTRALIZED BRAND DATA
   Single source of truth for all brand references
   ═══════════════════════════════════════════════ */

export interface BrandEntry {
  name: string;
  /** Clearbit domain for auto-fetch, or null if local-only */
  domain: string | null;
  /** Local logo path (relative to public/), or null if Clearbit-only */
  localLogo: string | null;
}

export interface SectorCluster {
  sector: string;
  num: string;
  narrative: string;
  brands: BrandEntry[];
}

/* ─── BRAND REGISTRY ─── */
const b = (name: string, domain: string | null, localLogo: string | null = null): BrandEntry => ({
  name,
  domain,
  localLogo,
});

/* ─── ALL BRANDS BY SECTOR ─── */
export const sectorClusters: SectorCluster[] = [
  {
    sector: "Enterprise Technology",
    num: "01",
    narrative:
      "Helping technology brands build market entry, partner momentum, and commercial infrastructure across Southeast Asia.",
    brands: [
      b("HP", "hp.com", "/logos/hp.png"),
      b("Lenovo", "lenovo.com"),
      b("Oracle", "oracle.com"),
      b("Dell EMC", "dell.com"),
      b("Singtel", "singtel.com"),
      b("Redington", null, "/logos/redington.png"),
      b("element14", null, "/logos/element14.png"),
      b("Güntner", null, "/logos/guntner.png"),
      b("markem-imaje", null, "/logos/markem.png"),
      b("Commvault", "commvault.com"),
      b("DSCOOP", null, "/logos/dscoop.png"),
    ],
  },
  {
    sector: "Consumer & Brand Growth",
    num: "02",
    narrative:
      "Supporting brands that need market activation, demand generation, and regional growth with commercial discipline.",
    brands: [
      b("Brands For Less", null, "/logos/brandsforless.png"),
      b("Lancôme", "lancome.com"),
      b("L'Oréal", "loreal.com"),
      b("Kiehl's", "kiehls.com"),
      b("JSHealth Vitamins", "jshealth.com", "/logos/jshealth.png"),
    ],
  },
  {
    sector: "Institutions & Ecosystems",
    num: "03",
    narrative:
      "Working with publishers, institutions, and ecosystem builders where trust, reach, and stakeholder alignment matter.",
    brands: [
      b("The Economist", "economist.com"),
      b("Abbott", "abbott.com"),
      b("NUS", "nus.edu.sg"),
      b("Andaz", null, "/logos/andaz.png"),
      b("eBaoTech", null, "/logos/ebaotech.png"),
    ],
  },
  {
    sector: "New Economy & Innovation",
    num: "04",
    narrative:
      "Partnering with emerging and innovation-led companies shaping new categories across the region.",
    brands: [
      b("JSHealth Vitamins", "jshealth.com"),
      b("Lazada", "lazada.com"),
      b("InsureMO", null, "/logos/insuremo.png"),
      b("MyRepublic", "myrepublic.net"),
      b("Integrate", "integrate.com"),
    ],
  },
];

/** Flat list of all unique brands for marquee */
export const allMarqueeBrands: BrandEntry[] = [
  b("HP", "hp.com"),
  b("Lenovo", "lenovo.com"),
  b("Oracle", "oracle.com"),
  b("Dell EMC", "dell.com"),
  b("Singtel", "singtel.com"),
  b("Redington", null, "/logos/redington.png"),
  b("element14", null, "/logos/element14.png"),
  b("Güntner", null, "/logos/guntner.png"),
  b("markem-imaje", null, "/logos/markem.png"),
  b("Commvault", "commvault.com"),
  b("DSCOOP", null, "/logos/dscoop.png"),
  b("Brands For Less", null, "/logos/brandsforless.png"),
  b("Lancôme", "lancome.com"),
  b("L'Oréal", "loreal.com"),
  b("Kiehl's", "kiehls.com"),
  b("JSHealth Vitamins", "jshealth.com"),
  b("The Economist", "economist.com"),
  b("Abbott", "abbott.com"),
  b("NUS", "nus.edu.sg"),
  b("Andaz", null, "/logos/andaz.png"),
  b("eBaoTech", null, "/logos/ebaotech.png"),
  b("Lazada", "lazada.com"),
  b("InsureMO", null, "/logos/insuremo.png"),
  b("MyRepublic", "myrepublic.net"),
  b("Integrate", "integrate.com"),
];

/** Domain lookup for case study logo matching */
export const brandLookup: Record<string, BrandEntry> = {};
for (const cluster of sectorClusters) {
  for (const brand of cluster.brands) {
    brandLookup[brand.name] = brand;
  }
}
