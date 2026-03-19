export default function ServiceAreas() {
  return (
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-gray-900">
          Service Areas
        </h2>

        <p className="text-gray-600 mt-3">
          We provide reliable cleaning & assistance services across multiple regions
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {[
            {
              title: "Witbank",
              desc: "Full cleaning & maintenance services available in Witbank.",
            },
            {
              title: "Mpumalanga",
              desc: "We serve residential and commercial clients across Mpumalanga.",
            },
            {
              title: "Surrounding Areas",
              desc: "Contact us for availability in nearby towns and suburbs.",
            },
          ].map((area) => (
            <div
              key={area.title}
              className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm">{area.desc}</p>
            </div>
          ))}

        </div>

        <p className="mt-8 text-sm text-gray-500">
          📞 Call us for availability in your area
        </p>
      </div>
    </section>
  );
}