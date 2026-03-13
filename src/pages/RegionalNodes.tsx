import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";

const nodes = [
  {
    city: "Singapore",
    type: "Head Office",
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
    type: "Strategic Node",
    desc: "US market bridge for enterprise brands expanding between North America and Southeast Asia.",
    capabilities: ["Strategic partnerships", "Client development", "Global bridge"],
    address: ["Rockefeller Center", "45 Rockefeller Plaza, Suite #2000", "New York, NY 10111", "United States"],
  },
];

const RegionalNodes = () => (
  <PageLayout>
    <HeroSection
      eyebrow="Regional Nodes"
      headline="An operating network built for Southeast Asia."
      description="Not offices. Operating nodes — each with a distinct role in how we deliver growth across the region."
    />

    <section className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="Network"
          headline="Strategic hub. Scale engine. Market nodes."
          description="Our footprint is designed for how work actually flows across Southeast Asia — strategy set in Singapore, scale built through India, markets activated locally."
        />
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {nodes.map((node, i) => (
            <RevealSection key={i} delay={i * 0.08}>
              <div className="card-premium h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="eyebrow">{node.type}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">{node.city}</h3>
                <p className="text-sm text-muted-foreground mt-3">{node.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {node.capabilities.map((cap) => (
                    <span key={cap} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">{cap}</span>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
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

    <CTABand headline="Let's discuss your market." primaryLabel="Start a conversation" />
  </PageLayout>
);

export default RegionalNodes;
