import "@/styles/tailwind.css";

import { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";

const title = "Payflo - Launch Payroll Fast";
const description =
  "Payflo makes it fast and easy for SaaS platforms to build and embed payroll using our infrastructure, APIs and UI components.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: { url: "/favicon.ico", type: "image/x-icon" },
  },
  generator: "payflo.dev",
  /**
   * open graph head tags are used by social media platforms
   */
  // openGraph: {
  //   title,
  //   description,
  //   type: "website",
  //   url: "https://payflo.dev",
  //   images: [
  //     {
  //       url: "https://payflo.dev/og-image.webp",
  //       width: 1200,
  //       height: 630,
  //       alt: "Payflo Open Graph Image",
  //     },
  //   ],
  // },

  /**
   * twitter head tags are used by Twitter for rich link previews
   */
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@payflo_dev",
  //   title,
  //   description,
  //   images: ["https://payflo.dev/twitter-image.webp"],
  // },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interVariable = localFont({
  src: [
    {
      path: "../public/fonts/inter/InterVariable.woff2",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/InterVariable-Italic.woff2",
      style: "italic",
    },
  ],
  fallback: ["var(--font-inter)"],
  variable: "--font-interVariable",
  weight: "100 900",
  display: "swap",
});

export default async function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn("flex min-h-screen flex-col", interVariable.variable, inter.variable)}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
