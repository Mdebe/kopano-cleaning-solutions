"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
       

      {/* Hero Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold" style={{ color: "#1bb6ba" }}>
            About Kopano Cleaning Solutions
          </h1>
          <p className="text-gray-800 text-lg leading-relaxed">
            kOpano Cleaning Solutions is a trusted cleaning company based in Witbank, dedicated to providing high-quality residential and commercial cleaning services. 
            We pride ourselves on reliability, professionalism, and customer satisfaction.
          </p>
          <p className="text-gray-700">
            <strong>Directors:</strong><br />
            Mr Mabitjie Makeke<br />
            Ms Makhutso Maleka
          </p>
        </div>
        <Image
          src="/images/team.jpeg"
          alt="Team"
          width={600}
          height={400}
          className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-14" style={{ color: "#1bb6ba" }}>
          Our Mission, Vision & Values
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition duration-500">
            <h3 className="text-2xl font-bold mb-2" style={{ color: "#1bb6ba" }}>Mission</h3>
            <p>
              To provide professional, reliable, and environmentally friendly cleaning services that exceed our clients’ expectations.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition duration-500">
            <h3 className="text-2xl font-bold mb-2" style={{ color: "#1bb6ba" }}>Vision</h3>
            <p>
              To be the leading cleaning solutions provider in Witbank and surrounding areas, recognized for quality, trust, and innovation.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition duration-500">
            <h3 className="text-2xl font-bold mb-2" style={{ color: "#1bb6ba" }}>Values</h3>
            <p>
              Quality, Reliability, Trust, Transparency, Customer Satisfaction, and Team Excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14" style={{ color: "#1bb6ba" }}>
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition duration-500 cursor-pointer">
            <h3 className="text-2xl font-bold mb-2" style={{ color: "#1bb6ba" }}>Experienced Team</h3>
            <p>Our cleaners are professionally trained and detail-oriented, ensuring a spotless finish every time.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition duration-500 cursor-pointer">
            <h3 className="text-2xl font-bold mb-2" style={{ color: "#1bb6ba" }}>Reliable & Flexible</h3>
            <p>We work around your schedule, offering flexible services for homes and businesses.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition duration-500 cursor-pointer">
            <h3 className="text-2xl font-bold mb-2" style={{ color: "#1bb6ba" }}>Affordable & Transparent</h3>
            <p>Clear pricing with no hidden costs, giving you excellent value for quality cleaning services.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-14" style={{ color: "#1bb6ba" }}>Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-2">
            <Image
              src="/images/team.jpeg"
              alt="Team Member"
              width={400}
              height={250}
              className="rounded-xl mb-4"
            />
            <h3 className="font-bold text-xl mb-2">Mabitjie Makeke</h3>
            <p>Co-Director</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-2">
            <Image
              src="/images/team.jpeg"
              alt="Team Member"
              width={400}
              height={250}
              className="rounded-xl mb-4"
            />
            <h3 className="font-bold text-xl mb-2">Makhutso Maleka</h3>
            <p>Co-Director</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-2">
            <Image
              src="/images/team.jpeg"
              alt="Team Member"
              width={400}
              height={250}
              className="rounded-xl mb-4"
            />
            <h3 className="font-bold text-xl mb-2">Support Team</h3>
            <p>Cleaning Professionals</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(to right, #1bb6ba, #0e7c7f)" }}
      >
        <h2 className="text-4xl font-bold mb-6 text-white">
          Ready to Experience a Cleaner Space?
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
