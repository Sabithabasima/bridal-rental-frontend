"use client";

import {
  catalogFilterDefinitions,
  type CatalogFilterKey,
  type CatalogFilters,
} from "@/lib/catalogFilters";
import type { ProductCategory } from "@/lib/products";
import FilterSection from "./FilterSection";


type MobileFilterDrawerProps = {
  open: boolean;
  filters: CatalogFilters;
  category?: ProductCategory;
  onFilterChange: (key: CatalogFilterKey, value: string) => void;
  onClearFilters: () => void;
  onClose: () => void;
};

export default function MobileFilterDrawer({
  open,
  filters,
  category,
  onFilterChange,
  onClearFilters,
  onClose,
}: MobileFilterDrawerProps) {
  if (!open) {
    return null;
  }

  const visibleFilters = catalogFilterDefinitions.filter((filter) => {
    if (!filter.categories) {
      return true;
    }

    return category
      ? filter.categories.includes(category)
      : true;
  });

  const hasActiveFilters = Object.values(filters).some(
    (values) => values.length > 0,
  );

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        aria-label="Close filters"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />

      <aside className="absolute right-0 top-0 flex h-full w-[min(90vw,380px)] flex-col bg-[#fffaf2] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#eadfd4] px-5 py-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#9b7650]">
              Refine your selection
            </p>

            <h2 className="mt-1 text-xl font-semibold text-[#681c2c]">
              Filters
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close filter drawer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9cabb] text-xl text-[#681c2c] transition hover:bg-[#f1e5d8]"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5">
          {visibleFilters.map((filter) => (
            <FilterSection
              key={filter.key}
              title={filter.label}
              options={filter.options}
              selectedValues={filters[filter.key]}
              onChange={(value) => onFilterChange(filter.key, value)}
              defaultOpen={filter.key === "occasion"}
            />
          ))}
        </div>

        <div className="border-t border-[#eadfd4] bg-[#fffaf2] p-5">
          <div className="flex items-center gap-3">
            {hasActiveFilters && (
              <button
                type="button"
                onClick={onClearFilters}
                className="flex-1 rounded-full border border-[#cdbda9] px-4 py-3 text-sm font-medium text-[#681c2c] transition hover:bg-[#f1e5d8]"
              >
                Clear all
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-full bg-[#681c2c] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#501522]"
            >
              Done
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}