import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/BlogHeader";
import Markdown from "@/components/Markdown";
import { PublishGate } from "@/components/BlogLock";
import { formatDate, formatDateTime, type Post } from "@/lib/blog";

function BlogPostingSchema({ post }: { post: Post }) {
  const url = `https://seise.org/blog/${post.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: url,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@id": "https://seise.org/#person" },
    publisher: { "@id": "https://seise.org/#person" },
    inLanguage: "fi-FI",
    isPartOf: { "@type": "CreativeWorkSeries", name: post.series },
    keywords: post.keyword,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function PostLayout({
  post,
  prev,
  next,
}: {
  post: Post;
  prev?: Post;
  next?: Post;
}) {
  return (
    <main className="min-h-screen">
      <BlogHeader />
      <BlogPostingSchema post={post} />

      <article className="section-pad">
        <div className="container-narrow">
          <nav aria-label="Murupolku" className="text-sm muted mb-8">
            <Link href="/" className="hover:text-accent-400">
              Etusivu
            </Link>
            <span aria-hidden className="mx-2">
              ›
            </span>
            <Link href="/blog" className="hover:text-accent-400">
              Blogi
            </Link>
            <span aria-hidden className="mx-2">
              ›
            </span>
            <span className="text-ink-100">Osa {post.part}</span>
          </nav>

          <div className="max-w-2xl">
            <p className="eyebrow">
              {post.series} · Osa {post.part}/{post.totalParts}
            </p>
            <h1 className="h1 mt-4 text-ink-50">{post.title}</h1>
            <p className="lead mt-6">{post.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingMinutes} min lukuaika</span>
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
              publishLabel={formatDateTime(post.date)}
            >
              <Markdown>{post.content}</Markdown>
            </PublishGate>
          </div>

          <nav
            aria-label="Sarjan navigointi"
            className="mt-16 grid md:grid-cols-2 gap-4 max-w-3xl"
          >
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="card flex items-center gap-3 hover:border-accent-500/50"
              >
                <span aria-hidden className="text-accent-400">
                  ←
                </span>
                <div>
                  <p className="eyebrow">Edellinen · Osa {prev.part}</p>
                  <p className="mt-1 text-ink-50 font-medium">{prev.title}</p>
                </div>
              </Link>
            ) : (
              <Link
                href="/blog"
                className="card flex items-center gap-3 hover:border-accent-500/50"
              >
                <span aria-hidden className="text-accent-400">
                  ←
                </span>
                <div>
                  <p className="eyebrow">Sarjan etusivu</p>
                  <p className="mt-1 text-ink-50 font-medium">Kaikki osat</p>
                </div>
              </Link>
            )}

            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="card flex items-center justify-end gap-3 text-right hover:border-accent-500/50"
              >
                <div>
                  <p className="eyebrow">Seuraava · Osa {next.part}</p>
                  <p className="mt-1 text-ink-50 font-medium">{next.title}</p>
                </div>
                <span aria-hidden className="text-accent-400">
                  →
                </span>
              </Link>
            ) : (
              <Link
                href="/#koulutukset"
                className="card flex items-center justify-end gap-3 text-right hover:border-accent-500/50"
              >
                <div>
                  <p className="eyebrow">Sarja päättyi</p>
                  <p className="mt-1 text-ink-50 font-medium">
                    Katso agenttisprintti →
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
