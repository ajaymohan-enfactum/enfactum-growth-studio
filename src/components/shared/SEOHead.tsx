import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  type?: "website" | "article";
  /** Custom OG image path (relative to BASE_URL). Defaults to /og-image.png */
  ogImage?: string;
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
const SEOHead = ({ title, description, type = "website", ogImage, article, jsonLd }: SEOHeadProps) => {
  const { pathname } = useLocation();
  // Normalize: remove trailing slash except for root
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonical = `${BASE_URL}${normalizedPath}`;

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
      <meta property="og:image" content={`${BASE_URL}${ogImage || "/og-image.png"}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}${ogImage || "/og-image.png"}`} />

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
  logo: "https://enfactum.com/og-image.png",
  description: "Growth and innovation operating partner for enterprise brands in Southeast Asia. Enfactum brings together strategy, ecosystems, and execution to help enterprise brands scale across the region.",
  foundingDate: "2010",
  areaServed: [
    { "@type": "Place", name: "Southeast Asia" },
    { "@type": "Place", name: "Singapore" },
    { "@type": "Place", name: "Indonesia" },
    { "@type": "Place", name: "Malaysia" },
    { "@type": "Place", name: "India" },
    { "@type": "Place", name: "APAC" },
    { "@type": "Place", name: "USA" },
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

export const makeBlogPostingSchema = ({
  headline,
  description,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
  url,
  image,
}: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
  url: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline,
  description,
  datePublished,
  dateModified: dateModified || datePublished,
  author: {
    "@type": "Person",
    name: authorName,
    ...(authorUrl ? { url: authorUrl } : {}),
  },
  publisher: {
    "@type": "Organization",
    name: "Enfactum",
    url: "https://enfactum.com",
    logo: {
      "@type": "ImageObject",
      url: "https://enfactum.com/favicon-192.png",
    },
  },
  url: `https://enfactum.com${url}`,
  image: image || "https://enfactum.com/og-image.png",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://enfactum.com${url}`,
  },
});

export default SEOHead;
