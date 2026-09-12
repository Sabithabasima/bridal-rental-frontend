import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="bg-white px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-5xl text-center">
        {/* Eyebrow */}
        <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-neutral-500">
          Ready to Reserve
        </p>

        {/* Main Heading */}
        <h2 className="font-serif text-5xl leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Your Look,
          <br />
          Reserved in Minutes
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
          We recommend booking your pieces 4–6 weeks ahead of your date to
          secure your size and preferred styling window — though last-minute
          looks are always worth asking about.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/bridal-wear"
            className="inline-flex min-h-14 items-center justify-center bg-black px-10 py-5 text-xs font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-neutral-800"
          >
            Check Availability
          </Link>

          <Link
            href="/contact"
            className="inline-flex min-h-14 items-center justify-center border border-neutral-300 px-10 py-5 text-xs font-medium uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:border-black"
          >
            Book a Styling Call
          </Link>
        </div>

        {/* Secondary Link */}
        <div className="mt-7">
          <Link
            href="/collections"
            className="group inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-black"
          >
            View All Collections
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="mx-auto mt-24 flex max-w-6xl items-center justify-center gap-5 sm:mt-28">
        <span className="h-px flex-1 bg-neutral-200" />
        <span className="font-serif text-xl">A</span>
        <span className="h-px flex-1 bg-neutral-200" />
      </div>
    </section>
  );
}