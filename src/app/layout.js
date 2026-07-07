import "./globals.css";

export const metadata = {
  title: "X-Maker | Save 2 Hours Daily & Grow Your X Audience 3x Faster",
  description: "An audience growth and time-saving engine for X (Twitter). Extract insights from any webpage and auto-write viral posts and threads in 1-click.",
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
