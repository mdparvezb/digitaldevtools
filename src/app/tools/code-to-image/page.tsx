import CodeImageApp from "@/components/code-to-image/CodeImageApp";
import FAQ from "@/components/code-to-image/FAQ";
import ToolHero from "@/components/code-to-image/ToolHero";

export const metadata = {
  title: "Code to Image Converter – Create Beautiful Code Screenshots Online",
  description:
    "Convert code snippets into beautiful images with syntax highlighting, backgrounds, and export high quality images.",
  alternates: {
    canonical: "https://www.digitaldevtools.com/tools/code-to-image",
  },
  openGraph: {
    title: "Code to Image – Turn Code into Stunning Images",
    description:
      "Create beautiful images from your code with syntax highlighting.",
    url: "https://digitaldevtools.com/code-to-image",
    siteName: "DigitalDevTools",
    images: [
      {
        url: "og/code-to-image.jpg",
        width: 1200,
        height: 630,
        alt: "Code to Image Tool",
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="w-full bg-black flex flex-col items-center">
      <ToolHero />

      <main className="w-full flex justify-center px-2 md:py-10 ">
        <CodeImageApp />
      </main>
      <FAQ />
    </div>
  );
}
