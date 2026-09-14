import Image from "next/image";
import Link from "next/link";

const jewelryItems = [
  {
    name: "Temple Jewelry",
    description: "Traditional details for a regal bridal finish.",
  },
  {
    name: "Kundan Jewelry",
    description: "Classic sparkle inspired by royal heirlooms.",
  },
  {
    name: "Bridal Polki",
    description: "Statement pieces for unforgettable celebrations.",
  },
];

export default function JewelryEdit() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Jewelry Image Section */}
        <div className="rounded-[2rem] bg-gradient-to-br from-[#d6b66d] via-[#f1dfab] to-[#8f6530] p-4">
          <div className="relative min-h-[390px] overflow-hidden rounded-[1.5rem]">
            <Image
              src="/images/jewelry-edit.jpg"
              alt="Traditional bridal jewelry arranged in an elegant composition"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#681c2c]/95 via-[#681c2c]/30 to-transparent" />

            {/* Image Content */}
            <div className="absolute inset-x-0 bottom-0 p-7 text-[#fffaf2]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#e8cc91]">
                The Jewelry Edit
              </p>

              <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
                Let every detail shine
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/80">
                Complete your bridal ensemble with jewelry that feels
                luxurious, expressive, and unforgettable.
              </p>

              <Link
                href="/jewelry"
                className="mt-6 inline-block rounded-full bg-[#e8cc91] px-5 py-3 text-sm font-semibold text-[#681c2c] transition hover:bg-[#f3dda6]"
              >
                Shop jewelry
              </Link>
            </div>
          </div>
        </div>

        {/* Jewelry Categories */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a77b35]">
            Bridal adornments
          </p>

          <h2 className="mt-2 font-serif text-3xl text-[#681c2c] sm:text-4xl">
            Jewelry with a story
          </h2>

          <div className="mt-8 divide-y divide-[#eadfce]">
            {jewelryItems.map((item, index) => (
              <div
                key={item.name}
                className="flex gap-5 py-5 first:pt-0 last:pb-0"
              >
                <span className="font-serif text-3xl text-[#b99b63]">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="font-serif text-2xl text-[#681c2c]">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#655858]">
                    {item.description}
                  </p>

                  <Link
                    href="/jewelry"
                    className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-[#a77b35] underline-offset-4 hover:underline"
                  >
                    Explore jewelry →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}