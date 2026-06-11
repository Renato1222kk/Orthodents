import type { Metadata } from "next";
import { getTreatment } from "@/lib/site";
import TreatmentPageTemplate from "@/components/TreatmentPageTemplate";

const treatment = getTreatment("protese-e-implantes")!;

export const metadata: Metadata = {
  title: `${treatment.title} em São João del Rei`,
  description: treatment.short,
  keywords: [
    "implantes dentários São João del Rei",
    "prótese dentária",
    "reabilitação oral",
    "Orthodentes",
  ],
  openGraph: { title: treatment.title, description: treatment.short },
};

export default function Page() {
  return <TreatmentPageTemplate treatment={treatment} />;
}
