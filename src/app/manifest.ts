import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lucas Desrousseaux — Portfolio",
    short_name: "Lucas D.",
    description: "Méthodes, industrialisation, métallurgie et Industrie 4.0.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfcfe",
    theme_color: "#10213d",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
