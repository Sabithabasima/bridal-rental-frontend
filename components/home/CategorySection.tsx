import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Bridal Sarees",
    description: "Timeless drapes for the modern bride",
    href: "/bridal-wear?category=sarees",
    image: "/images/bridal-wear/bridal-saree.jpg",
  },
  {
    title: "Lehengas",
    description: "Statement silhouettes for your celebration",
    href: "/bridal-wear?category=lehengas",
    image: "/images/bridal-wear/bridal-lehenga.jpg",
  },
  {
    title: "Gowns",
    description: "Elegant evening silhouettes",
    href: "/bridal-wear?category=gowns",
    image: "/images/bridal-wear/bridal-gown.jpg",
  },
  {
    title: "Jewellery",
    description: "The details that complete the look",
    href: "/jewellery",
    image: "/images/jewellery/bridal-jewellery.jpg",
  },
];

export default function CategorySection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
      {/* Section Heading */}
      <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-neutral-500">
            Discover AURELIA
          </p>

          <h2 className="font-serif text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl">
            Rent the Collection
          </h2>
        </div>

        <Link
          href="/collections"
          className="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em]"
        >
          View All
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <Link key={category.title} href={category.href} className="group block">
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
              <Image
                src={category.image}
                alt={category.title}
                fill
                loading={index < 2 ? "eager" : "lazy"}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
            </div>

            {/* Text */}
            <div className="pt-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-serif text-2xl tracking-tight">
                  {category.title}
                </h3>
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-500">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}