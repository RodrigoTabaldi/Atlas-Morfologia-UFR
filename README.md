# Morfologia em Foco — Atlas Digital (UFR)

Esqueleto de aplicação React + TypeScript para o atlas de morfologia da
Universidade Federal de Rondonópolis (UFR), com os 15 tópicos previstos no
projeto já estruturados como páginas navegáveis, cada um com nome e imagem
ilustrativa próprios — sem numeração ou divisão por unidade na interface.

## Stack

- **React 19 + TypeScript** (Vite)
- **react-router-dom** para navegação entre páginas
- CSS puro com variáveis (tokens) — sem framework de UI, para manter o
  bundle pequeno e o visual sob controle total

## Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento, http://localhost:5173
npm run build     # build de produção em /dist
npm run preview   # serve o build de produção localmente
```

## Estrutura de pastas

```
src/
├── data/
│   ├── topics.ts          # fonte única de verdade dos 15 tópicos
│   └── glossary.ts        # termos do glossário acadêmico
├── hooks/
│   └── useInView.ts       # anima elementos quando entram na viewport (scroll)
├── styles/
│   ├── tokens.css          # paleta de cores, tipografia, espaçamento
│   └── accent.ts           # helpers para mapear accent -> variável CSS
├── components/
│   ├── Layout.tsx/.css      # header, menu mobile, footer
│   └── TopicCard.tsx/.css   # card usado no grid de sistemas da Home
├── pages/
│   ├── Home.tsx/.css        # página inicial com hero 3D + grid de sistemas
│   ├── About.tsx            # "Sobre o projeto" (resumo do edital)
│   ├── Exercises.tsx/.css   # "Exercícios" — lista de sistemas
│   ├── ExerciseUpload.tsx/.css # lista de PDFs de exercícios por sistema
│   ├── Glossary.tsx/.css    # "Glossário acadêmico" com busca e filtro por área
│   ├── InfoPage.css         # estilos compartilhados por Sobre/Exercícios/Glossário
│   └── TopicPage.tsx/.css   # template único usado pelos 15 tópicos
├── assets/brand/            # logos da UFR e imagem principal do hero
└── assets/topics/           # uma imagem (alta res.) por sistema
    └── cards/                # versão reduzida das mesmas imagens, para a Home
```

```
public/
└── exercicios/              # PDFs de exercícios servidos estaticamente
```

## Páginas e navegação

O header tem 4 links: **Início**, **Exercícios**, **Glossário** e **Sobre o
projeto**. Em telas estreitas esses links saem do header e passam para o
menu mobile (ícone de hambúrguer), junto com a lista dos 15 sistemas.

- **Exercícios** (`/exercicios`): lista os 15 sistemas como cartões
  clicáveis, com uma etiqueta indicando quantos PDFs já existem para
  cada um ("1 PDF", "2 PDFs" ou "Em breve"). Clicar em um sistema abre
  `/exercicios/:slug`, que mostra os PDFs cadastrados para aquele tópico
  com um botão "Abrir PDF" (link direto para o arquivo, em nova aba).
- **Glossário** (`/glossario`): já tem conteúdo real (termos de
  citologia, histologia, embriologia e anatomia), com busca por texto e
  filtro por subárea. Novos termos podem ser adicionados direto em
  `src/data/glossary.ts`, sem tocar no componente.

### Importante: não há upload público de arquivos

A página de Exercícios **não tem formulário de envio para o visitante**.
Isso foi proposital — qualquer pessoa que abrisse o site não pode
publicar arquivos nele. Quem adiciona exercícios é quem tem acesso ao
código do projeto, seguindo dois passos simples:

1. Colocar o arquivo PDF dentro de `public/exercicios/` (essa pasta é
   servida como está, sem processamento — o que está lá fica acessível
   pelo caminho `/exercicios/nome-do-arquivo.pdf`)
2. Registrar uma entrada em `src/data/exercises.ts`, associando o PDF
   ao `slug` do sistema correspondente:

```ts
export const exerciseFiles: ExerciseFile[] = [
  {
    topicSlug: "celula",
    title: "Questões — Biologia celular",
    file: "/exercicios/celula-questoes.pdf",
    description: "12 questões de múltipla escolha sobre organelas",
  },
];
```

Depois de salvar, o PDF passa a aparecer automaticamente na página
daquele sistema (e a contagem na lista de Exercícios é atualizada). Não
precisa editar nenhum componente — só esse arquivo de dados.

## Sobre as imagens ilustrativas

Cada tópico em `topics.ts` importa **duas versões** da mesma imagem:

- `image` → `src/assets/topics/*.webp`, resolução alta (~2048px no lado
  maior), usada na página de cada tópico (`TopicPage`), onde a imagem
  aparece grande
- `cardImage` → `src/assets/topics/cards/*.webp`, resolução reduzida
  (~700px), usada nos cards da Home, onde a imagem aparece pequena

Servir duas resoluções diferentes evita carregar arquivos pesados de
~2048px num card de 250px de largura — a Home carrega rápido com as
miniaturas, e a página de cada sistema mostra a versão em alta definição.
Ambas têm fundo transparente.

A imagem do hero da Home (`src/assets/brand/imagem-principal.webp`) é
tratada à parte, dentro do componente `HeroVisual` em `Home.tsx`, também
em alta resolução (~2400px) já que aparece em destaque.

### Como trocar uma imagem

1. Coloque a versão em alta resolução em `src/assets/topics/` e uma
   versão reduzida (até ~700px no lado maior) em
   `src/assets/topics/cards/` — ambas em `.webp` com fundo transparente
2. Atualize os dois `import`s correspondentes no topo de
   `src/data/topics.ts` e aponte os campos `image` e `cardImage` do
   tópico para essas variáveis

Cada `<img>` já tem fallback automático: se uma imagem não carregar,
aparece um ícone genérico no lugar em vez de quebrar a página.

### Removendo fundo branco de novas imagens

As imagens fornecidas originalmente tinham fundo branco sólido. Para
manter a mesma estética (sem retângulo branco visível dentro dos
cards), o fundo foi removido com um script Python simples (Pillow):
pixels próximos do branco puro (limiar ~235/255 em R, G e B) ficam
transparentes, e a imagem é recortada nas bordas vazias com
ImageMagick (`convert img.png -trim +repage ...`). Esse processo é
seguro para a maioria das imagens 3D com fundo branco como as
utilizadas aqui, mas vale revisar visualmente cada imagem nova antes
de publicar (imagens com áreas internas muito claras, ex. ossos muito
claros ou destaques brancos, podem precisar de um limiar diferente).

## Como adicionar conteúdo a um tópico

Você não precisa criar página nova para cada sistema. Todos os 15
tópicos usam o mesmo componente `TopicPage.tsx`, que lê os dados de
`src/data/topics.ts` pela URL (`/topico/:slug`).

### 1. Atualizar o status e metadados do tópico

Em `src/data/topics.ts`, cada tópico tem:

```ts
{
  slug: "celula",
  status: "in-production", // "planned" | "in-production" | "available"
  contentKind: "interactive-svg", // "interactive-svg" | "photo-gallery" | "mixed"
  summary: "...",
  image: "https://...",
  // ...
}
```

Mude `status` para `"available"` quando o conteúdo da página estiver
pronto — isso já atualiza a cor do indicador em toda a navegação e nos
cards da Home automaticamente.

### 2. Substituir a imagem por conteúdo interativo

Em `TopicPage.tsx`, o componente `TopicVisual` hoje renderiza a imagem
estática do Wikimedia. Para um **diagrama SVG interativo** (ex: célula,
sistema nervoso), o padrão recomendado é:

- Um arquivo SVG com `id` em cada estrutura clicável
  (ex: `<path id="nucleo" ... />`)
- Um componente React que faz `onMouseEnter`/`onClick` em cada `id` e
  mostra um tooltip ou painel lateral com a legenda
- Manter as cores do SVG usando as variáveis de `tokens.css`
  (`var(--azul)`, `var(--cobalto)`, etc.) para ficar consistente com o
  resto do atlas

Para uma **galeria de fotos** (ex: lâminas histológicas, peças
anatômicas — como no modelo de referência), o padrão recomendado é um
grid de miniaturas com um visualizador em destaque (lightbox).

### 3. Preencher a descrição

As seções "Descrição" e "Estruturas em destaque" em `TopicPage.tsx`
atualmente têm texto de placeholder em itálico. Substitua por conteúdo
real conforme a redação avançar — não há necessidade de mudar a
estrutura, só o texto.

## Paleta e identidade visual

As cores derivam da marca da UFR e foram tratadas como tons de "papel
científico" (fundo claro, tinta densa), com quatro acentos usados para
diferenciar tópicos e estados:

| Variável       | Uso                                  |
|----------------|---------------------------------------|
| `--azul`       | Marinho institucional                 |
| `--cobalto`    | Azul médio, links e estado ativo      |
| `--verde`      | Acento secundário                     |
| `--ambar`      | Acento de destaque/"interativo"       |

Cada tópico em `topics.ts` tem um campo `accent` que escolhe uma dessas
quatro cores para sua faixa de cor (borda superior do card, badge, borda
ativa na sidebar).

## Animações

O site usa animações CSS (sem biblioteca externa) em praticamente todo
canto: cards e seções entram com fade + leve deslocamento ao carregar a
página, o cabeçalho desliza para baixo, o menu mobile abre com os itens
em cascata, a troca de rota faz um fade suave no conteúdo principal, e
elementos interativos (cards, botões, links do pager, ficha lateral)
têm micro-interações de hover.

A imagem principal do hero e as imagens dos cards de sistema têm um
efeito de inclinação 3D que segue o cursor do mouse (`perspective` +
`rotateX`/`rotateY` calculados a partir da posição do ponteiro dentro do
elemento). É puramente decorativo — não depende de nenhuma lib, só
`onMouseMove`/`onMouseLeave` em React e CSS `transform-style: preserve-3d`.

Pontos de referência se quiser ajustar ou adicionar animações novas:

- `src/hooks/useInView.ts` — hook que detecta quando um elemento entra
  na viewport (usado para animar o título "Selecione um sistema" da
  Home conforme o usuário rola a página, em vez de só no carregamento)
- `--card-delay` em `TopicCard.css`/`.tsx` — delay escalonado por
  índice, usado para o efeito de cascata nos cards
- Qualquer seletor com `@keyframes ... In` ou `...FadeUp` nos arquivos
  `.css` de cada página segue o mesmo padrão: `opacity: 0` por padrão e
  uma animação com `forwards` que a leva a `opacity: 1`

Todas as animações respeitam `prefers-reduced-motion: reduce` — quem
tem essa preferência ativada no sistema operacional não vê nenhuma
delas (o conteúdo aparece direto, sem movimento).

## Próximos passos sugeridos

1. Definir, por tópico, se o conteúdo visual será SVG interativo, galeria
   de fotos, ou misto (já há um campo para isso, só falta o conteúdo real)
2. Substituir as imagens de referência do Wikimedia por material próprio
3. Substituir os textos de placeholder por conteúdo revisado
4. Quando o projeto for publicado, considerar build estático
   (`npm run build`) hospedado em GitHub Pages, Vercel, ou no domínio
   institucional da UFR
