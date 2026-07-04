import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/BlogHeader";
import { getAllPosts, formatDate, formatDateTime, blogPath } from "@/lib/blog";
import { CardStatus, type CardStatusLabels } from "@/components/BlogLock";
import { BASE, PERSON, breadcrumbLd } from "@/lib/schema";

const seriesTitle = "Building My Own AI Agent";
const seriesDesc =
  "A six-part series about building a personal AI agent for production: the difference between a chatbot and an agent, over-architecture, eight expensive mistakes, the boundaries of autonomy, and the migration from OpenClaw to Hermes — honestly, without AI hype.";

const seriesMetaDesc =
  "A candid six-part series about building a personal AI agent for production — from chatbot to agent, expensive mistakes, and the migration to Hermes.";

const lockLabels = (part: number, publishLabel: string): CardStatusLabels => ({
  readPart: `Read part ${part} →`,
  publishesAt: `Publishing ${publishLabel}`,
});

export const metadata: Metadata = {
  title: "Blog: Building My Own AI Agent · Matti Seise",
  description: seriesMetaDesc,
  alternates: {
    canonical: "https://seise.org/en/blog",
    languages: {
      fi: "https://seise.org/blog",
      en: "https://seise.org/en/blog",
    },
  },
  openGraph: {
    title: "Building My Own AI Agent — blog series",
    description: seriesMetaDesc,
    url: "https://seise.org/en/blog",
    type: "website",
    siteName: "Matti Seise",
    locale: "en_US",
    alternateLocale: ["fi_FI"],
    images: [
      {
        url: "/images/blog/og/01-aamubriiffi.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Building My Own AI Agent — a six-part blog series",
      },
    ],
  },
};

export default function EnglishBlogIndex() {
  const posts = getAllPosts("en");

  const published = posts.filter(
    (p) => new Date(p.date).getTime() <= Date.now(),
  );
  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BASE}/en/blog#blog`,
    name: seriesTitle,
    url: `${BASE}/en/blog`,
    description: seriesMetaDesc,
    inLanguage: "en-US",
    author: PERSON,
    publisher: PERSON,
    blogPost: published.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${BASE}${blogPath("en", p.slug)}`,
      datePublished: p.date,
    })),
  };
  const breadcrumb = breadcrumbLd([
    { name: "Home", item: `${BASE}/` },
    { name: "Blog" },
  ]);

  return (
    <main id="sisalto" className="min-h-screen" lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <BlogHeader locale="en" alternateHref="/blog" />

      <section className="section-pad">
        <div className="container-narrow">
          <p className="eyebrow">Blog series · {posts.length} parts</p>
          <h1 className="h1 mt-4 text-ink-50 max-w-3xl">{seriesTitle}</h1>
          <p className="lead mt-6 max-w-2xl">{seriesDesc}</p>

          <ol className="mt-14 space-y-4">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={blogPath("en", p.slug)}
                  className="card group flex flex-col gap-5 sm:flex-row"
                >
                  {p.cover && (
                    <div className="relative aspect-[16/9] w-full shrink-0 self-start overflow-hidden rounded-xl border border-ink-600/40 bg-ink-800 sm:w-56">
                      <Image
                        src={p.cover}
                        alt={p.coverAlt ?? ""}
                        fill
                        sizes="(max-width: 640px) 100vw, 224px"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="eyebrow">
                      Part {p.part}/{p.totalParts}
                    </p>
                    <h2 className="mt-1 text-xl font-semibold text-ink-50 group-hover:text-accent-300 transition-colors">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-ink-200 leading-relaxed">
                      {p.description}
                    </p>
                    <CardStatus
                      publishAt={p.date}
                      initialLocked={Date.now() < new Date(p.date).getTime()}
                      publishLabel={formatDateTime(p.date, "en")}
                      dateLabel={formatDate(p.date, "en")}
                      readingMinutes={p.readingMinutes}
                      part={p.part}
                      labels={lockLabels(p.part, formatDateTime(p.date, "en"))}
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-16 rounded-2xl border border-accent-500/40 bg-ink-800/60 p-8 md:p-10 max-w-3xl">
            <h2 className="h3 text-ink-50">Building your own agent?</h2>
            <p className="lead mt-3">
              I help with the path from design to production — from a light
              training introduction to a full 1–2 day agent sprint.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/en/#koulutukset"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-500 text-ink-900 px-5 py-3 text-sm font-semibold hover:bg-accent-400"
              >
                See the agent sprint <span aria-hidden>→</span>
              </Link>
              <Link
                href="/en/#yhteys"
                className="inline-flex items-center gap-2 rounded-xl border border-ink-600/60 px-5 py-3 text-sm font-semibold text-ink-100 hover:border-accent-500/50"
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
