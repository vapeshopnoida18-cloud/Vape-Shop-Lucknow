import Link from "next/link";
import {
  FiInfo,
  FiAlertCircle,
  FiShield,
  FiFileText,
  FiArrowUpRight,
} from "react-icons/fi";

const AWARENESS_CARDS = [
  {
    id: "vaping-ecigarettes",
    tag: "Guide",
    icon: FiInfo,
    title: "Vaping & E-Cigarettes",
    description: "Understand what e-cigarettes are and how they work.",
    href: "/vaping-awareness-lucknow#vaping-ecigarettes",
  },
  {
    id: "nicotine-awareness",
    tag: "Risks",
    icon: FiAlertCircle,
    title: "Nicotine Awareness",
    description: "Learn about nicotine dependence and addiction risks.",
    href: "/vaping-awareness-lucknow#nicotine-awareness",
  },
  {
    id: "health-safety",
    tag: "Safety",
    icon: FiShield,
    title: "Health & Safety",
    description: "Understand the potential health effects of vaping.",
    href: "/vaping-awareness-lucknow#health-safety",
  },
  {
    id: "indian-vape-laws",
    tag: "Legal",
    icon: FiFileText,
    title: "Indian Vape Laws",
    description: "Read about India's e-cigarette prohibition laws.",
    href: "/vaping-awareness-lucknow#indian-vape-laws",
  },
];

export const awarenessSectionSeo = {
  title: "Vaping Awareness in Lucknow – Health & Legal Information",
  description:
    "Informational resources about vaping, nicotine risks, health awareness and e-cigarette regulations in India.",
};

export default function LucknowAwarenessSection() {
  return (
    <section
      id="awareness"
      aria-labelledby="awareness-heading"
      itemScope
      itemType="https://schema.org/WebPageElement"
      className="bg-white section-padding"
    >
      <meta itemProp="name" content={awarenessSectionSeo.title} />
      <meta itemProp="description" content={awarenessSectionSeo.description} />
      <div className="max-w-7xl mx-auto">
        {/* Compact Editorial Header */}
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 sm:mb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-6 h-[2px] bg-[#C9A24D]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C9A24D]">
                LUCKNOW VAPING AWARENESS
              </p>
            </div>

            <h2
              id="awareness-heading"
              className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#1e2223]"
            >
              Vaping Awareness &amp; Health Information in{" "}
              <span className="text-[#C9A24D]">Lucknow</span>
            </h2>

            <p className="mt-1.5 text-xs sm:text-sm text-[#1e2223]/70 leading-relaxed">
              Learn about vaping, nicotine dependence, potential health risks
              and the legal regulations surrounding e-cigarettes in India.
            </p>
          </div>

          <Link
            href="/vaping-awareness-lucknow"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1e2223] hover:text-[#C9A24D] transition-colors shrink-0 self-start md:self-auto"
          >
            <span>Explore Full Guide</span>
            <FiArrowUpRight className="w-4 h-4 text-[#C9A24D]" aria-hidden="true" />
          </Link>
        </header>

        {/* Compact 2-2 Mobile / 4-Col Desktop Editorial Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {AWARENESS_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                href={card.href}
                className="group flex flex-col justify-between rounded-xl border border-[#1e2223]/10 bg-white p-3.5 sm:p-5 hover:border-[#C9A24D]/70 hover:bg-[#1e2223]/[0.015] transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C9A24D]">
                      <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{card.tag}</span>
                    </span>
                    <FiArrowUpRight
                      className="w-3.5 h-3.5 text-[#1e2223]/35 group-hover:text-[#C9A24D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-[13px] sm:text-[15px] font-bold text-[#1e2223] leading-snug group-hover:text-[#9A7422] transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-1 text-[11.5px] sm:text-xs text-[#1e2223]/65 leading-relaxed line-clamp-2">
                    {card.description}
                  </p>
                </div>

                <span className="mt-3 pt-2.5 border-t border-[#1e2223]/8 inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#1e2223] group-hover:text-[#C9A24D] transition-colors">
                  <span>Read More</span>
                  <FiArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
