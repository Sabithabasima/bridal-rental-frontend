import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] w-full overflow-hidden bg-neutral-100">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/bridal-hero.jpg"
          alt="AURELIA bridal collection"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative flex min-h-[calc(100vh-6rem)] items-end px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
        <div className="max-w-3xl text-white">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em]">
            Rent the AURELIA Bridal Collection
          </p>

          <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.02em] sm:text-6xl md:text-7xl lg:text-8xl">
            The Art of Your
            <br />
            Bridal Moment
          </h1>

          <p className="mt-7 max-w-lg text-sm leading-7 text-white/90 sm:text-base">
            Designer bridal wear and jewellery, yours for the moment that
            matters — without the cost of owning it forever. Reserve your
            pieces in minutes, fitted and delivered to your door.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/bridal-wear"
              className="inline-flex items-center justify-center bg-black px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              Explore Collection
            </Link>

            <Link
              href="/#how-it-works"
              className="inline-flex items-center justify-center border border-white/70 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            >
              How Rentals Work
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-white lg:flex lg:right-16">
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll to explore
        </span>
        <span className="h-px w-12 bg-white" />
      </div>
    </section>
  );
}