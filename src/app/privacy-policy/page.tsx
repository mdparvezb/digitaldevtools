import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DigitalDevTools",
  description:
    "Read the Privacy Policy of DigitalDevTools. Learn how we collect, use, and protect your data including Google AdSense and analytics usage.",
  keywords: [
    "Privacy Policy",
    "DigitalDevTools",
    "SmartDevTools",
    "Google AdSense Policy",
    "Developer Tools Privacy",
    "SaaS Privacy Policy",
  ],
  authors: [{ name: "DigitalDevTools" }],
  openGraph: {
    title: "Privacy Policy | DigitalDevTools",
    description:
      "Official Privacy Policy of DigitalDevTools explaining data usage, cookies, and Google AdSense compliance.",
    url: "https://www.digitaldevtools.com/privacy-policy",
    siteName: "DigitalDevTools",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.digitaldevtools.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <p className="mb-6 text-sm text-gray-500">
        Effective Date: February 11, 2026
      </p>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          Welcome to <strong>DigitalDevTools</strong> (“we,” “our,” or “us”).
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and safeguard your information when you visit :{" "}
          <a
            href="https://www.digitaldevtools.com/privacy-policy"
            className="text-blue-600 hover:underline"
          >
            www.digitaldevtools.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          1. Information We Collect
        </h2>

        <p>
          We may collect personal information such as name and email address
          when you contact us. We also automatically collect non-personal
          information including IP address, browser type, device information,
          pages visited, and time spent on our website.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          2. Cookies and Tracking Technologies
        </h2>

        <p>
          We use cookies to improve user experience and analyze traffic. These
          cookies help us understand how users interact with our tools and
          improve website performance.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          3. Google AdSense and Third-Party Advertising
        </h2>

        <p>
          We use Google AdSense to serve advertisements. Google, as a
          third-party vendor, uses cookies to serve ads based on your visit to
          this website and other websites on the Internet.
        </p>

        <p>
          Users may opt out of personalized advertising by visiting:{" "}
          <a
            href="https://adssettings.google.com"
            className="text-blue-600 hover:underline"
          >
            https://adssettings.google.com
          </a>
        </p>

        <h2 className="text-2xl font-semibold mt-10">4. Analytics Services</h2>

        <p>
          We may use analytics services such as Google Analytics to analyze
          website traffic and improve our services.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          5. User-Generated Content
        </h2>

        <p>
          DigitalDevTools provides developer utilities that may allow users to
          upload or convert code and images. We do not claim ownership of
          user-submitted content and are not responsible for misuse of tools.
        </p>

        <h2 className="text-2xl font-semibold mt-10">6. Data Security</h2>

        <p>
          We implement reasonable security measures to protect your information.
          However, no online transmission method is completely secure.
        </p>

        <h2 className="text-2xl font-semibold mt-10">7. Children’s Privacy</h2>

        <p>
          Our website is not intended for children under 13 years of age. We do
          not knowingly collect personal data from children.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          8. Changes to This Policy
        </h2>

        <p>
          We may update this Privacy Policy periodically. Changes will be posted
          on this page with an updated effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-10">9. Contact Information</h2>

        <p>
          If you have questions about this Privacy Policy, please contact us at:
        </p>

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

      {/* Structured Data for SEO */}
    </main>
  );
}
