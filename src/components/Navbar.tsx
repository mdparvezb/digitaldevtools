"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Tools", href: "/tools" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/95 border-b border-gray-300">
      <nav className="w-full mx-auto px-4 md:px-20 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-gray-900"
        >
          <img
            src="/branding/logo.png"
            alt="DigitalDevTools logo"
            className="w-20 md:w-50 h-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#get-started"
            className="px-4 py-1.5 text-sm rounded-md bg-gray-900 text-white hover:bg-gray-800 transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 text-sm hover:text-gray-900"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#get-started"
                className="mt-2 w-full text-center py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
