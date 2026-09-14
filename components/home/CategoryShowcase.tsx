import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Bridal Dresses",
    description: "Lehengas, sarees, gowns, and timeless bridal silhouettes.",
    href: "catalog/dresses",
    image: "/images/category-dresses.jpg",
  },
  {
    title: "Bridal Jewelry",
    description: "Statement necklaces, maang tikka, earrings, and more.",
    href: "catalog/jewelry",
    image: "/images/category-jewelry.jpg",
  },
  {
    title: "Accessories",
    description: "Veils, potlis, bridal belts, and finishing details.",
    href: "catalog/accessories",
    image: "/images/category-accessories.jpg",
  },
];

export default function CategoryShowcase() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a77b35]">
              Explore the edit
            </p>

            <h2 className="mt-2 font-serif text-3xl text-[#681c2c] sm:text-4xl">
              Everything for your bridal look
            </h2>
          </div>

          <Link
            href="/catalog"
            className="hidden text-sm font-semibold text-[#681c2c] underline-offset-4 hover:underline sm:block"
          >
            View all
          </Link>
        </div>

        {/* Category Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group overflow-hidden rounded-3xl border border-[#eadfce] bg-[#fffaf2]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#35151d]/95 via-[#681c2c]/30 to-transparent" />

                {/* Card Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/70">
                    Discover
                  </p>

                  <h3 className="font-serif text-3xl">{category.title}</h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/80">
                    {category.description}
                  </p>

                  <span className="mt-5 inline-block text-sm font-semibold">
                    Explore collection →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-6 sm:hidden">
          <Link
            href="/catalog"
            className="text-sm font-semibold text-[#681c2c] underline-offset-4 hover:underline"
          >
            View all collections →
          </Link>
        </div>
      </div>
    </section>
  );
}