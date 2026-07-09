import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { siteConfig } from "@/lib/site";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { BackToTop } from "@/components/site/back-to-top";
import { ScrollProgress } from "@/components/site/scroll-progress";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Digital DK",
    "AI consulting",
    "digital strategy",
    "Next.js portfolio",
    "dark UI",
  ],
  applicationName: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  authors: [{ name: siteConfig.owner }],
  creator: siteConfig.owner,
  publisher: siteConfig.owner,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export const viewport = {
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:border focus:border-cyan-400/30 focus:bg-slate-950 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </div>
        <BackToTop />
      </body>
    </html>
  );
}
