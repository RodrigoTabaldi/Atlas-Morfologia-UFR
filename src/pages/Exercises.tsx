import { Link } from "react-router-dom";
import { topics } from "../data/topics";
import { getExercisesByTopic } from "../data/exercises";
import "./InfoPage.css";
import "./Exercises.css";

export default function Exercises() {
  return (
    <article className="info-page">
      <header className="info-header">
        <p className="info-eyebrow">Estudo ativo</p>
        <h1>Exercícios</h1>
        <p className="info-lede">
          Questões e atividades práticas em PDF para revisar cada sistema do atlas —
          pensadas para consolidar o conteúdo teórico com casos, identificação de
          estruturas e correlações clínicas.
        </p>
      </header>

      <section className="info-section">
        <h2>Como funciona</h2>
        <p>
          Cada sistema do atlas tem sua própria página de exercícios. Clique em um
          sistema abaixo para ver os PDFs disponíveis para aquele tópico. Novos
          exercícios são publicados pela equipe do projeto conforme forem produzidos —
          não é possível enviar arquivos por aqui.
        </p>
      </section>

      <section className="info-section">
        <h2>Exercícios por sistema</h2>
        <div className="exercise-grid">
          {topics.map((topic) => {
            const count = getExercisesByTopic(topic.slug).length;
            return (
              <Link to={`/exercicios/${topic.slug}`} className="exercise-pill" key={topic.slug}>
                <span>{topic.title}</span>
                <span className={`exercise-pill-tag ${count > 0 ? "has-content" : ""}`}>
                  {count > 0 ? `${count} PDF${count > 1 ? "s" : ""}` : "Em breve"}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="info-section info-section-muted">
        <h2>Para a equipe do projeto</h2>
        <p>
          Novos exercícios são adicionados diretamente no código do site: o PDF é
          colocado na pasta pública do projeto e registrado em um pequeno arquivo de
          dados (<code>exercises.ts</code>), associado ao sistema correspondente. Não há
          formulário de envio público — isso evita que qualquer visitante publique
          arquivos no site.
        </p>
      </section>
    </article>
  );
}
