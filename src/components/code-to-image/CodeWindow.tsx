import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function CodeWindow({ code, setCode, dark, language }: any) {
  const highlight = (code: string) =>
    Prism.highlight(
      code,
      Prism.languages[language] || Prism.languages.javascript,
      language,
    );

  return (
    <div
      className={`rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.45)] ${
        dark ? "bg-[#0b1220]" : "bg-[#f8fafc]"
      }`}
    >
      {/* WINDOW HEADER */}
      <div
        className={`flex items-center gap-2 px-4 py-3 text-xs ${
          dark ? "text-gray-400" : "text-gray-500"
        }`}
      >
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
      </div>

      {/* ✅ WINDOW BACKGROUND PADDINGs */}
      <div style={{ padding: "30px 20px" }}>
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={highlight}
          textareaClassName="outline-none"
          className={`font-mono text-[12px] md:text-[16px] leading-[1.75] font-semibold tracking-wide ${
            dark ? "text-slate-100" : "text-slate-900"
          }`}
          style={{
            fontVariantLigatures: "contextual",
            WebkitFontSmoothing: "antialiased",
          }}
        />
      </div>
    </div>
  );
}
