import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://lucasdrs59-wq.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lucas Desrousseaux — Méthodes & Industrie 4.0",
    template: "%s — Lucas Desrousseaux",
  },
  description:
    "Portfolio de Lucas Desrousseaux : méthodes, industrialisation, métallurgie, data et Industrie 4.0.",
  applicationName: "Portfolio Lucas Desrousseaux",
  authors: [{ name: "Lucas Desrousseaux", url: siteUrl }],
  creator: "Lucas Desrousseaux",
  keywords: [
    "méthodes",
    "industrialisation",
    "industrie 4.0",
    "métallurgie",
    "Power BI",
    "amélioration continue",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Lucas Desrousseaux",
    title: "Lucas Desrousseaux — Méthodes & Industrie 4.0",
    description:
      "Transformer les problèmes d’atelier en systèmes simples, mesurables et adoptés.",
    images: [
      {
        url: "/brand/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Lucas Desrousseaux — Méthodes, industrialisation et Industrie 4.0",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Desrousseaux — Méthodes & Industrie 4.0",
    description:
      "Transformer les problèmes d’atelier en systèmes simples, mesurables et adoptés.",
    images: ["/brand/og-cover.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f7fb",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
