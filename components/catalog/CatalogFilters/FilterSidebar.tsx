"use client";

import {
  catalogFilterDefinitions,
  type CatalogFilterKey,
  type CatalogFilters,
} from "@/lib/catalogFilters";
import type { ProductCategory } from "@/lib/products";

import ColorFilter from "./ColorFilter";
import DurationFilter from "./DurationFilter";
import FabricFilter from "./FabricFilter";
import FilterSection from "./FilterSection";
import LookFilter from "./LookFilter";
import OccasionFilter from "./OccasionFilter";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./SizeFilter";
import WorkFilter from "./WorkFilter";

type FilterSidebarProps = {
  filters: CatalogFilters;
  category?: ProductCategory;
  onFilterChange: (key: CatalogFilterKey, value: string) => void;
  onClearFilters: () => void;
};

type FilterComponentProps = {
  options: {
    label: string;
    value: string;
  }[];
  selectedValues: string[];
  onChange: (value: string) => void;
};

function RenderFilterComponent({
  filterKey,
  options,
  selectedValues,
  onChange,
}: FilterComponentProps & {
  filterKey: CatalogFilterKey;
}) {
  switch (filterKey) {
    case "occasion":
      return (
        <OccasionFilter
          options={options}
          selectedValues={selectedValues}
          onChange={onChange}
        />
      );

    case "look":
      return (
        <LookFilter
          options={options}
          selectedValues={selectedValues}
          onChange={onChange}
        />
      );

    case "color":
      return (
        <ColorFilter
          options={options}
          selectedValues={selectedValues}
          onChange={onChange}
        />
      );

    case "price":
      return (
        <PriceFilter
          options={options}
          selectedValues={selectedValues}
          onChange={onChange}
        />
      );

    case "duration":
      return (
        <DurationFilter
          options={options}
          selectedValues={selectedValues}
          onChange={onChange}
        />
      );

    case "size":
      return (
        <SizeFilter
          options={options}
          selectedValues={selectedValues}
          onChange={onChange}
        />
      );

    case "fabric":
      return (
        <FabricFilter
          options={options}
          selectedValues={selectedValues}
          onChange={onChange}
        />
      );

    case "work":
      return (
        <WorkFilter
          options={options}
          selectedValues={selectedValues}
          onChange={onChange}
        />
      );

    default:
      return (
        <FilterSection
          title="Availability"
          options={options}
          selectedValues={selectedValues}
          onChange={onChange}
          defaultOpen={false}
        />
      );
  }
}

export default function FilterSidebar({
  filters,
  category,
  onFilterChange,
  onClearFilters,
}: FilterSidebarProps) {
  const visibleFilters = catalogFilterDefinitions.filter((filter) => {
    if (!filter.categories) {
      return true;
    }

    return category ? filter.categories.includes(category) : true;
  });

  const hasActiveFilters = Object.values(filters).some(
    (values) => values.length > 0,
  );

  return (
    <aside className="hidden w-full max-w-[280px] shrink-0 lg:block">
      <div className="sticky top-8">
        <div className="flex items-center justify-between border-b border-[#d9cabb] pb-4">
          <h2 className="text-base font-medium text-[#681c2c]">Filter</h2>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={onClearFilters}
              className="text-xs font-medium text-[#9b7650] underline underline-offset-4 transition hover:text-[#681c2c]"
            >
              Clear all
            </button>
          )}
        </div>

        <div>
          {visibleFilters.map((filter) => (
            <RenderFilterComponent
              key={filter.key}
              filterKey={filter.key}
              options={filter.options}
              selectedValues={filters[filter.key]}
              onChange={(value) => onFilterChange(filter.key, value)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}