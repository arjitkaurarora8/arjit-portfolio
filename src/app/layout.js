import { Geist, Geist_Mono, Inter } from "next/font/google";
import Footer from "@/component/layout/Footer";
import "./globals.css";
import Home from "./page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arjit Kaur Arora - Product Lead",
  description:
    "Portfolio of Arjit Kaur Arora, Product Lead specializing in product strategy, user experience, and team leadership.",
  keywords:
    "product lead, product manager, UX, user experience, product strategy, portfolio",
  authors: [{ name: "Arjit Kaur Arora" }],
  creator: "Arjit Kaur Arora",
  robots: "index, follow",

  // Add Open Graph metadata
  openGraph: {
    title: "Hi, I'm Arjit.",
    description: "product lead",
    url: "https://www.arjitkaurarora.com/",
    siteName: "Arjit Kaur Arora",
    images: [
      {
        url: "https://www.arjitkaurarora.com/OG.png",
        width: 1200,
        height: 630,
        alt: "Hi, I'm Arjit - Product Lead",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Add Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Hi, I'm Arjit.",
    description: "product lead",
    images: ["https://www.arjitkaurarora.com/OG.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased mx-2 md:mx-10 lg:mx-30`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
