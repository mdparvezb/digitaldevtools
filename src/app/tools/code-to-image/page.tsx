import ToolHero from "./../../../components/code-to-image/ToolHero";
import CodeTool from "./../../../components/code-to-image/CodeTool";
import Benefits from "./../../../components/code-to-image/Benefits";
import HowItWorks from "./../../../components/code-to-image/HowItWorks";
import FAQ from "./../../../components/code-to-image/FAQ";

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
    <main className="max-w-7xl mx-auto px-4 py-14">
      <ToolHero />
      <CodeTool />
      <Benefits />
      <HowItWorks />
      <FAQ />
    </main>
  );
}
