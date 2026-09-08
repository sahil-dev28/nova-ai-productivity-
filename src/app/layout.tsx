import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { MotionGate } from "@/components/common/MotionGate";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { site } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: site.url,
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "AI productivity",
    "project management",
    "workflow automation",
    "team collaboration",
    "AI agents",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/",
    title: site.title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: site.themeColor.dark },
    { media: "(prefers-color-scheme: light)", color: site.themeColor.light },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url.origin}/#organization`,
      name: "NOVA Labs, Inc.",
      url: site.url.origin,
      logo: `${site.url.origin}/icon.svg`,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url.origin}/#website`,
      url: site.url.origin,
      name: site.name,
      description: site.description,
      publisher: { "@id": `${site.url.origin}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: site.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: site.description,
      publisher: { "@id": `${site.url.origin}/#organization` },
      offers: {
        "@type": "Offer",
        price: "12",
        priceCurrency: "USD",
        description: "Per seat, per month, billed annually.",
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${manrope.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ThemeProvider>
          <MotionGate />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
