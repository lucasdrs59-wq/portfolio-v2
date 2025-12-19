import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { getProject, projects } from "@/lib/projects";

export const dynamicParams = true;

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
            <span key={t} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200">
              {t}
            </span>
          ))}
        </div>

        <p className="mt-5 text-zinc-300">{project.intro}</p>
      </section>
    </SiteShell>
  );
}
