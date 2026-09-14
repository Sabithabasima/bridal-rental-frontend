import Image from "next/image";
import Link from "next/link";

const occasions = [
  {
    title: "Wedding Day",
    href: "catalog/dresses?occasion=wedding",
    image: "/images/occasion-wedding-day.jpg",
  },
  {
    title: "Reception",
    href: "catalog/dresses?occasion=reception",
    image: "/images/occasion-reception.jpg",
  },
  {
    title: "Mehendi",
    href: "catalog/dresses?occasion=mehendi",
    image: "/images/occasion-mehendi.jpg",
  },
  {
    title: "Engagement",
    href: "catalog/dresses?occasion=engagement",
    image: "/images/occasion-engagement.jpg",
  },
];

export default function OccasionShowcase() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a77b35]">
              For every celebration
            </p>

            <h2 className="mt-2 font-serif text-3xl text-[#681c2c] sm:text-4xl">
              Dress for the occasion
            </h2>
          </div>

          <Link
            href="/occasions"
            className="text-sm font-semibold text-[#681c2c] underline-offset-4 transition hover:underline"
          >
            Explore occasions
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {occasions.map((occasion) => (
            <Link
              key={occasion.title}
              href={occasion.href}
              className="group relative min-h-[320px] overflow-hidden rounded-3xl"
            >
              <Image
                src={occasion.image}
                alt={occasion.title}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#35151d]/95 via-[#681c2c]/20 to-transparent transition duration-500 group-hover:from-[#35151d]/100" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="font-serif text-2xl sm:text-3xl">
                  {occasion.title}
                </h3>

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/75 transition group-hover:text-[#e8cc91]">
                  Shop styles →
                </p>
              </div>

              <div className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                ↗
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}