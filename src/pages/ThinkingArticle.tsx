import { useParams, Link, Navigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import SEOHead, { makeBlogPostingSchema, makeBreadcrumbSchema } from "@/components/shared/SEOHead";
import { ArrowLeft, Linkedin, Twitter, LinkIcon, Check } from "lucide-react";
import { getArticleBySlug, articles } from "@/data/articles";

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

          {/* Related Articles */}
          <RevealSection delay={0.2}>
            <div className="mt-16 pt-8 border-t border-border/30">
              <h2 className="font-display text-lg font-semibold text-foreground mb-6">
                Continue reading
              </h2>
              <div className="grid gap-5">
                {articles
                  .filter((a) => a.slug !== article.slug)
                  .slice(0, 3)
                  .map((related) => (
                    <Link
                      key={related.slug}
                      to={`/thinking/${related.slug}`}
                      className="group flex gap-4 items-start p-4 -mx-4 rounded-lg hover:bg-secondary/40 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-primary uppercase tracking-wider font-body mb-1">
                          {related.category}
                        </p>
                        <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                          {related.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-1 font-body">
                          {related.teaser}
                        </p>
                      </div>
                      <span className="text-[11px] text-dim whitespace-nowrap mt-1 font-body">
                        {related.readTime}
                      </span>
                    </Link>
                  ))}
              </div>
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
