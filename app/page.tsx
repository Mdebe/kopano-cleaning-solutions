"use client";

import HeroSlider from "./components/HeroSlider";
import Image from "next/image";
import ServicesTabs from "./components/serviceTap";
import BubblesBackground from "./components/BubblesBackground";
import WhyChooseUs from "./components/whyus";
import ServiceAreas from "./components/ServiceAreas";
import FAQ from "./components/faq";
import BrandCirclesBg from "./components/BrandCirclesBg";

const BRAND = "#004295";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white">

      {/* BACKGROUND */}
      <BubblesBackground />
      <BrandCirclesBg />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HERO (SEO KEY ENTRY POINT) */}
        <HeroSlider />

        {/* ABOUT SECTION (SEO OPTIMIZED) */}
        <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <span
              className="px-4 py-1 rounded-full text-white text-sm"
              style={{ backgroundColor: BRAND }}
            >
              Cleaning Services South Africa
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6 text-gray-900">
              Professional Cleaning & Property Maintenance Company
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              The Helping Hands provides professional residential cleaning,
              commercial cleaning, deep cleaning, property maintenance, and home
              renovation services across South Africa.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We proudly serve clients in <b>Limpopo</b>, <b>Mpumalanga</b>, and
              <b> KwaZulu-Natal</b>, offering reliable and affordable cleaning solutions.
            </p>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
              <p className="font-semibold text-gray-900">📍 Service Areas</p>
              <p className="text-gray-600">
                Louis Trichardt • Eshowe • Empangeni • Surrounding South Africa regions
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative w-full h-[400px] md:h-[450px]">
            <Image
              src="/images/laundry.png"
              alt="Professional cleaning services South Africa team"
              fill
              className="object-cover rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* SERVICES */}
        <ServicesTabs />
        <WhyChooseUs />
        <FAQ />

        {/* WHY CHOOSE US (SEO BOOSTED TEXT) */}
        <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          {[
            {
              title: "Trusted Cleaning Experts",
              desc: "Reliable residential and commercial cleaning services across South Africa.",
            },
            {
              title: "Affordable Pricing",
              desc: "High-quality cleaning and maintenance services at competitive rates.",
            },
            {
              title: "Guaranteed Satisfaction",
              desc: "Professional service delivery with consistent quality standards.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3" style={{ color: BRAND }}>
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}

        </section>

        {/* 🔥 SEO HIDDEN CONTENT (IMPORTANT FOR GOOGLE RANKING) */}
        <div className="sr-only">
          The Helping Hands offers cleaning services in Louis Trichardt Limpopo,
          Eshowe KwaZulu-Natal, Empangeni KwaZulu-Natal, and surrounding areas in South Africa.
          Services include residential cleaning, commercial cleaning, deep cleaning,
          property maintenance, and home renovation services.
        </div>

      </div>
    </div>
  );
}