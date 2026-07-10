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
  isPublished,
  type Locale,
  type Post,
} from "@/lib/blog";
import { BASE, PERSON, breadcrumbLd } from "@/lib/schema";

const text = {
  fi: {
    localeCode: "fi-FI",
    home: "Etusivu",
    blog: "Blogi",
    series: "Sarja",
    part: "Osa",
    readingTime: "min lukuaika",
    seriesNavigation: "Sarjan navigointi",
    previous: "Edellinen osa",
    next: "Seuraava osa",
    ctaTitle: "Rakennatko omaa agenttia?",
    ctaBody: "Voin auttaa suunnittelemaan sen niin, ettei ensimmäinen versio muutu omaksi pikku käyttöjärjestelmäkseen. Katso koulutukset — tai verkostoidutaan LinkedInissä, jos haluat seurata sarjaa.",
    ctaBtn: "Katso koulutukset",
    lock: {
      publishes: "Julkaistaan",
      backToSeries: "← Blogin etusivulle",
    } satisfies PublishGateLabels,
  },
  en: {
    localeCode: "en-US",
    home: "Home",
    blog: "Blog",
    series: "Series",
    part: "Part",
    readingTime: "min read",
    seriesNavigation: "Series navigation",
    previous: "Previous part",
    next: "Next part",
    ctaTitle: "Building your own agent?",
    ctaBody: "I can help design it so your first version doesn't turn into its own little operating system. See my trainings — or let's network on LinkedIn if you want to follow the series.",
    ctaBtn: "See training",
    lock: {
      publishes: "Publishing",
      backToSeries: "← Back to the blog",
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
  const prefix = locale === "en" ? "/en" : "";
  const inSeries = post.totalParts > 1;

  return (
    <main id="sisalto" className="min-h-screen">
      <BlogHeader locale={locale} alternateHref={alternateHref} />
      <BlogPostingSchema post={post} locale={locale} />

      <article className="px-5 pb-0 pt-14 md:px-10 md:pt-[72px]">
        <div className="container-article">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-amber-400">
            <Link href={blogPath(locale)} className="text-amber-400 hover:text-amber-300">
              {t.series}: {post.series}
            </Link>
            {inSeries && (
              <>
                {" "}· {t.part} {post.part}/{post.totalParts}
              </>
            )}
          </p>
          <h1 className="mt-[18px] font-display text-[32px] font-semibold leading-[1.15] tracking-[-0.015em] text-cream-50 md:text-[42px]">
            {post.title}
          </h1>
          <div className="mt-[22px] flex items-center gap-3.5">
            <Image
              src="/images/mattivaaka.jpg"
              alt="Matti Seise"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
            />
            <div className="text-sm text-cream-400">
              <p className="font-bold text-cream-50">Matti Seise</p>
              <p className="mt-0.5">
                <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
                {" "}· {post.readingMinutes} {t.readingTime}
              </p>
            </div>
          </div>
        </div>

        {post.cover && (
          <div className="mx-auto mt-10 max-w-[880px]">
            <div className="relative w-full overflow-hidden rounded-[18px]" style={{ aspectRatio: "16/8.5" }}>
              <Image
                src={post.cover}
                alt={post.coverAlt ?? post.title}
                fill
                priority
                sizes="(max-width: 920px) 100vw, 880px"
                className="object-cover"
              />
            </div>
          </div>
        )}

        <div className="container-article mt-12">
          <PublishGate
            publishAt={post.date}
            initialLocked={!isPublished(post)}
            forceLocked={!!post.upcoming}
            publishLabel={
              post.upcoming
                ? post.plannedLabel ?? formatDate(post.date, locale)
                : formatDateTime(post.date, locale)
            }
            backHref={blogPath(locale)}
            labels={t.lock}
          >
            <Markdown>{post.content}</Markdown>
          </PublishGate>
        </div>

        {inSeries && (
          <nav
            aria-label={t.seriesNavigation}
            className="container-article mt-14 grid gap-4 sm:grid-cols-2"
          >
            {prev ? (
              <Link
                href={blogPath(locale, prev.slug)}
                className="rounded-[14px] border border-cream-50/10 bg-bark-800 px-6 py-5 transition-colors hover:border-amber-400"
              >
                <span className="block text-xs font-bold uppercase tracking-[0.11em] text-amber-400">
                  {t.previous}
                </span>
                <span className="mt-1.5 block text-[15px] font-bold leading-[1.4] text-cream-50">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span className="rounded-[14px] border border-cream-50/10 px-6 py-5 text-cream-600">
                <span className="block text-xs font-bold uppercase tracking-[0.11em]">
                  {t.previous}
                </span>
                <span className="mt-1.5 block text-[15px] font-bold">—</span>
              </span>
            )}
            {next ? (
              <Link
                href={blogPath(locale, next.slug)}
                className="rounded-[14px] border border-amber-400/40 bg-bark-800 px-6 py-5 text-right transition-colors hover:border-amber-400"
              >
                <span className="block text-xs font-bold uppercase tracking-[0.11em] text-amber-400">
                  {t.next}
                </span>
                <span className="mt-1.5 block text-[15px] font-bold leading-[1.4] text-cream-50">
                  {next.title}
                </span>
              </Link>
            ) : (
              <span className="rounded-[14px] border border-cream-50/10 px-6 py-5 text-right text-cream-600">
                <span className="block text-xs font-bold uppercase tracking-[0.11em]">
                  {t.next}
                </span>
                <span className="mt-1.5 block text-[15px] font-bold">—</span>
              </span>
            )}
          </nav>
        )}

        <div className="container-article card-glow mt-10 rounded-[18px] p-8">
          <h2 className="font-display text-[23px] font-semibold text-cream-50">
            {t.ctaTitle}
          </h2>
          <p className="mt-2.5 text-[15.5px] leading-[1.65] text-cream-300">
            {t.ctaBody}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={`${prefix}/#koulutukset`} className="btn-primary-sm">
              {t.ctaBtn} <span aria-hidden>→</span>
            </Link>
            <a
              href="https://www.linkedin.com/in/mattiseise/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-sm"
            >
              LinkedIn <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </article>

      <div className="mt-[72px]">
        <Footer locale={locale} />
      </div>
    </main>
  );
}
