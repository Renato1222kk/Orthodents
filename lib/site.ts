import type { LucideIcon } from "lucide-react";
import {
  Anchor,
  Smile,
  Stethoscope,
  Sparkles,
  Syringe,
  Gem,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Dados institucionais da Orthodentes São João del Rei                       */
/* -------------------------------------------------------------------------- */

export const CLINIC = {
  name: "Orthodentes São João del Rei",
  shortName: "Orthodentes",
  city: "São João del Rei",
  state: "MG",
  address: "Av. Josué de Queirós, 381 - Matozinhos, São João del Rei - MG",
  addressShort: "Matozinhos, São João del Rei/MG",
  phoneDisplay: "(32) 99860-4323",
  phoneTel: "+5532998604323",
  whatsappNumber: "5532998604323",
  instagram: "https://www.instagram.com/clinicaorthodentessjdr/",
  instagramHandle: "@clinicaorthodentessjdr",
  email: "contato@orthodentes.com.br",
  hours: [
    { day: "Segunda a sexta", time: "09:00h às 19:00h" },
    { day: "Sábado", time: "09:00h às 13:00h" },
  ],
} as const;

export const WHATSAPP_DEFAULT_TEXT =
  "Olá, vim pelo site da Orthodentes e gostaria de agendar uma avaliação.";

export function whatsappLink(text: string = WHATSAPP_DEFAULT_TEXT) {
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(
    text
  )}`;
}

export const WHATSAPP_URL = whatsappLink();

export const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Av.%20Josu%C3%A9%20de%20Queir%C3%B3s%2C%20381%20-%20Matozinhos%2C%20S%C3%A3o%20Jo%C3%A3o%20del%20Rei%20-%20MG&output=embed";

export const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(CLINIC.address);

/* -------------------------------------------------------------------------- */
/*  Navegação                                                                  */
/* -------------------------------------------------------------------------- */

export const NAV = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Tratamentos", href: "/tratamentos" },
  { label: "Estrutura", href: "/estrutura" },
  { label: "Depoimentos", href: "/depoimentos" },
  { label: "Contato", href: "/contato" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Tratamentos                                                                */
/* -------------------------------------------------------------------------- */

export type FAQ = { q: string; a: string };

export type Treatment = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  image: string;
  hero: string;
  intro: string;
  whatIs: string;
  indications: string[];
  benefits: string[];
  steps: { title: string; desc: string }[];
  whyUs: string[];
  faq: FAQ[];
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "protese-e-implantes",
    title: "Prótese e Implantes",
    short:
      "Reabilitação oral completa com implantes seguros e próteses de aparência natural.",
    icon: Anchor,
    image: "/tratamentos/protese.jpg",
    hero: "Recupere a função e a beleza do seu sorriso com reabilitação oral planejada e personalizada.",
    intro:
      "A perda de um ou mais dentes afeta a mastigação, a fala e a autoestima. Com prótese e implantes, devolvemos a você um sorriso completo, funcional e com aparência totalmente natural.",
    whatIs:
      "Implantes dentários são pinos de titânio fixados ao osso que substituem a raiz do dente perdido, servindo de base para coroas e próteses fixas. As próteses, por sua vez, reconstroem a parte visível do dente — sozinhas ou sobre implantes — recuperando a estética e a função da arcada.",
    indications: [
      "Pessoas que perderam um ou mais dentes",
      "Pacientes que usam próteses removíveis e desejam mais conforto",
      "Quem busca melhorar a mastigação e a fala",
      "Reabilitação de toda a arcada com próteses fixas",
      "Quem deseja recuperar a autoestima e o sorriso",
    ],
    benefits: [
      "Recuperação do sorriso e da autoconfiança",
      "Mastigação eficiente e confortável",
      "Aparência natural e duradoura",
      "Preservação do osso e dos dentes vizinhos",
      "Planejamento personalizado para cada caso",
    ],
    steps: [
      {
        title: "Avaliação e planejamento",
        desc: "Exame clínico, radiográfico e digital para definir o melhor tratamento.",
      },
      {
        title: "Instalação do implante",
        desc: "Procedimento seguro e minimamente invasivo, com todo conforto.",
      },
      {
        title: "Cicatrização",
        desc: "Período em que o implante se integra ao osso (osseointegração).",
      },
      {
        title: "Prótese definitiva",
        desc: "Confecção e instalação da coroa ou prótese com encaixe perfeito.",
      },
    ],
    whyUs: [
      "Planejamento digital e personalizado",
      "Materiais de alta qualidade e biocompatíveis",
      "Equipe experiente em reabilitação oral",
      "Acompanhamento em todas as etapas",
    ],
    faq: [
      {
        q: "O implante dói?",
        a: "O procedimento é realizado com anestesia local e técnicas modernas, sendo muito confortável. O pós-operatório costuma ser tranquilo, com orientações claras.",
      },
      {
        q: "Quanto tempo dura um implante?",
        a: "Com os cuidados e a higiene adequados, os implantes podem durar muitos anos, frequentemente por toda a vida.",
      },
      {
        q: "Toda pessoa pode fazer implante?",
        a: "A maioria das pessoas pode, mas é necessária uma avaliação individual da saúde bucal e óssea para confirmar a indicação.",
      },
    ],
  },
  {
    slug: "aparelho-ortodontico",
    title: "Aparelho Ortodôntico",
    short:
      "Alinhamento dos dentes e correção da mordida com aparelhos fixos e estéticos.",
    icon: Smile,
    image: "/tratamentos/ortodontia.jpg",
    hero: "Dentes alinhados, mordida correta e um sorriso harmonioso com acompanhamento de perto.",
    intro:
      "A ortodontia vai muito além da estética: dentes bem posicionados facilitam a higiene, melhoram a mastigação e previnem problemas futuros. Cuidamos do seu tratamento do início ao resultado final.",
    whatIs:
      "O aparelho ortodôntico é um dispositivo que corrige o posicionamento dos dentes e a relação entre as arcadas. Existem diferentes tipos — fixos metálicos, estéticos e alinhadores — escolhidos de acordo com cada caso e objetivo.",
    indications: [
      "Dentes tortos, apinhados ou com espaços",
      "Mordida desalinhada (cruzada, aberta ou profunda)",
      "Dificuldade de higienização por mau posicionamento",
      "Pacientes que buscam harmonia estética do sorriso",
      "Crianças, adolescentes e adultos",
    ],
    benefits: [
      "Alinhamento dental e sorriso harmonioso",
      "Correção da mordida e melhor mastigação",
      "Estética e autoestima renovadas",
      "Diferentes tipos de aparelho para o seu perfil",
      "Acompanhamento próximo durante todo o tratamento",
    ],
    steps: [
      {
        title: "Avaliação ortodôntica",
        desc: "Análise dos dentes, da mordida e dos objetivos do tratamento.",
      },
      {
        title: "Plano de tratamento",
        desc: "Definição do tipo de aparelho ideal e da previsão de etapas.",
      },
      {
        title: "Instalação e ajustes",
        desc: "Colocação do aparelho e manutenções periódicas de acompanhamento.",
      },
      {
        title: "Finalização",
        desc: "Remoção do aparelho e uso de contenção para manter o resultado.",
      },
    ],
    whyUs: [
      "Diferentes tipos de aparelho disponíveis",
      "Acompanhamento individualizado",
      "Planejamento claro do início ao fim",
      "Equipe atenciosa em cada manutenção",
    ],
    faq: [
      {
        q: "Qual a diferença entre os tipos de aparelho?",
        a: "Os aparelhos variam em material e visibilidade — metálicos, estéticos e alinhadores. Na avaliação, indicamos o mais adequado ao seu caso e estilo de vida.",
      },
      {
        q: "Quanto tempo dura o tratamento?",
        a: "O tempo varia conforme cada caso. Após a avaliação, apresentamos uma estimativa personalizada para você.",
      },
      {
        q: "Adulto pode usar aparelho?",
        a: "Sim! A ortodontia não tem idade. Muitos adultos realizam o tratamento com excelentes resultados.",
      },
    ],
  },
  {
    slug: "clinico-geral",
    title: "Clínico Geral",
    short:
      "Prevenção, avaliação, limpeza e restaurações para manter sua saúde bucal em dia.",
    icon: Stethoscope,
    image: "/tratamentos/clinico.jpg",
    hero: "Cuidado completo e preventivo para manter o seu sorriso saudável durante toda a vida.",
    intro:
      "A odontologia clínica geral é a base de tudo. É nela que prevenimos problemas, cuidamos da rotina da sua saúde bucal e tratamos as necessidades do dia a dia com atenção e proximidade.",
    whatIs:
      "O clínico geral é o profissional que acompanha a saúde bucal de forma ampla: realiza avaliações, limpezas, restaurações, tratamento de cáries e orienta sobre prevenção. É o ponto de partida para um sorriso saudável e bem cuidado.",
    indications: [
      "Consultas e avaliações de rotina",
      "Limpeza e remoção de tártaro e placa",
      "Tratamento de cáries e restaurações",
      "Prevenção de problemas bucais",
      "Toda a família, de crianças a adultos",
    ],
    benefits: [
      "Prevenção de problemas mais sérios",
      "Avaliação completa da saúde bucal",
      "Limpeza profissional e profilaxia",
      "Restaurações estéticas e funcionais",
      "Acompanhamento contínuo do seu sorriso",
    ],
    steps: [
      {
        title: "Avaliação inicial",
        desc: "Exame completo da saúde dos dentes e gengivas.",
      },
      {
        title: "Limpeza e profilaxia",
        desc: "Remoção de placa e tártaro e orientação de higiene.",
      },
      {
        title: "Tratamentos necessários",
        desc: "Restaurações e cuidados indicados conforme cada necessidade.",
      },
      {
        title: "Manutenção preventiva",
        desc: "Retornos periódicos para manter tudo em ordem.",
      },
    ],
    whyUs: [
      "Atendimento preventivo e humanizado",
      "Orientação clara sobre cada cuidado",
      "Ambiente acolhedor e seguro",
      "Acompanhamento de longo prazo",
    ],
    faq: [
      {
        q: "Com que frequência devo ir ao dentista?",
        a: "Em geral, recomenda-se uma avaliação a cada seis meses, mas a frequência ideal é definida conforme a sua saúde bucal.",
      },
      {
        q: "A limpeza profissional é necessária mesmo escovando bem?",
        a: "Sim. A limpeza profissional remove o tártaro que a escovação não alcança, prevenindo cáries e problemas na gengiva.",
      },
      {
        q: "Restauração estética é resistente?",
        a: "As restaurações modernas são resistentes e imitam a cor natural do dente, unindo função e estética.",
      },
    ],
  },
  {
    slug: "clareamento-dental",
    title: "Clareamento Dental",
    short:
      "Sorriso mais branco e iluminado com segurança e acompanhamento profissional.",
    icon: Sparkles,
    image: "/tratamentos/clareamento.jpg",
    hero: "Um sorriso mais claro e radiante com técnicas seguras e acompanhamento especializado.",
    intro:
      "O clareamento é uma das formas mais simples e eficazes de renovar o sorriso. Quando realizado com avaliação prévia e acompanhamento profissional, oferece resultados bonitos e seguros.",
    whatIs:
      "O clareamento dental é um procedimento que reduz o escurecimento e as manchas dos dentes, deixando-os mais claros e uniformes. Pode ser feito em consultório, de forma supervisionada em casa, ou de maneira combinada — sempre com avaliação prévia.",
    indications: [
      "Dentes amarelados ou escurecidos com o tempo",
      "Manchas por alimentos, bebidas ou hábitos",
      "Quem busca um sorriso mais iluminado",
      "Antes de ocasiões e eventos especiais",
      "Pacientes com saúde bucal em dia",
    ],
    benefits: [
      "Sorriso visivelmente mais claro",
      "Procedimento seguro e supervisionado",
      "Avaliação prévia para indicar a melhor técnica",
      "Acompanhamento profissional do início ao fim",
      "Maior autoestima e confiança",
    ],
    steps: [
      {
        title: "Avaliação prévia",
        desc: "Verificação da saúde bucal e da indicação do clareamento.",
      },
      {
        title: "Definição da técnica",
        desc: "Escolha do método ideal: consultório, caseiro ou combinado.",
      },
      {
        title: "Aplicação acompanhada",
        desc: "Realização do clareamento com supervisão profissional.",
      },
      {
        title: "Orientações e manutenção",
        desc: "Cuidados para prolongar e preservar o resultado.",
      },
    ],
    whyUs: [
      "Avaliação criteriosa antes de iniciar",
      "Técnicas seguras e produtos de qualidade",
      "Acompanhamento para evitar sensibilidade",
      "Resultado natural e harmonioso",
    ],
    faq: [
      {
        q: "O clareamento causa sensibilidade?",
        a: "Pode ocorrer sensibilidade temporária em alguns casos. Com avaliação prévia e acompanhamento, esse desconforto é minimizado.",
      },
      {
        q: "Quanto tempo dura o resultado?",
        a: "A duração varia conforme os hábitos de cada pessoa. Com cuidados e manutenção, o resultado se prolonga por bastante tempo.",
      },
      {
        q: "Qualquer pessoa pode clarear os dentes?",
        a: "É necessária uma avaliação prévia. Por isso, indicamos o clareamento somente após verificar a saúde bucal.",
      },
    ],
  },
  {
    slug: "cirurgias",
    title: "Cirurgias Odontológicas",
    short:
      "Extrações e procedimentos cirúrgicos com segurança, planejamento e acompanhamento.",
    icon: Syringe,
    image: "/tratamentos/cirurgias.jpg",
    hero: "Procedimentos cirúrgicos realizados com técnica, segurança e cuidado em cada etapa.",
    intro:
      "As cirurgias odontológicas, quando bem planejadas, são procedimentos seguros e tranquilos. Cuidamos de cada detalhe, do planejamento ao pós-operatório, sempre priorizando o seu conforto.",
    whatIs:
      "As cirurgias odontológicas englobam procedimentos como extrações (incluindo dentes do siso), remoção de lesões e cirurgias preparatórias para implantes. São realizadas com planejamento, técnica e protocolos rigorosos de segurança.",
    indications: [
      "Extração de dentes comprometidos ou do siso",
      "Procedimentos cirúrgicos preparatórios para implantes",
      "Remoção de lesões e pequenos procedimentos",
      "Casos que exigem intervenção planejada",
      "Pacientes avaliados individualmente",
    ],
    benefits: [
      "Procedimentos seguros e bem planejados",
      "Conforto e tranquilidade durante a cirurgia",
      "Orientação completa de pós-operatório",
      "Prevenção de complicações futuras",
      "Acompanhamento atencioso na recuperação",
    ],
    steps: [
      {
        title: "Avaliação e planejamento",
        desc: "Exames e análise detalhada antes de qualquer procedimento.",
      },
      {
        title: "Preparo e segurança",
        desc: "Protocolos de biossegurança e cuidado em todas as etapas.",
      },
      {
        title: "Procedimento cirúrgico",
        desc: "Realização com técnica, anestesia e conforto.",
      },
      {
        title: "Pós-operatório",
        desc: "Orientações claras e acompanhamento da recuperação.",
      },
    ],
    whyUs: [
      "Planejamento cuidadoso de cada caso",
      "Protocolos rigorosos de biossegurança",
      "Equipe experiente e atenciosa",
      "Acompanhamento dedicado no pós-operatório",
    ],
    faq: [
      {
        q: "A cirurgia odontológica dói?",
        a: "O procedimento é realizado com anestesia, garantindo conforto. O pós-operatório é acompanhado com orientações para uma recuperação tranquila.",
      },
      {
        q: "Como é a recuperação?",
        a: "A recuperação varia conforme o procedimento. Você recebe todas as orientações de cuidados e contamos com acompanhamento próximo.",
      },
      {
        q: "Preciso extrair o dente do siso?",
        a: "Nem sempre. A extração é indicada após avaliação, quando o siso causa dor, mau posicionamento ou risco à saúde bucal.",
      },
    ],
  },
  {
    slug: "estetica-dental",
    title: "Estética Dental",
    short:
      "Harmonia e naturalidade para o seu sorriso com facetas, resinas e contorno estético.",
    icon: Gem,
    image: "/tratamentos/estetica.jpg",
    hero: "Um sorriso harmonioso e natural, valorizando a sua beleza com leveza e equilíbrio.",
    intro:
      "A estética dental cuida da harmonia do seu sorriso respeitando a sua naturalidade. Pequenos detalhes fazem grande diferença, e cada tratamento é planejado de forma personalizada para você.",
    whatIs:
      "A estética dental reúne procedimentos que aprimoram a aparência do sorriso, como facetas, restaurações em resina e contorno estético. O objetivo é equilibrar forma, cor e proporção, sempre com resultado natural.",
    indications: [
      "Dentes manchados, desgastados ou desalinhados",
      "Pequenos espaços entre os dentes",
      "Desejo de harmonizar a forma e a cor do sorriso",
      "Correção de detalhes estéticos",
      "Quem busca um resultado natural e equilibrado",
    ],
    benefits: [
      "Harmonia e equilíbrio do sorriso",
      "Resultados naturais e personalizados",
      "Facetas e resinas de alta qualidade",
      "Contorno estético sob medida",
      "Mais confiança ao sorrir",
    ],
    steps: [
      {
        title: "Avaliação estética",
        desc: "Análise do sorriso, das expectativas e das possibilidades.",
      },
      {
        title: "Planejamento do sorriso",
        desc: "Definição de forma, cor e proporção ideais para você.",
      },
      {
        title: "Execução cuidadosa",
        desc: "Aplicação das facetas, resinas ou contorno com precisão.",
      },
      {
        title: "Ajustes finais",
        desc: "Refinamento dos detalhes para um resultado harmônico.",
      },
    ],
    whyUs: [
      "Foco em naturalidade e harmonia",
      "Planejamento personalizado do sorriso",
      "Materiais estéticos de qualidade",
      "Olhar atento a cada detalhe",
    ],
    faq: [
      {
        q: "As facetas têm aparência natural?",
        a: "Sim. Quando bem planejadas e executadas, as facetas respeitam a naturalidade do sorriso, com forma e cor harmônicas.",
      },
      {
        q: "Qual a diferença entre faceta e resina?",
        a: "Ambas melhoram a estética. Na avaliação, indicamos a opção mais adequada ao seu caso, considerando objetivo e expectativa.",
      },
      {
        q: "O procedimento é demorado?",
        a: "Depende do tratamento escolhido. Muitos procedimentos estéticos são realizados em poucas sessões, com planejamento prévio.",
      },
    ],
  },
];

export function getTreatment(slug: string) {
  return TREATMENTS.find((t) => t.slug === slug);
}

/* -------------------------------------------------------------------------- */
/*  Depoimentos                                                                */
/* -------------------------------------------------------------------------- */

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mariana Oliveira",
    role: "Tratamento ortodôntico",
    text: "Atendimento impecável do começo ao fim. Minha autoestima mudou completamente depois do tratamento. Recomendo de olhos fechados!",
    initials: "MO",
  },
  {
    name: "Rafael Souza",
    role: "Implante dentário",
    text: "Equipe muito atenciosa e ambiente super moderno. Fiz meu implante sem dor e o resultado ficou natural. Excelente clínica.",
    initials: "RS",
  },
  {
    name: "Camila Ferreira",
    role: "Clareamento dental",
    text: "Profissionais qualificados e muito cuidadosos. O clareamento superou minhas expectativas. Hoje sorrio com muito mais confiança.",
    initials: "CF",
  },
  {
    name: "Lucas Andrade",
    role: "Prótese dentária",
    text: "Voltei a mastigar e sorrir com segurança. O cuidado e a atenção da equipe em cada etapa fizeram toda a diferença para mim.",
    initials: "LA",
  },
  {
    name: "Patrícia Mendes",
    role: "Clínico geral",
    text: "Ambiente acolhedor, limpo e organizado. Sou paciente há tempos e sempre saio satisfeita com o atendimento humanizado.",
    initials: "PM",
  },
  {
    name: "Bruno Carvalho",
    role: "Estética dental",
    text: "Trabalho minucioso e resultado super natural. Eles entenderam exatamente o que eu queria. Recomendo a Orthodentes a todos.",
    initials: "BC",
  },
];
