import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Parcours",
  description:
    "Parcours public de Lucas Desrousseaux : métallurgie, industrialisation, méthodes et Industrie 4.0.",
  alternates: { canonical: "/cv" },
};

const timeline = [
  {
    period: "Aujourd’hui",
    title: "Transformation industrielle & Industrie 4.0",
    place: "Proferro",
    text: "Structuration des données techniques, pilotage visuel, outillage numérique et accompagnement des usages.",
  },
  {
    period: "Industrialisation",
    title: "Conception et méthodes",
    place: "Decoval",
    text: "Passage du besoin technique à une solution fabricable, documentée et contrôlable.",
  },
  {
    period: "Fondations",
    title: "Culture atelier & métallurgie",
    place: "Corri Servais",
    text: "Compréhension des contraintes de production, des procédés et du travail de terrain.",
  },
];

export default function CareerPage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div><p className="kicker">Parcours</p><h1>Du procédé industriel à la transformation des usages.</h1></div>
          <div>
            <p>
              Une trajectoire construite autour d’une même question :
              comment rendre une organisation industrielle plus claire et plus robuste ?
            </p>
            <Link className="text-link" href="/contact">Demander le CV détaillé →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container career-layout">
          <div className="career-intro">
            <p className="kicker">Expériences</p>
            <h2>Une progression cohérente.</h2>
            <p>
              Ce parcours public présente l’essentiel sans exposer d’adresse,
              de téléphone ni de document personnel téléchargeable.
            </p>
          </div>
          <div className="career-timeline">
            {timeline.map((item) => (
              <article key={item.place}>
                <span>{item.period}</span>
                <div><p>{item.place}</p><h3>{item.title}</h3><div>{item.text}</div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container career-columns">
          <div>
            <p className="kicker">Positionnement</p>
            <h2>Ce que je recherche.</h2>
            <p>
              Un CDI à partir de septembre 2027, sur des missions mêlant méthodes,
              industrialisation, amélioration continue et transformation numérique.
            </p>
          </div>
          <div className="career-facts">
            <div><span>Zone</span><strong>Lille · MEL · Belgique frontalière</strong></div>
            <div><span>Environnement</span><strong>Industrie · Atelier · Bureau d’études</strong></div>
            <div><span>Contribution</span><strong>Structurer · Piloter · Déployer</strong></div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
