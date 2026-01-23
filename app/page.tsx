"use client";

import HeroSlider from "./components/HeroSlider";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const gallerySlides = [
    "/images/residential.jpeg",
    "/images/office.jpeg",
    "/images/deep-clean.jpeg",
    "/images/team.jpeg",
  ];

  const [currentGallery, setCurrentGallery] = useState(0);

  const nextSlide = () =>
    setCurrentGallery((currentGallery + 1) % gallerySlides.length);
  const prevSlide = () =>
    setCurrentGallery(
      (currentGallery - 1 + gallerySlides.length) % gallerySlides.length
    );

  return (
    <>
      <HeroSlider />

      {/* About */}
      <section
        id="about"
        className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-4 animate-fadeIn">
          <h2 className="text-4xl font-extrabold mb-2" style={{ color: "#1bb6ba" }}>
            Who We Are
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Kopano Cleaning Solutions is a trusted cleaning company in Witbank providing
            professional and reliable services for homes and businesses. We focus on
            quality, reliability, and customer satisfaction.
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Directors:</strong>
            <br />
            Mr Mabitjie Makeke
            <br />
            Ms Makhutso Maleka
          </p>
        </div>
        <Image
          src="/images/team.jpeg"
          alt="Team"
          width={500}
          height={350}
          className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-20 px-6"
        style={{
          background: "linear-gradient(to right, #15191a, #17a0a5, #0e7c7f)",
        }}
      >
        <h2 className="text-4xl font-bold text-center mb-14 text-white animate-fadeIn">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Residential Cleaning", img: "/images/residential.jpeg" },
            { title: "Office & Commercial", img: "/images/office.jpeg" },
            { title: "Deep Cleaning", img: "/images/deep-clean.jpeg" },
            { title: "Move-In / Move-Out", img: "/images/moveinn.jpeg" },
            { title: "Post-Construction Cleaning", img: "/images/constructionn.jpeg" },
            { title: "Carpet & Upholstery Cleaning", img: "/images/carpet.jpeg" },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="w-full h-[100px] overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2" style={{ color: "#1bb6ba" }}>
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  Professional cleaning service to keep your space spotless.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        {[
          { title: "Experienced Team", desc: "Professionally trained cleaners with attention to detail." },
          { title: "Affordable Plans", desc: "Transparent pricing and no hidden fees." },
          { title: "Satisfaction Guaranteed", desc: "We ensure quality and customer happiness every time." },
        ].map((item) => (
          <div
            key={item.title}
            className="p-8 rounded-2xl shadow-2xl bg-white hover:shadow-3xl transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 animate-fadeIn cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-3" style={{ color: "#1bb6ba" }}>
              {item.title}
            </h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-14" style={{ color: "#1bb6ba" }}>
          How It Works
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {["1️⃣ Contact Us", "2️⃣ Get a Quote", "3️⃣ We Clean", "4️⃣ Enjoy Clean Space"].map(
            (step) => (
              <div
                key={step}
                className="bg-white text-gray-800 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 cursor-pointer"
              >
                {step}
              </div>
            )
          )}
        </div>
      </section>

      {/* Gallery Slider */}
      <section
        id="gallery"
        className="py-20 px-6"
        style={{ background: "linear-gradient(to right, #212d2d, #17a0a5)" }}
      >
        <h2 className="text-4xl font-bold text-center mb-10 text-white animate-fadeIn">
          Gallery
        </h2>
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src={gallerySlides[currentGallery]}
            alt="Gallery"
            width={900}
            height={450}
            className="rounded-2xl transition-transform duration-700 hover:scale-105"
          />
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 text-white px-4 py-2 rounded-full hover:bg-white/50"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 text-white px-4 py-2 rounded-full hover:bg-white/50"
          >
            ▶
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-14" style={{ color: "#1bb6ba" }}>
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { q: "Do you bring your own cleaning supplies?", a: "Yes, we bring all professional-grade supplies needed." },
            { q: "Are your cleaners trained and insured?", a: "Absolutely, all team members are fully trained and insured." },
            { q: "Can I schedule recurring cleaning?", a: "Yes, we offer flexible recurring plans for weekly, bi-weekly, or monthly cleaning." },
          ].map((faq) => (
            <div
              key={faq.q}
              className="bg-gray-100 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500"
            >
              <h3 className="font-bold text-lg" style={{ color: "#1bb6ba" }}>{faq.q}</h3>
              <p className="mt-2 text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location / Map */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10" style={{ color: "#1bb6ba" }}>
          Our Location
        </h2>
        <p className="text-center mb-6 text-gray-800">
          33 Mona Street, Model Park, Witbank, 1035
        </p>
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.123456789!2d26.522345!3d-25.888123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9ab3d6e8c12345%3A0xabcdef1234567890!2s33%20Mona%20St%2C%20Model%20Park%2C%20Witbank!5e0!3m2!1sen!2sza!4v1234567890"
            width="100%"
            height="100%"
            loading="lazy"
          />
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(to right, #1e2323, #17a0a5)" }}
      >
        <h2 className="text-4xl font-bold mb-6 text-white animate-fadeIn">
          Ready for a Cleaner Space?
        </h2>
        <a
          href="https://wa.me/27726248177"
          className="bg-white text-[#1bb6ba] px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
          Contact Us Today
        </a>
      </section>
    </>
  );
}
