import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Awarest: Build Self Awareness & Resilience with Daily",
  description: "We provide three daily questions with structured sub-questions to enhance self awareness and strengthen resilience. Through gamification and tracking, growth becomes engaging and measurable",
  keywords: "Awarest, self awareness, resilience, daily questions, personal growth, mindfulness, habit tracking, self improvement, self discovery\
  note, AI",
  icons: {
    icon: "/images/Awarest-logo.png",//경로 이렇게
    apple: "/images/Awarest-logo.png",
    shortcut: "/images/Awarest-logo.png",
  },
  alternates: {
    canonical: "https://www.getawarest.com",
    languages: {
      "en-US": "https://www.getawarest.com",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-MMXRGV8P33"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MMXRGV8P33', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
