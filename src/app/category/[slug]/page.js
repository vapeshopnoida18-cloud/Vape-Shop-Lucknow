import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiShield, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { CATEGORY_PAGES } from "@/data/locations";
import { PRODUCTS, getDiscountPercent } from "@/data/products";

const WHATSAPP_NUMBER = "917726005950";

export function generateStaticParams() {
  return CATEGORY_PAGES.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = CATEGORY_PAGES.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found | Vape Shop Lucknow",
    };
  }

  return {
    title: category.title,
    description: category.description,
    keywords: [
      category.name,
      `${category.name} Lucknow`,
      `Buy ${category.name} Lucknow`,
      "Vape Shop Lucknow",
    ],
    openGraph: {
      title: category.title,
      description: category.description,
      type: "website",
      locale: "en_IN",
      siteName: "Vape Shop Lucknow",
    },
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const cat = CATEGORY_PAGES.find((c) => c.slug === slug);

  if (!cat) {
    notFound();
  }

  const filteredProducts = PRODUCTS.filter((p) => p.category === cat.category);
  const otherCategories = CATEGORY_PAGES.filter((c) => c.slug !== cat.slug);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Vape Shop Lucknow, I want to order from ${cat.name}.`
  )}`;

  return (
    <div className="bg-white text-[#1e2223] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#1e2223]/60 mb-6"
        >
          <Link href="/" className="hover:text-[#C9A24D] transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/#categories" className="hover:text-[#C9A24D] transition-colors">
            Categories
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#1e2223] font-medium">{cat.name}</span>
        </nav>

        {/* Header */}
        <header className="rounded-3xl border border-[#1e2223]/12 bg-white p-6 sm:p-10 shadow-[0_12px_40px_rgba(30,34,35,0.06)] mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1e2223] text-[#E2C16B] border border-[#C9A24D]/45 mb-4">
            <FiShield className="w-3.5 h-3.5" aria-hidden="true" />
            <span>100% Genuine In Lucknow</span>
          </span>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1e2223]">
            {cat.name} in <span className="text-[#C9A24D]">Lucknow</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-[#1e2223]/75 max-w-3xl leading-relaxed">
            {cat.description}
          </p>

          <div className="mt-6 pt-5 border-t border-[#1e2223]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#1e2223]/80">
              <span className="inline-flex items-center gap-1.5">
                <FiClock className="w-4 h-4 text-[#C9A24D]" />
                30–45 Minute Delivery Across Lucknow
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FiShield className="w-4 h-4 text-[#C9A24D]" />
                Scratch QR Authenticity Verified
              </span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-[#1e2223] text-[#E2C16B] text-xs sm:text-sm font-bold border border-[#C9A24D]/50 hover:bg-[#2a2f30] transition-all shadow-md shrink-0"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Order via WhatsApp</span>
            </a>
          </div>
        </header>

        {/* Product Grid */}
        <section aria-label={`${cat.name} products`} className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {filteredProducts.map((product) => {
              const discount = getDiscountPercent(
                product.price,
                product.originalPrice
              );
              return (
                <article
                  key={product.id}
                  className="group flex flex-col justify-between rounded-xl sm:rounded-2xl border border-[#1e2223]/10 bg-white p-2.5 sm:p-3.5 shadow-xs hover:border-[#C9A24D]/60 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="relative aspect-square w-full overflow-hidden rounded-lg sm:rounded-xl bg-[#1e2223]/[0.03]">
                      <Link
                        href={`/product/${product.slug}`}
                        className="relative block w-full h-full"
                      >
                        <Image
                          src={product.image}
                          alt={`${product.name} — Buy in Lucknow`}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                      {discount > 0 && (
                        <span className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#1e2223]/90 text-[#E2C16B] border border-[#C9A24D]/40">
                          {discount}% OFF
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-[10px] sm:text-[11px] font-semibold uppercase text-[#C9A24D] truncate">
                      {product.brand}
                    </p>
                    <Link href={`/product/${product.slug}`} className="block mt-0.5">
                      <h3 className="text-xs sm:text-sm font-bold text-[#1e2223] line-clamp-2 min-h-[34px] group-hover:text-[#9A7422]">
                        {product.name}
                      </h3>
                    </Link>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-[#1e2223]/8 flex items-center justify-between">
                    <span className="text-sm sm:text-base font-bold text-[#1e2223]">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    <Link
                      href={`/product/${product.slug}`}
                      className="px-3 py-1 rounded-full bg-[#1e2223] text-[#E2C16B] text-[11px] font-semibold hover:bg-[#2a2f30]"
                    >
                      View Details
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Other Categories */}
        <section aria-labelledby="other-cat-heading" className="pt-6 border-t border-[#1e2223]/10">
          <h2
            id="other-cat-heading"
            className="text-lg sm:text-xl font-bold text-[#1e2223] mb-4"
          >
            Explore Other Categories:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {otherCategories.map((other) => (
              <Link
                key={other.slug}
                href={`/category/${other.slug}`}
                className="flex items-center justify-between p-3.5 rounded-xl border border-[#1e2223]/10 bg-[#1e2223]/[0.02] hover:border-[#C9A24D] hover:bg-white transition-all group"
              >
                <span className="text-xs sm:text-sm font-bold text-[#1e2223] group-hover:text-[#9A7422]">
                  {other.name}
                </span>
                <FiArrowRight className="w-4 h-4 text-[#1e2223]/40 group-hover:text-[#C9A24D]" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

