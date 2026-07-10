# X-Maker Pro Web 🌐

This is the official landing page and frontend website for the **X-Maker Pro** Chrome Extension. It is built with Next.js and designed to be deployed on Vercel.

## 🔗 Architecture & Repositories

This product is built using a modern decoupled architecture. There are two main repositories:

1. **[x-maker-web](https://github.com/huangzhenye2025-maker/x-maker-web) (You are here)**: The frontend. The official landing page built with Next.js. Handles marketing, user conversion, domain verification, and terms/privacy policies. Hosted on Vercel.
2. **[my-twitter-backend](https://github.com/huangzhenye2025-maker/my-twitter-backend)**: The engine. Handles DeepSeek AI integration, Firecrawl web scraping, and Waffo Pancake webhook payments & license verification. Hosted on Render.

## 🌟 Core Features

- **Modern Landing Page**: High-conversion landing page designed to attract Indie Hackers and content creators with Framer Motion spring physics animations and glassmorphism styling.
- **Waffo Pancake Integration**: Securely generates checkout sessions server-side using the `@waffo/pancake-ts` SDK and redirects to Waffo cashier.
- **Immediate License Key Delivery**: Dynamically extracts the Waffo Order ID (`ORD_xxxxxx`) on success redirect and shows it on-screen for immediate activation.
- **Chrome Store Redirect**: Direct links to the official Chrome Web Store installation page.
- **Compliance & Verification**: 
  - Domain Verification: Implements `waffo-verify` meta tag verification.
  - Policy Pages: Includes fully compliant `/terms` (Terms of Service) and `/privacy` (Privacy Policy) pages to pass payment and Chrome Web Store audits.

## 🛠️ Tech Stack

- Next.js 16 (App Router)
- React
- Vanilla CSS & Framer Motion
- `@waffo/pancake-ts` SDK

## 🔑 Environment Variables (`.env.local`)

To run the frontend, configure the following variables:

```env
WAFFO_MERCHANT_ID="YOUR_WAFFO_MERCHANT_ID"
WAFFO_STORE_ID="YOUR_WAFFO_STORE_ID"
WAFFO_ENV="test" # or "prod"
WAFFO_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n...\n-----END RSA PRIVATE KEY-----"
NEXT_PUBLIC_WAFFO_PRODUCT_ID="PROD_xxxxxx"
```

## 🚀 Setup & Scripts

Initialize the Waffo Pancake product automatically:
```bash
node scripts/setup-waffo.js
```
This script validates your Waffo credentials, programmatically creates and publishes the "X-Maker Pro License Key" product ($9.99 USD), and appends `NEXT_PUBLIC_WAFFO_PRODUCT_ID` to your `.env.local`.

---
*Built for Indie Hackers, by Indie Hackers.*
