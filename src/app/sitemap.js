import { PRODUCTS } from "../data/products.js";
import { LUCKNOW_LOCATIONS, CATEGORY_PAGES } from "../data/locations.js";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://vapeshoplucknow.com";

export default function sitemap() {
  const now = new Date();

  // 1. Static Core Pages
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/vaping-awareness-lucknow`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // 2. Category Pages
  const categoryRoutes = CATEGORY_PAGES.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.9,
  }));

  // 3. Lucknow Location / Area Pages for Local SEO Ranking
  const locationRoutes = LUCKNOW_LOCATIONS.map((loc) => ({
    url: `${baseUrl}/location/${loc.slug}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.9,
  }));

  // 4. Dynamic 25 Product Detail Routes
  const productRoutes = PRODUCTS.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.9,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...locationRoutes,
    ...productRoutes,
  ];
}
