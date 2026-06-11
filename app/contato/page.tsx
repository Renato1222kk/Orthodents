import type { Metadata } from "next";
import { Clock, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  CLINIC,
  MAPS_DIRECTIONS_URL,
  WHATSAPP_URL,
} from "@/lib/site";
import PageHero from "@/components/PageHero";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "Contato e Localização",
  description:
    "Fale com a Orthodentes São João del Rei. WhatsApp, Instagram, telefone, endereço em Matozinhos e horário de atendimento. Agende sua avaliação.",
  keywords: [
    "contato Orthodentes",
    "dentista São João del Rei contato",
    "clínica odontológica Matozinhos",
  ],
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos cuidar do seu sorriso?"
        description="Estamos prontos para te atender. Fale com a gente pelo WhatsApp, Instagram ou telefone, ou venha nos visitar em Matozinhos."
        crumbs={[{ label: "Contato" }]}
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Informações */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-brand">
              Informações de atendimento
            </h2>
            <p className="mt-3 leading-relaxed text-ink">
              Entre em contato pelo canal de sua preferência. Será um prazer
              receber você.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-hair bg-white p-5 shadow-soft">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand">Endereço</p>
                  <p className="mt-0.5 text-sm text-ink">{CLINIC.address}</p>
                  <a
                    href={MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-semibold text-brand hover:text-brand-dark"
                  >
                    Ver rota no Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-hair bg-white p-5 shadow-soft">
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

              <div className="flex items-start gap-4 rounded-2xl border border-hair bg-white p-5 shadow-soft">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <Instagram size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand">Instagram</p>
                  <a
                    href={CLINIC.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block text-sm text-ink hover:text-brand"
                  >
                    {CLINIC.instagramHandle}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-hair bg-white p-5 shadow-soft">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <Clock size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand">
                    Horário de funcionamento
                  </p>
                  {CLINIC.hours.map((h) => (
                    <p key={h.day} className="mt-0.5 text-sm text-ink">
                      {h.day}: {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Botões */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <MessageCircle size={18} />
                Chamar no WhatsApp
              </a>
              <a
                href={CLINIC.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full"
              >
                <Instagram size={18} />
                Abrir Instagram
              </a>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full sm:col-span-2"
              >
                <MapPin size={18} />
                Ver rota no Google Maps
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className="lg:pt-2">
            <MapSection height={520} />
          </div>
        </div>
      </section>
    </>
  );
}
