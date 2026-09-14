"use client";

import type { ProductCategory } from "@/lib/products";

type SortOption =
  | "recommended"
  | "price-low"
  | "price-high"
  | "new-arrivals";

type CatalogToolbarProps = {
  productCount: number;
  category?: ProductCategory;
  sortBy: SortOption;
  activeFilterCount: number;
  onSortChange: (value: SortOption) => void;
  onOpenFilters: () => void;
};

const categoryLabels: Record<ProductCategory, string> = {
  "Bridal Dresses": "Bridal Dresses",
  Jewelry: "Jewelry",
  Accessories: "Accessories",
};

export type { SortOption };

export default function CatalogToolbar({
  productCount,
  category,
  sortBy,
  activeFilterCount,
  onSortChange,
  onOpenFilters,
}: CatalogToolbarProps) {
  return (
    <div className="flex flex-col gap-4 border-b border-[#e7d8c8] pb-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-medium text-[#681c2c]">
          {category ? categoryLabels[category] : "All collections"}
        </p>

        <p className="mt-1 text-xs text-[#8b776b]">
          {productCount} {productCount === 1 ? "piece" : "pieces"} available
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenFilters}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cdbda9] px-4 py-2.5 text-xs font-medium text-[#681c2c] transition hover:bg-[#f4eadf] lg:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 6h16M7 12h10M10 18h4" strokeLinecap="round" />
          </svg>

          Filters

          {activeFilterCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#681c2c] px-1.5 text-[10px] text-white">
              {activeFilterCount}
            </span>
          )}
        </button>

        <label className="flex items-center gap-2 text-xs text-[#8b776b]">
          <span className="hidden sm:inline">Sort by</span>

          <select
            value={sortBy}
            onChange={(event) =>
              onSortChange(event.target.value as SortOption)
            }
            className="rounded-full border border-[#cdbda9] bg-[#fffaf2] px-4 py-2.5 text-xs font-medium text-[#681c2c] outline-none transition focus:border-[#9b7650]"
            aria-label="Sort products"
          >
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="new-arrivals">New Arrivals</option>
          </select>
        </label>
      </div>
    </div>
  );
}