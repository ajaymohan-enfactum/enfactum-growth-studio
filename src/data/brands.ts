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
  /** Optional color logo path — rendered without monochrome filter */
  colorLogo?: string | null;
  /** Optional custom plate background color for color-logo brands */
  plateColor?: string | null;
}

export interface SectorCluster {
  sector: string;
  num: string;
  narrative: string;
  brands: BrandEntry[];
}

/* ─── BRAND REGISTRY ─── */
const b = (name: string, domain: string | null, localLogo: string | null = null, colorLogo: string | null = null, plateColor: string | null = null): BrandEntry => ({
  name,
  domain,
  localLogo,
  colorLogo,
  plateColor,
});

/* ─── ALL BRANDS BY SECTOR ─── */
export const sectorClusters: SectorCluster[] = [
  {
    sector: "Enterprise Technology",
    num: "01",
    narrative:
      "Helping technology brands build market entry, partner momentum, and commercial infrastructure across Southeast Asia.",
    brands: [
      b("HP", "hp.com", "/logos/hp.png", "/logos/hp-color.png"),
      b("Lenovo", "lenovo.com", "/logos/lenovo.png", "/logos/lenovo-color.png"),
      b("Oracle", "oracle.com", "/logos/oracle.png"),
      b("Dell EMC", "dell.com", "/logos/dellemc.png", "/logos/dellemc-color.png"),
      b("Singtel", "singtel.com", "/logos/singtel.png"),
      b("Redington", null, "/logos/redington.png", "/logos/redington-color.png"),
      b("element14", null, "/logos/element14.png"),
      b("Güntner", null, "/logos/guntner.png"),
      b("markem-imaje", null, "/logos/markem.png"),
      b("Commvault", "commvault.com", "/logos/commvault.png"),
      b("DSCOOP", null, "/logos/dscoop.png"),
    ],
  },
  {
    sector: "Consumer & Brand Growth",
    num: "02",
    narrative:
      "Supporting brands that need market activation, demand generation, and regional growth with commercial discipline.",
    brands: [
      b("Brands For Less", "brandsforless.com", "/logos/brandsforless.png"),
      b("Lancôme", "lancome.com", "/logos/lancome.png"),
      b("L'Oréal", "loreal.com", "/logos/loreal.png"),
      b("Kiehl's", "kiehls.com", "/logos/kiehls.png"),
      b("JSHealth Vitamins", "jshealth.com", "/logos/jshealth.png"),
      b("Castrol", "castrol.com", "/logos/castrol.png"),
    ],
  },
  {
    sector: "Institutions & Ecosystems",
    num: "03",
    narrative:
      "Working with publishers, institutions, and ecosystem builders where trust, reach, and stakeholder alignment matter.",
    brands: [
      b("The Economist", "economist.com", "/logos/economist.png"),
      b("Abbott", "abbott.com", "/logos/abbott.png"),
      b("NUS", "nus.edu.sg", "/logos/nus.png"),
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
      b("JSHealth Vitamins", "jshealth.com", "/logos/jshealth.png"),
      b("Lazada", "lazada.com", "/logos/lazada.png"),
      b("InsureMO", null, "/logos/insuremo.png"),
      b("MyRepublic", "myrepublic.net", "/logos/myrepublic.png"),
      b("Integrate", "integrate.com", "/logos/integrate.png"),
    ],
  },
];

/** Flat list of all unique brands for marquee */
export const allMarqueeBrands: BrandEntry[] = [
  b("HP", "hp.com", "/logos/hp.png"),
  b("Lenovo", "lenovo.com", "/logos/lenovo.png"),
  b("Oracle", "oracle.com", "/logos/oracle.png"),
  b("Dell EMC", "dell.com", "/logos/dellemc.png"),
  b("Singtel", "singtel.com", "/logos/singtel.png"),
  b("Redington", null, "/logos/redington.png"),
  b("element14", null, "/logos/element14.png"),
  b("Güntner", null, "/logos/guntner.png"),
  b("markem-imaje", null, "/logos/markem.png"),
  b("Commvault", "commvault.com", "/logos/commvault.png"),
  b("DSCOOP", null, "/logos/dscoop.png"),
  b("Brands For Less", null, "/logos/brandsforless.png"),
  b("Lancôme", "lancome.com", "/logos/lancome.png"),
  b("L'Oréal", "loreal.com", "/logos/loreal.png"),
  b("Kiehl's", "kiehls.com", "/logos/kiehls.png"),
  b("JSHealth Vitamins", "jshealth.com", "/logos/jshealth.png"),
  b("The Economist", "economist.com", "/logos/economist.png"),
  b("Abbott", "abbott.com", "/logos/abbott.png"),
  b("NUS", "nus.edu.sg", "/logos/nus.png"),
  b("Andaz", null, "/logos/andaz.png"),
  b("eBaoTech", null, "/logos/ebaotech.png"),
  b("Lazada", "lazada.com", "/logos/lazada.png"),
  b("InsureMO", null, "/logos/insuremo.png"),
  b("MyRepublic", "myrepublic.net", "/logos/myrepublic.png"),
  b("Integrate", "integrate.com", "/logos/integrate.png"),
  b("Castrol", "castrol.com", "/logos/castrol.png"),
];

/** Domain lookup for case study logo matching */
export const brandLookup: Record<string, BrandEntry> = {};
for (const cluster of sectorClusters) {
  for (const brand of cluster.brands) {
    brandLookup[brand.name] = brand;
  }
}
