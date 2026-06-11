import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/lib/site";

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="relative flex h-full flex-col rounded-2xl border border-hair bg-white p-6 shadow-soft">
      <Quote
        size={36}
        className="absolute right-5 top-5 text-brand-light"
        aria-hidden="true"
      />
      <div className="flex gap-0.5 text-[#D6A84F]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[#2b3a55]">
        “{t.text}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-hair pt-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
          {t.initials}
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-bold text-brand">{t.name}</span>
          <span className="block text-xs text-ink">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
