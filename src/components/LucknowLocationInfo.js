"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiMapPin,
  FiCheckCircle,
  FiShield,
  FiInfo,
  FiArrowUpRight,
} from "react-icons/fi";

const LOCATION_TABS = [
  {
    id: "all-areas",
    label: "Lucknow – All Areas",
    heading: "E-Cigarette Awareness in Lucknow",
    subheading: "Information for Lucknow Residents",
    areas: [
      "Gomti Nagar",
      "Hazratganj",
      "Indira Nagar",
      "Aliganj",
      "Aminabad",
      "Rajajipuram",
      "Mahanagar",
      "Jankipuram",
      "Vikas Nagar",
    ],
  },
  {
    id: "gomti-nagar",
    label: "Gomti Nagar",
    heading: "Nicotine Awareness – Gomti Nagar",
    subheading: "Health & Public Awareness",
    areas: [
      "Vibhuti Khand",
      "Vikalp Khand",
      "Viraj Khand",
      "Patrakar Puram",
      "Shaheed Path",
    ],
  },
  {
    id: "hazratganj-aliganj",
    label: "Hazratganj & Aliganj",
    heading: "E-Cigarette Regulations – Lucknow",
    subheading: "Know the Rules & Regulations",
    areas: ["Hazratganj", "Lalbagh", "Aliganj", "Kapoorthala", "Mahanagar"],
  },
  {
    id: "indira-nagar-jankipuram",
    label: "Indira Nagar & Jankipuram",
    heading: "Vaping Health Information – Lucknow",
    subheading: "Nicotine & Health Awareness",
    areas: [
      "Bhootnath Market",
      "Munshipulia",
      "Jankipuram",
      "Vikas Nagar",
      "Khurram Nagar",
    ],
  },
];

const BOTTOM_HIGHLIGHTS = [
  "Nicotine Awareness",
  "Health Information",
  "Indian E-Cigarette Laws",
];

export const locationInfoSeo = {
  title: "Vaping & E-Cigarette Information in Lucknow | Vape Shop Lucknow",
  description:
    "Get reliable information about e-cigarettes, nicotine awareness, health risks and electronic cigarette regulations across Gomti Nagar, Hazratganj, Indira Nagar & Lucknow.",
};

export default function LucknowLocationInfo() {
  const [activeId, setActiveId] = useState(LOCATION_TABS[0].id);
  const activeTab =
    LOCATION_TABS.find((t) => t.id === activeId) || LOCATION_TABS[0];

  return (
    <section
      id="lucknow-info"
      aria-labelledby="lucknow-info-heading"
      itemScope
      itemType="https://schema.org/WebPageElement"
      className="bg-white section-padding"
    >
      <meta itemProp="name" content={locationInfoSeo.title} />
      <meta itemProp="description" content={locationInfoSeo.description} />
      <div className="max-w-5xl mx-auto">
        {/* Centered Header */}
        <header className="text-center max-w-2xl mx-auto mb-7 sm:mb-8">
          <p className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#1e2223]/[0.04] text-[#1e2223] border border-[#C9A24D]/45 mb-3.5">
            <FiInfo className="w-3.5 h-3.5 text-[#C9A24D]" aria-hidden="true" />
            <span>LUCKNOW VAPING INFORMATION</span>
          </p>

          <h2
            id="lucknow-info-heading"
            className="text-xl sm:text-3xl font-bold tracking-tight text-[#1e2223]"
          >
            Vaping &amp; E-Cigarette Information in{" "}
            <span className="text-[#C9A24D]">Lucknow</span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-[#1e2223]/70 leading-relaxed">
            Get reliable information about e-cigarettes, nicotine awareness,
            health risks and electronic cigarette regulations applicable in
            Lucknow and across India.
          </p>
        </header>

        {/* Responsive Location Tabs (2x2 Mobile, 4-Col Desktop) */}
        <div
          role="tablist"
          aria-label="Lucknow Areas Vaping Information"
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5"
        >
          {LOCATION_TABS.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveId(tab.id)}
                className={`px-3 py-2.5 sm:py-3 rounded-xl text-xs sm:text-[13px] font-semibold border transition-all duration-200 cursor-pointer text-center truncate ${
                  isActive
                    ? "bg-[#1e2223] text-[#E2C16B] border-[#C9A24D]/60 shadow-[0_6px_18px_rgba(30,34,35,0.14)]"
                    : "bg-white text-[#1e2223] border-[#1e2223]/12 hover:border-[#C9A24D]/60 hover:bg-[#1e2223]/[0.02]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel Card */}
        <div
          role="tabpanel"
          id={`panel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
          className="rounded-2xl border border-[#1e2223]/12 bg-[#1e2223]/[0.02] p-5 sm:p-7 shadow-[0_8px_28px_rgba(30,34,35,0.04)]"
        >
          {/* Top Row: Heading + Subheading + Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-[#1e2223]/10">
            <div className="flex items-start gap-2.5">
              <span
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1e2223] text-[#E2C16B] border border-[#C9A24D]/40 shrink-0 mt-0.5"
                aria-hidden="true"
              >
                <FiMapPin className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#1e2223]">
                  {activeTab.heading}
                </h3>
                <p className="text-xs text-[#1e2223]/65">
                  {activeTab.subheading}
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 rounded-full text-[11px] font-semibold bg-white text-[#1e2223] border border-[#C9A24D]/45">
              <FiShield
                className="w-3.5 h-3.5 text-[#C9A24D]"
                aria-hidden="true"
              />
              <span>21+ Public Awareness</span>
            </span>
          </div>

          {/* Area Tags */}
          <div className="py-4 sm:py-5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#1e2223]/60 mb-3">
              Lucknow Localities Covered:
            </p>
            <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
              {activeTab.areas.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#1e2223]/10 text-xs font-medium text-[#1e2223] shadow-2xs"
                >
                  <FiCheckCircle
                    className="w-3.5 h-3.5 text-[#C9A24D] shrink-0"
                    aria-hidden="true"
                  />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Highlights + CTA */}
          <div className="pt-4 border-t border-[#1e2223]/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 list-none m-0 p-0">
              {BOTTOM_HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1e2223]/75"
                >
                  <FiShield
                    className="w-3.5 h-3.5 text-[#C9A24D] shrink-0"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/vaping-awareness-lucknow"
              className="inline-flex items-center justify-center gap-1.5 h-10 px-5 rounded-full bg-[#1e2223] text-[#E2C16B] text-xs sm:text-sm font-semibold border border-[#C9A24D]/50 hover:bg-[#2a2f30] hover:border-[#E2C16B] transition-all shrink-0"
            >
              <span>Read Full Information</span>
              <FiArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

