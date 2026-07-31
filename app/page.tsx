import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Offers from "@/components/Offers";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/business";
import { getProducts } from "@/lib/sanity.data";
import { toFrontendProducts } from "@/lib/sanity.mapper";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": "https://zeropointbyx.com/#store",
  name: BUSINESS.name,
  alternateName: BUSINESS.tagline,
  description:
    "Buy, sell and exchange new & used mobile phones, laptops and accessories in Mymensingh, Bangladesh.",
  url: "https://zeropointbyx.com",
  email: BUSINESS.email,
  telephone: "+8801684377617",
  currenciesAccepted: "BDT",
  paymentAccepted: "Cash, bKash, Nagad, Card",
  priceRange: "৳৳",
  image:
    "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1400&q=85",
  sameAs: [
    BUSINESS.socials.facebook,
    BUSINESS.socials.youtube,
    BUSINESS.socials.tiktok,
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.full,
    addressLocality: "Mymensingh",
    addressRegion: "Mymensingh Division",
    postalCode: "2200",
    addressCountry: "BD",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.7471,
    longitude: 90.4203,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
      ],
      opens: "10:00",
      closes: "21:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "10:00",
      closes: "21:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Mymensingh",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: { "@type": "Product", name: "Mobile Phones" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Product", name: "Laptops" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Product", name: "Accessories" },
    },
  ],
};

export default async function Home() {
  const products = toFrontendProducts(await getProducts());

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ProductGrid products={products} />
      <Offers />
      <Footer />
    </>
  );
}
