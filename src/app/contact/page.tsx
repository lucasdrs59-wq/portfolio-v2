import { SiteShell } from "@/components/SiteShell";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 text-zinc-300">
          Le formulaire “envoi email” arrive à l’étape suivante. Pour l’instant :
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
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

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm font-semibold">Prochaine étape</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>• Formulaire relié à ton email (Resend) + anti-spam</li>
            <li>• Analytics + SEO (OpenGraph LinkedIn)</li>
            <li>• Preuves projets (captures, KPI)</li>
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
