import ContactForm from "@/components/contact-page/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | DigitalDevTools",
  description:
    "Contact DigitalDevTools for support, feedback, or inquiries. We are here to help developers with our online tools.",
  keywords: [
    "Contact DigitalDevTools",
    "Developer Tools Support",
    "Contact Developer Platform",
    "DigitalDevTools Support",
  ],
  openGraph: {
    title: "Contact Us | DigitalDevTools",
    description: "Get in touch with DigitalDevTools for support and inquiries.",
    url: "https://www.digitaldevtools.com/contact",
    siteName: "DigitalDevTools",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.digitaldevtools.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactForm />
    </>
  );
}
