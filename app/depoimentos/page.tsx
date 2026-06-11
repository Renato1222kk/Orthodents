import type { Metadata } from "next";
import { MessageCircle, Star } from "lucide-react";
import { TESTIMONIALS, WHATSAPP_URL } from "@/lib/site";
import PageHero from "@/components/PageHero";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Depoimentos",
  description:
    "Veja os depoimentos de pacientes da Orthodentes São João del Rei e descubra por que somos sinônimo de confiança e atendimento humanizado.",
  keywords: [
    "depoimentos Orthodentes",
    "avaliações dentista São João del Rei",
    "clínica odontológica confiável",
  ],
};

const STATS = [
  { label: "+6 mil", sub: "pacientes atendidos" },
  { label: "+5 anos", sub: "de experiência" },
  { label: "5,0", sub: "de satisfação" },
];

export default function DepoimentosPage() {
  return (
    <>
      <PageHero
        eyebrow="Depoimentos"
        title="Histórias de quem confia na Orthodentes"
        description="A satisfação dos nossos pacientes é o que nos move. Confira alguns relatos de quem transformou o sorriso com a gente."
        crumbs={[{ label: "Depoimentos" }]}
      >
        <div className="flex flex-wrap gap-4">
          {STATS.map((s) => (
            <div
              key={s.sub}
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3"
            >
              <p className="text-xl font-extrabold text-white">{s.label}</p>
              <p className="text-xs text-white/70">{s.sub}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="mb-10 flex items-center justify-center gap-1.5 text-[#D6A84F]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={22} fill="currentColor" strokeWidth={0} />
            ))}
            <span className="ml-2 text-sm font-semibold text-brand">
              Excelente avaliação dos pacientes
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-hair bg-brand-light/40 p-8 text-center sm:p-10">
            <h2 className="text-2xl font-extrabold tracking-tight text-brand">
              Quer fazer parte dessas histórias?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink">
              Agende sua avaliação e descubra como podemos transformar o seu
              sorriso com cuidado e confiança.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mx-auto mt-6"
            >
              <MessageCircle size={18} />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
