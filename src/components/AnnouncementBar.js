import Link from "next/link";

const ANNOUNCEMENTS = [
  {
    text: "Vape Shop Lucknow — #1 Store for Authentic Vapes & E-Liquids",
    highlight: "Vape Shop Lucknow",
  },
  {
    text: "Express 30–45 Mins Free Delivery Across All Lucknow Sectors",
    highlight: "30–45 Mins Free Delivery",
  },
  {
    text: "100% Genuine Scratch QR Verified Disposable Vapes & Pod Kits",
    highlight: "100% Genuine Scratch QR",
  },
  {
    text: "Instant UPI & Secure Online Payment Available",
    highlight: "Instant UPI",
  },
  {
    text: "21+ Adults Only • Need Help? Chat on WhatsApp",
    href: "https://wa.me/917726005950?text=Hi%20Vape%20Shop%20Lucknow%2C%20I%20need%20help%20with%20an%20order.",
    isExternal: true,
  },
];

function renderHighlightedText(text, highlight) {
  if (!highlight || !text.includes(highlight)) return text;
  const parts = text.split(highlight);
  return (
    <>
      {parts[0]}
      <strong className="font-semibold text-[#E2C16B]">{highlight}</strong>
      {parts[1]}
    </>
  );
}

function AnnouncementTrack({ isDuplicate = false }) {
  return (
    <ul
      className="flex items-center shrink-0 gap-6 sm:gap-10 pr-6 sm:pr-10 list-none m-0 p-0"
      aria-hidden={isDuplicate ? "true" : undefined}
    >
      {ANNOUNCEMENTS.map((item, idx) => (
        <li
          key={`${isDuplicate ? "dup" : "main"}-${idx}`}
          className="flex items-center gap-2.5 whitespace-nowrap text-[11.5px] sm:text-xs tracking-wide text-white/90"
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-[#C9A24D] shrink-0"
            aria-hidden="true"
          />
          {item.href ? (
            <Link
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              tabIndex={isDuplicate ? -1 : undefined}
              className="hover:text-[#E2C16B] transition-colors underline-offset-2 hover:underline"
            >
              {item.text}
            </Link>
          ) : (
            <span>{renderHighlightedText(item.text, item.highlight)}</span>
          )}
          <span className="text-[#C9A24D]/45 ml-3 sm:ml-5" aria-hidden="true">
            |
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function AnnouncementBar() {
  return (
    <aside
      aria-label="Vape Shop Lucknow Store Announcements"
      className="announcement-wrapper relative w-full overflow-hidden bg-[#1e2223] text-white py-2 border-b border-[#C9A24D]/25 select-none"
    >
      {/* Left & Right subtle edge fades for smooth slider look */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 z-10 bg-gradient-to-r from-[#1e2223] to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 z-10 bg-gradient-to-l from-[#1e2223] to-transparent"
        aria-hidden="true"
      />

      {/* Continuous Seamless Marquee Track */}
      <div className="animate-announcement-marquee items-center">
        <AnnouncementTrack />
        <AnnouncementTrack isDuplicate />
      </div>
    </aside>
  );
}

