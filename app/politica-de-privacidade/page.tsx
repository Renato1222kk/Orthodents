import type { Metadata } from "next";
import { CLINIC, WHATSAPP_URL } from "@/lib/site";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da Orthodentes São João del Rei: como coletamos, usamos e protegemos os seus dados pessoais.",
};

export default function PoliticaPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Política de Privacidade"
        description="Sua privacidade é importante para nós. Saiba como tratamos as suas informações."
        crumbs={[{ label: "Política de Privacidade" }]}
      />

      <section className="bg-white py-14 lg:py-16">
        <div className="container-page max-w-3xl">
          <div className="legal-prose">
            <p className="text-sm text-ink">
              Última atualização: junho de 2026.
            </p>

            <h2>1. Introdução</h2>
            <p>
              Esta Política de Privacidade descreve como a {CLINIC.name} coleta,
              utiliza, armazena e protege as informações dos usuários que acessam
              o nosso site e os nossos canais de atendimento. Ao utilizar nossos
              serviços, você concorda com as práticas descritas neste documento.
            </p>

            <h2>2. Dados coletados</h2>
            <p>Podemos coletar as seguintes informações:</p>
            <ul>
              <li>
                Dados de identificação e contato, como nome, telefone e e-mail,
                fornecidos voluntariamente por você.
              </li>
              <li>
                Informações enviadas em mensagens pelos canais de contato, como
                WhatsApp e redes sociais.
              </li>
              <li>
                Dados de navegação, como páginas acessadas e informações
                técnicas do dispositivo, por meio de cookies e ferramentas
                similares.
              </li>
            </ul>

            <h2>3. Uso das informações</h2>
            <p>Utilizamos os dados coletados para:</p>
            <ul>
              <li>Responder a solicitações, dúvidas e agendamentos.</li>
              <li>Realizar e acompanhar atendimentos e tratamentos.</li>
              <li>Melhorar a experiência de navegação e os nossos serviços.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h2>4. Compartilhamento</h2>
            <p>
              A {CLINIC.shortName} não vende nem comercializa dados pessoais. As
              informações poderão ser compartilhadas apenas quando necessário
              para a prestação do serviço, com prestadores que atuam em nosso
              nome, ou para cumprimento de obrigações legais.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Nosso site pode utilizar cookies para melhorar a navegação,
              entender o uso das páginas e oferecer uma experiência mais
              adequada. Você pode gerenciar o uso de cookies nas configurações do
              seu navegador.
            </p>

            <h2>6. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger os dados
              contra acesso não autorizado, perda, alteração ou divulgação
              indevida. Apesar dos esforços, nenhum sistema é totalmente
              imune a riscos.
            </p>

            <h2>7. Direitos do usuário</h2>
            <p>
              Você pode solicitar, a qualquer momento, o acesso, a correção, a
              atualização ou a exclusão dos seus dados pessoais, bem como
              informações sobre o tratamento realizado.
            </p>

            <h2>8. Contato</h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta
              política, entre em contato pelo telefone {CLINIC.phoneDisplay}, pelo{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>{" "}
              ou pelo e-mail {CLINIC.email}.
            </p>

            <h2>9. Atualizações desta política</h2>
            <p>
              Esta Política de Privacidade poderá ser atualizada periodicamente.
              Recomendamos a consulta regular a esta página para acompanhar
              eventuais alterações.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
