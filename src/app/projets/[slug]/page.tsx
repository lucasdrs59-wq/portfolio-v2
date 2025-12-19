import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjetDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-5 py-14">
        <Link href="/projets" className="text-sm text-zinc-400 hover:text-white">
          ← Retour aux projets
        </Link>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight">{project.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200">
            {project.period}
          </span>
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="mt-5 text-zinc-300">{project.intro}</p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold">Points clés</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            {project.highlights.map((h) => (
              <li key={h}>• {h}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10 space-y-8">
          {project.sections.map((s) => (
            <section key={s.title} className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {s.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-10 text-xs text-zinc-500">
          Prochaine étape : ajout des preuves (captures, extraits anonymisés, KPI).
        </div>
      </section>
    </SiteShell>
  );
}
