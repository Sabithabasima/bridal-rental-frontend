import Image from "next/image";
import Link from "next/link";

const looks = [
  {
    title: "The Classic Red Bride",
    description: "A rich red lehenga styled with kundan jewelry.",
    href: "catalog/dresses?look=classic-red",
    image: "/images/look-classic-red.jpg",
  },
  {
    title: "The Ivory Bride",
    description: "An elegant ivory silhouette with delicate gold accents.",
    href: "catalog/dresses?look=ivory-bride",
    image: "/images/look-ivory-bride.jpg",
  },
  {
    title: "The Regal Bride",
    description: "A statement bridal look inspired by royal traditions.",
    href: "catalog/dresses?look=regal-bride",
    image: "/images/look-regal-bride.jpg",
  },
];

export default function CompleteTheLook() {
  return (
    <section className="bg-[#fffaf2] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a77b35]">
            Styled inspiration
          </p>

          <h2 className="mt-2 font-serif text-3xl text-[#681c2c] sm:text-4xl">
            Complete the look
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#655858] sm:text-base">
            Discover beautifully coordinated bridal combinations designed to
            help you imagine your complete wedding-day look.
          </p>
        </div>

        {/* Look Cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {looks.map((look) => (
            <Link
              key={look.title}
              href={look.href}
              className="group overflow-hidden rounded-3xl border border-[#eadfce] bg-white"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={look.image}
                  alt={look.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#35151d]/95 via-[#681c2c]/25 to-transparent" />

                {/* Card Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-serif text-3xl">{look.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-white/80">
                    {look.description}
                  </p>

                  <span className="mt-5 inline-block text-sm font-semibold">
                    Discover this look →
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