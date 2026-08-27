import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { getProject, projects } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projets/${project.slug}` },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <SiteShell>
      <article>
        <header className={`case-hero case-hero--${project.accent}`}>
          <div className="container">
            <Link href="/projets" className="back-link">← Tous les projets</Link>
            <div className="case-hero__grid">
              <div>
                <p className="kicker">{project.category} · {project.status}</p>
                <h1>{project.title}</h1>
                <p className="case-hero__summary">{project.summary}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <div className="case-metrics">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong><span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="container case-layout">
          <aside className="case-sidebar">
            <span>Projet</span><strong>{project.period}</strong>
            <span>Format</span><strong>{project.status}</strong>
            <span>Domaine</span><strong>{project.category}</strong>
          </aside>
          <div className="case-content">
            <section>
              <p className="kicker">01 · Enjeu</p>
              <h2>Le problème à résoudre</h2>
              <p className="case-content__lead">{project.challenge}</p>
            </section>
            <section>
              <p className="kicker">02 · Démarche</p>
              <h2>Une progression vérifiable</h2>
              <ol className="case-steps">
                {project.approach.map((step, index) => (
                  <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>
                ))}
              </ol>
            </section>
            <section>
              <p className="kicker">03 · Livrables</p>
              <h2>Ce qui a été produit</h2>
              <div className="deliverable-grid">
                {project.deliverables.map((deliverable) => (
                  <div key={deliverable}><span aria-hidden="true">✓</span>{deliverable}</div>
                ))}
              </div>
            </section>
            <section>
              <p className="kicker">04 · Résultats</p>
              <h2>Ce que la solution rend possible</h2>
              <ul className="outcome-list">
                {project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
              </ul>
            </section>
            {project.confidentiality ? (
              <aside className="case-confidentiality">
                <strong>Confidentialité maîtrisée</strong>
                <p>{project.confidentiality}</p>
              </aside>
            ) : null}
            <nav className="case-next" aria-label="Navigation entre projets">
              <Link href="/projets">Voir toutes les études</Link>
              <Link href="/contact">Discuter de cette démarche →</Link>
            </nav>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
