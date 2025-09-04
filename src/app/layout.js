import { Geist, Geist_Mono, Inter } from "next/font/google";
import Footer from "@/component/layout/Footer";
import "./globals.css";

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
  description: "Portfolio of Arjit Kaur Arora, Product Lead.",
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
