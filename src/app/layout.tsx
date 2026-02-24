import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyManifest — Bring ideas to life",
  description: "Crowdfunding for creators, causes, and community. Back projects. Start your own.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${outfit.variable} ${geistMono.variable} min-h-full overflow-x-hidden font-sans antialiased bg-background text-foreground`}>
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
