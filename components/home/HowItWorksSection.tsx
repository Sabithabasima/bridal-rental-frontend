const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Explore our curated collection of bridal wear, jewellery and complete looks.",
  },
  {
    number: "02",
    title: "Reserve",
    description:
      "Choose your pieces, select your dates and reserve your bridal look.",
  },
  {
    number: "03",
    title: "Wear",
    description:
      "Your carefully prepared pieces arrive ready for your special celebration.",
  },
  {
    number: "04",
    title: "Return",
    description:
      "After your celebration, simply return your pieces to AURELIA.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32"
    >
      {/* Heading */}
      <div className="max-w-2xl">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-neutral-500">
          The AURELIA Experience
        </p>

        <h2 className="font-serif text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl">
          How It Works
        </h2>

        <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-500">
          From discovering your perfect look to returning it after your
          celebration, we make your rental experience simple and seamless.
        </p>
      </div>

      {/* Steps */}
      <ol className="mt-16 border-t border-neutral-200 lg:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={`relative border-b border-neutral-200 py-10 md:px-8 lg:min-h-[300px] lg:border-b-0 lg:border-r ${
                index === 0 ? "lg:pl-0" : ""
              } ${
                index === steps.length - 1 ? "lg:border-r-0 lg:pr-0" : ""
              }`}
            >
              {/* Number */}
              <span className="font-serif text-4xl text-neutral-300">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="mt-8 font-serif text-3xl">{step.title}</h3>

              {/* Description */}
              <p className="mt-4 max-w-xs text-sm leading-7 text-neutral-500">
                {step.description}
              </p>

              {/* Arrow — only between steps in the same row */}
              {index !== steps.length - 1 && index % 2 !== 1 && (
                <span className="absolute bottom-10 right-8 hidden text-xl text-neutral-300 md:block lg:hidden" />
              )}
              {index !== steps.length - 1 && (
                <span className="absolute bottom-10 right-8 hidden text-xl text-neutral-300 lg:block">
                  →
                </span>
              )}
            </li>
          ))}
        </div>
      </ol>

      {/* Bottom Statement */}
      <div className="mt-16 flex items-center justify-center gap-4 lg:mt-20">
        <span className="h-px w-12 bg-black" />
        <p className="text-center text-[10px] uppercase tracking-[0.25em] text-neutral-500">
          Your moment. Your look. Your way.
        </p>
        <span className="h-px w-12 bg-black" />
      </div>
    </section>
  );
}