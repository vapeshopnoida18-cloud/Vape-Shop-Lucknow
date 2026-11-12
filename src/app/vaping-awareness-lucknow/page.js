import Link from "next/link";
import { FiArrowLeft, FiInfo, FiAlertCircle, FiShield, FiFileText } from "react-icons/fi";

export const metadata = {
  title: "Vaping Awareness in Lucknow – Health & Legal Information",
  description:
    "Informational resources about vaping, nicotine risks, health awareness and e-cigarette regulations in India.",
};

const TOPICS = [
  {
    id: "vaping-ecigarettes",
    icon: FiInfo,
    title: "Vaping & E-Cigarettes",
    summary: "Understand what e-cigarettes are and how they work.",
    details:
      "Electronic cigarettes (e-cigarettes) or vapes are battery-powered devices that heat a liquid solution—commonly containing propylene glycol, vegetable glycerin, flavorings, and often nicotine—into an inhalable aerosol.",
  },
  {
    id: "nicotine-awareness",
    icon: FiAlertCircle,
    title: "Nicotine Awareness",
    summary: "Learn about nicotine dependence and addiction risks.",
    details:
      "Most disposable vapes and salt-nicotine e-liquids contain nicotine, a highly addictive stimulant. Repeated use can lead to tolerance, dependence, and withdrawal symptoms. Products are strictly intended for adults aged 21+ only.",
  },
  {
    id: "health-safety",
    icon: FiShield,
    title: "Health & Safety",
    summary: "Understand the potential health effects of vaping.",
    details:
      "Inhaling heated aerosols can irritate airways and affect cardiovascular and respiratory health. Consumers should be aware of potential health risks, avoid counterfeit or tampered cartridges, and never use unverified liquids.",
  },
  {
    id: "indian-vape-laws",
    icon: FiFileText,
    title: "Indian Vape Laws",
    summary: "Read about India's e-cigarette prohibition laws.",
    details:
      "Under India's Prohibition of Electronic Cigarettes (Production, Manufacture, Import, Export, Transport, Sale, Distribution, Storage and Advertisement) Act, 2019 (PECA), e-cigarettes are subject to strict national regulations. Always stay informed about applicable local and national laws.",
  },
];

export default function VapingAwarenessPage() {
  return (
    <div className="bg-white text-[#1e2223] py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#awareness"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1e2223]/75 hover:text-[#C9A24D] transition-colors mb-6"
        >
          <FiArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>

        <header className="mb-10 pb-6 border-b border-[#1e2223]/10">
          <p className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#1e2223] text-[#E2C16B] border border-[#C9A24D]/45 mb-4">
            LUCKNOW VAPING AWARENESS
          </p>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1e2223]">
            Vaping Awareness &amp; Health Information in{" "}
            <span className="text-[#C9A24D]">Lucknow</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1e2223]/70">
            Informational resources about vaping, nicotine risks, health
            awareness and e-cigarette regulations in India.
          </p>
        </header>

        <div className="space-y-6">
          {TOPICS.map((topic) => {
            const Icon = topic.icon;
            return (
              <article
                key={topic.id}
                id={topic.id}
                className="rounded-2xl border border-[#1e2223]/10 bg-white p-6 sm:p-7 shadow-xs scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-xl bg-[#1e2223] text-[#E2C16B] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-[#1e2223]">
                      {topic.title}
                    </h2>
                    <p className="text-xs font-medium text-[#C9A24D]">
                      {topic.summary}
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#1e2223]/75">
                  {topic.details}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

