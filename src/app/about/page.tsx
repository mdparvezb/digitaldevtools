import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | DigitalDevTools",
  description:
    "Learn about DigitalDevTools, a modern developer tools platform built to help developers convert code, images, and other tools with files efficiently.",
  keywords: [
    "About DigitalDevTools",
    "Developer Tools Platform",
    "Code to Image Tool",
    "Image to Code Converter",
    "Online Developer Utilities",
  ],
  authors: [{ name: "DigitalDevTools" }],
  openGraph: {
    title: "About Us | DigitalDevTools",
    description:
      "Discover the mission behind DigitalDevTools and how we build powerful utilities for developers.",
    url: "https://www.digitaldevtools.com/about",
    siteName: "DigitalDevTools",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.digitaldevtools.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl text-center font-bold text-blue-800 mb-8">
        About DigitalDevTools
      </h1>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          DigitalDevTools is a modern web platform built to simplify everyday
          tasks for developers. Our mission is to provide fast, reliable, and
          easy-to-use tools that improve productivity and streamline workflows.
        </p>

        <h2 className="text-2xl font-semibold mt-10">🚀 Our Mission</h2>

        <p>
          We aim to empower developers, designers, and creators by offering
          practical utilities such as code-to-image converters, image-to-code
          tools, file converters, and other web development resources — all in
          one place.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          💡 Why DigitalDevTools?
        </h2>

        <p>
          Developers often rely on multiple platforms to complete simple tasks.
          DigitalDevTools was created to reduce friction by providing optimized
          browser-based tools that work instantly without unnecessary
          complexity.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Fast and lightweight performance</li>
          <li>User-friendly interface</li>
          <li>Secure processing</li>
          <li>No unnecessary downloads</li>
          <li>Continuous improvements</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">
          🔐 Security & Transparency
        </h2>

        <p>
          We prioritize user privacy and transparency. Our tools are designed to
          respect user data, and we clearly disclose any third-party services
          such as analytics or advertising providers in our Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          🌍 Built for the Developer Community
        </h2>

        <p>
          DigitalDevTools is built for students, freelancers, startups, and
          professional developers who want efficient online utilities without
          distractions. We continuously enhance our platform based on user
          feedback and industry trends.
        </p>

        <h2 className="text-2xl font-semibold mt-10">📩 Get in Touch</h2>

        <p>Have suggestions or feedback? We would love to hear from you.</p>

        <p>
          Email:{" "}
          <a
            href="mailto:support@digitaldevtools.com"
            className="text-blue-600 hover:underline"
          >
            support@digitaldevtools.com{" "}
          </a>{" "}
          <br />
          Website:{" "}
          <a
            href="https://www.digitaldevtools.com"
            className="text-blue-600 hover:underline"
          >
            www.digitaldevtools.com
          </a>
        </p>
      </section>
    </main>
  );
}
