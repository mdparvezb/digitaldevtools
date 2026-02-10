"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  MonitorSmartphone,
  Lock,
  Sparkles,
  Layers,
} from "lucide-react";

const reasons = [
  {
    title: "Fast & Lightweight",
    description:
      "All tools are optimized for speed and run instantly without unnecessary scripts or bloat.",
    icon: Zap,
    accent: "from-indigo-600 to-purple-600",
  },
  {
    title: "100% Browser-Based",
    description:
      "Everything runs directly in your browser. No servers, no uploads, no waiting.",
    icon: MonitorSmartphone,
    accent: "from-sky-600 to-blue-600",
  },
  {
    title: "Privacy First",
    description:
      "Your code and files never leave your device. No tracking, no data storage.",
    icon: Lock,
    accent: "from-emerald-600 to-teal-600",
  },
  {
    title: "Built for Developers",
    description:
      "Designed by a developer who understands real-world workflows and pain points.",
    icon: Layers,
    accent: "from-amber-600 to-orange-600",
  },
  {
    title: "Clean & Modern UI",
    description:
      "Focused, distraction-free interfaces that help you get things done faster.",
    icon: Sparkles,
    accent: "from-rose-600 to-pink-600",
  },
  {
    title: "No Signup Required",
    description:
      "Use tools instantly without creating accounts or sharing personal information.",
    icon: ShieldCheck,
    accent: "from-violet-600 to-fuchsia-600",
  },
];

export default function WhyUseUs() {
  return (
    <section className="py-20 bg-white">
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
            Why Developers{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Choose SmartDevTool
            </span>
          </h2>

          <p className="mt-4 text-gray-600">
            We focus on building tools that respect your time, privacy, and
            workflow — so you can focus on what really matters.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="
                rounded-2xl
                border border-gray-200
                bg-gray-50
                p-6
                transition-all duration-300
                hover:-translate-y-[2px]
                hover:border-gray-300
                hover:bg-white
              "
            >
              {/* Icon */}
              <div
                className={`
                  inline-flex p-3 rounded-xl
                  bg-gradient-to-br ${item.accent}
                  text-white
                `}
              >
                <item.icon className="w-5 h-5" />
              </div>

              {/* Content */}
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
