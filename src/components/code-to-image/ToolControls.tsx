import { Twitter, Instagram } from "lucide-react";
import { backgrounds } from "../../lib/background";

export default function ToolControls({
  setBackground,
  setPadding,
  setPreset,
}: any) {
  return (
    <div className="space-y-6">
      {/* Background */}
      <div>
        <p className="text-sm font-medium mb-2">Background</p>
        <div className="flex gap-2">
          {backgrounds.map((bg) => (
            <button
              key={bg.name}
              onClick={() => setBackground(bg.value)}
              className="px-3 py-1 text-sm border rounded-md"
            >
              {bg.name}
            </button>
          ))}
        </div>
      </div>

      {/* Padding */}
      <div>
        <p className="text-sm font-medium mb-2">Padding</p>
        <div className="flex gap-2">
          {["p-4", "p-8", "p-12"].map((p) => (
            <button
              key={p}
              onClick={() => setPadding(p)}
              className="px-3 py-1 text-sm border rounded-md"
            >
              {p.replace("p-", "")}
            </button>
          ))}
        </div>
      </div>

      {/* Presets */}
      <div>
        <p className="text-sm font-medium mb-2">Social Presets</p>
        <div className="flex gap-2">
          <button
            onClick={() => setPreset("twitter")}
            className="flex items-center gap-2 px-3 py-1 border rounded-md"
          >
            <Twitter className="w-4 h-4" /> Twitter
          </button>

          <button
            onClick={() => setPreset("instagram")}
            className="flex items-center gap-2 px-3 py-1 border rounded-md"
          >
            <Instagram className="w-4 h-4" /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
}
