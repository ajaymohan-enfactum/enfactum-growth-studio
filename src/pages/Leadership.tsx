import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";

const leadershipTeam = [
  { name: "Ajay Mohan", role: "Founder & Strategy Lead", category: "Leadership", focus: "Strategy · Growth · Southeast Asia", bio: "15+ years building growth infrastructure for enterprise brands across Asia Pacific. Leads Enfactum's strategic vision, client partnerships, and regional expansion.", philosophy: "Growth without infrastructure is just activity." },
  { name: "William Gaultier", role: "Partner", category: "Leadership", focus: "Ecosystems · Innovation · Partnerships", bio: "Deep enterprise and ecosystem experience across ASEAN, driving innovation programmes, strategic partnerships, and ecosystem architecture.", philosophy: "The best innovations come from the edges of ecosystems." },
  { name: "Pooja Mohan", role: "Operations Lead", category: "Operations", focus: "Operations · Delivery · Scale", bio: "Leads Enfactum's operational backbone — managing delivery infrastructure, team coordination, and programme execution across the region.", philosophy: "Scale is an operations problem, not a strategy problem." },
  { name: "Sumit Ramchandani", role: "Adtech & Martech Lead", category: "Martech", focus: "Martech · Performance · Data", bio: "Specialist in marketing technology, performance infrastructure, and data-driven growth architectures for enterprise clients.", philosophy: "Distribution is strategy." },
  { name: "Anuchida Kawashima", role: "Account Director", category: "Client Success", focus: "Client Success · Account Strategy", bio: "Drives client engagement and programme success, ensuring every Enfactum engagement delivers measurable commercial outcomes.", philosophy: "Every engagement should move a business number." },
  { name: "Sanjay Chankranth", role: "Head of Malaysia", category: "Regional", focus: "Malaysia · Market Execution · Events", bio: "Leads Enfactum's Malaysia operations, overseeing market execution, events & activations, and partner management across the market.", philosophy: "Local depth creates regional strength." },
  { name: "Irfan Mulla", role: "Managing Director, Indonesia", category: "Regional", focus: "Indonesia · Market Growth · Partnerships", bio: "Leads Enfactum's Indonesia presence, driving local partnerships, consumer insights, and market growth strategies across the archipelago.", philosophy: "Market entry in Southeast Asia is an ecosystem play." },
  { name: "Rakhi Sachdeva", role: "India Operations Lead", category: "Regional", focus: "India · Operations · Delivery at Scale", bio: "Oversees Enfactum's India operating bench — managing creative production, technology delivery, and demand operations at scale.", philosophy: "Operational excellence enables creative ambition." },
];

const Leadership = () => (
  <PageLayout>
    <HeroSection
      eyebrow="Leadership"
      headline="Operators who build, not just advise."
      description="The Enfactum leadership team brings decades of experience across strategy, growth, technology, and creative — all earned in the markets we serve."
    />

    <section className="py-20 md:py-28">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipTeam.map((leader, i) => (
            <RevealSection key={i} delay={i * 0.08}>
              <div className="card-premium h-full">
                <div className="w-full aspect-[4/5] rounded-md bg-secondary/60 border border-border mb-5" />
                <h3 className="font-display text-lg font-bold text-foreground">{leader.name}</h3>
                <p className="text-sm text-primary font-medium">{leader.role}</p>
                <p className="text-xs text-dim mt-1">{leader.focus}</p>
                <p className="text-sm text-muted-foreground mt-4">{leader.bio}</p>
                <p className="text-sm italic text-foreground/60 mt-3 border-l-2 border-primary/30 pl-3">
                  "{leader.philosophy}"
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    <CTABand headline="Interested in joining the leadership team?" primaryLabel="View careers" primaryHref="/company/careers" />
  </PageLayout>
);

export default Leadership;
