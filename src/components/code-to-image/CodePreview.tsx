import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import { toPng } from "html-to-image";
import { Download } from "lucide-react";
import "prismjs/themes/prism-tomorrow.css";

export default function CodePreview({
  code,
  setCode,
  background,
  padding,
  preset,
}: any) {
  const highlight = (code: string) =>
    Prism.highlight(code, Prism.languages.javascript, "javascript");

  const exportImage = async () => {
    const node = document.getElementById("code-preview");
    if (!node) return;
    const dataUrl = await toPng(node, { pixelRatio: 2 });
    const link = document.createElement("a");
    link.download = "code-image.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="space-y-4">
      <div
        id="code-preview"
        className={`${padding} rounded-xl`}
        style={{
          background,
          width:
            preset === "twitter"
              ? "800px"
              : preset === "instagram"
                ? "1080px"
                : "100%",
        }}
      >
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={highlight}
          padding={16}
          className="font-mono text-sm text-white"
        />
      </div>

      <button
        onClick={exportImage}
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg"
      >
        <Download className="w-4 h-4" />
        Download Image
      </button>
    </div>
  );
}
