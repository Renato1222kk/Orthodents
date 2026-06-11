import Breadcrumb, { type Crumb } from "./Breadcrumb";

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  crumbs?: Crumb[];
  children?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-brand/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,242,255,0.08),transparent_55%)]"
      />

      <div className="container-page relative py-12 lg:py-16">
        {crumbs && crumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumb items={crumbs} variant="light" />
          </div>
        )}

        <div className="max-w-3xl">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-light">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </div>
      </div>
    </section>
  );
}
