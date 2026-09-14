import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "The Royal Bride",
    subtitle: "Rich maroons, antique gold, and regal embroidery.",
    href: "catalog/dresses?collection=royal-bride",
    image: "/images/collection-royal-bride.jpg",
  },
  {
    title: "The Ivory Edit",
    subtitle: "Soft neutrals and understated bridal elegance.",
    href: "catalog/dresses?collection=ivory-edit",
    image: "/images/collection-ivory-edit.jpg",
  },
  {
    title: "The Contemporary Bride",
    subtitle: "Modern silhouettes with traditional detailing.",
    href: "catalog/dresses?collection=contemporary",
    image: "/images/collection-contemporary.jpg",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="bg-[#fffaf2] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a77b35]">
            Curated collections
          </p>

          <h2 className="mt-2 font-serif text-3xl text-[#681c2c] sm:text-4xl">
            Find the look that feels like you
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#655858] sm:text-base">
            Explore carefully curated bridal edits created for every kind of
            bride, from traditional royalty to modern minimalism.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {collections.map((collection) => (
            <Link
              key={collection.title}
              href={collection.href}
              className="group overflow-hidden rounded-3xl border border-[#eadfce] bg-white"
            >
              <div className="relative min-h-[360px] overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#35151d]/95 via-[#681c2c]/35 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-serif text-3xl">{collection.title}</h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/80">
                    {collection.subtitle}
                  </p>

                  <span className="mt-5 inline-block rounded-full border border-white/50 px-4 py-2 text-xs font-semibold transition group-hover:border-white group-hover:bg-white group-hover:text-[#681c2c]">
                    Explore edit
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