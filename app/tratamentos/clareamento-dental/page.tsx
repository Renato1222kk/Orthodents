import type { Metadata } from "next";
import { getTreatment } from "@/lib/site";
import TreatmentPageTemplate from "@/components/TreatmentPageTemplate";

const treatment = getTreatment("clareamento-dental")!;

export const metadata: Metadata = {
  title: `${treatment.title} em São João del Rei`,
  description: treatment.short,
  keywords: [
    "clareamento dental São João del Rei",
    "clareamento de dentes",
    "sorriso branco",
    "Orthodentes",
  ],
  openGraph: { title: treatment.title, description: treatment.short },
};

export default function Page() {
  return <TreatmentPageTemplate treatment={treatment} />;
}
