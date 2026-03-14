import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import StaggerGrid from "@/components/shared/StaggerGrid";
import CTABand from "@/components/shared/CTABand";
import SEOHead, { makeFAQSchema, makeBreadcrumbSchema } from "@/components/shared/SEOHead";
import { ArrowRight } from "lucide-react";

const nodes = [
  {
    city: "Singapore",
    type: "Strategic Hub",
    desc: "Headquarters and strategic centre. Client relationships, capability leadership, and regional oversight.",
    capabilities: ["Strategy", "Client leadership", "Innovation", "Regional coordination"],
    address: ["Enfactum Pte. Ltd.", "7 Straits View, #05-01", "Marina One East Tower", "Singapore 018936"],
  },
  {
    city: "India",
    type: "Scale & Execution Engine",
    desc: "Deep operations and delivery talent. Creative production, technology, demand operations, and programme management.",
    capabilities: ["Creative production", "Technology", "Demand ops", "Programme management"],
    address: ["304, 3rd Floor, Tower T1", "Assotech Business, Cresterra", "Plot No. 22, Sector 135 Expressway", "Noida 201304, India"],
  },
  {
    city: "Malaysia",
    type: "Market & Delivery Node",
    desc: "Local market expertise and execution capability for Malaysia and broader ASEAN.",
    capabilities: ["Market execution", "Events & activations", "Partner management"],
    address: ["498-3-7, 3rd Floor", "Wisma Indah", "Jalan Tun Razak", "Kuala Lumpur, Malaysia"],
  },
  {
    city: "Indonesia",
    type: "Market & Delivery Node",
    desc: "Indonesia market presence and local execution for Southeast Asia's largest economy.",
    capabilities: ["Market entry", "Local partnerships", "Consumer insights"],
    address: ["Enfactum Indonesia", "Cyber 2 Tower, 17th Floor", "Jl. H. R. Rasuna Said, Kuningan", "Selatan, Jakarta 12950, Indonesia"],
  },
  {
    city: "United States",
    type: "International Presence",
    desc: "US market bridge for enterprise brands expanding between North America and Southeast Asia.",
    capabilities: ["Strategic partnerships", "Client development", "Global bridge"],
    address: ["Rockefeller Center", "45 Rockefeller Plaza, Suite #2000", "New York, NY 10111", "United States"],
  },
];

const faqs = [
  { question: "Why does Enfactum use regional nodes instead of traditional offices?", answer: "Each node has a distinct operational role — strategy from Singapore, scale through India, market activation in Malaysia and Indonesia. This structure matches how growth work actually flows across Southeast Asia, rather than duplicating resources in every country." },
  { question: "How does Enfactum deliver across markets it doesn't have a physical node in?", answer: "Beyond core nodes, Enfactum delivers programmes across Thailand, Vietnam, Philippines, and broader ASEAN through established partner networks, project-based specialist teams, and its regional coordination infrastructure based in Singapore." },
  { question: "What is the role of the India node?", answer: "India serves as Enfactum's Scale & Execution Engine — housing creative production, technology, demand operations, and programme management talent. This gives Enfactum deep operational capability at scale while maintaining strategic direction from Singapore." },
];

const RegionalNodes = () => (
  <PageLayout>
    <SEOHead
      title="Regional Nodes — Operating Network Across Southeast Asia"
      description="Enfactum's regional operating network spans Singapore, India, Malaysia, Indonesia, and the USA — each node with a distinct role in delivering growth programmes across Southeast Asia."
      path="/company/regional-nodes"
      jsonLd={{
        ...makeBreadcrumbSchema([
          { name: "Company", url: "/company" },
          { name: "Regional Nodes", url: "/company/regional-nodes" },
        ]),
        ...makeFAQSchema(faqs),
      }}
    />
    <HeroSection
      eyebrow="Regional Nodes"
      headline={<>An operating network built for <span className="text-primary">Southeast Asia.</span></>}
      description="Not offices. Operating nodes — each with a distinct role in how we deliver growth across the region."
    />

    <section className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="Network"
          headline="Strategic hub. Scale engine. Market nodes."
          description="Our footprint is designed for how work actually flows across Southeast Asia — strategy set in Singapore, scale built through India, markets activated locally."
        />
        <StaggerGrid className="grid md:grid-cols-2 gap-6 mt-14" staggerDelay={0.12}>
          {nodes.map((node, i) => (
            <div key={i} className="card-premium h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="eyebrow">{node.type}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">{node.city}</h3>
                <p className="text-sm text-muted-foreground mt-3">{node.desc}</p>
                <div className="mt-4 space-y-0.5">
                  {node.address.map((line, li) => (
                    <p key={li} className="text-[12px] text-muted-foreground/70 font-body leading-relaxed">{line}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {node.capabilities.map((cap) => (
                    <span key={cap} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">{cap}</span>
                  ))}
                </div>
            </div>
          ))}
        </StaggerGrid>
      </div>
    </section>

    <section className="py-16 md:py-20 bg-secondary/20">
      <div className="section-container">
        <RevealSection>
          <div className="card-premium text-center max-w-2xl mx-auto">
            <h3 className="font-display text-lg font-semibold text-foreground">Broader reach</h3>
            <p className="text-sm text-muted-foreground mt-3">
              Beyond our core nodes, Enfactum delivers programmes across Thailand, Vietnam, Philippines,
              and broader ASEAN through partner networks and project-based teams.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-20 md:py-28">
      <div className="section-container">
        <RevealSection>
          <p className="eyebrow mb-6">Common questions</p>
          <h2 className="headline-md max-w-2xl">About Enfactum's regional growth architecture.</h2>
        </RevealSection>
        <div className="mt-12 space-y-0 max-w-3xl">
          {faqs.map((faq, i) => (
            <RevealSection key={i} delay={i * 0.06}>
              <div className="border-b border-border/20 py-8">
                <h3 className="font-display text-[15px] font-semibold text-foreground leading-snug">{faq.question}</h3>
                <p className="text-[14px] text-muted-foreground mt-3 leading-relaxed">{faq.answer}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* Cross-links */}
    <section className="section-alt py-16 md:py-20">
      <div className="section-container">
        <RevealSection>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/company" className="group block border-t border-border/30 pt-6">
              <p className="text-[10px] text-dim uppercase tracking-wider font-body mb-2">Explore</p>
              <h4 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">About Enfactum</h4>
              <p className="text-[13px] text-muted-foreground mt-1">Our story, leadership, and architect bench.</p>
            </Link>
            <Link to="/company/leadership" className="group block border-t border-border/30 pt-6">
              <p className="text-[10px] text-dim uppercase tracking-wider font-body mb-2">Explore</p>
              <h4 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">Leadership team</h4>
              <p className="text-[13px] text-muted-foreground mt-1">Meet the Growth Architects behind Enfactum's capabilities.</p>
            </Link>
            <Link to="/contact" className="group block border-t border-border/30 pt-6">
              <p className="text-[10px] text-dim uppercase tracking-wider font-body mb-2">Explore</p>
              <h4 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">Get in touch</h4>
              <p className="text-[13px] text-muted-foreground mt-1">Discuss growth in your target market.</p>
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>

    <CTABand headline="Let's discuss your market." primaryLabel="Start a conversation" primaryHref="/contact" />
  </PageLayout>
);

export default RegionalNodes;
