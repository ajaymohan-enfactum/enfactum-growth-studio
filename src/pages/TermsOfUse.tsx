import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import SEOHead from "@/components/shared/SEOHead";

const TermsOfUse = () => (
  <PageLayout>
    <SEOHead
      title="Terms of Use"
      description="Terms and conditions governing the use of the Enfactum website and services."
      path="/terms"
    />
    <HeroSection
      eyebrow="Legal"
      headline="Terms of Use"
      compact
    />

    <section className="py-16 md:py-24">
      <div className="section-container max-w-3xl">
        <div className="prose-enfactum space-y-10">
          <div>
            <p className="text-sm text-muted-foreground">Last updated: March 2026</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              By accessing and using the Enfactum website ("Site"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">2. Use of the Site</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You may use the Site for lawful purposes only. You agree not to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
              <li>Use the Site in any way that violates applicable laws or regulations.</li>
              <li>Attempt to gain unauthorised access to any part of the Site or its systems.</li>
              <li>Reproduce, distribute, or create derivative works from Site content without prior written consent.</li>
              <li>Use automated tools to scrape, crawl, or extract data from the Site.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">3. Intellectual Property</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All content on the Site — including text, graphics, logos, images, and software — is the property of Enfactum Pte. Ltd. or its licensors and is protected by applicable intellectual property laws. The Enfactum name, logo, and all related marks are trademarks of Enfactum Pte. Ltd.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">4. Third-Party Links</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Site may contain links to third-party websites. These links are provided for convenience only and do not imply endorsement. Enfactum is not responsible for the content or practices of linked sites.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">5. Disclaimer</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Site and its content are provided "as is" without warranties of any kind, either express or implied. Enfactum does not warrant that the Site will be uninterrupted, error-free, or free from harmful components.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">6. Limitation of Liability</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, Enfactum shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">7. Governing Law</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the Republic of Singapore, without regard to its conflict of law provisions.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">8. Changes to Terms</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enfactum reserves the right to modify these Terms at any time. Changes will be effective upon posting to the Site. Your continued use of the Site constitutes acceptance of any modifications.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">9. Contact</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For questions about these Terms, please contact us at:<br />
              <a href="mailto:hello@enfactum.com" className="text-primary hover:underline">hello@enfactum.com</a><br />
              7 Straits View, #05-01, Marina One East Tower, Singapore 018936
            </p>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default TermsOfUse;
