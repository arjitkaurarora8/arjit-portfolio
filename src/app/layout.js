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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Arjit Kaur Arora - Product Lead</title>
        <meta
          name="description"
          content="Portfolio of Arjit Kaur Arora, Product Lead specializing in product strategy, user experience, and team leadership."
        />
        <meta
          name="keywords"
          content="arjit, kaur, arora, portfolio, ux, ui, design"
        />
        <link rel="canonical" href="https://www.arjitkaurarora.com/" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Arjit Kaur Arora - Product Lead" />
        <meta
          property="og:description"
          content="Portfolio of Arjit Kaur Arora, Product Lead specializing in product strategy, user experience, and team leadership."
        />
        <meta property="og:url" content="hhttps://www.arjitkaurarora.com/" />
        <meta
          property="og:image"
          content="https://www.arjitkaurarora.com/arjit-og.png"
        />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arjit Kaur Arora - Product Lead" />
        <meta
          name="twitter:description"
          content="Portfolio of Arjit Kaur Arora, Product Lead specializing in product strategy, user experience, and team leadership."
        />
        <meta
          name="twitter:image"
          content="https://www.arjitkaurarora.com/arjit-og.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased mx-2 md:mx-10 lg:mx-30`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
