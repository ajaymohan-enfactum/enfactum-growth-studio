import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";

import ajayPhoto from "@/assets/team/ajay-mohan.png";
import williamPhoto from "@/assets/team/william-gaultier.png";
import poojaPhoto from "@/assets/team/pooja-mohan.png";
import irfanPhoto from "@/assets/team/irfan-mulla.png";
import sanjayPhoto from "@/assets/team/sanjay-chankranth.png";
import rakhiPhoto from "@/assets/team/rakhi-sachdeva.png";
import trevorPhoto from "@/assets/team/trevor-wingert.png";
import leenaPhoto from "@/assets/team/leena-gandhi.png";
import sinchanPhoto from "@/assets/team/sinchan-namdeo.png";

interface TeamMember {
  name: string;
  role: string;
  category: string;
  focus: string;
  bio: string;
  philosophy: string;
  photo?: string;
}

const leadershipTeam: TeamMember[] = [
  { name: "Ajay Mohan", role: "Founder & Managing Partner", category: "Leadership", focus: "Strategy · Growth · Southeast Asia", bio: "20+ years building growth infrastructure for enterprise brands across Asia Pacific. Leads Enfactum's strategic vision, client partnerships, and regional expansion.", philosophy: "Growth without infrastructure is just activity.", photo: ajayPhoto },
  { name: "William Gaultier", role: "Partner", category: "Leadership", focus: "Ecosystems · Innovation · Partnerships", bio: "Deep enterprise and ecosystem experience across ASEAN, driving innovation programmes, strategic partnerships, and ecosystem architecture.", philosophy: "The best innovations come from the edges of ecosystems.", photo: williamPhoto },
  { name: "Pooja Mohan", role: "Director/ Co Founder", category: "Operations", focus: "Operations · Creative Strategy · Scale", bio: "15+ years transforming brand strategy into creative execution across APAC's diverse markets. Leads Enfactum's creative strategy and operational backbone.", philosophy: "Scale is an operations problem, not a strategy problem.", photo: poojaPhoto },
  { name: "Sumit Ramchandani", role: "Adtech & Martech Practice Head", category: "Martech", focus: "Martech · Performance · Data", bio: "Specialist in marketing technology, performance infrastructure, and data-driven growth architectures for enterprise clients.", philosophy: "Distribution is strategy." },
  { name: "Trevor Wingert", role: "GTM Technology Advisor", category: "GTM Strategy", focus: "GTM Systems · Digital Transformation · Automation", bio: "25+ years scaling technology platforms with $2B+ in transaction value. Specialises in GTM technology integration and marketing automation.", philosophy: "Growth infrastructure must work at the technical level.", photo: trevorPhoto },
  { name: "Anuchida Kawashima", role: "Account Director", category: "Client Success", focus: "Client Success · Account Strategy", bio: "Drives client engagement and programme success, ensuring every Enfactum engagement delivers measurable commercial outcomes.", philosophy: "Every engagement should move a business number." },
  { name: "Irfan Mulla", role: "Managing Director, Indonesia", category: "Regional", focus: "Indonesia · Brand & Demand · AI Discovery", bio: "Leads Enfactum's Indonesia operations and Brand & Demand practice. Expert in AI-powered search, integrated campaigns, and creator-led commerce.", philosophy: "Market entry in Southeast Asia is an ecosystem play.", photo: irfanPhoto },
  { name: "Sanjay Chankranth", role: "Managing Director, Malaysia", category: "Regional", focus: "Malaysia · Brand Positioning · Cultural Messaging", bio: "Leads Enfactum's Malaysia operations with deep expertise in brand positioning, cultural messaging, and market execution across Southeast Asia.", philosophy: "Local depth creates regional strength.", photo: sanjayPhoto },
  { name: "Rakhi Sachdeva", role: "Marketing Operations Director", category: "Operations", focus: "India · Operations · Delivery at Scale", bio: "12+ years in marketing operations. Builds the systems, processes, and coordination that turn strategy into executed campaigns and programs.", philosophy: "Operational excellence enables creative ambition.", photo: rakhiPhoto },
  { name: "Sinchan Namdeo", role: "Performance Marketing Lead", category: "Brand & Demand", focus: "Performance Marketing · Demand Generation · ROI", bio: "Performance marketing specialist with proven results across 10+ APAC markets. Builds optimization systems that compound performance over time.", philosophy: "Performance is a system, not a campaign.", photo: sinchanPhoto },
  { name: "Leena Gandhi", role: "Brand Experience Lead", category: "Brand & Demand", focus: "Brand Identity · Digital Experience · Visual Design", bio: "Specialises in brand identity and digital experiences — the visual and interactive touchpoints where brands come to life across APAC markets.", philosophy: "Design is how strategy becomes visible.", photo: leenaPhoto },
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
                {leader.photo ? (
                  <div className="w-full aspect-[4/5] rounded-md overflow-hidden mb-5">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-[4/5] rounded-md bg-secondary/60 border border-border mb-5 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-muted-foreground/30">
                      {leader.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                )}
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

    <CTABand headline="Interested in joining the team?" primaryLabel="View careers" primaryHref="/company/careers" />
  </PageLayout>
);

export default Leadership;
