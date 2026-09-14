const testimonials = [
  {
    quote:
      "The entire experience felt so easy. I found my bridal outfit and jewelry in one place, and the final look was beautiful.",
    name: "Ananya R.",
    occasion: "Wedding bride",
  },
  {
    quote:
      "The collection looked even more beautiful in person. The details, finishing, and styling were exactly what I wanted.",
    name: "Meera S.",
    occasion: "Reception bride",
  },
  {
    quote:
      "Renting made so much sense for my wedding events. I could experiment with different looks without buying everything.",
    name: "Kavya P.",
    occasion: "Multi-event bride",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#fffaf2] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a77b35]">
            Bride notes
          </p>

          <h2 className="mt-2 font-serif text-3xl text-[#681c2c] sm:text-4xl">
            Loved by brides
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-3xl border border-[#eadfce] bg-white p-6"
            >
              <div className="text-xl tracking-[0.2em] text-[#b99b63]">
                ★★★★★
              </div>

              <p className="mt-5 font-serif text-xl leading-8 text-[#681c2c]">
                “{testimonial.quote}”
              </p>

              <div className="mt-6 border-t border-[#eadfce] pt-4">
                <p className="text-sm font-semibold text-[#2d2525]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-[#8b7777]">
                  {testimonial.occasion}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}