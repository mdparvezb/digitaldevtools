import CodeImageApp from "@/components/code-to-image/CodeImageApp";

export const metadata = {
  title: "Code to Image Converter – Create Beautiful Code Screenshots Online",
  description:
    "Convert code snippets into beautiful images with syntax highlighting, backgrounds, and social-ready presets.",
  alternates: {
    canonical: "https://smartdevtool.com/tools/code-to-image",
  },
};

export default function Page() {
  return (
    <main className="w-full h-screen flex justify-center items-start pt-20 px-2 md:py-20 bg-black overflow-y-auto">
      <CodeImageApp />
    </main>
  );
}
