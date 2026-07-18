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

            <h3 className="text-xl font-medium text-white">C. Payment & Billing Information Collection</h3>
            <p>
              When you purchase a license key, all checkout processes are securely processed by our Merchant of Record, <strong>Waffo Pancake</strong> (Waffo Technology Ltd).
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>What Waffo Collects:</strong> Payment transaction data including full name, billing address, email address, IP address, and credit/debit card numbers or digital wallet details.</li>
              <li><strong>What We Store:</strong> We do <strong>not</strong> collect or store full credit card numbers or banking information on X-Maker servers. We collect and retain only your customer email address, generated Order ID (`ORD_xxx`), transaction timestamp, license status (`active` or `refunded`), and gross purchase amount to generate key entitlements and process refunds.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">3. How We Use Your Data</h2>
          <p>We use the collected information only for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>To execute core features:</strong> Generating AI ad-blocking selectors (for AI Ad Purifier) or writing posts/threads (for X-Maker Pro) based on the active tab content you submit.</li>
            <li><strong>License Verification:</strong> Validating your Order ID/License Key against our backend database to verify your premium access.</li>
            <li><strong>Customer Support & Accounting:</strong> Managing subscription status, issuing requested refunds, and fulfilling tax or merchant accounting duties.</li>
          </ul>
          <p>We do not use your personal data or page content for advertising, user profiling, tracking, or marketing purposes.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">4. Third-Party Data Sharing and Disclosure</h2>
          <p>We share minimal necessary data with specific third-party service providers solely to operate our product:</p>
          <div className="bg-gray-900/60 border border-gray-800 p-6 rounded-xl space-y-4">
            <div>
              <h4 className="font-semibold text-white">1. Merchant of Record & Payment Gateway (Waffo Pancake)</h4>
              <p className="text-sm text-gray-400">
                Billing details, purchase amounts, customer email, and payment tokens are shared with <strong>Waffo Pancake</strong> to authorize payments, prevent fraud, issue receipts, and process refunds. Refer to Waffo Privacy Policy for detailed payment data handling.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white">2. AI Infrastructure Providers (DeepSeek / OpenAI)</h4>
              <p className="text-sm text-gray-400">
                Non-identifiable text snippets or DOM page structures are transmitted securely over TLS to AI inference providers (such as DeepSeek API). No personal billing information, IP addresses, or customer account details are ever transmitted to AI providers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white">3. Cloud Hosting & Database Infrastructure (MongoDB Atlas & Render)</h4>
              <p className="text-sm text-gray-400">
                License keys and Order IDs are stored in encrypted cloud database collections (MongoDB Atlas) hosted on secure cloud servers (Render) to perform API key authentication.
              </p>
            </div>
          </div>
          <p><strong>We never sell, rent, or trade your personal data to third-party data brokers or advertising networks.</strong></p>
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

