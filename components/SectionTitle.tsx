type SectionTitleProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  variant?: "dark" | "light";
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  variant = "dark",
  className = "",
}: SectionTitleProps) {
  const isLight = variant === "light";
  const alignClasses =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left";

  return (
    <div className={`${alignClasses} ${className}`}>
      {eyebrow && (
        <span
          className={
            isLight
              ? "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-light"
              : "eyebrow"
          }
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${
          isLight ? "text-white" : "text-brand"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 leading-relaxed ${
            isLight ? "text-white/70" : "text-ink"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
