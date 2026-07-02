import './globals.css';
import FadeIn from '@/components/FadeIn';
import MouseGlow from '@/components/MouseGlow';

export default function Home() {
  return (
    <main>
      <MouseGlow />
      <div className="bg-blob"></div>
      
      {/* Navigation */}
      <header className="nav-header">
        <div className="nav-container">
          <div className="nav-logo">
            X<span style={{ color: 'var(--accent-color)' }}>Maker</span>
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <a href="#features" style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Features</a>
            <a href="#pricing" style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Pricing</a>
            <a href="#pricing" className="nav-btn">Get Pro</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center', 
        paddingTop: '100px',
        paddingBottom: '60px'
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
            <a href="#demo" style={{
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

      {/* Demo Section */}
      <section id="demo" className="container demo-section">
        <FadeIn delay={0.4}>
          <div className="demo-placeholder">
            <div className="play-button">
              <div className="play-icon"></div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontWeight: 600, zIndex: 1 }}>Watch the 1-minute demo</p>
          </div>
        </FadeIn>
      </section>

      {/* Features Section */}
      <section id="features" className="container">
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
              <div className="feature-icon">🎭</div>
              <h3 className="feature-title">Multiple Tones</h3>
              <p className="feature-desc">Switch between Tech Bro, Professional, Funny, or Thread styles to match your personal brand perfectly.</p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="feature-card glass-panel">
              <div className="feature-icon">🐦</div>
              <h3 className="feature-title">Custom Prompts</h3>
              <p className="feature-desc">Need something specific? Add your own custom instructions to guide the AI for the perfect hook.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container testimonials-section">
        <FadeIn>
          <h2 className="section-title">Wall of Love</h2>
          <p className="section-subtitle">See what other creators are saying about X-Maker.</p>
        </FadeIn>
        
        <div className="testimonials-grid">
          <FadeIn delay={0.1}>
            <div className="testimonial-card">
              <p className="testimonial-text">"I used to spend 2 hours a day reading articles and trying to summarize them for my audience. X-Maker literally reduced that to 5 minutes. Best $10 I've ever spent."</p>
              <div className="testimonial-author">
                <div className="avatar">👨‍💻</div>
                <div className="author-info">
                  <h4>Alex Chen</h4>
                  <p>Indie Hacker • 12k Followers</p>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="testimonial-card">
              <p className="testimonial-text">"The 'Tech Bro' tone is hilariously accurate. My engagement has doubled since I started using this to reply to trending tech news."</p>
              <div className="testimonial-author">
                <div className="avatar">🚀</div>
                <div className="author-info">
                  <h4>Sarah Jenks</h4>
                  <p>SaaS Founder • 34k Followers</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="testimonial-card">
              <p className="testimonial-text">"I bought this for the Chrome extension, but the invisible context menu feature blew my mind. Highlight, right-click, boom. Tweet ready."</p>
              <div className="testimonial-author">
                <div className="avatar">🔥</div>
                <div className="author-info">
                  <h4>David Kim</h4>
                  <p>Growth Marketer • 8k Followers</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container">
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
                <li>✅ Multiple Tones & Custom Prompts</li>
                <li>✅ Right-Click Context Menu</li>
                <li>✅ Private Rate-Limit Protection</li>
                <li>✅ Priority Email Support</li>
              </ul>
              
              <a href="https://haye-studio.lemonsqueezy.com/checkout/buy/ac8b1710-63ce-40f1-8883-40deb3d50330" 
                 target="_blank" rel="noopener noreferrer" 
                 className="btn-primary btn-full" style={{ display: 'inline-block', textDecoration: 'none' }}>
                Get Pro License Key
              </a>
              <p style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Secured by Lemon Squeezy 🍋
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container faq-section">
        <FadeIn>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know about the product and billing.</p>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <details>
            <summary>Do I need my own OpenAI / DeepSeek API key?</summary>
            <div className="faq-content">
              No! We handle all the AI costs on our backend. Your one-time purchase gives you access to our premium API infrastructure without any monthly API bills.
            </div>
          </details>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <details>
            <summary>Is this really a one-time payment?</summary>
            <div className="faq-content">
              Yes. You pay $9.99 once and get lifetime access to the current version of the Chrome extension, plus any minor updates we push to the store.
            </div>
          </details>
        </FadeIn>

        <FadeIn delay={0.3}>
          <details>
            <summary>Does it work on Safari or Firefox?</summary>
            <div className="faq-content">
              Currently, X-Maker is exclusively built for Chromium-based browsers (Google Chrome, Microsoft Edge, Brave, Arc). We are planning a Safari release next quarter.
            </div>
          </details>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-links">
            <a href="#">Twitter</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="mailto:support@x-maker.com">Support</a>
          </div>
          <p>© 2026 X-Maker Pro. Built by Indie Hacker.</p>
        </div>
      </footer>
    </main>
  );
}
