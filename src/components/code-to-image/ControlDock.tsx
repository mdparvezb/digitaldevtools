import { Moon, Sun, Download } from "lucide-react";
import { toPng } from "html-to-image";
import BackgroundDropdown from "./BackgroundDropDown";

export default function ControlDock({
  exportRef,
  dark,
  setDark,
  padding,
  setPadding,
  language,
  setLanguage,
  setBackground,
  background,
}: any) {
  const exportImage = async () => {
    if (!exportRef?.current) return;

    const dataUrl = await toPng(exportRef.current, {
      pixelRatio: 4,
      backgroundColor: "transparent",
    });

    const link = document.createElement("a");
    link.download = "code-image.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 text-white rounded-xl px-4 py-3 flex flex-wrap min-w-80 justify-center items-center gap-4 shadow-xl">
      {/* Backgrounds */}
      <BackgroundDropdown value={background} onChange={setBackground} />
      {/* Theme */}
      <button onClick={() => setDark(!dark)} className="text-purple-600">
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* Padding */}
      {[16, 32, 64, 128].map((p) => (
        <button
          key={p}
          onClick={() => setPadding(p)}
          className={`px-2 py-1 text-xs rounded ${
            padding === p ? "bg-blue-700 text-white" : "bg-[#222]"
          }`}
        >
          {p}
        </button>
      ))}

      {/* Language */}
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-[#222] text-xs px-2 py-1 rounded"
      >
        <option value="swift">Swift</option>
        <option value="javascript">JavaScript</option>
        <option value="tsx">TSX</option>
        <option value="css">CSS</option>
      </select>

      {/* Export */}
      <button
        onClick={exportImage}
        className="flex items-center gap-1 px-3 py-1 bg-indigo-600 rounded text-xs cursor-pointer"
      >
        <Download size={14} />
        Export
      </button>
    </div>
  );
}
