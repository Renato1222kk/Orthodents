import type { Metadata } from "next";
import { CLINIC, WHATSAPP_URL } from "@/lib/site";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "LGPD",
  description:
    "Compromisso da Orthodentes São João del Rei com a Lei Geral de Proteção de Dados (LGPD): finalidades, base legal e direitos do titular.",
};

export default function LgpdPage() {
  return (
    <>
      <PageHero
        eyebrow="Proteção de dados"
        title="LGPD — Lei Geral de Proteção de Dados"
        description="Nosso compromisso com a privacidade e a proteção dos seus dados pessoais."
        crumbs={[{ label: "LGPD" }]}
      />

      <section className="bg-white py-14 lg:py-16">
        <div className="container-page max-w-3xl">
          <div className="legal-prose">
            <p className="text-sm text-ink">
              Última atualização: junho de 2026.
            </p>

            <h2>1. Nosso compromisso com a LGPD</h2>
            <p>
              A {CLINIC.name} respeita a privacidade dos seus pacientes e
              usuários e atua em conformidade com a Lei Geral de Proteção de
              Dados (Lei nº 13.709/2018). Tratamos os dados pessoais com ética,
              transparência e segurança.
            </p>

            <h2>2. Dados tratados</h2>
            <p>
              Tratamos apenas os dados necessários para o atendimento e a
              prestação dos nossos serviços, como dados de identificação, contato
              e informações relacionadas ao atendimento odontológico, sempre de
              acordo com a finalidade informada.
            </p>

            <h2>3. Finalidades</h2>
            <ul>
              <li>Agendamento e realização de atendimentos e tratamentos.</li>
              <li>Comunicação com o paciente e suporte ao atendimento.</li>
              <li>Cumprimento de obrigações legais e regulatórias.</li>
              <li>Melhoria contínua dos nossos serviços.</li>
            </ul>

            <h2>4. Base legal</h2>
            <p>
              O tratamento de dados é realizado com fundamento nas bases legais
              previstas na LGPD, tais como o consentimento do titular, a execução
              de serviços, o cumprimento de obrigação legal e o legítimo
              interesse, sempre respeitando os direitos do titular.
            </p>

            <h2>5. Direitos do titular</h2>
            <p>Como titular dos dados, você tem direito a:</p>
            <ul>
              <li>Confirmar a existência de tratamento dos seus dados.</li>
              <li>Acessar, corrigir e atualizar seus dados.</li>
              <li>
                Solicitar a anonimização, o bloqueio ou a eliminação de dados
                desnecessários.
              </li>
              <li>
                Revogar o consentimento e solicitar informações sobre o
                tratamento.
              </li>
            </ul>

            <h2>6. Solicitações</h2>
            <p>
              As solicitações relacionadas aos seus dados podem ser feitas pelos
              nossos canais de atendimento. Responderemos dentro dos prazos e
              condições previstos na legislação aplicável.
            </p>

            <h2>7. Segurança da informação</h2>
            <p>
              Adotamos medidas de segurança técnicas e administrativas para
              proteger os dados pessoais contra acessos não autorizados e
              situações de destruição, perda ou alteração.
            </p>

            <h2>8. Canal de contato</h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento
              de dados, entre em contato pelo telefone {CLINIC.phoneDisplay}, pelo{" "}
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
