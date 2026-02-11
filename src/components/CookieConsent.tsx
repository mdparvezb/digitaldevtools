"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);

    // Example: Load AdSense script after consent
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-6 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm md:text-base">
          We use cookies to improve your experience and to display personalized
          ads via Google AdSense. By clicking “Accept”, you consent to our use
          of cookies. Read our Privacy Policy for more details.
        </p>

        <div className="flex gap-3">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Reject
          </button>

          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-white text-black rounded-lg font-semibold hover:opacity-90 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
