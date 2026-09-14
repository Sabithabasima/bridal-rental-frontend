import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  {
    title: "Royal details",
    image: "/images/inspiration-royal-details.jpg",
  },
  {
    title: "Golden glow",
    image: "/images/inspiration-golden-glow.jpg",
  },
  {
    title: "Soft romance",
    image: "/images/inspiration-soft-romance.jpg",
  },
  {
    title: "Modern bride",
    image: "/images/inspiration-modern-bride.jpg",
  },
  {
    title: "Bridal jewels",
    image: "/images/inspiration-bridal-jewels.jpg",
  },
  {
    title: "The final look",
    image: "/images/inspiration-final-look.jpg",
  },
];

export default function InspirationGallery() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a77b35]">
              Bridal inspiration
            </p>

            <h2 className="mt-2 font-serif text-3xl text-[#681c2c] sm:text-4xl">
              Moments worth remembering
            </h2>
          </div>

          <Link
            href="/inspiration"
            className="text-sm font-semibold text-[#681c2c] underline-offset-4 transition hover:underline"
          >
            View inspiration
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Link
              key={item.title}
              href={`/inspiration#${item.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 1 || index === 4
                  ? "min-h-[260px] md:min-h-[340px]"
                  : "min-h-[220px] md:min-h-[280px]"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#35151d]/90 via-[#681c2c]/15 to-transparent transition duration-500 group-hover:from-[#35151d]/95" />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="font-serif text-xl text-white sm:text-2xl">
                  {item.title}
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-white/70 sm:text-xs">
                  Aurelia bridal edit
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