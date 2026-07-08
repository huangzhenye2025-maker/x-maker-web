import "./globals.css";

export const metadata = {
  title: "X-Maker | Save 2 Hours Daily & Grow Your X Audience 3x Faster",
  description: "An audience growth and time-saving engine for X (Twitter). Extract insights from any webpage and auto-write viral posts and threads in 1-click.",
  keywords: [
    "AI Twitter Thread Generator", 
    "X Audience Growth Tool", 
    "Twitter Content Creation Assistant", 
    "Chrome Extension for Twitter",
    "Viral Tweet Writer"
  ],
  metadataBase: new URL('https://x-maker-web.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "X-Maker | Save 2 Hours Daily & Grow Your X Audience 3x Faster",
    description: "An audience growth and time-saving engine for X (Twitter). Extract insights from any webpage and auto-write viral posts and threads in 1-click.",
    url: 'https://x-maker-web.vercel.app',
    siteName: 'X-Maker',
    images: [
      {
        url: '/promo_440x280.png',
        width: 440,
        height: 280,
        alt: 'X-Maker Interface Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'X-Maker | Save 2 Hours Daily & Grow Your X Audience 3x Faster',
    description: 'An audience growth and time-saving engine for X (Twitter). Extract insights from any webpage and auto-write viral posts and threads in 1-click.',
    images: ['/promo_440x280.png'],
  },
  other: {
    'waffo-verify': '7539db5a248a6495c20069621d08030d',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
