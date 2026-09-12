import Link from "next/link";

export default function EditorialSection() {
  return (
    <section className="bg-[#f5f5f5] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Editorial Image */}
        <div className="group relative overflow-hidden lg:col-span-7">
          <div className="aspect-[4/5] overflow-hidden sm:aspect-[3/4] lg:aspect-[4/5]">
            <img
              src="/images/collections/editorial-bride.jpg"
              alt="The modern bride wearing AURELIA"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Image Caption */}
          <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white">
              AURELIA / 01
            </p>
          </div>
        </div>

        {/* Editorial Content */}
        <div className="lg:col-span-5 lg:pl-4 xl:pl-10">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-neutral-500">
            The AURELIA Story
          </p>

          <h2 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            The
            <br />
            Modern
            <br />
            Bride
          </h2>

          <div className="mt-8 max-w-md space-y-5 text-sm leading-7 text-neutral-600">
            <p>
              AURELIA was created for the bride who believes that elegance is
              personal.
            </p>

            <p>
              We bring together timeless craftsmanship, contemporary
              silhouettes and carefully selected jewellery to create bridal
              moments that feel entirely your own.
            </p>

            <p>
              Because what you wear should be remembered long after the
              celebration ends.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-9">
            <Link
              href="/about"
              className="group inline-flex items-center gap-4 border-b border-black pb-3 text-xs font-medium uppercase tracking-[0.2em]"
            >
              Discover AURELIA

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Decorative Number */}
          <div className="mt-16 flex items-center gap-4">
            <span className="font-serif text-3xl">01</span>

            <span className="h-px w-16 bg-black" />

            <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
              The Modern Bride
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}