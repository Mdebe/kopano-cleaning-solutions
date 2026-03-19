"use client";

import BrandCirclesBg from "./BrandCirclesBg";

export default function WhyChooseUs() {
  const stats = [
    { label: "Homes Cleaned", value: 500, suffix: "+" },
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Availability", value: "24/7", suffix: "" },
    { label: "Satisfaction Rate", value: "100", suffix: "%" },
  ];

  return (
    <section className="relative py-24 px-6 bg-white border-y border-gray-100 overflow-hidden">

      {/* 🌊 BACKGROUND DESIGN */}
      <BrandCirclesBg />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* TITLE */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-gray-600 mt-3">
            Trusted cleaning & maintenance professionals in South Africa
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">

          {stats.map((item) => (
            <div
              key={item.label}
              className="relative p-8 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-blue-700">
                {item.value}
                {item.suffix}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}