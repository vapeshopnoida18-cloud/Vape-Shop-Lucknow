"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaHeart, FaWhatsapp } from "react-icons/fa";
import AnnouncementBar from "@/components/AnnouncementBar";
import StoreDrawers from "@/components/StoreDrawers";
import { useStore } from "@/context/StoreContext";
import { PRODUCTS } from "@/data/products";
import logo from "@/app/vape shop lucknow logo.png";

const NAV_LINKS = [
  { label: "Featured Vapes", href: "/#featured", isHot: true },
  { label: "Categories", href: "/#categories" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQs", href: "/#faqs" },
];

export default function Navbar() {
  const {
    cartCount,
    wishlistCount,
    setCartOpen,
    setWishlistOpen,
    addToCart,
    toggleWishlist,
    isWishlisted,
  } = useStore();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const trimmedQuery = searchQuery.trim().toLowerCase();
  const filteredProducts = trimmedQuery
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmedQuery) ||
          p.category.toLowerCase().includes(trimmedQuery)
      )
    : [];

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        {/* Continuous SEO-Optimized Announcement Slider */}
        <AnnouncementBar />

        {/* Main White Navbar */}
        <nav
          aria-label="Primary Navigation"
          className={`w-full bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
            scrolled
              ? "border-[#1e2223]/12 shadow-[0_8px_30px_rgba(30,34,35,0.08)]"
              : "border-[#1e2223]/8"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-[72px] gap-3 lg:gap-5">
              {/* Left: Brand Logo */}
              <Link
                href="/"
                className="flex items-center shrink-0 group focus:outline-none"
                aria-label="Vape Shop Lucknow Home"
              >
                <div className="relative flex items-center bg-[#1e2223] px-3 sm:px-3.5 py-1.5 rounded-xl border border-[#C9A24D]/45 shadow-[0_2px_10px_rgba(30,34,35,0.14)] group-hover:border-[#E2C16B] transition-all duration-300">
                  <Image
                    src={logo}
                    alt="Vape Shop Lucknow Logo"
                    priority
                    className="h-8 sm:h-10 w-auto object-contain brightness-110 contrast-110 transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </Link>

              {/* Center: Navigation Links */}
              <div className="hidden xl:flex items-center gap-1 bg-[#1e2223]/[0.03] border border-[#1e2223]/[0.07] rounded-full px-2 py-1.5 shrink-0">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13.5px] font-medium text-[#1e2223] hover:bg-white hover:shadow-xs transition-all duration-200 group whitespace-nowrap"
                  >
                    <span>{item.label}</span>
                    {item.isHot && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1e2223] text-[#E2C16B] border border-[#C9A24D]/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E2C16B] animate-pulse" />
                        HOT
                      </span>
                    )}
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#C9A24D] to-[#E2C16B] rounded-full transition-all duration-300 group-hover:w-6" />
                  </Link>
                ))}
              </div>

              {/* Right: Inline Search + Wishlist + Cart + WhatsApp Order */}
              <div className="flex items-center gap-2 sm:gap-2.5 flex-1 xl:flex-initial justify-end">
                {/* Desktop Inline Live Search Bar */}
                <div
                  ref={searchRef}
                  role="search"
                  aria-label="Search Vape Shop Lucknow products"
                  className="relative hidden md:block w-full max-w-[240px] lg:max-w-[270px]"
                >
                  <div className="relative flex items-center">
                    <FiSearch
                      className="w-4 h-4 text-[#1e2223]/55 absolute left-3.5 pointer-events-none"
                      aria-hidden="true"
                    />
                    <input
                      type="search"
                      value={searchQuery}
                      onFocus={() => setSearchFocused(true)}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setSearchFocused(true);
                      }}
                      placeholder="Search vapes, flavors..."
                      aria-label="Search vapes, pods, and e-liquids"
                      className="w-full h-10 pl-10 pr-8 rounded-full bg-[#1e2223]/[0.03] border border-[#1e2223]/12 text-[13px] text-[#1e2223] placeholder:text-[#1e2223]/50 focus:outline-none focus:bg-white focus:border-[#C9A24D] focus:shadow-[0_0_0_3px_rgba(201,162,77,0.14)] transition-all"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        aria-label="Clear search"
                        className="absolute right-3 text-[#1e2223]/55 hover:text-[#1e2223] cursor-pointer"
                      >
                        <FiX className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    )}
                  </div>

                  {/* Live Search Results Dropdown */}
                  {searchFocused && trimmedQuery && (
                    <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl border border-[#1e2223]/12 shadow-xl overflow-hidden z-50">
                      {filteredProducts.length === 0 ? (
                        <p className="p-4 text-xs text-[#1e2223]/65 text-center">
                          No products found for &ldquo;{searchQuery}&rdquo;
                        </p>
                      ) : (
                        <ul className="divide-y divide-[#1e2223]/8 max-h-72 overflow-y-auto">
                          {filteredProducts.map((product) => (
                            <li
                              key={product.id}
                              className="flex items-center justify-between gap-2 p-3 hover:bg-[#1e2223]/[0.03] transition-colors"
                            >
                              <Link
                                href={`/product/${product.slug}`}
                                onClick={() => setSearchFocused(false)}
                                className="min-w-0 flex-1"
                              >
                                <p className="text-[11px] font-medium text-[#C9A24D]">
                                  {product.category}
                                </p>
                                <p className="text-xs font-semibold text-[#1e2223] truncate hover:text-[#C9A24D]">
                                  {product.name}
                                </p>
                                <p className="text-xs font-bold text-[#1e2223]">
                                  ₹{product.price.toLocaleString("en-IN")}
                                </p>
                              </Link>
                              <div className="flex items-center gap-1.5 shrink-0">
                                <button
                                  type="button"
                                  onClick={() => toggleWishlist(product)}
                                  aria-label={`Toggle wishlist for ${product.name}`}
                                  className={`w-7 h-7 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
                                    isWishlisted(product.id)
                                      ? "bg-[#1e2223] border-[#C9A24D] text-[#E2C16B]"
                                      : "border-[#1e2223]/15 text-[#1e2223]/70 hover:border-[#C9A24D]"
                                  }`}
                                >
                                  {isWishlisted(product.id) ? (
                                    <FaHeart className="w-3 h-3" aria-hidden="true" />
                                  ) : (
                                    <FiHeart className="w-3 h-3" aria-hidden="true" />
                                  )}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    addToCart(product);
                                    setSearchFocused(false);
                                    setCartOpen(true);
                                  }}
                                  className="px-2.5 py-1 rounded-full bg-[#1e2223] text-[#E2C16B] text-[11px] font-semibold hover:bg-[#2a2f30] cursor-pointer"
                                >
                                  + Cart
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>

                {/* Mobile Search Toggle */}
                <button
                  type="button"
                  onClick={() => setMobileSearchOpen((prev) => !prev)}
                  aria-label="Toggle search"
                  className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#1e2223]/12 shadow-xs text-[#1e2223] hover:border-[#C9A24D] transition-colors cursor-pointer"
                >
                  <FiSearch className="w-4 h-4" aria-hidden="true" />
                </button>

                {/* Circular Wishlist Button */}
                <button
                  type="button"
                  onClick={() => {
                    setCartOpen(false);
                    setWishlistOpen(true);
                  }}
                  aria-label={`Open wishlist (${wishlistCount} items)`}
                  className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#1e2223]/12 shadow-xs text-[#1e2223] hover:border-[#C9A24D] hover:shadow-sm transition-all duration-200 cursor-pointer shrink-0"
                >
                  {wishlistCount > 0 ? (
                    <FaHeart className="w-[17px] h-[17px] text-[#C9A24D]" aria-hidden="true" />
                  ) : (
                    <FiHeart className="w-[18px] h-[18px]" aria-hidden="true" />
                  )}
                  <span
                    aria-live="polite"
                    className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-[#1e2223] text-[#E2C16B] border border-[#C9A24D]/50 text-[11px] font-bold flex items-center justify-center shadow-xs"
                  >
                    {wishlistCount}
                  </span>
                </button>

                {/* Circular Cart Button */}
                <button
                  type="button"
                  onClick={() => {
                    setWishlistOpen(false);
                    setCartOpen(true);
                  }}
                  aria-label={`Open cart (${cartCount} items)`}
                  className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#1e2223]/12 shadow-xs text-[#1e2223] hover:border-[#C9A24D] hover:shadow-sm transition-all duration-200 cursor-pointer shrink-0"
                >
                  <FiShoppingCart className="w-[18px] h-[18px]" aria-hidden="true" />
                  <span
                    aria-live="polite"
                    className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-[#1e2223] text-[#E2C16B] border border-[#C9A24D]/50 text-[11px] font-bold flex items-center justify-center shadow-xs"
                  >
                    {cartCount}
                  </span>
                </button>

                {/* WhatsApp Order CTA */}
                <a
                  href="https://wa.me/917726005950?text=Hi%20Vape%20Shop%20Lucknow%2C%20I%20would%20like%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-full bg-[#1e2223] text-white text-[13px] font-semibold border border-[#C9A24D]/50 shadow-[0_4px_14px_rgba(30,34,35,0.18)] hover:bg-[#2a2f30] hover:border-[#E2C16B] hover:shadow-[0_6px_20px_rgba(201,162,77,0.28)] transition-all duration-200 whitespace-nowrap shrink-0"
                >
                  <FaWhatsapp className="w-4 h-4 text-[#E2C16B] shrink-0" aria-hidden="true" />
                  <span>WhatsApp Order</span>
                </a>

                {/* Mobile/Tablet Hamburger */}
                <button
                  type="button"
                  onClick={() => setMobileOpen((prev) => !prev)}
                  aria-label="Toggle menu"
                  aria-expanded={mobileOpen}
                  className="xl:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[#1e2223]/12 text-[#1e2223] hover:border-[#C9A24D] transition-colors cursor-pointer shrink-0"
                >
                  {mobileOpen ? (
                    <FiX className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <FiMenu className="w-5 h-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Search Bar */}
            {mobileSearchOpen && (
              <div className="md:hidden pb-3 pt-1 border-t border-[#1e2223]/8">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search vapes, pods, flavors..."
                  autoFocus
                  className="w-full h-10 px-4 rounded-full bg-[#1e2223]/[0.04] border border-[#1e2223]/15 text-sm text-[#1e2223] placeholder:text-[#1e2223]/50 focus:outline-none focus:border-[#C9A24D] focus:bg-white"
                />
                {trimmedQuery && (
                  <div className="mt-2 bg-white rounded-2xl border border-[#1e2223]/12 shadow-lg divide-y divide-[#1e2223]/8">
                    {filteredProducts.length === 0 ? (
                      <p className="p-3 text-xs text-[#1e2223]/65 text-center">
                        No products found
                      </p>
                    ) : (
                      filteredProducts.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center justify-between p-3"
                        >
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-[#1e2223] truncate">
                              {product.name}
                            </p>
                            <p className="text-xs font-bold text-[#C9A24D]">
                              ₹{product.price.toLocaleString("en-IN")}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              addToCart(product);
                              setMobileSearchOpen(false);
                              setCartOpen(true);
                            }}
                            className="px-3 py-1 rounded-full bg-[#1e2223] text-[#E2C16B] text-xs font-semibold"
                          >
                            + Cart
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile / Tablet Drawer */}
          {mobileOpen && (
            <div className="xl:hidden bg-white border-t border-[#1e2223]/10 px-4 py-4 space-y-2 shadow-lg">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-[#1e2223] hover:bg-[#1e2223]/[0.04] transition-colors"
                >
                  <span>{item.label}</span>
                  {item.isHot && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1e2223] text-[#E2C16B] border border-[#C9A24D]/40">
                      HOT
                    </span>
                  )}
                </Link>
              ))}

              <div className="pt-2 border-t border-[#1e2223]/10 sm:hidden">
                <a
                  href="https://wa.me/917726005950?text=Hi%20Vape%20Shop%20Lucknow%2C%20I%20would%20like%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full h-11 rounded-full bg-[#1e2223] text-[#E2C16B] text-sm font-semibold border border-[#C9A24D]/50"
                >
                  <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp Order</span>
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Real-time Cart & Wishlist Slide-Over Drawers */}
      <StoreDrawers />
    </>
  );
}
