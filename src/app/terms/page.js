export const metadata = {
  title: 'Terms of Service - X-Maker Pro',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-300 py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">1. Agreement to Terms</h2>
          <p>By purchasing a license key or using X-Maker Pro, you agree to be bound by these Terms of Service. If you do not agree, please do not use the extension.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">2. License</h2>
          <p>We grant you a personal, non-transferable, non-exclusive, lifetime license to use X-Maker Pro on your supported browsers, subject to the terms of your purchase.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">3. Acceptable Use & Violation</h2>
          <p>You agree not to abuse, exploit, reverse engineer, or redistribute the extension. You may not use the AI generation service for illegal purposes or to spam the platform.</p>
          <p><strong>Any violation of these terms will lead to immediate suspension or termination of your service, revoking of your license keys without refund, and we reserve the right to pursue legal remedies.</strong></p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">4. Disclaimer of Warranties</h2>
          <p>X-Maker Pro is provided "as is" without warranty of any kind. We do not guarantee that the extension will be uninterrupted, error-free, or meet all of your requirements.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">5. Refund Policy</h2>
          <p>Since the product is a digital product and comes with lifetime access, refunds are subject to our merchant guidelines. Please contact support if you encounter any severe technical issues.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">6. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Your continued use of the extension constitutes acceptance of the new terms.</p>
        </section>
      </div>
    </div>
  );
}
