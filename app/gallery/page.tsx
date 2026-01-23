"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const images = [
    "/images/residential.jpeg",
    "/images/office.jpeg",
    "/images/deep-clean.jpeg",
    "/images/team.jpeg",
    "/images/movein.jpeg",
    "/images/construction.jpeg",
  ];

  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <> 

      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-14" style={{ color: "#1bb6ba" }}>
          Gallery
        </h1>
        <div className="relative max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden">
          <Image
            src={images[current]}
            alt="Gallery"
            width={900}
            height={500}
            className="rounded-2xl transition-transform duration-700 hover:scale-105"
          />
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 text-white px-4 py-2 rounded-full hover:bg-white/50"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 text-white px-4 py-2 rounded-full hover:bg-white/50"
          >
            ▶
          </button>
        </div>
      </section>

      
    </>
  );
}
