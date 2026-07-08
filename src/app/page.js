"use client";

import { useState, useEffect } from 'react';
import './globals.css';
import FadeIn from '@/components/FadeIn';
import MouseGlow from '@/components/MouseGlow';

export default function Home() {
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('purchase_success') === 'true') {
        setPurchaseSuccess(true);
        // Clean URL parameter
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
      }
    }
  }, []);

  const handleCheckout = async () => {
    setIsCheckoutLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.checkoutUrl) {
        // ALWAYS DO: New tab for checkout
        window.open(data.checkoutUrl, '_blank', 'noopener,noreferrer');
      } else {
        alert(data.error || 'Failed to create checkout session');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Network error. Failed to initiate checkout.');
    } finally {
      setIsCheckoutLoading(false);
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "X-Maker Pro",
            "operatingSystem": "Chrome, Edge, Brave, Arc",
            "applicationCategory": "SocialNetworkingApplication",
            "offers": {
              "@type": "Offer",
              "price": "9.99",
              "priceCurrency": "USD"
            },
            "description": "An audience growth and time-saving engine for X (Twitter). Extract insights from any webpage and auto-write viral posts and threads in 1-click.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "24"
            }
          })
        }}
      />
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
            🚀 Audience Growth & Time-Saving Engine for X
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
            Save 2 Hours Daily & <br/>
            Grow Your X Audience <span style={{ color: 'var(--accent-color)' }}>3x Faster</span>.
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.2} yOffset={30}>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-secondary)', 
            maxWidth: '600px', 
            marginBottom: '40px' 
          }}>
            Stop wasting hours reading and curating content. X-Maker extracts core insights from any page in 1-click and writes viral threads—converting your daily reading into an audience growth engine.
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
          <div style={{ 
            borderRadius: '16px', 
            overflow: 'hidden', 
            border: '1px solid var(--card-border)', 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            marginTop: '10px' 
          }}>
            <img 
              src="/demo.gif" 
              alt="X-Maker Right-Click AI Demo" 
              width="100%" 
              style={{ display: 'block', height: 'auto' }}
            />
          </div>
        </FadeIn>
      </section>

      {/* Features Section */}
      <section id="features" className="container">
        <FadeIn>
          <h2 className="section-title">Grow Your Reach, Not Your Workload</h2>
          <p className="section-subtitle">Turn daily reading and industry insights into a traffic-generating channel.</p>
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
                <li>✅ Save 2+ Hours of Reading & Curation Daily</li>
                <li>✅ 1-Click Viral Thread & Post Writer</li>
                <li>✅ Multi-Tone Engine (Tech Bro, Funny, Professional)</li>
                <li>✅ Seamless Right-Click Context Menu</li>
                <li>✅ Private Rate-Limit & Abuse Protection</li>
              </ul>
              
              <button 
                 onClick={handleCheckout}
                 disabled={isCheckoutLoading}
                 className="btn-primary btn-full" 
                 style={{ 
                   display: 'inline-block', 
                   textDecoration: 'none',
                   border: 'none',
                   cursor: isCheckoutLoading ? 'not-allowed' : 'pointer',
                   opacity: isCheckoutLoading ? 0.7 : 1
                 }}>
                {isCheckoutLoading ? 'Creating Session...' : 'Get Pro License Key'}
              </button>
              <p style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Secured by Waffo Pancake 🔒
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Success Notification */}
      {purchaseSuccess && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          background: 'linear-gradient(135deg, #10B981, #059669)',
          color: 'white',
          padding: '16px 24px',
          borderRadius: '12px',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <span style={{ fontSize: '1.25rem' }}>🎉</span>
          <div>
            <strong style={{ display: 'block' }}>Purchase Successful!</strong>
            <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>Your Pro License Key has been generated and sent.</span>
          </div>
          <button 
            onClick={() => setPurchaseSuccess(false)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1.25rem',
              opacity: 0.8,
              padding: '0 4px',
              fontWeight: 'bold'
            }}
          >
            ×
          </button>
        </div>
      )}

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
