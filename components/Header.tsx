"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, Clock, MapPin, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { CLINIC, NAV, WHATSAPP_URL } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Fecha o menu ao trocar de rota
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar azul escuro */}
      <div className="bg-brand-dark text-white">
        <div className="container-page flex h-10 items-center justify-between gap-4 text-[12px]">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="shrink-0 text-brand-light/80" />
              <span className="hidden sm:inline">{CLINIC.address}</span>
              <span className="sm:hidden">{CLINIC.addressShort}</span>
            </span>
            <span className="hidden items-center gap-1.5 lg:flex">
              <Clock size={13} className="shrink-0 text-brand-light/80" />
              Seg a Sex 09h–19h · Sáb 09h–13h
            </span>
          </div>
          <a
            href={`tel:${CLINIC.phoneTel}`}
            className="flex items-center gap-1.5 font-medium transition-colors hover:text-brand-light"
          >
            <Phone size={13} className="shrink-0 text-brand-light/80" />
            {CLINIC.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Header branco principal */}
      <div className="border-b border-hair bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container-page flex h-[68px] items-center justify-between gap-4">
          <Logo />

          {/* Navegação desktop */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-brand-light text-brand"
                    : "text-[#2b3a55] hover:bg-brand-light hover:text-brand"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden sm:inline-flex"
            >
              <CalendarCheck size={16} />
              Agendar avaliação
            </a>

            {/* Botão hamburguer */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-hair text-brand transition-colors hover:bg-brand-light lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="lg:hidden">
          <div className="absolute inset-x-0 top-full origin-top animate-fade-up border-b border-hair bg-white shadow-card">
            <div className="container-page max-h-[calc(100vh-108px)] overflow-y-auto py-4">
              <div className="mb-3 flex items-center gap-3 rounded-2xl bg-brand-light/60 px-4 py-3">
                <Logo size={40} iconOnly />
                <div className="leading-tight">
                  <p className="text-sm font-bold text-brand">
                    Orthodentes São João del Rei
                  </p>
                  <p className="text-xs text-ink">Clínica odontológica</p>
                </div>
              </div>

              <nav className="flex flex-col">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-brand-light text-brand"
                        : "text-[#2b3a55] hover:bg-brand-light hover:text-brand"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary mt-3 w-full"
              >
                <CalendarCheck size={16} />
                Agendar avaliação
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
