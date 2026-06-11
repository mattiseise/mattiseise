import Link from "next/link";
import Image from "next/image";
import { getAllPosts, formatDate, formatDateTime } from "@/lib/blog";

/**
 * Etusivun blogi-nosto: 2–3 uusinta julkaistua osaa + seuraavan osan
 * julkaisuaika. Julkaisutila lasketaan build-aikana; päivittäinen
 * Netlify-rebuild (hermes cron) pitää noston ajan tasalla.
 */
export default function BlogTeaser() {
  const posts = getAllPosts();
  const now = Date.now();
  const published = posts
    .filter((p) => new Date(p.date).getTime() <= now)
    .sort((a, b) => b.part - a.part)
    .slice(0, 3);
  const nextUp = posts
    .filter((p) => new Date(p.date).getTime() > now)
    .sort((a, b) => a.part - b.part)[0];

  if (published.length === 0) return null;

  return (
    <section id="blogi" className="section-pad border-t border-ink-600/30">
      <div className="container-narrow">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Blogi · Oman AI-agentin rakentaminen</p>
            <h2 className="h2 mt-3 text-ink-50">
              Rehellinen sarja oman AI-agentin rakentamisesta.
            </h2>
            <p className="lead mt-4 max-w-2xl">
              Kuusi osaa tuotantokokemusta ilman hypeä: kalliit virheet,
              autonomian rajat ja migraatio OpenClaw&apos;sta Hermekseen.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-400 hover:text-accent-300"
          >
            Katso koko sarja <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {published.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card group">
              {p.cover && (
                <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-xl border border-ink-600/40 bg-ink-900">
                  <Image
                    src={p.cover}
                    alt={p.coverAlt ?? ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              )}
              <p className="eyebrow">
                Osa {p.part}/{p.totalParts} · {formatDate(p.date)}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-ink-50 group-hover:text-accent-300 transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-ink-200 leading-relaxed">
                {p.description}
              </p>
            </Link>
          ))}
        </div>

        {nextUp && (
          <p className="mt-6 text-sm muted">
            <span aria-hidden>🔒</span> Seuraava osa julkaistaan{" "}
            {formatDateTime(nextUp.date)}.
          </p>
        )}
      </div>
    </section>
  );
}
