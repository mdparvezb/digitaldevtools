"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-150 h-150 bg-linear-to-r from-indigo-200/40 via-purple-200/40 to-pink-200/40 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-sm text-gray-600"
        >
          <Sparkles className="w-4 h-4 text-indigo-500" />
          Built for digital Developers & Creators
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-gray-900"
        >
          Powerful{" "}
          <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Smart Developer Tools
          </span>
          <br className="md:block" />
          All in One Place
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-gray-600 text-base md:text-lg"
        >
          We build and provide digital fast, privacy-friendly tools to help
          developers write better code, create content faster, and ship products
          smarter — all directly in the browser.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#tools"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            Explore Tools
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
          >
            <Code2 className="w-4 h-4 text-indigo-600" />
            See How It Works
          </a>
        </motion.div>

        {/* Trust Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-8 text-sm text-gray-500"
        >
          No signup required • Runs fully in your browser • Built for speed
        </motion.p>
      </div>
    </section>
  );
}
