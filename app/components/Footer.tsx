"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-16 px-6 text-white"
      style={{
        background: "linear-gradient(to right, #0e7c7f, #1bb6ba)",
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Logo + About */}
        <div className="flex flex-col items-start space-y-4">
          <Image
            src="/images/logo.png"
            alt="kOpano Cleaning Solutions"
            width={140}
            height={50}
          />
          <p className="text-gray-100 text-sm">
            Kopano Cleaning Solutions provides reliable residential and commercial cleaning
            services in Witbank. Your satisfaction is our priority.
          </p>
          <a
            href="https://wa.me/27726248177"
            className="bg-white text-[#1bb6ba] px-4 py-2 rounded font-semibold text-sm hover:bg-gray-100 transition"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-200 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-gray-200 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-gray-200 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="#gallery" className="hover:text-gray-200 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-gray-200 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <p className="text-gray-100 text-sm mb-2">
            33 Mona Street, Model Park, Witbank, 1035
          </p>
          <p className="text-gray-100 text-sm mb-2">Tel: 072 624 8177 / 076 889 055</p>
          <p className="text-gray-100 text-sm">Email: mabitjiemmetla@gmail.com</p>
        </div>
      </div>

      <div className="mt-10 border-t border-white/30 pt-6 text-center">
        <p className="text-gray-100 text-sm">
          &copy; {new Date().getFullYear()} Kopano Cleaning Solutions. All rights reserved.
        </p>
        <p className="text-gray-200 text-xs mt-2">
          Developed by <a href="https://yourportfolio.com" className="underline hover:text-white">Mdebe</a>
        </p>
      </div>
    </footer>
  );
}
