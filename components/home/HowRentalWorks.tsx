const steps = [
  {
    number: "01",
    title: "Discover your style",
    description:
      "Browse bridal dresses, jewelry, and accessories curated for your occasion.",
  },
  {
    number: "02",
    title: "Choose your dates",
    description:
      "Select your rental period and check availability for your preferred look.",
  },
  {
    number: "03",
    title: "Confirm your rental",
    description:
      "Complete your booking and receive confirmation for your special event.",
  },
  {
    number: "04",
    title: "Wear and return",
    description:
      "Enjoy your celebration and return the pieces according to your rental terms.",
  },
];

export default function HowRentalWorks() {
  return (
    <section className="bg-[#681c2c] px-5 py-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e8cc91]">
            Simple and seamless
          </p>

          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            How bridal rental works
          </h2>

          <p className="mt-4 text-sm leading-6 text-white/70 sm:text-base">
            Your dream bridal look is only a few simple steps away.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative rounded-3xl border border-white/15 bg-white/[0.06] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#e8cc91]/60 hover:bg-white/[0.1]"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-5xl leading-none text-[#e8cc91]">
                  {step.number}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8cc91]/40 text-sm text-[#e8cc91]">
                  {index === 0 && "✦"}
                  {index === 1 && "◷"}
                  {index === 2 && "✓"}
                  {index === 3 && "↗"}
                </span>
              </div>

              <div className="mt-8 h-px w-12 bg-[#e8cc91]" />

              <h3 className="mt-5 font-serif text-2xl leading-snug">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/70">
                {step.description}
              </p>

              {index !== steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8cc91]/40 bg-[#681c2c] text-sm text-[#e8cc91] lg:flex">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}