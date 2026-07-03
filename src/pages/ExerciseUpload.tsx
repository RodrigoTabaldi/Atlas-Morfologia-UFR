import { useParams, Navigate, Link } from "react-router-dom";
import { getTopicBySlug } from "../data/topics";
import { getExercisesByTopic } from "../data/exercises";
import { accentVar } from "../styles/accent";
import "./ExerciseUpload.css";

export default function ExerciseList() {
  const { slug = "" } = useParams();
  const topic = getTopicBySlug(slug);

  if (!topic) {
    return <Navigate to="/exercicios" replace />;
  }

  const accent = accentVar[topic.accent];
  const files = getExercisesByTopic(slug);

  return (
    <article className="upload-page" style={{ "--accent": accent } as React.CSSProperties}>
      <nav className="breadcrumb" aria-label="Trilha de navegação">
        <Link to="/exercicios">Exercícios</Link>
        <span aria-hidden="true">/</span>
        <span className="breadcrumb-current">{topic.title}</span>
      </nav>

      <header className="upload-header">
        <p className="upload-eyebrow">Exercícios</p>
        <h1>{topic.title}</h1>
        <p className="upload-lede">{topic.summary}</p>
      </header>

      {files.length === 0 ? (
        <div className="upload-empty">
          <div className="upload-empty-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48">
              <path
                d="M14 6h14l8 8v26a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path d="M28 6v8h8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="upload-empty-title">Nenhum exercício publicado ainda</p>
          <p className="upload-empty-hint">
            Os PDFs de exercícios deste sistema serão adicionados aqui conforme forem
            produzidos pela equipe.
          </p>
        </div>
      ) : (
        <ul className="exercise-file-list">
          {files.map((ex, index) => (
            <li
              key={ex.file}
              className="exercise-file-item"
              style={{ "--item-delay": `${index * 50}ms` } as React.CSSProperties}
            >
              <span className="exercise-file-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48">
                  <path
                    d="M14 6h14l8 8v26a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path d="M28 6v8h8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="exercise-file-info">
                <span className="exercise-file-title">{ex.title}</span>
                {ex.description && (
                  <span className="exercise-file-description">{ex.description}</span>
                )}
              </span>
              <a
                href={ex.file}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary exercise-file-action"
              >
                Abrir PDF
              </a>
            </li>
          ))}
        </ul>
      )}

      <div className="upload-actions upload-actions-back">
        <Link to="/exercicios" className="btn btn-ghost">
          ← Voltar para Exercícios
        </Link>
        <Link to={`/topico/${topic.slug}`} className="btn btn-ghost">
          Ver o tópico no atlas
        </Link>
      </div>
    </article>
  );
}
