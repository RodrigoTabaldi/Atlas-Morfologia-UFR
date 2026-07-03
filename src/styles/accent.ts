import type { Topic } from "../data/topics";

export const accentVar: Record<Topic["accent"], string> = {
  azul: "var(--azul)",
  verde: "var(--verde)",
  cobalto: "var(--cobalto)",
  ambar: "var(--ambar)",
};

export const accentSoftVar: Record<Topic["accent"], string> = {
  azul: "var(--azul-soft)",
  verde: "var(--verde-soft)",
  cobalto: "var(--cobalto-soft)",
  ambar: "var(--ambar-soft)",
};

export const statusLabel: Record<Topic["status"], string> = {
  available: "Conteúdo disponível",
  "in-production": "Em produção",
  planned: "Planejado",
};

export const statusVar: Record<Topic["status"], string> = {
  available: "var(--status-available)",
  "in-production": "var(--status-production)",
  planned: "var(--status-planned)",
};

export const contentKindLabel: Record<Topic["contentKind"], string> = {
  "interactive-svg": "Diagrama interativo",
  "photo-gallery": "Galeria fotográfica",
  mixed: "Diagrama + fotos",
};
