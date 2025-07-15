import "@/styles/tailwind.css";

import { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Payflo - Launch Payroll Fast",
  description:
    "Payflo makes it fast and easy for SaaS platforms to build and embed payroll using our infrastructure, APIs and UI components.",
  icons: {
    icon: { url: "/favicon.ico", type: "image/x-icon" },
  },
};

{
  /* 
  <head>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={Astro.url} />
    <meta property="og:image" content="https://payflo.dev/og-image\.webp" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@payflo_dev" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="https://payflo.dev/twitter-image\.webp" />
  </head> */
}

export default async function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
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
