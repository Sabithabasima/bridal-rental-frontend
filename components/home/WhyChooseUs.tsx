const benefits = [
  {
    title: "Curated bridal collections",
    description:
      "Explore carefully selected pieces designed for memorable celebrations.",
  },
  {
    title: "Premium quality",
    description:
      "Every item is selected with attention to finish, detailing, and presentation.",
  },
  {
    title: "Flexible rental options",
    description:
      "Choose rental durations that work for your wedding plans and schedule.",
  },
  {
    title: "One trusted destination",
    description:
      "Find dresses, jewelry, and accessories together for a complete bridal look.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a77b35]">
              Why Aurelia
            </p>

            <h2 className="mt-2 font-serif text-3xl text-[#681c2c] sm:text-4xl">
              Bridal elegance, made easier
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#655858]">
              We believe every bride deserves to feel extraordinary without
              needing to purchase every piece she wears.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-[#eadfce] bg-[#fffaf2] p-6"
              >
                <span className="font-serif text-3xl text-[#b99b63]">
                  0{index + 1}
                </span>

                <h3 className="mt-4 font-serif text-xl text-[#681c2c]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#655858]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}