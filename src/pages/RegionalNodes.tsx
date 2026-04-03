import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import SEOHead, { makeFAQSchema, makeBreadcrumbSchema } from "@/components/shared/SEOHead";
import RegionalNodesMap from "@/components/shared/RegionalNodesMap";
import { ArrowRight } from "lucide-react";

const nodes = [
  {
    city: "Singapore",
    type: "Strategic Hub",
    desc: "Headquarters and strategic centre. Client relationships, capability leadership, and regional oversight.",
    capabilities: ["Strategy", "Client leadership", "Innovation", "Regional coordination"],
    address: ["Enfactum Pte. Ltd.", "7 Straits View, #05-01", "Marina One East Tower", "Singapore 018936"],
    prominent: true,
  },
  {
    city: "India",
    type: "Scale & Execution Engine",
    desc: "Deep operations and delivery talent. Creative production, technology, demand operations, and programme management.",
    capabilities: ["Creative production", "Technology", "Demand ops", "Programme management"],
    address: ["304, 3rd Floor, Tower T1", "Assotech Business, Cresterra", "Plot No. 22, Sector 135 Expressway", "Noida 201304, India"],
    prominent: true,
  },
  {
    city: "Malaysia",
    type: "Market & Delivery Node",
    desc: "Local market expertise and execution capability for Malaysia and broader ASEAN.",
    capabilities: ["Market execution", "Events & activations", "Partner management"],
    address: ["498-3-7, 3rd Floor", "Wisma Indah", "Jalan Tun Razak", "Kuala Lumpur, Malaysia"],
    prominent: false,
  },
  {
    city: "Indonesia",
    type: "Market & Delivery Node",
    desc: "Indonesia market presence and local execution for Southeast Asia's largest economy.",
    capabilities: ["Market entry", "Local partnerships", "Consumer insights"],
    address: ["Enfactum Indonesia", "Cyber 2 Tower, 17th Floor", "Jl. H. R. Rasuna Said, Kuningan", "Selatan, Jakarta 12950, Indonesia"],
    prominent: false,
  },
  {
    city: "United States",
    type: "Strategic Bridge",
    desc: "US market bridge for enterprise brands expanding between North America and Southeast Asia.",
    capabilities: ["Strategic partnerships", "Client development", "Global bridge"],
    address: ["Rockefeller Center", "45 Rockefeller Plaza, Suite #2000", "New York, NY 10111", "United States"],
    prominent: false,
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
      title="Regional Nodes"
      description="Enfactum's regional operating network spans Singapore, India, Malaysia, Indonesia, and the USA — each node with a distinct role in delivering growth programmes across Southeast Asia."
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

    {/* ═══ LIVE NETWORK MAP ═══ */}
    <section className="py-16 md:py-24">
      <div className="section-container">
        <RevealSection blur>
          <div className="max-w-lg mb-12">
            <p className="eyebrow mb-5">Network</p>
            <h2 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.02em]">
              Strategic hub. Scale engine. Market nodes.
            </h2>
            <p className="text-[13px] text-foreground/30 mt-4 leading-relaxed font-body max-w-md">
              Our footprint is designed for how work actually flows across Southeast Asia — strategy set in Singapore, scale built through India, markets activated locally.
            </p>
          </div>
        </RevealSection>

        <RegionalNodesMap />
      </div>
    </section>

    {/* ═══ NODE DETAIL — Prominent nodes ═══ */}
    <section className="py-24 md:py-32 bg-[#0B1121] relative overflow-hidden">
      {/* Architectural accent */}
      <div className="absolute top-0 bottom-0 left-[50%] w-px bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent hidden md:block" />

      <div className="section-container relative z-10">
        <RevealSection blur>
          <p className="eyebrow mb-16">Core nodes</p>
        </RevealSection>

        {/* Singapore & India — prominent editorial layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {nodes.filter(n => n.prominent).map((node, i) => (
            <RevealSection key={i} delay={i * 0.1} blur>
              <div className="relative p-8 md:p-10 rounded-sm border border-border/10 bg-background/20 backdrop-blur-sm h-full">
                {/* Stat-style type indicator */}
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-3xl md:text-4xl font-display font-bold text-foreground/80 leading-none tracking-tight">
                    {node.city}
                  </span>
                </div>
                <span className="text-[10px] text-primary/50 uppercase tracking-[0.2em] font-body">
                  {node.type}
                </span>
                <div className="w-8 h-px bg-primary/20 my-5" />
                <p className="text-[14px] text-foreground/35 leading-[1.8] max-w-sm">{node.desc}</p>

                {/* Capabilities */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {node.capabilities.map((cap) => (
                    <span key={cap} className="text-[10px] px-2.5 py-1 rounded-sm bg-foreground/[0.03] text-foreground/25 border border-foreground/[0.05] font-body">
                      {cap}
                    </span>
                  ))}
                </div>

                {/* Address */}
                <div className="mt-8 pt-6 border-t border-foreground/[0.04]">
                  {node.address.map((line, li) => (
                    <p key={li} className="text-[11px] text-foreground/15 font-body leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Malaysia, Indonesia, USA — compact rows */}
        <div className="grid md:grid-cols-3 gap-6">
          {nodes.filter(n => !n.prominent).map((node, i) => (
            <RevealSection key={i} delay={0.25 + i * 0.08} blur>
              <div className="py-8 border-t border-foreground/[0.06]">
                <span className="text-[10px] text-primary/40 uppercase tracking-[0.2em] font-body">{node.type}</span>
                <h3 className="font-display text-lg font-bold text-foreground mt-2">{node.city}</h3>
                <p className="text-[12px] text-foreground/25 mt-3 leading-relaxed">{node.desc}</p>
                <div className="mt-5">
                  {node.address.map((line, li) => (
                    <p key={li} className="text-[10px] text-foreground/12 font-body leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ BROADER REACH ═══ */}
    <section className="py-20 md:py-24">
      <div className="section-container">
        <RevealSection blur>
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Broader reach</p>
            <h3 className="text-lg font-display font-semibold text-foreground">Beyond the core network.</h3>
            <p className="text-[13px] text-foreground/30 mt-4 leading-[1.8] max-w-lg">
              Beyond our core nodes, Enfactum delivers programmes across Thailand, Vietnam, Philippines,
              and broader ASEAN through established partner networks and project-based specialist teams.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>

    {/* ═══ FAQ ═══ */}
    <section className="py-20 md:py-28 bg-[hsl(var(--section-alt))]">
      <div className="section-container">
        <RevealSection blur>
          <p className="eyebrow mb-5">Common questions</p>
          <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-display font-bold text-foreground leading-[1.1] tracking-[-0.01em] max-w-xl">
            About Enfactum's regional growth architecture.
          </h2>
        </RevealSection>
        <div className="mt-14 space-y-0 max-w-2xl">
          {faqs.map((faq, i) => (
            <RevealSection key={i} delay={i * 0.06} blur>
              <div className="border-t border-border/15 py-8">
                <h3 className="font-display text-[14px] font-semibold text-foreground leading-snug">{faq.question}</h3>
                <p className="text-[13px] text-foreground/30 mt-3 leading-[1.8]">{faq.answer}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ CROSS-LINKS ═══ */}
    <section className="py-20">
      <div className="section-container">
        <RevealSection blur>
          <p className="eyebrow mb-12">Explore further</p>
        </RevealSection>
        <div className="space-y-0">
          {[
            { title: "About Enfactum", desc: "Our story, leadership, and operating bench.", href: "/company" },
            { title: "Leadership team", desc: "Meet the Growth Architects behind Enfactum's capabilities.", href: "/company/leadership" },
            { title: "Get in touch", desc: "Discuss growth in your target market.", href: "/contact" },
          ].map((link, i) => (
            <RevealSection key={i} delay={i * 0.04}>
              <Link to={link.href} className="group block">
                <div className="grid md:grid-cols-12 gap-4 py-6 border-b border-border/15 group-hover:border-primary/15 transition-colors duration-700">
                  <div className="md:col-span-3">
                    <span className="font-display text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors duration-500">
                      {link.title}
                    </span>
                  </div>
                  <div className="md:col-span-7">
                    <span className="text-[13px] text-foreground/30">{link.desc}</span>
                  </div>
                  <div className="md:col-span-2 flex items-center justify-end">
                    <ArrowRight className="w-3.5 h-3.5 text-foreground/10 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-500" />
                  </div>
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    <CTABand headline="Let's discuss your market." primaryLabel="Start a conversation" primaryHref="/contact" />
  </PageLayout>
);

export default RegionalNodes;
