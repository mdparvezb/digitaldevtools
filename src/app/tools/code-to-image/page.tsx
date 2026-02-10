import CodeImageApp from "@/components/code-to-image/CodeImageApp";

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
        url: "https://digitaldevtools.com/og/code-to-image.jpg",
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
    <>
      <main className="w-full h-screen flex justify-center items-start pt-20 px-2 md:py-20 bg-black overflow-y-auto">
        <CodeImageApp />
      </main>
    </>
  );
}
