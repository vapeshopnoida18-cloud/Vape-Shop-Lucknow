import { FiExternalLink, FiBox } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "919999999999";

export const customOrderSeo = {
  title: "Custom Vape Devices, Pod Cartridges & Coils | Vape Shop Lucknow",
  description:
    "Request custom vape devices, replacement pod cartridges, and coils for major international brands at Vape Shop Lucknow.",
};

export default function CustomOrderBanner() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Vape Shop Lucknow, I am looking for a specific device, pod cartridge, or coil."
  )}`;

  return (
    <section
      aria-labelledby="custom-order-heading"
      itemScope
      itemType="https://schema.org/WebPageElement"
      className="bg-white section-padding"
    >
      <meta itemProp="name" content={customOrderSeo.title} />
      <meta itemProp="description" content={customOrderSeo.description} />
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-5 rounded-2xl sm:rounded-3xl border border-[#C9A24D]/35 bg-gradient-to-r from-white via-white to-[#C9A24D]/[0.06] p-5 sm:p-7 shadow-[0_10px_35px_rgba(30,34,35,0.06)] hover:border-[#C9A24D]/70 transition-all duration-300">
          <div className="flex items-start sm:items-center gap-4 max-w-2xl">
            <span
              className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-[#1e2223] text-[#E2C16B] border border-[#C9A24D]/45 shrink-0 shadow-sm"
              aria-hidden="true"
            >
              <FiBox className="w-5 h-5" />
            </span>

            <div className="space-y-1">
              <h2
                id="custom-order-heading"
                className="text-base sm:text-xl font-bold text-[#1e2223]"
              >
                Looking for a specific device, pod cartridge, or coil?
              </h2>
              <p className="text-xs sm:text-sm text-[#1e2223]/70 leading-relaxed">
                We arrange custom orders and hard-to-find replacement pods
                &amp; coils for all major international brands at{" "}
                <strong className="font-semibold text-[#1e2223]">
                  Vape Shop Lucknow
                </strong>
                .
              </p>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-full bg-[#1e2223] text-[#E2C16B] text-sm font-semibold border border-[#C9A24D]/55 shadow-[0_6px_20px_rgba(30,34,35,0.18)] hover:bg-[#2a2f30] hover:border-[#E2C16B] transition-all shrink-0"
          >
            <FaWhatsapp className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Ask on WhatsApp</span>
            <FiExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
