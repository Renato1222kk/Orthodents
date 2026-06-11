import type { Metadata } from "next";
import { getTreatment } from "@/lib/site";
import TreatmentPageTemplate from "@/components/TreatmentPageTemplate";

const treatment = getTreatment("estetica-dental")!;

export const metadata: Metadata = {
  title: `${treatment.title} em São João del Rei`,
  description: treatment.short,
  keywords: [
    "estética dental São João del Rei",
    "facetas dentárias",
    "lente de contato dental",
    "Orthodentes",
  ],
  openGraph: { title: treatment.title, description: treatment.short },
};

export default function Page() {
  return <TreatmentPageTemplate treatment={treatment} />;
}
