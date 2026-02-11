import { JetBrains_Mono, Smooch } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@/lib/analytics";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Digital Dev Tools – Free Online Tools for Developers",
  description:
    "Digital Dev Tools provides fast, free, and smart developer utilities like code-to-image, image compression, converters, and more.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  keywords: [
    "developer tools",
    "code to image",
    "online dev tools",
    "frontend tools",
    "smart dev tool",
    "digital dev tool",
  ],
  metadataBase: new URL("https://digitaldevtools.com/"),
  openGraph: {
    title: "Digital Dev Tool",
    description: "Smart online utilities built for modern developers",
    url: "https://digitaldevtools.com/",
    siteName: "Digital Dev Tools",
    images: [],
    type: "website",
  },
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap", // SEO + performance
  variable: "--font-code", // optional but recommended
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body>
        <Navbar />
        {children}
        <CookieConsent />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
