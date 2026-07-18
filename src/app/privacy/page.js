export const metadata = {
  title: 'Privacy Policy - X-Maker Studio',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-300 py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-400">Last Updated: July 18, 2026</p>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
          <p>
            Welcome to X-Maker Studio. We offer browser extensions, including <strong>X-Maker Pro</strong> and <strong>AI Ad Purifier - One-Click Ad Blocker</strong>. This Privacy Policy describes how we collect, use, store, process, and share user data when you install and use our extensions or visit our website.
          </p>
          <p>
            We are committed to the principle of data minimization. We only collect and process data that is strictly necessary to provide our services, and we never sell your data to third parties.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">2. Data We Collect and Process</h2>
          
          <div className="space-y-4 pl-4 border-l-2 border-indigo-500">
            <h3 className="text-xl font-medium text-white">A. AI Ad Purifier (Chrome Extension)</h3>
            <p>
              To provide intelligent ad-blocking features, the extension accesses and processes the following data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Active Page Content (DOM):</strong> When you explicitly click the "AI One-Click Clean" button, the extension reads the text structure and HTML elements (DOM) of the active tab. This is necessary to analyze the page structure and identify advertising elements.
              </li>
              <li>
                <strong>Local Storage Data:</strong> We store your premium activation code (Order ID), user-configured settings, and locally generated CSS selectors (ad-blocking rules) on your device using Chrome's local storage API.
              </li>
              <li>
                <strong>Network Requests:</strong> The extension sends the page DOM data securely over HTTPS to our backend server to query the AI model for ad-blocking rules.
              </li>
            </ul>

            <h3 className="text-xl font-medium text-white">B. X-Maker Pro (Chrome Extension)</h3>
            <p>
              To write viral X (Twitter) posts and threads, the extension processes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Active Page Content:</strong> When you trigger the AI content generator, the extension reads the text content of the webpage you are currently viewing to generate summary posts or threads.
              </li>
              <li>
                <strong>Local Storage Data:</strong> We store your License Key, tone preferences, custom prompt templates, and extension state locally on your device.
              </li>
            </ul>

            <h3 className="text-xl font-medium text-white">C. Billing & Payment Information</h3>
            <p>
              If you purchase a premium license for any of our extensions, the transaction is handled entirely by our third-party merchant of record, <strong>Waffo Pancake</strong>. They collect your billing name, email address, and payment card details. We do not store or process your credit card numbers on our servers. We receive and store only your payment confirmation, email address, and the generated Order ID for license validation.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">3. How We Use Your Data</h2>
          <p>We use the collected information only for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>To execute core features:</strong> Generating AI ad-blocking selectors (for AI Ad Purifier) or writing posts/threads (for X-Maker Pro) based on the active tab content you submit.</li>
            <li><strong>License Verification:</strong> Validating your Order ID/License Key against our backend database to verify your premium access.</li>
            <li><strong>To improve performance:</strong> Analyzing anonymous server error logs to fix bugs and improve extension response speeds.</li>
          </ul>
          <p>We do not use your personal data or page content for advertising, user profiling, tracking, or marketing purposes.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">4. Data Sharing and Disclosure</h2>
          <p>We only share data with third parties in the following limited scenarios:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>AI Model Providers:</strong> When you trigger AI operations, the page DOM text structure is transmitted securely via HTTPS to our backend server and then sent to <strong>DeepSeek API</strong> or <strong>OpenAI API</strong>. No personal identifiers (such as names, emails, IP addresses, or account details) are shared with the AI providers.
            </li>
            <li>
              <strong>Payment Processors:</strong> Your email and transaction metadata are shared with <strong>Waffo Pancake</strong> to process purchases and manage invoices.
            </li>
            <li>
              <strong>Legal Compliance:</strong> We may disclose information if required by law, subpoena, or government regulation.
            </li>
          </ul>
          <p><strong>We never sell, rent, or trade your data to third-party advertisers or data brokers.</strong></p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">5. Data Retention, Security, and Storage Location</h2>
          <p>
            <strong>Zero Server Storage for Page Content:</strong> Web page DOM structure data sent to our backend server is processed entirely in-memory. It is immediately discarded after generating the ad-blocking rules and is never saved to any database, file, or log.
          </p>
          <p>
            <strong>Local Data:</strong> All configuration settings, custom rules, and license keys remain stored on your physical device via Chrome's Local Storage. You can clear this data completely at any time by uninstalling the extension or clearing extension site data.
          </p>
          <p>
            <strong>Security:</strong> All network communications between the extension, our backend servers, and third-party APIs are encrypted using industry-standard Transport Layer Security (TLS/HTTPS).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">6. User Rights (Access, Deletion, and Portability)</h2>
          <p>
            You have the right to access, export, correct, or delete any personal information we process. 
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              To delete all data associated with the extension on your machine, simply clear your browser cache or uninstall the extension.
            </li>
            <li>
              To request the deletion of your purchase email, billing record, or database license entry, please contact us at <a href="mailto:huangzhenye2025@gmail.com" className="text-indigo-400 hover:underline">huangzhenye2025@gmail.com</a>. We will process your request within 30 days.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">7. Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this page periodically.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">8. Contact Information</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy or data processing, please contact us at:
          </p>
          <p className="font-semibold text-white">
            Email: <a href="mailto:huangzhenye2025@gmail.com" className="text-indigo-400 hover:underline">huangzhenye2025@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}

