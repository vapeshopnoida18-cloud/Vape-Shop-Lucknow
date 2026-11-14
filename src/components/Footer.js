import Image from "next/image";
import Link from "next/link";
import {
  FiMapPin,
  FiClock,
  FiChevronRight,
  FiExternalLink,
  FiAlertTriangle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import logo from "@/app/vape shop lucknow logo.png";

const WHATSAPP_NUMBER = "917726005950";
const WHATSAPP_DISPLAY = "+91 77260 05950";

const CATEGORIES = [
  { label: "Disposable Vapes", href: "/#featured" },
  { label: "Smart Screen Vapes", href: "/#featured" },
  { label: "Refillable Pod Kits", href: "/#featured" },
  { label: "Nicotine Salts & Juices", href: "/#featured" },
  { label: "Replacement Coils", href: "/#featured" },
];

const LUCKNOW_AREAS = [
  { label: "Vape Delivery Gomti Nagar", href: "/#lucknow-info" },
  { label: "Vape Delivery Hazratganj", href: "/#lucknow-info" },
  { label: "Vape Store Indira Nagar", href: "/#lucknow-info" },
  { label: "Vape Delivery Aliganj", href: "/#lucknow-info" },
  { label: "Vape Delivery Aminabad & Jankipuram", href: "/#lucknow-info" },
];

const BRANDS = [
  "Elfbar",
  "Nasty",
  "Lost Mary",
  "Uwell Caliburn",
  "Geekvape",
  "Voopoo",
  "Vaporesso",
  "SMOK",
  "Bang Box",
  "iGET",
  "Pod Salt",
];

const SEO_KEYWORDS = [
  "#vapeshoplucknow",
  "#vapestoreinlucknow",
  "#buyvapeonlinelucknow",
  "#disposablevapelucknow",
  "#vapedeliverylucknow",
  "#vapeshopnearmelucknow",
  "#vapeshopgomtinagar",
  "#vapeshophazratganj",
  "#vapeshopindiranagar",
  "#vapeshopaliganj",
  "#vapeshopaminabad",
  "#vapeshopjankipuram",
  "#elfbarbc5000lucknow",
  "#nastybolt50klucknow",
  "#lostmarymt35000lucknow",
  "#uwellcaliburng3lucknow",
  "#geekvapeb60lucknow",
  "#voopooarguspodlucknow",
  "#vaporessoxroslucknow",
  "#smokvapelucknow",
  "#bangbox30000lucknow",
  "#iget10000puffslucknow",
  "#podsaltnicsaltlucknow",
  "#cashondeliveryvapelucknow",
  "#sameday45minvapedeliverylucknow",
];

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Vape Shop Lucknow, I would like to connect with support / place an order."
  )}`;

  return (
    <footer
      aria-label="Vape Shop Lucknow Footer"
      className="bg-[#1e2223] text-white border-t border-[#C9A24D]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-white/10">
          {/* Col 1: Brand Info (No Email) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-block focus:outline-none"
              aria-label="Vape Shop Lucknow Home"
            >
              <Image
                src={logo}
                alt="Vape Shop Lucknow Logo"
                className="h-12 w-auto object-contain brightness-110 contrast-110"
              />
            </Link>

            <p className="text-xs sm:text-[13.5px] leading-relaxed text-white/75 max-w-sm">
              <strong className="text-[#E2C16B] font-semibold">
                Vape Shop Lucknow
              </strong>{" "}
              — Lucknow&apos;s trusted destination for authentic disposable
              vapes, pod systems, replacement coils, and imported nic salts with
              100% discreet packaging.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/80 list-none m-0 p-0">
              <li className="flex items-start gap-2.5">
                <FiMapPin
                  className="w-4 h-4 text-[#C9A24D] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>
                  Coverage: Gomti Nagar, Hazratganj, Indira Nagar, Aliganj &amp;
                  All Lucknow
                </span>
              </li>

              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[#E2C16B] font-semibold hover:underline"
                >
                  <FaWhatsapp className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>WhatsApp: {WHATSAPP_DISPLAY} (Chat &amp; Order)</span>
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <FiClock
                  className="w-4 h-4 text-[#C9A24D] shrink-0"
                  aria-hidden="true"
                />
                <span>10:00 AM – 11:30 PM (All 7 Days Open)</span>
              </li>
            </ul>
          </div>

          {/* Col 2: Vape Categories */}
          <nav
            aria-label="Vape Categories"
            className="lg:col-span-2 space-y-3.5"
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#E2C16B]">
              Vape Categories
            </h2>
            <ul className="space-y-2.5 list-none m-0 p-0">
              {CATEGORIES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-white/75 hover:text-[#E2C16B] transition-colors"
                  >
                    <FiChevronRight
                      className="w-3.5 h-3.5 text-[#C9A24D] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Lucknow Express Areas */}
          <nav
            aria-label="Lucknow Express Areas"
            className="lg:col-span-3 space-y-3.5"
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#E2C16B]">
              Lucknow Express Areas
            </h2>
            <ul className="space-y-2.5 list-none m-0 p-0">
              {LUCKNOW_AREAS.map((area) => (
                <li key={area.label}>
                  <Link
                    href={area.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-white/75 hover:text-[#E2C16B] transition-colors"
                  >
                    <FiChevronRight
                      className="w-3.5 h-3.5 text-[#C9A24D] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{area.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4: Official Brands In-Store */}
          <div className="lg:col-span-3 space-y-3.5">
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#E2C16B]">
              Official Brands In-Store
            </h2>
            <ul className="flex flex-wrap gap-1.5 list-none m-0 p-0">
              {BRANDS.map((brand) => (
                <li key={brand}>
                  <Link
                    href="/#featured"
                    className="inline-block px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[11px] font-medium text-white/85 hover:border-[#C9A24D]/60 hover:text-[#E2C16B] transition-colors"
                  >
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#E2C16B] hover:underline"
              >
                <span>Live WhatsApp Support</span>
                <FiExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Popular Searches & Local SEO Keywords in Lucknow */}
        <div className="py-7 border-b border-white/10">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60 mb-3.5">
            Popular Searches &amp; Local Keywords in Lucknow:
          </h2>
          <ul className="flex flex-wrap gap-1.5 sm:gap-2 list-none m-0 p-0">
            {SEO_KEYWORDS.map((keyword) => (
              <li key={keyword}>
                <Link
                  href="/#featured"
                  className="inline-block px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] text-white/65 hover:border-[#C9A24D]/50 hover:text-[#E2C16B] transition-colors"
                >
                  {keyword}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Age Warning Banner */}
        <div className="my-6 rounded-2xl border border-[#C9A24D]/35 bg-[#C9A24D]/[0.07] p-4 sm:p-5 flex items-start gap-3">
          <FiAlertTriangle
            className="w-5 h-5 text-[#E2C16B] shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-[11.5px] sm:text-xs leading-relaxed text-white/85">
            <strong className="text-[#E2C16B] font-bold">
              AGE WARNING (21+ ONLY):
            </strong>{" "}
            Nicotine is an addictive chemical. Electronic cigarettes, pod
            systems, and vape e-liquids are strictly for adult smokers and
            existing vapers aged 21 and older. Not intended for use by
            non-smokers, pregnant or nursing women, or individuals with heart
            conditions. Keep out of reach of children and pets.
          </p>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>&copy; 2026 Vape Shop Lucknow. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/vaping-awareness-lucknow"
              className="hover:text-[#E2C16B] transition-colors"
            >
              Vaping Awareness &amp; Laws
            </Link>
            <span className="text-white/25" aria-hidden="true">
              |
            </span>
            <Link
              href="/#faqs"
              className="hover:text-[#E2C16B] transition-colors"
            >
              FAQs
            </Link>
            <span className="text-white/25" aria-hidden="true">
              |
            </span>
            <span>Lucknow, Uttar Pradesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

