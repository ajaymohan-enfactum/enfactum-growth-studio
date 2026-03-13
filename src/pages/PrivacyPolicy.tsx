import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SEOHead from "@/components/shared/SEOHead";

const PrivacyPolicy = () => (
  <PageLayout>
    <SEOHead
      title="Privacy Policy"
      description="Enfactum's privacy policy — how we collect, use, and protect your personal information."
      path="/privacy"
    />
    <HeroSection
      eyebrow="Legal"
      headline="Privacy Policy"
      compact
    />

    <section className="py-16 md:py-24">
      <div className="section-container max-w-3xl">
        <div className="prose-enfactum space-y-10">
          <div>
            <p className="text-sm text-muted-foreground">Last updated: March 2026</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">1. Introduction</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enfactum Pte. Ltd. ("Enfactum", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or engage with our services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">2. Information We Collect</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
              <li><strong className="text-foreground">Contact information</strong> — name, email address, phone number, and company name provided through our contact forms.</li>
              <li><strong className="text-foreground">Usage data</strong> — information about how you interact with our website, including pages visited, time spent, and referring URLs.</li>
              <li><strong className="text-foreground">Device information</strong> — browser type, operating system, IP address, and device identifiers.</li>
              <li><strong className="text-foreground">Cookies and tracking</strong> — we use cookies and similar technologies to improve your experience and analyse website performance.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
              <li>To respond to enquiries and provide requested services.</li>
              <li>To improve and personalise your experience on our website.</li>
              <li>To analyse website usage and optimise performance.</li>
              <li>To comply with legal obligations and enforce our terms.</li>
              <li>To send relevant updates about our services, where you have opted in.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">4. Sharing of Information</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We do not sell your personal information. We may share information with trusted third-party service providers who assist us in operating our website and delivering our services, subject to appropriate confidentiality and data protection obligations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">5. Data Retention</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">6. Your Rights</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your personal data. To exercise these rights, please contact us at <a href="mailto:hello@enfactum.com" className="text-primary hover:underline">hello@enfactum.com</a>.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">7. Security</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal information. However, no method of transmission over the internet is completely secure.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">8. Contact</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:<br />
              <a href="mailto:hello@enfactum.com" className="text-primary hover:underline">hello@enfactum.com</a><br />
              71 Robinson Road, #14-01, Singapore 068895
            </p>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default PrivacyPolicy;
