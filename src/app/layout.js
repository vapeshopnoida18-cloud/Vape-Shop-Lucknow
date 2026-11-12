import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StoreProvider } from "@/context/StoreContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vape Shop Lucknow | 100% Authentic Vapes, Pods & Express Delivery",
  description:
    "Vape Shop Lucknow — Order 100% genuine scratch-QR verified disposable vapes, pod systems, and premium e-liquids with 30–45 mins express delivery across all Lucknow sectors.",
  keywords: [
    "Vape Shop Lucknow",
    "Vape Store in Lucknow",
    "Buy Vape Online Lucknow",
    "Disposable Vape Lucknow",
    "E-Liquids Lucknow",
    "Vape Delivery Lucknow",
  ],
  openGraph: {
    title: "Vape Shop Lucknow | Authentic Vapes & 30–45 Min Delivery",
    description:
      "Shop 100% genuine scratch-QR verified vapes, pods, and e-liquids at Vape Shop Lucknow with instant UPI payment and express doorstep delivery.",
    type: "website",
    locale: "en_IN",
    siteName: "Vape Shop Lucknow",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Vape Shop Lucknow",
    description:
      "Vape Shop Lucknow — 100% authentic scratch-QR verified disposable vapes, pod systems, replacement coils, and e-liquids with express 30-45 minute delivery across Lucknow.",
    areaServed: {
      "@type": "City",
      name: "Lucknow",
      containedInPlace: {
        "@type": "State",
        name: "Uttar Pradesh",
      },
    },
    openingHours: "Mo-Su 10:00-23:30",
    priceRange: "₹₹",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1e2223]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <StoreProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
