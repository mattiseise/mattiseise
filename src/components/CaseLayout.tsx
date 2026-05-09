import Link from "next/link";
import Footer from "@/components/Footer";

type Section = {
  heading: string;
  body: React.ReactNode;
};

export default function CaseLayout({
  eyebrow,
  title,
  lead,
  facts,
  sections,
  cta,
  prev,
  next,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  facts: { label: string; value: string }[];
  sections: Section[];
  cta?: { label: string; href: string };
  prev?: { label: string; href: string };
  next?: { label: string; href: string };
}) {
  return (
    <main className="min-h-screen">
      <header className="border-b border-ink-600/30 bg-ink-900/80 backdrop-blur sticky top-0 z-30">
        <nav className="container-narrow flex items-center justify-between py-4 px-6 md:px-10">
          <Link
            href="/"
            className="font-semibold tracking-tight text-ink-50"
          >
            Matti Seise
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm text-ink-200">
            <Link href="/#projektit" className="hover:text-accent-400">
              Projektit
            </Link>
            <Link href="/#koulutukset" className="hover:text-accent-400">
              Koulutukset
            </Link>
            <Link href="/#yhteys" className="hover:text-accent-400">
              Yhteys
            </Link>
          </div>
        </nav>
      </header>

      <article className="section-pad">
        <div className="container-narrow">
          <nav aria-label="Murupolku" className="text-sm muted mb-8">
            <Link href="/" className="hover:text-accent-400">
              Etusivu
            </Link>
            <span aria-hidden className="mx-2">
              ›
            </span>
            <Link href="/#projektit" className="hover:text-accent-400">
              Projektit
            </Link>
            <span aria-hidden className="mx-2">
              ›
            </span>
            <span className="text-ink-100">{title}</span>
          </nav>

          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h1 mt-4 text-ink-50 max-w-4xl">{title}</h1>
          <p className="lead mt-6 max-w-3xl">{lead}</p>

          {facts.length > 0 && (
            <dl className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 border-y border-ink-600/40 py-6">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="eyebrow">{f.label}</dt>
                  <dd className="mt-1 text-ink-50 font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-12 grid md:grid-cols-12 gap-x-12 gap-y-12">
            {sections.map((s) => (
              <section
                key={s.heading}
                className="md:col-span-12 grid md:grid-cols-12 gap-x-12 gap-y-4"
              >
                <h2 className="h2 text-ink-50 md:col-span-4">{s.heading}</h2>
                <div className="md:col-span-8 space-y-5 text-ink-100 leading-relaxed">
                  {s.body}
                </div>
              </section>
            ))}
          </div>

          {cta && (
            <div className="mt-16 rounded-2xl border border-accent-500/40 bg-ink-800/60 p-8 md:p-10 text-center">
              <h3 className="h3 text-ink-50">
                Onko sinulla samankaltainen tarve?
              </h3>
              <p className="lead mt-3 max-w-xl mx-auto">{cta.label}</p>
              <Link
                href={cta.href}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent-500 text-ink-900 px-5 py-3 text-sm font-semibold hover:bg-accent-400"
              >
                Pyydä tarjous
                <span aria-hidden>→</span>
              </Link>
            </div>
          )}

          {(prev || next) && (
            <nav
              aria-label="Muut caset"
              className="mt-16 grid md:grid-cols-2 gap-4"
            >
              {prev ? (
                <Link
                  href={prev.href}
                  className="card flex items-center gap-3 hover:border-accent-500/50"
                >
                  <span aria-hidden className="text-accent-400">
                    ←
                  </span>
                  <div>
                    <p className="eyebrow">Edellinen case</p>
                    <p className="mt-1 text-ink-50 font-medium">
                      {prev.label}
                    </p>
                  </div>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  href={next.href}
                  className="card flex items-center justify-end gap-3 text-right hover:border-accent-500/50"
                >
                  <div>
                    <p className="eyebrow">Seuraava case</p>
                    <p className="mt-1 text-ink-50 font-medium">
                      {next.label}
                    </p>
                  </div>
                  <span aria-hidden className="text-accent-400">
                    →
                  </span>
                </Link>
              )}
            </nav>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}

export function CaseList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden className="text-accent-400 mt-1.5 shrink-0">
            ▸
          </span>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function CaseArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
}) {
  const url = `https://seise.org/caset/${slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { "@id": "https://seise.org/#person" },
    publisher: { "@id": "https://seise.org/#person" },
    inLanguage: "fi-FI",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
