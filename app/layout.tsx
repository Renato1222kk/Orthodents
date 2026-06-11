import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orthodents-hazel.vercel.app"),
  title: {
    default: "Orthodentes São João del Rei — Clínica Odontológica",
    template: "%s | Orthodentes São João del Rei",
  },
  description:
    "Tecnologia, cuidado e atendimento humanizado para transformar o seu sorriso.",
  keywords: [
    "dentista em São João del Rei",
    "Orthodentes",
    "clínica odontológica",
    "implantes dentários",
    "aparelho ortodôntico",
    "clareamento dental",
    "estética dental",
    "odontologia São João del Rei",
  ],
  authors: [{ name: "Orthodentes São João del Rei" }],
  icons: {
    icon: "/orthodentes.png",
    shortcut: "/orthodentes.png",
    apple: "/orthodentes.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://orthodents-hazel.vercel.app",
    siteName: "Orthodentes São João del Rei",
    title: "Orthodentes São João del Rei — Clínica Odontológica",
    description:
      "Tecnologia, cuidado e atendimento humanizado para transformar o seu sorriso.",
    images: [
      {
        url: "/og-orthodentes.png",
        width: 1200,
        height: 630,
        alt: "Orthodentes São João del Rei — Clínica Odontológica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orthodentes São João del Rei — Clínica Odontológica",
    description:
      "Tecnologia, cuidado e atendimento humanizado para transformar o seu sorriso.",
    images: ["/og-orthodentes.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
