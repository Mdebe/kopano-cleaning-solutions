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
    "Residential Cleaning South Africa",
    "Office & Commercial Cleaning",
    "Deep Cleaning Services",
    "Move-In / Move-Out Cleaning",
    "Post-Construction Cleaning",
    "Carpet & Upholstery Cleaning",
    "Maintenance & Repairs South Africa",
    "Specialised Cleaning Solutions",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);

    const waMessage = `Hello The Helping Hands 👋

I would like to request a quote.

Service: ${form.service}
Full Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Additional Details: ${form.message}

Location: Limpopo / South Africa`;

    const waUrl = `https://wa.me/27682221989?text=${encodeURIComponent(waMessage)}`;

    window.open(waUrl, "_blank");

    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-100">

      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-start">

        {/* CONTACT INFO + SEO */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">

          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#004295]">
            Cleaning Services in Limpopo & South Africa
          </h2>

          <p className="text-black mb-6 text-sm sm:text-base">
            The Helping Hands is a professional cleaning and property maintenance company
            offering residential cleaning, commercial cleaning, deep cleaning,
            and renovation services across South Africa including Limpopo, Mpumalanga,
            and KwaZulu-Natal.
          </p>

          <div className="space-y-4 text-black text-sm sm:text-base">

            <p>
              <strong>📍 Head Office Location (Limpopo):</strong><br />
              -102 President Street, Louis Trichardt, Limpopo, South Africa<br />
              Sunnydale, Eshowe<br />
              Sangoyana Reserve, Empangeni
            </p>

            <div className="flex items-center gap-4">
              <p className="font-semibold">📞 Phone:</p>
              <span>+27 68 222 1989</span>

              <a
                href="tel:+27682221989"
                className="ml-2 px-3 py-1 bg-[#004295] text-white rounded-lg hover:bg-[#00306e] transition text-sm font-medium"
              >
                Call Now
              </a>
            </div>

            <p>
              <strong>📧 Email:</strong><br />
              <a
                href="mailto:info@thehelpinghands.co.za"
                className="text-[#004295] hover:underline"
              >
                info@thehelpinghands.co.za
              </a>
            </p>

            <p>
              <strong>🕒 Business Hours:</strong><br />
              Monday – Saturday: 08:00 AM – 18:00 PM
            </p>
          </div>

          {/* GOOGLE MAPS */}
          <div className="mt-6 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=Louis%20Trichardt%20Limpopo%20South%20Africa&output=embed"
              width="100%"
              height="250"
              loading="lazy"
              className="border-0"
            />
          </div>

        </div>

        {/* QUOTE FORM */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">

          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-[#004295]">
            Request Cleaning Quote South Africa
          </h2>

          <p className="text-center text-black mb-6 text-sm sm:text-base">
            Get a fast quote for cleaning services in Limpopo, Mpumalanga, and across South Africa.
          </p>

          {submitted && (
            <div className="mb-6 text-center text-green-600 font-semibold">
              Quote request sent successfully! ✅
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#004295]"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#004295]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#004295]"
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#004295]"
              >
                <option value="" disabled>
                  Select Service
                </option>

                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Describe your cleaning or maintenance request"
              rows={4}
              className="w-full px-4 py-3 border rounded-lg text-black focus:ring-2 focus:ring-[#004295]"
            />

            <button
              type="submit"
              className="w-full bg-[#004295] hover:bg-[#00306e] text-white font-bold py-4 rounded-2xl transition shadow-lg"
            >
              Send Quote via WhatsApp
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}