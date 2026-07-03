export interface ExerciseFile {
  /** Slug of the topic this exercise belongs to (matches Topic.slug) */
  topicSlug: string;
  /** Display title shown in the list */
  title: string;
  /** Path to the PDF, relative to /public — e.g. "/exercicios/celula-questoes.pdf" */
  file: string;
  /** Optional short description (e.g. "12 questões de múltipla escolha") */
  description?: string;
}

/**
 * Registro de exercícios em PDF disponíveis por sistema.
 *
 * Para adicionar um novo exercício:
 * 1. Coloque o arquivo PDF em /public/exercicios/
 * 2. Adicione uma entrada aqui com o caminho correspondente
 *
 * Esta lista é só de leitura no site — não existe upload pelo navegador,
 * a adição de PDFs é feita diretamente no código/projeto.
 */
export const exerciseFiles: ExerciseFile[] = [
  // Exemplo (descomente e ajuste quando adicionar o primeiro PDF real):
  // {
  //   topicSlug: "celula",
  //   title: "Questões — Biologia celular",
  //   file: "/exercicios/celula-questoes.pdf",
  //   description: "12 questões de múltipla escolha sobre organelas e membrana plasmática",
  // },
];

export function getExercisesByTopic(topicSlug: string): ExerciseFile[] {
  return exerciseFiles.filter((e) => e.topicSlug === topicSlug);
}
