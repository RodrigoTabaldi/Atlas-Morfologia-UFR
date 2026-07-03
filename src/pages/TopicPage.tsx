import { useRef, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getTopicBySlug, getAdjacentTopics } from "../data/topics";
import {
  accentVar,
  accentSoftVar,
  statusLabel,
  statusVar,
  contentKindLabel,
} from "../styles/accent";
import "./TopicPage.css";

function TopicVisual({
  image,
  imageAlt,
  accent,
}: {
  image: string;
  imageAlt: string;
  accent: string;
}) {
  const [failed, setFailed] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 10 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  if (failed) {
    return (
      <div className="visual-fallback" style={{ "--ph-accent": accent } as React.CSSProperties}>
        <svg viewBox="0 0 200 140" aria-hidden="true">
          <rect x="1" y="1" width="198" height="138" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 5" />
          <circle cx="100" cy="68" r="34" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="100" cy="68" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="100" cy="68" r="3" fill="currentColor" />
        </svg>
        <p>Imagem indisponível no momento.</p>
      </div>
    );
  }

  return (
    <div
      className="topic-visual-tilt"
      ref={frameRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
    >
      <img
        src={image}
        alt={imageAlt}
        className="topic-visual-image"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function TopicPage() {
  const { slug = "" } = useParams();
  const topic = getTopicBySlug(slug);

  if (!topic) {
    return <Navigate to="/" replace />;
  }

  const { previous, next } = getAdjacentTopics(slug);
  const accent = accentVar[topic.accent];
  const accentSoft = accentSoftVar[topic.accent];

  return (
    <article
      className="topic-page"
      style={{ "--accent": accent, "--accent-soft": accentSoft } as React.CSSProperties}
    >
      <nav className="breadcrumb" aria-label="Trilha de navegação">
        <Link to="/">Atlas</Link>
        <span aria-hidden="true">/</span>
        <span className="breadcrumb-current">{topic.title}</span>
      </nav>

      <header className="topic-header">
        <div className="topic-header-meta">
          <span className="status-badge" style={{ color: statusVar[topic.status] }}>
            <i style={{ background: statusVar[topic.status] }} />
            {statusLabel[topic.status]}
          </span>
        </div>
        <h1>{topic.title}</h1>
        <p className="topic-area">{topic.area}</p>
        <p className="topic-summary">{topic.summary}</p>
      </header>

      <section className="topic-visual-section">
        <div className="topic-visual-frame">
          <TopicVisual image={topic.image} imageAlt={topic.imageAlt} accent={accent} />
        </div>
        <p className="image-credit">
          Imagem ilustrativa do sistema — o material específico do acervo da UFR
          (fotomicrografias, peças anatômicas) será adicionado conforme o projeto avança.
        </p>
      </section>

      <section className="topic-body-section">
        <div className="topic-body-grid">
          <div className="topic-body-main">
            <h2>Descrição</h2>
            <p className="placeholder-text">
              O conteúdo descritivo desta lâmina — texto teórico-prático, legendas das
              estruturas e correlações clínicas — será inserido aqui conforme a
              redação do conteúdo avança, com base na bibliografia de morfologia e em
              artigos científicos de referência.
            </p>

            <h2>Estruturas em destaque</h2>
            <ul className="placeholder-list">
              <li>Estrutura 1 — a ser definida</li>
              <li>Estrutura 2 — a ser definida</li>
              <li>Estrutura 3 — a ser definida</li>
            </ul>
          </div>

          <aside className="topic-body-side">
            <div className="side-card">
              <h3>Ficha do tópico</h3>
              <dl>
                <dt>Subáreas</dt>
                <dd>{topic.area}</dd>
                <dt>Formato planejado</dt>
                <dd>{contentKindLabel[topic.contentKind]}</dd>
                <dt>Status</dt>
                <dd>{statusLabel[topic.status]}</dd>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <nav className="topic-pager" aria-label="Navegação entre tópicos">
        {previous ? (
          <Link to={`/topico/${previous.slug}`} className="pager-link pager-prev">
            <span className="pager-label">← Anterior</span>
            <span className="pager-title">{previous.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/topico/${next.slug}`} className="pager-link pager-next">
            <span className="pager-label">Próximo →</span>
            <span className="pager-title">{next.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
