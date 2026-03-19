"use client";

import { useState } from "react";
import Image from "next/image";

export default function Services() {
  const [activeTab, setActiveTab] = useState("cleaning");

  const tabs = [
    { id: "cleaning", label: "Cleaning Services South Africa" },
    { id: "maintenance", label: "Maintenance & Repairs SA" },
    { id: "special", label: "Specialised Cleaning Services" },
  ];

  const servicesData: any = {
    cleaning: [
      {
        title: "Residential Cleaning South Africa",
        img: "/images/banner.png",
        desc: "Professional home cleaning services including deep cleaning, kitchen, bathrooms, dust removal and full house sanitation.",
      },
      {
        title: "Office & Commercial Cleaning",
        img: "/images/hero.jpg",
        desc: "Reliable office cleaning services for businesses, shops, and corporate buildings across South Africa.",
      },
      {
        title: "Deep Cleaning Services",
        img: "/images/hero.jpg",
        desc: "Intensive deep cleaning solutions for stubborn dirt, stains, and full property restoration.",
      },
      {
        title: "Carpet & Upholstery Cleaning",
        img: "/images/hero2.jpg",
        desc: "Steam cleaning for carpets, couches, mattresses, and fabric surfaces for homes and offices.",
      },
    ],

    maintenance: [
      {
        title: "Painting Services South Africa",
        img: "/images/hero1.jpg",
        desc: "Interior and exterior painting services for residential and commercial properties.",
      },
      {
        title: "Tiling & Flooring Installation",
        img: "/images/hero2.jpg",
        desc: "Professional tile installation, repairs, and flooring upgrades for modern homes and businesses.",
      },
      {
        title: "General Property Repairs",
        img: "/images/hero.jpg",
        desc: "Plumbing fixes, door repairs, ceiling maintenance, leak repairs, and general property upkeep.",
      },
    ],

    special: [
      {
        title: "Move-In / Move-Out Cleaning",
        img: "/images/logo.png",
        desc: "Complete cleaning services before or after moving into residential or commercial properties.",
      },
      {
        title: "Post-Construction Cleaning",
        img: "/images/tile.png",
        desc: "Removal of dust, rubble, and construction waste after building or renovation projects.",
      },
      {
        title: "Event Cleaning Services",
        img: "/images/thh.jpeg",
        desc: "Pre-event and post-event cleaning services for weddings, venues, and private functions.",
      },
    ],
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">

      {/* SEO TITLE */}
      <h1 className="text-5xl font-bold text-center mb-4 text-[#004295]">
        Professional Cleaning Services South Africa
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        The Helping Hands provides affordable residential cleaning, commercial cleaning,
        deep cleaning, maintenance, and property repair services across South Africa
        including Limpopo, Mpumalanga, and KwaZulu-Natal.
      </p>

      {/* TABS */}
      <div className="flex justify-center mb-14">
        <div className="flex gap-4 bg-gray-100 p-2 rounded-full shadow-md">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeTab === tab.id
                  ? "bg-[#004295] text-white shadow-lg"
                  : "text-gray-600 hover:text-[#004295]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="grid md:grid-cols-3 gap-10">
        {servicesData[activeTab].map((service: any) => (
          <div
            key={service.title}
            className="bg-white rounded-2xl shadow-2xl hover:-translate-y-3 transition overflow-hidden"
          >
            <div className="h-[180px] overflow-hidden">
              <Image
                src={service.img}
                alt={`${service.title} South Africa cleaning service`}
                width={500}
                height={300}
                className="object-cover w-full h-full hover:scale-110 transition"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#004295] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-4 text-[#004295]">
          Need Professional Cleaning Services Near You?
        </h2>

        <p className="text-gray-600 mb-6">
          Get a free quote for cleaning, maintenance, or renovation services anywhere in South Africa.
        </p>

        <a
          href="https://wa.me/27682221989"
          className="bg-[#004295] text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition inline-block"
        >
          Request a Free Quote
        </a>
      </div>

      {/* 🔥 SEO HIDDEN TEXT (GOOGLE RANK BOOST) */}
      <div className="sr-only">
        Cleaning services South Africa, residential cleaning Limpopo, office cleaning Mpumalanga,
        deep cleaning services KwaZulu-Natal, post construction cleaning, carpet cleaning services,
        property maintenance South Africa, affordable cleaning company, The Helping Hands cleaning services.
      </div>

    </section>
  );
}