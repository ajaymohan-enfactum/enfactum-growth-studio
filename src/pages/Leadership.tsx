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


import markGuerrierPhoto from "@/assets/team/mark-guerrier.png";

import anuchidaPhoto from "@/assets/team/anuchida-kawashima.png";
import idrisPhoto from "@/assets/team/idris-atalki.png";

const leadershipTeam: TeamMemberFull[] = [
  {
    name: "Ajay Mohan",
    role: "Founder & Managing Partner",
    category: "Leadership",
    focus: "GTM Strategy · Growth · Southeast Asia",
    location: "Singapore",
    bio: "Leads Enfactum's GTM Strategy practice. 20+ years, $4B+ revenue generated across 15 APAC markets.",
    fullBio: `Ajay leads Enfactum's GTM Strategy practice and serves as the firm's Managing Partner. Over 20+ years in enterprise technology, he's led initiatives generating $4B+ in revenue across 15 APAC markets—from building partner networks for global software companies to designing go-to-market engines for startups entering the region.

Before Enfactum, Ajay held senior roles at leading technology distributors and enterprise software companies, where he built the partner programs and market entry playbooks that many APAC expansion strategies still reference today.

At Enfactum, Ajay works with clients on their most complex growth challenges: entering new markets, restructuring underperforming channels, and building the GTM infrastructure that turns strategy into pipeline.`,
    philosophy: "Growth without infrastructure is just activity.",
    expertise: ["Go-to-market strategy", "Partner ecosystems", "APAC market entry", "Revenue operations"],
    linkedin: "https://linkedin.com/in/ajaymohan",
    photo: ajayPhoto,
  },
  {
    name: "Jamshed Wadia",
    role: "AI Strategy & Transformation",
    category: "GTM Strategy",
    focus: "AI Strategy · Digital Transformation · Enterprise Innovation",
    location: "Singapore",
    bio: "Drives AI strategy and transformation initiatives, helping enterprises harness AI for scalable growth.",
    fullBio: `Jamshed leads AI strategy and transformation engagements at Enfactum, helping enterprise clients navigate the rapidly evolving AI landscape. He brings structured thinking to complex transformation challenges—connecting AI capabilities to business outcomes.

His approach focuses on practical, commercially grounded AI adoption rather than speculative pilots, ensuring that transformation investments deliver measurable results.

At Enfactum, Jamshed works with clients on AI strategy, digital transformation roadmaps, and the organisational change required to make AI initiatives succeed at scale.`,
    philosophy: "AI transformation succeeds when it's anchored in business reality.",
    expertise: ["AI strategy", "Digital transformation", "Enterprise innovation", "Change management"],
    linkedin: "https://linkedin.com/in/jamshedwadia",
  },
  {
    name: "Irfan Mulla",
    role: "Indonesia Country Manager",
    category: "Brand & Demand",
    focus: "Indonesia · AI Discovery · Integrated Campaigns",
    location: "Jakarta, Indonesia",
    bio: "Leads Indonesia operations and Brand & Demand practice. Expert in AI discovery and integrated campaigns.",
    fullBio: `Irfan leads Enfactum's Indonesia operations and serves as a practice lead for Brand & Demand work across the region. He's a strategist who thinks in integrated campaigns—combining brand building and performance marketing into unified growth systems.

His expertise spans the full spectrum of modern marketing: AI-powered search and discovery (GEO), social and performance media, influencer programs, and content strategy. Irfan is particularly focused on how AI is reshaping brand visibility—and what companies need to do to show up when their customers are asking questions.

Before Enfactum, Irfan built and led marketing teams at technology and media companies, developing the integrated campaign capabilities that drive both awareness and conversion.`,
    philosophy: "Market entry in Southeast Asia is an ecosystem play.",
    expertise: ["AI discovery & GEO", "Performance marketing", "Integrated campaigns", "Content strategy", "Indonesia market"],
    linkedin: "https://linkedin.com/in/irfanmulla",
    photo: irfanPhoto,
  },
  {
    name: "William Gaultier",
    role: "Partner",
    category: "GTM Strategy",
    focus: "GTM Transformation · Market Entry · Growth Acceleration",
    location: "Singapore",
    bio: "GTM transformation specialist. Scaled $2B+ revenue across 8 APAC markets.",
    fullBio: `William has spent his career at the intersection of strategy and execution—scaling $2B+ in revenue across global markets, including deep experience in 8 APAC countries. He specializes in go-to-market transformation for technology companies, helping clients move from ad-hoc sales efforts to systematic, scalable growth engines.

Before joining Enfactum, William led growth initiatives at enterprise software and e-commerce companies, where he built the demand generation, sales enablement, and market expansion capabilities that drove sustained revenue growth.

William works with clients on GTM strategy, market entry planning, and growth acceleration—always with an eye toward building infrastructure that outlasts any single campaign.`,
    philosophy: "The best innovations come from the edges of ecosystems.",
    expertise: ["GTM transformation", "Market entry strategy", "Growth acceleration", "Sales enablement"],
    linkedin: "https://linkedin.com/in/williamgaultier",
    photo: williamPhoto,
  },
  {
    name: "Trevor Wingert",
    role: "GTM Technology Advisor",
    category: "GTM Strategy",
    focus: "GTM Systems · Digital Transformation · Automation",
    location: "Singapore",
    bio: "25+ years scaling technology platforms. Specializes in GTM technology and automation.",
    fullBio: `Trevor brings 25+ years of experience scaling technology platforms, with $2B+ in transaction value across enterprise software, SaaS, and digital infrastructure. He specializes in GTM technology integration—helping clients modernize their marketing and sales technology stacks to support ambitious growth goals.

His background spans enterprise technology leadership, digital transformation, and marketing technology implementation. Trevor understands both the strategic vision and the technical details required to make growth infrastructure actually work.

At Enfactum, Trevor advises clients on marketing technology architecture, automation implementation, and the operational systems that connect marketing investment to revenue outcomes.`,
    philosophy: "Growth infrastructure must work at the technical level.",
    expertise: ["Marketing technology", "GTM systems", "Digital transformation", "Automation"],
    linkedin: "https://linkedin.com/in/trevorwingert",
    photo: trevorPhoto,
  },
  {
    name: "Sumit Ramchandani",
    role: "Adtech & Martech Lead",
    category: "GTM Strategy",
    focus: "Growth Strategy · Demand Generation · B2B Marketing",
    location: "Singapore",
    bio: "Growth strategist focused on scaling technology companies across APAC markets.",
    fullBio: `Sumit is a growth strategist who helps technology companies scale across APAC markets. His experience spans demand generation, pipeline development, and growth infrastructure for B2B technology companies.

He takes a data-driven approach to growth, combining analytical rigor with practical execution experience to build strategies that actually deliver results.

At Enfactum, Sumit works with clients on growth strategy, demand generation, and the operational systems that turn marketing investment into revenue.`,
    philosophy: "Distribution is strategy.",
    expertise: ["Growth strategy", "Demand generation", "Pipeline development", "B2B marketing"],
    linkedin: "https://linkedin.com/in/sumitramchandani",
  },
  {
    name: "Purwa Jain",
    role: "Growth Strategist",
    category: "GTM Strategy",
    focus: "Growth Strategy · Market Analysis · GTM Planning",
    location: "India",
    bio: "Growth strategist with expertise in scaling technology companies across diverse markets.",
    fullBio: `Purwa is a growth strategist focused on helping technology companies build scalable go-to-market capabilities. Her experience spans strategic planning, market analysis, and growth program development.

She brings a structured, analytical approach to growth challenges—combining strategic thinking with practical execution to help clients move from planning to results.

At Enfactum, Purwa works with clients on growth strategy, market analysis, and GTM program development.`,
    philosophy: "Structured thinking drives scalable results.",
    expertise: ["Growth strategy", "Market analysis", "GTM planning", "Strategic consulting"],
    linkedin: "https://linkedin.com/in/purwajain",
    photo: purwaPhoto,
  },
  {
    name: "Mark Guerrier",
    role: "Creative Director",
    category: "Brand & Demand",
    focus: "Brand Design · Creative Direction · Visual Identity",
    location: "Singapore",
    bio: "Brand design leader transforming brands across APAC with innovative creative strategies.",
    fullBio: `Mark is a creative director with extensive experience transforming brands across APAC markets. He leads Enfactum's creative and brand design work—from visual identity development to campaign creative to brand experience design.

His background spans advertising, brand consultancy, and in-house creative leadership, giving him perspective on both the creative vision and the practical realities of building brands that work across diverse markets and channels.

At Enfactum, Mark works with clients on brand identity, creative strategy, visual design systems, and the creative execution that brings brand strategies to life.`,
    philosophy: "Design is how strategy becomes tangible.",
    expertise: ["Brand design", "Creative direction", "Visual identity", "Campaign creative", "APAC brands"],
    linkedin: "https://linkedin.com/in/markguerrier",
    photo: markGuerrierPhoto,
  },
  {
    name: "Pooja Mohan",
    role: "Director & Co-Founder",
    category: "Brand & Demand",
    focus: "Brand Strategy · Creative Execution · Digital Experience",
    location: "India",
    bio: "15+ years in brand strategy and creative execution across APAC markets.",
    fullBio: `Pooja has spent 15+ years transforming brand strategy into creative execution that works across APAC's diverse markets. She leads Enfactum's creative strategy work—connecting brand positioning to campaign creative to digital experience design.

Her background combines advertising agency experience with in-house brand leadership, giving her perspective on both the creative vision and the operational realities of bringing brands to life across cultures and channels.

Pooja works with clients on brand positioning, creative development, and the visual and verbal systems that make brands distinctive and memorable in crowded markets.`,
    philosophy: "Scale is an operations problem, not a strategy problem.",
    expertise: ["Brand strategy", "Creative direction", "Visual identity", "Digital experience design", "Cross-cultural adaptation"],
    linkedin: "https://linkedin.com/in/poojamohan",
    photo: poojaPhoto,
  },
  {
    name: "Sanjay Chankranth",
    role: "Malaysia Country Manager",
    category: "Brand & Demand",
    focus: "Malaysia · Brand Positioning · Cultural Messaging",
    location: "Kuala Lumpur, Malaysia",
    bio: "Leads Malaysia operations. Brand positioning and cultural messaging across Southeast Asia.",
    fullBio: `Sanjay leads Enfactum's Malaysia operations and brings deep expertise in brand positioning and messaging across diverse APAC markets. He specializes in cultural adaptation—ensuring that brand strategies resonate authentically in each market, not just translated but truly localized.

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
    category: "Brand & Demand",
    focus: "Operations · Campaign Management · Martech",
    location: "India",
    bio: "12+ years in marketing operations. Builds the systems that turn strategy into execution.",
    fullBio: `Rakhi brings 12+ years of operational excellence to Enfactum's client engagements. She leads marketing operations—the systems, processes, and coordination that turn strategy into executed campaigns and programs.

Her expertise spans campaign operations, martech integration, process optimization, and the operational infrastructure that makes marketing scalable. Rakhi is the person who ensures that ambitious plans actually get implemented, on time and on budget.

Before Enfactum, Rakhi led marketing operations at enterprise technology companies, building the operational capabilities that supported multi-market, multi-channel programs.`,
    philosophy: "Operational excellence enables creative ambition.",
    expertise: ["Marketing operations", "Campaign management", "Martech integration", "Process optimization"],
    linkedin: "https://linkedin.com/in/rakhisachdeva",
    photo: rakhiPhoto,
  },
  {
    name: "Anuchida Kawashima",
    role: "Account Director",
    category: "Client Success",
    focus: "Client Success · Account Strategy",
    location: "Singapore",
    bio: "Drives client engagement and programme success, ensuring measurable commercial outcomes.",
    fullBio: `Anuchida drives client engagement and programme success at Enfactum, ensuring every engagement delivers measurable commercial outcomes. She brings deep experience in account management and client strategy across APAC markets.

Her approach combines strategic thinking with operational rigour—understanding both what clients need strategically and what it takes to deliver results consistently.

At Enfactum, Anuchida manages key client relationships and ensures that programme execution stays aligned with commercial objectives.`,
    philosophy: "Every engagement should move a business number.",
    expertise: ["Account strategy", "Client success", "Programme management", "APAC markets"],
    photo: anuchidaPhoto,
  },
  {
    name: "Idris Atalki",
    role: "AI Projects Director",
    category: "Operations",
    focus: "AI Strategy · Project Delivery · Innovation Programmes",
    location: "Singapore",
    bio: "Directs AI-driven project delivery across Enfactum's client programmes, bridging innovation strategy with operational execution.",
    fullBio: `Idris leads AI project delivery at Enfactum, ensuring that innovation programmes move from concept to commercial reality. He brings structured programme leadership to complex AI and technology engagements—managing scope, stakeholders, and delivery across multi-market initiatives.

His approach centres on translating AI strategy into actionable project architectures, ensuring that technology investments are grounded in clear business outcomes rather than speculative pilots.

At Enfactum, Idris ensures that AI programmes are commercially purposeful, operationally sound, and designed for scale across Southeast Asia.`,
    philosophy: "Innovation scales when it's built on operational discipline.",
    expertise: ["AI programme delivery", "Innovation strategy", "Project architecture", "Stakeholder management", "Technology operations"],
    photo: idrisPhoto,
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
        title="Leadership"
        description="The Enfactum leadership team brings decades of experience across strategy, growth, technology, and creative — Growth Architects who have built and run growth programmes across Southeast Asia."
        path="/company/leadership"
        jsonLd={makeBreadcrumbSchema([
          { name: "Company", url: "/company" },
          { name: "Leadership", url: "/company/leadership" },
        ])}
      />
      <HeroSection
        eyebrow="Leadership"
        headline={<>Growth Architects who build, <span className="text-primary">not just advise.</span></>}
        description="The Enfactum leadership team brings decades of experience across strategy, growth, technology, and creative — all earned in the markets we serve."
      />

      <section className="py-20 md:py-28">
        <div className="section-container">
          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {leadershipTeam.map((leader, i) => {
                const initials = leader.name.split(" ").map((n) => n[0]).join("");
                return (
                <button
                  key={i}
                  onClick={() => openProfile(i)}
                  className="card-premium h-full w-full text-left group cursor-pointer transition-all duration-500 hover:border-primary/20"
                  aria-label={`View profile for ${leader.name}`}
                >
                  <div className="w-full aspect-[4/5] rounded-md bg-secondary/60 border border-border mb-5 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-primary/40">
                      {initials}
                    </span>
                  </div>
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
                );
            })}
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
