import AppProvider from "@/providers/app-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistRoboto = Roboto({
  variable: '--font-geist-roboto',
  subsets: ['latin'],
});

const geistPoppins = Poppins({
  variable: '--font-geist-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "LearnXchange",
  description: "LearnXchange is the interactive skill-sharing platform where you can learn and teach through short, visual lessons and real-time, one-on-one sessions. Connect directly with creators, get instant feedback via Q&A, and collaborate within a social learning community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistPoppins.variable} ${geistRoboto.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
