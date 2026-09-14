import Image from "next/image";
import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="bg-[#fffaf2] px-5 py-16 sm:px-8 lg:px-10">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem]">
        <Image
          src="/images/final-cta-bridal.jpg"
          alt="Elegant bridal outfit and jewelry"
          fill
          sizes="(max-width: 1024px) 100vw, 80vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#681c2c]/85" />

        <div className="relative z-10 px-6 py-14 text-center text-white sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e8cc91]">
            Your bridal story starts here
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
            Find the pieces that make your moment unforgettable.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
            Explore our bridal collection and discover your perfect rental look
            for every celebration.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/catalog"
              className="rounded-full bg-[#e8cc91] px-6 py-3 text-sm font-semibold text-[#681c2c] transition hover:bg-[#f2dda9]"
            >
              Explore the collection
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}