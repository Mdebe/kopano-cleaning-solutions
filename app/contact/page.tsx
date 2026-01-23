"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Residential Cleaning",
    "Office & Commercial",
    "Deep Cleaning",
    "Move-In / Move-Out",
    "Post-Construction Cleaning",
    "Carpet & Upholstery Cleaning",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log form to console
    console.log("Quote request:", form);
    setSubmitted(true);

    // Optional: open WhatsApp with message
    const waMessage = `Hello, I would like a quote for: ${form.service}\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`;
    const waUrl = `https://wa.me/27726248177?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, "_blank");

    // Reset form
    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <h2 className="text-4xl font-bold text-center mb-8" style={{ color: "#1bb6ba" }}>
          Get a Free Quote
        </h2>

        {submitted && (
          <div className="mb-6 text-center text-green-600 font-semibold animate-fadeIn">
            Your quote request has been sent! ✅
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1bb6ba] transition"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1bb6ba] transition"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1bb6ba] transition"
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1bb6ba] transition"
            >
              <option value="">Select Service</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Additional Details"
            rows={4}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1bb6ba] transition"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#1bb6ba] text-white font-bold py-3 rounded-2xl hover:bg-[#17a0a5] transition shadow-lg"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
