import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Healthtech Collective (THC) — India's Healthtech Front Door",
  description:
    "The front door to India's healthtech ecosystem. Connecting founders, clinicians, hospital operators, and investors to build clinical-grade innovations.",
  openGraph: {
    title: "The Healthtech Collective (THC)",
    description:
      "Where India's healthtech connects. Community, events, directory, and hospital pilots.",
    url: "https://thehealthtechcollective.com",
    siteName: "The Healthtech Collective",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700&family=Newsreader:ital,opsz,wght@1,6..72,400;1,6..72,600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-canvas text-text-primary font-sans antialiased selection:bg-cobalt-tint selection:text-cobalt">
        {children}
      </body>
    </html>
  );
}
