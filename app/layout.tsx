import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Your Trusted Source for Outdoor Power Equipment and Tools | 2M Mower Tool",
  description:
    "Discover a wide selection of high-quality outdoor power equipment, lawn mower tools, parts, and accessories at 2M Equipment. We partner with leading brands to provide top-tier solutions for your outdoor projects. Shop with confidence and explore our inventory today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} 
        <Analytics />
      </body>
    </html>
  );
}
