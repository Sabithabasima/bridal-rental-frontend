import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "gold"
  | "ghost";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#6D202C] text-white hover:bg-[#561923] focus-visible:ring-[#6D202C]",

  secondary:
    "bg-[#292522] text-white hover:bg-[#171513] focus-visible:ring-[#292522]",

  outline:
    "border border-[#B08A45] bg-transparent text-[#6D202C] hover:bg-[#F7F1E7] focus-visible:ring-[#B08A45]",

  gold:
    "bg-[#B08A45] text-white hover:bg-[#967238] focus-visible:ring-[#B08A45]",

  ghost:
    "bg-transparent text-[#6D202C] hover:bg-[#F7F1E7] focus-visible:ring-[#B08A45]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-xs",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-sm sm:text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        "inline-flex items-center justify-center gap-2",
        "rounded-full font-medium tracking-wide",
        "transition-colors duration-200",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}