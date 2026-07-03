export interface GlossaryTerm {
  term: string;
  definition: string;
  area: "Citologia" | "Histologia" | "Embriologia" | "Anatomia";
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Citoplasma",
    definition:
      "Conteúdo celular entre a membrana plasmática e o núcleo, onde estão suspensas as organelas e ocorrem a maior parte das reações metabólicas da célula.",
    area: "Citologia",
  },
  {
    term: "Organela",
    definition:
      "Estrutura especializada dentro da célula que desempenha uma função específica, como a mitocôndria (produção de energia) ou o retículo endoplasmático (síntese e transporte).",
    area: "Citologia",
  },
  {
    term: "Mitose",
    definition:
      "Processo de divisão celular que origina duas células-filhas geneticamente idênticas à célula-mãe, responsável pelo crescimento e renovação dos tecidos.",
    area: "Citologia",
  },
  {
    term: "Membrana plasmática",
    definition:
      "Envoltório que delimita a célula, composto principalmente por uma bicamada lipídica com proteínas, responsável por regular a passagem de substâncias.",
    area: "Citologia",
  },
  {
    term: "Tecido epitelial",
    definition:
      "Tecido formado por células justapostas com pouca substância intercelular, que recobre superfícies internas e externas do corpo e forma glândulas.",
    area: "Histologia",
  },
  {
    term: "Tecido conjuntivo",
    definition:
      "Tecido caracterizado por células dispersas em abundante matriz extracelular, com função de sustentação, preenchimento e nutrição de outros tecidos.",
    area: "Histologia",
  },
  {
    term: "Matriz extracelular",
    definition:
      "Conjunto de macromoléculas (fibras e substância fundamental) secretado pelas células do tecido conjuntivo, que dá suporte estrutural aos tecidos.",
    area: "Histologia",
  },
  {
    term: "Lâmina basal",
    definition:
      "Camada delgada de matriz extracelular que separa o tecido epitelial do tecido conjuntivo subjacente, servindo de suporte e filtro seletivo.",
    area: "Histologia",
  },
  {
    term: "Fibra colágena",
    definition:
      "Proteína fibrosa mais abundante do tecido conjuntivo, responsável por conferir resistência à tração em pele, tendões, ossos e outros órgãos.",
    area: "Histologia",
  },
  {
    term: "Zigoto",
    definition:
      "Célula resultante da fecundação do oócito pelo espermatozoide, que contém o material genético combinado dos dois gametas e dá início ao desenvolvimento embrionário.",
    area: "Embriologia",
  },
  {
    term: "Blastocisto",
    definition:
      "Estágio do embrião inicial, formado por uma camada externa de células (trofoblasto) e um aglomerado interno (massa celular interna), que se implanta no útero.",
    area: "Embriologia",
  },
  {
    term: "Gastrulação",
    definition:
      "Processo pelo qual o embrião se reorganiza em três camadas germinativas — ectoderma, mesoderma e endoderma —, que originarão todos os tecidos do corpo.",
    area: "Embriologia",
  },
  {
    term: "Organogênese",
    definition:
      "Período do desenvolvimento embrionário em que as camadas germinativas se diferenciam para formar os órgãos e sistemas do corpo.",
    area: "Embriologia",
  },
  {
    term: "Plano sagital",
    definition:
      "Plano anatômico vertical que divide o corpo em partes direita e esquerda; quando passa exatamente pela linha média, é chamado de plano sagital mediano.",
    area: "Anatomia",
  },
  {
    term: "Plano coronal",
    definition:
      "Também chamado de plano frontal, divide o corpo em uma parte anterior e uma posterior, perpendicular ao plano sagital.",
    area: "Anatomia",
  },
  {
    term: "Plano transverso",
    definition:
      "Plano horizontal que divide o corpo em uma parte superior e uma inferior, usado com frequência para descrever cortes em exames de imagem.",
    area: "Anatomia",
  },
  {
    term: "Proximal / distal",
    definition:
      "Termos de posição relativa usados em estruturas dos membros: proximal indica mais próximo do tronco, distal indica mais afastado dele.",
    area: "Anatomia",
  },
  {
    term: "Homeostase",
    definition:
      "Capacidade do organismo de manter um ambiente interno relativamente estável e equilibrado, mesmo diante de variações no ambiente externo.",
    area: "Anatomia",
  },
];
