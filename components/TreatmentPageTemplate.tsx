import Link from "next/link";
import {
  ArrowRight,
  Check,
  HelpCircle,
  MessageCircle,
  Sparkles,
  Star,
} from "lucide-react";
import type { Treatment } from "@/lib/site";
import { TREATMENTS, whatsappLink } from "@/lib/site";
import PageHero from "./PageHero";
import SmartImage from "./SmartImage";
import CTASection from "./CTASection";
import FaqAccordion from "./FaqAccordion";

export default function TreatmentPageTemplate({
  treatment,
}: {
  treatment: Treatment;
}) {
  const wa = whatsappLink(
    `Olá, vim pelo site da Orthodentes e gostaria de saber mais sobre ${treatment.title}.`
  );

  const others = TREATMENTS.filter((t) => t.slug !== treatment.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Tratamento"
        title={treatment.title}
        description={treatment.hero}
        crumbs={[
          { label: "Tratamentos", href: "/tratamentos" },
          { label: treatment.title },
        ]}
      >
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-[#04361a] shadow-soft transition-all hover:brightness-105"
        >
          <MessageCircle size={18} />
          Falar no WhatsApp
        </a>
      </PageHero>

      {/* Intro + imagem */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <span className="eyebrow">
              <Sparkles size={14} />O que é
            </span>
            <p className="mt-5 text-lg font-medium leading-relaxed text-[#2b3a55]">
              {treatment.intro}
            </p>
            <p className="mt-4 leading-relaxed text-ink">{treatment.whatIs}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={18} />
                Agendar avaliação
              </a>
              <Link href="/tratamentos" className="btn-outline">
                Ver todos os tratamentos
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-brand/10 to-brand-light"
              />
              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/60 shadow-float">
                <SmartImage
                  src={treatment.image}
                  alt={`${treatment.title} — Orthodentes`}
                  fallbackLabel={treatment.title}
                  className="h-[360px] w-full object-cover sm:h-[430px] lg:h-[520px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indicações + Benefícios */}
      <section className="bg-brand-light/40 py-16 lg:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="card p-7 sm:p-8">
            <h2 className="text-xl font-bold text-brand sm:text-2xl">
              Para quem é indicado
            </h2>
            <ul className="mt-6 space-y-3.5">
              {treatment.indications.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-[#2b3a55]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-7 sm:p-8">
            <h2 className="text-xl font-bold text-brand sm:text-2xl">
              Benefícios
            </h2>
            <ul className="mt-6 space-y-3.5">
              {treatment.benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D6A84F]/15 text-[#b6842f]">
                    <Star size={13} fill="currentColor" strokeWidth={0} />
                  </span>
                  <span className="text-sm leading-relaxed text-[#2b3a55]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Passo a passo</span>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-brand sm:text-3xl">
              Como funciona
            </h2>
            <p className="mt-4 text-ink">
              Um processo claro e acompanhado de perto, do primeiro contato ao
              resultado final.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatment.steps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-hair bg-white p-6 shadow-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-base font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-brand">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher a Orthodentes */}
      <section className="bg-brand-dark py-16 text-white lg:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-light">
              Diferenciais
            </span>
            <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              Por que escolher a Orthodentes
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              Unimos tecnologia, experiência e um atendimento verdadeiramente
              humano para cuidar de cada detalhe do seu sorriso.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-[#04361a] shadow-soft transition-all hover:brightness-105"
            >
              <MessageCircle size={18} />
              Agendar avaliação
            </a>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {treatment.whyUs.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-light">
                  <Check size={15} strokeWidth={3} />
                </span>
                <span className="text-sm font-medium leading-relaxed text-white/85">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page max-w-3xl">
          <div className="text-center">
            <span className="eyebrow">
              <HelpCircle size={14} />
              Dúvidas frequentes
            </span>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-brand sm:text-3xl">
              Perguntas frequentes
            </h2>
          </div>
          <div className="mt-10">
            <FaqAccordion items={treatment.faq} />
          </div>
        </div>
      </section>

      {/* Outros tratamentos */}
      <section className="bg-brand-light/40 py-16 lg:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Veja também</span>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-brand sm:text-3xl">
                Outros tratamentos
              </h2>
            </div>
            <Link
              href="/tratamentos"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
            >
              Ver todos
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((t) => (
              <Link
                key={t.slug}
                href={`/tratamentos/${t.slug}`}
                className="group card flex items-center gap-4 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand/20 hover:shadow-card"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <t.icon size={22} />
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-brand">{t.title}</span>
                  <span className="mt-0.5 line-clamp-2 text-xs text-ink">
                    {t.short}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
