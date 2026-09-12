"use client";
import Link from "next/link";

const products = [
  {
    name: "The Maharani",
    category: "Kanchipuram Silk Saree",
    price: "₹5,999",
    image: "/images/bridal-wear/maharani-saree.jpg",
    href: "/product/the-maharani",
  },
  {
    name: "The Noor",
    category: "Embroidered Bridal Lehenga",
    price: "₹8,499",
    image: "/images/bridal-wear/noor-lehenga.jpg",
    href: "/product/the-noor",
  },
  {
    name: "The Meera",
    category: "Temple Jewellery Set",
    price: "₹3,999",
    image: "/images/jewellery/meera-jewellery.jpg",
    href: "/product/the-meera",
  },
  {
    name: "The Celeste",
    category: "Reception Gown",
    price: "₹6,499",
    image: "/images/bridal-wear/celeste-gown.jpg",
    href: "/product/the-celeste",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="bg-[#f5f5f5] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
      {/* Heading */}
      <div className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-neutral-500">
            Curated for the Bride
          </p>

          <h2 className="font-serif text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl">
            The Bridal Edit
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-500">
            A considered selection of silhouettes, textures and details
            designed for every chapter of your celebration.
          </p>
        </div>

        <Link
          href="/collections"
          className="group inline-flex w-fit items-center gap-3 border-b border-black pb-2 text-xs font-medium uppercase tracking-[0.2em]"
        >
          Explore All Pieces

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.href}
            className="group block"
          >
            {/* Product Image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Wishlist */}
              <button
                type="button"
                aria-label={`Add ${product.name} to wishlist`}
                onClick={(event) => event.preventDefault()}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-white text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                  />
                </svg>
              </button>
            </div>

            {/* Product Information */}
            <div className="pt-5">
              <h3 className="font-serif text-xl tracking-tight">
                {product.name}
              </h3>

              <p className="mt-1 text-sm text-neutral-500">
                {product.category}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm font-medium">
                  From {product.price}
                </p>

                <span className="text-xs uppercase tracking-[0.15em] text-neutral-500">
                  Rental
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 flex justify-center lg:mt-20">
        <Link
          href="/collections"
          className="inline-flex items-center justify-center bg-black px-9 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-neutral-800"
        >
          Discover The Edit
        </Link>
      </div>
    </section>
  );
}