import type { ProductCategory } from "@/lib/products";

type CatalogHeroProps = {
  category?: ProductCategory;
};

const categoryContent: Record<
  ProductCategory,
  {
    eyebrow: string;
    title: string;
    description: string;
  }
> = {
  "Bridal Dresses": {
    eyebrow: "The bridal wardrobe",
    title: "Find your bridal look",
    description:
      "Discover elegant bridal dresses designed for weddings, receptions, celebrations, and unforgettable moments.",
  },
  Jewelry: {
    eyebrow: "The finishing touch",
    title: "Find your bridal sparkle",
    description:
      "Explore timeless bridal jewelry, statement pieces, and delicate details crafted to complete your celebration look.",
  },
  Accessories: {
    eyebrow: "Complete your look",
    title: "Discover bridal accessories",
    description:
      "Add the perfect finishing touches with elegant veils, clutches, hair accessories, and more.",
  },
};

export default function CatalogHero({ category }: CatalogHeroProps) {
  const content = category
    ? categoryContent[category]
    : {
        eyebrow: "Aurelia bridal rentals",
        title: "Find your bridal look",
        description:
          "Explore curated bridal dresses, jewelry, and accessories for every celebration, from intimate ceremonies to grand wedding days.",
      };

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[#e7d8c8] bg-[#f4eadf] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#c5a477]/40" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-[#c5a477]/30" />

      <div className="relative z-10 max-w-3xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9b7650] sm:text-xs">
          {content.eyebrow}
        </p>

        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.08] text-[#681c2c] sm:text-5xl lg:text-6xl">
          {content.title}
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#67564c] sm:text-base sm:leading-8">
          {content.description}
        </p>

        <div className="mt-7 flex items-center gap-3">
          <span className="h-px w-12 bg-[#b28b5d]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9b7650]">
            Curated for your celebration
          </span>
        </div>
      </div>
    </section>
  );
}