import { useRef, useState } from "react";
import { topics } from "../data/topics";
import TopicCard from "../components/TopicCard";
import heroImage from "../assets/brand/imagem-principal.webp";
import { useInView } from "../hooks/useInView";
import "./Home.css";

function HeroVisual() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -18, y: px * 22 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      className="hero-visual-frame"
      ref={frameRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg className="hero-rings" viewBox="0 0 600 600" aria-hidden="true">
        <defs>
          <radialGradient id="lensGlow" cx="50%" cy="46%" r="62%">
            <stop offset="0%" stopColor="#fffdf8" stopOpacity="1" />
            <stop offset="68%" stopColor="#eef2e0" stopOpacity="1" />
            <stop offset="100%" stopColor="#dfe6ce" stopOpacity="1" />
          </radialGradient>
        </defs>
        <circle cx="300" cy="300" r="270" fill="url(#lensGlow)" />
        <circle cx="300" cy="300" r="270" fill="none" stroke="#1b3361" strokeOpacity="0.16" strokeWidth="2" />
        <circle cx="300" cy="300" r="234" fill="none" stroke="#1b3361" strokeOpacity="0.09" strokeWidth="1" />
        <line x1="300" y1="40" x2="300" y2="92" stroke="#1b3361" strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="300" y1="508" x2="300" y2="560" stroke="#1b3361" strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="40" y1="300" x2="92" y2="300" stroke="#1b3361" strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="508" y1="300" x2="560" y2="300" stroke="#1b3361" strokeOpacity="0.3" strokeWidth="1.5" />
      </svg>
      <div
        className="hero-photo-3d"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <img
          src={heroImage}
          alt="Ilustração representativa do corpo humano e seus sistemas"
          className="hero-photo"
        />
        <div className="hero-photo-shadow" aria-hidden="true" />
      </div>
    </div>
  );
}

export default function Home() {
  const { ref: sectionRef, inView } = useInView<HTMLDivElement>();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Faculdade de Ciências da Saúde · UFR</p>
          <h1>
            Atlas de <span>Morfologia</span>
          </h1>
          <p className="hero-lede">
            Um atlas digital e interativo de biologia celular, histologia, embriologia e
            anatomia — construído para integrar teoria e prática no ensino das ciências
            biológicas e da saúde.
          </p>
          <div className="hero-actions">
            <a href="#sistemas" className="btn btn-primary">
              Explorar o atlas
            </a>
            <a href="/sobre" className="btn btn-ghost">
              Sobre o projeto
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <HeroVisual />
        </div>
      </section>

      <section className="systems-section" id="sistemas">
        <div className={`systems-section-head ${inView ? "is-visible" : ""}`} ref={sectionRef}>
          <h2>Selecione um sistema</h2>
          <p>Explore cada tópico do atlas de morfologia.</p>
        </div>

        <div className="systems-grid">
          {topics.map((topic, index) => (
            <TopicCard topic={topic} index={index} key={topic.slug} />
          ))}
        </div>
      </section>
    </div>
  );
}
