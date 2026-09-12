import Link from "next/link";

export default function CompleteLookSection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
      {/* Heading */}
      <div className="mb-12 text-center sm:mb-16">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-neutral-500">
          Curated Styling
        </p>

        <h2 className="font-serif text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl">
          Complete the Look
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-500">
          Your bridal look, thoughtfully brought together. Pair the perfect
          silhouette with jewellery and finishing details made for the moment.
        </p>
      </div>

      {/* Main Editorial Area */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* Main Image */}
        <div className="group relative overflow-hidden bg-neutral-100 lg:col-span-7">
          <div className="aspect-[4/5] lg:aspect-auto lg:h-[760px]">
            <img
              src="/images/collections/complete-look.jpg"
              alt="Complete bridal look by AURELIA"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Image Label */}
          <div className="absolute bottom-6 left-6 bg-white px-5 py-4 sm:bottom-8 sm:left-8">
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
              The AURELIA Look
            </p>

            <p className="mt-1 font-serif text-xl">
              The Maharani
            </p>
          </div>
        </div>

        {/* Styling Details */}
        <div className="flex flex-col lg:col-span-5">
          {/* Outfit */}
          <div className="flex flex-1 flex-col justify-center border-b border-neutral-200 bg-[#f5f5f5] px-7 py-10 sm:px-10 lg:px-12">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
              01 / Bridal Wear
            </p>

            <h3 className="mt-4 font-serif text-3xl">
              The Maharani
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              Kanchipuram silk bridal saree with traditional woven detailing.
            </p>

            <p className="mt-5 text-sm font-medium">
              Rental from ₹5,999
            </p>
          </div>

          {/* Jewellery */}
          <div className="flex flex-1 flex-col justify-center border-b border-neutral-200 bg-white px-7 py-10 sm:px-10 lg:px-12">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
              02 / Jewellery
            </p>

            <h3 className="mt-4 font-serif text-3xl">
              The Meera Set
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              A timeless temple-inspired jewellery set designed to complement
              the richness of the bridal silhouette.
            </p>

            <p className="mt-5 text-sm font-medium">
              Rental from ₹3,999
            </p>
          </div>

          {/* Accessories */}
          <div className="flex flex-1 flex-col justify-center bg-[#f5f5f5] px-7 py-10 sm:px-10 lg:px-12">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
              03 / Finishing Touches
            </p>

            <h3 className="mt-4 font-serif text-3xl">
              The Final Details
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              Add the finishing touches with veils, accessories and carefully
              selected details.
            </p>

            <Link
              href="/collections/complete-look"
              className="group mt-6 flex w-fit items-center gap-3 text-xs font-medium uppercase tracking-[0.2em]"
            >
              Build Your Look

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 flex justify-center sm:mt-16">
        <Link
          href="/collections/complete-look"
          className="inline-flex items-center justify-center bg-black px-9 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-neutral-800"
        >
          Build Your Bridal Look
        </Link>
      </div>
    </section>
  );
}