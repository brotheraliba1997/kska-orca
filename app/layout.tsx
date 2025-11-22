import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KSKA - Building Tomorrow's Growth, Today",
  description: "An award-winning venture capital and investment firm in Los Angeles set up in 2015.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} antialiased`}
        style={{ fontFamily: 'var(--font-inter-tight), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
