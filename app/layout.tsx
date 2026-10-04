import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Preloader from "./components/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Knight Graphics | Premium Branding & Creative Solutions",
  description: "Award-winning branding and digital solutions for modern business. Based in Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased scroll-smooth selection:bg-red-600/30 selection:text-white`}
    >
      <body className="bg-[#0A0A0A] text-white min-h-[100dvh] flex flex-col font-sans overflow-x-hidden">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
