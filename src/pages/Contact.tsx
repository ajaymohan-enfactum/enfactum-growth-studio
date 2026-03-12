import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import RevealSection from "@/components/shared/RevealSection";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const pathways = [
  { title: "Client Inquiry", desc: "You're an enterprise brand exploring growth in Southeast Asia." },
  { title: "Partner Conversation", desc: "You're a potential ecosystem, channel, or technology partner." },
  { title: "Talent / Careers", desc: "You're interested in joining the Enfactum team." },
  { title: "General Contact", desc: "Something else — we're happy to hear from you." },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "Client Inquiry", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you. We'll be in touch within 48 hours.");
    setForm({ name: "", email: "", company: "", type: "Client Inquiry", message: "" });
  };

  return (
    <PageLayout>
      <HeroSection
        eyebrow="Contact"
        headline="Start a conversation."
        description="Whether you're exploring growth in Southeast Asia, partnership opportunities, or a career with Enfactum — we'd like to hear from you."
      />

      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Pathways + Trust */}
            <div>
              <RevealSection>
                <h3 className="headline-md mb-8">How can we help?</h3>
                <div className="space-y-4">
                  {pathways.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => setForm({ ...form, type: p.title })}
                      className={`w-full text-left card-premium transition-all ${
                        form.type === p.title ? "border-primary/50" : ""
                      }`}
                    >
                      <h4 className="font-display font-semibold text-foreground text-sm">{p.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
                    </button>
                  ))}
                </div>
              </RevealSection>

              <RevealSection className="mt-12">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-dim uppercase tracking-wider">Response time</p>
                    <p className="text-sm text-foreground mt-1">Within 48 hours</p>
                  </div>
                  <div>
                    <p className="text-xs text-dim uppercase tracking-wider">Email</p>
                    <p className="text-sm text-foreground mt-1">hello@enfactum.com</p>
                  </div>
                  <div>
                    <p className="text-xs text-dim uppercase tracking-wider">Offices</p>
                    <p className="text-sm text-foreground mt-1">Singapore · India · Malaysia · Indonesia</p>
                  </div>
                  <div>
                    <p className="text-xs text-dim uppercase tracking-wider">Connect</p>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </RevealSection>
            </div>

            {/* Form */}
            <RevealSection delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs text-dim uppercase tracking-wider block mb-2">Name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-dim focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs text-dim uppercase tracking-wider block mb-2">Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-dim focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs text-dim uppercase tracking-wider block mb-2">Company</label>
                  <input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-dim focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="text-xs text-dim uppercase tracking-wider block mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-dim focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send message
                </Button>
              </form>
            </RevealSection>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <div className="section-container text-center">
          <p className="text-sm text-muted-foreground">
            We respect your privacy. All inquiries are handled confidentially.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
