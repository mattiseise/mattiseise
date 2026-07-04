import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/BlogHeader";
import Markdown from "@/components/Markdown";
import { PublishGate, type PublishGateLabels } from "@/components/BlogLock";
import {
  blogPath,
  formatDate,
  formatDateTime,
  type Locale,
  type Post,
} from "@/lib/blog";
import { BASE, PERSON, breadcrumbLd } from "@/lib/schema";

const text = {
  fi: {
    localeCode: "fi-FI",
    breadcrumbLabel: "Murupolku",
    home: "Etusivu",
    blog: "Blogi",
    part: "Osa",
    readingTime: "min lukuaika",
    seriesNavigation: "Sarjan navigointi",
    previous: "Edellinen",
    next: "Seuraava",
    seriesHome: "Sarjan etusivu",
    allParts: "Kaikki osat",
    seriesEnded: "Sarja päättyi",
    cta: "Katso agenttisprintti →",
    lock: {
      publishes: "Julkaistaan",
      backToSeries: "← Sarjan etusivulle",
    } satisfies PublishGateLabels,
  },
  en: {
    localeCode: "en-US",
    breadcrumbLabel: "Breadcrumb",
    home: "Home",
    blog: "Blog",
    part: "Part",
    readingTime: "min read",
    seriesNavigation: "Series navigation",
    previous: "Previous",
    next: "Next",
    seriesHome: "Series home",
    allParts: "All parts",
    seriesEnded: "Series complete",
    cta: "See the agent sprint →",
    lock: {
      publishes: "Publishing",
      backToSeries: "← Back to the series",
    } satisfies PublishGateLabels,
  },
} as const;

function BlogPostingSchema({ post, locale }: { post: Post; locale: Locale }) {
  const t = text[locale];
  const url = `${BASE}${blogPath(locale, post.slug)}`;
  const ogImage = post.cover?.replace("/images/blog/", "/images/blog/og/");
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: url,
    ...(ogImage ? { image: [`${BASE}${ogImage}`] } : {}),
    datePublished: post.date,
    dateModified: post.date,
    author: PERSON,
    publisher: PERSON,
    inLanguage: t.localeCode,
    isPartOf: { "@type": "CreativeWorkSeries", name: post.series },
    keywords: post.keyword,
  };
  const breadcrumb = breadcrumbLd([
    { name: t.home, item: `${BASE}/` },
    { name: t.blog, item: `${BASE}${blogPath(locale)}` },
    { name: `${t.part} ${post.part}: ${post.title}` },
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

export default function PostLayout({
  post,
  prev,
  next,
  locale = "fi",
  alternateHref,
}: {
  post: Post;
  prev?: Post;
  next?: Post;
  locale?: Locale;
  alternateHref?: string;
}) {
  const t = text[locale];

  return (
    <main id="sisalto" className="min-h-screen">
      <BlogHeader locale={locale} alternateHref={alternateHref} />
      <BlogPostingSchema post={post} locale={locale} />

      <article className="section-pad">
        <div className="container-narrow">
          <nav aria-label={t.breadcrumbLabel} className="text-sm muted mb-8">
            <Link href={locale === "en" ? "/en" : "/"} className="hover:text-accent-400">
              {t.home}
            </Link>
            <span aria-hidden className="mx-2">
              ›
            </span>
            <Link href={blogPath(locale)} className="hover:text-accent-400">
              {t.blog}
            </Link>
            <span aria-hidden className="mx-2">
              ›
            </span>
            <span className="text-ink-100">{t.part} {post.part}</span>
          </nav>

          <div className="max-w-2xl">
            <p className="eyebrow">
              {post.series} · {t.part} {post.part}/{post.totalParts}
            </p>
            <h1 className="h1 mt-4 text-ink-50">{post.title}</h1>
            <p className="lead mt-6">{post.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm muted">
              <span className="text-ink-100">Matti Seise</span>
              <span aria-hidden>·</span>
              <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingMinutes} {t.readingTime}</span>
              <span className="tag">{post.keyword}</span>
            </div>
          </div>

          {post.cover && (
            <figure className="mt-10 max-w-3xl">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-ink-600/40 bg-ink-800">
                <Image
                  src={post.cover}
                  alt={post.coverAlt ?? post.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            </figure>
          )}

          <div className="mt-12 max-w-2xl text-[1.0625rem]">
            <PublishGate
              publishAt={post.date}
              initialLocked={Date.now() < new Date(post.date).getTime()}
              publishLabel={formatDateTime(post.date, locale)}
              backHref={blogPath(locale)}
              labels={t.lock}
            >
              <Markdown>{post.content}</Markdown>
            </PublishGate>
          </div>

          <nav
            aria-label={t.seriesNavigation}
            className="mt-16 grid md:grid-cols-2 gap-4 max-w-3xl"
          >
            {prev ? (
              <Link
                href={blogPath(locale, prev.slug)}
                className="card flex items-center gap-3 hover:border-accent-500/50"
              >
                <span aria-hidden className="text-accent-400">
                  ←
                </span>
                <div>
                  <p className="eyebrow">{t.previous} · {t.part} {prev.part}</p>
                  <p className="mt-1 text-ink-50 font-medium">{prev.title}</p>
                </div>
              </Link>
            ) : (
              <Link
                href={blogPath(locale)}
                className="card flex items-center gap-3 hover:border-accent-500/50"
              >
                <span aria-hidden className="text-accent-400">
                  ←
                </span>
                <div>
                  <p className="eyebrow">{t.seriesHome}</p>
                  <p className="mt-1 text-ink-50 font-medium">{t.allParts}</p>
                </div>
              </Link>
            )}

            {next ? (
              <Link
                href={blogPath(locale, next.slug)}
                className="card flex items-center justify-end gap-3 text-right hover:border-accent-500/50"
              >
                <div>
                  <p className="eyebrow">{t.next} · {t.part} {next.part}</p>
                  <p className="mt-1 text-ink-50 font-medium">{next.title}</p>
                </div>
                <span aria-hidden className="text-accent-400">
                  →
                </span>
              </Link>
            ) : (
              <Link
                href={locale === "en" ? "/en/#koulutukset" : "/#koulutukset"}
                className="card flex items-center justify-end gap-3 text-right hover:border-accent-500/50"
              >
                <div>
                  <p className="eyebrow">{t.seriesEnded}</p>
                  <p className="mt-1 text-ink-50 font-medium">
                    {t.cta}
                  </p>
                </div>
              </Link>
            )}
          </nav>
        </div>
      </article>

      <Footer />
    </main>
  );
}
