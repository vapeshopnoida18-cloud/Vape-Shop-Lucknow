import HeroSlider from "@/components/HeroSlider";
import HeroSeoHighlights from "@/components/HeroSeoHighlights";
import ProductCatalog from "@/components/ProductCatalog";
import LucknowAwarenessSection from "@/components/LucknowAwarenessSection";
import CustomOrderBanner from "@/components/CustomOrderBanner";
import LucknowLocationInfo from "@/components/LucknowLocationInfo";
import LucknowPublicAwareness from "@/components/LucknowPublicAwareness";
import CommunityFeedbackSection from "@/components/CommunityFeedbackSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <div className="bg-white text-[#1e2223] flex flex-col gap-4 sm:gap-5 lg:gap-6 pb-6 sm:pb-8 lg:pb-10">
      {/* Responsive Hero Banner Auto-Slider */}
      <HeroSlider />

      {/* Dedicated SEO Heading & Service Guarantees Component */}
      <HeroSeoHighlights />

      {/* 25-Product SEO Catalog with Category Filters & Detail Page Links */}
      <ProductCatalog />

      {/* Custom Order / Hard-to-Find Coils & Pods CTA (Just below Products) */}
      <CustomOrderBanner />

      {/* Lucknow Vaping Awareness & Health Information */}
      <LucknowAwarenessSection />

      {/* Lucknow Area-Wise Vaping & Regulation Information Tabs */}
      <LucknowLocationInfo />

      {/* 6-Card Commitment to Public Awareness Section */}
      <LucknowPublicAwareness />

      {/* Community Feedback & Reader Resource Section */}
      <CommunityFeedbackSection />

      {/* SEO FAQ Accordion with FAQPage Schema */}
      <FaqSection />
    </div>
  );
}
