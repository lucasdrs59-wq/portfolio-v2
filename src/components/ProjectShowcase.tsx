"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/lib/projects";

type Filter = "Tous" | ProjectCategory;

export function ProjectShowcase({
  projects,
  compact = false,
}: {
  projects: Project[];
  compact?: boolean;
}) {
  const [filter, setFilter] = useState<Filter>("Tous");
  const [preview, setPreview] = useState<Project | null>(null);
  const visible = filter === "Tous" ? projects : projects.filter((project) => project.category === filter);

  useEffect(() => {
    if (!preview) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreview(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [preview]);

  return (
    <div className={compact ? "project-showcase project-showcase--compact" : "project-showcase"}>
      {!compact ? (
        <div className="filter-bar" aria-label="Filtrer les projets">
          {projectCategories.map((category) => (
            <button
              type="button"
              key={category}
              className={filter === category ? "is-active" : undefined}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      <div className="project-grid" aria-live="polite">
        {visible.map((project, index) => (
          <article
            className={`project-card project-card--${project.accent}`}
            key={project.slug}
            style={{ "--card-delay": `${Math.min(index, 5) * 70}ms` } as React.CSSProperties}
          >
            <div className="project-card__topline">
              <span>{project.category}</span>
              <span>{project.period}</span>
            </div>
            <div>
              <p className="eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p className="project-card__summary">{project.summary}</p>
            </div>
            <div className="project-card__metrics" aria-label="Résultats clés">
              {project.metrics.slice(0, 2).map((metric) => (
                <div key={`${project.slug}-${metric.value}`}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <div className="project-card__tags">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="project-card__actions">
              <Link href={`/projets/${project.slug}`}>Étude complète <span aria-hidden="true">→</span></Link>
              <button type="button" onClick={() => setPreview(project)}>
                Aperçu
              </button>
            </div>
          </article>
        ))}
      </div>

      {preview ? (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setPreview(null)}>
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="project-modal__close"
              type="button"
              onClick={() => setPreview(null)}
              aria-label="Fermer l’aperçu"
              autoFocus
            >
              ×
            </button>
            <p className="eyebrow">{preview.category} · {preview.status}</p>
            <h2 id="project-modal-title">{preview.title}</h2>
            <p className="project-modal__challenge">{preview.challenge}</p>
            <div className="project-modal__metrics">
              {preview.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <h3>Livrables</h3>
            <ul className="check-list">
              {preview.deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>
            <div className="project-modal__footer">
              <Link className="button button--dark" href={`/projets/${preview.slug}`}>
                Lire l’étude complète
              </Link>
              <button className="button button--ghost" type="button" onClick={() => setPreview(null)}>
                Fermer
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
}
