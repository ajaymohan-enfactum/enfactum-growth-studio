import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import SEOHead, { makeBlogPostingSchema, makeBreadcrumbSchema } from "@/components/shared/SEOHead";
import { ArrowLeft, Linkedin, Twitter, LinkIcon, Check } from "lucide-react";
import { getArticleBySlug } from "@/data/articles";

const BASE_URL = "https://enfactum.com";

const ShareBar = ({ title, slug }: { title: string; slug: string }) => {
  const [copied, setCopied] = useState(false);
  const url = `${BASE_URL}/thinking/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const btnClass =
    "inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border/30 bg-card/40 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-card/70 transition-all duration-300";

  return (
    <div className="mt-12 pt-8 border-t border-border/30">
      <p className="text-[10px] text-dim uppercase tracking-[0.2em] font-body mb-4">Share this article</p>
      <div className="flex flex-wrap gap-3">
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-3.5 h-3.5" /> LinkedIn
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
          aria-label="Share on Twitter"
        >
          <Twitter className="w-3.5 h-3.5" /> Twitter / X
        </a>
        <button onClick={handleCopy} className={btnClass} aria-label="Copy link">
          {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <LinkIcon className="w-3.5 h-3.5" />}
          {copied ? "Copied!" : "Copy link"}
        </button>
      </div>
    </div>
  );
};

const ThinkingArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) return <Navigate to="/thinking" replace />;

  return (
    <PageLayout>
      <SEOHead
        title={article.title}
        description={article.teaser}
        type="article"
        article={{
          author: article.author,
          publishedTime: article.date,
          section: article.theme,
          tags: [article.category, article.theme],
        }}
        jsonLd={{
          ...makeBlogPostingSchema({
            headline: article.title,
            description: article.teaser,
            datePublished: article.date,
            authorName: article.author,
            authorUrl: "https://enfactum.com/company/leadership",
            url: `/thinking/${article.slug}`,
          }),
          ...makeBreadcrumbSchema([
            { name: "Thinking", url: "/thinking" },
            { name: article.title, url: `/thinking/${article.slug}` },
          ]),
        }}
      />

      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="section-container max-w-3xl mx-auto">
          <RevealSection>
            <Link
              to="/thinking"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10 font-body"
            >
              <ArrowLeft className="w-4 h-4" />
              All thinking
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="eyebrow text-primary">{article.category}</span>
              <span className="text-[10px] text-muted-foreground/60 uppercase tracking-wider font-body">
                {article.theme}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border/30">
              <div className="flex-1">
                <p className="text-[13px] font-medium text-foreground font-body">
                  {article.author}
                </p>
                {article.authorRole && (
                  <p className="text-[11px] text-muted-foreground font-body">
                    {article.authorRole}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-3 text-xs text-dim">
                <span>{article.readTime}</span>
                <span>·</span>
                <span>{article.date}</span>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={0.15}>
            <div className="mt-12 space-y-6">
              {article.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg text-muted-foreground leading-relaxed font-body"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </RevealSection>

          {/* Share buttons */}
          <RevealSection delay={0.15}>
            <ShareBar title={article.title} slug={article.slug} />
          </RevealSection>

          {/* Related links */}
          <RevealSection delay={0.2}>
            <div className="mt-16 pt-8 border-t border-border/30 grid sm:grid-cols-2 gap-6">
              <Link to="/capabilities" className="group block">
                <p className="text-[10px] text-dim uppercase tracking-wider font-body mb-1">
                  Related
                </p>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  Explore capabilities →
                </span>
              </Link>
              <Link to="/work" className="group block">
                <p className="text-[10px] text-dim uppercase tracking-wider font-body mb-1">
                  Related
                </p>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  View selected work →
                </span>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      <CTABand
        headline="Have a growth challenge to discuss?"
        primaryLabel="Start a conversation"
        primaryHref="/contact"
      />
    </PageLayout>
  );
};

export default ThinkingArticle;
