import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Eye,
  Gem,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import PageHero from "@/components/PageHero";
import SmartImage from "@/components/SmartImage";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Sobre a Orthodentes",
  description:
    "Conheça a Orthodentes São João del Rei: nossa história, missão, visão, valores e o compromisso com um atendimento humanizado e tecnológico.",
  keywords: [
    "sobre Orthodentes",
    "clínica odontológica São João del Rei",
    "dentista São João del Rei",
  ],
};

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Cuidado humano",
    desc: "Atendimento próximo, acolhedor e atento a cada paciente.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    desc: "Protocolos rigorosos de biossegurança em todos os atendimentos.",
  },
  {
    icon: Gem,
    title: "Excelência",
    desc: "Compromisso com resultados naturais, bonitos e duradouros.",
  },
  {
    icon: Cpu,
    title: "Tecnologia",
    desc: "Equipamentos modernos para diagnósticos e tratamentos precisos.",
  },
];

const DIFFERENTIALS = [
  "+5 anos de experiência em São João del Rei",
  "+6 mil pacientes atendidos com confiança",
  "Equipe especializada em diversas áreas",
  "Planejamento personalizado para cada sorriso",
  "Ambiente acolhedor e totalmente higienizado",
  "Atendimento humanizado do início ao fim",
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        title="Referência em odontologia em São João del Rei"
        description="Mais do que tratar dentes, cuidamos de pessoas. Conheça a história e os valores que fazem da Orthodentes uma clínica de confiança."
        crumbs={[{ label: "Sobre" }]}
      />

      {/* História */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="eyebrow">
              <Sparkles size={14} />
              Nossa história
            </span>
            <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-brand sm:text-3xl">
              Uma clínica feita para cuidar do seu sorriso
            </h2>
            <p className="mt-5 leading-relaxed text-ink">
              A Orthodentes nasceu com o propósito de oferecer uma experiência
              odontológica completa em São João del Rei, unindo profissionais
              experientes, tecnologia moderna e um atendimento verdadeiramente
              humano.
            </p>
            <p className="mt-4 leading-relaxed text-ink">
              Ao longo dos anos, construímos uma relação de confiança com
              milhares de pacientes, sempre com um cuidado próximo e
              personalizado. Cada sorriso é único, e é assim que tratamos cada
              pessoa que passa por aqui.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-7"
            >
              Agende sua avaliação
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-3xl border border-hair shadow-card">
              <SmartImage
                src="/tratamentos/consultorio.jpg"
                alt="Recepção e ambiente da Orthodentes"
                fallbackLabel="Orthodentes"
                className="h-56 w-full object-cover sm:h-64"
              />
            </div>
            <div className="overflow-hidden rounded-3xl border border-hair shadow-soft">
              <SmartImage
                src="/tratamentos/clinico.jpg"
                alt="Equipe Orthodentes em atendimento"
                fallbackLabel="Equipe"
                className="h-40 w-full object-cover sm:h-48"
              />
            </div>
            <div className="overflow-hidden rounded-3xl border border-hair shadow-soft">
              <SmartImage
                src="/tratamentos/cadeira.jpg"
                alt="Consultório equipado da Orthodentes"
                fallbackLabel="Consultório"
                className="h-40 w-full object-cover sm:h-48"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="bg-brand-light/40 py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="card p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                <Target size={24} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand">Missão</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                Promover saúde bucal e sorrisos saudáveis com excelência,
                tecnologia e um atendimento humano que faça cada paciente se
                sentir bem cuidado.
              </p>
            </div>
            <div className="card p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                <Eye size={24} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand">Visão</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                Ser uma referência em odontologia em São João del Rei e região,
                reconhecida pela qualidade, confiança e cuidado com cada sorriso.
              </p>
            </div>
            <div className="card p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                <HeartHandshake size={24} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand">Valores</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                Ética, respeito, cuidado, segurança e dedicação. Acreditamos em
                relações de confiança e em um atendimento sempre próximo e
                transparente.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-hair bg-white p-6 shadow-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <Icon size={22} />
                </span>
                <h4 className="mt-4 text-base font-bold text-brand">{title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-ink">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atendimento humanizado + diferenciais */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative order-1">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-brand/10 to-brand-light"
            />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/60 shadow-float">
              <SmartImage
                src="/tratamentos/clareamento.jpg"
                alt="Atendimento humanizado na Orthodentes"
                fallbackLabel="Atendimento humanizado"
                className="h-[320px] w-full object-cover sm:h-[440px]"
              />
            </div>
          </div>

          <div className="order-2">
            <span className="eyebrow">
              <Users size={14} />
              Atendimento humanizado
            </span>
            <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-brand sm:text-3xl">
              Tecnologia com um toque humano
            </h2>
            <p className="mt-5 leading-relaxed text-ink">
              Unimos equipamentos modernos a um atendimento acolhedor, porque
              acreditamos que cuidar bem do sorriso começa por cuidar bem das
              pessoas. Aqui, você é ouvido, orientado e acompanhado em cada
              etapa.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {DIFFERENTIALS.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2.5 rounded-xl border border-hair bg-white px-4 py-3"
                >
                  <Sparkles size={16} className="mt-0.5 shrink-0 text-[#D6A84F]" />
                  <span className="text-sm text-[#2b3a55]">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
