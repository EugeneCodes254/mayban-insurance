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
  metadataBase: new URL("https://maybaninsurance.com"),
  title: {
    default: "Mayban Insurance Kenya | Motor, Health, Life & Business Insurance",
    template: "%s | Mayban Insurance Kenya",
  },
  description:
    "Mayban Insurance provides motor, health, life, business, property and marine insurance solutions for individuals and businesses across Kenya.",
  keywords: [
    "Mayban Insurance",
    "Mayban Insurance Kenya",
    "insurance Kenya",
    "motor insurance Kenya",
    "health insurance Kenya",
    "life insurance Kenya",
    "business insurance Kenya",
    "property insurance Kenya",
    "marine insurance Kenya",
  ],
  alternates: {
    canonical: "https://maybaninsurance.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Mayban Insurance Kenya | Insurance Solutions You Can Trust",
    description:
      "Explore motor, health, life, business, property and marine insurance solutions from Mayban Insurance Kenya.",
    url: "https://maybaninsurance.com",
    siteName: "Mayban Insurance",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mayban Insurance Kenya",
    description:
      "Motor, health, life, business, property and marine insurance solutions in Kenya.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
