import Image from "next/image";
import Link from "next/link";

const trendingLooks = [
  {
    id: 1,
    name: "Crimson Heritage Lehenga",
    category: "Bridal Lehenga",
    price: "₹4,999",
    image: "/images/trending-crimson-lehenga.jpg",
  },
  {
    id: 2,
    name: "Antique Gold Bridal Set",
    category: "Jewelry Set",
    price: "₹1,999",
    image: "/images/trending-antique-gold-set.jpg",
  },
  {
    id: 3,
    name: "Ivory Silk Bridal Gown",
    category: "Bridal Gown",
    price: "₹3,999",
    image: "/images/trending-ivory-gown.jpg",
  },
  {
    id: 4,
    name: "Royal Polki Necklace",
    category: "Bridal Jewelry",
    price: "₹1,499",
    image: "/images/trending-polki-necklace.jpg",
  },
];

export default function TrendingLooks() {
  return (
    <section className="bg-[#fffaf2] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a77b35]">
              Most loved
            </p>

            <h2 className="mt-2 font-serif text-3xl text-[#681c2c] sm:text-4xl">
              Trending looks
            </h2>
          </div>

          <Link
            href="/catalog"
            className="text-sm font-semibold text-[#681c2c] underline-offset-4 transition hover:underline"
          >
            View all products
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {trendingLooks.map((product) => (
            <Link
              key={product.id}
              href={`/catalog/${product.id}`}
              className="group overflow-hidden rounded-2xl border border-[#eadfce] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(104,28,44,0.10)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f4ede3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#35151d]/30 via-transparent to-transparent" />

                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#681c2c]">
                  Trending
                </span>

                <span className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/90 text-sm text-[#681c2c] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  ↗
                </span>
              </div>

              <div className="p-4">
                <p className="text-xs font-medium text-[#a77b35]">
                  {product.category}
                </p>

                <h3 className="mt-1 font-serif text-lg leading-6 text-[#681c2c]">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-[#2d2525]">
                    From {product.price}
                  </p>

                  <span className="text-xs text-[#8c7770] transition group-hover:text-[#681c2c]">
                    View
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}