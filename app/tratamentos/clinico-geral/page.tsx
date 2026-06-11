import type { Metadata } from "next";
import { getTreatment } from "@/lib/site";
import TreatmentPageTemplate from "@/components/TreatmentPageTemplate";

const treatment = getTreatment("clinico-geral")!;

export const metadata: Metadata = {
  title: `${treatment.title} em São João del Rei`,
  description: treatment.short,
  keywords: [
    "clínico geral odontológico",
    "limpeza dental São João del Rei",
    "prevenção bucal",
    "Orthodentes",
  ],
  openGraph: { title: treatment.title, description: treatment.short },
};

export default function Page() {
  return <TreatmentPageTemplate treatment={treatment} />;
}
