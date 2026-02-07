"use client";

import { useRef, useState } from "react";
import Canvas from "./Canvas";
import CodeWindow from "./CodeWindow";
import ControlDock from "./ControlDock";
import { backgrounds } from "./../../lib/background";

export default function CodeImageApp() {
  const exportRef = useRef<HTMLDivElement>(null);

  const [code, setCode] = useState(`import SwiftUI

struct CircleImage: View {
  var body: some View {
    Image("turtlerock")
      .clipShape(Circle())
  }
}`);
  const [dark, setDark] = useState(true);
  const [padding, setPadding] = useState(32);
  const [language, setLanguage] = useState("swift");
  const [background, setBackground] = useState(backgrounds[0].value);

  return (
    <>
      <Canvas padding={padding} background={background} exportRef={exportRef}>
        <CodeWindow
          code={code}
          setCode={setCode}
          dark={dark}
          language={language}
        />
      </Canvas>
      <ControlDock
        exportRef={exportRef}
        dark={dark}
        setDark={setDark}
        padding={padding}
        setPadding={setPadding}
        language={language}
        setLanguage={setLanguage}
        setBackground={setBackground}
        background={background}
      />
    </>
  );
}
