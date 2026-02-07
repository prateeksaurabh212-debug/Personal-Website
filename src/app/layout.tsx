import type { Metadata } from "next";
import Script from "next/script";
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
  title: "Prateek Saurabh | AI Product Manager",
  description:
    "Product Manager driving data-driven product innovation across backend systems, ML/AI integration, and enterprise transformation. Hamburg, Germany.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <Script
          src="https://gradio.s3-us-west-2.amazonaws.com/4.44.1/gradio.js"
          strategy="afterInteractive"
          type="module"
        />
        {children}
      </body>
    </html>
  );
}
