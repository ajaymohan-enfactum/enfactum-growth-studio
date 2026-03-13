import { useState, useCallback } from "react";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import RevealSection from "@/components/shared/RevealSection";
import StaggerGrid from "@/components/shared/StaggerGrid";
import CTABand from "@/components/shared/CTABand";
import TeamProfilePanel from "@/components/shared/TeamProfilePanel";
import SEOHead, { makeBreadcrumbSchema } from "@/components/shared/SEOHead";
import type { TeamMemberFull } from "@/components/shared/TeamProfilePanel";

import ajayPhoto from "@/assets/team/ajay-mohan.png";
import williamPhoto from "@/assets/team/william-gaultier.png";
import poojaPhoto from "@/assets/team/pooja-mohan.png";
import irfanPhoto from "@/assets/team/irfan-mulla.png";
import sanjayPhoto from "@/assets/team/sanjay-chankranth.png";
import rakhiPhoto from "@/assets/team/rakhi-sachdeva.png";
import trevorPhoto from "@/assets/team/trevor-wingert.png";
import sinchanPhoto from "@/assets/team/sinchan-namdeo.png";
import leenaPhoto from "@/assets/team/leena-gandhi.png";

const leadershipTeam: TeamMemberFull[] = [
  {
    name: "Ajay Mohan",
    role: "Founder & Managing Partner",
    category: "Leadership",
    focus: "Strategy · Growth · Southeast Asia",
    location: "Singapore",
    bio: "20+ years building growth infrastructure for enterprise brands across Asia Pacific.",
    fullBio: `Ajay leads Enfactum's GTM Strategy practice and serves as the firm's Managing Partner. Over 20+ years in enterprise technology, he's led initiatives generating $4B+ in revenue across 15 APAC markets — from building partner networks for global software companies to designing go-to-market engines for startups entering the region.

Before Enfactum, Ajay held senior roles at leading technology distributors and enterprise software companies, where he built the partner programs and market entry playbooks that many APAC expansion strategies still reference today.

At Enfactum, Ajay works with clients on their most complex growth challenges: entering new markets, restructuring underperforming channels, and building the GTM infrastructure that turns strategy into pipeline.`,
    philosophy: "Growth without infrastructure is just activity.",
    expertise: ["Go-to-market strategy", "Partner ecosystems", "APAC market entry", "Revenue operations"],
    linkedin: "https://linkedin.com/in/ajaymohan",
    photo: ajayPhoto,
  },
  {
    name: "William Gaultier",
    role: "Partner",
    category: "Leadership",
    focus: "Ecosystems · Innovation · Partnerships",
    location: "Singapore",
    bio: "Deep enterprise and ecosystem experience across ASEAN, driving innovation programmes and strategic partnerships.",
    fullBio: `William has spent his career at the intersection of strategy and execution — scaling $2B+ in revenue across global markets, including deep experience in 8 APAC countries. He specialises in go-to-market transformation for technology companies, helping clients move from ad-hoc sales efforts to systematic, scalable growth engines.

Before joining Enfactum, William led growth initiatives at enterprise software and e-commerce companies, where he built the demand generation, sales enablement, and market expansion capabilities that drove sustained revenue growth.

William works with clients on GTM strategy, market entry planning, and growth acceleration — always with an eye toward building infrastructure that outlasts any single campaign.`,
    philosophy: "The best innovations come from the edges of ecosystems.",
    expertise: ["GTM transformation", "Market entry strategy", "Growth acceleration", "Sales enablement"],
    linkedin: "https://linkedin.com/in/williamgaultier",
    photo: williamPhoto,
  },
  {
    name: "Pooja Mohan",
    role: "Director/ Co Founder",
    category: "Operations",
    focus: "Operations · Creative Strategy · Scale",
    location: "India",
    bio: "15+ years transforming brand strategy into creative execution across APAC's diverse markets.",
    fullBio: `Pooja has spent 15+ years transforming brand strategy into creative execution that works across APAC's diverse markets. She leads Enfactum's creative strategy work — connecting brand positioning to campaign creative to digital experience design.

Her background combines advertising agency experience with in-house brand leadership, giving her perspective on both the creative vision and the operational realities of bringing brands to life across cultures and channels.

Pooja works with clients on brand positioning, creative development, and the visual and verbal systems that make brands distinctive and memorable in crowded markets.`,
    philosophy: "Scale is an operations problem, not a strategy problem.",
    expertise: ["Brand strategy", "Creative direction", "Visual identity", "Digital experience design", "Cross-cultural adaptation"],
    linkedin: "https://linkedin.com/in/poojamohan",
    photo: poojaPhoto,
  },
  {
    name: "Sumit Ramchandani",
    role: "Adtech & Martech Practice Head",
    category: "Martech",
    focus: "Martech · Performance · Data",
    location: "Singapore",
    bio: "Specialist in marketing technology, performance infrastructure, and data-driven growth architectures.",
    fullBio: `Sumit is a growth strategist who helps technology companies scale across APAC markets. His experience spans demand generation, pipeline development, and growth infrastructure for B2B technology companies.

He takes a data-driven approach to growth, combining analytical rigour with practical execution experience to build strategies that actually deliver results.

At Enfactum, Sumit works with clients on growth strategy, demand generation, and the operational systems that turn marketing investment into revenue.`,
    philosophy: "Distribution is strategy.",
    expertise: ["Growth strategy", "Demand generation", "Pipeline development", "B2B marketing", "Martech"],
    linkedin: "https://linkedin.com/in/sumitramchandani",
  },
  {
    name: "Trevor Wingert",
    role: "GTM Technology Advisor",
    category: "GTM Strategy",
    focus: "GTM Systems · Digital Transformation · Automation",
    location: "Singapore",
    bio: "25+ years scaling technology platforms with $2B+ in transaction value.",
    fullBio: `Trevor brings 25+ years of experience scaling technology platforms, with $2B+ in transaction value across enterprise software, SaaS, and digital infrastructure. He specialises in GTM technology integration — helping clients modernise their marketing and sales technology stacks to support ambitious growth goals.

His background spans enterprise technology leadership, digital transformation, and marketing technology implementation. Trevor understands both the strategic vision and the technical details required to make growth infrastructure actually work.

At Enfactum, Trevor advises clients on marketing technology architecture, automation implementation, and the operational systems that connect marketing investment to revenue outcomes.`,
    philosophy: "Growth infrastructure must work at the technical level.",
    expertise: ["Marketing technology", "GTM systems", "Digital transformation", "Automation"],
    linkedin: "https://linkedin.com/in/trevorwingert",
    photo: trevorPhoto,
  },
  {
    name: "Anuchida Kawashima",
    role: "Account Director",
    category: "Client Success",
    focus: "Client Success · Account Strategy",
    location: "Singapore",
    bio: "Drives client engagement and programme success, ensuring measurable commercial outcomes.",
    fullBio: `Anuchida drives client engagement and programme success at Enfactum, ensuring every engagement delivers measurable commercial outcomes. She brings deep experience in account management and client strategy across APAC markets.

Her approach combines strategic thinking with operational rigour — understanding both what clients need strategically and what it takes to deliver results consistently.

At Enfactum, Anuchida manages key client relationships and ensures that programme execution stays aligned with commercial objectives.`,
    philosophy: "Every engagement should move a business number.",
    expertise: ["Account strategy", "Client success", "Programme management", "APAC markets"],
  },
  {
    name: "Irfan Mulla",
    role: "Managing Director, Indonesia",
    category: "Regional",
    focus: "Indonesia · Brand & Demand · AI Discovery",
    location: "Jakarta, Indonesia",
    bio: "Leads Enfactum's Indonesia operations and Brand & Demand practice.",
    fullBio: `Irfan leads Enfactum's Indonesia operations and serves as a practice lead for Brand & Demand work across the region. He's a strategist who thinks in integrated campaigns — combining brand building and performance marketing into unified growth systems.

His expertise spans the full spectrum of modern marketing: AI-powered search and discovery (GEO), social and performance media, influencer programs, and content strategy. Irfan is particularly focused on how AI is reshaping brand visibility — and what companies need to do to show up when their customers are asking questions.

Before Enfactum, Irfan built and led marketing teams at technology and media companies, developing the integrated campaign capabilities that drive both awareness and conversion.`,
    philosophy: "Market entry in Southeast Asia is an ecosystem play.",
    expertise: ["AI discovery & GEO", "Performance marketing", "Integrated campaigns", "Content strategy", "Indonesia market"],
    linkedin: "https://linkedin.com/in/irfanmulla",
    photo: irfanPhoto,
  },
  {
    name: "Sanjay Chankranth",
    role: "Managing Director, Malaysia",
    category: "Regional",
    focus: "Malaysia · Brand Positioning · Cultural Messaging",
    location: "Kuala Lumpur, Malaysia",
    bio: "Leads Enfactum's Malaysia operations with deep expertise in brand positioning and cultural messaging.",
    fullBio: `Sanjay leads Enfactum's Malaysia operations and brings deep expertise in brand positioning and messaging across diverse APAC markets. He specialises in cultural adaptation — ensuring that brand strategies resonate authentically in each market, not just translated but truly localised.

His background spans market research, brand strategy, and communications across Southeast Asian markets. Sanjay understands the nuances that make the difference between campaigns that connect and campaigns that miss.

At Enfactum, Sanjay works with clients on brand positioning, market research, messaging strategy, and the cultural intelligence that drives effective marketing in Malaysia and beyond.`,
    philosophy: "Local depth creates regional strength.",
    expertise: ["Brand positioning", "Cultural messaging", "Market research", "Malaysia market"],
    linkedin: "https://linkedin.com/in/sanjaychankranth",
    photo: sanjayPhoto,
  },
  {
    name: "Rakhi Sachdeva",
    role: "Marketing Operations Director",
    category: "Operations",
    focus: "India · Operations · Delivery at Scale",
    location: "India",
    bio: "12+ years in marketing operations. Builds the systems that turn strategy into executed campaigns.",
    fullBio: `Rakhi brings 12+ years of operational excellence to Enfactum's client engagements. She leads marketing operations — the systems, processes, and coordination that turn strategy into executed campaigns and programs.

Her expertise spans campaign operations, martech integration, process optimisation, and the operational infrastructure that makes marketing scalable. Rakhi is the person who ensures that ambitious plans actually get implemented, on time and on budget.

Before Enfactum, Rakhi led marketing operations at enterprise technology companies, building the operational capabilities that supported multi-market, multi-channel programs.`,
    philosophy: "Operational excellence enables creative ambition.",
    expertise: ["Marketing operations", "Campaign management", "Martech integration", "Process optimisation"],
    linkedin: "https://linkedin.com/in/rakhisachdeva",
    photo: rakhiPhoto,
  },
  {
    name: "Sinchan Namdeo",
    role: "Creative Lead",
    category: "Operations",
    focus: "Creative Direction · Visual Design · Brand Systems",
    location: "India",
    bio: "Leads creative execution across Enfactum's client programmes, translating strategy into compelling visual narratives.",
    fullBio: `Sinchan leads creative direction and visual design across Enfactum's client programmes. She specialises in translating complex strategic narratives into compelling visual systems — from brand identities and campaign creative to digital experiences and event design.

Her approach bridges strategic intent with creative craft, ensuring that every visual touchpoint reinforces the commercial objectives behind it. Sinchan works across the full creative spectrum: brand systems, campaign assets, digital design, and experiential graphics.

At Enfactum, Sinchan ensures that creative output isn't just beautiful — it's commercially purposeful and culturally attuned to Southeast Asian markets.`,
    philosophy: "Design should make strategy visible.",
    expertise: ["Creative direction", "Visual design", "Brand systems", "Campaign creative", "Digital experience design"],
    photo: sinchanPhoto,
  },
  {
    name: "Leena Gandhi",
    role: "Programme Manager",
    category: "Operations",
    focus: "Programme Delivery · Client Coordination · Operations",
    location: "India",
    bio: "Manages cross-functional programme delivery, ensuring complex engagements run on time and on target.",
    fullBio: `Leena brings rigorous programme management expertise to Enfactum's most complex client engagements. She coordinates cross-functional teams across strategy, creative, technology, and operations — ensuring that ambitious programmes are delivered on time, on budget, and on brief.

Her background spans project and programme management across enterprise technology and marketing services, where she developed the operational frameworks that keep multi-market, multi-stakeholder programmes on track.

At Enfactum, Leena is the operational anchor for key client programmes — managing timelines, dependencies, and stakeholder communication with precision.`,
    philosophy: "Complexity is manageable when the system is clear.",
    expertise: ["Programme management", "Cross-functional coordination", "Stakeholder management", "Operational planning"],
    photo: leenaPhoto,
  },
];

const Leadership = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openProfile = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const closeProfile = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const goToPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev > 0 ? prev - 1 : leadershipTeam.length - 1) : null
    );
  }, []);

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev < leadershipTeam.length - 1 ? prev + 1 : 0) : null
    );
  }, []);

  const selectedMember = selectedIndex !== null ? leadershipTeam[selectedIndex] : null;
  const prevName = selectedIndex !== null
    ? leadershipTeam[selectedIndex > 0 ? selectedIndex - 1 : leadershipTeam.length - 1].name
    : undefined;
  const nextName = selectedIndex !== null
    ? leadershipTeam[selectedIndex < leadershipTeam.length - 1 ? selectedIndex + 1 : 0].name
    : undefined;

  return (
    <PageLayout>
      <SEOHead
        title="Leadership — Operators Across Strategy, Growth, and Technology"
        description="The Enfactum leadership team brings decades of experience across strategy, growth, technology, and creative — operators who have built and run growth programmes across Southeast Asia."
        path="/company/leadership"
        jsonLd={makeBreadcrumbSchema([
          { name: "Company", url: "/company" },
          { name: "Leadership", url: "/company/leadership" },
        ])}
      />
      <HeroSection
        eyebrow="Leadership"
        headline={<>Operators who build, <span className="text-primary">not just advise.</span></>}
        description="The Enfactum leadership team brings decades of experience across strategy, growth, technology, and creative — all earned in the markets we serve."
      />

      <section className="py-20 md:py-28">
        <div className="section-container">
          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {leadershipTeam.map((leader, i) => (
                <button
                  onClick={() => openProfile(i)}
                  className="card-premium h-full w-full text-left group cursor-pointer transition-all duration-500 hover:border-primary/20"
                  aria-label={`View profile for ${leader.name}`}
                >
                  {leader.photo ? (
                    <div className="w-full aspect-[4/5] rounded-md overflow-hidden mb-5">
                      <img
                        src={leader.photo}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-[4/5] rounded-md bg-secondary/60 border border-border mb-5 flex items-center justify-center">
                      <span className="font-display text-3xl font-bold text-muted-foreground/30">
                        {leader.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                  )}
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">{leader.role}</p>
                  <p className="text-xs text-dim mt-1">{leader.focus}</p>
                  <p className="text-sm text-muted-foreground mt-4">{leader.bio}</p>
                  <span className="inline-block mt-3 text-[11px] text-primary/60 uppercase tracking-wider font-body group-hover:text-primary transition-colors duration-500">
                    View profile →
                  </span>
                </button>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <CTABand headline="Interested in joining the team?" primaryLabel="View careers" primaryHref="/company/careers" />

      <TeamProfilePanel
        member={selectedMember}
        isOpen={selectedIndex !== null}
        onClose={closeProfile}
        onPrev={goToPrev}
        onNext={goToNext}
        prevName={prevName}
        nextName={nextName}
      />
    </PageLayout>
  );
};

export default Leadership;
