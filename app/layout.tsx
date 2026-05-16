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
  title: "Olympio Abdul Razak — Brand Design Lead & Creative Director",
  description:
    "Award-winning creative specializing in 3D brand visualization and experiential design. Brand Design Lead at Moniepoint. 🏆 Best Booth — African Tech Summit 2025-2026. Featured on Ads of the World.",
  keywords: [
    "Brand Design", "3D Visualization", "Experiential Design",
    "Creative Direction", "Art Direction", "Moniepoint",
    "Nigeria", "Canada", "Toronto", "Vancouver",
  ],
  authors: [{ name: "Olympio Abdul Razak" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://olympio.work",
    siteName: "Olympio Abdul Razak",
    title: "Olympio Abdul Razak — Brand Design Lead & Creative Director",
    description: "Award-winning 3D brand visualization and experiential design. Building brands that move people.",
    images: [{ url: "https://olympio.work/og-image.jpg", width: 1200, height: 630, alt: "Olympio Abdul Razak" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olympio Abdul Razak — Brand Design Lead & Creative Director",
    description: "Award-winning 3D brand visualization and experiential design. Building brands that move people.",
    images: ["https://olympio.work/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
