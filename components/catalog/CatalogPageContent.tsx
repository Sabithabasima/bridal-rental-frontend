"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  products,
  type ProductCategory,
} from "@/lib/products";

import {
  emptyCatalogFilters,
  type CatalogFilters,
  type CatalogFilterKey,
} from "@/lib/catalogFilters";

import FilterSidebar from "./CatalogFilters/FilterSidebar";
import MobileFilterDrawer from "./CatalogFilters/MobileFilterDrawer";

import CatalogHero from "@/components/catalog/CatalogHero";
import CatalogToolbar, {
  type SortOption,
} from "@/components/catalog/CatalogToolbar";
import EmptyCatalogState from "@/components/catalog/EmptyCatalogState";
import ProductGrid from "@/components/catalog/ProductGrid";

type CategoryFilter = "All" | ProductCategory;

type CatalogPageContentProps = {
  category?: ProductCategory;
};

const categories: CategoryFilter[] = [
  "All",
  "Bridal Dresses",
  "Jewelry",
  "Accessories",
];

const filterKeys: CatalogFilterKey[] = [
  "occasion",
  "look",
  "color",
  "price",
  "duration",
  "size",
  "fabric",
  "work",
  "availability",
];

function getInitialFilters(
  searchParams: URLSearchParams,
): CatalogFilters {
  const filters: CatalogFilters = {
    ...emptyCatalogFilters,
  };

  filterKeys.forEach((key) => {
    const value = searchParams.get(key);

    if (!value) {
      return;
    }

    filters[key] = value
      .split(",")
      .map((item) => item.trim().toLowerCase())
      .filter(Boolean);
  });

  return filters;
}

function matchesPriceRange(
  price: number,
  selectedRanges: string[],
): boolean {
  if (selectedRanges.length === 0) {
    return true;
  }

  return selectedRanges.some((range) => {
    if (range === "under-1000") {
      return price < 1000;
    }

    if (range === "above-10000") {
      return price > 10000;
    }

    const [minimum, maximum] = range.split("-").map(Number);

    if (
      Number.isNaN(minimum) ||
      Number.isNaN(maximum)
    ) {
      return false;
    }

    return price >= minimum && price <= maximum;
  });
}

function matchesArrayFilter(
  productValue: string | undefined,
  selectedValues: string[],
): boolean {
  if (selectedValues.length === 0) {
    return true;
  }

  if (!productValue) {
    return false;
  }

  return selectedValues.includes(productValue.toLowerCase());
}

function matchesDuration(
  productDurations: number[] | undefined,
  selectedValues: string[],
): boolean {
  if (selectedValues.length === 0) {
    return true;
  }

  if (!productDurations || productDurations.length === 0) {
    return false;
  }

  return selectedValues.some((value) =>
    productDurations.includes(Number(value)),
  );
}

function matchesSize(
  productSizes: string[] | undefined,
  selectedSizes: string[],
): boolean {
  if (selectedSizes.length === 0) {
    return true;
  }

  if (!productSizes || productSizes.length === 0) {
    return false;
  }

  return productSizes.some((size) =>
    selectedSizes.includes(size.toLowerCase()),
  );
}

export default function CatalogPageContent({
  category,
}: CatalogPageContentProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] =
    useState<CategoryFilter>(category ?? "All");

  const [sortBy, setSortBy] =
    useState<SortOption>("recommended");

  const [filters, setFilters] = useState<CatalogFilters>(() =>
    getInitialFilters(searchParams),
  );

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] =
    useState(false);

  /*
   * Keep the selected filters synchronized with the URL.
   *
   * This allows URLs such as:
   * /catalog/dresses?occasion=wedding&color=maroon
   */
  useEffect(() => {
    setFilters(getInitialFilters(searchParams));
  }, [searchParams]);

  /*
   * Keep the active category synchronized when navigating between
   * category routes.
   */
  useEffect(() => {
    setActiveCategory(category ?? "All");
  }, [category]);

  function updateUrl(nextFilters: CatalogFilters) {
    const params = new URLSearchParams(searchParams.toString());

    filterKeys.forEach((key) => {
      const values = nextFilters[key];

      if (values.length > 0) {
        params.set(key, values.join(","));
      } else {
        params.delete(key);
      }
    });

    const queryString = params.toString();

    router.push(
      queryString
        ? `${pathname}?${queryString}`
        : pathname,
    );
  }

  function handleFilterChange(
    key: CatalogFilterKey,
    value: string,
  ) {
    const normalizedValue = value.toLowerCase();

    const currentValues = filters[key];

    const nextValues = currentValues.includes(normalizedValue)
      ? currentValues.filter((item) => item !== normalizedValue)
      : [...currentValues, normalizedValue];

    const nextFilters: CatalogFilters = {
      ...filters,
      [key]: nextValues,
    };

    setFilters(nextFilters);
    updateUrl(nextFilters);
  }

  function clearFilters() {
    setSearch("");
    setSortBy("recommended");
    setActiveCategory(category ?? "All");
    setFilters({ ...emptyCatalogFilters });
    setIsMobileFiltersOpen(false);

    router.push(pathname);
  }

  function handleCategoryChange(nextCategory: CategoryFilter) {
    /*
     * On a category-specific page, only the current category is allowed.
     */
    if (
      category &&
      nextCategory !== "All" &&
      nextCategory !== category
    ) {
      return;
    }

    setActiveCategory(nextCategory);
  }

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      const searchableText = [
        product.name,
        product.category,
        product.occasion,
        product.look,
        product.color,
        product.description,
        product.material,
        product.fabric,
        product.work,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        normalizedSearch.length === 0 ||
        searchableText.includes(normalizedSearch);

      const matchesOccasion = matchesArrayFilter(
        product.occasion,
        filters.occasion,
      );

      const matchesLook = matchesArrayFilter(
        product.look,
        filters.look,
      );

      const matchesColor = matchesArrayFilter(
        product.color,
        filters.color,
      );

      const matchesPrice = matchesPriceRange(
        product.price,
        filters.price,
      );

      const matchesRentalDuration = matchesDuration(
        product.duration,
        filters.duration,
      );

      const matchesProductSize = matchesSize(
        product.sizes,
        filters.size,
      );

      const matchesFabric = matchesArrayFilter(
        product.fabric,
        filters.fabric,
      );

      const matchesWork = matchesArrayFilter(
        product.work,
        filters.work,
      );

      const matchesAvailability = matchesArrayFilter(
        product.availability,
        filters.availability,
      );

      return (
        matchesCategory &&
        matchesSearch &&
        matchesOccasion &&
        matchesLook &&
        matchesColor &&
        matchesPrice &&
        matchesRentalDuration &&
        matchesProductSize &&
        matchesFabric &&
        matchesWork &&
        matchesAvailability
      );
    });

    return [...filtered].sort((firstProduct, secondProduct) => {
      if (sortBy === "price-low") {
        return firstProduct.price - secondProduct.price;
      }

      if (sortBy === "price-high") {
        return secondProduct.price - firstProduct.price;
      }

      if (sortBy === "new-arrivals") {
        return secondProduct.id - firstProduct.id;
      }

      /*
       * Recommended order.
       * The current product data uses the product ID as a stable fallback.
       */
      return firstProduct.id - secondProduct.id;
    });
  }, [
    activeCategory,
    filters,
    search,
    sortBy,
  ]);

  const activeFilterCount = Object.values(filters).reduce(
    (total, values) => total + values.length,
    0,
  );

  const hasActiveFilters =
    search.trim().length > 0 ||
    activeFilterCount > 0;

  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2d2423]">
      <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 sm:py-8 lg:px-10">
        <CatalogHero category={category} />

        <section className="mt-7">
          <label
            htmlFor="catalog-search"
            className="sr-only"
          >
            Search bridal products
          </label>

          <div className="relative mx-auto max-w-2xl">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9b7650]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path
                d="m16 16 4 4"
                strokeLinecap="round"
              />
            </svg>

            <input
              id="catalog-search"
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search dresses, jewelry, accessories, occasions..."
              className="w-full rounded-full border border-[#d9cabb] bg-white py-4 pl-12 pr-5 text-sm text-[#2d2423] outline-none transition placeholder:text-[#a3958c] focus:border-[#9b7650] focus:ring-2 focus:ring-[#9b7650]/10"
            />
          </div>
        </section>

        <section className="mt-8">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((item) => {
              const isDisabled =
                category !== undefined &&
                item !== "All" &&
                item !== category;

              const isActive = activeCategory === item;

              return (
                <button
                  key={item}
                  type="button"
                  disabled={isDisabled}
                  onClick={() =>
                    handleCategoryChange(item)
                  }
                  className={[
                    "rounded-full border px-4 py-2.5 text-xs font-semibold transition",
                    isActive
                      ? "border-[#681c2c] bg-[#681c2c] text-white"
                      : "border-[#d9cabb] bg-white text-[#681c2c] hover:border-[#681c2c] hover:bg-[#f7eee5]",
                    isDisabled
                      ? "cursor-not-allowed opacity-40"
                      : "",
                  ].join(" ")}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-center justify-between gap-4 lg:hidden">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-[#9b7650]">
                Refine your selection
              </p>

              <p className="mt-1 text-sm text-[#6f625d]">
                Find something made for your celebration
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setIsMobileFiltersOpen(true)
              }
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#d9cabb] bg-white px-4 py-2.5 text-xs font-semibold text-[#681c2c] transition hover:bg-[#f7eee5]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M4 6h16M7 12h10M10 18h4"
                  strokeLinecap="round"
                />
              </svg>

              Filters

              {activeFilterCount > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#681c2c] px-1.5 text-[10px] text-white">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>

          <div className="mt-6 flex items-start gap-8 lg:mt-8">
            <FilterSidebar
              filters={filters}
              category={category}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
            />

            <div className="min-w-0 flex-1">
              <CatalogToolbar
                productCount={filteredProducts.length}
                category={
                  activeCategory === "All"
                    ? undefined
                    : activeCategory
                }
                sortBy={sortBy}
                activeFilterCount={activeFilterCount}
                onSortChange={setSortBy}
                onOpenFilters={() =>
                  setIsMobileFiltersOpen(true)
                }
              />

              {hasActiveFilters && (
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <p className="text-xs text-[#8b776b]">
                    Your selection has been refined.
                  </p>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs font-semibold text-[#681c2c] underline underline-offset-4 transition hover:text-[#9b7650]"
                  >
                    Clear all
                  </button>
                </div>
              )}

              <div className="mt-7">
                {filteredProducts.length > 0 ? (
                  <ProductGrid products={filteredProducts} />
                ) : (
                  <EmptyCatalogState
                    onClearFilters={clearFilters}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <MobileFilterDrawer
        open={isMobileFiltersOpen}
        filters={filters}
        category={category}
        onFilterChange={handleFilterChange}
        onClearFilters={clearFilters}
        onClose={() =>
          setIsMobileFiltersOpen(false)
        }
      />
    </main>
  );
}