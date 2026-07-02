import './globals.css';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <main>
      <div className="bg-blob"></div>
      
      {/* Navigation */}
      <nav className="container" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-display)', letterSpacing: '-0.5px' }}>
          X<span style={{ color: 'var(--accent-color)' }}>Maker</span>
        </div>
        <div>
          <a href="#features" style={{ marginRight: '24px', color: 'var(--text-secondary)', fontWeight: 600 }}>Features</a>
          <a href="#pricing" style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Pricing</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center', 
        paddingTop: '120px',
        paddingBottom: '80px'
      }}>
        <FadeIn yOffset={30}>
          <div style={{ 
            display: 'inline-block', 
            padding: '6px 16px', 
            background: 'rgba(29, 161, 242, 0.1)', 
            color: 'var(--accent-color)', 
            borderRadius: '50px',
            fontWeight: 600,
            fontSize: '0.9rem',
            marginBottom: '24px',
            border: '1px solid rgba(29, 161, 242, 0.2)'
          }}>
            ✨ The Ultimate Chrome Extension for X
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1} yOffset={40}>
          <h1 style={{ 
            fontSize: '4.5rem', 
            fontFamily: 'var(--font-display)', 
            fontWeight: 900, 
            lineHeight: 1.1,
            marginBottom: '24px',
            letterSpacing: '-1.5px'
          }}>
            Turn Any Webpage Into <br/>
            <span style={{ color: 'var(--accent-color)' }}>Viral Tweets</span> in 1-Click.
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.2} yOffset={30}>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-secondary)', 
            maxWidth: '600px', 
            marginBottom: '40px' 
          }}>
            Stop reading and start creating. X-Maker reads the page for you, extracts the core message, and writes highly engaging tweets directly from your browser.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.3} yOffset={20}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#pricing" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Get Started Now
            </a>
            <a href="#features" style={{
              padding: '14px 32px',
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '50px',
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              display: 'flex',
              alignItems: 'center'
            }}>
              See how it works
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Features Section */}
      <section id="features" className="container" style={{ paddingTop: '80px' }}>
        <FadeIn>
          <h2 className="section-title">Built for Indie Hackers</h2>
          <p className="section-subtitle">Everything you need to grow your X audience effortlessly.</p>
        </FadeIn>
        
        <div className="features-grid">
          <FadeIn delay={0.1}>
            <div className="feature-card glass-panel">
              <div className="feature-icon">✨</div>
              <h3 className="feature-title">1-Click Popup</h3>
              <p className="feature-desc">Open the extension on any page and click "Generate". Our AI instantly reads the content and writes an engaging thread.</p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="feature-card glass-panel">
              <div className="feature-icon">🖱️</div>
              <h3 className="feature-title">Context Menu Magic</h3>
              <p className="feature-desc">Highlight any text, right-click, and transform it into a viral tweet using our invisible Service Worker integration.</p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="feature-card glass-panel">
              <div className="feature-icon">🐦</div>
              <h3 className="feature-title">Floating Action Button</h3>
              <p className="feature-desc">A beautiful glassmorphic button injected into every webpage you visit. Your X assistant is always just one click away.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container" style={{ paddingTop: '80px' }}>
        <FadeIn>
          <h2 className="section-title">Simple Pricing</h2>
          <p className="section-subtitle">Pay once. Use forever. No subscriptions.</p>
        </FadeIn>
        
        <div className="pricing-section">
          <FadeIn delay={0.2} yOffset={100}>
            <div className="pricing-card glass-panel">
              <div className="pricing-badge">Most Popular</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Pro License</h3>
              <div className="price-amount">$9.99</div>
              <div className="price-period">Lifetime Access</div>
              
              <ul className="pricing-features">
                <li>✅ Unlimited Tweet Generation</li>
                <li>✅ Right-Click Context Menu</li>
                <li>✅ Floating Action Button</li>
                <li>✅ Private Rate-Limit Protection</li>
                <li>✅ Priority Email Support</li>
              </ul>
              
              <a href="https://haye-studio.lemonsqueezy.com/checkout/buy/ac8b1710-63ce-40f1-8883-40deb3d50330" 
                 target="_blank" rel="noopener noreferrer" 
                 className="btn-primary btn-full" style={{ display: 'inline-block', textDecoration: 'none' }}>
                Buy License Key
              </a>
              <p style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Secured by Lemon Squeezy 🍋
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-secondary)', borderTop: '1px solid var(--card-border)', marginTop: '80px' }}>
        <p>© 2026 X-Maker Pro. Built by Indie Hacker.</p>
      </footer>
    </main>
  );
}
