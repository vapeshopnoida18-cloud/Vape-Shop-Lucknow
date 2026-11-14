import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiShield,
  FiArrowRight,
  FiPlus,
  FiHeart,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { LUCKNOW_LOCATIONS } from "@/data/locations";
import { PRODUCTS, getDiscountPercent } from "@/data/products";

const WHATSAPP_NUMBER = "917726005950";

export function generateStaticParams() {
  return LUCKNOW_LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const loc = LUCKNOW_LOCATIONS.find((l) => l.slug === slug);

  if (!loc) {
    return {
      title: "Location Not Found | Vape Shop Lucknow",
    };
  }

  return {
    title: loc.title,
    description: loc.description,
    keywords: [
      `Vape Shop in ${loc.name}`,
      `Vape Delivery ${loc.name} Lucknow`,
      `Buy Vape ${loc.name}`,
      `Disposable Vape ${loc.name}`,
      `Vape Store ${loc.name}`,
      "Vape Shop Lucknow",
    ],
    openGraph: {
      title: loc.title,
      description: loc.description,
      type: "website",
      locale: "en_IN",
      siteName: "Vape Shop Lucknow",
    },
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const loc = LUCKNOW_LOCATIONS.find((l) => l.slug === slug);

  if (!loc) {
    notFound();
  }

  const otherLocations = LUCKNOW_LOCATIONS.filter((l) => l.slug !== loc.slug);
  const featuredProducts = PRODUCTS.slice(0, 8);

  const whatsappOrderUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Vape Shop Lucknow, I want to order for delivery in ${loc.name}, Lucknow.`
  )}`;

  return (
    <div className="bg-white text-[#1e2223] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#1e2223]/60 mb-6"
        >
          <Link href="/" className="hover:text-[#C9A24D] transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="/#lucknow-info"
            className="hover:text-[#C9A24D] transition-colors"
          >
            Lucknow Delivery Areas
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#1e2223] font-medium">{loc.name}</span>
        </nav>

        {/* Hero Card for this Lucknow Location */}
        <header className="rounded-3xl border border-[#1e2223]/12 bg-white p-6 sm:p-10 shadow-[0_12px_40px_rgba(30,34,35,0.06)] mb-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1e2223] text-[#E2C16B] border border-[#C9A24D]/45">
              <FiMapPin className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{loc.name}, Lucknow Hub</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#1e2223]/[0.04] text-[#1e2223] border border-[#1e2223]/10">
              <FiClock className="w-3.5 h-3.5 text-[#C9A24D]" aria-hidden="true" />
              <span>Express Delivery: {loc.deliveryTime}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1e2223]">
            Vape Shop in{" "}
            <span className="text-[#C9A24D]">{loc.name}, Lucknow</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-[#1e2223]/75 max-w-3xl leading-relaxed">
            {loc.description}
          </p>

          {/* Localities Covered in this Sector */}
          <div className="mt-6 pt-5 border-t border-[#1e2223]/10">
            <p className="text-xs font-bold uppercase tracking-wider text-[#1e2223]/60 mb-3">
              Key Localities &amp; Landmarks Covered in {loc.name}:
            </p>
            <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
              {loc.areas.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1e2223]/[0.03] border border-[#1e2223]/10 text-xs font-medium text-[#1e2223]"
                >
                  <FiCheckCircle
                    className="w-3.5 h-3.5 text-[#C9A24D] shrink-0"
                    aria-hidden="true"
                  />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA & Delivery Guarantees */}
          <div className="mt-6 pt-5 border-t border-[#1e2223]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#1e2223]/80">
              <span className="inline-flex items-center gap-1.5">
                <FiShield className="w-4 h-4 text-[#C9A24D]" />
                100% Genuine Scratch QR
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FiCheckCircle className="w-4 h-4 text-[#C9A24D]" />
                Cash on Delivery &amp; UPI
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FiClock className="w-4 h-4 text-[#C9A24D]" />
                10:00 AM – 11:30 PM (All 7 Days)
              </span>
            </div>

            <a
              href={whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-[#1e2223] text-[#E2C16B] text-xs sm:text-sm font-bold border border-[#C9A24D]/50 hover:bg-[#2a2f30] transition-all shadow-md shrink-0"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Order for {loc.name}</span>
            </a>
          </div>
        </header>

        {/* Featured Products Ready for Delivery in this area */}
        <section
          aria-labelledby="available-products-heading"
          className="mb-12"
        >
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h2
                id="available-products-heading"
                className="text-xl sm:text-2xl font-bold text-[#1e2223]"
              >
                Available for Fast Delivery in{" "}
                <span className="text-[#C9A24D]">{loc.name}</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#1e2223]/65 mt-0.5">
                Top rated disposable vapes, pods &amp; e-liquids
              </p>
            </div>
            <Link
              href="/#featured"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#1e2223] hover:text-[#C9A24D] transition-colors"
            >
              <span>View All 25 Products</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {featuredProducts.map((product) => {
              const discount = getDiscountPercent(
                product.price,
                product.originalPrice
              );
              return (
                <article
                  key={product.id}
                  className="group flex flex-col justify-between rounded-xl sm:rounded-2xl border border-[#1e2223]/10 bg-white p-2.5 sm:p-3.5 shadow-xs hover:border-[#C9A24D]/60 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="relative aspect-square w-full overflow-hidden rounded-lg sm:rounded-xl bg-[#1e2223]/[0.03]">
                      <Link
                        href={`/product/${product.slug}`}
                        className="relative block w-full h-full"
                      >
                        <Image
                          src={product.image}
                          alt={`${product.name} in ${loc.name}, Lucknow`}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                      {discount > 0 && (
                        <span className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#1e2223]/90 text-[#E2C16B] border border-[#C9A24D]/40">
                          {discount}% OFF
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-[10px] sm:text-[11px] font-semibold uppercase text-[#C9A24D] truncate">
                      {product.brand} • {product.category}
                    </p>
                    <Link href={`/product/${product.slug}`} className="block mt-0.5">
                      <h3 className="text-xs sm:text-sm font-bold text-[#1e2223] line-clamp-2 min-h-[34px] group-hover:text-[#9A7422]">
                        {product.name}
                      </h3>
                    </Link>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-[#1e2223]/8 flex items-center justify-between">
                    <span className="text-sm sm:text-base font-bold text-[#1e2223]">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    <Link
                      href={`/product/${product.slug}`}
                      className="px-3 py-1 rounded-full bg-[#1e2223] text-[#E2C16B] text-[11px] font-semibold hover:bg-[#2a2f30]"
                    >
                      View Details
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Other Delivery Locations in Lucknow */}
        <section aria-labelledby="other-locations-heading" className="pt-6 border-t border-[#1e2223]/10">
          <h2
            id="other-locations-heading"
            className="text-lg sm:text-xl font-bold text-[#1e2223] mb-4"
          >
            Explore Other Vape Delivery Hubs in Lucknow:
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {otherLocations.map((other) => (
              <Link
                key={other.slug}
                href={`/location/${other.slug}`}
                className="flex items-center justify-between p-3 rounded-xl border border-[#1e2223]/10 bg-[#1e2223]/[0.02] hover:border-[#C9A24D] hover:bg-white transition-all group"
              >
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#1e2223] group-hover:text-[#9A7422] truncate">
                    {other.name}
                  </p>
                  <p className="text-[10px] text-[#1e2223]/60 truncate">
                    ETA: {other.deliveryTime}
                  </p>
                </div>
                <FiArrowRight className="w-3.5 h-3.5 text-[#1e2223]/40 group-hover:text-[#C9A24D] shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

