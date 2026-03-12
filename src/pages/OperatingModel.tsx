import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SectionHeader from "@/components/shared/SectionHeader";
import RevealSection from "@/components/shared/RevealSection";
import CTABand from "@/components/shared/CTABand";
import { Button } from "@/components/ui/button";

const processSteps = [
  { step: "Define", desc: "Diagnose the growth challenge. Align stakeholders. Set clear commercial objectives and success metrics." },
  { step: "Build", desc: "Design the infrastructure — strategy, partnerships, programmes, and teams needed to move growth forward." },
  { step: "Operate", desc: "Embed within the business. Execute hands-on. Run the programmes, manage the partners, drive the outcomes." },
  { step: "Transfer", desc: "Build internal capability. Systematise processes. Transfer ownership to client teams with full documentation." },
  { step: "Scale", desc: "Expand across markets, channels, and partners using proven playbooks and operational frameworks." },
];

const engagementTypes = [
  { title: "Consulting", desc: "Strategic advisory for specific growth challenges. Diagnostics, strategy, and recommendations.", duration: "4–12 weeks" },
  { title: "Embedded Team", desc: "Enfactum operators embedded within your organisation for sustained execution and capability building.", duration: "6–18 months" },
  { title: "Build-Operate-Transfer", desc: "We build the capability, operate it until proven, then transfer full ownership to your team.", duration: "12–24 months" },
  { title: "Programme Build", desc: "End-to-end design and launch of growth programmes — partner ecosystems, innovation labs, market activations.", duration: "3–12 months" },
];

const OperatingModel = () => (
  <PageLayout>
    <HeroSection
      eyebrow="Operating Model"
      headline="From strategy to scale. Structured for real outcomes."
      description="Enfactum's operating model is designed for execution, not just advice. We embed, build, operate, and transfer — so growth has lasting infrastructure."
    >
      <Link to="/contact"><Button variant="hero" size="xl">Discuss engagement</Button></Link>
    </HeroSection>

    {/* Framework */}
    <section className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader eyebrow="Framework" headline="Define → Build → Operate → Transfer → Scale" centered />
        <div className="mt-16 space-y-0">
          {processSteps.map((step, i) => (
            <RevealSection key={i} delay={i * 0.08}>
              <div className="flex items-start gap-6 py-6 border-b border-border last:border-0">
                <div className="w-12 h-12 rounded-full border border-primary/40 bg-background flex items-center justify-center shrink-0">
                  <span className="text-sm font-display font-bold text-primary">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{step.step}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    {/* Engagement Types */}
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="section-container">
        <SectionHeader eyebrow="Engagement types" headline="Structured for your needs." centered />
        <div className="grid sm:grid-cols-2 gap-5 mt-14">
          {engagementTypes.map((type, i) => (
            <RevealSection key={i} delay={i * 0.08}>
              <div className="card-premium h-full">
                <h3 className="font-display text-lg font-semibold text-foreground">{type.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{type.desc}</p>
                <p className="text-xs text-primary mt-4">Typical duration: {type.duration}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>

    <CTABand headline="Ready to explore an engagement?" primaryLabel="Start a conversation" />
  </PageLayout>
);

export default OperatingModel;
