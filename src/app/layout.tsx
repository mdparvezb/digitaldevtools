import { JetBrains_Mono, Smooch } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Digital Dev Tools – Free Online Tools for Developers",
  description:
    "Digital Dev Tools provides fast, free, and smart developer utilities like code-to-image, image compression, converters, and more.",
  keywords: [
    "developer tools",
    "code to image",
    "online dev tools",
    "frontend tools",
    "smart dev tool",
    "digital dev tool",
  ],
  metadataBase: new URL("https://www.digitaldevtools.com/"),
  openGraph: {
    title: "Digital Dev Tool",
    description: "Smart online utilities built for modern developers",
    url: "https://www.digitaldevtools.com/",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
