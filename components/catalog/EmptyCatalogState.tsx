"use client";

type EmptyCatalogStateProps = {
  onClearFilters: () => void;
};

export default function EmptyCatalogState({
  onClearFilters,
}: EmptyCatalogStateProps) {
  return (
    <section className="flex min-h-[360px] flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-[#d9cabb] bg-[#fffaf2] px-6 py-14 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f1e5d8] text-[#9b7650]">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <path
            d="M8 3h8l2 5-2 13H8L6 8l2-5Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M6 8h12M9 3l3 5 3-5" strokeLinecap="round" />
        </svg>
      </div>

      <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9b7650]">
        Nothing matched your selection
      </p>

      <h2 className="mt-3 font-serif text-2xl text-[#681c2c]">
        Your perfect look is still waiting
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-[#8b776b]">
        Try changing your filters or clearing your selections to explore more
        bridal dresses, jewelry, and accessories.
      </p>

      <button
        type="button"
        onClick={onClearFilters}
        className="mt-7 rounded-full bg-[#681c2c] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#501522]"
      >
        Clear all filters
      </button>
    </section>
  );
}