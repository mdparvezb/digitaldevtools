import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Smart Dev Tool – Free Online Tools for Developers",
  description:
    "Smart Dev Tool provides fast, free, and smart developer utilities like code-to-image, image compression, converters, and more.",
  keywords: [
    "developer tools",
    "code to image",
    "online dev tools",
    "frontend tools",
    "smart dev tool",
  ],
  metadataBase: new URL("https://smartdevtool.com"),
  openGraph: {
    title: "Smart Dev Tool",
    description: "Smart utilities built for modern developers",
    url: "https://smartdevtool.com",
    siteName: "Smart Dev Tool",
    images: ["/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
