"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Topic } from "@/lib/blog";

export type BlogCard = {
  slug: string;
  href: string;
  title: string;
  description: string;
  kicker: string;
  meta: string;
  cover?: string;
  topic: Topic;
  upcoming: boolean;
};

export type FeaturedSeries = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  meta: string;
  covers: string[];
  topic: Topic;
};

export type BlogIndexStrings = {
  eyebrow: string;
  title: string;
  lead: string;
  topics: { id: "all" | Topic; label: string }[];
  upcomingLabel: string;
  ctaTitle: string;
  ctaBody: string;
  ctaBtn1: string;
  ctaBtn2: string;
  ctaHref1: string;
  ctaHref2: string;
  aerialCredit: string;
};

/**
 * Blogilistauksen interaktiivinen osa: aihesuodatus (client-tila),
 * sarjanosto ja korttigrid Tulossa-badgeineen. Data tulee palvelimelta
 * valmiiksi muotoiltuna (päivämäärät yms. lasketaan build-aikana).
 */
export default function BlogIndexClient({
  t,
  featured,
  cards,
}: {
  t: BlogIndexStrings;
  featured?: FeaturedSeries;
  cards: BlogCard[];
}) {
  const [topic, setTopic] = useState<"all" | Topic>("all");

  const visible = cards.filter((c) => topic === "all" || c.topic === topic);
  const showFeatured =
    featured && (topic === "all" || topic === featured.topic);

  return (
    <>
      {/* Hero + aihesuodatus */}
      <section className="relative overflow-hidden px-5 pb-10 pt-16 md:px-10 md:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 animate-pulse-glow"
          style={{
            background:
              "radial-gradient(50% 55% at 15% 0%, rgba(224,164,88,0.12), transparent 65%)",
          }}
        />
        <div className="container-narrow relative">
          <p className="eyebrow fade-up fade-up-1">{t.eyebrow}</p>
          <h1 className="h1 fade-up fade-up-2 mt-[18px] text-cream-50">
            {t.title}
          </h1>
          <p className="fade-up fade-up-3 mt-[22px] max-w-[36em] text-lg leading-[1.7] text-cream-200">
            {t.lead}
          </p>
          <div className="fade-up fade-up-4 mt-[34px] flex flex-wrap gap-2.5">
            {t.topics.map((c) => {
              const active = topic === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setTopic(c.id)}
                  aria-pressed={active}
                  className={
                    "rounded-full px-5 py-[9px] text-sm font-bold transition-colors " +
                    (active
                      ? "border border-amber-400 bg-amber-400 text-bark-900"
                      : "border border-cream-50/[0.18] text-cream-300 hover:border-amber-400/60 hover:text-amber-400")
                  }
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sarjanosto */}
      {showFeatured && featured && (
        <section className="px-5 pb-6 pt-10 md:px-10">
          <div className="container-narrow card-glow grid items-center gap-8 rounded-[20px] p-7 md:grid-cols-12 md:gap-11 md:p-10">
            <div className="md:col-span-7">
              <p className="eyebrow-sm">{featured.eyebrow}</p>
              <h2 className="mt-3 font-display text-[26px] font-semibold leading-[1.2] text-cream-50 md:text-[32px]">
                {featured.title}
              </h2>
              <p className="mt-3.5 text-base leading-[1.7] text-cream-300">
                {featured.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-[18px]">
                <Link href={featured.ctaHref} className="btn-primary-sm">
                  {featured.ctaLabel} <span aria-hidden>→</span>
                </Link>
                <span className="text-sm text-cream-400">{featured.meta}</span>
              </div>
            </div>
            {featured.covers.length >= 3 && (
              <div className="grid grid-cols-2 gap-3 md:col-span-5">
                <span className="relative col-span-2 block overflow-hidden rounded-xl" style={{ aspectRatio: "16/10" }}>
                  <Image src={featured.covers[0]} alt="" fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover" />
                </span>
                <span className="relative block overflow-hidden rounded-xl" style={{ aspectRatio: "16/10" }}>
                  <Image src={featured.covers[1]} alt="" fill sizes="210px" className="object-cover" />
                </span>
                <span className="relative block overflow-hidden rounded-xl" style={{ aspectRatio: "16/10" }}>
                  <Image src={featured.covers[2]} alt="" fill sizes="210px" className="object-cover" />
                </span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Korttigrid */}
      <section className="px-5 pb-20 pt-8 md:px-10">
        <div className="container-narrow">
          <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => {
              const inner = (
                <>
                  <span className="relative block bg-bark-900">
                    {p.cover ? (
                      <span className="relative block" style={{ aspectRatio: "16/9" }}>
                        <Image
                          src={p.cover}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 100vw, 360px"
                          className={
                            "object-cover " + (p.upcoming ? "opacity-45" : "")
                          }
                        />
                      </span>
                    ) : (
                      <span
                        aria-hidden
                        className="block"
                        style={{
                          aspectRatio: "16/9",
                          background:
                            "linear-gradient(150deg, rgba(224,164,88,0.16), #241d18 70%)",
                        }}
                      />
                    )}
                    {p.upcoming && (
                      <span className="absolute left-3 top-3 rounded-full border border-amber-400/40 bg-bark-900/85 px-3 py-1 text-[11.5px] font-bold uppercase tracking-[0.08em] text-amber-400">
                        {t.upcomingLabel}
                      </span>
                    )}
                  </span>
                  <span className="flex flex-1 flex-col p-[22px]">
                    <span className="block text-[11.5px] font-bold uppercase tracking-[0.11em] text-amber-400">
                      {p.kicker}
                    </span>
                    <span className="mt-2.5 block font-display text-[19px] font-semibold leading-[1.35] text-cream-50">
                      {p.title}
                    </span>
                    <span className="mt-2.5 block flex-1 text-sm leading-[1.6] text-cream-300">
                      {p.description}
                    </span>
                    <span className="mt-3.5 block text-[13px] text-cream-400">
                      {p.meta}
                    </span>
                  </span>
                </>
              );
              const cls =
                "flex flex-col overflow-hidden rounded-2xl border border-cream-50/[0.08] bg-bark-800 transition-[border-color,transform] duration-200";
              return p.upcoming ? (
                <div key={p.slug} className={cls}>
                  {inner}
                </div>
              ) : (
                <Link
                  key={p.slug}
                  href={p.href}
                  className={cls + " hover:-translate-y-[3px] hover:border-amber-400/45"}
                >
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA — taustalla ilmakuva Helsingistä (CC BY 4.0, attribuutio kortissa) */}
      <section className="px-5 pb-24 md:px-10">
        <div className="container-narrow relative overflow-hidden rounded-[20px] border border-amber-400/35 bg-bark-800">
          <Image
            src="/images/helsinki-ilmakuva.jpg"
            alt=""
            aria-hidden
            fill
            sizes="(max-width: 1200px) 100vw, 1120px"
            className="object-cover opacity-[0.22] saturate-[0.7]"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(26,21,18,0.92) 25%, rgba(26,21,18,0.55))",
            }}
          />
          <div className="relative flex flex-wrap items-center justify-between gap-8 p-7 md:p-10">
            <div>
              <h2 className="font-display text-[26px] font-semibold text-cream-50">
                {t.ctaTitle}
              </h2>
              <p className="mt-2.5 max-w-[36em] text-base leading-[1.65] text-cream-300">
                {t.ctaBody}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={t.ctaHref1} className="btn-primary-sm">
                {t.ctaBtn1} <span aria-hidden>→</span>
              </Link>
              <Link href={t.ctaHref2} className="btn-outline-sm">
                {t.ctaBtn2}
              </Link>
            </div>
          </div>
          <p className="absolute bottom-2 right-4 text-[10.5px] text-cream-400/60">
            {t.aerialCredit}
          </p>
        </div>
      </section>
    </>
  );
}
