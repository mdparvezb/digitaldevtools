"use client";
import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setLoading(false);
    setStatus("Message sent successfully!");
    setForm({ name: "", email: "", message: "", website: "" });
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl text-center font-bold mb-6">Contact Us</h1>

      <p className="mb-10 text-gray-600">
        Have questions, suggestions, or partnership inquiries? Send us a message
        and we’ll get back to you as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-md"
      >
        {/* Honeypot Field (Hidden from users) */}
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={handleChange}
          className="hidden"
          autoComplete="off"
        />

        <div>
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90 hover:shadow-md transition cursor-pointer"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className="text-center mt-4 text-sm text-green-600">{status}</p>
        )}
      </form>
    </main>
  );
};

export default ContactForm;
