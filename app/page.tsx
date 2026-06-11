import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarCheck,
  Check,
  Clock,
  Cpu,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import {
  CLINIC,
  MAPS_DIRECTIONS_URL,
  TESTIMONIALS,
  TREATMENTS,
  WHATSAPP_URL,
} from "@/lib/site";
import SmartImage from "@/components/SmartImage";
import SectionTitle from "@/components/SectionTitle";
import TreatmentCard from "@/components/TreatmentCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import MapSection from "@/components/MapSection";

const TRUST = [
  { icon: ShieldCheck, label: "+5 anos", sub: "de experiência" },
  { icon: Users, label: "+6 mil", sub: "pacientes atendidos" },
  { icon: HeartHandshake, label: "Atendimento", sub: "humanizado" },
];

const DIFFERENTIALS = [
  { icon: Award, label: "+5 anos", sub: "de experiência" },
  { icon: Users, label: "+6 mil", sub: "pacientes atendidos" },
  { icon: Cpu, label: "Tecnologia", sub: "avançada" },
  { icon: HeartHandshake, label: "Atendimento", sub: "humanizado" },
];

const STRUCTURE = [
  "Recepção acolhedora",
  "Consultórios modernos",
  "Equipamentos atualizados",
  "Biossegurança rigorosa",
  "Ambiente confortável",
  "Tecnologia odontológica",
];

const ABOUT_POINTS = [
  "Equipe especializada em diversas áreas",
  "Ambiente acolhedor e totalmente higienizado",
  "Planejamento personalizado de cada tratamento",
];

export default function Home() {
  return (
    <>
      {/* 1. HERO COM FUNDO PERSONALIZADO */}
      <section className="relative min-h-[640px] overflow-hidden bg-[#eef6ff] lg:min-h-[700px]">
        {/* Fundo correto da mulher no consultório */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/fundo-hero-orthodentes.png')",
            backgroundPosition: "center right",
          }}
        />

        {/* Overlay para leitura do texto */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/72 to-white/5"
        />

        {/* Brilho azul suave */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl"
        />

        {/* Sombra inferior para transição */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"
        />

        <div className="container-page relative z-10 flex min-h-[640px] items-center py-16 lg:min-h-[700px] lg:py-20">
          <div className="max-w-[620px] animate-fade-up">
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-brand sm:text-5xl lg:text-[4.2rem]">
              O sorriso que{" "}
              <span className="block text-[#1458d4]">
                transforma sua vida!
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink sm:text-lg">
              Cuidado odontológico de excelência para valorizar o que você tem
              de melhor, com tecnologia, conforto e atendimento humanizado.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <CalendarCheck size={18} />
                Agendar avaliação
              </a>

              <Link
                href="/tratamentos"
                className="btn-outline bg-white/80 backdrop-blur"
              >
                Conhecer tratamentos
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {TRUST.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-soft backdrop-blur"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                    <Icon size={18} />
                  </span>

                  <span className="leading-tight">
                    <span className="block text-sm font-bold text-brand">
                      {label}
                    </span>
                    <span className="block text-xs text-ink">{sub}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRATAMENTOS */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="Tratamentos"
            title="Soluções completas para o seu sorriso"
            description="Cuidamos de cada detalhe com tecnologia de ponta e uma equipe especializada em todas as áreas da odontologia."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TREATMENTS.map((t) => (
              <TreatmentCard key={t.slug} treatment={t} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/tratamentos" className="btn-primary">
              Ver todos os tratamentos
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. DIFERENCIAIS */}
      <section className="bg-brand-dark py-3">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-brand-dark py-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,242,255,0.08),transparent_55%)]"
            />

            <div className="relative grid grid-cols-2 gap-6 lg:grid-cols-4">
              {DIFFERENTIALS.map(({ icon: Icon, label, sub }, i) => (
                <div
                  key={label}
                  className={`flex items-center justify-center gap-3 px-2 text-white lg:px-4 ${
                    i !== 0 ? "lg:border-l lg:border-white/10" : ""
                  }`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-brand-light">
                    <Icon size={22} />
                  </span>

                  <span className="leading-tight">
                    <span className="block text-lg font-extrabold">
                      {label}
                    </span>
                    <span className="block text-xs text-white/65">{sub}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOBRE */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <span className="eyebrow">Sobre nós</span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-brand sm:text-4xl">
              Referência em odontologia em São João del Rei
            </h2>

            <p className="mt-5 leading-relaxed text-ink">
              A Orthodentes nasceu para oferecer uma experiência odontológica
              completa, unindo profissionais experientes, equipamentos modernos
              e um atendimento próximo e humano. Cada paciente é tratado de
              forma única, do primeiro contato ao resultado final.
            </p>

            <ul className="mt-6 space-y-3">
              {ABOUT_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-sm text-[#2b3a55]">{p}</span>
                </li>
              ))}
            </ul>

            <Link href="/sobre" className="btn-primary mt-8">
              Conheça a Orthodentes
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
            <div className="col-span-2 overflow-hidden rounded-3xl border border-hair shadow-card">
              <SmartImage
                src="/tratamentos/consultorio.jpg"
                alt="Recepção da clínica Orthodentes"
                fallbackLabel="Recepção"
                className="h-52 w-full object-cover sm:h-60"
              />
            </div>

            <div className="overflow-hidden rounded-3xl border border-hair shadow-soft">
              <SmartImage
                src="/tratamentos/clinico.jpg"
                alt="Equipe odontológica em atendimento"
                fallbackLabel="Equipe"
                className="h-44 w-full object-cover sm:h-52"
              />
            </div>

            <div className="overflow-hidden rounded-3xl border border-hair shadow-soft">
              <SmartImage
                src="/tratamentos/cadeira.jpg"
                alt="Sala de atendimento odontológico equipada"
                fallbackLabel="Consultório"
                className="h-44 w-full object-cover sm:h-52"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. ESTRUTURA */}
      <section className="bg-brand-light/40 py-16 lg:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-hair shadow-card">
              <SmartImage
                src="/tratamentos/consultorio.jpg"
                alt="Estrutura e consultório da Orthodentes"
                fallbackLabel="Estrutura"
                className="h-[320px] w-full object-cover sm:h-[420px]"
              />
            </div>

            <div className="absolute -bottom-5 left-5 rounded-2xl border border-hair bg-white px-5 py-4 shadow-float">
              <p className="text-2xl font-extrabold text-brand">100%</p>
              <p className="text-xs text-ink">biossegurança e conforto</p>
            </div>
          </div>

          <div>
            <span className="eyebrow">Estrutura</span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-brand sm:text-4xl">
              Um ambiente pensado para o seu conforto
            </h2>

            <p className="mt-5 leading-relaxed text-ink">
              Da recepção ao consultório, cada espaço foi planejado para
              oferecer segurança, conforto e a melhor experiência durante o seu
              atendimento.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {STRUCTURE.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-2.5 rounded-xl border border-hair bg-white px-4 py-3"
                >
                  <Check
                    size={16}
                    className="shrink-0 text-brand"
                    strokeWidth={3}
                  />
                  <span className="text-sm font-medium text-[#2b3a55]">
                    {s}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/estrutura" className="btn-primary mt-8">
              Conhecer nossa estrutura
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. DEPOIMENTOS */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="Depoimentos"
            title="Nossos pacientes recomendam!"
            description="Histórias reais de quem transformou o sorriso com a Orthodentes."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/depoimentos" className="btn-outline">
              Ver mais depoimentos
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <CTASection />

      {/* 8. LOCALIZAÇÃO */}
      <section className="bg-brand-light/40 py-16 lg:py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="Localização"
            title="Venha nos visitar"
            description="Estamos em São João del Rei, prontos para receber você com todo cuidado."
            align="left"
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 rounded-2xl border border-hair bg-white p-5 shadow-soft">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <MapPin size={20} />
                </span>

                <div>
                  <p className="text-sm font-bold text-brand">Endereço</p>
                  <p className="mt-0.5 text-sm text-ink">{CLINIC.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-hair bg-white p-5 shadow-soft">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <Phone size={20} />
                </span>

                <div>
                  <p className="text-sm font-bold text-brand">
                    Telefone / WhatsApp
                  </p>
                  <a
                    href={`tel:${CLINIC.phoneTel}`}
                    className="mt-0.5 block text-sm text-ink hover:text-brand"
                  >
                    {CLINIC.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-hair bg-white p-5 shadow-soft">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <Clock size={20} />
                </span>

                <div>
                  <p className="text-sm font-bold text-brand">Horário</p>
                  {CLINIC.hours.map((h) => (
                    <p key={h.day} className="mt-0.5 text-sm text-ink">
                      {h.day}: {h.time}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/contato" className="btn-primary w-full sm:w-auto">
                  <Stethoscope size={18} />
                  Página de contato
                </Link>

                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full sm:w-auto"
                >
                  <MapPin size={18} />
                  Ver rota
                </a>
              </div>
            </div>

            <MapSection height={420} />
          </div>
        </div>
      </section>
    </>
  );
}