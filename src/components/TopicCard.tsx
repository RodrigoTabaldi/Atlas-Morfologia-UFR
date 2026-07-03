import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { Topic } from "../data/topics";
import { accentVar } from "../styles/accent";
import "./TopicCard.css";

export default function TopicCard({
  topic,
  index = 0,
}: {
  topic: Topic;
  index?: number;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = imageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -10, y: px * 12 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <Link
      to={`/topico/${topic.slug}`}
      className="topic-card"
      style={
        {
          "--card-accent": accentVar[topic.accent],
          "--card-delay": `${Math.min(index, 14) * 45}ms`,
        } as React.CSSProperties
      }
    >
      <div
        className="topic-card-image"
        ref={imageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {!imgFailed ? (
          <img
            src={topic.cardImage}
            alt={topic.imageAlt}
            loading="lazy"
            onError={() => setImgFailed(true)}
            style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(var(--img-hover-scale, 1))` }}
          />
        ) : (
          <div className="topic-card-image-fallback" aria-hidden="true">
            <svg viewBox="0 0 64 64">
              <circle cx="32" cy="26" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="32" cy="26" r="4" fill="currentColor" />
              <path d="M14 54c2-10 8-16 18-16s16 6 18 16" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        )}
      </div>

      <div className="topic-card-body">
        <h3 className="topic-card-title">{topic.title}</h3>
        <p className="topic-card-area">{topic.area}</p>
      </div>
    </Link>
  );
}
