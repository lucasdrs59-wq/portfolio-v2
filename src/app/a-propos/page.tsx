import { SiteShell } from "@/components/SiteShell";

export default function AProposPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">À propos</h1>
        <p className="mt-4 text-zinc-300">
          Profil hybride : métallurgie (fonderie/chaudronnerie) + digitalisation (ERP, data, standards).
          J’aime transformer un besoin terrain en solution simple, documentée, et adoptée en atelier.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">Méthode</div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>• Terrain → compréhension du process</li>
              <li>• Données → KPI → décision</li>
              <li>• Standardisation → déploiement</li>
              <li>• Documentation → autonomie</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">Ce que je recherche</div>
            <p className="mt-3 text-sm text-zinc-300">
              Des missions où je peux structurer, améliorer, et déployer (industrie/atelier/BE),
              avec un vrai impact mesurable.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
