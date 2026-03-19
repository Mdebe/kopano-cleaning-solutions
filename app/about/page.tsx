"use client";

import Image from "next/image";

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-5">

          <h1 className="text-4xl font-bold text-[#004295]">
            About The Helping Hands
          </h1>

          <p className="text-gray-800">
            The Helping Hands is a South African cleaning and maintenance company
            offering residential, commercial, and deep cleaning services across Limpopo,
            Mpumalanga, and KwaZulu-Natal.
          </p>

          <p className="text-gray-700">
            We focus on affordable, reliable cleaning, property maintenance, and renovation
            solutions for homes, offices, and businesses.
          </p>

          <p className="text-gray-700">
            <strong>Location:</strong><br />
            Mabuzu Street, Tembisa Section, Mhluzi, South Africa
          </p>

        </div>

        <Image
          src="/images/laundry.png"
          alt="Cleaning services team South Africa"
          width={600}
          height={400}
          className="rounded-xl shadow-2xl"
        />
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#004295]">
          Mission & Vision
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div className="p-5 bg-white rounded-2xl shadow">
            <h3 className="font-bold text-[#004295] mb-2">Mission</h3>
            <p>Affordable and reliable cleaning services in South Africa.</p>
          </div>

          <div className="p-5 bg-white rounded-2xl shadow">
            <h3 className="font-bold text-[#004295] mb-2">Vision</h3>
            <p>To be a leading cleaning company in South Africa.</p>
          </div>

          <div className="p-5 bg-white rounded-2xl shadow">
            <h3 className="font-bold text-[#004295] mb-2">Values</h3>
            <p>Quality, trust, professionalism, and customer satisfaction.</p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-10 text-[#004295]">
          Cleaning & Maintenance Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Cleaning Services",
              desc: "Home, office, and commercial cleaning across South Africa.",
            },
            {
              title: "Deep Cleaning",
              desc: "Full sanitation and hygiene cleaning services.",
            },
            {
              title: "Maintenance",
              desc: "Repairs, painting, tiling, and renovations.",
            },
          ].map((item) => (
            <div key={item.title} className="p-5 bg-gray-50 rounded-2xl shadow">
              <h3 className="font-bold text-[#004295] mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* TEAM */}
      <section className="bg-gray-50 py-20 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10 text-[#004295]">
          Our Team
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            "Management Team",
            "Field Team",
            "Support Team",
          ].map((name) => (
            <div key={name} className="p-5 bg-white rounded-2xl shadow">
              <Image
                src="/images/logo.png"
                alt="Cleaning team South Africa"
                width={400}
                height={250}
                className="rounded-xl mb-3"
              />
              <h3 className="font-bold">{name}</h3>
              <p className="text-sm text-gray-600">Professional Staff</p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{ background: "linear-gradient(to right, #004295, #0ea5e9)" }}
      >
        <h2 className="text-3xl font-bold text-white mb-5">
          Get Cleaning Services Today
        </h2>

        <a
          href="https://wa.me/27682221989"
          className="bg-white text-[#004295] px-6 py-3 rounded-xl font-bold"
        >
          Contact Us
        </a>
      </section>

      {/* SEO HIDDEN TEXT */}
      <div className="sr-only">
        Cleaning services South Africa, Limpopo cleaning, Mpumalanga cleaning,
        KwaZulu-Natal cleaning, residential cleaning, commercial cleaning,
        deep cleaning, property maintenance South Africa.
      </div>
    </>
  );
}