import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import SEOHead from "@/components/shared/SEOHead";
import { ArrowRight } from "lucide-react";

interface Article {
  title: string;
  category: string;
  theme: string;
  author: string;
  authorRole?: string;
  readTime: string;
  teaser: string;
  featured?: boolean;
  date: string;
}

const articles: Article[] = [
  {
    title: "Southeast Asia Is Not One Market. Stop Planning It Like One.",
    category: "Operator View",
    theme: "Southeast Asia Growth",
    author: "Ajay Mohan",
    authorRole: "Founder & Managing Partner",
    readTime: "8 min read",
    teaser: "Nearly 700 million people, ten countries, and a digital economy past $300 billion — but that aggregate figure conceals as much as it reveals. The companies that win treat Southeast Asia as a connected set of very different realities.",
    featured: true,
    date: "March 2026",
  },
  {
    title: "In B2B, Your Buyer Already Trusts Someone Else.",
    category: "Operator View",
    theme: "Ecosystems & Partnerships",
    author: "William Gaultier",
    authorRole: "Partner",
    readTime: "7 min read",
    teaser: "Your buyer is looking for signals. Who already works with you? Who is willing to bring you into the room? In Southeast Asia, those signals carry as much weight as the message itself.",
    featured: true,
    date: "March 2026",
  },
  {
    title: "Imported Playbooks Break Fast in Southeast Asia.",
    category: "Field Note",
    theme: "Southeast Asia Growth",
    author: "Ajay Mohan",
    authorRole: "Founder & Managing Partner",
    readTime: "7 min read",
    teaser: "A playbook that works in the US or Europe can fall apart surprisingly fast here. Not because it was bad — but because the environment changed. Replication assumes the market will bend. Translation builds a model that can move through the market.",
    date: "February 2026",
  },
  {
    title: "Most Enterprise AI Programs Don't Have an AI Problem. They Have an Operating Model Problem.",
    category: "Operator View",
    theme: "AI & Innovation",
    author: "Ajay Mohan",
    authorRole: "Founder & Managing Partner",
    readTime: "7 min read",
    teaser: "Southeast Asia is not short of AI investment or intent. And yet enterprise AI adoption sits at 59% — well behind North America and Europe. The gap is not a technology gap. It is an operating model gap.",
    date: "February 2026",
  },
  {
    title: "Partner Programs Don't Fail from Lack of Intent. They Fail from Lack of Design.",
    category: "Operator View",
    theme: "Ecosystems & Partnerships",
    author: "William Gaultier",
    authorRole: "Partner",
    readTime: "7 min read",
    teaser: "Most partner programmes begin with the right intent. Six months later, very little has moved. The programme was never properly designed. Intent gets it announced. Design gets it moving.",
    date: "February 2026",
  },
  {
    title: "Market Entry in Southeast Asia Is Really a System Design Problem.",
    category: "Operator View",
    theme: "Southeast Asia Growth",
    author: "Irfan Mulla",
    authorRole: "Managing Director, Indonesia",
    readTime: "7 min read",
    teaser: "A lot of companies treat market entry like a campaign. That is why so many efforts stall after the first burst. Launch creates noise. Systems create traction.",
    date: "January 2026",
  },
  {
    title: "AI Ecosystems Matter More Than AI Pilots.",
    category: "Operator View",
    theme: "AI & Innovation",
    author: "Ajay Mohan",
    authorRole: "Founder & Managing Partner",
    readTime: "7 min read",
    teaser: "What separates companies that move forward from the ones that stall is not the number of pilots they run. It is the quality of the system around those pilots.",
    date: "January 2026",
  },
  {
    title: "Distribution Is Not a Channel. It Is a Strategic Capability.",
    category: "Operator View",
    theme: "Southeast Asia Growth",
    author: "Irfan Mulla",
    authorRole: "Managing Director, Indonesia",
    readTime: "7 min read",
    teaser: "In Southeast Asia, the question is not just whether you have a route to market. It is whether your route to market can actually move.",
    date: "January 2026",
  },
  {
    title: "Stop Choosing Between Brand and Performance.",
    category: "Operator View",
    theme: "Brand & Demand",
    author: "Irfan Mulla",
    authorRole: "Managing Director, Indonesia",
    readTime: "6 min read",
    teaser: "The market does not experience brand and performance separately. It experiences them as one commercial impression. The companies that grow best stop making the market choose between the two.",
    date: "December 2025",
  },
  {
    title: "Events Don't Need More Energy. They Need More Commercial Intent.",
    category: "Field Note",
    theme: "Launches & Activation",
    author: "Ajay Mohan",
    authorRole: "Founder & Managing Partner",
    readTime: "6 min read",
    teaser: "Most events are not short on effort. They are short on clarity. An event should not be judged only by turnout or applause. It should be judged by what it makes easier afterwards.",
    date: "December 2025",
  },
  {
    title: "The Real Value of Corporate Innovation Is Commercial, Not Cosmetic.",
    category: "Operator View",
    theme: "AI & Innovation",
    author: "Ajay Mohan",
    authorRole: "Founder & Managing Partner",
    readTime: "7 min read",
    teaser: "When innovation programmes lose sight of commercial purpose, they drift into theatre. Lots of activity. Very little consequence. The best programmes look less like showcases and more like commercial engines.",
    date: "November 2025",
  },
  {
    title: "CAC Looks Different When Trust Travels Through Ecosystems.",
    category: "Field Note",
    theme: "Ecosystems & Partnerships",
    author: "William Gaultier",
    authorRole: "Partner",
    readTime: "7 min read",
    teaser: "When trust travels through ecosystems, CAC is not just a media problem. It becomes a design problem. Ecosystem-driven acquisition creates stronger economics over time.",
    date: "November 2025",
  },
  {
    title: "A Product Launch Should Create Movement, Not Just Attention.",
    category: "Field Note",
    theme: "Launches & Activation",
    author: "Ajay Mohan",
    authorRole: "Founder & Managing Partner",
    readTime: "6 min read",
    teaser: "A launch is not successful because people noticed it. It is successful because something moved afterwards — pipeline, partner confidence, market perception, distribution momentum.",
    date: "October 2025",
  },
  {
    title: "In a Zero-Click World, Brands Must Become the Answer.",
    category: "Market Signal",
    theme: "Brand & Demand",
    author: "Irfan Mulla",
    authorRole: "Managing Director, Indonesia",
    readTime: "7 min read",
    teaser: "In a zero-click world, it is no longer enough to be present. You need to be the answer. The winners will be the brands most clearly associated with a useful answer.",
    date: "October 2025",
  },
  {
    title: "The Best Market Activations Don't Feel Like Campaigns. They Feel Like Entry Points.",
    category: "Field Note",
    theme: "Launches & Activation",
    author: "Ajay Mohan",
    authorRole: "Managing Partner, GTM Strategy",
    readTime: "6 min read",
    teaser: "Entry points keep opening doors long after the moment has passed. The best activations connect to follow-up systems — giving buyers a reason to engage and partners something to act on.",
    date: "October 2025",
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
