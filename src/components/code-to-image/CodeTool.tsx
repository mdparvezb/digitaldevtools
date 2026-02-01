"use client";

import { useState } from "react";
import ToolControls from "./ToolControls";
import CodePreview from "./CodePreview";

export default function CodeTool() {
  const [code, setCode] = useState(
    `function greet() {\n  console.log("Hello SmartDevTool");\n}`,
  );
  const [background, setBackground] = useState("#0f172a");
  const [padding, setPadding] = useState("p-8");
  const [preset, setPreset] = useState<"default" | "twitter" | "instagram">(
    "default",
  );

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
      <ToolControls
        setBackground={setBackground}
        setPadding={setPadding}
        setPreset={setPreset}
      />

      <CodePreview
        code={code}
        setCode={setCode}
        background={background}
        padding={padding}
        preset={preset}
      />
    </section>
  );
}
