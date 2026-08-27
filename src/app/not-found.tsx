import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="not-found">
        <div>
          <strong>404</strong>
          <h1>Cette page n’est pas dans le flux.</h1>
          <p>Le lien a peut-être été déplacé pendant la restructuration du portfolio.</p>
          <Link className="button button--primary" href="/">Retour à l’accueil</Link>
        </div>
      </section>
    </SiteShell>
  );
}
