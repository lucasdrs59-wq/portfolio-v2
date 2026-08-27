import Link from "next/link";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { SiteShell } from "@/components/SiteShell";
import { projects } from "@/lib/projects";

const expertise = [
  {
    number: "01",
    title: "Méthodes & industrialisation",
    text: "Passer du besoin au processus robuste : gammes, standards, flux, outillages et critères de validation.",
    tags: ["Standardisation", "AMDEC", "Capabilité"],
  },
  {
    number: "02",
    title: "Data & Industrie 4.0",
    text: "Structurer les données avant de digitaliser, puis construire des outils de pilotage réellement utilisables.",
    tags: ["Power BI", "ERP", "Retool"],
  },
  {
    number: "03",
    title: "Métallurgie & terrain",
    text: "Comprendre les contraintes de fabrication pour faire le lien entre atelier, méthodes, qualité et bureau d’études.",
    tags: ["Fonderie", "Chaudronnerie", "Métrologie"],
  },
  {
    number: "04",
    title: "Adoption & amélioration",
    text: "Déployer avec les utilisateurs : essais courts, documentation claire, formation et mesure des résultats.",
    tags: ["PDCA", "DMAIC", "ADKAR"],
  },
];

const method = [
  { step: "01", title: "Observer", text: "Aller au poste, écouter et rendre le problème visible." },
  { step: "02", title: "Structurer", text: "Clarifier les données, règles, rôles et critères de réussite." },
  { step: "03", title: "Prototyper", text: "Tester une solution courte avec les personnes concernées." },
  { step: "04", title: "Déployer", text: "Documenter, former, mesurer puis améliorer en continu." },
];

export default function Home() {
  const featured = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <SiteShell>
      <section className="hero">
        <div className="hero__glow hero__glow--one" aria-hidden="true" />
        <div className="hero__glow hero__glow--two" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__content">
            <div className="availability-pill">
              <span aria-hidden="true" />
              Disponible pour un CDI dès septembre 2027
            </div>
            <p className="kicker">Méthodes · Industrialisation · Métallurgie · Industrie 4.0</p>
            <h1>
              Je transforme les problèmes d’atelier en systèmes
              <em> simples, mesurables et adoptés.</em>
            </h1>
            <p className="hero__lead">
              Un profil hybride terrain + digital pour fiabiliser les processus,
              rendre les données utiles et faire vivre les solutions dans la durée.
            </p>
            <div className="hero__actions">
              <Link href="/projets" className="button button--primary">
                Explorer les projets <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="button button--ghost">
                Échanger avec moi
              </Link>
            </div>
            <div className="hero__meta">
              <div>
                <span className="hero__meta-icon" aria-hidden="true">⌖</span>
                <p><strong>Lille & métropole européenne</strong><br />Mobilité Belgique frontalière</p>
              </div>
              <div>
                <span className="hero__meta-icon" aria-hidden="true">↗</span>
                <p><strong>GitHub documenté</strong><br />Code, décisions et études de cas</p>
              </div>
            </div>
          </div>

          <div className="workflow-card" aria-label="Démarche de projet">
            <div className="workflow-card__header">
              <div>
                <span>Ma chaîne de valeur</span>
                <strong>Du réel au résultat</strong>
              </div>
              <span className="workflow-card__status">Système actif</span>
            </div>
            <div className="workflow-card__diagram">
              {[
                ["01", "Terrain", "Observer le flux"],
                ["02", "Données", "Fiabiliser les faits"],
                ["03", "Décision", "Rendre l’arbitrage clair"],
                ["04", "Adoption", "Ancrer la solution"],
              ].map(([number, title, text], index) => (
                <div className="workflow-step" key={number}>
                  <div className="workflow-step__node">
                    <span>{number}</span>
                    <i aria-hidden="true" />
                  </div>
                  <div>
                    <strong>{title}</strong>
                    <small>{text}</small>
                  </div>
                  {index < 3 ? <span className="workflow-step__line" aria-hidden="true" /> : null}
                </div>
              ))}
            </div>
            <div className="workflow-card__footer">
              <span>Approches mobilisées</span>
              <div>
                <b>PDCA</b><b>DMAIC</b><b>ADKAR</b><b>Lean</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metric-strip" aria-label="Chiffres clés">
        <div className="container metric-strip__grid">
          <div><strong>50+</strong><span>outils et composants structurés</span></div>
          <div><strong>385</strong><span>résultats métrologiques analysés</span></div>
          <div><strong>19/20</strong><span>projet d’industrialisation</span></div>
          <div><strong>2×</strong><span>culture terrain et numérique</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="kicker">Sélection</p>
              <h2>Des projets conçus pour être utiles.</h2>
            </div>
            <div className="section-heading__aside">
              <p>Chaque étude explicite le problème, la démarche, les livrables et les résultats.</p>
              <Link href="/projets">Voir les 6 projets <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <ProjectShowcase projects={featured} compact />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-heading section-heading--compact">
            <div>
              <p className="kicker">Double compétence</p>
              <h2>Comprendre l’atelier. Structurer le système.</h2>
            </div>
          </div>
          <div className="expertise-grid">
            {expertise.map((item) => (
              <article className="expertise-card" key={item.number}>
                <span className="expertise-card__number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container method-layout">
          <div className="method-intro">
            <p className="kicker">Méthode de travail</p>
            <h2>Le digital commence par une réalité terrain bien comprise.</h2>
            <p>
              Je privilégie les cycles courts et les preuves : une donnée définie,
              une responsabilité claire et un résultat que l’équipe peut vérifier.
            </p>
            <Link className="text-link" href="/a-propos">
              Découvrir mon approche <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ol className="method-list">
            {method.map((item) => (
              <li key={item.step}>
                <span>{item.step}</span>
                <div><strong>{item.title}</strong><p>{item.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-heading section-heading--dark">
            <div>
              <p className="kicker">Expérience</p>
              <h2>Une progression entre atelier, méthodes et transformation.</h2>
            </div>
          </div>
          <div className="experience-track">
            <article>
              <span>Fondations</span><strong>Corri Servais</strong>
              <p>Premiers repères industriels, lecture du terrain et exigence de fabrication.</p>
            </article>
            <article>
              <span>Industrialisation</span><strong>Decoval</strong>
              <p>Conception, méthodes et passage d’une solution technique vers la production.</p>
            </article>
            <article>
              <span>Industrie 4.0</span><strong>Proferro</strong>
              <p>Structuration des données, outils de pilotage et adoption par les utilisateurs.</p>
            </article>
          </div>
          <p className="confidentiality-note">
            Les contenus publics sont volontairement anonymisés et reconstruits avec des données synthétiques.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container github-callout">
          <div className="github-callout__symbol" aria-hidden="true">&lt;/&gt;</div>
          <div>
            <p className="kicker">GitHub comme preuve de travail</p>
            <h2>Des projets lisibles, versionnés et documentés.</h2>
            <p>
              Chaque dépôt public vise le même standard : démarrage rapide,
              architecture explicite, décisions tracées, données de démonstration
              et règle d’archivage.
            </p>
          </div>
          <a
            className="button button--dark"
            href="https://github.com/lucasdrs59-wq"
            target="_blank"
            rel="noreferrer"
          >
            Voir le GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container cta-card">
          <div>
            <p className="kicker">Et maintenant ?</p>
            <h2>Vous avez un sujet terrain à rendre plus simple ?</h2>
            <p>Parlons méthodes, données, industrialisation ou déploiement.</p>
          </div>
          <Link href="/contact" className="button button--primary">
            Prendre contact <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
