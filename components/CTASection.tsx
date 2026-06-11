import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

type CTASectionProps = {
  title?: string;
  description?: string;
  /** Texto do botão secundário */
  secondaryLabel?: string;
  /** Link do botão secundário (rota interna) */
  secondaryHref?: string;
};

export default function CTASection({
  title = "Pronto para transformar seu sorriso?",
  description = "Agende sua avaliação e descubra o tratamento ideal para você. Nossa equipe está pronta para te receber com todo cuidado e atenção.",
  secondaryLabel = "Ver tratamentos",
  secondaryHref = "/tratamentos",
}: CTASectionProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-brand-dark px-6 py-14 text-center shadow-float sm:px-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-brand/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-brand/30 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-light">
              Vamos começar?
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              {description}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-[#04361a] shadow-soft transition-all hover:brightness-105 sm:w-auto"
              >
                <MessageCircle size={18} />
                Agendar pelo WhatsApp
              </a>
              <Link
                href={secondaryHref}
                className="btn-ghost-light w-full sm:w-auto"
              >
                {secondaryLabel}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
