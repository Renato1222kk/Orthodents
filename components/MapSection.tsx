import { MapPin } from "lucide-react";
import { CLINIC, MAPS_EMBED_URL } from "@/lib/site";

type MapSectionProps = {
  height?: number;
  rounded?: boolean;
};

export default function MapSection({
  height = 420,
  rounded = true,
}: MapSectionProps) {
  return (
    <div
      className={`overflow-hidden border border-hair shadow-card ${
        rounded ? "rounded-[2rem]" : ""
      }`}
    >
      <div className="flex items-center gap-2.5 bg-white px-5 py-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-light text-brand">
          <MapPin size={18} />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-bold text-brand">{CLINIC.shortName}</p>
          <p className="text-xs text-ink">{CLINIC.address}</p>
        </div>
      </div>
      <iframe
        title={`Mapa — ${CLINIC.name}`}
        src={MAPS_EMBED_URL}
        width="100%"
        height={height}
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
