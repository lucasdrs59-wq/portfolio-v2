import { SiteShell } from "@/components/SiteShell";

export default function CvPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">CV</h1>
        <p className="mt-3 text-sm text-zinc-400">
          Téléchargement direct :
        </p>

        <div className="mt-5 flex gap-3">
          <a
            href="/cv.pdf"
            className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
          >
            Télécharger le CV (PDF)
          </a>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-black/20">
          <iframe
            src="/cv.pdf"
            className="h-[75vh] w-full"
            title="CV PDF"
          />
        </div>
      </section>
    </SiteShell>
  );
}
