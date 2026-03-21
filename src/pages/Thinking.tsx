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
    className={`px-3.5 py-1.5 rounded-sm text-[10px] font-medium font-body uppercase tracking-[0.15em] transition-all duration-500 ${
      active
        ? "bg-primary/10 text-primary/80 border border-primary/20"
        : "text-foreground/20 hover:text-foreground/40 border border-transparent hover:border-border/20"
    }`}
  >
    {label}
  </button>
);

/* ═══ Lead article — editorial hero ═══ */
const LeadArticle = ({ article }: { article: Article }) => (
  <Link to={`/thinking/${article.slug}`} className="block group">
    <article className="relative">
      {/* Large decorative number */}
      <span className="absolute -top-4 right-0 text-[120px] md:text-[180px] font-display font-bold text-foreground/[0.015] leading-none select-none pointer-events-none hidden md:block">
        01
      </span>
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 relative z-10">
        <div className="md:col-span-7">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] text-primary/50 uppercase tracking-[0.2em] font-body font-medium">
              {article.category}
            </span>
            <span className="text-foreground/10">—</span>
            <span className="text-[10px] text-foreground/15 uppercase tracking-[0.15em] font-body">
              {article.theme}
            </span>
          </div>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-display font-bold text-foreground leading-[1.08] tracking-[-0.025em] group-hover:text-primary transition-colors duration-500">
            {article.title}
          </h2>
          <p className="text-[15px] text-foreground/35 mt-6 leading-[1.8] max-w-lg font-body">
            {article.teaser}
          </p>
          <span className="inline-flex items-center gap-1.5 mt-8 text-[11px] text-primary/50 uppercase tracking-[0.15em] font-body font-medium group-hover:text-primary/80 group-hover:gap-2.5 transition-all duration-500">
            Read article <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
          </span>
        </div>
        <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end">
          <div className="border-l-2 border-primary/10 pl-6 group-hover:border-primary/25 transition-colors duration-500">
            <p className="text-[14px] font-medium text-foreground/60 font-body">{article.author}</p>
            {article.authorRole && (
              <p className="text-[11px] text-foreground/20 font-body mt-0.5">{article.authorRole}</p>
            )}
            <div className="flex items-center gap-3 mt-5 text-[10px] text-foreground/15 font-body">
              <span>{article.readTime}</span>
              <span>·</span>
              <span>{article.date}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  </Link>
);

/* ═══ Secondary featured — mid-weight ═══ */
const SecondaryArticle = ({ article, index }: { article: Article; index: number }) => (
  <Link to={`/thinking/${article.slug}`} className="block group">
    <article className="py-8 border-t border-border/10 group-hover:border-primary/10 transition-colors duration-500">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[10px] text-primary/40 uppercase tracking-[0.2em] font-body font-medium">
          {article.category}
        </span>
        <span className="text-foreground/8">—</span>
        <span className="text-[10px] text-foreground/12 uppercase tracking-[0.15em] font-body">
          {article.theme}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold text-foreground leading-[1.2] group-hover:text-primary transition-colors duration-500 max-w-md">
        {article.title}
      </h3>
      <div className="flex items-center gap-3 mt-4">
        <span className="text-[12px] font-medium text-foreground/40 font-body">{article.author}</span>
        <span className="text-[10px] text-foreground/10">·</span>
        <span className="text-[10px] text-foreground/15 font-body">{article.readTime}</span>
        <span className="text-[10px] text-foreground/10">·</span>
        <span className="text-[10px] text-foreground/15 font-body">{article.date}</span>
      </div>
    </article>
  </Link>
);

/* ═══ Archive row — minimal ═══ */
const ArchiveRow = ({ article }: { article: Article }) => (
  <Link to={`/thinking/${article.slug}`} className="block group">
    <article className="grid md:grid-cols-12 gap-4 py-5 border-b border-border/8 group-hover:border-primary/10 transition-colors duration-500 group-hover:pl-1">
      <div className="md:col-span-2">
        <span className="text-[10px] text-primary/30 uppercase tracking-[0.15em] font-body">{article.category}</span>
      </div>
      <div className="md:col-span-6">
        <h4 className="font-display text-[14px] font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-500">
          {article.title}
        </h4>
      </div>
      <div className="md:col-span-2">
        <span className="text-[11px] text-foreground/20 font-body">{article.author}</span>
      </div>
      <div className="md:col-span-2 flex items-center justify-end gap-3">
        <span className="text-[10px] text-foreground/12 font-body">{article.readTime}</span>
        <span className="text-[10px] text-foreground/12 font-body">{article.date}</span>
        <ArrowRight className="w-3 h-3 text-foreground/0 group-hover:text-primary/50 transition-all duration-500" />
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
  const lead = featured[0] ?? null;
  const secondary = featured.slice(1);

  return (
    <PageLayout>
      <SEOHead
        title="Thinking"
        description="Original Growth Architect-led perspectives on growth, market entry, AI ecosystems, partnerships, and commercial strategy across Southeast Asia."
        path="/thinking"
      />
      <HeroSection
        eyebrow="Thinking"
        headline={<>Perspectives from <span className="text-primary">inside the work.</span></>}
        description="Original perspectives on growth, ecosystems, AI, and commercial strategy across Southeast Asia — from people who operate in it every day."
        variant="editorial"
      />

      {/* ═══ FILTERS ═══ */}
      <section className="pt-10 pb-2">
        <div className="section-container">
          <RevealSection blur>
            <div className="flex flex-wrap items-center gap-1.5 mb-3">
              {categoryFilters.map((cat) => (
                <FilterChip
                  key={cat}
                  label={cat}
                  active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                />
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
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

      {/* ═══ LEAD ARTICLE — dramatic editorial hero ═══ */}
      {lead && (
        <section className="py-24 md:py-32 relative overflow-hidden">
          {/* Journal-like atmosphere */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 50% 60% at 30% 50%, hsl(210 40% 10% / 0.08), transparent 70%)',
          }} />
          {/* Left editorial accent */}
          <div className="absolute top-[15%] bottom-[15%] left-[5%] w-px bg-gradient-to-b from-transparent via-primary/[0.06] to-transparent hidden md:block" />
          <div className="section-container relative z-10">
            <RevealSection blur>
              <LeadArticle article={lead} />
            </RevealSection>
          </div>
        </section>
      )}

      {/* ═══ SECONDARY FEATURED — with visual separator ═══ */}
      {secondary.length > 0 && (
        <section className="py-16 md:py-24 bg-[hsl(var(--section-alt))] relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/[0.06] to-transparent" />
          <div className="section-container">
            <RevealSection blur>
              <div className="flex items-center gap-4 mb-12">
                <p className="eyebrow">Featured</p>
                <div className="flex-1 h-px bg-border/10" />
                <span className="text-[10px] text-foreground/12 font-body">{secondary.length} articles</span>
              </div>
            </RevealSection>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
              {secondary.map((article, i) => (
                <RevealSection key={article.slug} delay={i * 0.08} blur>
                  <SecondaryArticle article={article} index={i} />
                </RevealSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ ARCHIVE — structured rows with atmosphere ═══ */}
      {regular.length > 0 && (
        <section className="py-24 md:py-32 relative">
          {/* Subtle vertical guides */}
          <div className="absolute top-0 bottom-0 left-[16.66%] w-px bg-gradient-to-b from-transparent via-border/[0.03] to-transparent hidden lg:block" />
          <div className="absolute top-0 bottom-0 left-[66.66%] w-px bg-gradient-to-b from-transparent via-border/[0.03] to-transparent hidden lg:block" />
          <div className="section-container relative z-10">
            <RevealSection blur>
              <div className="flex items-end justify-between mb-12">
                <p className="eyebrow">Archive</p>
                <span className="text-[10px] text-foreground/12 font-body">{regular.length} articles</span>
              </div>
            </RevealSection>

            {/* Column headers — desktop */}
            <div className="hidden md:grid md:grid-cols-12 gap-4 pb-3 border-b border-border/10 mb-0">
              <div className="md:col-span-2">
                <span className="text-[9px] text-foreground/10 uppercase tracking-[0.2em] font-body">Type</span>
              </div>
              <div className="md:col-span-6">
                <span className="text-[9px] text-foreground/10 uppercase tracking-[0.2em] font-body">Title</span>
              </div>
              <div className="md:col-span-2">
                <span className="text-[9px] text-foreground/10 uppercase tracking-[0.2em] font-body">Author</span>
              </div>
              <div className="md:col-span-2 flex justify-end">
                <span className="text-[9px] text-foreground/10 uppercase tracking-[0.2em] font-body">Details</span>
              </div>
            </div>

            <div>
              {regular.map((article, i) => (
                <RevealSection key={article.slug} delay={i * 0.04}>
                  <ArchiveRow article={article} />
                </RevealSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <section className="py-24">
          <div className="section-container text-center">
            <p className="text-foreground/20 font-body text-sm">No articles match the current filters.</p>
          </div>
        </section>
      )}

      {/* ═══ CROSS-LINKS ═══ */}
      <section className="py-20 bg-[hsl(var(--section-alt))] relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />
        <div className="section-container">
          <RevealSection blur>
            <p className="eyebrow mb-12">Explore further</p>
          </RevealSection>
          <div className="space-y-0">
            {[
              { title: "Capabilities", desc: "See how Enfactum's four capabilities connect strategy to execution.", href: "/capabilities" },
              { title: "Selected work", desc: "Case studies with measurable outcomes across Southeast Asia.", href: "/work" },
              { title: "Partnership models", desc: "How Enfactum designs and operates partnership-led growth.", href: "/partnerships" },
            ].map((link, i) => (
              <RevealSection key={i} delay={i * 0.04}>
                <Link to={link.href} className="group block">
                  <div className="grid md:grid-cols-12 gap-4 py-6 border-b border-border/10 group-hover:border-primary/10 transition-colors duration-700">
                    <div className="md:col-span-3">
                      <span className="font-display text-[14px] font-semibold text-foreground group-hover:text-primary transition-colors duration-500">
                        {link.title}
                      </span>
                    </div>
                    <div className="md:col-span-7">
                      <span className="text-[12px] text-foreground/25">{link.desc}</span>
                    </div>
                    <div className="md:col-span-2 flex items-center justify-end">
                      <ArrowRight className="w-3.5 h-3.5 text-foreground/8 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-500" />
                    </div>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <CTABand headline="Have a growth challenge to discuss?" primaryLabel="Start a conversation" primaryHref="/contact" />
    </PageLayout>
  );
};

export default Thinking;
