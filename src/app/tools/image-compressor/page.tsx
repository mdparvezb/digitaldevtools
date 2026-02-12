import ImageCompressor from "@/components/image-compressor/ImageCompressor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Image Compressor | Convert JPG, PNG, WEBP",
  description:
    "Compress images online for free without losing quality. Bulk convert JPG to WebP, reduce file size for SEO, and optimize images for websites.",
  keywords: [
    "image compressor",
    "reduce image size",
    "jpg to webp",
    "bulk image optimizer",
    "image compressor online",
    "image compressor digitaldevtools",
  ],
  openGraph: {
    title: "Free Bulk Image Compressor",
    description: "Optimize your images for the web securely in your browser.",
    url: "https://digitaldevtools.com/tools/image-compressor",
    siteName: "Digital Dev Tools",
    locale: "en_US",
    type: "website",
  },
};

export default function ImageCompressorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Digital Dev Tools Image Compressor",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList:
      "Bulk compression, Format conversion, Privacy-focused local processing",
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Compress Images{" "}
          <span className="text-blue-600">Without Quality Loss</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Securely optimize your JPG, PNG, and WEBP files directly in your
          browser. No server uploads, no file limits.
        </p>
      </div>

      <ImageCompressor />

      {/* SEO Content Section (Below the fold) */}
      <section className="max-w-3xl mx-auto mt-20 prose prose-blue">
        <h2>Why use our Image Compressor?</h2>
        <p>Fast loading websites rank better on Google. Use our tool to:</p>
        <ul>
          <li>Bulk compress up to 100 images at once.</li>
          <li>
            Convert legacy formats to modern <strong>WebP</strong>.
          </li>
          <li>
            Maintain visual quality while reducing file size by up to 90%.
          </li>
        </ul>
      </section>
    </main>
  );
}
