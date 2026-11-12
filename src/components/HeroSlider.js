"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SLIDES = [
  {
    id: 1,
    desktopSrc: "/herosectionbanner/dextopbanner1.png",
    mobileSrc: "/herosectionbanner/mobilebanner1.png",
    alt: "Vape Shop Lucknow — Premium Disposable Vapes, Pod Systems and Express 30-45 Min Delivery Across Lucknow",
    href: "#featured",
  },
  {
    id: 2,
    desktopSrc: "/herosectionbanner/dextopbanner2.png",
    mobileSrc: "/herosectionbanner/mobilebanner2.png",
    alt: "Vape Shop Lucknow — 100% Genuine Scratch QR Verified Vapes, E-Liquids and Instant UPI Payment",
    href: "#featured",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    setIsPaused(false);
  };

  return (
    <section
      aria-label="Vape Shop Lucknow Hero Banners"
      className="bg-white pt-3 sm:pt-5 pb-2 px-3 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-[#1e2223]/12 shadow-[0_14px_40px_rgba(30,34,35,0.10)] bg-[#1e2223]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Desktop Banner Track (1983x793 => 2.5:1) */}
          <div className="hidden md:block relative w-full aspect-[1983/793]">
            {SLIDES.map((slide, idx) => (
              <Link
                key={`desktop-${slide.id}`}
                href={slide.href}
                aria-hidden={idx !== activeIndex}
                tabIndex={idx === activeIndex ? 0 : -1}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === activeIndex
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.desktopSrc}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  sizes="(min-width: 1280px) 1280px, calc(100vw - 48px)"
                  className="object-cover"
                />
              </Link>
            ))}
          </div>

          {/* Mobile Banner Track (1095x1437 => portrait) */}
          <div className="block md:hidden relative w-full aspect-[1095/1437]">
            {SLIDES.map((slide, idx) => (
              <Link
                key={`mobile-${slide.id}`}
                href={slide.href}
                aria-hidden={idx !== activeIndex}
                tabIndex={idx === activeIndex ? 0 : -1}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === activeIndex
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.mobileSrc}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 767px) calc(100vw - 24px), 1px"
                  className="object-cover"
                />
              </Link>
            ))}
          </div>

          {/* Prev / Next Arrows */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous banner"
            className="hidden sm:flex items-center justify-center absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#1e2223]/80 text-[#E2C16B] border border-[#C9A24D]/45 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-[#1e2223] transition-all duration-200 cursor-pointer"
          >
            <FiChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next banner"
            className="hidden sm:flex items-center justify-center absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#1e2223]/80 text-[#E2C16B] border border-[#C9A24D]/45 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-[#1e2223] transition-all duration-200 cursor-pointer"
          >
            <FiChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Bottom Gold Dot Indicators */}
          <div
            className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e2223]/75 backdrop-blur-md border border-[#C9A24D]/30"
            role="tablist"
            aria-label="Select hero banner"
          >
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={idx === activeIndex}
                aria-label={`Show banner ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "w-7 bg-gradient-to-r from-[#C9A24D] to-[#E2C16B]"
                    : "w-2 bg-white/45 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
