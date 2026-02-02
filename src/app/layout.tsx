import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chilli Flakes Studio | Sydney's Premier South Asian Podcast",
  description: "Bold conversations that matter. Sydney-based podcast amplifying South Asian voices across the globe. Featuring interviews with cricketers, musicians, and thought leaders.",
  keywords: ["podcast", "South Asian", "Sydney", "Bangladesh", "cricket", "music", "diaspora", "interviews"],
  authors: [{ name: "Chilli Flakes Studio" }],
  openGraph: {
    title: "Chilli Flakes Studio",
    description: "Bold conversations that matter. Sydney's leading podcast for the South Asian diaspora.",
    type: "website",
    locale: "en_AU",
    siteName: "Chilli Flakes Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chilli Flakes Studio",
    description: "Bold conversations that matter. Sydney's leading podcast for the South Asian diaspora.",
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
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&family=Barlow:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0B0B0B] text-white">
        {children}
      </body>
    </html>
  );
}
