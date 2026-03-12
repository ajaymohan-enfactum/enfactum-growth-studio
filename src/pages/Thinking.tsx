import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import { ArrowRight } from "lucide-react";

const featuredArticle = {
  title: "The ASEAN growth paradox: why more investment doesn't always mean more traction",
  category: "Growth Strategy",
  date: "March 2026",
  excerpt: "Enterprise brands pour resources into Southeast Asia expecting linear returns. The reality is more nuanced — and more rewarding for those who understand the operating system underneath.",
};

const thematicBands = [
  {
    theme: "Southeast Asia Growth",
    articles: [
      { title: "Market entry isn't a launch. It's an ecosystem play.", date: "Feb 2026" },
      { title: "What global brands still get wrong about ASEAN consumers", date: "Jan 2026" },
    ],
  },
  {
    theme: "Ecosystems & Partnerships",
    articles: [
      { title: "The partner ecosystem advantage in enterprise sales", date: "Feb 2026" },
      { title: "Channel programmes that actually scale: lessons from the field", date: "Dec 2025" },
    ],
  },
  {
    theme: "AI & Innovation",
    articles: [
      { title: "From pilot to platform: scaling AI ventures in SEA", date: "Jan 2026" },
      { title: "Why corporate venture needs an operating partner, not just capital", date: "Nov 2025" },
    ],
  },
  {
    theme: "Brand & Demand",
    articles: [
      { title: "Performance marketing in SEA: beyond the ROAS trap", date: "Dec 2025" },
      { title: "Influencer ecosystems as demand infrastructure", date: "Oct 2025" },
    ],
  },
];

const Thinking = () => (
  <PageLayout>
    <HeroSection
      eyebrow="Thinking"
      headline="Field intelligence from the front lines of Southeast Asian growth."
      description="Not thought leadership for its own sake. Observations, frameworks, and perspectives earned through execution."
    />

    {/* Featured */}
    <section className="py-20 md:py-28">
      <div className="section-container">
        <RevealSection>
          <div className="card-premium max-w-4xl">
            <span className="eyebrow">{featuredArticle.category}</span>
            <h2 className="headline-md mt-3">{featuredArticle.title}</h2>
            <p className="body-md mt-4">{featuredArticle.excerpt}</p>
            <div className="flex items-center gap-3 mt-6">
              <span className="text-xs text-dim">{featuredArticle.date}</span>
              <span className="text-sm text-primary font-medium flex items-center gap-1">Read <ArrowRight className="w-3 h-3" /></span>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>

    {/* Thematic bands */}
    {thematicBands.map((band, bi) => (
      <section key={bi} className={`py-16 md:py-20 ${bi % 2 === 0 ? "bg-secondary/20" : ""}`}>
        <div className="section-container">
          <RevealSection>
            <h3 className="eyebrow mb-8">{band.theme}</h3>
          </RevealSection>
          <div className="grid md:grid-cols-2 gap-6">
            {band.articles.map((article, ai) => (
              <RevealSection key={ai} delay={ai * 0.08}>
                <div className="group cursor-pointer border-b border-border pb-6">
                  <h4 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h4>
                  <span className="text-xs text-dim mt-2 block">{article.date}</span>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    ))}

    <CTABand headline="Have a growth challenge to discuss?" primaryLabel="Start a conversation" />
  </PageLayout>
);

export default Thinking;
