import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import { ArrowRight } from "lucide-react";

interface Article {
  title: string;
  category: string;
  author: string;
  authorRole?: string;
  readTime: string;
  teaser: string;
  featured?: boolean;
  date: string;
}

const articles: Article[] = [
  {
    title: "Why Your APAC Strategy Needs a Regional Operating System",
    category: "Operator View",
    author: "Ajay Mohan",
    authorRole: "Managing Partner, GTM Strategy",
    readTime: "7 min read",
    teaser: "Expanding into Asia isn't about replicating your home market playbook. It's about building the infrastructure to operate across 15 markets simultaneously.",
    featured: true,
    date: "March 2026",
  },
  {
    title: "AI Won't Replace Your Marketing. But It Will Expose Your Gaps.",
    category: "Market Signal",
    author: "Sumit Ramchandani",
    authorRole: "Adtech & Martech Practice Head",
    readTime: "6 min read",
    teaser: "Generative AI is already reshaping how buyers discover brands. The question isn't whether to adopt—it's whether your foundation can support it.",
    featured: true,
    date: "February 2026",
  },
  {
    title: "The Partner Ecosystem Advantage in Enterprise Sales",
    category: "Operator View",
    author: "William Gaultier",
    authorRole: "Partner",
    readTime: "8 min read",
    teaser: "Direct sales gets the glory. But in APAC enterprise technology, partners drive 70%+ of revenue. Here's how to build an ecosystem that compounds.",
    date: "February 2026",
  },
  {
    title: "The $3M Question: Why Your Events Aren't Generating Pipeline",
    category: "Field Note",
    author: "Ajay Mohan",
    authorRole: "Managing Partner, GTM Strategy",
    readTime: "8 min read",
    teaser: "Most B2B events generate buzz but not business. Here's how to fix that.",
    date: "January 2026",
  },
  {
    title: "Stop Choosing Between Brand and Performance",
    category: "Operator View",
    author: "Irfan Mulla",
    authorRole: "Managing Director, Indonesia",
    readTime: "6 min read",
    teaser: "The false dichotomy that's holding back your growth—and how to integrate for results.",
    date: "January 2026",
  },
  {
    title: "GEO: The New SEO for AI-First Discovery",
    category: "AI & Innovation",
    author: "Irfan Mulla",
    authorRole: "Managing Director, Indonesia",
    readTime: "7 min read",
    teaser: "When your customers ask ChatGPT instead of Google, does your brand show up? Generative Engine Optimisation is the new imperative.",
    date: "December 2025",
  },
  {
    title: "Southeast Asia Retail: The New Frontier",
    category: "APAC Market",
    author: "Enfactum Team",
    readTime: "10 min read",
    teaser: "Why global brands are rethinking their SEA retail strategy—and what the winners are doing differently.",
    date: "December 2025",
  },
  {
    title: "The Urgency of Now: Why B2B Brands Must Act",
    category: "Growth Strategy",
    author: "Ajay Mohan",
    authorRole: "Managing Partner, GTM Strategy",
    readTime: "5 min read",
    teaser: "Market windows don't wait. Here's why speed matters more than ever in B2B tech.",
    date: "November 2025",
  },
];

const featuredArticles = articles.filter((a) => a.featured);
const regularArticles = articles.filter((a) => !a.featured);

// Group regular articles by category
const groupedByCategory = regularArticles.reduce<Record<string, Article[]>>((acc, article) => {
  if (!acc[article.category]) acc[article.category] = [];
  acc[article.category].push(article);
  return acc;
}, {});

const categoryOrder = ["Growth Strategy", "Ecosystems & Partnerships", "Brand & Demand", "AI & Innovation", "APAC Market"];
const orderedCategories = categoryOrder.filter((c) => groupedByCategory[c]);

const Thinking = () => (
  <PageLayout>
    <HeroSection
      eyebrow="Thinking"
      headline="Perspectives from inside the work."
      description="Original perspectives on growth, marketing, AI, and the APAC market — from people who operate in it every day."
    />

    {/* Featured articles */}
    <section className="py-20 md:py-28">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8">
          {featuredArticles.map((article, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <div className="card-premium h-full group cursor-pointer transition-all duration-500 hover:border-primary/20">
                <span className="eyebrow text-primary">{article.category}</span>
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mt-3 leading-snug group-hover:text-primary transition-colors duration-500">
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
              </div>
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
                <div className="group cursor-pointer border-b border-border pb-6">
                  <h4 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2 font-body leading-relaxed">
                    {article.teaser}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-[12px] font-medium text-foreground/70 font-body">{article.author}</span>
                    <span className="text-xs text-dim">·</span>
                    <span className="text-xs text-dim">{article.readTime}</span>
                    <span className="text-xs text-dim">·</span>
                    <span className="text-xs text-dim">{article.date}</span>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    ))}

    <CTABand headline="Have a growth challenge to discuss?" primaryLabel="Start a conversation" primaryHref="/contact" />
  </PageLayout>
);

export default Thinking;
