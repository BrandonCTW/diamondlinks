import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DiamondLinks | Online Reputation Management & SEO",
  description: "DiamondLinks is a New Orleans-based ORM & SEO agency with 30+ years of combined expertise. We suppress negative content, amplify positive stories, and drive lasting SEO growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased bg-background text-foreground min-h-screen`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCtaBar />
      </body>
    </html>
  );
}
