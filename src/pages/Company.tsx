import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import { ArrowRight } from "lucide-react";

const leaders = [
  { name: "Placeholder Name", role: "CEO & Founder", focus: "Strategy · Growth · Southeast Asia", bio: "20+ years building growth infrastructure for enterprise brands across Asia." },
  { name: "Placeholder Name", role: "Managing Partner", focus: "Ecosystems · Innovation", bio: "Former enterprise innovation lead with deep startup ecosystem experience." },
  { name: "Placeholder Name", role: "Partner, Growth", focus: "GTM · Revenue Operations", bio: "Specialist in scaling B2B go-to-market across fragmented ASEAN markets." },
  { name: "Placeholder Name", role: "Partner, Creative", focus: "Brand · Demand · Experience", bio: "Award-winning creative leader bridging brand strategy and commercial performance." },
];

const values = [
  { title: "Operator mindset", desc: "We don't just advise. We build and run the work alongside you." },
  { title: "Ecosystem intelligence", desc: "We understand how growth moves through partnerships, channels, and trust." },
  { title: "Outcome obsession", desc: "Every programme is designed for measurable commercial impact." },
  { title: "Regional depth", desc: "We're built for Southeast Asia — not parachuting in from elsewhere." },
];

const Company = () => (
  <PageLayout>
    <HeroSection
      eyebrow="Company"
      headline="Built for how Southeast Asia actually works."
      description="Enfactum is a growth and innovation operating partner. We combine strategy, ecosystems, and execution to help enterprise brands scale with clarity and momentum."
    />

    {/* Story */}
    <section className="py-20 md:py-28">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16">
          <RevealSection>
            <SectionHeader eyebrow="Our story" headline="From execution gap to operating partner." />
            <div className="space-y-4 mt-6">
              <p className="body-md">
                Enfactum was founded on a simple observation: the best strategies in Southeast Asia fail
                not for lack of ambition, but for lack of execution infrastructure.
              </p>
              <p className="body-md">
                We built Enfactum to be the operating partner that enterprise brands actually need —
                one that understands ecosystems, builds real infrastructure, and stays until growth has
                genuine momentum.
              </p>
            </div>
          </RevealSection>
          <RevealSection delay={0.1}>
            <div className="card-premium">
              <p className="eyebrow mb-4">Headquartered</p>
              <p className="font-display text-2xl font-bold text-foreground">Singapore</p>
              <p className="text-sm text-muted-foreground mt-2">
                With operating nodes across India, Malaysia, Indonesia, and broader Southeast Asia.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-display text-3xl font-bold text-primary">200+</p>
                  <p className="text-xs text-dim">Operating bench</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-primary">6+</p>
                  <p className="text-xs text-dim">Markets active</p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>

    {/* Leadership Preview */}
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="section-container">
        <div className="flex items-end justify-between mb-14">
          <SectionHeader eyebrow="Leadership" headline="Experienced operators." />
          <Link to="/company/leadership" className="hidden md:flex items-center gap-2 text-sm text-primary font-medium">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {leaders.map((leader, i) => (
            <RevealSection key={i} delay={i * 0.08}>
              <div className="card-premium">
                <div className="w-full aspect-[4/5] rounded-md bg-secondary/60 border border-border mb-4" />
                <h3 className="font-display font-semibold text-foreground">{leader.name}</h3>
                <p className="text-sm text-primary">{leader.role}</p>
                <p className="text-xs text-dim mt-1">{leader.focus}</p>
                <p className="text-sm text-muted-foreground mt-3">{leader.bio}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader eyebrow="How we operate" headline="Principles that define us." centered />
        <div className="grid sm:grid-cols-2 gap-5 mt-14 max-w-3xl mx-auto">
          {values.map((v, i) => (
            <RevealSection key={i} delay={i * 0.08}>
              <div className="card-premium">
                <h3 className="font-display font-semibold text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* Quick links */}
    <section className="py-16 bg-secondary/20">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "Operating Model", href: "/company/operating-model" },
            { title: "Regional Nodes", href: "/company/regional-nodes" },
            { title: "Leadership", href: "/company/leadership" },
            { title: "Careers", href: "/company/careers" },
          ].map((link, i) => (
            <RevealSection key={i} delay={i * 0.06}>
              <Link to={link.href} className="block group">
                <div className="card-premium flex items-center justify-between">
                  <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">{link.title}</span>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    <CTABand headline="Want to work with us — or join us?" primaryLabel="Get in touch" secondaryLabel="View careers" secondaryHref="/company/careers" />
  </PageLayout>
);

export default Company;
