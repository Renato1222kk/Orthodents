import type { Metadata } from "next";
import { CLINIC, WHATSAPP_URL } from "@/lib/site";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso do site da Orthodentes São João del Rei: condições de utilização, informações de saúde, limitações e propriedade intelectual.",
};

export default function TermosPage() {
  return (
    <>
      <PageHero
        eyebrow="Termos"
        title="Termos de Uso"
        description="Condições para a utilização do site e dos canais da Orthodentes São João del Rei."
        crumbs={[{ label: "Termos de Uso" }]}
      />

      <section className="bg-white py-14 lg:py-16">
        <div className="container-page max-w-3xl">
          <div className="legal-prose">
            <p className="text-sm text-ink">
              Última atualização: junho de 2026.
            </p>

            <h2>1. Aceitação dos termos</h2>
            <p>
              Ao acessar e utilizar o site da {CLINIC.name}, você concorda com
              estes Termos de Uso. Caso não concorde com as condições aqui
              descritas, recomendamos que não utilize o site.
            </p>

            <h2>2. Uso do site</h2>
            <p>
              O site tem caráter informativo e institucional, com o objetivo de
              apresentar a clínica, os tratamentos e os canais de contato. O
              usuário compromete-se a utilizá-lo de forma adequada, respeitando a
              legislação vigente e os direitos de terceiros.
            </p>

            <h2>3. Informações de saúde</h2>
            <p>
              Os conteúdos sobre tratamentos têm finalidade exclusivamente
              informativa e não substituem uma consulta, avaliação ou diagnóstico
              profissional. Cada caso é único e deve ser avaliado individualmente
              por um cirurgião-dentista.
            </p>

            <h2>4. Limitações de responsabilidade</h2>
            <p>
              Empenhamo-nos para manter as informações do site corretas e
              atualizadas, mas não garantimos que estejam totalmente livres de
              erros ou desatualizações. A {CLINIC.shortName} não se responsabiliza
              por decisões tomadas exclusivamente com base no conteúdo do site.
            </p>

            <h2>5. Links externos</h2>
            <p>
              O site pode conter links para páginas e redes sociais de terceiros,
              como o Instagram e o WhatsApp. Não nos responsabilizamos pelo
              conteúdo, pelas práticas ou pelas políticas desses serviços
              externos.
            </p>

            <h2>6. Propriedade intelectual</h2>
            <p>
              A marca, o logotipo, os textos, as imagens e os demais elementos do
              site são protegidos e pertencem à {CLINIC.shortName} ou a seus
              respectivos titulares. É vedada a reprodução sem autorização prévia.
            </p>

            <h2>7. Alterações</h2>
            <p>
              Estes Termos de Uso podem ser atualizados a qualquer momento, sem
              aviso prévio. Recomendamos a consulta periódica a esta página para
              acompanhar eventuais mudanças.
            </p>

            <h2>8. Contato</h2>
            <p>
              Em caso de dúvidas sobre estes Termos de Uso, entre em contato pelo
              telefone {CLINIC.phoneDisplay}, pelo{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>{" "}
              ou pelo e-mail {CLINIC.email}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
