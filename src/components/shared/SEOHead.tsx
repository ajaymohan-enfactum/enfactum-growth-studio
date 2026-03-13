import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  article?: {
    author?: string;
    publishedTime?: string;
    section?: string;
    tags?: string[];
  };
  jsonLd?: Record<string, unknown>;
}

const SITE_NAME = "Enfactum";
const BASE_URL = "https://enfactum.com";

/**
 * Per-page SEO metadata: title, meta description, OG tags, JSON-LD.
 * Keeps metadata invisible in the premium UI while making pages
 * fully legible to search engines and AI systems.
 */
const SEOHead = ({ title, description, path = "/", type = "website", article, jsonLd }: SEOHeadProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonical = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Article metadata */}
      {article?.author && <meta property="article:author" content={article.author} />}
      {article?.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
      {article?.section && <meta property="article:section" content={article.section} />}
      {article?.tags?.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

/* ─── Reusable JSON-LD schemas ─── */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Enfactum",
  url: "https://enfactum.com",
  description: "Growth and innovation operating partner for enterprise brands in Southeast Asia. Enfactum brings together strategy, ecosystems, and execution to help enterprise brands scale across the region.",
  foundingDate: "2010",
  areaServed: [
    { "@type": "Place", name: "Southeast Asia" },
    { "@type": "Place", name: "Singapore" },
    { "@type": "Place", name: "Indonesia" },
    { "@type": "Place", name: "Malaysia" },
    { "@type": "Place", name: "India" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 Straits View, #05-01, Marina One East Tower",
    addressLocality: "Singapore",
    postalCode: "018936",
    addressCountry: "SG",
  },
  knowsAbout: [
    "Go-to-market strategy",
    "Partner ecosystems",
    "Channel partner programs",
    "Enterprise AI programs",
    "Innovation ecosystems",
    "Brand and demand generation",
    "Product launch and activation",
    "Build-Operate-Transfer",
    "Southeast Asia market entry",
    "B2B growth strategy",
  ],
  sameAs: ["https://linkedin.com/company/enfactum"],
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Enfactum",
  url: "https://enfactum.com",
  description: "Growth and innovation operating partner for enterprise brands scaling across Southeast Asia.",
};

export const makeServiceSchema = (name: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: `https://enfactum.com${url}`,
  provider: {
    "@type": "Organization",
    name: "Enfactum",
  },
  areaServed: { "@type": "Place", name: "Southeast Asia" },
});

export const makeFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const makeBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `https://enfactum.com${item.url}`,
  })),
});

export default SEOHead;
