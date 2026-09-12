import Image from "next/image";
import Link from "next/link";

export default function JewellerySection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
      <div className="grid min-h-[650px] grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="relative min-h-[500px] overflow-hidden bg-neutral-100 lg:min-h-[700px]">
          <Image
            src="/images/jewellery/jewellery-editorial.jpg"
            alt="AURELIA bridal jewellery collection"
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex items-center bg-[#f5f5f5] px-8 py-16 sm:px-12 lg:px-20 xl:px-28">
          <div className="max-w-xl">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-neutral-500">
              AURELIA Jewellery
            </p>

            <h2 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Details That
              <br />
              Complete
              <br />
              The Look
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-neutral-600 sm:text-base">
              From traditional temple jewellery to refined contemporary
              pieces, rent the finishing touches designed to make your
              bridal look unforgettable.
            </p>

            <div className="mt-9">
              <Link
                href="/jewellery"
                className="group inline-flex items-center gap-4 border-b border-black pb-3 text-xs font-medium uppercase tracking-[0.2em]"
              >
                Rent Jewellery
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Small decorative detail */}
            <div className="mt-16 flex items-center gap-4">
              <span className="h-px w-12 bg-black" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                Crafted for the moment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}