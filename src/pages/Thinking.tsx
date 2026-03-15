import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import SEOHead from "@/components/shared/SEOHead";
import { ArrowRight } from "lucide-react";
import { articles, type Article } from "@/data/articles";

const categoryFilters = ["All", "Architect View", "Field Note", "Market Signal"] as const;
const themeFilters = [
  "Southeast Asia Growth",
  "Ecosystems & Partnerships",
  "AI & Innovation",
  "Brand & Demand",
  "Launches & Activation",
] as const;

const FilterChip = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-sm text-[11px] font-medium font-body uppercase tracking-wider transition-all duration-500 ${
      active
        ? "bg-primary/15 text-primary border border-primary/30"
        : "text-muted-foreground hover:text-foreground border border-border/40 hover:border-border/60"
    }`}
  >
    {label}
  </button>
);

/* Featured card (large) */
const FeaturedCard = ({ article }: { article: Article }) => (
  <Link to={`/thinking/${article.slug}`} className="block h-full">
    <article className="card-premium h-full group cursor-pointer transition-all duration-500 hover:border-primary/20">
      <div className="flex items-center gap-3 mb-3">
        <span className="eyebrow text-primary">{article.category}</span>
        <span className="text-[10px] text-muted-foreground/60 uppercase tracking-wider font-body">{article.theme}</span>
      </div>
      <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mt-1 leading-snug group-hover:text-primary transition-colors duration-500">
        {article.title}
      </h2>
      <p className="text-sm text-muted-foreground mt-4 leading-relaxed font-body hidden">
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
);

/* Regular card (compact) */
const ArticleCard = ({ article }: { article: Article }) => (
  <Link to={`/thinking/${article.slug}`} className="block">
    <article className="group cursor-pointer border-b border-border pb-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-[10px] text-primary/50 uppercase tracking-wider font-body">{article.theme}</span>
      </div>
      <h4 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
        {article.title}
      </h4>
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
);

const Thinking = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeTheme, setActiveTheme] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = articles;
    if (activeCategory !== "All") {
      result = result.filter((a) => a.category === activeCategory);
    }
    if (activeTheme) {
      result = result.filter((a) => a.theme === activeTheme);
    }
    return result;
  }, [activeCategory, activeTheme]);

  const featured = filtered.filter((a) => a.featured);
  const regular = filtered.filter((a) => !a.featured);

  return (
    <PageLayout>
      <SEOHead
        title="Thinking"
        description="Original Growth Architect-led perspectives on growth, market entry, AI ecosystems, partnerships, and commercial strategy across Southeast Asia — from the people who do the work."
        path="/thinking"
      />
      <HeroSection
        eyebrow="Thinking"
        headline={<>Perspectives from <span className="text-primary">inside the work.</span></>}
        description="Original perspectives on growth, ecosystems, AI, and commercial strategy across Southeast Asia — from people who operate in it every day."
      />

      {/* Filters */}
      <section className="pt-12 pb-4">
        <div className="section-container">
          <RevealSection>
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {categoryFilters.map((cat) => (
                <FilterChip
                  key={cat}
                  label={cat}
                  active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                />
              ))}
            </div>
            {/* Theme chips */}
            <div className="flex flex-wrap gap-2">
              {themeFilters.map((theme) => (
                <FilterChip
                  key={theme}
                  label={theme}
                  active={activeTheme === theme}
                  onClick={() => setActiveTheme(activeTheme === theme ? null : theme)}
                />
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Featured articles */}
      {featured.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-8">
              {featured.map((article, i) => (
                <RevealSection key={article.slug} delay={i * 0.1}>
                  <FeaturedCard article={article} />
                </RevealSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular articles */}
      {regular.length > 0 && (
        <section className="py-16 md:py-20 bg-secondary/20">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-6">
              {regular.map((article, ai) => (
                <RevealSection key={article.slug} delay={ai * 0.06}>
                  <ArticleCard article={article} />
                </RevealSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <section className="py-20">
          <div className="section-container text-center">
            <p className="text-muted-foreground font-body">No articles match the current filters.</p>
          </div>
        </section>
      )}

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
};

export default Thinking;
