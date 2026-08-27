import Link from "next/link";
import type { ReactNode } from "react";
import { LogoMark } from "@/components/LogoMark";

const navigation = [
  { href: "/projets", label: "Projets" },
  { href: "/a-propos", label: "À propos" },
  { href: "/cv", label: "Parcours" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-frame">
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="brand" aria-label="Lucas Desrousseaux — accueil">
            <LogoMark className="brand__mark" />
            <span className="brand__copy">
              <strong>Lucas Desrousseaux</strong>
              <small>Méthodes · Industrie 4.0</small>
            </span>
          </Link>

          <nav className="site-nav" aria-label="Navigation principale">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="button button--small button--dark">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main id="contenu">{children}</main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div className="site-footer__brand">
            <LogoMark className="site-footer__mark" />
            <div>
              <strong>Lucas Desrousseaux</strong>
              <p>Méthodes · Industrialisation · Métallurgie · Industrie 4.0</p>
            </div>
          </div>
          <div className="site-footer__links" aria-label="Liens externes">
            <a href="https://github.com/lucasdrs59-wq" target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-desrousseaux-53045b281"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <Link href="/contact">Contact</Link>
          </div>
          <p className="site-footer__legal">
            © {new Date().getFullYear()} Lucas Desrousseaux · Données projets anonymisées.
          </p>
        </div>
      </footer>
    </div>
  );
}
