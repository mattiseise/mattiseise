import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/BlogHeader";
import { getAllPosts, formatDate } from "@/lib/blog";

const seriesTitle = "Oman AI-agentin rakentaminen";
const seriesDesc =
  "Kuusiosainen sarja oman tekoälyagentin rakentamisesta tuotantoon: chatbotin ja agentin ero, yliarkkitehtointi, kahdeksan kallista virhettä, autonomian rajat ja migraatio OpenClaw'sta Hermekseen — rehellisesti, ilman AI-hypeä.";

export const metadata: Metadata = {
  title: "Blogi: Oman AI-agentin rakentaminen · Matti Seise",
  description: seriesDesc,
  alternates: { canonical: "https://seise.org/blog" },
  openGraph: {
    title: "Oman AI-agentin rakentaminen — blogisarja",
    description: seriesDesc,
    url: "https://seise.org/blog",
    type: "website",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen">
      <BlogHeader />

      <section className="section-pad">
        <div className="container-narrow">
          <p className="eyebrow">Blogisarja · {posts.length} osaa</p>
          <h1 className="h1 mt-4 text-ink-50 max-w-3xl">{seriesTitle}</h1>
          <p className="lead mt-6 max-w-2xl">{seriesDesc}</p>

          <ol className="mt-14 space-y-4">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="card group flex flex-col gap-5 sm:flex-row"
                >
                  {p.cover && (
                    <div className="relative aspect-[16/9] w-full shrink-0 self-start overflow-hidden rounded-xl border border-ink-600/40 bg-ink-800 sm:w-56">
                      <Image
                        src={p.cover}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, 224px"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="eyebrow">
                      Osa {p.part}/{p.totalParts}
                    </p>
                    <h2 className="mt-1 text-xl font-semibold text-ink-50 group-hover:text-accent-300 transition-colors">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-ink-200 leading-relaxed">
                      {p.description}
                    </p>
                    <p className="mt-3 text-sm muted flex flex-wrap gap-x-3 gap-y-1 items-center">
                      <time dateTime={p.date}>{formatDate(p.date)}</time>
                      <span aria-hidden>·</span>
                      <span>{p.readingMinutes} min</span>
                      <span aria-hidden>·</span>
                      <span className="text-accent-400 group-hover:text-accent-300">
                        Lue osa {p.part} →
                      </span>
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-16 rounded-2xl border border-accent-500/40 bg-ink-800/60 p-8 md:p-10 max-w-3xl">
            <h2 className="h3 text-ink-50">Rakennatko omaa agenttia?</h2>
            <p className="lead mt-3">
              Autan suunnittelusta tuotantoon — kevyestä koulutusjohdannosta
              kokonaiseen 1–2 päivän agenttisprinttiin.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/#koulutukset"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-500 text-ink-900 px-5 py-3 text-sm font-semibold hover:bg-accent-400"
              >
                Katso agenttisprintti <span aria-hidden>→</span>
              </Link>
              <Link
                href="/#yhteys"
                className="inline-flex items-center gap-2 rounded-xl border border-ink-600/60 px-5 py-3 text-sm font-semibold text-ink-100 hover:border-accent-500/50"
              >
                Ota yhteyttä
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
