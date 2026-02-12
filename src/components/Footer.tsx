"use client";

import { Github, Twitter, Mail, Code2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-gray-900"
            >
              <img
                src="/branding/logo.png"
                alt="DigitalDevTools logo"
                className="w-40 md:w-50 h-full"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              We build fast, privacy-friendly developer tools that run entirely
              in your browser. No signups. No tracking. Just productivity.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Tools</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a href="/tools/code-to-image" className="hover:text-gray-900">
                  Code to Image
                </a>
              </li>
              <li>
                <a
                  href="/tools/image-compressor"
                  className="hover:text-gray-900"
                >
                  Image Compressor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  PNG to WebP
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Code to PDF
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a href="/blog" className="hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-900">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Connect</h4>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                aria-label="GitHub"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                aria-label="Twitter"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href="mailto:support@digitaldevtool.com"
                aria-label="Email"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 pt-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} DigitalDevTool. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs text-gray-500">
            <a href="/privacy-policy" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="/terms-of-use" className="hover:text-gray-900">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
