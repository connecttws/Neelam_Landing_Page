import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Reverse Your HbA1c Back to Normal | Dt Neelam - Diabetes & Weight Loss Expert",
  description:
    "Reverse Your HbA1c of 7.5 or Above Back to Normal Without Starving or Giving Up Roti. 10+ Years of Experience in Medical Physiology & Clinical Nutrition.",
  keywords: [
    "HbA1c reversal",
    "Diabetes management",
    "Dt Neelam",
    "Medical Physiology",
    "Diabetic diet without starving",
    "Normalize blood sugar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-[100dvh] flex flex-col font-sans text-foreground bg-background antialiased overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-900">
        {children}

        {/* CRM Lead Tracker Script */}
        <Script
          src="/crm-lead-tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
