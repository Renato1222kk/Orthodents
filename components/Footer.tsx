import Link from "next/link";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "./Logo";
import { CLINIC, NAV, TREATMENTS, WHATSAPP_URL } from "@/lib/site";

const LEGAL = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "LGPD", href: "/lgpd" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Tecnologia, cuidado e conforto para transformar o seu sorriso em{" "}
              {CLINIC.city}. Atendimento humanizado e personalizado para toda a
              família.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={CLINIC.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Orthodentes"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <Instagram size={17} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Orthodentes"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
              Links rápidos
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/65 transition-colors hover:text-brand-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tratamentos */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
              Tratamentos
            </h3>
            <ul className="mt-4 space-y-2.5">
              {TREATMENTS.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/tratamentos/${t.slug}`}
                    className="text-sm text-white/65 transition-colors hover:text-brand-light"
                  >
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato / localização */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-light" />
                {CLINIC.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-brand-light" />
                <a
                  href={`tel:${CLINIC.phoneTel}`}
                  className="hover:text-brand-light"
                >
                  {CLINIC.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram size={16} className="shrink-0 text-brand-light" />
                <a
                  href={CLINIC.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-light"
                >
                  {CLINIC.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="mt-0.5 shrink-0 text-brand-light" />
                <span>
                  {CLINIC.hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/55 sm:flex-row">
          <p>
            © {2026} {CLINIC.name}. Todos os direitos reservados.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {LEGAL.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-brand-light"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
