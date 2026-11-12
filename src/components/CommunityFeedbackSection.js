import {
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export const communityFeedbackSeo = {
  title: "Community Feedback | E-Cigarette Awareness in Lucknow",
  description:
    "Feedback on our educational resources covering e-cigarettes, nicotine awareness, vaping health risks, and Indian e-cigarette regulations in Lucknow.",
};

const FEEDBACK_CARDS = [
  {
    id: "information-clarity",
    category: "Information Clarity",
    quote:
      "Clear and easy-to-understand information about e-cigarettes and their potential health risks.",
    topic: "E-Cigarette Awareness",
  },
  {
    id: "nicotine-awareness",
    category: "Nicotine Awareness",
    quote:
      "Helpful educational content explaining nicotine dependence and its associated risks.",
    topic: "Nicotine Risks",
  },
  {
    id: "legal-information",
    category: "Legal Information",
    quote:
      "Useful information about India's e-cigarette laws and the Prohibition of Electronic Cigarettes Act, 2019.",
    topic: "Indian Regulations",
  },
  {
    id: "educational-resources",
    category: "Educational Resources",
    quote:
      "Well-organised information that makes understanding vaping regulations easier.",
    topic: "Lucknow Guide",
  },
];

export default function CommunityFeedbackSection() {
  return (
    <section
      id="reviews"
      aria-labelledby="community-feedback-heading"
      itemScope
      itemType="https://schema.org/WebPageElement"
      className="bg-white section-padding"
    >
      <meta itemProp="name" content={communityFeedbackSeo.title} />
      <meta itemProp="description" content={communityFeedbackSeo.description} />

      <div className="max-w-7xl mx-auto">
        {/* Compact Header */}
        <header className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-7 sm:mb-9">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#1e2223] text-[#E2C16B] border border-[#C9A24D]/45 mb-3">
              <FiMessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
              <span>COMMUNITY FEEDBACK</span>
            </p>

            <h2
              id="community-feedback-heading"
              className="text-xl sm:text-3xl font-bold tracking-tight text-[#1e2223]"
            >
              What Lucknow Readers Say About{" "}
              <span className="text-[#C9A24D]">Our Information</span>
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-[#1e2223]/70 leading-relaxed">
              Feedback on our educational resources covering e-cigarettes,
              nicotine awareness, health information and Indian regulations.
            </p>
          </div>

          {/* Distinct Golden Star Rating Pill */}
          <div className="inline-flex items-center gap-3 self-start lg:self-auto px-4 py-2.5 rounded-2xl bg-[#1e2223] text-white border border-[#C9A24D]/45 shadow-[0_6px_18px_rgba(30,34,35,0.14)] shrink-0">
            <span className="text-xl sm:text-2xl font-bold text-[#E2C16B]">
              4.9
            </span>
            <div>
              <div className="flex items-center gap-0.5 text-[#E2C16B]" aria-label="Rated 4.9 out of 5 stars">
                <FaStar className="w-3.5 h-3.5" aria-hidden="true" />
                <FaStar className="w-3.5 h-3.5" aria-hidden="true" />
                <FaStar className="w-3.5 h-3.5" aria-hidden="true" />
                <FaStar className="w-3.5 h-3.5" aria-hidden="true" />
                <FaStar className="w-3.5 h-3.5" aria-hidden="true" />
              </div>
              <p className="text-[11px] text-white/75 mt-0.5">
                Lucknow Reader Feedback
              </p>
            </div>
          </div>
        </header>

        {/* 4 Feedback Cards: 2-2 on Mobile, 4 Columns on Desktop */}
        <ul
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 list-none m-0 p-0"
          aria-label="Reader Feedback Categories"
        >
          {FEEDBACK_CARDS.map((card) => (
            <li key={card.id} className="flex">
              <article className="group flex flex-col justify-between w-full rounded-xl sm:rounded-2xl border border-[#1e2223]/10 bg-white p-3.5 sm:p-5 shadow-[0_4px_18px_rgba(30,34,35,0.03)] hover:border-[#C9A24D]/70 hover:bg-[#1e2223]/[0.015] transition-all duration-200">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div
                      className="flex items-center gap-0.5 text-[#C9A24D]"
                      aria-label="5 out of 5 stars"
                    >
                      <FaStar className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                      <FaStar className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                      <FaStar className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                      <FaStar className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                      <FaStar className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                    </div>
                    <FaQuoteLeft
                      className="w-3.5 h-3.5 text-[#C9A24D]/45 shrink-0"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-[13px] sm:text-[15px] font-bold text-[#1e2223] mb-2 group-hover:text-[#9A7422] transition-colors">
                    {card.category}
                  </h3>

                  <blockquote className="m-0 text-[11.5px] sm:text-[13.5px] text-[#1e2223]/75 leading-relaxed">
                    &ldquo;{card.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-4 pt-2.5 border-t border-[#1e2223]/8 flex items-center gap-1.5 text-[10.5px] sm:text-xs font-medium text-[#1e2223]/65">
                  <FiCheckCircle
                    className="w-3.5 h-3.5 text-[#C9A24D] shrink-0"
                    aria-hidden="true"
                  />
                  <span>Reader Feedback</span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

