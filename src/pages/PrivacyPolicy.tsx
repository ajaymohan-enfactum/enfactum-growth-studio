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
        <div className="space-y-10">
          <div>
            <p className="text-sm text-muted-foreground">Last updated: 27 November 2023</p>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enfactum ("Enfactum", "us", "we" or "our") has created this Privacy Policy ("Policy") to comprehensively inform individuals about our privacy practices and a firm commitment to privacy. We respect your privacy and are committed to protecting your personal data and strictly limiting any disclosure in accordance with applicable local laws and regulations. This Policy describes how we collect, use, disclose, transfer, store, retain or otherwise process personal information in performing our integrated marketing services and other business activities, including administration of our website and communications between you and Enfactum.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              When we refer to "you" or "your", we mean the person we collect personal information about. If you access our website or services on behalf of another person or entity, "you" and "your" refer to both you and that person or entity.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We provide integrated marketing services to businesses, not individual consumers. However, we may collect personal information of individuals in providing services to our clients. This may include information collected from our website visitors, client contacts, or sole proprietor clients that engage our services.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-muted-foreground leading-relaxed">This Policy includes:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground leading-relaxed">
              <li>Collection of Personal Information</li>
              <li>Use of Personal Information</li>
              <li>Disclosure to Third Parties</li>
              <li>Data Retention</li>
              <li>Individual Rights</li>
              <li>Data Security</li>
              <li>Contact Information</li>
              <li>Changes to This Policy</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">Collection of Personal Information</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enfactum collects personal information from clients and website visitors necessary to provide marketing services, fulfill requests, respond to inquiries, or customize website content. This may include name, contact information, demographic information, preferences, interests, and other information relevant to tailoring marketing campaigns and materials. Information is collected directly when provided voluntarily. Enfactum may also collect information from publicly available sources.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">Use of Personal Information</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enfactum uses personal information to provide contracted marketing services to clients, analyze the effectiveness of marketing campaigns, customize website content and marketing messages, send marketing communications to clients and subscribers, and for other legitimate business purposes disclosed at the time of collection.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">Disclosure to Third Parties</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enfactum discloses personal information to third-party service providers and partners solely for purposes disclosed at collection and with appropriate privacy and security controls. Enfactum otherwise does not share personal information externally except to meet legal requirements, comply with regulations, or protect our legal rights.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">Data Retention</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enfactum retains personal information for the period necessary to fulfill the purposes outlined in this privacy policy unless a longer retention period is required or permitted by law.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">Individual Rights</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Individuals have the right to request access to, correction of, deletion of, or restriction of our use of their personal data, as well as the right to data portability and to object to processing subject to limitations under applicable regulations. Individuals also have the right to withdraw consent at any time.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">Data Security</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enfactum maintains reasonable and appropriate security measures commensurate with applicable privacy and data security regulations to protect against unauthorized access, disclosure, use or loss of personal information in our possession.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">Contact Information</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For any questions or concerns regarding this privacy policy or to exercise data subject rights requests, please contact us at <a href="mailto:info@enfactum.com" className="text-primary hover:underline">info@enfactum.com</a>.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">Changes to This Policy</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enfactum may update this privacy policy to comply with changing legal requirements or address new issues. We will appropriately notify website visitors and clients of any significant changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default PrivacyPolicy;
