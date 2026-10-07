import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Preloader from "./components/Preloader";
import WhatsAppButton from "./components/WhatsAppButton";

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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
        <WhatsAppButton />
      </body>
    </html>
  );
}
