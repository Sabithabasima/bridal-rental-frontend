import Link from "next/link";
import type { Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

function getAvailabilityLabel(product: Product) {
  switch (product.availability) {
    case "coming-soon":
      return "Coming soon";
    case "pre-booking":
      return "Pre-booking";
    default:
      return "Available for rental";
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group min-w-0">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-[#f1e7dc]">
        <Link
          href={`/catalog/${product.id}`}
          aria-label={`View details for ${product.name}`}
          className="block"
        >
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </Link>

        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-[#fffaf2]/95 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#681c2c]">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#fffaf2]/95 text-[#681c2c] transition hover:bg-white"
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
              d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="absolute bottom-3 left-3 right-3">
          <Link
            href={`/catalog/${product.id}`}
            className="flex items-center justify-center rounded-full bg-[#fffaf2]/95 px-4 py-3 text-xs font-semibold text-[#681c2c] opacity-100 transition hover:bg-white sm:opacity-0 sm:group-hover:opacity-100"
          >
            View details
          </Link>
        </div>
      </div>

      <div className="px-1 pt-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#9b7650]">
          {product.category}
        </p>

        <Link
          href={`/catalog/${product.id}`}
          className="mt-1 block font-serif text-lg leading-tight text-[#681c2c] transition hover:text-[#9b7650]"
        >
          {product.name}
        </Link>

        <p className="mt-2 text-xs leading-5 text-[#8b776b]">
          {product.occasion}
        </p>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-semibold text-[#681c2c]">
            {formatPrice(product.price)}
            <span className="ml-1 text-[10px] font-normal text-[#8b776b]">
              / rental
            </span>
          </p>

          <span
            className={`text-[10px] font-medium ${
              product.availability === "available"
                ? "text-[#55704c]"
                : "text-[#9b7650]"
            }`}
          >
            {getAvailabilityLabel(product)}
          </span>
        </div>
      </div>
    </article>
  );
}