"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Badge from "./Badge";
import PriceDisplay from "./PriceDisplay";
import Rating from "./Rating";
import ImagePlaceholder from "./ImagePlaceholder";

export interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  category: "dress" | "jewelry" | "accessory";
  image?: string;
  imageAlt?: string;
  price: number;
  priceLabel?: string;
  badge?: string;
  rating?: number;
  reviewCount?: number;
  availableFor?: string;
  isNew?: boolean;
}

export default function ProductCard({
  name,
  slug,
  category,
  image,
  imageAlt,
  price,
  priceLabel = "Rent from",
  badge,
  rating,
  reviewCount,
  availableFor,
  isNew = false,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <article className="group min-w-0">
      <div className="relative overflow-hidden rounded-2xl border border-[#E8DCCB] bg-[#FFFDF8]">
        <Link href={`/catalog/${slug}`} className="block">
          <div className="relative">
            {image ? (
              <div className="relative aspect-[3/4]">
                <Image
                  src={image}
                  alt={imageAlt || name}
                  fill
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 30vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ) : (
              <ImagePlaceholder aspectRatio="portrait" label={name} />
            )}

            <div className="absolute left-3 top-3 flex flex-col gap-2">
              {isNew && <Badge variant="maroon">New Arrival</Badge>}

              {badge && <Badge variant="gold">{badge}</Badge>}
            </div>
          </div>
        </Link>

        <button
          type="button"
          aria-label={
            isWishlisted
              ? `Remove ${name} from wishlist`
              : `Add ${name} to wishlist`
          }
          aria-pressed={isWishlisted}
          onClick={() => setIsWishlisted((previous) => !previous)}
          className={[
            "absolute right-3 top-3 flex h-9 w-9 items-center justify-center",
            "rounded-full border border-[#E8DCCB] bg-[#FFFDF8]/95",
            "text-lg transition-colors",
            isWishlisted
              ? "text-[#6D202C]"
              : "text-[#81756D] hover:text-[#6D202C]",
          ].join(" ")}
        >
          {isWishlisted ? "♥" : "♡"}
        </button>
      </div>

      <div className="flex flex-col gap-2 px-1 pt-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#B08A45]">
            {category}
          </span>

          {availableFor && (
            <span className="text-[10px] text-[#81756D]">
              {availableFor}
            </span>
          )}
        </div>

        <Link href={`/catalog/${slug}`}>
          <h3 className="line-clamp-2 font-serif text-lg leading-snug text-[#292522] transition-colors group-hover:text-[#6D202C]">
            {name}
          </h3>
        </Link>

        {typeof rating === "number" && (
          <Rating value={rating} reviewCount={reviewCount} />
        )}

        <PriceDisplay amount={price} label={priceLabel} />
      </div>
    </article>
  );
}