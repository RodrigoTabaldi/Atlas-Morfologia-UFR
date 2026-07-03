import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { topics } from "../data/topics";
import { accentVar, statusVar } from "../styles/accent";
import ufrLogo from "../assets/brand/ufr-logo-simplificado.png";
import "./Layout.css";

function Logomark() {
  return (
    <Link to="/" className="brandmark" aria-label="Atlas de Morfologia — início">
      <img src={ufrLogo} alt="" className="brandmark-logo" />
      <span className="brandmark-text">
        <strong>Universidade Federal de Rondonópolis</strong>
        <span>Atlas de Morfologia</span>
      </span>
    </Link>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pages = [
    { to: "/", label: "Início", end: true },
    { to: "/exercicios", label: "Exercícios", end: false },
    { to: "/glossario", label: "Glossário", end: false },
    { to: "/sobre", label: "Sobre o projeto", end: false },
  ];

  return (
    <>
      <div
        className={`mobile-menu-scrim ${open ? "is-open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav className={`mobile-menu ${open ? "is-open" : ""}`} aria-label="Navegação do atlas">
        <p className="mobile-menu-title">Páginas</p>
        <ul>
          {pages.map((page, index) => (
            <li key={page.to} style={{ "--item-delay": `${index * 28}ms` } as React.CSSProperties}>
              <NavLink
                to={page.to}
                end={page.end}
                className={({ isActive }) =>
                  isActive ? "mobile-menu-link is-active" : "mobile-menu-link"
                }
                onClick={onClose}
              >
                <span>{page.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <p className="mobile-menu-title mobile-menu-title-secondary">Sistemas e tópicos</p>
        <ul>
          {topics.map((topic, index) => (
            <li
              key={topic.slug}
              style={{ "--item-delay": `${(pages.length + index) * 28}ms` } as React.CSSProperties}
            >
              <NavLink
                to={`/topico/${topic.slug}`}
                className={({ isActive }) =>
                  isActive ? "mobile-menu-link is-active" : "mobile-menu-link"
                }
                onClick={onClose}
                style={{ "--link-accent": accentVar[topic.accent] } as React.CSSProperties}
              >
                <span>{topic.title}</span>
                <span
                  className="mobile-menu-dot"
                  style={{ background: statusVar[topic.status] }}
                  aria-hidden="true"
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="atlas-shell">
      <header className="atlas-header">
        <Logomark />
        <nav className="header-links" aria-label="Navegação principal">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "is-active" : "")}>
            Início
          </NavLink>
          <NavLink to="/exercicios" className={({ isActive }) => (isActive ? "is-active" : "")}>
            Exercícios
          </NavLink>
          <NavLink to="/glossario" className={({ isActive }) => (isActive ? "is-active" : "")}>
            Glossário
          </NavLink>
          <NavLink to="/sobre" className={({ isActive }) => (isActive ? "is-active" : "")}>
            Sobre o projeto
          </NavLink>
        </nav>
        <button
          className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Fechar navegação" : "Abrir navegação"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="atlas-main" key={location.pathname}>
        {children}
      </main>

      <footer className="atlas-footer">
        <div className="atlas-footer-inner">
          <img src={ufrLogo} alt="UFR" className="footer-logo" />
          <div className="footer-text">
            <p>
              <strong>Morfologia em Foco</strong> — Atlas descritivo de biologia celular,
              tecidual, estrutural e do desenvolvimento.
            </p>
            <p className="footer-meta">
              Faculdade de Ciências da Saúde · Universidade Federal de Rondonópolis (UFR)
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
