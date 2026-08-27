import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter Lucas Desrousseaux pour un échange autour des méthodes, de l’industrialisation et de l’Industrie 4.0.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="contact-page">
        <div className="container contact-layout">
          <div>
            <p className="kicker">Contact</p>
            <h1>Construisons une première conversation utile.</h1>
            <p className="contact-lead">
              Un sujet méthodes, data, qualité ou déploiement ? Envoyez-moi le
              contexte en quelques lignes. Je réponds avec plaisir.
            </p>
            <div className="contact-availability">
              <span aria-hidden="true" />
              <div><strong>Disponible dès septembre 2027</strong><p>CDI · Lille, MEL et Belgique frontalière</p></div>
            </div>
          </div>
          <div className="contact-card">
            <span className="contact-card__label">Canaux publics</span>
            <h2>Choisissez le plus simple.</h2>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/lucas-desrousseaux-53045b281"
              target="_blank"
              rel="noreferrer"
            >
              <span aria-hidden="true">in</span>
              <div><small>LinkedIn</small><strong>Lucas Desrousseaux</strong></div>
              <b aria-hidden="true">↗</b>
            </a>
            <a
              className="contact-link"
              href="https://github.com/lucasdrs59-wq"
              target="_blank"
              rel="noreferrer"
            >
              <span aria-hidden="true">&lt;/&gt;</span>
              <div><small>GitHub</small><strong>@lucasdrs59-wq</strong></div>
              <b aria-hidden="true">↗</b>
            </a>
            <p className="contact-card__note">
              LinkedIn est le canal recommandé pour un premier échange professionnel.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
