"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { getProductById, products } from "@/lib/products";

type ProductDetailsContentProps = {
  productId: string;
};

export default function ProductDetailsContent({
  productId,
}: ProductDetailsContentProps) {
const foundProduct = getProductById(productId);

if (!foundProduct) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fffaf2] px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-[#9b7650]">
          Aurelia Collection
        </p>

        <h1 className="mt-4 text-3xl font-semibold text-[#681c2c]">
          Product not found
        </h1>

        <p className="mt-3 text-sm text-[#6f625d]">
          The product you are looking for may no longer be available.
        </p>

        <Link
          href="/catalog"
          className="mt-6 inline-flex rounded-full bg-[#681c2c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#501522]"
        >
          Back to catalog
        </Link>
      </div>
    </main>
  );
}

const product = foundProduct;
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] ?? "",
  );
  const [rentalDays, setRentalDays] = useState("4");
  const [pincode, setPincode] = useState("");
  const [deliveryMessage, setDeliveryMessage] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const relatedProducts = useMemo(() => {
    if (!product) return [];

    return products
      .filter(
        (item) =>
          item.id !== product.id && item.category === product.category,
      )
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fffaf2] px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#9b7650]">
            Aurelia Collection
          </p>

          <h1 className="mt-4 text-3xl font-semibold text-[#681c2c]">
            Product not found
          </h1>

          <p className="mt-3 text-sm text-[#6f625d]">
            The product you are looking for may no longer be available.
          </p>

          <Link
            href="/catalog"
            className="mt-6 inline-flex rounded-full bg-[#681c2c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#501522]"
          >
            Back to catalog
          </Link>
        </div>
      </main>
    );
  }

  const formattedPrice = product.price.toLocaleString("en-IN");

  function checkDelivery() {
    if (!/^[1-9][0-9]{5}$/.test(pincode)) {
      setDeliveryMessage("Please enter a valid 6-digit Indian pincode.");
      return;
    }

    setDeliveryMessage(
      `We will check rental availability and delivery options for ${pincode}.`,
    );
  }

  function handleRentNow() {
    const query = new URLSearchParams({
      product: String(product.id),
      name: product.name,
      days: rentalDays,
      ...(selectedSize ? { size: selectedSize } : {}),
    });

    window.location.href = `/booking?${query.toString()}`;
  }

  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2d2423]">
      <section className="bg-[#681c2c] px-5 pb-10 pt-8 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-sm text-[#f5dfb1] transition hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Back to catalog
          </Link>

          <div className="mt-8 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[#e8c98d]">
              {product.category}
            </p>

            <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#f5e5d9] sm:text-base">
              Discover a bridal rental piece designed to make your special
              occasion feel unforgettable.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-12 lg:py-14">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#f0e5d7]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />

            {product.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-[#f6dfaa] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#681c2c]">
                {product.badge}
              </span>
            )}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-[#eadbc8] bg-white/60 p-4">
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#9b7650]">
                Occasion
              </p>
              <p className="mt-2 text-sm font-semibold text-[#681c2c]">
                {product.occasion}
              </p>
            </div>

            <div className="rounded-2xl border border-[#eadbc8] bg-white/60 p-4">
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#9b7650]">
                Colour
              </p>
              <p className="mt-2 text-sm font-semibold text-[#681c2c]">
                {product.color}
              </p>
            </div>

            <div className="rounded-2xl border border-[#eadbc8] bg-white/60 p-4">
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#9b7650]">
                Material
              </p>
              <p className="mt-2 text-sm font-semibold text-[#681c2c]">
                {product.material}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:pt-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-[#9b7650]">Rental price</p>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-[#681c2c]">
                  ₹{formattedPrice}
                </span>

                <span className="text-sm text-[#8b7b73]">starting price</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsWishlisted((current) => !current)}
              aria-label={
                isWishlisted ? "Remove from wishlist" : "Add to wishlist"
              }
              className={`flex h-11 w-11 items-center justify-center rounded-full border text-xl transition ${
                isWishlisted
                  ? "border-[#681c2c] bg-[#681c2c] text-white"
                  : "border-[#ddcbb6] bg-white text-[#681c2c] hover:bg-[#f4e6d4]"
              }`}
            >
              {isWishlisted ? "♥" : "♡"}
            </button>
          </div>

          <div className="my-7 h-px bg-[#eadbc8]" />

          <p className="text-sm leading-7 text-[#6f625d]">
            {product.description}
          </p>

          <div className="mt-8 space-y-6">
            {product.sizes && (
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-sm font-semibold text-[#681c2c]">
                    Select size
                  </label>

                  <button
                    type="button"
                    className="text-xs text-[#9b7650] underline underline-offset-4"
                  >
                    Size guide
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`h-11 min-w-11 rounded-full border px-4 text-sm font-medium transition ${
                        selectedSize === size
                          ? "border-[#681c2c] bg-[#681c2c] text-white"
                          : "border-[#ddcbb6] bg-white text-[#681c2c] hover:border-[#681c2c]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="rental-days"
                className="mb-3 block text-sm font-semibold text-[#681c2c]"
              >
                Rental duration
              </label>

              <select
                id="rental-days"
                value={rentalDays}
                onChange={(event) => setRentalDays(event.target.value)}
                className="w-full rounded-2xl border border-[#ddcbb6] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#681c2c]"
              >
                <option value="4">4 days</option>
                <option value="7">7 days</option>
                <option value="10">10 days</option>
                <option value="14">14 days</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="pincode"
                className="mb-3 block text-sm font-semibold text-[#681c2c]"
              >
                Check delivery availability
              </label>

              <div className="flex gap-2">
                <input
                  id="pincode"
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={pincode}
                  onChange={(event) =>
                    setPincode(event.target.value.replace(/\D/g, ""))
                  }
                  placeholder="Enter pincode"
                  className="min-w-0 flex-1 rounded-2xl border border-[#ddcbb6] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#a99b91] focus:border-[#681c2c]"
                />

                <button
                  type="button"
                  onClick={checkDelivery}
                  className="rounded-2xl border border-[#681c2c] px-5 py-3 text-sm font-semibold text-[#681c2c] transition hover:bg-[#681c2c] hover:text-white"
                >
                  Check
                </button>
              </div>

              {deliveryMessage && (
                <p className="mt-3 text-xs leading-5 text-[#8b6a4a]">
                  {deliveryMessage}
                </p>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={handleRentNow}
            className="mt-8 w-full rounded-full bg-[#681c2c] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#501522]"
          >
            Rent this look
          </button>

          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-[#f5eadc] px-3 py-4">
              <p className="text-lg">✦</p>
              <p className="mt-2 text-xs font-medium text-[#681c2c]">
                Quality checked
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5eadc] px-3 py-4">
              <p className="text-lg">⌂</p>
              <p className="mt-2 text-xs font-medium text-[#681c2c]">
                India-wide rental
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5eadc] px-3 py-4">
              <p className="text-lg">↺</p>
              <p className="mt-2 text-xs font-medium text-[#681c2c]">
                Easy returns
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#eadbc8] bg-[#f8eee2] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#9b7650]">
                Product details
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-[#681c2c]">
                Everything included
              </h2>

              <ul className="mt-5 space-y-3">
                {product.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-[#6f625d]"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#681c2c] text-xs text-white">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#eadbc8] bg-[#fffaf2] p-6">
              <h3 className="text-lg font-semibold text-[#681c2c]">
                Rental notes
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#6f625d]">
                <li>• Final availability is confirmed before booking.</li>
                <li>• Product appearance may vary slightly by screen.</li>
                <li>• Please review fit and measurements before payment.</li>
                <li>• Return timelines will be shared during checkout.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#9b7650]">
                You may also like
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-[#681c2c]">
                Complete your bridal look
              </h2>
            </div>

            <Link
              href="/catalog"
              className="hidden text-sm font-semibold text-[#681c2c] underline underline-offset-4 sm:block"
            >
              View all
            </Link>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-4">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                href={`/catalog/${item.id}`}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#f0e5d7]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                <p className="mt-3 text-xs uppercase tracking-[0.13em] text-[#9b7650]">
                  {item.category}
                </p>

                <h3 className="mt-1 text-sm font-semibold text-[#681c2c]">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-[#6f625d]">
                  ₹{item.price.toLocaleString("en-IN")}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}