import Link from "next/link";
import Image from "next/image";
import {
  getAllPosts,
  isPublished,
  formatDate,
  blogPath,
  topicLabels,
  type Locale,
  type Post,
} from "@/lib/blog";

const strings = {
  fi: {
    eyebrow: "Blogi",
    title: "Mitä tapahtui, kun kokeilin oikeasti.",
    desc: "Kirjoitan agenteista, automaatiosta ja opetuksesta silloin kun on jotain konkreettista sanottavaa. Uusin sarja: oman AI-agentin rakentaminen, 6 osaa.",
    seriesKicker: (part: number, total: number) => `Sarja · osa ${part}/${total}`,
    standaloneKicker: (topic: string) => `Irtokirjoitus · ${topic}`,
    cta: "Kaikki kirjoitukset",
  },
  en: {
    eyebrow: "Blog",
    title: "Honest production experience — without the hype.",
    desc: "Series and standalone posts on agents, automation and pedagogy. Latest series: Building My Own AI Agent, 6 parts.",
    seriesKicker: (part: number, total: number) => `Series · part ${part}/${total}`,
    standaloneKicker: (topic: string) => `Standalone · ${topic}`,
    cta: "All posts",
  },
} as const;

/** Etusivun kompakti blogi-nosto: yksi rivi, uusin julkaistu postaus keskellä. */
export default function BlogTeaser({ locale = "fi" }: { locale?: Locale }) {
  const t = strings[locale];
  const published = getAllPosts(locale).filter(isPublished);
  const latest = published[published.length - 1];
  if (!latest) return null;
  const kicker = (p: Post) =>
    p.totalParts > 1
      ? t.seriesKicker(p.part, p.totalParts)
      : t.standaloneKicker(topicLabels[locale][p.topic ?? "agents"]);

  return (
    <section
      id="blogi"
      className="border-t border-cream-50/[0.08] px-5 py-14 md:px-10 md:py-[72px]"
    >
      <div className="container-narrow grid items-center gap-9 rounded-[20px] border border-cream-50/[0.08] bg-bark-800 p-7 md:grid-cols-12 md:px-10 md:py-9">
        <div className="md:col-span-5">
          <p className="eyebrow-sm">{t.eyebrow}</p>
          <h2 className="mt-2.5 font-display text-[26px] font-semibold leading-[1.25] text-cream-50">
            {t.title}
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-cream-300">
            {t.desc}
          </p>
        </div>
        <Link
          href={blogPath(locale, latest.slug)}
          className="flex items-center gap-4 rounded-[14px] border border-cream-50/10 p-3.5 transition-colors hover:border-amber-400/45 md:col-span-4"
        >
          {latest.cover && (
            <span className="relative block w-[92px] shrink-0 overflow-hidden rounded-[9px]" style={{ aspectRatio: "16/11" }}>
              <Image
                src={latest.cover}
                alt=""
                fill
                sizes="92px"
                className="object-cover"
              />
            </span>
          )}
          <span className="block">
            <span className="block text-[11.5px] font-bold uppercase tracking-[0.1em] text-amber-400">
              {kicker(latest)}
            </span>
            <span className="mt-1.5 block text-[14.5px] font-bold leading-[1.4] text-cream-50">
              {latest.title}
            </span>
            <span className="mt-1.5 block text-[12.5px] text-cream-400">
              {formatDate(latest.date, locale)} · {latest.readingMinutes} min
            </span>
          </span>
        </Link>
        <div className="md:col-span-3 md:justify-self-end">
          <Link href={blogPath(locale)} className="btn-outline-amber">
            {t.cta} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
