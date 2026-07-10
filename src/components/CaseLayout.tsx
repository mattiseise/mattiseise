import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { BASE, PERSON, breadcrumbLd } from "@/lib/schema";

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
    <main id="sisalto" className="min-h-screen">
      <Nav locale="fi" active="projects" alternateHref="/en" />

      <article className="px-5 pb-0 pt-14 md:px-10 md:pt-[72px]">
        <div className="container-case">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-amber-400">
            {eyebrow}
          </p>
          <h1 className="mt-[18px] font-display text-[32px] font-semibold leading-[1.12] tracking-[-0.015em] text-cream-50 md:text-[44px]">
            {title}
          </h1>
          <p className="mt-[22px] max-w-[40em] text-lg leading-[1.7] text-cream-200">
            {lead}
          </p>

          {facts.length > 0 && (
            <dl className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-[14px] border border-cream-50/[0.08] bg-bark-800 px-5 py-[18px]"
                >
                  <dt className="text-[11.5px] font-bold uppercase tracking-[0.11em] text-cream-400">
                    {f.label}
                  </dt>
                  <dd className="mt-1.5 font-display text-[19px] font-semibold text-amber-400">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-14 flex flex-col gap-12 text-[17px] leading-[1.75] text-cream-100">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="mb-4 font-display text-[26px] font-semibold text-cream-50">
                  {s.heading}
                </h2>
                <div className="space-y-4">{s.body}</div>
              </section>
            ))}
          </div>

          {cta && (
            <div className="card-glow mt-14 flex flex-wrap items-center justify-between gap-7 rounded-[18px] p-8">
              <p className="max-w-[34em] text-base leading-[1.65] text-cream-200">
                {cta.label}
              </p>
              <Link href={cta.href} className="btn-primary-sm shrink-0">
                Ota yhteyttä <span aria-hidden>→</span>
              </Link>
            </div>
          )}

          {(prev || next) && (
            <nav
              aria-label="Muut caset"
              className="mt-6 grid gap-4 sm:grid-cols-2"
            >
              {prev ? (
                <Link
                  href={prev.href}
                  className="rounded-[14px] border border-cream-50/10 bg-bark-800 px-6 py-5 transition-colors hover:border-amber-400/50"
                >
                  <span className="block text-xs font-bold uppercase tracking-[0.11em] text-cream-400">
                    Edellinen
                  </span>
                  <span className="mt-1.5 block text-[15px] font-bold text-cream-50">
                    {prev.label}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  href={next.href}
                  className="rounded-[14px] border border-cream-50/10 bg-bark-800 px-6 py-5 text-right transition-colors hover:border-amber-400/50"
                >
                  <span className="block text-xs font-bold uppercase tracking-[0.11em] text-cream-400">
                    Seuraava
                  </span>
                  <span className="mt-1.5 block text-[15px] font-bold text-cream-50">
                    {next.label}
                  </span>
                </Link>
              )}
            </nav>
          )}
        </div>
      </article>

      <div className="mt-[72px]">
        <Footer locale="fi" />
      </div>
    </main>
  );
}

export function CaseList({ items }: { items: string[] }) {
  return (
    <ul className="flex list-disc flex-col gap-2.5 pl-6 marker:text-amber-400">
      {items.map((i) => (
        <li key={i} className="pl-1">
          {i}
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
  const url = `${BASE}/caset/${slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    image: [`${BASE}/images/og-default.jpg`],
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: PERSON,
    publisher: PERSON,
    inLanguage: "fi-FI",
  };
  const breadcrumb = breadcrumbLd([
    { name: "Etusivu", item: `${BASE}/` },
    { name: "Projektit", item: `${BASE}/#projektit` },
    { name: title },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
