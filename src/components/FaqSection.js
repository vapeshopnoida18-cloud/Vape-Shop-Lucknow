"use client";

import { useState } from "react";
import { FiHelpCircle, FiChevronDown } from "react-icons/fi";

export const faqSeo = {
  title: "Vaping FAQs in Lucknow – Health & Legal Information",
  description:
    "Find answers about e-cigarettes, nicotine addiction, vaping health risks and India's e-cigarette prohibition law in Lucknow.",
};

const FAQ_ITEMS = [
  {
    id: "what-are-ecigarettes",
    question: "What are e-cigarettes and how do they work?",
    answer:
      "E-cigarettes are electronic devices that heat a liquid to create an aerosol. These liquids may contain nicotine and other substances.",
  },
  {
    id: "is-vaping-legal-lucknow",
    question: "Is vaping legal in Lucknow, Uttar Pradesh?",
    answer:
      "India's Prohibition of Electronic Cigarettes Act, 2019 applies across the country, including Lucknow and Uttar Pradesh.",
  },
  {
    id: "health-risks-vaping",
    question: "What are the health risks associated with vaping?",
    answer:
      "Vaping can expose users to nicotine and other potentially harmful substances. Nicotine is addictive and can affect health.",
  },
  {
    id: "ecigarettes-vs-traditional",
    question: "Are e-cigarettes and traditional cigarettes the same?",
    answer:
      "No. They are different products, but neither should be considered risk-free.",
  },
  {
    id: "nicotine-addiction",
    question: "Can nicotine cause addiction?",
    answer:
      "Yes. Nicotine is an addictive substance and can lead to dependence.",
  },
  {
    id: "peca-2019-law",
    question: "What does India's e-cigarette prohibition law cover?",
    answer:
      "The PECA 2019 prohibits the production, manufacture, import, export, transport, sale, distribution, storage and advertisement of electronic cigarettes, subject to the Act's provisions.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
      className="bg-white section-padding"
    >
      <meta itemProp="name" content={faqSeo.title} />
      <meta itemProp="description" content={faqSeo.description} />

      <div className="max-w-4xl mx-auto">
        {/* Centered Header */}
        <header className="text-center max-w-2xl mx-auto mb-7 sm:mb-10">
          <p className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#1e2223]/[0.04] text-[#1e2223] border border-[#C9A24D]/45 mb-3.5">
            <FiHelpCircle
              className="w-3.5 h-3.5 text-[#C9A24D]"
              aria-hidden="true"
            />
            <span>GOT QUESTIONS? WE HAVE ANSWERS</span>
          </p>

          <h2
            id="faq-heading"
            className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1e2223]"
          >
            Frequently Asked Questions About{" "}
            <span className="text-[#C9A24D]">Vaping in Lucknow</span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-[#1e2223]/70 leading-relaxed">
            Find answers to common questions about e-cigarettes, nicotine
            awareness, health risks and electronic cigarette regulations in
            India.
          </p>
        </header>

        {/* Semantic FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${item.id}`;
            const btnId = `faq-btn-${item.id}`;

            return (
              <article
                key={item.id}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? "border-[#C9A24D]/70 bg-white shadow-[0_10px_28px_rgba(30,34,35,0.06)]"
                    : "border-[#1e2223]/10 bg-white hover:border-[#C9A24D]/45"
                }`}
              >
                <h3 className="m-0">
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-4 px-4 sm:px-6 py-4 text-left cursor-pointer"
                  >
                    <span className="flex items-center gap-3 min-w-0">
                      <span
                        className={`hidden sm:inline-flex items-center justify-center w-7 h-7 rounded-lg text-[11px] font-bold shrink-0 transition-colors ${
                          isOpen
                            ? "bg-[#1e2223] text-[#E2C16B]"
                            : "bg-[#1e2223]/[0.05] text-[#1e2223]/70"
                        }`}
                        aria-hidden="true"
                      >
                        0{idx + 1}
                      </span>
                      <span
                        itemProp="name"
                        className="text-sm sm:text-[15.5px] font-bold text-[#1e2223]"
                      >
                        {item.question}
                      </span>
                    </span>

                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-full border shrink-0 transition-all duration-200 ${
                        isOpen
                          ? "bg-[#1e2223] border-[#C9A24D] text-[#E2C16B] rotate-180"
                          : "bg-[#1e2223]/[0.03] border-[#1e2223]/10 text-[#1e2223]"
                      }`}
                      aria-hidden="true"
                    >
                      <FiChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  hidden={!isOpen}
                  className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0"
                >
                  <div className="pt-3 border-t border-[#1e2223]/8 sm:pl-10">
                    <p
                      itemProp="text"
                      className="text-xs sm:text-sm text-[#1e2223]/75 leading-relaxed"
                    >
                      {item.answer}
                    </p>
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

