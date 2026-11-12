"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiCheckCircle,
  FiShield,
  FiTruck,
  FiPackage,
  FiShoppingBag,
  FiHeart,
  FiPlus,
  FiMinus,
  FiZap,
  FiArrowRight,
} from "react-icons/fi";
import { FaStar, FaHeart, FaWhatsapp } from "react-icons/fa";
import { getDiscountPercent } from "@/data/products";
import { useStore } from "@/context/StoreContext";

const WHATSAPP_NUMBER = "919999999999";

export default function ProductDetailClient({ product, relatedProducts }) {
  const { addToCart, toggleWishlist, isWishlisted, setCartOpen } = useStore();
  const [selectedFlavor, setSelectedFlavor] = useState(
    product.flavors?.[0] || ""
  );
  const [quantity, setQuantity] = useState(1);

  const discount = getDiscountPercent(product.price, product.originalPrice);
  const savings = Math.max(0, product.originalPrice - product.price);
  const totalPrice = product.price * quantity;
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setCartOpen(true);
  };

  const whatsappOrderUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Vape Shop Lucknow, I want to order:\n\nProduct: ${product.name}\nVariant/Flavor: ${
      selectedFlavor || "Standard"
    }\nQuantity: ${quantity}\nTotal: ₹${totalPrice.toLocaleString("en-IN")}`
  )}`;

  const specs = [
    { label: "Brand", value: product.brand },
    { label: "Category", value: product.category },
    { label: "Capacity / Output", value: product.puffs },
    { label: "Nicotine / Pod", value: product.nicotine },
    { label: "Battery / Ratio", value: product.battery },
    { label: "Authenticity", value: "100% QR Verified" },
    { label: "Dispatch Hub", value: "Lucknow Express Hub" },
    { label: "Delivery Time", value: "30 – 45 Minutes" },
    { label: "Packaging", value: "100% Discreet Box" },
  ];

  return (
    <div className="bg-white text-[#1e2223] py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#1e2223]/60 mb-6"
        >
          <Link href="/" className="hover:text-[#C9A24D] transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="/#featured"
            className="hover:text-[#C9A24D] transition-colors"
          >
            Products
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#1e2223] font-medium truncate">
            {product.name}
          </span>
        </nav>

        {/* Main Product Card */}
        <article className="rounded-3xl border border-[#1e2223]/10 bg-white p-5 sm:p-8 shadow-[0_12px_40px_rgba(30,34,35,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Column: Image & Micro Guarantees */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[#1e2223]/10 bg-[#1e2223]/[0.02]">
                <Image
                  src={product.image}
                  alt={`${product.name} — Buy at Vape Shop Lucknow`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />

                {discount > 0 && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-[#1e2223] text-[#E2C16B] border border-[#C9A24D]/45">
                    {discount}% OFF
                  </span>
                )}

                <span className="inline-flex items-center gap-1.5 absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#1e2223] border border-[#1e2223]/12 shadow-xs">
                  <FiCheckCircle
                    className="w-3.5 h-3.5 text-[#C9A24D]"
                    aria-hidden="true"
                  />
                  <span>100% Original</span>
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#1e2223]/[0.03] border border-[#1e2223]/8">
                  <FiShield
                    className="w-4 h-4 text-[#C9A24D] mb-1"
                    aria-hidden="true"
                  />
                  <span className="text-[11px] font-bold text-[#1e2223]">
                    QR Scan Code
                  </span>
                  <span className="text-[10px] text-[#1e2223]/60">
                    Official Brand Seal
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#1e2223]/[0.03] border border-[#1e2223]/8">
                  <FiTruck
                    className="w-4 h-4 text-[#C9A24D] mb-1"
                    aria-hidden="true"
                  />
                  <span className="text-[11px] font-bold text-[#1e2223]">
                    45-Min Express
                  </span>
                  <span className="text-[10px] text-[#1e2223]/60">
                    Across Lucknow
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-[#1e2223]/[0.03] border border-[#1e2223]/8">
                  <FiPackage
                    className="w-4 h-4 text-[#C9A24D] mb-1"
                    aria-hidden="true"
                  />
                  <span className="text-[11px] font-bold text-[#1e2223]">
                    100% Discreet
                  </span>
                  <span className="text-[10px] text-[#1e2223]/60">
                    Plain Outer Box
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Product Info & Actions */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#1e2223] text-[#E2C16B] border border-[#C9A24D]/40">
                    Brand: {product.brand}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1e2223]">
                    <FiCheckCircle
                      className="w-4 h-4 text-[#C9A24D]"
                      aria-hidden="true"
                    />
                    <span>In Stock in Lucknow</span>
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1e2223]">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-0.5 text-[#C9A24D]">
                    <FaStar className="w-3.5 h-3.5" aria-hidden="true" />
                    <FaStar className="w-3.5 h-3.5" aria-hidden="true" />
                    <FaStar className="w-3.5 h-3.5" aria-hidden="true" />
                    <FaStar className="w-3.5 h-3.5" aria-hidden="true" />
                    <FaStar className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span className="font-bold text-[#1e2223]">
                    {product.rating}
                  </span>
                  <span className="text-[#1e2223]/60">
                    • {product.reviewsCount} Verified Lucknow Buyers
                  </span>
                </div>

                {/* Price Box */}
                <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-[#1e2223]/[0.03] border border-[#1e2223]/10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-bold text-[#1e2223]">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-base text-[#1e2223]/45 line-through">
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                    {savings > 0 && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#1e2223] text-[#E2C16B] border border-[#C9A24D]/45">
                        You Save ₹{savings.toLocaleString("en-IN")} ({discount}
                        % OFF)
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-[#1e2223]/65">
                    Inclusive of all local dispatch taxes • Free express rider
                    delivery in Lucknow on orders over ₹1,500
                  </p>
                </div>

                {/* Flavor / Variant Selector */}
                {product.flavors && product.flavors.length > 0 && (
                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1e2223]/70 mb-2.5">
                      Available Options / Flavors:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.flavors.map((flavor) => {
                        const active = selectedFlavor === flavor;
                        return (
                          <button
                            key={flavor}
                            type="button"
                            onClick={() => setSelectedFlavor(flavor)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                              active
                                ? "bg-[#1e2223] text-[#E2C16B] border-[#C9A24D]"
                                : "bg-white text-[#1e2223] border-[#1e2223]/15 hover:border-[#C9A24D]"
                            }`}
                          >
                            {flavor}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Quantity + Wishlist */}
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-[#1e2223]/70">
                      Quantity:
                    </span>
                    <div className="flex items-center rounded-full border border-[#1e2223]/15 bg-white px-1 py-0.5">
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        aria-label="Decrease quantity"
                        className="w-8 h-8 flex items-center justify-center text-[#1e2223] hover:text-[#C9A24D] cursor-pointer"
                      >
                        <FiMinus className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                      <span className="px-3 text-sm font-bold text-[#1e2223]">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => q + 1)}
                        aria-label="Increase quantity"
                        className="w-8 h-8 flex items-center justify-center text-[#1e2223] hover:text-[#C9A24D] cursor-pointer"
                      >
                        <FiPlus className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                    <span className="text-sm font-bold text-[#1e2223]">
                      Total: ₹{totalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleWishlist(product)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                      wishlisted
                        ? "bg-[#1e2223] text-[#E2C16B] border-[#C9A24D]"
                        : "bg-white text-[#1e2223] border-[#1e2223]/15 hover:border-[#C9A24D]"
                    }`}
                  >
                    {wishlisted ? (
                      <FaHeart className="w-3.5 h-3.5" aria-hidden="true" />
                    ) : (
                      <FiHeart className="w-3.5 h-3.5" aria-hidden="true" />
                    )}
                    <span>{wishlisted ? "Saved in Wishlist" : "Save"}</span>
                  </button>
                </div>

                {/* Primary CTAs */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={whatsappOrderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 h-12 rounded-full bg-[#1e2223] text-[#E2C16B] text-sm font-bold border border-[#C9A24D]/55 shadow-[0_6px_20px_rgba(30,34,35,0.18)] hover:bg-[#2a2f30] transition-all"
                  >
                    <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
                    <span>Order via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex items-center justify-center gap-2 h-12 rounded-full border-2 border-[#1e2223] bg-white text-[#1e2223] text-sm font-bold hover:bg-[#1e2223] hover:text-[#E2C16B] transition-all cursor-pointer"
                  >
                    <FiShoppingBag className="w-4 h-4" aria-hidden="true" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>

              {/* Local Lucknow Dispatch Info */}
              <ul className="mt-6 pt-5 border-t border-[#1e2223]/10 space-y-1.5 text-xs text-[#1e2223]/75 list-none p-0">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24D]" />
                  <span>
                    <strong className="text-[#1e2223]">Lucknow Delivery:</strong>{" "}
                    30–45 Minutes (Gomti Nagar, Hazratganj, Alambagh, Indira
                    Nagar)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24D]" />
                  <span>
                    <strong className="text-[#1e2223]">Payment Modes:</strong>{" "}
                    Cash on Delivery (COD), UPI (GPay, PhonePe, Paytm)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </article>

        {/* About & Specifications Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <section
            aria-labelledby="about-product-heading"
            className="lg:col-span-7 rounded-3xl border border-[#1e2223]/10 bg-white p-6 sm:p-8 shadow-xs"
          >
            <h2
              id="about-product-heading"
              className="text-xl font-bold text-[#1e2223]"
            >
              About {product.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#1e2223]/75">
              {product.description}
            </p>

            <h3 className="mt-6 text-base font-bold text-[#1e2223]">
              Why Buy {product.name} from Vape Shop Lucknow?
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm text-[#1e2223]/75 list-disc pl-5">
              <li>
                <strong className="text-[#1e2223]">Fastest Local Delivery:</strong>{" "}
                Express riders stationed across Gomti Nagar, Hazratganj, and
                Indira Nagar deliver in 30–45 minutes.
              </li>
              <li>
                <strong className="text-[#1e2223]">100% Genuine Guaranteed:</strong>{" "}
                Every unit features an un-scratched QR code for official
                manufacturer verification.
              </li>
              <li>
                <strong className="text-[#1e2223]">Complete Privacy:</strong>{" "}
                Packaged in a plain, opaque outer carton with discreet billing.
              </li>
              <li>
                <strong className="text-[#1e2223]">Flexible Payments:</strong>{" "}
                Pay via instant UPI or Cash on Delivery.
              </li>
            </ul>
          </section>

          <section
            aria-labelledby="specs-heading"
            className="lg:col-span-5 rounded-3xl border border-[#1e2223]/10 bg-white p-6 sm:p-8 shadow-xs"
          >
            <h2
              id="specs-heading"
              className="flex items-center gap-2 text-xl font-bold text-[#1e2223] mb-4"
            >
              <FiZap className="w-5 h-5 text-[#C9A24D]" aria-hidden="true" />
              <span>Product Specifications</span>
            </h2>
            <dl className="divide-y divide-[#1e2223]/10">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="py-3 flex items-center justify-between gap-4 text-sm"
                >
                  <dt className="text-[#1e2223]/65">{spec.label}</dt>
                  <dd className="font-semibold text-[#1e2223] text-right">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        {/* Frequently Bought Together in Lucknow */}
        <section
          aria-labelledby="related-heading"
          className="mt-12"
        >
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h2
                id="related-heading"
                className="text-xl sm:text-2xl font-bold text-[#1e2223]"
              >
                Frequently Bought Together in{" "}
                <span className="text-[#C9A24D]">Lucknow</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#1e2223]/65 mt-0.5">
                Other trending devices at Vape Shop Lucknow
              </p>
            </div>
            <Link
              href="/#featured"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1e2223] hover:text-[#C9A24D] transition-colors"
            >
              <span>View All 25 Products</span>
              <FiArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.slug}`}
                className="group rounded-xl sm:rounded-2xl border border-[#1e2223]/10 bg-white p-2.5 sm:p-3.5 hover:border-[#C9A24D]/65 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-lg sm:rounded-xl bg-[#1e2223]/[0.03]">
                  <Image
                    src={item.image}
                    alt={`${item.name} — Vape Shop Lucknow`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="mt-2.5 sm:mt-3 text-[10px] sm:text-[11px] font-semibold uppercase text-[#C9A24D] truncate">
                  {item.brand}
                </p>
                <h3 className="text-xs sm:text-sm font-bold text-[#1e2223] line-clamp-2 mt-0.5 group-hover:text-[#9A7422]">
                  {item.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1.5 sm:gap-2">
                  <span className="text-sm sm:text-base font-bold text-[#1e2223]">
                    ₹{item.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#1e2223]/45 line-through">
                    ₹{item.originalPrice.toLocaleString("en-IN")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

