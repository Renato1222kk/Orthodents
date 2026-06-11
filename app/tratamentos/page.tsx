import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { TREATMENTS } from "@/lib/site";
import PageHero from "@/components/PageHero";
import TreatmentCard from "@/components/TreatmentCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Tratamentos Odontológicos",
  description:
    "Conheça todos os tratamentos da Orthodentes São João del Rei: prótese e implantes, aparelho ortodôntico, clínico geral, clareamento, cirurgias e estética dental.",
  keywords: [
    "tratamentos odontológicos São João del Rei",
    "implantes",
    "ortodontia",
    "clareamento",
    "estética dental",
    "Orthodentes",
  ],
};

const HIGHLIGHTS = [
  "Equipe especializada em todas as áreas",
  "Planejamento personalizado para cada paciente",
  "Tecnologia e biossegurança em cada atendimento",
];

export default function TratamentosPage() {
  return (
    <>
      <PageHero
        eyebrow="Tratamentos"
        title="Cuidado completo para o seu sorriso"
        description="Reunimos diversas especialidades em um só lugar, com tecnologia, conforto e atendimento humanizado. Conheça nossos tratamentos e escolha o ideal para você."
        crumbs={[{ label: "Tratamentos" }]}
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TREATMENTS.map((t) => (
              <TreatmentCard key={t.slug} treatment={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light/40 py-16 lg:py-20">
        <div className="container-page">
          <div className="rounded-[2rem] border border-hair bg-white p-8 shadow-card sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <span className="eyebrow">Por que a Orthodentes</span>
                <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-brand sm:text-3xl">
                  Tudo o que o seu sorriso precisa em um só lugar
                </h2>
                <p className="mt-4 leading-relaxed text-ink">
                  Da prevenção à reabilitação completa, cuidamos de cada etapa
                  com atenção, segurança e foco em resultados naturais e
                  duradouros.
                </p>
                <Link href="/contato" className="btn-primary mt-7">
                  Agendar avaliação
                  <ArrowRight size={18} />
                </Link>
              </div>
              <ul className="grid gap-4">
                {HIGHLIGHTS.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-2xl border border-hair bg-brand-light/40 p-5"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Check size={15} strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-[#2b3a55]">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
