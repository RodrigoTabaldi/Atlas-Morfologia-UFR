import "./InfoPage.css";

export default function About() {
  return (
    <article className="info-page">
      <header className="info-header">
        <p className="info-eyebrow">Sobre o projeto</p>
        <h1>Morfologia em Foco</h1>
        <p className="info-lede">
          Criação de um atlas descritivo de biologia celular, tecidual, estrutural e do
          desenvolvimento para as áreas de ciências biológicas e da saúde.
        </p>
      </header>

      <section className="info-section">
        <h2>Resumo</h2>
        <p>
          A morfologia reúne conteúdos essenciais para a formação nas áreas de ciências
          biológicas e da saúde, exigindo recursos visuais teórico-práticos que facilitem a
          construção e a consolidação do conhecimento. Este projeto cria um atlas de
          biologia celular, tecidual, estrutural e do desenvolvimento a partir do acervo
          macro e microscópico disponível nos laboratórios da Faculdade de Ciências da
          Saúde da UFR, de forma integrada.
        </p>
      </section>

      <section className="info-section">
        <h2>Objetivo geral</h2>
        <p>
          Criar um atlas abrangente que ilustre e descreva, de forma integrada, as
          principais células e estruturas celulares, tecidos básicos, estágios
          embrionários iniciais, bem como a integração celular, histológica, embrionária e
          anatômica dos órgãos e sistemas do corpo humano.
        </p>
      </section>

      <section className="info-section">
        <h2>Objetivos específicos</h2>
        <ol className="info-list">
          <li>Compilar e organizar informações sobre biologia celular, histologia, anatomia e embriologia.</li>
          <li>Produzir imagens de alta qualidade e ilustrações representativas para cada subárea da morfologia.</li>
          <li>Fornecer descrições detalhadas e legendas explicativas para cada imagem.</li>
          <li>Integrar informações sobre técnicas de coloração, visualização e interpretação micro e macroscópica.</li>
          <li>Correlacionar aspectos teóricos e práticos do estudo da morfologia com achados patológicos.</li>
        </ol>
      </section>

      <section className="info-section">
        <h2>Equipe de trabalho</h2>
        <p>
          Projeto coordenado pelo Prof. Dr. Jorge Willian Franco de Barros, com a
          colaboração dos Profs. Dr. Felipe Cantore Tiburcio e Dra. Azize Cristina Capelli
          Nassr, da Faculdade de Ciências da Saúde (FCS – UFR), e discentes dos cursos de
          Medicina, Enfermagem, Fonoaudiologia, Terapia Ocupacional e Ciências
          Biológicas da UFR.
        </p>
      </section>

      <section className="info-section info-section-muted">
        <h2>Sobre esta versão digital</h2>
        <p>
          Esta interface organiza os 15 tópicos morfológicos previstos no projeto em
          formato de atlas digital interativo, servindo de estrutura de navegação para o
          conteúdo visual e textual que será produzido ao longo do desenvolvimento do
          trabalho — diagramas interativos, galerias fotográficas de lâminas e peças
          anatômicas, e textos descritivos revisados por pares.
        </p>
      </section>
    </article>
  );
}
