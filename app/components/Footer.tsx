"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-200 py-16 px-6 overflow-hidden">

      {/* 🌊 BACKGROUND CIRCLES (NAVY / BLUE GLOW) */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* large navy circle */}
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl" />

        {/* blue glow circle */}
        <div className="absolute top-10 -right-40 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl" />

        {/* small accent circle */}
        <div className="absolute bottom-20 right-1/3 w-[250px] h-[250px] bg-navy-900/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* 🧠 LOCAL SEO BOOST */}
        <div className="sr-only">
          Cleaning services South Africa, Limpopo cleaning company,
          Louis Trichardt cleaning services, Eshowe cleaning services,
          Empangeni cleaning services, residential cleaning, commercial cleaning,
          deep cleaning, property maintenance, office cleaning services near me.
        </div>

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* BRAND */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-md transition">
            <div className="relative w-[150px] h-[60px] mb-4">
              <Image
                src="/images/logo.png"
                alt="Helping Hands"
                fill
                className="object-contain"
                priority
              />
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Helping Hands delivers reliable home assistance, cleaning support,
              and maintenance services across South Africa.
            </p>

            <a
              href="https://wa.me/27682221989"
              className="inline-flex mt-4 bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold text-sm hover:bg-blue-700 transition"
            >
              WhatsApp Booking
            </a>
          </div>

          {/* SERVICES */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">
              Services
            </h3>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>🧹 Home Cleaning Assistance</li>
              <li>🛠️ Repairs & Maintenance</li>
              <li>🚚 Move In / Out Support</li>
              <li>🧼 Deep Cleaning Help</li>
              <li>🏢 Office Cleaning Support</li>
              <li>💡 General Household Help</li>
            </ul>
          </div>

          {/* CONTACT + MAP */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">
              Contact & Location
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <p>📞 +27 68 222 1989</p>
              <p>📞 +27 79 050 3168</p>
              <p>📧 thehelpinghands@gmail.com</p>
              <p>📍 Louis Trichardt, Limpopo, South Africa</p>
            </div>

            <div className="mt-4 rounded-xl overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.845!2d29.9040!3d-23.0468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6c6b3c9f9c0a1%3A0x0000000000000000!2sLouis%20Trichardt%2C%20Limpopo!5e0!3m2!1sen!2sza!4v0000000000000"
                width="100%"
                height="180"
                loading="lazy"
                className="border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Helping Hands. All rights reserved.
          </p>

          <p className="text-xs text-gray-400">
            Designed & Developed by{" "}
            <span className="font-medium text-gray-600">
              Mdebe Tech Solutions
            </span>
          </p>

        </div>
      </div>
    </footer>
  );
}