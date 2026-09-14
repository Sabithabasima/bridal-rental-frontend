import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: SectionHeadingProps) {
  const alignmentStyles =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <div
      className={[
        "flex w-full flex-col gap-3",
        alignmentStyles,
      ].join(" ")}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08A45]">
          {eyebrow}
        </p>
      )}

      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div
          className={[
            "flex flex-col gap-3",
            align === "center" ? "items-center" : "items-start",
          ].join(" ")}
        >
          <h2 className="font-serif text-3xl leading-tight text-[#292522] sm:text-4xl">
            {title}
          </h2>

          {description && (
            <p className="max-w-2xl text-sm leading-6 text-[#6D625B] sm:text-base">
              {description}
            </p>
          )}
        </div>

        {action && <div className="shrink-0">{action}</div>}
      </div>

      <span
        aria-hidden="true"
        className={[
          "mt-1 block h-px w-16 bg-[#B08A45]",
          align === "center" ? "self-center" : "self-start",
        ].join(" ")}
      />
    </div>
  );
}