import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    default: "The Helping Hands | Cleaning Services South Africa",
    template: "%s | The Helping Hands",
  },

  description:
    "Professional residential, commercial, and deep cleaning services in South Africa. Reliable property maintenance and home renovation solutions in Mpumalanga, Limpopo, and KwaZulu-Natal.",

  keywords: [
    "cleaning services South Africa",
    "cleaners Mpumalanga",
    "cleaning services Limpopo",
    "cleaning services KwaZulu-Natal",
    "residential cleaning",
    "commercial cleaning SA",
    "deep cleaning company",
    "property maintenance South Africa",
    "home renovation services",
    "cleaning services Louis Trichardt",
    "cleaning services Eshowe",
    "cleaning services Empangeni",
  ],

  metadataBase: new URL("https://thehelpinghands.co.za"),

  openGraph: {
    title: "The Helping Hands | Cleaning Services South Africa",
    description:
      "Trusted cleaning, maintenance, and renovation company serving homes and businesses across South Africa.",
    url: "https://thehelpinghands.co.za",
    siteName: "The Helping Hands",
    type: "website",
    images: [
      {
        url: "/images/thh.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Cleaning Services South Africa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Helping Hands Cleaning Services",
    description:
      "Reliable cleaning and property maintenance services across South Africa.",
    images: ["/images/thh.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">

        <Navbar />

        <main>{children}</main>

        <Footer />

        {/* 🔥 LOCAL SEO TEXT BOOST */}
        <div className="sr-only">
          Cleaning services South Africa, Limpopo cleaning company,
          Louis Trichardt cleaning services, Eshowe cleaning services,
          Empangeni cleaning services, residential cleaning, commercial cleaning,
          deep cleaning, carpet cleaning, property maintenance South Africa.
        </div>

        {/* 🚀 GOOGLE BUSINESS SCHEMA (LOCAL SEO POWER BOOST) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "The Helping Hands Cleaning Services",
              image: "https://thehelpinghands.co.za/images/thh.jpg",
              url: "https://thehelpinghands.co.za",
              telephone: "+27682221989",
              priceRange: "Affordable",

              description:
                "Professional cleaning services in South Africa including residential cleaning, commercial cleaning, deep cleaning, and property maintenance.",

              address: {
                "@type": "PostalAddress",
                streetAddress: "102 President Street, Louis Trichardt",
                addressLocality: "Louis Trichardt",
                addressRegion: "Limpopo",
                postalCode: "0920",
                addressCountry: "ZA",
              },

              areaServed: [
                "South Africa",
                "Limpopo",
                "Mpumalanga",
                "KwaZulu-Natal",
                "Louis Trichardt",
                "Eshowe",
                "Empangeni",
              ],

              geo: {
                "@type": "GeoCoordinates",
                latitude: -23.0468,
                longitude: 29.9040,
              },

              openingHours: "Mo-Sa 08:00-18:00",

              sameAs: [
                "https://wa.me/27682221989"
              ],

              serviceType: [
                "Residential Cleaning",
                "Commercial Cleaning",
                "Deep Cleaning",
                "Carpet Cleaning",
                "Property Maintenance",
                "Renovation Services"
              ]
            }),
          }}
        />

      </body>
    </html>
  );
}