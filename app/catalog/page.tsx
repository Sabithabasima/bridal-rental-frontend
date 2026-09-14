import { Suspense } from "react";

import CatalogPageContent from "@/components/catalog/CatalogPageContent";

function CatalogPageFallback() {
  return (
    <main className="min-h-screen bg-[#fffaf2]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-10 w-64 rounded-lg bg-[#eadfce]" />
          <div className="mt-4 h-5 w-96 max-w-full rounded bg-[#eadfce]" />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-[#eadfce] bg-white"
              >
                <div className="aspect-[3/4] bg-[#eadfce]" />

                <div className="space-y-3 p-4">
                  <div className="h-4 rounded bg-[#eadfce]" />
                  <div className="h-4 w-2/3 rounded bg-[#eadfce]" />
                  <div className="h-5 w-1/3 rounded bg-[#eadfce]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<CatalogPageFallback />}>
      <CatalogPageContent />
    </Suspense>
  );
}