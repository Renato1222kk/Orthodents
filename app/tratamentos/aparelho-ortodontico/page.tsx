import type { Metadata } from "next";
import { getTreatment } from "@/lib/site";
import TreatmentPageTemplate from "@/components/TreatmentPageTemplate";

const treatment = getTreatment("aparelho-ortodontico")!;

export const metadata: Metadata = {
  title: `${treatment.title} em São João del Rei`,
  description: treatment.short,
  keywords: [
    "aparelho ortodôntico São João del Rei",
    "ortodontia",
    "alinhamento dental",
    "Orthodentes",
  ],
  openGraph: { title: treatment.title, description: treatment.short },
};

export default function Page() {
  return <TreatmentPageTemplate treatment={treatment} />;
}
