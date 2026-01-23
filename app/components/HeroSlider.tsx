"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/hero-cleaning.jpeg",
    title: "Professional Residential Cleaning",
    description: "We make your home spotless and sparkling clean.",
  },
  {
    image: "/images/office.jpeg",
    title: "Office & Commercial Cleaning",
    description: "Reliable services for businesses of all sizes.",
  },
  {
    image: "/images/deep-clean.jpeg",
    title: "Deep Cleaning Experts",
    description: "Thorough cleaning for every corner of your space.",
  },
  {
    image: "/images/residential.jpeg",
    title: "Move-In / Move-Out Cleaning",
    description: "Smooth transition with a perfectly clean space.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl font-bold mb-4 text-white animate-fadeInDown">
              {slide.title}
            </h1>
            <p className="text-lg text-white mb-6 animate-fadeInUp">
              {slide.description}
            </p>
            <div className="flex gap-4 animate-fadeInUp">
              <a
                href="https://wa.me/27726248177"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-green-600 transition"
              >
                WhatsApp Us
              </a>
              <a
                href="/contact"
                className="bg-white text-[#1bb6ba] px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full ${
              current === idx ? "bg-white" : "bg-gray-400"
            } transition`}
          ></button>
        ))}
      </div>
    </section>
  );
}
