import {
  FiInfo,
  FiAlertTriangle,
  FiShield,
  FiFileText,
  FiBookOpen,
  FiCheckCircle,
} from "react-icons/fi";

export const publicAwarenessSeo = {
  title: "E-Cigarette Awareness in Lucknow | Health & Legal Information",
  description:
    "Learn about vaping, e-cigarettes, nicotine addiction, potential health risks and electronic cigarette laws applicable in Lucknow, Uttar Pradesh.",
};

const AWARENESS_FEATURES = [
  {
    id: "e-cigarette-awareness",
    icon: FiInfo,
    title: "E-Cigarette Awareness",
    description: "Understand what electronic cigarettes are and how they work.",
  },
  {
    id: "nicotine-awareness",
    icon: FiAlertTriangle,
    title: "Nicotine Awareness",
    description:
      "Learn about nicotine dependence, addiction and associated risks.",
  },
  {
    id: "health-safety-information",
    icon: FiShield,
    title: "Health & Safety Information",
    description:
      "Understand the potential health effects associated with vaping.",
  },
  {
    id: "indian-ecigarette-laws",
    icon: FiFileText,
    title: "Indian E-Cigarette Laws",
    description:
      "Read about the Prohibition of Electronic Cigarettes Act, 2019.",
  },
  {
    id: "public-health-education",
    icon: FiBookOpen,
    title: "Public Health Education",
    description:
      "Access educational information about vaping and tobacco-related risks.",
  },
  {
    id: "reliable-information",
    icon: FiCheckCircle,
    title: "Reliable Information",
    description:
      "Find clear, factual and educational resources about e-cigarettes.",
  },
];

export default function LucknowPublicAwareness() {
  return (
    <section
      id="public-awareness"
      aria-labelledby="public-awareness-heading"
      itemScope
      itemType="https://schema.org/WebPageElement"
      className="bg-white section-padding"
    >
      <meta itemProp="name" content={publicAwarenessSeo.title} />
      <meta itemProp="description" content={publicAwarenessSeo.description} />

      <div className="max-w-7xl mx-auto">
        {/* Centered Compact Header */}
        <header className="text-center max-w-2xl mx-auto mb-7 sm:mb-10">
          <p className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#1e2223]/[0.04] text-[#1e2223] border border-[#C9A24D]/45 mb-3.5">
            OUR COMMITMENT TO PUBLIC AWARENESS
          </p>

          <h2
            id="public-awareness-heading"
            className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1e2223]"
          >
            Understanding E-Cigarettes &amp;{" "}
            <span className="text-[#C9A24D]">Vaping in Lucknow</span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-[#1e2223]/70 leading-relaxed">
            Learn about e-cigarettes, nicotine dependence, potential health
            risks and Indian regulations through clear and reliable information.
          </p>
        </header>

        {/* 6 Feature Cards: 2-2 on Mobile, 3x2 on Desktop */}
        <ul
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 list-none m-0 p-0"
          aria-label="E-Cigarette and Vaping Awareness Topics in Lucknow"
        >
          {AWARENESS_FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id} className="flex">
                <article className="group flex flex-col w-full rounded-xl sm:rounded-2xl border border-[#1e2223]/10 bg-white p-3.5 sm:p-6 shadow-[0_4px_18px_rgba(30,34,35,0.03)] hover:border-[#C9A24D]/70 hover:bg-[#1e2223]/[0.015] hover:shadow-[0_12px_30px_rgba(30,34,35,0.07)] transition-all duration-200">
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3.5">
                    <span
                      className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#1e2223] text-[#E2C16B] border border-[#C9A24D]/40 shrink-0 group-hover:scale-105 transition-transform"
                      aria-hidden="true"
                    >
                      <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                    </span>
                    <h3 className="text-[13px] sm:text-base font-bold text-[#1e2223] leading-snug group-hover:text-[#9A7422] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[11.5px] sm:text-sm text-[#1e2223]/70 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

