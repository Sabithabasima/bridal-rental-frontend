interface PriceDisplayProps {
  amount: number;
  currency?: string;
  label?: string;
  suffix?: string;
  className?: string;
  amountClassName?: string;
}

export default function PriceDisplay({
  amount,
  currency = "₹",
  label = "Rent from",
  suffix,
  className = "",
  amountClassName = "",
}: PriceDisplayProps) {
  const formattedAmount = new Intl.NumberFormat("en-IN").format(amount);

  return (
    <div className={["flex flex-col gap-1", className].join(" ")}>
      {label && (
        <span className="text-xs text-[#81756D]">
          {label}
        </span>
      )}

      <div className="flex flex-wrap items-baseline gap-1">
        <span
          className={[
            "font-semibold text-[#6D202C]",
            amountClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {currency}
          {formattedAmount}
        </span>

        {suffix && (
          <span className="text-xs text-[#81756D]">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}