import { useState } from "react";
import { z } from "zod";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import RevealSection from "@/components/shared/RevealSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

/* ── Zod validation ── */
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be under 255 characters"),
  company: z.string().trim().max(100, "Company must be under 100 characters").optional().or(z.literal("")),
  role: z.string().trim().max(100, "Role must be under 100 characters").optional().or(z.literal("")),
  type: z.string(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be under 2000 characters"),
});

type FormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

/* ── Inquiry pathways ── */
const pathways = [
  {
    id: "client",
    title: "Client Inquiry",
    desc: "You're an enterprise brand exploring growth, market entry, or commercial acceleration in Southeast Asia.",
    detail: "We'll connect you with a principal who operates in your sector and region.",
  },
  {
    id: "partner",
    title: "Partnership",
    desc: "You're a potential ecosystem, channel, or technology partner exploring collaboration.",
    detail: "We build structured partnerships — not loose affiliations.",
  },
  {
    id: "talent",
    title: "Talent & Careers",
    desc: "You're interested in joining the Enfactum operating bench as a principal or specialist.",
    detail: "We hire operators with domain depth and regional experience.",
  },
  {
    id: "general",
    title: "General",
    desc: "Press, speaking, or something else entirely.",
    detail: "We're happy to hear from you.",
  },
];

/* ── Trust signals ── */
const trustPoints = [
  "Confidential handling of all inquiries",
  "Direct response from a principal — not a sales team",
  "No obligation, no pitch deck unless requested",
  "Typically respond within 48 hours",
];

const officeNodes = [
  { city: "Singapore", role: "Head Office", address: "7 Straits View, #05-01, Marina One East Tower, 018936" },
  { city: "India", role: "Scale & Execution", address: "304, Tower T1, Assotech Business Cresterra, Noida 201304" },
  { city: "Malaysia", role: "Market Node", address: "498-3-7, Wisma Indah, Jalan Tun Razak, Kuala Lumpur" },
  { city: "Indonesia", role: "Market Node", address: "Cyber 2 Tower, 17th Floor, Jl. Rasuna Said, Jakarta 12950" },
  { city: "United States", role: "Strategic Node", address: "45 Rockefeller Plaza, Suite #2000, New York, NY 10111" },
];

/* ── Input component ── */
const FormInput = ({
  label,
  required,
  error,
  ...props
}: {
  label: string;
  required?: boolean;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div>
    <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-body block mb-2.5">
      {label}{required && " *"}
    </label>
    <input
      {...props}
      className="w-full bg-secondary/50 border border-border/60 rounded-sm px-4 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40 focus:bg-secondary/70 transition-all duration-300"
    />
    {error && <p className="text-[12px] text-destructive mt-1.5">{error}</p>}
  </div>
);

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    role: "",
    type: "Client Inquiry",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    toast.success("Message received. We'll be in touch within 48 hours.");
  };

  if (submitted) {
    return (
      <PageLayout>
        <section className="min-h-[70vh] flex items-center justify-center">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-8">
                <Check className="w-7 h-7 text-primary" />
              </div>
              <h1 className="headline-lg mb-6">Thank you.</h1>
              <p className="body-lg max-w-md mx-auto mb-4">
                Your message has been received. A principal from our team will respond directly within 48 hours.
              </p>
              <p className="text-[13px] text-muted-foreground">
                Inquiry type: {form.type}
              </p>
            </motion.div>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <HeroSection
        eyebrow="Contact"
        headline="Start a conversation with Enfactum."
        description="Whether you're exploring growth in Southeast Asia, evaluating a partnership, or considering a role — every conversation starts here."
      />

      {/* ═══ INQUIRY TYPE SELECTION ═══ */}
      <section className="py-24 md:py-32">
        <div className="section-container">
          <RevealSection>
            <p className="eyebrow mb-6">Select your inquiry type</p>
            <p className="text-[13px] text-muted-foreground max-w-lg mb-12">
              This helps us route your message to the right principal on our team.
            </p>
          </RevealSection>

          <div className="grid md:grid-cols-4 gap-0">
            {pathways.map((p, i) => (
              <RevealSection key={p.id} delay={i * 0.05}>
                <button
                  onClick={() => update("type", p.title)}
                  className={`w-full text-left p-8 md:p-9 border-t border-r border-border/30 transition-all duration-500 group h-full ${
                    form.type === p.title
                      ? "bg-primary/[0.04] border-t-primary/40"
                      : "hover:bg-secondary/30"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className={`font-display text-[15px] font-semibold transition-colors duration-300 ${
                      form.type === p.title ? "text-primary" : "text-foreground"
                    }`}>
                      {p.title}
                    </h4>
                    <div className={`w-4 h-4 rounded-full border transition-all duration-300 flex items-center justify-center ${
                      form.type === p.title
                        ? "border-primary bg-primary"
                        : "border-border/60"
                    }`}>
                      {form.type === p.title && <Check className="w-2.5 h-2.5 text-primary-foreground" />}
                    </div>
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                  <p className="text-[11px] text-muted-foreground/60 leading-relaxed">{p.detail}</p>
                </button>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FORM + TRUST PANEL ═══ */}
      <section className="section-alt py-28 md:py-40">
        <div className="section-container">
          <div className="grid md:grid-cols-12 gap-16 md:gap-20">
            {/* Left — Form */}
            <div className="md:col-span-7">
              <RevealSection>
                <div className="section-divider mb-16" />
                <p className="eyebrow mb-4">Your details</p>
                <h2 className="headline-lg mb-4">Tell us about your challenge.</h2>
                <p className="body-md text-muted-foreground mb-12 max-w-lg">
                  The more context you provide, the more relevant our initial response will be.
                </p>

                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid md:grid-cols-2 gap-7">
                    <FormInput
                      label="Name"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Full name"
                      maxLength={100}
                      error={errors.name}
                    />
                    <FormInput
                      label="Email"
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="your@email.com"
                      maxLength={255}
                      error={errors.email}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-7">
                    <FormInput
                      label="Company"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      placeholder="Organisation name"
                      maxLength={100}
                      error={errors.company}
                    />
                    <FormInput
                      label="Role"
                      value={form.role}
                      onChange={(e) => update("role", e.target.value)}
                      placeholder="Your title or function"
                      maxLength={100}
                      error={errors.role}
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-body block mb-2.5">
                      Message *
                    </label>
                    <textarea
                      rows={6}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      maxLength={2000}
                      placeholder="Describe the challenge, opportunity, or context. What are you trying to achieve in Southeast Asia?"
                      className="w-full bg-secondary/50 border border-border/60 rounded-sm px-4 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40 focus:bg-secondary/70 transition-all duration-300 resize-none"
                    />
                    {errors.message && <p className="text-[12px] text-destructive mt-1.5">{errors.message}</p>}
                    <p className="text-[11px] text-muted-foreground/40 mt-2 text-right">
                      {form.message.length} / 2000
                    </p>
                  </div>

                  <div className="flex items-center gap-6 pt-2">
                    <Button type="submit" variant="hero" size="lg">
                      Send message
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                    <span className="text-[12px] text-muted-foreground/50">
                      Inquiry: {form.type}
                    </span>
                  </div>
                </form>
              </RevealSection>
            </div>

            {/* Right — Trust panel */}
            <div className="md:col-span-5 md:col-start-8">
              <RevealSection delay={0.15}>
                <div className="section-divider mb-16" />
                <p className="eyebrow mb-8">What to expect</p>

                <div className="space-y-5 mb-16">
                  {trustPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-primary/60 mt-2 shrink-0" />
                      <p className="text-[14px] text-secondary-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border/30 pt-12 mb-16">
                  <p className="eyebrow mb-6">Direct contact</p>
                  <div className="space-y-5">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground/50 font-body mb-1.5">Email</p>
                      <a href="mailto:hello@enfactum.com" className="text-[15px] text-foreground hover:text-primary transition-colors duration-300">
                        hello@enfactum.com
                      </a>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground/50 font-body mb-1.5">LinkedIn</p>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] text-foreground hover:text-primary transition-colors duration-300"
                      >
                        Enfactum on LinkedIn →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/30 pt-12">
                  <p className="eyebrow mb-6">Regional nodes</p>
                  <div className="space-y-4">
                    {officeNodes.map((node) => (
                      <div key={node.city} className="mb-1">
                        <div className="flex items-baseline justify-between">
                          <span className="font-display text-[14px] font-medium text-foreground">{node.city}</span>
                          <span className="text-[12px] text-muted-foreground">{node.role}</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground/50 mt-0.5">{node.address}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRIVACY FOOTER ═══ */}
      <section className="py-16">
        <div className="section-container">
          <div className="section-divider mb-12" />
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                All inquiries are handled confidentially. We do not share your information with third parties.
                By submitting this form, you agree to receive a response from our team.
              </p>
            </div>
            <div className="md:col-span-5 md:col-start-8 flex items-end justify-end">
              <p className="text-[11px] text-muted-foreground/40">
                Singapore · India · Malaysia · Indonesia · USA
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
