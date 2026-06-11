import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Treatment } from "@/lib/site";
import SmartImage from "./SmartImage";

export default function TreatmentCard({ treatment }: { treatment: Treatment }) {
  const { slug, title, short, image, icon: Icon } = treatment;

  return (
    <Link
      href={`/tratamentos/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hair bg-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brand/20 hover:shadow-card"
    >
      {/* Imagem */}
      <div className="relative overflow-hidden">
        <SmartImage
          src={image}
          alt={title}
          fallbackLabel={title}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent"
        />
        {/* Ícone discreto */}
        <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-brand shadow-soft backdrop-blur">
          <Icon size={22} />
        </span>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-brand">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink">{short}</p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors group-hover:text-brand-dark">
          Saiba mais
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
