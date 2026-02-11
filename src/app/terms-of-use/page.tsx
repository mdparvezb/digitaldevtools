import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | DigitalDevTools",
  description:
    "Read the official Terms and Conditions of DigitalDevTools. Understand the rules, usage policies, and limitations for using our developer tools.",
  keywords: [
    "Terms and Conditions",
    "DigitalDevTools Terms",
    "Developer Tools Policy",
    "Terms of use",
    "Website Terms of Service",
  ],
  authors: [{ name: "DigitalDevTools" }],
  openGraph: {
    title: "Terms of Use | DigitalDevTools",
    description:
      "Official Terms of Use governing the use of DigitalDevTools and its developer utilities.",
    url: "https://www.digitaldevtools.com/terms-of-use",
    siteName: "DigitalDevTools",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.digitaldevtools.com/terms-of-use",
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>

      <p className="mb-6 text-sm text-gray-500">
        Effective Date: February 10, 2026
      </p>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          Welcome to <strong>DigitalDevTools</strong>. By accessing or using{" "}
          <a
            href="https://www.digitaldevtools.com"
            className="text-blue-600 hover:underline"
          >
            www.digitaldevtools.com
          </a>
          , you agree to comply with and be bound by these Terms and Conditions.
          If you do not agree, please do not use our website.
        </p>

        <h2 className="text-2xl font-semibold mt-10">1. Use of Our Services</h2>

        <p>
          <strong>DigitalDevTools</strong> provides online developer utilities
          such as code converters, image tools, and related services. You agree
          to use these tools only for lawful purposes and in a way that does not
          violate any applicable laws or regulations.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          2. User Responsibilities
        </h2>

        <p>
          You are solely responsible for any content you upload, convert, or
          generate using our tools. You must ensure that you have the legal
          right to use and process such content.
        </p>

        <p>You agree not to:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Upload malicious code or harmful files</li>
          <li>Attempt to disrupt or compromise website security</li>
          <li>Use the service for illegal or abusive purposes</li>
          <li>Violate intellectual property rights</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">
          3. Intellectual Property
        </h2>

        <p>
          All website content, branding, logos, and software components of
          DigitalDevTools are the intellectual property of DigitalDevTools
          unless otherwise stated. Unauthorized reproduction or redistribution
          is prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          4. Third-Party Services
        </h2>

        <p>
          Our website may use third-party services such as Google AdSense and
          analytics providers. We are not responsible for the policies or
          practices of third-party platforms.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          5. Disclaimer of Warranties
        </h2>

        <p>
          All services are provided “as is” without warranties of any kind. We
          do not guarantee that the website will be uninterrupted, error-free,
          or completely secure.
        </p>

        <h2 className="text-2xl font-semibold mt-10">
          6. Limitation of Liability
        </h2>

        <p>
          DigitalDevTools shall not be held liable for any direct, indirect,
          incidental, or consequential damages resulting from the use or
          inability to use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-10">7. Termination</h2>

        <p>
          We reserve the right to suspend or terminate access to our services
          without prior notice if users violate these Terms and Conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-10">8. Changes to Terms</h2>

        <p>
          We may update these Terms and Conditions at any time. Continued use of
          the website after changes are posted constitutes acceptance of those
          changes.
        </p>

        <h2 className="text-2xl font-semibold mt-10">9. Governing Law</h2>

        <p>These Terms shall be governed in accordance with applicable laws.</p>

        <h2 className="text-2xl font-semibold mt-10">
          10. Contact Information
        </h2>

        <p>If you have questions regarding these Terms, please contact:</p>

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
