"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "How much do you charge?",
      a: "Pricing depends on the size of the job. We offer affordable quotes based on your needs.",
    },
    {
      q: "Do you bring cleaning equipment?",
      a: "Yes, we bring all required cleaning equipment and supplies unless otherwise requested.",
    },
    {
      q: "Do you work weekends?",
      a: "Yes, we are available 7 days a week including weekends and holidays.",
    },
    {
      q: "How long does cleaning take?",
      a: "It depends on the service type, but most jobs are completed within a few hours.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-3">
          Quick answers to common customer questions
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={item.q}
            className="border border-gray-200 rounded-xl bg-white"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full text-left p-5 font-semibold flex justify-between"
            >
              {item.q}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="p-5 pt-0 text-gray-600 text-sm">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}