import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import SEOHead from "@/components/shared/SEOHead";
import { ArrowRight } from "lucide-react";
import { articles, type Article } from "@/data/articles";

const featuredArticles = articles.filter((a) => a.featured);
const regularArticles = articles.filter((a) => !a.featured);

const groupedByCategory = regularArticles.reduce<Record<string, Article[]>>((acc, article) => {
  if (!acc[article.category]) acc[article.category] = [];
  acc[article.category].push(article);
  return acc;
}, {});

const categoryOrder = ["Operator View", "Field Note", "Market Signal"];
const orderedCategories = categoryOrder.filter((c) => groupedByCategory[c]);

const Thinking = () => (
  <PageLayout>
    <SEOHead
      title="Thinking — Field Notes on Growth, Ecosystems, and Strategy in Southeast Asia"
      description="Original operator-led perspectives on growth, market entry, AI ecosystems, partnerships, and commercial strategy across Southeast Asia — from the people who do the work."
      path="/thinking"
    />
    <HeroSection
      eyebrow="Thinking"
      headline="Perspectives from inside the work."
      description="Original perspectives on growth, ecosystems, AI, and commercial strategy across Southeast Asia — from people who operate in it every day."
    />

    {/* Featured articles */}
    <section className="py-20 md:py-28">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8">
          {featuredArticles.map((article, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <Link to={`/thinking/${article.slug}`} className="block h-full">
                <article className="card-premium h-full group cursor-pointer transition-all duration-500 hover:border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="eyebrow text-primary">{article.category}</span>
                    <span className="text-[10px] text-muted-foreground/60 uppercase tracking-wider font-body">{article.theme}</span>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mt-1 leading-snug group-hover:text-primary transition-colors duration-500">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed font-body">
                    {article.teaser}
                  </p>
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border/30">
                    <div className="flex-1">
                      <p className="text-[13px] font-medium text-foreground font-body">{article.author}</p>
                      {article.authorRole && (
                        <p className="text-[11px] text-muted-foreground font-body">{article.authorRole}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-dim">
                      <span>{article.readTime}</span>
                      <span>·</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 mt-4 text-[11px] text-primary/60 uppercase tracking-wider font-body group-hover:text-primary transition-colors duration-500">
                    Read article <ArrowRight className="w-3 h-3" />
                  </span>
                </article>
              </Link>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* Thematic bands */}
    {orderedCategories.map((category, bi) => (
      <section key={category} className={`py-16 md:py-20 ${bi % 2 === 0 ? "bg-secondary/20" : ""}`}>
        <div className="section-container">
          <RevealSection>
            <h3 className="eyebrow mb-8">{category}</h3>
          </RevealSection>
          <div className="grid md:grid-cols-2 gap-6">
            {groupedByCategory[category].map((article, ai) => (
              <RevealSection key={ai} delay={ai * 0.08}>
                <Link to={`/thinking/${article.slug}`} className="block">
                  <article className="group cursor-pointer border-b border-border pb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] text-primary/50 uppercase tracking-wider font-body">{article.theme}</span>
                    </div>
                    <h4 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2 font-body leading-relaxed">
                      {article.teaser}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-[12px] font-medium text-foreground/70 font-body">{article.author}</span>
                      {article.authorRole && (
                        <>
                          <span className="text-xs text-dim">·</span>
                          <span className="text-[11px] text-muted-foreground font-body">{article.authorRole}</span>
                        </>
                      )}
                      <span className="text-xs text-dim">·</span>
                      <span className="text-xs text-dim">{article.readTime}</span>
                      <span className="text-xs text-dim">·</span>
                      <span className="text-xs text-dim">{article.date}</span>
                    </div>
                  </article>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    ))}

    {/* Internal links section */}
    <section className="py-16 md:py-20">
      <div className="section-container">
        <RevealSection>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/capabilities" className="group block border-t border-border/30 pt-6">
              <p className="text-[10px] text-dim uppercase tracking-wider font-body mb-2">Related</p>
              <h4 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">Explore capabilities</h4>
              <p className="text-[13px] text-muted-foreground mt-1">See how Enfactum's four capabilities connect strategy to execution.</p>
            </Link>
            <Link to="/work" className="group block border-t border-border/30 pt-6">
              <p className="text-[10px] text-dim uppercase tracking-wider font-body mb-2">Related</p>
              <h4 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">View selected work</h4>
              <p className="text-[13px] text-muted-foreground mt-1">Case studies with measurable outcomes across Southeast Asia.</p>
            </Link>
            <Link to="/partnerships" className="group block border-t border-border/30 pt-6">
              <p className="text-[10px] text-dim uppercase tracking-wider font-body mb-2">Related</p>
              <h4 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">Partnership models</h4>
              <p className="text-[13px] text-muted-foreground mt-1">How Enfactum designs and operates partnership-led growth.</p>
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>

    <CTABand headline="Have a growth challenge to discuss?" primaryLabel="Start a conversation" primaryHref="/contact" />
  </PageLayout>
);

export default Thinking;
