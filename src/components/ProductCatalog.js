"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiShield,
  FiCheckCircle,
  FiPlus,
  FiHeart,
} from "react-icons/fi";
import { FaHeart, FaWhatsapp } from "react-icons/fa";
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  getDiscountPercent,
} from "@/data/products";
import { useStore } from "@/context/StoreContext";

const WHATSAPP_NUMBER = "917726005950";

export const productCatalogSeo = {
  title: "Best Selling Vapes & Pod Kits in Lucknow | Vape Shop Lucknow",
  description:
    "Browse 25+ authentic disposable vapes, pod kits, nic salts, and coils at Vape Shop Lucknow with 30–45 minute delivery.",
};

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const { addToCart, toggleWishlist, isWishlisted, setCartOpen } = useStore();

  const filteredProducts =
    selectedCategory === "All Products"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="featured"
      aria-labelledby="catalog-heading"
      itemScope
      itemType="https://schema.org/WebPageElement"
      className="bg-white section-padding"
    >
      <meta itemProp="name" content={productCatalogSeo.title} />
      <meta itemProp="description" content={productCatalogSeo.description} />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#1e2223]/[0.04] text-[#1e2223] border border-[#C9A24D]/40 mb-4">
            <FiShield className="w-3.5 h-3.5 text-[#C9A24D]" aria-hidden="true" />
            <span>100% Genuine Stock in Lucknow</span>
          </p>

          <h2
            id="catalog-heading"
            className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1e2223]"
          >
            Best Selling Vapes &amp; Pod Kits in{" "}
            <span className="text-[#C9A24D]">Lucknow</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#1e2223]/70">
            Official Elfbar, Nasty, Lost Mary, Uwell Caliburn &amp; Vaporesso
            devices with guaranteed 30–45 min delivery across Lucknow.
          </p>
        </header>

        {/* Category Filter Tabs */}
        <nav
          id="categories"
          aria-label="Filter products by category"
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10"
        >
          {PRODUCT_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={isActive}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-[#1e2223] text-[#E2C16B] border-[#C9A24D]/60 shadow-[0_6px_18px_rgba(30,34,35,0.16)]"
                    : "bg-white text-[#1e2223] border-[#1e2223]/12 hover:border-[#C9A24D] hover:bg-[#1e2223]/[0.02]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </nav>

        {/* 25-Product Responsive Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6"
        >
          {filteredProducts.map((product) => {
            const discount = getDiscountPercent(
              product.price,
              product.originalPrice
            );
            const wishlisted = isWishlisted(product.id);
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              `Hi Vape Shop Lucknow, I want to order: ${product.name} (₹${product.price.toLocaleString(
                "en-IN"
              )})`
            )}`;

            return (
              <article
                key={product.id}
                className="group flex flex-col justify-between rounded-xl sm:rounded-2xl border border-[#1e2223]/10 bg-white p-2.5 sm:p-3.5 shadow-[0_4px_20px_rgba(30,34,35,0.04)] hover:border-[#C9A24D]/70 hover:shadow-[0_14px_34px_rgba(30,34,35,0.09)] transition-all duration-300"
              >
                <div>
                  {/* Image Container (Clickable -> Product Details) */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg sm:rounded-xl bg-[#1e2223]/[0.03] border border-[#1e2223]/6">
                    <Link
                      href={`/product/${product.slug}`}
                      className="relative block w-full h-full"
                    >
                      <Image
                        src={product.image}
                        alt={`${product.name} — Buy at Vape Shop Lucknow`}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>

                    {/* Top-Left Discount Badge */}
                    {discount > 0 && (
                      <span className="pointer-events-none absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-[#1e2223]/90 text-[#E2C16B] border border-[#C9A24D]/45 backdrop-blur-xs">
                        {discount}% OFF
                      </span>
                    )}

                    {/* Top-Right Wishlist Button */}
                    <button
                      type="button"
                      onClick={() => toggleWishlist(product)}
                      aria-label={
                        wishlisted
                          ? `Remove ${product.name} from wishlist`
                          : `Add ${product.name} to wishlist`
                      }
                      className={`absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center backdrop-blur-xs transition-all cursor-pointer ${
                        wishlisted
                          ? "bg-[#1e2223] border-[#C9A24D] text-[#E2C16B]"
                          : "bg-white/90 border-[#1e2223]/12 text-[#1e2223]/70 hover:border-[#C9A24D] hover:text-[#1e2223]"
                      }`}
                    >
                      {wishlisted ? (
                        <FaHeart className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                      ) : (
                        <FiHeart className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                      )}
                    </button>
                  </div>

                  {/* Brand & Category */}
                  <div className="mt-2.5 sm:mt-3.5 px-0.5 sm:px-1">
                    <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#C9A24D] truncate">
                      {product.brand} • {product.category}
                    </p>

                    {/* Product Title (Clickable -> Product Details) */}
                    <Link
                      href={`/product/${product.slug}`}
                      className="block mt-1 focus:outline-none"
                    >
                      <h3 className="text-[12.5px] sm:text-[14.5px] font-bold text-[#1e2223] leading-snug line-clamp-2 min-h-[34px] sm:min-h-[40px] group-hover:text-[#9A7422] transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                  </div>
                </div>

                {/* Price + Stock + Actions */}
                <div className="mt-2.5 sm:mt-3 px-0.5 sm:px-1 pt-2.5 sm:pt-3 border-t border-[#1e2223]/8">
                  <div className="flex items-center justify-between gap-1.5 mb-2.5 sm:mb-3">
                    <div className="flex items-baseline gap-1.5 sm:gap-2 min-w-0">
                      <span className="text-sm sm:text-lg font-bold text-[#1e2223]">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-[11px] sm:text-xs text-[#1e2223]/45 line-through truncate">
                        ₹{product.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-[#1e2223]/75 shrink-0">
                      <FiCheckCircle
                        className="w-3.5 h-3.5 text-[#C9A24D]"
                        aria-hidden="true"
                      />
                      <span>In Stock</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        addToCart(product);
                        setCartOpen(true);
                      }}
                      className="flex items-center justify-center gap-1 h-8 sm:h-9 rounded-full border border-[#1e2223]/15 bg-[#1e2223]/[0.03] text-[#1e2223] text-[11px] sm:text-xs font-semibold hover:border-[#C9A24D] hover:bg-white transition-all cursor-pointer"
                    >
                      <FiPlus className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                      <span>Add</span>
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 h-8 sm:h-9 rounded-full bg-[#1e2223] text-[#E2C16B] text-[11px] sm:text-xs font-semibold border border-[#C9A24D]/45 hover:bg-[#2a2f30] transition-all"
                    >
                      <FaWhatsapp className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

