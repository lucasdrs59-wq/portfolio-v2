import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { projects } from "@/lib/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <SiteShell>
      {/* HERO */}
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
              Profil hybride : <b className="text-zinc-100">terrain</b> (fonderie/chaudronnerie,
              industrialisation, qualité) + <b className="text-zinc-100">digital</b> (ERP, données,
              standardisation). J’aime livrer des solutions concrètes : outils, standards, KPI,
              adoption atelier.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/projets" className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90">
                Voir mes projets
              </Link>
              <a href="/cv.pdf" className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
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

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,.45)]">
            <h2 className="text-lg font-semibold">En bref</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>• Projets atelier & BE : méthodes + exécution</li>
              <li>• Qualité : standardisation, contrôle</li>
              <li>• Industrie 4.0 : ERP, data, codification, inventaire</li>
              <li>• Livrables clairs : modes opératoires, standards</li>
            </ul>
            <div className="mt-6 border-t border-white/10 pt-5 text-sm text-zinc-300">
              Objectif : un portfolio “consultant/ingénieur” lisible, orienté résultats.
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mx-auto max-w-6xl px-5 pb-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Projets sélectionnés</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Études de cas (contexte → démarche → livrables → résultats).
            </p>
          </div>
          <Link href="/projets" className="text-sm text-zinc-300 hover:text-white">
            Voir tout →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projets/${p.slug}`}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 hover:border-white/20"
            >
              <div className="text-xs text-zinc-400">{p.period}</div>
              <h3 className="mt-2 text-base font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-zinc-300 line-clamp-3">{p.intro}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 text-sm text-zinc-400">
                Ouvrir <span className="text-zinc-200 group-hover:underline">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* METHOD */}
      <section className="mx-auto max-w-6xl px-5 pb-14">
        <h2 className="text-2xl font-semibold tracking-tight">Ma méthode</h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-400">
          Une logique simple, réplicable, terrain. Le but : livrer vite, bien, et faire adopter.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            { k: "1", t: "Comprendre terrain", d: "Observer, cartographier, écouter les contraintes réelles." },
            { k: "2", t: "Structurer", d: "Règles, codification, standards. Base propre avant digital." },
            { k: "3", t: "Outiller", d: "Tableaux, KPI, ERP, modes opératoires, templates." },
            { k: "4", t: "Déployer", d: "Accompagner, former, ajuster, mesurer." },
          ].map((x) => (
            <div key={x.k} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs text-zinc-400">Étape {x.k}</div>
              <div className="mt-2 font-semibold">{x.t}</div>
              <div className="mt-2 text-sm text-zinc-300">{x.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Travaillons ensemble</h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-300">
            Alternance, job, missions : je peux apporter une approche terrain + data pour structurer,
            fiabiliser et accélérer.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90">
              Me contacter
            </Link>
            <Link href="/cv" className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
              Voir le CV
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
