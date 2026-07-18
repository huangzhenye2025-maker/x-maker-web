export const metadata = {
  title: 'Terms of Service - X-Maker Studio',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-300 py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-sm text-gray-400">Last Updated: July 18, 2026</p>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">1. Agreement to Terms</h2>
          <p>
            By purchasing a license key, downloading, or using software services provided by <strong>X-Maker Studio</strong> (including <strong>X-Maker Pro</strong> and <strong>AI Ad Purifier</strong>), you enter into a legally binding agreement to these Terms of Service. If you do not agree to these terms, please do not purchase or use our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">2. Pricing, Billing, and License Scope</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Pricing & Payment:</strong> Prices for our digital software licenses (e.g., $9.99 USD lifetime access) are clearly specified at checkout. Payments are billed securely via our merchant of record, <strong>Waffo Pancake</strong>.</li>
            <li><strong>License Grant:</strong> Upon valid payment, we grant you a non-exclusive, non-transferable, personal license to use the software on your authorized browser devices.</li>
            <li><strong>Single Tier:</strong> Purchases provide lifetime software access for one user key, including all minor software maintenance updates.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">3. Refund & Cancellation Policy</h2>
          <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-xl space-y-3">
            <p><strong>Standard 7-Day Refund Window:</strong> Because our products are digital software licenses that provide instant access, refunds are evaluated fairly under the following conditions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Eligible Refunds:</strong> You may request a full refund within <strong>7 calendar days</strong> of purchase if you experience non-resolvable technical failures, severe server incompatibility, or duplicate unintended charges.</li>
              <li><strong>Ineligible Refunds:</strong> Refunds will not be granted after 7 days from purchase, for change of mind after significant key usage, or if your license key is revoked due to violations of our Acceptable Use Policy.</li>
              <li><strong>How to Request a Refund:</strong> Contact our support team at <a href="mailto:huangzhenye2025@gmail.com" className="text-[#1DA1F2] underline">huangzhenye2025@gmail.com</a> with your Waffo Order ID (`ORD_xxx`) and proof of purchase. Eligible refunds will be processed back to your original payment method within 5-10 business days.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">4. Acceptable Use & Conduct Restrictions</h2>
          <p>You must use X-Maker Studio software in full compliance with our <a href="/aup" className="text-[#1DA1F2] underline hover:text-[#0d8bd9]">Acceptable Use Policy (AUP)</a>.</p>
          <p>
            You agree not to reverse engineer, decompile, resell, or distribute license keys without written permission. Generating illegal content, malicious automated spam, hate speech, or deceptive impersonation using our AI tools is strictly prohibited. Violations will result in immediate license revocation without refund.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">5. Disclaimer of Warranties & Limitation of Liability</h2>
          <p>
            X-Maker Studio software is provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> basis without warranties of any kind, whether express or implied.
          </p>
          <p>
            To the maximum extent permitted by law, X-Maker Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues resulting from your use of or inability to use our software or third-party AI APIs.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">6. Governing Law & Dispute Resolution</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws applicable to digital commerce and merchant services, without regard to conflict of law principles. Any disputes arising from these Terms or your purchase shall be resolved through good-faith negotiation or binding consumer arbitration.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">7. Contact Information</h2>
          <p>
            If you have any questions regarding these Terms or billing inquiries, please contact us at: <a href="mailto:huangzhenye2025@gmail.com" className="text-[#1DA1F2] underline">huangzhenye2025@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

