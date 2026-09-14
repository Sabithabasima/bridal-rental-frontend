interface RatingProps {
  value: number;
  reviewCount?: number;
  showValue?: boolean;
  size?: "sm" | "md";
}

export default function Rating({
  value,
  reviewCount,
  showValue = true,
  size = "sm",
}: RatingProps) {
  const starSize = size === "sm" ? "text-xs" : "text-sm";

  return (
    <div className="flex items-center gap-2">
      <div
        aria-label={`${value} out of 5 stars`}
        className={["flex items-center gap-0.5", starSize].join(" ")}
      >
        {Array.from({ length: 5 }).map((_, index) => {
          const starNumber = index + 1;
          const isFilled = starNumber <= Math.round(value);

          return (
            <span
              key={starNumber}
              className={isFilled ? "text-[#B08A45]" : "text-[#D8CBB8]"}
              aria-hidden="true"
            >
              ★
            </span>
          );
        })}
      </div>

      {showValue && (
        <span className="text-xs text-[#6D625B]">
          {value.toFixed(1)}
        </span>
      )}

      {typeof reviewCount === "number" && (
        <span className="text-xs text-[#81756D]">
          ({reviewCount})
        </span>
      )}
    </div>
  );
}