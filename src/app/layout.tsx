import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace",
  description: "Learn from creators and build your skills.",
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
        </SmoothScroll>
      </body>
    </html>
  );
}
