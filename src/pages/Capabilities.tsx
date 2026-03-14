import { Link } from "react-router-dom";
import { useRef } from "react";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import ParallaxDivider from "@/components/shared/ParallaxDivider";
import CapabilityGraph from "@/components/shared/CapabilityGraph";
import CTABand from "@/components/shared/CTABand";
import SEOHead from "@/components/shared/SEOHead";
import { ArrowRight, Layers, Megaphone, Brain, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const capabilities = [
  {
    num: "01",
    title: "Growth Infrastructure",
    problem: "Your GTM strategy doesn't survive contact with Southeast Asia's fragmented market reality.",
    what: "We design and operate go-to-market architecture — partner programs, channel strategies, and demand operations — built for multi-market scale.",
    for: "Enterprise brands entering or expanding across Southeast Asia who need GTM infrastructure, not just a market-entry plan.",
    outcomes: ["Scalable partner ecosystems", "Revenue operations", "Multi-market playbooks"],
    href: "/capabilities/growth-infrastructure",
    icon: Layers,
    accent: "from-primary/20 to-primary/5",
  },
  {
    num: "02",
    title: "Brand & Demand",
    problem: "Your brand and performance teams operate in silos. Creative doesn't convert. Demand doesn't compound.",
    what: "We integrate performance marketing, social, influencer, affiliate, and creative into a single commercial engine with measurable ROI.",
    for: "Brands that need commercially accountable demand generation across Southeast Asia's digital channels — not another agency retainer.",
    outcomes: ["Integrated demand generation", "Creative-to-conversion pipelines", "Measurable brand impact"],
    href: "/capabilities/brand-demand",
    icon: Megaphone,
    accent: "from-blue-500/20 to-cyan-500/5",
  },
  {
    num: "03",
    title: "AI Ecosystems",
    problem: "Your innovation program generates pilots and press releases, not production implementations.",
    what: "We build innovation ecosystem architecture — venture strategy, startup scouting, partnership design, and pilot-to-scale programmes.",
    for: "Enterprises with innovation mandates that need a Growth Architect to move from scouting to scaling, not another accelerator programme.",
    outcomes: ["Enterprise-startup partnerships", "Pilot-to-platform pathways", "Innovation programme architecture"],
    href: "/capabilities/ai-ecosystems",
    icon: Brain,
    accent: "from-violet-500/20 to-primary/5",
  },
  {
    num: "04",
    title: "Live Experiences",
    problem: "Your events are cost centres. Launches create buzz but no lasting commercial momentum.",
    what: "We design and produce product launches, partner summits, roadshows, and experiential activations — all tied to measurable business outcomes.",
    for: "Brands that need market moments designed for pipeline, partner activation, and commercial impact — not just attendance.",
    outcomes: ["Pipeline-driving events", "Partner activation summits", "Market-entry launches"],
    href: "/capabilities/live-experiences",
    icon: Sparkles,
    accent: "from-amber-500/20 to-orange-500/5",
  },
];

const engagementModels = [
  { title: "Consulting", duration: "4–12 weeks", desc: "Strategic advisory and growth diagnostics for a specific challenge. Deliverable-led, time-bound." },
  { title: "Projects", duration: "2–6 months", desc: "Scoped programmes with defined outcomes — market entry, campaign launches, ecosystem builds." },
  { title: "Embedded Teams", duration: "6–18 months", desc: "Enfactum operators working inside your organisation for sustained execution and capability building." },
  { title: "Build-Operate-Transfer", duration: "12–24 months", desc: "We build and run the capability, then transfer full ownership and knowledge to your team." },
];

const systemConnections = [
  { from: "Growth Infrastructure", to: "Brand & Demand", link: "GTM architecture feeds integrated demand programmes" },
  { from: "Brand & Demand", to: "Live Experiences", link: "Demand strategy shapes commercially designed activations" },
  { from: "AI Ecosystems", to: "Growth Infrastructure", link: "Innovation partnerships feed new growth channels" },
  { from: "Live Experiences", to: "AI Ecosystems", link: "Events surface ecosystem opportunities and startup deal flow" },
];

const HorizontalScrollShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Header */}
        <div className="section-container mb-8 md:mb-12">
          <p className="eyebrow mb-2">Capability overview</p>
          <p className="text-[13px] text-muted-foreground max-w-lg">
            Each capability solves a specific growth challenge. Scroll to explore.
          </p>
        </div>

        {/* Horizontal panels */}
        <motion.div style={{ x }} className="flex gap-6 md:gap-8 pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]">
          {capabilities.map((cap, i) => (
            <Link
              key={i}
              to={cap.href}
              className="group flex-shrink-0 w-[85vw] md:w-[42vw] lg:w-[36vw]"
            >
              <div className={`relative h-[60vh] md:h-[65vh] rounded-2xl border border-border/30 bg-gradient-to-br ${cap.accent} p-8 md:p-10 flex flex-col justify-between overflow-hidden group-hover:border-primary/30 transition-colors duration-500`}>
                {/* Background number */}
                <span className="absolute top-6 right-8 text-[120px] md:text-[180px] font-display font-black text-foreground/[0.03] leading-none select-none">
                  {cap.num}
                </span>

                {/* Top — icon + number */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      <cap.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-body text-muted-foreground tracking-[0.2em] uppercase">{cap.num}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-500 mb-4">
                    {cap.title}
                  </h3>
                  <p className="text-[15px] text-secondary-foreground leading-[1.7] max-w-md">
                    {cap.problem}
                  </p>
                </div>

                {/* Bottom — outcomes + arrow */}
                <div>
                  <div className="mb-6">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 font-body mb-3">What we build</h4>
                    <p className="text-[13px] text-muted-foreground leading-relaxed max-w-sm line-clamp-3">
                      {cap.what}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {cap.outcomes.map((o) => (
                        <span key={o} className="text-[10px] uppercase tracking-[0.12em] text-primary/60 font-body bg-primary/5 px-2 py-1 rounded">
                          {o}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-500 shrink-0 ml-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Scroll progress dots */}
        <div className="section-container mt-8 flex items-center gap-3">
          {capabilities.map((_, i) => (
            <ScrollDot key={i} index={i} progress={scrollYProgress} />
          ))}
          <span className="text-[11px] text-muted-foreground ml-3 font-body">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

const ScrollDot = ({ index, progress }: { index: number; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) => {
  const opacity = useTransform(
    progress,
    [index * 0.25, index * 0.25 + 0.05, (index + 1) * 0.25, (index + 1) * 0.25 + 0.05],
    [0.3, 1, 1, 0.3]
  );
  const scale = useTransform(
    progress,
    [index * 0.25, index * 0.25 + 0.05, (index + 1) * 0.25, (index + 1) * 0.25 + 0.05],
    [1, 1.5, 1.5, 1]
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className="w-2 h-2 rounded-full bg-primary"
    />
  );
};

const Capabilities = () => (
  <PageLayout>
    <SEOHead
      title="Capabilities — Growth Infrastructure, Brand & Demand, AI Ecosystems, Live Experiences"
      description="Enfactum's four integrated capabilities for enterprise brands in Southeast Asia: Growth Infrastructure, Brand & Demand, AI Ecosystems, and Live Experiences. An operating system for regional growth."
      path="/capabilities"
    />
    <HeroSection
      eyebrow="Capabilities"
      headline={<>An integrated growth operating system for <span className="text-primary">Southeast Asia.</span></>}
      description="Each capability solves a specific growth challenge. Together, they form an integrated operating model — strategy connected to ecosystems connected to execution."
    />

    {/* ═══ HORIZONTAL SCROLL CAPABILITY SHOWCASE ═══ */}
    <HorizontalScrollShowcase />
    <ParallaxDivider variant="gradient" />
    {/* ═══ HOW CAPABILITIES CONNECT ═══ */}
    <section className="section-alt py-32 md:py-44">
      <div className="section-container">
        <SectionHeader
          eyebrow="How the capabilities connect"
          headline="Each capability reinforces the others."
          description="This isn't four separate offerings. It's one operating system — each capability feeds outcomes to the next. Hover a node to explore."
          centered
        />
        <div className="mt-16 md:mt-20">
          <CapabilityGraph />
        </div>
      </div>
    </section>

    <ParallaxDivider variant="mist" flip />
    {/* ═══ ENGAGEMENT MODELS ═══ */}
    <section className="py-32 md:py-44">
      <div className="section-container">
        <div className="section-divider mb-20" />
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-5">
            <RevealSection blur>
              <p className="eyebrow mb-6">How we engage</p>
              <h2 className="headline-lg">Four ways to work with us.</h2>
            </RevealSection>
          </div>
          <div className="md:col-span-5 md:col-start-7 flex items-end">
            <RevealSection delay={0.1} blur>
              <p className="body-md text-muted-foreground">
                We structure engagements around your context — not a fixed service menu.
                Every model is designed to deliver measurable outcomes and build lasting capability.
              </p>
            </RevealSection>
          </div>
        </div>

        <div className="space-y-0">
          {engagementModels.map((model, i) => (
            <RevealSection key={i} delay={i * 0.05} scale>
              <div className="grid md:grid-cols-12 gap-4 py-8 border-b border-border/20 hover:border-primary/10 transition-colors duration-700">
                <div className="md:col-span-3">
                  <h3 className="font-display text-[15px] font-semibold text-foreground">{model.title}</h3>
                </div>
                <div className="md:col-span-2">
                  <span className="text-[12px] text-primary/60 font-medium">{model.duration}</span>
                </div>
                <div className="md:col-span-7">
                  <span className="text-[13px] text-muted-foreground">{model.desc}</span>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* Cross-links */}
    <section className="py-16 md:py-20">
      <div className="section-container">
        <RevealSection>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/work" className="group block border-t border-border/30 pt-6">
              <p className="text-[10px] text-dim uppercase tracking-wider font-body mb-2">Related</p>
              <h4 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">View selected work</h4>
              <p className="text-[13px] text-muted-foreground mt-1">Case studies with measurable outcomes across Southeast Asia.</p>
            </Link>
            <Link to="/brands" className="group block border-t border-border/30 pt-6">
              <p className="text-[10px] text-dim uppercase tracking-wider font-body mb-2">Related</p>
              <h4 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">Brands we've worked with</h4>
              <p className="text-[13px] text-muted-foreground mt-1">40+ enterprise brands across four sector clusters.</p>
            </Link>
            <Link to="/partnerships" className="group block border-t border-border/30 pt-6">
              <p className="text-[10px] text-dim uppercase tracking-wider font-body mb-2">Related</p>
              <h4 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">Partnership models</h4>
              <p className="text-[13px] text-muted-foreground mt-1">How Enfactum designs and operates partnership-led growth.</p>
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>

    <CTABand
      headline="Have a specific growth challenge?"
      description="Tell us the problem. We'll tell you how we'd approach it."
      primaryLabel="Start a conversation"
    />
  </PageLayout>
);

export default Capabilities;
