import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const baseUrl = "https://lucasdrs59-wq.github.io";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projets", "/a-propos", "/cv", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-08-27"),
    changeFrequency: route === "" ? ("monthly" as const) : ("yearly" as const),
    priority: route === "" ? 1 : route === "/projets" ? 0.9 : 0.7,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projets/${project.slug}`,
    lastModified: new Date("2026-08-27"),
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}
