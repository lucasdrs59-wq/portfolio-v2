import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(900px_500px_at_15%_10%,rgba(59,130,246,.18),transparent_60%),radial-gradient(900px_500px_at_85%_20%,rgba(245,158,11,.14),transparent_55%),linear-gradient(180deg,#070A10,#0B1020)] text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/15">
              <Image
                src="/avatar.jpg"
                alt="Photo"
                fill
                className="object-cover"
                sizes="36px"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Lucas Desrousseaux</div>
              <div className="text-xs text-zinc-400">
                Industrie 4.0 • Métallurgie (Fonderie & Chaudronnerie)
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 text-sm text-zinc-300 md:flex">
            <Link href="/projets" className="hover:text-white">
              Projets
            </Link>
            <Link href="/a-propos" className="hover:text-white">
              À propos
            </Link>
            <Link href="/cv" className="hover:text-white">
              CV
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-white/10"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-zinc-400">
          <span>© {new Date().getFullYear()} Lucas Desrousseaux</span>
          <span className="text-zinc-500">Portfolio — Industrie 4.0 • Métallurgie</span>
        </div>
      </footer>
    </div>
  );
}
