"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const phone = "+27 68 222 1989";
  const email = "info@thehelpinghands.co.za";

  const handleMobileLinkClick = () => setIsOpen(false);

  return (
    <nav className="w-full z-50 bg-white/30 backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" onClick={handleMobileLinkClick}>
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="The Helping Hands"
              width={0}
              height={0}
              sizes="100vw"
              className="h-20 md:h-24 w-auto object-contain drop-shadow-md"
              priority
            />
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-800">

          <Link href="/" className="hover:text-[#004295] transition">Home</Link>
          <Link href="/about" className="hover:text-[#004295] transition">About</Link>
          <Link href="/services" className="hover:text-[#004295] transition">Services</Link>
          <Link href="/gallery" className="hover:text-[#004295] transition">Gallery</Link>
          <Link href="/contact" className="hover:text-[#004295] transition">Contact</Link>

          {/* CTA */}
          <div className="flex items-center gap-3 ml-4">

            <a
              href="https://wa.me/27682221989"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition"
            >
              WhatsApp
            </a>

            <Link
              href="/contact"
              className="bg-[#004295] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#00306e] transition"
            >
              Get Quote
            </Link>

          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={toggleMenu} className="md:hidden">
          <svg
            className="w-7 h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 bg-white/90 backdrop-blur-xl border-t border-gray-200">
          <div className="flex flex-col gap-4 mt-4 text-gray-800 font-medium">

            <Link href="/" onClick={handleMobileLinkClick}>Home</Link>
            <Link href="/about" onClick={handleMobileLinkClick}>About</Link>
            <Link href="/services" onClick={handleMobileLinkClick}>Services</Link>
            <Link href="/gallery" onClick={handleMobileLinkClick}>Gallery</Link>
            <Link href="/contact" onClick={handleMobileLinkClick}>Contact</Link>

            {/* CTA */}
            <a
              href="https://wa.me/27682221989"
              className="bg-green-500 text-white px-4 py-3 rounded-xl text-center font-semibold mt-2"
              onClick={handleMobileLinkClick}
            >
              WhatsApp
            </a>

            <a
              href={`tel:${phone}`}
              className="bg-[#004295] text-white px-4 py-3 rounded-xl text-center font-semibold"
              onClick={handleMobileLinkClick}
            >
              Call Now
            </a>

            <a
              href={`mailto:${email}`}
              className="bg-gray-900 text-white px-4 py-3 rounded-xl text-center font-semibold"
              onClick={handleMobileLinkClick}
            >
              Email Us
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}