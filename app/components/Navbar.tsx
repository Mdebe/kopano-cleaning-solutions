"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image src="/images/logo.png" alt="kOpano Cleaning Solutions" width={280} height={50} />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold text-gray-800 items-center">
          <li><Link href="/" className="hover:text-[#1bb6ba] transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-[#1bb6ba] transition">About</Link></li>
          <li><Link href="/services" className="hover:text-[#1bb6ba] transition">Services</Link></li>
          <li><Link href="/gallery" className="hover:text-[#1bb6ba] transition">Gallery</Link></li>
          <li><Link href="/contact" className="hover:text-[#1bb6ba] transition">Contact Us</Link></li>

          {/* WhatsApp Button */}
          <li>
            <a
              href="https://wa.me/27726248177"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.37 0 .01 5.36 0 12c0 2.1.55 4.07 1.6 5.8L0 24l6.43-1.58A11.93 11.93 0 0012 24c6.63 0 12-5.36 12-12a11.9 11.9 0 00-3.48-8.52zm-8.5 17a9.65 9.65 0 01-5.2-1.6l-.36-.22-3.8.93.97-3.7-.23-.36A9.74 9.74 0 012.3 12c0-5.35 4.36-9.7 9.7-9.7 2.6 0 5.04 1.02 6.88 2.88a9.66 9.66 0 012.82 6.85c0 5.36-4.36 9.7-9.7 9.7zm5.4-7.92c-.3-.15-1.76-.87-2.03-.97s-.48-.15-.68.15-.78.97-.96 1.17-.35.22-.65.07a8.19 8.19 0 01-2.42-1.5 9.1 9.1 0 01-1.68-2.08c-.17-.29 0-.45.13-.6.14-.15.3-.35.45-.52.15-.17.2-.3.3-.5.1-.17 0-.3-.03-.45-.07-.15-.68-1.63-.93-2.23s-.48-.5-.68-.51h-.58c-.17 0-.45.07-.68.35s-.9.87-.9 2.12.93 2.46 1.06 2.63c.13.17 1.84 2.88 4.45 4.03 2.61 1.15 2.61.77 3.08.72.47-.05 1.52-.62 1.73-1.22.2-.6.2-1.12.14-1.22-.07-.1-.26-.17-.56-.32z" />
              </svg>
              WhatsApp
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-semibold text-gray-800">
          <li><Link href="/" className="block hover:text-[#1bb6ba] transition">Home</Link></li>
          <li><Link href="/about" className="block hover:text-[#1bb6ba] transition">About</Link></li>
          <li><Link href="/services" className="block hover:text-[#1bb6ba] transition">Services</Link></li>
          <li><Link href="/gallery" className="block hover:text-[#1bb6ba] transition">Gallery</Link></li>
          <li><Link href="/contact" className="block hover:text-[#1bb6ba] transition">Contact Us</Link></li>
          <li>
            <a
              href="https://wa.me/27726248177"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 text-white px-4 py-2 rounded-lg font-semibold transition text-center"
            >
              WhatsApp
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
