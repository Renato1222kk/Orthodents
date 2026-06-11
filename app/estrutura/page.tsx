import type { Metadata } from "next";
import {
  Armchair,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Wifi,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SmartImage from "@/components/SmartImage";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Nossa Estrutura",
  description:
    "Conheça a estrutura da Orthodentes São João del Rei: recepção acolhedora, consultórios modernos, equipamentos atualizados, biossegurança e muito conforto.",
  keywords: [
    "estrutura clínica odontológica",
    "consultório odontológico São João del Rei",
    "biossegurança odontológica",
    "Orthodentes",
  ],
};

const FEATURES = [
  {
    icon: Armchair,
    title: "Recepção acolhedora",
    desc: "Um espaço confortável e tranquilo para receber você desde a chegada.",
  },
  {
    icon: Stethoscope,
    title: "Consultórios modernos",
    desc: "Ambientes equipados e preparados para um atendimento de qualidade.",
  },
  {
    icon: Wifi,
    title: "Equipamentos atualizados",
    desc: "Tecnologia que torna os tratamentos mais precisos e confortáveis.",
  },
  {
    icon: ShieldCheck,
    title: "Biossegurança rigorosa",
    desc: "Protocolos rígidos de higienização e esterilização em cada etapa.",
  },
  {
    icon: HeartHandshake,
    title: "Conforto em primeiro lugar",
    desc: "Cada detalhe pensado para uma experiência leve e segura.",
  },
  {
    icon: Sparkles,
    title: "Tecnologia odontológica",
    desc: "Recursos modernos a favor da saúde e da estética do seu sorriso.",
  },
];

const GALLERY = [
  {
    src: "/tratamentos/cadeira.jpg",
    alt: "Consultório odontológico moderno",
    label: "Consultório",
    span: "sm:col-span-2 sm:row-span-2",
    h: "h-64 sm:h-full",
  },
  {
    src: "/tratamentos/consultorio.jpg",
    alt: "Recepção da clínica",
    label: "Recepção",
    span: "",
    h: "h-44 sm:h-56",
  },
  {
    src: "/tratamentos/protese.jpg",
    alt: "Equipamentos odontológicos",
    label: "Equipamentos",
    span: "",
    h: "h-44 sm:h-56",
  },
  {
    src: "/tratamentos/clinico.jpg",
    alt: "Atendimento odontológico",
    label: "Atendimento",
    span: "",
    h: "h-44 sm:h-56",
  },
  {
    src: "/tratamentos/cirurgias.jpg",
    alt: "Sala de procedimentos",
    label: "Biossegurança",
    span: "",
    h: "h-44 sm:h-56",
  },
];

export default function EstruturaPage() {
  return (
    <>
      <PageHero
        eyebrow="Estrutura"
        title="Um ambiente moderno, seguro e acolhedor"
        description="Cada espaço da Orthodentes foi planejado para oferecer conforto, segurança e a melhor experiência durante o seu atendimento."
        crumbs={[{ label: "Estrutura" }]}
      />

      {/* Galeria */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <div className="grid auto-rows-[1fr] grid-cols-1 gap-4 sm:grid-cols-3">
            {GALLERY.map((g) => (
              <figure
                key={g.label}
                className={`group relative overflow-hidden rounded-3xl border border-hair shadow-soft ${g.span}`}
              >
                <SmartImage
                  src={g.src}
                  alt={g.alt}
                  fallbackLabel={g.label}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${g.h}`}
                />
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-brand-dark/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {g.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="bg-brand-light/40 py-16 lg:py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="O que oferecemos"
            title="Tudo pensado no seu conforto e segurança"
            description="Da recepção ao consultório, reunimos estrutura, tecnologia e cuidado em cada detalhe."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-hair bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-brand">
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 text-base font-bold text-brand">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection secondaryLabel="Conhecer tratamentos" secondaryHref="/tratamentos" />
    </>
  );
}
