export const metadata = {
  title: 'Privacy Policy - X-Maker Pro',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-300 py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
          <p>Welcome to X-Maker Pro. This Privacy Policy explains how we handle your data when you use our Chrome Extension.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">2. Data Collection & Usage</h2>
          <p>Our extension accesses the content of the active webpage you are viewing ONLY when you explicitly click the extension icon or use the right-click menu. This text is sent securely to our AI backend to generate Twitter threads.</p>
          <p><strong>We do NOT store, sell, or share this data.</strong> It is processed in real-time and immediately discarded after the AI response is generated.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">3. Local Storage</h2>
          <p>We use your browser's local storage to save your License Key, tone preferences, and custom prompts. This data never leaves your device.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">4. Remote Code</h2>
          <p>Our extension does not execute any remote code or scripts. All core extension logic is bundled locally.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">5. Contact</h2>
          <p>If you have any questions, please contact us through our main website.</p>
        </section>
      </div>
    </div>
  );
}
