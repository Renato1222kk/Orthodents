import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; href?: string };

export default function Breadcrumb({
  items,
  variant = "dark",
}: {
  items: Crumb[];
  variant?: "dark" | "light";
}) {
  const isLight = variant === "light";
  const base = isLight ? "text-white/70" : "text-ink";
  const active = isLight ? "text-white" : "text-brand";
  const hover = isLight ? "hover:text-white" : "hover:text-brand";

  return (
    <nav aria-label="Trilha de navegação" className={`text-xs sm:text-sm ${base}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link
            href="/"
            className={`inline-flex items-center gap-1 transition-colors ${hover}`}
          >
            <Home size={14} />
            Início
          </Link>
        </li>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="inline-flex items-center gap-1.5">
              <ChevronRight size={14} className="opacity-50" />
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={`transition-colors ${hover}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={`font-semibold ${active}`}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
