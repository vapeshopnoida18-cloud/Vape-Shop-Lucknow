import {
  FiTruck,
  FiShield,
  FiZap,
  FiCheckCircle,
  FiAward,
} from "react-icons/fi";

const TRUST_HIGHLIGHTS = [
  {
    icon: FiTruck,
    title: "30–45 Min Delivery",
    subtitle: "Express across all Lucknow sectors",
  },
  {
    icon: FiShield,
    title: "100% Genuine QR",
    subtitle: "Scratch & verify product authenticity",
  },
  {
    icon: FiZap,
    title: "Instant UPI & Online",
    subtitle: "Fast, secure & hassle-free checkout",
  },
  {
    icon: FiCheckCircle,
    title: "21+ Adults Only",
    subtitle: "Trusted Vape Shop Lucknow store",
  },
];

export const heroSeoMetadata = {
  title: "Vape Shop Lucknow — 100% Authentic Vapes & Express Delivery",
  description:
    "Order genuine scratch-QR verified disposable vapes, pod systems, and premium e-liquids from Vape Shop Lucknow with 30–45 minute delivery.",
};

export default function HeroSeoHighlights() {
  return (
    <section
      aria-labelledby="vape-shop-lucknow-heading"
      itemScope
      itemType="https://schema.org/WebPageElement"
      className="bg-white section-padding"
    >
      <meta itemProp="name" content={heroSeoMetadata.title} />
      <meta itemProp="description" content={heroSeoMetadata.description} />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* SEO Primary Heading & Local Description */}
        <header className="lg:col-span-6 space-y-3">
          <p className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-[#1e2223] text-[#E2C16B] border border-[#C9A24D]/40">
            <FiAward className="w-3.5 h-3.5 text-[#E2C16B]" aria-hidden="true" />
            <span>Vape Shop Lucknow</span>
          </p>

          <h1
            id="vape-shop-lucknow-heading"
            className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight leading-tight text-[#1e2223]"
          >
            Vape Shop Lucknow —{" "}
            <span className="text-[#C9A24D]">100% Authentic Vapes</span> &amp;
            Express Delivery
          </h1>

          <p className="text-sm sm:text-[15px] leading-relaxed text-[#1e2223]/75 max-w-2xl">
            Order genuine scratch-QR verified disposable vapes, pod systems, and
            premium e-liquids from{" "}
            <strong className="font-semibold text-[#1e2223]">
              Vape Shop Lucknow
            </strong>
            . Fast 30–45 minute doorstep delivery across Gomti Nagar,
            Hazratganj, Alambagh, Indira Nagar, and all Lucknow sectors.
          </p>
        </header>

        {/* Premium Trust & USP Cards */}
        <ul
          className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 list-none m-0 p-0"
          aria-label="Vape Shop Lucknow Service Guarantees"
        >
          {TRUST_HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#1e2223]/10 shadow-[0_4px_18px_rgba(30,34,35,0.04)] hover:border-[#C9A24D]/60 hover:shadow-[0_8px_24px_rgba(201,162,77,0.12)] transition-all duration-200"
              >
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1e2223] text-[#E2C16B] border border-[#C9A24D]/35 shrink-0"
                  aria-hidden="true"
                >
                  <Icon className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <h2 className="text-sm font-bold text-[#1e2223] truncate">
                    {item.title}
                  </h2>
                  <p className="text-xs text-[#1e2223]/65 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

