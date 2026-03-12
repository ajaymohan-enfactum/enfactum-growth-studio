import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";

const leaders = [
  { name: "Placeholder Name", role: "CEO & Founder", focus: "Strategy · Growth · Southeast Asia", bio: "20+ years building growth infrastructure for enterprise brands across Asia Pacific.", philosophy: "Growth without infrastructure is just activity." },
  { name: "Placeholder Name", role: "Managing Partner", focus: "Ecosystems · Innovation · AI", bio: "Former enterprise innovation lead at a global tech company. Deep startup ecosystem experience across ASEAN.", philosophy: "The best innovations come from the edges of ecosystems." },
  { name: "Placeholder Name", role: "Partner, Growth Infrastructure", focus: "GTM · Revenue Operations · Channels", bio: "Specialist in scaling B2B go-to-market architectures across fragmented ASEAN markets.", philosophy: "Distribution is strategy." },
  { name: "Placeholder Name", role: "Partner, Brand & Demand", focus: "Creative · Performance · Social", bio: "Award-winning creative leader bridging brand strategy and commercial performance.", philosophy: "Brand and demand are not separate conversations." },
  { name: "Placeholder Name", role: "Partner, Live Experiences", focus: "Events · Activations · Production", bio: "15+ years producing enterprise events and market activations across Southeast Asia.", philosophy: "Every event should move a business number." },
  { name: "Placeholder Name", role: "VP, Operations", focus: "Delivery · India Operations · Scale", bio: "Leads Enfactum's operating bench and delivery infrastructure across the region.", philosophy: "Scale is an operations problem, not a strategy problem." },
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
          {leaders.map((leader, i) => (
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
