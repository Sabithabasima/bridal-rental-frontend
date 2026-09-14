import type { ReactNode } from "react";

type BadgeVariant = "maroon" | "gold" | "cream" | "dark";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  maroon: "bg-[#6D202C] text-white",
  gold: "bg-[#B08A45] text-white",
  cream: "bg-[#F7F1E7] text-[#6D202C]",
  dark: "bg-[#292522] text-white",
};

export default function Badge({
  children,
  variant = "cream",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex w-fit items-center rounded-full px-3 py-1",
        "text-[10px] font-semibold uppercase tracking-[0.12em]",
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}