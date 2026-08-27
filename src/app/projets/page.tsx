import type { Metadata } from "next";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { SiteShell } from "@/components/SiteShell";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Études de cas de Lucas Desrousseaux en méthodes, industrialisation, data, qualité et Industrie 4.0.",
  alternates: { canonical: "/projets" },
};

export default function ProjetsPage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="kicker">Études de cas</p>
            <h1>Le problème avant l’outil.<br />Le résultat avant l’effet vitrine.</h1>
          </div>
          <div>
            <p>
              Six projets pour montrer comment j’observe, structure, prototype
              et déploie — du procédé industriel au produit numérique.
            </p>
            <span className="privacy-badge">Données publiques anonymisées</span>
          </div>
        </div>
      </section>
      <section className="section section--projects">
        <div className="container">
          <ProjectShowcase projects={projects} />
        </div>
      </section>
    </SiteShell>
  );
}
