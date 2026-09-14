interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  className?: string;
}

const aspectRatioStyles = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

export default function ImagePlaceholder({
  label = "Image coming soon",
  aspectRatio = "portrait",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={[
        "relative flex w-full items-center justify-center overflow-hidden",
        "bg-[#F1E7D9]",
        aspectRatioStyles[aspectRatio],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        aria-hidden="true"
        className="absolute inset-4 rounded-full border border-[#B08A45]/40"
      />

      <div
        aria-hidden="true"
        className="absolute inset-8 rounded-full border border-[#B08A45]/25"
      />

      <div className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
        <span className="font-serif text-3xl text-[#B08A45]">
          ✦
        </span>

        <p className="text-xs uppercase tracking-[0.15em] text-[#6D202C]">
          {label}
        </p>
      </div>
    </div>
  );
}