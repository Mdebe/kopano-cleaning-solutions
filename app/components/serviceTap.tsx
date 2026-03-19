"use client";

import { useState } from "react";
import Image from "next/image";

export default function ServicesTabs() {
  const BRAND = "#004295";

  const services = [
    {
      title: "Residential Cleaning",
      img: "/images/hero.jpg",
      desc: "Professional home cleaning to keep your space fresh and spotless.",
    },
    {
      title: "Office Cleaning",
      img: "/images/hero2.jpg",
      desc: "Reliable cleaning services for offices and business spaces.",
    },
    {
      title: "Deep Cleaning",
      img: "/images/tile.png",
      desc: "Intensive cleaning for hard-to-reach and neglected areas.",
    },
    {
      title: "Move In / Out",
      img: "/images/moveinn.jpeg",
      desc: "Perfect cleaning for smooth property transitions.",
    },
    {
      title: "Maintenance & Repairs",
      img: "/images/thh.jpg",
      desc: "Handyman services including repairs, painting, and upkeep.",
    },
    {
      title: "Carpet & Upholstery",
      img: "/images/hero2.jpg",
      desc: "Deep fabric cleaning for carpets, sofas, and furniture.",
    },
  ];

  const [active, setActive] = useState(0);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setRotate({
      x: y * 6,
      y: x * -6,
    });
  };

  const resetMouse = () => setRotate({ x: 0, y: 0 });

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT TABS */}
          <div className="space-y-3">
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActive(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 shadow-sm ${
                  active === index
                    ? "text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                style={
                  active === index
                    ? { backgroundColor: BRAND }
                    : undefined
                }
              >
                <p className="font-semibold">{service.title}</p>
              </button>
            ))}
          </div>

          {/* RIGHT CARD */}
          <div
            className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 will-change-transform"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetMouse}
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            }}
          >

            {/* IMAGE WRAPPER (FIXED) */}
            <div className="relative w-full h-64 overflow-hidden bg-gray-100">

              <Image
                src={services[active].img}
                alt={services[active].title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-opacity duration-500"
              />

            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: BRAND }}
              >
                {services[active].title}
              </h3>

              <p className="text-gray-600 mb-6">
                {services[active].desc}
              </p>

              <a
                href="https://wa.me/27726248177"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition-transform"
                style={{ backgroundColor: BRAND }}
              >
                Book This Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}