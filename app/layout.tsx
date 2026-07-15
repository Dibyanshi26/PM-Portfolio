import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const SITE_URL = "https://dibyanshisingh.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dibyanshi Singh — AI Solutions Engineer & Product Builder",
  description:
    "I turn AI ideas into products people actually use — workflow automation, customer enablement, and applied AI systems that ship.",
  keywords: [
    "Dibyanshi Singh",
    "AI Solutions Engineer",
    "AI Enablement",
    "Product Thinking",
    "Workflow Automation",
    "Applied AI",
    "Data Scientist",
  ],
  authors: [{ name: "Dibyanshi Singh" }],
  openGraph: {
    title: "Dibyanshi Singh — AI Solutions Engineer & Product Builder",
    description:
      "I turn AI ideas into products people actually use — workflow automation, customer enablement, and applied AI systems that ship.",
    url: SITE_URL,
    siteName: "Dibyanshi Singh",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dibyanshi Singh — AI Solutions Engineer & Product Builder",
    description:
      "I turn AI ideas into products people actually use.",
    images: ["/images/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dibyanshi Singh",
  jobTitle: "AI Solutions Engineer",
  url: SITE_URL,
  sameAs: [
    "https://www.linkedin.com/in/dibyanshisingh",
    "https://github.com/dibyanshisingh",
    "https://medium.com/@dibyanshisingh611",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <div className="ambient-bg" aria-hidden="true" />
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
