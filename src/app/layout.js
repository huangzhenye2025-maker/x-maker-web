import "./globals.css";

export const metadata = {
  title: "X-Maker | Viral Tweet Generator Extension",
  description: "Turn any webpage into viral X (Twitter) posts in 1-click using AI. Advanced Chrome extension with Service Worker and Content Scripts.",
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
