import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coura: Build Self Awareness & Resilience with Daily",
  description: "We provide three daily questions with structured sub-questions to enhance self awareness and strengthen resilience. Through gamification and tracking, growth becomes engaging and measurable",
  keywords: "Coura, self awareness, resilience, daily questions, personal growth, mindfulness, habit tracking, self improvement, self discovery\
  note, AI",
  icons: {
    icon: "/images/coura-logo.png",//경로 이렇게
    apple: "/images/coura-logo.png",
    shortcut: "/images/coura-logo.png",
  },
  alternates: {
    languages: {
      "en-US": "https://www.withcoura.com",
    },
  },
  verification: {
    google: "",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
