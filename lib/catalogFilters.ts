import type { Product, ProductCategory } from "@/lib/products";

export type CatalogFilterKey =
  | "occasion"
  | "look"
  | "color"
  | "price"
  | "duration"
  | "size"
  | "fabric"
  | "work"
  | "availability";

export type CatalogFilters = {
  occasion: string[];
  look: string[];
  color: string[];
  price: string[];
  duration: string[];
  size: string[];
  fabric: string[];
  work: string[];
  availability: string[];
};

export type CatalogFilterOption = {
  label: string;
  value: string;
};

export type CatalogFilterDefinition = {
  key: CatalogFilterKey;
  label: string;
  options: CatalogFilterOption[];
  categories?: ProductCategory[];
};

export const emptyCatalogFilters: CatalogFilters = {
  occasion: [],
  look: [],
  color: [],
  price: [],
  duration: [],
  size: [],
  fabric: [],
  work: [],
  availability: [],
};

export const catalogFilterDefinitions: CatalogFilterDefinition[] = [
  {
    key: "occasion",
    label: "Occasion",
    options: [
      { label: "Wedding", value: "wedding" },
      { label: "Reception", value: "reception" },
      { label: "Engagement", value: "engagement" },
      { label: "Mehendi", value: "mehendi" },
      { label: "Sangeet", value: "sangeet" },
      { label: "Haldi", value: "haldi" },
      { label: "Cocktail", value: "cocktail" },
      { label: "Pre-wedding", value: "pre-wedding" },
    ],
  },
  {
    key: "look",
    label: "Look / Style",
    options: [
      { label: "Classic Red", value: "classic-red" },
      { label: "Ivory Bride", value: "ivory-bride" },
      { label: "Regal Bride", value: "regal-bride" },
      { label: "Contemporary Bride", value: "contemporary-bride" },
      { label: "Soft Romance", value: "soft-romance" },
      { label: "Golden Glow", value: "golden-glow" },
      { label: "Traditional Bridal", value: "traditional-bridal" },
      { label: "Minimal Bridal", value: "minimal-bridal" },
    ],
  },
  {
    key: "color",
    label: "Color",
    options: [
      { label: "Red", value: "red" },
      { label: "Maroon", value: "maroon" },
      { label: "Ivory", value: "ivory" },
      { label: "Gold", value: "gold" },
      { label: "Blush Pink", value: "blush-pink" },
      { label: "Peach", value: "peach" },
      { label: "Green", value: "green" },
      { label: "Burgundy", value: "burgundy" },
      { label: "Champagne", value: "champagne" },
      { label: "Pastel", value: "pastel" },
    ],
  },
  {
    key: "price",
    label: "Price",
    options: [
      { label: "Under ₹1,000", value: "under-1000" },
      { label: "₹1,000–₹2,500", value: "1000-2500" },
      { label: "₹2,500–₹5,000", value: "2500-5000" },
      { label: "₹5,000–₹10,000", value: "5000-10000" },
      { label: "Above ₹10,000", value: "above-10000" },
    ],
  },
  {
    key: "duration",
    label: "Rental Duration",
    options: [
      { label: "4 days", value: "4" },
      { label: "7 days", value: "7" },
      { label: "10 days", value: "10" },
      { label: "14 days", value: "14" },
    ],
  },
  {
    key: "size",
    label: "Size",
    options: [
      { label: "XS", value: "xs" },
      { label: "S", value: "s" },
      { label: "M", value: "m" },
      { label: "L", value: "l" },
      { label: "XL", value: "xl" },
      { label: "XXL", value: "xxl" },
    ],
    categories: ["Bridal Dresses"],
  },
  {
    key: "fabric",
    label: "Fabric",
    options: [
      { label: "Silk", value: "silk" },
      { label: "Velvet", value: "velvet" },
      { label: "Net", value: "net" },
      { label: "Organza", value: "organza" },
      { label: "Georgette", value: "georgette" },
      { label: "Satin", value: "satin" },
      { label: "Brocade", value: "brocade" },
      { label: "Embroidered Fabric", value: "embroidered-fabric" },
    ],
    categories: ["Bridal Dresses"],
  },
  {
    key: "work",
    label: "Work",
    options: [
      { label: "Zari Work", value: "zari" },
      { label: "Zardozi", value: "zardozi" },
      { label: "Sequin Work", value: "sequin" },
      { label: "Embroidery", value: "embroidery" },
      { label: "Stone Work", value: "stone" },
      { label: "Mirror Work", value: "mirror" },
      { label: "Thread Work", value: "thread" },
      { label: "Beadwork", value: "beadwork" },
      { label: "Plain", value: "plain" },
    ],
    categories: ["Bridal Dresses"],
  },
  {
    key: "availability",
    label: "Availability",
    options: [
      { label: "Available", value: "available" },
      { label: "Coming Soon", value: "coming-soon" },
      { label: "Pre-booking", value: "pre-booking" },
    ],
  },
];

export function getFiltersForCategory(
  category?: ProductCategory,
): CatalogFilterDefinition[] {
  return catalogFilterDefinitions.filter((filter) => {
    if (!filter.categories) {
      return true;
    }

    return category
      ? filter.categories.includes(category)
      : true;
  });
}