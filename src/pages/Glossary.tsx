import { useMemo, useState } from "react";
import { glossaryTerms, type GlossaryTerm } from "../data/glossary";
import "./InfoPage.css";
import "./Glossary.css";

const areas: GlossaryTerm["area"][] = ["Citologia", "Histologia", "Embriologia", "Anatomia"];

export default function Glossary() {
  const [query, setQuery] = useState("");
  const [activeArea, setActiveArea] = useState<GlossaryTerm["area"] | "Todas">("Todas");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return glossaryTerms.filter((t) => {
      const matchesArea = activeArea === "Todas" || t.area === activeArea;
      const matchesQuery =
        q.length === 0 ||
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q);
      return matchesArea && matchesQuery;
    });
  }, [query, activeArea]);

  return (
    <article className="info-page">
      <header className="info-header">
        <p className="info-eyebrow">Referência rápida</p>
        <h1>Glossário acadêmico</h1>
        <p className="info-lede">
          Termos fundamentais de citologia, histologia, embriologia e anatomia usados ao
          longo do atlas, reunidos em um único lugar para consulta rápida.
        </p>
      </header>

      <section className="info-section glossary-controls-section">
        <div className="glossary-search">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar termo ou palavra-chave..."
            aria-label="Buscar no glossário"
          />
        </div>

        <div className="glossary-filters" role="group" aria-label="Filtrar por subárea">
          <button
            type="button"
            className={activeArea === "Todas" ? "is-active" : ""}
            onClick={() => setActiveArea("Todas")}
          >
            Todas
          </button>
          {areas.map((area) => (
            <button
              key={area}
              type="button"
              className={activeArea === area ? "is-active" : ""}
              onClick={() => setActiveArea(area)}
            >
              {area}
            </button>
          ))}
        </div>
      </section>

      <section className="info-section glossary-results-section">
        {filtered.length === 0 ? (
          <p className="glossary-empty">Nenhum termo encontrado para essa busca.</p>
        ) : (
          <dl className="glossary-list">
            {filtered.map((item, index) => (
              <div
                className="glossary-item"
                key={item.term}
                style={{ "--item-delay": `${Math.min(index, 12) * 35}ms` } as React.CSSProperties}
              >
                <div className="glossary-item-head">
                  <dt>{item.term}</dt>
                  <span className={`glossary-area-tag area-${item.area.toLowerCase()}`}>
                    {item.area}
                  </span>
                </div>
                <dd>{item.definition}</dd>
              </div>
            ))}
          </dl>
        )}
      </section>

      <section className="info-section info-section-muted">
        <h2>Em construção</h2>
        <p>
          Este glossário vai crescer junto com o atlas — novos termos serão adicionados
          conforme cada sistema for desenvolvido, sempre com base na bibliografia de
          referência do projeto.
        </p>
      </section>
    </article>
  );
}
