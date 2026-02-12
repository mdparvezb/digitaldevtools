"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronUp } from "lucide-react";
import { backgrounds } from "../../app/tools/code-to-image/background";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function BackgroundDropdown({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const active = backgrounds.find((b) => b.value === value);

  return (
    <div className="relative" ref={ref}>
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2
          px-2 py-1
          text-xs
          bg-[#222]
          rounded
          text-white
        "
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="w-4 h-4 rounded-full" style={{ background: value }} />
        <ChevronUp
          size={12}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute bottom-full left-0 mb-2
            w-14
            bg-[#1a1a1a]
            border border-white/10
            rounded-lg
            shadow-2xl
            p-1
            z-50
          "
          role="listbox"
        >
          {backgrounds.map((bg) => (
            <button
              key={bg.id}
              onClick={() => {
                onChange(bg.value);
                setOpen(false);
              }}
              className="
                w-full flex items-center gap-3
                px-2 py-2
                text-xs text-white
                rounded-full
                text-left
                cursor-pointer
              "
              role="option"
              aria-selected={bg.value === value}
            >
              <span
                className="w-6 h-6 rounded-full border border-white/20"
                style={{ background: bg.value }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
