export interface Article {
  title: string;
  slug: string;
  category: string;
  theme: string;
  author: string;
  authorRole?: string;
  readTime: string;
  teaser: string;
  featured?: boolean;
  date: string;
  body: string[];
}

export const slugify = (title: string): string =>
  title
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const articles: Article[] = [
  {
    title: "Southeast Asia Is Not One Market. Stop Planning It Like One.",
    slug: "southeast-asia-is-not-one-market",
    category: "Architect View",
    theme: "Southeast Asia Growth",
    author: "Ajay Mohan",
    authorRole: "Founder & Managing Partner",
    readTime: "8 min read",
    teaser: "Nearly 700 million people, ten countries, and a digital economy past $300 billion — but that aggregate figure conceals as much as it reveals. The companies that win treat Southeast Asia as a connected set of very different realities.",
    featured: true,
    date: "March 2026",
    body: [
      "Nearly 700 million people, ten countries, and a digital economy past $300 billion — but that aggregate figure conceals as much as it reveals.",
      "The companies that win in Southeast Asia do not treat the region as a single market. They treat it as a connected set of very different realities — each with its own commercial rhythms, regulatory environments, distribution structures, and buyer expectations.",
      "Indonesia is not a smaller version of India. Singapore is not a proxy for the region. Vietnam's trajectory is not Thailand's. The playbooks that scale are the ones designed to move through difference, not around it.",
      "This is why regional strategies that begin with a single country pilot and then 'roll out' across ASEAN so often stall. The assumption is that what works in one market will transfer. It rarely does without significant translation.",
      "The companies that build durable regional positions invest in understanding each market on its own terms — and then connect those positions into a coherent regional system. That is a fundamentally different exercise than replication.",
      "Growth infrastructure in Southeast Asia is not about choosing the right market. It is about designing a system that can hold complexity and still move.",
    ],
  },
  {
    title: "In B2B, Your Buyer Already Trusts Someone Else.",
    slug: "in-b2b-your-buyer-already-trusts-someone-else",
    category: "Architect View",
    theme: "Ecosystems & Partnerships",
    author: "William Gaultier",
    authorRole: "Partner",
    readTime: "7 min read",
    teaser: "Your buyer is looking for signals. Who already works with you? Who is willing to bring you into the room? In Southeast Asia, those signals carry as much weight as the message itself.",
    featured: true,
    date: "March 2026",
    body: [
      "Your buyer is looking for signals. Who already works with you? Who is willing to bring you into the room? In Southeast Asia, those signals carry as much weight as the message itself.",
      "Enterprise buyers in the region do not make decisions in isolation. They look to their ecosystem — partners, peers, advisors — for validation. If your brand is not present in those conversations, your pipeline will always be thinner than it should be.",
      "This is why partner-led growth is not a nice-to-have in B2B. It is the primary mechanism through which trust travels. And trust, in this region, is the prerequisite for everything else.",
      "The companies that understand this invest in ecosystem design — not just partner recruitment. They build systems where partners have a reason to advocate, not just resell.",
      "The difference between a partner programme that creates revenue and one that creates noise is almost always in the design. Intent is not enough. You need structure, incentives, and follow-through.",
    ],
  },
  {
    title: "Imported Playbooks Break Fast in Southeast Asia.",
    slug: "imported-playbooks-break-fast-in-southeast-asia",
    category: "Field Note",
    theme: "Southeast Asia Growth",
    author: "Ajay Mohan",
    authorRole: "Founder & Managing Partner",
    readTime: "7 min read",
    teaser: "A playbook that works in the US or Europe can fall apart surprisingly fast here. Not because it was bad — but because the environment changed. Replication assumes the market will bend. Translation builds a model that can move through the market.",
    date: "February 2026",
    body: [
      "A playbook that works in the US or Europe can fall apart surprisingly fast in Southeast Asia. Not because it was bad — but because the environment changed.",
      "Replication assumes the market will bend to the model. Translation builds a model that can move through the market. That distinction matters more in this region than almost anywhere else.",
      "The regulatory environments are different. The distribution structures are different. The buyer expectations are different. The trust dynamics are different. A playbook built for a market with mature digital infrastructure and high brand awareness does not automatically work in a market where relationships still drive most enterprise decisions.",
      "The companies that succeed here are the ones willing to translate — to keep the strategic intent but rebuild the operating model for the local reality.",
    ],
  },
  {
    title: "Most Enterprise AI Programs Don't Have an AI Problem. They Have an Operating Model Problem.",
    slug: "most-enterprise-ai-programs-dont-have-an-ai-problem",
    category: "Operator View",
    theme: "AI & Innovation",
    author: "Ajay Mohan",
    authorRole: "Founder & Managing Partner",
    readTime: "7 min read",
    teaser: "Southeast Asia is not short of AI investment or intent. And yet enterprise AI adoption sits at 59% — well behind North America and Europe. The gap is not a technology gap. It is an operating model gap.",
    date: "February 2026",
    body: [
      "Southeast Asia is not short of AI investment or intent. And yet enterprise AI adoption sits at 59% — well behind North America and Europe. The gap is not a technology gap. It is an operating model gap.",
      "Most enterprise AI programmes stall not because the technology does not work, but because the organisation around it is not designed to absorb what the technology produces.",
      "Pilots succeed in isolation. But when it comes time to integrate AI into workflows, decision-making, and commercial operations, the organisation hits friction — approval loops, data governance gaps, unclear ownership, and misaligned incentives.",
      "The companies that move from pilot to scale are the ones that treat AI adoption as an operating model challenge, not just a technology deployment.",
    ],
  },
  {
    title: "Partner Programs Don't Fail from Lack of Intent. They Fail from Lack of Design.",
    slug: "partner-programs-dont-fail-from-lack-of-intent",
    category: "Operator View",
    theme: "Ecosystems & Partnerships",
    author: "William Gaultier",
    authorRole: "Partner",
    readTime: "7 min read",
    teaser: "Most partner programmes begin with the right intent. Six months later, very little has moved. The programme was never properly designed. Intent gets it announced. Design gets it moving.",
    date: "February 2026",
    body: [
      "Most partner programmes begin with the right intent. Six months later, very little has moved.",
      "The programme was never properly designed. Intent gets it announced. Design gets it moving.",
      "Design means defining what the partner actually does. What they sell. What they earn. How they are supported. How success is measured. Without that clarity, partners default to doing nothing — not because they are unwilling, but because the path is unclear.",
      "The best partner programmes are operating systems, not announcements. They create structure that makes it easier for partners to act than not to act.",
    ],
  },
  {
    title: "Market Entry in Southeast Asia Is Really a System Design Problem.",
    slug: "market-entry-in-southeast-asia-is-really-a-system-design-problem",
    category: "Operator View",
    theme: "Southeast Asia Growth",
    author: "Irfan Mulla",
    authorRole: "Managing Director, Indonesia",
    readTime: "7 min read",
    teaser: "A lot of companies treat market entry like a campaign. That is why so many efforts stall after the first burst. Launch creates noise. Systems create traction.",
    date: "January 2026",
    body: [
      "A lot of companies treat market entry like a campaign. That is why so many efforts stall after the first burst.",
      "Launch creates noise. Systems create traction. The difference between the two is whether you have designed the infrastructure to sustain momentum after the initial push.",
      "Market entry in Southeast Asia requires more than a launch plan. It requires distribution design, partner activation, regulatory navigation, and commercial follow-through — all working together as a system.",
      "The companies that build lasting positions in the region treat entry as an operating model challenge, not a marketing exercise.",
    ],
  },
  {
    title: "AI Ecosystems Matter More Than AI Pilots.",
    slug: "ai-ecosystems-matter-more-than-ai-pilots",
    category: "Operator View",
    theme: "AI & Innovation",
    author: "Ajay Mohan",
    authorRole: "Founder & Managing Partner",
    readTime: "7 min read",
    teaser: "What separates companies that move forward from the ones that stall is not the number of pilots they run. It is the quality of the system around those pilots.",
    date: "January 2026",
    body: [
      "What separates companies that move forward from the ones that stall is not the number of pilots they run. It is the quality of the system around those pilots.",
      "An AI ecosystem is the connective tissue between technology, talent, partners, and commercial operations. Without it, pilots remain isolated experiments.",
      "The companies that scale AI successfully build ecosystems — networks of partners, internal capabilities, and governance structures that allow innovation to move from experiment to operation.",
      "In Southeast Asia, where the enterprise AI landscape is still forming, the companies that invest in ecosystem design now will define the market for the next decade.",
    ],
  },
  {
    title: "Distribution Is Not a Channel. It Is a Strategic Capability.",
    slug: "distribution-is-not-a-channel-it-is-a-strategic-capability",
    category: "Operator View",
    theme: "Southeast Asia Growth",
    author: "Irfan Mulla",
    authorRole: "Managing Director, Indonesia",
    readTime: "7 min read",
    teaser: "In Southeast Asia, the question is not just whether you have a route to market. It is whether your route to market can actually move.",
    date: "January 2026",
    body: [
      "In Southeast Asia, the question is not just whether you have a route to market. It is whether your route to market can actually move.",
      "Distribution is not a channel decision. It is a strategic capability — one that requires design, investment, and continuous refinement.",
      "The companies that treat distribution as a strategic function, not just a logistics problem, are the ones that build durable market positions. They invest in partner activation, channel enablement, and the systems that keep distribution moving.",
    ],
  },
  {
    title: "Stop Choosing Between Brand and Performance.",
    slug: "stop-choosing-between-brand-and-performance",
    category: "Operator View",
    theme: "Brand & Demand",
    author: "Irfan Mulla",
    authorRole: "Managing Director, Indonesia",
    readTime: "6 min read",
    teaser: "The market does not experience brand and performance separately. It experiences them as one commercial impression. The companies that grow best stop making the market choose between the two.",
    date: "December 2025",
    body: [
      "The market does not experience brand and performance separately. It experiences them as one commercial impression.",
      "The companies that grow best stop making the market choose between the two. They design brand and demand to work as a single system — where every brand impression creates a performance pathway and every performance touchpoint reinforces the brand.",
      "In Southeast Asia, where attention is fragmented and trust is earned through consistency, the integration of brand and demand is not optional. It is the foundation of efficient growth.",
    ],
  },
  {
    title: "Events Don't Need More Energy. They Need More Commercial Intent.",
    slug: "events-dont-need-more-energy-they-need-more-commercial-intent",
    category: "Field Note",
    theme: "Launches & Activation",
    author: "Ajay Mohan",
    authorRole: "Founder & Managing Partner",
    readTime: "6 min read",
    teaser: "Most events are not short on effort. They are short on clarity. An event should not be judged only by turnout or applause. It should be judged by what it makes easier afterwards.",
    date: "December 2025",
    body: [
      "Most events are not short on effort. They are short on clarity.",
      "An event should not be judged only by turnout or applause. It should be judged by what it makes easier afterwards — the conversations it opens, the pipeline it creates, the partnerships it activates.",
      "The best commercial events are designed backwards from the outcome. What should happen in the week after? What should partners be able to do that they could not do before? What should buyers understand that they did not understand before?",
      "Events with commercial intent create momentum. Events without it create memories.",
    ],
  },
  {
    title: "The Real Value of Corporate Innovation Is Commercial, Not Cosmetic.",
    slug: "the-real-value-of-corporate-innovation-is-commercial-not-cosmetic",
    category: "Operator View",
    theme: "AI & Innovation",
    author: "Ajay Mohan",
    authorRole: "Founder & Managing Partner",
    readTime: "7 min read",
    teaser: "When innovation programmes lose sight of commercial purpose, they drift into theatre. Lots of activity. Very little consequence. The best programmes look less like showcases and more like commercial engines.",
    date: "November 2025",
    body: [
      "When innovation programmes lose sight of commercial purpose, they drift into theatre. Lots of activity. Very little consequence.",
      "The best programmes look less like showcases and more like commercial engines. They are designed to produce outcomes — new revenue streams, operational efficiencies, strategic partnerships — not just visibility.",
      "In Southeast Asia, where innovation investment is growing rapidly, the companies that connect innovation to commercial outcomes will outperform those that treat it as a brand exercise.",
    ],
  },
  {
    title: "CAC Looks Different When Trust Travels Through Ecosystems.",
    slug: "cac-looks-different-when-trust-travels-through-ecosystems",
    category: "Field Note",
    theme: "Ecosystems & Partnerships",
    author: "William Gaultier",
    authorRole: "Partner",
    readTime: "7 min read",
    teaser: "When trust travels through ecosystems, CAC is not just a media problem. It becomes a design problem. Ecosystem-driven acquisition creates stronger economics over time.",
    date: "November 2025",
    body: [
      "When trust travels through ecosystems, CAC is not just a media problem. It becomes a design problem.",
      "Ecosystem-driven acquisition creates stronger economics over time. The cost of acquiring a customer through a trusted partner is structurally lower than acquiring them through cold outreach — because the trust has already been established.",
      "The companies that understand this design their acquisition systems around ecosystems, not just media channels. They invest in partner relationships, co-selling motions, and shared commercial outcomes.",
    ],
  },
  {
    title: "A Product Launch Should Create Movement, Not Just Attention.",
    slug: "a-product-launch-should-create-movement-not-just-attention",
    category: "Field Note",
    theme: "Launches & Activation",
    author: "Ajay Mohan",
    authorRole: "Founder & Managing Partner",
    readTime: "6 min read",
    teaser: "A launch is not successful because people noticed it. It is successful because something moved afterwards — pipeline, partner confidence, market perception, distribution momentum.",
    date: "October 2025",
    body: [
      "A launch is not successful because people noticed it. It is successful because something moved afterwards — pipeline, partner confidence, market perception, distribution momentum.",
      "The best launches are designed as systems, not moments. They connect the launch event to follow-up activation, partner enablement, and commercial follow-through.",
      "In Southeast Asia, where market entry requires sustained momentum, a launch that does not create movement is a launch that will be forgotten.",
    ],
  },
  {
    title: "In a Zero-Click World, Brands Must Become the Answer.",
    slug: "in-a-zero-click-world-brands-must-become-the-answer",
    category: "Market Signal",
    theme: "Brand & Demand",
    author: "Irfan Mulla",
    authorRole: "Managing Director, Indonesia",
    readTime: "7 min read",
    teaser: "In a zero-click world, it is no longer enough to be present. You need to be the answer. The winners will be the brands most clearly associated with a useful answer.",
    date: "October 2025",
    body: [
      "In a zero-click world, it is no longer enough to be present. You need to be the answer.",
      "The winners will be the brands most clearly associated with a useful answer. When AI systems summarize, when search engines provide direct answers, when buyers ask their networks — the brand that is synonymous with the solution wins.",
      "This changes how brand strategy works. It is no longer enough to be visible. You need to be definitive. Your brand needs to be the clearest, most authoritative answer to the questions your buyers are asking.",
    ],
  },
  {
    title: "The Best Market Activations Don't Feel Like Campaigns. They Feel Like Entry Points.",
    slug: "the-best-market-activations-dont-feel-like-campaigns",
    category: "Field Note",
    theme: "Launches & Activation",
    author: "Ajay Mohan",
    authorRole: "Founder & Managing Partner",
    readTime: "6 min read",
    teaser: "Entry points keep opening doors long after the moment has passed. The best activations connect to follow-up systems — giving buyers a reason to engage and partners something to act on.",
    date: "October 2025",
    body: [
      "Entry points keep opening doors long after the moment has passed.",
      "The best activations connect to follow-up systems — giving buyers a reason to engage and partners something to act on. They are not designed to create a single impression. They are designed to create a pathway.",
      "In Southeast Asia, where commercial relationships are built over time, the activations that matter most are the ones that create ongoing engagement, not just initial attention.",
    ],
  },
];

export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug);
