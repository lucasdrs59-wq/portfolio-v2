import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Le profil, l’approche et les compétences de Lucas Desrousseaux en méthodes et Industrie 4.0.",
  alternates: { canonical: "/a-propos" },
};

const principles = [
  ["Terrain d’abord", "Une solution est crédible si elle respecte les contraintes de ceux qui l’utilisent."],
  ["Simple à expliquer", "Si la règle ne tient pas en quelques phrases, elle sera difficile à faire vivre."],
  ["Mesurable", "Un avant, un après et des critères partagés pour décider sans intuition seule."],
  ["Transmissible", "Documentation, conventions et autonomie font partie du livrable."],
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="page-hero page-hero--about">
        <div className="container about-hero">
          <div className="portrait-frame">
            <Image
              src="/avatar.jpg"
              alt="Portrait de Lucas Desrousseaux"
              width={620}
              height={760}
              priority
            />
            <span>Terrain × Digital</span>
          </div>
          <div>
            <p className="kicker">À propos</p>
            <h1>Créer le lien entre ceux qui fabriquent, ceux qui décident et les outils qui les aident.</h1>
            <p className="about-hero__lead">
              Je suis Lucas Desrousseaux. Mon parcours dans la métallurgie,
              l’industrialisation et la transformation numérique m’a appris
              qu’un bon outil n’est jamais le point de départ : il vient après
              la compréhension du geste, du flux et de la décision.
            </p>
            <div className="about-hero__actions">
              <Link className="button button--primary" href="/projets">Voir mes projets</Link>
              <Link className="button button--ghost" href="/contact">Me contacter</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-story">
          <div>
            <p className="kicker">Mon fil conducteur</p>
            <h2>Rendre le travail plus lisible, plus fiable et plus facile à transmettre.</h2>
          </div>
          <div className="prose">
            <p>
              Les environnements industriels m’attirent parce qu’ils obligent à
              confronter les idées au réel. Une codification, un dashboard ou
              une procédure n’a de valeur que si elle réduit une ambiguïté et
              aide une personne à mieux agir.
            </p>
            <p>
              C’est ce qui relie mes sujets : industrialiser une pièce, structurer
              un parc outillage, analyser des contrôles métrologiques ou concevoir
              une application. À chaque fois, le défi est de transformer une
              complexité diffuse en système compréhensible.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-heading section-heading--compact">
            <div><p className="kicker">Principes</p><h2>Ce qui guide mes décisions.</h2></div>
          </div>
          <div className="principle-grid">
            {principles.map(([title, text], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container skills-layout">
          <div>
            <p className="kicker">Compétences</p>
            <h2>Une boîte à outils, pas une collection de mots-clés.</h2>
            <p>Les méthodes et technologies sont choisies selon la décision à faciliter.</p>
          </div>
          <div className="skill-groups">
            <div><strong>Industrialiser</strong><p>Analyse de flux · Gammes · Outillages · CAO · Métrologie · Qualité</p></div>
            <div><strong>Piloter</strong><p>Power BI · Deneb · KPI · ERP · SPC · Modèles de données</p></div>
            <div><strong>Améliorer</strong><p>PDCA · DMAIC · Lean · Standardisation · Résolution de problèmes</p></div>
            <div><strong>Déployer</strong><p>ADKAR · Ateliers utilisateurs · Documentation · Formation · Gouvernance</p></div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
