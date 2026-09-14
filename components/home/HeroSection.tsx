"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeroSlide = {
  id: number;
  mainImage: string;
  mainAlt: string;
  eyebrow: string;
  title: string;
  description: string;
};

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    mainImage: "/images/hero-bridal.jpg",
    mainAlt: "Bride wearing an elegant traditional bridal outfit",
    eyebrow: "The Bridal Edit",
    title: "Your dream bridal look, made to be remembered.",
    description:
      "Discover timeless bridal dresses, heirloom-inspired jewelry, and exquisite accessories available for rental across India.",
  },
  {
    id: 2,
    mainImage: "/images/hero-bridal-red.jpg",
    mainAlt: "Bride wearing a rich red traditional bridal outfit",
    eyebrow: "The Royal Collection",
    title: "Tradition, elegance, and a little royal magic.",
    description:
      "Explore richly detailed bridal silhouettes designed for unforgettable wedding celebrations.",
  },
  {
    id: 3,
    mainImage: "/images/hero-bridal-gold.jpg",
    mainAlt: "Bride wearing a gold bridal outfit",
    eyebrow: "The Golden Edit",
    title: "Golden details for your most beautiful moments.",
    description:
      "Find statement bridal looks with intricate embroidery, graceful drapes, and timeless charm.",
  },
];

const collageImages = [
  {
    src: "/images/hero-jewelry.jpg",
    alt: "Traditional bridal jewelry arranged on a decorative surface",
    label: "Jewelry",
  },
  {
    src: "/images/hero-accessories.jpg",
    alt: "Embroidered bridal accessories and embellished handbag",
    label: "Accessories",
  },
  {
    src: "/images/hero-architecture.jpg",
    alt: "Elegant traditional architecture with floral decoration",
    label: "Celebration",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = heroSlides[activeSlide];

  const goToNextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  const goToPreviousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      goToNextSlide();
    }, 6000);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused]);

  return (
    <section className="overflow-hidden bg-[#fffaf2]">
      <div className="mx-auto max-w-[1600px] px-4 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div
          className="grid gap-3 lg:grid-cols-[0.9fr_1.15fr_0.7fr]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Editorial Content Panel */}
          <div className="relative flex min-h-[470px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-[#dfceb0] bg-[#f8f0e3] p-7 sm:p-10 lg:min-h-[650px]">
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full border border-[#c9a86d]/40" />

            <div className="pointer-events-none absolute -bottom-12 -left-10 h-40 w-40 rounded-full border border-[#c9a86d]/30" />

            <div className="relative z-10">
              <div className="mb-7 flex items-center gap-3">
                <span className="text-2xl text-[#9b7650]">✧</span>

                <div>
                  <p className="font-serif text-lg tracking-[0.3em] text-[#681c2c]">
                    AURELIA
                  </p>

                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.35em] text-[#9b7650]">
                    Bridal Rentals
                  </p>
                </div>
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a77b35]">
                {currentSlide.eyebrow}
              </p>

              <h1 className="mt-5 max-w-lg font-serif text-4xl leading-[1.08] text-[#681c2c] sm:text-5xl lg:text-[3.7rem]">
                {currentSlide.title}
              </h1>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#655858] sm:text-base">
                {currentSlide.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/catalog/dresses"
                  className="inline-flex items-center justify-center rounded-full bg-[#681c2c] px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#4f1421] focus:outline-none focus:ring-2 focus:ring-[#681c2c] focus:ring-offset-2"
                >
                  Explore Collection
                  <span className="ml-3 text-base">→</span>
                </Link>

                <Link
                  href="/catalog/jewelry"
                  className="inline-flex items-center justify-center rounded-full border border-[#b99b63] px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#681c2c] transition hover:bg-[#f2e7d2] focus:outline-none focus:ring-2 focus:ring-[#b99b63] focus:ring-offset-2"
                >
                  Discover Jewelry
                </Link>
              </div>
            </div>

            <div className="relative z-10 mt-10">
              <div className="mb-5 h-px w-full bg-[#d7c3a2]" />

              <div className="flex flex-wrap gap-5 text-[#655858]">
                <div>
                  <p className="font-serif text-2xl text-[#681c2c]">100+</p>
                  <p className="mt-1 text-xs">Bridal styles</p>
                </div>

                <div>
                  <p className="font-serif text-2xl text-[#681c2c]">
                    Pan India
                  </p>
                  <p className="mt-1 text-xs">Rental availability</p>
                </div>

                <div>
                  <p className="font-serif text-2xl text-[#681c2c]">
                    Curated
                  </p>
                  <p className="mt-1 text-xs">Premium collections</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Bridal Image Carousel */}
          <div className="relative min-h-[470px] overflow-hidden rounded-[1.75rem] border border-[#d7bd88] bg-[#ead9bb] p-2 sm:min-h-[650px]">
            <div className="relative h-full min-h-[454px] overflow-hidden rounded-[1.35rem] sm:min-h-[634px]">
              <Image
                key={currentSlide.mainImage}
                src={currentSlide.mainImage}
                alt={currentSlide.mainAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center transition-opacity duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3b1720]/85 via-[#681c2c]/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-[#fffaf2] sm:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ead9bb]">
                      Bridal Dresses
                    </p>

                    <h2 className="mt-3 max-w-md font-serif text-3xl leading-tight sm:text-4xl">
                      Timeless elegance for every celebration.
                    </h2>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-[#fffaf2]/80">
                      Traditional silhouettes, graceful details, and
                      unforgettable bridal moments.
                    </p>
                  </div>

                  <Link
                    href="/catalog/dresses"
                    aria-label="View bridal dresses"
                    className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#fffaf2]/60 text-xl text-[#fffaf2] transition hover:bg-[#fffaf2] hover:text-[#681c2c] sm:flex"
                  >
                    ↗
                  </Link>
                </div>

                {/* Carousel Controls */}
                <div className="mt-7 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    {heroSlides.map((slide, index) => (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={activeSlide === index}
                        className={`h-1.5 rounded-full transition-all ${
                          activeSlide === index
                            ? "w-9 bg-[#fffaf2]"
                            : "w-2 bg-[#fffaf2]/50 hover:bg-[#fffaf2]/80"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={goToPreviousSlide}
                      aria-label="Previous bridal slide"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#fffaf2]/50 text-lg text-[#fffaf2] transition hover:bg-[#fffaf2] hover:text-[#681c2c]"
                    >
                      ←
                    </button>

                    <button
                      type="button"
                      onClick={goToNextSlide}
                      aria-label="Next bridal slide"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#fffaf2]/50 text-lg text-[#fffaf2] transition hover:bg-[#fffaf2] hover:text-[#681c2c]"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Collage Panels */}
          <div className="grid min-h-[470px] gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:grid-rows-3">
            {collageImages.map((image, index) => (
              <Link
                key={image.src}
                href={
                  index === 0
                    ? "/catalog/jewelry"
                    : index === 1
                      ? "/catalog/accessories"
                      : "/catalog"
                }
                className="group relative min-h-[180px] overflow-hidden rounded-[1.5rem] border border-[#d7bd88] bg-[#ead9bb]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 33vw, 22vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3b1720]/75 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 text-[#fffaf2]">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#ead9bb]">
                        Curated Edit
                      </p>

                      <h3 className="mt-2 font-serif text-2xl">
                        {image.label}
                      </h3>
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#fffaf2]/60 text-lg transition group-hover:bg-[#fffaf2] group-hover:text-[#681c2c]">
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}