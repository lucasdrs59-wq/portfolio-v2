export type Project = {
  slug: string;
  title: string;
  period: string;
  tags: string[];
  intro: string;
  highlights: string[];
  sections: { title: string; bullets: string[] }[];
};

export const projects: Project[] = [
  {
    slug: "fonderie-prototype-sablerie",
    title: "Fonderie fonte — Suivi production prototype & résolution de problèmes (sablerie)",
    period: "BTS • Stage (8 semaines)",
    tags: ["Fonderie", "Production", "Qualité", "Terrain"],
    intro:
      "Suivi de production sur pièce prototype et résolution de problèmes en atelier (sablerie).",
    highlights: [
      "Suivi terrain & analyse des écarts",
      "Actions correctives en sablerie",
      "Standardisation progressive (retour d’expérience)",
    ],
    sections: [
      {
        title: "Contexte",
        bullets: [
          "Prototype en production, besoin de stabiliser la qualité et le flux.",
          "Travail au plus près des opérateurs et du process.",
        ],
      },
      {
        title: "Actions",
        bullets: [
          "Observation terrain + collecte d’infos (défauts, causes probables).",
          "Proposition et test d’actions correctives.",
          "Mise en forme des bonnes pratiques.",
        ],
      },
      { title: "Résultats", bullets: ["Démarche structurée, capitalisation et meilleure maîtrise du process."] },
    ],
  },
  {
    slug: "industrialisation-bras-levier-alu",
    title: "Industrialisation — Reconception bras de levier aluminium (étiqueteuse)",
    period: "BTS • Projet de fin d’année",
    tags: ["Industrialisation", "CAO", "Outillage", "Qualité"],
    intro:
      "Reconception et industrialisation d’un bras de levier en aluminium pour une étiqueteuse industrielle.",
    highlights: [
      "Conception CAO + préparation industrialisation",
      "Simulation de coulée + préparation outillage",
      "Procédures moulage/coulée + contrôle qualité",
    ],
    sections: [
      {
        title: "Conception",
        bullets: ["Modélisation CAO", "Prise en compte fabrication et tolérances"],
      },
      {
        title: "Industrialisation",
        bullets: ["Outillage, impression 3D, mise en production", "Procédures & qualité"],
      },
      { title: "Résultats", bullets: ["Process documenté, production lancée avec contrôle qualité."] },
    ],
  },
  {
    slug: "chaudronnerie-chiffrage-suivi-affaires",
    title: "Chaudronnerie — Chiffrage, BE & suivi d’affaires",
    period: "Licence • Alternance",
    tags: ["Chiffrage", "Excel", "BE", "Atelier"],
    intro:
      "Structuration d’outils Excel de chiffrage et contribution BE / suivi production atelier.",
    highlights: [
      "Tableaux Excel de chiffrage",
      "Suivi de production en atelier",
      "Rédaction de notices techniques",
    ],
    sections: [
      { title: "Outils", bullets: ["Structuration du chiffrage", "Capitalisation des hypothèses"] },
      { title: "BE / Atelier", bullets: ["Dessins CAO", "Suivi d’avancement, échanges atelier"] },
      { title: "Livrables", bullets: ["Notices techniques, documents internes"] },
    ],
  },
  {
    slug: "industrie4-erp-inventaire-codification",
    title: "Industrie 4.0 — ERP, inventaire, codification & data atelier",
    period: "Mastère • Projet",
    tags: ["ERP", "Data", "Standardisation", "Terrain"],
    intro:
      "Co-pilotage du changement ERP + inventaire fin d’année : codification, cartographie atelier, étiquetage, données exploitables.",
    highlights: [
      "Codification emplacements / pièces",
      "Cartographie atelier + étiquetage",
      "Modèles standards d’étiquettes",
    ],
    sections: [
      { title: "Cadrage", bullets: ["Objectifs inventaire", "Règles de codification"] },
      { title: "Déploiement", bullets: ["Étiquetage, cartographie", "Création de données ERP-ready"] },
      { title: "Résultats", bullets: ["Inventaire fiabilisé et base de données exploitable"] },
    ],
  },
];

export function getProject(slug: string) {
  const s = (slug || "").trim().toLowerCase();
  return projects.find((p) => (p.slug || "").trim().toLowerCase() === s);
}
