import Image from "next/image";

const projects = [
  {
    title: "Fonderie fonte — Suivi production prototype & résolution de problèmes (sableriE)",
    period: "BTS • Stage (8 semaines)",
    tags: ["Fonderie", "Production", "Qualité", "Terrain"],
    bullets: [
      "Suivi de production sur pièce prototype (atelier).",
      "Analyse des causes + actions correctives en sablerie.",
      "Standardisation progressive et capitalisation (retour d’expérience).",
    ],
  },
  {
    title: "Industrialisation — Reconception bras de levier aluminium (étiqueteuse)",
    period: "BTS • Projet de fin d’année",
    tags: ["Industrialisation", "CAO", "Outillage", "Qualité"],
    bullets: [
      "Conception CAO + préparation industrialisation.",
      "Simulation de coulée + préparation outillage.",
      "Procédures moulage/coulée + contrôle qualité mis en place.",
    ],
  },
  {
    title: "Chaudronnerie — Chiffrage, BE & suivi atelier",
    period: "Licence • Alternance",
    tags: ["Chiffrage", "BE", "Suivi prod", "Standardisation"],
    bullets: [
      "Création/structuration d’outils Excel de chiffrage.",
      "Suivi d’affaires et support atelier (terrain).",
      "CAO installations + rédaction de notices techniques.",
    ],
  },
  {
    title: "Usine 4.0 — ERP, inventaire & codification atelier",
    period: "Mastère • Projet",
    tags: ["ERP", "Data", "Méthodes", "Déploiement"],
    bullets: [
      "Co-pilotage du changement ERP + rédaction modes opératoires.",
      "Inventaire : cartographie emplacements + étiquetage atelier.",
      "Codification pièces/emplacements + données exploitables par l’ERP.",
    ],
  },
];

const tags = [
  "Industrie 4.0",
  "ERP",
  "Data",
  "Méthodes",
  "Qualité",
  "Fonderie",
  "Chaudronnerie",
  "CAO",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(900px_500px_at_15%_10%,rgba(59,130,246,.18),transparent_60%),radial-gradient(900px_500px_at_85%_20%,rgba(245,158,11,.14),transparent_55%),linear-gradient(180deg,#070A10, #0B1020)] text-zinc-100">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/15">
              {/* Avatar : mets ta photo dans /public/avatar.jpg plus tard */}
              <Image
                src="/avatar.jpg"
                alt="Photo"
                fill
                className="object-cover"
                sizes="36px"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Lucas Desrousseaux</div>
              <div className="text-xs text-zinc-400">
                Industrie 4.0 • Métallurgie (Fonderie & Chaudronnerie)
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-5 text-sm text-zinc-300 md:flex">
            <a href="#projects" className="hover:text-white">
              Projets
            </a>
            <a href="#about" className="hover:text-white">
              À propos
            </a>
            <a href="#stack" className="hover:text-white">
              Compétences
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-white/10"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-14 md:pt-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Portfolio • Projets • Méthodes • Résultats
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Chef de projet Industrie 4.0{" "}
              <span className="text-zinc-300">—</span>{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-blue-300 bg-clip-text text-transparent">
                Métallurgie
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-zinc-300">
              Je combine l’approche{" "}
              <b className="text-zinc-100">terrain</b> (fonderie/chaudronnerie,
              industrialisation, qualité) et l’approche{" "}
              <b className="text-zinc-100">data & SI</b> (ERP, standardisation,
              codification, KPI) pour livrer des améliorations concrètes.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
              >
                Voir mes projets
              </a>
              <a
                href="/cv.pdf"
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                Télécharger mon CV
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-desrousseaux-53045b281"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-zinc-400">Signature</div>
                <div className="mt-1 font-semibold">Métallurgie + Digital</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-zinc-400">Ce que je livre</div>
                <div className="mt-1 font-semibold">Standards, outils, KPI</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-zinc-400">Approche</div>
                <div className="mt-1 font-semibold">Terrain → données → déploiement</div>
              </div>
            </div>
          </div>

          {/* Card droite */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,.45)]">
            <h2 className="text-lg font-semibold">En bref</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>• Projets atelier & BE : méthodes + exécution</li>
              <li>• Qualité : standardisation, contrôle, capabilité (selon besoin)</li>
              <li>• Industrie 4.0 : ERP, data, codification, inventaire</li>
              <li>• Communication : livrables clairs + modes opératoires</li>
            </ul>

            <div className="mt-6 border-t border-white/10 pt-5">
              <div className="text-xs text-zinc-400">Domaines</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs text-zinc-400">Confidentialité</div>
              <div className="mt-1 text-sm text-zinc-300">
                Les projets sont décrits de façon <b className="text-zinc-100">anonymisée</b> (clients/infos sensibles).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-5 pb-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Projets</h2>
            <p className="mt-1 text-sm text-zinc-400">
              Format “case study” : contexte → démarche → livrables → résultats.
            </p>
          </div>

          {/* Search (placeholder V2) */}
          <div className="hidden w-[320px] rounded-2xl border border-white/10 bg-white/5 p-3 md:block">
            <div className="text-xs text-zinc-400">Recherche (bientôt)</div>
            <div className="mt-1 text-sm text-zinc-300">
              Filtrer par tags / mots-clés.
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 hover:border-white/20"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200">
                  {p.period}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {p.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>

              <div className="mt-5 text-sm text-zinc-400">
                Page projet détaillée : <span className="text-zinc-200">V2</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">À propos</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs text-zinc-400">Profil</div>
              <div className="mt-2 text-sm text-zinc-300">
                Métallurgie (fonderie/chaudronnerie) + transformation digitale.
                Je cherche des missions où je peux <b className="text-zinc-100">structurer</b>,{" "}
                <b className="text-zinc-100">standardiser</b> et{" "}
                <b className="text-zinc-100">déployer</b>.
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs text-zinc-400">Méthode</div>
              <div className="mt-2 text-sm text-zinc-300">
                Terrain → compréhension du process → données/KPI → solution simple → documentation
                → adoption en atelier.
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs text-zinc-400">Ce qui me différencie</div>
              <div className="mt-2 text-sm text-zinc-300">
                Capacité à parler “atelier” et “SI” : je fais le lien entre
                production, BE et outils numériques.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Compétences</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Industrie & terrain</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>• Fonderie / chaudronnerie : contraintes réelles, sécurité, qualité</li>
              <li>• Industrialisation : CAO, outillage, procédures, contrôle</li>
              <li>• Suivi production / suivi d’affaires</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Digital & méthodes</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>• ERP : codification, emplacements, inventaire, déploiement</li>
              <li>• Outils : Excel/BI, structuration données, KPI</li>
              <li>• Amélioration continue : PDCA, 5 Why, standardisation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_.9fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
              <p className="mt-2 text-sm text-zinc-300">
                Tu peux me contacter via le formulaire (V2) ou directement via LinkedIn.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="mailto:lucas.drs59@gmail.com"
                  className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
                >
                  M’écrire par email
                </a>
                <a
                  href="https://www.linkedin.com/in/lucas-desrousseaux-53045b281"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  LinkedIn
                </a>
              </div>

              <div className="mt-6 text-xs text-zinc-500">
                Formulaire de contact + envoi email : on l’ajoute à la prochaine étape.
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
              <div className="text-sm font-semibold">À venir (V2)</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                <li>• Pages projet détaillées + galerie preuves</li>
                <li>• Formulaire contact relié à ton email</li>
                <li>• Page CV (aperçu + téléchargement)</li>
                <li>• Multi-langue EN/NL</li>
                <li>• Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-zinc-400">
          <span>© {new Date().getFullYear()} Lucas Desrousseaux</span>
          <span className="text-zinc-500">Portfolio — Industrie 4.0 • Métallurgie</span>
        </div>
      </footer>
    </main>
  );
}
