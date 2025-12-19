import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { projects } from "@/lib/projects";

export default function ProjetsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Projets</h1>
        <p className="mt-2 text-sm text-zinc-400">
          Études de cas anonymisées : contexte → démarche → livrables → résultats.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projets/${p.slug}`}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 hover:border-white/20"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-base font-semibold">{p.title}</h2>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200">
                  {p.period}
                </span>
              </div>

              <p className="mt-3 text-sm text-zinc-300">{p.intro}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 text-sm text-zinc-400">
                Ouvrir l’étude de cas <span className="text-zinc-200 group-hover:underline">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
