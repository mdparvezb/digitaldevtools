"use client";

import { motion } from "framer-motion";
import { Code2, Image, Repeat, FileText, Wand2 } from "lucide-react";

const tools = [
  {
    title: "Code to Image",
    description:
      "Convert code snippets into beautiful, high-quality images for social sharing and documentation.",
    icon: Code2,
    accent: "from-indigo-600 to-purple-600",
    href: "/tools/code-to-image",
    primary: true,
  },
  {
    title: "Image Compressor",
    description:
      "Compress images directly in your browser without sacrificing quality or privacy.",
    icon: Image,
    accent: "from-emerald-600 to-teal-600",
    href: "/tools/image-compressor",
  },
  {
    title: "PNG to WebP",
    description:
      "Convert PNG files to modern WebP format for faster websites and smaller file sizes.",
    icon: Repeat,
    accent: "from-sky-600 to-blue-600",
    href: "/tools/png-to-webp",
  },
  {
    title: "Code to PDF",
    description:
      "Export clean, readable code snippets as professional PDF files in seconds.",
    icon: FileText,
    accent: "from-rose-600 to-pink-600",
    href: "/tools/code-to-pdf",
  },
  {
    title: "More Tools Coming",
    description:
      "I regularly build and release new developer tools based on real-world needs.",
    icon: Wand2,
    accent: "from-amber-600 to-orange-600",
    href: "#",
  },
];

export default function ToolGrid() {
  return (
    <section id="tools" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Tools We{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Build for You
            </span>
          </h2>

          <p className="mt-4 text-gray-600">
            Each tool is designed to be fast, reliable, and easy to use — no
            signups, no tracking, just productivity.
          </p>
        </motion.div>

        {/* Tool Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="
                group
                rounded-2xl
                border border-gray-200
                bg-white
                p-6
                transition-all duration-300
                hover:-translate-y-[2px]
                hover:border-gray-300
                hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)]
              "
            >
              {/* Icon */}
              <div
                className={`
                  inline-flex p-3 rounded-xl
                  bg-gradient-to-br ${tool.accent}
                  text-white
                `}
              >
                <tool.icon className="w-5 h-5" />
              </div>

              {/* Content */}
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {tool.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {tool.description}
              </p>

              {/* Button */}
              <a
                href={tool.href}
                className={`
                  mt-6 inline-flex items-center gap-2
                  rounded-lg px-4 py-2 text-sm font-medium
                  transition-all duration-300
                  ${
                    tool.primary
                      ? "text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500"
                      : "text-gray-800 border border-gray-300 bg-white hover:bg-gray-50"
                  }
                `}
              >
                Use Tool
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
