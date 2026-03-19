"use client";

import { useState, useEffect } from "react";

const BRAND_COLOR = "#004295";

const slides = [
  {
    image: "/images/thh.jpg",
    title: "Residential & Commercial Cleaning",
    description: "Reliable, high-quality cleaning for homes and businesses.",
  },
  {
    image: "/images/hero2.jpg",
    title: "Property Maintenance Services",
    description: "Complete repairs and ongoing property care solutions.",
  },
  {
    image: "/images/hero.jpg",
    title: "Deep Cleaning Specialists",
    description: "Thorough cleaning for a healthier, fresher environment.",
  },
  {
    image: "/images/hero1.jpg",
    title: "Renovation & Home Improvements",
    description: "Painting, tiling, and property upgrades done professionally.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">

      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">

            {/* Brand Badge */}
            <span
              className="px-4 py-1 rounded-full text-sm text-white mb-4"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              The Helping Hands
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4">

              <a
                href="https://wa.me/27726248177"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition shadow-lg"
                style={{ backgroundColor: "#25D366" }}
              >
                Chat on WhatsApp
              </a>

              <a
                href="/contact"
                className="px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition"
                style={{
                  backgroundColor: BRAND_COLOR,
                  color: "white",
                }}
              >
                Request a Quote
              </a>

            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition ${
              current === idx ? "bg-white scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}