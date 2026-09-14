import Image from "next/image";
import Link from "next/link";

import Badge from "./Badge";
import ImagePlaceholder from "./ImagePlaceholder";

interface CategoryCardProps {
  title: string;
  description?: string;
  image?: string;
  href: string;
  badge?: string;
  imageAlt?: string;
}

export default function CategoryCard({
  title,
  description,
  image,
  href,
  badge,
  imageAlt,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-[#E8DCCB] bg-[#FFFDF8]"
    >
      <div className="relative overflow-hidden">
        {image ? (
          <div className="relative aspect-[4/5]">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              sizes="(max-width: 640px) 75vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          <ImagePlaceholder aspectRatio="portrait" label={title} />
        )}

        {badge && (
          <div className="absolute left-3 top-3">
            <Badge variant="gold">{badge}</Badge>
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#292522]/70 to-transparent p-4 pt-16">
          <h3 className="font-serif text-xl text-white">
            {title}
          </h3>
        </div>
      </div>

      {description && (
        <div className="flex items-center justify-between gap-3 p-4">
          <p className="text-xs leading-5 text-[#6D625B]">
            {description}
          </p>

          <span
            aria-hidden="true"
            className="shrink-0 text-lg text-[#B08A45] transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </div>
      )}
    </Link>
  );
}