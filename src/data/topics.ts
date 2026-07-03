import imgCelula from "../assets/topics/celula.webp";
import imgTecidosBasicos from "../assets/topics/tecidos-basicos.webp";
import imgDesenvolvimentoEmbrionario from "../assets/topics/desenvolvimento-embrionario.webp";
import imgAnatomiaHumana from "../assets/topics/anatomia-humana.webp";
import imgSistemaTegumentar from "../assets/topics/sistema-tegumentar.webp";
import imgSistemaNervoso from "../assets/topics/sistema-nervoso.webp";
import imgSistemaCardiovascular from "../assets/topics/sistema-cardiovascular.webp";
import imgSistemaRespiratorio from "../assets/topics/sistema-respiratorio.webp";
import imgSistemaDigestorio from "../assets/topics/sistema-digestorio.webp";
import imgSistemaUrinario from "../assets/topics/sistema-urinario.webp";
import imgSistemaGenitalMasculino from "../assets/topics/sistema-genital-masculino.webp";
import imgSistemaGenitalFeminino from "../assets/topics/sistema-genital-feminino.webp";
import imgSistemaEndocrino from "../assets/topics/sistema-endocrino.webp";
import imgSistemaImunologico from "../assets/topics/sistema-imunologico.webp";
import imgAparelhoLocomotor from "../assets/topics/aparelho-locomotor.webp";
import imgCardCelula from "../assets/topics/cards/celula.webp";
import imgCardTecidosBasicos from "../assets/topics/cards/tecidos-basicos.webp";
import imgCardDesenvolvimentoEmbrionario from "../assets/topics/cards/desenvolvimento-embrionario.webp";
import imgCardAnatomiaHumana from "../assets/topics/cards/anatomia-humana.webp";
import imgCardSistemaTegumentar from "../assets/topics/cards/sistema-tegumentar.webp";
import imgCardSistemaNervoso from "../assets/topics/cards/sistema-nervoso.webp";
import imgCardSistemaCardiovascular from "../assets/topics/cards/sistema-cardiovascular.webp";
import imgCardSistemaRespiratorio from "../assets/topics/cards/sistema-respiratorio.webp";
import imgCardSistemaDigestorio from "../assets/topics/cards/sistema-digestorio.webp";
import imgCardSistemaUrinario from "../assets/topics/cards/sistema-urinario.webp";
import imgCardSistemaGenitalMasculino from "../assets/topics/cards/sistema-genital-masculino.webp";
import imgCardSistemaGenitalFeminino from "../assets/topics/cards/sistema-genital-feminino.webp";
import imgCardSistemaEndocrino from "../assets/topics/cards/sistema-endocrino.webp";
import imgCardSistemaImunologico from "../assets/topics/cards/sistema-imunologico.webp";
import imgCardAparelhoLocomotor from "../assets/topics/cards/aparelho-locomotor.webp";

export type TopicStatus = "available" | "in-production" | "planned";

export type ContentKind = "interactive-svg" | "photo-gallery" | "mixed";

export interface Topic {
  /** URL slug, e.g. "celula" */
  slug: string;
  /** Internal ordering only — not shown in the UI */
  order: number;
  title: string;
  /** Short subtitle shown under the title (the discipline area) */
  area: string;
  /** One paragraph summary shown on the topic page and as card excerpt */
  summary: string;
  /** Which kind of visual content this topic is planned to use */
  contentKind: ContentKind;
  status: TopicStatus;
  /** Accent color key, references theme palette */
  accent: "azul" | "verde" | "cobalto" | "ambar";
  /** Illustrative image (bundled asset) shown on the home card and topic header */
  image: string;
  /** Smaller version of `image`, used for the home grid card thumbnail */
  cardImage: string;
  imageAlt: string;
}

export const topics: Topic[] = [
  {
    slug: "celula",
    order: 1,
    title: "A célula",
    area: "Biologia celular",
    summary:
      "Estrutura e função dos componentes celulares: membrana, núcleo, organelas e suas dinâmicas no transporte e na divisão celular.",
    contentKind: "interactive-svg",
    status: "in-production",
    accent: "azul",
    image: imgCelula,
    cardImage: imgCardCelula,
    imageAlt: "Ilustração em corte de uma célula humana e suas organelas",
  },
  {
    slug: "tecidos-basicos",
    order: 2,
    title: "Tecidos básicos do corpo humano",
    area: "Histologia",
    summary:
      "Organização das células em tecido epitelial, conjuntivo, muscular e nervoso, com suas variações estruturais e funcionais.",
    contentKind: "photo-gallery",
    status: "planned",
    accent: "verde",
    image: imgTecidosBasicos,
    cardImage: imgCardTecidosBasicos,
    imageAlt: "Ilustração comparando tecido epitelial, conjuntivo, muscular e nervoso",
  },
  {
    slug: "desenvolvimento-embrionario",
    order: 3,
    title: "Bases gerais do desenvolvimento embrionário humano",
    area: "Embriologia",
    summary:
      "Eventos iniciais do desenvolvimento: da fertilização à formação das camadas germinativas e estruturação dos sistemas.",
    contentKind: "interactive-svg",
    status: "planned",
    accent: "cobalto",
    image: imgDesenvolvimentoEmbrionario,
    cardImage: imgCardDesenvolvimentoEmbrionario,
    imageAlt: "Ilustração das fases iniciais do desenvolvimento embrionário humano",
  },
  {
    slug: "anatomia-humana",
    order: 4,
    title: "Bases gerais da anatomia humana",
    area: "Anatomia",
    summary:
      "Planos anatômicos, termos de posição e movimento, e a organização geral dos sistemas do corpo humano.",
    contentKind: "mixed",
    status: "planned",
    accent: "azul",
    image: imgAnatomiaHumana,
    cardImage: imgCardAnatomiaHumana,
    imageAlt: "Ilustração da anatomia humana mostrando músculos, ossos e órgãos internos",
  },
  {
    slug: "sistema-tegumentar",
    order: 5,
    title: "Sistema tegumentar",
    area: "Histologia · Anatomia",
    summary:
      "Pele e anexos cutâneos: camadas, glândulas, folículos pilosos e sua função protetora, sensorial e termorreguladora.",
    contentKind: "interactive-svg",
    status: "planned",
    accent: "ambar",
    image: imgSistemaTegumentar,
    cardImage: imgCardSistemaTegumentar,
    imageAlt: "Ilustração em corte das camadas da pele humana e seus anexos",
  },
  {
    slug: "sistema-nervoso",
    order: 6,
    title: "Sistema nervoso",
    area: "Histologia · Anatomia",
    summary:
      "Neurônios, glia e a organização central e periférica do sistema nervoso na condução e integração de estímulos.",
    contentKind: "interactive-svg",
    status: "planned",
    accent: "cobalto",
    image: imgSistemaNervoso,
    cardImage: imgCardSistemaNervoso,
    imageAlt: "Ilustração do sistema nervoso central e periférico no corpo humano",
  },
  {
    slug: "sistema-cardiovascular",
    order: 7,
    title: "Sistema cardiovascular",
    area: "Histologia · Anatomia",
    summary:
      "Coração, vasos sanguíneos e a dinâmica de circulação responsável pelo transporte de gases, nutrientes e células.",
    contentKind: "interactive-svg",
    status: "planned",
    accent: "azul",
    image: imgSistemaCardiovascular,
    cardImage: imgCardSistemaCardiovascular,
    imageAlt: "Ilustração do coração e da rede de vasos sanguíneos no tórax",
  },
  {
    slug: "sistema-respiratorio",
    order: 8,
    title: "Sistema respiratório",
    area: "Histologia · Anatomia",
    summary:
      "Vias aéreas e pulmões: estrutura responsável pelas trocas gasosas entre o organismo e o ambiente.",
    contentKind: "photo-gallery",
    status: "planned",
    accent: "verde",
    image: imgSistemaRespiratorio,
    cardImage: imgCardSistemaRespiratorio,
    imageAlt: "Ilustração das vias aéreas e dos pulmões humanos",
  },
  {
    slug: "sistema-digestorio",
    order: 9,
    title: "Sistema digestório",
    area: "Histologia · Anatomia",
    summary:
      "Trato gastrointestinal e glândulas anexas envolvidos na digestão, absorção e processamento de nutrientes.",
    contentKind: "mixed",
    status: "planned",
    accent: "ambar",
    image: imgSistemaDigestorio,
    cardImage: imgCardSistemaDigestorio,
    imageAlt: "Ilustração do trato digestório e órgãos anexos no abdômen",
  },
  {
    slug: "sistema-urinario",
    order: 10,
    title: "Sistema urinário",
    area: "Histologia · Anatomia",
    summary:
      "Rins e vias urinárias responsáveis pela filtração do sangue e pelo equilíbrio hidroeletrolítico do organismo.",
    contentKind: "photo-gallery",
    status: "planned",
    accent: "cobalto",
    image: imgSistemaUrinario,
    cardImage: imgCardSistemaUrinario,
    imageAlt: "Ilustração dos rins, ureteres e vesícula urinária",
  },
  {
    slug: "sistema-genital-masculino",
    order: 11,
    title: "Sistema genital masculino",
    area: "Histologia · Anatomia",
    summary:
      "Estruturas responsáveis pela produção de gametas masculinos e pela função reprodutiva e endócrina associada.",
    contentKind: "photo-gallery",
    status: "planned",
    accent: "azul",
    image: imgSistemaGenitalMasculino,
    cardImage: imgCardSistemaGenitalMasculino,
    imageAlt: "Ilustração em corte do sistema genital masculino",
  },
  {
    slug: "sistema-genital-feminino",
    order: 12,
    title: "Sistema genital feminino",
    area: "Histologia · Anatomia",
    summary:
      "Estruturas responsáveis pela produção de gametas femininos, ciclo reprodutivo e gestação.",
    contentKind: "photo-gallery",
    status: "planned",
    accent: "verde",
    image: imgSistemaGenitalFeminino,
    cardImage: imgCardSistemaGenitalFeminino,
    imageAlt: "Ilustração em corte do sistema genital feminino",
  },
  {
    slug: "sistema-endocrino",
    order: 13,
    title: "Sistema endócrino",
    area: "Histologia · Anatomia",
    summary:
      "Glândulas endócrinas e a regulação hormonal de processos metabólicos, de crescimento e homeostase.",
    contentKind: "interactive-svg",
    status: "planned",
    accent: "cobalto",
    image: imgSistemaEndocrino,
    cardImage: imgCardSistemaEndocrino,
    imageAlt: "Ilustração das principais glândulas do sistema endócrino no corpo humano",
  },
  {
    slug: "sistema-imunologico",
    order: 14,
    title: "Sistema imunológico",
    area: "Histologia · Anatomia",
    summary:
      "Órgãos linfoides e células de defesa envolvidos na resposta imune inata e adaptativa do organismo.",
    contentKind: "photo-gallery",
    status: "planned",
    accent: "ambar",
    image: imgSistemaImunologico,
    cardImage: imgCardSistemaImunologico,
    imageAlt: "Ilustração do sistema linfático e das células de defesa do organismo",
  },
  {
    slug: "aparelho-locomotor",
    order: 15,
    title: "Aparelho locomotor",
    area: "Histologia · Anatomia",
    summary:
      "Ossos, articulações e músculos atuando em conjunto para sustentação, proteção e geração de movimento.",
    contentKind: "mixed",
    status: "planned",
    accent: "azul",
    image: imgAparelhoLocomotor,
    cardImage: imgCardAparelhoLocomotor,
    imageAlt: "Ilustração do esqueleto e da musculatura humana em vista lateral",
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getAdjacentTopics(slug: string): {
  previous: Topic | null;
  next: Topic | null;
} {
  const index = topics.findIndex((t) => t.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index > 0 ? topics[index - 1] : null,
    next: index < topics.length - 1 ? topics[index + 1] : null,
  };
}
