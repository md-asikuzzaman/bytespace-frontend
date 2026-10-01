import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bytespace-assessment-asik.vercel.app"),

  title: {
    default: "ByteSpace",
    template: "%s | ByteSpace",
  },

  description:
    "ByteSpace is a modern digital platform for exploring, creating, and sharing digital experiences.",

  keywords: [
    "ByteSpace",
    "digital platform",
    "digital experiences",
    "innovation",
    "collaboration",
    "digital community",
  ],

  authors: [{ name: "ByteSpace" }],
  creator: "ByteSpace",
  publisher: "ByteSpace",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "ByteSpace",
    title: "ByteSpace",
    description:
      "Explore, create, and share digital experiences with ByteSpace.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ByteSpace",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ByteSpace",
    description:
      "Explore, create, and share digital experiences with ByteSpace.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} antialiased`}>
      <body className="flex min-h-screen flex-col font-poppins">
        <SmoothScroll>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
